(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host >>>table {\r\n  width: 100%;\r\n}\r\n:host >>> tr {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n:host >>> .mat-table .mat-row:hover {\r\n  background: rgba(0, 0, 0, 0.04);\r\n}\r\n:host >>> button:hover {\r\n  background-color: #d4d8db;\r\n}\r\n:host >>> .before-table {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n:host >>> .mat-cell {\r\n  justify-content: flex-end;\r\n}\r\n:host >>> .modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n:host >>> .mat-header-cell {\r\n  justify-content: flex-end;\r\n}\r\n.hideItem {\r\n  display: none !important;\r\n}\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /*position: absolute;*/\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\nh1.example-app-name {\r\n  margin-left: 8px;\r\n}\r\n.example-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  flex: 1;\r\n}\r\n.example-is-mobile .example-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  flex: 1 0 auto;\r\n}\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  top: 64px !important;\r\n\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n@media(max-width: 599px) {\r\n  #container {\r\n    top: 56px !important;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"white\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">{{drawer.opened ? 'close' : 'menu'}}</mat-icon>\r\n    </button>\r\n    <span>Course Work DB</span>\r\n    <span class=\"spacer\"></span>\r\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"sidenavright.toggle()\" color=\"white\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">{{sidenavright.opened ? 'close' : 'menu'}}</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container id=\"container\" fullscreen >\r\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\" [opened]=\"false\">\r\n    <mat-nav-list>\r\n      <a mat-list-item *ngFor=\"let item of items\" [routerLink]=\"item.path\"> {{item.title}} </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav #sidenavright position=\"end\" mode=\"side\" opened [opened]=\"false\">\r\n    <mat-nav-list>\r\n      <a mat-list-item *ngFor=\"let item of queries\" [routerLink]=\"item.path\"> {{item.title}} </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.queryFlag = false;
        this.items = [
            // {title: 'Користувачі', path: '/user', rols: ['admin']},
            { title: 'Car Type', path: '/category', rols: ['admin', 'manager'] },
            { title: 'Car Model', path: '/marka', rols: ['admin', 'manager'] },
            { title: 'Drivers', path: '/drivers', rols: ['admin', 'driver'] },
            { title: 'Autos', path: '/auto', rols: ['admin', 'driver'] },
            { title: 'Brigade', path: '/brigada', rols: ['admin', 'brigadir'] },
            { title: 'Brigadier', path: '/brigadir', rols: ['admin', 'brigadir'] },
            { title: 'Groups', path: '/group', rols: ['admin', 'brigadir'] },
            { title: 'Personal Type', path: '/categoryPersonal', rols: ['admin', 'brigadir'] },
            { title: 'Personals', path: '/personal', rols: ['admin', 'brigadir'] },
            { title: 'Hard Routes', path: '/hardRoute', rols: ['admin', 'brigadir'] },
            { title: 'Routes', path: '/route', rols: ['admin', 'brigadir'] },
            { title: 'Infrastructs', path: '/infrastruct', rols: ['admin', 'brigadir'] },
            { title: 'Streets', path: '/street', rols: ['admin', 'brigadir'] },
            { title: 'Problems', path: '/problem', rols: ['admin', 'brigadir'] },
            { title: 'Repairs', path: '/repair', rols: ['admin', 'brigadir'] },
            { title: 'Sale/Buy', path: '/saleBuy', rols: ['admin', 'brigadir'] },
        ];
        this.queries = [
            { title: 'Query_1', path: '/query1', rols: ['admin'] },
            { title: 'Query_2', path: '/query2', rols: ['admin'] },
            { title: 'Query_3', path: '/query3', rols: ['admin'] },
            { title: 'Query_4', path: '/query4', rols: ['admin'] },
            { title: 'Query_6', path: '/query6', rols: ['admin'] },
            { title: 'Query_7', path: '/query7', rols: ['admin'] },
            { title: 'Query_8', path: '/query8', rols: ['admin'] },
            { title: 'Query_9', path: '/query9', rols: ['admin'] },
            { title: 'Query_10', path: '/query10', rols: ['admin'] },
            { title: 'Query_11', path: '/query11', rols: ['admin'] },
            { title: 'Query_12', path: '/query12', rols: ['admin'] },
            { title: 'Query_13', path: '/query13', rols: ['admin'] },
            { title: 'Query_14', path: '/query14', rols: ['admin'] },
        ];
        console.log(this.router.url);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _page_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/user/user.component */ "./src/app/page/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialogs_edit_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/edit/edit-user/edit-user.component */ "./src/app/dialogs/edit/edit-user/edit-user.component.ts");
/* harmony import */ var _page_auto_auto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/auto/auto.component */ "./src/app/page/auto/auto.component.ts");
/* harmony import */ var _page_brigada_brigada_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/brigada/brigada.component */ "./src/app/page/brigada/brigada.component.ts");
/* harmony import */ var _page_brigadir_brigadir_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/brigadir/brigadir.component */ "./src/app/page/brigadir/brigadir.component.ts");
/* harmony import */ var _page_category_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/category/category.component */ "./src/app/page/category/category.component.ts");
/* harmony import */ var _page_category_personal_category_personal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/category-personal/category-personal.component */ "./src/app/page/category-personal/category-personal.component.ts");
/* harmony import */ var _page_group_group_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page/group/group.component */ "./src/app/page/group/group.component.ts");
/* harmony import */ var _page_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/drivers/drivers.component */ "./src/app/page/drivers/drivers.component.ts");
/* harmony import */ var _page_hard_route_hard_route_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/hard-route/hard-route.component */ "./src/app/page/hard-route/hard-route.component.ts");
/* harmony import */ var _page_infrastruct_infrastruct_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/infrastruct/infrastruct.component */ "./src/app/page/infrastruct/infrastruct.component.ts");
/* harmony import */ var _page_marka_marka_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/marka/marka.component */ "./src/app/page/marka/marka.component.ts");
/* harmony import */ var _page_prop_prop_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page/prop/prop.component */ "./src/app/page/prop/prop.component.ts");
/* harmony import */ var _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./page/personal/personal.component */ "./src/app/page/personal/personal.component.ts");
/* harmony import */ var _page_problem_problem_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page/problem/problem.component */ "./src/app/page/problem/problem.component.ts");
/* harmony import */ var _page_repair_repair_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page/repair/repair.component */ "./src/app/page/repair/repair.component.ts");
/* harmony import */ var _page_route_route_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./page/route/route.component */ "./src/app/page/route/route.component.ts");
/* harmony import */ var _page_sale_buy_sale_buy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page/sale-buy/sale-buy.component */ "./src/app/page/sale-buy/sale-buy.component.ts");
/* harmony import */ var _page_street_street_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./page/street/street.component */ "./src/app/page/street/street.component.ts");
/* harmony import */ var _dialogs_edit_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialogs/edit/edit-category/edit-category.component */ "./src/app/dialogs/edit/edit-category/edit-category.component.ts");
/* harmony import */ var _dialogs_add_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialogs/add/add-user/add-user.component */ "./src/app/dialogs/add/add-user/add-user.component.ts");
/* harmony import */ var _dialogs_add_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dialogs/add/add-driver/add-driver.component */ "./src/app/dialogs/add/add-driver/add-driver.component.ts");
/* harmony import */ var _dialogs_edit_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dialogs/edit/edit-driver/edit-driver.component */ "./src/app/dialogs/edit/edit-driver/edit-driver.component.ts");
/* harmony import */ var _dialogs_add_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dialogs/add/add-category/add-category.component */ "./src/app/dialogs/add/add-category/add-category.component.ts");
/* harmony import */ var _dialogs_add_add_marka_add_marka_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dialogs/add/add-marka/add-marka.component */ "./src/app/dialogs/add/add-marka/add-marka.component.ts");
/* harmony import */ var _dialogs_edit_edit_marka_edit_marka_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dialogs/edit/edit-marka/edit-marka.component */ "./src/app/dialogs/edit/edit-marka/edit-marka.component.ts");
/* harmony import */ var _dialogs_add_add_auto_add_auto_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dialogs/add/add-auto/add-auto.component */ "./src/app/dialogs/add/add-auto/add-auto.component.ts");
/* harmony import */ var _dialogs_edit_edit_auto_edit_auto_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dialogs/edit/edit-auto/edit-auto.component */ "./src/app/dialogs/edit/edit-auto/edit-auto.component.ts");
/* harmony import */ var _dialogs_add_add_brigada_add_brigada_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dialogs/add/add-brigada/add-brigada.component */ "./src/app/dialogs/add/add-brigada/add-brigada.component.ts");
/* harmony import */ var _dialogs_edit_edit_brigada_edit_brigada_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dialogs/edit/edit-brigada/edit-brigada.component */ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.ts");
/* harmony import */ var _dialogs_add_add_brigadir_add_brigadir_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dialogs/add/add-brigadir/add-brigadir.component */ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.ts");
/* harmony import */ var _dialogs_edit_edit_brigadir_edit_brigadir_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dialogs/edit/edit-brigadir/edit-brigadir.component */ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.ts");
/* harmony import */ var _dialogs_add_add_category_personal_add_category_personal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dialogs/add/add-category-personal/add-category-personal.component */ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.ts");
/* harmony import */ var _dialogs_edit_edit_category_personal_edit_category_personal_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dialogs/edit/edit-category-personal/edit-category-personal.component */ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.ts");
/* harmony import */ var _dialogs_add_add_sale_buy_add_sale_buy_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dialogs/add/add-sale-buy/add-sale-buy.component */ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.ts");
/* harmony import */ var _dialogs_edit_edit_sale_buy_edit_sale_buy_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dialogs/edit/edit-sale-buy/edit-sale-buy.component */ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialogs_add_add_har_route_add_har_route_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dialogs/add/add-har-route/add-har-route.component */ "./src/app/dialogs/add/add-har-route/add-har-route.component.ts");
/* harmony import */ var _dialogs_edit_edit_hard_route_edit_hard_route_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dialogs/edit/edit-hard-route/edit-hard-route.component */ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.ts");
/* harmony import */ var _dialogs_add_add_infrastruct_add_infrastruct_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./dialogs/add/add-infrastruct/add-infrastruct.component */ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.ts");
/* harmony import */ var _dialogs_edit_edit_infrastruct_edit_infrastruct_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./dialogs/edit/edit-infrastruct/edit-infrastruct.component */ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.ts");
/* harmony import */ var _dialogs_add_add_personal_add_personal_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./dialogs/add/add-personal/add-personal.component */ "./src/app/dialogs/add/add-personal/add-personal.component.ts");
/* harmony import */ var _dialogs_edit_edit_personal_edit_personal_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./dialogs/edit/edit-personal/edit-personal.component */ "./src/app/dialogs/edit/edit-personal/edit-personal.component.ts");
/* harmony import */ var _dialogs_add_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./dialogs/add/add-repair/add-repair.component */ "./src/app/dialogs/add/add-repair/add-repair.component.ts");
/* harmony import */ var _dialogs_edit_edit_repair_edit_repair_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./dialogs/edit/edit-repair/edit-repair.component */ "./src/app/dialogs/edit/edit-repair/edit-repair.component.ts");
/* harmony import */ var _dialogs_edit_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./dialogs/edit/edit-problem/edit-problem.component */ "./src/app/dialogs/edit/edit-problem/edit-problem.component.ts");
/* harmony import */ var _dialogs_add_add_problem_add_problem_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./dialogs/add/add-problem/add-problem.component */ "./src/app/dialogs/add/add-problem/add-problem.component.ts");
/* harmony import */ var _dialogs_add_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./dialogs/add/add-group/add-group.component */ "./src/app/dialogs/add/add-group/add-group.component.ts");
/* harmony import */ var _dialogs_edit_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./dialogs/edit/edit-group/edit-group.component */ "./src/app/dialogs/edit/edit-group/edit-group.component.ts");
/* harmony import */ var _dialogs_edit_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./dialogs/edit/edit-street/edit-street.component */ "./src/app/dialogs/edit/edit-street/edit-street.component.ts");
/* harmony import */ var _dialogs_add_add_street_add_street_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./dialogs/add/add-street/add-street.component */ "./src/app/dialogs/add/add-street/add-street.component.ts");
/* harmony import */ var _dialogs_add_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./dialogs/add/add-route/add-route.component */ "./src/app/dialogs/add/add-route/add-route.component.ts");
/* harmony import */ var _dialogs_edit_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./dialogs/edit/edit-route/edit-route.component */ "./src/app/dialogs/edit/edit-route/edit-route.component.ts");
/* harmony import */ var _dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./dialogs/dialogs-street/dialogs-street.component */ "./src/app/dialogs/dialogs-street/dialogs-street.component.ts");
/* harmony import */ var _page_api_table_api_table_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./page/api-table/api-table.component */ "./src/app/page/api-table/api-table.component.ts");
/* harmony import */ var _dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./dialogs/dialogs-route/dialogs-route.component */ "./src/app/dialogs/dialogs-route/dialogs-route.component.ts");
/* harmony import */ var _query_query1_query1_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./query/query1/query1.component */ "./src/app/query/query1/query1.component.ts");
/* harmony import */ var _query_query2_query2_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./query/query2/query2.component */ "./src/app/query/query2/query2.component.ts");
/* harmony import */ var _query_query2_q2d_q2d_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./query/query2/q2d/q2d.component */ "./src/app/query/query2/q2d/q2d.component.ts");
/* harmony import */ var _query_query3_query3_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./query/query3/query3.component */ "./src/app/query/query3/query3.component.ts");
/* harmony import */ var _query_query10_query10_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./query/query10/query10.component */ "./src/app/query/query10/query10.component.ts");
/* harmony import */ var _query_query10_q10d_q10d_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./query/query10/q10d/q10d.component */ "./src/app/query/query10/q10d/q10d.component.ts");
/* harmony import */ var _query_query4_query4_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./query/query4/query4.component */ "./src/app/query/query4/query4.component.ts");
/* harmony import */ var _query_query6_query6_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./query/query6/query6.component */ "./src/app/query/query6/query6.component.ts");
/* harmony import */ var _query_query6_q6d_q6d_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./query/query6/q6d/q6d.component */ "./src/app/query/query6/q6d/q6d.component.ts");
/* harmony import */ var _query_query7_query7_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./query/query7/query7.component */ "./src/app/query/query7/query7.component.ts");
/* harmony import */ var _query_query8_query8_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./query/query8/query8.component */ "./src/app/query/query8/query8.component.ts");
/* harmony import */ var _query_query8_q8d_q8d_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./query/query8/q8d/q8d.component */ "./src/app/query/query8/q8d/q8d.component.ts");
/* harmony import */ var _query_query9_query9_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./query/query9/query9.component */ "./src/app/query/query9/query9.component.ts");
/* harmony import */ var _query_query11_query11_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./query/query11/query11.component */ "./src/app/query/query11/query11.component.ts");
/* harmony import */ var _query_query12_query12_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./query/query12/query12.component */ "./src/app/query/query12/query12.component.ts");
/* harmony import */ var _query_query13_query13_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./query/query13/query13.component */ "./src/app/query/query13/query13.component.ts");
/* harmony import */ var _query_query14_query14_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./query/query14/query14.component */ "./src/app/query/query14/query14.component.ts");
/* harmony import */ var _query_query11_q11d_q11d_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./query/query11/q11d/q11d.component */ "./src/app/query/query11/q11d/q11d.component.ts");
/* harmony import */ var _query_query12_q12d_q12d_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./query/query12/q12d/q12d.component */ "./src/app/query/query12/q12d/q12d.component.ts");
/* harmony import */ var _query_query13_q13d_q13d_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./query/query13/q13d/q13d.component */ "./src/app/query/query13/q13d/q13d.component.ts");
/* harmony import */ var _query_query14_q14d_q14d_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./query/query14/q14d/q14d.component */ "./src/app/query/query14/q14d/q14d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































































