import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { environment } from "../../environments/environment";

@Component({
    selector: "spo-em-construcao",
    templateUrl: "./em-construcao.component.html",
    styleUrl: "./em-construcao.component.css",
    standalone: true,
    imports: [CommonModule]
})
export class EmConstrucaoComponent {


    constructor(private http : HttpClient) {
        this.http.put<String>(`${environment.apiUrl}/controler/gerarDB`, null).subscribe({
            next: (resp => console.log(resp)),
            error: (err) => console.log(err)
        })
    }
}