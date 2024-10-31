import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PrevistoCardComponent } from "./previsto-card/previsto-card.component";
import { HomologadoCardComponent } from "./homologado-card/homologado-card.component";
import { AutorizadoCardComponent } from "./autorizado-card/autorizado-card.component";
import { DisponivelCardComponent } from "./disponivel-card/disponivel-card.component";
import { InvestimentoFiltroComponent } from "./investimento-filtro/investimento-filtro.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InvestimentosService } from "../../../utils/services/investimentos.service";
import { Investimento } from "../../../utils/models/investimento";
import { CustomCurrencyPipe } from "../../../utils/pipes/customCurrency.pipe";
import { RouterLink } from "@angular/router";
import { paginar } from "../../../utils/dataUtils";
import { ObjetosService } from "../../../utils/services/objetos.service";

@Component({
    selector: 'spo-investimentos',
    templateUrl: './investimentos.component.html',
    styleUrl: './investimentos.component.css',
    standalone: true,
    imports: [CommonModule, RouterLink, CustomCurrencyPipe, ReactiveFormsModule, PrevistoCardComponent, HomologadoCardComponent, AutorizadoCardComponent, DisponivelCardComponent, InvestimentoFiltroComponent]
})
export class InvestimentosComponent implements OnInit {

    CLASS_DISPLAYLISTA = "displayLista";
    CLASS_DISPLAYGRADE = "displayGrade"

    txtBusca = new FormControl('');

    data : Investimento[][] = [];
    qtObjetos = 0;

    paginaAtual = 1;

    selectedDisplay : string = this.CLASS_DISPLAYLISTA

    constructor(private service: InvestimentosService,
                private objService: ObjetosService
    ) {
        
    }

    ngOnInit(): void {
        this.txtBusca.valueChanges.subscribe(value => {
            if(value === null) return
            this.data = paginar(this.service.getListaInvestimentos(value), 15);
        })
        if(this.txtBusca.value === null) return
        this.data = paginar(this.service.getListaInvestimentos(this.txtBusca.value), 15);
        this.qtObjetos = this.objService.getListaObjetos('').length;
    }


    qtInvestimento() : number{
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