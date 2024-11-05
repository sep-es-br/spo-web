import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { InvestimentoDTO } from "../models/InvestimentoDTO";
import { InvestimentoFiltroDTO } from "../models/InvestimentoFiltroDTO";

@Injectable({providedIn: "root"})
export class InvestimentosService {

    private _http : HttpClient;



    constructor(http : HttpClient){
        this._http = http;
    }

    public getListaInvestimentos( filtro : InvestimentoFiltroDTO ) : Observable<InvestimentoDTO[]> {
        return this._http.get<InvestimentoDTO[]>(`${environment.apiUrl}/investimento/all`);
    }


    public getTotalPrevisto() : Observable<number> {
        
        return this._http.get<number>(`${environment.apiUrl}/custo/totalPrevisto`)

    }


    public getTotalHomologado() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalHomologado`)

    }


    public getTotalAutorizado() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalAutorizado`)

    }


    public getTotalDisponivel() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalDisponivel`)

    }


}
