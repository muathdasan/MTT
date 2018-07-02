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
var index_1 = require("../modules/shared/index");
var index_2 = require("../index");
var router_1 = require("@angular/router"); //CanActivate
var Header = /** @class */ (function () {
    function Header(router) {
        this.router = router;
        this.products = {};
        this.productInCart = 0;
    }
    Header.prototype.canActivate = function () {
        //// Check to see if a user has a valid JWT
        //if (tokenNotExpired())
        //{
        //    // If they do, return true and allow the user to load the home component
        //    return true;
        //}
        //// If not, they redirect them to the login page
        //this.router.navigate(['/login']);
        //return false;
    };
    Header.prototype.ngOnInit = function () {
        console.log("Method not implemented.");
    };
    Header.prototype.onSelectedMenu = function (selecteMenu) {
        this.selectedMenu = selecteMenu;
    };
    Header.prototype.onModuleShow = function () {
        var items = localStorage.getItem('products');
        if (items == "") {
            this.cartblock.products = [];
            this.productInCart = 0;
            this.cartModal.show();
        }
        else {
            this.cartblock.products = JSON.parse(localStorage.getItem('products'));
            this.productInCart = this.cartblock.products.length;
            this.cartModal.show();
        }
    };
    Header.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    Header.prototype.logout = function () {
        this.router.navigate(['/home']);
        return localStorage.removeItem('username');
    };
    __decorate([
        core_1.ViewChild('cartModal'),
        __metadata("design:type", index_1.modal)
    ], Header.prototype, "cartModal", void 0);
    __decorate([
        core_1.ViewChild('cartblock'),
        __metadata("design:type", index_2.Cart)
    ], Header.prototype, "cartblock", void 0);
    Header = __decorate([
        core_1.Component({
            selector: 'header-block',
            templateUrl: 'app/views/header.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map