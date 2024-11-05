import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { paginar } from "../../../../utils/dataUtils";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { ObjetosService } from "../../../../utils/services/objetos.service";
import { ObjetoFiltroComponent } from "./objetos-filtro/objetos-filtro.component";
import { handleError } from "../../../../utils/ErrorHandler";
import { Router } from "@angular/router";
import { ObjetoDTO } from "../../../../utils/models/ObjetoDTO";
import { TiraObjetoComponent } from "../../../../utils/components/tira-objeto/tira-objeto.component";

@Component({
    selector: "spo-avaliacao",
    templateUrl: "./avaliacao.component.html",
    styleUrl: "./avaliacao.component.css",
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, ReactiveFormsModule, ObjetoFiltroComponent, TiraObjetoComponent]
})
export class AvaliacaoComponent {

    txtBusca = new FormControl('');

    data : ObjetoDTO[][] = [];

    paginaAtual = 1;


    constructor(private service: ObjetosService, private router : Router) {
        this.txtBusca.valueChanges.subscribe(value => {
            this.carregarLista(value);
        })

        this.carregarLista(this.txtBusca.value);
    }

    carregarLista(filtro:string | null) {
        if(filtro === null) return
        this.service.getListaObjetos(filtro).subscribe({
            next: (objs) => {
                this.data = paginar(objs, 15);
            },
            error: (err) => handleError(err, this.router)

        });
    }

    qtObjetos() : number{
        let soma = 0;

        this.data.forEach(arr => soma += arr.length);

        return soma
    }

    voltaUmaPagina() {
        if(this.paginaAtual > 1)
            this.paginaAtual--
    }

    avancarUmaPagina() {
        if(this.paginaAtual < this.data.length)
            this.paginaAtual++
    }
}