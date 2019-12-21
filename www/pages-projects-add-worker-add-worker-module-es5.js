(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-add-worker-add-worker-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/add-worker/add-worker.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/add-worker/add-worker.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content\n  ><br />\n  <div *ngIf=\"page1\">\n    <ion-label padding color=\"light\" class=\"ion-text-wrap\"\n      >select the type of worker(s) you need</ion-label\n    >\n    <ion-row>\n      <ion-col size=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n        <div class=\"page11\">\n          <ion-label> icono</ion-label><br />\n          <ion-label>General Labour</ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n        <div class=\"page11\"></div>\n      </ion-col>\n      <ion-col size=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n        <div class=\"page11\"></div>\n      </ion-col>\n      <ion-col size=\"6\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"4\">\n        <div class=\"page11\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"page2\" fullscreen>\n    <div padding style=\"width: 100%\">\n      <ion-label padding color=\"light\" style=\"padding-left: 0px;\"\n        >Select the experience level(s) for the worker(s) you need</ion-label\n      >\n    </div>\n    <ion-list no-border>\n      <ion-item lines=\"none\">\n        <ion-label color=\"light\">Minimun</ion-label>\n        <ion-select class=\"selector\">\n          <ion-select-option value=\"cat\" color=\"light\" selected\n            >1 yr</ion-select-option\n          >\n          <ion-select-option value=\"cat\" color=\"light\">2 yr</ion-select-option>\n          <ion-select-option value=\"cat\" color=\"light\">5 yr</ion-select-option>\n          <ion-select-option value=\"cat\" color=\"light\"\n            >Journ Eyman</ion-select-option\n          >\n          <ion-select-option value=\"cat\" color=\"light\"\n            >Red Seal</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label color=\"light\">Maximun</ion-label>\n        <ion-select class=\"selector\">\n          <ion-select-option value=\"1\" color=\"light\">1 yr</ion-select-option>\n          <ion-select-option value=\"2\" color=\"light\">2 yr</ion-select-option>\n          <ion-select-option value=\"5\" color=\"light\">5 yr</ion-select-option>\n          <ion-select-option value=\"6\" color=\"light\"\n            >Journ Eyman</ion-select-option\n          >\n          <ion-select-option value=\"7\" color=\"light\" selected\n            >Red Seal</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"page3\">\n    <ion-label padding color=\"light\">how many workers do you need?</ion-label>\n    <div style=\"width: 100%;margin-left: 33%;margin-top: 50%;\">\n      <ion-button> - </ion-button>\n      <ion-label style=\"font-size: 4em\" color=\"light\"> 1 </ion-label>\n      <ion-button> + </ion-button>\n      <br />\n    </div>\n    <div style=\"margin-top: 20%\">\n      <ion-label class=\"ion-text-center\"\n        >You are requesting workers that will have experience ranging from 2 yr\n        to red seal\n      </ion-label>\n    </div>\n  </div>\n  <div *ngIf=\"page4\" fullscreen>\n    <div padding style=\"width: 100%\">\n      <ion-label padding color=\"light\" style=\"padding-left: 0px;\"\n        >what are the taks the Framer(s) will be working on?</ion-label\n      >\n    </div>\n  </div>\n  <div *ngIf=\"page5\">\n    <ion-label class=\"ion-text-center\" color=\"light\"\n      >what is the start date for the worker's</ion-label\n    >\n    <div *ngIf=\"dat\">\n      <ion-button (click)=\"dates()\">SELECT START DATE</ion-button>\n    </div>\n    <div *ngIf=\"date\">\n      <label for=\"\">asd</label>\n    </div>\n  </div>\n</ion-content>\n<ion-footer no-border lines=\"no-line\">\n  <ion-toolbar color=\"dark\" no-border lines=\"no-line\">\n    <ion-button\n      slot=\"start\"\n      color=\"dark\"\n      style=\"margin-left: 20px;\"\n      *ngIf=\"noPage == 1\"\n    >\n      cancel\n    </ion-button>\n    <ion-button\n      (click)=\"backPage()\"\n      slot=\"start\"\n      color=\"dark\"\n      style=\"margin-left: 20px;\"\n      *ngIf=\"noPage != 1\"\n    >\n      back\n    </ion-button>\n    <div text-center style=\"width: 100%\">{{ noPage }}/10</div>\n    <ion-button\n      color=\"success\"\n      slot=\"end\"\n      style=\"margin-right: 18px;\"\n      (click)=\"nextPage()\"\n      *ngIf=\"noPage != 10\"\n    >\n      next\n    </ion-button>\n    <ion-button\n      color=\"success\"\n      slot=\"end\"\n      style=\"margin-right: 18px;\"\n      *ngIf=\"noPage == 10\"\n      (click)=\"save()\"\n    >\n      save\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/projects/add-worker/add-worker.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects/add-worker/add-worker.module.ts ***!
  \****************************************************************/
/*! exports provided: AddWorkerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkerPageModule", function() { return AddWorkerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_worker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-worker.page */ "./src/app/pages/projects/add-worker/add-worker.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: "",
        component: _add_worker_page__WEBPACK_IMPORTED_MODULE_6__["AddWorkerPage"]
    }
];
var AddWorkerPageModule = /** @class */ (function () {
    function AddWorkerPageModule() {
    }
    AddWorkerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_add_worker_page__WEBPACK_IMPORTED_MODULE_6__["AddWorkerPage"]]
        })
    ], AddWorkerPageModule);
    return AddWorkerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/projects/add-worker/add-worker.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects/add-worker/add-worker.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\nion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\n.page11 {\n  width: 100%;\n  height: 60px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: white;\n  border-radius: 5px;\n}\n\n.selector {\n  color: white;\n}\n\nion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvYWRkLXdvcmtlci9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxccGFnZXNcXHByb2plY3RzXFxhZGQtd29ya2VyXFxhZGQtd29ya2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvYWRkLXdvcmtlci9hZGQtd29ya2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0RUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsNEVBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL2FkZC13b3JrZXIvYWRkLXdvcmtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICMyMjI0MjgpKTtcclxufVxyXG4ucGFnZTExIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2VsZWN0b3Ige1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICMyMjI0MjgpKTtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICMyMjI0MjgpKTtcbn1cblxuLnBhZ2UxMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWxlY3RvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzIyMjQyOCkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/projects/add-worker/add-worker.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/projects/add-worker/add-worker.page.ts ***!
  \**************************************************************/
