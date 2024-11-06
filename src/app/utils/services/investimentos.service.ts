import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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
        return this._http.get<InvestimentoDTO[]>(`${environment.apiUrl}/investimento/all`,
             {params: {filtroJson: JSON.stringify(filtro)}});
    }


    public getTotalPrevisto(ano : string) : Observable<number> {
        
        const totalPrevistoUrl = `${environment.apiUrl}/custo/totalPrevisto`;


        return this._http.get<number>(totalPrevistoUrl, {params: {
            exercicio: ano
        }})

    }


    public getTotalHomologado(ano : string) : Observable<number> {
          
        const totalHomologadoUrl = `${environment.apiUrl}/custo/totalPrevisto`;

        return this._http.get<number>(totalHomologadoUrl, {params: {
            exercicio: ano
        }})

    }


    public getTotalAutorizado() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalAutorizado`)

    }


    public getTotalDisponivel() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalDisponivel`)

    }


}
