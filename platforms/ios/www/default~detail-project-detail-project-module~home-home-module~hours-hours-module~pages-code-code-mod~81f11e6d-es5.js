(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~detail-project-detail-project-module~home-home-module~hours-hours-module~pages-code-code-mod~81f11e6d"],{

/***/ "./src/app/services/testing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/testing.service.ts ***!
  \*********************************************/
/*! exports provided: TestingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingService", function() { return TestingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestingService = /** @class */ (function () {
    //  url = "http://api.araconsultoriaydesarrollos.com/"
    function TestingService(http) {
        this.http = http;
        this.url = "https://api.haskyconnections.com/";
    }
    TestingService.prototype.getAbilities = function () {
        return this.http.get("https://pokeapi.co/api/v2/pokemon/ditto/");
    };
    TestingService.prototype.getContractor = function () {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZhYTg5YzkyOTMxOTk5YzQ5Zjg0MzE5OWY3NzJmOGNjMDk3MTlkYmYzNmU0ZDRiNjQ0NzY4M2UxNDhjMDU3ZDgwZWQ2NmI3YWM3Yjc0MjQyIn0.eyJhdWQiOiIxIiwianRpIjoiNmFhODljOTI5MzE5OTljNDlmODQzMTk5Zjc3MmY4Y2MwOTcxOWRiZjM2ZTRkNGI2NDQ3NjgzZTE0OGMwNTdkODBlZDY2YjdhYzdiNzQyNDIiLCJpYXQiOjE1Njc4MTQ2MjQsIm5iZiI6MTU2NzgxNDYyNCwiZXhwIjoxNTk5NDM3MDI0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ZbOH1PVC4JTPfAxO-ZCGf6qLTiAe4Ilid3_2Od_ZjxJhCu71_vZw0jmnpUH2Fa2CF3oaO0ANk0XYQ6RP0OAA-iLdtkHHKVwYFkstBKy7mRdmjgnZH3BwPf8JnXsrmxyulTsouwXEIMgFdOuNnasVHOXRtqq3u4onua1ERNRBusdc0uyqI0a_4dUOkcQdiKLmOtwZGis-etTJdaTBhdWQFp8cDsfDH3WOK6f_KY9Y3T0SVo4rF99XGMKFLfEmsX_Qx6kYNzs4YDF-0E6FQV4uPSzm9Sa-a7EEL5ZR2Sn0jNj8JKmfQ8dYgs_c20p1HCtbGnknG-n3ele30gKBYWJASzVQJzdf9pg1r8NyabdZ5ovAmCHUQYixhpG75cP0L3IN-6r3_fIugs5niMeDxMz-rv5ZkLwPJp3cqkzggNwg4meqvwz0quX91AkKjD51tpxOgO0zjOZKs8pl4NpCald1I4BuR8hN-USRE1Zasvb5ko3Z58ddgcpVURlib8xxp4WOqihcY3-F6C43aU1-M_CjnqtKl8ineaz1xo9eM8pZaorYp4Rzru1pRmOw1jq0WHSXGnOyovzmWPDrhIAHac7poiuNIJPdl7fvFPlPxWHMiYTkaIveSVfEchH1Zpw2pR_rFYEXSrKmn4z76m93b_wRhMQdeAOqxkV1O6hZWz6BOC0"
            }
        };
        return this.http.get("http://api.araconsultoriaydesarrollos.com/auth/user", axiosConfig);
    };
    TestingService.prototype.Login = function (email, password) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.post(this.url + "auth/login", {
            email: email,
            password: password
        }, axiosConfig);
    };
    TestingService.prototype.singup = function (firstname, lastname, email, password, passwordr, phone) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http
            .post(this.url + "auth/signup", {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            password_confirmation: passwordr,
            phone_number: phone
        }, axiosConfig);
    };
    TestingService.prototype.verifyCode = function (token, code) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "contractor",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/user/code", {
            code: code
        }, axiosConfig);
    };
    TestingService.prototype.resenCode = function (token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "contractor",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.get(this.url + "auth/user/send-code", axiosConfig);
    };
    TestingService.prototype.getTrades = function () {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "admin",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.get(this.url + "trades", axiosConfig);
    };
    TestingService.prototype.getEspeciality = function () {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "admin",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.get(this.url + "specialties", axiosConfig);
    };
    TestingService.prototype.getTools = function () {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "admin",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.get(this.url + "tools", axiosConfig);
    };
    TestingService.prototype.addTrades = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/trades/worker", {
            user_id: data.user_id,
            trade_id: data.trade_id,
            overtime: data.overtime,
            specialty_id: data.specialty_id
        }, axiosConfig);
    };
    TestingService.prototype.addTradeAdress = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.put(this.url + "auth/user/" + data.id, {
            steps: "4",
            address: data.address,
            location: data.location
        }, axiosConfig);
    };
    TestingService.prototype.addTradeWorkinDays = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.put(this.url + "auth/user/" + data.id, {
            steps: "5",
            working_days: data.working_days
        }, axiosConfig);
    };
    TestingService.prototype.addTradesTools = function (userid, idtools, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/tools/worker", {
            user_id: userid,
            tool_id: idtools
        }, axiosConfig);
    };
    TestingService.prototype.addTradesTransport = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.put(this.url + "auth/user/" + data.id, {
            steps: "7",
            transport: data.transport
        }, axiosConfig);
    };
    TestingService.prototype.getUser = function (token, id) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.get(this.url + "auth/user/" + id, axiosConfig);
    };
    TestingService.prototype.editUser = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "contractor",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.put(this.url + "auth/user/" + data.id, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            address: data.address
        }, axiosConfig);
    };
    TestingService.prototype.editUserSignal = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "contractor",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.put(this.url + "auth/user/" + data.id, {
            onesignal_id: data.onesignal_id
        }, axiosConfig);
    };
    TestingService.prototype.uploadPicturePerfil = function (data, token) {
        var fb = new FormData();
        //fb.append('user_id', data.user_id);
        fb.append('profile_image', data.file);
        var axiosConfig = {
            headers: {
                "Accept": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/user/edit-profile", fb, axiosConfig);
    };
    TestingService.prototype.deleteTrades = function (data, token) {
        var axiosConfig = {
            headers: {
                "Accept": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        var fb = new FormData();
        fb.append('user_id', data.user_id);
        fb.append('trade_id', data.trade_id);
        fb.append('specialty_id', data.specialty_id);
        return this.http.post(this.url + "auth/trades/worker-delete", fb, axiosConfig);
    };
    TestingService.prototype.deleteTools = function (data, token) {
        var axiosConfig = {
            headers: {
                "Accept": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        var fb = new FormData();
        fb.append('user_id', data.user_id);
        fb.append('tool_id', data.tool_id);
        return this.http.post(this.url + "auth/tools/worker-delete", fb, axiosConfig);
    };
    TestingService.prototype.sendEmail = function (email) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "admin",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.post(this.url + "send-email", {
            email: email
        }, axiosConfig);
    };
    TestingService.prototype.changePassoword = function (data) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "admin",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return this.http.post(this.url + "send-password", {
            code: data.code,
            email: data.email,
            password: data.password
        }, axiosConfig);
    };
    TestingService.prototype.detailProject = function (id, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/get-request-data", {
            request_id: id
        }, axiosConfig);
    };
    TestingService.prototype.findJobs = function (token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.get(this.url + "auth/get-notifications", axiosConfig);
    };
    TestingService.prototype.acceptedJobs = function (data, token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "contractor",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/request-worker/notify", {
            user_id: data.user_id,
            request_id: data.request_id,
            contractor_id: data.contractor_id
        }, axiosConfig);
    };
    TestingService.prototype.viewJobs = function (token) {
        var axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.get(this.url + "auth/get-request-user", axiosConfig);
    };
    TestingService.prototype.addDocumentd = function (data, token) {
        var fb = new FormData();
        fb.append('user_id', data.user_id);
        fb.append('file', data.file);
        var axiosConfig = {
            headers: {
                "Accept": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        return this.http.post(this.url + "auth/user/document", fb, axiosConfig);
    };
    TestingService.prototype.getQr = function (data, token) {
        var axiosConfig = {
            headers: {
                "Accept": "application/json",
                "site": "worker",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: "Bearer " + token
            }
        };
        try {
            return this.http.post(this.url + "checkin/get-qr", {
                user_id: data.user_id,
                project_id: data.project_id,
                request_id: data.request_id,
                date: data.date,
                time: data.time
            }, axiosConfig);
        }
        catch (error) {
            console.log(error);
        }
    };
    TestingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TestingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestingService);
    return TestingService;
}());



/***/ })

}]);
//# sourceMappingURL=default~detail-project-detail-project-module~home-home-module~hours-hours-module~pages-code-code-mod~81f11e6d-es5.js.map