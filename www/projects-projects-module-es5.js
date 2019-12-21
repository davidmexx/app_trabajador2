(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/projects.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n        <ion-segment-button value=\"job\" mode=\"md\">\n          <ion-label color=\"light\">works</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"activate\" mode=\"md\">\n          <ion-label color=\"light\">pending works</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <div *ngFor=\"let i of viewJob\">\n    <ion-card color=\"dark\" (click)=\"detail(i.idRequest)\" >\n      <ion-card-header>\n        <ion-card-title class=\"ion ion-text-capitalize\">\n          {{i.nameProject}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{i.addres}}</p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "./src/app/pages/projects/projects.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]
    }
];
var ProjectsPageModule = /** @class */ (function () {
    function ProjectsPageModule() {
    }
    ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
        })
    ], ProjectsPageModule);
    return ProjectsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\n.create {\n  width: 100%;\n  height: auto;\n  background-color: #222428;\n}\n\n.ion-color-success {\n  --ion-color-base: #10dca499 !important;\n}\n\n.projects {\n  width: 100%;\n  height: 100px;\n  background-color: #222428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xccHJvamVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0Usc0NBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xyXG59XHJcbi5jcmVhdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xyXG59XHJcbi5pb24tY29sb3Itc3VjY2VzcyB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogIzEwZGNhNDk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbn1cblxuLmNyZWF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XG59XG5cbi5pb24tY29sb3Itc3VjY2VzcyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMxMGRjYTQ5OSAhaW1wb3J0YW50O1xufVxuXG4ucHJvamVjdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/projects.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/projects/projects.page.ts ***!
  \*************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(storage, router, services, pushNotification, loadingController) {
        this.storage = storage;
        this.router = router;
        this.services = services;
        this.pushNotification = pushNotification;
        this.loadingController = loadingController;
        this.language = [];
        this.button = {};
        this.notifications = [];
        this.jobs = [];
        this.viewJob = [];
        this.fecha = new Date();
        this.deatil = "";
        this.newdate = this.fecha.getFullYear() + "-" + (this.fecha.getMonth() + 1) + "-" + this.fecha.getDate();
    }
    ProjectsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.segment.value = 'job';
                        return [4 /*yield*/, this.pushNotification.configuracionInicial()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.gettoken()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get("language").then(function (data) {
                                console.log("init");
                                if (data === "en") {
                                    fetch("../../../assets/language.json")
                                        .then(function (res) { return res.json(); })
                                        .then(function (json) {
                                        _this.language = json.en[0].menu[0];
                                        _this.button = json.en[0].button[0];
                                        console.log(_this.language);
                                    });
                                }
                                if (data === "es") {
                                    fetch("../../../assets/language.json")
                                        .then(function (res) { return res.json(); })
                                        .then(function (json) {
                                        _this.language = json.es[0].menu[0];
                                        _this.button = json.es[0].button[0];
                                        console.log(_this.language);
                                    });
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get("detail").then(function (res) {
                                if (res != null) {
                                    _this.router.navigate(['user/detail']);
                                }
                                else {
                                }
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get("oneSignal").then(function (res) {
                                _this.ignalId = res;
                                console.log("el id es ", res);
                            })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.saveOneSignalId(this.ignalId, this.token)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectsPage.prototype.saveOneSignalId = function (idSignal, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    onesignal_id: idSignal,
                    id: this.idUser
                };
                this.services.editUserSignal(data, token).subscribe(function (res) {
                    console.log(res.type);
                });
                return [2 /*return*/];
            });
        });
    };
    ProjectsPage.prototype.gettoken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("token").then(function (res) {
                            _this.token = res.token;
                            _this.idUser = res.user;
                            console.log("token es", res);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectsPage.prototype.viewJo = function (valor) {
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
                        this.viewJob = [];
                        this.services.viewJobs(this.token).subscribe(function (res) {
                            console.log(res);
                            for (var i = 0; i < res.data.length; i++) {
                                if (valor == 0) {
                                    if (res.data[i].request_worker == null) {
                                    }
                                    else {
                                        var hoy = new Date();
                                        var fechaFormulario = new Date("" + res.data[i].request_worker.start_date);
                                        hoy.setHours(0, 0, 0, 0);
                                        if (hoy <= fechaFormulario && res.data[i].user_accepted == valor) {
                                            _this.viewJob.push({
                                                idRequest: res.data[i].request_id,
                                                nameProject: res.data[i].project.name,
                                                addres: res.data[i].project.address
                                            });
                                        }
                                    }
                                }
                                else {
                                    if (res.data[i].request_worker == null) {
                                    }
                                    else {
                                        var hoy = new Date();
                                        var fechaFormulario = new Date("" + res.data[i].request_worker.start_date);
                                        hoy.setHours(0, 0, 0, 0);
                                        if (res.data[i].user_accepted == valor && res.data[i].project.status == "pending") {
                                            _this.viewJob.push({
                                                idRequest: res.data[i].request_id,
                                                nameProject: res.data[i].project.name,
                                                addres: res.data[i].project.address
                                            });
                                        }
                                    }
                                }
                            }
                            loading.dismiss();
                        }, function (error) {
                            loading.dismiss();
                        });
                        console.log("los trabajos", this.viewJob);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectsPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectsPage.prototype.detail = function (id) {
        if (this.deatil == "0") {
            this.storage.set("detail", { id: id, enabled: false });
            this.router.navigate(['user/detail']);
        }
        else {
            this.storage.set("detail", { id: id, enabled: true });
            this.router.navigate(['user/detail']);
        }
    };
    ProjectsPage.prototype.doRefresh = function (event) {
        var _this = this;
        if (this.deatil == "0") {
            console.log('Begin async operation');
            setTimeout(function () {
                console.log('Async operation has ended');
                _this.viewJo(0);
                event.target.complete();
            }, 2000);
        }
        else {
            console.log('Begin async operation');
            setTimeout(function () {
                console.log('Async operation has ended');
                _this.viewJo(1);
                event.target.complete();
            }, 2000);
        }
    };
    ProjectsPage.prototype.segmentChanged = function (event) {
        console.log(event.detail.value);
        if (event.detail.value == "activate") {
            this.deatil = "1";
            this.viewJo(1);
        }
        else {
            this.deatil = "0";
            this.viewJo(0);
        }
    };
    ProjectsPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_5__["TestingService"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSegment"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSegment"])
    ], ProjectsPage.prototype, "segment", void 0);
    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-projects",
            template: __webpack_require__(/*! raw-loader!./projects.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.page.html"),
            styles: [__webpack_require__(/*! ./projects.page.scss */ "./src/app/pages/projects/projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_testing_service__WEBPACK_IMPORTED_MODULE_5__["TestingService"], _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], ProjectsPage);
    return ProjectsPage;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var NotificationsService = /** @class */ (function () {
    function NotificationsService(oneSignal, router, nav, storage) {
        this.oneSignal = oneSignal;
        this.router = router;
        this.nav = nav;
        this.storage = storage;
        this.mensajes = [
        // {
        //   title: 'Titulo de la push',
        //   body: 'Este es el body de la push',
        //   date: new Date()
        // }
        ];
        this.pushListener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NotificationsService.prototype.configuracionInicial = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.oneSignal.startInit('cd4edb24-8d4f-4caa-b16b-ec35440f18c2', '183537520635');
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
                this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
                    // do something when notification is received
                    console.log('Notificación recibida', noti);
                    _this.notificacionRecibida(noti);
                    //noti
                });
                this.oneSignal.handleNotificationOpened().subscribe(function (noti) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // do something when a notification is opened
                                console.log('Notificación abierta', noti);
                                return [4 /*yield*/, this.notificacionRecibida(noti.notification)];
                            case 1:
                                _a.sent();
                                //this.router.navigate(['/detail-project']);
                                //let ruta = noti.notification.payload.additionalData.ruta;
                                //this.router.navigate([`/user/user`]);
                                //console.log("if no", noti.notification.payload.additionalData.request_id);
                                if (noti.notification.payload.additionalData.params == "request") {
                                    this.storage.set("detail", { id: noti.notification.payload.additionalData.request_id, enabled: false });
                                    this.router.navigate(["/user/detail"]);
                                }
                                else if (noti.notification.payload.additionalData.params == "acepted") {
                                    this.storage.set("detail", { id: noti.notification.payload.additionalData.request_id, enabled: true });
                                    this.router.navigate(["/user/detail"]);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                // Obtener ID del suscriptor
                this.oneSignal.getIds().then(function (info) {
                    _this.userId = info.userId;
                    _this.storage.set("oneSignal", info.userId);
                    console.log(_this.userId);
                });
                this.oneSignal.endInit();
                return [2 /*return*/];
            });
        });
    };
    NotificationsService.prototype.getUserIdOneSignal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Cargando userId');
                        return [4 /*yield*/, this.oneSignal.getIds()];
                    case 1:
                        info = _a.sent();
                        this.userId = info.userId;
                        return [2 /*return*/, info.userId];
                }
            });
        });
    };
    NotificationsService.prototype.notificacionRecibida = function (noti) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, existePush;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                payload = noti.payload;
                existePush = this.mensajes.find(function (mensaje) { return mensaje.notificationID === payload.notificationID; });
                if (existePush) {
                    return [2 /*return*/];
                }
                this.mensajes.unshift(payload);
                this.pushListener.emit(payload);
                return [2 /*return*/];
            });
        });
    };
    NotificationsService.ctorParameters = function () { return [
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es5.js.map