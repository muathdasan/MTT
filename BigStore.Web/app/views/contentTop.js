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
var product_service_1 = require("../modules/product/product.service");
var productlist_1 = require("../modules/product/views/productlist");
var ContentTop = /** @class */ (function () {
    function ContentTop(_productService) {
        this._productService = _productService;
        this.cartProducts = {};
    }
    ContentTop.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = [];
        //FillData
        this._productService.getcategories()
            .subscribe(function (categordata) {
            _this.categories = categordata;
            var currentRequestIndex = _this.categories.findIndex(function (i) { return i.Id; });
            if (currentRequestIndex != -1) {
                var categoryId = _this.categories[currentRequestIndex].Id;
                _this.selectedCatId = categoryId;
                _this.productList.Getproducts(categoryId);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ContentTop.prototype.addProductToCart = function (product) {
        if (product) {
            this.cartProducts.push({
                Id: product.Id,
                nameEn: product.nameEn,
                //summary: product.summary,
                price: product.price,
                quantity: product.quantity,
                imageUrl: product.imageUrl
            });
            this.setAllProducts(this.cartProducts);
        }
        //this.getTotalQuantity();
    };
    ContentTop.prototype.setAllProducts = function (products) {
        localStorage.setItem('products', JSON.stringify(products));
    };
    ContentTop.prototype.selectedCategorychange = function (selectedCatId) {
        this.selectedCatId = selectedCatId;
        this.productList.Getproducts(selectedCatId);
    };
    __decorate([
        core_1.ViewChild('product'),
        __metadata("design:type", productlist_1.productList)
    ], ContentTop.prototype, "productList", void 0);
    ContentTop = __decorate([
        core_1.Component({
            selector: 'content-top',
            templateUrl: 'app/views/contentTop.html',
            providers: [product_service_1.productService]
        }),
        __metadata("design:paramtypes", [product_service_1.productService])
    ], ContentTop);
    return ContentTop;
}());
exports.ContentTop = ContentTop;
//# sourceMappingURL=contentTop.js.map