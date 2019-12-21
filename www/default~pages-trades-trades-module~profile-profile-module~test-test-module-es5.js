(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-trades-trades-module~profile-profile-module~test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/modal-trades/modal-trades.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/modal-trades/modal-trades.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-card color=\"dark\" *ngIf=\"page1\" mode=\"md\">\n      <ion-card-content>\n        <ion-row size=\"12\"> \n          <ion-col size=\"12\">\n              <ion-item mode=\"md\" color=\"dark\" >\n                  <ion-label position=\"stacked\" color=\"light\"\n                    >First name<ion-text></ion-text\n                      > </ion-label>\n                 <ion-input color=\"light\" [(ngModel)]=\"name\"></ion-input>\n                </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-item mode=\"md\" color=\"dark\" >\n                  <ion-label position=\"stacked\" color=\"light\"\n                    >Last Name<ion-text></ion-text\n                      > </ion-label>\n                 <ion-input color=\"light\"  required [(ngModel)]=\"last\" ></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-item mode=\"md\" color=\"dark\" >\n                  <ion-label position=\"stacked\" color=\"light\"\n                    >Email<ion-text></ion-text\n                      > </ion-label>\n                 <ion-input color=\"light\"  required [(ngModel)]=\"email\" readonly></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n              <ion-item mode=\"md\" color=\"dark\" >\n                  <ion-label position=\"stacked\" color=\"light\"\n                    >Phone number<ion-text></ion-text\n                      > </ion-label>\n                 <ion-input color=\"light\"  type=\"tel\" required [(ngModel)]=\"phone\" readonly></ion-input>\n              </ion-item>\n          </ion-col>\n    </ion-row>\n    <ion-row size=\"12\">\n      <ion-col size=\"6\">\n          <ion-button color=\"dark\" (click)=\"salirS()\" expand=\"block\">back</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n          <ion-button (click)=\"saveProfile()\" expand=\"block\" >save</ion-button>\n      </ion-col>\n     <ion-col size=\"12\">\n      <ion-button (click)=\"back()\" expand=\"block\" color=\"danger\">Log out</ion-button>\n     </ion-col>\n    </ion-row>\n    </ion-card-content>\n    </ion-card>\n  <ion-card color=\"dark\" *ngIf=\"page2\" mode=\"md\">\n      <ion-card-content>\n        <ion-row size=\"12\" >\n          <ion-col size=\"6\" *ngFor=\"let data of newDays\"> \n              <ion-item color=\"dark\" lines=\"none\">\n                  <ion-checkbox  id=\"{{data.name}}\" [(ngModel)]=\"data.isChecked\" mode=\"ios\"> </ion-checkbox>\n                  <label for=\"{{data.name}}\"> {{data.name}}</label>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row size=\"12\">\n            <ion-col size=\"6\">\n              <ion-button color=\"dark\"  expand=\"block\" (click)=\"salirS()\">back</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" (click)=\"save()\">save</ion-button>\n            </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card color=\"dark\" *ngIf=\"page3\" mode=\"md\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <ion-col size=\"6\" *ngFor=\"let data of newTrasnport\"> \n                <ion-item color=\"dark\">\n                  <ion-checkbox  id=\"{{data.name}}\" [(ngModel)]=\"data.isChecked\" mode=\"ios\"></ion-checkbox>\n                  <label for=\"{{data.name}}\"> {{data.name}}</label>\n                </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n              <ion-col size=\"6\">\n                <ion-button color=\"dark\" (click)=\"salirS()\" expand=\"block\">back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button expand=\"block\" (click)=\"saveTransport()\">save</ion-button>\n              </ion-col>\n          </ion-row>\n         \n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page4\" mode=\"md\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <ion-col size=\"6\" *ngFor=\"let data of tradesSelec\" > \n              <ion-item color=\"dark\" >\n                <ion-checkbox mode=\"ios\" id=\"{{data.id}}\" [(ngModel)]=\"data.isChecked\" (click)=\"saveTrades(data.isChecked,data.id, data.name, data.idEspeciality)\" [disabled]=\"disabe\"></ion-checkbox>\n                <label for=\"{{data.id}}\" class=\"ion-text-wrap\"> {{data.name}}</label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n              <ion-col size=\"6\">\n                <ion-button color=\"dark\" (click)=\"salirS()\" expand=\"block\">back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n              </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page5\" mode=\"md\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <input type=\"file\" accept=\"image/*\" (change)=\"onFileSelected($event)\">\n          </ion-row>\n          <ion-label style=\"color: red;\" *ngIf=\"imagenTrue\">{{image}}</ion-label>\n          <ion-row size=\"12\"> \n              <ion-col size=\"6\">\n                <ion-button color=\"dark\" (click)=\"salirS()\" expand=\"block\">back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button expand=\"block\" (click)=\"uploadPicture()\">save</ion-button>\n              </ion-col>\n          </ion-row>\n        </ion-card-content>\n       <div>         \n        <ion-card color=\"dark\" mode=\"md\">\n        \n          <ion-card-content>\n              <ion-label>Add document</ion-label>\n            <ion-row size=\"12\">\n              <input type=\"file\"  (change)=\"onFileSelected($event)\">\n            </ion-row>\n            <ion-row size=\"12\"> \n                <ion-col size=\"12\">\n                  <ion-button expand=\"full\" (click)=\"saveDocument()\">save</ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-label color=\"danger\" *ngIf=\"document\">Document is required</ion-label>\n          </ion-card-content>\n        </ion-card>\n\n       </div>\n         \n       \n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page6\" mode=\"md\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <div style=\"width: 100%;\">\n              <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">select your speciality</h3>\n            </div>\n          </ion-row>\n          <ion-item color=\"dark\">\n              <ion-label>Speciality</ion-label>\n              <ion-select  [(ngModel)]=\"idEspecialities\" placeholder=\"select your speciality\">\n                <ion-select-option *ngFor=\"let user of filters\" value=\"{{user.id}}\">{{user.name}}</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-row size=\"12\">\n              <div style=\"width: 100%;\"><br>\n                <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">References are require to verify your experience</h3><br>\n              </div>\n              <ion-col size-md=\"4\" size-xs=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"4\" *ngFor=\"let data of experience\"  (click)=\"saveExperience(data.id, data.value)\"> \n                <ion-chip [class]=\"changeColor2\" id={{data.id}} >\n                  <ion-label >{{data.name}}</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"block\" class=\"ion-text-wrap\" (click)=\"selectMore()\">Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page7\" mode=\"md\">\n          <ion-card-content>\n              <ion-searchbar color=\"light\"  [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"></ion-searchbar><br>\n              <ion-list [hidden]=\"autocompleteItems.length == 0\" style=\"height: 200px;\"> \n                <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n                  <ion-label color=\"light\"> {{ item.description }}</ion-label>\n                </ion-item>\n              </ion-list><br>\n              <div id=\"map\" style=\" height: 300px;\" >sdkjasld</div>\n              <br>\n              <div class=\"ion-text-center\">\n                <p>Distance <ion-chip style=\"background-color: #05b7d7; color: #fff;\">{{km}} km</ion-chip> </p>\n              </div>\n              <ion-item color=\"dark\" lines=\"none\">\n              \n                <ion-range min=\"1\" max=\"50\" color=\"secondary\" pin=\"true\" mode=\"md\" (ionChange)=\"dibujar($event)\" [(ngModel)]=\"km\">\n                  <ion-label slot=\"start\">1 km</ion-label>\n                  <ion-label slot=\"end\">50 km</ion-label>\n                </ion-range>\n              </ion-item>\n            \n             <ion-row size=\"12\">\n                <ion-col size=\"6\">\n                    <ion-button color=\"dark\" (click)=\"salirS()\" expand=\"block\">back</ion-button>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                      <ion-button color=\"primary\" (click)=\"saveTradesAdress()\" expand=\"block\">save</ion-button>\n                    </ion-col>\n             </ion-row>\n          </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page8\" mode=\"md\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <ion-col size=\"12\" *ngFor=\"let data of toolSelec\"> \n                <ion-item color=\"dark\" lines=\"none\">\n                    <ion-checkbox id=\"{{data.name}}\" [(ngModel)]=\"data.isChecked\" (click)=\"saveToolsdb(data.isChecked, data.id)\" mode=\"ios\"></ion-checkbox>\n                    <label for=\"{{data.name}}\" class=\"ion-text-wrap\"> {{data.name}}</label>\n                </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n              <ion-col size=\"6\">\n                <ion-button color=\"dark\"  expand=\"block\" (click)=\"salirS()\">back</ion-button>\n              </ion-col>\n             \n          </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modals/modal-trades/modal-trades.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/modal-trades/modal-trades.module.ts ***!
  \************************************************************/
/*! exports provided: ModalTradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTradesPageModule", function() { return ModalTradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_trades_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");






var ModalTradesPageModule = /** @class */ (function () {
    function ModalTradesPageModule() {
    }
    ModalTradesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_modal_trades_page__WEBPACK_IMPORTED_MODULE_5__["ModalTradesPage"]]
        })
    ], ModalTradesPageModule);
    return ModalTradesPageModule;
}());



