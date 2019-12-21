(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-user-edit-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/edit-user/edit-user.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/edit-user/edit-user.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header tittle=\"Edit\"></app-header>\n\n<ion-content>\n    <ion-card color=\"dark\" *ngIf=\"page1\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <ion-col size=\"12\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >First name<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"name\" ></ion-input>\n                  </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >Last Name<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"last\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >Email<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"email\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >Phone number<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"phone\" type=\"tel\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >Address<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"address\" type=\"text\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item mode=\"md\" color=\"dark\" >\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >City<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"city\" type=\"text\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item mode=\"md\" color=\"dark\">\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >State<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"estate\" type=\"text\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item mode=\"md\" color=\"dark\">\n                    <ion-label position=\"stacked\" color=\"light\"\n                      >Zip code<ion-text></ion-text\n                        > </ion-label>\n                   <ion-input color=\"light\" [(ngModel)]=\"zipcode\" type=\"tel\" required ></ion-input>\n                </ion-item>\n            </ion-col>\n      </ion-row>\n      <ion-row size=\"12\">\n        <ion-col size=\"6\">\n            <ion-button color=\"dark\" (click)=\"back()\" expand=\"full\">back</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-button (click)=\"save()\" expand=\"full\">save</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page2\">\n        <ion-card-content>\n          <ion-row size=\"12\">\n            <ion-col  *ngFor=\"let data of newDays\"> \n                <ion-item color=\"dark\">\n                    <ion-label style=\"color: white;\" class=\"ion-text-wrap\">{{data.name}}</ion-label>\n                    <ion-checkbox color=\"primary\"  slot=\"start\" [(ngModel)]=\"data.isChecked\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row size=\"12\">\n              <ion-col size=\"6\">\n                <ion-button color=\"dark\" (click)=\"back()\" expand=\"full\">back</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button expand=\"full\" (click)=\"saveDays()\">save</ion-button>\n              </ion-col>\n          </ion-row>\n         \n        </ion-card-content>\n      </ion-card>\n      <ion-card color=\"dark\" *ngIf=\"page3\">\n          <ion-card-content>\n            <ion-row size=\"12\">\n              <ion-col  *ngFor=\"let data of newTrasnport\"> \n                  <ion-item color=\"dark\">\n                      <ion-label style=\"color: white;\" class=\"ion-text-wrap\">{{data.name}}</ion-label>\n                      <ion-checkbox color=\"primary\"  slot=\"start\" [(ngModel)]=\"data.isChecked\"></ion-checkbox>\n                  </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row size=\"12\">\n                <ion-col size=\"6\">\n                  <ion-button color=\"dark\" (click)=\"back()\" expand=\"full\">back</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button expand=\"full\" (click)=\"saveTransport()\">save</ion-button>\n                </ion-col>\n            </ion-row>\n           \n          </ion-card-content>\n        </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/edit-user/edit-user.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/edit-user/edit-user.module.ts ***!
  \*************************************************************/
/*! exports provided: EditUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user.page */ "./src/app/pages/profile/edit-user/edit-user.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]
    }
];
let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]]
    })
], EditUserPageModule);



/***/ }),

/***/ "./src/app/pages/profile/edit-user/edit-user.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/edit-user/edit-user.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #333232;\n}\n\nion-item {\n  --highlight-color-focused: rgb(17, 221, 119);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9lZGl0LXVzZXIvQzpcXFVzZXJzXFxpc21hZVxcRG9jdW1lbnRzXFxhcHBfdHJhYmFqYWRvclxcYXBwX3RyYWJhamFkb3Ivc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxlZGl0LXVzZXJcXGVkaXQtdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC11c2VyL2VkaXQtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENFO0VBQ0UsNENBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZWRpdC11c2VyL2VkaXQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiByZ2IoMTcsIDIyMSwgMTE5KTtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYigxNywgMjIxLCAxMTkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/edit-user/edit-user.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/edit-user/edit-user.page.ts ***!
  \***********************************************************/
