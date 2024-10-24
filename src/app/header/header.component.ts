import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BreadCrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { breadCrumbNames } from "./breadcrumb/breadCrumb-data";

@Component({
    selector: 'spo-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css',
    standalone: true,
    imports: [CommonModule, BreadCrumbComponent]
})
export class HeaderComponent {
    title = 'Investimentoss'
    userName = 'Diego Gaede'
    userEmail = 'diego.gaede@sep.es.gov.br'
    profileImg = 'assets/img/placeHolder.jpg';


    

    constructor(private route : ActivatedRoute, private router : Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let activeRouter = this.route.snapshot;
                while (activeRouter.children.length > 0) {
                    activeRouter = activeRouter.firstChild;
                }
                
                this.title = activeRouter.data['name'] ? activeRouter.data['name'] :
                 (breadCrumbNames[String(activeRouter.url)] ? breadCrumbNames[String(activeRouter.url)] :
                  String(activeRouter.url) );
            }
        })

    }
}