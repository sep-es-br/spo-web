import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PrevistoCardComponent } from "./previsto-card/previsto-card.component";
import { HomologadoCardComponent } from "./homologado-card/homologado-card.component";
import { AutorizadoCardComponent } from "./autorizado-card/autorizado-card.component";
import { DisponivelCardComponent } from "./disponivel-card/disponivel-card.component";
import { InvestimentoFiltroComponent } from "./investimento-filtro/investimento-filtro.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InvestimentosService } from "../../../utils/services/investimentos.service";
import { Investimento } from "../../../utils/models/investimento";
import { CustomCurrencyPipe } from "../../../utils/pipes/customCurrency.pipe";

@Component({
    selector: 'spo-investimentos',
    templateUrl: './investimentos.component.html',
    styleUrl: './investimentos.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, ReactiveFormsModule, PrevistoCardComponent, HomologadoCardComponent, AutorizadoCardComponent, DisponivelCardComponent, InvestimentoFiltroComponent]
})
export class InvestimentosComponent {

    CLASS_DISPLAYLISTA = "displayLista";
    CLASS_DISPLAYGRADE = "displayGrade"

    txtBusca = new FormControl('');

    data : Investimento[];
    qtObjetos = 3;

    selectedDisplay : string = this.CLASS_DISPLAYLISTA

    constructor(private service: InvestimentosService) {
        this.txtBusca.valueChanges.subscribe(value => {
            this.data = this.service.getListaInvestimentos(value);
        })

        this.data = this.service.getListaInvestimentos(this.txtBusca.value);
    }
}