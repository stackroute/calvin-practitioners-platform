webpackJsonp([0],{

/***/ "../../../../../webapp async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../webapp async recursive";

/***/ }),

/***/ "../../../../../webapp/app/accept-page/accept-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/accept-page/accept-page.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  \n    <img md-card-avatar src=\"./assets/img/calvin-logo.png\">\n    <md-card-title>JOIN CALVIN </md-card-title>\n    <md-card-subtitle>You have invited  to join Calvin.Join now to start collaborating !</md-card-subtitle>\n  \n\n <md-card-content>\n      <button md-raised-button color=\"primary\" type=\"submit\" (click)=\"update()\" >Join</button>\n       <button md-raised-button routerLink=\"/app/home\" (click)=\"delete()\">Reject</button>\n  </md-card-content>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../webapp/app/accept-page/accept-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accept_page_accept_page_service__ = __webpack_require__("../../../../../webapp/app/accept-page/accept-page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptPageComponent = (function () {
    function AcceptPageComponent(route, userservice, AcceptService) {
        this.route = route;
        this.userservice = userservice;
        this.AcceptService = AcceptService;
        this.activity = [];
        this.flag = 0;
        this.resultArray = [];
        this.domain = route.snapshot.params.domain;
        console.log('domainName is', this.domain);
        this.role = route.snapshot.params.role;
        console.log('role is', this.role);
    }
    AcceptPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserDetail(function (userdetails) {
            _this.user = userdetails;
            _this.username = userdetails.username;
            _this.flag = 1;
            // console.log("UserName is",this.username);
        });
    };
    AcceptPageComponent.prototype.update = function () {
        this.AcceptService.updateMember(this.domain, this.username, this.role).subscribe(function (res) {
            console.log("result", res);
        });
    };
    AcceptPageComponent.prototype.delete = function () {
        this.AcceptService.deleteRequest(this.domain, this.username).subscribe(function (res) {
            console.log("result", res);
        });
    };
    return AcceptPageComponent;
}());
AcceptPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-accept-page',
        template: __webpack_require__("../../../../../webapp/app/accept-page/accept-page.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/accept-page/accept-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__accept_page_accept_page_service__["a" /* acceptService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__["a" /* UserInfoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__accept_page_accept_page_service__["a" /* acceptService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__accept_page_accept_page_service__["a" /* acceptService */]) === "function" && _c || Object])
], AcceptPageComponent);

var _a, _b, _c;
//# sourceMappingURL=accept-page.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/accept-page/accept-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var acceptService = (function () {
    function acceptService(http) {
        this.http = http;
    }
    //   updateUserProfile(profiledata, emailAddrs) {
    //     return this.http.patch(`api/v1/users/${emailAddrs}`, profiledata).map(() =>
    //             console.log('Updated Profile details', profiledata));
    //   }
    acceptService.prototype.getUserProfile = function (emailAddrs) {
        return this.http.get("api/v1/users/" + emailAddrs).map(function (res) { return res.json(); });
    };
    acceptService.prototype.updateMember = function (domain, person, role) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var url = "/api/v1/communityMembers/memberrequests/invite/" + domain + "/person/" + person + "/" + role;
        return this.http.patch(url, options).map(function (res) { return res.json(); });
    };
    acceptService.prototype.deleteRequest = function (domain, person) {
        var url = "api/v1/communityMembers/memberrequests/" + domain + "/person/" + person;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers
        });
        //console.log(body)
        return this.http.delete(url, options).map(function (res) { return res.json(); });
    };
    return acceptService;
}());
acceptService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], acceptService);

var _a;
//# sourceMappingURL=accept-page.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/activity-card/activity-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url('http://www.radiowey.org/wp-content/uploads/2017/02/holding_avatar.png');\n  background-size: cover;\n}\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/activity-card/activity-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header class=\"head\" fxFlex=\"100%\" fxLayout=\"row\">\n    <div fxFlex=\"10%\">\n      <img class=\"example-header-image\" md-card-avatar src=\"{{decoratedActivity.actor.href}}\" alt=\"\">\n    </div>\n    <div align=\"start\" fxFlex=\"80%\">\n      <md-card-title style=\"text-transform: capitalize\">{{decoratedActivity.actor.name}} {{decoratedActivity.type}} {{decoratedActivity.object.type}} in {{decoratedActivity.context.name}}\n        @{{decoratedActivity.object.name}} in {{decoratedActivity.target.name}}\n      </md-card-title>\n      <md-card-subtitle></md-card-subtitle>\n    </div>\n  </md-card-header>\n  <hr fxFlex=\"100%\">\n  <md-card-content fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start\" align=\"start\">\n    <markdown [data]=\"decoratedActivity.target.content\"></markdown>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/activity-card/activity-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { InfiniteScrollModule } from 'angular2-infinite-scroll';

var ActivityCardComponent = (function () {
    function ActivityCardComponent(userservice) {
        this.userservice = userservice;
        this.flag = 0;
    }
    ActivityCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.decoratedActivity = this.activity.payload.payload.payload;
        this.userservice.getUserDetail(function (userdetails) {
            _this.user = userdetails;
            _this.avatar = userdetails.avatar;
            _this.flag = 1;
            console.log("UserName is", _this.avatar);
        });
    };
    return ActivityCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivityCardComponent.prototype, "activity", void 0);
ActivityCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-activity-card',
        template: __webpack_require__("../../../../../webapp/app/activity-card/activity-card.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/activity-card/activity-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_user_info_service__["a" /* UserInfoService */]) === "function" && _a || Object])
], ActivityCardComponent);

var _a;
//# sourceMappingURL=activity-card.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/activity-page/activity-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\n   color: grey;\n   margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/activity-page/activity-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--collect activity cards for display activity page-->\n<div class=\"search-results\" infinite-scroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScroll()\"\n  [scrollWindow]=\"false\">\n  <div class=\"activity-board item item-3\" fxLayout=\"rows\">    \n    <div fxFlex=\"100%\" fxlayout=\"column\" fxLayoutGap=\"2%\" fxLayoutWrap>\n      <div *ngIf=\"activities.length !== 0\" fxFlex=\"100%\" >\n        <div class=\"list-activities\" fxFlex=\"100%\" fxlayout=\"column\" *ngFor=\"let activity of activities let i = index;\">\n          <calvin-activity-card [activity]=\"activity\"></calvin-activity-card>\n        </div>\n      </div>\n      <md-card *ngIf=\"activities.length === 0\" align=\"center\" class=\"title\">\n        No activities yet for you.!Time to perform some actions!\n      </md-card>     \n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../webapp/app/activity-page/activity-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_page_service__ = __webpack_require__("../../../../../webapp/app/activity-page/activity-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_bar_app_bar_service__ = __webpack_require__("../../../../../webapp/app/app-bar/app-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityPageComponent = (function () {
    function ActivityPageComponent(activityService, userservice, value) {
        this.activityService = activityService;
        this.userservice = userservice;
        this.value = value;
        this.activities = [];
        this.flag = 0;
    }
    ActivityPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserDetail(function (userdetails) {
            _this.user = userdetails;
            _this.username = userdetails.username;
            _this.flag = 1;
        });
        if (!this.community) {
            console.log("inside activites page");
            this.getMemberActivities();
        }
        if (this.community) {
            console.log("inside community page");
            this.getDomainActivities();
        }
    };
    ActivityPageComponent.prototype.getMemberActivities = function () {
        var _this = this;
        this.activityService.getActivities(this.username, this.community, this.sort, this.order, this.page, this.limit)
            .subscribe(function (data) {
            _this.activities = data['items'];
            console.log("Member activities", _this.activities);
        });
    };
    ActivityPageComponent.prototype.getDomainActivities = function () {
        var _this = this;
        this.activityService.getActivitiesByDomainName(this.community)
            .subscribe(function (data) {
            _this.activities = data['items'];
            console.log("Member activities", _this.activities);
        });
    };
    return ActivityPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivityPageComponent.prototype, "community", void 0);
ActivityPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-activity-page',
        template: __webpack_require__("../../../../../webapp/app/activity-page/activity-page.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/activity-page/activity-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity_page_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activity_page_service__["a" /* ActivityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__["a" /* UserInfoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_bar_app_bar_service__["a" /* AppBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_bar_app_bar_service__["a" /* AppBarService */]) === "function" && _c || Object])
], ActivityPageComponent);

var _a, _b, _c;
//# sourceMappingURL=activity-page.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/activity-page/activity-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityService = (function () {
    function ActivityService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    ActivityService.prototype.getActivities = function (uname, communities, sort, order, page, limit) {
        var _this = this;
        return this.http
            .get("api/v1/memberactivitypage/" + uname)
            .catch(function (err) {
            _this.snackBar.open('Unable to get user activities', 'X', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (response) { return response.json(); });
    };
    ActivityService.prototype.getActivitiesByDomainName = function (domainName) {
        var _this = this;
        return this.http
            .get("api/v1/memberactivitypage/community/" + domainName)
            .catch(function (err) {
            _this.snackBar.open('Unable to get domain activities', 'X', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (response) { return response.json(); });
    };
    ActivityService.prototype.getActivity = function () {
        var _this = this;
        return this.http
            .get("api/v1/memberactivitypage/community/nitin")
            .catch(function (err) {
            _this.snackBar.open('Unable to get domain activities', 'X', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (response) { return response.json(); });
    };
    return ActivityService;
}());
ActivityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], ActivityService);

var _a, _b;
//# sourceMappingURL=activity-page.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/add-tool/add-tool.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n\n    text-align: left;  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/add-tool/add-tool.component.html":
/***/ (function(module, exports) {

module.exports = "  <md-card class=\"example-card\">\n  <md-card-header>\n    <div md-card-avatar class=\"example-header-image\"></div>\n    <md-card-title>\n      <h2>TOOL REGISTRATION</h2>\n    </md-card-title>\n  </md-card-header>\n  <md-card-content>\n\n    <form class=\"container\" fxFlex=\"80\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlexFill [formGroup]=\"toolForm\" (ngSubmit)=\"onsubmit(toolForm)\">\n      <!--<form class=\"container\" fxFlex=\"80\" fxLayout=\"column\" \n  fxFlexFill [formGroup]=\"toolForm\" (ngSubmit)=\"onsubmit(toolForm)\">-->\n      <!--domain name text field-->\n\n      <div fxLayout.md=\"column\">\n        <md-input-container>\n\n          <input mdInput placeholder=\"Tool id\" formControlName=\"toolid\">\n          <md-hint align=\"start\" class=\"full-width\">\n            <div *ngIf=\"toolForm.get('toolid').hasError('required') && toolForm.get('toolid').touched\" class=\"errorStyle\">\n              Tool id is required\n            </div>\n            <div *ngIf=\"toolForm.get('toolid').hasError('pattern') && toolForm.get('toolid')\" class=\"errorStyle\">\n              Invalid toolid,must contain 4 to 20 char with one special character(.)\n            </div>\n          </md-hint>\n        </md-input-container>\n      </div>\n      <div fxLayout.md=\"column\">\n\n        <md-input-container>\n\n          <input mdInput placeholder=\"Tool name\" formControlName=\"toolname\">\n          <md-hint align=\"start\" class=\"full-width\">\n            <div *ngIf=\"toolForm.get('toolname').hasError('required') && toolForm.get('toolname').touched\" class=\"errorStyle\">\n              Tool name is required\n            </div>\n          </md-hint>\n        </md-input-container>\n      </div>\n      <div fxLayout.md=\"column\">\n\n        <md-input-container>\n          <input mdInput placeholder=\"Avatar\" formControlName=\"avatar\">\n          <md-hint align=\"start\" class=\"full-width\">\n            <div *ngIf=\"toolForm.get('avatar').hasError('required') && toolForm.get('avatar').touched\" class=\"errorStyle\">\n              Tool avatar is required\n            </div>\n            <div *ngIf=\"toolForm.get('avatar').hasError('pattern') && toolForm.get('avatar').touched\" class=\"errorStyle\">\n              Invalid avatar path,must be url\n            </div>\n          </md-hint>\n        </md-input-container>\n      </div>\n\n      <div fxLayout.md=\"column\">\n\n        <md-input-container class=\"inputFields\">\n          <textarea mdInput class=\"communityNameFont\" placeholder=\"Description\" rows=\"2\" formControlName=\"description\"></textarea>\n          <md-hint align=\"start\" class=\"full-width\">\n            <div *ngIf=\"toolForm.get('description').hasError('required') && toolForm.get('description').touched\" class=\"errorStyle\">\n              Tool Description is required\n            </div>\n          </md-hint>\n        </md-input-container>\n      </div>\n      <div fxLayout.md=\"column\" fxLAyoutGap=\"20px\">\n\n        <md-select placeholder=\"Select purpose\" formControlName=\"purpose\">\n          <md-option *ngFor=\"let core of uniquePurpose\" [value]=\"core\">\n            {{core}}\n          </md-option>\n        </md-select>\n        <md-hint align=\"start\" class=\"full-width\">\n          <div *ngIf=\"toolForm.get('purpose').hasError('required') && toolForm.get('purpose').touched\" class=\"errorStyle\">\n            Select purpose\n          </div>\n        </md-hint>\n      </div>\n      <span layout=\"row\"><hr flex/><h4>Actions</h4><hr flex/></span>\n      <div *ngFor=\"let action of actions \" fxLayout.md=\"column\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"20px\">\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"action\" mdInput placeholder=\"Action\" disabled value={{action.name}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"grants\" mdInput placeholder=\"Grants\" disabled value={{action.grants}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"actionDesc\" mdInput placeholder=\"Description\" disabled value={{action.desc}}>\n          </md-input-container>\n          <!--<i class=\"material-icons\" (click)=\"remAction(action.name)\">cancel_outline</i>-->\n          <button md-mini-fab type=\"button\" (click)=\"remAction(action.name)\"><md-icon>clear</md-icon></button>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"20px\">\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"action\" mdInput placeholder=\"Action\" [(ngModel)]=\"toolaction\" formControlName=\"toolaction\">\n            <md-hint align=\"start\" class=\"full-width\">\n              <div *ngIf=\"toolForm.get('toolaction').hasError('required') && toolForm.get('toolaction').touched\" class=\"errorStyle\">\n                Action Name is required\n              </div>\n            </md-hint>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"grants\" mdInput placeholder=\"Grants\" [(ngModel)]=\"toolgrants\" formControlName=\"toolgrants\">\n            <md-hint align=\"start\" class=\"full-width\">\n              <div *ngIf=\"toolForm.get('toolgrants').hasError('required') && toolForm.get('toolgrants').touched\" class=\"errorStyle\">\n                Action Grants is required\n              </div>\n            </md-hint>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"actionDesc\" mdInput placeholder=\"Description\" [(ngModel)]=\"actionDesc\" formControlName=\"actionDesc\">\n            <md-hint align=\"start\" class=\"full-width\">\n              <div *ngIf=\"toolForm.get('actionDesc').hasError('required') && toolForm.get('actionDesc').touched\" class=\"errorStyle\">\n                Action Description is required\n              </div>\n            </md-hint>\n          </md-input-container>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n        <!--<md-icon (click)=\"AddAction()\">add_outline</md-icon>-->\n        <!--<i class=\"material-icons\" (click)=\"AddAction()\">add_circle_outline</i>-->\n        <button md-mini-fab type=\"button\" (click)=\"AddAction()\"><md-icon>add_outline</md-icon></button>\n      </div>\n      <span layout=\"row\"><hr flex/><h4>Events</h4><hr flex/></span>\n      <div *ngFor=\"let event of events\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"20px\">\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\" fxLayout=\"row\">\n            <input name=\"event\" mdInput placeholder=\"Event Name\" disabled value={{event.name}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\" fxLayout=\"row\">\n            <input name=\"payload\" mdInput placeholder=\"Meta Data\" disabled value={{event.metadata}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"evdesc\" mdInput placeholder=\"Description\" disabled value={{event.description}}>\n          </md-input-container>\n          <!--<i class=\"material-icons\" (click)=\"remEvent(event.name)\">cancel_outline</i>-->\n          <!--<button md-mini-fab type=\"button\" (click)=\"remEvent(event.name)\"><md-icon>cancel</md-icon></button>-->\n                   <button md-mini-fab type=\"button\" (click)=\"remEvent(event.name)\"><md-icon>clear</md-icon></button>\n        </div>\n      </div>\n\n      <div fxLayout.md=\"column\">\n\n\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"20px\">\n          <div fxLayout.xs=\"row\">\n            <md-input-container class=\"example-full-width\" fxLayout=\"row\">\n              <input name=\"event\" mdInput placeholder=\"Event Name\" [(ngModel)]=\"tooleventname\" formControlName=\"tooleventname\">\n              <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"toolForm.get('tooleventname').hasError('required') && toolForm.get('tooleventname').touched\" class=\"errorStyle\">\n                  Event Name is required\n                </div>\n              </md-hint>\n            </md-input-container>\n          </div>\n          <div fxLayout.xs=\"row\">\n            <md-input-container class=\"example-full-width\" fxLayout=\"row\">\n              <input name=\"payload\" mdInput placeholder=\"Meta Data\" [(ngModel)]=\"eventpayload\" formControlName=\"eventpayload\">\n              <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"toolForm.get('eventpayload').hasError('required') && toolForm.get('eventpayload').touched\" class=\"errorStyle\">\n                  Event Payload is required\n                </div>\n              </md-hint>\n            </md-input-container>\n          </div>\n          <div fxLayout.xs=\"row\">\n\n\n            <md-input-container class=\"example-full-width\">\n              <input name=\"evdesc\" mdInput placeholder=\"Description\" [(ngModel)]=\"eventDesc\" formControlName=\"eventDesc\">\n              <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"toolForm.get('eventDesc').hasError('required') && toolForm.get('eventDesc').touched\" class=\"errorStyle\">\n                  Event Description is required\n                </div>\n              </md-hint>\n            </md-input-container>\n          </div>\n\n        </div>\n\n      </div>\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n        <!--<md-icon (click)=\"AddAction()\">add_outline</md-icon>-->\n        <button md-mini-fab type=\"button\" (click)=\"AddEvent()\"><md-icon>add_outline</md-icon></button>\n      </div>\n      <div fxLayout.md=\"column\">\n        <md-checkbox color=\"primary\" formControlName=\"termscondition\">I agree to the terms and condition</md-checkbox>\n      </div>\n      <div fxLayout.md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\n        <a md-button routerLink=\"/app/home\">Cancel</a>\n        <button md-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!toolForm.valid\">Submit</button>\n      </div>\n    </form>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/add-tool/add-tool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_tool_service__ = __webpack_require__("../../../../../webapp/app/add-tool/add-tool.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToolComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SucessDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AddToolComponent = (function () {
    function AddToolComponent(addtoolservice, dialog, fb) {
        this.addtoolservice = addtoolservice;
        this.dialog = dialog;
        this.fb = fb;
        this.actions = [];
        this.events = [];
        this.actionFlag = 0;
        this.eventFlag = 0;
        this.actionCounter = 0;
        this.eventCounter = 0;
        this.purpose = [];
        this.uniquePurpose = [];
        this.flag = 0;
        this.createForm();
    }
    AddToolComponent.prototype.createForm = function () {
        this.toolForm = this.fb.group({
            toolid: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-z0-9.]{4,20}')]],
            toolname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            avatar: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('https?://.+')]],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            purpose: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            toolaction: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            toolgrants: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            actionDesc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            tooleventname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            eventpayload: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            eventDesc: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            termscondition: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
    };
    AddToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addtoolservice.getTemplates()
            .subscribe(function (data) {
            _this.purpose = data;
            // console.log('JSON value', data);
            var purposeList = [new Set(data.map(function (item) { return item.purpose; }))];
            var myArray = Array.from(purposeList);
            _this.uniquePurpose = Array.from(myArray[0]);
            // console.log('unique array',this.uniquePurpose);
        }, function (error) { return console.log(error); }, function () { return console.log('finished'); });
    };
    // this function is to add each tool action in array
    AddToolComponent.prototype.AddAction = function () {
        // console.log('add action called');
        var obj = {
            name: this.toolaction,
            id: this.toolaction + (String(this.actionCounter++)),
            grants: this.toolgrants,
            desc: this.actionDesc,
        };
        // console.log('obj',obj);
        this.actions.push(obj);
        this.actionFlag = 1;
        this.toolaction = '';
        this.toolgrants = '';
        this.actionDesc = '';
    };
    // this function is to reset the action fileds
    AddToolComponent.prototype.enableAction = function () {
        this.toolaction = '';
        this.toolgrants = '';
        this.actionFlag = 0;
    };
    // this function is to remove seleccted action from list
    AddToolComponent.prototype.remAction = function (actionname) {
        // alert(this.toolaction);
        this.actions = this.actions.filter(function (item) { return item.name !== actionname; });
        // console.log(this.actions);
    };
    // this function is to add each tool event in arrays
    AddToolComponent.prototype.AddEvent = function () {
        var eventCounter = 0;
        var obj = {
            name: this.tooleventname,
            id: this.tooleventname + (String(this.eventCounter++)),
            metadata: this.eventpayload,
            description: this.eventDesc
        };
        this.events.push(obj);
        this.eventFlag = 1;
        // alert(this.events);
        this.tooleventname = '';
        this.eventDesc = '';
        this.eventpayload = '';
    };
    // this function is to remove selected event from the list
    AddToolComponent.prototype.remEvent = function (eventname) {
        // alert(this.tooleventname);
        this.events = this.events.filter(function (item) { return item.name !== eventname; });
        // console.log(this.actions);
        if (this.events.length === 0) {
            this.enableEvent();
        }
    };
    // this function is to reset the event fields
    AddToolComponent.prototype.enableEvent = function () {
        this.tooleventname = '';
        this.eventpayload = '';
        this.eventDesc = '';
        this.eventFlag = 0;
    };
    AddToolComponent.prototype.enableSubmit = function () {
        (this.flag === 0) ? this.flag = 1 : this.flag = 0;
    };
    // this function is to register the tool 
    AddToolComponent.prototype.onsubmit = function (formdata) {
        var _this = this;
        var tooldata = formdata.value;
        // console.log(form.value);
        var actionobj = {
            name: this.toolaction,
            id: this.toolaction + (String(this.actionCounter++)),
            grants: this.toolgrants,
            desc: this.actionDesc,
        };
        this.actions.push(actionobj);
        // console.log('tool data is ',tooldata);
        var eventobj = {
            name: this.tooleventname,
            id: this.tooleventname + (String(this.eventCounter++)),
            metadata: this.eventpayload,
            description: this.eventDesc
        };
        this.events.push(eventobj);
        var toolobj = {
            toolid: tooldata.toolid,
            toolname: tooldata.toolname,
            tooldesc: tooldata.description,
            toolavatar: tooldata.avatar,
            toolpurpose: tooldata.purpose,
            toolAction: this.actions,
            toolEvent: this.events
        };
        console.log("final  object.........", toolobj);
        this.id = tooldata.toolid;
        this.addtoolservice.addTool(toolobj).subscribe(function (result) {
            // console.log('inside add tool response');
            // RESETTING FIELDS after successfully adding tool
            _this.events = [];
            _this.actions = [];
            _this.actionFlag = 0;
            _this.eventFlag = 0;
            // form.reset();
            // alert('data'+result);
            // opening Dialogue to show success message
            // this.dialog.open(SucessDialog,{
            //   data:this.id
            // });
            _this.dialog.open(SucessDialog, {
                data: _this.id
            });
        });
    };
    return AddToolComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddToolComponent.prototype, "Toolid", void 0);
AddToolComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-add-tool',
        template: __webpack_require__("../../../../../webapp/app/add-tool/add-tool.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/add-tool/add-tool.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__add_tool_service__["a" /* AddToolService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__add_tool_service__["a" /* AddToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__add_tool_service__["a" /* AddToolService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object])
], AddToolComponent);

var SucessDialog = (function () {
    function SucessDialog(router, data, dialogRef) {
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.toolid = data;
    }
    SucessDialog.prototype.navigateTool = function () {
        // alert('hi will navigate to tool'+`/app/toolpage/${this.toolid}`);
        this.router.navigate(["/app/toolpage/" + this.toolid]);
    };
    return SucessDialog;
}());
SucessDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sucsess-dialog',
        template: __webpack_require__("../../../../../webapp/app/add-tool/success-dialog.html"),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */]) === "function" && _e || Object])
], SucessDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-tool.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/add-tool/add-tool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddToolService = (function () {
    function AddToolService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    AddToolService.prototype.addTool = function (toolobj) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var url = '/api/v1/toolmarketplace/tool';
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(url, toolobj)
            .catch(function (err) {
            //  console.log('Unable to add tool',err);
            _this.snackBar.open('Unable to add Tool.. Please try again later..!!!', 'Close', {
                duration: 3000
            });
            //  this.error=err;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        })
            .map(function (data) { return _this.data = data; }); // handle success
    };
    AddToolService.prototype.getTemplates = function () {
        return this.http.get('/api/v1/communitytemplates').map(function (res) { return res.json(); });
    };
    return AddToolService;
}());
AddToolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], AddToolService);