var appRoutes = [
    { path: '', component: _page_auto_auto_component__WEBPACK_IMPORTED_MODULE_12__["AutoComponent"], data: { title: 'Auto' } },
    { path: 'auto', component: _page_auto_auto_component__WEBPACK_IMPORTED_MODULE_12__["AutoComponent"] },
    { path: 'brigada', component: _page_brigada_brigada_component__WEBPACK_IMPORTED_MODULE_13__["BrigadaComponent"] },
    { path: 'brigadir', component: _page_brigadir_brigadir_component__WEBPACK_IMPORTED_MODULE_14__["BrigadirComponent"] },
    { path: 'category', component: _page_category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"] },
    { path: 'categoryPersonal', component: _page_category_personal_category_personal_component__WEBPACK_IMPORTED_MODULE_16__["CategoryPersonalComponent"] },
    { path: 'drivers', component: _page_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_18__["DriversComponent"] },
    { path: 'group', component: _page_group_group_component__WEBPACK_IMPORTED_MODULE_17__["GroupComponent"] },
    { path: 'hardRoute', component: _page_hard_route_hard_route_component__WEBPACK_IMPORTED_MODULE_19__["HardRouteComponent"] },
    { path: 'infrastruct', component: _page_infrastruct_infrastruct_component__WEBPACK_IMPORTED_MODULE_20__["InfrastructComponent"] },
    { path: 'marka', component: _page_marka_marka_component__WEBPACK_IMPORTED_MODULE_21__["MarkaComponent"] },
    { path: 'prop', component: _page_prop_prop_component__WEBPACK_IMPORTED_MODULE_22__["PropComponent"] },
    { path: 'personal', component: _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_23__["PersonalComponent"] },
    { path: 'problem', component: _page_problem_problem_component__WEBPACK_IMPORTED_MODULE_24__["ProblemComponent"] },
    { path: 'repair', component: _page_repair_repair_component__WEBPACK_IMPORTED_MODULE_25__["RepairComponent"] },
    { path: 'route', component: _page_route_route_component__WEBPACK_IMPORTED_MODULE_26__["RouteComponent"] },
    { path: 'saleBuy', component: _page_sale_buy_sale_buy_component__WEBPACK_IMPORTED_MODULE_27__["SaleBuyComponent"] },
    { path: 'street', component: _page_street_street_component__WEBPACK_IMPORTED_MODULE_28__["StreetComponent"] },
    //QUERY
    { path: 'query1', component: _query_query1_query1_component__WEBPACK_IMPORTED_MODULE_66__["Query1Component"] },
    { path: 'query2', component: _query_query2_query2_component__WEBPACK_IMPORTED_MODULE_67__["Query2Component"] },
    { path: 'query3', component: _query_query3_query3_component__WEBPACK_IMPORTED_MODULE_69__["Query3Component"] },
    { path: 'query4', component: _query_query4_query4_component__WEBPACK_IMPORTED_MODULE_72__["Query4Component"] },
    { path: 'query6', component: _query_query6_query6_component__WEBPACK_IMPORTED_MODULE_73__["Query6Component"] },
    { path: 'query7', component: _query_query7_query7_component__WEBPACK_IMPORTED_MODULE_75__["Query7Component"] },
    { path: 'query8', component: _query_query8_query8_component__WEBPACK_IMPORTED_MODULE_76__["Query8Component"] },
    { path: 'query9', component: _query_query9_query9_component__WEBPACK_IMPORTED_MODULE_78__["Query9Component"] },
    { path: 'query10', component: _query_query10_query10_component__WEBPACK_IMPORTED_MODULE_70__["Query10Component"] },
    { path: 'query11', component: _query_query11_query11_component__WEBPACK_IMPORTED_MODULE_79__["Query11Component"] },
    { path: 'query12', component: _query_query12_query12_component__WEBPACK_IMPORTED_MODULE_80__["Query12Component"] },
    { path: 'query13', component: _query_query13_query13_component__WEBPACK_IMPORTED_MODULE_81__["Query13Component"] },
    { path: 'query14', component: _query_query14_query14_component__WEBPACK_IMPORTED_MODULE_82__["Query14Component"] },
    // { path: 'street', component: ApiTableComponent },
    { path: '**', component: _page_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _page_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _dialogs_edit_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"],
                _page_auto_auto_component__WEBPACK_IMPORTED_MODULE_12__["AutoComponent"],
                _page_brigada_brigada_component__WEBPACK_IMPORTED_MODULE_13__["BrigadaComponent"],
                _page_brigadir_brigadir_component__WEBPACK_IMPORTED_MODULE_14__["BrigadirComponent"],
                _page_category_category_component__WEBPACK_IMPORTED_MODULE_15__["CategoryComponent"],
                _page_category_personal_category_personal_component__WEBPACK_IMPORTED_MODULE_16__["CategoryPersonalComponent"],
                _page_group_group_component__WEBPACK_IMPORTED_MODULE_17__["GroupComponent"],
                _page_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_18__["DriversComponent"],
                _page_hard_route_hard_route_component__WEBPACK_IMPORTED_MODULE_19__["HardRouteComponent"],
                _page_infrastruct_infrastruct_component__WEBPACK_IMPORTED_MODULE_20__["InfrastructComponent"],
                _page_marka_marka_component__WEBPACK_IMPORTED_MODULE_21__["MarkaComponent"],
                _page_prop_prop_component__WEBPACK_IMPORTED_MODULE_22__["PropComponent"],
                _page_personal_personal_component__WEBPACK_IMPORTED_MODULE_23__["PersonalComponent"],
                _page_problem_problem_component__WEBPACK_IMPORTED_MODULE_24__["ProblemComponent"],
                _page_repair_repair_component__WEBPACK_IMPORTED_MODULE_25__["RepairComponent"],
                _page_route_route_component__WEBPACK_IMPORTED_MODULE_26__["RouteComponent"],
                _page_sale_buy_sale_buy_component__WEBPACK_IMPORTED_MODULE_27__["SaleBuyComponent"],
                _page_street_street_component__WEBPACK_IMPORTED_MODULE_28__["StreetComponent"],
                _dialogs_edit_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_29__["EditCategoryComponent"],
                _dialogs_add_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__["AddUserComponent"],
                _dialogs_add_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_31__["AddDriverComponent"],
                _dialogs_edit_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_32__["EditDriverComponent"],
                _dialogs_add_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_33__["AddCategoryComponent"],
                _dialogs_add_add_marka_add_marka_component__WEBPACK_IMPORTED_MODULE_34__["AddMarkaComponent"],
                _dialogs_edit_edit_marka_edit_marka_component__WEBPACK_IMPORTED_MODULE_35__["EditMarkaComponent"],
                _dialogs_add_add_auto_add_auto_component__WEBPACK_IMPORTED_MODULE_36__["AddAutoComponent"],
                _dialogs_edit_edit_auto_edit_auto_component__WEBPACK_IMPORTED_MODULE_37__["EditAutoComponent"],
                _dialogs_add_add_brigada_add_brigada_component__WEBPACK_IMPORTED_MODULE_38__["AddBrigadaComponent"],
                _dialogs_edit_edit_brigada_edit_brigada_component__WEBPACK_IMPORTED_MODULE_39__["EditBrigadaComponent"],
                _dialogs_add_add_brigadir_add_brigadir_component__WEBPACK_IMPORTED_MODULE_40__["AddBrigadirComponent"],
                _dialogs_edit_edit_brigadir_edit_brigadir_component__WEBPACK_IMPORTED_MODULE_41__["EditBrigadirComponent"],
                _dialogs_add_add_category_personal_add_category_personal_component__WEBPACK_IMPORTED_MODULE_42__["AddCategoryPersonalComponent"],
                _dialogs_edit_edit_category_personal_edit_category_personal_component__WEBPACK_IMPORTED_MODULE_43__["EditCategoryPersonalComponent"],
                _dialogs_add_add_sale_buy_add_sale_buy_component__WEBPACK_IMPORTED_MODULE_44__["AddSaleBuyComponent"],
                _dialogs_edit_edit_sale_buy_edit_sale_buy_component__WEBPACK_IMPORTED_MODULE_45__["EditSaleBuyComponent"],
                _dialogs_add_add_har_route_add_har_route_component__WEBPACK_IMPORTED_MODULE_47__["AddHarRouteComponent"],
                _dialogs_edit_edit_hard_route_edit_hard_route_component__WEBPACK_IMPORTED_MODULE_48__["EditHardRouteComponent"],
                _dialogs_add_add_infrastruct_add_infrastruct_component__WEBPACK_IMPORTED_MODULE_49__["AddInfrastructComponent"],
                _dialogs_edit_edit_infrastruct_edit_infrastruct_component__WEBPACK_IMPORTED_MODULE_50__["EditInfrastructComponent"],
                _dialogs_add_add_personal_add_personal_component__WEBPACK_IMPORTED_MODULE_51__["AddPersonalComponent"],
                _dialogs_edit_edit_personal_edit_personal_component__WEBPACK_IMPORTED_MODULE_52__["EditPersonalComponent"],
                _dialogs_add_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_53__["AddRepairComponent"],
                _dialogs_edit_edit_repair_edit_repair_component__WEBPACK_IMPORTED_MODULE_54__["EditRepairComponent"],
                _dialogs_edit_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_55__["EditProblemComponent"],
                _dialogs_add_add_problem_add_problem_component__WEBPACK_IMPORTED_MODULE_56__["AddProblemComponent"],
                _dialogs_add_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_57__["AddGroupComponent"],
                _dialogs_edit_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_58__["EditGroupComponent"],
                _dialogs_edit_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_59__["EditStreetComponent"],
                _dialogs_add_add_street_add_street_component__WEBPACK_IMPORTED_MODULE_60__["AddStreetComponent"],
                _dialogs_add_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_61__["AddRouteComponent"],
                _dialogs_edit_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_62__["EditRouteComponent"],
                _dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_63__["DialogsStreetComponent"],
                _page_api_table_api_table_component__WEBPACK_IMPORTED_MODULE_64__["ApiTableComponent"],
                _dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_65__["DialogsRouteComponent"],
                _query_query1_query1_component__WEBPACK_IMPORTED_MODULE_66__["Query1Component"],
                _query_query2_query2_component__WEBPACK_IMPORTED_MODULE_67__["Query2Component"],
                _query_query2_q2d_q2d_component__WEBPACK_IMPORTED_MODULE_68__["Q2dComponent"],
                _query_query3_query3_component__WEBPACK_IMPORTED_MODULE_69__["Query3Component"],
                _query_query10_query10_component__WEBPACK_IMPORTED_MODULE_70__["Query10Component"],
                _query_query10_q10d_q10d_component__WEBPACK_IMPORTED_MODULE_71__["Q10dComponent"],
                _query_query4_query4_component__WEBPACK_IMPORTED_MODULE_72__["Query4Component"],
                _query_query6_query6_component__WEBPACK_IMPORTED_MODULE_73__["Query6Component"],
                _query_query6_q6d_q6d_component__WEBPACK_IMPORTED_MODULE_74__["Q6dComponent"],
                _query_query7_query7_component__WEBPACK_IMPORTED_MODULE_75__["Query7Component"],
                _query_query8_query8_component__WEBPACK_IMPORTED_MODULE_76__["Query8Component"],
                _query_query8_q8d_q8d_component__WEBPACK_IMPORTED_MODULE_77__["Q8dComponent"],
                _query_query9_query9_component__WEBPACK_IMPORTED_MODULE_78__["Query9Component"],
                _query_query11_query11_component__WEBPACK_IMPORTED_MODULE_79__["Query11Component"],
                _query_query12_query12_component__WEBPACK_IMPORTED_MODULE_80__["Query12Component"],
                _query_query13_query13_component__WEBPACK_IMPORTED_MODULE_81__["Query13Component"],
                _query_query14_query14_component__WEBPACK_IMPORTED_MODULE_82__["Query14Component"],
                _query_query11_q11d_q11d_component__WEBPACK_IMPORTED_MODULE_83__["Q11dComponent"],
                _query_query12_q12d_q12d_component__WEBPACK_IMPORTED_MODULE_84__["Q12dComponent"],
                _query_query13_q13d_q13d_component__WEBPACK_IMPORTED_MODULE_85__["Q13dComponent"],
                _query_query14_q14d_q14d_component__WEBPACK_IMPORTED_MODULE_86__["Q14dComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
                //  MATERIAL
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_46__["DatePipe"]],
            entryComponents: [
                // ADD
                _dialogs_add_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__["AddUserComponent"],
                _dialogs_add_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_31__["AddDriverComponent"],
                _dialogs_add_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_33__["AddCategoryComponent"],
                _dialogs_add_add_marka_add_marka_component__WEBPACK_IMPORTED_MODULE_34__["AddMarkaComponent"],
                _dialogs_add_add_auto_add_auto_component__WEBPACK_IMPORTED_MODULE_36__["AddAutoComponent"],
                _dialogs_add_add_brigada_add_brigada_component__WEBPACK_IMPORTED_MODULE_38__["AddBrigadaComponent"],
                _dialogs_add_add_brigadir_add_brigadir_component__WEBPACK_IMPORTED_MODULE_40__["AddBrigadirComponent"],
                _dialogs_add_add_category_personal_add_category_personal_component__WEBPACK_IMPORTED_MODULE_42__["AddCategoryPersonalComponent"],
                _dialogs_add_add_sale_buy_add_sale_buy_component__WEBPACK_IMPORTED_MODULE_44__["AddSaleBuyComponent"],
                _dialogs_add_add_har_route_add_har_route_component__WEBPACK_IMPORTED_MODULE_47__["AddHarRouteComponent"],
                _dialogs_add_add_infrastruct_add_infrastruct_component__WEBPACK_IMPORTED_MODULE_49__["AddInfrastructComponent"],
                _dialogs_add_add_personal_add_personal_component__WEBPACK_IMPORTED_MODULE_51__["AddPersonalComponent"],
                _dialogs_add_add_problem_add_problem_component__WEBPACK_IMPORTED_MODULE_56__["AddProblemComponent"],
                _dialogs_add_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_53__["AddRepairComponent"],
                _dialogs_add_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_57__["AddGroupComponent"],
                _dialogs_add_add_street_add_street_component__WEBPACK_IMPORTED_MODULE_60__["AddStreetComponent"],
                _dialogs_add_add_route_add_route_component__WEBPACK_IMPORTED_MODULE_61__["AddRouteComponent"],
                // EDIT
                _dialogs_edit_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_29__["EditCategoryComponent"],
                _dialogs_edit_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_32__["EditDriverComponent"],
                _dialogs_edit_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"],
                _dialogs_edit_edit_marka_edit_marka_component__WEBPACK_IMPORTED_MODULE_35__["EditMarkaComponent"],
                _dialogs_edit_edit_auto_edit_auto_component__WEBPACK_IMPORTED_MODULE_37__["EditAutoComponent"],
                _dialogs_edit_edit_brigada_edit_brigada_component__WEBPACK_IMPORTED_MODULE_39__["EditBrigadaComponent"],
                _dialogs_edit_edit_brigadir_edit_brigadir_component__WEBPACK_IMPORTED_MODULE_41__["EditBrigadirComponent"],
                _dialogs_edit_edit_category_personal_edit_category_personal_component__WEBPACK_IMPORTED_MODULE_43__["EditCategoryPersonalComponent"],
                _dialogs_edit_edit_sale_buy_edit_sale_buy_component__WEBPACK_IMPORTED_MODULE_45__["EditSaleBuyComponent"],
                _dialogs_edit_edit_hard_route_edit_hard_route_component__WEBPACK_IMPORTED_MODULE_48__["EditHardRouteComponent"],
                _dialogs_edit_edit_infrastruct_edit_infrastruct_component__WEBPACK_IMPORTED_MODULE_50__["EditInfrastructComponent"],
                _dialogs_edit_edit_personal_edit_personal_component__WEBPACK_IMPORTED_MODULE_52__["EditPersonalComponent"],
                _dialogs_edit_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_55__["EditProblemComponent"],
                _dialogs_edit_edit_repair_edit_repair_component__WEBPACK_IMPORTED_MODULE_54__["EditRepairComponent"],
                _dialogs_edit_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_58__["EditGroupComponent"],
                _dialogs_edit_edit_street_edit_street_component__WEBPACK_IMPORTED_MODULE_59__["EditStreetComponent"],
                _dialogs_edit_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_62__["EditRouteComponent"],
                // DIALOGS
                _dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_63__["DialogsStreetComponent"],
                _dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_65__["DialogsRouteComponent"],
                //  QUERY
                _query_query2_q2d_q2d_component__WEBPACK_IMPORTED_MODULE_68__["Q2dComponent"],
                _query_query6_q6d_q6d_component__WEBPACK_IMPORTED_MODULE_74__["Q6dComponent"],
                _query_query8_q8d_q8d_component__WEBPACK_IMPORTED_MODULE_77__["Q8dComponent"],
                _query_query10_q10d_q10d_component__WEBPACK_IMPORTED_MODULE_71__["Q10dComponent"],
                _query_query11_q11d_q11d_component__WEBPACK_IMPORTED_MODULE_83__["Q11dComponent"],
                _query_query12_q12d_q12d_component__WEBPACK_IMPORTED_MODULE_84__["Q12dComponent"],
                _query_query13_q13d_q13d_component__WEBPACK_IMPORTED_MODULE_85__["Q13dComponent"],
                _query_query14_q14d_q14d_component__WEBPACK_IMPORTED_MODULE_86__["Q14dComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-auto/add-auto.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dialogs/add/add-auto/add-auto.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-auto/add-auto.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add/add-auto/add-auto.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n\r\n      <mat-form-field>\r\n        <mat-label>Category</mat-label>\r\n        <mat-select (selectionChange)=\"selectedCategory($event.value)\">\r\n          <mat-option *ngFor=\"let item of categorys\" [value]=\"item.id\">\r\n            {{item.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      &nbsp;\r\n      <mat-form-field>\r\n        <mat-label>Marka</mat-label>\r\n        <mat-select (selectionChange)=\"selectedMarka($event.value)\">\r\n          <mat-option *ngFor=\"let item of markas\" [value]=\"item.id\">\r\n            {{item.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopAdd()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-auto/add-auto.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/add/add-auto/add-auto.component.ts ***!
  \************************************************************/
/*! exports provided: AddAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAutoComponent", function() { return AddAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_marka_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/marka.service */ "./src/app/services/marka.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddAutoComponent = /** @class */ (function () {
    function AddAutoComponent(_dialog, _category, _marka, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._category = _category;
        this._marka = _marka;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._category.getAll().subscribe(function (res) {
            _this.categorys = res;
        });
        this._marka.getAll().subscribe(function (res) {
            _this.markas = res;
        });
    }
    AddAutoComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            autoCategory: {
                id: null,
                name: null,
            },
            autoMarka: {
                id: null,
                name: null,
            }
        });
    };
    AddAutoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddAutoComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddAutoComponent.prototype.selectedCategory = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoCategory.id = res.id;
            _this.form.getRawValue().autoCategory.name = res.name;
        });
    };
    AddAutoComponent.prototype.selectedMarka = function (event) {
        var _this = this;
        this._marka.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoMarka.id = res.id;
            _this.form.getRawValue().autoMarka.name = res.name;
        });
    };
    AddAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-auto',
            template: __webpack_require__(/*! ./add-auto.component.html */ "./src/app/dialogs/add/add-auto/add-auto.component.html"),
            styles: [__webpack_require__(/*! ./add-auto.component.css */ "./src/app/dialogs/add/add-auto/add-auto.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _services_marka_service__WEBPACK_IMPORTED_MODULE_5__["MarkaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddAutoComponent);
    return AddAutoComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-brigada/add-brigada.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigada/add-brigada.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-brigada/add-brigada.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigada/add-brigada.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"fit\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-brigada/add-brigada.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigada/add-brigada.component.ts ***!
  \******************************************************************/
/*! exports provided: AddBrigadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrigadaComponent", function() { return AddBrigadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddBrigadaComponent = /** @class */ (function () {
    function AddBrigadaComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddBrigadaComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddBrigadaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddBrigadaComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddBrigadaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-brigada',
            template: __webpack_require__(/*! ./add-brigada.component.html */ "./src/app/dialogs/add/add-brigada/add-brigada.component.html"),
            styles: [__webpack_require__(/*! ./add-brigada.component.css */ "./src/app/dialogs/add/add-brigada/add-brigada.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddBrigadaComponent);
    return AddBrigadaComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigadir/add-brigadir.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigadir/add-brigadir.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"100px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"Surname\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-brigadir/add-brigadir.component.ts ***!
  \********************************************************************/
/*! exports provided: AddBrigadirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrigadirComponent", function() { return AddBrigadirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddBrigadirComponent = /** @class */ (function () {
    function AddBrigadirComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddBrigadirComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddBrigadirComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddBrigadirComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddBrigadirComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-brigadir',
            template: __webpack_require__(/*! ./add-brigadir.component.html */ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.html"),
            styles: [__webpack_require__(/*! ./add-brigadir.component.css */ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddBrigadirComponent);
    return AddBrigadirComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dialogs/add/add-category-personal/add-category-personal.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dialogs/add/add-category-personal/add-category-personal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"fit\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/add/add-category-personal/add-category-personal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddCategoryPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPersonalComponent", function() { return AddCategoryPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddCategoryPersonalComponent = /** @class */ (function () {
    function AddCategoryPersonalComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddCategoryPersonalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddCategoryPersonalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCategoryPersonalComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddCategoryPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category-personal',
            template: __webpack_require__(/*! ./add-category-personal.component.html */ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.html"),
            styles: [__webpack_require__(/*! ./add-category-personal.component.css */ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddCategoryPersonalComponent);
    return AddCategoryPersonalComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-category/add-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/add/add-category/add-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-category/add-category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add/add-category/add-category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput\r\n               formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopAdd()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-category/add-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-category/add-category.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddCategoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCategoryComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/dialogs/add/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/dialogs/add/add-category/add-category.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-driver/add-driver.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/add/add-driver/add-driver.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-driver/add-driver.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add/add-driver/add-driver.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"100px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"SurName\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-driver/add-driver.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-driver/add-driver.component.ts ***!
  \****************************************************************/
/*! exports provided: AddDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDriverComponent", function() { return AddDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddDriverComponent = /** @class */ (function () {
    function AddDriverComponent(_dialog, _auto, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._auto = _auto;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    }
    AddDriverComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            auto: {
                id: null,
                autoCategory: {
                    id: null,
                    name: null,
                },
                autoMarka: {
                    id: null,
                    name: null,
                }
            },
        });
    };
    AddDriverComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDriverComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddDriverComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().auto.id = res.id;
            _this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
            _this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;
            _this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
            _this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
        });
    };
    AddDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-driver',
            template: __webpack_require__(/*! ./add-driver.component.html */ "./src/app/dialogs/add/add-driver/add-driver.component.html"),
            styles: [__webpack_require__(/*! ./add-driver.component.css */ "./src/app/dialogs/add/add-driver/add-driver.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_4__["AutoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddDriverComponent);
    return AddDriverComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-group/add-group.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dialogs/add/add-group/add-group.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-group/add-group.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-group/add-group.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Personal</mat-label>\r\n          <mat-select (selectionChange)=\"selectedPersonal($event.value)\">\r\n            <mat-option *ngFor=\"let item of personals\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Driver</mat-label>\r\n          <mat-select (selectionChange)=\"selectedDriver($event.value)\">\r\n            <mat-option *ngFor=\"let item of drivers\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Brigada</mat-label>\r\n          <mat-select (selectionChange)=\"selectedBrigada($event.value)\">\r\n            <mat-option *ngFor=\"let item of brigads\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Brigadir</mat-label>\r\n          <mat-select (selectionChange)=\"selectedBrigadir($event.value)\">\r\n            <mat-option *ngFor=\"let item of brigadirs\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-group/add-group.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add/add-group/add-group.component.ts ***!
  \**************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_brigada_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/brigada.service */ "./src/app/services/brigada.service.ts");
/* harmony import */ var _services_brigadir_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/brigadir.service */ "./src/app/services/brigadir.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AddGroupComponent = /** @class */ (function () {
    function AddGroupComponent(_dialog, formBuilder, _personal, _driver, _brigada, _brigadir, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this._personal = _personal;
        this._driver = _driver;
        this._brigada = _brigada;
        this._brigadir = _brigadir;
        this.dialogRef = dialogRef;
        this.data = data;
        this._personal.getAll().subscribe(function (res) {
            _this.personals = res;
        });
        this._driver.getAll().subscribe(function (res) {
            _this.drivers = res;
        });
        this._brigada.getAll().subscribe(function (res) {
            _this.brigads = res;
        });
        this._brigadir.getAll().subscribe(function (res) {
            _this.brigadirs = res;
        });
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            autoPersonal: {
                id: null,
                name: null,
                surname: null,
                autoCategoryPersonal: {
                    id: null,
                    name: null
                }
            },
            autoDrivers: {
                id: null,
                name: null,
                surname: null,
                auto: {
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null
                    },
                    autoMarka: {
                        id: null,
                        name: null
                    }
                }
            },
            autoBrigada: {
                id: null,
                name: null
            },
            autoBrigadir: {
                id: null,
                name: null,
                surname: null
            }
        });
    };
    AddGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddGroupComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddGroupComponent.prototype.selectedPersonal = function (event) {
        var _this = this;
        this._personal.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoPersonal.id = res.id;
            _this.form.getRawValue().autoPersonal.name = res.name;
            _this.form.getRawValue().autoPersonal.surname = res.surname;
        });
    };
    AddGroupComponent.prototype.selectedBrigada = function (event) {
        var _this = this;
        this._brigada.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoBrigada.id = res.id;
            _this.form.getRawValue().autoBrigada.name = res.name;
        });
    };
    AddGroupComponent.prototype.selectedBrigadir = function (event) {
        var _this = this;
        this._brigadir.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoBrigadir.id = res.id;
            _this.form.getRawValue().autoBrigadir.name = res.name;
            _this.form.getRawValue().autoBrigadir.surname = res.surname;
        });
    };
    AddGroupComponent.prototype.selectedDriver = function (event) {
        var _this = this;
        this._driver.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoDrivers.id = res.id;
            _this.form.getRawValue().autoDrivers.name = res.name;
            _this.form.getRawValue().autoDrivers.surname = res.surname;
        });
    };
    AddGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-group',
            template: __webpack_require__(/*! ./add-group.component.html */ "./src/app/dialogs/add/add-group/add-group.component.html"),
            styles: [__webpack_require__(/*! ./add-group.component.css */ "./src/app/dialogs/add/add-group/add-group.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_4__["PersonalService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _services_brigada_service__WEBPACK_IMPORTED_MODULE_6__["BrigadaService"],
            _services_brigadir_service__WEBPACK_IMPORTED_MODULE_7__["BrigadirService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-har-route/add-har-route.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/add/add-har-route/add-har-route.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-har-route/add-har-route.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/add/add-har-route/add-har-route.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"point_start\"\r\n                 placeholder=\"Point of Start\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"point_finish\"\r\n                 placeholder=\"Point of Finish\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"firstPicker\" placeholder=\"Choose a start date\" formControlName=\"date_start\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"firstPicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #firstPicker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"secondPicker\" placeholder=\"Choose a finish date\" formControlName=\"date_finish\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"secondPicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #secondPicker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-har-route/add-har-route.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add/add-har-route/add-har-route.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddHarRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHarRouteComponent", function() { return AddHarRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddHarRouteComponent = /** @class */ (function () {
    function AddHarRouteComponent(_dialog, _auto, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._auto = _auto;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    }
    AddHarRouteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            point_start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            point_finish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_finish: null,
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddHarRouteComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddHarRouteComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddHarRouteComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().auto.id = res.id;
            _this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
            _this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;
            _this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
            _this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
        });
    };
    AddHarRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-har-route',
            template: __webpack_require__(/*! ./add-har-route.component.html */ "./src/app/dialogs/add/add-har-route/add-har-route.component.html"),
            styles: [__webpack_require__(/*! ./add-har-route.component.css */ "./src/app/dialogs/add/add-har-route/add-har-route.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], AddHarRouteComponent);
    return AddHarRouteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name of Object\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"street\"\r\n                 placeholder=\"Streey\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of category\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddInfrastructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInfrastructComponent", function() { return AddInfrastructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddInfrastructComponent = /** @class */ (function () {
    function AddInfrastructComponent(_dialog, _category, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._category = _category;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._category.getAll().subscribe(function (res) {
            _this.category = res;
        });
    }
    AddInfrastructComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            autoCategory: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddInfrastructComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddInfrastructComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddInfrastructComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoCategory.id = res.id;
            _this.form.getRawValue().autoCategory.name = res.name;
        });
    };
    AddInfrastructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-infrastruct',
            template: __webpack_require__(/*! ./add-infrastruct.component.html */ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.html"),
            styles: [__webpack_require__(/*! ./add-infrastruct.component.css */ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddInfrastructComponent);
    return AddInfrastructComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-marka/add-marka.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dialogs/add/add-marka/add-marka.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-marka/add-marka.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-marka/add-marka.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput\r\n               formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopAdd()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-marka/add-marka.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add/add-marka/add-marka.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMarkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarkaComponent", function() { return AddMarkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddMarkaComponent = /** @class */ (function () {
    function AddMarkaComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddMarkaComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddMarkaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMarkaComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddMarkaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-marka',
            template: __webpack_require__(/*! ./add-marka.component.html */ "./src/app/dialogs/add/add-marka/add-marka.component.html"),
            styles: [__webpack_require__(/*! ./add-marka.component.css */ "./src/app/dialogs/add/add-marka/add-marka.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddMarkaComponent);
    return AddMarkaComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-personal/add-personal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/add/add-personal/add-personal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-personal/add-personal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add/add-personal/add-personal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"SurName\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of category\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-personal/add-personal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-personal/add-personal.component.ts ***!
  \********************************************************************/
/*! exports provided: AddPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonalComponent", function() { return AddPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category-personal.service */ "./src/app/services/category-personal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddPersonalComponent = /** @class */ (function () {
    function AddPersonalComponent(_dialog, _category, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._category = _category;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._category.getAll().subscribe(function (res) {
            _this.category = res;
        });
    }
    AddPersonalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            autoCategoryPersonal: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddPersonalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddPersonalComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddPersonalComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoCategoryPersonal.id = res.id;
            _this.form.getRawValue().autoCategoryPersonal.name = res.name;
        });
    };
    AddPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-personal',
            template: __webpack_require__(/*! ./add-personal.component.html */ "./src/app/dialogs/add/add-personal/add-personal.component.html"),
            styles: [__webpack_require__(/*! ./add-personal.component.css */ "./src/app/dialogs/add/add-personal/add-personal.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__["CategoryPersonalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddPersonalComponent);
    return AddPersonalComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-problem/add-problem.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/add/add-problem/add-problem.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-problem/add-problem.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-problem/add-problem.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-problem/add-problem.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add/add-problem/add-problem.component.ts ***!
  \******************************************************************/
/*! exports provided: AddProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProblemComponent", function() { return AddProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddProblemComponent = /** @class */ (function () {
    function AddProblemComponent(_dialog, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddProblemComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddProblemComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddProblemComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-problem',
            template: __webpack_require__(/*! ./add-problem.component.html */ "./src/app/dialogs/add/add-problem/add-problem.component.html"),
            styles: [__webpack_require__(/*! ./add-problem.component.css */ "./src/app/dialogs/add/add-problem/add-problem.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddProblemComponent);
    return AddProblemComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-repair/add-repair.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/add/add-repair/add-repair.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-repair/add-repair.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add/add-repair/add-repair.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Problem</mat-label>\r\n          <mat-select (selectionChange)=\"selectedProblem($event.value)\">\r\n            <mat-option *ngFor=\"let item of problems\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Personal</mat-label>\r\n          <mat-select (selectionChange)=\"selectedPersonal($event.value)\">\r\n            <mat-option *ngFor=\"let item of personals\" [value]=\"item.id\">\r\n              {{item.name}} {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"price\"\r\n                 placeholder=\"Price\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-repair/add-repair.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-repair/add-repair.component.ts ***!
  \****************************************************************/
/*! exports provided: AddRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRepairComponent", function() { return AddRepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/problem.service */ "./src/app/services/problem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AddRepairComponent = /** @class */ (function () {
    function AddRepairComponent(_dialog, _auto, _personal, _problem, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._auto = _auto;
        this._personal = _personal;
        this._problem = _problem;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
        this._personal.getAll().subscribe(function (res) {
            _this.personals = res;
        });
        this._problem.getAll().subscribe(function (res) {
            _this.problems = res;
        });
    }
    AddRepairComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            autoProblem: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: null,
            autoPersonal: [{
                    id: null,
                    name: null,
                    surname: null,
                    autoCategoryPersonal: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: null,
        });
    };
    AddRepairComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddRepairComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddRepairComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().auto.id = res.id;
            _this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
            _this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;
            _this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
            _this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
        });
    };
    AddRepairComponent.prototype.selectedPersonal = function (event) {
        var _this = this;
        this._personal.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoPersonal.id = res.id;
            _this.form.getRawValue().autoPersonal.name = res.name;
            _this.form.getRawValue().autoPersonal.surname = res.surname;
            _this.form.getRawValue().autoPersonal.autoCategoryPersonal.id = res.autoCategoryPersonal.id;
            _this.form.getRawValue().autoPersonal.autoCategoryPersonal.name = res.autoCategoryPersonal.name;
        });
    };
    AddRepairComponent.prototype.selectedProblem = function (event) {
        var _this = this;
        this._problem.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().autoProblem.id = res.id;
            _this.form.getRawValue().autoProblem.name = res.name;
        });
    };
    AddRepairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-repair',
            template: __webpack_require__(/*! ./add-repair.component.html */ "./src/app/dialogs/add/add-repair/add-repair.component.html"),
            styles: [__webpack_require__(/*! ./add-repair.component.css */ "./src/app/dialogs/add/add-repair/add-repair.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_5__["PersonalService"],
            _services_problem_service__WEBPACK_IMPORTED_MODULE_6__["ProblemService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], AddRepairComponent);
    return AddRepairComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-route/add-route.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dialogs/add/add-route/add-route.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-route/add-route.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-route/add-route.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-route works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-route/add-route.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add/add-route/add-route.component.ts ***!
  \**************************************************************/
/*! exports provided: AddRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteComponent", function() { return AddRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddRouteComponent = /** @class */ (function () {
    function AddRouteComponent() {
    }
    AddRouteComponent.prototype.ngOnInit = function () {
    };
    AddRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-route',
            template: __webpack_require__(/*! ./add-route.component.html */ "./src/app/dialogs/add/add-route/add-route.component.html"),
            styles: [__webpack_require__(/*! ./add-route.component.css */ "./src/app/dialogs/add/add-route/add-route.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddRouteComponent);
    return AddRouteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"price\"\r\n                 placeholder=\"Price\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-slide-toggle (toggleChange)=\"toggleButton()\" formControlName=\"sale_buy\">\r\n          <mat-label>{{toggle ? 'Buy' : 'Sale'}}</mat-label>\r\n        </mat-slide-toggle>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopAdd()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.ts ***!
  \********************************************************************/
/*! exports provided: AddSaleBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaleBuyComponent", function() { return AddSaleBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddSaleBuyComponent = /** @class */ (function () {
    function AddSaleBuyComponent(_dialog, _auto, formBuilder, dialogRef, data) {
        var _this = this;
        this._dialog = _dialog;
        this._auto = _auto;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    }
    AddSaleBuyComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: null,
            sale_buy: null,
            price: null,
        });
    };
    AddSaleBuyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddSaleBuyComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.form.value);
    };
    AddSaleBuyComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().auto.id = res.id;
            _this.form.getRawValue().auto.autoCategory.id = res.autoCategory.id;
            _this.form.getRawValue().auto.autoCategory.name = res.autoCategory.name;
            _this.form.getRawValue().auto.autoMarka.id = res.autoMarka.id;
            _this.form.getRawValue().auto.autoMarka.name = res.autoMarka.name;
        });
    };
    AddSaleBuyComponent.prototype.toggleButton = function () {
        this.toggle = !this.toggle;
    };
    AddSaleBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sale-buy',
            template: __webpack_require__(/*! ./add-sale-buy.component.html */ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.html"),
            styles: [__webpack_require__(/*! ./add-sale-buy.component.css */ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_4__["AutoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddSaleBuyComponent);
    return AddSaleBuyComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-street/add-street.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/add/add-street/add-street.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-street/add-street.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/add/add-street/add-street.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-street works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-street/add-street.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/add/add-street/add-street.component.ts ***!
  \****************************************************************/
/*! exports provided: AddStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStreetComponent", function() { return AddStreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddStreetComponent = /** @class */ (function () {
    function AddStreetComponent() {
    }
    AddStreetComponent.prototype.ngOnInit = function () {
    };
    AddStreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-street',
            template: __webpack_require__(/*! ./add-street.component.html */ "./src/app/dialogs/add/add-street/add-street.component.html"),
            styles: [__webpack_require__(/*! ./add-street.component.css */ "./src/app/dialogs/add/add-street/add-street.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddStreetComponent);
    return AddStreetComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add-user/add-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dialogs/add/add-user/add-user.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/add/add-user/add-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/add/add-user/add-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"user-form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n  <div class=\"form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput\r\n             [(ngModel)]=\"user.email\"\r\n             name=\"email\"\r\n             placeholder=\"Email\"\r\n             [value]=\"user?.email\"\r\n             [formControl]=\"emailFormControl\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput\r\n             [(ngModel)]=\"user.password\"\r\n             name=\"pass\"\r\n             placeholder=\"Password\"\r\n             [value]=\"user?.password\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"button\">\r\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopAdd()\">Save</button>\r\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/dialogs/add/add-user/add-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/add/add-user/add-user.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(dialogRef, data, _user, _dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._user = _user;
        this._dialog = _dialog;
        this.user = {
            email: '',
            password: ''
        };
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddUserComponent.prototype.stopAdd = function () {
        this._dialog.dialogAdd(this.user);
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/dialogs/add/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/dialogs/add/add-user/add-user.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs-route/dialogs-route.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/dialogs-route/dialogs-route.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/dialogs-route/dialogs-route.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/dialogs-route/dialogs-route.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Street</mat-label>\r\n          <mat-select (selectionChange)=\"selectedStreet($event.value)\" formControlName=\"autoStreet\">\r\n            <mat-option *ngFor=\"let item of street\" [value]=\"item.id\">\r\n              {{item.street_start}} - {{item.street_finish}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"passanger_count\"\r\n                 placeholder=\"Number of passengers\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/dialogs-route/dialogs-route.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/dialogs-route/dialogs-route.component.ts ***!
  \******************************************************************/
/*! exports provided: DialogsRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsRouteComponent", function() { return DialogsRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_street_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/street.service */ "./src/app/services/street.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _model_AutoRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/AutoRoute */ "./src/app/model/AutoRoute.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auto.service */ "./src/app/services/auto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogsRouteComponent = /** @class */ (function () {
    function DialogsRouteComponent(_dialog, _route, _auto, _street, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._route = _route;
        this._auto = _auto;
        this._street = _street;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogsRouteComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group(new _model_AutoRoute__WEBPACK_IMPORTED_MODULE_6__["AutoRoute"]());
        if (!this.data.status) {
            this.getSingle();
        }
        this.getAutos();
        this.getStreets();
    };
    DialogsRouteComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogsRouteComponent.prototype.stop = function () {
        this.form.patchValue({
            auto: this.selectAuto,
            autoStreet: this.selectStreet,
        });
        if (!this.data.status) {
            this.form.value.id = this.data.id;
            console.log(this.form.value.id);
        }
        this._dialog.dialogUpdate(this.form.value);
    };
    DialogsRouteComponent.prototype.getSingle = function () {
        var _this = this;
        this._route.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                passanger_count: res.passanger_count
            });
        });
    };
    DialogsRouteComponent.prototype.getStreets = function () {
        var _this = this;
        this._street.getAll().subscribe(function (res) {
            _this.street = res;
            if (!_this.data.status) {
                _this.selectStreet = _this.street.find(function (r) { return r.id == _this.currentRow.autoStreet.id; });
                _this.form.patchValue({
                    autoStreet: _this.selectStreet.id
                });
            }
        });
    };
    DialogsRouteComponent.prototype.getAutos = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
            if (!_this.data.status) {
                _this.selectAuto = _this.auto.find(function (r) { return r.id == _this.currentRow.auto.id; });
                _this.form.patchValue({
                    auto: _this.selectAuto.id,
                });
            }
        });
    };
    DialogsRouteComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.selectAuto = res;
        });
    };
    DialogsRouteComponent.prototype.selectedStreet = function (event) {
        var _this = this;
        this._street.getSingle(event).subscribe(function (res) {
            _this.selectStreet = res;
        });
    };
    DialogsRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialogs-route',
            template: __webpack_require__(/*! ./dialogs-route.component.html */ "./src/app/dialogs/dialogs-route/dialogs-route.component.html"),
            styles: [__webpack_require__(/*! ./dialogs-route.component.css */ "./src/app/dialogs/dialogs-route/dialogs-route.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_7__["AutoService"],
            _services_street_service__WEBPACK_IMPORTED_MODULE_3__["StreetService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], DialogsRouteComponent);
    return DialogsRouteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/dialogs-street/dialogs-street.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/dialogs-street/dialogs-street.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/dialogs-street/dialogs-street.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/dialogs-street/dialogs-street.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"street_start\"\r\n                 placeholder=\"Street of Start\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"street_finish\"\r\n                 placeholder=\"Street of Finish\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"intervall\"\r\n                 placeholder=\"Intervall in minutes\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/dialogs-street/dialogs-street.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/dialogs-street/dialogs-street.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogsStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsStreetComponent", function() { return DialogsStreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_AutoStreet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/AutoStreet */ "./src/app/model/AutoStreet.ts");
/* harmony import */ var _services_street_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/street.service */ "./src/app/services/street.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DialogsStreetComponent = /** @class */ (function () {
    function DialogsStreetComponent(_dialog, _street, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._street = _street;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogsStreetComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group(new _model_AutoStreet__WEBPACK_IMPORTED_MODULE_4__["AutoStreet"]());
        if (!this.data.status) {
            this.getSingle();
        }
    };
    DialogsStreetComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogsStreetComponent.prototype.stop = function () {
        if (!this.data.status) {
            this.form.value.id = this.data.id;
        }
        this._dialog.dialogUpdate(this.form.value);
    };
    DialogsStreetComponent.prototype.getSingle = function () {
        var _this = this;
        this._street.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                street_start: res.street_start,
                street_finish: res.street_finish,
                intervall: res.intervall
            });
        });
    };
    DialogsStreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialogs-street',
            template: __webpack_require__(/*! ./dialogs-street.component.html */ "./src/app/dialogs/dialogs-street/dialogs-street.component.html"),
            styles: [__webpack_require__(/*! ./dialogs-street.component.css */ "./src/app/dialogs/dialogs-street/dialogs-street.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_street_service__WEBPACK_IMPORTED_MODULE_5__["StreetService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DialogsStreetComponent);
    return DialogsStreetComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-auto/edit-auto.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-auto/edit-auto.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/edit/edit-auto/edit-auto.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-auto/edit-auto.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n\r\n      <mat-form-field>\r\n        <mat-label>Category</mat-label>\r\n        <mat-select formControlName=\"autoCategory\" (selectionChange)=\"selectedCategory($event.value)\">\r\n          <mat-option *ngFor=\"let item of categorys\" [value]=\"item.id\">\r\n            {{item.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      &nbsp;\r\n      <mat-form-field>\r\n        <mat-label>Marka</mat-label>\r\n        <mat-select formControlName=\"autoMarka\" (selectionChange)=\"selectedMarka($event.value)\">\r\n          <mat-option *ngFor=\"let item of markas\" [value]=\"item.id\">\r\n            {{item.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-auto/edit-auto.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-auto/edit-auto.component.ts ***!
  \***************************************************************/
/*! exports provided: EditAutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAutoComponent", function() { return EditAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_marka_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/marka.service */ "./src/app/services/marka.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EditAutoComponent = /** @class */ (function () {
    function EditAutoComponent(_dialog, _category, _marka, _auto, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._category = _category;
        this._marka = _marka;
        this._auto = _auto;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditAutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            autoCategory: {
                id: null,
                name: null,
            },
            autoMarka: {
                id: null,
                name: null,
            }
        });
        this.getSingle();
        this._category.getAll().subscribe(function (res) {
            _this.categorys = res;
            if (_this.categorys) {
                var toSelect = _this.categorys.find(function (r) { return r.id == _this.currentAuto.autoCategory.id; });
                _this.form.patchValue({
                    autoCategory: toSelect.id,
                });
            }
        });
        this._marka.getAll().subscribe(function (res) {
            _this.markas = res;
            if (_this.markas) {
                var toSelect = _this.markas.find(function (r) { return r.id == _this.currentAuto.autoMarka.id; });
                _this.form.patchValue({
                    autoMarka: toSelect.id,
                });
            }
        });
    };
    EditAutoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditAutoComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            autoCategory: this.selectCategory,
            autoMarka: this.selectMarka,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditAutoComponent.prototype.selectedCategory = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.selectCategory = res;
            _this.form.patchValue({
                autoCategory: res.id
            });
        });
    };
    EditAutoComponent.prototype.selectedMarka = function (event) {
        var _this = this;
        this._marka.getSingle(event).subscribe(function (res) {
            _this.selectMarka = res;
            _this.form.patchValue({
                autoMarka: res.id
            });
        });
    };
    EditAutoComponent.prototype.getSingle = function () {
        var _this = this;
        this._auto.getSingle(this.data.id).subscribe(function (res) {
            _this.currentAuto = res;
            _this.form.patchValue({
                autoCategory: res.autoCategory,
                autoMarka: res.autoMarka,
            });
        });
    };
    EditAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-auto',
            template: __webpack_require__(/*! ./edit-auto.component.html */ "./src/app/dialogs/edit/edit-auto/edit-auto.component.html"),
            styles: [__webpack_require__(/*! ./edit-auto.component.css */ "./src/app/dialogs/edit/edit-auto/edit-auto.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _services_marka_service__WEBPACK_IMPORTED_MODULE_6__["MarkaService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], EditAutoComponent);
    return EditAutoComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigada/edit-brigada.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigada/edit-brigada.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"fit\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigada/edit-brigada.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditBrigadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrigadaComponent", function() { return EditBrigadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_brigada_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/brigada.service */ "./src/app/services/brigada.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditBrigadaComponent = /** @class */ (function () {
    function EditBrigadaComponent(dialogRef, data, _dialog, _brigada, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dialog = _dialog;
        this._brigada = _brigada;
        this.formBuilder = formBuilder;
    }
    EditBrigadaComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
    };
    EditBrigadaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditBrigadaComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        console.log(this.form.value);
        this._dialog.dialogUpdate(this.form.value);
    };
    EditBrigadaComponent.prototype.getSingle = function () {
        var _this = this;
        this._brigada.getSingle(this.data.id).subscribe(function (res) {
            _this.form.patchValue({
                name: res.name,
            });
        });
    };
    EditBrigadaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-brigada',
            template: __webpack_require__(/*! ./edit-brigada.component.html */ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.html"),
            styles: [__webpack_require__(/*! ./edit-brigada.component.css */ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_brigada_service__WEBPACK_IMPORTED_MODULE_4__["BrigadaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditBrigadaComponent);
    return EditBrigadaComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"100px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"Surname\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditBrigadirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrigadirComponent", function() { return EditBrigadirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_brigadir_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/brigadir.service */ "./src/app/services/brigadir.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditBrigadirComponent = /** @class */ (function () {
    function EditBrigadirComponent(dialogRef, data, _dialog, _brigadir, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dialog = _dialog;
        this._brigadir = _brigadir;
        this.formBuilder = formBuilder;
    }
    EditBrigadirComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
    };
    EditBrigadirComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditBrigadirComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditBrigadirComponent.prototype.getSingle = function () {
        var _this = this;
        this._brigadir.getSingle(this.data.id).subscribe(function (res) {
            _this.form.patchValue({
                name: res.name,
                surname: res.surname,
            });
        });
    };
    EditBrigadirComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-brigadir',
            template: __webpack_require__(/*! ./edit-brigadir.component.html */ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.html"),
            styles: [__webpack_require__(/*! ./edit-brigadir.component.css */ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_brigadir_service__WEBPACK_IMPORTED_MODULE_4__["BrigadirService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditBrigadirComponent);
    return EditBrigadirComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"fit\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditCategoryPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryPersonalComponent", function() { return EditCategoryPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category-personal.service */ "./src/app/services/category-personal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditCategoryPersonalComponent = /** @class */ (function () {
    function EditCategoryPersonalComponent(dialogRef, data, _dialog, _personal, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dialog = _dialog;
        this._personal = _personal;
        this.formBuilder = formBuilder;
    }
    EditCategoryPersonalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
    };
    EditCategoryPersonalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditCategoryPersonalComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditCategoryPersonalComponent.prototype.getSingle = function () {
        var _this = this;
        this._personal.getSingle(this.data.id).subscribe(function (res) {
            _this.form.patchValue({
                name: res.name,
            });
        });
    };
    EditCategoryPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category-personal',
            template: __webpack_require__(/*! ./edit-category-personal.component.html */ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.html"),
            styles: [__webpack_require__(/*! ./edit-category-personal.component.css */ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__["CategoryPersonalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditCategoryPersonalComponent);
    return EditCategoryPersonalComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-category/edit-category.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category/edit-category.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 450px;\r\n}\r\n\r\n.container > * {\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  padding-top: 6px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 16px;\r\n  flex-grow: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-category/edit-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category/edit-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput\r\n               formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-category/edit-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-category/edit-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(dialogRef, data, _dialog, _category, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dialog = _dialog;
        this._category = _category;
        this.formBuilder = formBuilder;
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getSingle();
    };
    EditCategoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditCategoryComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        console.log(this.form.value);
        this._dialog.dialogUpdate(this.form.value);
    };
    EditCategoryComponent.prototype.getSingle = function () {
        var _this = this;
        this._category.getSingle(this.data.id).subscribe(function (res) {
            _this.form.patchValue({
                name: res.name,
            });
        });
    };
    EditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/dialogs/edit/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/dialogs/edit/edit-category/edit-category.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-driver/edit-driver.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-driver/edit-driver.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-driver/edit-driver.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-driver/edit-driver.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"100px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n    <mat-grid-tile>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput\r\n               formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n      </mat-form-field>\r\n    </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>SurName</mat-label>\r\n          <input matInput\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"SurName\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select formControlName=\"auto\" (selectionChange)=\"selectedAuto($event.value)\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-driver/edit-driver.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-driver/edit-driver.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDriverComponent", function() { return EditDriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditDriverComponent = /** @class */ (function () {
    function EditDriverComponent(_dialog, _auto, _driver, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._auto = _auto;
        this._driver = _driver;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.flag = false;
    }
    EditDriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            auto: {
                id: null,
                autoCategory: {
                    id: null,
                    name: null,
                },
                autoMarka: {
                    id: null,
                    name: null,
                }
            },
        });
        this.getSingle();
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
            if (_this.auto) {
                _this.selectAuto = _this.auto.find(function (r) { return r.id == _this.currentDriver.auto.id; });
                _this.form.patchValue({
                    auto: _this.selectAuto.id,
                });
            }
        });
    };
    EditDriverComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDriverComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            auto: this.selectAuto,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditDriverComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.selectAuto = res;
            _this.form.patchValue({
                auto: res.id
            });
        });
    };
    EditDriverComponent.prototype.getSingle = function () {
        var _this = this;
        this._driver.getSingle(this.data.id).subscribe(function (res) {
            _this.currentDriver = res;
            _this.form.patchValue({
                name: res.name,
                surname: res.surname,
            });
        });
    };
    EditDriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-driver',
            template: __webpack_require__(/*! ./edit-driver.component.html */ "./src/app/dialogs/edit/edit-driver/edit-driver.component.html"),
            styles: [__webpack_require__(/*! ./edit-driver.component.css */ "./src/app/dialogs/edit/edit-driver/edit-driver.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], EditDriverComponent);
    return EditDriverComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-group/edit-group.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-group/edit-group.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-group/edit-group.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-group/edit-group.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Personal</mat-label>\r\n          <mat-select (selectionChange)=\"selectedPersonal($event.value)\" formControlName=\"autoPersonal\">\r\n            <mat-option *ngFor=\"let item of personals\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Driver</mat-label>\r\n          <mat-select (selectionChange)=\"selectedDriver($event.value)\" formControlName=\"autoDrivers\">\r\n            <mat-option *ngFor=\"let item of drivers\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Brigada</mat-label>\r\n          <mat-select (selectionChange)=\"selectedBrigada($event.value)\" formControlName=\"autoBrigada\">\r\n            <mat-option *ngFor=\"let item of brigads\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Brigadir</mat-label>\r\n          <mat-select (selectionChange)=\"selectedBrigadir($event.value)\" formControlName=\"autoBrigadir\">\r\n            <mat-option *ngFor=\"let item of brigadirs\" [value]=\"item.id\">\r\n              {{item.name}} - {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-group/edit-group.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-group/edit-group.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupComponent", function() { return EditGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_brigada_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/brigada.service */ "./src/app/services/brigada.service.ts");
/* harmony import */ var _services_brigadir_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/brigadir.service */ "./src/app/services/brigadir.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var EditGroupComponent = /** @class */ (function () {
    function EditGroupComponent(_dialog, _group, _personal, _driver, _brigada, _brigadir, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._group = _group;
        this._personal = _personal;
        this._driver = _driver;
        this._brigada = _brigada;
        this._brigadir = _brigadir;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            autoPersonal: {
                id: null,
                name: null,
                surname: null,
                autoCategoryPersonal: {
                    id: null,
                    name: null
                }
            },
            autoDrivers: {
                id: null,
                name: null,
                surname: null,
                auto: {
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null
                    },
                    autoMarka: {
                        id: null,
                        name: null
                    }
                }
            },
            autoBrigada: {
                id: null,
                name: null
            },
            autoBrigadir: {
                id: null,
                name: null,
                surname: null
            }
        });
        this.getSingle();
        this._personal.getAll().subscribe(function (res) {
            _this.personals = res;
            _this.selectPersonals = _this.personals.find(function (r) { return r.id == _this.currentRow.autoPersonal.id; });
            _this.form.patchValue({
                autoPersonal: _this.selectPersonals.id,
            });
        });
        this._driver.getAll().subscribe(function (res) {
            _this.drivers = res;
            _this.selectDrivers = _this.drivers.find(function (r) { return r.id == _this.currentRow.autoDrivers.id; });
            _this.form.patchValue({
                autoDrivers: _this.selectDrivers.id,
            });
        });
        this._brigada.getAll().subscribe(function (res) {
            _this.brigads = res;
            _this.selectBrigads = _this.brigads.find(function (r) { return r.id == _this.currentRow.autoBrigada.id; });
            _this.form.patchValue({
                autoBrigada: _this.selectBrigads.id,
            });
        });
        this._brigadir.getAll().subscribe(function (res) {
            _this.brigadirs = res;
            _this.selectBrigadirs = _this.brigadirs.find(function (r) { return r.id == _this.currentRow.autoBrigadir.id; });
            _this.form.patchValue({
                autoBrigadir: _this.selectBrigadirs.id,
            });
        });
    };
    EditGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditGroupComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            autoPersonal: this.selectPersonals,
            autoDrivers: this.selectDrivers,
            autoBrigada: this.selectBrigads,
            autoBrigadir: this.selectBrigadirs,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditGroupComponent.prototype.selectedPersonal = function (event) {
        var _this = this;
        this._personal.getSingle(event).subscribe(function (res) {
            _this.selectPersonals = res;
            _this.form.patchValue({
                autoPersonal: res.id
            });
        });
    };
    EditGroupComponent.prototype.selectedBrigada = function (event) {
        var _this = this;
        this._brigada.getSingle(event).subscribe(function (res) {
            _this.selectBrigads = res;
            _this.form.patchValue({
                autoBrigada: res.id
            });
        });
    };
    EditGroupComponent.prototype.selectedBrigadir = function (event) {
        var _this = this;
        this._brigadir.getSingle(event).subscribe(function (res) {
            _this.selectBrigadirs = res;
            _this.form.patchValue({
                autoBrigadir: res.id
            });
        });
    };
    EditGroupComponent.prototype.selectedDriver = function (event) {
        var _this = this;
        this._driver.getSingle(event).subscribe(function (res) {
            _this.selectDrivers = res;
            _this.form.patchValue({
                autoDrivers: res.id
            });
        });
    };
    EditGroupComponent.prototype.getSingle = function () {
        var _this = this;
        this._group.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
        });
    };
    EditGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-group',
            template: __webpack_require__(/*! ./edit-group.component.html */ "./src/app/dialogs/edit/edit-group/edit-group.component.html"),
            styles: [__webpack_require__(/*! ./edit-group.component.css */ "./src/app/dialogs/edit/edit-group/edit-group.component.css")]
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_group_service__WEBPACK_IMPORTED_MODULE_8__["GroupService"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_4__["PersonalService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _services_brigada_service__WEBPACK_IMPORTED_MODULE_6__["BrigadaService"],
            _services_brigadir_service__WEBPACK_IMPORTED_MODULE_7__["BrigadirService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditGroupComponent);
    return EditGroupComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"point_start\"\r\n                 placeholder=\"Point of Start\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"point_finish\"\r\n                 placeholder=\"Point of Finish\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"firstPicker\" placeholder=\"Choose a start date\" formControlName=\"date_start\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"firstPicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #firstPicker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"secondPicker\" placeholder=\"Choose a finish date\" formControlName=\"date_finish\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"secondPicker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #secondPicker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditHardRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHardRouteComponent", function() { return EditHardRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_hard_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/hard-route.service */ "./src/app/services/hard-route.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EditHardRouteComponent = /** @class */ (function () {
    function EditHardRouteComponent(_dialog, _auto, _hardRoute, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this._auto = _auto;
        this._hardRoute = _hardRoute;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditHardRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            point_start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            point_finish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date_finish: null,
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
            if (_this.auto) {
                _this.selectAuto = _this.auto.find(function (r) { return r.id == _this.currentRow.auto.id; });
                _this.form.patchValue({
                    auto: _this.selectAuto.id,
                });
            }
        });
    };
    EditHardRouteComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditHardRouteComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            auto: this.selectAuto,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditHardRouteComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.selectAuto = res;
            _this.form.patchValue({
                auto: res.id
            });
        });
    };
    EditHardRouteComponent.prototype.getSingle = function () {
        var _this = this;
        this._hardRoute.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                point_start: res.point_start,
                point_finish: res.point_finish,
                date_start: _this.datepipe.transform(res.date_start, 'yyyy-MM-dd'),
                date_finish: _this.datepipe.transform(res.date_finish, 'yyyy-MM-dd'),
            });
        });
    };
    EditHardRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-hard-route',
            template: __webpack_require__(/*! ./edit-hard-route.component.html */ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.html"),
            styles: [__webpack_require__(/*! ./edit-hard-route.component.css */ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_5__["AutoService"],
            _services_hard_route_service__WEBPACK_IMPORTED_MODULE_4__["HardRouteService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EditHardRouteComponent);
    return EditHardRouteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name of Object\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"street\"\r\n                 placeholder=\"Streey\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"autoCategory\">\r\n            <mat-option *ngFor=\"let item of category\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditInfrastructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfrastructComponent", function() { return EditInfrastructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_infrastruct_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/infrastruct.service */ "./src/app/services/infrastruct.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditInfrastructComponent = /** @class */ (function () {
    function EditInfrastructComponent(_dialog, _category, _infrastruct, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._category = _category;
        this._infrastruct = _infrastruct;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditInfrastructComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            autoCategory: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
        this._category.getAll().subscribe(function (res) {
            _this.category = res;
            if (_this.category) {
                _this.selectCategory = _this.category.find(function (r) { return r.id == _this.currentRow.autoCategory.id; });
                _this.form.patchValue({
                    autoCategory: _this.selectCategory.id,
                });
            }
        });
    };
    EditInfrastructComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditInfrastructComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            autoCategory: this.selectCategory,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditInfrastructComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.selectCategory = res;
            _this.form.patchValue({
                autoCategory: res.id
            });
        });
    };
    EditInfrastructComponent.prototype.getSingle = function () {
        var _this = this;
        this._infrastruct.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                name: res.name,
                street: res.street,
            });
        });
    };
    EditInfrastructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-infrastruct',
            template: __webpack_require__(/*! ./edit-infrastruct.component.html */ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.html"),
            styles: [__webpack_require__(/*! ./edit-infrastruct.component.css */ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _services_infrastruct_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditInfrastructComponent);
    return EditInfrastructComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-marka/edit-marka.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-marka/edit-marka.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/edit/edit-marka/edit-marka.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-marka/edit-marka.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <form class=\"form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n    <div class=\"form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput\r\n               formControlName=\"name\"\r\n               placeholder=\"Name\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button\">\r\n        <button mat-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\r\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-marka/edit-marka.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-marka/edit-marka.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditMarkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMarkaComponent", function() { return EditMarkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_marka_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/marka.service */ "./src/app/services/marka.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditMarkaComponent = /** @class */ (function () {
    function EditMarkaComponent(dialogRef, data, _dialog, _marka, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._dialog = _dialog;
        this._marka = _marka;
        this.formBuilder = formBuilder;
    }
    EditMarkaComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
    };
    EditMarkaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditMarkaComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditMarkaComponent.prototype.getSingle = function () {
        var _this = this;
        this._marka.getSingle(this.data.id).subscribe(function (res) {
            _this.form.patchValue({
                name: res.name,
            });
        });
    };
    EditMarkaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-marka',
            template: __webpack_require__(/*! ./edit-marka.component.html */ "./src/app/dialogs/edit/edit-marka/edit-marka.component.html"),
            styles: [__webpack_require__(/*! ./edit-marka.component.css */ "./src/app/dialogs/edit/edit-marka/edit-marka.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services_marka_service__WEBPACK_IMPORTED_MODULE_4__["MarkaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditMarkaComponent);
    return EditMarkaComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-personal/edit-personal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-personal/edit-personal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-personal/edit-personal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-personal/edit-personal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"surname\"\r\n                 placeholder=\"Surname\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"autoCategoryPersonal\">\r\n            <mat-option *ngFor=\"let item of category\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-personal/edit-personal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-personal/edit-personal.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonalComponent", function() { return EditPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category-personal.service */ "./src/app/services/category-personal.service.ts");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EditPersonalComponent = /** @class */ (function () {
    function EditPersonalComponent(_dialog, _category, _personal, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._category = _category;
        this._personal = _personal;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditPersonalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            autoCategoryPersonal: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
        this._category.getAll().subscribe(function (res) {
            _this.category = res;
            if (_this.category) {
                _this.selectCategory = _this.category.find(function (r) { return r.id == _this.currentRow.autoCategoryPersonal.id; });
                _this.form.patchValue({
                    autoCategoryPersonal: _this.selectCategory.id,
                });
            }
        });
    };
    EditPersonalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditPersonalComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            autoCategoryPersonal: this.selectCategory,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditPersonalComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.selectCategory = res;
            _this.form.patchValue({
                autoCategoryPersonal: res.id
            });
        });
    };
    EditPersonalComponent.prototype.getSingle = function () {
        var _this = this;
        this._personal.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                name: res.name,
                surname: res.surname,
            });
        });
    };
    EditPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-personal',
            template: __webpack_require__(/*! ./edit-personal.component.html */ "./src/app/dialogs/edit/edit-personal/edit-personal.component.html"),
            styles: [__webpack_require__(/*! ./edit-personal.component.css */ "./src/app/dialogs/edit/edit-personal/edit-personal.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_personal_service__WEBPACK_IMPORTED_MODULE_4__["CategoryPersonalService"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_5__["PersonalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditPersonalComponent);
    return EditPersonalComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-problem/edit-problem.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-problem/edit-problem.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-problem/edit-problem.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-problem/edit-problem.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"text\"\r\n                 formControlName=\"name\"\r\n                 placeholder=\"Name\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-problem/edit-problem.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-problem/edit-problem.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProblemComponent", function() { return EditProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/problem.service */ "./src/app/services/problem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditProblemComponent = /** @class */ (function () {
    function EditProblemComponent(_dialog, _problem, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._problem = _problem;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditProblemComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getSingle();
    };
    EditProblemComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditProblemComponent.prototype.stopEdit = function () {
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditProblemComponent.prototype.getSingle = function () {
        var _this = this;
        this._problem.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                name: res.name,
            });
        });
    };
    EditProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-problem',
            template: __webpack_require__(/*! ./edit-problem.component.html */ "./src/app/dialogs/edit/edit-problem/edit-problem.component.html"),
            styles: [__webpack_require__(/*! ./edit-problem.component.css */ "./src/app/dialogs/edit/edit-problem/edit-problem.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_problem_service__WEBPACK_IMPORTED_MODULE_4__["ProblemService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], EditProblemComponent);
    return EditProblemComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-repair/edit-repair.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-repair/edit-repair.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-repair/edit-repair.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-repair/edit-repair.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Problem</mat-label>\r\n          <mat-select (selectionChange)=\"selectedProblem($event.value)\" formControlName=\"autoProblem\">\r\n            <mat-option *ngFor=\"let item of problem\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Personal</mat-label>\r\n          <mat-select (selectionChange)=\"selectedPersonal($event.value)\" formControlName=\"autoPersonal\">\r\n            <mat-option *ngFor=\"let item of personal\" [value]=\"item.id\">\r\n              {{item.name}} {{item.surname}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"price\"\r\n                 placeholder=\"Price\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-repair/edit-repair.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-repair/edit-repair.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRepairComponent", function() { return EditRepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/problem.service */ "./src/app/services/problem.service.ts");
