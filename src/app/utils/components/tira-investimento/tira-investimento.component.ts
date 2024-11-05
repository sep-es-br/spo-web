import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { InvestimentoDTO } from "../../models/InvestimentoDTO";
import { ShortStringPipe } from "../../pipes/shortString.pipe";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CustomCurrencyPipe } from "../../pipes/customCurrency.pipe";
import { TiraObjetoComponent } from "../tira-objeto/tira-objeto.component";

@Component({
    selector: 'spo-tira-investimento',
    templateUrl: './tira-investimento.component.html',
    styleUrl: './tira-investimento.component.scss',
    standalone: true,
    imports: [CommonModule, ShortStringPipe, FontAwesomeModule, CustomCurrencyPipe, TiraObjetoComponent]
})
export class TiraInvestimentoComponent implements AfterViewInit {

    toggleSeta = faAngleRight;
    toggleSetaAtivo = faAngleDown;

    aberto : boolean = false;

    @ViewChild('objLista') objListaElem! : HTMLDivElement;

    @Input() investimento! : InvestimentoDTO;

    ngAfterViewInit(): void {
        
    }

}