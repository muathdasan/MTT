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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var index_1 = require("./index");
var shared_module_1 = require("../../modules/shared/shared.module");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [index_1.productList, index_1.specialOffers, index_1.products, index_1.productadd, index_1.productedit],
            imports: [forms_1.FormsModule, common_1.CommonModule, shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    { path: 'productList', component: index_1.productList },
                    { path: 'productadd', component: index_1.productadd },
                    { path: 'products', component: index_1.products },
                    { path: 'specialoffers', component: index_1.specialOffers }
                ])
            ],
            providers: [
                index_1.productService
            ],
            exports: [index_1.productList, index_1.specialOffers, index_1.products, index_1.productadd, index_1.productedit]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map