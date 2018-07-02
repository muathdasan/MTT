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
var common_1 = require("@angular/common");
var product_module_1 = require("../product/product.module");
var admin_service_1 = require("./admin.service");
var dashboard_1 = require("./views/dashboard");
var forms_1 = require("@angular/forms");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                //SharedModule,BrowserModule
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'dashboard', component: dashboard_1.dashboard }
                    //{ path: 'products', component: products }
                    //{ path: 'product/:id',
                    //  canActivate: [ ProductDetailGuard],
                    //  component: ProductDetailComponent
                    //}
                ]),
                product_module_1.ProductModule
            ],
            declarations: [
                dashboard_1.dashboard,
            ],
            providers: [
                admin_service_1.adminService,
            ],
            exports: [dashboard_1.dashboard]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map