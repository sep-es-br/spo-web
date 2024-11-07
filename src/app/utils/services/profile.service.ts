import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProfile } from '../interfaces/profile.interface';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _url = `${environment.apiUrl}/signin/user-info`;
  private _sessionProfileSubject = new BehaviorSubject<IProfile>({token:"", name:"", email:"", role:[]});
  public sessionProfile$ = this._sessionProfileSubject.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
  ) { }

  public getUserInfo(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this._url}`).pipe(
      catchError(this.errorHandlerService.handleError)
    );
  }
}
