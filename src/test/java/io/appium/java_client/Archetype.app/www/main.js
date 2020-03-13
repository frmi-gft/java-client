(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, modules-publish, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"starter-app","version":"0.4.0","scripts":{"ng":"ng","start":"ng serve --port 8080","start-open":"ng serve --port 8080 --open","build-dev":"ng build --base-href /","build":"ng build --base-href . && node ./tools/assets-fix.js LOCAL LOCAL && node ./tools/i18n","build-prod":"ng lint StarterApp && npm run test-prod && ng build --prod --aot=false --build--optimizer=false --base-href . && node ./tools/assets-fix.js LOCAL && node ./tools/i18n","build-ios-prod":"ng build --prod --aot=false --build--optimizer=false --base-href . --output-path ../GlobileWebComponent/www && node ./tools/assets-fix.js IOS && node ./tools/i18n","build-ios-prod-dev":"ng build --base-href . --output-path ../GlobileWebComponent/www && node ./tools/assets-fix.js IOS && node ./tools/i18n","build-android-prod":"ng build --prod --aot=false --build--optimizer=false --base-href . --output-path ../app/src/main/assets/www && node ./tools/assets-fix.js ANDROID && node ./tools/i18n","build-android-prod-dev":"ng build --base-href . --output-path ../app/src/main/assets/www && node ./tools/assets-fix.js ANDROID && node ./tools/i18n","test":"ng test StarterApp","test-prod":"BROWSER=NONE ng test StarterApp --watch=false","lint":"ng lint","e2e":"ng e2e"},"private":true,"modules-publish":["StarterApp"],"dependencies":{"@agm/core":"1.0.0","@agm/js-marker-clusterer":"1.0.0","@angular/animations":"~7.2.0","@angular/cdk":"^7.2.0","@angular/common":"~7.2.0","@angular/compiler":"~7.2.0","@angular/core":"~7.2.0","@angular/forms":"~7.2.0","@angular/material":"^7.2.2","@angular/platform-browser":"~7.2.0","@angular/platform-browser-dynamic":"~7.2.0","@angular/router":"~7.2.0","@globile/branch-locator":"^0.8.5","@globile/card-detail":"^0.5.6","@globile/card-management":"^0.5.0","@globile/footer-tabbar":"^0.5.1","@globile/full-menu":"^0.5.4","@globile/global-position":"^0.9.6","@globile/mobile-services":"^0.0.8","@globile/product-detail":"^0.5.2","@ngx-translate/core":"^11.0.1","@ngx-translate/http-loader":"^4.0.0","@types/hammerjs":"^2.0.36","classlist.js":"^1.1.20150312","core-js":"^2.5.4","css-vars-ponyfill":"^2.1.2","d3":"^5.14.2","hammerjs":"^2.0.8","rxjs":"~6.3.3","sn-common-lib":"^0.6.12","va-chatbot":"^1.1.3","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"~0.13.0","@angular-devkit/build-ng-packagr":"~0.13.0","@angular/cli":"~7.3.9","@angular/compiler-cli":"~7.2.0","@angular/language-service":"~7.2.0","@types/googlemaps":"^3.37.7","@types/jasmine":"~2.8.8","@types/jasminewd2":"~2.0.3","@types/node":"^8.9.5","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","js-marker-clusterer":"^1.0.0","karma":"~4.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~2.0.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","ng-packagr":"^4.2.0","prismjs":"^1.17.1","protractor":"~5.4.0","ts-node":"~7.0.0","tsickle":">=0.34.0","tslib":"^1.9.0","tslint":"~5.11.0","typescript":"~3.2.2"}};

/***/ }),

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

/***/ "./src/app/animations/routes.animations.ts":
/*!*************************************************!*\
  !*** ./src/app/animations/routes.animations.ts ***!
  \*************************************************/
