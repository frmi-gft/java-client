(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@globile/card-management/fesm2015/globile-card-management.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@globile/card-management/fesm2015/globile-card-management.js ***!
  \***********************************************************************************/
/*! exports provided: CardManagementModule, ɵc, ɵe, ɵd, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardManagementModule", function() { return CardManagementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CardManagementRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CardSecurityResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CardsManagementResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CardSecurityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CardManagementComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE = 'card-management';
class CardManagementComponent {
    /**
     * @param {?} route
     * @param {?} api
     * @param {?} analytic
     * @param {?} common
     */
    constructor(route, api, analytic, common) {
        this.route = route;
        this.api = api;
        this.analytic = analytic;
        this.common = common;
        this.cards = this.route.snapshot.data.cards.cards || [];
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
        this.startIndex = this.findStartIndex();
    }
    /**
     * @private
     * @return {?}
     */
    findStartIndex() {
        if (this.route.snapshot.paramMap.has('id') && this.cards.length) {
            /** @type {?} */
            const cardId = this.route.snapshot.paramMap.get('id');
            /** @type {?} */
            const result = this.cards ? this.cards.findIndex((/**
             * @param {?} card
             * @return {?}
             */
            (card) => card.cardId === cardId)) : 0;
            return (result < 0) ? 0 : result;
        }
        return 0;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    cardSelected(card) {
        this.activeCard = card;
        this.common.setSelectedCardId(card.cardId);
    }
    /**
     * @return {?}
     */
    cardLock() {
        /** @type {?} */
        const event = {
            title: ANALYTIC_TITLE,
            data: {
                event: 'freeze card',
                card: this.activeCard.cardId,
                newStatus: '' + !this.activeCard.locked
            }
        };
        this.analytic.sendEvent(event);
        this.isLoading = true;
        this.$cardUpdateLock = this.api.setLockStatus(this.activeCard.cardId, !this.activeCard.locked)
            .subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            this.activeCard.locked = resp && resp.isLocked;
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
    get freezeOptionSubtitle() {
        return this.activeCard.locked ? 'Tap again to unfreeze' : 'Tap to freeze';
    }
    /**
     * @return {?}
     */
    get freezeOptionTitle() {
        return this.activeCard.locked ? 'Unfreeze card' : 'Freeze card';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.$cardUpdateLock && !this.$cardUpdateLock.closed) {
            this.$cardUpdateLock.unsubscribe();
        }
    }
}
CardManagementComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'sn-card-management',
                template: "<div class=\"container-fluid p-0\">\n  <sn-slider [value]=\"cards\" (onChange)=\"cardSelected($event)\" [startIndex]=\"startIndex\">\n    <ng-container *ngFor=\"let card of cards\">\n      <ng-template #slide>\n        <sn-card [type]=\"card.type\" [blocked]=\"card.locked\" [available]=\"card.creditData.availableBalance.amount\"\n          [currency]=\"card.creditData.availableBalance.currencyCode\" [account]=\"card.displayNumber\"></sn-card>\n      </ng-template>\n    </ng-container>\n  </sn-slider>\n\n  <sn-option-list *ngIf=\"activeCard\">\n\n    <sn-option-item *ngIf=\"!activeCard.locked\">\n\n      <sn-icon sn-color=\"--santan_red\" icon=\"sn-FUNC041\"></sn-icon>\n\n      <div class=\"Type-5_Regular-Style \">View PIN</div>\n      <div class=\"Type-5_Light-Style\">Check you PIN</div>\n\n    </sn-option-item>\n\n    <sn-option-item (click)=\"cardLock()\">\n      <sn-icon sn-color=\"--santan_red\" icon=\"sn-FUNC011\"></sn-icon>\n      <div class=\"Type-5_Regular-Style\" [textContent]=\"freezeOptionTitle\"></div>\n      <div class=\"Type-5_Light-Style\" [textContent]=\"freezeOptionSubtitle\"></div>\n    </sn-option-item>\n\n    <sn-option-item *ngIf=\"!activeCard.locked\">\n      <sn-icon sn-color=\"--santan_red\" icon=\"sn-SERV036\"></sn-icon>\n      <div class=\"Type-5_Regular-Style \">Block PIN</div>\n      <div class=\"Type-5_Light-Style\">Use after exceeding 3 tries</div>\n    </sn-option-item>\n\n    <sn-option-item *ngIf=\"!activeCard.locked\" [routerLink]=\"['security']\">\n\n      <sn-icon sn-color=\"--santan_red\" icon=\"sn-SERV079\"></sn-icon>\n\n      <div class=\"Type-5_Regular-Style \">Security</div>\n      <div class=\"Type-5_Light-Style\">Enable additional protection</div>\n\n    </sn-option-item>\n\n    <sn-option-item *ngIf=\"!activeCard.locked\">\n\n      <sn-icon sn-color=\"--santan_red\" icon=\"sn-CHAN001\"></sn-icon>\n\n      <div class=\"Type-5_Regular-Style \">Limit</div>\n      <div class=\"Type-5_Light-Style\">Set monthly spending amount</div>\n\n    </sn-option-item>\n\n    <sn-option-item *ngIf=\"activeCard.locked\">\n\n      <sn-icon sn-color=\"--santan_turqoise\" icon=\"sn-BAN027\"></sn-icon>\n\n      <div class=\"Type-5_Regular-Style \">Report lost or stolen</div>\n      <div class=\"Type-5_Light-Style\">This card will be deactivated</div>\n\n    </sn-option-item>\n\n  </sn-option-list>\n  <sn-loader *ngIf=\"isLoading\"></sn-loader>\n</div>",
                styles: ["sn-card{margin:auto;transform:scale(.86);-webkit-transform:scale(.86);-moz-transform:scale(.86);-ms-transform:scale(.86);-o-transform:scale(.86)}.Type-5_Regular-Style{font-size:16px}"]
            }] }
];
/** @nocollapse */
CardManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["CardsApiService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["BridgeAnalyticService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["CardsCommonService"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardsManagementResolver {
    /**
     * @param {?} cardsServie
     */
    constructor(cardsServie) {
        this.cardsServie = cardsServie;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cardsServie.loadCards();
    }
}
CardsManagementResolver.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
];
/** @nocollapse */
CardsManagementResolver.ctorParameters = () => [
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["CardsApiService"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANALYTIC_TITLE$1 = 'card-management-security';
class CardSecurityComponent {
    /**
     * @param {?} route
     * @param {?} cardsService
     * @param {?} analytic
     */
    constructor(route, cardsService, analytic) {
        this.route = route;
        this.cardsService = cardsService;
        this.analytic = analytic;
        this.cardDetails = this.route.snapshot.data.hasOwnProperty('details') && this.route.snapshot.data.details;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const view = {
            title: ANALYTIC_TITLE$1, data: { event: 'init' }
        };
        this.analytic.sendView(view);
    }
    /**
     * @param {?=} allowInternational
     * @param {?=} allowInternet
     * @param {?=} contactlessEnabled
     * @param {?=} dailyLimit
     * @param {?=} weeklyLimit
     * @return {?}
     */
    securityChange(allowInternational, allowInternet, contactlessEnabled, dailyLimit, weeklyLimit) {
        this.isLoading = true;
        /** @type {?} */
        const cardid = this.cardDetails.basicData && this.cardDetails.basicData.cardId;
        /** @type {?} */
        const event = {
            title: ANALYTIC_TITLE$1,
            data: {
                event: 'freeze card',
                card: cardid,
                newStatus: JSON.stringify({
                    'allowInternational': allowInternational,
                    'allowInternet': allowInternet,
                    'contactlessEnabled': contactlessEnabled,
                    'dailyLimit': dailyLimit,
                    'weeklyLimit': weeklyLimit
                })
            }
        };
        this.analytic.sendEvent(event);
        this.cardsService.setConfiguration(cardid, {
            allowInternet,
            allowInternational,
            contactlessEnabled,
            dailyLimit,
            weeklyLimit
        }).subscribe((/**
         * @return {?}
         */
        () => { }), (/**
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
CardSecurityComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                selector: 'sn-security',
                template: "<sn-option-list>\n  <sn-option-item>\n\n    <sn-icon sn-color=\"--santan_red\" icon=\"sn-BAN083\"></sn-icon>\n\n    <div class=\"Type-5_Regular-Style \">Location-based security</div>\n    <div class=\"Type-5_Light-Style\">Using your location we could prevent fraudulent transactions.</div>\n\n    <sn-slide-toggle></sn-slide-toggle>\n\n  </sn-option-item>\n\n  <sn-option-item>\n\n    <sn-icon sn-color=\"--santan_red\" icon=\"sn-BAN018\"></sn-icon>\n\n    <div class=\"Type-5_Regular-Style\">ATM withdrawals</div>\n    <div class=\"Type-5_Light-Style\">If you did not plan to pay withdraw cash. Switch ATM withdrawals off</div>\n\n    <sn-slide-toggle></sn-slide-toggle>\n\n  </sn-option-item>\n\n  <sn-option-item>\n\n\n    <sn-icon sn-color=\"--santan_red\" icon=\"sn-CHAN056\"></sn-icon>\n\n    <div class=\"Type-5_Regular-Style \">Online transactions</div>\n    <div class=\"Type-5_Light-Style\">Switch off Internet-based transactions for extra security</div>\n\n    <sn-slide-toggle [ngModel]=\"cardDetails?.configuration?.allowInternet\" (change)=\"securityChange(undefined,$event)\">\n    </sn-slide-toggle>\n\n  </sn-option-item>\n\n  <sn-option-item>\n\n    <sn-icon sn-color=\"--santan_red\" icon=\"sn-BAN100\"></sn-icon>\n\n    <div class=\"Type-5_Regular-Style \">Contactless payments</div>\n    <div class=\"Type-5_Light-Style\">Switch contactless for extra security</div>\n\n    <sn-slide-toggle [ngModel]=\"cardDetails?.configuration?.contactlessEnabled\"\n      (change)=\"securityChange(undefined ,undefined, $event)\"></sn-slide-toggle>\n\n  </sn-option-item>\n\n</sn-option-list>\n\n<sn-loader *ngIf=\"isLoading\"></sn-loader>",
                styles: [""]
            }] }
];
/** @nocollapse */
CardSecurityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["CardsApiService"] },
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["BridgeAnalyticService"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardSecurityResolver {
    /**
     * @param {?} cardsService
     */
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    resolve(route) {
        /** @type {?} */
        const cardId = route.paramMap.has('id') && route.paramMap.get('id');
        return this.cardsService.getCardDetails(cardId);
    }
}
CardSecurityResolver.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] }
];
/** @nocollapse */
CardSecurityResolver.ctorParameters = () => [
    { type: _globile_mobile_services__WEBPACK_IMPORTED_MODULE_4__["CardsApiService"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: '',
        component: CardManagementComponent,
        resolve: {
            cards: CardsManagementResolver
        }
    },
    {
        path: ':id',
        component: CardManagementComponent,
        resolve: {
            cards: CardsManagementResolver
        }
    },
    {
        path: ':id/security',
        component: CardSecurityComponent,
        resolve: {
            details: CardSecurityResolver
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class CardManagementRoutingModule {
}
CardManagementRoutingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                providers: [
                    CardsManagementResolver,
                    CardSecurityResolver
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardManagementModule {
}
CardManagementModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                declarations: [
                    CardManagementComponent,
                    CardSecurityComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["SliderModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["OptionListModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
                    CardManagementRoutingModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["SlideToggleModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_5__["LoaderModule"]
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=globile-card-management.js.map

/***/ })

}]);
//# sourceMappingURL=2.js.map