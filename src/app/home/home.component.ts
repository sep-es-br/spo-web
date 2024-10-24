import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: 'spo-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    standalone: true,
    imports: [CommonModule, HeaderComponent, RouterOutlet, RouterModule]
})
export class HomeComponent {

}