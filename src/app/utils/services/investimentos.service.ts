import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, Observable, throwError } from "rxjs";
import { InvestimentoDTO } from "../models/InvestimentoDTO";
import { InvestimentoFiltroDTO } from "../models/InvestimentoFiltroDTO";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({providedIn: "root"})
export class InvestimentosService {

    private _http : HttpClient;
    private _errorHandlerService: ErrorHandlerService;



    constructor(http : HttpClient, errorHandlerService: ErrorHandlerService){
        this._http = http;
        this._errorHandlerService = errorHandlerService;
    }

    public getListaInvestimentos( filtro : InvestimentoFiltroDTO ) : Observable<InvestimentoDTO[]> {
        return this._http.get<InvestimentoDTO[]>(`${environment.apiUrl}/investimento/all`,
             {params: {filtroJson: JSON.stringify(filtro)}});
    }


    public getTotalPrevisto(ano : string) : Observable<number> {
        
        return this._http.get<number>(`${environment.apiUrl}/custo/totalPrevisto`, {params: {
            exercicio: ano
        }})

    }


    public getTotalHomologado(ano : string) : Observable<number> {
          
        const totalHomologadoUrl = `${environment.apiUrl}/custo/totalPrevisto`;

        return this._http.get<number>(totalHomologadoUrl, {params: {
            exercicio: ano
        }}).pipe(
            catchError((err: HttpErrorResponse) => {
            this._errorHandlerService.handleError(err);
            return throwError(() => err);
          }))

    }


    public getTotalAutorizado() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalAutorizado`).pipe(
            catchError((err: HttpErrorResponse) => {
            this._errorHandlerService.handleError(err);
            return throwError(() => err);
          }))

    }


    public getTotalDisponivel() : Observable<number> {
        return this._http.get<number>(`${environment.apiUrl}/custo/totalDisponivel`).pipe(
            catchError((err: HttpErrorResponse) => {
            this._errorHandlerService.handleError(err);
            return throwError(() => err);
          }))

    }


}
