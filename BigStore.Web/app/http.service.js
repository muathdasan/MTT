"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var __1 = require("../..");
var app_constants_1 = require("../../app.constants");
var helper_service_1 = require("./helper.service");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.helperService = __1.AppModule.injector.get(helper_service_1.HelperService);
        _this.router = __1.AppModule.injector.get(router_1.Router);
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                // let's make an option object
                options = new http_1.RequestOptions({ headers: new http_1.Headers() });
            }
            this.createRequestOptions(options);
        }
        else {
            this.createRequestOptions(url);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.createRequestOptions = function (options) {
        var token = localStorage.getItem(app_constants_1.appVariables.accessTokenLocalStorage);
        if (this.helperService.addContentTypeHeader && typeof this.helperService.addContentTypeHeader === 'string') {
            options.headers.append('Content-Type', this.helperService.addContentTypeHeader);
        }
        else {
            var contentTypeHeader = options.headers.get('Content-Type');
            if (!contentTypeHeader && this.helperService.addContentTypeHeader) {
                options.headers.append('Content-Type', app_constants_1.appVariables.defaultContentTypeHeader);
            }
            options.headers.append('Authorization', token);
        }
    };
    HttpService.prototype.catchAuthError = function (self) {
        // we have to pass HttpService's own instance here as `self`return (res: Response) => {
        if (res.status === 401 || res.status === 403) {
            // if not authenticated
            localStorage.removeItem(app_constants_1.appVariables.userLocalStorage);
            localStorage.removeItem(app_constants_1.appVariables.accessTokenLocalStorage);
            this.router.navigate([app_constants_1.appVariables.loginPageUrl]);
        }
        return Observable_1.Observable.throw(res);
    };
    ;
    return HttpService;
}(http_1.Http));
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map