(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-code-code-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/code/code.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/code/code.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" no-border>\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>    \n    <ion-title>{{language.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion ion-padding\" color=\"dark\">\n  <ion-input  [(ngModel)]=\"code\" (keyup)=\"onVerifyChange($event)\"></ion-input><br>\n  <ion-button expand=\"block\" color=\"success\" [disabled]=\"checkIsEnabled()\" (click)=\"verifyCode()\">{{language.confirm}}</ion-button><br>\n  <ion-label>{{language.resend}} <span style=\"color: green;\" (click)=\"resenCode()\">{{language.button}}</span></ion-label>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/code/code.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.module.ts ***!
  \*******************************************/
/*! exports provided: CodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePageModule", function() { return CodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.page */ "./src/app/pages/code/code.page.ts");







var routes = [
    {
        path: '',
        component: _code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]
    }
];
var CodePageModule = /** @class */ (function () {
    function CodePageModule() {
    }
    CodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_code_page__WEBPACK_IMPORTED_MODULE_6__["CodePage"]]
        })
    ], CodePageModule);
    return CodePageModule;
}());



/***/ }),

/***/ "./src/app/pages/code/code.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/code/code.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvZGUvY29kZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/code/code.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/code/code.page.ts ***!
  \*****************************************/
/*! exports provided: CodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePage", function() { return CodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var CodePage = /** @class */ (function () {
    function CodePage(storage, menu, router, services) {
        this.storage = storage;
        this.menu = menu;
        this.router = router;
        this.services = services;
        this.language = [];
        this.code = "";
        this.isenabled = false;
    }
    CodePage.prototype.ngOnInit = function () {
        var _this = this;
        this.isenabled = false;
        this.menu.enable(false, "first");
        this.storage.get("language").then(function (res) {
            if (res === "es") {
                fetch("../../../assets/language.json")
                    .then(function (res) { return res.json(); })
                    .then(function (json) {
                    _this.language = json.es[0].confirmation[0];
                    console.log(_this.language);
                });
            }
            if (res === "en") {
                fetch("../../../assets/language.json")
                    .then(function (res) { return res.json(); })
                    .then(function (json) {
                    _this.language = json.en[0].confirmation[0];
                    // this.error_messages = json.en[0].error_messages[0];
                    //console.log(json.en[0].error_messages[0]);
                });
            }
            _this.storage.get("token").then(function (res) {
                _this.token = res.token;
            });
        });
    };
    CodePage.prototype.onVerifyChange = function (e) {
        if (this.code.length != 0) {
            this.isenabled = true;
        }
        else {
            this.isenabled = false;
        }
    };
    CodePage.prototype.checkIsEnabled = function () {
        return !this.isenabled;
    };
    CodePage.prototype.verifyCode = function () {
        var _this = this;
        this.storage.get("token").then(function (data) {
            //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5MjU5OGRmZTVkMjQ0MTMyOTA4NDAzN2NhZTEwMTFjZTkzMWQ2ZjQ0NmZjNDI3NTQ4YzIzMWNiOWRiYmJjMDBjZDZmY2Y3NTJmNDI2MTA1In0.eyJhdWQiOiIxIiwianRpIjoiYzkyNTk4ZGZlNWQyNDQxMzI5MDg0MDM3Y2FlMTAxMWNlOTMxZDZmNDQ2ZmM0Mjc1NDhjMjMxY2I5ZGJiYmMwMGNkNmZjZjc1MmY0MjYxMDUiLCJpYXQiOjE1NzI2Mzk5MjUsIm5iZiI6MTU3MjYzOTkyNSwiZXhwIjoxNjA0MjYyMzI0LCJzdWIiOiIzMSIsInNjb3BlcyI6W119.o6m6T2CKBJfUz2CcG4sOtrkxF03zU-1FpSctVOlo3yGVp_Tmf5vZ3ys9fcozQiZUdo38fNR8_4IZ3uqelh_GTz-7U9CrXQ3nDvWxvrLPXnRB140lVBFhnqYl9Ak8p-nW6lOKvqRy11p2tVwS7DIYAVSUQ3w7dG_hKqJIfFTqjV_0_VERxIdc0osLL9GFENGGvdCZEgCfIL1DeShb6tESBIkgl3PuwujsjED9URblDsFY-HSJALTMpJIGnY9dVJEHqXLC00eANU0k1n1KQ_XN3MbVP6FGGDZAZAhlgspoHgtOCpjaJXeZVyzEjq3swyL_i0kvuIBXx6iukt8k80Lea62XxyChzA5_j-QbLkgqJ5Bm6nNXO6tXFg_bl9gnoqx36R0RHpRE9pz4CsJcynQAU9nMAR6ArF5oPL8vgMYOnMVJXsKqb8lajVbpJYb_mVsJmciIm--58dyJ6bRGK4BUhnZ7VzVr36GgwR1nCl81lFL30xOOz466Q8HzkwEIwXYXhfhf_6osJj2SN_WUK2QpHXAX2j78WrQnw3vUmHZroMhdVLdc1rt3jQYukyJ3-yjopVsI2YPK7wdrfp_LngkUmNH3kjfk1-NSVzllgkvb1bMGArwrebh1Ly5H5LRoSsMRTo-aPSzreh6zQPpl1ORNZeanC1Ki18ljvxT8RZz56rA";
            _this.services.verifyCode(data.token, _this.code).subscribe(function (re) {
                //console.log(data.access_token)
                if (re.type == "success") {
                    var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'account verified'
                    }).then(function (resu) {
                        if (resu.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
                            _this.router.navigate(["/trades"]);
                            _this.storage.set("validate", "co");
                        }
                    });
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    CodePage.prototype.resenCode = function () {
        this.services.resenCode(this.token).subscribe(function (res) {
            if (res.type == "success") {
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'code sent successfully'
                }).then(function (resu) {
                    if (resu.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
                    }
                });
            }
            //console.log("code sent successfully");
        });
    };
    CodePage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_5__["TestingService"] }
    ]; };
    CodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! raw-loader!./code.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/code/code.page.html"),
            styles: [__webpack_require__(/*! ./code.page.scss */ "./src/app/pages/code/code.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_testing_service__WEBPACK_IMPORTED_MODULE_5__["TestingService"]])
    ], CodePage);
    return CodePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-code-code-module-es5.js.map