/* harmony import */ var _services_repair_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/repair.service */ "./src/app/services/repair.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var EditRepairComponent = /** @class */ (function () {
    function EditRepairComponent(_dialog, _auto, _personal, _problem, _repair, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this._auto = _auto;
        this._personal = _personal;
        this._problem = _problem;
        this._repair = _repair;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditRepairComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            autoProblem: [{
                    id: null,
                    name: null,
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: null,
            autoPersonal: [{
                    id: null,
                    name: null,
                    surname: null,
                    autoCategoryPersonal: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: null,
        });
        this.getSingle();
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
            if (_this.auto) {
                _this.selectAuto = _this.auto.find(function (r) { return r.id == _this.currentRow.auto.id; });
                _this.form.patchValue({
                    auto: _this.selectAuto.id,
                });
            }
        });
        this._personal.getAll().subscribe(function (res) {
            _this.personal = res;
            if (_this.personal) {
                _this.selectPersonal = _this.personal.find(function (r) { return r.id == _this.currentRow.autoPersonal.id; });
                _this.form.patchValue({
                    autoPersonal: _this.selectPersonal.id,
                });
            }
        });
        this._problem.getAll().subscribe(function (res) {
            _this.problem = res;
            if (_this.problem) {
                _this.selectProblem = _this.problem.find(function (r) { return r.id == _this.currentRow.autoProblem.id; });
                _this.form.patchValue({
                    autoProblem: _this.selectProblem.id,
                });
            }
        });
    };
    EditRepairComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditRepairComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            auto: this.selectAuto,
            autoPersonal: this.selectPersonal,
            autoProblem: this.selectProblem,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditRepairComponent.prototype.getSingle = function () {
        var _this = this;
        this._repair.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                date: _this.datepipe.transform(res.date, 'yyyy-MM-dd'),
                price: res.price,
            });
        });
    };
    EditRepairComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.selectAuto = res;
            _this.form.patchValue({
                auto: res.id
            });
        });
    };
    EditRepairComponent.prototype.selectedPersonal = function (event) {
        var _this = this;
        this._personal.getSingle(event).subscribe(function (res) {
            _this.selectPersonal = res;
            _this.form.patchValue({
                autoPersonal: res.id
            });
        });
    };
    EditRepairComponent.prototype.selectedProblem = function (event) {
        var _this = this;
        this._problem.getSingle(event).subscribe(function (res) {
            _this.selectProblem = res;
            _this.form.patchValue({
                autoProblem: res.id
            });
        });
    };
    EditRepairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-repair',
            template: __webpack_require__(/*! ./edit-repair.component.html */ "./src/app/dialogs/edit/edit-repair/edit-repair.component.html"),
            styles: [__webpack_require__(/*! ./edit-repair.component.css */ "./src/app/dialogs/edit/edit-repair/edit-repair.component.css")]
        }),
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_6__["PersonalService"],
            _services_problem_service__WEBPACK_IMPORTED_MODULE_7__["ProblemService"],
            _services_repair_service__WEBPACK_IMPORTED_MODULE_8__["RepairService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], EditRepairComponent);
    return EditRepairComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-route/edit-route.component.css":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-route/edit-route.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/edit/edit-route/edit-route.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-route/edit-route.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit-route works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-route/edit-route.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-route/edit-route.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRouteComponent", function() { return EditRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditRouteComponent = /** @class */ (function () {
    function EditRouteComponent() {
    }
    EditRouteComponent.prototype.ngOnInit = function () {
    };
    EditRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-route',
            template: __webpack_require__(/*! ./edit-route.component.html */ "./src/app/dialogs/edit/edit-route/edit-route.component.html"),
            styles: [__webpack_require__(/*! ./edit-route.component.css */ "./src/app/dialogs/edit/edit-route/edit-route.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditRouteComponent);
    return EditRouteComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.css":
/*!************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput\r\n                 type=\"number\"\r\n                 formControlName=\"price\"\r\n                 placeholder=\"Price\">\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-slide-toggle (toggleChange)=\"toggleButton()\" formControlName=\"sale_buy\">\r\n          <mat-label>{{toggle ? 'Buy' : 'Sale'}}</mat-label>\r\n        </mat-slide-toggle>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stopEdit()\">\r\n          Save\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditSaleBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSaleBuyComponent", function() { return EditSaleBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_sale_buy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sale-buy.service */ "./src/app/services/sale-buy.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EditSaleBuyComponent = /** @class */ (function () {
    function EditSaleBuyComponent(_dialog, _auto, _saleBuy, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this._auto = _auto;
        this._saleBuy = _saleBuy;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditSaleBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            id: null,
            auto: [{
                    id: null,
                    autoCategory: {
                        id: null,
                        name: null,
                    },
                    autoMarka: {
                        id: null,
                        name: null,
                    }
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: null,
            sale_buy: null,
            price: null,
        });
        this.getSingle();
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
            if (_this.auto) {
                _this.selectAuto = _this.auto.find(function (r) { return r.id == _this.currentRow.auto.id; });
                _this.form.patchValue({
                    auto: _this.selectAuto.id,
                });
            }
        });
    };
    EditSaleBuyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditSaleBuyComponent.prototype.stopEdit = function () {
        this.form.patchValue({
            auto: this.selectAuto,
        });
        this.form.value.id = this.data.id;
        this._dialog.dialogUpdate(this.form.value);
    };
    EditSaleBuyComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.selectAuto = res;
            _this.form.patchValue({
                auto: res.id
            });
        });
    };
    EditSaleBuyComponent.prototype.getSingle = function () {
        var _this = this;
        this._saleBuy.getSingle(this.data.id).subscribe(function (res) {
            _this.currentRow = res;
            _this.form.patchValue({
                date: _this.datepipe.transform(res.date, 'yyyy-MM-dd'),
                sale_buy: res.sale_buy,
                price: res.price,
            });
            _this.toggle = _this.form.getRawValue().sale_buy;
        });
    };
    EditSaleBuyComponent.prototype.toggleButton = function () {
        this.toggle = !this.toggle;
    };
    EditSaleBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sale-buy',
            template: __webpack_require__(/*! ./edit-sale-buy.component.html */ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.html"),
            styles: [__webpack_require__(/*! ./edit-sale-buy.component.css */ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _services_sale_buy_service__WEBPACK_IMPORTED_MODULE_5__["SaleBuyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], EditSaleBuyComponent);
    return EditSaleBuyComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-street/edit-street.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-street/edit-street.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/edit/edit-street/edit-street.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-street/edit-street.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit-street works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-street/edit-street.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-street/edit-street.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditStreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStreetComponent", function() { return EditStreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditStreetComponent = /** @class */ (function () {
    function EditStreetComponent() {
    }
    EditStreetComponent.prototype.ngOnInit = function () {
    };
    EditStreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-street',
            template: __webpack_require__(/*! ./edit-street.component.html */ "./src/app/dialogs/edit/edit-street/edit-street.component.html"),
            styles: [__webpack_require__(/*! ./edit-street.component.css */ "./src/app/dialogs/edit/edit-street/edit-street.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditStreetComponent);
    return EditStreetComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit-user/edit-user.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-user/edit-user.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 450px;\r\n}\r\n\r\n.container > * {\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  padding-top: 6px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 16px;\r\n  flex-grow: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-user/edit-user.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-user/edit-user.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"user-form\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\r\n  <div class=\"form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput\r\n             [(ngModel)]=\"user.email\"\r\n             name=\"email\"\r\n             placeholder=\"Email\"\r\n             [value]=\"currentUser?.email\"\r\n             [formControl]=\"emailFormControl\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput\r\n             [(ngModel)]=\"user.password\"\r\n             name=\"pass\"\r\n             placeholder=\"Password\"\r\n             [value]=\"currentUser?.password\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"button\">\r\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\r\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit-user/edit-user.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dialogs/edit/edit-user/edit-user.component.ts ***!
  \***************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(dialogRef, data, _user, _dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._user = _user;
        this._dialog = _dialog;
        this.errorUser = false;
        this.user = {
            id: '',
            email: '',
            password: ''
        };
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.getSingle();
    };
    EditUserComponent.prototype.getSingle = function () {
        var _this = this;
        this._user.getSingle(this.data.id).subscribe(function (res) {
            _this.currentUser = res;
            _this.user.email = _this.currentUser.email;
            _this.user.password = _this.currentUser.password;
        });
    };
    EditUserComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditUserComponent.prototype.stopEdit = function () {
        this.user.id = this.data.id;
        this._dialog.dialogUpdate(this.user);
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/dialogs/edit/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/dialogs/edit/edit-user/edit-user.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/model/AutoRoute.ts":
/*!************************************!*\
  !*** ./src/app/model/AutoRoute.ts ***!
  \************************************/
/*! exports provided: AutoRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoRoute", function() { return AutoRoute; });
var AutoRoute = /** @class */ (function () {
    function AutoRoute() {
        this.id = null;
        this.autoStreet = null;
        this.auto = null;
        this.passanger_count = null;
    }
    return AutoRoute;
}());



/***/ }),

/***/ "./src/app/model/AutoStreet.ts":
/*!*************************************!*\
  !*** ./src/app/model/AutoStreet.ts ***!
  \*************************************/
/*! exports provided: AutoStreet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoStreet", function() { return AutoStreet; });
var AutoStreet = /** @class */ (function () {
    function AutoStreet() {
        this.id = null;
        this.street_start = '';
        this.street_finish = '';
        this.intervall = null;
    }
    return AutoStreet;
}());



/***/ }),

/***/ "./src/app/page/api-table/api-table.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/api-table/api-table.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/api-table/api-table.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/api-table/api-table.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!-- Position Column -->\r\n  <ng-container *ngFor=\"let item of displayedColumns; let last = last\" [matColumnDef]=\"item\">\r\n    <th mat-header-cell *matHeaderCellDef>{{item}}</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!--&lt;!&ndash; StreetStart Column &ndash;&gt;-->\r\n  <!--<ng-container matColumnDef=\"street_start\">-->\r\n    <!--<th mat-header-cell *matHeaderCellDef> StreetStart </th>-->\r\n    <!--<td mat-cell *matCellDef=\"let element\"> {{element.street_start}} </td>-->\r\n  <!--</ng-container>-->\r\n\r\n  <!--&lt;!&ndash; StreetFinish Column &ndash;&gt;-->\r\n  <!--<ng-container matColumnDef=\"street_finish\">-->\r\n    <!--<th mat-header-cell *matHeaderCellDef> StreetFinish </th>-->\r\n    <!--<td mat-cell *matCellDef=\"let element\"> {{element.street_finish}} </td>-->\r\n  <!--</ng-container>-->\r\n\r\n  <!--&lt;!&ndash; Intervall Column &ndash;&gt;-->\r\n  <!--<ng-container matColumnDef=\"intervall\">-->\r\n    <!--<th mat-header-cell *matHeaderCellDef> Intervall </th>-->\r\n    <!--<td mat-cell *matCellDef=\"let element\"> {{element.intervall}} </td>-->\r\n  <!--</ng-container>-->\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/api-table/api-table.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/api-table/api-table.component.ts ***!
  \*******************************************************/
/*! exports provided: ApiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTableComponent", function() { return ApiTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiTableComponent = /** @class */ (function () {
    function ApiTableComponent(api) {
        this.api = api;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ApiTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAll().subscribe(function (res) {
            _this.displayedColumns = Object.keys(res[0]);
            _this.displayedColumns.push('actions');
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ApiTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ApiTableComponent.prototype, "sort", void 0);
    ApiTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api-table',
            template: __webpack_require__(/*! ./api-table.component.html */ "./src/app/page/api-table/api-table.component.html"),
            styles: [__webpack_require__(/*! ./api-table.component.css */ "./src/app/page/api-table/api-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"]])
    ], ApiTableComponent);
    return ApiTableComponent;
}());



/***/ }),

/***/ "./src/app/page/auto/auto.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/auto/auto.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/auto/auto.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/auto/auto.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/page/auto/auto.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/auto/auto.component.ts ***!
  \*********************************************/
/*! exports provided: AutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComponent", function() { return AutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _dialogs_add_add_auto_add_auto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-auto/add-auto.component */ "./src/app/dialogs/add/add-auto/add-auto.component.ts");
/* harmony import */ var _dialogs_edit_edit_auto_edit_auto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-auto/edit-auto.component */ "./src/app/dialogs/edit/edit-auto/edit-auto.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AutoComponent = /** @class */ (function () {
    function AutoComponent(_auto, _dialog, router, toastr, dialog) {
        this._auto = _auto;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Category', 'Marka', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    AutoComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AutoComponent.prototype.getAll = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    AutoComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_auto_add_auto_component__WEBPACK_IMPORTED_MODULE_6__["AddAutoComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._auto.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    AutoComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_auto_edit_auto_component__WEBPACK_IMPORTED_MODULE_7__["EditAutoComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._auto.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    AutoComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._auto.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AutoComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AutoComponent.prototype, "sort", void 0);
    AutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto',
            template: __webpack_require__(/*! ./auto.component.html */ "./src/app/page/auto/auto.component.html"),
            styles: [__webpack_require__(/*! ./auto.component.css */ "./src/app/page/auto/auto.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auto_service__WEBPACK_IMPORTED_MODULE_5__["AutoService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AutoComponent);
    return AutoComponent;
}());



