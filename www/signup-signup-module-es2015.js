(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" no-border>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ language.singup }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"dark\">\n  <ion-list color=\"dark\">\n    <form [formGroup]=\"singup\">\n      <ion-item mode=\"md\" color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.firtsname }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"firstname\"\n          type=\"text\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon name=\"person\" color=\"light\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.firstname\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('firstname').hasError(error.type) &&\n              (singup.get('firstname').dirty || singup.get('firstname').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-item mode=\"md\" color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.lastname }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"lastname\"\n          type=\"text\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon name=\"person\" color=\"light\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.lastname\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('lastname').hasError(error.type) &&\n              (singup.get('lastname').dirty || singup.get('lastname').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-item color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.email }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"email\"\n          type=\"email\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon name=\"mail\" color=\"light\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.email\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('email').hasError(error.type) &&\n              (singup.get('email').dirty || singup.get('email').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-item color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.phone }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"phone\"\n          type=\"tel\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon name=\"call\" color=\"light\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.phone\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('phone').hasError(error.type) &&\n              (singup.get('phone').dirty || singup.get('phone').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-item color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.password }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"password\"\n          [type]=\"password\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon *ngIf=\"valor == 0\" name=\"eye\" color=\"light\" slot=\"end\" (click)=\"viewPassword()\"></ion-icon>\n        <ion-icon *ngIf=\"valor == 1\" name=\"eye-off\" color=\"light\" slot=\"end\" (click)=\"viewPassword()\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.password\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('password').hasError(error.type) &&\n              (singup.get('password').dirty || singup.get('password').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-item color=\"dark\">\n        <ion-label position=\"stacked\" color=\"light\"\n          >{{ language.passwordR }} <ion-text></ion-text\n        ></ion-label>\n        <ion-input\n          formControlName=\"passwordR\"\n          [type]=\"password2\"\n          color=\"light\"\n        ></ion-input>\n        <ion-icon *ngIf=\"valor2 == 0\" name=\"eye\" color=\"light\" slot=\"end\" (click)=\"viewPassword2()\"></ion-icon>\n        <ion-icon *ngIf=\"valor2 == 1\" name=\"eye-off\" color=\"light\" slot=\"end\" (click)=\"viewPassword2()\"></ion-icon>\n      </ion-item>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.passwordR\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              singup.get('passwordR').hasError(error.type) &&\n              (singup.get('passwordR').dirty || singup.get('passwordR').touched)\n            \"\n          >\n            {{ error.message }}\n          </div>\n        </ng-container>\n      </div>\n      <br />\n      <ion-button\n        expand=\"block\"\n        color=\"success\"\n        (click)=\"save()\"\n        [disabled]=\"!singup.valid\"\n        >{{ language.singup }}\n      </ion-button>\n      \n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







const routes = [
    {
        path: "",
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\nion-item {\n  --highlight-color-focused: rgb(17, 221, 119);\n}\n\n.item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: var(--ion-color-light);\n}\n\n.item-has-focus .label-stacked.sc-ion-label-ios-h {\n  color: var(--ion-color-light);\n}\n\n.error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcaXNtYWVcXERvY3VtZW50c1xcYXBwX3RyYWJhamFkb3JcXGFwcF90cmFiYWphZG9yL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEVBQUE7QUNDRjs7QURDQTtFQUNFLDRDQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGOztBRERBO0VBQ0UsNkJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzIyMjQyOCkpO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiByZ2IoMTcsIDIyMSwgMTE5KTtcclxufVxyXG4uaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtaW9zLWgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5lcnJvci1tZXNzYWdlcyB7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCJpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjMjIyNDI4KSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmdiKDE3LCAyMjEsIDExOSk7XG59XG5cbi5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5lcnJvci1tZXNzYWdlcyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/testing.service */ "./src/app/services/testing.service.ts");








let SignupPage = class SignupPage {
    constructor(storage, formBuilder, toastController, menu, services, router) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.menu = menu;
        this.services = services;
        this.router = router;
        this.language = [];
        this.error_messages = [];
        this.password = "password";
        this.valor = 0;
        this.password2 = "password";
        this.valor2 = 0;
        this.singup = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(35),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(40)
            ])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(40)
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(35)
            ])),
            passwordR: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(35)
            ]))
        });
    }
    ionViewWillEnter() {
        this.menu.enable(false, "first");
        this.storage.get("language").then(res => {
            if (res === "es") {
                fetch("../../../assets/language.json")
                    .then(res => res.json())
                    .then(json => {
                    this.language = json.es[0].signup[0];
                    console.log(this.language);
                });
            }
            if (res === "en") {
                fetch("../../../assets/language.json")
                    .then(res => res.json())
                    .then(json => {
                    this.language = json.en[0].signup[0];
                    this.error_messages = json.en[0].error_messages[0];
                    console.log(json.en[0].error_messages[0]);
                });
            }
        });
    }
    save() {
        //console.log(this.singup.value.email);
        if (this.singup.value.password != this.singup.value.passwordR) {
            this.presentToast();
        }
        else {
            console.log(this.singup.value.phone);
            this.services.singup(this.singup.value.firstname, this.singup.value.lastname, this.singup.value.email, this.singup.value.password, this.singup.value.passwordR, this.singup.value.phone).subscribe(res => {
                this.storage.set("token", {
                    token: res.access_token,
                    user: res.user.id
                }).then(() => {
                    this.storage.set("validate", "no").then(() => {
                        this.router.navigate(["/code"]);
                    });
                });
            }, erro => {
                console.log("entro a un error");
                this.presentToastError();
            });
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: "top",
                message: "password do not match",
                duration: 2000
            });
            toast.present();
        });
    }
    presentToastError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: "top",
                message: "The email has already been taken.",
                duration: 2000
            });
            toast.present();
        });
    }
    click() {
        this.router.navigate(["/code"]);
    }
    viewPassword() {
        if (this.valor == 0) {
            this.password = "text";
            this.valor = 1;
        }
        else {
            this.password = "password";
            this.valor = 0;
        }
    }
    viewPassword2() {
        if (this.valor2 == 0) {
            this.password2 = "text";
            this.valor2 = 1;
        }
        else {
            this.password2 = "password";
            this.valor2 = 0;
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_6__["TestingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _services_testing_service__WEBPACK_IMPORTED_MODULE_6__["TestingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map