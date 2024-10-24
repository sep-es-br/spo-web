import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'spo-inventario',
    template: '<router-outlet></router-outlet>',
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class InventarioComponent {

}