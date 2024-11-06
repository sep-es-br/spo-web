import { Observable } from "rxjs/internal/Observable";
import { PlanoOrcamentarioDTO } from "../models/PlanoOrcamentarioDTO";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: "root"})
export class PlanoOrcamentarioService {

    private _http : HttpClient;

    constructor(http : HttpClient){
        this._http = http;
    }


    public getAllPlanos(  ) : Observable<PlanoOrcamentarioDTO[]> {
        return this._http.get<PlanoOrcamentarioDTO[]>(`${environment.apiUrl}/plano/all`);;
    }

}
