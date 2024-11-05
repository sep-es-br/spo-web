import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http"
import { Router } from "@angular/router"

export const handleError = (err: any, router : Router) => {
    console.log(err.error.erros)
    if(err.error.status = HttpStatusCode.Unauthorized)
        router.navigate(['login'])
    if(err.error.status = HttpStatusCode.Forbidden)
        router.navigate(['login'])
}