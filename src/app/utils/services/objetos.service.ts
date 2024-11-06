import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ObjetoDTO } from "../models/ObjetoDTO";
import { Observable } from "rxjs/internal/Observable";
import { InvestimentoDTO } from "../models/InvestimentoDTO";
import { ObjetoFiltroDTO } from "../models/ObjetoFiltroDTO";

@Injectable({providedIn: "root"})
export class ObjetosService {

    private _http : HttpClient;

    constructor(http : HttpClient){
        this._http = http;
    }


    public getListaObjetos( filtro : ObjetoFiltroDTO ) : Observable<ObjetoDTO[]> {
        return this._http.get<ObjetoDTO[]>(`${environment.apiUrl}/objeto/all`, { params: {
            filtroJson: JSON.stringify(filtro)
        } });;
    }

}