/*! exports provided: togglePageAnimation, movePageRigthAnimation, routesInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePageAnimation", function() { return togglePageAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePageRigthAnimation", function() { return movePageRigthAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routesInAnimation", function() { return routesInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const togglePageAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '{{start}}' })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
]);
const movePageRigthAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
        })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
]);
const routesInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> MovePageRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(movePageRigthAnimation)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> TogglePageLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(togglePageAnimation, { params: {
                start: '200%'
            } }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> TogglePageRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(togglePageAnimation, { params: {
                start: '-100%'
            } }),
    ])
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-menu-header [data]=\"headerOptions\"\n(onMenuBack)=\"onMenuClick($event, 0)\"\n(onMenuClick)=\"onMenuClick($event, 1)\"\n\n></sn-menu-header>\n<div class=\"main-content\"\n[ngClass]=\"{\n    footer: footerOptions?.display,\n    header: headerOptions?.display\n}\" >\n    <div class=\"main-view\" [@routeAnimations]=\"prepareRoute(outlet)\">\n        <router-outlet #outlet=\"outlet\"></router-outlet>\n    </div>\n</div>\n<sn-loading class=\"full\"  *ngIf=\"!hideLoading\"></sn-loading>\n\n<lib-va-chatbot [config]=\"vaChatbotConfig\" [context]=\"chatbotContext\" [usertoken]=\"token\" [hidden]=\"!showChatbot\"></lib-va-chatbot>\n<sn-footer-tabbar [options]=\"footerOptions?.menu\" (onClick)='footerOnClick($event)' *ngIf=\"footerOptions?.display\"></sn-footer-tabbar>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sn-menu-header {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff; }\n\nsn-footer-tabbar {\n  position: fixed;\n  width: 100%;\n  bottom: 0; }\n\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  display: -webkit-box;\n  display: flex; }\n\n:host .main-content {\n    min-width: 100%;\n    min-height: 100%; }\n\n:host .main-content .main-view {\n      position: relative;\n      margin-top: 0;\n      margin-bottom: 0;\n      min-width: 100%;\n      min-height: 100%; }\n\n:host .main-content.footer .main-view {\n    margin-bottom: 56px;\n    min-height: calc(100% - 56px); }\n\n:host .main-content.header .main-view {\n    margin-top: 48px;\n    min-height: calc(100% - 48px); }\n\n:host .main-content.footer.header .main-view {\n    min-height: calc(100% - 104px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdmFuLmRpZXouc2FuY2hlei9TYW50YW5kZXIvU3RhcnRlckFwcC1Bbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUViO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFOakI7SUFRUSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBVHhCO01BV1ksa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQWY1QjtJQW9CWSxtQkFBbUI7SUFDbkIsNkJBQTZCLEVBQUE7O0FBckJ6QztJQTBCWSxnQkFBZ0I7SUFDaEIsNkJBQTZCLEVBQUE7O0FBM0J6QztJQWdDWSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNuLW1lbnUtaGVhZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuc24tZm9vdGVyLXRhYmJhcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufVxuOmhvc3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAubWFpbi1jb250ZW50e1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC5tYWluLXZpZXcge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYWluLWNvbnRlbnQuZm9vdGVyIHtcbiAgICAgICAgLm1haW4tdmlld3tcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWFpbi1jb250ZW50LmhlYWRlciB7XG4gICAgICAgIC5tYWluLXZpZXd7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1haW4tY29udGVudC5mb290ZXIuaGVhZGVyIHtcbiAgICAgICAgLm1haW4tdmlld3tcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNHB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _services_init_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/init.service */ "./src/app/services/init.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _consts_footerMenu_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consts/footerMenu-const */ "./src/app/consts/footerMenu-const.ts");
/* harmony import */ var _consts_vaChatbot_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./consts/vaChatbot-const */ "./src/app/consts/vaChatbot-const.ts");
/* harmony import */ var _animations_routes_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animations/routes.animations */ "./src/app/animations/routes.animations.ts");













