import { CommonModule } from "@angular/common";
import { Component, ElementRef, inject, OnInit, ViewChild } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { paginar } from "../utils/dataUtils";
import { IProfile } from "../utils/interfaces/profile.interface";
import { ProfileService } from "../utils/services/profile.service";
import { MenuComponent } from "../menu/menu.component";
import { SwipeDirective } from "../utils/directive/swipe.directive";

@Component({
    selector: 'spo-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    standalone: true,
    imports: [CommonModule, HeaderComponent, RouterOutlet, RouterModule, MenuComponent, SwipeDirective],
    hostDirectives: [SwipeDirective]
})
export class HomeComponent implements OnInit{
    
    @ViewChild('divMenu') private divMenuElem : ElementRef;

    user : IProfile;

    constructor(private readonly profile: ProfileService ){

    }

    mostrarMenu = () => {
        if(screen.width > 940) return;

        let divElem = this.divMenuElem.nativeElement as HTMLDivElement;

        divElem.style.transform = `translateX(0)`;
    }
    ocultarMenu = () =>  {
        if(screen.width > 940) return;

        this.divMenuElem.nativeElement.style.transform = '';

    }

    ngOnInit(): void {
        this.loadUser();
    }


    loadUser() : void {

        let userJson = sessionStorage.getItem('user-profile');

        if(userJson) {
            this.user = JSON.parse(userJson)
        } else {
            this.profile.getUserInfo().subscribe(value => {
                this.user = value
            });
        }

    }
}