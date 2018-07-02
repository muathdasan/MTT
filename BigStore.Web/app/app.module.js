"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_1 = require("./index");
///* Feature Modules */
var product_module_1 = require("./modules/product/product.module");
var Category_module_1 = require("./modules/Category/Category.module");
var order_module_1 = require("./modules/order/order.module");
var registration_module_1 = require("./modules/registration/registration.module");
var admin_module_1 = require("./modules/admin/admin.module");
var shared_module_1 = require("./modules/shared/shared.module");
var common_1 = require("@angular/common");
var loggedIn_guard_1 = require("./modules/registration/loggedIn.guard");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'contact', component: index_1.ContactComponent },
    {
        path: 'storeManager', component: index_1.storeManager,
        children: [
            { path: 'dashboard', component: index_1.HomeComponent }
            ///:mode
        ],
        canActivate: [loggedIn_guard_1.LoggedInGuard]
        //{ path: 'dashboard', component: dashboard, outlet: "test" }
    }
    //{ path: 'about', component: AboutComponent },
    //{ path: 'contact', component: ContactComponent },
    //{ path: 'contactus', redirectTo: 'contact' },
];
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
        AppModule_1.injector = injector;
    }
    AppModule_1 = AppModule;
    var AppModule_1;
    AppModule = AppModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes),
                product_module_1.ProductModule,
                Category_module_1.CategoryModule,
                order_module_1.OrderModule,
                registration_module_1.RegistrationModule,
                admin_module_1.AdminModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                index_1.AppComponent,
                index_1.HomeComponent,
                index_1.ContactComponent,
                index_1.storeManager,
                index_1.Header,
                index_1.Advertising,
                index_1.Footer,
                index_1.ContentTop,
                index_1.Cart
            ],
            bootstrap: [index_1.AppComponent],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/BigStore.Web/' },
                loggedIn_guard_1.LoggedInGuard,
            ]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map