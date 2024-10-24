import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";

@Component({
    selector: 'spo-autorizado-card',
    templateUrl: './autorizado-card.component.html',
    styleUrl: './autorizado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class AutorizadoCardComponent {
    valor : number;

    constructor(private servico: InvestimentosService) {
        this.valor = servico.getTotalAutorizado();
    }
}

