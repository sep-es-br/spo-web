import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { InvestimentosComponent } from "../investimentos.component";
import { NumeroResumidoPipe } from "../../../../utils/pipes/numero-resumido.pipe";

@Component({
    selector: 'spo-previsto-card',
    templateUrl: './previsto-card.component.html',
    styleUrl: './previsto-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, NumeroResumidoPipe]
})
export class PrevistoCardComponent {
    
    @Input() public valor : number = -1;


}