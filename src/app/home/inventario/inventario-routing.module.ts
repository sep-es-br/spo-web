import { Route, RouterModule } from "@angular/router";
import { InvestimentosComponent } from "./investimentos/investimentos.component";
import { NgModule } from "@angular/core";

const routes : Route[] = [{
    path: '', pathMatch: "full", redirectTo: 'investimentos'
},{
    path: 'investimentos',
    component: InvestimentosComponent,
    data: {
        name: 'Investimentos'
    }
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventarioRoutingModule {}