"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { ProductListComponent } from './product-list.component';
//import { ProductDetailComponent } from './product-detail.component';
//import { ProductDetailGuard } from './product-guard.service';
//import { ProductFilterPipe } from './product-filter.pipe';
var product_service_1 = require("./product.service");
var productlist_1 = require("./views/productlist");
//import { SharedModule } from '../shared/shared.module';
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                //SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: productlist_1.productList }
                    //{ path: 'product/:id',
                    //  canActivate: [ ProductDetailGuard],
                    //  component: ProductDetailComponent
                    //}
                ])
            ],
            declarations: [
                productlist_1.productList
                //ProductDetailComponent,
                //ProductFilterPipe
            ],
            providers: [
                product_service_1.productService,
            ],
            exports: [productlist_1.productList]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=categorySidebar.module.js.map