import { Injectable } from "@angular/core";
import { Investimento } from "../models/investimento";
import { InvestimentoMock } from "../mocks/investimentoMock";

@Injectable({providedIn: "root"})
export class InvestimentosService {



    public getListaInvestimentos( filtro : string ) : Investimento[] {
        return InvestimentoMock;
    }


    public getTotalPrevisto() : number {
        let total = 0;

        InvestimentoMock.forEach(investimento => total += investimento.previsto);

        return total;

    }


    public getTotalHomologado() : number {
        let total = 0;

        InvestimentoMock.forEach(investimento => total += investimento.homologado);

        return total;

    }


    public getTotalAutorizado() : number {
        let total = 0;

        InvestimentoMock.forEach(investimento => total += investimento.autorizado);

        return total;

    }


    public getTotalDisponivel() : number {
        let total = 0;

        InvestimentoMock.forEach(investimento => total += investimento.disponivel);

        return total;

    }


}