let AppComponent = class AppComponent {
    constructor(route, router, init, country, translate, activity, _window, tokenService, globileNavigation) {
        this.route = route;
        this.router = router;
        this.init = init;
        this.country = country;
        this.translate = translate;
        this.activity = activity;
        this._window = _window;
        this.tokenService = tokenService;
        this.globileNavigation = globileNavigation;
        this.hideLoading = false;
        this.footerOptions = { menu: _consts_footerMenu_const__WEBPACK_IMPORTED_MODULE_10__["FOOTER_MENU"], display: true };
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.vaChatbotConfig = _consts_vaChatbot_const__WEBPACK_IMPORTED_MODULE_11__["VA_CHATBOT_CONFIG"];
        this.showChatbot = false;
        // currency.setCurrency(this.init.getCountry());
        country.setCountry(sn_common_lib__WEBPACK_IMPORTED_MODULE_9__["CountriesEnum"].PT);
        translate.setDefaultLang('en');
        // translate.use(this.init.getLanguage());
        translate.use('en');
    }
    ngOnInit() {
        this._subscribeRouteTitle();
        this._subscribeToken();
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this.state$.unsubscribe();
        this.stateInit$.unsubscribe();
        this.token$.unsubscribe();
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    onMenuClick(value, id) {
        switch (value) {
            case 'back':
                this._window.history.back();
                break;
            case 'menu':
                break;
            default:
                if (Boolean(value)) {
                    this.globileNavigation.gotToModule([value]);
                }
        }
        //   this.activity.call({ destination : value });
    }
    footerOnClick(event) {
        if (Boolean(event.route)) {
            this.globileNavigation.gotToModule([event.route]);
        }
    }
    _subscribeToken() {
        this.token$ = this.tokenService.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed))
            .subscribe(token => (this.token = token));
    }
    _subscribeRouteTitle() {
        this.stateInit$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]))
            .subscribe(() => {
            this.hideLoading = false;
        });
        this.state$ = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]))
            .subscribe(() => {
            this._processMenu();
            this._window.scrollTo(0, 0);
        });
    }
    _processMenu() {
        let rte = this.route.snapshot;
        const footer = { menu: _consts_footerMenu_const__WEBPACK_IMPORTED_MODULE_10__["FOOTER_MENU"], display: true };
        let chatbot = false;
        while (rte.firstChild) {
            if (rte.data) {
                rte = rte.firstChild;
                // if (rte.data.hasOwnProperty('showChatbot') && rte.data.showChatbot.display) {
                if (rte.data.hasOwnProperty('showChatbot')) {
                    chatbot = rte.data.showChatbot;
                    this.chatbotContext = { page_name: rte._routerState.url };
                }
                if (rte.data.header) {
                    this.headerOptions = rte.data.header;
                }
                if (rte.data.footer) {
                    footer.display = rte.data.footer.hasOwnProperty('display') ? rte.data.footer.display : footer.display;
                    footer.menu = rte.data.footer.hasOwnProperty('menu') ? rte.data.footer.menu : footer.menu;
                }
            }
        }
        this.showChatbot = chatbot;
        this.footerOptions = footer;
        this.hideLoading = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        animations: [
            _animations_routes_animations__WEBPACK_IMPORTED_MODULE_12__["routesInAnimation"]
        ],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('WINDOW')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_init_service__WEBPACK_IMPORTED_MODULE_7__["InitCollectorService"],
        sn_common_lib__WEBPACK_IMPORTED_MODULE_9__["CountryService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["BridgeActivityService"], Object, _services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["GlobileNavigationService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _helpers_translate_loader_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/translate.loader.helper */ "./src/app/helpers/translate.loader.helper.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _interceptors_tools_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/tools.helper */ "./src/app/interceptors/tools.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _globile_footer_tabbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @globile/footer-tabbar */ "./node_modules/@globile/footer-tabbar/fesm2015/globile-footer-tabbar.js");
/* harmony import */ var va_chatbot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! va-chatbot */ "./node_modules/va-chatbot/fesm2015/va-chatbot.js");
/* harmony import */ var _services_url_param_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/url-param.service */ "./src/app/services/url-param.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _enums_languajes_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enums/languajes.enum */ "./src/app/enums/languajes.enum.ts");
/* harmony import */ var _services_init_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/init.service */ "./src/app/services/init.service.ts");
/* harmony import */ var _consts_route_modules_const__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./consts/route-modules.const */ "./src/app/consts/route-modules.const.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_full_menu_wrapper_full_menu_wrapper_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/full-menu-wrapper/full-menu-wrapper.component */ "./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.ts");
/* harmony import */ var _globile_full_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @globile/full-menu */ "./node_modules/@globile/full-menu/fesm2015/globile-full-menu.js");

























