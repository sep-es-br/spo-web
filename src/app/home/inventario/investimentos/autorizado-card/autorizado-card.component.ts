import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CustomCurrencyPipe } from "../../../../utils/pipes/customCurrency.pipe";
import { InvestimentosService } from "../../../../utils/services/investimentos.service";
import { Router } from "@angular/router";

@Component({
    selector: 'spo-autorizado-card',
    templateUrl: './autorizado-card.component.html',
    styleUrl: './autorizado-card.component.css',
    standalone: true,
    imports: [CommonModule, CustomCurrencyPipe]
})
export class AutorizadoCardComponent {
    valor : number = -1;

    constructor(private servico: InvestimentosService, private router: Router) {
        this.servico.getTotalAutorizado().subscribe(
            {
                next : (valor) => {
                    this.setValor(valor)
                },
                error(err) {
                    console.log(err.error.erros[0])
                    router.navigate(['login'])
                },
            })
    }

    setValor(valor : number) {
        this.valor = valor;
    }
}