var _a, _b;
//# sourceMappingURL=add-tool.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/add-tool/success-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>ADD TOOL</h2>\n<md-dialog-content>Tool Added Sucessfully...!!!!</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>Add Another</button>\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button md-raised-button color=\"primary\"  (click)=\"navigateTool()\" md-dialog-close>View Tool</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../webapp/app/app-bar/app-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mat-button-focus-overlay, .mat-button-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hamburger.mat-button {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.logoAlgin {\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff;\n  font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;\n  text-transform: uppercase;\n  padding: 21px 0;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n}\n.searchAlgin {\n  position: relative;\n  color: #fff;\n}\n.logoAlgin img {\n    width: 30px;\n    padding-right: 5px\n}\nmd-chip-list , md-list-item {\n    cursor: pointer\n}\nmd-chip-list :focus , md-list-item:focus {\n    outline: none\n}\n.bottomright {\n    position: absolute;\n    top: 0;\n    right: 0px;\n    color: #fff;\n}\n\n.containeralign{\n  min-height: 800px;\n}\nfooter {\n  margin-top: 720px;\n  background-color: #666;\n  color: #fff;\n  min-height: 80px\n}\ni\n{\n  color:grey;\n}\n.bell\n{\n  padding-top:40%;\n  color:white;\n}\n.menu-icon\n{\n  /*padding-left:-90px;*/\n  margin-left:0px;\n  padding-top:5%;\n  color:white;\n}\n.mat-toolbar\n{\n  padding:0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/app-bar/app-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Side nav -->\n<md-sidenav-container fullscreen>\n <md-sidenav #start>\n   <md-nav-list>\n     <div class=\"container1\" *ngIf=\"flag===1\">\n       <img src={{maximizepic(user.avatar)}}>\n       <div> <button md-icon-button class=\"bottomright\" (click)=\"start.close()\" align=\"end\">\n              <i class=\"material-icons\">close</i></button>\n       </div>\n     </div>\n     <md-list-item routerLink=\"/app/Home\">\n       <div> <i class=\"material-icons\">home</i></div>\n       <div fxFlex='32'>\n         <a fxAlign=\"start\" >Home</a>\n       </div>\n      \n     </md-list-item>\n     <!--<a md-list-item routerLink=\"/app/createCommunity\">New Community</a>\n     <a md-list-item routerLink=\"/app/toolmarket\">Tool Marketplace</a>\n     <a md-list-item routerLink=\"/app/addtool\">Register Tool</a>-->\n      <md-list-item routerLink=\"/app/createCommunity\">\n       <div> <i class=\"material-icons\">supervisor_account</i></div>\n       <div fxFlex='60'>\n         <a fxAlign=\"start\" >New Community</a>\n       </div>\n      \n     </md-list-item>\n      <md-list-item routerLink=\"/app/toolmarket\">\n       <div> <i class=\"material-icons\">shopping_cart</i></div>\n       <div fxFlex='60'>\n         <a fxAlign=\"start\" >Tool marketplace</a>\n       </div>\n      \n     </md-list-item>\n      <md-list-item routerLink=\"/app/addtool\">\n       <div> <i class=\"material-icons\">border_color</i></div>\n       <div fxFlex='50'>\n         <a fxAlign=\"start\">Register Tool</a>\n       </div>\n      \n     </md-list-item>\n   </md-nav-list>\n   <hr>\n </md-sidenav>\n <div class=\"header\">\n   <md-toolbar class=\"mat-primary\" color=\"primary\" role=\"toolbar\">\n     <button class=\"hamburger mat-button\" md-button=\"\" (click)=\"start.open()\" title=\"menu\">\n           <span class=\"mat-button-wrapper\">\n              <i class=\"material-icons menu-icon\">menu</i>\n           </span>\n           <div class=\"mat-button-ripple mat-ripple\" md-ripple=\"\"></div>\n           <div class=\"mat-button-focus-overlay\"></div>\n        </button>\n     <div fxFlex=\"20%\" fxLayout=\"row\">\n         <h3 class=\"nav-link logoAlgin\" routerLink=\"/app/home\">  <strong> CALVIN</strong></h3>  \n     </div>\n     <div fxFlex=\"80%\" fxLayout=\"row\" *ngIf=\"flag===1\" fxLayoutAlign=\"end center\">\n       <md-chip-list>\n         <md-chip md-button selected=\"true\">\n           <i class=\"material-icons bell\">notifications_active</i>\n         </md-chip>\n       </md-chip-list>\n       <md-list>\n         <md-list-item>\n           <img md-list-avatar [md-menu-trigger-for]=\"menu\" src={{user.avatar}} alt=\"User\">\n         </md-list-item>\n       </md-list>\n     </div>\n     <md-menu xPosition=\"before\" [overlapTrigger]=\"false\" #menu=\"mdMenu\">\n       <button md-menu-item routerLink=\"/app/profile\">Profile</button>\n       <button md-menu-item (click)=\"logout()\">Logout</button>\n     </md-menu>\n   </md-toolbar>\n </div>\n <section class=\"containeralgin\">\n   <router-outlet></router-outlet>\n </section>\n <footer fxLayout=\"row\" fxLayoutAlign=\"center center\">\n   <h5>Copyright &#9400; 2017 Stack-Route and Wipro-Digital * All Rights Reserved</h5>\n </footer>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../webapp/app/app-bar/app-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../webapp/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_bar_service__ = __webpack_require__("../../../../../webapp/app/app-bar/app-bar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppBarComponent = (function () {
    function AppBarComponent(dialog, authService, router, userservices, userservice) {
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.userservices = userservices;
        this.userservice = userservice;
        this.flag = 0;
    }
    AppBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserDetail(function (userdetails) {
            _this.user = userdetails;
            // console.log(typeof userdetails);
            //  console.log('user is : '+this.user);
            _this.flag = 1;
        });
    };
    //  (this.user=res));
    // console.log('rss',this.user);
    AppBarComponent.prototype.maximizepic = function (imgsrc) {
        var x = imgsrc.substring(0, (imgsrc.length - 2)) + '300';
        //   console.log('renderd img', x);
        return x;
    };
    AppBarComponent.prototype.logout = function () {
        // alert('logout clciked');
        this.authService.logout();
    };
    return AppBarComponent;
}());
AppBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../webapp/app/app-bar/app-bar.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/app-bar/app-bar.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_5__app_bar_service__["a" /* AppBarService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__app_bar_service__["a" /* AppBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_bar_service__["a" /* AppBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]) === "function" && _e || Object])
], AppBarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app-bar.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/app-bar/app-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBarService = (function () {
    function AppBarService(http) {
        this.http = http;
    }
    // getuserinfo()
    // {
    //     console.log("user data");
    //      let url=" http://localhost:3000/api/v1/user/getinfo";
    //    return this.http.get(url).map(res => res.json());
    // }
    AppBarService.prototype.getuserinfo = function () {
        var url = '/api/v1/user/getinfo';
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    return AppBarService;
}());
AppBarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AppBarService);

var _a;
//# sourceMappingURL=app-bar.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../webapp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'calvin app works ..!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-root',
        template: __webpack_require__("../../../../../webapp/app/app.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_community_manage_community_component__ = __webpack_require__("../../../../../webapp/app/manage-community/manage-community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_app_routing_module__ = __webpack_require__("../../../../../webapp/app/core/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../webapp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../webapp/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_bar_app_bar_component__ = __webpack_require__("../../../../../webapp/app/app-bar/app-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../webapp/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__ = __webpack_require__("../../../../../webapp/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__create_community_create_community_component__ = __webpack_require__("../../../../../webapp/app/create-community/create-community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__community_role_actions_community_role_actions_component__ = __webpack_require__("../../../../../webapp/app/community-role-actions/community-role-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__community_role_management_community_role_management_component__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__community_tool_actions_community_tool_actions_component__ = __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__template_browser_template_browser_component__ = __webpack_require__("../../../../../webapp/app/template-browser/template-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__community_activitylogs_community_activitylogs_component__ = __webpack_require__("../../../../../webapp/app/community-activitylogs/community-activitylogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__community_dashboard_community_dashboard_component__ = __webpack_require__("../../../../../webapp/app/community-dashboard/community-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__activity_card_activity_card_component__ = __webpack_require__("../../../../../webapp/app/activity-card/activity-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__activity_page_activity_page_component__ = __webpack_require__("../../../../../webapp/app/activity-page/activity-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__community_profile_community_profile_component__ = __webpack_require__("../../../../../webapp/app/community-profile/community-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__community_tools_widget_community_tools_widget_component__ = __webpack_require__("../../../../../webapp/app/community-tools-widget/community-tools-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__community_members_widget_community_members_widget_component__ = __webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__my_communities_my_communities_component__ = __webpack_require__("../../../../../webapp/app/my-communities/my-communities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__community_tool_management_community_tool_management_component__ = __webpack_require__("../../../../../webapp/app/community-tool-management/community-tool-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__community_tool_management_community_tool_management_service__ = __webpack_require__("../../../../../webapp/app/community-tool-management/community-tool-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__community_members_widget_community_members_widget_service__ = __webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__community_role_management_community_role_management_service__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__community_tool_actions_community_tool_actions_service__ = __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_infinite_scroll__ = __webpack_require__("../../../../angular2-infinite-scroll/angular2-infinite-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__activity_page_activity_page_service__ = __webpack_require__("../../../../../webapp/app/activity-page/activity-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__community_profile_community_profile_service__ = __webpack_require__("../../../../../webapp/app/community-profile/community-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__manage_community_manage_community_service__ = __webpack_require__("../../../../../webapp/app/manage-community/manage-community.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__tool_market_place_tool_market_place_service__ = __webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__community_new_role_creation_community_new_role_creation_service__ = __webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__community_tool_actions_community_tool_actions_pipe__ = __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__member_edit_member_edit_service__ = __webpack_require__("../../../../../webapp/app/member-edit/member-edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__community_member_management_community_member_management_component__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__community_member_management_community_member_management_service__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__manage_community_tools_manage_community_tools_component__ = __webpack_require__("../../../../../webapp/app/manage-community-tools/manage-community-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__add_tool_add_tool_component__ = __webpack_require__("../../../../../webapp/app/add-tool/add-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__newcommunity_dialogbox_newcommunity_dialogbox_component__ = __webpack_require__("../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__member_invitation_member_invitation_component__ = __webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__tool_market_place_tool_market_place_component__ = __webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__member_edit_member_edit_component__ = __webpack_require__("../../../../../webapp/app/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__tool_page_tool_page_component__ = __webpack_require__("../../../../../webapp/app/tool-page/tool-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__community_new_role_creation_community_new_role_creation_component__ = __webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__tool_config_page_tool_config_page_component__ = __webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__notifications_notifications_component__ = __webpack_require__("../../../../../webapp/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__accept_page_accept_page_component__ = __webpack_require__("../../../../../webapp/app/accept-page/accept-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__invalid_user_invalid_user_component__ = __webpack_require__("../../../../../webapp/app/invalid-user/invalid-user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_51__tool_page_tool_page_component__["a" /* ToolPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__manage_community_manage_community_component__["a" /* updateCommunity */],
            __WEBPACK_IMPORTED_MODULE_8__user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__create_community_create_community_component__["a" /* CreateCommunityComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_bar_app_bar_component__["a" /* AppBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__community_role_actions_community_role_actions_component__["a" /* CommunityRoleActionsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__community_role_management_community_role_management_component__["a" /* CommunityRoleManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_18__community_tool_actions_community_tool_actions_component__["a" /* CommunityToolActionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__template_browser_template_browser_component__["a" /* TemplateBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_20__community_activitylogs_community_activitylogs_component__["a" /* CommunityActivitylogsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__community_dashboard_community_dashboard_component__["a" /* CommunityDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__manage_community_manage_community_component__["b" /* ManageCommunityComponent */],
            __WEBPACK_IMPORTED_MODULE_22__activity_card_activity_card_component__["a" /* ActivityCardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__activity_page_activity_page_component__["a" /* ActivityPageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__community_profile_community_profile_component__["a" /* CommunityProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_25__community_tools_widget_community_tools_widget_component__["a" /* CommunityToolsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_26__community_members_widget_community_members_widget_component__["a" /* CommunityMembersWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_27__my_communities_my_communities_component__["a" /* UserWidgetsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__activity_page_activity_page_component__["a" /* ActivityPageComponent */],
            __WEBPACK_IMPORTED_MODULE_43__community_member_management_community_member_management_component__["a" /* CommunityMemberManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_45__manage_community_tools_manage_community_tools_component__["a" /* ManageCommunityToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_46__add_tool_add_tool_component__["a" /* AddToolComponent */],
            __WEBPACK_IMPORTED_MODULE_47__newcommunity_dialogbox_newcommunity_dialogbox_component__["a" /* NewcommunityDialogboxComponent */],
            __WEBPACK_IMPORTED_MODULE_48__member_invitation_member_invitation_component__["a" /* MemberInvitationComponent */],
            __WEBPACK_IMPORTED_MODULE_49__tool_market_place_tool_market_place_component__["a" /* ToolMarketPlaceComponent */],
            __WEBPACK_IMPORTED_MODULE_46__add_tool_add_tool_component__["b" /* SucessDialog */],
            __WEBPACK_IMPORTED_MODULE_50__member_edit_member_edit_component__["a" /* MemberEditComponent */],
            __WEBPACK_IMPORTED_MODULE_51__tool_page_tool_page_component__["a" /* ToolPageComponent */],
            __WEBPACK_IMPORTED_MODULE_51__tool_page_tool_page_component__["b" /* IntegrateTool */],
            __WEBPACK_IMPORTED_MODULE_52__community_new_role_creation_community_new_role_creation_component__["a" /* CommunityNewRoleCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__community_tool_management_community_tool_management_component__["a" /* CommunityToolManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_28__community_tool_management_community_tool_management_component__["b" /* CommunityDialogue */],
            __WEBPACK_IMPORTED_MODULE_39__community_tool_actions_community_tool_actions_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__["b" /* DialogResultExampleDialog */],
            __WEBPACK_IMPORTED_MODULE_53__tool_config_page_tool_config_page_component__["a" /* ToolConfigPageComponent */],
            __WEBPACK_IMPORTED_MODULE_53__tool_config_page_tool_config_page_component__["b" /* DialogResultDialog */],
            __WEBPACK_IMPORTED_MODULE_54__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_53__tool_config_page_tool_config_page_component__["b" /* DialogResultDialog */],
            __WEBPACK_IMPORTED_MODULE_55__accept_page_accept_page_component__["a" /* AcceptPageComponent */],
            __WEBPACK_IMPORTED_MODULE_56__invalid_user_invalid_user_component__["a" /* InvalidUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_41_angular2_markdown__["a" /* MarkdownModule */],
            __WEBPACK_IMPORTED_MODULE_33_angular2_infinite_scroll__["InfiniteScrollModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdAutocompleteModule */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_51__tool_page_tool_page_component__["b" /* IntegrateTool */], __WEBPACK_IMPORTED_MODULE_18__community_tool_actions_community_tool_actions_component__["a" /* CommunityToolActionsComponent */], __WEBPACK_IMPORTED_MODULE_47__newcommunity_dialogbox_newcommunity_dialogbox_component__["a" /* NewcommunityDialogboxComponent */], __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__["b" /* DialogResultExampleDialog */],
            __WEBPACK_IMPORTED_MODULE_48__member_invitation_member_invitation_component__["a" /* MemberInvitationComponent */], __WEBPACK_IMPORTED_MODULE_46__add_tool_add_tool_component__["b" /* SucessDialog */],
            __WEBPACK_IMPORTED_MODULE_50__member_edit_member_edit_component__["a" /* MemberEditComponent */], __WEBPACK_IMPORTED_MODULE_17__community_role_management_community_role_management_component__["a" /* CommunityRoleManagementComponent */], __WEBPACK_IMPORTED_MODULE_4__manage_community_manage_community_component__["a" /* updateCommunity */], __WEBPACK_IMPORTED_MODULE_52__community_new_role_creation_community_new_role_creation_component__["a" /* CommunityNewRoleCreationComponent */], __WEBPACK_IMPORTED_MODULE_53__tool_config_page_tool_config_page_component__["b" /* DialogResultDialog */]],
        providers: [__WEBPACK_IMPORTED_MODULE_31__community_role_management_community_role_management_service__["a" /* RoleServices */], __WEBPACK_IMPORTED_MODULE_40__member_edit_member_edit_service__["a" /* RoleListServices */], __WEBPACK_IMPORTED_MODULE_32__community_tool_actions_community_tool_actions_service__["a" /* ToolActions */], __WEBPACK_IMPORTED_MODULE_35__community_profile_community_profile_service__["a" /* CommunityProfileService */], __WEBPACK_IMPORTED_MODULE_34__activity_page_activity_page_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_42__core_user_info_service__["a" /* UserInfoService */],
            __WEBPACK_IMPORTED_MODULE_36__manage_community_manage_community_service__["a" /* updateSpecificCommunityService */], __WEBPACK_IMPORTED_MODULE_37__tool_market_place_tool_market_place_service__["a" /* ToolMarketService */], __WEBPACK_IMPORTED_MODULE_29__community_tool_management_community_tool_management_service__["a" /* ToolService */], __WEBPACK_IMPORTED_MODULE_38__community_new_role_creation_community_new_role_creation_service__["a" /* NewRoleService */], __WEBPACK_IMPORTED_MODULE_39__community_tool_actions_community_tool_actions_pipe__["a" /* KeysPipe */], __WEBPACK_IMPORTED_MODULE_30__community_members_widget_community_members_widget_service__["a" /* MembersService */], __WEBPACK_IMPORTED_MODULE_44__community_member_management_community_member_management_service__["a" /* Memberservice */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-activitylogs/community-activitylogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-activitylogs/community-activitylogs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  community-activitylogs works!\n</p>\n"

/***/ }),

/***/ "../../../../../webapp/app/community-activitylogs/community-activitylogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityActivitylogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityActivitylogsComponent = (function () {
    function CommunityActivitylogsComponent() {
    }
    CommunityActivitylogsComponent.prototype.ngOnInit = function () {
    };
    return CommunityActivitylogsComponent;
}());
CommunityActivitylogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-activitylogs',
        template: __webpack_require__("../../../../../webapp/app/community-activitylogs/community-activitylogs.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-activitylogs/community-activitylogs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommunityActivitylogsComponent);

//# sourceMappingURL=community-activitylogs.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-dashboard/community-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting{\n\nmargin-left:55%;\nmargin-top:5%;\n\n}\n/*.mdcard{\n    margin-left: -30px;\n    padding-right: -400px;\n    }*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-dashboard/community-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<calvin-community-profile [profile]=\"this.community\">\n  <div class=\"manage-community-info\" *ngIf=\"this.communities.roles === 'Admin' || 'owner'\">\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\" class=\"setting\">\n    <md-icon>settings</md-icon>\n  </button>\n    <md-menu #menu=\"mdMenu\">\n      <button routerLink=\"/app/managecommunity/{{this.domain}}\" md-menu-item>\n      <md-icon>dialpad</md-icon>\n      <span>Manage Community</span>\n    </button>\n    </md-menu>\n  </div>\n</calvin-community-profile>\n<div fxLayout=\"row\" fxLayoutGap=\"0%\" fxFlex=\"100%\">\n  <div fxLayout=\"column\" fxFlex=\"30%\">\n    <calvin-community-tools-widget [community]=\"this.domain\"></calvin-community-tools-widget>\n  </div>\n  <div fxFlex=\"40%\">\n    <calvin-activity-page [community]=\"this.domain\"></calvin-activity-page>\n  </div>\n  <div fxFlex=\"30%\">\n    <calvin-community-members-widget [community]=\"this.domain\"></calvin-community-members-widget>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/community-dashboard/community-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_profile_community_profile_service__ = __webpack_require__("../../../../../webapp/app/community-profile/community-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_communities_my_communities_services__ = __webpack_require__("../../../../../webapp/app/my-communities/my-communities.services.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommunityDashboardComponent = (function () {
    function CommunityDashboardComponent(commProfileService, router, route, userInfo, userCommunities) {
        this.commProfileService = commProfileService;
        this.router = router;
        this.route = route;
        this.userInfo = userInfo;
        this.userCommunities = userCommunities;
        this.param = [];
        this.community = {};
        this.counter = true;
        this.domain = "";
        this.communities = [];
        this.CommunitiesInfo = [];
    }
    CommunityDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domain = this.route.snapshot.params['domain'];
        this.commProfileService.getCommunity(this.domain, this.counter).
            subscribe(function (res) {
            res.createdon = __WEBPACK_IMPORTED_MODULE_3_moment_moment__(res.createdon).subtract(1, 'days').calendar();
            _this.community = res;
        });
        this.userInfo.getUserDetail(function (userdetails) {
            _this.member = userdetails.username;
            // console.log(userdetails);
            // console.log(typeof userdetails);
            // console.log('user is : ' + this.member);
        });
        this.userCommunities.getCommunity(this.member).subscribe(function (res) {
            _this.communities = res.communities;
            console.log("checkinggggg", _this.communities);
        });
    };
    return CommunityDashboardComponent;
}());
CommunityDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-dashboard',
        template: __webpack_require__("../../../../../webapp/app/community-dashboard/community-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-dashboard/community-dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__community_profile_community_profile_service__["a" /* CommunityProfileService */], __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_5__my_communities_my_communities_services__["a" /* UserCommunities */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__community_profile_community_profile_service__["a" /* CommunityProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__community_profile_community_profile_service__["a" /* CommunityProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__my_communities_my_communities_services__["a" /* UserCommunities */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__my_communities_my_communities_services__["a" /* UserCommunities */]) === "function" && _e || Object])
], CommunityDashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=community-dashboard.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-member-management/community-member-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-align\n{\n  margin-left:0%;\n}\n.point\n{\n  cursor:pointer;\n\n}\n\nmd-list-item {\n    border-bottom: 1px dashed #ddd;\n  cursor: pointer;\n}\nmd-list-item img {\n  transition: all 0.5s ease;\n}\nmd-list-item:hover {\n  background-color: #eee;\n}\nmd-list-item:hover img {\n  width: 42px;\n  height: 42px;\n}\nmd-list-item:last-child {\n  border-bottom: 1px transparent;\n}\n\n.bottom-button{\nmargin-left: 370px;\n  /*float: right;\n  overflow: hidden;*/\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-member-management/community-member-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-card class=\"card-align\">\n        <md-card-title fxLayout=\"row\" class=\"new-community\">\n            Members\n     <!--<div class=\"searchAlgin\"> \n    <input mdInput aria-label=\"search\" fxFlex=\"100%\" placeholder=\"Search\" type=\"search\"  dividerColor=\"accent\">\n   <i class=\"material-icons \">search</i></div>  -->\n    </md-card-title>\n    \n    <div class=\"community-list\" *ngFor=\"let val of members.MemberDetails\" >\n        <!--<h1></h1>-->\n      <md-list align=\"start\" >\n        <md-list-item>\n            <img md-list-avatar class=\"img-responsive\" src=\"./assets/images/member.png\">\n            <div  fxFlex='80'>\n               \n                <div><h5><b>{{val.username}}</b></h5></div>\n                <div>{{val.role}}</div>\n            </div>\n           \n          <div><i class=\"material-icons point\"  [md-menu-trigger-for]=\"menu\">more_vert</i></div>\n   \n        </md-list-item>   \n                 \n      </md-list>\n\n   \n\n  <md-menu #menu=\"mdMenu\">\n      <button md-menu-item (click)='edit(val.username)'>Edit</button>\n      <button md-menu-item (click)='deleteMember(val.username)'>Delete</button>\n    \n  </md-menu></div>\n  <div class=\"bottom-button\">\n    <button  md-raised-button color=\"primary\"  (click)='openDialog()' >Invite</button>\n        \n</div>\n   \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../webapp/app/community-member-management/community-member-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_invitation_member_invitation_component__ = __webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_member_management_service__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_edit_member_edit_component__ = __webpack_require__("../../../../../webapp/app/member-edit/member-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityMemberManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';




var CommunityMemberManagementComponent = (function () {
    function CommunityMemberManagementComponent(membersService, dialog) {
        this.membersService = membersService;
        this.dialog = dialog;
        this.members = [];
    }
    CommunityMemberManagementComponent.prototype.ngOnInit = function () {
        this.getMember();
    };
    CommunityMemberManagementComponent.prototype.getMember = function () {
        var _this = this;
        if (this.community) {
            this.membersService.getMember(this.community).subscribe(function (data) {
                _this.members = data;
            });
        }
        ;
    };
    CommunityMemberManagementComponent.prototype.deleteMember = function (name) {
        var _this = this;
        var a = [];
        a.push({ username: name });
        console.log("hello-------array", a);
        this.membersService.deleteMember(this.community, a).subscribe(function (data) {
            _this.members = data;
            console.log("After Deleting", _this.members);
            _this.getMember();
        });
        // After deleting
    };
    CommunityMemberManagementComponent.prototype.onScroll = function () {
    };
    CommunityMemberManagementComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__member_invitation_member_invitation_component__["a" /* MemberInvitationComponent */], {
            disableClose: true,
            data: this.community
        });
    };
    CommunityMemberManagementComponent.prototype.edit = function (name) {
        console.log('community name', this.community);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__member_edit_member_edit_component__["a" /* MemberEditComponent */], {
            disableClose: true,
            data: { domain: this.community,
                val: name }
        });
    };
    return CommunityMemberManagementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityMemberManagementComponent.prototype, "community", void 0);
CommunityMemberManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-member-management',
        template: __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__community_member_management_service__["a" /* Memberservice */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__community_member_management_service__["a" /* Memberservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__community_member_management_service__["a" /* Memberservice */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _b || Object])
], CommunityMemberManagementComponent);

var _a, _b;
//# sourceMappingURL=community-member-management.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-member-management/community-member-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Memberservice; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Memberservice = (function () {
    function Memberservice(_http) {
        this._http = _http;
    }
    Memberservice.prototype.getMember = function (domain) {
        return this._http.get("/api/v1/communityMembers/communitymembership/" + domain + "/members").map(function (res) { return res.json(); });
    };
    Memberservice.prototype.deleteMember = function (domain, data) {
        var body = JSON.stringify(data);
        //console.log(".....",body);
        //console.log("sdaaa",domain)
        var url = "/api/v1/communityMembers/communitymembership/" + domain + "/members";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers,
            body: body });
        //console.log(body)
        return this._http.delete(url, options).map(function (res) { return res.json(); });
    };
    return Memberservice;
}());
Memberservice = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Memberservice);

var _a;
//# sourceMappingURL=community-member-management.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-members-widget/community-members-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content{\n    height:300px;\n    overflow-y:auto;\n}\n.content::-webkit-scrollbar {\n   display: none;\n}\nmd-icon{\n    color:grey;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-members-widget/community-members-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h2 align=\"start\">Members</h2>\n  <md-card-content fxLayoutAlign.xs=\"column\" class=\"content\">\n    <md-list>\n      <md-list-item *ngFor=\"let val of this.members.MemberDetails\" fxLayoutAlign.xs=\"column\">\n        <img md-list-avatar class=\"img-responsive center-block\" src=\"./assets/images/member.png\">\n        <h3 md-line><b>{{val.username}}</b></h3>\n        <p md-line align=\"start\">\n          <span>{{val.role}}</span>\n        </p>\n      </md-list-item>\n    </md-list>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/community-members-widget/community-members-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_members_widget_service__ = __webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityMembersWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunityMembersWidgetComponent = (function () {
    function CommunityMembersWidgetComponent(membersWidget, router) {
        this.membersWidget = membersWidget;
        this.router = router;
        this.members = [];
    }
    CommunityMembersWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.router.snapshot.params['domain']);
        this.membersWidget.getMember(this.domain).subscribe(function (data) {
            _this.members = data;
        });
        //  console.log(this.members,"sasfas");
    };
    return CommunityMembersWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('community'),
    __metadata("design:type", String)
], CommunityMembersWidgetComponent.prototype, "domain", void 0);
CommunityMembersWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-members-widget',
        template: __webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__community_members_widget_service__["a" /* MembersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__community_members_widget_service__["a" /* MembersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_members_widget_service__["a" /* MembersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CommunityMembersWidgetComponent);

var _a, _b;
//# sourceMappingURL=community-members-widget.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-members-widget/community-members-widget.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembersService = (function () {
    function MembersService(http) {
        this.http = http;
    }
    MembersService.prototype.getMember = function (domain) {
        //console.log("ssdf",domain)
        return this.http
            .get("/api/v1/communityMembers/communitymembership/" + domain + "/members")
            .map(function (response) { return response.json(); });
    };
    return MembersService;
}());
MembersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], MembersService);

var _a;
//# sourceMappingURL=community-members-widget.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" md-dialog-content *ngIf=\"sample\">\n    <form [formGroup]=\"roleValue\">\n        <div *ngFor=\"let core of sample\">\n            <md-input-container fxLayoutAlign='start stretch'>\n                <input mdInput #inputVal placeholder=\"Enter the Role Name:\" value={{roleName}} formControlName=\"roleName\" (change)=\"isRoleNameUnique(roleValue.get('roleName'))\">\n                <md-hint align=\"start\" class=\"full-width\">\n                    <div *ngIf=\"roleValue.get('roleName').hasError('required') && roleValue.get('roleName').touched\" class=\"errorStyle\">\n                        Role Name is required\n                    </div> \n                    <div *ngIf=\"roleValue.get('roleName').hasError('pattern') && roleValue.get('roleName')\" class=\"errorStyle\">\n                        Invalid RoleName,name must contain 4 to 15 character and in lowercase\n                    </div>\n                </md-hint>\n            </md-input-container>\n            <div *ngFor=\"let value of core.tools\">\n                <md-input-container (onRoleAddition)='onRoleAddition($event)' fxLayoutAlign=\"start stretch\">\n                    <input mdInput placeholder=\"\" value={{value.toolid}} disabled/>\n                </md-input-container>\n                <md-checkbox *ngFor=\"let key of value.actions\" (checked)=\"exists(value.toolid,key,inputVal.value)\" (click)=\"getCheckboxValue(value.toolid,key,inputVal.value)\"\n                    fxFlexLayout.xs=\"row\">{{key}}</md-checkbox>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div md-dialog-actions fxLayoutAlign=\"end\">\n    <button md-button md-dialog-close>Cancel</button>\n    <button md-raised-button md-dialog-close color=\"primary\" [disabled]=\"!roleValue.valid\" (click)=\"update()\">Apply</button>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_new_role_creation_service__ = __webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityNewRoleCreationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CommunityNewRoleCreationComponent = (function () {
    function CommunityNewRoleCreationComponent(tool, fb, snackBar, route, data, dialogRef) {
        this.tool = tool;
        this.fb = fb;
        this.snackBar = snackBar;
        this.route = route;
        this.data = data;
        this.dialogRef = dialogRef;
        this.selected = [];
        this.getresults = [];
        this.checkBoxValue = false;
        this.sample = [];
        this.toolArray = [];
        this.isDomainExists = false;
        this.domainName = data;
        //console.log('domin name from dialog', this.domainName);
    }
    CommunityNewRoleCreationComponent.prototype.roleValidation = function () {
        this.roleValue = this.fb.group({
            roleName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-z]{4,20}')]],
        });
    };
    CommunityNewRoleCreationComponent.prototype.isRoleNameUnique = function (role) {
        var _this = this;
        this.tool.listUniqueRoles(this.domainName).subscribe(function (res) {
            if (res.role === role) {
                console.log("result false", res.role, role);
                _this.isDomainExists = false;
            }
            else {
                console.log("result true", Object.keys(res).length);
                _this.isDomainExists = true;
            }
        });
    };
    CommunityNewRoleCreationComponent.prototype.getCheckboxValue = function (toolId, status, role) {
        var grant = "true";
        var x = {};
        x[status] = grant;
        var actions = x;
        var deleted = this.selected;
        var index = this.selected.indexOf({
            toolId: toolId,
            actions: actions,
            role: role
        });
        if (index === -1) {
            this.selected.push({
                toolId: toolId,
                actions: actions,
                role: role
            });
        }
        if (index > -1) {
            console.log(index);
            this.selected.splice(index, 1);
        }
        console.log(this.selected, "fdsgsdgsdg");
        return this.selected;
    };
    CommunityNewRoleCreationComponent.prototype.update = function () {
        var _this = this;
        this.tool.createRoles(this.domainName, this.selected).subscribe(function (res) {
            _this.snackBar.open('New Role Created Successfully', 'X', {
                duration: 2000
            });
            _this.sample.push(res);
            _this.dialogRef.close({
                res: _this.sample,
            });
            console.log("in new role service", res, _this.sample);
        });
    };
    CommunityNewRoleCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tool.listTools(this.domainName).subscribe(function (res) {
            _this.sample.push(res);
        });
        this.roleValidation();
    };
    return CommunityNewRoleCreationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityNewRoleCreationComponent.prototype, "community", void 0);
CommunityNewRoleCreationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-new-role-creation',
        template: __webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.css")]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__community_new_role_creation_service__["a" /* NewRoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_new_role_creation_service__["a" /* NewRoleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */]) === "function" && _e || Object])
], CommunityNewRoleCreationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=community-new-role-creation.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-new-role-creation/community-new-role-creation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRoleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewRoleService = (function () {
    function NewRoleService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    NewRoleService.prototype.listTools = function (domainName) {
        var _this = this;
        var url = '/api/v1/communitytools/' + domainName;
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'please try again later!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    NewRoleService.prototype.createRoles = function (domainName, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(data);
        //console.log(body);
        var url = '/api/v1/communityroleactions/communityrole/' + domainName;
        return this.http.post(url, body, options).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'please try again later!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    NewRoleService.prototype.listUniqueRoles = function (domainname) {
        var _this = this;
        var url = '/api/v1/communityroleactions/' + domainname + '?onlyroles=true';
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    return NewRoleService;
}());
NewRoleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], NewRoleService);

var _a, _b;
//# sourceMappingURL=community-new-role-creation.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-profile/community-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    .manage-community-info{\n\n        margin-left: 58%;\n        }\n\n        .community-profile{\nmargin-top:0%;\n        }        \n\n     \n       .community-image img{\n\n           width:38%;\n           height:180%;\n           margin-top: 25%;\n           margin-left:12%;\n             box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n       }\n.tags{\n\n    margin-top: 10%;\n    margin-left:80%;\n}\n.community-details-name h3{\n\n     margin-right: 100px;\n     margin-top:23%;\n     \n\n    \n}\n.community-details {\n margin-right: 28%;\n color: grey;\n}\n\n.members{\n\nmargin-left:46%;\nfont-style: italic;\n}\n\n.tools{\nfont-style: italic;\n    }\n.tagclass {\n    margin-top: 30px;\n}\n/*\n@media(max-width:760px){\n    .community-details-name \n    {\n        font-size: 20px;\n    }\n}\n@media(max-width:460px){\n   .community-details-name\n    {\n        font-size: 10px;\n    }\n}\n\n\n\n\n@media(max-width:760px){\n    #heading \n    {\n        font-size: 40px;\n    }\n}\n@media(max-width:460px){\n   #heading\n    {\n        font-size: 20px;\n    }\n}\n\n@media(max-width:760px){\n    .community-image img\n    {\n        width: 150%;\n        height:80%\n    }\n}\n@media(max-width:460px){\n   .community-image img\n    {\n        width:50%;\n        height:40%;\n    }\n}\n\n\n@media(max-width:760px){\n    .community-details\n    {\n        font-size: 10px;\n    }\n}\n@media(max-width:460px){\n   .community-details\n    {\n        font-size: 10px;\n    }\n}\n\n#heading{\n\n    font-family: 'Open Sans', sans-serif;\n}*/\n\n\n\n/*\nh1 {\n    font-size: 1rem;\n}*/\n\n/*@media (min-width: 400px) {\n    h1 {\n        font-size: 1.3rem;\n    }\n}\n\n@media (min-width: 600px) {\n    h1 {\n        font-size: 1.6rem;\n    }\n}\n\n@media (min-width: 800px) {\n    h1 {\n        font-size: 1.9rem;\n    }\n}\n\n@media (min-width: 1000px) {\n    h1 {\n        font-size: 2.2rem;\n    }\n}*/\n\n#sample{\n\n\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    background-color:#fafbfc;\n\n}\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n#community-description{\n    text-transform: capitalize;\n    font-style: italic;\n    color:grey;\n    margin-top: 0%;    \n}\nmd-icon{\n    color: grey;\n\n}\n#heading{\n    text-transform: capitalize;\n}\n#purpose{\n\n    color: grey;\n    margin-left:12%;\n}\n\n#chip{\n   margin-top: 5%;\n\n\n}\n@media(max-width:760px) {\n    .community-image img\n    {\n        width:38%;\n           height:180%;\n           margin-top: 20%;\n           margin-left:12%;\n             box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n    }\n}\n@media (max-width:1064px) and (min-width:810px) {\n   .community-image img\n    {\n           width:38%;\n           height:180%;\n           margin-top: 40%;\n           margin-left:12%;\n             box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n    }\n}\n\n@media (max-width:1024px) and (min-width:760px) {\n   .community-image img\n    {\n        width:38%;\n           height:180%;\n           margin-top: 30%;\n           margin-left:12%;\n             box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n    }\n}\n\n@media(max-width:760px) {\n   .community-details-name h3{\n margin-right: 100px;\n     margin-top:30%;\n      font-size: 20px;  \n}\n}\n@media(max-width:860px) and (min-width:920px) {\n   .community-details-name h3{\n\n     margin-right: 100px;\n     margin-top:30%;    \n     font-size: 20px;\n   }\n    \n}\n\n@media(max-width:800px) and (min-width:600px) {\n   .community-details-name h3{\n\n      margin-right: 100px;\n     margin-top:30%;     \n      font-size: 20px;\n   }\n    \n}\n\n@media(max-width:600px) and (min-width:400px) {\n   .community-details-name{\n\n     margin-right: 100px;\n     margin-top:30%;;    \n      font-size: 20px;\n   }\n    \n}\n\n@media (max-width:1024px) and (min-width:760px) {\n .community-details-name{\n\n     margin-right: 100px;\n     margin-top:30%;\n\n        \n}\n}\n\n@media (max-width:1064px) and (min-width:810px) {\n .community-details-name{\n\n     margin-right: 100px;\n     margin-top:30%;\n        \n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-profile/community-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"profile\" id=\"sample\" (onVoted)=\"onVoted($event)\">\n  <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" class=\"content\">\n    <div fxFlex=\"20%\" fxFlexAlign='start'>\n      <md-list fxLayoutAlign=\"start\">\n        <md-list-item class=\"community-image\">\n          <img md-list-avatar src={{profile.avatar}} >\n        </md-list-item>\n      </md-list>\n      <div class=\"community-details-name\">\n        <h3> {{profile.domain}}</h3>\n      </div>\n      <h5 class=\"community-details\">{{profile.createdon}}</h5>\n    </div>\n    <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" fxFlex=\"60%\">\n      <div fxFlex=\"100%\" class=\"community-profile\">\n     <md-card-title fxLayoutAlign=\"start\" id=\"heading\">   <h2 >{{profile.name}} </h2></md-card-title>\n        <h4 fxLayoutAlign=\"start\" id=\"community-description\">{{profile.description}} </h4>\n        <span fxLayoutAlign=\"start\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\">\n                 <div id=\"chip\" *ngFor=\"let tag of profile.tags\">\n               <md-chip  class=\"z-depth-2\" >{{tag}}</md-chip>\n                 </div>\n               </span>\n      </div>\n    </div>\n\n  \n  <div class=\"item item-4\" fxFlex=\"20%\" fxFlexOrder=\"4\" >\n           \n               <ng-content></ng-content>\n                <!--<button md-icon-button [mdMenuTriggerFor]=\"menu\" >\n                 <md-icon class=\"setting\" >settings</md-icon>\n                </button><ng-content></ng-content>-->\n              <!--<md-menu #menu=\"mdMenu\">\n               <button routerLink=\"/app/managecommunity/{{profile.domain}}\" md-menu-item >\n                 <md-icon>dialpad</md-icon>\n                 <span> Manage Community</span>\n              </button>\n            <button routerLink=\"/app/communityDashBoard\" md-menu-item >\n              <md-icon>voicemail</md-icon>\n             <span>Community</span>\n            </button> \n           </md-menu>-->\n         \n\n\n      <md-list class=\"members\">\n        <md-list-item>\n          <md-icon>person</md-icon>\n          <h6>  members: {{profile.members}}</h6>\n\n        </md-list-item>\n        <md-list-item class=\"tools\">\n          <md-icon>build</md-icon>\n          <h6> tools: {{profile.tools}}</h6>\n        </md-list-item>\n\n        <span> \n           <md-list-item id=\"purpose\" >\n             {{profile.purpose}} </md-list-item>\n    </span>\n      </md-list>\n    </div>\n  </div>\n</div>\n<!--<calvin-manage-community [communitydata]=\"this.contents\"></calvin-manage-community>-->\n\n<!--</div>  -->"

/***/ }),

/***/ "../../../../../webapp/app/community-profile/community-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_profile_community_profile_service__ = __webpack_require__("../../../../../webapp/app/community-profile/community-profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunityProfileComponent = (function () {
    function CommunityProfileComponent(commGetCommunity) {
        this.commGetCommunity = commGetCommunity;
        this.onVoted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.communities = [];
        this.voted = false;
        this.counter = true;
    }
    CommunityProfileComponent.prototype.vote = function (agreed) {
        this.onVoted.emit(agreed);
        this.voted = true;
    };
    CommunityProfileComponent.prototype.ngOnInit = function () {
    };
    return CommunityProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityProfileComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CommunityProfileComponent.prototype, "onVoted", void 0);
CommunityProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-profile',
        template: __webpack_require__("../../../../../webapp/app/community-profile/community-profile.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-profile/community-profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__community_profile_community_profile_service__["a" /* CommunityProfileService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__community_profile_community_profile_service__["a" /* CommunityProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_profile_community_profile_service__["a" /* CommunityProfileService */]) === "function" && _a || Object])
], CommunityProfileComponent);

var _a;
//# sourceMappingURL=community-profile.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-profile/community-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunityProfileService = (function () {
    function CommunityProfileService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.counter = true;
    }
    CommunityProfileService.prototype.getCommunity = function (domain, counter) {
        var _this = this;
        var url = "/api/v1/communities/communities/" + domain + "?counter=" + counter;
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('Unable to Get Data.. Please try again later..!!!', 'Close', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        })
            .map(function (response) { return response.json(); });
    };
    return CommunityProfileService;
}());
CommunityProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], CommunityProfileService);

var _a, _b;
//# sourceMappingURL=community-profile.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-role-actions/community-role-actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-align\n  {\n  margin-left:0%;\n  }\n\n/*.card{\n    margin-left: 0%;\n    padding-left: 0%;\n}*/\n.chip-style{\n    padding-right: 1%;\n    padding-bottom: 2%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-role-actions/community-role-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"roleActionColln\">\n  <div *ngFor=\"let sample of roleActionColln.roleactions\">\n    <md-card class=\"card-align\">\n      <div fxLayoutAlign='start stretch'>\n        <md-card-title fxFlex='90'>\n          <input mdInput [(ngModel)]='sample.role' disabled/>\n        </md-card-title>\n      </div>\n      <md-chip-list>\n        <div fxFlexLayout.xs='row' *ngFor=\"let action of sample.action\" class=\"chip-style\">\n          <md-chip>{{action}}</md-chip>\n        </div>\n      </md-chip-list>\n      <button fxLayoutAlign='left' md-raised-button (click)='openModifyRoleActionsDialog(sample.role, roleActionColln)'>Modify Actions</button>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/community-role-actions/community-role-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_tool_actions_community_tool_actions_component__ = __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_component__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__community_role_management_community_role_management_service__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityRoleActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunityRoleActionsComponent = (function () {
    function CommunityRoleActionsComponent(dialog, role, action) {
        this.dialog = dialog;
        this.role = role;
        this.action = action;
        this.onRoleModified = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CommunityRoleActionsComponent.prototype.onRolModifiedInDialog = function (modifiedRole) {
        this.onRoleModified.emit(modifiedRole);
    };
    CommunityRoleActionsComponent.prototype.openModifyRoleActionsDialog = function (roleName, roleActionColln) {
        var _this = this;
        console.log('Modified data', this.roleActionColln.toolactions);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__community_tool_actions_community_tool_actions_component__["a" /* CommunityToolActionsComponent */], {
            disableClose: true,
            data: {
                domain: this.roleActionColln.domain,
                role: roleName,
                tool: this.roleActionColln.toolactions
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            console.log(result, "result", "modify");
            _this.onRolModifiedInDialog(result);
        });
        console.log(this.onRolModifiedInDialog, "result");
    };
    CommunityRoleActionsComponent.prototype.ngOnInit = function () { };
    return CommunityRoleActionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityRoleActionsComponent.prototype, "roleActionColln", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CommunityRoleActionsComponent.prototype, "onRoleModified", void 0);
CommunityRoleActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-role-actions',
        template: __webpack_require__("../../../../../webapp/app/community-role-actions/community-role-actions.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-role-actions/community-role-actions.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__community_role_management_community_role_management_service__["a" /* RoleServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__community_role_management_community_role_management_service__["a" /* RoleServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_component__["a" /* CommunityRoleManagementComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_component__["a" /* CommunityRoleManagementComponent */]) === "function" && _c || Object])
], CommunityRoleActionsComponent);

var _a, _b, _c;
//# sourceMappingURL=community-role-actions.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-role-management/community-role-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-style{\n    overflow: hidden;\n}\n.button-position\n{   padding-right:20%;\n    padding-bottom:10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-role-management/community-role-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-style\">\n  <div fxLayout='column'>\n    <div *ngIf='resultArray'>\n      <div *ngFor='let value of resultArray'>\n        <calvin-community-role-actions [roleActionColln]='value' (onRoleModified)='onRoleModified($event)'>\n        </calvin-community-role-actions>\n      </div>\n    </div>\n    <div fxLayoutAlign=\"end\" class=\"button-position\">\n      <button fxFlexAlign=\"end\" md-mini-fab class='button-style' (click)='openNewRoleDialog()'><md-icon>add</md-icon></button></div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/community-role-management/community-role-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_new_role_creation_community_new_role_creation_component__ = __webpack_require__("../../../../../webapp/app/community-new-role-creation/community-new-role-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_role_management_service__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityRoleManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunityRoleManagementComponent = (function () {
    function CommunityRoleManagementComponent(dialog, role, route) {
        this.dialog = dialog;
        this.role = role;
        this.route = route;
        this.roleArray = [];
        this.toolArray = [];
        this.arrayObj = [];
        this.resultArray = [];
        this.roleObj = {};
        this.toolObj = {};
    }
    CommunityRoleManagementComponent.prototype.roleManagement = function () {
        var _this = this;
        //Keep it empty, before fetching and populating
        this.roleArray = [];
        this.resultArray = [];
        this.roleObj = {};
        this.toolObj = {};
        this.role.listRoles(this.community).subscribe(function (res) {
            _this.roleArray.push(res);
            _this.roleArray.forEach(function (val) {
                (val.roleactions).forEach(function (data) {
                    var role = data.role;
                    var toolid = data.toolid;
                    if (!_this.roleObj[role]) {
                        _this.roleObj[role] = [];
                    }
                    if (!_this.toolObj[toolid]) {
                        _this.toolObj[toolid] = [];
                    }
                    _this.roleObj[role].push(data.action);
                    _this.toolObj[toolid].push(data.action);
                });
            });
            _this.toolArray.forEach(function (data) {
                var roles = data.role;
                data.action = _this.roleObj[roles];
            });
            var domain = _this.route.snapshot.params['domain'];
            var roleactions = _this.toolArray;
            var toolactions = _this.toolObj;
            _this.resultArray.push({
                domain: domain,
                roleactions: roleactions,
                toolactions: toolactions
            });
        });
    };
    CommunityRoleManagementComponent.prototype.openNewRoleDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__community_new_role_creation_community_new_role_creation_component__["a" /* CommunityNewRoleCreationComponent */], {
            disableClose: true,
            data: this.community,
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            _this.initiliseRoleActions();
            //console.log(this.roleArray)
        });
    };
    CommunityRoleManagementComponent.prototype.onRoleModified = function (modifiedRole) {
        this.initiliseRoleActions();
    };
    CommunityRoleManagementComponent.prototype.ngOnInit = function () {
        this.initiliseRoleActions();
    };
    CommunityRoleManagementComponent.prototype.initiliseRoleActions = function () {
        var _this = this;
        this.role
            .listUniqueRoles(this.community)
            .subscribe(function (res) {
            _this.toolArray = res;
            _this.roleManagement();
        });
    };
    return CommunityRoleManagementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityRoleManagementComponent.prototype, "community", void 0);
CommunityRoleManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-role-managements',
        template: __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__community_role_management_service__["a" /* RoleServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__community_role_management_service__["a" /* RoleServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CommunityRoleManagementComponent);

var _a, _b, _c;
//# sourceMappingURL=community-role-management.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-role-management/community-role-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleServices = (function () {
    function RoleServices(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    RoleServices.prototype.listRoles = function (domainName) {
        var _this = this;
        var url = '/api/v1/communityroleactions/communityrole/' + domainName;
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    RoleServices.prototype.listUniqueRoles = function (domainname) {
        var _this = this;
        var url = '/api/v1/communityroleactions/' + domainname + '?onlyroles=true';
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    return RoleServices;
}());
RoleServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], RoleServices);

var _a, _b;
//# sourceMappingURL=community-role-management.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-actions/community-tool-actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chip-style{\n    padding-right: 1%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-tool-actions/community-tool-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"style\" fxLayout=\"column\" md-dialog-content *ngIf=\"sample\">\n    <div *ngFor=\"let core of sample\">\n        <md-input-container fxLayoutAlign=\"start stretch\">\n            <input mdInput placeholder=\"Role Name:\" value={{roleName}} disabled/>\n        </md-input-container>\n        <!--<div>These are the actions already assigned</div>\n        <div *ngFor=\"let key of (toolActions | keys)\">\n            <md-input-container fxLayoutAlign=\"start stretch\">\n                <input mdInput placeholder=\"\" value=ToolName-{{key.key}} disabled/>\n            </md-input-container>\n        <md-chip-list>\n        <div class=\"chip-style\" fxFlexLayout.xs='row' *ngFor=\"let value of key.value\">\n          <md-chip>{{value}}</md-chip>\n        </div>\n      </md-chip-list>\n            \n        </div>--> \n        <div *ngFor=\"let value of core.tools\">\n            <md-input-container fxLayoutAlign=\"start stretch\">\n                <input mdInput placeholder=\"\" value={{value.toolid}} disabled/>\n            </md-input-container>\n            <md-checkbox *ngFor=\"let key of value.actions\" (checked)=\"exists(value.toolid,key)\" (click)=\"getCheckboxValue(value.toolid,key)\"\n                fxFlexLayout.xs=\"row\">{{key}}</md-checkbox>\n        </div>\n    </div>\n</div>\n\n<div md-dialog-actions fxLayoutAlign=\"end\">\n    <button md-button md-dialog-close>Cancel</button>\n    <button md-raised-button md-dialog-close color=\"primary\" (click)=\"update()\">Apply</button>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/community-tool-actions/community-tool-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_tool_actions_service__ = __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_service__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityToolActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';

var CommunityToolActionsComponent = (function () {
    function CommunityToolActionsComponent(tool, role, snackBar, data, dialogRef) {
        this.tool = tool;
        this.role = role;
        this.snackBar = snackBar;
        this.data = data;
        this.dialogRef = dialogRef;
        this.selected = [];
        this.getresults = [];
        this.checkBoxValue = false;
        this.sample = [];
        this.toolArray = [];
        this.toolActions = [];
        this.y = {};
        this.domainName = data.domain;
        this.roleName = data.role;
        this.toolActions = data.tool;
    }
    CommunityToolActionsComponent.prototype.getCheckboxValue = function (toolId, status) {
        var grant = "true";
        var x = {};
        x[status] = grant;
        var actions = x;
        var deleted = this.selected;
        var index = this.selected.indexOf({
            toolId: toolId,
            actions: actions
        });
        if (index === -1) {
            this.selected.push({
                toolId: toolId,
                actions: actions
            });
        }
        if (index > -1) {
            this.selected.splice(index, 1);
        }
        return this.selected;
    };
    CommunityToolActionsComponent.prototype.exists = function (toolId, status) {
        console.log(this.selected);
        return this.selected.indexOf({
            toolId: toolId,
            status: status
        }) > -1;
    };
    CommunityToolActionsComponent.prototype.update = function () {
        var _this = this;
        this.tool.updateTools(this.domainName, this.roleName, this.selected)
            .subscribe(function (res) {
            _this.snackBar.open('Updated Actions Successfully', 'X', {
                duration: 2000
            });
            _this.sample = [];
            _this.toolArray.push(res);
            _this.sample = _this.toolArray;
            _this.dialogRef.close({
                roleName: _this.roleName,
                selected: _this.selected,
                res: res
            });
        });
        this.sample = [];
    };
    CommunityToolActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tool.listTools(this.domainName).subscribe(function (res) {
            _this.sample.push(res);
        });
    };
    return CommunityToolActionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommunityToolActionsComponent.prototype, "community", void 0);
CommunityToolActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-tool-actions',
        template: __webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-tool-actions/community-tool-actions.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_service__["a" /* RoleServices */]]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__community_tool_actions_service__["a" /* ToolActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_tool_actions_service__["a" /* ToolActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_service__["a" /* RoleServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__community_role_management_community_role_management_service__["a" /* RoleServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdSnackBar */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */]) === "function" && _d || Object])
], CommunityToolActionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=community-tool-actions.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-actions/community-tool-actions.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=community-tool-actions.pipe.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-actions/community-tool-actions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolActions = (function () {
    function ToolActions(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    ToolActions.prototype.listTools = function (domainName) {
        var _this = this;
        var url = '/api/v1/communitytools/' + domainName;
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('server error..!!!', 'please try again later!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    ToolActions.prototype.updateTools = function (domain, role, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(data);
        var url = '/api/v1/communityroleactions/communityrole/' + domain + '/roles/' + role;
        return this.http.patch(url, body, options)
            .catch(function (err) {
            _this.snackBar.open('Please try again later..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        })
            .map(function (res) { return res.json(); });
    };
    return ToolActions;
}());
ToolActions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], ToolActions);

var _a, _b;
//# sourceMappingURL=community-tool-actions.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-management/community-tool-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.card-align\n{\n    margin-left:0%;\n    padding-left:0%;\n}\n.fix{\n    margin-left: 40px;\n}\n/*md-icon{\nmargin-left:400px;\nmd-icon{\nmargin-left:300px;\ncursor: pointer;\n}*/\n\n.card-align\n{\n   margin-left:0%;\n   padding-left:0%;\n}\n.fix{\n   margin-left: 40px;\n}\nmd-icon{\nmargin-left:300px;\ncursor: pointer;\n}\nmd-card-title{\n   margin-left: 40px;\n}\n.icon{\n   margin-bottom: 10px;\n   cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-tool-management/community-tool-management.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div>\n  <md-card class=\"card-align\">\n    <div class=\"community-list\" *ngFor=\"let val of tools.tools\">\n      <h1></h1>\n      <md-list align=\"start\">\n        <md-list-item>-->\n<!--<img md-list-avatar src=\"./assets/img/tool.png\">-->\n<!--<md-icon>build</md-icon>\n          <div fxFlex='80'>\n            <div>\n              <h5><b>{{val.toolid}}</b></h5>\n              {{val.avatar}}\n              {{val.purpose}}\n              {{val.toolname}}\n            </div>\n          </div>\n          <div><md-icon (click)=\"config(val.toolid)\">settings</md-icon></div>  -->\n<!--(click)=\"openBox()\"routerLink=\"/app/toolconfig/`${val.toolid}`\"-->\n<!--</md-list-item>\n      </md-list>\n    </div>\n  </md-card>\n  <div fxLayoutAlign=\"end\"><button md-raised-button color=\"primary\" class=\"bottom-button\" routerLink=\"/app/toolmarket\">Add</button></div>\n</div>\n<div>-->\n\n<!-- \n<div>\n  <md-card class=\"card-align\" fxFlex=\"100%\">\n    <div class=\"community-list\"  *ngFor=\"let val of tools.tools\" fxFlex=\"80%\"> -->\n<!--<div>\n  <md-card class=\"card-align\" fxFlex=\"100\">\n    <div class=\"community-list\" *ngFor=\"let val of tools.tools\">\n>>>>>>> 86e42527fe70b319e14ab19e9522a485bcba394d\n      <div class=\"fix\">\n        <md-card-header align=\"start\">\n          <img md-card-avatar fxFlex=\"5%\" src=\"{{val.avatar}}\">\n          <div fxFlex=\"70%\">\n          <md-card-title ><b>{{val.toolname}}</b></md-card-title>\n          <md-card-title>{{val.toolid}}</md-card-title>         \n          <md-card-title>{{val.purpose}}</md-card-title>\n          </div>\n          <md-icon fxFlex=\"5%\" fxLayoutAlign=\"start start\"  (click)=\"config(val.toolid)\">settings</md-icon>\n        </md-card-header>\n      </div>\n    </div>\n  </md-card>\n  <div fxLayoutAlign=\"end\">\n    <button md-raised-button color=\"primary\" class=\"bottom-button\" routerLink=\"/app/toolmarket\">View Tools</button>\n    <button md-raised-button color=\"primary\" class=\"bottom-button\" routerLink=\"/app/toolmarket\">viewTools</button>\n>>>>>>> 86e42527fe70b319e14ab19e9522a485bcba394d\n  </div>\n</div>-->\n\n<div>\n <md-card class=\"card-align\" fxFlex=\"100%\">\n   <div class=\"community-list\"  *ngFor=\"let val of tools.tools\" fxFlex=\"80%\">\n     <div class=\"fix\">\n       <md-card-header align=\"start\">\n         <img md-card-avatar fxFlex=\"5%\" src=\"{{val.avatar}}\">\n         <div fxFlex=\"70%\">\n         <md-card-title ><b>{{val.toolname}}</b></md-card-title>\n         <md-card-title>{{val.toolid}}</md-card-title>        \n         <md-card-title>{{val.purpose}}</md-card-title>\n         </div>\n         <md-icon fxFlex=\"5%\" fxLayoutAlign=\"start start\"  (click)=\"config(val.toolid)\">settings</md-icon>\n       </md-card-header>\n     </div>\n   </div>\n </md-card>\n <div fxLayoutAlign=\"end\">\n   <button md-raised-button color=\"primary\" class=\"bottom-button\" routerLink=\"/app/toolmarket\">View Tools</button>\n </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/community-tool-management/community-tool-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_tool_management_service__ = __webpack_require__("../../../../../webapp/app/community-tool-management/community-tool-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityToolManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommunityDialogue; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommunityToolManagementComponent = (function () {
    function CommunityToolManagementComponent(dialog, toolservice, route) {
        this.dialog = dialog;
        this.toolservice = toolservice;
        this.route = route;
        this.tools = [];
    }
    CommunityToolManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.toolservice.getTools(this.domain).subscribe(function (data) {
            _this.loading = false;
            _this.tools = data;
            console.log(_this.tools, _this.domain);
        });
    };
    CommunityToolManagementComponent.prototype.config = function (toolid) {
        console.log("hello", toolid);
        this.route.navigate(["/app/toolconfig/" + this.domain + "/" + toolid]);
    };
    return CommunityToolManagementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('community'),
    __metadata("design:type", String)
], CommunityToolManagementComponent.prototype, "domain", void 0);
CommunityToolManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-tool-management',
        template: __webpack_require__("../../../../../webapp/app/community-tool-management/community-tool-management.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-tool-management/community-tool-management.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__community_tool_management_service__["a" /* ToolService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__community_tool_management_service__["a" /* ToolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_tool_management_service__["a" /* ToolService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CommunityToolManagementComponent);

//  openBox(){
//    this.dialog.open(CommunityDialogue);
//  }
var CommunityDialogue = (function () {
    function CommunityDialogue() {
    }
    return CommunityDialogue;
}());
CommunityDialogue = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialogebox',
        template: __webpack_require__("../../../../../webapp/app/community-tool-management/dialoge.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__community_tool_management_service__["a" /* ToolService */]]
    })
], CommunityDialogue);

var _a, _b, _c;
// <div fxLayoutAlign="column"> 
// <div  fxLayoutAlign="start">
//       Toiol info goes
// </div>
// <div fxLayoutAlign="end">
//    Tool Setting button
// </div>
// </div> 
//# sourceMappingURL=community-tool-management.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-management/community-tool-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolService = (function () {
    function ToolService(http) {
        this.http = http;
    }
    ToolService.prototype.getTools = function (domainName) {
        return this.http
            .get('/api/v1/communitytools/' + domainName)
            .map(function (response) { return response.json(); });
    };
    return ToolService;
}());
ToolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ToolService);

var _a;
//# sourceMappingURL=community-tool-management.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tool-management/dialoge.html":
/***/ (function(module, exports) {

module.exports = "<h2> TOOL SETTINGS </h2>"

/***/ }),

/***/ "../../../../../webapp/app/community-tools-widget/community-tools-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content{\n    height:300px;\n    overflow-y: auto;\n}\n.content::-webkit-scrollbar {\n   display: none;\n}\nmd-icon{\n    color:grey;\n}\nmd-card-title{\n    margin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/community-tools-widget/community-tools-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-card class=\"card-align\" fxFlex=\"100\">\n    <h2 align=\"start\">Tools</h2>\n    <div class=\"community-list\" *ngFor=\"let val of tools.tools\">\n      <div>\n        <md-card-header align=\"start\">\n          <md-card-title><a target=\"_blank\" href={{val.toolurl}}>\n            <img md-card-avatar src=\"{{val.avatar}}\" alt=\"Tool Image\"></a></md-card-title>      \n          <!--<img md-card-avatar src=\"./assets/img/tool.jpg\" >-->\n          <md-card-title><b>{{val.toolname}}</b></md-card-title>\n          <md-card-title>{{val.toolid}}</md-card-title>\n          <md-card-title>{{val.purpose}}</md-card-title>\n        </md-card-header>\n      </div>\n    </div>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/community-tools-widget/community-tools-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_tools_widget_service__ = __webpack_require__("../../../../../webapp/app/community-tools-widget/community-tools-widget.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityToolsWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
var CommunityToolsWidgetComponent = (function () {
    function CommunityToolsWidgetComponent(toolsWidget) {
        this.toolsWidget = toolsWidget;
        this.tools = [];
        this.events = [];
    }
    CommunityToolsWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolsWidget.getTools(this.domain).subscribe(function (res) {
            _this.tools = res;
            console.log("toollllsssss", _this.tools);
        });
        // //console.log(this.tools.toolid);
        // this.toolsWidget.getToolUrl(this.domain,this.toolid).subscribe(res => {
        //   this.events = res;
        //   console.log("toollllsssss",this.events)
        // });
    };
    return CommunityToolsWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('community'),
    __metadata("design:type", String)
], CommunityToolsWidgetComponent.prototype, "domain", void 0);
CommunityToolsWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-community-tools-widget',
        template: __webpack_require__("../../../../../webapp/app/community-tools-widget/community-tools-widget.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/community-tools-widget/community-tools-widget.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__community_tools_widget_service__["a" /* ToolsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__community_tools_widget_service__["a" /* ToolsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_tools_widget_service__["a" /* ToolsService */]) === "function" && _a || Object])
], CommunityToolsWidgetComponent);

var _a;
//# sourceMappingURL=community-tools-widget.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/community-tools-widget/community-tools-widget.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsService = (function () {
    function ToolsService(http) {
        this.http = http;
    }
    ToolsService.prototype.getTools = function (domainName) {
        return this.http
            .get('/api/v1/communitytools/' + domainName)
            .map(function (response) { return response.json(); });
    };
    return ToolsService;
}());
ToolsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ToolsService);

