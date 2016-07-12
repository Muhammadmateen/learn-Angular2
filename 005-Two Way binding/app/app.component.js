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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.firstName = "Muhammad";
        this.lastName = "Mateen";
        this.details = "I am a developer";
        this.age = 25;
        this.user_fName = "Muhammad Mateen";
        this.user_lName = "Mateen";
        this.user_details = "I am a Meanstack Developer";
        this.user_age = 25;
    }
    ;
    AppComponent.prototype.checkDetails = function () {
        this.one_userInfo = {
            firstName: this.firstName,
            lastName: this.lastName,
            details: this.details,
            age: this.age
        };
        console.log("Function call : ", this.one_userInfo);
    };
    ;
    AppComponent.prototype.checkUserDetails = function () {
        this.user_Obj = {
            firstName: this.user_fName,
            lastName: this.user_lName,
            details: this.user_details,
            age: this.user_age
        };
        console.log("Two way Funcation call : ", this.user_Obj);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/Template/helo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map