(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trades-trades-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trades/trades.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trades/trades.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"ion-padding\">\n   <ion-slides >\n     <ion-slide>\n       <div style=\"width: 100%;\">\n      <ion-row size=\"12\">\n        <div style=\"width: 100%;\">\n          <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">Select the trades you have experience in or want to learn</h3>\n        </div>\n        <ion-col size-md=\"4\" size-xs=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"4\" *ngFor=\"let data of Trades\"  (click)=\"saveTrades(data.id, data.name)\"> \n          <div [class]=\"changeColor\" id=\"{{data.id}}\"  >\n            <div class=\"ion-text-center\">\n              <ion-label [color]=\"changeColor\" id=\"{{data.id}}\" class=\"ion-text-wrap\">{{data.name}}</ion-label><br> <br>\n             <img src=\"https://api.haskyconnections.com/uploads/{{data.image}}\" />\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n     </ion-slide>\n     <ion-slide>\n       <div style=\"width: 100%;\">\n        <ion-row size=\"12\">\n            <div style=\"width: 100%;\">\n              <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">Select your speciality</h3>\n            </div>\n          </ion-row>\n          <ion-item color=\"dark\">\n              <ion-label>Speciality</ion-label>\n              <ion-select  [(ngModel)]=\"idEspecialities\">\n                <ion-select-option *ngFor=\"let user of filters\" value=\"{{user.id}}\">{{user.name}}</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <ion-row size=\"12\">\n              <div style=\"width: 100%;\">\n                <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">References are require to verify your experience</h3>\n              </div>\n              <ion-col size-md=\"4\" size-xs=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"4\" *ngFor=\"let data of experience\"  (click)=\"saveExperience(data.id, data.value)\"> \n                <ion-chip [class]=\"changeColor22\" id={{data.name}} >\n                  <ion-label >{{data.name}}</ion-label>\n                </ion-chip>\n              </ion-col>\n            </ion-row>\n          </div>\n     </ion-slide>\n     <ion-slide>\n       <div style=\"width: 100%;\">\n          <ion-row size=\"12\">\n              <div style=\"width: 100%;\">\n                <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">What is your address?</h3>\n              </div>\n             \n            </ion-row>\n            <ion-button (click)=\"addAddres()\"  expand=\"full\" >Select your address</ion-button><br>\n            <ion-label color=\"light\" class=\"ion-text-center\">{{addres}}</ion-label>\n       </div>\n     </ion-slide>\n     <ion-slide>\n       <div style=\"width: 100%;\">\n          <ion-row size=\"12\">\n              <div style=\"width: 100%;\">\n                <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">What days are you available to work?</h3>\n\n              </div>\n              <ion-col size-md=\"4\" size-xs=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"4\" *ngFor=\"let data of days\"  > \n                  <ion-item lines=\"none\">      \n                        <input type=\"checkbox\" id=\"{{data.name}}\" [(ngModel)]=\"data.isChecked\"/>\n                        <label for=\"{{data.name}}\"> {{data.name}}</label>\n                    </ion-item>\n                </ion-col>\n\n            </ion-row>\n       </div>\n     </ion-slide>\n     <ion-slide>\n        <div style=\"width: 100%;\">\n            <ion-row size=\"12\">\n                <div style=\"width: 100%;\">\n                  <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">Which of the follow do you have?</h3>\n                </div>\n                <ion-col size-md=\"4\" size-xs=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"4\" *ngFor=\"let data of tls\"> \n                    <ion-item lines=\"none\">\n                        <input type=\"checkbox\" id=\"{{data.description}}\" [(ngModel)]=\"data.isChecked\"/>\n                        <label for=\"{{data.description}}\"> {{data.description}}</label>\n                    </ion-item>\n                  </ion-col>\n              </ion-row>\n        </div>\n     </ion-slide>\n     <ion-slide>\n      <div style=\"width: 100%;\">\n          <ion-row size=\"12\">\n              <div style=\"width: 100%;\">\n                <h3 class=\"ion-text-wrap ion-text-center\" style=\"color: white;\">Select you primary means of transport</h3>\n  \n              </div>\n              <ion-col  > \n                  <ion-radio-group style=\"width: 100%;\" [(ngModel)]=\"transporte\">\n                      <ion-item style=\"width: 100%;\">\n                        <ion-label color=\"light\">My own vehicle</ion-label>\n                        <ion-radio slot=\"start\" color=\"success\" value=\"My own vehicle\"></ion-radio>\n                      </ion-item>\n            \n                      <ion-item>\n                        <ion-label color=\"light\">Public transport</ion-label>\n                        <ion-radio slot=\"start\" color=\"tertiary\" value=\"Public transport\" checked></ion-radio>\n                      </ion-item>\n\n                    </ion-radio-group>\n                </ion-col>\n              \n            </ion-row>\n      </div>\n     </ion-slide>\n   </ion-slides>\n</ion-content>\n<ion-footer no-border lines=\"no-line\">\n    <ion-toolbar color=\"dark\" no-border lines=\"no-line\">\n        <ion-button\n        color=\"dark\"\n        slot=\"start\"\n        style=\"margin-right: 18px;\"\n        (click)=\"slidePrev()\"\n        *ngIf=\"noPage == 2 \"\n      >\n       back\n      </ion-button>\n      \n      <div text-center style=\"width: 100%\">{{noPage}}/6</div>\n      <ion-button\n        color=\"success\"\n        slot=\"end\"\n        style=\"margin-right: 18px;\"\n        (click)=\"slideNext()\"\n        *ngIf=\"noPage == 1 \"\n      >\n       next\n      </ion-button>\n      <ion-button\n        color=\"success\"\n        slot=\"end\"\n        style=\"margin-right: 18px;\"\n        (click)=\"slideTrades()\"\n        *ngIf=\"noPage == 2\"\n      >\n       next\n      </ion-button>\n      <ion-button\n        color=\"success\"\n        slot=\"end\"\n        style=\"margin-right: 18px;\"\n        (click)=\"slideAddres()\"\n        *ngIf=\"noPage == 3\"\n      >\n       next\n      </ion-button>\n      <ion-button\n      color=\"success\"\n      slot=\"end\"\n      style=\"margin-right: 18px;\"\n      (click)=\"slideDays()\"\n      *ngIf=\"noPage == 4\"\n    >\n     next\n    </ion-button>\n    <ion-button\n      color=\"success\"\n      slot=\"end\"\n      style=\"margin-right: 18px;\"\n      (click)=\"slideTools()\"\n      *ngIf=\"noPage == 5\"\n    >\n     next\n    </ion-button>\n    <ion-button\n    color=\"success\"\n    slot=\"end\"\n    style=\"margin-right: 18px;\"\n    (click)=\"save()\"\n    *ngIf=\"noPage == 6\"\n  >\n   save\n  </ion-button>\n      \n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/trades/trades.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/trades/trades.module.ts ***!
  \***********************************************/
/*! exports provided: TradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradesPageModule", function() { return TradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trades.page */ "./src/app/pages/trades/trades.page.ts");
/* harmony import */ var src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");
/* harmony import */ var _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modals/modal-trades/modal-trades.module */ "./src/app/modals/modal-trades/modal-trades.module.ts");









