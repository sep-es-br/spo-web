import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'spo-objeto-filtro',
    templateUrl: './objetos-filtro.component.html',
    styleUrl: './objetos-filtro.component.css',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class ObjetoFiltroComponent {
    
    form = new FormGroup({
        unidadeOrcamentariaControl: new FormControl(""),
        statusControl: new FormControl(""),
        exercicio: new FormControl("2024")
    })

}