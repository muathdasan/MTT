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
var categories = (function () {
    function categories(_adminService) {
        this._adminService = _adminService;
    }
    categories.prototype.ngOnInit = function () {
        var _this = this;
        this._adminService.getcategories()
            .subscribe(function (data) {
            _this.categories = data;
        }, function (error) { return _this.errorMessage = error; });
        console.log("dashboard");
    };
    return categories;
}());
categories = __decorate([
    core_1.Component({
        selector: 'categories-block',
        templateUrl: 'app/modules/category/views/categories.html'
    }),
    __metadata("design:paramtypes", [admin_service_1.adminService])
], categories);
exports.categories = categories;
//# sourceMappingURL=categories.js.map