const initValues = {
    //token: '',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJTdGFydGVyQXBwIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6ODAvIiwiZXhwIjoxNTc4NTcwNDMxLCJpYXQiOjE1Nzg1NjY4MzEsInVzZXJJZCI6IjUyNDI5IiwidXNlcm5hbWUiOiJIYW5uYSJ9.CyRGarq_wlBFjfrsKSM6CpY_xjXb_7kU90Y72pcifag',
    country: sn_common_lib__WEBPACK_IMPORTED_MODULE_11__["CountriesEnum"].ES,
    language: _enums_languajes_enum__WEBPACK_IMPORTED_MODULE_18__["LanguageEnum"].SP,
    audit: {
        account: '',
        environment: '',
        instance: '',
        profile: ''
    }
};
let AppModule = class AppModule {
    constructor(paramService, bridge, clip, init, _window) {
        this.paramService = paramService;
        this.bridge = bridge;
        this.clip = clip;
        this.init = init;
        this._window = _window;
        this.populateUrlParams();
    }
    populateUrlParams() {
        this.init.setInitValues(initValues);
        console.log("IVAN EO");
        this.clip.copy('copied!!');
        let c = this.clip.paste();
        console.log(JSON.stringify(c));
        this.paramService.setQueryParams(Object(_interceptors_tools_helper__WEBPACK_IMPORTED_MODULE_9__["getParams"])(this._window));
        // if (environment.production) {
        this.bridge.getValue('token')
            .subscribe(val => {
            //if (val) {
            // this.token.setToken(val);
            console.log(val);
            // }
        });
        // } else {
        //   this.paramService.setQueryParams(this.getParams());
        // }
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _modules_full_menu_wrapper_full_menu_wrapper_component__WEBPACK_IMPORTED_MODULE_23__["FullMenuWrapperComponent"]
        ],
        entryComponents: [
            _modules_full_menu_wrapper_full_menu_wrapper_component__WEBPACK_IMPORTED_MODULE_23__["FullMenuWrapperComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
            sn_common_lib__WEBPACK_IMPORTED_MODULE_11__["MenuHeaderModule"],
            _globile_footer_tabbar__WEBPACK_IMPORTED_MODULE_13__["FooterTabbarModule"],
            va_chatbot__WEBPACK_IMPORTED_MODULE_14__["VaChatbotModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: _helpers_translate_loader_helper__WEBPACK_IMPORTED_MODULE_7__["HttpLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
            sn_common_lib__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            sn_common_lib__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
            _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["GlobileModule"].forRoot({
                modulesRoutes: _consts_route_modules_const__WEBPACK_IMPORTED_MODULE_20__["LOCAL_ROUTES"],
                nativeModules: _consts_route_modules_const__WEBPACK_IMPORTED_MODULE_20__["NATIVE_ROUTES"],
                startRoute: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["ModuleId"].GLOBALPOSITION,
                notFoundRoute: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["ModuleId"].GLOBALPOSITION,
                navigationErrorCallBack: (event) => console.log(event)
            }, src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"]),
            _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].api.BranchLocator.googleApiKey,
                libraries: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].api.BranchLocator.googleApiLibs || []
            }),
            _globile_full_menu__WEBPACK_IMPORTED_MODULE_24__["SnFullMenuModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"], multi: true },
            { provide: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["ENV_CONFIG"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"] },
            { provide: 'WINDOW', useValue: window },
            _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["OperatingSystemHelper"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('WINDOW')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_url_param_service__WEBPACK_IMPORTED_MODULE_15__["UrlParamCollectorService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["BridgeSCALService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_12__["BridgeClipboardService"],
        _services_init_service__WEBPACK_IMPORTED_MODULE_19__["InitCollectorService"], Object])
], AppModule);



/***/ }),

/***/ "./src/app/consts/footerMenu-const.ts":
/*!********************************************!*\
  !*** ./src/app/consts/footerMenu-const.ts ***!
  \********************************************/
/*! exports provided: FOOTER_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_MENU", function() { return FOOTER_MENU; });
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");

const FOOTER_MENU = [
    { name: 'Home', icon: 'sn-BAN103', route: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].GLOBALPOSITION },
    { name: 'PFM', icon: 'sn-BAN028' },
    { name: 'Transations', icon: 'sn-BAN069' },
    { name: 'Map', icon: 'sn-BAN051', route: 'branchlocator' },
    { name: 'Menu', icon: 'sn-FUNC056', route: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].FULLMENU }
];


/***/ }),

/***/ "./src/app/consts/full-menu.const.ts":
/*!*******************************************!*\
  !*** ./src/app/consts/full-menu.const.ts ***!
  \*******************************************/