/***/ }),

/***/ "./src/app/page/brigada/brigada.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/brigada/brigada.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/brigada/brigada.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/brigada/brigada.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/brigada/brigada.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/brigada/brigada.component.ts ***!
  \***************************************************/
/*! exports provided: BrigadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrigadaComponent", function() { return BrigadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_brigada_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/brigada.service */ "./src/app/services/brigada.service.ts");
/* harmony import */ var _dialogs_add_add_brigada_add_brigada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-brigada/add-brigada.component */ "./src/app/dialogs/add/add-brigada/add-brigada.component.ts");
/* harmony import */ var _dialogs_edit_edit_brigada_edit_brigada_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-brigada/edit-brigada.component */ "./src/app/dialogs/edit/edit-brigada/edit-brigada.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BrigadaComponent = /** @class */ (function () {
    function BrigadaComponent(_brigada, _dialog, router, toastr, dialog) {
        this._brigada = _brigada;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    BrigadaComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BrigadaComponent.prototype.getAll = function () {
        var _this = this;
        this._brigada.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    BrigadaComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_brigada_add_brigada_component__WEBPACK_IMPORTED_MODULE_6__["AddBrigadaComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._brigada.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    BrigadaComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_brigada_edit_brigada_component__WEBPACK_IMPORTED_MODULE_7__["EditBrigadaComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._brigada.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    BrigadaComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._brigada.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BrigadaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BrigadaComponent.prototype, "sort", void 0);
    BrigadaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brigada',
            template: __webpack_require__(/*! ./brigada.component.html */ "./src/app/page/brigada/brigada.component.html"),
            styles: [__webpack_require__(/*! ./brigada.component.css */ "./src/app/page/brigada/brigada.component.css")]
        }),
        __metadata("design:paramtypes", [_services_brigada_service__WEBPACK_IMPORTED_MODULE_5__["BrigadaService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BrigadaComponent);
    return BrigadaComponent;
}());



/***/ }),