var _a;
//# sourceMappingURL=community-tools-widget.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/core/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../webapp/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_community_create_community_component__ = __webpack_require__("../../../../../webapp/app/create-community/create-community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../webapp/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../webapp/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__can_deactivate_guard_service__ = __webpack_require__("../../../../../webapp/app/core/can-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_community_manage_community_component__ = __webpack_require__("../../../../../webapp/app/manage-community/manage-community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__ = __webpack_require__("../../../../../webapp/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_bar_app_bar_component__ = __webpack_require__("../../../../../webapp/app/app-bar/app-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__community_role_management_community_role_management_component__ = __webpack_require__("../../../../../webapp/app/community-role-management/community-role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__("../../../../../webapp/app/core/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../webapp/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__community_dashboard_community_dashboard_component__ = __webpack_require__("../../../../../webapp/app/community-dashboard/community-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__activity_page_activity_page_component__ = __webpack_require__("../../../../../webapp/app/activity-page/activity-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_community_tools_manage_community_tools_component__ = __webpack_require__("../../../../../webapp/app/manage-community-tools/manage-community-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_tool_add_tool_component__ = __webpack_require__("../../../../../webapp/app/add-tool/add-tool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_communities_my_communities_services__ = __webpack_require__("../../../../../webapp/app/my-communities/my-communities.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tool_market_place_tool_market_place_component__ = __webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tool_page_tool_page_component__ = __webpack_require__("../../../../../webapp/app/tool-page/tool-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__community_member_management_community_member_management_component__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__member_invitation_member_invitation_component__ = __webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tool_config_page_tool_config_page_component__ = __webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__accept_page_accept_page_component__ = __webpack_require__("../../../../../webapp/app/accept-page/accept-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__invalid_user_invalid_user_component__ = __webpack_require__("../../../../../webapp/app/invalid-user/invalid-user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// Calvin routes
var routes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_9__app_bar_app_bar_component__["a" /* AppBarComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] },
            { path: '', redirectTo: '/app/home', pathMatch: 'full' },
            { path: 'createCommunity', component: __WEBPACK_IMPORTED_MODULE_3__create_community_create_community_component__["a" /* CreateCommunityComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
            { path: 'userCommunity/:domain', component: __WEBPACK_IMPORTED_MODULE_13__community_dashboard_community_dashboard_component__["a" /* CommunityDashboardComponent */] },
            { path: 'actions', component: __WEBPACK_IMPORTED_MODULE_10__community_role_management_community_role_management_component__["a" /* CommunityRoleManagementComponent */] },
            { path: 'communityDashBoard/:domain', component: __WEBPACK_IMPORTED_MODULE_13__community_dashboard_community_dashboard_component__["a" /* CommunityDashboardComponent */] },
            { path: 'managecommunity/:domain', component: __WEBPACK_IMPORTED_MODULE_7__manage_community_manage_community_component__["b" /* ManageCommunityComponent */] },
            { path: 'notification', component: __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__["a" /* NotificationsComponent */] },
            { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_14__activity_page_activity_page_component__["a" /* ActivityPageComponent */] },
            { path: 'members', component: __WEBPACK_IMPORTED_MODULE_21__member_invitation_member_invitation_component__["a" /* MemberInvitationComponent */] },
            { path: 'members:domain', component: __WEBPACK_IMPORTED_MODULE_20__community_member_management_community_member_management_component__["a" /* CommunityMemberManagementComponent */] },
            { path: 'managetools', component: __WEBPACK_IMPORTED_MODULE_15__manage_community_tools_manage_community_tools_component__["a" /* ManageCommunityToolsComponent */] },
            { path: 'addtool', component: __WEBPACK_IMPORTED_MODULE_16__add_tool_add_tool_component__["a" /* AddToolComponent */] },
            { path: 'toolmarket', component: __WEBPACK_IMPORTED_MODULE_18__tool_market_place_tool_market_place_component__["a" /* ToolMarketPlaceComponent */] },
            { path: 'toolpage/:toolid', component: __WEBPACK_IMPORTED_MODULE_19__tool_page_tool_page_component__["a" /* ToolPageComponent */] },
            { path: 'toolconfig/:domain/:toolid', component: __WEBPACK_IMPORTED_MODULE_22__tool_config_page_tool_config_page_component__["a" /* ToolConfigPageComponent */] },
            { path: 'communityinvite/invalid', component: __WEBPACK_IMPORTED_MODULE_24__invalid_user_invalid_user_component__["a" /* InvalidUserComponent */] },
            { path: 'communityinvite/invitation/:domain/:role', component: __WEBPACK_IMPORTED_MODULE_23__accept_page_accept_page_component__["a" /* AcceptPageComponent */] }
        ]
    },
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/app/home', pathMatch: 'full' }
], { useHash: true });
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [routes],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__can_deactivate_guard_service__["a" /* CanDeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__my_communities_my_communities_services__["a" /* UserCommunities */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../webapp/app/core/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../webapp/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (__WEBPACK_IMPORTED_MODULE_3_ng2_cookies_ng2_cookies__["Cookie"].get('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        window.location.replace('/api/v1/login/auth/google');
    };
    AuthService.prototype.logout = function () {
        window.location.replace('/api/v1/logout');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/core/can-deactivate-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CanDeactivateGuard);

//# sourceMappingURL=can-deactivate-guard.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/core/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoService = (function () {
    function UserInfoService(http) {
        this.http = http;
    }
    UserInfoService.prototype.getUserDetail = function (done) {
        var token = __WEBPACK_IMPORTED_MODULE_0_ng2_cookies_ng2_cookies__["Cookie"].get('currentUser');
        var base64Url = token.split('.')[1];
        return done(this.decodeJWTtoken(base64Url));
    };
    UserInfoService.prototype.getUserCommunityFromServer = function (member) {
        console.log('calling server for user communities ');
        var url = "/api/v1/communities/membership/" + member;
        return this.http.get(url).catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (response) { return response.json(); });
    };
    UserInfoService.prototype.getUserCommunity = function (done) {
        var _this = this;
        this.getUserDetail(function (userDetails) {
            _this.getUserCommunityFromServer(userDetails.username).subscribe(function (data) {
                // console.log('user communities are ', data);
                done(data.communities);
                return;
            });
        });
    };
    /*getUserCommunity(done) {
        const token = Cookie.get('userCommunity');
        // console.log(token);
        const base64Url = token.split('.')[1];
        const comm = this.decodeJWTtoken(base64Url);
        return done(comm.communities);
    }*/
    UserInfoService.prototype.decodeJWTtoken = function (payloadUrl) {
        var base64 = payloadUrl.replace('-', '+').replace('_', '/');
        var decoded = JSON.parse(window.atob(base64));
        // console.log(decoded);
        return decoded;
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserInfoService);

var _a;
//# sourceMappingURL=user-info.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/create-community/create-community.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-icons {\n    font-size: 18px;\n}\n\n.inputFields {\n    padding-top: 20px;\n}\n\n.communityNameFont {\n    text-transform: capitalize;\n}\n\n.visibilityDesc {\n    color: gray ;\n    font-style: inherit;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/create-community/create-community.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxFlex=\"100\" fxLayoutWrap>\n  <div fxLayout=\"column\" fxFlex=\"10\"></div>\n  <form class=\"container\" fxFlex=\"80\" fxLayout=\"column\" \n  fxFlexFill [formGroup]=\"userForm\" (ngSubmit)=\"onsubmit(userForm)\">\n  <h3 class=\"md-headline\">Create a community</h3>\n<!--domain name text field-->\n    <div class=\"inputFields\" fxLayout.md=\"column\">\n      <md-input-container>\n        \n        <input mdInput placeholder=\"Domain name\" formControlName=\"domainName\" (change)=\"isDomainUnique(userForm.get('domainName'))\">\n        <md-hint align=\"start\" class=\"full-width\">        \n          <div *ngIf=\"userForm.get('domainName').hasError('required') && userForm.get('domainName').touched\" class=\"errorStyle\">\n            Domain Name is required\n          </div>\n          <div *ngIf=\"userForm.get('domainName').hasError('pattern') && userForm.get('domainName')\" class=\"errorStyle\">\n            Invalid DomainName,must contain 8 to 20 char with one special character(.)\n          </div>\n        </md-hint>\n      </md-input-container>\n      <div *ngIf=\"flag===1\" fxLayoutAlign=\"center center\">\n        <div *ngIf=\"isDomainExists === false\" ><i class=\"material-icons\" style=\"color: green\">check_circle</i>Domainname available</div>\n        <div *ngIf=\"isDomainExists === true\" ><i class=\"material-icons\" style=\"color: red\">close</i>Domainname already exists. Try another.</div>\n        <!--<small >Domain {{ isDomainExists ? \" exists already \" : \" available \" }}</small>-->\n      </div>\n    </div>\n  <!--community text field-->\n  <div class=\"inputFields\" fxLayout.md=\"column\">\n    <md-input-container>\n      <input mdInput placeholder=\"Community name\" class=\"communityNameFont\" formControlName=\"name\">\n      <md-hint align=\"start\" class=\"full-width\">\n        <div *ngIf=\"userForm.get('name').hasError('required') && userForm.get('name').touched\">\n          Community Name is required\n        </div>\n      </md-hint>\n    </md-input-container>\n  </div>\n  <!--Avatar-->\n  <div class=\"inputFields\" fxLayout.md=\"column\">\n    <md-input-container>\n      <input mdInput placeholder=\"Avatar\" formControlName=\"avatar\">\n      <md-hint align=\"start\" class=\"full-width\">\n        <div *ngIf=\"userForm.get('avatar').hasError('pattern') && userForm.get('avatar').touched\" class=\"errorStyle\">\n            Invalid avatar path,must be url\n          </div>\n        </md-hint>\n    </md-input-container>\n  </div>\n  <!--choose visibitity mode-->\n  <div class=\"inputFields\" fxLayout.md=\"column\" fxLayoutGap=\"100px\">\n    <md-input-container>\n      <input mdInput placeholder=\"Visibility\" disabled >\n      <md-radio-group name=\"visibility\" formControlName=\"visibility\" > \n        <!--[(ngModel)]=\"visibility\">-->\n        <md-radio-button value=\"Public\" >Public <div fxFlex=\"70%\" class=\"visibilityDesc\">Visible to anyone anywhere </div></md-radio-button>\n        <md-radio-button value=\"Private\" >Private <div fxFlex=\"70%\" class=\"visibilityDesc\">Visible only to you</div> </md-radio-button>\n        <md-radio-button value=\"Moderated\" >Moderated <div fxFlex=\"70%\" class=\"visibilityDesc\">Only invited members can join and see community content </div></md-radio-button>\n      </md-radio-group>\n    </md-input-container>\n  </div>\n  <!--<div fxLayout.md=\"column\" ng-disabled=\"!visibility.value === 'Public' || 'Private' || 'Moderated''\">\n  <div  *ngIf=\"visibility === 'Public'\">Visible to anyone anywhere</div>\n  <div   *ngIf=\"visibility === 'Private'\">Visible only you</div>\n  <div   *ngIf=\"visibility === 'Moderated'\">Only invited members can join and see community content</div>\n  </div>-->\n  <!--get description from user using text-area -->\n  <md-input-container class=\"inputFields\" >\n    <textarea mdInput class=\"communityNameFont\" placeholder=\"Description\" rows=\"2\" formControlName=\"description\"></textarea>\n  </md-input-container>\n  <!--select core-activity-->\n  <div class=\"inputFields\"  fxLayout.md=\"row\" fxLayoutAlign=\"start end\"   fxLayoutGap=\"20%\">\n    <div fxLayout.md=\"column\">\n      <div>\n        <md-select placeholder=\"Select purpose\" formControlName=\"purpose\">\n          <md-option *ngFor=\"let core of uniquePurposeArry\" (click)=\"selectTemplate(core)\" [value]=\"core\">\n          {{core}}\n          </md-option>\n        </md-select>\n        <md-hint align=\"start\" >\n          <div *ngIf=\"userForm.get('purpose').hasError('required') && userForm.get('purpose').touched\" class=\"errorStyle\">\n            Select purpose\n          </div>\n        </md-hint>\n      </div>\n    </div>\n    <!--select template -->\n    <div fxLayout.md=\"column\">\n      <div>\n        <calvin-template-browser (notify)=\"onselect($event)\"  [template]=\"this.uniqueTemplate\" (onselect)=\"onselect($event)\">\n        </calvin-template-browser>\n      </div>\n    </div>\n  </div>\n  <!--</span>-->\n  <!--select tag container-->\n  <div class=\"inputFields\" fxLayout.md=\"row\">\n  <div fxLayout.md=\"column\">\n    <md-input-container>\n      <input mdInput placeholder=\"Specify tag\" [(ngModel)]=\"tagname\" #resetText  formControlName=\"tagCtrl\">\n      <md-hint align=\"start\" class=\"full-width\">        \n          <div *ngIf=\"userForm.get('tagCtrl').hasError('required') && userForm.get('tagCtrl').touched\" class=\"errorStyle\">\n            Tag is required\n          </div>\n          <div *ngIf=\"userForm.get('tagCtrl').hasError('pattern') && userForm.get('tagCtrl')\" class=\"errorStyle\">\n            Invalid tag length,must contain 3 to 20 char with one special character(.)\n          </div>\n      </md-hint>\n    </md-input-container>\n  </div>\n  <div fxLayout.md=\"column\" fxLayoutAlign=\"center center\">\n    <a md-button (click)=\"chipValue(tagname,resetText)\">Add</a> \n  </div>\n  </div>\n  <md-chip-list>\n    <div fxLayout.md=\"column\" ng-disabled=\"!tag.value\" *ngFor=\"let tag of tagarray\" >\n      <md-chip>{{tag}}<i class=\"material-icons\" (click)=\"deselectchip(tag)\">clear</i></md-chip>\n    </div>\n  </md-chip-list>\n  <!--terms and condition-->\n  <div class=\"inputFields\" fxLayout.md=\"row\">\n    <md-checkbox color=\"primary\" formControlName=\"termscondition\">I agree to the terms and condition.</md-checkbox>\n  </div>\n  <!--submit the form using raised button-->\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"5px\">\n    <a md-button (click)=\"routeToHome()\">Cancel</a>\n    <button md-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!userForm.valid\">Submit</button>\n  </div>\n  </form>\n  <div fxLayout=\"column\" fxFlex=\"10\"></div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/create-community/create-community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newcommunity_dialogbox_newcommunity_dialogbox_component__ = __webpack_require__("../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_community_service__ = __webpack_require__("../../../../../webapp/app/create-community/create-community.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCommunityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateCommunityComponent = (function () {
    function CreateCommunityComponent(fb, newcommunity, dialog, router, userservice) {
        this.fb = fb;
        this.newcommunity = newcommunity;
        this.dialog = dialog;
        this.router = router;
        this.userservice = userservice;
        this.tagarray = []; // to insert chip value from textfield
        this.uniquePurposeArry = [];
        this.isDomainExists = false;
        this.flag = 0;
        this.createForm();
    }
    // reactive form validation for userForm
    CreateCommunityComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            domainName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-z0-9.]{4,30}')]],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            purpose: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            visibility: ['Public', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: [''],
            tagCtrl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-z]{3,20}')]],
            termscondition: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            avatar: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('https?://.+')],
        });
    };
    //to check Domain is available or not
    CreateCommunityComponent.prototype.isDomainUnique = function (control) {
        var _this = this;
        this.flag = 1;
        // console.log("Checking if domian ", control.value, " exists already");
        this.newcommunity.isDomainRegisterd(control.value).subscribe(function (result) {
            if (Object.keys(result).length === 0) {
                // console.log("result false",Object.keys(result).length);
                _this.isDomainExists = false;
            }
            else {
                // console.log("result true",Object.keys(result).length);
                _this.isDomainExists = true;
            }
        });
    };
    // get the selected template value 
    CreateCommunityComponent.prototype.onselect = function (selectedTemplate) {
        this.templateValue = selectedTemplate;
        return selectedTemplate;
    };
    // get unique template list based on purpose
    CreateCommunityComponent.prototype.selectTemplate = function (purposevalue) {
        this.uniqueTemplate = this.newcommunity.communityDetails.filter(function (i) {
            return i.purpose === purposevalue;
        });
    };
    // store the tag value in array 
    CreateCommunityComponent.prototype.chipValue = function (tag, resetText) {
        resetText.value = '';
        if (!this.tagarray.includes(tag)) {
            this.tagarray.push(tag);
        }
    };
    // deselect chip value/remove tag value from an array
    CreateCommunityComponent.prototype.deselectchip = function (tag) {
        var tagvalue = tag;
        this.tagarray = this.tagarray.filter(function (item) { return item !== tagvalue; });
    };
    // submit userForm values and redirect to manageCommunity
    CreateCommunityComponent.prototype.onsubmit = function (userdata) {
        var _this = this;
        var newCommunityObj = userdata.value;
        var template = this.templateValue;
        var tags = this.tagarray;
        var owner = this.user.username;
        // get formControlName value as seperate from fromGroup
        var purpose = newCommunityObj.purpose;
        var name = newCommunityObj.name;
        var termscondition = newCommunityObj.termscondition;
        var visibility = newCommunityObj.visibility;
        var description = newCommunityObj.description;
        var domainName = newCommunityObj.domainName;
        var avatar = newCommunityObj.avatar;
        var newcommunityDetails = { purpose: purpose, name: name, visibility: visibility, description: description, template: template, tags: tags, owner: owner, avatar: avatar };
        // console.log('data we are send ing is ',newcommunityDetails);
        this.newcommunity.postNewcommunityDetails(newcommunityDetails, domainName).subscribe(function (data) { return _this.openDialog(newCommunityObj); });
    };
    // open dialog box if form submitted successfuly
    CreateCommunityComponent.prototype.openDialog = function (newCommunityObj) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__newcommunity_dialogbox_newcommunity_dialogbox_component__["a" /* NewcommunityDialogboxComponent */], {
            disableClose: true,
            data: newCommunityObj
        });
    };
    // route to Home page if action cancelled
    CreateCommunityComponent.prototype.routeToHome = function () {
        this.router.navigate(['/app/Home/']);
    };
    CreateCommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this will get the data to list template
        this.newcommunity.getTemplates().subscribe(function (data) {
            _this.newcommunity.communityDetails = data;
            // console.log('JSON value', data);
            var purposeList = [new Set(data.map(function (item) { return item.purpose; }))];
            var myArray = Array.from(purposeList);
            _this.uniquePurposeArry = Array.from(myArray[0]);
        }, function (error) { return error; }, function () { return 'Finished'; });
        // get the owner name
        this.userservice.getUserDetail(function (user) {
            _this.user = user;
            //console.log('user is in comm',this.user);
        });
    };
    return CreateCommunityComponent;
}());
CreateCommunityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../webapp/app/create-community/create-community.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/create-community/create-community.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__core_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_7__create_community_service__["a" /* CreateCommunityService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__create_community_service__["a" /* CreateCommunityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__create_community_service__["a" /* CreateCommunityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__core_user_info_service__["a" /* UserInfoService */]) === "function" && _e || Object])
], CreateCommunityComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-community.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/create-community/create-community.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCommunityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCommunityService = (function () {
    function CreateCommunityService(_http, snackBar) {
        this._http = _http;
        this.snackBar = snackBar;
        this.communityDetails = [];
    }
    CreateCommunityService.prototype.getTemplates = function () {
        var _this = this;
        return this._http
            .get('api/v1/communitytemplates')
            .catch(function (err) {
            _this.snackBar.open('server error..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (res) { return res.json(); });
    };
    CreateCommunityService.prototype.isDomainRegisterd = function (domain) {
        return this._http.get('api/v1/communities/communities/' + domain).map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CreateCommunityService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
    };
    CreateCommunityService.prototype.postNewcommunityDetails = function (newCommunityObj, domainName) {
        var _this = this;
        return this._http
            .post("api/v1/communities/" + domainName, newCommunityObj)
            .catch(function (err) {
            _this.snackBar.open('Please try again later..!!!', 'try again!', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        }).map(function (data) { return _this.data = data; });
    };
    return CreateCommunityService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CreateCommunityService.prototype, "communityDetails", void 0);
CreateCommunityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], CreateCommunityService);

var _a, _b;
//# sourceMappingURL=create-community.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/invalid-user/invalid-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-style\n{  padding-top:150px;\n    min-height: 420px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/invalid-user/invalid-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<md-card align=\"center\" class=\"card-style\">\n \n    <md-card-title>Invalid User !</md-card-title>\n\n    <md-card-subtitle><h3>It seems you are an unauthorised user</h3></md-card-subtitle>\n\n \n\n <!--<md-card-content>\n  </md-card-content>-->\n</md-card>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/invalid-user/invalid-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvalidUserComponent = (function () {
    function InvalidUserComponent() {
    }
    InvalidUserComponent.prototype.ngOnInit = function () {
    };
    return InvalidUserComponent;
}());
InvalidUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-invalid-user',
        template: __webpack_require__("../../../../../webapp/app/invalid-user/invalid-user.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/invalid-user/invalid-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InvalidUserComponent);

//# sourceMappingURL=invalid-user.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".launching{background-image:url('/assets/img/login/login-bg-blue.jpg');position:absolute;height:100%;width:100%;background-size:100%;background-position:center;-webkit-animation:slideshow 100s linear infinite;animation:slideshow 100s linear infinite}.launching h3{color:#fff}.launching h1{color:#fff; font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;padding-top:70px}.launching P{color:#FFF;padding:30px 0;text-align:center}.loginBtn{box-sizing:border-box;position:relative;margin:0.2em;padding:0 60px;border:none;text-align:left;line-height:45px;white-space:nowrap;border-radius:0.2em;font-size:20px;color:#FFF}.loginBtn:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:46px;height:100%}.loginBtn:focus{outline:none}.loginBtn:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,0.1)}.loginBtn--google{background:#DD4B39}.loginBtn--google:before{border-right:#BB3F30 1px solid;background:url('/assets/img/login/icon_google.png') 10px 13px no-repeat}.loginBtn--google:hover,.loginBtn--google:focus{background:#E74B37}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"launching\" fxLayoutAlign=\"center center\" > \n  <div  fxFlex=\"40%\"  fxLayoutAlign=\"center center\" fxLayout=\"column\">\n    <img fxFlex=\"100%\" src=\"/assets/img/logo/logo.png\"/>\n    <h3 fxFlex=\"100%\">CALVIN</h3>\n    <h1>Welcome to Calvin Practitioners</h1>\n\n    <p>A Platform to Collaborate community of  Practitioners </p>\n\n    <div fxFlex=\"100%\">\n      <button class=\"loginBtn loginBtn--google\" (click)=\"login()\">\n        Login with Google\n      </button>\n    </div>\n  </div> \n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../webapp/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.languages = [
            { value: 'English', viewValue: 'English' },
            { value: 'Hindi', viewValue: 'Hindi' },
            { value: 'French', viewValue: 'French' }
        ];
    }
    LoginComponent.prototype.login = function () {
        this.authService.login();
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../webapp/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/manage-community-tools/manage-community-tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \n       .tools-image  img{\n\n           width:35%;\n           height:170%;\n           margin-top: 10%;\n           margin-left:12%;\n           box-shadow: 3px 3px 4px #000000;\n       }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/manage-community-tools/manage-community-tools.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" class=\"content\">\n      <div fxFlex=\"20%\" fxFlexAlign='start' >\n\n        <md-list fxLayoutAlign=\"start\">\n          <md-list-item class=\"tools-image\">\n            <!--<md-icon (click)=\"openDialog()\" class=\"community-display-pic\" mdTooltip=\"Edit\">add_a_photo</md-icon>-->\n            <img md-list-avatar src=\"https://indianflag.co.in/wp-content/uploads/2016/12/2.jpg\">\n          </md-list-item>\n        </md-list>\n      </div>\n\n          <div fxFlex=\"20%\">\n              <div fxFlex=\"20%\" fxLayout fxLayout.xs=\"row\">\n          <h4> Github</h4>\n          <h5 >github.io</h5>\n          </div>\n          \n\n\n        \n\n      </div>\n\n"

/***/ }),

/***/ "../../../../../webapp/app/manage-community-tools/manage-community-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageCommunityToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageCommunityToolsComponent = (function () {
    function ManageCommunityToolsComponent() {
    }
    ManageCommunityToolsComponent.prototype.ngOnInit = function () {
    };
    return ManageCommunityToolsComponent;
}());
ManageCommunityToolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-manage-community-tools',
        template: __webpack_require__("../../../../../webapp/app/manage-community-tools/manage-community-tools.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/manage-community-tools/manage-community-tools.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageCommunityToolsComponent);

//# sourceMappingURL=manage-community-tools.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/manage-community/manage-community.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".try{\nmargin-top: 1%;\n}\n/*.manage-community{\nmargin-top:3%;*/\n\n\n    /*.try1{\n        margin-top: 30%;\n    }*/\n\n    .visibilityDesc {\n   color: gray ;\n   font-style: inherit;\n   font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n.setting{\n\nmargin-left:55%;\nmargin-top:5%;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/manage-community/manage-community.component.html":
/***/ (function(module, exports) {

module.exports = "<calvin-community-profile [profile]=\"this.community\" (onVoted)=\"onsubmit($event)\" >\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\" class=\"setting\">\n    <md-icon >settings</md-icon>\n  </button>\n  <md-menu #menu=\"mdMenu\">\n    <button routerLink=\"/app/communityDashBoard/{{this.domain}}\" md-menu-item>\n      <md-icon>dialpad</md-icon>\n      <span>Community</span>\n    </button>\n  </md-menu>\n  </calvin-community-profile>\n<div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" header >\n  <div fxFlex=\"20%\" fxLayout=\"row\"> </div>\n  <div fxFlex=\"80%\" fxLayout=\"row\" fxLayoutAlign=\" start\">\n    <md-tab-group class=\"manage-community\" fxFlex=\"80%\">\n       <md-tab label=\"Community\">\n         <form [formGroup]=\"userForm\" (ngSubmit)=\"onsubmit(userForm)\" class=\"try\" >\n             <md-input-container fxLayoutAlign=\"start\">\n                <input mdInput placeholder=\"Domain \"  disabled value={{community.domain}} disabled> \n              </md-input-container>\n\n                <md-input-container fxLayoutAlign=\"start\">\n                 <input mdInput placeholder=\"Purpose\"   value={{community.purpose}} disabled>\n                </md-input-container>\n\n                <md-input-container fxLayoutAlign=\"start\" fxLayout=\"column\">\n                  <textarea mdInput placeholder=\"Community Name\" rows=\"2\" formControlName=\"name\" ngModel={{community.name}} style=\"text-transform: capitalize\"></textarea>\n                </md-input-container>\n\n                <md-input-container fxLayoutAlign=\"start\" fxLayout=\"column\">\n                   <textarea input mdInput placeholder=\"Description\" rows=\"2\" formControlName=\"description\" ngModel={{community.description}} style=\"text-transform: capitalize\"></textarea>\n                </md-input-container>\n\n               <div class=\"inputFields\" fxLayout.md=\"column\" fxLayoutGap=\"100px\">\n   <md-input-container>\n     <input mdInput placeholder=\"Visibility\" >\n     <md-radio-group name=\"visibility\" formControlName=\"visibility\" ngModel={{community.visibility}}>\n           <md-radio-button value=\"Public\" >Public <div fxFlex=\"20%\" class=\"visibilityDesc\">Visible to anyone anywhere </div></md-radio-button>\n       <md-radio-button value=\"Private\" >Private <div fxFlex=\"20%\" class=\"visibilityDesc\">Visible only to you</div> </md-radio-button>\n       <md-radio-button value=\"Moderated\" >Moderated <div fxFlex=\"20%\" class=\"visibilityDesc\">Only invited members can join and see community content </div></md-radio-button>\n     </md-radio-group>\n   </md-input-container>\n\n </div>\n\n   <md-input-container fxLayoutAlign=\"start\" fxLayout=\"column\">\n      <textarea input mdInput placeholder=\"avatar\" rows=\"2\" formControlName=\"avatar\" ngModel={{community.avatar}}></textarea>\n          <md-hint align=\"start\" class=\"full-width\">\n              <div *ngIf=\"userForm.get('avatar').hasError('pattern') && userForm.get('avatar').touched\" class=\"errorStyle\">\n                      Invalid avatar path,must be url\n                  </div>\n              </md-hint>\n          </md-input-container> \n\n <div class=\"inputFields\" fxLayout.md=\"row\">\n    <div fxLayout.md=\"row\">\n        <md-input-container fxLayoutAlign=\"start\">\n         <input mdInput  placeholder=\"Tag\" formControlName=\"tagCtrl\" #resetText    [(ngModel)]=\"tagname\" style=\"text-transform: capitalize\">\n             <md-hint align=\"start\" class=\"full-width\">\n                <div *ngIf=\"userForm.get('tagCtrl').hasError('pattern') && userForm.get('tagCtrl')\" class=\"errorStyle\">\n                               Invalid tag length,must contain 3 to 20 char with one special character(.)\n                  </div>\n                </md-hint>\n            </md-input-container>\n\n       <md-chip-list>\n          <div ng-disabled=\"!tag.value\" *ngFor=\"let tag of tagarray\">\n              <md-chip >{{tag}}<i class=\"material-icons\"(click)=\"clearTag(tag)\">clear</i>\n              </md-chip>\n           </div>\n          <a md-button (click)=\"chipValue(tagname,resetText)\">Add</a> \n      </md-chip-list>\n               \n    </div> \n </div>\n              \n <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"5px\">\n    <a md-button (click)=\"routeToHome()\">Cancel</a>\n    <button md-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!userForm.valid\">Submit</button>\n  </div>\n  </form>  \n</md-tab>\n      <!--Closing community info tab-->\n  <md-tab label=\"Members\">\n       <calvin-community-member-management [community]=\"this.domain\"></calvin-community-member-management>\n   </md-tab>\n                  <!--tab for manage member component-->\n  <md-tab label=\"Roles\">\n            <calvin-community-role-managements [community]=\"this.domain\"></calvin-community-role-managements>\n  </md-tab>\n                  <!--tab for manage role component-->\n    <md-tab label=\"Tools\">\n          <calvin-community-tool-management [community]=\"this.domain\"></calvin-community-tool-management>\n  </md-tab>\n\n</md-tab-group>\n </div>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/manage-community/manage-community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__community_profile_community_profile_service__ = __webpack_require__("../../../../../webapp/app/community-profile/community-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_community_manage_community_service__ = __webpack_require__("../../../../../webapp/app/manage-community/manage-community.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ManageCommunityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateCommunity; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { MdDialog } from '@angular/material';

1;




var ManageCommunityComponent = (function () {
    function ManageCommunityComponent(route, router, fb, commProfileService, dialog, commUpdateService) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.commProfileService = commProfileService;
        this.dialog = dialog;
        this.commUpdateService = commUpdateService;
        this.community = [];
        this.tagarray = [];
        this.param = [];
        this.counter = true;
        this.voted = false;
        this.updateForm();
    }
    ManageCommunityComponent.prototype.getAllCommunityDetails = function () {
        var _this = this;
        this.domain = this.route.snapshot.params['domain'];
        this.commProfileService.getCommunity(this.route.snapshot.params['domain'], this.counter).subscribe(function (res) {
            _this.domain = res.domain;
            _this.updatedBy = res.updatedby;
            _this.status = res.status;
            res.createdon = __WEBPACK_IMPORTED_MODULE_3_moment_moment__(res.createdon).subtract(1, 'days').calendar();
            _this.community = res;
        });
    };
    // reactive form validation for userForm
    ManageCommunityComponent.prototype.updateForm = function () {
        this.userForm = this.fb.group({
            avatar: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('https?://.+')],
            visibility: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tagCtrl: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-z]{3,20}')]],
            name: ['']
        });
    };
    //   vote(agreed: boolean) {
    //   this.onVoted.emit(agreed);
    //   this.voted = true;
    // }
    // store the tag value in array 
    ManageCommunityComponent.prototype.chipValue = function (tag, resetText) {
        resetText.value = '';
        if (!this.tagarray.includes(tag)) {
            this.tagarray.push(tag);
            // this.tagname='';
        }
    };
    ManageCommunityComponent.prototype.routeToHome = function () {
        this.router.navigate(['/app/Home/']);
    };
    // deselect chip value/remove tag value from an array
    ManageCommunityComponent.prototype.clearTag = function (tag) {
        var tagvalue = tag;
        this.tagarray = this.tagarray.filter(function (item) { return item !== tagvalue; });
    };
    ManageCommunityComponent.prototype.openDialog = function (domain) {
        var dialogRef = this.dialog.open(updateCommunity, {
            disableClose: true,
            data: this.domain
        });
        dialogRef.afterClosed().subscribe();
        this.getAllCommunityDetails();
    };
    //  update(event: object) {
    //     this.counterValue = event.count;
    //   }
    ManageCommunityComponent.prototype.onsubmit = function (userForm, agreed) {
        var _this = this;
        var myFormValue = userForm.value;
        var updatedby = myFormValue.updatedby = this.updatedBy;
        var tags = myFormValue.tags = this.tagarray;
        var name = myFormValue.name;
        var visibility = myFormValue.visibility;
        var description = myFormValue.description;
        var avatar = myFormValue.avatar;
        var status = myFormValue.status = this.status;
        console.log('tag array', tags);
        console.log('my form value', updatedby, tags, name, visibility, description, avatar, status);
        var formValue = { updatedby: updatedby, tags: tags, name: name, visibility: visibility, description: description, avatar: avatar, status: status };
        console.log('total form value', formValue);
        this.commUpdateService.updateSpecificCommunity(formValue, this.domain).subscribe(function (result) {
            _this.openDialog(_this.domain);
        });
        this.getAllCommunityDetails();
    };
    ManageCommunityComponent.prototype.ngOnInit = function () {
        this.getAllCommunityDetails();
    };
    return ManageCommunityComponent;
}());
ManageCommunityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-manage-community',
        template: __webpack_require__("../../../../../webapp/app/manage-community/manage-community.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/manage-community/manage-community.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__community_profile_community_profile_service__["a" /* CommunityProfileService */], __WEBPACK_IMPORTED_MODULE_5__manage_community_manage_community_service__["a" /* updateSpecificCommunityService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__community_profile_community_profile_service__["a" /* CommunityProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__community_profile_community_profile_service__["a" /* CommunityProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__manage_community_manage_community_service__["a" /* updateSpecificCommunityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__manage_community_manage_community_service__["a" /* updateSpecificCommunityService */]) === "function" && _f || Object])
], ManageCommunityComponent);

var updateCommunity = (function () {
    function updateCommunity(router, route, data, dialogRef) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.dialogRef = dialogRef;
        this.domain = data;
    }
    updateCommunity.prototype.routeToManage = function () {
        this.router.navigate(["/app/managecommunity/" + this.domain]);
    };
    return updateCommunity;
}());
updateCommunity = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'updateCommunity',
        template: __webpack_require__("../../../../../webapp/app/manage-community/updateCommunity.html"),
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _h || Object, Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdDialogRef */]) === "function" && _j || Object])
], updateCommunity);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=manage-community.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/manage-community/manage-community.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateSpecificCommunityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var updateSpecificCommunityService = (function () {
    function updateSpecificCommunityService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.counter = true;
    }
    updateSpecificCommunityService.prototype.updateSpecificCommunity = function (Form, domain) {
        var _this = this;
        var url = "/api/v1/communities/communities/" + domain;
        return this.http.patch(url, Form).catch(function (err) {
            _this.snackBar.open('Unable to Update Community.. Please try again later..!!!', 'Close', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        })
            .map(function () { return Form; });
    };
    return updateSpecificCommunityService;
}());
updateSpecificCommunityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], updateSpecificCommunityService);

var _a, _b;
//# sourceMappingURL=manage-community.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/manage-community/updateCommunity.html":
/***/ (function(module, exports) {

module.exports = "\n<md-dialog-content>Updated successsfully!!!!!!!!</md-dialog-content>\n<md-card-content>\n    <button style=\"float: right; overflow: hidden\" md-raised-button color=\"primary\" (click)=\"routeToManage()\" md-dialog-close>\n      Proceed...\n    </button>\n</md-card-content>\n\n"

/***/ }),