/*! exports provided: FULL_MENU_CONFIG, FULL_MENU_TABBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_MENU_CONFIG", function() { return FULL_MENU_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_MENU_TABBAR", function() { return FULL_MENU_TABBAR; });
const FULL_MENU_CONFIG = [{
        titleKey: 'FULLMENU.MYMANAGE',
        icon: 'sn-SERV023',
        descriptionKey: 'FULLMENU.MYMANAGEDESC',
        route: 'MYMANAGE'
    },
    {
        titleKey: 'FULLMENU.WORLD',
        icon: 'sn-BAN089',
        descriptionKey: 'FULLMENU.WORLDDESC',
        route: 'WORLDDESC'
    },
    {
        titleKey: 'FULLMENU.BILLSANDTAXES',
        icon: 'sn-BAN070',
        descriptionKey: 'FULLMENU.BILLSANDTAXESDESC',
        route: 'BILLSANDTAXES'
    },
    {
        titleKey: 'FULLMENU.MYINVESTMENTS',
        icon: 'sn-BAN009',
        descriptionKey: 'FULLMENU.MYINVESTMENTSDESC',
        route: 'MYINVESTMENTS'
    },
    {
        titleKey: 'FULLMENU.APPLY',
        icon: 'sn-FUNC067',
        descriptionKey: 'FULLMENU.APPLYDESC',
        route: 'APPLY'
    },
    {
        titleKey: 'FULLMENU.SANTANDERSHOPPING',
        icon: 'sn-FUNC052',
        descriptionKey: 'FULLMENU.SANTANDERSHOPPINGDESC',
        route: 'SANTANDERSHOPPING'
    },
    {
        titleKey: 'FULLMENU.ADVICE',
        icon: 'sn-SYS004',
        descriptionKey: 'FULLMENU.ADVICEDESC',
        route: 'ADVICE'
    },
    {
        titleKey: 'FULLMENU.ATMBRANCHLOCATOR',
        icon: 'sn-SYS004',
        descriptionKey: 'FULLMENU.ATMBRANCHLOCATORDESC',
        route: 'ATMBRANCHLOCATOR'
    },
    {
        titleKey: 'FULLMENU.SHAREHOLDER',
        icon: 'sn-SYS004',
        descriptionKey: 'FULLMENU.SHAREHOLDERDESC',
        route: 'SHAREHOLDER'
    },
    {
        titleKey: 'FULLMENU.APPS',
        icon: 'sn-SYS004',
        descriptionKey: 'FULLMENU.APPSDESC',
        route: 'APPS'
    },
    {
        titleKey: 'FULLMENU.HELPUSIMPROVE',
        icon: 'sn-SYS004',
        descriptionKey: 'FULLMENU.HELPUSIMPROVEDESC',
        route: 'HELPUSIMPROVE'
    }
];
const FULL_MENU_TABBAR = [{
        name: 'Products',
        icon: 'sn-SERV093',
        route: 'Products'
    },
    {
        name: 'Locator',
        icon: 'sn-CHAN034',
        route: 'Locator'
    },
    {
        name: 'Help',
        icon: 'sn-CHAN028',
        route: 'Help'
    },
    {
        name: 'Log out',
        icon: 'sn-FUNC122B',
        route: 'Log out'
    }
];


/***/ }),

/***/ "./src/app/consts/route-modules.const.ts":
/*!***********************************************!*\
  !*** ./src/app/consts/route-modules.const.ts ***!
  \***********************************************/
/*! exports provided: GLOBALPOSITIONROUTE, PRODUCTDETAILROUTE, CARDDETAILROUTE, CARDMANAGEMENTROUTE, FULLMENU, BRANCHLOCATORROUTE, LOCAL_ROUTES, NATIVE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBALPOSITIONROUTE", function() { return GLOBALPOSITIONROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTDETAILROUTE", function() { return PRODUCTDETAILROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDDETAILROUTE", function() { return CARDDETAILROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDMANAGEMENTROUTE", function() { return CARDMANAGEMENTROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULLMENU", function() { return FULLMENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRANCHLOCATORROUTE", function() { return BRANCHLOCATORROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_ROUTES", function() { return LOCAL_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIVE_ROUTES", function() { return NATIVE_ROUTES; });
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _modules_full_menu_wrapper_full_menu_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/full-menu-wrapper/full-menu-wrapper.component */ "./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.ts");


