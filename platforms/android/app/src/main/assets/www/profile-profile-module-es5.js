(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-card color=\"dark\" mode=\"md\">\n    <ion-card-content>\n      <ion-row size=\"12\">\n        <ion-col size=\"6\">\n          <ion-avatar\n            style=\"width: 110px !important; height: 110px !important;\"\n          >\n            <img [src]=\"profile\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"6\">\n          <h2 class=\"ion-text-wrap\">{{firts}} {{last}}</h2>\n      <ionic4-star-rating #rating\n        activeIcon = \"ios-star\"\n        defaultIcon = \"ios-star-outline\"\n        activeColor = \"#05b7d7\"\n        defaultColor = \"#aaaaaa\"\n        readonly = \"false\"\n        rating = \"{{va}}\"\n        fontSize = \"32px\"\n        >\n    </ionic4-star-rating>\n\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            \n            (click)=\"modals(5)\"\n          >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\" style=\"height: 100px;\">\n    <ion-card-content>\n        <ion-list color=\"dark\" style=\"background-color:#222428;\">\n            <ion-list-header color=\"dark\">\n              <ion-label>{{status}}</ion-label>\n            </ion-list-header>\n            <ion-progress-bar value=\"{{proggres}}\"></ion-progress-bar>\n          </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">Personal info</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(1)\"\n          >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n      <ion-item color=\"dark\" lines=\"none\">\n        <ion-label>{{email}}</ion-label>\n      </ion-item>\n      <ion-item color=\"dark\" lines=\"none\">\n        <ion-label>{{phone}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">Availability</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(2)\"\n          >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n      <ion-row size=\"12\">\n        <ion-col>\n          <ion-chip color=\"secondary\" *ngFor=\"let data of days\">\n            <ion-label color=\"light\" class=\"ion-text-wrap\">{{data}}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">Address</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(7)\"\n          >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n      <ion-item color=\"dark\" lines=\"none\">\n        <ion-label>{{address}} </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">How i travel to jobs</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(3)\"\n          >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n      <ion-item color=\"dark\" lines=\"none\">\n        <ion-chip color=\"secondary\">\n          <ion-label color=\"light\" class=\"ion-text-wrap\"\n            >{{transport}}</ion-label\n          >\n        </ion-chip>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">My skills & experience</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(4)\"\n            >\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n\n      <ion-item color=\"dark\" lines=\"none\" *ngFor=\"let data of trades\">\n        <img\n          src=\"https://api.haskyconnections.com/uploads/{{data.image}}\"\n          alt=\"\"\n          style=\"width: 35px;\"\n          slot=\"start\"\n        />\n        <ion-label class=\"ion-text-wrap\">{{data.name}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" mode=\"ios\">\n    <ion-card-content>\n      <div class=\"\">\n        <ion-item color=\"dark\" lines=\"none\">\n          <h2 slot=\"start\" class=\"ion-text-wrap\">Tools</h2>\n          <ion-fab-button\n            color=\"light\"\n            style=\"width: 35px; height: 35px;\"\n            slot=\"end\"\n            (click)=\"modals(8)\">\n            <ion-icon name=\"create\" color=\"dark\" mode=\"md\"></ion-icon>\n          </ion-fab-button>\n        </ion-item>\n      </div>\n      <ion-row size=\"12\">\n        <ion-col>\n          <ion-chip color=\"secondary\" *ngFor=\"let data of tools\">\n            <ion-label color=\"light\" class=\"ion-text-wrap\"\n              >{{data.description}}</ion-label>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\">\n    <ion-card-content>\n        <div class=\"ion-text-center ion-text-wrap\">\n            <h2>Documents</h2>\n        </div>\n        <ion-item *ngFor=\"let data of document; let i = index\" color=\"dark\" >   \n          <ion-button slot=\"start\" >Document - {{i+1}}</ion-button>\n          <ion-button slot=\"end\" (click)=\"DownloadInpreview(data.document)\">View Document</ion-button>\n        </ion-item>\n       \n            \n    </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");
/* harmony import */ var _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modals/modal-trades/modal-trades.module */ "./src/app/modals/modal-trades/modal-trades.module.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");











