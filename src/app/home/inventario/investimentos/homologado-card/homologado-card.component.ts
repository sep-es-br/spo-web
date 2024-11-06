import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { InvestimentosComponent } from "../investimentos.component";

@Component({
    selector: 'spo-homologado-card',
    templateUrl: './homologado-card.component.html',
    styleUrl: './homologado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class HomologadoCardComponent{
    
    valor : number = -1;


    constructor(private servico : InvestimentosService) {

    }

    updateValor(exercicio : string) {
        this.servico.getTotalPrevisto(exercicio).subscribe(valor => this.valor = valor);
    }
}