import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";

@Component({
    selector: 'spo-disponivel-card',
    templateUrl: './disponivel-card.component.html',
    styleUrl: './disponivel-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class DisponivelCardComponent {
    valor : number = 4368956178.51;

    constructor(private servico : InvestimentosService) {
        this.valor = servico.getTotalDisponivel();
    }
}