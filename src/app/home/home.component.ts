import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { paginar } from "../utils/dataUtils";
import { IProfile } from "../utils/interfaces/profile.interface";
import { ProfileService } from "../utils/services/profile.service";

@Component({
    selector: 'spo-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    standalone: true,
    imports: [CommonModule, HeaderComponent, RouterOutlet, RouterModule]
})
export class HomeComponent implements OnInit{

    @ViewChild(HeaderComponent) private headerElem : HeaderComponent | undefined;

    private readonly _profile : ProfileService = inject(ProfileService);

    user : IProfile | undefined = undefined;

    ngOnInit(): void {
        this.loadUser();
    }


    loadUser() : void {

        let userJson = sessionStorage.getItem('user-profile');

        if(userJson) {
            this.user = JSON.parse(userJson)
            this.headerElem?.loadProfileImage();
        } else {
            this._profile.getUserInfo().subscribe(value => {
                this.user = value
                
                this.headerElem?.loadProfileImage();
            });
        }

    }
}