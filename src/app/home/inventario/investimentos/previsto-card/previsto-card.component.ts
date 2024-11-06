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
export class PrevistoCardComponent implements AfterViewInit{
    
    valor : number = -1;

    @Input() parent! : InvestimentosComponent;

    constructor(private servico: InvestimentosService) {

    }

    ngAfterViewInit(): void {
        this.updateValores(this.parent.filtro.exercicio!)
    }

    updateValores(exercicio : string){
        this.servico.getTotalPrevisto(exercicio).subscribe(valor => this.valor = valor);
    }

}