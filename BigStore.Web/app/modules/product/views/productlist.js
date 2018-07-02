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
var product_service_1 = require("../product.service");
var forms_1 = require("@angular/forms");
var productList = /** @class */ (function () {
    function productList(_productService) {
        this._productService = _productService;
        this.onProductAdd = new core_1.EventEmitter();
        this.propagateChange = function (_) { };
    }
    productList_1 = productList;
    productList.prototype.ngOnInit = function () {
        //FillData
        //this._productService.getCategories()
        //    .subscribe((categordata: any) =>
        //    {
        //        this.categories = categordata;
        //    },
        //    error => this.errorMessage = <any>error);
    };
    productList.prototype.clickOnProductAdd = function (product) {
        this.onProductAdd.emit(product);
        //if (product)
        //{
        //    this.cartProducts.push({
        //        Id: product.Id,
        //        nameEn: product.nameEn,
        //        //summary: product.summary,
        //        price: product.price,
        //        quantity: product.quantity,
        //        imageUrl: product.imageUrl
        //    });
        //    this.setAllProducts(this.cartProducts);
        //}
        //this.getTotalQuantity();
    };
    //setAllProducts(products: any): void
    //{
    //    localStorage.setItem('products', JSON.stringify(products));
    //}
    productList.prototype.getsizetype = function (type) {
        switch (type) {
            case 1:
                return 'pc';
            case 2:
                return 'g';
            case 3:
                return 'kg';
        }
    };
    productList.prototype.Getproducts = function (categoryId) {
        var _this = this;
        this._productService.findbycategoryid(categoryId)
            .subscribe(function (productdata) {
            _this.products = productdata;
        }, function (error) { return _this.errorMessage = error; });
    };
    //From ControlValueAccessor interface
    productList.prototype.writeValue = function (value) {
        //if (value != null)
        //{
        this.products = value;
        //}
    };
    productList.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    productList.prototype.registerOnTouched = function (fn) {
    };
    var productList_1;
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], productList.prototype, "onProductAdd", void 0);
    productList = productList_1 = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: 'app/modules/product/views/productlist.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return productList_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [product_service_1.productService])
    ], productList);
    return productList;
}());
exports.productList = productList;
//# sourceMappingURL=productlist.js.map