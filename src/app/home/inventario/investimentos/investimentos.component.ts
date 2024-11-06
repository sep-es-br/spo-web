import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ErrorHandler, OnInit, ViewChild } from "@angular/core";
import { PrevistoCardComponent } from "./previsto-card/previsto-card.component";
import { HomologadoCardComponent } from "./homologado-card/homologado-card.component";
import { AutorizadoCardComponent } from "./autorizado-card/autorizado-card.component";
import { DisponivelCardComponent } from "./disponivel-card/disponivel-card.component";
import { InvestimentoFiltroComponent } from "./investimento-filtro/investimento-filtro.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InvestimentosService } from "../../../utils/services/investimentos.service";
import { CustomCurrencyPipe } from "../../../utils/pipes/customCurrency.pipe";
import { Router, RouterLink } from "@angular/router";
import { paginar } from "../../../utils/dataUtils";
import { ObjetosService } from "../../../utils/services/objetos.service";
import { InvestimentoDTO } from "../../../utils/models/InvestimentoDTO";
import { ShortStringPipe } from "../../../utils/pipes/shortString.pipe";
import { TiraInvestimentoComponent } from "../../../utils/components/tira-investimento/tira-investimento.component";
import { InvestimentoFiltroDTO } from "../../../utils/models/InvestimentoFiltroDTO";
import { ObjetoFiltroDTO } from "../../../utils/models/ObjetoFiltroDTO";
import { handleError } from "../../../utils/ErrorHandler";

@Component({
    selector: 'spo-investimentos',
    templateUrl: './investimentos.component.html',
    styleUrl: './investimentos.component.scss',
    standalone: true,
    imports: [CommonModule, TiraInvestimentoComponent, RouterLink, CustomCurrencyPipe, ShortStringPipe, ReactiveFormsModule, PrevistoCardComponent, HomologadoCardComponent, AutorizadoCardComponent, DisponivelCardComponent, InvestimentoFiltroComponent]
})
export class InvestimentosComponent implements AfterViewInit {

    CLASS_DISPLAYLISTA = "displayLista";
    CLASS_DISPLAYGRADE = "displayGrade";

    @ViewChild(InvestimentoFiltroComponent) filtroComponent! : InvestimentoFiltroComponent;
    @ViewChild(PrevistoCardComponent) previstoCardComponent! : PrevistoCardComponent;
    @ViewChild(HomologadoCardComponent) homologadoCardComponent! : HomologadoCardComponent;

    filtro : InvestimentoFiltroDTO = { };

    txtBusca = new FormControl('');

    data : InvestimentoDTO[][] = [];
    qtObjetos = 0;

    paginaAtual = 1;

    selectedDisplay : string = this.CLASS_DISPLAYLISTA

    constructor(private service: InvestimentosService,
                private objService: ObjetosService,
                private router: Router
    ) {
        
    }

    ngAfterViewInit(): void {
        this.txtBusca.valueChanges.subscribe(value => this.updateFiltro() )
        this.filtroComponent.form.valueChanges.subscribe(value => this.updateFiltro())

        let objetoFiltro : ObjetoFiltroDTO = {
            exercicio: this.filtroComponent.form.get("exercicio")?.value
        }

        this.objService.getListaObjetos(objetoFiltro).subscribe({
            next: (objs) => {
                this.qtObjetos = objs.length;
            },  
            error: (err) => handleError(err, this.router)
        });

    }

    updateFiltro(){
        this.filtro.exercicio = this.filtroComponent.form.get("exercicio")?.value;
        this.filtro.codPO = this.filtroComponent.form.get("planoOrcamentarioControl")?.value;
        this.filtro.codUnidade = this.filtroComponent.form.get("unidadeOrcamentariaControl")?.value;
        this.filtro.nome = this.txtBusca.value;

        this.recarregarLista();
    }

    recarregarLista() {
        this.service.getListaInvestimentos(this.filtro).subscribe({
            next: (invs) => {
                this.data = paginar(invs, 15);
            },
            error: (err) =>{
                console.log(err.error.erros)
            }
        });
        
        this.previstoCardComponent.updateValores(this.filtro.exercicio!);
        this.homologadoCardComponent.updateValor(this.filtro.exercicio!);
    }


    qtInvestimento() : number{
        let soma = 0;

        this.data.forEach(arr => soma += arr.length);

        return soma
    }

    voltaUmaPagina() {
        if(this.paginaAtual > 1)
            this.paginaAtual--
    }

    avancarUmaPagina() {
        if(this.paginaAtual < this.data.length)
            this.paginaAtual++
    }
}