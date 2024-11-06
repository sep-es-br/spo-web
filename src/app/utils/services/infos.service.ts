import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ObjetoDTO } from "../models/ObjetoDTO";

@Injectable({providedIn: "root"})
export class InfosService {

    private _http : HttpClient;

    constructor(http : HttpClient){
        this._http = http;
    }


    public getAllAnos() : Observable<string[]> {
        return this._http.get<string[]>(`${environment.apiUrl}/infos/allAnos`);;
    }

}