/***/ "../../../../../webapp/app/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n<md-card>\n  <md-card-title>Modify role</md-card-title>\n  <div>\n <div>   <md-input-container >\n      <input fxFlex='30%' mdInput placeholder=\"username:\" value=\"{{data.val}}\" disabled/>\n    </md-input-container></div>\n<div> <span><md-select placeholder=\"role\" (keyup.enter)=\"value=''\" class=\"textfield\" name=\"value\">\n      <md-option *ngFor=\"let access of getResults\" (click)=\"selectCore(access.role)\" [value]=\"access.role\">{{access.role}} </md-option>\n\n    </md-select></span></div>\n  </div>\n \n</md-card>\n<div md-dialog-actions fxLayoutAlign=\"end\">\n    <button md-button md-dialog-close>Cancel</button>\n    <button md-raised-button md-dialog-close color=\"primary\" (click)=\"update(data.val)\">Apply</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../webapp/app/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_edit_service__ = __webpack_require__("../../../../../webapp/app/member-edit/member-edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__community_member_management_community_member_management_service__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MemberEditComponent = (function () {
    function MemberEditComponent(membersService, role, router, route, data, dialogRef) {
        // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
        // Refer https://github.com/angular/material2/issues/4002
        // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);
        var _this = this;
        this.membersService = membersService;
        this.role = role;
        this.router = router;
        this.route = route;
        this.data = data;
        this.dialogRef = dialogRef;
        this.getResults = [];
        this.sample = [];
        this.domainname = data.domain;
        console.log("nn", this.community);
        console.log("ggg", this.domainname);
        console.log("name is", data.val);
        this.role.listUniqueRoles(this.domainname).subscribe(function (res) {
            _this.getResults = res;
            console.log("my result is", _this.getResults);
            console.log('roles');
        });
    }
    MemberEditComponent.prototype.getMember = function () {
        var _this = this;
        if (this.community) {
            this.membersService.getMember(this.community).subscribe(function (data) {
                _this.members = data;
            });
        }
        ;
    };
    MemberEditComponent.prototype.update = function (name) {
        var _this = this;
        console.log('my update value', name, this.coreValue);
        var a = [];
        a.push({ username: name, role: this.coreValue });
        console.log("hello-------array", a);
        this.role.updateRole(this.domainname, a).subscribe(function (res) {
            _this.sample.push(res);
            _this.getMember();
        });
    };
    MemberEditComponent.prototype.selectCore = function (core) {
        this.coreValue = core;
        console.log('core value', this.coreValue);
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        this.getMember();
    };
    return MemberEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MemberEditComponent.prototype, "community", void 0);
MemberEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-member-edit',
        template: __webpack_require__("../../../../../webapp/app/member-edit/member-edit.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/member-edit/member-edit.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__member_edit_service__["a" /* RoleListServices */], __WEBPACK_IMPORTED_MODULE_4__community_member_management_community_member_management_service__["a" /* Memberservice */]],
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__community_member_management_community_member_management_service__["a" /* Memberservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__community_member_management_community_member_management_service__["a" /* Memberservice */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__member_edit_service__["a" /* RoleListServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__member_edit_service__["a" /* RoleListServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */]) === "function" && _e || Object])
], MemberEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=member-edit.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/member-edit/member-edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleListServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleListServices = (function () {
    function RoleListServices(http) {
        this.http = http;
    }
    RoleListServices.prototype.listUniqueRoles = function (domainname) {
        console.log('In member-edit service');
        var url = '/api/v1/communityroleactions/' + domainname + '?onlyroles=true';
        console.log(url);
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    RoleListServices.prototype.updateRole = function (domain, data) {
        // console.log(domain);
        // console.log(role);
        // console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(data);
        //console.log(body);
        var url = "/api/v1/communityroleactions/communitymembership/" + domain + "/members";
        return this.http.patch(url, body, options).map(function (res) { return res.json(); });
    };
    return RoleListServices;
}());
RoleListServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], RoleListServices);

var _a;
//# sourceMappingURL=member-edit.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/member-invitation/member-invitation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottom-button {\n    margin-top:10px;\n    margin-right: 10px\n}\n.inviteMembers h3 {\nmargin-top: 0\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/member-invitation/member-invitation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inviteMembers\">\n  <h3 algin=\"center\">Invite Members to Community</h3>\n <!--<p> {{this.username}}</p>-->\n  <form #memberinvite=\"ngForm\" (ngSubmit)=\"onSendingInvitation(memberinvite)\">\n    <input type=\"hidden\"  name=\"index\" ngModel=\"0\" >\n    <md-input-container name=\"email\" required fxFlex=\"45%\"  (keyup.enter)=\"newTodo=''\" class=\"textfield\" name=\"newTodo\">\n      <input mdInput ngModel name=\"email0\" placeholder=\"E-mail Address\">\n    </md-input-container>\n    <md-select ngModel fxFlex=\"45%\"   name=\"role0\" placeholder=\"Role\" (keyup.enter)=\"newTodo=''\" class=\"textfield\">\n      <md-option *ngFor=\"let access of getResults\" [value]=\"access.role\">{{access.role}} </md-option>\n    </md-select>\n    <button md-icon-button fxFlex=\"10%\"   (click)=\"addTodo($event)\" class=\"bottomright\" align=\"end\">\n      <i class=\"material-icons\">add_circle_outline</i>\n    </button>\n    <div *ngFor=\"let member of inviteMembers; let i=index\" >\n      <input type=\"hidden\"  name=\"index\" ngModel=\"{{i+1}}\" >\n      <md-input-container name=\"email\" required (keyup.enter)=\"newTodo=''\" class=\"textfield\" name=\"newTodo\">\n        <input mdInput ngModel name=\"email{{i+1}}\" placeholder=\"E-mail Address\">\n      </md-input-container>\n      <md-select ngModel name=\"role{{i+1}}\" placeholder=\"Role\" (keyup.enter)=\"newTodo=''\" class=\"textfield\">\n        <md-option *ngFor=\"let access of getResults\" [value]=\"access.role\">{{access.role}} </md-option>\n      </md-select>\n      <button md-icon-button class=\"bottomright\" align=\"end\">\n        <i class=\"material-icons\" md-icon-button (click)=\"deleteTodo(i)\">close</i>\n      </button>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n      <button md-raised-button md-dialog-close  class=\"bottom-button\">Cancel</button>\n      <button md-raised-button color=\"primary\" class=\"bottom-button\" type=\"submit\">Invite</button>\n    </div>\n  </form>\n  <!--form ends here-->\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/member-invitation/member-invitation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__community_members_widget_community_members_widget_service__ = __webpack_require__("../../../../../webapp/app/community-members-widget/community-members-widget.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_invitation_service__ = __webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__community_member_management_community_member_management_service__ = __webpack_require__("../../../../../webapp/app/community-member-management/community-member-management.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInvitationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var MemberInvitationComponent = (function () {
    function MemberInvitationComponent(membersService, invite, userservice, snackBar, membersWidget, router, data, dialogRef) {
        var _this = this;
        this.membersService = membersService;
        this.invite = invite;
        this.userservice = userservice;
        this.snackBar = snackBar;
        this.membersWidget = membersWidget;
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.user = {};
        this.getResults = [];
        this.flag = 0;
        this.addInterestArr = [];
        this.profileArray = [];
        this.newTodo = '';
        this.inviteMembers = [];
        this.domain = data;
        this.invite.listUniqueRoles(this.domain).subscribe(function (res) {
            _this.getResults = res;
        });
    }
    MemberInvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserDetail(function (userdetails) {
            _this.uservalue = userdetails;
            _this.username = userdetails.username;
            _this.flag = 1;
            console.log("INVITED BY NAME", _this.username);
        });
        // this.profileService.getUserProfile(this.username).subscribe(res => {
        //   this.profileArray = res;
        // });
    };
    MemberInvitationComponent.prototype.addTodo = function (event) {
        this.addInvite = {
            newTodo: this.newTodo,
            completed: false
        };
        this.inviteMembers.push(this.addInvite);
        this.newTodo = '';
        event.preventDefault();
    };
    MemberInvitationComponent.prototype.deleteTodo = function (index) {
        this.inviteMembers.splice(index, 1);
    };
    MemberInvitationComponent.prototype.getMember = function () {
        var _this = this;
        this.membersService.getMember(this.domain).subscribe(function (data) {
            _this.members = data;
        });
    };
    ;
    MemberInvitationComponent.prototype.onSendingInvitation = function (userdata) {
        var _this = this;
        var memArr = [];
        var inviteArr = [];
        var memberVal = userdata.value;
        var i = 0;
        while (i <= memberVal.index) {
            var email = memberVal["email" + i];
            var role = memberVal["role" + i];
            var temp = {
                'role': role,
                'email': email,
            };
            inviteArr.push(temp);
            i++;
        }
        var postInvite = {
            "invitee": inviteArr,
            "invitedby": this.username
        };
        console.log("post array sent", postInvite);
        this.invite.inviteMember(postInvite, this.domain).subscribe(function (res) {
            _this.dialogRef.close('close');
            _this.snackBar.open('Invitaion Sent', 'X', {
                duration: 3000
            });
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(_this.getResults = res);
            _this.getMember();
        });
    };
    return MemberInvitationComponent;
}());
MemberInvitationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-member-invitation',
        template: __webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/member-invitation/member-invitation.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__member_invitation_service__["a" /* InvitationServices */]]
    }),
    __param(6, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__community_member_management_community_member_management_service__["a" /* Memberservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__community_member_management_community_member_management_service__["a" /* Memberservice */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__member_invitation_service__["a" /* InvitationServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__member_invitation_service__["a" /* InvitationServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_user_info_service__["a" /* UserInfoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__community_members_widget_community_members_widget_service__["a" /* MembersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__community_members_widget_community_members_widget_service__["a" /* MembersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object, Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdDialogRef */]) === "function" && _g || Object])
], MemberInvitationComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=member-invitation.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/member-invitation/member-invitation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvitationServices = (function () {
    function InvitationServices(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    InvitationServices.prototype.getRole = function (domain) {
        return this.http.get("/api/v1/communityMembers/communitymembership/" + domain + "/members").map(function (res) { return res.json(); });
    };
    InvitationServices.prototype.inviteMember = function (inviteInfo, domain) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(inviteInfo);
        var url = "/api/v1/communityMembers/memberrequests/" + domain + "/type/invite";
        return this.http.post(url, body, options).catch(function (err) {
            _this.snackBar.open('Sending Invitation failed', 'X', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (res) { return res.json(); });
    };
    InvitationServices.prototype.listUniqueRoles = function (domainname) {
        var url = '/api/v1/communityroleactions/' + domainname + '?onlyroles=true';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return InvitationServices;
}());
InvitationServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], InvitationServices);

var _a, _b;
//# sourceMappingURL=member-invitation.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/my-communities/my-communities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-list-item {\n\n  cursor: pointer;\n}\nmd-list-item img {\n  transition: all 0.5s ease;\n}\nmd-list-item:hover {\n  background-color: #eee;\n}\nmd-list-item:hover img {\n  width: 42px;\n  height: 42px;\n}\nmd-list-item:last-child {\n  border-bottom: 1px transparent;\n}\n#info {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n}\n.community-list {\n  max-height: 600px;\n  overflow-y: scroll;\n  color: grey;\n}\n.community-list::-webkit-scrollbar { \n    display: none; \n}\n.usercommunitylist{\nmargin-left:20%;\n}\n/*h4, h5 {\n  color : grey;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/my-communities/my-communities.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxFlex=\"100%\" class=\"usercommunitylist\">\n\t<md-card-title fxLayout=\"row\" class=\"new-community\">\n\t\tCommunities ({{communities.length}})\n\t</md-card-title>\n\n\t<div class=\"community-list\">\n\n\t\t<md-list align=\"start\">\n\t\t\t<div *ngIf=\"communities.length==0\">\n\t\t\t\t<h4> It seems you are not a part of any community..!!!</h4>\n\t\t\t\t<h5> It's time to create a new community..</h5>\n\t\t\t\t\n\t\t\t\t<span><md-icon>sad</md-icon></span>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"!communities.length==0\" class=\"content\">\n\t\t\t\t<md-list-item *ngFor=\"let userCommunityItem of communities\" (click)=\"routeToCommunity(userCommunityItem.domain)\">\n\n\t\t\t\t\t<img md-list-avatar src=\"{{userCommunityItem.avatar}}\">\n\t\t\t\t\t<h2 md-line>{{userCommunityItem.domain}}</h2>\n\t\t\t\t\t<p md-line>\n\t\t\t\t\t\t{{userCommunityItem.roles}}\n\t\t\t\t\t</p>\n\t\t\t\t</md-list-item>\n\t\t\t</div>\n\t\t</md-list>\n\t\t\t<md-card-actions fxFlex=\"100%\" fxLayoutAlign=\"end\">\n\t\t\t\t<button md-mini-fab routerLink=\"/app/createCommunity\" class=\"button\"><md-icon>add</md-icon></button>\n\t\t\t</md-card-actions>\n\t</div>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/my-communities/my-communities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_communities_services__ = __webpack_require__("../../../../../webapp/app/my-communities/my-communities.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserWidgetsComponent = (function () {
    function UserWidgetsComponent(userCommunities, userInfo, router) {
        this.userCommunities = userCommunities;
        this.userInfo = userInfo;
        this.router = router;
        this.userCommunityListArray = [];
        this.communities = [];
    }
    UserWidgetsComponent.prototype.ngOnInit = function () {
        // this.userInfo.getUserDetail(this.user). subscribe (res => {this.member = res;});
        var _this = this;
        this.userInfo.getUserDetail(function (userdetails) {
            _this.member = userdetails.username;
            console.log('user is : ' + _this.member);
        });
        this.userCommunities.getCommunity(this.member).subscribe(function (res) {
            _this.communities = res.communities;
            console.log("checkinggggg", _this.communities);
        });
    };
    UserWidgetsComponent.prototype.onScroll = function () {
    };
    UserWidgetsComponent.prototype.routeToCommunity = function (domain) {
        this.router.navigate(["/app/communityDashBoard/" + domain]);
        //  Get user community list
        // getUserCommunity() {
        //   this.userCommunities
        //     .getCommunity()
        //     .subscribe(userCommunityList => {
        //       userCommunityList.forEach(element => {
        //         this.userCommunityListArray.push(element)
        //       });
        //     });
        //  }
    };
    return UserWidgetsComponent;
}());
UserWidgetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-user-widgets',
        template: __webpack_require__("../../../../../webapp/app/my-communities/my-communities.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/my-communities/my-communities.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__my_communities_services__["a" /* UserCommunities */], __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__my_communities_services__["a" /* UserCommunities */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__my_communities_services__["a" /* UserCommunities */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserWidgetsComponent);

var _a, _b, _c;
//# sourceMappingURL=my-communities.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/my-communities/my-communities.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCommunities; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserCommunities = (function () {
    function UserCommunities(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    UserCommunities.prototype.getCommunity = function (member) {
        var _this = this;
        var url = "/api/v1/communities/membership/" + member;
        return this.http.get(url).catch(function (err) {
            _this.snackBar.open('Unable to get Communities.. Please try again later..!!!', 'Close', {
                duration: 3000
            });
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err); // observable needs to be returned or exception raised
        })
            .map(function (response) { return response.json(); });
    };
    return UserCommunities;
}());
UserCommunities = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], UserCommunities);

var _a, _b;
//# sourceMappingURL=my-communities.services.js.map

/***/ }),

/***/ "../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnAlign {\n    float: right;\n    overflow: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-card-title>\n    <h3>Community created successfully..!</h3>\n   </md-card-title>\n    <md-card-content>\n    <button class=\"btnAlign\" md-raised-button color=\"primary\" (click)=\"routeToManage()\" md-dialog-close>\n      Proceed...\n    </button>\n    </md-card-content>\n</div>\n"

/***/ }),

/***/ "../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcommunityDialogboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewcommunityDialogboxComponent = (function () {
    function NewcommunityDialogboxComponent(router, data, dialogRef) {
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.domainName = data.domainName;
        // This is not the recommended way of accessing data passed to the dialog, hence commenting, but for example sake keeping it
        // Refer https://github.com/angular/material2/issues/4002
        // console.log("Data in the dialog is: ", this.dialogRef._containerInstance.dialogConfig.data);
    }
    NewcommunityDialogboxComponent.prototype.routeToManage = function () {
        this.router.navigate(["/app/managecommunity/" + this.domainName]);
    };
    return NewcommunityDialogboxComponent;
}());
NewcommunityDialogboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-newcommunity-dialogbox',
        template: __webpack_require__("../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/newcommunity-dialogbox/newcommunity-dialogbox.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */]) === "function" && _b || Object])
], NewcommunityDialogboxComponent);

var _a, _b;
//# sourceMappingURL=newcommunity-dialogbox.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/notifications/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.get = function (username) {
        var _this = this;
        console.log("checkinggg the notificationsss", { "mid": null, "user": username });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = io('activitystreams.blr.stackroute.in/circle/getallcircles');
            _this.socket.emit('authorize', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1heWFuayBTZXRoaSIsImFwaSI6ImNpcmNsZSIsInNjb3BlcyI6WyJtYWlsYm94OmFsbCIsImNpcmNsZTphbGwiLCJmb2xsb3c6YWxsIl0sImlhdCI6MTQ5NzkzODEzOX0.cpLAt8BaYZyqyp53iDJGbl3yIBtBjj6_qoSiM4_hDiY");
            _this.socket.emit('startListeningToMailbox', { "mid": null, "user": username });
            _this.socket.on('newActivity', function (activity) {
                observer.next(activity);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<md-card fxFlex=\"20%\" class=\"usercommunitylist\">\n\t<md-card-title fxLayout=\"row\" class=\"new-community\">\n\t\tNotifications ( {{notifications.length}} )\n\t</md-card-title>\n\n\t<div class=\"community-list\">\n\n\t\t<md-list align=\"start\">\n\t\t\t<div *ngIf=\"!notifications.length==0\">\n\t\t\t\t<h4> no activities to display..!!!\n\t\t\t\t</h4><span><md-icon>sad</md-icon></span>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"notifications.length==0\">\n\t\t\t\t<md-list-item >\n\n\t\t\t\t\t\n\t\t\t\t\t<h2 md-line>Nikita posted a question</h2>\n\t\t\t\t\t\n\t\t\t\t</md-list-item>\n        \t\t<md-list-item >\n\n\t\t\t\t\t\n\t\t\t\t\t<h2 md-line>Nikita posted a question</h2>\n\t\t\t\t\t\n\t\t\t\t</md-list-item>\n        \t\t<md-list-item >\n\n\t\t\t\t\t\n\t\t\t\t\t<h2 md-line>Nikita posted a question</h2>\n\t\t\t\t\t\n\t\t\t\t</md-list-item>\n\n        \t\t<md-list-item >\n\n\t\t\t\t\t\n\t\t\t\t\t<h2 md-line>Nikita posted a question</h2>\n\t\t\t\t\t\n\t\t\t\t</md-list-item>\n\t\t\t</div>\n\t\t2de>-->\n\t\t</md-list>\n\t</div>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../webapp/app/notifications/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = (function () {
    function NotificationsComponent(socketService, userInfo) {
        this.socketService = socketService;
        this.userInfo = userInfo;
        this.message = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfo.getUserDetail(function (userdetails) {
            _this.user = userdetails.username;
            console.log('user is : ' + _this.user);
            _this.initSocketIoConnection(_this.user);
        });
    };
    NotificationsComponent.prototype.initSocketIoConnection = function (username) {
        var _this = this;
        this.notifications = [];
        this.ioConnection = this.socketService.get(username).subscribe(function (newNotification) {
            _this.notifications.push(newNotification);
            console.log("notificationsss", _this.notifications);
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-notifications',
        template: __webpack_require__("../../../../../webapp/app/notifications/notifications.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/notifications/notifications.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__["a" /* UserInfoService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_user_info_service__["a" /* UserInfoService */]) === "function" && _b || Object])
], NotificationsComponent);

var _a, _b;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/template-browser/template-browser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.templateArea  {\n    float: left;\n    overflow: hidden;\n}\n.content {\n    height: 300px;\n    overflow-y: auto;\n}\n.listTemplateItem {\n    border: 1px solid #ddd; \n    border-radius: 4px; \n    height: 100%;\n    width: 100%;   \n    display: inline-block;\n}\n/* Add a hover effect (gray shadow) */\n/*.cardContent :hover {\n    background-color: gray;\n    color: white;\n}*/\n\n.tamplatePadding {\n    padding-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/template-browser/template-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div fxLayout.md=\"column\" >-->\n      <md-select *ngIf=\"template\" placeholder=\"Select template\">\n        <md-option *ngFor=\"let core of template\" (click)=\"selectcore(core.name)\" [value]=\"core.name\" >\n            {{core.name}}\n        </md-option>\n      </md-select>\n"

/***/ }),

/***/ "../../../../../webapp/app/template-browser/template-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_community_create_community_component__ = __webpack_require__("../../../../../webapp/app/create-community/create-community.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateBrowserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateBrowserComponent = (function () {
    function TemplateBrowserComponent(community) {
        this.community = community;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TemplateBrowserComponent.prototype.selectcore = function (core) {
        this.notify.emit(core);
    };
    TemplateBrowserComponent.prototype.ngOnInit = function () { };
    return TemplateBrowserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemplateBrowserComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TemplateBrowserComponent.prototype, "notify", void 0);
TemplateBrowserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-template-browser',
        template: __webpack_require__("../../../../../webapp/app/template-browser/template-browser.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/template-browser/template-browser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__create_community_create_community_component__["a" /* CreateCommunityComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__create_community_create_community_component__["a" /* CreateCommunityComponent */]) === "function" && _b || Object])
], TemplateBrowserComponent);

var _a, _b;
//# sourceMappingURL=template-browser.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-config-page/tool-config-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form{\n    margin-top:20px;\n}\n.img{\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/tool-config-page/tool-config-page.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <form #tool=\"ngForm\" class=\"form\" (ngSubmit)=\"onSubmit(tool)\">\n      <h3 fxLayoutAlign=\"start\">Tool Info</h3>\n      <hr>\n      <div *ngFor=\"let val of allTool\" fxLayout=\"row\">\n        <div fxLayout=\"row\">\n          <div fxFlex=\"20%\" fxLayoutAlign=\"\">\n            <img src=\"{{val.toolavatar}}\" class=\"img\">\n          </div>\n          <div fxFlex=\"50%\">\n            <md-card-title>\n              <h2 align=\"start\">{{toolObj.toolname}}</h2>\n            </md-card-title>\n            <md-card-subtitle align=\"start\">{{toolObj.toolid}}</md-card-subtitle>\n            <md-card-subtitle align=\"start\">{{toolObj.purpose}}</md-card-subtitle>\n            <md-card-subtitle align=\"start\">{{toolObj.tooldesc}}</md-card-subtitle>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <h3 fxLayoutAlign=\"start\">Redirect Url</h3>\n      <div align=\"start\">\n\n        <md-input-container>\n          <input required type=\"url\" mdInput ngModel name=\"toolurl\" placeholder=\"URL to redirect for use of tool\" formControllName=\"toolurl.value\">\n        </md-input-container>\n      </div>\n      <hr>\n      <h3 fxLayout>Tool Action</h3>\n      <hr>\n      <div *ngFor=\"let val of toolActions\" fxFlex=\"80%\" fxLayout.md=\"column\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"40px\"\n        fxLayoutAlign=\"center\">\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.grantactions}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.name}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.description}}>\n          </md-input-container>\n        </div>\n\n        <div fxFlex=\"10%\">\n\n        </div>\n        <div fxFlex=\"10%\">\n\n        </div>\n\n      </div>\n\n      <!--</div>-->\n      <hr>\n\n      <h3 fxLayoutAlign=\"start\">Events Subscription</h3>\n      <hr>\n      <div fxFlex=\"100%\" fxLayout=\"\" fxLayoutAlign=\"start\" fxLayoutGap=\"\" *ngFor=\"let event of toolEvents\">\n        <div fxFlex=\"25%\" fxLayoutAlign=\"start\" fxLayout=\"row\">\n          <!--<div fxFlex=\"25%\">-->\n          <md-checkbox class=\"example-margin\" (click)=\"toggle(event.eventid, event.name, event.description, $event)\"></md-checkbox>\n\n          <md-card-header>\n            <md-card-title align=\"start\">{{event.name}}</md-card-title>\n            <md-card-title fxLayout=\"\">{{event.description}}</md-card-title>\n          </md-card-header>\n        </div>\n        <!--dropdown-->\n        <div fxLayout=\"row\" fxFlex=\"25%\" fxLayoutAlign=\"center\">\n          <md-select placeholder=\"Activity Type\" name=\"event1\" [ngModel]=\"cactType\" (ngModelChange)=\"onSelectMapType(event.eventid, 'activity', $event)\">\n            <!--(ngModelChange)=\"function()\"-->\n            <div *ngFor=\"let activity of events.activitytype\">\n              <md-option [value]=\"activity\" (click)=\"select(activity)\">\n                {{activity}}\n              </md-option>\n            </div>\n          </md-select>\n\n\n\n\n          <!--<md-input-container>\n  <input mdInput placeholder=\"ActorType\" [mdAutocomplete]=\"autostates\" [formControl]=\"stateCtrl\" >\n</md-input-container>\n\n<md-autocomplete #autostates=\"mdAutocomplete\"[displayWith]=\"displayFunc\">\n  <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\n    {{ state }}\n  </md-option>\n</md-autocomplete>-->\n\n\n        </div>\n        <div fxLayout=\"row\" fxFlex=\"25%\" fxLayoutAlign=\"center\">\n\n          <!--<md-input-container>\n    <input mdInput placeholder=\"ActivityType\" [mdAutocomplete]=\"autSelectActivty\" [formControl]=\"stateActive\">\n  </md-input-container>\n\n<md-autocomplete #autSelectActivty=\"mdAutocomplete\" >\n  <md-option *ngFor=\"let activity of events.actortype | async\" [value]=\"activity\">\n    {{ activity }}\n  </md-option>\n</md-autocomplete>-->\n\n\n\n          <md-select required placeholder=\"Actor Type\" name=\"events2\" [ngModel]=\"actorType\" (ngModelChange)=\"onSelectMapType(event.eventid, 'actor', $event)\">\n            <md-option *ngFor=\"let actortype of events.actortype\" [value]=\"actortype\" (click)=\"select(actortype)\">\n              {{actortype}}\n            </md-option>\n          </md-select>\n        </div>\n        <div fxLayout=\"row\" fxFlex=\"25%\" fxLayoutAlign=\"center\">\n\n          <md-select required placeholder=\"Object Type\" name=\"events3\" [ngModel]=\"objType\" (ngModelChange)=\"onSelectMapType(event.eventid, 'object', $event)\">\n            <md-option *ngFor=\"let objecttype of this.events.objecttype\" [value]=\"objecttype\" (click)=\"select(objecttype)\">\n              {{objecttype}}\n            </md-option>\n          </md-select>\n\n          <!--<md-input-container>\n  <input mdInput placeholder=\"ObjectType\" [mdAutocomplete]=\"autoobject\" [formControl]=\"stateObject\">\n</md-input-container>\n\n<md-autocomplete #autoobject=\"mdAutocomplete\" [displayWith]=\"displayFunc2\">\n  <md-option *ngFor=\"let object of filteredObject | async\" [value]=\"object\">\n    {{ object }}\n  </md-option>\n</md-autocomplete>-->\n        </div>\n      </div>\n\n      <!--dropdownnnn-->\n\n\n      <div fxFlex=\"100\" fxLayoutAlign=\"end\">\n        <button md-raised-button color=\"primary\" class=\"bottom-button\" (click)=\"openDialog()\">Submit</button>\n        <!-- [routerLink]=\"/app/communityDashBoard\"routerLink=\"/app/communityDashBoard/:domain\"-->\n      </div>\n    </form>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../webapp/app/tool-config-page/tool-config-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_config_page_service__ = __webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolConfigPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogResultDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/map';
var ToolConfigPageComponent = (function () {
    function ToolConfigPageComponent(userinfoservice, config, router, dialog) {
        this.userinfoservice = userinfoservice;
        this.config = config;
        this.router = router;
        this.dialog = dialog;
        this.toolActions = [];
        this.toolEvents = [];
        this.data = [];
        this.flag = 0;
        this.selectedEvent = [];
        this.selectedEvent1 = [];
        //console.log(url);
        this.eventMappings = new Map();
    }
    ToolConfigPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("tool-config-page",this.domain1);
        this.userinfoservice.getUserDetail(function (userdetails) {
            // this.user = userdetails;
            _this.username = userdetails.username;
            _this.flag = 1;
        });
        this.toolid = this.router.snapshot.params['toolid'];
        this.domainName = this.router.snapshot.params['domain'];
        //getToolinfo
        this.config.getTools(this.router.snapshot.params['toolid']).subscribe(function (data) {
            _this.toolObj = data[0];
            console.log("Got tool data ", _this.toolObj);
        });
        //getToolActions
        console.log("toolactions", this.toolid);
        this.config.getToolActions(this.router.snapshot.params['toolid'])
            .subscribe(function (data) {
            _this.toolActions = data;
            console.log("actions", data);
        });
        //getToolEvents
        this.config.getToolEvents(this.router.snapshot.params['toolid'])
            .subscribe(function (data) {
            _this.toolEvents = data;
            console.log("events from getttoolllsssss", data);
        });
        //get communityinfo
        this.config.getEvents().subscribe(function (data) {
            _this.events = data;
            //  this.states = this.events.actortype;
            //  this.activitytype = this.events.activitytype;
            //  this.objecttype = this.events.objecttype;
            //   console.log("community event",data);
            console.log('my actor type------', _this.events.actortype);
            console.log('my activity type------', _this.events.activitytype);
            console.log('my object type------', _this.events.object);
        });
        // console.log('actortype*****', this.events.actortype);
    };
    ToolConfigPageComponent.prototype.getTooleventinfo = function (eventname) {
        console.log('inside get tool event info', eventname);
        var foundevent, flag = 0;
        this.toolEvents.forEach(function (event) {
            console.log('evvent is ', event);
            if (event.name === eventname) {
                console.log('found match', event);
                foundevent = event;
                flag = 1;
            }
            if (flag === 1) {
                return foundevent;
            }
        });
    };
    ToolConfigPageComponent.prototype.onSubmit = function (toolinfo) {
        // console.log("Mappings: ", JSON.stringify(Array.from(this.eventMappings.values())));
        var _this = this;
        var obj = [];
        //console.log("rerrrrre",toolinfo.toolurl);
        var mappedToolEventObj = {
            toolname: this.toolid,
            avatar: (this.toolObj.toolavatar || ''),
            toolurl: toolinfo.value.toolurl,
            // domain: this.domainName,
            username: this.username,
            purpose: (this.toolObj.purpose || ''),
            actions: ["actions"],
            events: Array.from(this.eventMappings.values())
        };
        //console.log("Mappings: ", mappedToolEventObj,JSON.stringify(Array.from(this.eventMappings.values())));
        console.log('final datra we are sending is ', JSON.stringify(mappedToolEventObj));
        //console.log('toolss eventsssssss',this.Events);
        this.config.postTools(this.domainName, this.toolid, mappedToolEventObj).subscribe(function (data) { return _this.openDialog(); });
        //(data) => console.log(this.data));
    };
    ToolConfigPageComponent.prototype.openDialog = function () {
        // console.log('my domain page', this.domainName);
        var dialogRef = this.dialog.open(DialogResultDialog);
    };
    ////check box
    ToolConfigPageComponent.prototype.toggle = function (eventId, eventName, eventDescription, $event) {
        this.eventMappings.set(eventId, { eventid: eventId, eventname: eventName, description: eventDescription, metadata: "" });
    };
    ToolConfigPageComponent.prototype.onSelectMapType = function (eventId, mappingType, $event) {
        // console.log("*** Selected event ", eventName, " | ", mappingType, " | ", $event);
        var eventData = this.eventMappings.get(eventId);
        eventData[mappingType] = $event;
        this.eventMappings.set(eventId, eventData);
    };
    ToolConfigPageComponent.prototype.select = function (coomunityEvent) {
        console.log("cevent based on community", coomunityEvent);
        // this.config.getEvents().subscribe(data => {
        //    this.events = data;
        //   console.log("community event from dropdown",data);
        // });
        //console.log(value);
        var value = [];
        this.events.communityactivityevent = coomunityEvent;
        console.log('this.event', this.events);
        this.selectedEvent1.push(this.events.communityactivityevent);
        console.log('over all obejct uis', this.selectedEvent1);
    };
    return ToolConfigPageComponent;
}());
ToolConfigPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-tool-config-page',
        template: __webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tool_config_page_service__["a" /* ToolConfigService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__tool_config_page_service__["a" /* ToolConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tool_config_page_service__["a" /* ToolConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */]) === "function" && _d || Object])
], ToolConfigPageComponent);

