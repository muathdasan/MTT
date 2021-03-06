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
var order_service_1 = require("../../order/order.service");
var pendingorder = (function () {
    function pendingorder(_orderService) {
        this._orderService = _orderService;
    }
    pendingorder.prototype.ngOnInit = function () {
        this.page = 1;
        this.totalPages = 2;
        this.pageSize = 1;
        this.getorders();
    };
    pendingorder.prototype.getorders = function () {
        var _this = this;
        this._orderService.getallordersnotCompleted(this.page, this.pageSize)
            .subscribe(function (result) {
            _this.orders = result.data;
            _this.pager = result.pager;
            if (_this.pager) {
                _this.totalPages = _this.pager.totalPages;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    pendingorder.prototype.onSelectPageGetOrder = function (evt) {
        this.page = evt;
        this.getorders();
    };
    pendingorder.prototype.getStatus = function (type) {
        switch (type) {
            case 1:
                return 'New';
            case 2:
                return 'Pending';
            case 3:
                return 'Delivered';
        }
    };
    return pendingorder;
}());
pendingorder = __decorate([
    core_1.Component({
        selector: 'orders-block',
        templateUrl: 'app/modules/order/views/pendingorder.html',
        styleUrls: ['app/views/storeManager.css']
    }),
    __metadata("design:paramtypes", [order_service_1.orderService])
], pendingorder);
exports.pendingorder = pendingorder;
//# sourceMappingURL=pendingorder.js.map