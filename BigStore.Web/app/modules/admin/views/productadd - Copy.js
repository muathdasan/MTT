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
var admin_service_1 = require("../../admin/admin.service");
var productadd = /** @class */ (function () {
    function productadd(_adminService) {
        this._adminService = _adminService;
    }
    productadd.prototype.ngOnInit = function () {
        var _this = this;
        this._adminService.getcategories()
            .subscribe(function (categorydata) {
            _this.categories = categorydata;
        }, function (error) { return _this.errorMessage = error; });
        console.log("dashboard");
    };
    productadd = __decorate([
        core_1.Component({
            selector: 'product-add',
            templateUrl: 'app/modules/admin/views/productadd.html',
            styleUrls: ['app/modules/admin/admin.component.css']
        }),
        __metadata("design:paramtypes", [admin_service_1.adminService])
    ], productadd);
    return productadd;
}());
exports.productadd = productadd;
//# sourceMappingURL=productadd - Copy.js.map