(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hours-hours-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hours/hours.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hours/hours.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n  <div *ngFor=\"let i of viewJob\" style=\"width: 100%;\">\n    <ion-card *ngIf=\"i.project.status == 'active'\" color=\"dark\">\n      <ion-card-content>\n        <ion-item lines=\"none\" color=\"dark\">\n          <ion-label slot=\"start\" color=\"light\" class=\"ion-text-wrap\">\n              Project name\n          </ion-label>\n          <ion-label slot=\"end\" color=\"light\" class=\"ion-text-wrap\">\n            {{i.project.name}}\n        </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"dark\">\n          <ion-label slot=\"start\" color=\"light\" class=\"ion-text-wrap\">\n              Supervior name\n          </ion-label>\n          <ion-label slot=\"end\" color=\"light\" class=\"ion-text-wrap\">\n            {{i.project.supervisor_name}}\n        </ion-label>\n        </ion-item> \n        \n        <ion-button (click)=\"generateQr(i.project_id, i.request_id)\">Generate Qr </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/hours/hours.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/hours/hours.module.ts ***!
  \*********************************************/
/*! exports provided: HoursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursPageModule", function() { return HoursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hours_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hours.page */ "./src/app/pages/hours/hours.page.ts");







var routes = [
    {
        path: '',
        component: _hours_page__WEBPACK_IMPORTED_MODULE_6__["HoursPage"]
    }
];
var HoursPageModule = /** @class */ (function () {
    function HoursPageModule() {
    }
    HoursPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hours_page__WEBPACK_IMPORTED_MODULE_6__["HoursPage"]]
        })
    ], HoursPageModule);
    return HoursPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hours/hours.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/hours/hours.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG91cnMvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxob3Vyc1xcaG91cnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob3Vycy9ob3Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG91cnMvaG91cnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxuICB9XHJcbiAgXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/hours/hours.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/hours/hours.page.ts ***!
  \*******************************************/
/*! exports provided: HoursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursPage", function() { return HoursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HoursPage = /** @class */ (function () {
    function HoursPage(services, storage, nav) {
        this.services = services;
        this.storage = storage;
        this.nav = nav;
        this.viewJob = [];
        this.endTimes = "";
        this.endT = "";
    }
    HoursPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gettoken()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.viewJo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HoursPage.prototype.viewJo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.viewJob = [];
                this.services.viewJobs(this.token).subscribe(function (res) {
                    var _a;
                    //console.log(res.data)
                    (_a = _this.viewJob).push.apply(_a, res.data);
                    console.log("los trabajos", _this.viewJob);
                }, function (error) {
                    // loading.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    HoursPage.prototype.gettoken = function () {
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
    HoursPage.prototype.generateQr = function (projectId, requestId) {
        console.log(projectId, requestId);
        this.nav.navigateForward(['/view-qr', projectId, requestId]);
    };
    HoursPage.prototype.endTime = function () {
        this.endTimes = this.endT.substr(11, 5);
        console.log("final riempo", this.endT.substr(11, 5));
    };
    HoursPage.ctorParameters = function () { return [
        { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    HoursPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hours',
            template: __webpack_require__(/*! raw-loader!./hours.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hours/hours.page.html"),
            styles: [__webpack_require__(/*! ./hours.page.scss */ "./src/app/pages/hours/hours.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], HoursPage);
    return HoursPage;
}());



/***/ })

}]);
//# sourceMappingURL=hours-hours-module-es5.js.map