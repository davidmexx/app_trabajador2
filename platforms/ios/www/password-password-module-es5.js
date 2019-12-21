(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/password/password.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/password/password.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" no-border>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-card color=\"dark\" *ngIf=\"page1\">\r\n    <ion-card-content>\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"stacked\" color=\"light\"\r\n          >{{language.email}}<ion-text></ion-text\r\n        ></ion-label>\r\n        <ion-input\r\n          type=\"email\"\r\n          color=\"light\"\r\n          [(ngModel)]=\"email\"\r\n        ></ion-input>\r\n        <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <ion-button expand=\"full\" (click)=\"sendEmail()\">{{language.send}}</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card color=\"dark\" *ngIf=\"page2\">\r\n    <ion-card-content>\r\n        <ion-item color=\"dark\">\r\n            <ion-label position=\"stacked\" color=\"light\"\r\n              >{{language.code}}<ion-text></ion-text\r\n            ></ion-label>\r\n            <ion-input\r\n              type=\"tel\"\r\n              color=\"light\"\r\n              [(ngModel)]=\"code\"\r\n            ></ion-input>\r\n          </ion-item>\r\n      <ion-item color=\"dark\">\r\n        <ion-label position=\"stacked\" color=\"light\"\r\n          >{{language.email}}<ion-text></ion-text\r\n        ></ion-label>\r\n        <ion-input\r\n          type=\"email\"\r\n          color=\"light\"\r\n          [(ngModel)]=\"emailR\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item color=\"dark\">\r\n          <ion-label position=\"stacked\" color=\"light\"\r\n            ><ion-text></ion-text\r\n          >{{language.new}}</ion-label>\r\n          <ion-input\r\n            type=\"password\"\r\n            color=\"light\"\r\n            [(ngModel)]=\"password\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      <ion-button expand=\"full\" (click)=\"changePassword()\">{{language.change}}</ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/password/password.module.ts":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/password/password.page.ts");







var routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());



/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhc3N3b3JkXFxwYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bhc3N3b3JkL3Bhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYXNzd29yZC9wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xyXG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG59Il19 */"

/***/ }),

/***/ "./src/app/password/password.page.ts":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var PasswordPage = /** @class */ (function () {
    function PasswordPage(services, loadingController, route, storage) {
        this.services = services;
        this.loadingController = loadingController;
        this.route = route;
        this.storage = storage;
        this.page1 = true;
        this.page2 = false;
        this.language = [];
    }
    PasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("language").then(function (res) {
            if (res === "es") {
                fetch("../../../assets/language.json")
                    .then(function (res) { return res.json(); })
                    .then(function (json) {
                    _this.language = json.es[0].password[0];
                });
            }
            if (res === "en") {
                fetch("../../../assets/language.json")
                    .then(function (res) { return res.json(); })
                    .then(function (json) {
                    _this.language = json.en[0].password[0];
                });
            }
        });
    };
    PasswordPage.prototype.sendEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ''
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.services.sendEmail(this.email).subscribe(function (res) {
                            if (res.type == "success") {
                                loading.dismiss();
                                _this.page2 = true;
                                _this.page1 = false;
                            }
                            else
                                loading.dismiss();
                        }, function (error) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PasswordPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PasswordPage.prototype.changePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            code: this.code,
                            email: this.emailR,
                            password: this.password
                        };
                        return [4 /*yield*/, this.loadingController.create({
                                message: ''
                            })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.services.changePassoword(data).subscribe(function (res) {
                            loading.dismiss();
                            _this.route.navigate(["/home"]);
                            console.log(res);
                        }, function (err) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PasswordPage.ctorParameters = function () { return [
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! raw-loader!./password.page.html */ "./node_modules/raw-loader/index.js!./src/app/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=password-password-module-es5.js.map