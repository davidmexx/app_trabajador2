(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-content\" padding color=\"dark\">\n  <ion-list no-border color=\"dark\">\n    <ion-list-header color=\"dark\"></ion-list-header>\n\n    <ion-select\n      placeholder=\"{{ language.language }}\"\n      (ionChange)=\"changeLanguage()\"\n      [(ngModel)]=\"lan\"\n      color=\"dark\"\n      class=\"selector\"\n    >\n      <ion-select-option value=\"en\">English</ion-select-option>\n      <ion-select-option value=\"es\">Spanish</ion-select-option>\n    </ion-select>\n  </ion-list>\n  <div text-center>\n    <img width=\"160\" height=\"160\" src=\"../../../assets/icon/haskyworker.png\" />\n    <br /><br /><br /><br />\n    <ion-item style=\"border-radius: 12px;\">\n    <ion-input\n      type=\"email\"\n      class=\"txt\"\n      placeholder=\"{{ language.email }}\"\n      [(ngModel)]=\"email\"\n    ></ion-input>\n  </ion-item>\n    <br />\n    <ion-item style=\"border-radius: 12px;\">\n      <ion-input \n        [type]=\"passwords\"\n        class=\"txt\"\n        placeholder=\"{{ language.password }}\"\n        [(ngModel)]=\"password\"\n      >\n      </ion-input>\n      <ion-icon *ngIf=\"valor == 0\" name=\"eye\" color=\"dark\" (click)=\"viewPassword()\"></ion-icon>\n      <ion-icon *ngIf=\"valor == 1\" name=\"eye-off\" color=\"dark\" (click)=\"viewPassword()\"></ion-icon>\n    </ion-item>\n  </div>\n  <ion-button\n    class=\"log-in-button\"\n    color=\"success\"\n    expand=\"block\"\n    (click)=\"Login()\"\n  >\n    {{ language.login }}\n  </ion-button>\n  <ion-button hidden\n    class=\"log-in-button\"\n    color=\"success\"\n    expand=\"block\"\n    (click)=\"test()\"\n  >\n    test\n  </ion-button>\n\n  <div class=\"texto\">\n    ---------- {{language.or}} ----------\n  </div>\n  <ion-button\n    class=\"log-in-button\"\n    color=\"primary\"\n    expand=\"block\"\n    (click)=\"doFbLogin()\"\n    hidden\n  >\n    {{ language.facebook }}\n  </ion-button>\n  <ion-button\n    class=\"log-in-button\"\n    color=\"primary\"\n    expand=\"block\"\n    (click)=\"test()\"\n    hidden\n  >\n    {{ language.facebook }}\n  </ion-button>\n  <div class=\"texto\">\n    {{ language.account }}\n    <strong\n      ><a (click)=\"signup()\">{{ language.create }}</a></strong\n    >\n  </div>\n  <div class=\"texto\">\n    \n    <strong\n      ><a (click)=\"passwordf()\">{{language.forgot}}</a></strong\n    >\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-content {\n  --background: black;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: white;\n  font-size: 22px;\n  text-align: center;\n}\n\n.log-in-button {\n  margin-top: 30px;\n  font-weight: bold;\n}\n\n.selector {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  line-height: 1.2;\n  letter-spacing: 0.1px;\n  color: white;\n  width: 100% !important;\n  max-width: 100% !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #222428;\n  text-align: center;\n}\n\n.list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\nion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\n.txt {\n  border-color: red !important;\n  background-color: #fff;\n  color: black;\n  border-radius: 5px;\n}\n\nh4 {\n  margin-left: 30%;\n}\n\n.texto {\n  padding-top: 20px;\n  width: 100% !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSw0RUFBQTtBQ0dGOztBRERBO0VBQ0UsNEVBQUE7QUNJRjs7QUREQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9nLWluLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNlbGVjdG9yIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzIyMjQyOCkpO1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzIyMjQyOCkpO1xufVxuXG4udHh0IHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5oNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4udGV4dG8ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmxvZ2luLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZy1pbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlbGVjdG9yIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjMjIyNDI4KSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICMyMjI0MjgpKTtcbn1cblxuLnR4dCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5oNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi50ZXh0byB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/testing.service */ "./src/app/services/testing.service.ts");











var HomePage = /** @class */ (function () {
    function HomePage(facebook, loadingController, router, platform, alertController, http, storage, toastController, menu, https, services) {
        this.facebook = facebook;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.http = http;
        this.storage = storage;
        this.toastController = toastController;
        this.menu = menu;
        this.https = https;
        this.services = services;
        this.userData = null;
        this.lan = "";
        this.title = "";
        this.language = [];
        //postData = {};
        this.loading = "";
        this.FB_APP_ID = 1380470452125843;
        this.loginData = {};
        this.email = "";
        this.password = "";
        this.dts = "";
        this.passwords = "password";
        this.valor = 0;
    }
    HomePage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "error",
                            position: "top",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.doFbLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, permissions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        permissions = ["public_profile", "email"];
                        this.storage.get("facebook").then(function (data) {
                            _this.facebook.login(permissions)
                                .then(function (response) {
                                var userId = response.authResponse.userID;
                                console.log(userId);
                                //Getting name and gender properties
                                _this.facebook.api("/me?fields=id,name,first_name,last_name,email", permissions)
                                    .then(function (user) {
                                    _this.storage.set("pro", "pro").then(function () {
                                        _this.pros();
                                        loading.dismiss();
                                    });
                                    //this.services.singup().subscribe(res =>{
                                    // })
                                });
                            }, function (error) {
                                console.log(error);
                                loading.dismiss();
                            });
                        }, function (err) {
                            // this.storage.set("facebook", {id: "hola"})
                            // this.router.navigate(["/user"]);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.Login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.services.Login(this.email, this.password).subscribe(function (res) {
                    if (res.user.confirmed == "0") {
                        _this.storage.set("token", {
                            token: res.access_token,
                            user: res.user.id
                        }).then(function () {
                            _this.router.navigate(["/code"]);
                        });
                    }
                    else if (res.user.steps == "2") {
                        _this.storage.set("token", {
                            token: res.access_token,
                            user: res.user.id
                        }).then(function () {
                            _this.router.navigate(["/trades"]);
                        });
                    }
                    else {
                        _this.storage.set("token", {
                            token: res.access_token,
                            user: res.user.id
                        }).then(function () {
                            _this.router.navigate(["/user/jobs"]);
                            _this.storage.set("validate", "si");
                        });
                    }
                }, function (err) {
                    _this.presentToast();
                    console.log("E-mail and/or password is incorrect");
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Cordova is not available on desktop. Please try this in a real device or in an emulator.",
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.changeLanguage = function () {
        var _this = this;
        var a = this.lan;
        this.language = a;
        if (a === "es") {
            fetch("../../../assets/language.json")
                .then(function (res) { return res.json(); })
                .then(function (json) {
                _this.language = json.es[0].login[0];
                //this.message = json.es[0].message[0];
            });
            this.storage.set("language", "es").then(function (res) {
                _this.title = "Español";
                location.reload();
            });
        }
        if (a === "en") {
            fetch("../../../assets/language.json")
                .then(function (res) { return res.json(); })
                .then(function (json) {
                _this.language = json.en[0].login[0];
                // this.message = json.en[0].message[0];
            });
            this.storage.set("language", "en").then(function (res) {
                _this.title = "English";
                location.reload();
            });
        }
    };
    HomePage.prototype.signup = function () {
        this.router.navigate(["/signup"]);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menu.enable(false, "first");
        this.storage.keys().then(function (data) {
            if (data.length == 0) {
                _this.storage.set("language", "en").then(function (res) {
                    fetch("../../../assets/language.json")
                        .then(function (res) { return res.json(); })
                        .then(function (json) {
                        _this.language = json.en[0].login[0];
                        location.reload();
                    });
                });
            }
            else {
                _this.storage.get("language").then(function (res) {
                    if (res == "en") {
                        var la = "json.en[0];";
                        fetch("../../../assets/language.json")
                            .then(function (res) { return res.json(); })
                            .then(function (json) {
                            _this.language = json.en[0].login[0];
                        });
                    }
                    if (res == "es") {
                        fetch("../../../assets/language.json")
                            .then(function (res) { return res.json(); })
                            .then(function (json) {
                            _this.language = json.es[0].login[0];
                        });
                    }
                });
            }
        }, function (error) {
            alert("no");
        });
        this.storage.get("validate").then(function (res) {
            if (res == null) {
                _this.router.navigate(["/home"]);
            }
            else {
                /*
                if(res == "no"){
                  this.router.navigate(["/code"]);
                }if(res == "co"){
                  this.router.navigate(["/trades"]);
                } */
                if (res == "si")
                    _this.router.navigate(["/user/jobs"]);
            }
        }, function (error) {
            _this.router.navigate(["/home"]);
        });
    };
    HomePage.prototype.test = function () {
        //this.router.navigate(["/test"]);
        this.router.navigate(["/trades"]);
    };
    HomePage.prototype.presentToastError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            position: "top",
                            message: "The email has already been taken.",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.pros = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            position: "top",
                            message: "in process",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.passwordf = function () {
        this.router.navigate(["/password"]);
    };
    HomePage.prototype.viewPassword = function () {
        if (this.valor == 0) {
            this.passwords = "text";
            this.valor = 1;
        }
        else {
            this.passwords = "password";
            this.valor = 0;
        }
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_8__["TestingService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _services_testing_service__WEBPACK_IMPORTED_MODULE_8__["TestingService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map