/***/ "./src/app/page/brigadir/brigadir.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/brigadir/brigadir.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/brigadir/brigadir.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/brigadir/brigadir.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- SurName Column -->\r\n  <ng-container matColumnDef=\"Surname\">\r\n    <th mat-header-cell *matHeaderCellDef> Surname </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/brigadir/brigadir.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/brigadir/brigadir.component.ts ***!
  \*****************************************************/
/*! exports provided: BrigadirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrigadirComponent", function() { return BrigadirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_brigadir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/brigadir.service */ "./src/app/services/brigadir.service.ts");
/* harmony import */ var _dialogs_edit_edit_brigadir_edit_brigadir_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-brigadir/edit-brigadir.component */ "./src/app/dialogs/edit/edit-brigadir/edit-brigadir.component.ts");
/* harmony import */ var _dialogs_add_add_brigadir_add_brigadir_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-brigadir/add-brigadir.component */ "./src/app/dialogs/add/add-brigadir/add-brigadir.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BrigadirComponent = /** @class */ (function () {
    function BrigadirComponent(_brigadir, _dialog, router, toastr, dialog) {
        this._brigadir = _brigadir;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'Surname', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    BrigadirComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BrigadirComponent.prototype.getAll = function () {
        var _this = this;
        this._brigadir.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    BrigadirComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_brigadir_add_brigadir_component__WEBPACK_IMPORTED_MODULE_7__["AddBrigadirComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._brigadir.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    BrigadirComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_brigadir_edit_brigadir_component__WEBPACK_IMPORTED_MODULE_6__["EditBrigadirComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._brigadir.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    BrigadirComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._brigadir.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BrigadirComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], BrigadirComponent.prototype, "sort", void 0);
    BrigadirComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brigadir',
            template: __webpack_require__(/*! ./brigadir.component.html */ "./src/app/page/brigadir/brigadir.component.html"),
            styles: [__webpack_require__(/*! ./brigadir.component.css */ "./src/app/page/brigadir/brigadir.component.css")]
        }),
        __metadata("design:paramtypes", [_services_brigadir_service__WEBPACK_IMPORTED_MODULE_5__["BrigadirService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BrigadirComponent);
    return BrigadirComponent;
}());



/***/ }),

/***/ "./src/app/page/category-personal/category-personal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/page/category-personal/category-personal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/category-personal/category-personal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/page/category-personal/category-personal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/category-personal/category-personal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page/category-personal/category-personal.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPersonalComponent", function() { return CategoryPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_category_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category-personal.service */ "./src/app/services/category-personal.service.ts");
/* harmony import */ var _dialogs_edit_edit_category_personal_edit_category_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-category-personal/edit-category-personal.component */ "./src/app/dialogs/edit/edit-category-personal/edit-category-personal.component.ts");
/* harmony import */ var _dialogs_add_add_category_personal_add_category_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-category-personal/add-category-personal.component */ "./src/app/dialogs/add/add-category-personal/add-category-personal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryPersonalComponent = /** @class */ (function () {
    function CategoryPersonalComponent(_personal, _dialog, router, toastr, dialog) {
        this._personal = _personal;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    CategoryPersonalComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CategoryPersonalComponent.prototype.getAll = function () {
        var _this = this;
        this._personal.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    CategoryPersonalComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_category_personal_add_category_personal_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryPersonalComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._personal.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    CategoryPersonalComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_category_personal_edit_category_personal_component__WEBPACK_IMPORTED_MODULE_6__["EditCategoryPersonalComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._personal.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    CategoryPersonalComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._personal.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CategoryPersonalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CategoryPersonalComponent.prototype, "sort", void 0);
    CategoryPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-personal',
            template: __webpack_require__(/*! ./category-personal.component.html */ "./src/app/page/category-personal/category-personal.component.html"),
            styles: [__webpack_require__(/*! ./category-personal.component.css */ "./src/app/page/category-personal/category-personal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_personal_service__WEBPACK_IMPORTED_MODULE_5__["CategoryPersonalService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CategoryPersonalComponent);
    return CategoryPersonalComponent;
}());



/***/ }),

/***/ "./src/app/page/category/category.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/category/category.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\ntr {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n.mat-table .mat-row:hover {\r\n  background: rgba(0, 0, 0, 0.04);\r\n}\r\nbutton:hover {\r\n  background-color: #d4d8db;\r\n}\r\n.before-table {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.mat-cell {\r\n  justify-content: flex-end;\r\n}\r\n.mat-header-cell {\r\n  justify-content: flex-end;\r\n}\r\n"

/***/ }),

/***/ "./src/app/page/category/category.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/category/category.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/category/category.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/category/category.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialogs_edit_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogs/edit/edit-category/edit-category.component */ "./src/app/dialogs/edit/edit-category/edit-category.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _dialogs_add_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-category/add-category.component */ "./src/app/dialogs/add/add-category/add-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_category, _dialog, router, toastr, dialog) {
        this._category = _category;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CategoryComponent.prototype.getAll = function () {
        var _this = this;
        this._category.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    CategoryComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._category.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    CategoryComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__["EditCategoryComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._category.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    CategoryComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._category.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CategoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CategoryComponent.prototype, "sort", void 0);
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/page/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/page/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/page/drivers/drivers.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/drivers/drivers.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/drivers/drivers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/drivers/drivers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- SurName Column -->\r\n  <ng-container matColumnDef=\"SurName\">\r\n    <th mat-header-cell *matHeaderCellDef> SurName </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n"

/***/ }),

/***/ "./src/app/page/drivers/drivers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/drivers/drivers.component.ts ***!
  \***************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _dialogs_edit_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-driver/edit-driver.component */ "./src/app/dialogs/edit/edit-driver/edit-driver.component.ts");
/* harmony import */ var _dialogs_add_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-driver/add-driver.component */ "./src/app/dialogs/add/add-driver/add-driver.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DriversComponent = /** @class */ (function () {
    function DriversComponent(_driver, _dialog, router, toastr, dialog) {
        this._driver = _driver;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'SurName', 'Category', 'Marka', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    DriversComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DriversComponent.prototype.getAll = function () {
        var _this = this;
        this._driver.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    DriversComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_7__["AddDriverComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._driver.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    DriversComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_6__["EditDriverComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._driver.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    DriversComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._driver.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    DriversComponent.prototype.whoIs = function () {
        var localLogin = localStorage.getItem('login');
        if (localLogin === 'driver') {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DriversComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DriversComponent.prototype, "sort", void 0);
    DriversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! ./drivers.component.html */ "./src/app/page/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/page/drivers/drivers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/page/group/group.component.css":
/*!************************************************!*\
  !*** ./src/app/page/group/group.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/group/group.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/group/group.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PersonalName Column -->\r\n  <ng-container matColumnDef=\"PersonalName\">\r\n    <th mat-header-cell *matHeaderCellDef> Personal Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DriversName Column -->\r\n  <ng-container matColumnDef=\"DriversName\">\r\n    <th mat-header-cell *matHeaderCellDef> Drivers Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoDrivers.name}} {{element.autoDrivers.surname}}</td>\r\n  </ng-container>\r\n\r\n  <!-- BrigadaName Column -->\r\n  <ng-container matColumnDef=\"BrigadaName\">\r\n    <th mat-header-cell *matHeaderCellDef> Brigada Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigada.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- BrigadirName Column -->\r\n  <ng-container matColumnDef=\"BrigadirName\">\r\n    <th mat-header-cell *matHeaderCellDef> Brigadir Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigadir.name}} {{element.autoBrigadir.surname}}</td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/group/group.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/group/group.component.ts ***!
  \***********************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _dialogs_add_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-group/add-group.component */ "./src/app/dialogs/add/add-group/add-group.component.ts");
/* harmony import */ var _dialogs_edit_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialogs/edit/edit-group/edit-group.component */ "./src/app/dialogs/edit/edit-group/edit-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupComponent = /** @class */ (function () {
    function GroupComponent(_group, _dialog, router, datepipe, toastr, dialog) {
        this._group = _group;
        this._dialog = _dialog;
        this.router = router;
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    GroupComponent.prototype.getAll = function () {
        var _this = this;
        this._group.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    GroupComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_7__["AddGroupComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._group.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    GroupComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_group_edit_group_component__WEBPACK_IMPORTED_MODULE_8__["EditGroupComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._group.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    GroupComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._group.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], GroupComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], GroupComponent.prototype, "sort", void 0);
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/page/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/page/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/page/hard-route/hard-route.component.css":
/*!**********************************************************!*\
  !*** ./src/app/page/hard-route/hard-route.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/hard-route/hard-route.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/hard-route/hard-route.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PointStart Column -->\r\n  <ng-container matColumnDef=\"PointStart\">\r\n    <th mat-header-cell *matHeaderCellDef> PointStart </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.point_start}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PointFinish Column -->\r\n  <ng-container matColumnDef=\"PointFinish\">\r\n    <th mat-header-cell *matHeaderCellDef> PointFinish </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.point_finish}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DateStart Column -->\r\n  <ng-container matColumnDef=\"DateStart\">\r\n    <th mat-header-cell *matHeaderCellDef> DateStart </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date_start | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DateFinish Column -->\r\n  <ng-container matColumnDef=\"DateFinish\">\r\n    <th mat-header-cell *matHeaderCellDef> DateFinish </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date_finish | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\">\r\n        <mat-icon aria-label=\"Done\">done</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/hard-route/hard-route.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/hard-route/hard-route.component.ts ***!
  \*********************************************************/
/*! exports provided: HardRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardRouteComponent", function() { return HardRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_hard_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hard-route.service */ "./src/app/services/hard-route.service.ts");
/* harmony import */ var _dialogs_edit_edit_hard_route_edit_hard_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-hard-route/edit-hard-route.component */ "./src/app/dialogs/edit/edit-hard-route/edit-hard-route.component.ts");
/* harmony import */ var _dialogs_add_add_har_route_add_har_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-har-route/add-har-route.component */ "./src/app/dialogs/add/add-har-route/add-har-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HardRouteComponent = /** @class */ (function () {
    function HardRouteComponent(_hardRoute, _dialog, router, toastr, dialog) {
        this._hardRoute = _hardRoute;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'PointStart', 'PointFinish', 'DateStart', 'DateFinish', 'Category', 'Marka', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    HardRouteComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    HardRouteComponent.prototype.getAll = function () {
        var _this = this;
        this._hardRoute.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    HardRouteComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_har_route_add_har_route_component__WEBPACK_IMPORTED_MODULE_7__["AddHarRouteComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._hardRoute.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    HardRouteComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_hard_route_edit_hard_route_component__WEBPACK_IMPORTED_MODULE_6__["EditHardRouteComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._hardRoute.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    HardRouteComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._hardRoute.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], HardRouteComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], HardRouteComponent.prototype, "sort", void 0);
    HardRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hard-route',
            template: __webpack_require__(/*! ./hard-route.component.html */ "./src/app/page/hard-route/hard-route.component.html"),
            styles: [__webpack_require__(/*! ./hard-route.component.css */ "./src/app/page/hard-route/hard-route.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hard_route_service__WEBPACK_IMPORTED_MODULE_5__["HardRouteService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HardRouteComponent);
    return HardRouteComponent;
}());



/***/ }),

/***/ "./src/app/page/infrastruct/infrastruct.component.css":
/*!************************************************************!*\
  !*** ./src/app/page/infrastruct/infrastruct.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/infrastruct/infrastruct.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/infrastruct/infrastruct.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Street Column -->\r\n  <ng-container matColumnDef=\"Street\">\r\n    <th mat-header-cell *matHeaderCellDef> Street </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.street}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/infrastruct/infrastruct.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/infrastruct/infrastruct.component.ts ***!
  \***********************************************************/
/*! exports provided: InfrastructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructComponent", function() { return InfrastructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_infrastruct_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/infrastruct.service */ "./src/app/services/infrastruct.service.ts");
/* harmony import */ var _dialogs_add_add_infrastruct_add_infrastruct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-infrastruct/add-infrastruct.component */ "./src/app/dialogs/add/add-infrastruct/add-infrastruct.component.ts");
/* harmony import */ var _dialogs_edit_edit_infrastruct_edit_infrastruct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-infrastruct/edit-infrastruct.component */ "./src/app/dialogs/edit/edit-infrastruct/edit-infrastruct.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfrastructComponent = /** @class */ (function () {
    function InfrastructComponent(_infrastruct, _dialog, router, toastr, dialog) {
        this._infrastruct = _infrastruct;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'Street', 'Category', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    InfrastructComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    InfrastructComponent.prototype.getAll = function () {
        var _this = this;
        this._infrastruct.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    InfrastructComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_infrastruct_add_infrastruct_component__WEBPACK_IMPORTED_MODULE_6__["AddInfrastructComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._infrastruct.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    InfrastructComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_infrastruct_edit_infrastruct_component__WEBPACK_IMPORTED_MODULE_7__["EditInfrastructComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._infrastruct.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    InfrastructComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._infrastruct.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], InfrastructComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], InfrastructComponent.prototype, "sort", void 0);
    InfrastructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infrastruct',
            template: __webpack_require__(/*! ./infrastruct.component.html */ "./src/app/page/infrastruct/infrastruct.component.html"),
            styles: [__webpack_require__(/*! ./infrastruct.component.css */ "./src/app/page/infrastruct/infrastruct.component.css")]
        }),
        __metadata("design:paramtypes", [_services_infrastruct_service__WEBPACK_IMPORTED_MODULE_5__["InfrastructService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], InfrastructComponent);
    return InfrastructComponent;
}());



/***/ }),

/***/ "./src/app/page/marka/marka.component.css":
/*!************************************************!*\
  !*** ./src/app/page/marka/marka.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/marka/marka.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/marka/marka.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/marka/marka.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/marka/marka.component.ts ***!
  \***********************************************/
