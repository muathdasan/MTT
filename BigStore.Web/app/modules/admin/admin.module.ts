import { NgModule, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { adminService } from './admin.service';
import { dashboard } from './views/dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        //SharedModule,BrowserModule
        FormsModule ,
        CommonModule,
        RouterModule.forChild([
            { path: 'dashboard', component: dashboard }
            //{ path: 'products', component: products }


            //{ path: 'product/:id',
            //  canActivate: [ ProductDetailGuard],
            //  component: ProductDetailComponent
            //}
        ]),
        ProductModule
    ],
    declarations: [
        dashboard,
    ],
    providers: [
        adminService,

    ],
    exports: [dashboard]
})
export class AdminModule { }

