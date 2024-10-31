import { Injectable } from "@angular/core";
import { InvestimentoMock } from "../mocks/investimentoMock";
import { ObjetosMock } from "../mocks/objetosMock";
import { Objeto } from "../models/objeto";

@Injectable({providedIn: "root"})
export class ObjetosService {



    public getListaObjetos( filtro : string ) : Objeto[] {
        return ObjetosMock;
    }

}
