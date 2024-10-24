import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'spo-investimento-filtro',
    templateUrl: './investimento-filtro.component.html',
    styleUrl: './investimento-filtro.component.css',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class InvestimentoFiltroComponent {
    
    form = new FormGroup({
        unidadeOrcamentariaControl: new FormControl(""),
        planoOrcamentarioControl: new FormControl(""),
        exercicio: new FormControl("")
    })

}