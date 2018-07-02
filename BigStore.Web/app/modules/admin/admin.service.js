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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var adminService = /** @class */ (function () {
    function adminService(_http) {
        this._http = _http;
        this._productUrl = 'api/category/category.json';
        this._categoryUrl = 'api/category';
    }
    adminService.prototype.getcategories = function () {
        return this._http.get("http://localhost/BigStore.Rest/api/category/getallcategories")
            //this._http.get(`${this._productUrl}getallproducts`)
            .map(function (response) { return response.json(); })
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //});
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    adminService.prototype.totaloforders = function () {
        return this._http.get("http://localhost/BigStore.Rest/api/order/totaloforders")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    adminService.prototype.totalofproduct = function () {
        return this._http.get("http://localhost/BigStore.Rest/api/product/totalofproduct")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    adminService.prototype.totalofcustomer = function () {
        return this._http.get("http://localhost/BigStore.Rest/api/product/totalofcustomer")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //getProducts(): Observable<IProduct[]> {
    //    return this._http.get(this._productUrl)
    //        .map((response: Response) => <IProduct[]> response.json())
    //        .do(data => console.log('All: ' +  JSON.stringify(data)))
    //        .catch(this.handleError);
    //}
    //getProduct(id: number): Observable<IProduct> {
    //    return this.getProducts()
    //        .map((products: IProduct[]) => products.find(p => p.productId === id));
    //}
    adminService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    adminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], adminService);
    return adminService;
}());
exports.adminService = adminService;
//# sourceMappingURL=admin.service.js.map