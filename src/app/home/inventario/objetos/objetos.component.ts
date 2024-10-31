import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: 'spo-objetos',
    template: '<router-outlet></router-outlet>',
    standalone: true,
    imports: [CommonModule, RouterModule, RouterOutlet]
})
export class ObjetosComponent {}