const GLOBALPOSITIONROUTE = {
    path: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].GLOBALPOSITION,
    loadChildren: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @globile/global-position */ "./node_modules/@globile/global-position/fesm2015/globile-global-position.js")).then((module) => module.GlobalPositionModule),
    data: {
        footer: { display: true },
        showChatbot: true
    }
};
const PRODUCTDETAILROUTE = {
    path: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].PRODUCTDETAIL,
    loadChildren: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! @globile/product-detail */ "./node_modules/@globile/product-detail/fesm2015/globile-product-detail.js")).then((module) => module.ProductDetailModule),
    data: {
        header: {
            left: { icon: 'sn-SYS020', route: 'back' },
            title: { label: 'Account detail' },
            right: { icon: 'sn-SYS015' }
        },
        showChatbot: true
    }
};
const CARDDETAILROUTE = {
    path: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].CARDDETAIL,
    loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @globile/card-detail */ "./node_modules/@globile/card-detail/fesm2015/globile-card-detail.js")).then((module) => module.CardDetailModule),
    data: {
        header: {
            left: { icon: 'sn-SYS020', route: 'back' },
            title: { label: 'Card detail' },
            right: { icon: 'sn-SYS015' }
        },
        showChatbot: true
    }
};
const CARDMANAGEMENTROUTE = {
    path: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].CARDMANAGEMENT,
    loadChildren: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @globile/card-management */ "./node_modules/@globile/card-management/fesm2015/globile-card-management.js")).then((module) => module.CardManagementModule),
    data: {
        header: {
            left: { icon: 'sn-SYS020', route: 'back' },
            title: { label: 'Card detail' },
            right: { icon: 'sn-SYS015', route: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].CARDDETAIL }
        },
        showChatbot: true
    }
};
const FULLMENU = {
    path: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].FULLMENU,
    component: _modules_full_menu_wrapper_full_menu_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["FullMenuWrapperComponent"],
    data: {
        header: { display: false },
        footer: { display: true },
        showChatbot: false,
        animation: 'MovePageRight'
    }
};
const BRANCHLOCATORROUTE = {
    path: 'branchlocator',
    // loadChildren: () => import('../modules/branch-locator/branch-locator-wrapper.module')
    loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../modules/branch-locator/branch-locator-wrapper.module */ "./src/app/modules/branch-locator/branch-locator-wrapper.module.ts"))
        .then(module => module.BranchLocatorModule),
    data: {
        header: {
            left: { icon: 'sn-SYS020', route: 'back' },
            title: { label: 'Branch Locator' },
        },
        footer: {
            display: false
        },
        showChatbot: false
    }
};
const LOCAL_ROUTES = [
    GLOBALPOSITIONROUTE,
    PRODUCTDETAILROUTE,
    CARDDETAILROUTE,
    CARDMANAGEMENTROUTE,
    BRANCHLOCATORROUTE,
    FULLMENU
];
const NATIVE_ROUTES = [];


/***/ }),

/***/ "./src/app/consts/vaChatbot-const.ts":
/*!*******************************************!*\
  !*** ./src/app/consts/vaChatbot-const.ts ***!
  \*******************************************/
/*! exports provided: VA_CHATBOT_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VA_CHATBOT_CONFIG", function() { return VA_CHATBOT_CONFIG; });
let VA_CHATBOT_CONFIG = {
    logging: true,
    staticServerUrl: 'https://va-universal.develop.blue4sky.com/assets/',
    chatDisplay: {},
    tagging: {
        country: 'ES',
        language: 'spanish',
        appType: 'retail',
        appVersion: '1.0',
        appName: 'Santander Starter App',
        screenName: 'main_screen'
    },
    clientAuthEndpoint: {
        url: 'https://va-universal.develop.blue4sky.com/auth-token-dev',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            id: '5ccf4c9f-e17d-4c44-882d-6fcf66209fa8'
        }
    },
    endpoint: {
        url: 'https://va-universal.develop.blue4sky.com/conversations-dev/',
        initHeader: {
            channel: 'WebEs',
            project: 'Santander-Test-DialogFlow'
        },
        extraHeaders: {
            'x-universal-resp': 'true'
        }
    },
    customStyles: {
        entryPointPositionBottom: '55px'
    }
};


/***/ }),

/***/ "./src/app/enums/languajes.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/languajes.enum.ts ***!
  \*****************************************/
/*! exports provided: LanguageEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageEnum", function() { return LanguageEnum; });
var LanguageEnum;
(function (LanguageEnum) {
    LanguageEnum["SP"] = "es";
    LanguageEnum["EN"] = "en";
    LanguageEnum["PT"] = "pt";
})(LanguageEnum || (LanguageEnum = {}));


/***/ }),

/***/ "./src/app/helpers/translate.loader.helper.ts":
/*!****************************************************!*\
  !*** ./src/app/helpers/translate.loader.helper.ts ***!
  \****************************************************/
