import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";

@Component({
    selector: 'spo-homologado-card',
    templateUrl: './homologado-card.component.html',
    styleUrl: './homologado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class HomologadoCardComponent {
    valor : number;

    constructor(private servico : InvestimentosService) {
        this.valor = servico.getTotalHomologado();
    }
}