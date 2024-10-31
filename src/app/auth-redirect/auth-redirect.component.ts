import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { tap } from 'rxjs/operators';
import { IProfile } from '../utils/interfaces/profile.interface';
import { ProfileService } from '../utils/services/profile.service';


@Component({
  selector: 'ngx-infoplan-auth-redirect',
  standalone: false,
  templateUrl: './auth-redirect.component.html',
})
export class AuthRedirectComponent {
  constructor(
    private _router: Router,
    private _profileService: ProfileService
  ) {
    const tokenQueryParamMap =
      this._router.getCurrentNavigation()?.initialUrl.queryParamMap;

    if (tokenQueryParamMap?.has('token')) {
      sessionStorage.setItem(
        'token',
        atob(tokenQueryParamMap.get('token') as string)
      );
    }

    this._profileService
      .getUserInfo()
      .pipe(
        tap((response: IProfile) => {
          const infoplanToken = response.token;

          sessionStorage.setItem('token', infoplanToken);
        }),
        tap((response: IProfile) => {
          const userProfile = {
            name: response.name,
            email: response.email,
            role: response.role,
          };

          sessionStorage.setItem('user-profile', JSON.stringify(userProfile));
          this._router.navigate(['home']);
        }),
      )
      .subscribe();
  }
}
