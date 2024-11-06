import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { InvestimentosComponent } from "../investimentos.component";
import { InfosService } from "../../../../utils/services/infos.service";
import { handleError } from "../../../../utils/ErrorHandler";
import { Router } from "@angular/router";
import { PlanoOrcamentarioService } from "../../../../utils/services/planoOrcamentario.service";
import { PlanoOrcamentarioDTO } from "../../../../utils/models/PlanoOrcamentarioDTO";
import { UnidadeOrcamentariaDTO } from "../../../../utils/models/UnidadeOrcamentariaDTO";
import { UnidadeOrcamentariaService } from "../../../../utils/services/unidadeOrcamentaria.service";

@Component({
    selector: 'spo-investimento-filtro',
    templateUrl: './investimento-filtro.component.html',
    styleUrl: './investimento-filtro.component.css',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
})
export class InvestimentoFiltroComponent {
    
    @Input('parent') parent! : InvestimentosComponent;

    anos! : string[];
    planos! : PlanoOrcamentarioDTO[];
    unidades! : UnidadeOrcamentariaDTO[]
    form! : FormGroup;

    constructor(private infosService: InfosService,
                private planoService: PlanoOrcamentarioService,
                private unidadeService: UnidadeOrcamentariaService,
            private router: Router
    ) {
        this.infosService.getAllAnos().subscribe({
            next: (anosList) => {
                this.anos = anosList

                this.form.get("exercicio")?.setValue(this.anos[0]);

            },
            error: (err) => handleError(err, this.router)
        })

        this.planoService.getAllPlanos().subscribe({
            next: (planoList) => {
                this.planos = planoList;

            }
        });

        this.unidadeService.getAllUnidadesOrcamentarias().subscribe({
            error: (err) => handleError(err, this.router),
            next: (unidadeList) => {
                this.unidades = unidadeList;

            }
        })


        this.form = new FormGroup({
            unidadeOrcamentariaControl: new FormControl(null),
            planoOrcamentarioControl: new FormControl(null),
            exercicio: new FormControl("")
        })

        
    }

    

}