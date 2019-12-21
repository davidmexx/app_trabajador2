(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-request-worker-request-worker-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/request-worker/request-worker.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/request-worker/request-worker.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item style=\"height: auto;\" *ngFor=\"let i of [1, 2]\">\n      <ion-label color=\"light\" class=\"ion-text-wrap\">\n        Standard Item with Detail Arrow aksdhajsdk\n      </ion-label>\n      <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"light\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" fill=\"outline\" color=\"success\"\n    >Create Project</ion-button\n  >\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/projects/request-worker/request-worker.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/request-worker/request-worker.module.ts ***!
  \************************************************************************/
/*! exports provided: RequestWorkerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestWorkerPageModule", function() { return RequestWorkerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_worker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-worker.page */ "./src/app/pages/projects/request-worker/request-worker.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _request_worker_page__WEBPACK_IMPORTED_MODULE_6__["RequestWorkerPage"]
    }
];
var RequestWorkerPageModule = /** @class */ (function () {
    function RequestWorkerPageModule() {
    }
    RequestWorkerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_request_worker_page__WEBPACK_IMPORTED_MODULE_6__["RequestWorkerPage"]]
        })
    ], RequestWorkerPageModule);
    return RequestWorkerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/projects/request-worker/request-worker.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/request-worker/request-worker.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\nion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\n.fixedLabel {\n  min-width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcmVxdWVzdC13b3JrZXIvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xccmVxdWVzdC13b3JrZXJcXHJlcXVlc3Qtd29ya2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcmVxdWVzdC13b3JrZXIvcmVxdWVzdC13b3JrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLDRFQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9yZXF1ZXN0LXdvcmtlci9yZXF1ZXN0LXdvcmtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICMyMjI0MjgpKTtcclxufVxyXG5cclxuLmZpeGVkTGFiZWwge1xyXG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzIyMjQyOCkpO1xufVxuXG4uZml4ZWRMYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/projects/request-worker/request-worker.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/projects/request-worker/request-worker.page.ts ***!
  \**********************************************************************/
/*! exports provided: RequestWorkerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestWorkerPage", function() { return RequestWorkerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestWorkerPage = /** @class */ (function () {
    function RequestWorkerPage() {
    }
    RequestWorkerPage.prototype.ngOnInit = function () {
    };
    RequestWorkerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-worker',
            template: __webpack_require__(/*! raw-loader!./request-worker.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/request-worker/request-worker.page.html"),
            styles: [__webpack_require__(/*! ./request-worker.page.scss */ "./src/app/pages/projects/request-worker/request-worker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestWorkerPage);
    return RequestWorkerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-projects-request-worker-request-worker-module-es5.js.map