import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { Router } from "@angular/router";
import { NumeroResumidoPipe } from "../../../../utils/pipes/numero-resumido.pipe";

@Component({
    selector: 'spo-autorizado-card',
    templateUrl: './autorizado-card.component.html',
    styleUrl: './autorizado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, NumeroResumidoPipe]
})
export class AutorizadoCardComponent {
    
    @Input() public valor : number = -1;

}