/*! exports provided: HttpLoaderFactory, TranslateLoaderHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoaderHelper", function() { return TranslateLoaderHelper; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


function HttpLoaderFactory(http, path = 'i18n/') {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http, path, '.json');
}
const text = { en: 'en', es: 'es' };
class TranslateLoaderHelper {
    getTranslation(lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(text[lang]);
    }
}


/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(token, native, _window) {
        this.token = token;
        this.native = native;
        this._window = _window;
        this._system = new _globile_mobile_services__WEBPACK_IMPORTED_MODULE_5__["OperatingSystemHelper"](this._window);
    }
    intercept(request, next) {
        return this.token.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(res => {
            console.log('TOKEN: ' + res);
            if (res && request.url.search('/token') === -1) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${res}`
                    }
                });
            }
            console.log("IVAN: " + this._system.getMobileOperatingSystem());
            // TODO put the native call (ready)
            // if ( this._system.getMobileOperatingSystem() === 'unknown') {
            //     return next.handle(request);
            // } else {
            //     return this.native.call(request);
            // }
            return next.handle(request);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            if (err.status === 401) {
                // this.router.navigateByUrl('/login');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
};
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('WINDOW')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_5__["BridgeServiceInvocationService"], Object])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/interceptors/tools.helper.ts":
/*!**********************************************!*\
  !*** ./src/app/interceptors/tools.helper.ts ***!
  \**********************************************/
/*! exports provided: getParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
function getParams(win) {
    const url = win.location.href;
    const paramValue = {};
    if (url.includes('?')) {
        const httpParams = url.split('?')[1];
        const params = httpParams.split('&');
        params.forEach(element => {
            const res = element.split('=');
            if (res.length > 1) {
                paramValue[res[0]] = res.length === 2 ? res[1] : res.splice(1).join('=');
            }
            else {
                paramValue[res[0]] = res[0];
            }
        });
    }
    return paramValue;
}


/***/ }),

/***/ "./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-full-menu [defaultData]=\"defaulListOrder\" [tabs]=\"tabs\" [username]=\"username\"></sn-full-menu>"

/***/ }),

/***/ "./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.ts ***!
  \**************************************************************************/
/*! exports provided: FullMenuWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMenuWrapperComponent", function() { return FullMenuWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _consts_full_menu_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts/full-menu.const */ "./src/app/consts/full-menu.const.ts");



let FullMenuWrapperComponent = class FullMenuWrapperComponent {
    constructor() {
        this.defaulListOrder = _consts_full_menu_const__WEBPACK_IMPORTED_MODULE_2__["FULL_MENU_CONFIG"];
        this.tabs = _consts_full_menu_const__WEBPACK_IMPORTED_MODULE_2__["FULL_MENU_TABBAR"];
        this.username = 'Carlota';
    }
};
FullMenuWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sn-full-menu-wrapper',
        template: __webpack_require__(/*! ./full-menu-wrapper.component.html */ "./src/app/modules/full-menu-wrapper/full-menu-wrapper.component.html"),
    })
], FullMenuWrapperComponent);



/***/ }),

/***/ "./src/app/services/init.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/init.service.ts ***!
  \******************************************/
/*! exports provided: InitCollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCollectorService", function() { return InitCollectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _enums_languajes_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/languajes.enum */ "./src/app/enums/languajes.enum.ts");








let InitCollectorService = class InitCollectorService {
    constructor(bridge, token, analitic) {
        this.bridge = bridge;
        this.token = token;
        this.analitic = analitic;
    }
    setInitValues(values) {
        this._initValues = values;
        this.fetchValues();
    }
    getInitValues() {
        let _result;
        if (this._initValues) {
            _result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._initValues);
        }
        else {
            const _init = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.bridge.callComponent('', {})
                .then((res) => {
                this._initValues = res;
                this.fetchValues();
                _init.next(res);
            });
            _result = _init.asObservable();
        }
        return _result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
    }
    getCountry() {
        return this._initValues ? this._initValues.country : sn_common_lib__WEBPACK_IMPORTED_MODULE_6__["CountriesEnum"].ES;
    }
    getLanguage() {
        return this._initValues ? this._initValues.language : _enums_languajes_enum__WEBPACK_IMPORTED_MODULE_7__["LanguageEnum"].EN;
    }
    fetchValues() {
        this.token.setToken(this._initValues.token);
        this.analitic.setInitValues(this._initValues.audit);
    }
};
InitCollectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globile_mobile_services__WEBPACK_IMPORTED_MODULE_2__["NativeDispatcherService"],
        _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
        _globile_mobile_services__WEBPACK_IMPORTED_MODULE_2__["BridgeAnalyticService"]])
], InitCollectorService);



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TokenService = class TokenService {
    constructor() {
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // return this._token; }
    }
    setToken(value) {
        const index = value.indexOf('Bearer');
        let token = index === -1 ? value : value.substr(6 + index);
        if (token[0] === ' ') {
            token = token.substr(1);
        }
        else if (token.substr(0, 3) === '%20') {
            token = token.substr(3);
        }
        this._token = index === 1 ? token.substr(0, token.length - 1) : token;
        this.result.next(this._token);
    }
    getToken() {
        let result;
        if (this._token) {
            result = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._token);
        }
        else {
            result = this.result.asObservable();
        }
        return result;
    }
};
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], TokenService);



