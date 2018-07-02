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
var modal = /** @class */ (function () {
    function modal() {
        this.closeEmitter = new core_1.EventEmitter();
        this.loadedEmitter = new core_1.EventEmitter();
        this.positiveLabelAction = new core_1.EventEmitter();
    }
    modal.prototype.ngOnInit = function () {
        this.loadedEmitter.next(this);
    };
    modal.prototype.show = function () {
        this.showModal = true;
    };
    modal.prototype.hide = function () {
        this.showModal = false;
        //this.closeEmitter.next({
        //    action: ModalAction.POSITIVE
        //});
    };
    modal.prototype.positiveAction = function () {
        this.positiveLabelAction.next(this);
        return false;
    };
    modal.prototype.cancelAction = function () {
        this.showModal = false;
        this.closeEmitter.next({
            action: ModalAction.CANCEL
        });
        return false;
    };
    __decorate([
        core_1.Input('show-modal'),
        __metadata("design:type", Boolean)
    ], modal.prototype, "showModal", void 0);
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], modal.prototype, "title", void 0);
    __decorate([
        core_1.Input('sub-title'),
        __metadata("design:type", String)
    ], modal.prototype, "subTitle", void 0);
    __decorate([
        core_1.Input('cancel-label'),
        __metadata("design:type", String)
    ], modal.prototype, "cancelLabel", void 0);
    __decorate([
        core_1.Input('positive-label'),
        __metadata("design:type", String)
    ], modal.prototype, "positiveLabel", void 0);
    __decorate([
        core_1.Output('closed'),
        __metadata("design:type", core_1.EventEmitter)
    ], modal.prototype, "closeEmitter", void 0);
    __decorate([
        core_1.Output('loaded'),
        __metadata("design:type", core_1.EventEmitter)
    ], modal.prototype, "loadedEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], modal.prototype, "positiveLabelAction", void 0);
    modal = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: 'app/modules/shared/views/modal.html'
        }),
        __metadata("design:paramtypes", [])
    ], modal);
    return modal;
}());
exports.modal = modal;
var ModalAction;
(function (ModalAction) {
    ModalAction[ModalAction["POSITIVE"] = 0] = "POSITIVE";
    ModalAction[ModalAction["CANCEL"] = 1] = "CANCEL";
})(ModalAction = exports.ModalAction || (exports.ModalAction = {}));
//# sourceMappingURL=modal.js.map