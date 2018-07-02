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
    }
    products.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (productdata) {
            _this.products = productdata;
        }, function (error) { return _this.errorMessage = error; });
        console.log("dashboard");
    };
    products = __decorate([
        core_1.Component({
            selector: 'products-block',
            templateUrl: 'app/modules/admin/views/products.html'
        }),
        __metadata("design:paramtypes", [product_service_1.productService])
    ], products);
    return products;
}());
exports.products = products;
//# sourceMappingURL=products - Copy.js.map