var DialogResultDialog = (function () {
    function DialogResultDialog(dialogRef, router) {
        this.dialogRef = dialogRef;
        this.router = router;
    }
    return DialogResultDialog;
}());
DialogResultDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'toolsPosted',
        template: __webpack_require__("../../../../../webapp/app/tool-config-page/toolsPosted.html"),
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], DialogResultDialog);

var _a, _b, _c, _d, _e, _f;
//    @Component({
//   selector: 'toolsPosted',
//   templateUrl: 'toolsPosted.html',
// })
// export class toolsPosted {
// constructor(private router: Router) { }
// } 
//# sourceMappingURL=tool-config-page.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-config-page/tool-config-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolConfigService = (function () {
    function ToolConfigService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    ToolConfigService.prototype.saveDomain = function (name) {
        this.domainName = name;
        console.log('saved domai is', this.domainName);
    };
    ToolConfigService.prototype.getDomain = function () {
        return this.domainName;
    };
    ToolConfigService.prototype.getTools = function (toolid) {
        return this.http
            .get("api/v1/toolmarketplace/tool/" + toolid)
            .map(function (response) { return response.json(); });
    };
    ToolConfigService.prototype.getToolActions = function (toolid) {
        return this.http
            .get("api/v1/toolmarketplace/actions/" + toolid)
            .map(function (response) { return response.json(); });
    };
    ToolConfigService.prototype.getToolEvents = function (toolid) {
        return this.http
            .get("api/v1/toolmarketplace/events/" + toolid)
            .map(function (response) { return response.json(); });
    };
    ToolConfigService.prototype.getEvents = function () {
        return this.http
            .get("api/v1/activityevents/")
            .map(function (response) { return response.json(); });
    };
    ToolConfigService.prototype.postTools = function (domain, toolid, data) {
        var _this = this;
        console.log('inside post tool');
        console.log("domainname", domain, "toolid", toolid);
        console.log("data", data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json;charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var body = JSON.stringify(data);
        var url = "/api/v1/communitytools/" + domain + "/" + toolid;
        console.log("i am inside seivce angular", domain);
        // constructor(private http: Http, public snackBar: MdSnackBar) { }
        // saveDomain(name){
        //   this.domainName=name;
        //   // console.log('saved domai is',this.domainName)
        // }
        // getDomain(){
        //   return this.domainName;
        // }
        // getTools(toolid) {
        //   return this.http
        //   .get(`api/v1/toolmarketplace/tool/${toolid}`)
        //   .map((response: Response) => response.json());
        // }
        // getToolActions(toolid){        
        //   return this.http
        //   .get(`api/v1/toolmarketplace/actions/${toolid}`)
        //   .map((response: Response) => response.json());
        // }
        // getToolEvents(toolid){
        //   return this.http
        //   .get(`api/v1/toolmarketplace/events/${toolid}`)
        //   .map((response: Response) => response.json())
        // }
        // getEvents(){
        //   return this.http
        //   .get(`api/v1/activityevents/`)
        //   .map((response:Response) => response.json())
        // }
        // postTools(domain,data) {
        //   const headers = new Headers({
        //     'Content-Type': 'application/json;charset=utf-8'
        //   });
        //   const options = new RequestOptions({
        //     headers: headers
        //   });
        //   const body = JSON.stringify(data);
        //   const url = `/api/v1/communitytools/${domain}`;
        //   console.log("i am inside seivce angular",domain);
        return this.http
            .post(url, body, options)
            .map(function (data) { return _this.data = data; });
    };
    return ToolConfigService;
}());
ToolConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], ToolConfigService);

var _a, _b;
//# sourceMappingURL=tool-config-page.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-config-page/toolsPosted.html":
/***/ (function(module, exports) {

module.exports = "<md-dialog-content>Tools Posted successsfully!!!!!!!!</md-dialog-content>"

/***/ }),

/***/ "../../../../../webapp/app/tool-market-place/tool-market-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".align{\n    margin-top:2%;\n}\n\n.material-icon{\n    font-size: 30px;\n    \n}\n\n.img{\n  height:100px;\n  width:100px;\n}\n\n\n/*.upper{\n    text-transform: uppercase;\n}*/\n\n/*h2 {\n    padding: 20px;\n    color: white;\n    background: #3E4FB2;\n    font-weight: 300;\n    text-align: center;\n    font-size: 18px;\n  font-family: 'Roboto', sans-serif;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/tool-market-place/tool-market-place.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayout=\"row\" class=\"align\">\n    <div fxFlex=\"\" fxLayoutAlign=\"end\">\n        <i class=\"material-icons\">search</i>\n        <md-input-container fxFlex=\"\">\n            <input mdInput #Inputval type=\"search\" placeholder=\"search\" [(ngModel)]=\"value\" (keyup.enter)=\"selectedValue(value)\">\n            <!--<md-icon class=\"material-icons\">search</md-icon>-->\n        </md-input-container>\n    </div>\n    <div fxFlex=\"\" fxLayoutAlign=\"center\" class=\"\">\n        <i class=\"material-icons\">tune</i>\n        <md-select placeholder=\"purpose\" [(ngModel)]=\"purpose\">\n            <md-option *ngFor=\"let val of this.tools\" [value]=\"val.purpose\" (click)=\"selectpurpose(purpose)\">{{ val.purpose }}</md-option>\n        </md-select>\n\n    </div>\n    <div fxFlex=\"\" fxLayoutAlign=\"start\">\n        <button md-raised-button color=\"primary\" class=\"\" routerLink=\"/app/addtool\">Register New Tool</button>\n    </div>\n</div>\n<div fxFlex=\"100%\" fxLayout=\"row\" fxLayoutWrap>\n    <div *ngIf = '!newTool'>\n    <h4> Tool not found..!!!</h4>\n    <span><md-icon>sad</md-icon></span>\n    </div>\n    <div fxFlex=\"20%\" *ngFor=\"let val of newTool\">\n        <md-card (click)=\"onSelect(val.toolid)\">\n            <md-card-title class=\"upper\">{{val.toolname}}</md-card-title>\n             <img md-card-avatar src={{val.toolavatar}} class=\"img\">\n            <!--<md-card-content>\n            <img md-card-image src={{val.toolavatar}}>\n            </md-card-content>-->\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/tool-market-place/tool-market-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_market_place_service__ = __webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolMarketPlaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolMarketPlaceComponent = (function () {
    function ToolMarketPlaceComponent(toolService, router, dialog) {
        this.toolService = toolService;
        this.router = router;
        this.dialog = dialog;
    }
    ToolMarketPlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolService.getTools().subscribe(function (data) {
            _this.tools = data;
            _this.newTool = data;
            // console.log('this.tools', this.tools);
        });
    };
    //searchValue;
    ToolMarketPlaceComponent.prototype.selectedValue = function (value1) {
        var _this = this;
        this.newTool = [];
        this.tools.forEach(function (data) {
            if (data.toolname.includes(value1)) {
                _this.newTool.push(data);
            }
        });
    };
    ToolMarketPlaceComponent.prototype.selectpurpose = function (value) {
        var _this = this;
        // console.log(value);
        //value="test";
        this.newTool = [];
        this.tools.forEach(function (data) {
            // console.log('this toolname',data.purpose);
            if (data.purpose === value) {
                //  console.log("purpose true", data);
                _this.newTool.push(data);
            }
        });
    };
    ToolMarketPlaceComponent.prototype.onSelect = function (toolid) {
        // console.log(toolid);
        this.router.navigate(["app/toolpage/" + toolid]);
    };
    return ToolMarketPlaceComponent;
}());
ToolMarketPlaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-tool-market-place',
        template: __webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/tool-market-place/tool-market-place.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tool_market_place_service__["a" /* ToolMarketService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tool_market_place_service__["a" /* ToolMarketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tool_market_place_service__["a" /* ToolMarketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */]) === "function" && _c || Object])
], ToolMarketPlaceComponent);

var _a, _b, _c;
//# sourceMappingURL=tool-market-place.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-market-place/tool-market-place.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolMarketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolMarketService = (function () {
    function ToolMarketService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    ToolMarketService.prototype.getTools = function () {
        return this.http
            .get('api/v1/toolmarketplace')
            .map(function (response) { return response.json(); });
    };
    return ToolMarketService;
}());
ToolMarketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], ToolMarketService);

var _a, _b;
//# sourceMappingURL=tool-market-place.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-page/IntegrateTool-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1> Integrate Tool  </h1>\n<div *ngIf=\"integrationFlag===0 && adminCommunities.length!=0\">\n<md-radio-group class=\"example-radio-group\" [(ngModel)]=\"domain\">\n  <md-radio-button class=\"example-radio-button\" *ngFor=\"let object of this.adminCommunities\"    [value]=\"object.domain\" >\n<img md-card-avatar src={{(object.avatar)}}>\n    {{object.domain}}\n  </md-radio-button>\n</md-radio-group>\n<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"15px\" fxLayoutAlign=\"end end\">\n          <!-- Cancel Button-->\n          <button md-raised-button [md-dialog-close]=\"true\">Cancel</button>\n          <!-- Submit button to Add the tool-->\n          <button md-raised-button color=\"primary\" (click)=\"integrateToolToCmmunity(domain)\" [md-dialog-close]=\"true\"  >Submit</button>\n        </div>\n</div>     \n<div *ngIf=\"integrationFlag===1 \">\n    <h3> Tool Integrated With Commities </h3>\n     <button md-raised-button color=\"primary\" [md-dialog-close]=\"true\">Close</button>\n</div>\n<div *ngIf=\"adminCommunities.length===0\"> \n\t     <p> Hi.. It seems you are not a member of Any Group .. please create a community to Intergatre a tool </p>\n\t\t  <button md-raised-button color=\"primary\" (click)=\"navigateToCC()\" [md-dialog-close]=\"true\">Create Community</button> \n</div>"

/***/ }),

/***/ "../../../../../webapp/app/tool-page/tool-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n\n  list-style-type: none;\n}\n\n.example-radio-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/tool-page/tool-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" fxLayout fxLayout.xs=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n\t<!--<div class=\"item item-1\" fxFlex=\"2%\"></div>\n\t<div class=\"item item-2\" fxFlex=\"2%\" fxFlexOrder=\"3\"></div>-->\n\t<div class=\"item item-3\" fxFlex class=\"form-div\"  *ngIf=\"flag===1\">\n     <md-card fxFlex fxLayout=\"column\">\n\t\t <div fxFlex=\"100%\" fxLayout=\"row\">\n\t\t <div fxFlex=\"25%\">\n       <img md-card-image  fxLayoutAlign=\"start\" class=\"img-placing\" src={{(toolinfo.toolavatar)}} alt=\"User\">\n\t   \n\t\t </div>\n     <div class=\"item item-3\" fxFlex=\"50%\" class=\"form-div\" *ngIf=\"flag===1\">\n       <ul> \n\t\t     <h3><li align=\"start\">{{toolinfo.toolname}} </li></h3>\n\t\t\t <h4><li align=\"start\"> {{toolinfo.toolid}}  </li></h4>\n\t\t\t <h4><li align=\"start\"> {{toolinfo.purpose}} </li></h4>\n\t\t\t<h5> <li align=\"start\"> {{toolinfo.tooldesc}} </li></h5>\n       </ul>\n       \n </div>\n\t\t </div>\n <hr>\n      <h3 fxLayoutAlign=\"start\">Tool Action</h3>\n      <hr>\n      <div *ngFor=\"let val of toolActions\" fxFlex=\"80%\" fxLayout.md=\"column\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutGap=\"40px\"\n        fxLayoutAlign=\"center\">\n        <!--<div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.toolid}}>\n          </md-input-container>\n        </div>-->\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.grantactions}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.name}}>\n          </md-input-container>\n        </div>\n        <div fxLayout.xs=\"row\">\n          <md-input-container class=\"example-full-width\">\n            <input name=\"\" mdInput placeholder=\"\" disabled value={{val.description}}>\n          </md-input-container>\n        </div>\n\n        <div fxFlex=\"10%\">\n\n        </div>\n        <div fxFlex=\"10%\">\n\n        </div>\n\n      </div>\n    <div fxLayout=\"row\" fxFlex=\"\" fxLayoutAlign=\"center\" fxLayoutGap=\"15px\" fxLayoutAlign=\"end end\">\n           <!--Cancel Button-->\n          <a md-raised-button routerLink=\"/app/home\">Cancel</a>\n          <!-- Submit button to Add the tool-->\n          <button md-raised-button color=\"primary\" (click)=\"integrateTool()\">Integrate</button>\n        </div>\n     </md-card>\n\t</div>\n\t\n </div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../webapp/app/tool-page/tool-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tool_page_service__ = __webpack_require__("../../../../../webapp/app/tool-page/tool-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tool_config_page_tool_config_page_service__ = __webpack_require__("../../../../../webapp/app/tool-config-page/tool-config-page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IntegrateTool; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ToolPageComponent = (function () {
    function ToolPageComponent(toolpageservice, router, activeroute, dialog) {
        this.toolpageservice = toolpageservice;
        this.router = router;
        this.activeroute = activeroute;
        this.dialog = dialog;
        this.flag = 0;
    }
    ToolPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolid = this.activeroute.snapshot.params['toolid'];
        //console.log("toolid",this.toolid);
        this.toolpageservice.getToolinfo(this.toolid).subscribe(function (result) {
            var body = result.json();
            // console.log('body is ',body);
            _this.toolinfo = body.data || body;
            console.log('tooinfo is :', _this.toolinfo);
            _this.toolinfo = _this.toolinfo[0];
            _this.flag = 1;
        });
    };
    ToolPageComponent.prototype.integrateTool = function () {
        // this.dialog.open(IntegrateTool,{
        //   data:this.toolid;
        //   });
        this.dialog.open(IntegrateTool, {
            data: this.toolid
        });
    };
    return ToolPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToolPageComponent.prototype, "toolid", void 0);
ToolPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calvin-tool-page',
        template: __webpack_require__("../../../../../webapp/app/tool-page/tool-page.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/tool-page/tool-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tool_page_service__["a" /* ToolPageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tool_page_service__["a" /* ToolPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tool_page_service__["a" /* ToolPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MdDialog */]) === "function" && _d || Object])
], ToolPageComponent);

var IntegrateTool = (function () {
    // constructor(
    //   private userservice: UserInfoService,
    //   private router: Router,
    //   @Inject(MD_DIALOG_DATA) public data: any, 
    //   public dialogRef: MdDialogRef<AddToolComponent>) {
    //   this.toolid=data;
    // ) { }
    function IntegrateTool(userservice, toolservice, router, data, dialogRef) {
        this.userservice = userservice;
        this.toolservice = toolservice;
        this.router = router;
        this.data = data;
        this.dialogRef = dialogRef;
        this.integrationFlag = 0;
        this.adminCommunities = [];
        this.toolid = data;
    }
    IntegrateTool.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserCommunity(function (result) {
            console.log('communities are', result);
            result.forEach(function (community) {
                console.log('get community avatar', community.avatar);
                if (community.roles === 'admin' || community.roles === 'owner') {
                    _this.adminCommunities.push({ domain: community.domain, avatar: community.avatar });
                }
            });
        });
        // console.log(' the users are admin ', this.adminCommunities);
    };
    IntegrateTool.prototype.integrateToolToCmmunity = function (domainname) {
        console.log('domain name is ', domainname);
        this.domain = domainname;
        console.log('inside', this.domain);
        this.toolservice.saveDomain(this.domain);
        this.router.navigate(["/app/toolconfig/" + this.domain + "/" + this.toolid]);
        // this.router.navigate([`/app/toolconfig/${this.domain}/${this.toolid}`]);
    };
    // navigateToCC(){
    //     this.router.navigate([`/app/toolconfig/${this.domain}/${this.toolid}`]);
    // }
    IntegrateTool.prototype.navigateToCC = function () {
        this.router.navigate(["/app/createCommunity"]);
    };
    return IntegrateTool;
}());
IntegrateTool = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'IntegrateTool-dialog',
        template: __webpack_require__("../../../../../webapp/app/tool-page/IntegrateTool-dialog.html"),
        styles: [__webpack_require__("../../../../../webapp/app/tool-page/tool-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */], __WEBPACK_IMPORTED_MODULE_5__tool_config_page_tool_config_page_service__["a" /* ToolConfigService */]]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_user_info_service__["a" /* UserInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tool_config_page_tool_config_page_service__["a" /* ToolConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tool_config_page_tool_config_page_service__["a" /* ToolConfigService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialogRef */]) === "function" && _h || Object])
], IntegrateTool);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=tool-page.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/tool-page/tool-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolPageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolPageService = (function () {
    function ToolPageService(http) {
        this.http = http;
    }
    ToolPageService.prototype.updateSpecificCommunity = function (Form, domain) {
        var url = "/api/v1/communities/communities/" + domain;
        return this.http.patch(url, Form).map(function () {
            return console.log('angular service after patch ', Form);
        });
    };
    ToolPageService.prototype.getToolinfo = function (toolid) {
        var url = "/api/v1/toolmarketplace/tool/" + toolid;
        return this.http.get(url).map(function (response) { return response; });
        //    return this.http.get(url).map((response: Response) => {
        //          response=response;
        //          console.log('inside response of service',response);
        //    });
    };
    ToolPageService.prototype.getToolActions = function (toolid) {
        return this.http
            .get("api/v1/toolmarketplace/actions/" + toolid)
            .map(function (response) { return response.json(); });
    };
    return ToolPageService;
}());
ToolPageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ToolPageService);

var _a;
//# sourceMappingURL=tool-page.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************\n \n888888888888 \n888888888888 \n88888 \n888 \n88888 \n888888888888 \n888888888888 \n \n\n*********************/\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" fxLayout=\"row\" fxLayoutGap=\"\">\n  <calvin-user-widgets fxFlex=\" 30%\" ></calvin-user-widgets>\n  <calvin-activity-page fxFlex=\"60%\"></calvin-activity-page>\n</div>\n"

/***/ }),

/***/ "../../../../../webapp/app/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDashboardComponent = (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.onscroll = function () {
        console.log('scrolled');
    };
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../webapp/app/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/user-dashboard/user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserDashboardComponent);

