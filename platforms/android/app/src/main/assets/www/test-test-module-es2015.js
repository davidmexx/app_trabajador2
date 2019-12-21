(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-toolbar color=\"primary\">\n      <ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\" placeholder=\"Search for a place\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <input type=\"file\" (change)=\"onFileSelected($event)\"><br>\n  <br> <br> <br>\n  <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n  <ion-button extend=\"full\" (click)=\"modal()\">ver modal</ion-button>\n  <p> ismael osuna</p>\n    <ion-item *ngFor=\"let data of datos\">\n      <ion-checkbox type=\"checkbox\" [(ngModel)]=\"data.selected\"></ion-checkbox>\n    </ion-item>\n  \n    <ion-item *ngFor=\"let data of datos\">\n      <input type=\"checkbox\" id=\"{{data.name}}\" [(ngModel)]=\"data.selected\"/>\n      <label for=\"{{data.name}}\"> One</label>\n    </ion-item>\n    <ion-list [hidden]=\"autocompleteItems.length == 0\">\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\n        {{ item.description }}\n      </ion-item>\n    </ion-list>\n  \n    <div id='map'></div>\n</ion-content>\n<ion-footer >\n    <ion-row size=\"12\">\n      <ion-col size=\"4\">\n        <ion-item>\n          <ion-icon name=\"person\" style=\"position: absolute;\"></ion-icon>\n          <ion-label style=\"position: relative;\">profile</ion-label>\n        </ion-item>\n        <button class=\"geolocation-btn\" ion-button full (click)=\"tryGeolocation()\"> Try Geolocation </button>\n        \n      </ion-col>\n    </ion-row>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");
/* harmony import */ var _modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");
/* harmony import */ var _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/modal-trades/modal-trades.module */ "./src/app/modals/modal-trades/modal-trades.module.ts");









