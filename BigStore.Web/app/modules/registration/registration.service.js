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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var registrationService = /** @class */ (function () {
    function registrationService(_http) {
        this._http = _http;
    }
    /*login(user: string, password: string): boolean {
     if (user === 'user' && password === 'password') {
     localStorage.setItem('username', user);
     return true;
     }
    
    return false;
     }*/
    //login(user: any): boolean
    //{
    //    localStorage.setItem('username', user);
    //    return true;
    //}
    //logout(): any
    //{
    //    localStorage.removeItem('username');
    //}
    registrationService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    registrationService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    registrationService.prototype.authenticate = function (username, password) {
        //if (username === 'mshabib' && password === 'Passw0rd')
        //{
        //    localStorage.setItem('username', 'mshabib');
        //     return true;
        //}
        // return false;
        var RequestOpt = new http_1.RequestOptions();
        var Par = new http_1.URLSearchParams();
        Par.set("username", username);
        Par.set("password", password);
        RequestOpt.search = Par;
        this._http.get('http://localhost/BigStore.Rest/api/user/authenticate', RequestOpt)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            var token = result; //token
            if (token) {
                localStorage.setItem('username', username);
                localStorage.setItem('currentUser', token);
                return true;
            }
            else {
                return false;
            }
        }, function (err) { return console.log(err); });
        //  .catch(this.handleError);
        /*  .map((response: Response) =>
          {
              let token = response.json() && response.json();//token
              if (token)
              {
                  localStorage.setItem('username', username);
                  localStorage.setItem('currentUser', token);

                  return true;
              } else
              {
                  return false;
              }
          })
          .catch(this.handleError);*/
        return null;
        /*    localStorage.setItem(JSON.stringify({ "currentUser": username, "user": token }));*/
        // .catch(this.handleError);
    };
    /* public runLoginProcess(username: String, password: String): Observable<boolean> {
 
         let body = { "username": username, "password": password };
         let head = new Headers();
         head.append("Content-Type", "application/json");
         head.append("Accept", "application/json");
 
         // RUN THE HTTP CALL AN IF IT WORKS, SEND TRUE AND ERROR IN CASE OF AN ERROR BACK
         return this.http.post("<PATH TO MY SERVICE>", body)
             .map(response => {
                 let token = response.json() && response.json().token;
                 if (token) {
                     localStorage.setItem('currentUser', JSON.stringify({ "username": username, "token": token }))
                     return true;
                 } else {
                     return false;
                 }
             }
             )
             .catch(err => Observable.of(false)); //this line isn't needed, but just if you don't want to error handle at the caller's subscription, you can intercept them here and map to a false value.
     }
 
 */
    registrationService.prototype.findbycategoryid = function (id) {
        var RequestOpt = new http_1.RequestOptions();
        var Par = new http_1.URLSearchParams();
        Par.set("id", id);
        RequestOpt.search = Par;
        return this._http.get('http://localhost/BigStore.Rest/api/product/findbycategoryid', RequestOpt)
            .map(function (response) { return response.json(); })
            //.subscribe((result: any) =>
            //{
            //    this.cart = result;
            //});
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    registrationService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    registrationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], registrationService);
    return registrationService;
}());
exports.registrationService = registrationService;
//# sourceMappingURL=registration.service.js.map