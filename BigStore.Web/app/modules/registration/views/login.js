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
var registration_service_1 = require("../../registration/registration.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_registrationService, router) {
        this._registrationService = _registrationService;
        this.router = router;
        this.message = '';
    }
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this._registrationService.authenticate(username, password)) {
            this.router.navigate(['/home']);
            return true;
        }
        else {
            // this.router.navigate(['./login']);
            // this.message = 'Username or password is incorrect.';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        return false;
    };
    LoginComponent.prototype.canActivate = function () {
        if (localStorage.getItem('auth_token')) {
            return true;
        }
        return false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: 'app/modules/registration/views/login.html',
        }),
        __metadata("design:paramtypes", [registration_service_1.registrationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map