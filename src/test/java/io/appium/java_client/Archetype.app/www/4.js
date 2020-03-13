(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@globile/product-detail/fesm2015/globile-product-detail.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@globile/product-detail/fesm2015/globile-product-detail.js ***!
  \*********************************************************************************/
/*! exports provided: HttpLoaderFactory, ProductDetailModule, ɵh, ɵg, ɵd, ɵc, ɵa, ɵe, ɵf, ɵi, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return AccountDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NoTransactionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CollapsibleAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ProductDetailHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ProductDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TransactionAccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return TransactionDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ProductDetailRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AccountsApiService; });
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");












/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/url-generator/url-generator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Replace url constant by path variable
 * @param {?} url end-point
 * @param {?} param path variable
 * @return {?}
 */
function generateUrl(url, param) {
    /** @type {?} */
    const re = new RegExp(Object.keys(param).join('|'), 'gi');
    return url.replace(re, (/**
     * @param {?} matched
     * @return {?}
     */
    (matched) => {
        return param[matched];
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/accounts/accounts.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountsApiService {
    /**
     * @param {?} environment
     * @param {?} http
     */
    constructor(environment, http) {
        this.environment = environment;
        this.http = http;
    }
    /**
     * \@description Returns account details by account ID
     *              url to be something like: /87
     *
     * \@memberOf AccountsService
     * @param {?} id
     * @return {?} Observable<AccountIdentity>
     */
    getAccountByAccountId(id) {
        /** @type {?} */
        const accountId = String(id);
        return this.http.get(generateUrl(this.environment.api.AccountDetails['urlAccountDetails'], { ACCOUNT_ID: accountId }));
    }
    /**
     * \@description Returns a list of accounts
     *
     * \@memberOf AccountsService
     * @param {?=} params
     * @return {?} Observable<AccountsDataList[]>
     */
    getAccounts(params) {
        return this.http.get(`${this.environment.api.AccountDetails['urlAccounts']}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return resp.accountsDataList;
        })));
    }
    /**
     * \@description Returns a list of transcations of a specific account
     *
     * \@Param {string} accountId / {({_limit?: string, _offset?: string, _sort?: '+date' | '-date',
     *     from_amount?: string, from_date?: string, to_amount?: string, to_date?: string,
     *     transaction_type?: 'credit' | 'debit' | 'pending'})} [params]
     * \@Returns {Observable<TransactionsListResponse>}
     * \@memberOf AccountsApiService
     * @param {?} accountId
     * @param {?=} params
     * @return {?}
     */
    getAccountTransactions(accountId, params) {
        return this.http.get(generateUrl(this.environment.api.AccountDetails['urlAccountTransactions'], { ACCOUNT_ID: accountId }), { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return resp;
        })));
    }
    /**
     * \@description Passing the value of the _next path it will call the next transaciotns list
     *
     * \@readOnly
     * \@memberOf AccountsService
     * @param {?} next
     * @return {?}
     */
    getNextTransactions(next) {
        return this.http.get(generateUrl(this.environment.api.AccountDetails['urlAccountsNext'], { NEXT: next }));
    }
    /**
     *
     * @param {?} accountId 87
     * @param {?} transactionId 2503
     * @return {?}
     */
    getTransactionDetailsById(accountId, transactionId) {
        return this.http.get(generateUrl(this.environment.api.AccountDetails['urlAccountTransactionDetail'], { ACCOUNT_ID: accountId, TRANSACTION_ID: transactionId }));
    }
}
AccountsApiService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AccountsApiService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
/** @nocollapse */ AccountsApiService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["defineInjectable"])({ factory: function AccountsApiService_Factory() { return new AccountsApiService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"])(_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: AccountsApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/mapping.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function mapTransactionsAccountsResponse() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} resp
     * @return {?}
     */
    (resp) => {
        return (!resp) ? null : {
            nextLink: resp._links && resp._links._next,
            transactionsData: resp.transactionsDataList.map((/**
             * @param {?} tr
             * @return {?}
             */
            tr => {
                /** @type {?} */
                const item = {
                    balance: parseInt('' + tr.transactionDetails.balanceResult.amount, 10),
                    currency: tr.transactionDetails.balanceResult.currencyCode,
                    date: new Date(tr.transactionDetails.processedDate),
                    label: tr.transactionDetails.description,
                    amount: tr.transactionDetails.amount.amount,
                    new: new Date(tr.transactionDetails.processedDate) >= new Date(),
                    id: tr.transactionDetails.transactionId,
                    accountId: resp.accountId ? resp.accountId : ''
                };
                return item;
            }))
        };
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/product-detail/product-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE = 'product-detail';
/** @enum {string} */
const UIState = {
    STATE_OPEN: "open",
};
class ProductDetailComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} accountService
     * @param {?} bridge
     * @param {?} analytic
     * @param {?} elementRef
     */
    constructor(router, route, accountService, bridge, analytic, elementRef) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.bridge = bridge;
        this.analytic = analytic;
        this.elementRef = elementRef;
        this.isLoading = true;
        this.tabBar = [];
        this.selectedState = [];
        this.currentCollapsibleState = 'close';
        this.isHidden = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onscroll(event) {
        /** @type {?} */
        const el = (/** @type {?} */ (event.target));
        this.isHidden = (el.scrollingElement.scrollTop > 139);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const view = {
            title: ANALYTIC_TITLE, data: { event: 'init' }
        };
        this.analytic.sendView(view);
        this.accountService.getAccounts({ _expand: 'balances' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.accounts = res;
            this.startIndex = this.findStartIndex();
        }));
    }
    /**
     * @param {?} transaction
     * @return {?}
     */
    doSomething(transaction) {
    }
    /**
     * @param {?} collapsable
     * @return {?}
     */
    toggleHeaderState(collapsable) {
        collapsable = JSON.parse(collapsable);
        if (collapsable) {
            /** @type {?} */
            const snSlider = this.elementRef.nativeElement.querySelector('.sn-slider');
            /** @type {?} */
            const snAccountSlideWrapper = this.elementRef.nativeElement.querySelector('.sn-account-slide-wrapper');
            snSlider.classList.toggle(UIState.STATE_OPEN);
            snAccountSlideWrapper.classList.toggle(UIState.STATE_OPEN);
            this.cacheCollapsibleState(collapsable);
        }
    }
    /**
     * @param {?} accountId
     * @return {?}
     */
    restoreHeaderStateByAccountId(accountId) {
        /** @type {?} */
        const snSlider = this.elementRef.nativeElement.querySelector('.sn-slider');
        /** @type {?} */
        const snAccountSlideWrapper = this.elementRef.nativeElement.querySelector('.sn-account-slide-wrapper');
        if (this.currentCollapsibleState === UIState.STATE_OPEN) {
            snSlider.classList.add(UIState.STATE_OPEN);
            snAccountSlideWrapper.classList.add(UIState.STATE_OPEN);
            this.currentCollapsibleState = 'open';
        }
        else {
            snAccountSlideWrapper.classList.remove(UIState.STATE_OPEN);
            snSlider.classList.remove(UIState.STATE_OPEN);
            this.currentCollapsibleState = 'close';
        }
    }
    /**
     * @private
     * @return {?}
     */
    findStartIndex() {
        if (this.route.snapshot.paramMap.has('id') && Boolean(this.accounts)) {
            /** @type {?} */
            const accountId = this.route.snapshot.paramMap.get('id');
            /** @type {?} */
            const result = this.accounts.findIndex((/**
             * @param {?} account
             * @return {?}
             */
            (account) => account.accountId === accountId));
            return (result < 0) ? 0 : result;
        }
        return 0;
    }
    /**
     * @param {?} account
     * @return {?}
     */
    accountSelected(account) {
        /** @type {?} */
        const event = {
            title: ANALYTIC_TITLE,
            data: {
                event: 'switch account',
                account: account.accountId
            }
        };
        this.analytic.sendEvent(event);
        this.transactionsList = null;
        this.selectedAccount = account;
        this.restoreHeaderStateByAccountId(account.accountId);
        this.getAccountTransactions();
    }
    /**
     * @private
     * @param {?} passedInState
     * @return {?}
     */
    cacheCollapsibleState(passedInState) {
        /** @type {?} */
        const cachedState = this.selectedState.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.accountId === passedInState.accountId));
        if (cachedState.length === 0) {
            this.currentCollapsibleState = passedInState.state;
            /** @type {?} */
            const newState = {
                accountId: passedInState.accountId,
                state: passedInState.state
            };
            this.selectedState.push(newState);
        }
        else {
            this.currentCollapsibleState = passedInState.state;
            this.selectedState.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.accountId === passedInState.accountId) {
                    item.state = this.currentCollapsibleState;
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    runTabAction(event) {
        /** @type {?} */
        let rout = event.route;
        if (!rout) {
            return;
        }
        if (rout.indexOf('{ID}') !== -1) {
            rout = rout.replace('{ID}', this.selectedAccount.accountId);
        }
        /** @type {?} */
        const target = rout.split('-');
        if (target[0] === 'native') {
            this.bridge.call({ destination: target.slice(1).join('-') });
        }
        else {
            this.router.navigate(rout);
        }
    }
    /**
     * @return {?}
     */
    getAccountTransactions() {
        this.isLoading = true;
        this.accountService.getAccountTransactions(this.selectedAccount.accountId, { _limit: '10', _sort: '-date', _offset: '0' })
            .pipe(mapTransactionsAccountsResponse(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed)).subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            if (resp) {
                this.nextLinks = resp.nextLink;
                this.transactionsList = resp.transactionsData;
            }
            else {
                this.nextLinks = null;
                this.transactionsList = [];
            }
        }), (/**
         * @return {?}
         */
        () => {
            this.isLoading = false;
        }), (/**
         * @return {?}
         */
        () => {
            this.isLoading = false;
        }));
    }
    /**
     * @return {?}
     */
    lazyLoad() {
        if (Boolean(this.nextLinks) && !this.isLoading && Boolean(this.transactionsList) && this.isNotMaxOffset(this.nextLinks)) {
            /** @type {?} */
            const event = {
                title: ANALYTIC_TITLE,
                data: {
                    event: 'more transations',
                    account: this.selectedAccount.accountId
                }
            };
            this.analytic.sendEvent(event);
            this.isLoading = true;
            this.accountService.getNextTransactions(this.nextLinks).pipe(mapTransactionsAccountsResponse(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed)).subscribe((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => {
                if (resp) {
                    this.nextLinks = resp.nextLink;
                    this.transactionsList = this.transactionsList.concat(resp.transactionsData);
                }
            }), (/**
             * @return {?}
             */
            () => {
                this.isLoading = false;
            }), (/**
             * @return {?}
             */
            () => {
                this.isLoading = false;
            }));
        }
    }
    /**
     * @param {?} transaction
     * @return {?}
     */
    getTransaction(transaction) {
        // TODO: Do something with the transaction item
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    // new -- Fixed Header
    /**
     * @return {?}
     */
    get currencyValue() {
        return this.checkTypeAccountValuesExist() && this.checkTypeAccountValuesExist().amount;
    }
    /**
     * @return {?}
     */
    get currencyCode() {
        return this.checkTypeAccountValuesExist() && this.checkTypeAccountValuesExist().currencyCode;
    }
    /**
     * @private
     * @return {?}
     */
    checkTypeAccountValuesExist() {
        return this.selectedAccount && this.selectedAccount.availableBalance;
    }
    /**
     * @param {?} nextLink
     * @return {?}
     */
    isNotMaxOffset(nextLink) {
        /** @type {?} */
        const offsetParam = 'offset=';
        if ((null == nextLink) || nextLink.indexOf(offsetParam) === -1) {
            return false;
        }
        /** @type {?} */
        const offsetValue = +(nextLink.substring(nextLink.indexOf('offset=') + offsetParam.length).split('&')[0]);
        return !(isNaN(offsetValue)) && 180 >= offsetValue;
    }
    /**
     * @return {?}
     */
    goBack() {
        history.back();
    }
}
ProductDetailComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-product-detail',
                template: "<div class=\"main\" *ngIf=\"accounts else loading\">\n  <div [hidden]=\"!isHidden\" class=\"nav-bar\" [ngClass]=\"isHidden? 'hide' : ''\">\n    <sn-icon icon=\"sn-SYS020\" color=\"primary\" (click)=\"goBack()\" id=\"back\"></sn-icon>\n  </div>\n\n  <sn-slider [value]=\"accounts\" (onChange)=\"accountSelected($event)\" [startIndex]=\"startIndex\">\n    <ng-container *ngFor=\"let item of accounts\">\n      <ng-template #slide>\n        <sn-product-detail-header (isProductSummaryExpanded)=\"toggleHeaderState($event)\"\n                                  [account]=\"item\"></sn-product-detail-header>\n      </ng-template>\n    </ng-container>\n  </sn-slider>\n\n  <ng-container *ngIf=\"transactionsList else loading\" class=\"transactions-wrapper\">\n    <ng-container *ngIf=\"transactionsList.length > 0 else noTransactions\">\n      <sn-infinite-scroller (scrolled)=\"lazyLoad()\">\n        <sn-transaction-list [value]=\"transactionsList\" [datesTranslation]=\"'transactionGroup.dates' | translate\">\n          <ng-template>\n            <sn-transaction-account></sn-transaction-account>\n          </ng-template>\n        </sn-transaction-list>\n        <sn-loader *ngIf=\"isLoading\"></sn-loader>\n      </sn-infinite-scroller>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <sn-loader></sn-loader>\n</ng-template>\n\n<ng-template #noTransactions>\n  <sn-no-transactions *ngIf=\"!isLoading\" [hidden]=\"!transactionsList\"></sn-no-transactions>\n</ng-template>\n",
                styles: ["@charset \"UTF-8\";@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.display_level_1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (max-width:375px){.display_level_1{font-size:2.625rem}}.display_level_2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (max-width:375px){.display_level_2{font-size:2.25rem}}.display_level_3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_3{font-size:3rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_3{font-size:3rem}}@media only screen and (max-width:375px){.display_level_3{font-size:2rem}}.heading_level_1,h1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (max-width:375px){.heading_level_1,h1{font-size:2rem}}.heading_level_2,h2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_2,h2{font-size:2.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_2,h2{font-size:2.25rem}.heading_level_3,h3{font-size:2rem}}.heading_level_3,h3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_3,h3{font-size:2rem}}@media only screen and (max-width:375px){.heading_level_2,h2{font-size:2rem}.heading_level_3,h3{font-size:1.75rem}}.heading_level_4,h4{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_4,h4{font-size:1.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_4,h4{font-size:1.75rem}.heading_level_5,h5{font-size:1.5rem}}.heading_level_5,h5{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_5,h5{font-size:1.5rem}}@media only screen and (max-width:375px){.heading_level_4,h4{font-size:1.5rem}.heading_level_5,h5{font-size:1.25rem}}.heading_level_6,h6{line-height:1.4;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_6,h6{font-size:1.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_6,h6{font-size:1.25rem}.body_text_large{font-size:1.125rem}}.body_text_large{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_large{font-size:1.125rem}}@media only screen and (max-width:375px){.heading_level_6,h6{font-size:1.125rem}.body_text_large{font-size:1rem}}.body_text_medium{font-size:1rem;line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_medium{font-size:1rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_medium{font-size:1rem}.body_text_small{font-size:.875rem}}.body_text_small{line-height:1.5;letter-spacing:0}@media only screen and (max-width:375px){.body_text_medium,.body_text_small{font-size:.875rem}}.body_text_xsmall{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_small{font-size:.875rem}.body_text_xsmall{font-size:.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_xsmall{font-size:.75rem}}@media only screen and (max-width:375px){.body_text_xsmall{font-size:.875rem}}.nav-bar{display:block;position:fixed;top:0;z-index:12;height:48px;width:100%;margin:0;color:var(--color-primary-santander,#ec0000);background:#fff}.nav-bar.hide{display:none}.nav-bar sn-icon{display:block;margin:6px 16px 0;font-size:24px;cursor:pointer;width:24px}sn-product-detail-header,sn-transaction-list{padding-left:16px;padding-right:16px;margin-top:10px}sn-loader{margin-top:50%}.description-title{position:relative;text-align:left;margin-top:8px}.description-title span{font-family:SantanderText;font-weight:700;display:block;padding:16px 17px 12px;color:var(--santan_red)}:host sn-slider ::ng-deep .sn-slider{height:130px;-webkit-transition:height .8s;transition:height .8s;background-color:var(--color-primary-white,#fff)}:host sn-slider ::ng-deep .sn-slider.open{height:187px}:host sn-slider ::ng-deep .sn-slider .d-flex.sn-slider-tabs{margin-top:unset;margin-bottom:unset}:host sn-slider ::ng-deep .sn-slider .sn-account-slide-wrapper{-webkit-transition:height .8s;transition:height .8s;height:97px}:host sn-slider ::ng-deep .sn-slider .sn-account-slide-wrapper.open{height:160px}"]
            }] }
];
/** @nocollapse */
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: AccountsApiService },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["BridgePaymentsService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["BridgeAnalyticService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"] }
];
ProductDetailComponent.propDecorators = {
    onscroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["HostListener"], args: ['document:scroll', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/account-details/account-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountDetailComponent {
    /**
     * @param {?} accountsService
     * @param {?} router
     * @param {?} route
     * @param {?} location
     */
    constructor(accountsService, router, route, location) {
        this.accountsService = accountsService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ibanCopied = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getUser(data) {
        return Object.keys(data).map((/**
         * @param {?} key
         * @return {?}
         */
        key => data[key]));
    }
    /**
     * @return {?}
     */
    doAccountIDByRouter() {
        /** @type {?} */
        let accountId = 0;
        if (this.route.snapshot.paramMap.has('id')) {
            /** @type {?} */
            const id = +this.route.snapshot.paramMap.get('id');
            accountId = id < 0 ? 0 : id;
        }
        else {
            this.location.back();
        }
        return accountId;
    }
    /*
       *  TODO: backend API for /me/accounts/${accountId}/details
       *  when backend API is ready, and use getAccountDetailsInformation
       */
    // getAccountDetailsInformation() {
    // this.accountsService.getAccountDetailsInformation().subscribe(res => {
    // this.accountInformation = res.accountInformation;
    // });
    // }
    /**
     * @return {?}
     */
    getAccountByAccountId() {
        this.accountsService.getAccountByAccountId(this.accountId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res) {
                this.accountDetailsResponse = res;
            }
            else {
                console.log('Error: could not get account');
            }
        }), (/**
         * @return {?}
         */
        () => {
            console.log('Error: could not get account');
        }));
    }
    /**
     * @param {?} displayNumber
     * @return {?}
     */
    copyNumber(displayNumber) {
        Object(_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["copyStringToClipboard"])(displayNumber);
        this.ibanCopied = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.ibanCopied = false), 1000);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.accountId = this.doAccountIDByRouter();
        this.getAccountByAccountId();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
AccountDetailComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-account-details',
                template: "<div class=\"account-details\">\n  <section>\n    <div class=\"header\">\n      <div class=\"account-name-information\">\n        <span class=\"account-holder\">{{ accountDetailsResponse?.alias }}</span>\n        <span class=\"account-name\">{{ accountDetailsResponse?.type }}</span>\n      </div>\n      <div class=\"account-summary\">\n        <div>\n          <span class=\"label\">{{ 'productDetail.accountDetail.accountIdentity.availableBalance' | translate }}\n            <sn-icon icon=\"sn-SYS004 icon-placement\"></sn-icon>\n          </span>\n          <sn-currency class=\"account-funds\"\n                       [value]=\"accountDetailsResponse?.availableBalance?.amount\"\n                       [code]=\"accountDetailsResponse?.availableBalance?.currencyCode\"></sn-currency>\n        </div>\n        <div>\n          <span class=\"label\">{{ 'productDetail.accountDetail.accountIdentity.mainBalance' | translate }}\n            <sn-icon icon=\"sn-SYS004\"></sn-icon>\n          </span>\n          <sn-currency class=\"account-funds\"\n                       [value]=\"accountDetailsResponse?.mainBalance?.amount\"\n                       [code]=\"accountDetailsResponse?.mainBalance?.currencyCode\"></sn-currency>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"iban-copied-container\" [ngClass]=\"ibanCopied? 'show' : 'hidden'\">\n      <span class=\"iban-copied-button\">\n        {{ 'productDetail.accountDetail.IBANCopied' | translate }}\n        </span>\n      </div>\n    <div class=\"account-id\">\n      <div class=\"id-attributes\" *ngIf=\"accountDetailsResponse\">\n        <span class=\"iban\">{{ 'productDetail.accountDetail.accountIdentity.iban' | translate  }}</span>\n        <span class=\"value\" (click)=\"copyNumber(accountDetailsResponse?.displayNumber)\">\n          {{ accountDetailsResponse?.displayNumber }}\n        </span>\n      </div>\n      <!--      <div class=\"id-attributes\">-->\n      <!--        <span class=\"swift-bic\">{{ 'accountDetail.accountIdentity.swiftBic' | translate }}</span>-->\n      <!--        <span class=\"value\">{{ accountDetailsResponse?.swiftBic }}</span>-->\n      <!--      </div>-->\n    </div>\n  </section>\n</div>\n",
                styles: ["@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.account-funds,.account-funds .integer{display:block;font-size:32px;font-weight:bolder}.account-funds .decimal{font-weight:bolder;font-size:24px}i.sn-SYS004.icon-placement{font-size:17px;vertical-align:text-bottom}.account-details{height:100%;padding:15px;font-family:SantanderText;color:var(--color-secondary-gray,#444)}.account-details .header{font-size:14px}.account-details .header .account-name-information{margin-bottom:15px}.account-details .header .account-name-information .account-holder{text-transform:uppercase;font-weight:700}.account-details .header .account-name-information .account-name{display:block;font-weight:lighter;color:var(--color-secondary-mediumgray,#767676)}.account-details .header .account-name-information .account-name:first-letter{text-transform:uppercase}.account-details .header .account-summary{display:-webkit-box;display:flex}.account-details .header .account-summary div{-webkit-box-flex:1;flex:1}.account-details .header .account-summary div:nth-child(2){text-align:right}.account-details .account-id{padding:15px 0;border-top:thin solid var(--color-secondary-lihtgray,#ccc);border-bottom:thin solid var(--color-secondary-lihtgray,#ccc)}.account-details .account-id .iban{text-transform:uppercase}.account-details .account-id .swift-bic{text-transform:capitalize}.account-details .account-id .iban,.account-details .account-id .swift-bic{font-size:16px;display:block;margin-bottom:-6px}.account-details .account-id .value{font-size:.95rem;text-transform:uppercase;color:var(--color-secondary-turquoise,#1bb3bc)}.account-details .id-attributes{display:inline-block;width:50%}.account-details .id-attributes:nth-child(2){text-align:right}.account-details .account-information{font-size:14px}.account-details .account-information .holding-authorised{font-weight:400;text-transform:capitalize;margin-top:15px}.account-details .account-information .user{font-weight:lighter;text-transform:capitalize;color:var(--color-secondary-mediumgray,#767676)}.account-details .account-information .holding-authorised,.account-details .account-information .user{display:block;margin-bottom:-3px}.account-details .iban-copied-container{justify-content:space-around;padding-right:15px;position:fixed;top:46px;width:100%}.account-details .iban-copied-container .iban-copied-button{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background-color:var(--color-secondary-darkturquoise,#137e84);border-radius:18px;box-shadow:0 1px 2px 0 rgba(0,0,0,.2);color:var(--color-primary-white,#fff);display:-webkit-box;display:flex;font-family:SantanderText;font-size:14px;font-stretch:normal;font-style:normal;font-weight:700;height:36px;letter-spacing:normal;line-height:1.5;text-align:center;width:154px}.account-details .hidden{display:none;opacity:.1}.account-details .show{display:-webkit-box;display:flex;opacity:1}"]
            }] }
];
/** @nocollapse */
AccountDetailComponent.ctorParameters = () => [
    { type: AccountsApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
AccountDetailComponent.propDecorators = {
    accountId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/transaction-account/transaction-account.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TransactionAccountComponent extends sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["TransactionListItemBase"] {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(injector, router, activatedRoute) {
        super(injector);
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    /**
     * @return {?}
     */
    clickTransaction() {
        super.clickTransaction();
        this.router.navigate([`${this.data['accountId']}/transaction-details/${this.data.id}`], { relativeTo: this.activatedRoute });
    }
}
TransactionAccountComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-transaction-account',
                template: "<div (click)=\"clickTransaction()\" class=\"transactionItem\"  *ngIf=\"item\">\n  <div class=\"details\">\n    <span>{{item.label}}</span>\n\n  </div>\n\n  <div class=\"amount\">\n    <div>\n      <sn-currency [code]=\"item.currency\"\n                   [ngClass]=\"item.amount > -1 ? 'positive' : 'negative'\"\n                   [value]=\"item.amount\" class='currency-number'>\n      </sn-currency>\n\n    </div>\n    <div *ngIf=\"item.balance\" class=\"balance\">\n      <sn-currency [value]=\"item.balance\"></sn-currency>\n    </div>\n  </div>\n</div>\n",
                styles: [".transactionItem{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.transactionItem .details{font-family:SantanderText;font-size:16px;line-height:24px;max-height:48px;overflow-y:hidden;width:60%;display:block}.transactionItem .details span{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-word;min-height:48px}.transactionItem .currency-number{line-height:.8em;font-size:.74em;font-weight:700}.transactionItem>span{font-size:.94em}.transactionItem .amount{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-moz-text-align-last:end;text-align-last:end}.transactionItem .amount sn-currency{font-size:18px;font-style:normal}.transactionItem .amount sn-currency.positive{color:var(--color-secondary-darkturquoise,#137e84)}.transactionItem .amount sn-currency.negative{color:#000}.transactionItem .balance sn-currency{font-size:14px;text-align:right;color:var(--color-secondary-gray,#444)}"]
            }] }
];
/** @nocollapse */
TransactionAccountComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/transaction-details/transaction-details.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TIP: to open screen with data http://localhost:4200/sample/87/transaction-detail/2503
class TransactionDetailsComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} accountService
     * @param {?} datePipe
     * @param {?} locale
     */
    constructor(router, route, accountService, datePipe, locale) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.datePipe = datePipe;
        this.locale = locale;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getRouteParams();
        this.accountService.getTransactionDetailsById(this.accountId, this.transactionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res && res.transactionDetails) {
                this.transactionDetails = res;
                this.transanctionDate = res.transactionDetails.accountingDate ?
                    this.convertDate(res.transactionDetails.accountingDate) :
                    ' ';
            }
            this.isLoading = false;
        }));
    }
    /**
     * @return {?}
     */
    getRouteParams() {
        this.accountId = this.route.snapshot.paramMap.get('accountId');
        this.transactionId = this.route.snapshot.paramMap.get('transactionId');
        // TODO: Error control when design has been done
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * @param {?} InputDate
     * @return {?}
     */
    convertDate(InputDate) {
        /** @type {?} */
        const date = new Date(InputDate);
        return this.datePipe.transform(date, 'EEEE, MMM d', null, this.locale);
    }
    /**
     * @return {?}
     */
    goBack() {
        history.back();
    }
}
TransactionDetailsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-transaction',
                template: "<section class=\"transaction-details\" *ngIf=\"!isLoading else loading\">\n  <!-- navigation bar -->\n  <div class=\"nav-bar\">\n      <sn-icon icon=\"sn-SYS020\" color=\"primary\" (click)=\"goBack()\" id=\"back\"></sn-icon>\n    </div>\n    <!-- Header -->\n    <div class=\"column transaction-id\">\n      <div class=\"date-title\">{{ transanctionDate }}</div>\n    <sn-currency class='charge'\n      [value]=\"transactionDetails?.transactionDetails.amount.amount\"\n      [code]=\"transactionDetails?.transactionDetails.amount.currencyCode\"\n      >\n    </sn-currency>\n    <div class=\"name\">{{transactionDetails?.alias}}</div>\n    <div class=\"account info\">{{transactionDetails?.displayNumber}}</div>\n  </div>\n<!-- Body -->\n  <div class=\"row remaining\">\n    <div class=\"label\"> {{ 'productDetail.transactionDetail.remainingBalance' | translate}} </div>\n    <sn-currency flat class=\"info\"\n      [value]=\"transactionDetails?.transactionDetails.balanceResult.amount\"\n      [code]=\"transactionDetails?.transactionDetails.balanceResult.currencyCode\"\n      >\n    </sn-currency>\n  </div>\n  <div class=\"row info-row\">\n    <div class=\"label entry-date\">{{ 'productDetail.transactionDetail.entryDate' | translate}}</div>\n    <div class=\"info\">{{transactionDetails?.transactionDetails.creationDate}}</div>\n  </div>\n  <div class=\"row info-row\">\n    <div class=\"label type\">{{ 'productDetail.transactionDetail.transactionType' | translate}}</div>\n    <div class=\"info\">{{transactionDetails?.transactionDetails.transactionCategory}}</div>\n  </div>\n  <div class=\"row info-row\">\n    <div class=\"label category\">{{ 'productDetail.transactionDetail.transactionCategory' | translate}}</div>\n    <div class=\"info\">{{transactionDetails?.transactionDetails.transactionCategory}}</div>\n  </div>\n\n</section>\n<ng-template #loading>\n    <sn-loader></sn-loader>\n  </ng-template>\n",
                styles: ["@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.transaction-details{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0 16px}.transaction-details .nav-bar{display:-webkit-box;display:flex;padding:4px;width:100%;height:48px;-webkit-box-align:center;align-items:center}.transaction-details .nav-bar sn-icon{display:-webkit-box;display:flex}.transaction-details .transaction-id{align-content:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-bottom:16px;padding-bottom:32px;text-align:center;width:100%}.transaction-details .transaction-id .charge{display:block;font-family:SantanderHeadline;padding-bottom:18px;text-align:center;color:var(--color-secondary-gray,#444);font-size:32px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.19}.transaction-details .transaction-id .name{color:var(--color-secondary-gray,#444);font-family:SantanderText;font-size:16px;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.31;margin-bottom:4px}.transaction-details .transaction-id .account{color:var(--color-functional-neutral60,#8f8f8f);line-height:1.5}.transaction-details .row{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding-bottom:16px}.transaction-details .column{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.transaction-details .info{font-family:SantanderText;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.transaction-details .label{color:var(--color-functional-neutral50,#a2a2a2);font-family:SantanderText;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal;padding-right:23px}.transaction-details .date-title{color:var(--color-secondary-gray,#444);font-family:SantanderText;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.31;margin-bottom:8px}"]
            }] }
];
/** @nocollapse */
TransactionDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: AccountsApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"],] }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/product-detail.routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    header: {
        left: { icon: 'sn-SYS020', route: 'back' },
        title: { label: 'Product Detail' },
    },
    footer: {
        display: true
    }
}, ɵ1 = {
    header: {
        left: { icon: 'sn-SYS020', route: 'back' },
        title: { label: 'Product Detail Header' },
    }
}, ɵ2 = {
    header: { display: false },
    footer: {
        display: true
    }
};
/** @type {?} */
const routes = [
    {
        path: '', component: ProductDetailComponent,
        data: ɵ0
    },
    // TODO: using {id}/details for now, until we get specific information from the common API team
    {
        path: ':id/detail',
        component: AccountDetailComponent,
        data: ɵ1
    },
    {
        path: 'transaction',
        component: TransactionAccountComponent
    },
    {
        path: ':accountId/transaction-details/:transactionId',
        component: TransactionDetailsComponent,
        data: ɵ2
    },
    // TODO: Delete from previous TODO
    {
        path: ':id',
        component: ProductDetailComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
class ProductDetailRoutingModule {
}
ProductDetailRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/no-transactions/no-transactions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoTransactionsComponent {
    constructor() { }
}
NoTransactionsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-no-transactions',
                template: "<div class=\"no-transactions\">\n    <div class=\"empty-states-wrapper\">\n        <sn-icon icon=\"sn-SYS032\"></sn-icon>\n        <span class=\"empty-states\">{{ 'productDetail.accountDetail.noTransactions' | translate }}</span>\n        <span class=\"text-empty-states\">{{ 'productDetail.accountDetail.message_no_transaction' | translate }}</span>\n    </div>\n  </div>\n",
                styles: [".no-transactions{display:-webkit-box;display:flex;height:59vh}.no-transactions .empty-states-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;-webkit-box-pack:center;justify-content:center;margin:auto}.no-transactions .empty-states{height:28px;font-family:SantanderHeadline;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.no-transactions .text-empty-states{padding:0 32px;height:44px;font-family:SantanderText;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;color:var(--color-secondary-mediumgray,#767676)}"]
            }] }
];
/** @nocollapse */
NoTransactionsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/product-detail-header/collapsible.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CollapsibleAnimations = {
    triggerStateButton: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('btnCollapsibleState', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            transform: 'rotate(180deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            transform: 'rotate(-0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('open <=> close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms ease-in-out'))
    ]),
    triggerHeader: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('headerTrigger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            opacity: '0'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
            opacity: '1'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('close => open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('1000ms 500ms ease')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('open => close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('0ms 300ms linear'))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/product-detail-header/product-detail-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UIState$1 = {
    STATE_OPEN: "open",
    STATE_CLOSE: "close",
};
class ProductDetailHeaderComponent {
    /**
     * @param {?} router
     * @param {?} activatedRoute
     */
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isProductSummaryExpanded = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayNumbersLastFourDigits();
    }
    /**
     * @return {?}
     */
    get state() {
        return ProductDetailHeaderComponent._state;
    }
    /**
     * @param {?} collapsibleState
     * @return {?}
     */
    set state(collapsibleState) {
        ProductDetailHeaderComponent._state = collapsibleState;
    }
    /**
     * @return {?}
     */
    displayNumbersLastFourDigits() {
        /** @type {?} */
        const displayNumber = this.account.displayNumber;
        this.lastFourDigitsfromAccountNumber = `*${displayNumber.substring((displayNumber.length - 4), displayNumber.length)}`;
    }
    /**
     * @return {?}
     */
    toggleAccountSummary() {
        ProductDetailHeaderComponent._state =
            (ProductDetailHeaderComponent._state === UIState$1.STATE_CLOSE ? UIState$1.STATE_OPEN : UIState$1.STATE_CLOSE);
        this.isProductSummaryExpanded.emit(JSON.stringify({
            accountId: this.account.accountId,
            state: ProductDetailHeaderComponent._state
        }));
    }
    /**
     * @return {?}
     */
    accountDetailsView() {
        if (this.account && this.account.accountId) {
            this.router.navigate([`${this.account.accountId}/detail`], { relativeTo: this.activatedRoute });
        }
    }
}
ProductDetailHeaderComponent._state = UIState$1.STATE_CLOSE;
ProductDetailHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                selector: 'sn-product-detail-header',
                template: "<div class=\"tille\">\n  <div class=\"alias\">\n    {{ account?.alias | uppercase }}\n    <span class=\"iban\">\n      {{ lastFourDigitsfromAccountNumber }}\n    </span>\n    <sn-icon (click)=\"accountDetailsView()\" icon=\"sn-SYS026\"></sn-icon>\n  </div>\n</div>\n\n<div class=\"item-wrapper\">\n  <div class=\"number-wrapper\">\n    <sn-currency #accountBalance [value]=\"account?.availableBalance.amount\"\n      [code]=\"account?.availableBalance.currencyCode\">\n    </sn-currency>\n    <sn-icon class=\"collapse-toggle\" [@btnCollapsibleState]='state' (click)=\"toggleAccountSummary()\" icon=\"sn-SYS019\"></sn-icon>\n  </div>\n    <div class=\"available\"> {{ 'productDetail.accountDetail.title.availableText' | translate }} </div>\n</div>\n\n\n<div class=\"account-summary\" [@headerTrigger]='state'>\n  <section class=\"collapsable\">\n    <div>\n      <span>{{ 'productDetail.accountDetail.accountMoney' | translate }}</span>\n      <sn-currency class=\"amount-summary\" [value]=\"account?.pendingBalance.amount\" [code]=\"account?.pendingBalance.currencyCode\"></sn-currency>\n    </div>\n    <div>\n      <span>{{ 'productDetail.accountDetail.overdraft' | translate }}</span>\n      <sn-currency class=\"amount-summary\" [value]=\"account?.overdraftLimit.amount\" [code]=\"account?.overdraftLimit.currencyCode\"></sn-currency>\n    </div>\n  </section>\n</div>\n",
                animations: [
                    CollapsibleAnimations.triggerStateButton,
                    CollapsibleAnimations.triggerHeader
                ],
                styles: ["@charset \"UTF-8\";@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}@font-face{font-family:SantanderHeadline;src:url(/assets/fonts/santander/SantanderHeadlineW05-Rg.eot?#iefix);src:url(/assets/fonts/santander/SantanderHeadlineW05-Rg.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderHeadlineW05-Rg.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderHeadlineW05-Rg.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderHeadlineW05-Rg.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderHeadline;src:url(/assets/fonts/santander/SantanderHeadlineW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderHeadlineW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderHeadlineW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderHeadlineW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderHeadlineW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderHeadline;src:url(/assets/fonts/santander/SantanderHeadlineW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderHeadlineW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderHeadlineW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderHeadlineW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderHeadlineW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderHeadline;src:url(/assets/fonts/santander/SantanderHeadlineW05-BoldIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderHeadlineW05-BoldIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderHeadlineW05-BoldIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderHeadlineW05-BoldIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderHeadlineW05-BoldIt.ttf) format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-Bold.ttf);font-weight:700}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-BoldItalic.ttf);font-weight:700;font-style:italic}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-ExtraBold.ttf);font-weight:bolder}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-Italic.ttf);font-weight:italic}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-Light.ttf);font-weight:lighter}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-Regular.ttf);font-weight:400}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-SemiBold.ttf);font-weight:600}@font-face{font-family:OpenSans;src:url(/assets/fonts/open-sans/OpenSans-SemiBoldItalic.ttf);font-weight:600;font-style:italic}.display_level_1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (max-width:375px){.display_level_1{font-size:2.625rem}}.display_level_2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (max-width:375px){.display_level_2{font-size:2.25rem}}.display_level_3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_3{font-size:3rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_3{font-size:3rem}}@media only screen and (max-width:375px){.display_level_3{font-size:2rem}}.heading_level_1,h1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (max-width:375px){.heading_level_1,h1{font-size:2rem}}.heading_level_2,h2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_2,h2{font-size:2.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_2,h2{font-size:2.25rem}.heading_level_3,h3{font-size:2rem}}.heading_level_3,h3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_3,h3{font-size:2rem}}@media only screen and (max-width:375px){.heading_level_2,h2{font-size:2rem}.heading_level_3,h3{font-size:1.75rem}}.heading_level_4,h4{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_4,h4{font-size:1.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_4,h4{font-size:1.75rem}.heading_level_5,h5{font-size:1.5rem}}.heading_level_5,h5{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_5,h5{font-size:1.5rem}}@media only screen and (max-width:375px){.heading_level_4,h4{font-size:1.5rem}.heading_level_5,h5{font-size:1.25rem}}.heading_level_6,h6{line-height:1.4;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_6,h6{font-size:1.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_6,h6{font-size:1.25rem}.body_text_large{font-size:1.125rem}}.body_text_large{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_large{font-size:1.125rem}}@media only screen and (max-width:375px){.heading_level_6,h6{font-size:1.125rem}.body_text_large{font-size:1rem}}.body_text_medium{font-size:1rem;line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_medium{font-size:1rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_medium{font-size:1rem}.body_text_small{font-size:.875rem}}.body_text_small{line-height:1.5;letter-spacing:0}@media only screen and (max-width:375px){.body_text_medium,.body_text_small{font-size:.875rem}}.body_text_xsmall{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_small{font-size:.875rem}.body_text_xsmall{font-size:.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_xsmall{font-size:.75rem}}@media only screen and (max-width:375px){.body_text_xsmall{font-size:.875rem}}:root{--body-bg:$color-primary-white;--body-color:$color-secondary-gray}*,::after,::before{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}::-webkit-scrollbar-track,::after::-webkit-scrollbar-track,::before::-webkit-scrollbar-track{background-color:#d3d3d3}::-webkit-scrollbar,::after::-webkit-scrollbar,::before::-webkit-scrollbar{width:6px;background-color:#d3d3d3}::-webkit-scrollbar-thumb,::after::-webkit-scrollbar-thumb,::before::-webkit-scrollbar-thumb{background-color:gray}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(var(--color-secondary-gray,#444),0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:SantanderText;font-size:16px;font-weight:400;line-height:1.5;color:var(--color-secondary-gray,#444);text-align:left;background-color:var(--color-primary-white,#fff);text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{margin-top:0}p{margin-top:0;margin-bottom:1rem}button{font-family:SantanderText;font-size:16px;font-weight:400;line-height:1.5;color:var(--color-secondary-gray,#444);background-color:var(--color-primary-white,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;border:none;margin:0;text-decoration:none;outline:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pac-container{font-family:inherit!important}.pac-container .pac-item .pac-item-query{line-height:1rem!important;font-family:SantanderText!important;font-weight:400!important}.pac-container .pac-item .pac-item-query .pac-matched{font-family:SantanderText!important;font-weight:700!important;font-size:1em!important}.pac-container .pac-item .pac-item-query+span{font-family:SantanderText!important;font-weight:lighter!important;display:block!important;font-size:1em!important;margin-left:22px!important;line-height:1rem!important}.pac-container::after{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:SantanderHeadline;font-weight:500;line-height:1.2}.h1,h1{font-size:40px}.h2,h2{font-size:32px}.h3,h3{font-size:28px}.h4,h4{font-size:24px}.h5,h5{font-size:20px}.h6,h6{font-size:16px}.sn-modal{background-color:var(--body-modal-bg,#00000052)}.sn-modal>{width:100%;height:100%;max-height:100%;min-width:100%;overflow:hidden}.sn-panel-action-sheet{pointer-events:auto;width:100%;position:absolute;bottom:0}.Type-1-Style{font-family:SantanderText;font-size:32px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-2_Bold-Style{font-family:SantanderText;font-size:24px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-2_Regular-Style{font-family:SantanderText;font-size:24px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-3_Bold-Style{font-family:SantanderText;font-size:22px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-3_Regular-Style{font-family:SantanderText;font-size:22px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-4_Regular-Style{font-family:SantanderText;font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-5_Regular-Style{font-family:SantanderText;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.Type-5_Light-Style{font-family:SantanderText;font-size:14px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:var(--color-secondary-gray,#444)}*{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host{display:block;position:relative;text-align:center;min-height:100px}:host .tille{overflow:hidden;-webkit-box-align:center;align-items:center;text-align:center}:host .tille .iban{display:inline-block;height:21px;font-family:SantanderText;font-size:14px;font-weight:300;font-stretch:normal;font-style:normal;text-align:center;line-height:1.5;letter-spacing:normal;color:var(--color-secondary-mediumgray,#767676)}:host .tille .alias{height:21px;padding-left:22px;font-family:SantanderText;font-size:14px;font-weight:700;font-stretch:normal;font-style:normal;text-align:center;line-height:1.5;letter-spacing:normal;color:var(--color-secondary-gray,#444)}:host .tille sn-icon{float:right;position:relative;width:24px;height:24px;-o-object-fit:contain;object-fit:contain;color:var(--color-secondary-darkturquoise,#137e84)}:host .items-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}:host .items-wrapper .number-wrapper{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}:host .available{overflow:hidden;-webkit-box-align:center;align-items:center;height:20px;font-family:SantanderText;font-size:14px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:var(--color-secondary-mediumgray,#767676)}:host .line-height{line-height:1.5}:host sn-currency{height:38px;font-family:SantanderHeadline;font-size:29px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.19;letter-spacing:normal;color:var(--color-secondary-gray,#444)}:host sn-currency div.decimal{font-size:unset;margin-top:unset}:host sn-currency span.first{margin:0 .1em 0 0}:host .collapse-toggle{display:inline-block;position:relative;top:2px;width:25px;height:25px;overflow:hidden;color:var(--color-secondary-darkturquoise,#137e84)}:host .account-summary{margin-top:5px}:host .account-summary div{display:-webkit-box;display:flex;margin:0 auto 2px;text-align:center;width:277px;font-size:14px}:host .account-summary div span{width:127px;margin-right:25px;line-height:1.8rem;text-align:right;color:var(--color-secondary-mediumgray,#767676)}:host .account-summary div sn-currency{height:auto;display:inline-block}:host .account-summary div sn-currency.amount-summary{text-align:left;font-size:22px;font-weight:400;width:127px}:host .account-summary div sn-currency.amount-summary .integer{display:inline;font-size:26px;font-weight:400}:host .account-summary div sn-currency.amount-summary .decimal{font-weight:400;font-size:12px}"]
            }] }
];
/** @nocollapse */
ProductDetailHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
ProductDetailHeaderComponent.propDecorators = {
    account: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    isProductSummaryExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/product-detail.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} http
 * @param {?} path
 * @return {?}
 */
function HttpLoaderFactory(http, path) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, path.api.AccountDetails['languages'], '.json');
}
class ProductDetailModule {
}
ProductDetailModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                declarations: [
                    ProductDetailComponent,
                    ProductDetailHeaderComponent,
                    TransactionAccountComponent,
                    TransactionDetailsComponent,
                    NoTransactionsComponent,
                    AccountDetailComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    ProductDetailRoutingModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["TransactionListModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["SliderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["AccountFixedHeaderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["LoaderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["InfiniteScrollerModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["CurrencyModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["IconModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_0__["TransactionListModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"]]
                        }
                    }),
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: globile-product-detail.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=globile-product-detail.js.map

/***/ })

}]);
//# sourceMappingURL=4.js.map