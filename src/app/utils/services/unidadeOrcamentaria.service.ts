import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PlanoOrcamentarioDTO } from "../models/PlanoOrcamentarioDTO";
import { UnidadeOrcamentariaDTO } from "../models/UnidadeOrcamentariaDTO";

@Injectable({providedIn: "root"})
export class UnidadeOrcamentariaService {

    private _http : HttpClient;

    constructor(http : HttpClient){
        this._http = http;
    }


    public getAllUnidadesOrcamentarias(  ) : Observable<UnidadeOrcamentariaDTO[]> {
        return this._http.get<UnidadeOrcamentariaDTO[]>(`${environment.apiUrl}/unidade/all`);;
    }

}