(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@globile/global-position/fesm2015/globile-global-position.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@globile/global-position/fesm2015/globile-global-position.js ***!
  \***********************************************************************************/
/*! exports provided: HttpLoaderFactory, GlobalPositionModule, ɵf, ɵg, ɵi, ɵm, ɵj, ɵa, ɵn, ɵl, ɵh, ɵk, ɵq, ɵp, ɵo, ɵr, ɵc, ɵe, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionModule", function() { return GlobalPositionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return AccountsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CardsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CommonListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DepositsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return EditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GlobalPositionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return FundsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return LoansComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return PensionPlansComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SharesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return AccordionAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return GlobalPositionRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return HttpClientService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GlobalPositionService; });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");













/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/http-client.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpClientService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} optionParams
     * @return {?}
     */
    get(url, optionParams) {
        /** @type {?} */
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: optionParams });
        return this.http.get(url, { params });
    }
}
HttpClientService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
/** @nocollapse */ HttpClientService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function HttpClientService_Factory() { return new HttpClientService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, token: HttpClientService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/global-position.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalPositionService {
    /**
     * @param {?} httpClient
     * @param {?} env
     */
    constructor(httpClient, env) {
        this.httpClient = httpClient;
        this.bufferSize = 1;
        this.api = (/** @type {?} */ (env.api.GlobalPosition));
    }
    /**
     * @param {?=} optionParams
     * @return {?}
     */
    getGlobalPositionInfo(optionParams) {
        return this.httpClient.get(`${this.api.apiURL}`, optionParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(this.bufferSize));
    }
}
GlobalPositionService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GlobalPositionService.ctorParameters = () => [
    { type: HttpClientService },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["EnviromentConfigService"] }
];
/** @nocollapse */ GlobalPositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function GlobalPositionService_Factory() { return new GlobalPositionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["inject"])(HttpClientService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["inject"])(_globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["EnviromentConfigService"])); }, token: GlobalPositionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/account.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.accountId = data.accountId;
            this.alias = data.alias;
            this.availableBalance = data.availableBalance;
            this.description = data.description;
            this.displayNumber = data.displayNumber;
            this.mainBalance = data.mainBalance;
            this.mainItem = data.mainItem;
            this.overdraftLimit = data.overdraftLimit;
            this.overdraftUsed = data.overdraftUsed;
            this.status = data.status;
            this.type = data.type;
            this.withholdingBalance = data.withholdingBalance;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias || this.description;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        /** @type {?} */
        const length = this.displayNumber.length;
        /** @type {?} */
        const showQuantity = 4;
        // TODO: Should be parametrized by service
        /** @type {?} */
        const prefix = '*';
        // TODO: Should be parametrized by service
        /** @type {?} */
        let auxDisplayNumber = this.displayNumber;
        if (length > showQuantity) {
            auxDisplayNumber = auxDisplayNumber.substr(length - showQuantity);
        }
        return prefix + auxDisplayNumber;
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.availableBalance.amount;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.accountId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/cards/card-type.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CardType = {
    CREDIT: "CREDIT CARD",
    DEBIT: "DEBIT CARD",
    PREPAID: "PREPAID CARD",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/cards/card-status.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CardStatus = {
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/card.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.cardId = data.cardId;
            this.alias = data.alias;
            this.type = data.type;
            this.printDesignId = data.printDesignId;
            this.displayNumber = data.displayNumber;
            this.operable = data.operable;
            this.status = data.status;
            this.statusInformation = data.statusInformation;
            this.expirationDate = data.expirationDate;
            this.availableBalance = data.availableBalance;
            this.creditLimit = data.creditLimit;
            this.disposedAmount = data.disposedAmount;
            this.productCardDescription = data.productCardDescription;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias || this.productCardDescription;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        /** @type {?} */
        let displayDetail;
        if (this.type === CardType.DEBIT) {
            displayDetail = 'Debit';
        }
        else if (this.type === CardType.CREDIT) {
            displayDetail = 'Credit';
        }
        else {
            displayDetail = 'Prepaid';
        }
        return `${displayDetail} | ${this.getDisplayNumber()}`;
    }
    /**
     * @return {?}
     */
    getCurrency() {
        if (this.type === CardType.CREDIT) {
            return this.creditLimit.amount - this.availableBalance.amount;
        }
        return this.availableBalance.amount;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getImage() {
        switch (this.type) {
            case CardType.DEBIT:
                return '../../assets/globalposition/placeholder_debit_card.png';
            case CardType.CREDIT:
                return '../../assets/globalposition/placeholder_debit_card.png';
            case CardType.PREPAID:
                return '../../assets/globalposition/placeholder_debit_card.png';
            default:
                return null;
        }
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        if (this.type === CardType.CREDIT) {
            return ((this.creditLimit.amount - this.availableBalance.amount) / this.creditLimit.amount) * 100;
        }
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        if (this.type === CardType.CREDIT) {
            return 'Credit limit ';
        }
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        if (this.type === CardType.CREDIT) {
            return this.creditLimit.amount;
        }
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return this.status === CardStatus.DISABLED;
    }
    /**
     * @return {?}
     */
    disableText() {
        return 'Activate';
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayNumber() {
        /** @type {?} */
        const length = this.displayNumber.length;
        /** @type {?} */
        const showQuantity = 4;
        // TODO: Should be parametrized by service
        /** @type {?} */
        const prefix = '*';
        // TODO: Should be parametrized by service
        /** @type {?} */
        let auxDisplayNumber = this.displayNumber;
        if (length > showQuantity) {
            auxDisplayNumber = auxDisplayNumber.substr(length - showQuantity);
        }
        return prefix + auxDisplayNumber;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.cardId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pension-plan.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PensionPlanDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.pensionId = data.pensionId;
            this.alias = data.alias;
            this.type = data.type;
            this.currentValue = data.currentValue;
            this.displayNumber = data.displayNumber;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        return this.displayNumber;
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.currentValue.amount;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.pensionId;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/shares.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharesDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.value = data.value;
            this.initialValue = data.initialValue;
            this.alias = data.alias;
            this.shareId = data.shareId;
            this.displayNumber = data.displayNumber;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        return this.shareId; // TODO: need to review to get the right attribute
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.value.amount; // TODO: need to review to get the right attribute
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.shareId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/loan.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoanDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.loanId = data.loanId;
            this.alias = data.alias;
            this.type = data.type;
            this.displayNumber = data.displayNumber;
            this.amount = data.amount;
            this.amortization = data.amortization;
            this.nextPaymentAmount = data.nextPaymentAmount;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        if (this.type === 'LOAN') {
            return (this.amortization.amount / this.amount.amount) * 100; // TODO: Update for the right values
        }
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        if (this.type === 'LOAN') {
            return 'Credit limit ';
        }
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        if (this.type === 'LOAN') {
            return this.amount.amount;
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayNumber() {
        /** @type {?} */
        const length = this.displayNumber.length;
        /** @type {?} */
        const showQuantity = 4;
        // TODO: Should be parametrized by service
        /** @type {?} */
        const prefix = '*';
        // TODO: Should be parametrized by service
        /** @type {?} */
        let auxDisplayNumber = this.displayNumber;
        if (length > showQuantity) {
            auxDisplayNumber = auxDisplayNumber.substr(length - showQuantity);
        }
        return prefix + auxDisplayNumber;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        return this.getDisplayNumber();
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.amount.amount;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.loanId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/deposits.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DepositDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.depositId = data.depositId;
            this.alias = data.alias;
            this.type = data.type;
            this.displayNumber = data.displayNumber;
            this.amount = data.amount;
            this.profit = data.profit;
            this.endDate = data.endDate;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayNumber() {
        /** @type {?} */
        const length = this.displayNumber.length;
        /** @type {?} */
        const showQuantity = 4;
        // TODO: Should be parametrized by service
        /** @type {?} */
        const prefix = '*';
        // TODO: Should be parametrized by service
        /** @type {?} */
        let auxDisplayNumber = this.displayNumber;
        if (length > showQuantity) {
            auxDisplayNumber = auxDisplayNumber.substr(length - showQuantity);
        }
        return prefix + auxDisplayNumber;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        return this.getDisplayNumber();
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.amount.amount;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return `expires ${this.endDate}`;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.depositId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/funds.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FundDetail {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.mainItem = data.mainItem;
            this.fundId = data.fundId;
            this.alias = data.alias;
            this.type = data.type;
            this.displayNumber = data.displayNumber;
            this.currentValue = data.currentValue;
            this._links = data._links;
        }
    }
    /**
     * @return {?}
     */
    getName() {
        return this.alias;
    }
    /**
     * @return {?}
     */
    getCurrencyDetail() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarValue() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarTitle() {
        return null;
    }
    /**
     * @return {?}
     */
    getProgressBarDetail() {
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    getDisplayNumber() {
        /** @type {?} */
        const length = this.displayNumber.length;
        /** @type {?} */
        const showQuantity = 4;
        // TODO: Should be parametrized by service
        /** @type {?} */
        const prefix = '*';
        // TODO: Should be parametrized by service
        /** @type {?} */
        let auxDisplayNumber = this.displayNumber;
        if (length > showQuantity) {
            auxDisplayNumber = auxDisplayNumber.substr(length - showQuantity);
        }
        return prefix + auxDisplayNumber;
    }
    /**
     * @return {?}
     */
    getNumberDetail() {
        return this.getDisplayNumber();
    }
    /**
     * @return {?}
     */
    getCurrency() {
        return this.currentValue.amount;
    }
    /**
     * @return {?}
     */
    getImage() {
        return null;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return null;
    }
    /**
     * @return {?}
     */
    disableText() {
        return null;
    }
    /**
     * @return {?}
     */
    getEndDate() {
        return null;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.fundId;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/global-position-info-response.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalPositionInfoResponse {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            this.contracts_balances = data.contracts_balances;
            this.contracts_balances.accounts.list = data.contracts_balances.accounts && data.contracts_balances.accounts.list ?
                data.contracts_balances.accounts.list.map((/**
                 * @param {?} account
                 * @return {?}
                 */
                account => new AccountDetail(account))) : [];
            this.contracts_balances.cards.list = data.contracts_balances.cards && data.contracts_balances.cards.list ?
                data.contracts_balances.cards.list.map((/**
                 * @param {?} card
                 * @return {?}
                 */
                card => new CardDetail(card))) : [];
            // tslint:disable-next-line: max-line-length
            this.contracts_balances.pensionPlans.list = data.contracts_balances.pensionPlans && data.contracts_balances.pensionPlans.list ?
                data.contracts_balances.pensionPlans.list.map((/**
                 * @param {?} pension
                 * @return {?}
                 */
                pension => new PensionPlanDetail(pension))) : [];
            this.contracts_balances.shares.list = data.contracts_balances.shares && data.contracts_balances.shares.list ?
                data.contracts_balances.shares.list.map((/**
                 * @param {?} shares
                 * @return {?}
                 */
                shares => new SharesDetail(shares))) : [];
            this.contracts_balances.loans.list = data.contracts_balances.loans && data.contracts_balances.loans.list ?
                data.contracts_balances.loans.list.map((/**
                 * @param {?} loan
                 * @return {?}
                 */
                loan => new LoanDetail(loan))) : [];
            this.contracts_balances.deposits.list = data.contracts_balances.deposits && data.contracts_balances.deposits.list ?
                data.contracts_balances.deposits.list.map((/**
                 * @param {?} deposit
                 * @return {?}
                 */
                deposit => new DepositDetail(deposit))) : [];
            this.contracts_balances.funds.list = data.contracts_balances.funds && data.contracts_balances.funds.list ?
                data.contracts_balances.funds.list.map((/**
                 * @param {?} fund
                 * @return {?}
                 */
                fund => new FundDetail(fund))) : (/** @type {?} */ ([]));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/local-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStorageService {
    constructor() { }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return new Promise((/**
         * @param {?} res
         * @param {?} err
         * @return {?}
         */
        (res, err) => {
            res(localStorage.getItem(key));
        }));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        return new Promise((/**
         * @param {?} res
         * @param {?} err
         * @return {?}
         */
        (res, err) => {
            localStorage.setItem(key, value);
            res(true);
        }));
    }
}
LocalStorageService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LocalStorageService.ctorParameters = () => [];
/** @nocollapse */ LocalStorageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/list-types.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ListTypes = {
    ACCOUNTS: "ACCOUNTS",
    CARDS: "CARDS",
    LOANS: "LOANS",
    SHARES: "SHARES",
    PENSIONPLANS: "PENSIONPLANS",
    DEPOSITS: "DEPOSITS",
    FUNDS: "FUNDS",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/default-list-order.const.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DefaultListOrder = [
    ListTypes.ACCOUNTS,
    ListTypes.CARDS,
    ListTypes.LOANS,
    ListTypes.SHARES,
    ListTypes.FUNDS,
    ListTypes.DEPOSITS,
    ListTypes.PENSIONPLANS,
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} localStorage
     */
    constructor(localStorage) {
        this.localStorage = localStorage;
        this.PREFIX_ACCORDION_STATE = 'GP_accordion_state_';
        this.PREFIX_ACCORDION_POSITIONS = 'GP_ACCORDIONS_POSITIONS';
        this.PREFIX_DISPLAY_CONTENT = 'GP_DISPLAY_CONTENT';
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getAccordionState(type) {
        return this.localStorage.get(this.PREFIX_ACCORDION_STATE + type);
    }
    /**
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    setAccordionState(type, value) {
        return this.localStorage.set(this.PREFIX_ACCORDION_STATE + type, value);
    }
    /**
     * @return {?}
     */
    getAccordionPositions() {
        return this.localStorage.get(this.PREFIX_ACCORDION_POSITIONS)
            .then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (value) {
                return JSON.parse(value);
            }
            else {
                return DefaultListOrder;
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setAccordionPosition(value) {
        return this.localStorage.set(this.PREFIX_ACCORDION_POSITIONS, JSON.stringify(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisplayContent(value) {
        return this.localStorage.set(this.PREFIX_DISPLAY_CONTENT, JSON.stringify(value));
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    getDisplayContent(type) {
        return this.localStorage.get(this.PREFIX_DISPLAY_CONTENT).then((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (value) {
                /** @type {?} */
                const pasedData = (/** @type {?} */ (JSON.parse(value)));
                if (!type) {
                    return pasedData;
                }
                else if (type && pasedData[type]) {
                    return (/** @type {?} */ (pasedData[type]));
                }
            }
            return undefined;
        }));
    }
}
ConfigService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: LocalStorageService }
];
/** @nocollapse */ ConfigService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["defineInjectable"])({ factory: function ConfigService_Factory() { return new ConfigService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["inject"])(LocalStorageService)); }, token: ConfigService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/hidden-item-counter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} values
 * @return {?}
 */
function hiddenItemsCounter(values) {
    /** @type {?} */
    let count = 0;
    if (values) {
        Object.keys(values).forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => Object.keys(values[type]).forEach((/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            if (values[type][id] === false) {
                count += 1;
            }
        }))));
    }
    return count;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/global-position/global-position.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE = 'global-position';
class GlobalPositionComponent {
    /**
     * @param {?} globalService
     * @param {?} analytic
     * @param {?} configService
     */
    constructor(globalService, analytic, configService) {
        this.globalService = globalService;
        this.analytic = analytic;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: waiting for PO to tell us the ags we need to use.
        /** @type {?} */
        const view = {
            title: ANALYTIC_TITLE,
            data: { event: 'init' }
        };
        this.analytic.sendView(view);
        this.globalService.getGlobalPositionInfo().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.contracts = new GlobalPositionInfoResponse(res).contracts_balances;
            this.configService.getDisplayContent().then((/**
             * @param {?} values
             * @return {?}
             */
            (values) => {
                this.count = hiddenItemsCounter(values);
            }));
        }));
        this.accordionPositions = this.configService.getAccordionPositions();
        this.listTypes = ListTypes;
    }
    /**
     * @return {?}
     */
    get accounts() {
        return this.contracts && this.contracts.accounts;
    }
    /**
     * @return {?}
     */
    get cards() {
        return this.contracts && this.contracts.cards;
    }
    /**
     * @return {?}
     */
    get pensions() {
        return this.contracts && this.contracts.pensionPlans;
    }
    /**
     * @return {?}
     */
    get shares() {
        return this.contracts && this.contracts.shares;
    }
    /**
     * @return {?}
     */
    get loans() {
        return this.contracts && this.contracts.loans;
    }
    /**
     * @return {?}
     */
    get deposits() {
        return this.contracts && this.contracts.deposits;
    }
    /**
     * @return {?}
     */
    get funds() {
        return this.contracts && this.contracts.funds;
    }
}
GlobalPositionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-global-position',
                template: "<div class=\"content-wrapper\">\n  <div class=\"header\">\n    <div class=\"greetings\">\n      <h1>{{ 'GLOBALPOSITION.HELLO' | translate }} Elena</h1>\n      <span>{{'GLOBALPOSITION.LASTLOGIN' | translate }} 10 Oct. 2019</span>\n    </div>\n    <!-- <sn-icon icon=\"sn-FUNC071\"></sn-icon> -->\n  </div>\n\n  <div class=\"body\">\n    <!-- COTAINER NGFOR LIST START -->\n    <ng-container *ngFor=\"let item of accordionPositions | async\">\n      <ng-container [ngSwitch]=\"item\">\n        <sn-accounts *ngSwitchCase=\"listTypes.ACCOUNTS\" [balance]=\"accounts?.totalBalance?.amount\" [accounts]=\"accounts?.list\"></sn-accounts>\n        <sn-cards *ngSwitchCase=\"listTypes.CARDS\" [cards]=\"cards?.list\"></sn-cards>\n        <sn-loans *ngSwitchCase=\"listTypes.LOANS\" [loans]=\"loans?.list\" [financing]=\"loans?.totalBalance?.amount\"></sn-loans>\n        <sn-shares *ngSwitchCase=\"listTypes.SHARES\" [balance]=\"shares?.totalBalance?.amount\" [shares]=\"shares?.list\"></sn-shares>\n        <sn-investment-funds *ngSwitchCase=\"listTypes.FUNDS\" [balance]=\"funds?.totalBalance?.amount\" [funds]=\"funds?.list\"></sn-investment-funds>\n        <sn-pension-plans *ngSwitchCase=\"listTypes.PENSIONPLANS\" [balance]=\"pensions?.totalBalance?.amount\" [pensions]=\"pensions?.list\"></sn-pension-plans>\n        <sn-deposits  *ngSwitchCase=\"listTypes.DEPOSITS\" [deposits]=\"deposits?.list\" [balance]=\"deposits?.totalBalance?.amount\"></sn-deposits>\n      </ng-container>\n    </ng-container>\n    <!-- COTAINER NGFOR LIST END -->\n    <div *ngIf=\"count > 0\" class=\"hidden-counter-container\">\n      <span class=\"counter-number\">{{count}}</span><span class=\"hidden-text\"> {{ 'GLOBALPOSITION.HIDDENPRODUCTS' | translate}}</span>\n    </div>\n    <div class=\"footer-wrapper\">\n      <div class=\"edit-wrapper\" [routerLink]=\"['edit']\">\n        {{ 'GLOBALPOSITION.MANAGEWHATTOSHOW' | translate }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".content-wrapper{height:100%;width:100%;background-color:rgba(222,237,242,.3);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.content-wrapper .header{background-color:#fff;padding:1rem;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;align-content:top;width:100%;height:5rem;z-index:2}.content-wrapper .header .greetings h1{font-size:2rem;margin:0;line-height:.9}.content-wrapper .header .greetings span{font-size:.875rem;color:var(--color-secondary-mediumgray,#767676)}.content-wrapper .header sn-icon{font-size:1.5rem;color:var(--color-primary-santander,#ec0000)}.content-wrapper .image-wrapper{height:10rem;display:-webkit-box;display:flex}.content-wrapper .image-wrapper img{height:100%;margin:auto}.content-wrapper .footer-wrapper{background-color:#fff;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.content-wrapper .footer-wrapper .edit-wrapper{color:var(--color-secondary-darkturquoise,#137e84);border-radius:.25rem;box-shadow:0 .0625rem .125rem 0 rgba(0,0,0,.27);width:auto;margin:1rem 1.5rem;padding:.875rem;font-size:.875rem;text-align:center}.content-wrapper .hidden-counter-container{letter-spacing:normal;text-align:center;background-color:var(--color-primary-white,#fff)}.content-wrapper .hidden-text{font-size:.875rem;margin-left:.25rem;color:var(--color-secondary-gray,#444)}.content-wrapper .counter-number{font-size:1.125rem;font-weight:700;color:var(--color-primary-santander,#ec0000)}"]
            }] }
];
/** @nocollapse */
GlobalPositionComponent.ctorParameters = () => [
    { type: GlobalPositionService },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["BridgeAnalyticService"] },
    { type: ConfigService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/accounts/accounts.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountsComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.accounts = [];
    }
    /**
     * @return {?}
     */
    get balance() {
        return this._balance;
    }
    /**
     * @param {?} balance
     * @return {?}
     */
    set balance(balance) {
        if (!!balance) {
            this._balance = typeof balance === 'number' ? balance : balance.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.balance = this.balance || this.getBalance();
    }
    /**
     * @private
     * @return {?}
     */
    getBalance() {
        /** @type {?} */
        let sum = 0;
        if (Array.isArray(this.accounts)) {
            this.accounts.forEach((/**
             * @param {?} account
             * @return {?}
             */
            account => {
                sum += account.availableBalance.amount;
            }));
        }
        return sum;
    }
}
AccountsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-accounts',
                template: "<sn-common-list [type]=\"listTypes.ACCOUNTS\" [displayList]=\"accounts\" [footerTitle]=\"'GLOBALPOSITION.BALANCE' | translate\" [footerValue]=\"balance\"></sn-common-list>",
                styles: [""]
            }] }
];
AccountsComponent.propDecorators = {
    accounts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['accounts',] }],
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-accordion/accordion.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const AccordionAnimations = {
    accordionTrigger: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('accordionTrigger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '0'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            height: '*'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms linear')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms linear'))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-accordion/accordion-state.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AccordionState = {
    Expanded: "expanded",
    Collapsed: "collapsed",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-accordion/accordion.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionComponent {
    constructor() {
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
        this.currentState = AccordionState.Expanded;
        this.AccordionState = AccordionState;
        this.hasFooter = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set state(value) {
        this.currentState = value;
    }
    /**
     * @return {?}
     */
    toggleState() {
        this.currentState = this.currentState === AccordionState.Expanded ? AccordionState.Collapsed : AccordionState.Expanded;
        this.stateChange.emit(this.currentState);
    }
}
AccordionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-accordion',
                template: "<div #accordion class='accordion-wrapper'>\n  <div class=\"title\" (click)=\"toggleState()\">\n    <p>{{title}}</p>\n    <sn-icon icon=\"{{this.currentState === AccordionState.Expanded ? 'sn-SYS018' : 'sn-SYS019'}}\"></sn-icon>\n  </div>\n  <div class=\"content-wrapper\" \n    [@accordionTrigger]=\"currentState\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"footer\" >\n    <ng-content select=\"[footer]\"></ng-content>\n  </div>\n</div>",
                animations: [AccordionAnimations.accordionTrigger],
                styles: [".accordion-wrapper{background-color:#fff;padding:0 1rem;box-shadow:0 .0625rem .125rem var(--color-primary-mediumsky,#cedee7);margin-bottom:.5rem}.accordion-wrapper .title{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;align-content:center;padding:1rem 0}.accordion-wrapper .title p{font-size:1.125rem;color:var(--color-primary-santander,#ec0000);margin:0}.accordion-wrapper .title ::ng-deep sn-icon{display:-webkit-box;display:flex}.accordion-wrapper .title ::ng-deep sn-icon i{margin:auto;font-size:1.5rem}.accordion-wrapper .content-wrapper{overflow:hidden}"]
            }] }
];
/** @nocollapse */
AccordionComponent.ctorParameters = () => [];
AccordionComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['state',] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-accordion/accordion.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionModule {
}
AccordionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                declarations: [AccordionComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
                ],
                exports: [AccordionComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/cards/cards.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardsComponent {
    constructor() {
        this.cardsList = [];
        this.isExpanded = false;
        this.CardType = CardType;
        this.CardStatus = CardStatus;
        this.listTypes = ListTypes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cards(value) {
        this.cardsList = this.orderByCardType(value);
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    orderByCardType(array) {
        /**
         * Ordered by type in the following order (https://engineeringglobile.atlassian.net/browse/GA-115):
         * 1 - debit
         * 2 - credit
         * 3 - prepaid
         */
        if (!Array.isArray(array)) {
            return;
        }
        array.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a.type === b.type) {
                return 0;
            }
            if (a.type === CardType.DEBIT) {
                return -1;
            }
            else if (a.type === CardType.CREDIT && b.type === CardType.PREPAID) {
                return -1;
            }
            else {
                return 1;
            }
        }));
        return array;
    }
}
CardsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-cards',
                template: "<sn-common-list [type]=\"listTypes.CARDS\" [displayList]=\"cardsList\"></sn-common-list>\n"
            }] }
];
/** @nocollapse */
CardsComponent.ctorParameters = () => [];
CardsComponent.propDecorators = {
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['cards',] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/common-list/common-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE$1 = 'global-position';
class CommonListComponent {
    /**
     * @param {?} configService
     * @param {?} analytic
     * @param {?} globileNavigationService
     */
    constructor(configService, analytic, globileNavigationService) {
        this.configService = configService;
        this.analytic = analytic;
        this.globileNavigationService = globileNavigationService;
        this.AccordionState = AccordionState;
    }
    /**
     * @return {?}
     */
    get displayList() {
        return this._displayList;
    }
    /**
     * @param {?} displayList
     * @return {?}
     */
    set displayList(displayList) {
        if (displayList) {
            this.configService.getDisplayContent(this._type)
                .then((/**
             * @param {?} list
             * @return {?}
             */
            (list) => {
                if (list && Object.keys(list).length > 0) {
                    this._displayList = displayList
                        .filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => list[item.getId()]));
                }
                else {
                    this._displayList = displayList;
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.configService.getAccordionState(value)
            .then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.state = res;
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    stateChange(event) {
        // TODO: waiting for PO to tell us the ags we need to use.
        /** @type {?} */
        const state$$1 = event;
        /** @type {?} */
        const analyticEvent = {
            title: ANALYTIC_TITLE$1,
            data: {
                event: 'switch accordion state',
                accordionState: state$$1,
                accordionTitle: this._type
            }
        };
        this.configService.setAccordionState(this._type, event).then((/**
         * @param {?} res
         * @return {?}
         */
        res => { }));
        this.analytic.sendEvent(analyticEvent);
    }
    /**
     * @param {?} el
     * @return {?}
     */
    navigateTo(el) {
        switch (this._type) {
            case ListTypes.ACCOUNTS:
                this.globileNavigationService.gotToModule([_globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["ModuleId"].PRODUCTDETAIL, el.accountId]);
                break;
            case ListTypes.CARDS:
                this.globileNavigationService.gotToModule([_globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["ModuleId"].CARDDETAIL, el.cardId]);
                break;
            default:
                break;
        }
    }
}
CommonListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-common-list',
                template: "\n<sn-accordion \n  [title]=\" ('GLOBALPOSITION.' + type) | translate\"\n  [state]=\"state ? state : displayList && displayList.length > 2 ? AccordionState.Collapsed : AccordionState.Expanded\"\n  *ngIf=\"displayList && displayList.length > 0\"\n  (stateChange)=\"stateChange($event)\">\n  <div>\n    <sn-option-list no-padding>\n      <sn-option-item no-padding *ngFor=\"let element of displayList\" (click)=\"navigateTo(element)\">\n          <div class=\"content-wrapper\">\n            <div item-start class=\"card-image\" *ngIf=\"element.getImage()\">\n              <img [src]=\"element.getImage()\" />\n              <div class=\"locker-wrapper\" *ngIf=\"element.isDisabled()\">\n                <sn-icon icon=\"sn-FUNC057\"></sn-icon>\n              </div>\n            </div>\n            <div class=\"account-item-container\">\n              <div class=\"account-item-name\">{{element.getName()}}</div>\n              <div class=\"account-item-number\">{{element.getNumberDetail()}}</div>\n            </div>\n            <div class=\"account-amount-container\">\n              <div item-end align-start class=\"account-item-balance\" *ngIf=\"element.getCurrency() && !element.isDisabled()\"><sn-currency [value]=\"element.getCurrency()\"></sn-currency></div> \n              <div item-end align-start class=\"account-item-balance disabled-card\" *ngIf=\"element.isDisabled()\">{{element.disableText()}}</div>\n              <div item-end align-start class=\"account-end-date\" *ngIf=\"element.getEndDate()\">{{element.getEndDate()}}</div>\n            </div>\n           \n          </div>\n          <div class=\"progress-bar-wrapper\" *ngIf=\"element.getProgressBarValue() || element.getProgressBarTitle() || element.getProgressBarDetail()\">\n            <sn-progress-bar *ngIf=\"element.getProgressBarValue()\" [value]=\"element.getProgressBarValue()\" height=\"0.2em\" width=\"100%\"></sn-progress-bar>\n            <div class=\"progress-bar-detail\">\n              <span class=\"title\" *ngIf=\"element.getProgressBarTitle()\">{{element.getProgressBarTitle()}} </span>\n              <span class=\"amount\" *ngIf=\"element.getProgressBarDetail()\"><sn-currency [value]=\"element.getProgressBarDetail()\"></sn-currency></span></div>\n          </div>\n        </sn-option-item>\n    </sn-option-list>\n  </div>\n  <div footer *ngIf=\"footerTitle && footerValue\">\n    <div class=\"footer-container\">\n      <div class=\"footer-title\">{{footerTitle}}</div>\n      <div class=\"footer-balance\"><sn-currency [value]=\"footerValue\"></sn-currency> </div>\n    </div>\n  </div>\n</sn-accordion>",
                styles: [":host ::ng-deep sn-option-list[no-padding]{padding:0}:host ::ng-deep sn-option-list[no-padding] .item-native{padding-left:initial!important;-webkit-padding-start:initial!important;padding-inline-start:initial!important}:host ::ng-deep sn-option-list[no-padding] .item-native .item-inner{padding-right:initial!important;-webkit-padding-end:initial!important;padding-inline-end:initial!important}:host ::ng-deep sn-option-list[no-padding] .item-native [item-end]{margin-right:initial}:host .footer-container{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center}:host .footer-title{padding-top:.6875rem;padding-bottom:.6875rem;font-weight:400;color:var(--color-secondary-mediumgray,#767676);font-size:1rem;line-height:1.5rem;-webkit-box-flex:1;flex:1;text-align:start}:host .footer-balance{padding-top:.75rem;padding-bottom:.75rem;font-size:1.125rem;line-height:1.625rem;letter-spacing:0;font-weight:700;color:var(--color-secondary-gray,#444);text-align:end}:host sn-option-item{cursor:pointer}:host ::ng-deep sn-option-item:last-child .item-native{border-bottom:none}:host ::ng-deep sn-option-item .content-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}:host ::ng-deep sn-option-item .content-wrapper .card-image{-ms-grid-row-align:center;align-self:center;-webkit-box-flex:0;flex:0 1 auto}:host ::ng-deep sn-option-item .content-wrapper .account-item-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-flex:2;flex-grow:2}:host ::ng-deep sn-option-item .content-wrapper .account-item-balance{-webkit-box-flex:0;flex:0 1 auto}:host ::ng-deep sn-option-item .progress-bar-wrapper{width:100%;position:relative}:host ::ng-deep sn-option-item .progress-bar-wrapper .progress-bar-detail{margin-top:.25rem;padding-bottom:.6875rem;width:100%;text-align:right}:host ::ng-deep sn-option-item .progress-bar-wrapper .progress-bar-detail .title{font-size:1rem;color:var(--color-secondary-mediumgray,#767676)}:host ::ng-deep sn-option-item .progress-bar-wrapper .progress-bar-detail .amount{font-size:.875rem;color:var(--color-secondary-mediumgray,#767676)}:host ::ng-deep sn-option-item .card-image{max-height:3rem;min-height:3rem;max-width:4.5rem;min-width:4.5rem;-ms-grid-row-align:center;align-self:center;position:relative}:host ::ng-deep sn-option-item .card-image img{width:100%;height:100%;z-index:1}:host ::ng-deep sn-option-item .card-image .locker-wrapper{z-index:2;position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(255,255,255,.8);display:-webkit-box;display:flex}:host ::ng-deep sn-option-item .card-image .locker-wrapper sn-icon{margin:auto;font-size:1.5rem}:host ::ng-deep sn-option-item .account-item-container{padding-top:.5625rem;padding-bottom:.6875rem}:host ::ng-deep sn-option-item .account-item-container .account-item-name{color:var(--color-secondary-gray,#444);font-size:1rem;line-height:1.5rem;font-weight:400}:host ::ng-deep sn-option-item .account-item-container .account-item-number{font-size:.875rem;color:var(--color-secondary-mediumgray,#767676);line-height:1.3125;font-weight:lighter}:host ::ng-deep sn-option-item .account-item-container .account-item-number .disabled-card{font-size:1rem;color:var(--color-secondary-turquoise,#1bb3bc);font-weight:400}:host ::ng-deep sn-option-item .account-item-balance{padding-top:.5rem;font-size:1.125rem;line-height:1.625rem;letter-spacing:0;color:var(--color-secondary-gray,#444);font-weight:400;text-align:end}:host ::ng-deep sn-option-item .disabled-card{font-size:1rem;color:var(--color-secondary-turquoise,#1bb3bc);font-weight:700}:host ::ng-deep sn-option-item .account-end-date{font-size:.875rem;color:var(--color-secondary-mediumgray,#767676);line-height:1.3125;font-weight:lighter}"]
            }] }
];
/** @nocollapse */
CommonListComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["BridgeAnalyticService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["GlobileNavigationService"] }
];
CommonListComponent.propDecorators = {
    footerTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['footerTitle',] }],
    footerValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['footerValue',] }],
    displayList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['displayList',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pension-plans/pension-plans.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PensionPlansComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.pensionsList = [];
        this.isExpanded = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pensions(value) {
        this.pensionsList = value;
    }
    /**
     * @return {?}
     */
    get balance() {
        return this._balance;
    }
    /**
     * @param {?} balance
     * @return {?}
     */
    set balance(balance) {
        if (!!balance) {
            this._balance = typeof balance === 'number' ? balance : balance.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.balance = this.balance || this.getBalance();
    }
    /**
     * @private
     * @return {?}
     */
    getBalance() {
        /** @type {?} */
        let sum = 0;
        if (Array.isArray(this.pensionsList)) {
            this.pensionsList.forEach((/**
             * @param {?} pension
             * @return {?}
             */
            pension => {
                sum += pension.currentValue.amount;
            }));
        }
        return sum;
    }
}
PensionPlansComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-pension-plans',
                template: "<sn-common-list [type]=\"listTypes.PENSIONPLANS\" [displayList]=\"pensionsList\" [footerTitle]=\"'Balance'\" [footerValue]=\"balance\"></sn-common-list>\n"
            }] }
];
PensionPlansComponent.propDecorators = {
    pensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['pensions',] }],
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/edit/edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EditComponent {
    /**
     * @param {?} configService
     * @param {?} globalService
     * @param {?} location
     */
    constructor(configService, globalService, location) {
        this.configService = configService;
        this.globalService = globalService;
        this.location = location;
        this.listTypes = ListTypes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.globalService.getGlobalPositionInfo().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.contracts = new GlobalPositionInfoResponse(res).contracts_balances;
            this.initForm();
            this.configService.getDisplayContent()
                .then((/**
             * @param {?} values
             * @return {?}
             */
            (values) => {
                if (values) {
                    this.form.setValue(values);
                    this.form.updateValueAndValidity();
                    this.showReset = Boolean(hiddenItemsCounter(this.form.getRawValue()));
                }
                this.$formChanges = this.form.valueChanges.subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.configService.setDisplayContent(this.form.getRawValue());
                    this.showReset = Boolean(hiddenItemsCounter(this.form.getRawValue()));
                }));
            }));
        }));
        this.configService.getAccordionPositions().then((/**
         * @param {?} list
         * @return {?}
         */
        (list) => this.list = list));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(this.list, event.previousIndex, event.currentIndex);
        this.configService.setAccordionPosition(this.list);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getdata(type) {
        switch (type) {
            case ListTypes.ACCOUNTS:
                return this.contracts && this.contracts.accounts && this.contracts.accounts.list;
            case ListTypes.CARDS:
                return this.contracts && this.contracts.cards && this.contracts.cards.list;
            case ListTypes.LOANS:
                return this.contracts && this.contracts.loans && this.contracts.loans.list;
            case ListTypes.DEPOSITS:
                return this.contracts && this.contracts.deposits && this.contracts.deposits.list;
            case ListTypes.PENSIONPLANS:
                return this.contracts && this.contracts.pensionPlans && this.contracts.pensionPlans.list;
            case ListTypes.SHARES:
                return this.contracts && this.contracts.shares && this.contracts.shares.list;
            case ListTypes.FUNDS:
                return this.contracts && this.contracts.funds && this.contracts.funds.list;
        }
    }
    /**
     * @return {?}
     */
    initForm() {
        Object.keys(ListTypes).forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /** @type {?} */
            const dataList = this.getdata(ListTypes[type]);
            if (dataList) {
                /** @type {?} */
                const typeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
                dataList.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    typeForm.addControl(item.getId(), new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](true));
                }));
                if (this.form === undefined) {
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
                }
                this.form.addControl(type, typeForm);
            }
        }));
        this._resetValue = this.form.getRawValue();
    }
    /**
     * @return {?}
     */
    onMenuClick() {
        this.location.back();
    }
    /**
     * @return {?}
     */
    reset() {
        this.form.reset(this._resetValue);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.$formChanges && !this.$formChanges.closed) {
            this.$formChanges.unsubscribe();
        }
    }
}
EditComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-edit',
                template: "<!-- INFO START -->\n<section class=\"info-wrapper\">\n  <p>{{'GLOBALPOSITION.EDITINFO' | translate }}</p>\n</section>\n<!-- INFO END -->\n<section class=\"display-all-wrapper\" *ngIf=\"showReset\">\n  <div class=\"display-all-content\" (click)=\"reset()\">\n    <sn-icon large icon=\"sn-FUNC123\"></sn-icon>\n    <div class=\"label\">{{'GLOBALPOSITION.DISPLAYALLPRODUCTS' | translate}}</div>\n  </div>\n</section>\n<!-- DRAG LIST STRAT -->\n<form *ngIf=\"form\" [formGroup]=\"form\">\n  <cdk-drop-list [cdkDropListOrientation]=\"'vertical'\" [cdkDropListLockAxis]=\"'y'\" id=\"gpEdit\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <!-- COTAINER NGFOR LIST START -->\n    <ng-container *ngFor=\"let type of list\">\n      <!-- DRAG ITEM TEMPLATE START -->\n      <div class='item-wrapper' cdkDrag>\n        <div class=\"custom-placeholder\" *cdkDragPlaceholder></div>\n        <div class=\"item-header-wrapper\">\n          <p class=\"item-header-title\">{{ 'GLOBALPOSITION.' + type | translate }}</p>\n          <button cdkDragHandle class=\"item-header-handle\">\n            <sn-icon icon=\"sn-SYS015\"></sn-icon>\n          </button>\n        </div>\n\n        <div [formGroupName]=\"listTypes[type]\" class=\"content-wrapper\">\n          <sn-option-list no-padding>\n            <sn-option-item no-padding *ngFor=\"let element of getdata(type)\">\n              <div class=\"content-wrapper\">\n                <div item-start class=\"card-image\" *ngIf=\"element?.getImage()\">\n                  <img [src]=\"element?.getImage()\" />\n                  <div class=\"locker-wrapper\" *ngIf=\"element?.isDisabled()\">\n                    <sn-icon icon=\"sn-FUNC057\"></sn-icon>\n                  </div>\n                </div>\n                <div class=\"account-item-container\">\n                  <div class=\"account-item-name\">{{element.getName()}}</div>\n                  <div class=\"account-item-number\">{{element.getNumberDetail()}}</div>\n                </div>\n                <sn-slide-toggle [formControlName]=\"element?.getId()\"  item-end></sn-slide-toggle>\n              </div>\n            </sn-option-item>\n          </sn-option-list>\n        </div>\n      </div>\n      <!-- DRAG ITEM TEMPLATE END -->\n    </ng-container>\n    <!-- COTAINER NGFOR LIST END -->\n  </cdk-drop-list>\n  <!-- DRAG LIST END -->\n</form>",
                styles: [":host{overflow-x:hidden;overflow-y:auto;background-color:var(--color-secondary-purple,#f5f9fb)}.info-wrapper{width:100%;height:4.5rem;background-color:var(--color-primary-white,#fff)}.info-wrapper p{margin:.5rem 3.75rem 1rem}.display-all-wrapper{width:100%;height:4rem;background-color:var(--color-primary-white,#fff);color:var(--color-secondary-darkturquoise,#137e84);padding-left:1rem}.display-all-wrapper .display-all-content{cursor:pointer}.display-all-wrapper .display-all-content sn-icon{vertical-align:middle;display:inline-block}.display-all-wrapper .display-all-content .label{margin-left:.5rem;margin-top:1.3125rem;margin-bottom:1.3125rem;color:var(--color-secondary-darkturquoise,#137e84);display:inline-block}.custom-placeholder{background:#ccc;border:.1875rem dotted #999;min-height:3.75rem;-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.cdk-drag-preview{box-sizing:border-box;box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12)}.cdk-drag-animating{-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}::ng-deep sn-option-list[no-padding]{padding:0}::ng-deep sn-option-list[no-padding] .item-native{padding-left:initial!important;-webkit-padding-start:initial!important;padding-inline-start:initial!important}::ng-deep sn-option-list[no-padding] .item-native .item-inner{padding-right:initial!important;-webkit-padding-end:initial!important;padding-inline-end:initial!important}::ng-deep sn-option-list[no-padding] .item-native [item-end]{margin-right:initial}::ng-deep sn-option-item:last-child .item-native{border-bottom:none}::ng-deep sn-option-item .content-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}::ng-deep sn-option-item .content-wrapper .card-image{-ms-grid-row-align:center;align-self:center;-webkit-box-flex:0;flex:0 1 auto}::ng-deep sn-option-item .content-wrapper .account-item-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-flex:2;flex-grow:2}::ng-deep sn-option-item .card-image{max-height:3rem;min-height:3rem;max-width:4.5rem;min-width:4.5rem;-ms-grid-row-align:center;align-self:center;position:relative}::ng-deep sn-option-item .card-image img{width:100%;height:100%;z-index:1}::ng-deep sn-option-item .card-image .locker-wrapper{z-index:2;position:absolute;left:0;right:0;top:0;bottom:0;background-color:#ffffffcc;display:-webkit-box;display:flex}::ng-deep sn-option-item .card-image .locker-wrapper sn-icon{margin:auto;font-size:1.5rem}::ng-deep sn-option-item .account-item-container{padding-top:.5625rem;padding-bottom:.6875rem}::ng-deep sn-option-item .account-item-container .account-item-name{color:var(--color-secondary-gray,#444);font-size:1rem;line-height:1.5rem;font-weight:400}::ng-deep sn-option-item .account-item-container .account-item-number{font-size:.875rem;color:var(--color-secondary-mediumgray,#767676);line-height:1.3125;font-weight:lighter}::ng-deep sn-option-item .disabled-card{font-size:1rem;color:var(--color-secondary-turquoise,#1bb3bc);font-weight:700}.item-wrapper{background-color:var(--color-primary-white,#fff);padding:0 1rem;box-shadow:0 .0625rem .125rem -.0625rem var(--color-primary-mediumsky,#cedee7);margin-bottom:.5rem}.item-wrapper .item-header-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;align-content:center;padding:1rem 0}.item-wrapper .item-header-wrapper .item-header-handle{line-height:1;-webkit-box-flex:0;flex:0;background:0 0;cursor:grab;cursor:-webkit-grab;cursor:-moz-grab}.item-wrapper .item-header-wrapper .item-header-handle:active{cursor:grabbing;cursor:-webkit-grabbing}.item-wrapper .item-header-wrapper .item-header-handle ::ng-deep sn-icon{font-size:1.5rem}.item-wrapper .item-header-wrapper .item-header-title{-webkit-box-flex:1;flex:1;font-size:1.125rem;color:var(--color-primary-santander,#ec0000);margin:0}.item-wrapper .content-wrapper{overflow:hidden}"]
            }] }
];
/** @nocollapse */
EditComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: GlobalPositionService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shares/shares.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharesComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.sharesList = [];
        this.isExpanded = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shares(value) {
        this.sharesList = value;
    }
    /**
     * @return {?}
     */
    get balance() {
        return this._balance;
    }
    /**
     * @param {?} balance
     * @return {?}
     */
    set balance(balance) {
        if (!!balance) {
            this._balance = typeof balance === 'number' ? balance : balance.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.balance = this.balance || this.getBalance();
    }
    /**
     * @private
     * @return {?}
     */
    getBalance() {
        /** @type {?} */
        let sum = 0;
        if (Array.isArray(this.sharesList)) {
            this.sharesList.forEach((/**
             * @param {?} account
             * @return {?}
             */
            account => {
                sum += account.value.amount; // TODO: need to review to get the right attribute
            }));
        }
        return sum;
    }
}
SharesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-shares',
                template: "<sn-common-list [type]=\"listTypes.SHARES\" [displayList]=\"sharesList\" [footerTitle]=\"'Balance'\" [footerValue]=\"balance\"></sn-common-list>\n"
            }] }
];
/** @nocollapse */
SharesComponent.ctorParameters = () => [];
SharesComponent.propDecorators = {
    shares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['shares',] }],
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loans/loans.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoansComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.loans = [];
    }
    /**
     * @return {?}
     */
    get financing() {
        return this._financing;
    }
    /**
     * @param {?} financing
     * @return {?}
     */
    set financing(financing) {
        if (!!financing) {
            this._financing = typeof financing === 'number' ? financing : financing.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoansComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-loans',
                template: "\n<sn-common-list [type]=\"listTypes.LOANS\" [displayList]=\"loans\" [footerTitle]=\"'GLOBALPOSITION.FINANCING' | translate\" [footerValue]=\"financing\"></sn-common-list>\n\n"
            }] }
];
/** @nocollapse */
LoansComponent.ctorParameters = () => [];
LoansComponent.propDecorators = {
    loans: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['loans',] }],
    financing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/deposits/deposits.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DepositsComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.deposits = [];
    }
    /**
     * @return {?}
     */
    get balance() {
        return this._balance;
    }
    /**
     * @param {?} balance
     * @return {?}
     */
    set balance(balance) {
        if (!!balance) {
            this._balance = typeof balance === 'number' ? balance : balance.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DepositsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-deposits',
                template: "\n<sn-common-list [type]=\"listTypes.DEPOSITS\" [displayList]=\"deposits\" [footerTitle]=\"'GLOBALPOSITION.BALANCE' | translate\" [footerValue]=\"balance\"></sn-common-list>\n\n"
            }] }
];
/** @nocollapse */
DepositsComponent.ctorParameters = () => [];
DepositsComponent.propDecorators = {
    deposits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['deposits',] }],
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/global-postion-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    header: { display: false },
    footer: { display: true }
}, ɵ1 = {
    header: {
        left: { icon: 'sn-SYS020', route: 'back' },
        title: { label: 'Back to Global Position' }
        // title: {label: 'GLOBALPOSITION.EDITINFO' | translate}
    },
    footer: {
        display: false
    }
};
/** @type {?} */
const routes = [
    // { path: '', redirectTo: 'main'},
    { path: '', component: GlobalPositionComponent,
        data: ɵ0
    },
    { path: 'edit', component: EditComponent,
        data: ɵ1
    },
    { path: '**', redirectTo: '' }
];
class GlobalPositionRoutingModule {
}
GlobalPositionRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/investment-funds/investment-funds.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FundsComponent {
    constructor() {
        this.listTypes = ListTypes;
        this.fundList = [];
        this.isExpanded = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set funds(value) {
        this.fundList = value;
    }
    /**
     * @return {?}
     */
    get balance() {
        return this._balance;
    }
    /**
     * @param {?} balance
     * @return {?}
     */
    set balance(balance) {
        if (!!balance) {
            this._balance = typeof balance === 'number' ? balance : balance.amount;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.balance = this.balance || this.getBalance();
    }
    /**
     * @private
     * @return {?}
     */
    getBalance() {
        /** @type {?} */
        let sum = 0;
        if (Array.isArray(this.fundList)) {
            this.fundList.forEach((/**
             * @param {?} fund
             * @return {?}
             */
            fund => {
                sum += fund.currentValue.amount;
            }));
        }
        return sum;
    }
}
FundsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"], args: [{
                selector: 'sn-investment-funds',
                template: "<sn-common-list [type]=\"listTypes.FUNDS\" [displayList]=\"fundList\" [footerTitle]=\"'Balance'\" [footerValue]=\"balance\"></sn-common-list>"
            }] }
];
FundsComponent.propDecorators = {
    funds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"], args: ['funds',] }],
    balance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/global-position.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} http
 * @param {?} path
 * @return {?}
 */
function HttpLoaderFactory(http, path) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__["TranslateHttpLoader"](http, path.api.GlobalPosition['languages'], '.json');
}
class GlobalPositionModule {
}
GlobalPositionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"], args: [{
                declarations: [
                    GlobalPositionComponent,
                    AccountsComponent,
                    CardsComponent,
                    PensionPlansComponent,
                    CommonListComponent,
                    EditComponent,
                    SharesComponent,
                    LoansComponent,
                    DepositsComponent,
                    FundsComponent,
                ],
                providers: [
                    HttpClientService,
                    LocalStorageService,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    AccordionModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["OptionListModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["MenuHeaderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["SlideToggleModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["SliderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["CurrencyModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["EnviromentConfigService"]]
                        }
                    }),
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    GlobalPositionRoutingModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["MenuHeaderModule"]
                ],
                exports: [
                    GlobalPositionComponent,
                    EditComponent
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
 * Generated from: globile-global-position.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=globile-global-position.js.map

/***/ })

}]);
//# sourceMappingURL=3.js.map