var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_8__["ModalTradesPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                ionic4_star_rating__WEBPACK_IMPORTED_MODULE_10__["StarRatingModule"],
                _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_9__["ModalTradesPageModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\n.contenedor {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\nion-list {\n  --ion-background-color: #333232;\n}\n\n.texto-encima {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.centrado {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksK0JBQUE7QUNHSjs7QUREQTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxuICB9XHJcbiAgLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxufVxyXG4udGV4dG8tZW5jaW1he1xyXG4gICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmNlbnRyYWRve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xufVxuXG4uY29udGVuZWRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbn1cblxuLnRleHRvLWVuY2ltYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uY2VudHJhZG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");











var ProfilePage = /** @class */ (function () {
    function ProfilePage(menu, services, storage, loadingController, router, nav, modal, FileTransfer, file, DocumentViewer, platform) {
        this.menu = menu;
        this.services = services;
        this.storage = storage;
        this.loadingController = loadingController;
        this.router = router;
        this.nav = nav;
        this.modal = modal;
        this.FileTransfer = FileTransfer;
        this.file = file;
        this.DocumentViewer = DocumentViewer;
        this.platform = platform;
        this.token = "";
        this.id = "";
        this.days = [];
        this.tools = [];
        this.tranportA = [];
        this.trades = [];
        this.document = [];
        this.va = 0;
        this.arrayDias = [
            {
                name: "Monday"
            },
            {
                name: "Tuesday"
            },
            {
                name: "Wednesday"
            },
            {
                name: "Thursday"
            },
            {
                name: "Friday"
            },
            {
                name: "Saturday"
            },
            {
                name: "Sunday"
            }
        ];
        this.arrayTransport = [{ name: "Vehicle" }, { name: "Transport" }];
        this.sendTrasnport = [];
        this.sendias = [];
        this.status = "Complete profile 50%";
        this.proggres = 0.5;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.days = [];
                        this.tranportA = [];
                        return [4 /*yield*/, this.gestorage()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.gestorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.days = [];
                        this.tools = [];
                        this.tranportA = [];
                        return [4 /*yield*/, this.storage.get("token").then(function (res) {
                                _this.profile = "";
                                _this.days = [];
                                _this.tranportA = [];
                                console.log(res);
                                _this.token = res.token;
                                _this.id = res.user;
                                _this.services.getUser(res.token, res.user).subscribe(function (res) {
                                    //this.user = res.data;
                                    //this.company = res.data
                                    _this.profile = "https://api.haskyconnections.com/uploads/" + res.data.profile_image;
                                    _this.firts = res.data.first_name;
                                    _this.last = res.data.last_name;
                                    _this.email = res.data.email;
                                    _this.phone = res.data.phone_number;
                                    _this.address = res.data.address;
                                    _this.availability = res.data.working_days;
                                    _this.transport = res.data.transport;
                                    _this.trades = res.data.trades;
                                    _this.document = res.data.documents;
                                    if (res.data.rating == null) {
                                        _this.va = 0;
                                    }
                                    else {
                                        _this.va = res.data.rating;
                                    }
                                    //console.log(res.data.trades);
                                    _this.address = res.data.address;
                                    _this.separator("" + res.data.working_days);
                                    _this.transports("" + res.data.transport);
                                    _this.tools = res.data.tools;
                                    console.log(res.data.address);
                                    if (res.data.tools.length == 0 || res.data.working_days == undefined || res.data.trades.length == 0 || res.data.address == undefined || res.data.address == "") {
                                        _this.status = "Complete profile 50%";
                                        _this.proggres = 0.5;
                                    }
                                    else {
                                        _this.proggres = 1.0;
                                        _this.status = "Find jobs";
                                        ;
                                    }
                                    //console.log(this.token);
                                    loading.dismiss();
                                    //this.user = res.data;
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProfilePage.prototype.hola = function () {
        // console.log(this.user);
    };
    ProfilePage.prototype.editUser = function (page) {
        var a = 0;
        if (page == "2") {
            this.newdays();
            this.storage.set("days", this.sendias);
        }
        if (page == 3) {
            this.newTransport();
            this.storage.set("transport", this.sendTrasnport);
        }
        this.router.navigate(["edit-user/" + page]);
        //this.nav.
        //console.log(this.names, this.description, this.idC, this.urlImage);
    };
    ProfilePage.prototype.editCompany = function () {
        this.router.navigate(["edit-company"]);
        this.storage.set("company", {
            name: this.names,
            description: this.description,
            id: this.idC,
            url: this.urlImage
        });
    };
    ProfilePage.prototype.separator = function (string) {
        var _a;
        //elimina el ultimo |
        var res = string.split("|");
        res.length = res.length - 1;
        (_a = this.days).push.apply(_a, res);
        console.log(this.days);
    };
    ProfilePage.prototype.newdays = function () {
        this.sendias = [];
        for (var i = 0; i < this.arrayDias.length; i++) {
            if (this.days.includes(this.arrayDias[i].name) == true) {
                this.sendias.push({
                    name: this.arrayDias[i].name,
                    isChecked: true
                });
            }
            else {
                this.sendias.push({
                    name: this.arrayDias[i].name,
                    isChecked: false
                });
            }
        }
        console.log(this.sendias);
    };
    ProfilePage.prototype.transports = function (string) {
        this.tranportA.push(string);
        console.log("tranport a ", this.tranportA);
    };
    ProfilePage.prototype.newTransport = function () {
        this.sendTrasnport = [];
        for (var i = 0; i < this.arrayTransport.length; i++) {
            if (this.tranportA.includes(this.arrayTransport[i].name) == true) {
                this.sendTrasnport.push({
                    name: this.arrayTransport[i].name,
                    isChecked: true
                });
            }
            else {
                this.sendTrasnport.push({
                    name: this.arrayTransport[i].name,
                    isChecked: false
                });
            }
        }
        console.log(this.sendTrasnport);
    };
    ProfilePage.prototype.modals = function (card) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, modal, modal, modal, modal, modal, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(card == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newDays: this.sendias,
                                    token: this.token,
                                    id: this.id,
                                    page1: true
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 3;
                    case 3:
                        if (!(card == 2)) return [3 /*break*/, 6];
                        this.newdays();
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newDays: this.sendias,
                                    token: this.token,
                                    id: this.id,
                                    page2: true
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 5:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 6;
                    case 6:
                        if (!(card == 3)) return [3 /*break*/, 9];
                        this.newTransport();
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newTrasnport: this.sendTrasnport,
                                    token: this.token,
                                    id: this.id,
                                    page3: true
                                }
                            })];
                    case 7:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 8:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 9;
                    case 9:
                        if (!(card == 4)) return [3 /*break*/, 12];
                        this.newTransport();
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newTrades: this.trades,
                                    token: this.token,
                                    id: this.id,
                                    page4: true
                                }
                            })];
                    case 10:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 11:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 12;
                    case 12:
                        if (!(card == 5)) return [3 /*break*/, 15];
                        this.newTransport();
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newTrasnport: this.sendTrasnport,
                                    token: this.token,
                                    id: this.id,
                                    page5: true
                                }
                            })];
                    case 13:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 14:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 15;
                    case 15:
                        if (!(card == 7)) return [3 /*break*/, 18];
                        this.newTransport();
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newTrasnport: this.sendTrasnport,
                                    token: this.token,
                                    id: this.id,
                                    page7: true
                                }
                            })];
                    case 16:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 17:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 18;
                    case 18:
                        if (!(card == 8)) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.modal.create({
                                component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                                componentProps: {
                                    newTools: this.tools,
                                    token: this.token,
                                    id: this.id,
                                    page8: true
                                }
                            })];
                    case 19:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 20:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            _this.gestorage();
                        });
                        _a.label = 21;
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.back = function () {
        this.router.navigate(["./home"]);
        this.menu.close("first");
        this.storage.remove("validate");
    };
    ProfilePage.prototype.DownloadInpreview = function (urls) {
        var _this = this;
        var urs = "https://api.haskyconnections.com/uploads/" + urls;
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else {
            path = this.file.dataDirectory;
        }
        var transfer = this.FileTransfer.create();
        transfer.download("" + urs, path + 'myFile.pdf').then(function (entry) {
            var url = entry.toURL();
            _this.DocumentViewer.viewDocument(url, 'application/pdf', {});
        }, function (error) {
            console.log(error);
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["DocumentViewer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["DocumentViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map