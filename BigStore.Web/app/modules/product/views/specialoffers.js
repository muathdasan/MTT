"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var specialOffers = /** @class */ (function () {
    function specialOffers() {
    }
    specialOffers.prototype.ngOnInit = function () {
        console.log("Method not implemented.");
    };
    specialOffers = __decorate([
        core_1.Component({
            selector: 'special-offers',
            templateUrl: 'app/modules/product/views/specialoffers.html'
        })
    ], specialOffers);
    return specialOffers;
}());
exports.specialOffers = specialOffers;
//# sourceMappingURL=specialoffers.js.map