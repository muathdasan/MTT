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
var productService = /** @class */ (function () {
    //api/product/Getproducts
    function productService(_http) {
        this._http = _http;
        this._productUrl = 'api/product';
    }
    productService.prototype.getProducts = function (page, pageSize) {
        var RequestOpt = new http_1.RequestOptions();
        var Parameter = new http_1.URLSearchParams();
        if (page) {
            Parameter.set("page", page.toString());
        }
        if (pageSize) {
            Parameter.set("pageSize", pageSize.toString());
        }
        RequestOpt.search = Parameter;
        return this._http.get("http://localhost/BigStore.Rest/api/product/getallproducts", RequestOpt)
            //this._http.get(`${this._productUrl}getallproducts`)
            // .map((response: Response) => <Response>response.json())
            .map(function (response) {
            var pageResponse = {};
            pageResponse.data = response.json();
            if (response.headers.get('X-Pagination') != null) {
                pageResponse.pager = JSON.parse(response.headers.get('X-Pagination'));
            }
            return pageResponse;
        })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    productService.prototype.getcategories = function () {
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
    productService.prototype.findbycategoryid = function (id) {
        var RequestOpt = new http_1.RequestOptions();
        var Par = new http_1.URLSearchParams();
        Par.set("id", id);
        RequestOpt.search = Par;
        return this._http.get('http://localhost/BigStore.Rest/api/product/findbycategoryid', RequestOpt)
            .map(function (response) { return response.json(); })
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //});
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    productService.prototype.AddProduct = function (Product) {
        return this._http.post('http://localhost/BigStore.Rest/api/product/AddProduct', Product);
    };
    productService.prototype.getCategories = function () {
        return this._http.get("http://localhost/BigStore.Rest/api/category/getallcategories")
            .map(function (response) { return response.json(); })
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //}); 
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //getProduct(id: number): Observable<IProduct> {
    //    return this.getProducts()
    //        .map((products: IProduct[]) => products.find(p => p.productId === id));
    //}
    productService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    productService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], productService);
    return productService;
}());
exports.productService = productService;
//# sourceMappingURL=product.service.js.map