/*! exports provided: MarkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkaComponent", function() { return MarkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_marka_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/marka.service */ "./src/app/services/marka.service.ts");
/* harmony import */ var _dialogs_add_add_marka_add_marka_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-marka/add-marka.component */ "./src/app/dialogs/add/add-marka/add-marka.component.ts");
/* harmony import */ var _dialogs_edit_edit_marka_edit_marka_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-marka/edit-marka.component */ "./src/app/dialogs/edit/edit-marka/edit-marka.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MarkaComponent = /** @class */ (function () {
    function MarkaComponent(_marka, _dialog, router, toastr, dialog) {
        this._marka = _marka;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    MarkaComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    MarkaComponent.prototype.getAll = function () {
        var _this = this;
        this._marka.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    MarkaComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_marka_add_marka_component__WEBPACK_IMPORTED_MODULE_6__["AddMarkaComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._marka.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    MarkaComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_marka_edit_marka_component__WEBPACK_IMPORTED_MODULE_7__["EditMarkaComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._marka.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    MarkaComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._marka.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MarkaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MarkaComponent.prototype, "sort", void 0);
    MarkaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marka',
            template: __webpack_require__(/*! ./marka.component.html */ "./src/app/page/marka/marka.component.html"),
            styles: [__webpack_require__(/*! ./marka.component.css */ "./src/app/page/marka/marka.component.css")]
        }),
        __metadata("design:paramtypes", [_services_marka_service__WEBPACK_IMPORTED_MODULE_5__["MarkaService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MarkaComponent);
    return MarkaComponent;
}());



/***/ }),

/***/ "./src/app/page/personal/personal.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/personal/personal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/personal/personal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/personal/personal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- SurName Column -->\r\n  <ng-container matColumnDef=\"SurName\">\r\n    <th mat-header-cell *matHeaderCellDef> SurName </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- CategoryPersonalName Column -->\r\n  <ng-container matColumnDef=\"CategoryPersonalName\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Of Personal </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategoryPersonal.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/personal/personal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/personal/personal.component.ts ***!
  \*****************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _dialogs_edit_edit_personal_edit_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-personal/edit-personal.component */ "./src/app/dialogs/edit/edit-personal/edit-personal.component.ts");
/* harmony import */ var _dialogs_add_add_personal_add_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-personal/add-personal.component */ "./src/app/dialogs/add/add-personal/add-personal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(_personal, _dialog, router, toastr, dialog) {
        this._personal = _personal;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'SurName', 'CategoryPersonalName', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PersonalComponent.prototype.getAll = function () {
        var _this = this;
        this._personal.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    PersonalComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_personal_add_personal_component__WEBPACK_IMPORTED_MODULE_7__["AddPersonalComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._personal.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    PersonalComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_personal_edit_personal_component__WEBPACK_IMPORTED_MODULE_6__["EditPersonalComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._personal.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    PersonalComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._personal.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PersonalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PersonalComponent.prototype, "sort", void 0);
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/page/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/page/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_personal_service__WEBPACK_IMPORTED_MODULE_5__["PersonalService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/page/problem/problem.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/problem/problem.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/problem/problem.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/problem/problem.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/problem/problem.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/problem/problem.component.ts ***!
  \***************************************************/
/*! exports provided: ProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemComponent", function() { return ProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/problem.service */ "./src/app/services/problem.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialogs_edit_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/edit/edit-problem/edit-problem.component */ "./src/app/dialogs/edit/edit-problem/edit-problem.component.ts");
/* harmony import */ var _dialogs_add_add_problem_add_problem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/add/add-problem/add-problem.component */ "./src/app/dialogs/add/add-problem/add-problem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProblemComponent = /** @class */ (function () {
    function ProblemComponent(_problem, _dialog, router, toastr, dialog) {
        this._problem = _problem;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ProblemComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProblemComponent.prototype.getAll = function () {
        var _this = this;
        this._problem.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    ProblemComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_problem_add_problem_component__WEBPACK_IMPORTED_MODULE_7__["AddProblemComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._problem.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    ProblemComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_6__["EditProblemComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._problem.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    ProblemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._problem.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ProblemComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ProblemComponent.prototype, "sort", void 0);
    ProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem',
            template: __webpack_require__(/*! ./problem.component.html */ "./src/app/page/problem/problem.component.html"),
            styles: [__webpack_require__(/*! ./problem.component.css */ "./src/app/page/problem/problem.component.css")]
        }),
        __metadata("design:paramtypes", [_services_problem_service__WEBPACK_IMPORTED_MODULE_2__["ProblemService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProblemComponent);
    return ProblemComponent;
}());



/***/ }),

/***/ "./src/app/page/prop/prop.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/prop/prop.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/prop/prop.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/prop/prop.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>Prop Table</span>\r\n  <span class=\"spacer\"></span>\r\n  Reload data:\r\n  <button mat-icon-button (click)=\"refresh()\">\r\n    <mat-icon>refresh</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n\r\n<table mat-table #table [dataSource]=\"prop\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/page/prop/prop.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/prop/prop.component.ts ***!
  \*********************************************/
/*! exports provided: PropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropComponent", function() { return PropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropComponent = /** @class */ (function () {
    function PropComponent() {
        this.displayedColumns = ['id', 'Name', 'Category', 'actions'];
    }
    PropComponent.prototype.ngOnInit = function () {
    };
    PropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prop',
            template: __webpack_require__(/*! ./prop.component.html */ "./src/app/page/prop/prop.component.html"),
            styles: [__webpack_require__(/*! ./prop.component.css */ "./src/app/page/prop/prop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropComponent);
    return PropComponent;
}());



/***/ }),

/***/ "./src/app/page/repair/repair.component.css":
/*!**************************************************!*\
  !*** ./src/app/page/repair/repair.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/repair/repair.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/repair/repair.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"ProblemName\">\r\n    <th mat-header-cell *matHeaderCellDef> Problem </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoProblem.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Auto Column -->\r\n  <ng-container matColumnDef=\"Auto\">\r\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}: {{element.auto.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Date Column -->\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell *matHeaderCellDef> Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PersonalName Column -->\r\n  <ng-container matColumnDef=\"PersonalName\">\r\n    <th mat-header-cell *matHeaderCellDef> Personal </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Price Column -->\r\n  <ng-container matColumnDef=\"Price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n"

/***/ }),

/***/ "./src/app/page/repair/repair.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/repair/repair.component.ts ***!
  \*************************************************/
/*! exports provided: RepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairComponent", function() { return RepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_repair_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/repair.service */ "./src/app/services/repair.service.ts");
/* harmony import */ var _dialogs_add_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-repair/add-repair.component */ "./src/app/dialogs/add/add-repair/add-repair.component.ts");
/* harmony import */ var _dialogs_edit_edit_repair_edit_repair_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-repair/edit-repair.component */ "./src/app/dialogs/edit/edit-repair/edit-repair.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RepairComponent = /** @class */ (function () {
    function RepairComponent(_repair, _dialog, router, toastr, dialog) {
        this._repair = _repair;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    RepairComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    RepairComponent.prototype.getAll = function () {
        var _this = this;
        this._repair.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    RepairComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_repair_add_repair_component__WEBPACK_IMPORTED_MODULE_6__["AddRepairComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._repair.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    RepairComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_repair_edit_repair_component__WEBPACK_IMPORTED_MODULE_7__["EditRepairComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._repair.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    RepairComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._repair.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RepairComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RepairComponent.prototype, "sort", void 0);
    RepairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repair',
            template: __webpack_require__(/*! ./repair.component.html */ "./src/app/page/repair/repair.component.html"),
            styles: [__webpack_require__(/*! ./repair.component.css */ "./src/app/page/repair/repair.component.css")]
        }),
        __metadata("design:paramtypes", [_services_repair_service__WEBPACK_IMPORTED_MODULE_5__["RepairService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RepairComponent);
    return RepairComponent;
}());



/***/ }),

/***/ "./src/app/page/route/route.component.css":
/*!************************************************!*\
  !*** ./src/app/page/route/route.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/route/route.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/route/route.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Street Column -->\r\n  <ng-container matColumnDef=\"Street\">\r\n    <th mat-header-cell *matHeaderCellDef> Street </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoStreet.street_start}} - {{element.autoStreet.street_finish}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Auto\">\r\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}} - {{element.auto.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- PassangerCount Column -->\r\n  <ng-container matColumnDef=\"Count\">\r\n    <th mat-header-cell *matHeaderCellDef> Number of passengers </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.passanger_count}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/route/route.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/route/route.component.ts ***!
  \***********************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs-route/dialogs-route.component */ "./src/app/dialogs/dialogs-route/dialogs-route.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RouteComponent = /** @class */ (function () {
    function RouteComponent(_route, _dialog, router, toastr, dialog) {
        this._route = _route;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Street', 'Auto', 'Count', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    RouteComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    RouteComponent.prototype.getAll = function () {
        var _this = this;
        this._route.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
            console.log(res);
        });
    };
    RouteComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_6__["DialogsRouteComponent"], {
            data: { status: 1 }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._route.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    RouteComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialogs_route_dialogs_route_component__WEBPACK_IMPORTED_MODULE_6__["DialogsRouteComponent"], {
            data: { id: id, status: 0 }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._route.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    RouteComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._route.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RouteComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RouteComponent.prototype, "sort", void 0);
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/page/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/page/route/route.component.css")]
        }),
        __metadata("design:paramtypes", [_services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/page/sale-buy/sale-buy.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/sale-buy/sale-buy.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/sale-buy/sale-buy.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/sale-buy/sale-buy.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Date Column -->\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell *matHeaderCellDef> Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- saleBuy Column -->\r\n  <ng-container matColumnDef=\"saleBuy\">\r\n    <th mat-header-cell *matHeaderCellDef> Sale / Buy </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.sale_buy ? 'Buy' : 'Sale'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Price Column -->\r\n  <ng-container matColumnDef=\"Price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/sale-buy/sale-buy.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/sale-buy/sale-buy.component.ts ***!
  \*****************************************************/
/*! exports provided: SaleBuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleBuyComponent", function() { return SaleBuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_sale_buy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sale-buy.service */ "./src/app/services/sale-buy.service.ts");
/* harmony import */ var _dialogs_add_add_sale_buy_add_sale_buy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-sale-buy/add-sale-buy.component */ "./src/app/dialogs/add/add-sale-buy/add-sale-buy.component.ts");
/* harmony import */ var _dialogs_edit_edit_sale_buy_edit_sale_buy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/edit/edit-sale-buy/edit-sale-buy.component */ "./src/app/dialogs/edit/edit-sale-buy/edit-sale-buy.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SaleBuyComponent = /** @class */ (function () {
    function SaleBuyComponent(_saleBuy, _dialog, router, datepipe, toastr, dialog) {
        this._saleBuy = _saleBuy;
        this._dialog = _dialog;
        this.router = router;
        this.datepipe = datepipe;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Category', 'Marka', 'Date', 'saleBuy', 'Price', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    SaleBuyComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    SaleBuyComponent.prototype.getAll = function () {
        var _this = this;
        this._saleBuy.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    SaleBuyComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_sale_buy_add_sale_buy_component__WEBPACK_IMPORTED_MODULE_6__["AddSaleBuyComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._saleBuy.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    SaleBuyComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_sale_buy_edit_sale_buy_component__WEBPACK_IMPORTED_MODULE_7__["EditSaleBuyComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._saleBuy.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    SaleBuyComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._saleBuy.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SaleBuyComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SaleBuyComponent.prototype, "sort", void 0);
    SaleBuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-buy',
            template: __webpack_require__(/*! ./sale-buy.component.html */ "./src/app/page/sale-buy/sale-buy.component.html"),
            styles: [__webpack_require__(/*! ./sale-buy.component.css */ "./src/app/page/sale-buy/sale-buy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sale_buy_service__WEBPACK_IMPORTED_MODULE_5__["SaleBuyService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SaleBuyComponent);
    return SaleBuyComponent;
}());



/***/ }),

/***/ "./src/app/page/street/street.component.css":
/*!**************************************************!*\
  !*** ./src/app/page/street/street.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/street/street.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/street/street.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- StreetStart Column -->\r\n  <ng-container matColumnDef=\"StreetStart\">\r\n    <th mat-header-cell *matHeaderCellDef> StreetStart </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.street_start}} </td>\r\n  </ng-container>\r\n\r\n  <!-- StreetFinish Column -->\r\n  <ng-container matColumnDef=\"StreetFinish\">\r\n    <th mat-header-cell *matHeaderCellDef> StreetFinish </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.street_finish}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Intervall Column -->\r\n  <ng-container matColumnDef=\"Intervall\">\r\n    <th mat-header-cell *matHeaderCellDef> Intervall </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.intervall}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <div class=\"actions\">\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/street/street.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/street/street.component.ts ***!
  \*************************************************/
/*! exports provided: StreetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetComponent", function() { return StreetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_street_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/street.service */ "./src/app/services/street.service.ts");
/* harmony import */ var _dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/dialogs-street/dialogs-street.component */ "./src/app/dialogs/dialogs-street/dialogs-street.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StreetComponent = /** @class */ (function () {
    function StreetComponent(_street, _dialog, router, toastr, dialog) {
        this._street = _street;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'StreetStart', 'StreetFinish', 'Intervall', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    StreetComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    StreetComponent.prototype.getAll = function () {
        var _this = this;
        this._street.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    StreetComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_6__["DialogsStreetComponent"], {
            data: { status: 1 }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._street.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    StreetComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_dialogs_street_dialogs_street_component__WEBPACK_IMPORTED_MODULE_6__["DialogsStreetComponent"], {
            data: { id: id, status: 0 }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._street.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    StreetComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._street.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], StreetComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], StreetComponent.prototype, "sort", void 0);
    StreetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-street',
            template: __webpack_require__(/*! ./street.component.html */ "./src/app/page/street/street.component.html"),
            styles: [__webpack_require__(/*! ./street.component.css */ "./src/app/page/street/street.component.css")]
        }),
        __metadata("design:paramtypes", [_services_street_service__WEBPACK_IMPORTED_MODULE_5__["StreetService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], StreetComponent);
    return StreetComponent;
}());



/***/ }),

/***/ "./src/app/page/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"password\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Password </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.password}} </td>\r\n  </ng-container>\r\n\r\n  <!-- actions -->\r\n  <ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n      </button>\r\n    </mat-header-cell>\r\n\r\n    <mat-cell *matCellDef=\"let row; let i=index;\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"startEdit(row.id)\">\r\n        <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n      </button>\r\n\r\n      <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row.id)\">\r\n        <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n      </button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/page/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialogs_edit_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/edit/edit-user/edit-user.component */ "./src/app/dialogs/edit/edit-user/edit-user.component.ts");
/* harmony import */ var _dialogs_add_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/add/add-user/add-user.component */ "./src/app/dialogs/add/add-user/add-user.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = /** @class */ (function () {
    function UserComponent(_user, _dialog, router, toastr, dialog) {
        this._user = _user;
        this._dialog = _dialog;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'email', 'password', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    UserComponent.prototype.getAll = function () {
        var _this = this;
        this._user.getAll().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    // ANOTHER FUNCTION
    UserComponent.prototype.tableClick = function (id) {
        var _this = this;
        this._user.getSingle(id).subscribe(function (res) {
            _this.router.navigate(['user/', id]);
        });
    };
    UserComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._user.add(_this._dialog.dialogData).subscribe(function (res) {
                    _this.dataSource.data.push(res);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
                    _this.toastr.success('Data saved', 'Success');
                }, function (error) {
                    _this.toastr.error('Data do not saved', 'Error');
                });
            }
        });
    };
    UserComponent.prototype.startEdit = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_edit_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this._user.update(_this._dialog.dialogData.id, _this._dialog.dialogData).subscribe(function (res) {
                    _this.toastr.success('Update success', 'Success');
                    var foundIndex = _this.dataSource.data.findIndex(function (x) { return x.id === res.id; });
                    _this.dataSource.data[foundIndex] = res;
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.dataSource.data);
                }, function (error) {
                    _this.toastr.error('Updating Error', 'Error');
                });
            }
        });
    };
    UserComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._user.delete(id).subscribe(function (res) {
            _this.dataSource.data = _this.dataSource.data.filter(function (data) { return data.id !== id; });
            _this.toastr.success('Delete success', 'Success');
        }, function (error) {
            _this.toastr.error('Delete failed', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], UserComponent.prototype, "sort", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/page/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/page/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/query/query1/query1.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query1/query1.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query1/query1.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query1/query1.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/query/query1/query1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query1/query1.component.ts ***!
  \**************************************************/
/*! exports provided: Query1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query1Component", function() { return Query1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query1Component = /** @class */ (function () {
    function Query1Component(query) {
        this.query = query;
        this.displayedColumns = ['id', 'Category', 'Marka'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.executeQuery();
    }
    Query1Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query1Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query1().subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query1Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query1Component.prototype, "sort", void 0);
    Query1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query1',
            template: __webpack_require__(/*! ./query1.component.html */ "./src/app/query/query1/query1.component.html"),
            styles: [__webpack_require__(/*! ./query1.component.css */ "./src/app/query/query1/query1.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], Query1Component);
    return Query1Component;
}());



/***/ }),

/***/ "./src/app/query/query10/q10d/q10d.component.css":
/*!*******************************************************!*\
  !*** ./src/app/query/query10/q10d/q10d.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query10/q10d/q10d.component.html":
/*!********************************************************!*\
  !*** ./src/app/query/query10/q10d/q10d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Create\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/query/query10/q10d/q10d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/query/query10/q10d/q10d.component.ts ***!
  \******************************************************/
/*! exports provided: Q10dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q10dComponent", function() { return Q10dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var Q10dComponent = /** @class */ (function () {
    function Q10dComponent(_dialog, _route, _auto, query, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this._route = _route;
        this._auto = _auto;
        this.query = query;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q10dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            auto: null,
            date: null
        });
        this.getAutos();
    };
    Q10dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q10dComponent.prototype.stop = function () {
        this.form.setValue({ auto: this.selectAuto,
            date: this.datepipe.transform(this.form.getRawValue().date, 'yyyy-MM-dd') });
        this.query.dialogsForm = this.form.value;
    };
    Q10dComponent.prototype.getAutos = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    };
    Q10dComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        if (event !== undefined) {
            this._auto.getSingle(event).subscribe(function (res) {
                _this.selectAuto = res.id;
            });
        }
        else {
            this.selectAuto = null;
        }
    };
    Q10dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q10d',
            template: __webpack_require__(/*! ./q10d.component.html */ "./src/app/query/query10/q10d/q10d.component.html"),
            styles: [__webpack_require__(/*! ./q10d.component.css */ "./src/app/query/query10/q10d/q10d.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_4__["AutoService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], Q10dComponent);
    return Q10dComponent;
}());



/***/ }),

/***/ "./src/app/query/query10/query10.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query/query10/query10.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query10/query10.component.html":
/*!******************************************************!*\
  !*** ./src/app/query/query10/query10.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PointStart Column -->\r\n  <ng-container matColumnDef=\"PointStart\">\r\n    <th mat-header-cell *matHeaderCellDef> PointStart </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.point_start}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PointFinish Column -->\r\n  <ng-container matColumnDef=\"PointFinish\">\r\n    <th mat-header-cell *matHeaderCellDef> PointFinish </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.point_finish}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DateStart Column -->\r\n  <ng-container matColumnDef=\"DateStart\">\r\n    <th mat-header-cell *matHeaderCellDef> DateStart </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date_start | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DateFinish Column -->\r\n  <ng-container matColumnDef=\"DateFinish\">\r\n    <th mat-header-cell *matHeaderCellDef> DateFinish </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date_finish | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/query/query10/query10.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query/query10/query10.component.ts ***!
  \****************************************************/
/*! exports provided: Query10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query10Component", function() { return Query10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q10d_q10d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q10d/q10d.component */ "./src/app/query/query10/q10d/q10d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query10Component = /** @class */ (function () {
    function Query10Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'PointStart', 'PointFinish', 'DateStart', 'DateFinish', 'Category', 'Marka'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query10Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query10Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q10d_q10d_component__WEBPACK_IMPORTED_MODULE_3__["Q10dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query10Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query10(this.query.dialogsForm.auto, this.query.dialogsForm.date).subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query10Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query10Component.prototype, "sort", void 0);
    Query10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query10',
            template: __webpack_require__(/*! ./query10.component.html */ "./src/app/query/query10/query10.component.html"),
            styles: [__webpack_require__(/*! ./query10.component.css */ "./src/app/query/query10/query10.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query10Component);
    return Query10Component;
}());



/***/ }),

/***/ "./src/app/query/query11/q11d/q11d.component.css":
/*!*******************************************************!*\
  !*** ./src/app/query/query11/q11d/q11d.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query11/q11d/q11d.component.html":
/*!********************************************************!*\
  !*** ./src/app/query/query11/q11d/q11d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Category</mat-label>\n          <mat-select (selectionChange)=\"selectedCategory($event.value)\">\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let item of categorys\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Marka</mat-label>\n          <mat-select (selectionChange)=\"selectedDetail($event.value)\">\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let item of details\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <button mat-button\n                color=\"primary\"\n                [disabled]=\"!formControl.valid\"\n                [mat-dialog-close]=\"1\"\n                (click)=\"stop()\">\n          Create\n        </button>\n        <button mat-button\n                color=\"warn\"\n                (click)=\"onNoClick()\"\n                tabindex=\"-1\">\n          Cancel\n        </button>\n      </mat-grid-tile>\n    </form>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/query/query11/q11d/q11d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/query/query11/q11d/q11d.component.ts ***!
  \******************************************************/
/*! exports provided: Q11dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q11dComponent", function() { return Q11dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_problem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/problem.service */ "./src/app/services/problem.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Q11dComponent = /** @class */ (function () {
    function Q11dComponent(_dialog, _category, _problem, query, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._category = _category;
        this._problem = _problem;
        this.query = query;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q11dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            category: null,
            detail: null,
        });
        this.getCategorys();
        this.getDetails();
    };
    Q11dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q11dComponent.prototype.stop = function () {
        this.query.dialogsForm = this.form.value;
    };
    Q11dComponent.prototype.selectedCategory = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                category: res.name
            });
        });
    };
    Q11dComponent.prototype.selectedDetail = function (event) {
        var _this = this;
        this._problem.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                detail: res.name
            });
        });
    };
    Q11dComponent.prototype.getCategorys = function () {
        var _this = this;
        this._category.getAll().subscribe(function (res) {
            _this.categorys = res;
        });
    };
    Q11dComponent.prototype.getDetails = function () {
        var _this = this;
        this._problem.getAll().subscribe(function (res) {
            _this.details = res;
        });
    };
    Q11dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q11d',
            template: __webpack_require__(/*! ./q11d.component.html */ "./src/app/query/query11/q11d/q11d.component.html"),
            styles: [__webpack_require__(/*! ./q11d.component.css */ "./src/app/query/query11/q11d/q11d.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_problem_service__WEBPACK_IMPORTED_MODULE_6__["ProblemService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q11dComponent);
    return Q11dComponent;
}());



