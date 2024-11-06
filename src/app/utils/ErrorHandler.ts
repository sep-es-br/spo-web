import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http"
import { Router } from "@angular/router"

export const handleError = (err: any, router : Router) => {
    console.log(err.error.erros)
    if(err.error.codigo === HttpStatusCode.Unauthorized)
        router.navigateByUrl('login')
    if(err.error.codigo === HttpStatusCode.Forbidden)
        router.navigateByUrl('login')
}