var routes = [
    {
        path: '',
        component: _trades_page__WEBPACK_IMPORTED_MODULE_6__["TradesPage"]
    }
];
var TradesPageModule = /** @class */ (function () {
    function TradesPageModule() {
    }
    TradesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_7__["ModalTradesPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_8__["ModalTradesPageModule"]
            ],
            declarations: [_trades_page__WEBPACK_IMPORTED_MODULE_6__["TradesPage"]]
        })
    ], TradesPageModule);
    return TradesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trades/trades.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/trades/trades.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\n.click {\n  width: 100%;\n  height: auto;\n  background-color: #3E3E3E;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.onclick {\n  width: 100%;\n  height: auto;\n  background-color: #05b7d7;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.click2 {\n  width: 100%;\n  height: auto;\n  background-color: #3E3E3E;\n  border-radius: 10px;\n  color: #fff;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox] + label {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 50px;\n  background-color: #fff;\n  color: black;\n  padding: 0.5rem 1rem;\n  display: inline-block;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 121px;\n  text-align: center;\n}\n\ninput[type=checkbox]:checked + label {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  background-color: #05b7d7;\n  color: white;\n  border-color: #05b7d7;\n}\n\n.click22 {\n  --background: white;\n}\n\n.onclick2 {\n  --background: #05b7d7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhZGVzL0M6XFxVc2Vyc1xcaXNtYWVcXERvY3VtZW50c1xcYXBwX3RyYWJhamFkb3JcXGFwcF90cmFiYWphZG9yL3NyY1xcYXBwXFxwYWdlc1xcdHJhZGVzXFx0cmFkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFkZXMvdHJhZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREFBO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQTJCLFlBQUE7RUFBYyxxQkFBQTtBQ0szQzs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWRlcy90cmFkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzMzMzIzMjtcclxufVxyXG5cclxuLmNsaWNre1xyXG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTNFM0U7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm9uY2xpY2t7XHJcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjdkNzsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNsaWNrMntcclxuICB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UzRTNFOyBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuIFxyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDEyMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjdkNzsgY29sb3I6IHdoaXRlOyBib3JkZXItY29sb3I6IzA1YjdkNztcclxufVxyXG5cclxuLmNsaWNrMjJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbn1cclxuLm9uY2xpY2sye1xyXG4gIC0tYmFja2dyb3VuZDogIzA1YjdkNztcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG59XG5cbi5jbGljayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTNFM0U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub25jbGljayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWI3ZDc7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2xpY2syIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFM0UzRTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAxMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjdkNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICMwNWI3ZDc7XG59XG5cbi5jbGljazIyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm9uY2xpY2syIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDViN2Q3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/trades/trades.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/trades/trades.page.ts ***!
  \*********************************************/
/*! exports provided: TradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradesPage", function() { return TradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_testing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");









var TradesPage = /** @class */ (function () {
    function TradesPage(services, storage, loadingController, router, toastController, menu, modal, alertController) {
        this.services = services;
        this.storage = storage;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.menu = menu;
        this.modal = modal;
        this.alertController = alertController;
        this.noPage = 1;
        this.Trades = [];
        this.especialities = [];
        this.tools = [];
        this.url = "http://api.araconsultoriaydesarrollos.com/uploads/";
        this.changeColor22 = "click22";
        this.experience = [
            {
                id: "l",
                name: "I´m interested in learning this trade.",
                value: 0
            },
            {
                id: "2",
                name: "More than 1 year. ",
                value: 12
            },
            {
                id: "3",
                name: "More than 2 years. ",
                value: 24
            },
            {
                id: "4",
                name: "More than 5 years. ",
                value: 60
            },
            {
                id: "5",
                name: "More than 6 months. ",
                value: 6
            },
            {
                id: "6",
                name: "More than 10 years. ",
                value: 120
            }
        ];
        this.days = [
            {
                id: "l",
                name: "Monday",
                isChecked: true
            },
            {
                id: "2",
                name: "Tuesday",
                isChecked: false
            },
            {
                id: "3",
                name: "Wednesday",
                isChecked: false
            },
            {
                id: "4",
                name: "Thursday",
                isChecked: false
            },
            {
                id: "5",
                name: "Friday",
                isChecked: false
            },
            {
                id: "6",
                name: "Saturday",
                isChecked: false
            },
            {
                id: "7",
                name: "Sunday",
                isChecked: false
            }
        ];
        this.temporal = [];
        this.filters = [];
        this.toolss = [];
        this.nuevoTol = [];
        this.tls = [];
        this.changeColor = "click";
        this.changeColor2 = "click2";
        this.color = "light";
    }
    TradesPage.prototype.ngOnInit = function () {
        this.menu.enable(false, "first");
        this.getTrades();
        this.getEspeciality();
        this.getTols();
        this.slides.lockSwipes(true);
    };
    TradesPage.prototype.getTrades = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ''
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        return [4 /*yield*/, this.services.getTrades().subscribe(function (res) {
                                _this.Trades = res.data;
                                loading.dismiss();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.getTols = function () {
        var _this = this;
        this.services.getTools().subscribe(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                _this.tls.push({
                    id: res.data[i].id,
                    description: res.data[i].description,
                    isChecked: false
                });
            }
        });
        console.log(this.tls);
    };
    TradesPage.prototype.presentLoading = function (loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TradesPage.prototype.saveTrades = function (id, name) {
        for (var i = 0; i < this.Trades.length; i++) {
            if (this.Trades[i].id == id) {
                document.getElementById("" + this.Trades[i].id).className = "onclick";
                this.idTrades = id;
                this.especiality = name;
                //alert(this.idTrades);
            }
            else {
                document.getElementById("" + this.Trades[i].id).className = "click";
            }
        }
    };
    TradesPage.prototype.saveExperience = function (id, value) {
        for (var i = 0; i < this.experience.length; i++) {
            if (this.experience[i].id == id) {
                document.getElementById("" + this.experience[i].name).className = "onclick2 md ion-activatable hydrated";
                this.valueExperiencie = value;
                //alert(this.idTrades);
            }
            else {
                document.getElementById("" + this.experience[i].name).className = "click22 md ion-activatable hydrated";
            }
        }
    };
    TradesPage.prototype.savetools = function (id) {
        for (var i = 0; i < this.tools.length; i++) {
            if (this.tools[i].id == id) {
                document.getElementById("" + this.tools[i].id).className = "onclick";
                this.idtools = id;
                //alert(this.idTrades);
            }
            else {
                document.getElementById("" + this.tools[i].id).className = "click";
            }
        }
    };
    TradesPage.prototype.getEspeciality = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: ''
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        return [4 /*yield*/, this.services.getEspeciality().subscribe(function (res) {
                                var _a;
                                (_a = _this.especialities).push.apply(_a, res.data);
                                //this.Trades = res;
                                console.log(_this.especialities);
                                loading.dismiss();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.save = function () {
        if (this.transporte == undefined) {
            this.presentToast("Select you primary means of transport");
        }
        else {
            console.log(this.nameVehicle);
            this.saveTradesTransport();
            this.storage.set("validate", "si");
        }
    };
    TradesPage.prototype.dias = function () {
        this.temporal = [];
        for (var i = 0; i < this.days.length; i++) {
            if (this.days[i].isChecked == true) {
                this.temporal.push(this.days[i].name + "|");
            }
        }
        console.log(this.temporal);
        console.log(this.temporal.join(''));
        this.daysS = this.temporal.join('');
        console.log(this.daysS);
    };
    TradesPage.prototype.saveTradesdb = function () {
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
                        console.log(this.userid, this.idTrades, this.idEspecialities, this.valueExperiencie);
                        data = {
                            user_id: this.userid,
                            trade_id: this.idTrades,
                            overtime: this.valueExperiencie,
                            specialty_id: this.idEspecialities
                        };
                        return [4 /*yield*/, this.services.addTrades(data, this.token).subscribe(function (res) {
                                _this.presentToast("add trade to user successfully");
                                _this.idTrades = undefined;
                                _this.idEspecialities == undefined;
                                _this.valueExperiencie == undefined;
                                loading.dismiss();
                            }, function (error) {
                                loading.dismiss();
                                _this.presentToast("trade and especiality it already exists");
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.saveTradesAdress = function () {
        var data = {
            id: this.userid,
            address: this.direcctio
        };
        this.services.addTradeAdress(data, this.token).subscribe(function (res) {
            console.log(res);
        });
    };
    TradesPage.prototype.saveTradesDays = function () {
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
                        data = {
                            id: this.userid,
                            working_days: this.daysS
                        };
                        this.services.addTradeWorkinDays(data, this.token).subscribe(function (res) {
                            if (res.type == "success") {
                                loading.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.saveTradesTools = function () {
        /* let data = {
           user_id: this.userid,
           tool_id: this.idtools
         }
         this.services.addTradesTools(this.userid, this.idtools, this.token).subscribe(res =>{
           console.log(res);
         }) */
        for (var i = 0; i < this.tls.length; i++) {
            if (this.tls[i].isChecked == true) {
                this.services.addTradesTools(this.userid, this.tls[0].id, this.token).subscribe(function (res) {
                    console.log(res);
                });
            }
        }
    };
    TradesPage.prototype.saveTradesTransport = function () {
        var _this = this;
        var data = {
            id: this.userid,
            transport: this.transporte
        };
        this.services.addTradesTransport(data, this.token).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(["/user/user"]);
        });
    };
    TradesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("token").then(function (res) {
            _this.token = res.token;
            _this.userid = res.user;
        });
    };
    TradesPage.prototype.presentToast = function (mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "" + mensaje,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.filterespecialities = function () {
        var _this = this;
        //return console.log(this.especialities.filter((item) => item.trade.name.includes("General Labour")));
        this.filters = this.especialities.filter(function (item) { return item.trade.name.includes(_this.especiality); });
        console.log(this.filters);
    };
    TradesPage.prototype.addAddres = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: src_app_modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_6__["ModalTradesPage"],
                            componentProps: {
                                token: this.token,
                                id: this.userid,
                                page7: true
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            _this.addres = res.data.address;
                            _this.slides.lockSwipes(false);
                            _this.slides.slideNext();
                            _this.noPage++;
                            _this.slides.lockSwipes(true);
                            //this.gestorage();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TradesPage.prototype.slidePrev = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.noPage--;
        this.slides.lockSwipes(true);
    };
    TradesPage.prototype.slideNext = function () {
        if (this.idTrades == undefined) {
            this.presentToast("Select the trades you have experience in or want to learn");
        }
        else {
            this.filterespecialities();
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.noPage++;
            this.slides.lockSwipes(true);
        }
    };
    TradesPage.prototype.slideTrades = function () {
        if (this.idEspecialities == undefined || this.valueExperiencie == undefined) {
            this.presentToast("select your speciality or your experience");
        }
        else {
            this.saveTradesdb();
            this.presentAlert();
        }
    };
    TradesPage.prototype.slideAddres = function () {
        if (this.addres == undefined) {
            this.presentToast("select your address");
        }
        else {
            this.addAddres();
        }
    };
    TradesPage.prototype.slideDays = function () {
        if (this.days[0].isChecked == false && this.days[1].isChecked == false && this.days[2].isChecked == false && this.days[3].isChecked == false && this.days[4].isChecked == false && this.days[5].isChecked == false && this.days[6].isChecked == false) {
            this.presentToast("What days are you availableto work");
            this.noPage = this.noPage - 1;
        }
        else {
            //console.log(this.days);
            this.dias();
            this.saveTradesDays();
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.noPage++;
            this.slides.lockSwipes(true);
        }
    };
    TradesPage.prototype.slideTools = function () {
        for (var i = 0; i < this.tls.length; i++) {
            if (this.tls[i].isChecked == true) {
                this.services.addTradesTools(this.userid, this.tls[0].id, this.token).subscribe(function (res) {
                    console.log(res);
                });
            }
        }
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.noPage++;
        this.slides.lockSwipes(true);
    };
    TradesPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Do you want to select one more trade?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.slides.lockSwipes(false);
                                        _this.slides.slideNext();
                                        _this.noPage++;
                                        _this.slides.lockSwipes(true);
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        //this.idEspecialities == "undefined"; 
                                        _this.valueExperiencie == undefined;
                                        _this.idTrades == undefined;
                                        _this.slides.lockSwipes(false);
                                        _this.slides.slidePrev();
                                        _this.noPage = 1;
                                        console.log(_this.noPage);
                                        _this.slides.lockSwipes(true);
                                    }
                                }
                            ]
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
    TradesPage.ctorParameters = function () { return [
        { type: src_app_services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], TradesPage.prototype, "slides", void 0);
    TradesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trades',
            template: __webpack_require__(/*! raw-loader!./trades.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trades/trades.page.html"),
            styles: [__webpack_require__(/*! ./trades.page.scss */ "./src/app/pages/trades/trades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_testing_service__WEBPACK_IMPORTED_MODULE_2__["TestingService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], TradesPage);
    return TradesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-trades-trades-module-es5.js.map