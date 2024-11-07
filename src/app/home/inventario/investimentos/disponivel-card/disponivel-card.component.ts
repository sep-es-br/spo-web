import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { NumeroResumidoPipe } from "../../../../utils/pipes/numero-resumido.pipe";

@Component({
    selector: 'spo-disponivel-card',
    templateUrl: './disponivel-card.component.html',
    styleUrl: './disponivel-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, NumeroResumidoPipe]
})
export class DisponivelCardComponent {
    @Input() public valor : number = -1;

}