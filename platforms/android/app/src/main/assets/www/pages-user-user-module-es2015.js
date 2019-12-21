(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n    <ion-tab-bar slot=\"button\" color=\"dark\">\n        <ion-tab-button tab=\"jobs\">\n            <ion-icon name=\"hammer\"></ion-icon>\n            <ion-label color=\"light\">Jobs</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"user\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label color=\"light\">Profile</ion-label>\n        </ion-tab-button>\n        <ion-tab-button>\n            <ion-icon name=\"chatbubbles\"></ion-icon>\n            <ion-label color=\"light\">Support</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"hour\">\n            <ion-icon name=\"time\" ></ion-icon>\n            <ion-label color=\"light\">Hours</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: "",
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"],
        children: [
            {
                path: 'jobs',
                loadChildren: '../projects/projects.module#ProjectsPageModule'
            },
            {
                path: 'user',
                loadChildren: '../profile/profile.module#ProfilePageModule'
            },
            {
                path: 'detail',
                loadChildren: '../detail-project/detail-project.module#DetailProjectPageModule'
            },
            {
                path: 'hour',
                loadChildren: '../hours/hours.module#HoursPageModule'
            }
        ]
    }
];
let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            //RouterModule.forChild(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxccGFnZXNcXHVzZXJcXHVzZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyL3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let UserPage = class UserPage {
    constructor(storage) {
        this.storage = storage;
        this.titulo = "Home";
        this.language = {};
    }
    ionViewWillEnter() {
        this.storage.get("token").then(data => {
            console.log(data);
        });
        this.storage.get("language").then(res => {
            console.log(res);
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: __webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html"),
        styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], UserPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es2015.js.map