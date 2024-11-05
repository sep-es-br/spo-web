import { Injectable } from "@angular/core";
import { Investimento } from "../models/investimento";
import { InvestimentoMock } from "../mocks/investimentoMock";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class InvestimentosService {

    private _http : HttpClient;



    constructor(http : HttpClient){
        this._http = http;
    }

    public getListaInvestimentos( filtro : string ) : Investimento[] {
        return InvestimentoMock;
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
