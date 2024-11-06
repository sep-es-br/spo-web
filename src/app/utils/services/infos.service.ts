import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { ObjetoDTO } from "../models/ObjetoDTO";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({providedIn: "root"})
export class InfosService {

    
    private _http : HttpClient;
    private _errorHandlerService: ErrorHandlerService;



    constructor(http : HttpClient, errorHandlerService: ErrorHandlerService){
        this._http = http;
        this._errorHandlerService = errorHandlerService;
    }


    public getAllAnos() : Observable<string[]> {
        return this._http.get<string[]>(`${environment.apiUrl}/infos/allAnos`).pipe(
            catchError((err: HttpErrorResponse) => {
            this._errorHandlerService.handleError(err);
            return throwError(() => err);
          }));
    }

}