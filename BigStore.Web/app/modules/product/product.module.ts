import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule  ,ReactiveFormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';  
 
import { products, productadd, productedit, specialOffers, productList, productService} from './index'
 
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({

    declarations: [productList, specialOffers,products,productadd, productedit],
    imports: [FormsModule, CommonModule, SharedModule,
        RouterModule.forChild([
            { path: 'productList', component: productList },
            { path: 'productadd', component: productadd },
            { path: 'products', component: products }, 
            { path: 'specialoffers', component: specialOffers } 

        ])
    ], 
    providers: [
        productService

    ],
    exports: [productList, specialOffers, products, productadd, productedit]
})
export class ProductModule { }
