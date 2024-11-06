import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { InvestimentosComponent } from "../investimentos.component";

@Component({
    selector: 'spo-previsto-card',
    templateUrl: './previsto-card.component.html',
    styleUrl: './previsto-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class PrevistoCardComponent {
    
    valor : number = -1;

    constructor(private servico: InvestimentosService) {

    }

    updateValores(exercicio : string){
        this.servico.getTotalPrevisto(exercicio).subscribe(valor => this.valor = valor);
    }

}