import { HttpClient } from "@angular/common/http";

import { ErrorHandlerService } from "./error-handler.service";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { CustoDTO } from "../models/CustoDTO";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: "root"})
export class CustoService {

    readonly custoUrl = `${environment.apiUrl}/custo`

    constructor(
        private http : HttpClient,
        private errorHandlerService : ErrorHandlerService
    ) {

    }

    public getAllByExercicio(exercicio : string) : Observable<CustoDTO[]>{
        return this.http.get<CustoDTO[]>(`${this.custoUrl}/all`, { params: {
            exercicio: exercicio
        }}).pipe(catchError(this.errorHandlerService.handleError))
    }
}