/*! exports provided: AddWorkerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkerPage", function() { return AddWorkerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddWorkerPage = /** @class */ (function () {
    function AddWorkerPage() {
        this.page1 = true;
        this.page2 = false;
        this.page3 = false;
        this.page4 = false;
        this.page5 = false;
        this.dat = true;
        this.date = false;
        this.noPage = 1;
    }
    AddWorkerPage.prototype.ngOnInit = function () { };
    AddWorkerPage.prototype.nextPage = function () {
        this.noPage = this.noPage + 1;
        if (this.noPage == 2) {
            this.page1 = false;
            this.page2 = true;
        }
        if (this.noPage == 3) {
            this.page2 = false;
            this.page3 = true;
        }
        if (this.noPage == 4) {
            this.page3 = false;
            this.page4 = true;
        }
        if (this.noPage == 5) {
            this.page4 = false;
            this.page5 = true;
        }
    };
    AddWorkerPage.prototype.dates = function () {
        this.dat = false;
        this.date = true;
    };
    AddWorkerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-worker",
            template: __webpack_require__(/*! raw-loader!./add-worker.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/add-worker/add-worker.page.html"),
            styles: [__webpack_require__(/*! ./add-worker.page.scss */ "./src/app/pages/projects/add-worker/add-worker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddWorkerPage);
    return AddWorkerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-projects-add-worker-add-worker-module-es5.js.map