/***/ }),

/***/ "./src/app/services/url-param.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/url-param.service.ts ***!
  \***********************************************/
/*! exports provided: UrlParamCollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParamCollectorService", function() { return UrlParamCollectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



let UrlParamCollectorService = class UrlParamCollectorService {
    constructor(token) {
        this.token = token;
        this._initParams = {};
    }
    setQueryParams(queryParams) {
        for (const key in queryParams) {
            this._initParams[key] = queryParams[key];
        }
        this.populateToken();
    }
    getParam(param) {
        return this._initParams[param];
    }
    populateToken() {
        if (this._initParams['token']) {
            this.token.setToken(this._initParams['token']);
        }
    }
};
UrlParamCollectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
], UrlParamCollectorService);



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
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");

const environment = {
    production: false,
    api: {
        // urlAccounts: ``,
        // urlCards: ``,
        AccountDetails: {
            routeModules: {
                current: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].PRODUCTDETAIL
            },
            urlAccounts: 'https://starterapp-accounts.develop.blue4sky.com/me/accounts',
            urlAccountDetails: 'https://starterapp-accounts.develop.blue4sky.com/me/accounts/ACCOUNT_ID',
            urlAccountTransactionDetail: 'https://starterapp-accounts.develop.blue4sky.com/me/accounts/ACCOUNT_ID/transactions/TRANSACTION_ID',
            urlAccountTransactions: 'https://starterapp-accounts.develop.blue4sky.com/me/accounts/ACCOUNT_ID/transactions',
            urlAccountsNext: 'https://starterapp-accounts.develop.blue4sky.comNEXT',
            languages: '/i18n/product-detail/'
        },
        CardsDetails: {
            routeModules: {
                current: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].CARDDETAIL,
                cardManagement: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_0__["ModuleId"].CARDMANAGEMENT
            },
            urlCards: 'https://starterapp-cards.develop.blue4sky.com/me/cards',
            urlCardDetails: 'https://starterapp-cards.develop.blue4sky.com/me/cards/CARD_ID',
            urlCardTransactionDetail: 'https://starterapp-cards.develop.blue4sky.com/me/cards/CARD_ID/transactions/TRANSACTION_ID',
            urlCardTransactions: 'https://starterapp-cards.develop.blue4sky.com/me/cards/CARD_ID/transactions',
            urlCardsNext: 'https://starterapp-cards.develop.blue4sky.comNEXT',
            languages: '/i18n/card-detail/'
        },
        GlobalPosition: {
            //apiURL: 'api/me',
            apiURL: 'https://starterapp-backend.develop.blue4sky.com/me',
            languages: '/i18n/globalposition/',
            apiAccounts: 'https://starterapp-accounts.develop.blue4sky.com'
        },
        FullMenu: {
            languages: '/i18n/fullmenu/'
        },
        BranchLocator: {
            endpoints: [
                {
                    URL: 'http://back.branchlocatorsb.p.azurewebsites.net/branch-locator/',
                    lat: 29.4247,
                    lng: -98.4935
                },
                {
                    URL: 'http://back.branchlocatorsb.p.azurewebsites.net/branch-locator/',
                    lat: 52.35,
                    lng: 4.9167
                },
            ],
            // googleApiKey: 'AIzaSyAW6Ayoy5LzilIIwr84WfQFTybSV8P9Ifo',
            googleApiKey: 'AIzaSyAEa5DdaHqV_b-40ErddBoWfEuopdvPK7I',
            googleApiLibs: ['places'],
            languages: 'i18n/branchlocator/',
            hasFilters: true
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan.diez.sanchez/Santander/StarterApp-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map