/*! exports provided: EditUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPage", function() { return EditUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);








let EditUserPage = class EditUserPage {
    constructor(storage, services, loadingController, router, activateRouter, toastController, nav) {
        this.storage = storage;
        this.services = services;
        this.loadingController = loadingController;
        this.router = router;
        this.activateRouter = activateRouter;
        this.toastController = toastController;
        this.nav = nav;
        this.user = [];
        this.page1 = false;
        this.page2 = false;
        this.page3 = false;
        this.newAdrres = [];
        this.newDays = [];
        this.newTrasnport = [];
        this.temporal = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.newAdrres = [];
        this.newDays = [];
        this.newTrasnport = [];
        if (this.activateRouter.snapshot.paramMap.get("id") == "1") {
            //console.log("hola")
            this.page1 = true;
        }
        if (this.activateRouter.snapshot.paramMap.get("id") == "2") {
            this.page2 = true;
        }
        if (this.activateRouter.snapshot.paramMap.get("id") == "3") {
            this.page3 = true;
        }
        //console.log();
        this.storage.get("token").then(res => {
            this.getUser(res.token, res.user);
            this.token = res.token;
            this.id = res.user;
        });
        this.getdays();
        this.getTransport();
    }
    getUser(token, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: ''
            });
            this.presentLoading(loading);
            yield this.services.getUser(token, id).subscribe(res => {
                this.name = res.data.first_name;
                this.last = res.data.last_name;
                this.email = res.data.email;
                this.phone = res.data.phone_number;
                if (res.data.address == null) {
                    loading.dismiss();
                }
                else {
                    this.separator(res.data.address);
                    loading.dismiss();
                }
            });
        });
    }
    presentLoading(loading) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
    save() {
        let data = {
            first_name: this.name,
            last_name: this.last,
            email: this.email,
            phone_number: this.phone,
            id: this.id,
            address: `${this.address}|${this.city}|${this.estate}|${this.zipcode}|`
        };
        this.services.editUser(data, this.token).subscribe(res => {
            if (res.type == "success") {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Profile update successfully'
                }).then((resu) => {
                    if (resu.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
                        this.router.navigate(["/user/user"]);
                        //this.storage.set("validate", "si"); 
                    }
                });
            }
        });
    }
    separator(string) {
        //let cadena= "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
        let res = string.split("|");
        res.length = res.length - 1;
        this.newAdrres.push(...res);
        //this.days.length = this.days.length -1;
        this.address = this.newAdrres[0];
        this.city = this.newAdrres[1];
        this.estate = this.newAdrres[2];
        this.zipcode = this.newAdrres[3];
        //console.log(this.address);
    }
    back() {
        this.router.navigate(["/user/user"]);
    }
    getdays() {
        this.newDays = [];
        let a;
        this.storage.get("days").then(res => {
            this.newDays = res;
            console.log(this.newDays);
        });
    }
    getTransport() {
        this.storage.get("transport").then(res => {
            this.newTrasnport = res;
            console.log(this.newTrasnport);
        });
    }
    saveDays() {
        //console.log(this.newDays);
        this.dias();
        this.saveTradesDays();
    }
    dias() {
        this.temporal = [];
        for (let i = 0; i < this.newDays.length; i++) {
            if (this.newDays[i].isChecked == true) {
                this.temporal.push(`${this.newDays[i].name}|`);
            }
        }
        //console.log(this.temporal);
        //console.log(this.temporal.join(''));
        //convertir array en string
        this.daysS = this.temporal.join('');
        console.log(this.daysS);
    }
    saveTradesDays() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let data = {
                id: this.id,
                working_days: this.daysS
            };
            yield this.services.addTradeWorkinDays(data, this.token).subscribe(res => {
                if (res.type == "success") {
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Availability update successfully'
                    }).then((resu) => {
                        if (resu.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
                            this.storage.remove("days");
                            //this.router.navigate(["/user/user/"]);
                            //this.nav.navigateRoot("/user/user"); 
                            // this.nav.navigateForward("/user/user");
                            //this.router.navigateByUrl("/user/user");
                            //this.nav.navigateRoot(["/user/user"]);
                            this.nav.pop();
                            //this.storage.set("validate", "si"); 
                        }
                    });
                }
            });
        });
    }
    saveTransport() {
        if (this.newTrasnport[0].isChecked == true && this.newTrasnport[1].isChecked) {
            this.presentToast("Select one");
        }
        else {
            for (let i = 0; i < this.newTrasnport.length; i++) {
                if (this.newTrasnport[i].isChecked == true) {
                    let data = {
                        id: this.id,
                        transport: this.newTrasnport[i].name
                    };
                    this.services.addTradesTransport(data, this.token).subscribe(res => {
                        if (res.type == "success") {
                            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'success',
                                title: 'Availability update successfully'
                            }).then((resu) => {
                                if (resu.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.timer) {
                                    this.storage.remove("days");
                                    this.router.navigate(["/user/user"]);
                                    //this.storage.set("validate", "si"); 
                                }
                            });
                        }
                        //this.router.navigate(["/user"]);
                    });
                }
                else {
                    console.log(` no aceptado ${this.newTrasnport[i].name}`);
                }
            }
        }
    }
    presentToast(mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `${mensaje}`,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    ionViewDidLeave() {
        this.services.getUser(this.token, this.id);
    }
};
EditUserPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EditUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: __webpack_require__(/*! raw-loader!./edit-user.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/edit-user/edit-user.page.html"),
        styles: [__webpack_require__(/*! ./edit-user.page.scss */ "./src/app/pages/profile/edit-user/edit-user.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], EditUserPage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-user-edit-user-module-es2015.js.map