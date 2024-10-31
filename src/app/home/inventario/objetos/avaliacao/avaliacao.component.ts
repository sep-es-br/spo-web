import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { paginar } from "../../../../utils/dataUtils";
import { Investimento } from "../../../../utils/models/investimento";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentoFiltroComponent } from "../../investimentos/investimento-filtro/investimento-filtro.component";
import { ObjetosService } from "../../../../utils/services/objetos.service";
import { ObjetoFiltroComponent } from "./objetos-filtro/objetos-filtro.component";
import { Objeto } from "../../../../utils/models/objeto";

@Component({
    selector: "spo-avaliacao",
    templateUrl: "./avaliacao.component.html",
    styleUrl: "./avaliacao.component.css",
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, ReactiveFormsModule, ObjetoFiltroComponent]
})
export class AvaliacaoComponent {

    txtBusca = new FormControl('');

    data : Objeto[][] = [];

    paginaAtual = 1;


    constructor(private service: ObjetosService) {
        this.txtBusca.valueChanges.subscribe(value => {
            if(value === null) return
            this.data = paginar(this.service.getListaObjetos(value), 15);
        })

        if(this.txtBusca.value === null) return
        this.data = paginar(this.service.getListaObjetos(this.txtBusca.value), 15);
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