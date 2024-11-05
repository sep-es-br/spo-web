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
    valor : number = -1;

    constructor(private servico : InvestimentosService) {
        servico.getTotalDisponivel().subscribe(valor => this.valor = valor);
    }
}