const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_7__["ModalTradesPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _modals_modal_trades_modal_trades_module__WEBPACK_IMPORTED_MODULE_8__["ModalTradesPageModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=checkbox] {\n  display: none;\n}\n\ninput[type=checkbox] + label {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  font-size: 10px;\n  cursor: pointer;\n  border-radius: 50px;\n  background-color: #fff;\n  border: solid 2px #7d7d7d;\n  padding: 0.5rem 2rem;\n  display: inline-block;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\ninput[type=checkbox]:checked + label {\n  -webkit-transition: all 500ms ease;\n  transition: all 500ms ease;\n  background-color: #05b7d7;\n  color: white;\n  border-color: #05b7d7;\n}\n\nion-app._gmaps_cdv_ .nav-decor {\n  background-color: transparent !important;\n}\n\n#map {\n  height: 100%;\n  width: 300px;\n}\n\n.geolocation-btn {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC9DOlxcVXNlcnNcXGlzbWFlXFxEb2N1bWVudHNcXGFwcF90cmFiYWphZG9yXFxhcHBfdHJhYmFqYWRvci9zcmNcXGFwcFxcdGVzdFxcdGVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHRTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUEyQixZQUFBO0VBQWMscUJBQUE7QUNFN0M7O0FEQ0U7RUFDRSx3Q0FBQTtBQ0VKOztBREVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDUjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90ZXN0L3Rlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOnNvbGlkIDJweCAjN2Q3ZDdkO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjdkNzsgY29sb3I6IHdoaXRlOyBib3JkZXItY29sb3I6IzA1YjdkNztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWFwcC5fZ21hcHNfY2R2XyAubmF2LWRlY29ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcblxyXG4gICAgICAjbWFwIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICB9XHJcbiBcclxuICAuZ2VvbG9jYXRpb24tYnRue1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gICIsImlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzdkN2Q3ZDtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjdkNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICMwNWI3ZDc7XG59XG5cbmlvbi1hcHAuX2dtYXBzX2Nkdl8gLm5hdi1kZWNvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmdlb2xvY2F0aW9uLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_testing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/testing.service */ "./src/app/services/testing.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/modal-trades/modal-trades.page */ "./src/app/modals/modal-trades/modal-trades.page.ts");









let TestPage = class TestPage {
    constructor(http, abiliti, modalCtrl, router, zone, geolocation, loadingCtrl) {
        this.http = http;
        this.abiliti = abiliti;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.zone = zone;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        ///////////////////
        this.habilidades = [];
        this.userus = {};
        this.selectedFile = null;
        this.datos = [
            {
                name: "primary",
                selected: true
            },
            {
                name: "secondary",
                selected: false
            },
            {
                name: "success",
                selected: true
            }
        ];
        this.geocoder = new google.maps.Geocoder;
        let elem = document.createElement("div");
        this.GooglePlaces = new google.maps.places.PlacesService(elem);
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
            input: ''
        };
        this.autocompleteItems = [];
        this.markers = [];
        this.loading = this.loadingCtrl.create();
    }
    ngOnInit() {
        this.abiliti.getAbilities().subscribe(res => {
            // console.log(res);
            this.habilidades.push(...res.abilities);
            console.log(this.habilidades);
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.9011, lng: -56.1645 },
                zoom: 15
            });
        });
        /*
        this.abiliti.getContractor().subscribe(data => {
          this.userus = data;
          console.log(this.userus);
        });*/
    }
    test() {
        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });
        Toast.fire({
            type: 'success',
            title: 'Signed in successfully'
        });
    }
    changeListener($event) {
        this.file = $event.target.files[0];
        console.log(this.file);
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    }
    onUpload() {
        let fb = new FormData();
        fb.append('user_id', "10");
        fb.append('file', this.selectedFile);
        let data = {
            user_id: "10",
            file: this.selectedFile
        };
        let axiosConfig = {
            headers: {
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                "Accept": "application/json",
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkNzBkMGZiOTRiNzg3ZjdiNjE4MDA4OTY2YzYzMTQyYWRkODNmY2NlNzdkOTYwYWUxNDliYzdmOGYwZjkyYTE0ZDBkNDMzMDljZjc3NDdjIn0.eyJhdWQiOiIzIiwianRpIjoiMGQ3MGQwZmI5NGI3ODdmN2I2MTgwMDg5NjZjNjMxNDJhZGQ4M2ZjY2U3N2Q5NjBhZTE0OWJjN2Y4ZjBmOTJhMTRkMGQ0MzMwOWNmNzc0N2MiLCJpYXQiOjE1NzM2MzIxODgsIm5iZiI6MTU3MzYzMjE4OCwiZXhwIjoxNjA1MjU0NTg4LCJzdWIiOiI2MiIsInNjb3BlcyI6W119.BBUM1Q9azzibZIzdzA6tOAQhmm63Xiatq-i4R94OugOkrHhWRkkHQPQGj1HfsYifTFEITbxJCm_PXtV5NiImLkH-LdCxTNnNC2cBUM--ykOfGduJAeaqKIit8UhmHpvlczkkJQCa70I2pNROzla_pzaWs7I2zz4bUCv9GNeXsMi6DLH2-b9bz1yFgJFD46G5mZr355kj9XsPqpZF2PID_z33WZkaOyXcv0YKLAkNvvIDkbUuz1jkxfB8s-wJrRFu5CIRbVBh1Pj_UGtORzQ_BDIKvSol_uNI_CkyoiOE_KcTtL53Fe4QGRnslghovT93nfDNDeLCgRC_q12DsEeGhT75CHyEgxcebCbr_tQmiiyQ8aSpSwaXnO7zv6-gLeov1oXfnmWjgCNwA7a4QIHS4wh0WC8Nq_kjWPn2LqiA93sMda_AYaNu1n8jPzFs0Nnjg7N4Rur6cYJbSqS1jNMYF9DkJic41uOpPsoYZHGIOrOwWrmj9uwQqwSjtlo8H1J0C1jzDcTgUMExTyV-E8BKivB0iwiuNSQYRKU0JNBIl78pN-_-Oj-hVInQR2mYmBrQ60Th7G6kaHSQW53gzSvaa_opLXloUzzTcmfSVe15jZpF7v5qnwoFUjuEnGn6sN6PSlU9k6WtPEfHI_w6RLVA7OAvucG-tDz8i-VfJ6iNQ2k`
            }
        };
        this.http.post("https://api.haskyconnections.com/auth/user/document", fb, axiosConfig).subscribe(res => {
            console.log(res);
        });
    }
    modal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_modal_trades_modal_trades_page__WEBPACK_IMPORTED_MODULE_8__["ModalTradesPage"],
                componentProps: {
                    nombre: 'ismael',
                    pais: 'mexico'
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            console.log(data);
        });
    }
    hola() {
        this.router.navigate(["/code"]);
    }
    evento(event) {
        console.log(event);
    }
    tryGeolocation() {
        this.clearMarkers(); //remove previous markers
        this.geolocation.getCurrentPosition().then((resp) => {
            let pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            let marker = new google.maps.Marker({
                position: pos,
                map: this.map,
                title: 'I am here!'
            });
            this.markers.push(marker);
            this.map.setCenter(pos);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    updateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            this.autocompleteItems = [];
            if (predictions) {
                this.zone.run(() => {
                    predictions.forEach((prediction) => {
                        this.autocompleteItems.push(prediction);
                    });
                });
            }
        });
    }
    selectSearchResult(item) {
        this.clearMarkers();
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
            if (status === 'OK' && results[0]) {
                // let position = {
                //     lat: results[0].geometry.location.lat,
                //     lng: results[0].geometry.location.lng
                // };
                let marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: this.map
                });
                this.markers.push(marker);
                this.map.setCenter(results[0].geometry.location);
            }
        });
    }
    clearMarkers() {
        for (var i = 0; i < this.markers.length; i++) {
            console.log(this.markers[i]);
            this.markers[i].setMap(null);
        }
        this.markers = [];
    }
};
TestPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-test",
        template: __webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.page.html"),
        styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_testing_service__WEBPACK_IMPORTED_MODULE_3__["TestingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=test-test-module-es2015.js.map