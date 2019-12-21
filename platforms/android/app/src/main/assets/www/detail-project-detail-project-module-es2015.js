(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-project-detail-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-project/detail-project.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-project/detail-project.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"dark\">\n    <ion-title>DetailProject</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-card color=\"dark\" mode=\"md\">\n    <ion-card-content>\n      <ion-row size=\"12\">\n        <ion-col size=\"6\">\n          <ion-avatar\n            style=\"width: 110px !important; height: 110px !important;\"\n          >\n            <img [src]=\"profile_image\"  style=\"background-size:auto;\"/>\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"6\">\n          <h2 class=\"ion-text-wrap\">{{first_name}} {{last_name}}</h2>\n         \n              <ionic4-star-rating #rating\n              activeIcon = \"ios-star\"\n              defaultIcon = \"ios-star-outline\" \n              activeColor = \"#05b7d7\"\n              defaultColor = \"#aaaaaa\"\n              readonly = \"false\"\n              rating = \"{{va}}\"\n              fontSize = \"32px\"\n              >\n          </ionic4-star-rating>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card color=\"dark\" >\n    <ion-card-content *ngFor=\"let data of project\">\n          \n        <ion-list style=\"background-color: #222428; \">\n            <ion-item lines=\"none\" >\n                <ion-label style=\"font-size: 17px\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Description </ion-label>\n                <ion-input slot=\"end\" color=\"light\" readonly > {{data.project.name}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Experience  </ion-label>\n                    <ion-input slot=\"end\" color=\"light\" readonly  >{{data.experience}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\"> Start date </ion-label>\n                    <ion-input slot=\"end\" color=\"light\" readonly  >{{data.start_date}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">End date</ion-label>\n                    <ion-input slot=\"end\" color=\"light\" readonly> {{data.end_date}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Weekdays</ion-label>\n                    <ion-label slot=\"end\" class=\"ion-text-wrap\" color=\"light\">{{dias}}</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Start time</ion-label>\n                    <ion-input slot=\"end\" color=\"light\" readonly>{{data.start_time}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n                    <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">End time </ion-label>\n                    <ion-input slot=\"end\" color=\"light\" readonly>{{data.end_time}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">hourly payment </ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly>{{data.cost}}/hr</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Location </ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly  >{{data.project.address}}</ion-input>\n              \n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-button (click)=\"openAddress(data.project.address)\">View address</ion-button>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Supervisor name </ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly  >{{data.project.supervisor_name}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Supervisor phone </ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly >{{data.project.supervisor_phone}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Break time </ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly >{{data.project.break_time.description}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Paid break time</ion-label>\n              <ion-input slot=\"end\" color=\"light\" readonly >{{data.project.paid_break_time.description}}</ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" >\n              <ion-label style=\"font-size: 17px;\" position=\"fixed\" color=\"light\" class=\"ion-text-wrap\">Tasks</ion-label><br>\n            </ion-item>\n            <ion-item lines=\"none\">\n                <ion-textarea rows=\"6\" cols=\"20\" color=\"light\">{{data.task}}</ion-textarea>\n                \n            </ion-item>\n        </ion-list>\n        <ion-row size=\"12\">\n          <ion-col size=\"6\" [hidden]=\"enabled\">\n            <ion-button (click)=\"acceptjob()\" >Accept job </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n              <ion-button (click)=\"callContractor(data.project.user.phone_number)\" color=\"success\">\n                  <ion-icon name=\"call\"></ion-icon>\n              </ion-button>\n            </ion-col>\n        </ion-row>\n                   \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectPageModule", function() { return DetailProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-project.page */ "./src/app/pages/detail-project/detail-project.page.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");








const routes = [
    {
        path: '',
        component: _detail_project_page__WEBPACK_IMPORTED_MODULE_6__["DetailProjectPage"]
    }
];
let DetailProjectPageModule = class DetailProjectPageModule {
};
DetailProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_project_page__WEBPACK_IMPORTED_MODULE_6__["DetailProjectPage"]]
    })
], DetailProjectPageModule);



/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\nion-item {\n  --ion-background-color: #222428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlsLXByb2plY3QvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxkZXRhaWwtcHJvamVjdFxcZGV0YWlsLXByb2plY3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXRhaWwtcHJvamVjdC9kZXRhaWwtcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVFO0VBQ0UsK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1wcm9qZWN0L2RldGFpbC1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/detail-project/detail-project.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-project/detail-project.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectPage", function() { return DetailProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");








let DetailProjectPage = class DetailProjectPage {
    constructor(storage, services, loadingController, route, callNumber, launchNavigator) {
        this.storage = storage;
        this.services = services;
        this.loadingController = loadingController;
        this.route = route;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.project = [];
        this.days = [];
        this.va = 0;
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.days = [];
            yield this.storage.get("detail").then(res => {
                this.id = res.id;
                this.enabled = res.enabled;
                console.log("detal ud ", res);
            });
            yield this.getToken();
            yield this.detailProject(this.id, this.token);
        });
    }
    detailProject(id, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ""
            });
            this.presentLoading(loading);
            this.project = [];
            yield this.services.detailProject(id, token).subscribe(res => {
                this.project.push(res.data);
                this.first_name = res.data.project.user.first_name;
                this.last_name = res.data.project.user.last_name;
                this.profile_image = `https://api.haskyconnections.com/uploads/${res.data.project.user.profile_image}`;
                this.idContractor = res.data.project.user_id;
                this.rating = res.data.project.user.rating;
                if (res.data.project.user.rating == null) {
                    this.va = 0;
                }
                else {
                    this.va = res.data.project.user.rating;
                }
                this.separator(res.data.weekdays);
                console.log(res);
                loading.dismiss();
            }, erro => {
                console.log("hay un error");
                // this.route.navigate(["user/jobs"]);
                loading.dismiss();
            });
            console.log("este es", this.project);
            console.log("dias ", this.days);
        });
    }
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get("token").then(res => {
                this.idUser = res.user;
                this.token = res.token;
                // this.detailProject("45", res.token);
            });
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    separator(string) {
        //elimina el ultimo |
        let res = string.split("|");
        res.length = res.length - 1;
        this.dias = res;
        this.days.push(...res);
        // console.log(this.days);
    }
    ionViewDidLeave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.remove("detail");
        });
    }
    acceptjob() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ""
            });
            this.presentLoading(loading);
            let data = {
                user_id: this.idUser,
                request_id: this.id,
                contractor_id: this.idContractor
            };
            this.services.acceptedJobs(data, this.token).subscribe(res => {
                if (res.type == "success") {
                    loading.dismiss();
                    this.route.navigate(["user/jobs"]);
                }
            }, erro => {
                loading.dismiss();
            });
        });
    }
    callContractor(tel) {
        this.callNumber.callNumber(`${tel}`, true);
        // console.log(tel)
    }
    openAddress(address) {
        let options = {
            app: this.launchNavigator.APP.GOOGLE_MAPS
        };
        this.launchNavigator.navigate(address, options)
            .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
    }
};
DetailProjectPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__["LaunchNavigator"] }
];
DetailProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-project',
        template: __webpack_require__(/*! raw-loader!./detail-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-project/detail-project.page.html"),
        styles: [__webpack_require__(/*! ./detail-project.page.scss */ "./src/app/pages/detail-project/detail-project.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_7__["LaunchNavigator"]])
], DetailProjectPage);



/***/ })

}]);
//# sourceMappingURL=detail-project-detail-project-module-es2015.js.map