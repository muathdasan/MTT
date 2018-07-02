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
var order_service_1 = require("../../order/order.service");
var dashboard = /** @class */ (function () {
    function dashboard(_adminService, _orderService) {
        this._adminService = _adminService;
        this._orderService = _orderService;
        //  this.getProduct();
    }
    dashboard.prototype.ngOnInit = function () {
        this.getrecentorders();
        this.getTotalOforders();
        this.getTotalOfProduct();
        this.getTotalOfCustomer();
        console.log("dashboard");
    };
    dashboard.prototype.getTotalOforders = function () {
        var _this = this;
        this._adminService.totaloforders()
            .subscribe(function (data) {
            _this.totalOfOrders = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    dashboard.prototype.getTotalOfProduct = function () {
        var _this = this;
        this._adminService.totalofproduct()
            .subscribe(function (data) {
            _this.totalOfProduct = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    dashboard.prototype.getTotalOfCustomer = function () {
        var _this = this;
        this._adminService.totalofcustomer()
            .subscribe(function (data) {
            _this.totalOfCustomer = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    dashboard.prototype.getrecentorders = function () {
        var _this = this;
        this._orderService.getrecentorders()
            .subscribe(function (data) {
            _this.orders = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard-block',
            templateUrl: 'app/modules/admin/views/dashboard.html',
            styleUrls: ['app/views/storeManager.css']
        }),
        __metadata("design:paramtypes", [admin_service_1.adminService, order_service_1.orderService])
    ], dashboard);
    return dashboard;
}());
exports.dashboard = dashboard;
//# sourceMappingURL=dashboard.js.map