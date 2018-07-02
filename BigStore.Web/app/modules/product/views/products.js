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
var product_service_1 = require("../../product/product.service");
var products = /** @class */ (function () {
    function products(_productService) {
        this._productService = _productService;
        //  this.getProduct();
    }
    products.prototype.ngOnChanges = function () {
        ;
    };
    products.prototype.ngOnInit = function () {
        this.page = 1;
        this.totalPages = 2;
        this.pageSize = 3;
        this.getProduct();
    };
    products.prototype.onSelectPageGetProduct = function (evt) {
        this.page = evt;
        this.getProduct();
    };
    products.prototype.getProduct = function () {
        var _this = this;
        this._productService.getProducts(this.page, this.pageSize)
            .subscribe(function (result) {
            _this.products = result.data;
            _this.pager = result.pager;
            if (_this.pager) {
                _this.totalPages = _this.pager.totalPages;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    products = __decorate([
        core_1.Component({
            selector: 'products-block',
            templateUrl: 'app/modules/product/views/products.html',
            styleUrls: ['app/views/storeManager.css']
        }),
        __metadata("design:paramtypes", [product_service_1.productService])
    ], products);
    return products;
}());
exports.products = products;
//# sourceMappingURL=products.js.map