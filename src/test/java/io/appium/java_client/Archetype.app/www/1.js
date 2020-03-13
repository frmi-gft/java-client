(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@globile/card-detail/fesm2015/globile-card-detail.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@globile/card-detail/fesm2015/globile-card-detail.js ***!
  \***************************************************************************/
/*! exports provided: HttpLoaderFactory, CardDetailModule, ɵg, ɵc, ɵa, ɵd, ɵf, ɵe, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailModule", function() { return CardDetailModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CardDetailRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CardDetailHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CardDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CardTransactionDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NoTransactionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TransactionCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CardsService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");












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
 * Generated from: lib/services/cards.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardsService {
    /**
     * @param {?} environment
     * @param {?} http
     */
    constructor(environment, http) {
        this.environment = environment;
        this.http = http;
    }
    /**
     * \@description Service to get the cards
     * \@memberOf CardsService
     * @param {?=} params
     * @return {?} Observable<CardListResponse>
     */
    getCards(params) {
        return this.http.get(`${this.environment.api['CardsDetails']['urlCards']}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        resp => {
            return (undefined !== resp) ? resp.cards : [];
        })));
    }
    /**
     * \@description Returns card details by cardId
     *              url to be something like: /87
     *
     * \@memberOf CardsService
     * @param {?} cardId
     * @return {?} Observable<CardDetailsResponse>
     */
    getCardDetailsByCardId(cardId) {
        return this.http.get(generateUrl(this.environment.api['CardsDetails']['urlCardDetails'], { CARD_ID: cardId }));
    }
    /**
     * \@description Returns details for a card transaction
     * \@memberOf CardsService
     * @param {?} cardId
     * @param {?} transactionId
     * @return {?} Observable<CardTransactionDetails>
     */
    getTransactionDetailsById(cardId, transactionId) {
        return this.http.get(generateUrl(this.environment.api['CardsDetails']['urlCardTransactionDetail'], { CARD_ID: cardId, TRANSACTION_ID: transactionId }));
    }
    /**
     * \@description Returns a list of transactions of a specific card
     *
     * \@Param {string} cardId / {({_limit?: string, _offset?: string, _sort?: '+date' | '-date',
     *     from_amount?: string, from_date?: string, to_amount?: string, to_date?: string,
     *     transaction_type?: 'credit' | 'debit' | 'pending'})} [params]
     * \@Returns {Observable<TransactionsListResponse>}
     * \@memberOf CardsService
     * @param {?} cardId
     * @param {?=} params
     * @return {?}
     */
    getCardTransactions(cardId, params) {
        return this.http.get(generateUrl(this.environment.api['CardsDetails']['urlCardTransactions'], { CARD_ID: cardId }), { params });
    }
    /**
     * \@description Passing the value of the _next path it will call the next transaction list
     *
     * \@readOnly
     * \@memberOf CardsService
     * @param {?} next
     * @return {?}
     */
    getNextTransactions(next) {
        return this.http.get(generateUrl(this.environment.api['CardsDetails']['urlCardsNext'], { NEXT: next }));
    }
}
CardsService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CardsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["ENV_CONFIG"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
/** @nocollapse */ CardsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["defineInjectable"])({ factory: function CardsService_Factory() { return new CardsService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["ENV_CONFIG"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); }, token: CardsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/helpers/maping.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function mapTransactionsCardsResponse() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
     * @param {?} res
     * @return {?}
     */
    (res) => {
        /** @type {?} */
        const resp = res ? res : null;
        return !resp ? null : {
            nextLink: res._links && res._links._next,
            transactionsData: resp.cardTransactionData.map((/**
             * @param {?} tr
             * @return {?}
             */
            (tr) => {
                /** @type {?} */
                const item = {
                    balance: tr.runningBalance && tr.runningBalance.amount,
                    currency: tr.amount && tr.amount.currencyCode,
                    date: new Date(tr.processedDate),
                    label: tr.description,
                    amount: tr.amount.amount,
                    new: new Date(tr.processedDate) >= new Date(),
                    id: tr.transactionId
                };
                return item;
            }))
        };
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utilities/analytic-names.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_CARD_TRANSACTION_DETAIL = 'card-transaction-detail';
/** @type {?} */
const MORE_TRANSACTIONS = 'more transactions';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-detail/card-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE = 'card-detail';
class CardDetailComponent {
    /**
     * @param {?} route
     * @param {?} router
     * @param {?} analytic
     * @param {?} common
     * @param {?} cardsService
     */
    constructor(route, router, analytic, common, cardsService) {
        this.route = route;
        this.router = router;
        this.analytic = analytic;
        this.common = common;
        this.cardsService = cardsService;
        this.isLoading = true;
        this.isLoadingFull = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.cardId = this.common.getSelectedCardId();
        if (!this.cardId) {
            if (this.route.snapshot.paramMap.has('id')) {
                this.cardId = this.route.snapshot.paramMap.get('id');
            }
        }
        this.getCards();
    }
    /**
     * @return {?}
     */
    findStartIndex() {
        /** @type {?} */
        let i = 0;
        if (!this.activeCard && this.cardId && this.cards.length) {
            i = this.cards.findIndex((/**
             * @param {?} card
             * @return {?}
             */
            (card) => `${card.cardId}` === `${this.cardId}`));
        }
        this.startIndex = i;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    cardSelected(card) {
        /** @type {?} */
        const event = {
            title: ANALYTIC_TITLE,
            data: {
                event: 'switch card',
                card: card.cardId
            }
        };
        this.analytic.sendEvent(event);
        this.transactionsList = null;
        this.activeCard = card;
        this.getCardTransactions();
    }
    /**
     * @param {?} cardId
     * @return {?}
     */
    cardManagement(cardId) {
        this.isLoadingFull = true;
        this.router.navigate(['cardmanagement', cardId]);
    }
    /**
     * Method to recive the cards
     * @return {?}
     */
    getCards() {
        this.cardsService.getCards().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.cards = Array.isArray(res) ? res : [];
            this.findStartIndex();
        }));
    }
    /**
     * @return {?}
     */
    getCardTransactions() {
        this.isLoading = true;
        this.cardsService.getCardTransactions(this.activeCard.cardId, { _limit: '10', _sort: '-date', _offset: '0' })
            .pipe(mapTransactionsCardsResponse(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed)).subscribe((/**
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
                    event: MORE_TRANSACTIONS,
                    account: this.activeCard.cardId
                }
            };
            this.analytic.sendEvent(event);
            this.isLoading = true;
            this.cardsService.getNextTransactions(this.nextLinks).pipe(mapTransactionsCardsResponse(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed)).subscribe((/**
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
    ngOnDestroy() {
        this.common.clearCardId();
        this.destroyed.next();
        this.destroyed.complete();
    }
}
CardDetailComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                selector: 'sn-card-detail',
                template: "<div class=\"card-detail\" *ngIf=\"cards\">\n\n  <sn-slider [value]=\"cards\" (onChange)=\"cardSelected($event)\" [startIndex]=\"startIndex\">\n    <ng-container *ngFor=\"let card of cards\">\n      <ng-template #slide let-item>\n        <sn-card-detail-header [card]=\"item\" (onCard)=\"cardManagement($event)\"></sn-card-detail-header>\n      </ng-template>\n    </ng-container>\n  </sn-slider>\n\n  <ng-container *ngIf=\"transactionsList else loading\" class=\"transactions-wrapper\">\n    <ng-container *ngIf=\"transactionsList.length > 0 else noTransactions\">\n      <sn-infinite-scroller (scrolled)=\"lazyLoad()\">\n        <sn-transaction-list [value]=\"transactionsList\"\n                            [datesTranslation]=\"'transactionGroup.dates' | translate\">\n          <ng-template>\n            <sn-transaction-account [cardId]=\"activeCard.cardId\"></sn-transaction-account>\n          </ng-template>\n        </sn-transaction-list>\n        <sn-loader class=\"full\" *ngIf=\"isLoadingFull\"></sn-loader>\n      </sn-infinite-scroller>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <sn-loader></sn-loader>\n</ng-template>\n\n<ng-template #noTransactions>\n  <div class=\"no-trans-wrapper\">\n    <sn-no-transactions *ngIf=\"!isLoading\" [hidden]=\"transactionsList?.length > 0\"></sn-no-transactions>\n  </div>\n</ng-template>\n",
                styles: ["@charset \"UTF-8\";@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.display_level_1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (max-width:375px){.display_level_1{font-size:2.625rem}}.display_level_2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (max-width:375px){.display_level_2{font-size:2.25rem}}.display_level_3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_3{font-size:3rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_3{font-size:3rem}}@media only screen and (max-width:375px){.display_level_3{font-size:2rem}}.heading_level_1,h1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (max-width:375px){.heading_level_1,h1{font-size:2rem}}.heading_level_2,h2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_2,h2{font-size:2.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_2,h2{font-size:2.25rem}.heading_level_3,h3{font-size:2rem}}.heading_level_3,h3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_3,h3{font-size:2rem}}@media only screen and (max-width:375px){.heading_level_2,h2{font-size:2rem}.heading_level_3,h3{font-size:1.75rem}}.heading_level_4,h4{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_4,h4{font-size:1.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_4,h4{font-size:1.75rem}.heading_level_5,h5{font-size:1.5rem}}.heading_level_5,h5{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_5,h5{font-size:1.5rem}}@media only screen and (max-width:375px){.heading_level_4,h4{font-size:1.5rem}.heading_level_5,h5{font-size:1.25rem}}.heading_level_6,h6{line-height:1.4;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_6,h6{font-size:1.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_6,h6{font-size:1.25rem}.body_text_large{font-size:1.125rem}}.body_text_large{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_large{font-size:1.125rem}}@media only screen and (max-width:375px){.heading_level_6,h6{font-size:1.125rem}.body_text_large{font-size:1rem}}.body_text_medium{font-size:1rem;line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_medium{font-size:1rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_medium{font-size:1rem}.body_text_small{font-size:.875rem}}.body_text_small{line-height:1.5;letter-spacing:0}@media only screen and (max-width:375px){.body_text_medium,.body_text_small{font-size:.875rem}}.body_text_xsmall{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_small{font-size:.875rem}.body_text_xsmall{font-size:.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_xsmall{font-size:.75rem}}@media only screen and (max-width:375px){.body_text_xsmall{font-size:.875rem}}sn-transaction-list{top:70px;padding:0;width:auto;margin-left:15px;margin-right:15px;margin-bottom:37px}.card-detail{margin-top:-25px}.card-detail sn-card-detail-header{padding-left:16px;padding-right:16px;margin-top:15px}.card-detail .description-title{position:relative;margin-top:8px;text-align:left}.card-detail .description-title span{font-family:SantanderText;font-weight:700;display:block;padding:16px 17px 12px;color:var(--santan_red)}.card-detail sn-loader{margin-top:50%}:host sn-slider ::ng-deep .sn-slider{height:144px;background-color:var(--color-primary-white,#fff)}:host sn-slider ::ng-deep .sn-slider .d-flex.sn-slider-tabs{display:none;margin-top:unset;margin-bottom:unset}"]
            }] }
];
/** @nocollapse */
CardDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["BridgeAnalyticService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["CardsCommonService"] },
    { type: CardsService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-transaction-details/card-transaction-details.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardTransactionDetailsComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} translate
     * @param {?} analytic
     * @param {?} cardsApiService
     */
    constructor(router, route, translate, analytic, cardsApiService) {
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.analytic = analytic;
        this.cardsApiService = cardsApiService;
        this.isLoading = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sendAnalytics();
        this.shouldIDsBeSetByRouter();
        this.getTransactions();
    }
    /**
     * @return {?}
     */
    sendAnalytics() {
        /** @type {?} */
        const view = {
            title: ANALYTIC_CARD_TRANSACTION_DETAIL,
            data: {
                event: 'init'
            }
        };
        this.analytic.sendView(view);
    }
    /**
     * @return {?}
     */
    shouldIDsBeSetByRouter() {
        if (!this.cardId && !this.transactionId) {
            if (this.route.snapshot.paramMap.has('cardId') && this.route.snapshot.paramMap.has('transactionId')) {
                /** @type {?} */
                const cardId = +this.route.snapshot.paramMap.get('cardId');
                /** @type {?} */
                const transactionId = +this.route.snapshot.paramMap.get('transactionId');
                this.cardId = String(cardId < 0 ? 0 : cardId);
                this.transactionId = String(transactionId < 0 ? 0 : transactionId);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * @return {?}
     */
    getTransactions() {
        this.cardsApiService.getTransactionDetailsById(this.cardId, this.transactionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed))
            .subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.cardTransaction = res;
        }));
    }
    /**
     * @return {?}
     */
    goBack() {
        history.back();
    }
}
CardTransactionDetailsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                selector: 'sn-card-transaction-details',
                template: "<div class=\"card-transaction-details\" *ngIf=\"!isLoading else loading\">\n  <section>\n    <div class=\"nav-bar\">\n      <sn-icon icon=\"sn-SYS020\" color=\"primary\" (click)=\"goBack()\" id=\"back\"></sn-icon>\n    </div>\n    <header>\n      <div class=\"transaction-date\">\n        {{ cardTransaction?.processedDate  | date: 'd MMMM' }}\n      </div>\n      <div class=\"account-summary\">\n        <div>\n          <sn-currency class=\"account-funds\"\n                       [value]=\"cardTransaction?.amount?.amount\"\n                       [code]=\"cardTransaction?.amount?.currencyCode\"></sn-currency>\n          <span class=\"item-receipt\">{{ cardTransaction?.description }}</span>\n        </div>\n      </div>\n    </header>\n  </section>\n  <section>\n    <div class=\"details\">\n      <div>\n          <span class=\"label\">\n            {{ 'cardDetail.transactionDetail.transactionDescription' | translate }}\n          </span>\n        <span class=\"value\">\n          {{ cardTransaction?.description }}\n          </span>\n      </div>\n\n      <div>\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.transactionType' | translate }}\n          </span>\n        <span class=\"value\">\n          {{ cardTransaction?.transactionType | titlecase }}\n          </span>\n      </div>\n      <div>\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.amount' | translate  }}\n          </span>\n        <sn-currency flat class=\"amount-value\"\n                     [value]=\"cardTransaction?.amount?.amount\"\n                     [code]=\"cardTransaction?.amount?.currencyCode\">\n        </sn-currency>\n      </div>\n      <div>\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.creationDate' | translate }}\n          </span>\n        <span class=\"value\">\n          {{ cardTransaction?.creationDate | date: 'shortDate' }}\n          </span>\n      </div>\n\n      <div *ngIf=\"cardTransaction && cardTransaction.fee\">\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.fee' | translate }}\n          </span>\n        <sn-currency flat class=\"amount-value\"\n                     [value]=\"cardTransaction?.fee.amount\"\n                     [code]=\"cardTransaction?.fee.currencyCode\">\n        </sn-currency>\n      </div>\n      <div *ngIf=\"cardTransaction && cardTransaction.atmAddress\">\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.atmAddress' | translate }}\n          </span>\n        <span class=\"value\">\n            <!-- TODO: tbd what is the atm address from the api -->\n          {{ cardTransaction?.atmAddress }}\n          </span>\n      </div>\n      <div *ngIf=\"cardTransaction && cardTransaction.store\">\n          <span class=\"label\">\n          {{ 'cardDetail.transactionDetail.storeName' | translate }}\n          </span>\n        <span class=\"value\">\n            <!-- TODO: tbd what is the store name from the api -->\n          {{ cardTransaction.store.name }}\n          </span>\n      </div>\n      <div *ngIf=\"cardTransaction && cardTransaction.store\">\n          <span class=\"label\">\n            <!-- TODO: tbd what is the store address from the api -->\n            {{ 'cardDetail.transactionDetail.storeAddress' | translate }}\n          </span>\n        <span class=\"value\">\n          {{ cardTransaction?.store.address }}\n          </span>\n      </div>\n    </div>\n  </section>\n</div>\n\n<ng-template #loading>\n  <sn-loader></sn-loader>\n</ng-template>\n",
                styles: ["@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.transaction-date{text-align:center}.account-funds,.account-funds .integer{display:block;font-size:32px;font-weight:bolder}.account-funds .decimal{font-weight:bolder;font-size:24px}.card-transaction-details{padding:0 16px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;font-family:SantanderText;color:var(--color-secondary-gray,#444)}.card-transaction-details .nav-bar{display:-webkit-box;display:flex;width:100%;height:48px;-webkit-box-align:center;align-items:center}.card-transaction-details .nav-bar sn-icon{display:-webkit-box;display:flex}.card-transaction-details .account-summary{display:-webkit-box;display:flex;text-align:center;text-transform:capitalize;margin-bottom:55px}.card-transaction-details .account-summary .item-receipt{font-weight:700}.card-transaction-details .account-summary .account-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row;color:var(--color-secondary-mediumgray,#767676)}.card-transaction-details .account-summary .account-group .account-digits,.card-transaction-details .account-summary .account-group .account-name,.card-transaction-details .account-summary div{-webkit-box-flex:1;flex:1}.card-transaction-details .account-summary div:nth-child(2){text-align:right}.card-transaction-details .details{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;font-weight:300;text-transform:capitalize}.card-transaction-details .details div{margin-bottom:15px}.card-transaction-details .details .amount-value,.card-transaction-details .details .label,.card-transaction-details .details .value{display:inline-block}.card-transaction-details .details .amount-value{font-size:1.1rem;font-weight:400;vertical-align:text-bottom}.card-transaction-details .details .label{-webkit-box-flex:1;flex:1;margin-right:25px;font-weight:lighter;color:var(--color-secondary-mediumgray,#767676)}.card-transaction-details .details .value{-webkit-box-flex:1;flex:1;max-width:167px;vertical-align:text-top}"]
            }] }
];
/** @nocollapse */
CardTransactionDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["BridgeAnalyticService"] },
    { type: CardsService }
];
CardTransactionDetailsComponent.propDecorators = {
    cardId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
    transactionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/card-detail-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    header: {
        left: { icon: 'sn-SYS020', route: 'back' },
        title: { label: 'Card' },
    },
    footer: { display: true }
}, ɵ1 = {
    header: {
        left: { icon: 'sn-SYS020', route: 'back' },
        title: { label: 'Card' },
    },
    footer: { display: true }
}, ɵ2 = {
    header: { display: false },
    footer: {
        display: true
    }
};
/** @type {?} */
const routes = [
    {
        path: '', component: CardDetailComponent,
        data: ɵ0
    },
    {
        path: ':id', component: CardDetailComponent,
        data: ɵ1
    },
    // {
    //   path: ':id/detail',
    //   component: CardDetailComponent,
    //   data: {
    //     header: {
    //       left: { icon: 'sn-SYS020', route: 'back'},
    //       title: {label: 'Card'},
    //     },
    //     footer: { display: true }
    //   }
    // },
    {
        path: ':cardId/transaction-details/:transactionId',
        component: CardTransactionDetailsComponent,
        data: ɵ2
    },
    { path: '**', redirectTo: '/' }
];
class CardDetailRoutingModule {
}
CardDetailRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/card-detail-header/card-detail-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardDetailHeaderComponent {
    /**
     * @param {?} router
     * @param {?} route
     */
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.onCard = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    onClickDetails() {
        this.router.navigate([this.card.cardId, 'detail'], { relativeTo: this.route });
    }
    /**
     * \@description This function will return a percentage of (card spent * 100 ) / card li  to fill the progress Bar
     * @return {?} number
     */
    spentPercentage() {
        /** @type {?} */
        const consumedAmount = Math.abs(this.card.creditData.consumedBalance.amount);
        /** @type {?} */
        const availableAmount = (Math.abs(this.card.creditData.consumedBalance.amount) + Math.abs(this.card.creditData.availableBalance.amount));
        return Number(this.getRate(consumedAmount, availableAmount));
    }
    /**
     *
     * \@description This function calculate the Rate in % of two values
     * @param {?=} numerator
     * @param {?=} denominator
     * @param {?=} precision
     * @return {?}
     */
    getRate(numerator = null, denominator = null, precision = 2) {
        return (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(numerator) || Object(util__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(denominator)) ?
            (Math.abs(numerator || 0) * 100 / Math.abs(denominator || 1)).toFixed(precision) :
            (0).toFixed(precision);
    }
}
CardDetailHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                selector: 'sn-card-detail-header',
                template: "<div class=\"card-container\">\n  <div class=\"row-wrapper\">\n    <sn-currency class=\"balance\"\n                 [value]=\"card.creditData.consumedBalance.amount\"\n                 [code]=\"card.creditData.consumedBalance.currencyCode\">\n    </sn-currency>\n    <sn-icon icon=\"sn-SYS004\" (click)=\"onClickDetails()\" role=\"button\"></sn-icon>\n  </div>\n  <span class=\"avaible-label\">{{ 'cardDetail.cardDetailHeader.availableBalance' | translate }}</span>\n  <div class=\"progress-bar-wrapper\">\n    <sn-progress-bar *ngIf=\"card.type == 'CREDIT CARD'\" [value]=\"spentPercentage()\" height=\"0.25em\" secondary></sn-progress-bar>\n  </div>\n  <div class=\"image-wrapper\">\n    <img class=\"cardImage\" src=\"assets/images/049430.png\">\n  </div>\n  <div class=\"account-title\">\n    <div class=\"title\">{{ card.alias | uppercase }}</div>\n  </div>\n  <div class=\"subtitle\">\n    <div class=\"cardType\">{{ card.type | lowercase }}</div>\n    <div class=\"iban\">{{ '&nbsp;|&nbsp;' + card.displayNumber }}</div>\n  </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Light.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Light.ttf) format(\"truetype\");font-weight:lighter}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-LightIt.ttf) format(\"truetype\");font-weight:lighter;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Regular.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Regular.ttf) format(\"truetype\");font-weight:400}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Italic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-Bold.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-Bold.ttf) format(\"truetype\");font-weight:700}@font-face{font-family:SantanderText;src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix);src:url(/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix) format(\"eot\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2) format(\"woff2\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.woff) format(\"woff\"),url(/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf) format(\"truetype\");font-style:italic;font-weight:700}.display_level_1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (max-width:375px){.display_level_1{font-size:2.625rem}}.display_level_2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (max-width:375px){.display_level_2{font-size:2.25rem}}.display_level_3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_3{font-size:3rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_3{font-size:3rem}}@media only screen and (max-width:375px){.display_level_3{font-size:2rem}}.heading_level_1,h1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (max-width:375px){.heading_level_1,h1{font-size:2rem}}.heading_level_2,h2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_2,h2{font-size:2.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_2,h2{font-size:2.25rem}.heading_level_3,h3{font-size:2rem}}.heading_level_3,h3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_3,h3{font-size:2rem}}@media only screen and (max-width:375px){.heading_level_2,h2{font-size:2rem}.heading_level_3,h3{font-size:1.75rem}}.heading_level_4,h4{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_4,h4{font-size:1.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_4,h4{font-size:1.75rem}.heading_level_5,h5{font-size:1.5rem}}.heading_level_5,h5{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_5,h5{font-size:1.5rem}}@media only screen and (max-width:375px){.heading_level_4,h4{font-size:1.5rem}.heading_level_5,h5{font-size:1.25rem}}.heading_level_6,h6{line-height:1.4;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_6,h6{font-size:1.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_6,h6{font-size:1.25rem}.body_text_large{font-size:1.125rem}}.body_text_large{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_large{font-size:1.125rem}}@media only screen and (max-width:375px){.heading_level_6,h6{font-size:1.125rem}.body_text_large{font-size:1rem}}.body_text_medium{font-size:1rem;line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_medium{font-size:1rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_medium{font-size:1rem}.body_text_small{font-size:.875rem}}.body_text_small{line-height:1.5;letter-spacing:0}@media only screen and (max-width:375px){.body_text_medium,.body_text_small{font-size:.875rem}}.body_text_xsmall{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_small{font-size:.875rem}.body_text_xsmall{font-size:.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_xsmall{font-size:.75rem}}@media only screen and (max-width:375px){.body_text_xsmall{font-size:.875rem}}.card-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.card-container .row-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.card-container .row-wrapper sn-currency{-webkit-box-pack:center;justify-content:center;width:155px;height:38px;font-family:SantanderHeadline;font-size:32px;font-stretch:normal;font-style:normal;line-height:.9;letter-spacing:normal;text-align:center;font-weight:700}.card-container .row-wrapper sn-icon{-webkit-box-pack:right;justify-content:right;width:20px;height:20px;top:27px;position:fixed;right:15px}.card-container .avaible-label{-webkit-box-pack:center;justify-content:center;height:20px;font-family:SantanderText;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;text-align:center;color:#767676}.card-container .image-wrapper{height:57px;overflow:hidden}.card-container .image-wrapper .cardImage{width:236px}.card-container .title{padding-top:12px;font-family:SantanderText;line-height:18px;font-size:14px;font-weight:700;color:var(--dark_grey)}.card-container .subtitle{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:24px;font-family:SantanderText;font-size:16px;font-weight:lighter;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;-webkit-box-align:center;align-items:center;color:var(--color-secondary-gray,#444)}.card-container .subtitle .cardType{text-transform:capitalize}.card-container sn-currency{display:block;font-size:2.2em;height:48px;color:var(--dark_grey);font-family:SantanderText;font-weight:700}.card-container .progress-bar-wrapper{display:block;height:24px}.card-container sn-progress-bar{width:220px;height:4px;margin-bottom:12px;margin-top:8px;border-radius:25%}"]
            }] }
];
/** @nocollapse */
CardDetailHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
CardDetailHeaderComponent.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
    onCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/transaction-card/transaction-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TransactionCardComponent extends sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["TransactionListItemBase"] {
    /**
     * @param {?} injector
     * @param {?} router
     * @param {?} route
     */
    constructor(injector, router, route) {
        super(injector);
        this.router = router;
        this.route = route;
    }
    /**
     * @return {?}
     */
    clickTransaction() {
        super.clickTransaction();
        if (this.cardId && this.data.id) {
            this.router.navigate([this.cardId, 'transaction-details', this.data.id], { relativeTo: this.route });
        }
    }
}
TransactionCardComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                selector: 'sn-transaction-account',
                template: "<div (click)=\"clickTransaction()\" class=\"transactionItem\"  *ngIf=\"item\">\n  <div class=\"details\">\n    <span>{{item.label}}</span>\n\n  </div>\n\n  <div class=\"amount\">\n    <div>\n      <sn-currency [code]=\"item.currency\"\n                   [ngClass]=\"item.amount > -1 ? 'positive' : 'negative'\"\n                   [value]=\"item.amount\" class='currency-number'>\n      </sn-currency>\n\n    </div>\n    <div *ngIf=\"item.balance\" class=\"balance\">\n      <sn-currency [value]=\"item.balance\"></sn-currency>\n    </div>\n  </div>\n</div>\n",
                styles: [".transactionItem{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;min-height:64px;position:relative;-webkit-box-align:center;align-items:center}.transactionItem .details{font-family:SantanderText;font-size:16px;line-height:24px;max-height:48px;overflow-y:hidden;width:60%;display:block}.transactionItem .details span{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-word;min-height:48px}.transactionItem .currency-number{line-height:.8em;font-size:.74em;font-weight:700}.transactionItem>span{font-size:.94em}.transactionItem .amount{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-moz-text-align-last:end;text-align-last:end}.transactionItem .amount sn-currency{font-size:18px;font-style:normal}.transactionItem .amount sn-currency.positive{color:var(--color-secondary-darkturquoise,#137e84)}.transactionItem .amount sn-currency.negative{color:#000}.transactionItem .balance sn-currency{font-size:14px;text-align:right;color:var(--color-secondary-gray,#444)}"]
            }] }
];
/** @nocollapse */
TransactionCardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
TransactionCardComponent.propDecorators = {
    cardId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/no-transactions/no-transactions.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NoTransactionsComponent {
    constructor() { }
}
NoTransactionsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                selector: 'sn-no-transactions',
                template: "<div class=\"no-transactions\">\n    <div class=\"empty-states-wrapper\">\n        <sn-icon large icon=\"sn-SYS032\"></sn-icon>\n        <span class=\"empty-states\">{{ 'cardDetail.noTransactions' | translate }}</span>\n        <span class=\"text-empty-states\">{{ 'cardDetail.message_no_transaction' | translate }}</span>\n    </div>\n  </div>\n",
                styles: ["sn-no-transactions{display:block;width:100%}.no-transactions .empty-states-wrapper [large] i{font-size:3rem!important}.no-transactions{display:-webkit-box;display:flex;height:69vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}.no-transactions .empty-states-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;box-sizing:border-box;flex-basis:10%;margin:auto}.no-transactions .empty-states-wrapper sn-icon{height:48px;width:48px;margin:auto;color:var(--color-secondary-lihtgray,#ccc)}.no-transactions .empty-states-wrapper sn-icon [large] i.sn-SYS032{font-size:3rem}.no-transactions .empty-states{height:28px;font-family:SantanderHeadline;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.4;letter-spacing:normal;color:var(--color-secondary-gray,#444)}.no-transactions .text-empty-states{padding:0 32px;height:44px;font-family:SantanderText;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;color:var(--color-secondary-mediumgray,#767676)}"]
            }] }
];
/** @nocollapse */
NoTransactionsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/card-detail.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} http
 * @param {?} path
 * @return {?}
 */
function HttpLoaderFactory(http, path) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](http, path.api.CardsDetails['languages'], '.json');
}
class CardDetailModule {
}
CardDetailModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                declarations: [
                    CardDetailComponent,
                    CardDetailHeaderComponent,
                    CardTransactionDetailsComponent,
                    TransactionCardComponent,
                    NoTransactionsComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    CardDetailRoutingModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["TransactionListModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["SliderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["AccountFixedHeaderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollerModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["CurrencyModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_8__["ProgressBarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _globile_mobile_services__WEBPACK_IMPORTED_MODULE_6__["ENV_CONFIG"]]
                        }
                    })
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
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
 * Generated from: globile-card-detail.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=globile-card-detail.js.map

/***/ })

}]);
//# sourceMappingURL=1.js.map