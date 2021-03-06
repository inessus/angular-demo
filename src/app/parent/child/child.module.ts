import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChildComponent} from "./child.component";
import {RouterModule, Routes} from "@angular/router";
const cRoutes: Routes = [
    {
        path: '',
        component: ChildComponent,
    },
    {
        path: 'security',
        loadChildren: './a-security/security.module#SecurityModule'
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(cRoutes)
    ],
    declarations: [ChildComponent]
})
export class ChildModule {
}