//# sourceMappingURL=user-dashboard.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/user-profile/tool-integration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolIntegrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolIntegrationService = (function () {
    function ToolIntegrationService(_http, snackBar) {
        this._http = _http;
        this.snackBar = snackBar;
        this.toolInfo = [];
    }
    ToolIntegrationService.prototype.getTool = function (toolName) {
        window.location.replace('/api/v1/toolauth/auth/' + toolName);
        // console.log('***inside component service***', toolName);
        //    return this._http
        //         .get('/api/v1/toolauth/auth/'+toolName) 
        //         .catch(err => {
        //         this.snackBar.open('server error..!!!', 'try again!', {
        //             duration: 3000
        //         });
        //         return Observable.throw(err); // observable needs to be returned or exception raised
        //     }).map(res => res.json());
    };
    return ToolIntegrationService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToolIntegrationService.prototype, "toolInfo", void 0);
ToolIntegrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSnackBar */]) === "function" && _b || Object])
], ToolIntegrationService);

var _a, _b;
//# sourceMappingURL=tool-integration.service.js.map

/***/ }),

/***/ "../../../../../webapp/app/user-profile/user-profile-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h4>Profile Updated Successfully...!</h4>\n<button md-raised-button md-dialog-close color=\"primary\" (click)=\"routeToProfile()\">OK</button>"

/***/ }),

/***/ "../../../../../webapp/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.img-placing\n{\nborder-radius: 50%;\nmargin-left: 10%;\n}\n.fixprofile{\n    margin-left: -30%;\n}\nmd-card-img{\n    margin-left: 1%;\n    margin-right: 100%;\n}\n/*Integrate tool button style  */\n\n.fixEventButton{\n     margin-left: -20%; \n    margin-top: 20px;\n}\n\n#customBtn {\n      display: inline-block;\n      background: white;\n      color: #444;\n      width: 190px;\n      border-radius: 5px;\n      border: thin solid #888;\n      box-shadow: 1px 1px 1px grey;\n      white-space: nowrap;\n    }\n#customBtn:hover {\n      cursor: pointer;\n    }\nspan.label {\n      font-family: serif;\n      font-weight: normal;\n    }\nspan.googleicon {\n      background: url(" + __webpack_require__("../../../../../webapp/assets/img/search.png") + ") transparent 5px 50% no-repeat;\n      display: inline-block;\n      vertical-align: middle;\n      width: 42px;\n      height: 42px;\n    }\nspan.discourseicon {\n      background: url('" + __webpack_require__("../../../../../webapp/assets/img/discourse .png") + "') transparent 5px 50% no-repeat;\n      display: inline-block;\n      vertical-align: middle;\n      width: 42px;\n      height: 42px;\n    }\nspan.githubicon {\n        background: url(" + __webpack_require__("../../../../../webapp/assets/img/github.png") + ") transparent 5px 50% no-repeat;\n      display: inline-block;\n      vertical-align: middle;\n      width: 42px;\n      height: 42px;\n    }\nspan.buttonText {\n      display: inline-block;\n      vertical-align: middle;\n      padding-left: 42px;\n      padding-right: 42px;\n      font-size: 14px;\n      font-weight: bold;\n      font-family: 'Roboto', sans-serif;\n    }\n.alignToolBtn {\n margin-top: 20px;\n}\n.integrateToolbtn {\n    margin-right: 420px;\n}\n.toolTitle {\n        margin-right: 320px;\n        font-size : 18px;\n        font-family: 'Roboto', sans-serif;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../webapp/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout fxLayout.xs=\"row\" fxLayoutAlign=\"center\">\n\t<div class=\"item item-1\" fxFlex=\"2%\"></div>\n\t<div class=\"item item-2\" fxFlex=\"2%\" fxFlexOrder=\"3\"></div>\n\t<div class=\"item item-3\" fxFlex class=\"form-div\" *ngIf=\"flag===1\">\n\t\t<md-card fxFlex=90%>\n\t\t\t<div fxFlex=\"100%\" fxLayoutAlign=\"center\">\n\t\t\t\t<md-card-content class=\"Head\">\n\t\t\t\t\t<markdown>\n\t\t\t\t\t\t<md-card-title>Profile</md-card-title>\n\t\t\t\t\t</markdown>\n\t\t\t\t</md-card-content>\n\t\t\t</div>\n\t\t\t<div fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" *ngIf=\"flag===1\">\n\t\t\t\t<div fxFlex=\"50%\" Align=\"start center\">\n\t\t\t\t\t<img md-card-image fxFlex=50% fxLayoutAlign=\"start\" class=\"img-placing\" src={{maximizepic(user.avatar)}} alt=\"User\">\n\t\t\t\t\t<div class=\"fixprofile\">\n\t\t\t\t\t\t<md-card-title>\n\t\t\t\t\t\t\t<markdown>{{user.name}}</markdown>\n\t\t\t\t\t\t</md-card-title>\n\t\t\t\t\t\t<md-card-subtitle>\n\t\t\t\t\t\t\t<h4>{{user.username}}</h4>\n\t\t\t\t\t\t</md-card-subtitle>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout.xs=\"row\" fxLayoutGap=\"0px\" fxLayoutGap.xs=\"0\" fxFlex=\"50%\">\n\t\t\t\t\t<div fxLayoutAlign=\"start\" fxFlex=\"100%\">\n\t\t\t\t\t\t<form class=\"placing\" fxFlex=\"100%\" [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile(profileForm)\">\n\t\t\t\t\t\t\t<div *ngFor=\"let data of profileArray\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<md-input-container fxLayoutAlign=\"start stretch\" fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<textarea mdInput placeholder=\"About me\" rows=\"5\" cols=\"100\" formControlName=\"aboutMe\" value={{data.aboutme}} style=\"text-transform: capitalize\"></textarea>\n\t\t\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<md-input-container fxLayoutAlign=\"start\" fxFlex=\"100%\" class=\"example-full-width\">\n\t\t\t\t\t\t\t\t\t\t<textarea mdInput placeholder=\"Location\" rows=\"1\" cols=\"100\" formControlName=\"location\" value={{data.location}} style=\"text-transform: capitalize\"></textarea>\n\t\t\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div fxLayoutAlign=\"start\" fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t\t<md-input-container>\n\t\t\t\t\t\t\t\t\t\t<textarea mdInput placeholder=\"InterestedFields\" rows=\"1\" cols=\"20\" [(ngModel)]=\"interest\" #resetText formControlName=\"interestField\"\n\t\t\t\t\t\t\t\t\t\t value={{data.interestedtopics}} style=\"text-transform: capitalize\"></textarea>\n\t\t\t\t\t\t\t\t\t\t<!--<md-hint>Tag is required</md-hint>-->\n\t\t\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t\t\t<div fxLayoutAlign=\"center center\">\n\t\t\t\t\t\t\t\t\t\t<a md-button (click)=\"addInterest(interest,resetText)\">Add</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<md-chip-list>\n\t\t\t\t\t\t\t\t\t<div ng-disabled=\"!interest.value\" *ngFor=\"let interest of addInterestArr\" ng-model=\"ctrl.vegObjs\" (click)=\"deselectchip(interest)\">\n\t\t\t\t\t\t\t\t\t\t<md-chip>{{interest}}\n\t\t\t\t\t\t\t\t\t\t</md-chip>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</md-chip-list>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<md-input-container fxLayoutAlign=\"start\" fxFlex=\"100%\" class=\"example-full-width\">\n\t\t\t\t\t\t\t\t\t\t<textarea mdInput placeholder=\"Mobile number\" rows=\"1\" cols=\"100\" formControlName=\"contact\" value={{data.contact}}></textarea>\n\t\t\t\t\t\t\t\t\t</md-input-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span fxLayout.md=\"row\" fxLayoutAlign=\"end end\" fxLayoutGap=\"10px\" fxLayoutGap.md=\"0\">\n\t\t\t\t\t\t\t\t\t<a md-raised-button routerLink=\"/app/Home\">Cancel</a>\n\t\t\t\t\t\t\t\t\t<button fxLayout.md=\"column\" fxFlex=\"10\" md-raised-button type=\"submit\"color=\"primary\" [disabled]=\"!profileForm.valid\" (click)=\"openDialog()\">Submit</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=\"10px\" class=\"alignToolBtn\">\n\t\t\t\t\t\t\t\t<span class=\"toolTitle\">Integrate with app</span>\n\t\t\t\t\t\t\t\t<div class=\"integrateToolbtn\">\n\t\t\t\t\t\t\t\t<span class=\"label\">Sign in with:</span>\n\t\t\t\t\t\t\t\t\t<div id=\"customBtn\" class=\"customGPlusSignIn\" (click)=\"integrateTool('calendar')\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"googleicon\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"buttonText\">Google</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"integrateToolbtn\">\n\t\t\t\t\t\t\t\t<span class=\"label\">Sign in with:</span>\n\t\t\t\t\t\t\t\t\t<!--<div id=\"customBtn\"  class=\"customGPlusSignIn\" (click)=\"integrateTool('discourse')\">-->\n\t\t\t\t\t\t\t\t\t<div id=\"customBtn\"  class=\"customGPlusSignIn\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"discourseicon\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"buttonText\">Discourse</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"integrateToolbtn\">\n\t\t\t\t\t\t\t\t<span class=\"label\">Sign in with:</span>\n\t\t\t\t\t\t\t\t\t<div id=\"customBtn\" class=\"customGPlusSignIn\" (click)=\"integrateTool('github')\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"githubicon\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"buttonText\">Github</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</md-card>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../webapp/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__ = __webpack_require__("../../../../../webapp/app/core/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_service__ = __webpack_require__("../../../../../webapp/app/user-profile/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_tool_integration_service__ = __webpack_require__("../../../../../webapp/app/user-profile/tool-integration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogResultExampleDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserProfileComponent = (function () {
    function UserProfileComponent(fb, userservice, profileService, dialog, toolInfoService) {
        this.fb = fb;
        this.userservice = userservice;
        this.profileService = profileService;
        this.dialog = dialog;
        this.toolInfoService = toolInfoService;
        this.flag = 0;
        this.addInterestArr = [];
        this.profileArray = [];
        this.createprofile();
    }
    UserProfileComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogResultExampleDialog, {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UserProfileComponent.prototype.createprofile = function () {
        this.profileForm = this.fb.group({
            aboutMe: [''],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[A-Za-z]{3,20}')],
            contact: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{10}')],
            interestField: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    };
    UserProfileComponent.prototype.addInterest = function (interest, resetText) {
        resetText.value = '';
        if (!this.addInterestArr.includes(interest)) {
            this.addInterestArr.push(interest);
            console.log(this.addInterestArr);
        }
    };
    // deselect chip value/remove tag value from an array
    UserProfileComponent.prototype.deselectchip = function (interest) {
        var interestValue = interest;
        this.addInterestArr = this.addInterestArr.filter(function (item) { return item !== interestValue; });
    };
    UserProfileComponent.prototype.updateProfile = function (profileForm) {
        var profileData = this.profileForm.value;
        var contact = profileData.contact;
        var loc = profileData.location;
        var about = profileData.aboutMe;
        var interest = profileData.interest = this.addInterestArr;
        var newProfileDetails = { contact: contact, loc: loc, about: about, interest: interest };
        this.profileService.updateUserProfile(newProfileDetails, this.username).subscribe(function (data) { return console.log('data patched'); }, function (error) { return console.log('try again later...!'); }, function () { return console.log('Updated Profile data', newProfileDetails); });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserDetail(function (userdetails) {
            _this.user = userdetails;
            _this.username = userdetails.username;
            _this.flag = 1;
        });
        this.profileService.getUserProfile(this.username).subscribe(function (res) {
            _this.profileArray = res;
        });
    };
    UserProfileComponent.prototype.maximizepic = function (imgsrc) {
        var x = imgsrc.substring(0, (imgsrc.length - 2)) + '300';
        return x;
    };
    UserProfileComponent.prototype.integrateTool = function (toolName) {
        this.toolInfoService.getTool(toolName);
        // .subscribe(
        // data => { this.toolInfoService.toolInfo = data;
        // }, error => //console.log(error),
        // () => console.log('finished')
        // );
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../webapp/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../webapp/app/user-profile/user-profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_service__["a" /* SidenavService */], __WEBPACK_IMPORTED_MODULE_6__user_profile_tool_integration_service__["a" /* ToolIntegrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_user_info_service__["a" /* UserInfoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_service__["a" /* SidenavService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__user_profile_tool_integration_service__["a" /* ToolIntegrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_profile_tool_integration_service__["a" /* ToolIntegrationService */]) === "function" && _e || Object])
], UserProfileComponent);

var DialogResultExampleDialog = (function () {
    function DialogResultExampleDialog(dialogRef, router) {
        this.dialogRef = dialogRef;
        this.router = router;
    }
    DialogResultExampleDialog.prototype.routeToProfile = function () {
        this.router.navigate(['/app/Home/']);
    };
    return DialogResultExampleDialog;
}());
DialogResultExampleDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-profile-dialog',
        template: __webpack_require__("../../../../../webapp/app/user-profile/user-profile-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialogRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _g || Object])
], DialogResultExampleDialog);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../webapp/app/user-profile/user-profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavService = (function () {
    function SidenavService(http) {
        this.http = http;
    }
    SidenavService.prototype.updateUserProfile = function (profiledata, emailAddrs) {
        return this.http.patch("api/v1/users/" + emailAddrs, profiledata).map(function () {
            return console.log('Updated Profile details', profiledata);
        });
    };
    SidenavService.prototype.getUserProfile = function (emailAddrs) {
        return this.http.get("api/v1/users/" + emailAddrs).map(function (res) { return res.json(); });
    };
    return SidenavService;
}());
SidenavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SidenavService);

var _a;
//# sourceMappingURL=user-profile.service.js.map

/***/ }),

/***/ "../../../../../webapp/assets/img/discourse .png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAIAAAAH5iiXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QcSEgwxuzUZqwAABVdJREFUSMedlmtsVFUQx/9zzrl7d/d2290WWhELASpRKcYKtOAjbVQexgf4+IiBxA9IYgQao5L4NlHDB+M3oxE1PqImKBolGuRtFJMiaiJVsEUqobDbNu1ud7u7955zxg9LisK2W52cDzfn5s5v5j+TO0PMjEpmrRVCAPB9/+CBAwf3H+ju7h4cHDTGRCKRxsbG1ra2FStXzmuaB8AYI6Ws6JMqgq2xQgpr7fvvvffu2+8cP348CLSjpJQSIMtWa20t19Ymlq9Y8cjmTfOamsYD/f/gUvgne3s7N20+dOiQF416kSgT+WDDLACHoEAWFOggk8kkEomnn33mgXXrKrInA5c+Pvrj0XVr16ZSA3WJRNGYUbYeMN1SlKkAGhA8KhAldi0gZRAE6ZGRx7Y+/vjWrZNrPiG4RO3t6bn7jrvS6XRNlTcS6GrC/YG4jWSjoyPK98me1Xwgjw+NSkWcagnLEEKkUqmXt23bsPGhSdjlwczMzFrre1evOdLVVRuPDwfBtaAXfbUgzqYhx/MS8pq58vL6kJQ4lz7V1ffEt6f35mXCC7FlEPL5/OdffrFo8eKJNC8PLkX61pvbH+3svKy+IRME84HtvjP9iqB4NaKrV7gdN4u6WkAwyMAqnfePdG95/rPPu/ojsYggymQyS5ct++SznQTQFMGlm0KhsPyWW//q63PdsIbdXlBtM4zf6sQe3qCaF0KPsdZgBkAgTaTCsdTwmRvXvmaOnBFeSJJIp9Mf79jR3tFeVvAysVhrieiHw4d7/ujxwpFRth2alkRRaNKxDetV80IeG4ExJARJSVJCCiWgc+n6RF37s/emZs1xikUIYY3d+emnEzVXGXAp48PfH9Y6ICIm3GSlUzMWXr5UtVzPY2lSCqCLlIMSrLF6tpe77xYrqqwJ3HD4px+P+r4vpbxU1zLgUi+c7O2VUhqwy2gE0KBC7TeANQSVQJc6IqImAl1Vk517HRVyjusmk+eSyeR4MhXARAQgm80KEmAmkORAzKwVM2dAByBi4NJT0kqRQKhQmLuQtCYhikU/l81OVWrwP1+TTxiwVlV5CLts7Xi29O/DAAuRLORZG65puFC3qdf4IjOEIxZi1ACWQOPUi8wyk5B7B87A1iltAcvMIdf1PO//gC3YY96tRPfxYTk0zEqVzcAySylz+fz2Uz1Qi2T/CQgZBEF9fX1DQ8N4+f4DmIEQoz8kD/VlcLLfSgXL/I9WYUCzZUA40c5f9p4uzHays8O/70U4Vhwba2lpcV3XGPOfwQAsUaQQXDl/mr16jvGLTIJIWoZmNswEKCcsncjWo9+8ceIkpj8V2/eBM9jHjkuE1fesmcitmpxKQCCoJl+46s7FomZ6KMhCaV/7IRmGcAHyg+K3Z3tePPb9vqTA5a9Hu35NfPUKquqy6fSS1tb2jg5mLjsnKoGJCsVg0azametv7TX+16dHd54aO5UT82cMTRPDI4XMb5lcT9ZF6D5Rt6pqz65pHz1BpBhg5ieffkopNdGAqgBmQBmbrY098Or+g8cGhwYCd7ToMO1uucFcswDxOJy460cif/0Z/e7B6LH9CMeEG0qe7X/uhReWLls2yVisBGYOu6q7N+X/8kVVSMySYAEG1+76mfdUm2jCClB+ROSGIB2qrtNBMHTu3KYtWzZt2Tz5IlAOTBceiMgCriMjdTHDHOD870W7RGwwlhQApIPqemN0ZnDQ86IvbXt5w8aNFVefcmBmEFlrzXmzAABTLkRhLeti3pjRWKx6zT1rNnd2LmheMJVlr2zGBMCr8uLxeFUsZs+Dy1s0Gm2c1dja1rby9lXNzc2Y8nr7N6ITzGAYCYOLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA3LTE4VDE4OjEyOjQ5KzAyOjAwGIcAjAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNy0xOFQxODoxMjo0OSswMjowMGnauDAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../webapp/assets/img/github.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QcSEA01psc4nQAABQxJREFUSMfdll1s01YUx31du2mTYpwP56OZKaWsjJYU2op0FIkuhbZTQRPjjfWBonZd2RgaomPSOgmVPQ32BJMY8AA0LyDCxwtjKkWICVYlRFCVFNa1dKAoq6Mk1pJ+OCT2vXswMkmbZtkXD/yfLN/j87s+95xzD0AIYf+/8FfAeO0wRC5GkiQFg8HfJif9fn80GgUA0DTNsmzpihUMw+Tl5f1bTDweHxoaunrlisftnuK4uCBACDEMw3G8sLCw2GrdsGHD9u3b19vtKpUqix+QJdNGfb5jx47dGBiIxWI4jgMAAADKKkIIIQQhpGm6tbV177595eXlfw8DIfzh2rWvDx+enJyUAVl2KsNWrVp1qK9vy5YtGY0zYy65XF/19obDYQzDAAA4ni1TIIQYQgjDzGbzN0eOtG7dmhPmzp07H3d3cxxHEERFRYUgCE+fPk0kEgAA+WAwDAMYBnAcIaRSqUpLSwmS/OXxY1EUS0pKTp4+XVtb+xeYUCjUsXv30NAQjuNmi+X8+fM6vf7GwICzv39mdtZaXEwtXYoh9Ec0+nsgoNVqd7W3Oxob/X5/286dPM9DCBs3bz556hRN0/Mjm6rvT5wwMYyJYQw6naOhged5+X0oFApyXDwelyRJFEVBELipqUg4LK9yHPd2XR2j15sYxmI2O53OeW7Tgh6JRC65XJIkyUcyJwjP43F5yWAwGE0mlUqF43heXl5BQYHJbNbp9fKqIAhxQZCfk4nExQsXYrFYquc0zPCDB2NjY3K5IYSsxcUFhYVYDlKr1RaLRY4/juM+n290dHRRjNfrnZubkxkajebDrq75IV5ERqOxo7NTrlAAwPT09IP79zNjIIRPnjyRd4QQYlm2ZkHCZJG9rs5iscipCCGcGB/PjEkkEjzPK3lB07RGo8kds2TJEoqilLyN8LwoihkwCCFJkpQaTiQSci7kKFEUk8mk8rkkiqml8hJDEIRGo5HXAAChcFj5uVwUDoUiPK9gNEVFqZ37JYYkyTes1hdvcTwYDHq93twxbrebj0RkDMAwlmVTW1RaptmqqgjixdWQeP783JkzU1NTuTCePXvmdDqVIOerVDabLdUgDbPebjeZTBBCkiTVarXb7f7i4MFHjx4prWyhJEkaHh7+vKfn4ciIvH0IodVqra6uTjVLu9bKysocDkd/f391TU1bW9uVy5d/vH794ciIw+FYb7fXb9xYUlKiGE9MTPx8967H4/np9m2O45QQIYSampvZZcvStjOv+Xjv3atcvdpiMn26d+/NwcHNjY06mqYp6s2yMo/bnWp569atFcuX67Vao8Egt0ETwzB6ffXatT6fL1tPwzCspra2o7MTQnjJ5QoEAj09PS0tLevWrXt/x441a9akHaTNxrJs6pWKECJJ8qPu7srKyvnBRQsUjUY/2bNHr9W+s2mTx+Px+/2/jo0FAgEIYarZ9PT0uy0tBp1O/g+jwWA0GHoOHJidnV3oM8PIQVHUob4+hGGuixc7Ozrq6+u1Wm2x1drV1ZWfn5+6P+UZQkgQxAdtbV/29qrV6gypghZRNBr99ujRt8rLaYqiiore27ZNmJtLNYjFYi1NTTqaNuh0tsrK744fn5mZWczbogMURVGf7d+/qaHh3NmzNwcHNUVFIH0ikGcoi8XS1Ny8q729qqoqy8iQbYCSlUwmx8fHAYatrqiYFwafz5dPkmUrVypF/c8x/4ler1H9FWH+BKY78NkzbJ/VAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA3LTE4VDE2OjEzOjUzKzAyOjAwZXk40gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNy0xOFQxNjoxMzo1MyswMjowMBQkgG4AAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../webapp/assets/img/search.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQOSURBVFiFvZdbTFxlFIW/fc4AA8jVGGwlQsMQoEUrCTZUW6ORay9EILWNpok+SOKDjbZRmthETeMz1Zroi40xMVW0qZRLaSnipZq21igBCqU2Ek0rpQ9cLIVh5pztA1hhOmdmwI7r4Tyctc5e6/+T8/97i6oSEYqLYybSXNWirEXUg+JB8KDEAqPANYTzYhmdPrd+nd5+ZjKSshIuwPgTRammGVtvwy6B+yJLyw0VfTslZqyR9kve5QV4S4zJ7x5+A2Q3cFeExoG4LCJ7kjrPNC8pwFhZcYqprsOgVcs0DkRHspVQQ3f3TCDhCnwxWV6Sa9quY4jm3yHzCdR+N5g5BOzAVGlJhqXai3DPHTIfEtuuTvrqx4tOgkU7YIkegvDmCldEGUR0EBUbEQ9oPrBqgeyEbc3uSO3+eTxUrVsBJsrWvSgqm0KJBbpR3Zfcde6HYPx42frHDbX3AEPJ6Vmv0dRkhVuMqCregxk53pasHmxJdNDdFNUdSV3nWsIVXCoMADN/tD5u+8VEifcHNVdlazTMAUSbMP1p/A6s1PE4vEdysa8nLBBQm9R19mg0zAEM627KgZUAkurFvXMAM28MAIVvo2kOYKhF5aI3sRZxNZdwrRu5JiIN0TQHEF8nzUB1EG7EVaorwhWoOTDzqahsX6b/9waQ7UAOLLNo5BDuNYCsoJxwIer+Ohcg+HWoc79oNKFgG8CwA/lgtAMAVx0DAIX/RwCXU4B+Oznp1c4NxSfLTp8PVUHQd8D40llhrwXZG/xb+sXfyWaF1oVEu72Cfb5Cexaje3BzR2m4ZYRCbaP3NPBoME7FKDLMMTqAKwA2QqM/lwbfA/gQQ9AnC1orti7XvK5x9hknc0HOHn055heDbWoBH93AxS7fQxyyVgUqP1ndXvHYUs2fapzZqNgHnXhb7Q9g/jacst0f1s4+cv0bO2gvkqTK8YL2ii2RmtcdmNlpIKdA0h0k4zHi/uxWgJTy6d/+VPf+EDUTUFoK2ipOFrRWrXcSrWmr3FjYUvfFlPvCx0CsczlpbHqFaQjoCQvaKptBg90LgRhGGEJ1aK4l0xyQ1cy3ZKImGaP1pE0EaapVDx/d7X5W5w/ART2h6eJ5y08PkBkmQDZKNkg5Asw9/vUQi5GM9/G6h8kYrUfU/Ifqdv3lfk4XnL63zQWFxyo9lmk3z6/oPyNheg2ZV/di+lP6XL64DU0NTCzkbzvv+6o7flUrvkTAcZpZCm7G9/NH5ps/SYxdFWgOIUYzQSSvvfx1URpY5mgmcFlFGgY2dRxx1IQbTnNOlaXEeo0XgJeA+yMxVhgX1f3mdOp7fduaZkOGjHQ8l8+fNvMSJ7eIrUVArggeBQ+KH+gD+sTQXkT7Ykyjt6f8xFQkdf8GbfON88yeJlUAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../webapp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../webapp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../webapp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../webapp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function (success) { return console.log('Bootstrap success'); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../webapp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map