import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { InvestimentosComponent } from "../investimentos.component";
import { NumeroResumidoPipe } from "../../../../utils/pipes/numero-resumido.pipe";

@Component({
    selector: 'spo-homologado-card',
    templateUrl: './homologado-card.component.html',
    styleUrl: './homologado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe, NumeroResumidoPipe]
})
export class HomologadoCardComponent{
    
    @Input() public valor : number = -1;


}