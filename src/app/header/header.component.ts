import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { BreadCrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { breadCrumbNames } from "./breadcrumb/breadCrumb-data";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'spo-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    standalone: true,
    imports: [CommonModule, BreadCrumbComponent]
})
export class HeaderComponent implements OnInit {

    @ViewChild('imgProfile') private profileImgDiv : ElementRef | undefined;

    title = '';
    userName : string | undefined = 'Diego Gaede'
    userEmail : string | undefined = 'diego.gaede@sep.es.gov.br'
    iniciais : string | undefined = 'DG';

    @Input() home : HomeComponent | undefined;

    constructor(private route : ActivatedRoute, private router : Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let activeRouter = this.route.snapshot;
                while (activeRouter.children.length > 0) {
                    activeRouter = activeRouter.firstChild ? activeRouter.firstChild : activeRouter;
                }
                
                this.title = breadCrumbNames[String(activeRouter.url)] ? breadCrumbNames[String(activeRouter.url)] :
                  String(activeRouter.url) ;
            }
        })

    }

    ngOnInit(): void {
        if(this.home) {
            this.userName = this.home.user?.name;
            this.userEmail = this.home.user?.email;
            this.iniciais = this.home.user?.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
        }


    }

    loadProfileImage() {
        if(!this.profileImgDiv) return;

        let savedImage = undefined;

        if(savedImage) {
            // carregar imagem salva
        } else {
            const _imgProfileDiv : HTMLDivElement = this.profileImgDiv.nativeElement as HTMLDivElement;

            _imgProfileDiv.textContent = "teste"

        }

    }
}