/***/ }),

/***/ "./src/app/query/query11/query11.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query/query11/query11.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query11/query11.component.html":
/*!******************************************************!*\
  !*** ./src/app/query/query11/query11.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"ProblemName\">\n    <th mat-header-cell *matHeaderCellDef> Problem </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoProblem.name}} </td>\n  </ng-container>\n\n  <!-- Auto Column -->\n  <ng-container matColumnDef=\"Auto\">\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}: {{element.auto.autoCategory.name}}</td>\n  </ng-container>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Date\">\n    <th mat-header-cell *matHeaderCellDef> Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\n  </ng-container>\n\n  <!-- PersonalName Column -->\n  <ng-container matColumnDef=\"PersonalName\">\n    <th mat-header-cell *matHeaderCellDef> Personal </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\n  </ng-container>\n\n  <!-- Price Column -->\n  <ng-container matColumnDef=\"Price\">\n    <th mat-header-cell *matHeaderCellDef> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\n\n"

/***/ }),

/***/ "./src/app/query/query11/query11.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query/query11/query11.component.ts ***!
  \****************************************************/
/*! exports provided: Query11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query11Component", function() { return Query11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q11d_q11d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q11d/q11d.component */ "./src/app/query/query11/q11d/q11d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query11Component = /** @class */ (function () {
    function Query11Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query11Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query11Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q11d_q11d_component__WEBPACK_IMPORTED_MODULE_3__["Q11dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query11Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query11(this.query.dialogsForm.category, this.query.dialogsForm.detail).subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query11Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query11Component.prototype, "sort", void 0);
    Query11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query11',
            template: __webpack_require__(/*! ./query11.component.html */ "./src/app/query/query11/query11.component.html"),
            styles: [__webpack_require__(/*! ./query11.component.css */ "./src/app/query/query11/query11.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query11Component);
    return Query11Component;
}());



/***/ }),

/***/ "./src/app/query/query12/q12d/q12d.component.css":
/*!*******************************************************!*\
  !*** ./src/app/query/query12/q12d/q12d.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query12/q12d/q12d.component.html":
/*!********************************************************!*\
  !*** ./src/app/query/query12/q12d/q12d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\n\n      <mat-grid-tile>\n        <mat-slide-toggle (toggleChange)=\"toggleButton()\" formControlName=\"status\">\n          <mat-label>{{toggle ? 'Buy' : 'Sale'}}</mat-label>\n        </mat-slide-toggle>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a start date\" formControlName=\"date_start\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a finish date\" formControlName=\"date_finish\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <button mat-button\n                color=\"primary\"\n                [disabled]=\"!formControl.valid\"\n                [mat-dialog-close]=\"1\"\n                (click)=\"stop()\">\n          Create\n        </button>\n        <button mat-button\n                color=\"warn\"\n                (click)=\"onNoClick()\"\n                tabindex=\"-1\">\n          Cancel\n        </button>\n      </mat-grid-tile>\n\n    </form>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/query/query12/q12d/q12d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/query/query12/q12d/q12d.component.ts ***!
  \******************************************************/
/*! exports provided: Q12dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q12dComponent", function() { return Q12dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var Q12dComponent = /** @class */ (function () {
    function Q12dComponent(_dialog, query, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this.query = query;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q12dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            status: null,
            date_start: null,
            date_finish: null
        });
    };
    Q12dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q12dComponent.prototype.stop = function () {
        this.form.setValue({
            status: this.toggle ? 1 : 0,
            date_start: this.datepipe.transform(this.form.getRawValue().date_start, 'yyyy-MM-dd'),
            date_finish: this.datepipe.transform(this.form.getRawValue().date_finish, 'yyyy-MM-dd')
        });
        this.query.dialogsForm = this.form.value;
    };
    Q12dComponent.prototype.toggleButton = function () {
        this.toggle = !this.toggle;
    };
    Q12dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q12d',
            template: __webpack_require__(/*! ./q12d.component.html */ "./src/app/query/query12/q12d/q12d.component.html"),
            styles: [__webpack_require__(/*! ./q12d.component.css */ "./src/app/query/query12/q12d/q12d.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q12dComponent);
    return Q12dComponent;
}());



/***/ }),

/***/ "./src/app/query/query12/query12.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query/query12/query12.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query12/query12.component.html":
/*!******************************************************!*\
  !*** ./src/app/query/query12/query12.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <!-- Category Column -->\n  <ng-container matColumnDef=\"Category\">\n    <th mat-header-cell *matHeaderCellDef> Category </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}}</td>\n  </ng-container>\n\n  <!-- Marka Column -->\n  <ng-container matColumnDef=\"Marka\">\n    <th mat-header-cell *matHeaderCellDef> Marka </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}</td>\n  </ng-container>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Date\">\n    <th mat-header-cell *matHeaderCellDef> Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\n  </ng-container>\n\n  <!-- saleBuy Column -->\n  <ng-container matColumnDef=\"saleBuy\">\n    <th mat-header-cell *matHeaderCellDef> Sale / Buy </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.sale_buy ? 'Buy' : 'Sale'}} </td>\n  </ng-container>\n\n  <!-- Price Column -->\n  <ng-container matColumnDef=\"Price\">\n    <th mat-header-cell *matHeaderCellDef> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator #paginator\n               [length]=\"dataSource.filteredData.length\"\n               [pageIndex]=\"0\"\n               [pageSize]=\"10\"\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/query/query12/query12.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query/query12/query12.component.ts ***!
  \****************************************************/
/*! exports provided: Query12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query12Component", function() { return Query12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q12d_q12d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q12d/q12d.component */ "./src/app/query/query12/q12d/q12d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query12Component = /** @class */ (function () {
    function Query12Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Category', 'Marka', 'Date', 'saleBuy', 'Price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query12Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query12Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q12d_q12d_component__WEBPACK_IMPORTED_MODULE_3__["Q12dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query12Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query12(this.query.dialogsForm.status, this.query.dialogsForm.date_start, this.query.dialogsForm.date_finish).subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query12Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query12Component.prototype, "sort", void 0);
    Query12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query12',
            template: __webpack_require__(/*! ./query12.component.html */ "./src/app/query/query12/query12.component.html"),
            styles: [__webpack_require__(/*! ./query12.component.css */ "./src/app/query/query12/query12.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query12Component);
    return Query12Component;
}());



/***/ }),

/***/ "./src/app/query/query13/q13d/q13d.component.css":
/*!*******************************************************!*\
  !*** ./src/app/query/query13/q13d/q13d.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query13/q13d/q13d.component.html":
/*!********************************************************!*\
  !*** ./src/app/query/query13/q13d/q13d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Brigadir</mat-label>\n          <mat-select (selectionChange)=\"selectedBrigadir($event.value)\">\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let item of brigadirs\" [value]=\"item.id\">\n              {{item.name}} - {{item.surname}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <button mat-button\n                color=\"primary\"\n                [disabled]=\"!formControl.valid\"\n                [mat-dialog-close]=\"1\"\n                (click)=\"stop()\">\n          Create\n        </button>\n        <button mat-button\n                color=\"warn\"\n                (click)=\"onNoClick()\"\n                tabindex=\"-1\">\n          Cancel\n        </button>\n      </mat-grid-tile>\n    </form>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/query/query13/q13d/q13d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/query/query13/q13d/q13d.component.ts ***!
  \******************************************************/
/*! exports provided: Q13dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q13dComponent", function() { return Q13dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_brigadir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/brigadir.service */ "./src/app/services/brigadir.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var Q13dComponent = /** @class */ (function () {
    function Q13dComponent(_dialog, _brigadir, query, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._brigadir = _brigadir;
        this.query = query;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q13dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            brigadir: null,
        });
        this.getBrigadirs();
    };
    Q13dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q13dComponent.prototype.stop = function () {
        this.query.dialogsForm = this.form.value;
    };
    Q13dComponent.prototype.selectedBrigadir = function (event) {
        var _this = this;
        this._brigadir.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                brigadir: res.id
            });
        });
    };
    Q13dComponent.prototype.getBrigadirs = function () {
        var _this = this;
        this._brigadir.getAll().subscribe(function (res) {
            _this.brigadirs = res;
        });
    };
    Q13dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q13d',
            template: __webpack_require__(/*! ./q13d.component.html */ "./src/app/query/query13/q13d/q13d.component.html"),
            styles: [__webpack_require__(/*! ./q13d.component.css */ "./src/app/query/query13/q13d/q13d.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_brigadir_service__WEBPACK_IMPORTED_MODULE_5__["BrigadirService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], Q13dComponent);
    return Q13dComponent;
}());



/***/ }),

/***/ "./src/app/query/query13/query13.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query/query13/query13.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query13/query13.component.html":
/*!******************************************************!*\
  !*** ./src/app/query/query13/query13.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <!-- PersonalName Column -->\n  <ng-container matColumnDef=\"PersonalName\">\n    <th mat-header-cell *matHeaderCellDef> Personal Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\n  </ng-container>\n\n  <!-- DriversName Column -->\n  <ng-container matColumnDef=\"DriversName\">\n    <th mat-header-cell *matHeaderCellDef> Drivers Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoDrivers.name}} {{element.autoDrivers.surname}}</td>\n  </ng-container>\n\n  <!-- BrigadaName Column -->\n  <ng-container matColumnDef=\"BrigadaName\">\n    <th mat-header-cell *matHeaderCellDef> Brigada Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigada.name}}</td>\n  </ng-container>\n\n  <!-- BrigadirName Column -->\n  <ng-container matColumnDef=\"BrigadirName\">\n    <th mat-header-cell *matHeaderCellDef> Brigadir Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigadir.name}} {{element.autoBrigadir.surname}}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator #paginator\n               [length]=\"dataSource.filteredData.length\"\n               [pageIndex]=\"0\"\n               [pageSize]=\"10\"\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/query/query13/query13.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query/query13/query13.component.ts ***!
  \****************************************************/
/*! exports provided: Query13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query13Component", function() { return Query13Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q13d_q13d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q13d/q13d.component */ "./src/app/query/query13/q13d/q13d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query13Component = /** @class */ (function () {
    function Query13Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query13Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query13Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q13d_q13d_component__WEBPACK_IMPORTED_MODULE_3__["Q13dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query13Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query13(this.query.dialogsForm.brigadir).subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query13Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query13Component.prototype, "sort", void 0);
    Query13Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query13',
            template: __webpack_require__(/*! ./query13.component.html */ "./src/app/query/query13/query13.component.html"),
            styles: [__webpack_require__(/*! ./query13.component.css */ "./src/app/query/query13/query13.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query13Component);
    return Query13Component;
}());



/***/ }),

/***/ "./src/app/query/query14/q14d/q14d.component.css":
/*!*******************************************************!*\
  !*** ./src/app/query/query14/q14d/q14d.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query14/q14d/q14d.component.html":
/*!********************************************************!*\
  !*** ./src/app/query/query14/q14d/q14d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Person</mat-label>\n          <mat-select (selectionChange)=\"selectedPerson($event.value)\">\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let item of persons\" [value]=\"item.id\">\n              {{item.name}} - {{item.surname}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <mat-label>Auto</mat-label>\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a start date\" formControlName=\"date_start\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a finish date\" formControlName=\"date_finish\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <button mat-button\n                color=\"primary\"\n                [disabled]=\"!formControl.valid\"\n                [mat-dialog-close]=\"1\"\n                (click)=\"stop()\">\n          Create\n        </button>\n        <button mat-button\n                color=\"warn\"\n                (click)=\"onNoClick()\"\n                tabindex=\"-1\">\n          Cancel\n        </button>\n      </mat-grid-tile>\n\n    </form>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/query/query14/q14d/q14d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/query/query14/q14d/q14d.component.ts ***!
  \******************************************************/
/*! exports provided: Q14dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q14dComponent", function() { return Q14dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var Q14dComponent = /** @class */ (function () {
    function Q14dComponent(_dialog, query, _auto, _person, formBuilder, datepipe, dialogRef, data) {
        this._dialog = _dialog;
        this.query = query;
        this._auto = _auto;
        this._person = _person;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.dialogRef = dialogRef;
        this.data = data;
        this.aut = null;
    }
    Q14dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            person: null,
            auto: null,
            date_start: null,
            date_finish: null
        });
        this.getPersons();
        this.getAutos();
    };
    Q14dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q14dComponent.prototype.stop = function () {
        this.form.setValue({
            person: this.person,
            auto: this.aut,
            date_start: this.datepipe.transform(this.form.getRawValue().date_start, 'yyyy-MM-dd'),
            date_finish: this.datepipe.transform(this.form.getRawValue().date_finish, 'yyyy-MM-dd')
        });
        this.query.dialogsForm = this.form.value;
    };
    Q14dComponent.prototype.selectedPerson = function (event) {
        var _this = this;
        this._person.getSingle(event).subscribe(function (res) {
            _this.person = res.id;
        });
    };
    Q14dComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.aut = res.id;
        });
    };
    Q14dComponent.prototype.getPersons = function () {
        var _this = this;
        this._person.getAll().subscribe(function (res) {
            _this.persons = res;
        });
    };
    Q14dComponent.prototype.getAutos = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    };
    Q14dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q14d',
            template: __webpack_require__(/*! ./q14d.component.html */ "./src/app/query/query14/q14d/q14d.component.html"),
            styles: [__webpack_require__(/*! ./q14d.component.css */ "./src/app/query/query14/q14d/q14d.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_3__["QueryService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_7__["AutoService"],
            _services_personal_service__WEBPACK_IMPORTED_MODULE_6__["PersonalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q14dComponent);
    return Q14dComponent;
}());



/***/ }),

/***/ "./src/app/query/query14/query14.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query/query14/query14.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query14/query14.component.html":
/*!******************************************************!*\
  !*** ./src/app/query/query14/query14.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"ProblemName\">\n    <th mat-header-cell *matHeaderCellDef> Problem </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoProblem.name}} </td>\n  </ng-container>\n\n  <!-- Auto Column -->\n  <ng-container matColumnDef=\"Auto\">\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}: {{element.auto.autoCategory.name}}</td>\n  </ng-container>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Date\">\n    <th mat-header-cell *matHeaderCellDef> Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\n  </ng-container>\n\n  <!-- PersonalName Column -->\n  <ng-container matColumnDef=\"PersonalName\">\n    <th mat-header-cell *matHeaderCellDef> Personal </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\n  </ng-container>\n\n  <!-- Price Column -->\n  <ng-container matColumnDef=\"Price\">\n    <th mat-header-cell *matHeaderCellDef> Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\n\n"

/***/ }),

/***/ "./src/app/query/query14/query14.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query/query14/query14.component.ts ***!
  \****************************************************/
/*! exports provided: Query14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query14Component", function() { return Query14Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q14d_q14d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q14d/q14d.component */ "./src/app/query/query14/q14d/q14d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query14Component = /** @class */ (function () {
    function Query14Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query14Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query14Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q14d_q14d_component__WEBPACK_IMPORTED_MODULE_3__["Q14dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query14Component.prototype.executeQuery = function () {
        var _this = this;
        if (this.query.dialogsForm.person !== null && this.query.dialogsForm.auto === null) {
            this.query.query14_1(this.query.dialogsForm.person, this.query.dialogsForm.date_start, this.query.dialogsForm.date_finish).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else if (this.query.dialogsForm.person !== null && this.query.dialogsForm.auto !== null) {
            this.query.query14_2(this.query.dialogsForm.person, this.query.dialogsForm.auto, this.query.dialogsForm.date_start, this.query.dialogsForm.date_finish).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else if (this.query.dialogsForm.auto !== null && (this.query.dialogsForm.category === null && this.query.dialogsForm.marka === null)) {
            this.query.query6_3(this.query.dialogsForm.auto).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query14Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query14Component.prototype, "sort", void 0);
    Query14Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query14',
            template: __webpack_require__(/*! ./query14.component.html */ "./src/app/query/query14/query14.component.html"),
            styles: [__webpack_require__(/*! ./query14.component.css */ "./src/app/query/query14/query14.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query14Component);
    return Query14Component;
}());



/***/ }),

/***/ "./src/app/query/query2/q2d/q2d.component.css":
/*!****************************************************!*\
  !*** ./src/app/query/query2/q2d/q2d.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query2/q2d/q2d.component.html":
/*!*****************************************************!*\
  !*** ./src/app/query/query2/q2d/q2d.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Create\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/query/query2/q2d/q2d.component.ts":
/*!***************************************************!*\
  !*** ./src/app/query/query2/q2d/q2d.component.ts ***!
  \***************************************************/
/*! exports provided: Q2dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q2dComponent", function() { return Q2dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Q2dComponent = /** @class */ (function () {
    function Q2dComponent(_dialog, _route, _auto, query, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._route = _route;
        this._auto = _auto;
        this.query = query;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q2dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            auto: null
        });
        this.getAutos();
    };
    Q2dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q2dComponent.prototype.stop = function () {
        this.form.setValue({ auto: this.selectAuto });
        this.query.dialogsForm = this.form.value;
    };
    Q2dComponent.prototype.getAutos = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    };
    Q2dComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        if (event !== undefined) {
            this._auto.getSingle(event).subscribe(function (res) {
                _this.selectAuto = res.id;
            });
        }
        else {
            this.selectAuto = null;
        }
    };
    Q2dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q2d',
            template: __webpack_require__(/*! ./q2d.component.html */ "./src/app/query/query2/q2d/q2d.component.html"),
            styles: [__webpack_require__(/*! ./q2d.component.css */ "./src/app/query/query2/q2d/q2d.component.css")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_4__["AutoService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_6__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q2dComponent);
    return Q2dComponent;
}());



/***/ }),

/***/ "./src/app/query/query2/query2.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query2/query2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query2/query2.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query2/query2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- SurName Column -->\r\n  <ng-container matColumnDef=\"SurName\">\r\n    <th mat-header-cell *matHeaderCellDef> SurName </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/query/query2/query2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query2/query2.component.ts ***!
  \**************************************************/
/*! exports provided: Query2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query2Component", function() { return Query2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _q2d_q2d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q2d/q2d.component */ "./src/app/query/query2/q2d/q2d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query2Component = /** @class */ (function () {
    function Query2Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'SurName', 'Category', 'Marka'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.openDialog();
    }
    Query2Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query2Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q2d_q2d_component__WEBPACK_IMPORTED_MODULE_3__["Q2dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query2Component.prototype.executeQuery = function () {
        var _this = this;
        if (this.query.dialogsForm.auto !== null) {
            this.query.query2_2(this.query.dialogsForm.auto).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else {
            this.query.query2_1().subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], Query2Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], Query2Component.prototype, "sort", void 0);
    Query2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query2',
            template: __webpack_require__(/*! ./query2.component.html */ "./src/app/query/query2/query2.component.html"),
            styles: [__webpack_require__(/*! ./query2.component.css */ "./src/app/query/query2/query2.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_1__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], Query2Component);
    return Query2Component;
}());



/***/ }),

/***/ "./src/app/query/query3/query3.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query3/query3.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query3/query3.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query3/query3.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- SurName Column -->\r\n  <ng-container matColumnDef=\"SurName\">\r\n    <th mat-header-cell *matHeaderCellDef> SurName </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Marka Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n"

/***/ }),

/***/ "./src/app/query/query3/query3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query3/query3.component.ts ***!
  \**************************************************/
/*! exports provided: Query3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query3Component", function() { return Query3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query3Component = /** @class */ (function () {
    function Query3Component(query) {
        this.query = query;
        this.displayedColumns = ['id', 'Name', 'SurName', 'Category', 'Marka'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.executeQuery();
    }
    Query3Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query3Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query3().subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query3Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query3Component.prototype, "sort", void 0);
    Query3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query3',
            template: __webpack_require__(/*! ./query3.component.html */ "./src/app/query/query3/query3.component.html"),
            styles: [__webpack_require__(/*! ./query3.component.css */ "./src/app/query/query3/query3.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], Query3Component);
    return Query3Component;
}());



/***/ }),

/***/ "./src/app/query/query4/query4.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query4/query4.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query4/query4.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query4/query4.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Street Column -->\r\n  <ng-container matColumnDef=\"Street\">\r\n    <th mat-header-cell *matHeaderCellDef> Street </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoStreet.street_start}} - {{element.autoStreet.street_finish}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Auto\">\r\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoCategory.name}} - {{element.auto.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- PassangerCount Column -->\r\n  <ng-container matColumnDef=\"Count\">\r\n    <th mat-header-cell *matHeaderCellDef> Number of passengers </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.passanger_count}} </td>\r\n  </ng-container>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/query/query4/query4.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query4/query4.component.ts ***!
  \**************************************************/
/*! exports provided: Query4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query4Component", function() { return Query4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query4Component = /** @class */ (function () {
    function Query4Component(query) {
        this.query = query;
        this.displayedColumns = ['id', 'Street', 'Auto', 'Count'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.executeQuery();
    }
    Query4Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query4Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query4().subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query4Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query4Component.prototype, "sort", void 0);
    Query4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query4',
            template: __webpack_require__(/*! ./query4.component.html */ "./src/app/query/query4/query4.component.html"),
            styles: [__webpack_require__(/*! ./query4.component.css */ "./src/app/query/query4/query4.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], Query4Component);
    return Query4Component;
}());



/***/ }),

/***/ "./src/app/query/query6/q6d/q6d.component.css":
/*!****************************************************!*\
  !*** ./src/app/query/query6/q6d/q6d.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query6/q6d/q6d.component.html":
/*!*****************************************************!*\
  !*** ./src/app/query/query6/q6d/q6d.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedCategory($event.value)\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of categorys\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Marka</mat-label>\r\n          <mat-select (selectionChange)=\"selectedMarka($event.value)\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of markas\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Auto</mat-label>\r\n          <mat-select (selectionChange)=\"selectedAuto($event.value)\" formControlName=\"auto\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of auto\" [value]=\"item.id\">\r\n              {{item.autoCategory.name}} - {{item.autoMarka.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Create\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/query/query6/q6d/q6d.component.ts":
/*!***************************************************!*\
  !*** ./src/app/query/query6/q6d/q6d.component.ts ***!
  \***************************************************/
