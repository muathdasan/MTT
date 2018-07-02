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
var pagination = /** @class */ (function () {
    function pagination() {
        this.onSelectPage = new core_1.EventEmitter();
    }
    pagination.prototype.ngOnInit = function () {
        this.pages = [];
        for (var i = 1; i <= this.numpages; i++) {
            this.pages.push(i);
        }
        if (this.currentpage > this.numpages) {
            this.selectPage(this.numpages);
        }
    };
    pagination.prototype.noPrevious = function () {
        return this.currentpage === 1;
    };
    pagination.prototype.noNext = function () {
        return this.currentpage === this.numpages;
    };
    ;
    pagination.prototype.isActive = function (page) {
        return this.currentpage === page;
    };
    ;
    pagination.prototype.selectPage = function (page) {
        if (!this.isActive(page)) {
            this.currentpage = page;
            this.onSelectPage.emit(page);
            //this.onSelectPage({ page: page });
        }
    };
    ;
    pagination.prototype.selectPrevious = function () {
        if (!this.noPrevious()) {
            this.selectPage(this.currentpage - 1);
        }
    };
    ;
    pagination.prototype.selectNext = function () {
        if (!this.noNext()) {
            this.selectPage(this.currentpage + 1);
        }
    };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], pagination.prototype, "numpages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], pagination.prototype, "currentpage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], pagination.prototype, "onSelectPage", void 0);
    pagination = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: 'app/modules/shared/views/pagination.html',
            styleUrls: ['app/views/storeManager.css']
        }),
        __metadata("design:paramtypes", [])
    ], pagination);
    return pagination;
}());
exports.pagination = pagination;
//# sourceMappingURL=pagination.js.map