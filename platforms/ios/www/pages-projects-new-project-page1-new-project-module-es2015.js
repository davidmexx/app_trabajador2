(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-new-project-page1-new-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/new-project/page1/new-project.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/new-project/page1/new-project.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header position=\"fixed\"></app-header>\n\n<ion-content class=\"ion-padding\">\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/projects/new-project/page1/new-project.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/new-project/page1/new-project.module.ts ***!
  \************************************************************************/
/*! exports provided: NewProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectPageModule", function() { return NewProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-project.page */ "./src/app/pages/projects/new-project/page1/new-project.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: "",
        component: _new_project_page__WEBPACK_IMPORTED_MODULE_6__["NewProjectPage"]
    }
];
let NewProjectPageModule = class NewProjectPageModule {
};
NewProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_project_page__WEBPACK_IMPORTED_MODULE_6__["NewProjectPage"]]
    })
], NewProjectPageModule);



/***/ }),

/***/ "./src/app/pages/projects/new-project/page1/new-project.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/new-project/page1/new-project.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\nion-list {\n  background: var(--ion-item-background, var(--ion-background-color, #222428));\n}\n\nion-item {\n  --highlight-color-focused: rgb(17, 221, 119);\n}\n\n.item-has-focus .label-stacked.sc-ion-label-md-h {\n  color: var(--ion-color-light);\n}\n\n.item-has-focus .label-stacked.sc-ion-label-ios-h {\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvbmV3LXByb2plY3QvcGFnZTEvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxwcm9qZWN0c1xcbmV3LXByb2plY3RcXHBhZ2UxXFxuZXctcHJvamVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL25ldy1wcm9qZWN0L3BhZ2UxL25ldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0RUFBQTtBQ0VGOztBREFBO0VBQ0UsNENBQUE7QUNHRjs7QUREQTtFQUNFLDZCQUFBO0FDSUY7O0FERkE7RUFDRSw2QkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvbmV3LXByb2plY3QvcGFnZTEvbmV3LXByb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjMjIyNDI4KSk7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYigxNywgMjIxLCAxMTkpO1xyXG59XHJcbi5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjMjIyNDI4KSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmdiKDE3LCAyMjEsIDExOSk7XG59XG5cbi5pdGVtLWhhcy1mb2N1cyAubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uaXRlbS1oYXMtZm9jdXMgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/projects/new-project/page1/new-project.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/projects/new-project/page1/new-project.page.ts ***!
  \**********************************************************************/
/*! exports provided: NewProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectPage", function() { return NewProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewProjectPage = class NewProjectPage {
    ngOnInit() {
    }
};
NewProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-project",
        template: __webpack_require__(/*! raw-loader!./new-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/new-project/page1/new-project.page.html"),
        styles: [__webpack_require__(/*! ./new-project.page.scss */ "./src/app/pages/projects/new-project/page1/new-project.page.scss")]
    })
], NewProjectPage);



/***/ })

}]);
//# sourceMappingURL=pages-projects-new-project-page1-new-project-module-es2015.js.map