/*! exports provided: Q6dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q6dComponent", function() { return Q6dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_auto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auto.service */ "./src/app/services/auto.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_marka_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/marka.service */ "./src/app/services/marka.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var Q6dComponent = /** @class */ (function () {
    function Q6dComponent(_dialog, _auto, _category, _marka, query, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._auto = _auto;
        this._category = _category;
        this._marka = _marka;
        this.query = query;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q6dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            category: null,
            marka: null,
            auto: null,
        });
        this.getAutos();
        this.getCategorys();
        this.getMarkas();
    };
    Q6dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q6dComponent.prototype.stop = function () {
        this.query.dialogsForm = this.form.value;
    };
    Q6dComponent.prototype.selectedAuto = function (event) {
        var _this = this;
        this._auto.getSingle(event).subscribe(function (res) {
            _this.form.getRawValue().auto = res.id;
        });
    };
    Q6dComponent.prototype.selectedCategory = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                category: res.name
            });
        });
    };
    Q6dComponent.prototype.selectedMarka = function (event) {
        var _this = this;
        this._marka.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                marka: res.name
            });
        });
    };
    Q6dComponent.prototype.getAutos = function () {
        var _this = this;
        this._auto.getAll().subscribe(function (res) {
            _this.auto = res;
        });
    };
    Q6dComponent.prototype.getCategorys = function () {
        var _this = this;
        this._category.getAll().subscribe(function (res) {
            _this.categorys = res;
        });
    };
    Q6dComponent.prototype.getMarkas = function () {
        var _this = this;
        this._marka.getAll().subscribe(function (res) {
            _this.markas = res;
        });
    };
    Q6dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q6d',
            template: __webpack_require__(/*! ./q6d.component.html */ "./src/app/query/query6/q6d/q6d.component.html"),
            styles: [__webpack_require__(/*! ./q6d.component.css */ "./src/app/query/query6/q6d/q6d.component.css")]
        }),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_auto_service__WEBPACK_IMPORTED_MODULE_3__["AutoService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _services_marka_service__WEBPACK_IMPORTED_MODULE_7__["MarkaService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q6dComponent);
    return Q6dComponent;
}());



/***/ }),

/***/ "./src/app/query/query6/query6.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query6/query6.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query6/query6.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query6/query6.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"ProblemName\">\r\n    <th mat-header-cell *matHeaderCellDef> Problem </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoProblem.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Auto Column -->\r\n  <ng-container matColumnDef=\"Auto\">\r\n    <th mat-header-cell *matHeaderCellDef> Auto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.auto.autoMarka.name}}: {{element.auto.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Date Column -->\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell *matHeaderCellDef> Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd/MM/yyyy'}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PersonalName Column -->\r\n  <ng-container matColumnDef=\"PersonalName\">\r\n    <th mat-header-cell *matHeaderCellDef> Personal </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Price Column -->\r\n  <ng-container matColumnDef=\"Price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n"

/***/ }),

/***/ "./src/app/query/query6/query6.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query6/query6.component.ts ***!
  \**************************************************/
/*! exports provided: Query6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query6Component", function() { return Query6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q6d_q6d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q6d/q6d.component */ "./src/app/query/query6/q6d/q6d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query6Component = /** @class */ (function () {
    function Query6Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'ProblemName', 'Auto', 'Date', 'PersonalName', 'Price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query6Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query6Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q6d_q6d_component__WEBPACK_IMPORTED_MODULE_3__["Q6dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query6Component.prototype.executeQuery = function () {
        var _this = this;
        if (this.query.dialogsForm.category !== null && (this.query.dialogsForm.marka === null && this.query.dialogsForm.auto === null)) {
            this.query.query6_1(this.query.dialogsForm.category).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else if (this.query.dialogsForm.marka !== null && (this.query.dialogsForm.category === null && this.query.dialogsForm.auto === null)) {
            this.query.query6_2(this.query.dialogsForm.marka).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else if (this.query.dialogsForm.auto !== null && (this.query.dialogsForm.category === null && this.query.dialogsForm.marka === null)) {
            this.query.query6_3(this.query.dialogsForm.auto).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query6Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query6Component.prototype, "sort", void 0);
    Query6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query6',
            template: __webpack_require__(/*! ./query6.component.html */ "./src/app/query/query6/query6.component.html"),
            styles: [__webpack_require__(/*! ./query6.component.css */ "./src/app/query/query6/query6.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query6Component);
    return Query6Component;
}());



/***/ }),

/***/ "./src/app/query/query7/query7.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query7/query7.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query7/query7.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query7/query7.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- PersonalName Column -->\r\n  <ng-container matColumnDef=\"PersonalName\">\r\n    <th mat-header-cell *matHeaderCellDef> Personal Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoPersonal.name}} {{element.autoPersonal.surname}} </td>\r\n  </ng-container>\r\n\r\n  <!-- DriversName Column -->\r\n  <ng-container matColumnDef=\"DriversName\">\r\n    <th mat-header-cell *matHeaderCellDef> Drivers Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoDrivers.name}} {{element.autoDrivers.surname}}</td>\r\n  </ng-container>\r\n\r\n  <!-- BrigadaName Column -->\r\n  <ng-container matColumnDef=\"BrigadaName\">\r\n    <th mat-header-cell *matHeaderCellDef> Brigada Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigada.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- BrigadirName Column -->\r\n  <ng-container matColumnDef=\"BrigadirName\">\r\n    <th mat-header-cell *matHeaderCellDef> Brigadir Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoBrigadir.name}} {{element.autoBrigadir.surname}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator #paginator\r\n               [length]=\"dataSource.filteredData.length\"\r\n               [pageIndex]=\"0\"\r\n               [pageSize]=\"10\"\r\n               [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n"

/***/ }),

/***/ "./src/app/query/query7/query7.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query7/query7.component.ts ***!
  \**************************************************/
/*! exports provided: Query7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query7Component", function() { return Query7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query7Component = /** @class */ (function () {
    function Query7Component(query) {
        this.query = query;
        this.displayedColumns = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.executeQuery();
    }
    Query7Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query7Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query7().subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query7Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query7Component.prototype, "sort", void 0);
    Query7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query7',
            template: __webpack_require__(/*! ./query7.component.html */ "./src/app/query/query7/query7.component.html"),
            styles: [__webpack_require__(/*! ./query7.component.css */ "./src/app/query/query7/query7.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], Query7Component);
    return Query7Component;
}());



/***/ }),

/***/ "./src/app/query/query8/q8d/q8d.component.css":
/*!****************************************************!*\
  !*** ./src/app/query/query8/q8d/q8d.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  width: 400px;\r\n  height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/query/query8/q8d/q8d.component.html":
/*!*****************************************************!*\
  !*** ./src/app/query/query8/q8d/q8d.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <mat-grid-list cols=\"1\" rowHeight=\"60px\">\r\n    <form class=\"form\" #formControl=\"ngForm\" [formGroup]=\"form\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Category</mat-label>\r\n          <mat-select (selectionChange)=\"selectedCategory($event.value)\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let item of categorys\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <button mat-button\r\n                color=\"primary\"\r\n                [disabled]=\"!formControl.valid\"\r\n                [mat-dialog-close]=\"1\"\r\n                (click)=\"stop()\">\r\n          Create\r\n        </button>\r\n        <button mat-button\r\n                color=\"warn\"\r\n                (click)=\"onNoClick()\"\r\n                tabindex=\"-1\">\r\n          Cancel\r\n        </button>\r\n      </mat-grid-tile>\r\n    </form>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/query/query8/q8d/q8d.component.ts":
/*!***************************************************!*\
  !*** ./src/app/query/query8/q8d/q8d.component.ts ***!
  \***************************************************/
/*! exports provided: Q8dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q8dComponent", function() { return Q8dComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var Q8dComponent = /** @class */ (function () {
    function Q8dComponent(_dialog, _category, query, formBuilder, dialogRef, data) {
        this._dialog = _dialog;
        this._category = _category;
        this.query = query;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Q8dComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            category: null,
        });
        this.getCategorys();
    };
    Q8dComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Q8dComponent.prototype.stop = function () {
        this.query.dialogsForm = this.form.value;
    };
    Q8dComponent.prototype.selectedCategory = function (event) {
        var _this = this;
        this._category.getSingle(event).subscribe(function (res) {
            _this.form.patchValue({
                category: res.name
            });
        });
    };
    Q8dComponent.prototype.getCategorys = function () {
        var _this = this;
        this._category.getAll().subscribe(function (res) {
            _this.categorys = res;
        });
    };
    Q8dComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-q8d',
            template: __webpack_require__(/*! ./q8d.component.html */ "./src/app/query/query8/q8d/q8d.component.html"),
            styles: [__webpack_require__(/*! ./q8d.component.css */ "./src/app/query/query8/q8d/q8d.component.css")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], Q8dComponent);
    return Q8dComponent;
}());



/***/ }),

/***/ "./src/app/query/query8/query8.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query8/query8.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query8/query8.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query8/query8.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Street Column -->\r\n  <ng-container matColumnDef=\"Street\">\r\n    <th mat-header-cell *matHeaderCellDef> Street </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.street}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Category Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" pageSize=\"10\"></mat-paginator>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/query/query8/query8.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query8/query8.component.ts ***!
  \**************************************************/
/*! exports provided: Query8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query8Component", function() { return Query8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _q8d_q8d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./q8d/q8d.component */ "./src/app/query/query8/q8d/q8d.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Query8Component = /** @class */ (function () {
    function Query8Component(query, dialog) {
        this.query = query;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'Name', 'Street', 'Category'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.openDialog();
    }
    Query8Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query8Component.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_q8d_q8d_component__WEBPACK_IMPORTED_MODULE_3__["Q8dComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res === 1) {
                _this.executeQuery();
            }
        });
    };
    Query8Component.prototype.executeQuery = function () {
        var _this = this;
        if (this.query.dialogsForm.category !== null) {
            this.query.query8_2(this.query.dialogsForm.category).subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
        else {
            this.query.query8_1().subscribe(function (res) {
                console.log(res);
                _this.dataSource.data = res;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query8Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query8Component.prototype, "sort", void 0);
    Query8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query8',
            template: __webpack_require__(/*! ./query8.component.html */ "./src/app/query/query8/query8.component.html"),
            styles: [__webpack_require__(/*! ./query8.component.css */ "./src/app/query/query8/query8.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], Query8Component);
    return Query8Component;
}());



/***/ }),

/***/ "./src/app/query/query9/query9.component.css":
/*!***************************************************!*\
  !*** ./src/app/query/query9/query9.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/query/query9/query9.component.html":
/*!****************************************************!*\
  !*** ./src/app/query/query9/query9.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"Category\">\r\n    <th mat-header-cell *matHeaderCellDef> Category </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoCategory.name}}</td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"Marka\">\r\n    <th mat-header-cell *matHeaderCellDef> Marka </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.autoMarka.name}}</td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  <!--<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"tableClick(row.id)\"></tr>-->\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/query/query9/query9.component.ts":
/*!**************************************************!*\
  !*** ./src/app/query/query9/query9.component.ts ***!
  \**************************************************/
/*! exports provided: Query9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query9Component", function() { return Query9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Query9Component = /** @class */ (function () {
    function Query9Component(query) {
        this.query = query;
        this.displayedColumns = ['id', 'Category', 'Marka'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.executeQuery();
    }
    Query9Component.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    Query9Component.prototype.executeQuery = function () {
        var _this = this;
        this.query.query1().subscribe(function (res) {
            console.log(res);
            _this.dataSource.data = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], Query9Component.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], Query9Component.prototype, "sort", void 0);
    Query9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query9',
            template: __webpack_require__(/*! ./query9.component.html */ "./src/app/query/query9/query9.component.html"),
            styles: [__webpack_require__(/*! ./query9.component.css */ "./src/app/query/query9/query9.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"]])
    ], Query9Component);
    return Query9Component;
}());



/***/ }),

/***/ "./src/app/services/api-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http, router, _error) {
        this.http = http;
        this.router = router;
        this._error = _error;
        this.url = this.router.url;
    }
    ApiServiceService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/services/auto.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auto.service.ts ***!
  \******************************************/
/*! exports provided: AutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoService", function() { return AutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutoService = /** @class */ (function () {
    function AutoService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    AutoService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiAuto + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.autos = res;
            return _this.autos;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    AutoService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiAuto + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.auto = res;
            return _this.auto;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    AutoService.prototype.update = function (id, auto) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiAuto + '/' + id;
        var body = JSON.stringify(auto);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    AutoService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiAuto + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    AutoService.prototype.add = function (auto) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiAuto + '/add';
        var body = JSON.stringify(auto);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    AutoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], AutoService);
    return AutoService;
}());



/***/ }),

/***/ "./src/app/services/brigada.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/brigada.service.ts ***!
  \*********************************************/
/*! exports provided: BrigadaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrigadaService", function() { return BrigadaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrigadaService = /** @class */ (function () {
    function BrigadaService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    BrigadaService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigada + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadaService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigada + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadaService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadaService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigada + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadaService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigada + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], BrigadaService);
    return BrigadaService;
}());



/***/ }),

/***/ "./src/app/services/brigadir.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/brigadir.service.ts ***!
  \**********************************************/
/*! exports provided: BrigadirService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrigadirService", function() { return BrigadirService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrigadirService = /** @class */ (function () {
    function BrigadirService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    BrigadirService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigadir + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadirService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigadir + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadirService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigadir + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadirService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigadir + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadirService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBrigadir + '/add';
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    BrigadirService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], BrigadirService);
    return BrigadirService;
}());



/***/ }),

/***/ "./src/app/services/category-personal.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category-personal.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryPersonalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPersonalService", function() { return CategoryPersonalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPersonalService = /** @class */ (function () {
    function CategoryPersonalService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    CategoryPersonalService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategoryPersonal + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryPersonalService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategoryPersonal + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryPersonalService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategoryPersonal + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryPersonalService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategoryPersonal + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryPersonalService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategoryPersonal + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryPersonalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], CategoryPersonalService);
    return CategoryPersonalService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryService = /** @class */ (function () {
    function CategoryService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    CategoryService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.categorys = res;
            return _this.categorys;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.category = res;
            return _this.category;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryService.prototype.update = function (id, category) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/' + id;
        var body = JSON.stringify(category);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryService.prototype.add = function (category) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiCategory + '/add';
        var body = JSON.stringify(category);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.dialogUpdate = function (object) {
        this.dialogData = object;
    };
    DialogService.prototype.dialogAdd = function (object) {
        this.dialogData = object;
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/driver.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/driver.service.ts ***!
  \********************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverService = /** @class */ (function () {
    function DriverService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    DriverService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDriver + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.drivers = res;
            return _this.drivers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    DriverService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDriver + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.driver = res;
            return _this.driver;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    DriverService.prototype.update = function (id, driver) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDriver + '/' + id;
        var body = JSON.stringify(driver);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    DriverService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDriver + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    DriverService.prototype.add = function (driver) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiDriver + '/add';
        var body = JSON.stringify(driver);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    DriverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], DriverService);
    return DriverService;
}());



/***/ }),

/***/ "./src/app/services/error.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorService = /** @class */ (function () {
    function ErrorService(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    ErrorService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupService = /** @class */ (function () {
    function GroupService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    GroupService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiGroup + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    GroupService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiGroup + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    GroupService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiGroup + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    GroupService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiGroup + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    GroupService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiGroup + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/services/hard-route.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/hard-route.service.ts ***!
  \************************************************/
/*! exports provided: HardRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardRouteService", function() { return HardRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HardRouteService = /** @class */ (function () {
    function HardRouteService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    HardRouteService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHarRoute + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    HardRouteService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHarRoute + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    HardRouteService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHarRoute + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    HardRouteService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHarRoute + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    HardRouteService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiHarRoute + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    HardRouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], HardRouteService);
    return HardRouteService;
}());



/***/ }),

/***/ "./src/app/services/infrastruct.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/infrastruct.service.ts ***!
  \*************************************************/
/*! exports provided: InfrastructService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructService", function() { return InfrastructService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfrastructService = /** @class */ (function () {
    function InfrastructService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    InfrastructService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiInfrastruct + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    InfrastructService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiInfrastruct + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    InfrastructService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiInfrastruct + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    InfrastructService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiInfrastruct + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    InfrastructService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiInfrastruct + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    InfrastructService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], InfrastructService);
    return InfrastructService;
}());



/***/ }),

/***/ "./src/app/services/marka.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/marka.service.ts ***!
  \*******************************************/
/*! exports provided: MarkaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkaService", function() { return MarkaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkaService = /** @class */ (function () {
    function MarkaService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    MarkaService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiMarka + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.markas = res;
            return _this.markas;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    MarkaService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiMarka + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.marka = res;
            return _this.marka;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    MarkaService.prototype.update = function (id, marka) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiMarka + '/' + id;
        var body = JSON.stringify(marka);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    MarkaService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiMarka + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    MarkaService.prototype.add = function (marka) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiMarka + '/add';
        var body = JSON.stringify(marka);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._error.handleError));
    };
    MarkaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]])
    ], MarkaService);
    return MarkaService;
}());



/***/ }),

/***/ "./src/app/services/personal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/personal.service.ts ***!
  \**********************************************/
/*! exports provided: PersonalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalService", function() { return PersonalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalService = /** @class */ (function () {
    function PersonalService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    PersonalService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPersonal + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    PersonalService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPersonal + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    PersonalService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPersonal + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    PersonalService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPersonal + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    PersonalService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPersonal + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    PersonalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], PersonalService);
    return PersonalService;
}());



/***/ }),

/***/ "./src/app/services/problem.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/problem.service.ts ***!
  \*********************************************/
/*! exports provided: ProblemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemService", function() { return ProblemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProblemService = /** @class */ (function () {
    function ProblemService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    ProblemService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiProblem + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ProblemService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiProblem + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ProblemService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiProblem + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ProblemService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiProblem + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ProblemService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiProblem + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    ProblemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], ProblemService);
    return ProblemService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QueryService = /** @class */ (function () {
    function QueryService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    QueryService.prototype.query1 = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auto/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query2_1 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'drivers/getAll';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query2_2 = function (auto) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'drivers/getAllByAuto';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auto', auto);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query3 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'drivers/getAll';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query4 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'route/getAll';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query6_1 = function (category) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByCategory';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query6_2 = function (marka) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByMarka';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('marka', marka);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query6_3 = function (auto) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByAuto';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auto', auto);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query7 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'group/getAll';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query8_1 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'infrastruct/getAllGarage';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query8_2 = function (category) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'infrastruct/getAllGarage';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query9 = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auto/getAll';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query10 = function (auto, date) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'hardRoute/findByAutoAndDate';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auto_id', auto).set('date', date);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query11 = function (category, detail) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByCarTypeAndDetail';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('carType', category).set('detail', detail);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query12 = function (status, date_start, date_finish) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'saleBuy/getAllByDate';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('status', status).set('date_start', date_start).set('date_finish', date_finish);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query13 = function (brigadir) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'group/getBrigadir';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', brigadir);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query14_1 = function (person, date_start, date_finish) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByPersonAndDate';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('person', person).set('date_start', date_start).set('date_finish', date_finish);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService.prototype.query14_2 = function (person, auto, date_start, date_finish) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'repair/getAllByPersonAndDate';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('person', person).set('auto', auto).set('date_start', date_start).set('date_finish', date_finish);
        return this.http.get(url, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/services/repair.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/repair.service.ts ***!
  \********************************************/
/*! exports provided: RepairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairService", function() { return RepairService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepairService = /** @class */ (function () {
    function RepairService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    RepairService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRepair + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RepairService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRepair + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RepairService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRepair + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RepairService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRepair + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RepairService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRepair + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RepairService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], RepairService);
    return RepairService;
}());



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RouteService = /** @class */ (function () {
    function RouteService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    RouteService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoute + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RouteService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoute + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RouteService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoute + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RouteService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoute + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RouteService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoute + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    RouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/services/sale-buy.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sale-buy.service.ts ***!
  \**********************************************/
/*! exports provided: SaleBuyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleBuyService", function() { return SaleBuyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaleBuyService = /** @class */ (function () {
    function SaleBuyService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    SaleBuyService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiSaleBuy + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    SaleBuyService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiSaleBuy + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    SaleBuyService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiSaleBuy + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    SaleBuyService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiSaleBuy + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    SaleBuyService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiSaleBuy + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    SaleBuyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], SaleBuyService);
    return SaleBuyService;
}());



/***/ }),

/***/ "./src/app/services/street.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/street.service.ts ***!
  \********************************************/
/*! exports provided: StreetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetService", function() { return StreetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StreetService = /** @class */ (function () {
    function StreetService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    StreetService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiStreet + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.rows = res;
            return _this.rows;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    StreetService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiStreet + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.row = res;
            return _this.row;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    StreetService.prototype.update = function (id, item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiStreet + '/' + id;
        var body = JSON.stringify(item);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedRow = res;
            return _this.editedRow;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    StreetService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiStreet + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    StreetService.prototype.add = function (item) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiStreet + '/add';
        var body = JSON.stringify(item);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newRow = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    StreetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], StreetService);
    return StreetService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./src/app/services/error.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    // dialogData: User;
    function UserService(http, _error) {
        this.http = http;
        this._error = _error;
    }
    UserService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUser + '/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.users = res;
            return _this.users;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    UserService.prototype.getSingle = function (id) {
        var _this = this;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUser + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.user = res;
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    UserService.prototype.update = function (id, user) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUser + '/' + id;
        var body = JSON.stringify(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.editedUser = res;
            return _this.editedUser;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    UserService.prototype.delete = function (id) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUser + '/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.delete(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    UserService.prototype.add = function (user) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUser + '/add';
        var body = JSON.stringify(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.newUser = res;
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this._error.handleError));
    };
    UserService.prototype.getStorageInfo = function () {
        return localStorage.getItem('login');
    };
    UserService.prototype.setStorageInfo = function () {
        localStorage.setItem('login', '');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://vkravchik.herokuapp.com/rest/',
    apiUser: '/users',
    apiDriver: '/drivers',
    apiCategory: '/category',
    apiMarka: '/marka',
    apiAuto: '/auto',
    apiBrigada: '/brigada',
    apiBrigadir: '/brigadir',
    apiCategoryPersonal: '/categoryPersonal',
    apiSaleBuy: '/saleBuy',
    apiHarRoute: '/hardRoute',
    apiInfrastruct: '/infrastruct',
    apiPersonal: '/personal',
    apiProblem: '/problem',
    apiRepair: '/repair',
    apiGroup: '/group',
    apiStreet: '/street',
    apiRoute: '/route',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vadim\IdeaProjects\spring_test_proj\src\main\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map