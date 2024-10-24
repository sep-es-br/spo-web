import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";

@Component({
    selector: 'spo-previsto-card',
    templateUrl: './previsto-card.component.html',
    styleUrl: './previsto-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class PrevistoCardComponent {
    
    valor : number;

    constructor(private servico: InvestimentosService) {
        this.valor = this.servico.getTotalPrevisto();
    }

}