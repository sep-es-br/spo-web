import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ObjetoDTO } from "../models/ObjetoDTO";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn: "root"})
export class ObjetosService {

    private _http : HttpClient;

    constructor(http : HttpClient){
        this._http = http;
    }


    public getListaObjetos( filtro : string ) : Observable<ObjetoDTO[]> {
        return this._http.get<ObjetoDTO[]>(`${environment.apiUrl}/investimento/all`);;
    }

}