/***/ }),

/***/ "./src/app/modals/modal-trades/modal-trades.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/modal-trades/modal-trades.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\n.click2 {\n  --background: white;\n}\n\n.onclick {\n  --background: #05b7d7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vZGFsLXRyYWRlcy9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxcbW9kYWxzXFxtb2RhbC10cmFkZXNcXG1vZGFsLXRyYWRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9tb2RhbC10cmFkZXMvbW9kYWwtdHJhZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FET0E7RUFDRSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbW9kYWwtdHJhZGVzL21vZGFsLXRyYWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuLmNsaWNrMntcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxufVxyXG4ub25jbGlja3tcclxuICAtLWJhY2tncm91bmQ6ICMwNWI3ZDc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xufVxuXG4uY2xpY2syIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm9uY2xpY2sge1xuICAtLWJhY2tncm91bmQ6ICMwNWI3ZDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modals/modal-trades/modal-trades.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/modal-trades/modal-trades.page.ts ***!
  \**********************************************************/
/*! exports provided: ModalTradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTradesPage", function() { return ModalTradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var ModalTradesPage = /** @class */ (function () {
    function ModalTradesPage(modalCtrl, loadingController, services, toastController, zone, geolocation, router, storage, navParam, platform) {
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.services = services;
        this.toastController = toastController;
        this.zone = zone;
        this.geolocation = geolocation;
        this.router = router;
        this.storage = storage;
        this.navParam = navParam;
        this.platform = platform;
        this.lat = "";
        this.lng = "";
        this.document = false;
        this.newDays = [];
        this.page1 = false;
        this.page2 = false;
        this.page3 = false;
        this.page4 = false;
        this.page5 = false;
        this.page7 = false;
        this.page8 = false;
        this.newTools = [];
        this.newTrasnport = [];
        this.newTrades = [];
        this.days = [];
        this.a = "";
        this.b = "";
        this.km = 20;
        this.page6 = false;
        this.disabe = false;
        this.personaInfo = true;
        this.hidden = true;
        this.especialities = [];
        this.tradesName = [];
        this.toolsName = [];
        this.tradesSelec = [];
        this.toolSelec = [];
        this.filters = [];
        this.circleDelete = [];
        this.changeColor2 = "click2";
        this.color1 = "primary";
        this.image = "the picture is required";
        this.imagenTrue = false;
        this.experience = [
            {
                id: "l234",
                name: "I´m interested in learning this trade.",
                value: 0,
                va: 12345
            },
            {
                id: "1235",
                name: "More than 6 months. ",
                value: 6,
                va: 12346
            },
            {
                id: "1236",
                name: "More than 1 year. ",
                value: 12,
                va: 12347
            },
            {
                id: "1237",
                name: "More than 2 years. ",
                value: 24,
                va: 12348
            },
            {
                id: "1238",
                name: "More than 5 years. ",
                value: 60,
                va: 12349
            },
            {
                id: "1239",
                name: "More than 10 years. ",
                value: 120,
                va: 12340
            }
        ];
        this.temporal = [];
        this.selectedFile = null;
        this.geocoder = new google.maps.Geocoder;
        var elem = document.createElement("div");
        this.GooglePlaces = new google.maps.places.PlacesService(elem);
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
            input: ''
        };
        this.autocompleteItems = [];
        this.markers = [];
    }
    ModalTradesPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getUser(this.token, this.id);
                        this.getTradesName();
                        this.getToolsName();
                        this.getrades();
                        this.getEspeciality();
                        this.getTools();
                        this.currentPosition();
                        this.hidden = false;
                        return [4 /*yield*/, this.dia()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.dia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("dias").then(function (res) {
                            _this.days = res;
                            console.log("los dias ", _this.days);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.salirS = function () {
        this.modalCtrl.dismiss();
    };
    ModalTradesPage.prototype.salirC = function () {
        this.modalCtrl.dismiss({
            data: this.daysS
        });
    };
    ModalTradesPage.prototype.save = function () {
        this.dias();
        this.saveTradesDays();
    };
    ModalTradesPage.prototype.dias = function () {
        this.temporal = [];
        for (var i = 0; i < this.newDays.length; i++) {
            if (this.newDays[i].isChecked == true) {
                this.temporal.push(this.newDays[i].name + "|");
            }
        }
        //console.log(this.temporal);
        //console.log(this.temporal.join(''));
        //convertir array en string
        this.daysS = this.temporal.join("");
        console.log(this.daysS);
    };
    ModalTradesPage.prototype.saveTradesDays = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, loading_1, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.daysS == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Select one o more days',
                                duration: 2000,
                                position: 'top',
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 3:
                        loading_1 = _a.sent();
                        this.presentLoading(loading_1);
                        data = {
                            id: this.id,
                            working_days: this.daysS
                        };
                        return [4 /*yield*/, this.services.addTradeWorkinDays(data, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading_1.dismiss();
                                    _this.modalCtrl.dismiss({
                                        data: _this.daysS,
                                        valor: "2"
                                    });
                                }
                                else {
                                    loading_1.dismiss();
                                }
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ModalTradesPage.prototype.getUser = function (token, id) {
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
                        return [4 /*yield*/, this.services.getUser(token, id).subscribe(function (res) {
                                _this.name = res.data.first_name;
                                _this.last = res.data.last_name;
                                _this.email = res.data.email;
                                _this.phone = res.data.phone_number;
                                if (res.data.address == null) {
                                    loading.dismiss();
                                }
                                else {
                                    loading.dismiss();
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.saveProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, loading_2, datas;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name == "" || this.last == "" || this.phone == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Complete form',
                                duration: 2000,
                                position: 'top',
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 3:
                        loading_2 = _a.sent();
                        this.presentLoading(loading_2);
                        datas = {
                            first_name: this.name,
                            last_name: this.last,
                            email: this.email,
                            phone_number: this.phone,
                            id: this.id
                        };
                        return [4 /*yield*/, this.services.editUser(datas, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading_2.dismiss();
                                    _this.modalCtrl.dismiss({
                                        data: _this.daysS,
                                        valor: "2"
                                    });
                                }
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.saveTransport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, i, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 1:
                        loading = _a.sent();
                        if (!(this.newTrasnport[0].isChecked == true &&
                            this.newTrasnport[1].isChecked == true || this.newTrasnport[0].isChecked == false && this.newTrasnport[1].isChecked == false)) return [3 /*break*/, 2];
                        this.presentToast("Select one");
                        return [3 /*break*/, 7];
                    case 2:
                        this.presentLoading(loading);
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < this.newTrasnport.length)) return [3 /*break*/, 7];
                        if (!(this.newTrasnport[i].isChecked == true)) return [3 /*break*/, 5];
                        data = {
                            id: this.id,
                            transport: this.newTrasnport[i].name
                        };
                        return [4 /*yield*/, this.services
                                .addTradesTransport(data, this.token)
                                .subscribe(function (res) {
                                if (res.type == "success") {
                                    loading.dismiss();
                                    _this.modalCtrl.dismiss({
                                        data: _this.daysS,
                                        valor: "2"
                                    });
                                }
                                //this.router.navigate(["/user"]);
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        console.log(" no aceptado " + this.newTrasnport[i].name);
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.presentToast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "" + mensaje,
                            duration: 2000,
                            position: "top"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    ModalTradesPage.prototype.uploadPicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_3, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedFile == null)) return [3 /*break*/, 1];
                        this.imagenTrue = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 2:
                        loading_3 = _a.sent();
                        loading_3.present();
                        data = {
                            user_id: this.id,
                            file: this.selectedFile
                        };
                        this.services.uploadPicturePerfil(data, this.token).subscribe(function (res) {
                            loading_3.dismiss();
                            _this.modalCtrl.dismiss();
                            console.log(res);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.getrades = function () {
        var _this = this;
        this.services.getTrades().subscribe(function (res) {
            //console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                if (_this.tradesName.includes(res.data[i].name) == true) {
                    _this.tradesSelec.push({
                        id: res.data[i].id,
                        name: res.data[i].name,
                        idEspeciality: res.data[i].specialty[0].id,
                        isChecked: true
                    });
                }
                else {
                    _this.tradesSelec.push({
                        id: res.data[i].id,
                        name: res.data[i].name,
                        idEspeciality: res.data[i].specialty[0].id,
                        isChecked: false
                    });
                }
            }
        });
        //console.log(this.newTrades[1].name.includes("Framer"));
        console.log(this.tradesSelec);
    };
    ModalTradesPage.prototype.getTools = function () {
        var _this = this;
        this.services.getTools().subscribe(function (res) {
            //console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                if (_this.toolsName.includes(res.data[i].description) == true) {
                    _this.toolSelec.push({
                        id: res.data[i].id,
                        name: res.data[i].description,
                        isChecked: true
                    });
                }
                else {
                    _this.toolSelec.push({
                        id: res.data[i].id,
                        name: res.data[i].description,
                        isChecked: false
                    });
                }
            }
        });
    };
    ModalTradesPage.prototype.saveToolsdb = function (checked, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        if (checked == false) {
                            this.services.addTradesTools(this.id, id, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading.dismiss();
                                }
                                else {
                                    loading.dismiss();
                                }
                            }, function (err) {
                                loading.dismiss();
                            });
                        }
                        if (checked == true) {
                            data = {
                                user_id: this.id,
                                tool_id: id
                            };
                            this.services.deleteTools(data, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading.dismiss();
                                }
                                else {
                                    loading.dismiss();
                                }
                            }, function (error) {
                                loading.dismiss();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.getTradesName = function () {
        for (var i = 0; i < this.newTrades.length; i++) {
            this.tradesName.push(this.newTrades[i].name);
        }
        //console.log(this.tradesName.includes("Framer"));
    };
    ModalTradesPage.prototype.getToolsName = function () {
        for (var i = 0; i < this.newTools.length; i++) {
            this.toolsName.push(this.newTools[i].description);
        }
        console.log(this.toolsName);
    };
    ModalTradesPage.prototype.saveTrades = function (checked, idTrade, name, idEspeciality) {
        this.filters = [];
        if (checked == true) {
            //console.log(this.id, idTrade, idEspeciality)
            this.deleteTrades(idTrade, idEspeciality);
            console.log("entro una vez aqui");
        }
        if (checked == false) {
            this.filters = [];
            this.idtrade = idTrade;
            //this.page4 = false;
            this.disabe = true;
            this.page6 = true;
            this.especiality = name;
            this.filterespecialities();
        }
    };
    ModalTradesPage.prototype.deleteTools = function (cheked, idTools) {
        if (cheked == true) {
        }
        if (cheked == false) {
        }
    };
    ModalTradesPage.prototype.getEspeciality = function () {
        var _this = this;
        this.services.getEspeciality().subscribe(function (res) {
            var _a;
            (_a = _this.especialities).push.apply(_a, res.data);
        });
    };
    ModalTradesPage.prototype.filterespecialities = function () {
        var _this = this;
        //return console.log(this.especialities.filter((item) => item.trade.name.includes("General Labour")));
        this.filters = [];
        this.filters = this.especialities.filter(function (item) { return item.trade.name.includes(_this.especiality); });
        console.log(this.filters);
    };
    ModalTradesPage.prototype.saveExperience = function (id, value) {
        for (var i = 0; i < this.experience.length; i++) {
            if (this.experience[i].id == id) {
                document.getElementById("" + this.experience[i].id).className = "onclick md ion-activatable hydrated";
                this.valueExperiencie = value;
                //alert(this.idTrades);
            }
            else {
                document.getElementById("" + this.experience[i].id).className = "click2 md ion-activatable hydrated";
            }
        }
    };
    ModalTradesPage.prototype.selectMore = function () {
        //this.page4 = true;
        this.disabe = false;
        console.log(this.idtrade, this.valueExperiencie, this.idEspecialities);
        this.saveTradesdb();
    };
    ModalTradesPage.prototype.saveTradesdb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_4, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.idEspecialities == undefined)) return [3 /*break*/, 1];
                        this.presentToast('specialty is required');
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(this.valueExperiencie == undefined)) return [3 /*break*/, 2];
                        this.presentToast('Experiencie is required');
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 3:
                        loading_4 = _a.sent();
                        loading_4.present();
                        data = {
                            user_id: this.id,
                            trade_id: this.idtrade,
                            overtime: this.valueExperiencie,
                            specialty_id: this.idEspecialities
                        };
                        return [4 /*yield*/, this.services.addTrades(data, this.token).subscribe(function (res) {
                                _this.presentToast("add trade to user successfully");
                                _this.filters = [];
                                _this.page6 = false;
                                loading_4.dismiss();
                                _this.idtrade = undefined;
                                _this.valueExperiencie = undefined;
                                _this.idEspecialities = undefined;
                            }, function (error) {
                                _this.presentToast("trade and especiality it already exists");
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.deleteTrades = function (idTrade, idEspeciality) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        data = {
                            user_id: this.id,
                            trade_id: idTrade,
                            specialty_id: idEspeciality
                        };
                        return [4 /*yield*/, this.services.deleteTrades(data, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading.dismiss();
                                }
                            })
                            //console.log("entro una vez aqui")
                        ];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            if (predictions) {
                _this.zone.run(function () {
                    predictions.forEach(function (prediction) {
                        _this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    };
    ModalTradesPage.prototype.selectSearchResult = function (item) {
        var _this = this;
        this.metros = 20;
        this.clearMarkers();
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                /* let position = {
                     lat: results[0].geometry.location.lat,
                      lng: results[0].geometry.location.lng
                };*/
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: _this.map
                });
                _this.markers.push(marker);
                _this.mark = marker;
                console.log(item.description);
                _this.adress = item.description;
                _this.map.setCenter(results[0].geometry.location);
                //this.latlng = new  google.maps.LatLng(results[0].geometry.viewport.ka.h, results[0].geometry.viewport.pa.h);  
                _this.a = results[0].geometry.viewport.ka.h;
                _this.b = results[0].geometry.viewport.pa.h;
                _this.drawCircle(_this.a, _this.b, 20000);
            }
        });
    };
    ModalTradesPage.prototype.clearMarkers = function () {
        for (var i = 0; i < this.markers.length; i++) {
            //console.log(this.markers[i])
            this.markers[i].setMap(null);
        }
        this.markers = [];
        if (this.circle == undefined) {
            console.log("hola");
        }
        else {
            this.circle.setMap(null);
        }
    };
    ModalTradesPage.prototype.drawCircle = function (lat, lng, num) {
        var latj = new google.maps.LatLng(lat, lng);
        var sunCircle = {
            strokeColor: "#5FC95A",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#c3fc49",
            fillOpacity: 0.35,
            map: this.map,
            center: latj,
        };
        var cityCircle = new google.maps.Circle(sunCircle);
        //this.circleDelete.push(cityCircle);
        //circle type any global , num = radius, mark = market de gooogle
        this.circle = cityCircle;
        cityCircle.setRadius(num);
        cityCircle.bindTo('center', this.mark, 'position');
        console.log(cityCircle);
    };
    ModalTradesPage.prototype.dibujar = function (event) {
        if (this.mark == undefined) {
        }
        else {
            this.km = event.detail.value;
            var radius = event.detail.value * 1000;
            this.circle.setRadius(radius);
            this.circle.bindTo('center', this.mark, 'position');
        }
    };
    ModalTradesPage.prototype.currentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rta, myLatLng;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        rta = _a.sent();
                        myLatLng = {
                            lat: rta.coords.latitude,
                            lng: rta.coords.longitude
                        };
                        this.map = new google.maps.Map(document.getElementById('map'), {
                            center: { lat: rta.coords.latitude, lng: rta.coords.longitude },
                            zoom: 10
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.saveTradesAdress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ""
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        if (this.adress == "") {
                        }
                        else {
                            data = {
                                id: this.id,
                                address: this.adress,
                                location: this.a + ", " + this.b
                            };
                            this.services.addTradeAdress(data, this.token).subscribe(function (res) {
                                if (res.type == "success") {
                                    loading.dismiss();
                                    _this.modalCtrl.dismiss({
                                        data: _this.daysS,
                                        valor: "2",
                                        address: _this.adress
                                    });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.prototype.back = function () {
        this.modalCtrl.dismiss();
        this.router.navigate(["./home"]);
        //this.menu.close("first");
        this.storage.remove("validate");
    };
    ModalTradesPage.prototype.saveDocument = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_5, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedFile == null)) return [3 /*break*/, 1];
                        this.document = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadingController.create({
                            message: ''
                        })];
                    case 2:
                        loading_5 = _a.sent();
                        this.presentLoading(loading_5);
                        data = {
                            user_id: this.id,
                            file: this.selectedFile
                        };
                        this.services.addDocumentd(data, this.token).subscribe(function (res) {
                            console.log(res);
                            if (res.type == "success") {
                                loading_5.dismiss();
                                _this.modalCtrl.dismiss();
                            }
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModalTradesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "nombre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "pais", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "newDays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalTradesPage.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalTradesPage.prototype, "token", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page5", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page7", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "page8", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "newTools", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "newTrasnport", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalTradesPage.prototype, "newTrades", void 0);
    ModalTradesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-modal-trades",
            template: __webpack_require__(/*! raw-loader!./modal-trades.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/modal-trades/modal-trades.page.html"),
            styles: [__webpack_require__(/*! ./modal-trades.page.scss */ "./src/app/modals/modal-trades/modal-trades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ModalTradesPage);
    return ModalTradesPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-trades-trades-module~profile-profile-module~test-test-module-es5.js.map