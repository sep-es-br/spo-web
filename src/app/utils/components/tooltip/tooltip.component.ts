import { Component, Input } from "@angular/core";
import { NumeroResumidoPipe } from "../../pipes/numero-resumido.pipe";

@Component({
    selector: 'spo-tooltip',
    template: '<span [title]="valor">{{valor | numeroResumido}}</span>',
    standalone: true,
    imports: [NumeroResumidoPipe]
})
export class TooltipComponent {
    @Input() public valor! : number;
}