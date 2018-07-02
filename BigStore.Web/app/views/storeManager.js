"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storeManager = /** @class */ (function () {
    function storeManager() {
    }
    storeManager.prototype.ngOnInit = function () {
        this.block = 0; //dashbord as defult
        this.blockTitle = "Dashboard";
        console.log("Method not implemented.");
    };
    storeManager.prototype.onsidebarchange = function (sidebar) {
        this.block = sidebar;
        switch (sidebar) {
            case 0:
                this.blockTitle = "Dashboard";
                break;
            case 1:
                this.blockTitle = "All Products";
                break;
            case 2:
                this.blockTitle = "Add Product";
                break;
            case 3:
                this.blockTitle = "Edit Product";
            case 4:
                this.blockTitle = "All Orders";
                break;
            case 5:
                this.blockTitle = "Track Orders";
                break;
            case 6:
                this.blockTitle = "Add Orde";
                break;
            case 7:
                this.blockTitle = "Edit Order";
                break;
            case 8:
                this.blockTitle = "All Categories";
                break;
            case 9:
                this.blockTitle = "Add Category";
                break;
            case 10:
                this.blockTitle = "Edit Category";
                break;
            default:
                this.blockTitle = "Dashboard";
                break;
        }
    };
    storeManager = __decorate([
        core_1.Component({
            selector: 'store-Manager',
            templateUrl: 'app/views/storeManager.html',
            styleUrls: ['app/views/storeManager.css']
        })
    ], storeManager);
    return storeManager;
}());
exports.storeManager = storeManager;
//# sourceMappingURL=storeManager.js.map