(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@agm/js-marker-clusterer/fesm2015/agm-js-marker-clusterer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/fesm2015/agm-js-marker-clusterer.js ***!
  \***********************************************************************************/
/*! exports provided: AgmJsMarkerClustererModule, AgmMarkerCluster, ClusterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmJsMarkerClustererModule", function() { return AgmJsMarkerClustererModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarkerCluster", function() { return AgmMarkerCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterManager", function() { return ClusterManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-marker-clusterer */ "./node_modules/js-marker-clusterer/src/markerclusterer.js");
/* harmony import */ var js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_marker_clusterer__WEBPACK_IMPORTED_MODULE_4__);






let ClusterManager = class ClusterManager extends _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"] {
    constructor(_mapsWrapper, _zone) {
        super(_mapsWrapper, _zone);
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._clustererInstance = new Promise((resolver) => {
            this._resolver = resolver;
        });
    }
    init(options) {
        this._mapsWrapper.getNativeMap().then(map => {
            const clusterer = new MarkerClusterer(map, [], options);
            this._resolver(clusterer);
        });
    }
    getClustererInstance() {
        return this._clustererInstance;
    }
    addMarker(marker) {
        const clusterPromise = this.getClustererInstance();
        const markerPromise = this._mapsWrapper
            .createMarker({
            position: {
                lat: marker.latitude,
                lng: marker.longitude,
            },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
        }, false);
        Promise
            .all([clusterPromise, markerPromise])
            .then(([cluster, marker]) => {
            return cluster.addMarker(marker);
        });
        this._markers.set(marker, markerPromise);
    }
    deleteMarker(marker) {
        const m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then((m) => {
            this._zone.run(() => {
                m.setMap(null);
                this.getClustererInstance().then(cluster => {
                    cluster.removeMarker(m);
                    this._markers.delete(marker);
                });
            });
        });
    }
    clearMarkers() {
        return this.getClustererInstance().then(cluster => {
            cluster.clearMarkers();
        });
    }
    setGridSize(c) {
        this.getClustererInstance().then(cluster => {
            cluster.setGridSize(c.gridSize);
        });
    }
    setMaxZoom(c) {
        this.getClustererInstance().then(cluster => {
            cluster.setMaxZoom(c.maxZoom);
        });
    }
    setStyles(c) {
        this.getClustererInstance().then(cluster => {
            cluster.setStyles(c.styles);
        });
    }
    setZoomOnClick(c) {
        this.getClustererInstance().then(cluster => {
            if (c.zoomOnClick !== undefined) {
                cluster.zoomOnClick_ = c.zoomOnClick;
            }
        });
    }
    setAverageCenter(c) {
        this.getClustererInstance().then(cluster => {
            if (c.averageCenter !== undefined) {
                cluster.averageCenter_ = c.averageCenter;
            }
        });
    }
    setImagePath(c) {
        this.getClustererInstance().then(cluster => {
            if (c.imagePath !== undefined) {
                cluster.imagePath_ = c.imagePath;
            }
        });
    }
    setMinimumClusterSize(c) {
        this.getClustererInstance().then(cluster => {
            if (c.minimumClusterSize !== undefined) {
                cluster.minimumClusterSize_ = c.minimumClusterSize;
            }
        });
    }
    setImageExtension(c) {
        this.getClustererInstance().then(cluster => {
            if (c.imageExtension !== undefined) {
                cluster.imageExtension_ = c.imageExtension;
            }
        });
    }
    createClusterEventObservable(eventName) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this._zone.runOutsideAngular(() => {
                this._clustererInstance.then((m) => {
                    m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
                });
            });
        });
    }
    setCalculator(c) {
        this.getClustererInstance().then(cluster => {
            if (typeof c.calculator === 'function') {
                cluster.setCalculator(c.calculator);
            }
        });
    }
};
ClusterManager.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ClusterManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], ClusterManager);

/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmMarkerCluster = class AgmMarkerCluster {
    constructor(_clusterManager) {
        this._clusterManager = _clusterManager;
        this.clusterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._observableSubscriptions = [];
    }
    /** @internal */
    ngOnDestroy() {
        this._clusterManager.clearMarkers();
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
        if (changes['calculator']) {
            this._clusterManager.setCalculator(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
    }
    _addEventListeners() {
        const handlers = [
            {
                name: 'clusterclick',
                handler: () => this.clusterClick.emit(),
            },
        ];
        handlers.forEach((obj) => {
            const os = this._clusterManager.createClusterEventObservable(obj.name).subscribe(obj.handler);
            this._observableSubscriptions.push(os);
        });
    }
    /** @internal */
    ngOnInit() {
        this._addEventListeners();
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
            calculator: this.calculator,
        });
    }
};
AgmMarkerCluster.ctorParameters = () => [
    { type: ClusterManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMarkerCluster.prototype, "gridSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMarkerCluster.prototype, "maxZoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmMarkerCluster.prototype, "averageCenter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], AgmMarkerCluster.prototype, "styles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], AgmMarkerCluster.prototype, "calculator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMarkerCluster.prototype, "imagePath", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMarkerCluster.prototype, "imageExtension", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarkerCluster.prototype, "clusterClick", void 0);
AgmMarkerCluster = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-marker-cluster',
        providers: [
            ClusterManager,
            { provide: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"], useExisting: ClusterManager },
            _agm_core__WEBPACK_IMPORTED_MODULE_2__["InfoWindowManager"],
        ],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ClusterManager])
], AgmMarkerCluster);

let AgmJsMarkerClustererModule = class AgmJsMarkerClustererModule {
};
AgmJsMarkerClustererModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]],
        declarations: [AgmMarkerCluster],
        exports: [AgmMarkerCluster],
    })
], AgmJsMarkerClustererModule);

// main modules

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=agm-js-marker-clusterer.js.map


/***/ }),

/***/ "./node_modules/@globile/branch-locator/fesm2015/globile-branch-locator.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@globile/branch-locator/fesm2015/globile-branch-locator.js ***!
  \*********************************************************************************/
/*! exports provided: SnBranchLocatorService, SnBranchLocatorComponent, LocalLoaderFactory, SnBranchLocatorModule, ɵk, ɵp, ɵo, ɵc, ɵr, ɵe, ɵd, ɵf, ɵq, ɵn, ɵl, ɵm, ɵb, ɵj, ɵh, ɵa, ɵg, ɵi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnBranchLocatorService", function() { return SnBranchLocatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnBranchLocatorComponent", function() { return SnBranchLocatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalLoaderFactory", function() { return LocalLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnBranchLocatorModule", function() { return SnBranchLocatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return BranchListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return BranchSearchInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return BranchSearchInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return FilterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MenuAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SnBranchInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DrawerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SnTabGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return SnTabModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return SnTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SnMapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SnMarkerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GeoPositionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return Platform; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/fesm2015/agm-js-marker-clusterer.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @globile/mobile-services */ "./node_modules/@globile/mobile-services/fesm2015/globile-mobile-services.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sn_common_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sn-common-lib */ "./node_modules/sn-common-lib/fesm2015/sn-common-lib.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/filter/filter.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterService {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this._filterCount = 0;
        this._observer$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    /**
     * Initializes filter form and returns the form;
     * @return {?}
     */
    initForm() {
        if (!this.form) {
            this.form = this.fb.group({
                BRANCH: this.fb.group({
                    SELECT: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    BANCAPRIVADA: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    PYME: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    WORKCAFE: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    EMPRESAS: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    UNIVERSIDADES: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    CLIENTES_POPULAR: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    CLIENTES_PASTOR: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    CLIENTES_BANEFE: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    RESIDENTES: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    GRANDES_SUPERFICIES: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    AG_COLABORADORES: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    AG_FINANCIEROS: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]()
                }),
                ATM: this.fb.group({
                    NON_SANTANDER_ATM: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    ATM: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]()
                }),
                CORRESPONSALES: this.fb.group({
                    CORRESPONSALES: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    ELEVEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    CIRCLE_K: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    TIENDA_EXTRA: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    TIENDA_K: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    TELECOMM: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    SUPER7_24: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                    OXXO: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"](),
                }),
            });
        }
        return this.form;
    }
    /**
     * @return {?}
     */
    get count() {
        return this._filterCount;
    }
    /**
     * Listens to when values are applied and returns the filter values
     * @return {?}
     */
    get filterParamsChanges() {
        return this._observer$.asObservable();
    }
    /**
     * @return {?}
     */
    get filterParams() {
        return this._filterParams;
    }
    /**
     * @return {?}
     */
    startFilter() {
        this.resetPreviousValues();
    }
    /**
     * Resets Count of checked filters
     * @private
     * @param {?} values
     * @return {?}
     */
    resetActiveFilterCount(values) {
        /** @type {?} */
        let count = 0;
        Object.keys(values).forEach((/**
         * @param {?} groupKey
         * @return {?}
         */
        (groupKey) => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(values[groupKey])) {
                /** @type {?} */
                const group = values[groupKey];
                /** @type {?} */
                const counter = Object.keys(group).filter((/**
                 * @param {?} filterKey
                 * @return {?}
                 */
                (filterKey) => group[filterKey]));
                if (counter && Object(util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(counter.length)) {
                    count += counter.length;
                }
            }
        }));
        return count;
    }
    /**
     * Apply changes
     * @return {?}
     */
    applyChanges() {
        this._filterCount = this.resetActiveFilterCount(this.form.value);
        this._filterParams = this.generateParams(this.form.value);
        this._observer$.next(this._filterParams);
        this._previousValues = this.form.value;
    }
    /**
     * Reset the form to previous stored values
     * @private
     * @return {?}
     */
    resetPreviousValues() {
        if (this._previousValues) {
            this.form.patchValue(this._previousValues);
            this.form.updateValueAndValidity();
        }
        else {
            this.form.reset();
        }
    }
    /**
     * Set Filters Enabled or Disabled based on a list of Markers
     * @param {?} markers
     * @return {?}
     */
    enableFilters(markers) {
        // TODO: // set filter to disable or enable based on Results
    }
    /**
     * @private
     * @param {?} values
     * @return {?}
     */
    generateParams(values) {
        /** @type {?} */
        const filterSubType = new Array();
        /** @type {?} */
        const filterType = new Array();
        Object.keys(values).forEach((/**
         * @param {?} groupKey
         * @return {?}
         */
        (groupKey) => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(values[groupKey])) {
                /** @type {?} */
                const group = values[groupKey];
                Object.keys(group).forEach((/**
                 * @param {?} filterKey
                 * @return {?}
                 */
                (filterKey) => {
                    if (group[filterKey]) {
                        filterSubType.push(filterKey);
                        if (!filterType.includes(groupKey)) {
                            filterType.push(groupKey);
                        }
                    }
                }));
            }
        }));
        return { filterType: filterType.toString(), filterSubType: filterSubType.toString() };
    }
}
FilterService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FilterService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] }
];
/** @nocollapse */ FilterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["defineInjectable"])({ factory: function FilterService_Factory() { return new FilterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"])); }, token: FilterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/branch-locator/branch-locator.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnBranchLocatorService {
    /**
     * @param {?} envConfig
     * @param {?} http
     * @param {?} filterservice
     */
    constructor(envConfig, http, filterservice) {
        this.http = http;
        this.filterservice = filterservice;
        this._observer$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.branchLocator = envConfig.api.BranchLocator;
    }
    /**
     * @return {?}
     */
    get onChange() {
        return this._observer$.asObservable();
    }
    /**
     * \@description Returns a list of points of interest
     * \@Returns {Observable<Branch[]>}
     * \@memberOf SnBranchLocatorService
     * @param {?} coords
     * @return {?}
     */
    getBranchesByCoords(coords) {
        if (!coords) {
            this._observer$.next([]);
            return;
        }
        if (!this._initPosition) {
            this.setApiURL(coords);
        }
        /** @type {?} */
        const configVal = encodeURI(`config={"coords":[${coords.lat},${coords.lng}]}`);
        this.http.get(`${this.URL}/find/defaultView?${configVal}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.groupAtmToBranch(resp)))).subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => this._observer$.next(resp)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => this._observer$.error(err)));
    }
    /**
     * @param {?} northEast
     * @param {?} southWest
     * @param {?=} coords
     * @return {?}
     */
    getBranchesByBounds(northEast, southWest, coords) {
        if (!this._initPosition) {
            this.setApiURL(coords);
        }
        /** @type {?} */
        const params = (/** @type {?} */ (this.filterservice.filterParams));
        /** @type {?} */
        const configInit = encodeURI(`config={"coords":[${this._initPosition.lat},${this._initPosition.lng}]}`);
        /** @type {?} */
        const configVal = encodeURI(`northEast=${northEast.lat},${northEast.lng}&southWest=${southWest.lat},${southWest.lng}`);
        this.http.get(`${this.URL}/find/defaultView?${configInit}&${configVal}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this._changeDistance(resp))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.groupAtmToBranch(resp)))).subscribe((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => this._observer$.next(resp)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => this._observer$.error(err)));
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    groupAtmToBranch(array) {
        return array.reduce((/**
         * @param {?} poiArray
         * @param {?} currentValue
         * @return {?}
         */
        (poiArray, currentValue) => {
            /** @type {?} */
            const index = poiArray.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            el => el.distanceInKm.toFixed(2) === currentValue.distanceInKm.toFixed(2)));
            if (index >= 0) {
                if (poiArray[index].objectType.code.toUpperCase() === 'BRANCH') {
                    if (poiArray[index].atm) {
                        poiArray[index].atm.push(currentValue);
                    }
                    else {
                        poiArray[index].atm = [currentValue];
                    }
                    return poiArray;
                }
                else {
                    if (currentValue.objectType.code.toUpperCase() === 'BRANCH') {
                        if (poiArray[index].atm) {
                            currentValue.atm = poiArray[index].atm;
                            currentValue.atm.push(poiArray[index]);
                        }
                        else {
                            currentValue.atm = [poiArray[index]];
                        }
                        poiArray[index] = currentValue;
                    }
                    else {
                        // TODO: What should we do when there are 2 atm in the same place?
                        currentValue.atm = [poiArray[index]];
                        if (poiArray[index].atm) {
                            poiArray[index].atm.push(currentValue);
                        }
                        else {
                            poiArray[index].atm = [currentValue];
                        }
                    }
                    return poiArray;
                }
            }
            poiArray.push(currentValue);
            return poiArray;
        }), []);
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    _changeDistance(array) {
        return array.map((/**
         * @param {?} ele
         * @return {?}
         */
        ele => {
            if (!ele.distanceDone && this._initPosition) {
                /** @type {?} */
                const p = ele.location.geoCoords;
                ele.distanceInKm = parseFloat(this.getDistance({ lat: p.latitude, lng: p.longitude }).toFixed(2));
                ele.distanceInMiles = parseFloat((ele.distanceInKm / 1.609).toFixed(2));
                ele.distanceDone = true;
            }
            return ele;
        }));
    }
    /**
     * @private
     * @param {?} p2
     * @return {?}
     */
    getDistance(p2) {
        /** @type {?} */
        const p1 = this._initPosition;
        /** @type {?} */
        const rad = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => x * Math.PI / 180);
        /** @type {?} */
        const R = 6378.137;
        /** @type {?} */
        const dLat = rad(p2.lat - p1.lat);
        /** @type {?} */
        const dLong = rad(p2.lng - p1.lng);
        /** @type {?} */
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
            + Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        /** @type {?} */
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        /** @type {?} */
        const d = R * c;
        return d;
    }
    /**
     * @private
     * @param {?=} coords
     * @return {?}
     */
    setApiURL(coords) {
        this._initPosition = coords;
        /** @type {?} */
        const pos0 = this.getDistance(this.branchLocator.endpoints[0]);
        /** @type {?} */
        const pos1 = this.getDistance(this.branchLocator.endpoints[1]);
        this.URL = (pos0 < pos1) ? this.branchLocator.endpoints[0].URL : this.branchLocator.endpoints[1].URL;
    }
}
SnBranchLocatorService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SnBranchLocatorService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: [_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: FilterService }
];
/** @nocollapse */ SnBranchLocatorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["defineInjectable"])({ factory: function SnBranchLocatorService_Factory() { return new SnBranchLocatorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])(_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])(FilterService)); }, token: SnBranchLocatorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/sn-map/sn-map.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnMapDirective {
    /**
     * @param {?} component
     * @param {?} api
     */
    constructor(component, api) {
        this.component = component;
        this.api = api;
    }
}
SnMapDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Directive"], args: [{
                selector: '[snMap],agm-map'
            },] }
];
/** @nocollapse */
SnMapDirective.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsAPIWrapper"] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/window-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WindowRef extends Window {
    constructor() {
        super();
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/geo-position/geo-position.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeoPositionService {
    /**
     * @param {?} mapsAPILoader
     * @param {?} windowRef
     */
    constructor(mapsAPILoader, windowRef) {
        this.mapsAPILoader = mapsAPILoader;
        this.windowRef = windowRef;
        this._observer$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._position$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.mapLoaded = false;
    }
    /**
     * @return {?}
     */
    get geolocation() {
        return this.windowRef.navigator.geolocation;
    }
    /**
     * @return {?}
     */
    watchPosition() {
        this._readyMaps().subscribe((/**
         * @return {?}
         */
        () => {
            this.windowRef.navigator.geolocation.watchPosition((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                this._observer$.next(pos);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // console.error('Position is not available', error);
                this._observer$.error(error);
            }), {
                enableHighAccuracy: true
            });
        }));
        return this._observer$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    }
    /**
     * @return {?}
     */
    getCurrentPosition() {
        this._readyMaps().subscribe((/**
         * @return {?}
         */
        () => {
            this.windowRef.navigator.geolocation.getCurrentPosition((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                this._position$.next(pos);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // console.error('Position is not available', error);
                this._position$.error(error);
            }), {
                enableHighAccuracy: true
            });
        }));
        return this._position$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    }
    /**
     * @private
     * @return {?}
     */
    _readyMaps() {
        return this._readyMaps ? Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(true) : rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"].create((/**
         * @param {?} obs
         * @return {?}
         */
        obs => {
            this.mapsAPILoader.load()
                .then((/**
             * @return {?}
             */
            () => { this.mapLoaded = true; obs.next(); }));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    }
}
GeoPositionService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GeoPositionService.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"] },
    { type: WindowRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: ['WINDOW',] }] }
];
/** @nocollapse */ GeoPositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["defineInjectable"])({ factory: function GeoPositionService_Factory() { return new GeoPositionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])(_agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])("WINDOW")); }, token: GeoPositionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/filter/filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterComponent {
    /**
     * @param {?} snFilterService
     * @param {?} renderer
     * @param {?} el
     */
    constructor(snFilterService, renderer, el) {
        this.snFilterService = snFilterService;
        this.renderer = renderer;
        this.el = el;
        this.filterApply = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hide();
        this.form = this.snFilterService.initForm();
    }
    /**
     * @private
     * @return {?}
     */
    show() {
        this.renderer.removeStyle(this.el.nativeElement, 'display');
    }
    /**
     * @private
     * @return {?}
     */
    hide() {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
    /**
     * @return {?}
     */
    close() {
        this.hide();
    }
    /**
     * @return {?}
     */
    apply() {
        this.snFilterService.applyChanges();
        this.filterApply.emit({
            count: this.snFilterService.count,
            values: this.snFilterService.filterParams
        });
        this.hide();
    }
    /**
     * @return {?}
     */
    open() {
        this.show();
        this.snFilterService.startFilter();
    }
}
FilterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-filter',
                template: "<form class=\"sn-filter-wrapper\" [formGroup]=\"form\" (ngSubmit)=\"apply()\">\n    <div class=\"sn-filter-header\">\n      <h1 class=\"sub-title\">\n        <!-- TODO: Temporary until have back button from design -->\n        <sn-icon icon=\"sn-SYS020\" (click)=\"close()\"></sn-icon>\n        {{ 'branchlocator.filters.filters' | translate }}\n      </h1>\n      <!-- style=\"cursor: pointer;\" fix why button is uson not-allowed curso -->\n      <button sn-button-outlined style=\"cursor: pointer;\" type=\"reset\">{{ 'branchlocator.filters.buttondeleteall' | translate }}</button>\n    </div>\n    <div class=\"sn-filter-content\">\n      <div formGroupName=\"BRANCH\">\n        <h2 class=\"title\">{{ 'branchlocator.shared.branch' | translate }}</h2>\n        <div class=\"filters-list-wrapper\">\n          <div class=\"filters-list\">\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"SELECT\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.select' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"BANCAPRIVADA\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.private' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"PYME\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.pyme' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"WORKCAFE\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.workcafe' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"EMPRESAS\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.business' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"UNIVERSIDADES\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.universities' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"CLIENTES_POPULAR\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.popular' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"CLIENTES_PASTOR\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.pastor' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"CLIENTES_BANEFE\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.banefe' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"RESIDENTES\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.residents' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"GRANDES_SUPERFICIES\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.superficies' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"AG_COLABORADORES\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.agcolaboradores' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"AG_FINANCIEROS\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.agfinancieros' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div formGroupName=\"ATM\">\n        <h2 class=\"title\">{{ 'branchlocator.shared.atm' | translate }}</h2>\n        <div class=\"filters-list-wrapper\">\n          <div class=\"filters-list\">\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"ATM\" icon=\"sn-BAN005\">\n                Santander\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"NON_SANTANDER_ATM\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.otheratm' | translate }}\n              </sn-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div formGroupName=\"CORRESPONSALES\">\n        <h2 class=\"title\">{{ 'branchlocator.filters.correspondents' | translate }}</h2>\n        <div class=\"filters-list-wrapper\">\n          <div class=\"filters-list\">\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"CORRESPONSALES\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.correspondents' | translate }}\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"ELEVEN\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.eleven' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"CIRCLE_K\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.circlek' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"TIENDA_EXTRA\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.tiendaextra' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"TIENDA_K\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.tiendak' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"TELECOMM\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.telecomm' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"SUPER7_24\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.super' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n            <div class=\"filter-item\">\n              <sn-checkbox formControlName=\"OXXO\" icon=\"sn-BAN005\">\n                {{ 'branchlocator.filters.oxxo' | translate }} <!-- TODO: review translation -->\n              </sn-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sn-filter-footer\">\n      <button sn-button type=\"submit\">{{ 'branchlocator.filters.applyfilter' | translate }}</button>\n    </div>\n  </form>\n  ",
                styles: [":host{background-color:var(--color-secondary-purple,#f5f9fb);height:100%}:host.modal,:host[modal]{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10}:host h1,:host h2{font-size:1em;color:var(--color-secondary-gray,#444);margin:auto 0;font-weight:700;line-height:1.5}:host .sn-filter-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:nowrap;height:100%}:host .sn-filter-header{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;padding:1.25em 1em;border-bottom:1px solid var(--color-secondary-lihtgray,#ccc)}:host .sn-filter-header .sub-title sn-icon{margin-right:5px}:host .sn-filter-header .sub-title sn-icon::ng-deep i{font-size:1.5em;vertical-align:bottom}:host .sn-filter-header>button{border-color:var(--color-functional-linkdefault,#ec0000);color:var(--color-functional-linkdefault,#ec0000);background-color:transparent;margin:0;min-height:0;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;font-weight:400;font-size:.875em;padding:0 1.5em;line-height:1;height:2em}:host .sn-filter-content{-webkit-box-flex:1;flex:1;overflow-y:auto;padding:1.5em 1em}:host .sn-filter-content .title{font-size:1.125em;padding-bottom:.5em;margin-bottom:1.25em;border-bottom:1px solid var(--color-primary-sky,#deedf2)}:host .sn-filter-content .sub-title{margin-bottom:1em}:host .sn-filter-content .filter-item{margin-bottom:1.25em}:host .sn-filter-content .filter-item:last-child{margin-bottom:2.5em}:host .sn-filter-footer{background-color:var(--color-primary-white,#fff);border-top:1px solid var(--color-primary-sky,#deedf2);width:100%;display:-webkit-box;display:flex;-webkit-box-flex:0;flex:0}:host .sn-filter-footer button{margin:1em 1.5em;width:100%}"]
            }] }
];
/** @nocollapse */
FilterComponent.ctorParameters = () => [
    { type: FilterService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"] }
];
FilterComponent.propDecorators = {
    filterApply: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/platform/platform.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Platform {
    /**
     * @param {?} windowRef
     */
    constructor(windowRef) {
        this.windowRef = windowRef;
    }
    /**
     * @return {?}
     */
    get orientation() {
        return this.windowRef.screen.orientation;
    }
    /**
     * @return {?}
     */
    get isMobile() {
        // tslint:disable-next-line: max-line-length
        return !(this.orientation.angle === 0 && this.orientation.type === 'landscape-primary') && this.windowRef.navigator.userAgent.toLowerCase().includes('mobile');
    }
    /**
     * @return {?}
     */
    get isDesktop() {
        return !this.isMobile;
    }
    /**
     * @return {?}
     */
    get orientationChange() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(this.orientation, 'change')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
         * @return {?}
         */
        () => this.orientation)));
    }
    /**
     * @return {?}
     */
    get screen() {
        return this.windowRef.screen;
    }
}
Platform.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: WindowRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: ['WINDOW',] }] }
];
/** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["inject"])("WINDOW")); }, token: Platform, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/branch.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-branch-info/sn-branch-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnBranchInfoComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
        this.isBranch = true;
        this.language = this.translate.getDefaultLang();
        this.isNearestMarker = false;
        // TODO : Temporary fix.
        this.branchInfoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set branch(value) {
        this._branch = this.setPOIInformation(value);
        this.todayHours = this.getTodayTimeInformation(this._branch.schedule.workingDay);
        this.isBranch = true;
        if (this._branch.objectType.code.toUpperCase() === 'ATM') {
            this._branch.atm = [this.setPOIInformation(value)];
            this.isBranch = false;
        }
        else if (this._branch.atm && this._branch.atm.length > 0) {
            this._branch.atm[0] = this.setPOIInformation(this._branch.atm[0]);
        }
    }
    /**
     * @return {?}
     */
    get branch() {
        return this._branch;
    }
    /**
     * @param {?} phone
     * @return {?}
     */
    contactBranch(phone) {
    }
    /**
     * @private
     * @param {?} poi
     * @return {?}
     */
    setPOIInformation(poi) {
        poi.products = this.getProducts(poi);
        poi.attributes = this.getAttributes(poi);
        poi.schedule.preview = this.parseSchedule(poi.schedule.workingDay);
        poi.schedule.timeToClose = this.getHoursToClose(poi.schedule.workingDay);
        return poi;
    }
    /**
     * @private
     * @param {?} poi
     * @return {?}
     */
    getProducts(poi) {
        if (poi.comercialProducts) {
            return poi.comercialProducts.map((/**
             * @param {?} product
             * @return {?}
             */
            product => product[this.language] ? product[this.language] : product.default));
        }
        return [];
    }
    /**
     * @private
     * @param {?} poi
     * @return {?}
     */
    getAttributes(poi) {
        if (poi.attrib) {
            return poi.attrib.map((/**
             * @param {?} attr
             * @return {?}
             */
            attr => {
                // Remover blank spaces and nullable
                if (attr.code && attr.code !== '') {
                    // get accesibility attribute
                    if (attr.code.toUpperCase() === 'ACCESIBILITY') {
                        poi.hasAccesibility = true;
                        return null;
                    }
                    if (attr.multi && (attr.multi.default || attr.multi[this.language])) {
                        if (attr.multi.default === 'NO') {
                            return null;
                        }
                        else if (attr.multi.default === 'YES' || attr.multi.default === 'SI') {
                            return attr.code;
                        }
                        else {
                            return attr.multi[this.language] ? attr.multi[this.language] : attr.multi.default;
                        }
                    }
                    else {
                        // if there aren't translation display the code
                        return attr.code;
                    }
                }
                return null;
            })).filter((/**
             * @param {?} attr
             * @return {?}
             */
            attr => attr !== null));
        }
        return [];
    }
    /**
     * @param {?} schedule
     * @return {?}
     */
    getHoursToClose(schedule) {
        /** @type {?} */
        const poiHours = this.getTodayTimeInformation(schedule);
        if (poiHours) {
            /** @type {?} */
            const now = new Date(0, 0, 0, new Date().getHours(), new Date().getMinutes(), 0);
            const [start, end] = poiHours.split('-').map((/**
             * @param {?} res
             * @return {?}
             */
            res => res.split(':')));
            /** @type {?} */
            const startDate = new Date(0, 0, 0, Number(start[0]), Number(start[1]), 0);
            /** @type {?} */
            const endDate = new Date(0, 0, 0, Number(end[0]), Number(end[1]), 0);
            if (now.getTime() < startDate.getTime() || now.getTime() > endDate.getTime()) {
                return {
                    text: this.translate.instant('branchlocator.details.closed'),
                    mode: 'CLOSED'
                };
            }
            else {
                /** @type {?} */
                let diff = endDate.getTime() - now.getTime();
                /** @type {?} */
                const hours = Math.floor(diff / 1000 / 60 / 60);
                diff -= hours * 1000 * 60 * 60;
                /** @type {?} */
                const minutes = Math.floor(diff / 1000 / 60);
                if (hours <= 0) {
                    return {
                        text: `${this.translate.instant('branchlocator.details.closing')} ${(minutes <= 9 ? '0' : '')}${minutes} min`,
                        mode: 'CLOSING'
                    };
                }
                // return 'Closing in ' + (hours > 0 ? hours + 'h' : '') + (minutes <= 9 ? '0' : '') + minutes;
                return {
                    text: this.translate.instant('branchlocator.details.open'),
                    mode: 'OPEN'
                };
            }
        }
    }
    /**
     * @param {?} branchSchedule
     * @return {?}
     */
    getTodayTimeInformation(branchSchedule) {
        /** @type {?} */
        const auxHours = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        /** @type {?} */
        const now = new Date().getDay();
        return branchSchedule[auxHours[now]][0];
    }
    /**
     * @param {?} branchSchedule
     * @return {?}
     */
    parseSchedule(branchSchedule) {
        /** @type {?} */
        const hoursEnum = {
            MONDAY: {
                en: 'Mon',
                es: 'Seg',
                // TODO: review translation
                pt: 'Seg'
            },
            TUESDAY: {
                en: 'Tue',
                es: 'Ter',
                // TODO: review translation
                pt: 'Ter'
            },
            WEDNESDAY: {
                en: 'Wed',
                es: 'Qua',
                // TODO: review translation
                pt: 'Qua'
            },
            THURSDAY: {
                en: 'Thu',
                es: 'Qui',
                // TODO: review translation
                pt: 'Qui'
            },
            FRIDAY: {
                en: 'Fri',
                es: 'Sex',
                // TODO: review translation
                pt: 'Sex'
            },
            SATURDAY: {
                en: 'Sat',
                es: 'Sab',
                // TODO: review translation
                pt: 'Sab'
            },
            SUNDAY: {
                en: 'Sun',
                es: 'Ter',
                // TODO: review translation
                pt: 'Ter'
            }
        };
        /** @type {?} */
        const groupedHours = [];
        /** @type {?} */
        let index = 0;
        Object.keys(hoursEnum).forEach((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (branchSchedule[res] && branchSchedule[res].length > 0) {
                // create first group.
                if (groupedHours.length === 0) {
                    groupedHours.push({
                        text: `${hoursEnum[res][this.language]}`,
                        hours: branchSchedule[res]
                    });
                }
                else {
                    // if same hours, add to the previous group
                    if (JSON.stringify(groupedHours[index].hours) === JSON.stringify(branchSchedule[res])) {
                        groupedHours[index].text = `${groupedHours[index].text.split(' - ')[0]} - ${hoursEnum[res][this.language]}`;
                    }
                    else {
                        // else, create a new group
                        groupedHours.push({
                            text: `${hoursEnum[res][this.language]}`,
                            hours: branchSchedule[res]
                        });
                        index++;
                    }
                }
            }
        }));
        return groupedHours;
    }
    /**
     * @return {?}
     */
    emitClick() {
        this.branchInfoClicked.emit();
    }
}
SnBranchInfoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-branch-info',
                template: "<div class=\"branch-wrapper\">\n    <div header draggable class=\"branch-summary-wrapper\" (click)=\"emitClick()\">\n        <h6 class=\"branch-title\" *ngIf=\"isNearestMarker\">{{ 'branchlocator.details.neartitle' | translate }}</h6>\n        <section class=\"branch-summary\">\n            <h6 class=\"branch-name\" style=\"min-height: 48px;\">{{(branch && branch?.name)? branch.name : ''}}{{branch.location?.city? ' - ' + branch?.location?.city: ''}}</h6>\n            <div class=\"body-medium\" *ngIf=\"branch.subType?.multi\">{{branch.subType?.multi.default}}</div>\n        </section>\n        <section class=\"branch-location\">\n          <p class=\"branch-address\" style=\"min-height: 72px;\">\n            {{branch.location.address}}\n          </p>\n          <div class=\"branch-directions\">\n            <button>{{branch.distanceInKm | number:'0.0-2'}} km</button>\n          </div>\n        </section>\n    <section class=\"branch-schedule\">\n      <div class=\"branch-hours\" *ngIf=\"isBranch && todayHours\">\n        <div>{{ 'branchlocator.shared.branch' | translate }}</div>\n        <div>{{ 'branchlocator.details.today' | translate }}, {{todayHours}}</div>\n      </div>\n      <!-- [ngClass]=\"{hidden: branch?.atm?.length === 0}\" -->\n      <div class=\"atm-hours\" *ngIf=\"!isBranch || (branch.atm && branch.atm[0])\">\n        <div>{{ 'branchlocator.shared.atm' | translate }}</div>\n        <div>{{ 'branchlocator.details.atminfo' | translate }}</div>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"tab-group-wrapper\" [class.hide-tabs]=\"(isBranch && !(branch.atm?.length > 0)) || !isBranch\">\n    <sn-tab-group [ngClass]=\"{both: isBranch && branch?.atm?.length}\">\n      <sn-tab [label]=\"isBranch?translate.instant('branchlocator.shared.branch'):translate.instant('branchlocator.shared.atm')\" class=\"tab-branch-info\">\n        <div class=\"branch-info-wrapper\">\n          <sn-option-list lines=\"full\">\n            <sn-option-item  *ngIf=\"branch.schedule?.timeToClose\">\n              <div class=\"close-warning\">\n                <div class=\"Type-5_Light-Style\">{{branch.schedule.timeToClose.text}}</div>\n                <div class=\"signal {{branch.schedule.timeToClose.mode}}\"></div>\n              </div>\n            </sn-option-item>\n            <sn-option-item  *ngIf=\"branch.contactData?.phoneNumber\">\n              <sn-icon color=\"primary\" icon=\"sn-CHAN025\" item-start align-start></sn-icon>\n              <div>\n                <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.contact' | translate }}</div>\n                <div class=\"Type-5_Regular-Style\">{{branch.contactData.phoneNumber}}</div>\n              </div>\n              <div item-end>\n                <button (click)=\"contactBranch(branch.contactData.phoneNumber)\" class=\"call-button\">{{ 'branchlocator.details.contactbutton' | translate }}</button>\n              </div>\n            </sn-option-item>\n            <sn-option-item  *ngIf=\"branch.schedule?.preview?.length > 0\">\n              <sn-icon color=\"primary\" icon=\"sn-DOC022\" item-start align-start></sn-icon>\n              <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.schedule' | translate }}</div>\n              <div class=\"Type-5_Regular-Style hours-wrapper\" *ngFor=\"let schedule of branch.schedule.preview\">\n                <div class=\"weekdays\">\n                  <h1 class=\"title\">{{schedule.text}}:</h1>\n                </div>\n                <div class=\"hours\">\n                  <div *ngFor=\"let workingHour of schedule.hours\">{{workingHour}}<br /></div>\n                </div>\n              </div>\n            </sn-option-item>\n            <!-- <sn-option-item >\n              <sn-icon color=\"primary\" icon=\"sn-SYS004\" item-start align-start></sn-icon>\n              <div class=\"Type-5_Regular-Style section-title\">Notices and news</div>\n              <div class=\"Type-5_Regular-Style\">\n                <h1 class=\"title\">Tomorrow closed for works</h1>\n                Due to improvements in the facilities we will keep the office closed tomorrow, Tuesday, August 6, 2018.\n                <br />\n                <br />\n                Sorry for the inconvenience\n              </div>\n            </sn-option-item> -->\n            <sn-option-item  *ngIf=\"branch.attributes?.length > 0 || branch.products?.length > 0\">\n              <sn-icon color=\"primary\" icon=\"sn-BAN089\" item-start align-start></sn-icon>\n              <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.services' | translate }}</div>\n              <div class=\"Type-5_Regular-Style\" *ngIf=\"branch.products.length > 0\">\n                  <h1 class=\"title\">{{ 'branchlocator.details.servicesfinancial' | translate }}</h1>\n                  <ul type=\"none\">\n                    <li *ngFor=\"let attr of branch.products\">{{attr}}</li>\n                  </ul>\n              </div>\n              <div class=\"Type-5_Regular-Style\" *ngIf=\"branch.attributes.length > 0\">\n                  <h1 class=\"title\">{{ 'branchlocator.details.servicesnofinancial' | translate }}</h1>\n                <ul type=\"none\">\n                  <li *ngFor=\"let attr of branch.attributes\">{{attr}}</li>\n                </ul>\n              </div>\n            </sn-option-item>\n            <sn-option-item *ngIf=\"branch.hasAccesibility\">\n              <sn-icon color=\"primary\" icon=\"sn-FUNC094\" item-start align-start></sn-icon>\n              <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.accessibility' | translate }}</div>\n              <h1 class=\"title\">{{ 'branchlocator.details.accessibilitymessage' | translate }}</h1>\n            </sn-option-item>\n\n          </sn-option-list>\n        </div>\n      </sn-tab>\n        \n      <sn-tab label=\"ATM\" class=\"tab-branch-info\" *ngIf=\"(isBranch && branch.atm && branch.atm[0])\"> <!--*ngIf=\"false\"-->\n          <div class=\"branch-info-wrapper\">\n            <sn-option-list>\n              <sn-option-item  *ngIf=\"branch.atm[0].schedule?.timeToClose\">\n                <div class=\"close-warning\">\n                  <div class=\"Type-5_Light-Style\">{{branch.atm[0].schedule?.timeToClose.text}}</div>\n                  <div class=\"signal {{branch.atm[0].schedule?.timeToClose.mode}}\"></div>\n                </div>\n              </sn-option-item>\n              <sn-option-item  *ngIf=\"branch.atm && branch.atm[0].contactData?.phoneNumber\">\n                <sn-icon color=\"primary\" icon=\"sn-CHAN025\" item-start align-start></sn-icon>\n                <div>\n                  <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.contact' | translate }}</div>\n                  <div class=\"Type-5_Regular-Style\">{{branch.atm[0].contactData.phoneNumber}}</div>\n                </div>\n                <div item-end>\n                  <button (click)=\"contactBranch(branch.atm[0].contactData.phoneNumber)\" class=\"call-button\">{{ 'branchlocator.details.contactbutton' | translate }}</button>\n                </div>\n              </sn-option-item>\n              <sn-option-item  *ngIf=\"branch.atm && branch.atm[0].schedule?.preview?.length > 0\">\n                <sn-icon color=\"primary\" icon=\"sn-DOC022\" item-start align-start></sn-icon>\n                <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.schedule' | translate }}</div>\n                <div class=\"Type-5_Regular-Style hours-wrapper\" *ngFor=\"let schedule of branch.atm[0].schedule.preview\">\n                  <div class=\"weekdays\">\n                    <h1 class=\"title\">{{schedule.text}}:</h1>\n                  </div>\n                  <div class=\"hours\">\n                    <div *ngFor=\"let workingHour of schedule.hours\">{{workingHour}}<br /></div>\n                  </div>\n                </div>\n              </sn-option-item>\n              <!-- <sn-option-item >\n                <sn-icon color=\"primary\" icon=\"sn-SYS004\" item-start align-start></sn-icon>\n                <div class=\"Type-5_Regular-Style section-title\">Notices and news</div>\n                <div class=\"Type-5_Regular-Style\">\n                  <h1 class=\"title\">Tomorrow closed for works</h1>\n                  Due to improvements in the facilities we will keep the office closed tomorrow, Tuesday, August 6, 2018.\n                  <br />\n                  <br />\n                  Sorry for the inconvenience\n                </div>\n              </sn-option-item> -->\n              <sn-option-item  *ngIf=\"branch.atm && (branch.atm[0].attributes?.length > 0 || branch.atm[0].products?.length > 0)\">\n                <sn-icon color=\"primary\" icon=\"sn-BAN089\" item-start align-start></sn-icon>\n                <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.services' | translate }}</div>\n                <div class=\"Type-5_Regular-Style\" *ngIf=\"branch.atm[0].products.length > 0\">\n                  <h1 class=\"title\">{{ 'branchlocator.details.servicesfinancial' | translate }}</h1>\n                  <ul type=\"none\">\n                    <li *ngFor=\"let attr of branch.atm[0].products\">{{attr}}</li>\n                  </ul>\n                </div>\n                <div class=\"Type-5_Regular-Style\" *ngIf=\"branch.atm[0].attributes.length > 0\">\n                  <h1 class=\"title\">{{ 'branchlocator.details.servicesnofinancial' | translate }}</h1>\n                  <ul type=\"none\">\n                    <li *ngFor=\"let attr of branch.atm[0].attributes\">{{attr}}</li>\n                  </ul>\n                </div>\n              </sn-option-item>\n              <sn-option-item *ngIf=\"branch.atm[0].hasAccesibility\">\n                <sn-icon color=\"primary\" icon=\"sn-FUNC094\" item-start align-start></sn-icon>\n                <div class=\"Type-5_Regular-Style section-title\">{{ 'branchlocator.details.accessibility' | translate }}</div>\n                <h1 class=\"title\">{{ 'branchlocator.details.accessibilitymessage' | translate }}</h1>\n              </sn-option-item>\n  \n            </sn-option-list>\n          </div>\n\n        </sn-tab>\n    </sn-tab-group>\n  </div>\n</div>\n",
                styles: [".branch-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.branch-summary-wrapper{padding:16px}.branch-summary-wrapper h6{font-size:18px;font-weight:700}.branch-summary-wrapper .branch-title{color:var(--color-primary-santander,#ec0000)}.branch-summary-wrapper .branch-summary .branch-name{font-weight:700;color:var(--color-secondary-mediumgray,#767676);padding:0}.branch-summary-wrapper .branch-summary .body-medium{font-size:16px;font-weight:lighter;color:var(--color-secondary-mediumgray,#767676)}.branch-summary-wrapper .branch-location{display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.branch-summary-wrapper .branch-location .branch-address{font-weight:400;font-size:16px;color:var(--color-secondary-mediumgray,#767676);-webkit-box-flex:1;flex-grow:1}.branch-summary-wrapper .branch-location .branch-directions button{background:var(--color-secondary-blue,#36f);color:var(--color-primary-white,#fff);text-align:center;border-radius:16px;width:103px;height:32px;font-weight:400;font-size:1em;line-height:1em}.branch-summary-wrapper .branch-schedule{font-size:14px;color:var(--color-secondary-gray,#444);display:-webkit-box;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between}.branch-summary-wrapper .branch-schedule .atm-hours :first-child,.branch-summary-wrapper .branch-schedule .branch-hours :first-child{font-weight:700}.branch-summary-wrapper .branch-schedule .atm-hours{text-align:right}.branch-summary-wrapper .branch-schedule .atm-hours:first-child{text-align:left}.tab-group-wrapper{overflow-y:auto;height:100%}.tab-group-wrapper.hide-tabs ::ng-deep sn-tab-group .tab-wrapper{display:none}.branch-info-wrapper{padding:1rem;overflow-y:auto}.branch-info-wrapper sn-option-item{padding:.5rem 0 1rem}.branch-info-wrapper sn-option-item sn-icon{font-size:2rem}.branch-info-wrapper sn-option-item .call-button{background:var(--color-primary-white,#fff);color:var(--color-primary-santander,#ec0000);text-align:center;border-radius:16px;width:103px;height:32px;font-weight:400;font-size:1em;border:1px solid var(--color-primary-santander,#ec0000);line-height:1em}.branch-info-wrapper sn-option-item .close-warning{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start}.branch-info-wrapper sn-option-item .close-warning .signal{width:1rem;height:1rem;border-radius:100%;background-color:var(--color-secondary-yellow,#fc3);margin:auto auto auto .5rem}.branch-info-wrapper sn-option-item .close-warning .signal.OPEN{background-color:green}.branch-info-wrapper sn-option-item .close-warning .signal.CLOSED{background-color:transparent}.branch-info-wrapper sn-option-item .hours-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between}.branch-info-wrapper sn-option-item .hours-wrapper>div{width:50%}.branch-info-wrapper sn-option-item .hours-wrapper>div>div{margin-top:.2em}.branch-info-wrapper sn-option-item .title{color:var(--color-secondary-gray,#444);font-weight:600;margin-bottom:0;margin-top:.2rem;font-size:1rem;line-height:1.5rem}.branch-info-wrapper sn-option-item div{font-size:1rem;line-height:1.5rem}.branch-info-wrapper sn-option-item div.section-title{color:var(--color-secondary-mediumgray,#767676);margin-top:.25rem}.branch-info-wrapper sn-option-item div ul{padding:0;margin:0}.branch-info-wrapper sn-option-item div ul li>ul{padding-left:1rem}"]
            }] }
];
/** @nocollapse */
SnBranchInfoComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
SnBranchInfoComponent.propDecorators = {
    isNearestMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    branch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    branchInfoClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/menu/menu.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MenuAnimations = {
    menuTrigger: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menuTrigger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menuOpened', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(0)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menuClosed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            transform: 'translateX(-340px)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('menuOpened=>menuClosed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('menuClosed=>menuOpened', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms'))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/menu/menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent {
    constructor() {
        this.closeInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.menuDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.menuDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.currentState = 'menuOpened';
    }
    /**
     * @return {?}
     */
    changeState() {
        this.currentState = this.currentState === 'menuOpened' ? 'menuClosed' : 'menuOpened';
    }
    /**
     * @return {?}
     */
    open() {
        this.currentState = 'menuOpened';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationEnd(event) {
        event.toState === 'menuOpened' ? this.menuDidOpen.emit(true) : this.menuDidClose.emit(true);
    }
}
MenuComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-menu',
                template: "\n<div class=\"panel panel-visible\" [@menuTrigger]=\"currentState\" (@menuTrigger.done)=\"animationEnd($event)\">\n    <div class=\"close-button-wrapper\">\n        <button (click)=\"changeState()\" class=\"menu-toggle\">\n            <sn-icon *ngIf=\"currentState === 'menuOpened'\" icon=\"sn-SYS017\"></sn-icon>\n            <sn-icon *ngIf=\"currentState === 'menuClosed'\" icon=\"sn-SYS016\"></sn-icon>\n       </button>\n           \n    </div>\n  <section class=\"panel-wrapper\">\n    <div class=\"search-input-wrapper\">\n      <ng-content select=\"sn-branch-search\"></ng-content>\n    </div>\n\n    <div class=\"search-results-wrapper\" [ngClass]=\"{'closed': !!info }\">\n      <ng-content select=\"sn-branch-list\"></ng-content>\n    </div>\n    <div class=\"info-wrapper\" [ngClass]=\"{'closed': !info }\">\n      <div class=\"info-close-button-wrapper\">\n        <button class=\"info-close-button\" (click)=\"closeInfo.emit($event)\">\n          <sn-icon icon=\"sn-SYS022\"></sn-icon>\n        </button>\n      </div>\n        <ng-content select=\"sn-branch-info\"></ng-content>\n    </div>\n  </section>\n  <ng-content select=\"sn-filter\"></ng-content>\n</div>\n\n",
                animations: [MenuAnimations.menuTrigger],
                styles: [":host{display:block}:host .panel{width:340px;position:absolute;top:0;z-index:3;opacity:0;height:0;left:0;-webkit-transform:translateX(0);transform:translateX(0);transition-property:-webkit-transform,transform,opacity;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);background-color:#fff}:host .panel-visible{opacity:1;height:100%;box-shadow:0 0 20px rgba(0,0,0,.3)}:host .menu-toggle{position:absolute;right:-28px;top:.75rem;height:40px;box-shadow:7px 1px 9px 0 rgba(60,64,67,.28)}:host .panel-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}:host .search-input-wrapper{height:65px;padding:8px}:host .search-input-wrapper ::ng-deep sn-branch-search .search-box{box-shadow:none}:host .search-results-wrapper{box-shadow:inset 0 14px 10px -10px rgba(60,64,67,.28);-webkit-box-flex:1;flex:1;overflow-y:auto}:host .info-wrapper{box-shadow:inset 0 14px 10px -10px rgba(60,64,67,.28);-webkit-box-flex:1;flex:1;overflow:hidden}:host .info-wrapper .info-close-button-wrapper{padding:8px;position:fixed;right:0}:host .info-wrapper .info-close-button-wrapper button.info-close-button{font-size:24px}:host .info-wrapper ::ng-deep sn-branch-info .tab-group-wrapper sn-tab-group sn-tab{overflow-y:auto}:host .closed{display:none}"]
            }] }
];
MenuComponent.propDecorators = {
    closeInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ContentChild"], args: [SnBranchInfoComponent,] }],
    menuDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    menuDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/branch-locator/sn-branch-locator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnBranchLocatorComponent {
    /**
     * @param {?} geoPosition
     * @param {?} branchService
     * @param {?} platform
     */
    constructor(geoPosition, branchService, platform) {
        this.geoPosition = geoPosition;
        this.branchService = branchService;
        this.platform = platform;
        this.markerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.mapBounds = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.isLoading = true;
        this.branchIcon = {
            url: 'assets/branchlocator/touchpointIcon.svg',
            scaledSize: { height: 40, width: 40 }
        };
        this.branchSelectedIcon = {
            url: 'assets/branchlocator/santanderTouchpointSelected.svg',
            scaledSize: { height: 56, width: 56 }
        };
        this.usericon = {
            url: 'assets/branchlocator/pinVoce.svg',
            scaledSize: { height: 90, width: 90 }
        };
        this.clusterStyles = [
            {
                textColor: '#000000',
                url: 'assets/branchlocator/coffeeBlank.svg',
                height: 40,
                width: 32,
                backgroundPosition: '-4px 2px'
            }
        ];
        this.zoom = 13;
        this.showNearest = false;
        this.selectBranch = (/**
         * @param {?} branch
         * @return {?}
         */
        (branch) => {
            /** @type {?} */
            const markerFound = this.branchMarkerList['_results'].find((/**
             * @param {?} marker
             * @return {?}
             */
            marker => marker.label && marker.label.text === branch.id));
            this.markerSelect(markerFound, branch);
            this.selectedTabIndex = 0;
        });
        this.geoPosition.watchPosition()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe((/**
         * @param {?} pos
         * @return {?}
         */
        (pos) => {
            this._initialPosition = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            this.userPosition = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isMobile = this.platform.isMobile;
        this.branchService.onChange.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.clearSelectedMarker();
            this.branchesList = res;
            this.isLoading = false;
            if (this.openNearest) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.selectBranch(this.branchesList[0]);
                    this.showNearest = true;
                }));
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            console.error(err);
            this.isLoading = false;
        }));
    }
    /**
     * @param {?=} coords
     * @param {?=} openNearest
     * @return {?}
     */
    getBranchesByCoordinates(coords = this.userPosition, openNearest = false) {
        this.isLoading = true;
        this.openNearest = openNearest;
        this.branchService.getBranchesByCoords(coords ? coords : this.userPosition);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    tabsChanged(event) {
        this.selectedTabIndex = event.tabIndex;
        if (this.selectedTabIndex === 1) {
            this.clearSelectedMarker();
        }
    }
    /**
     * @param {?} selected
     * @param {?} branch
     * @return {?}
     */
    markerSelect(selected, branch) {
        this.clearSelectedMarker();
        selected.iconUrl = (/** @type {?} */ (this.branchSelectedIcon));
        selected['_markerManager'].updateIcon(selected);
        this.selectedMarker = selected;
        this.selectedBranch = branch;
        this.markerSelected.emit({ userPosition: this.userPosition, marker: this.selectedBranch });
        this.openMenu();
        this.openDrawer();
    }
    /**
     * @return {?}
     */
    openMenu() {
        if (this.menuComponent && this.menuComponent.currentState === 'menuClosed') {
            this.menuComponent.open();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    mapClick(event) {
        if (this.selectedMarker) {
            this.clearSelectedMarker();
        }
    }
    /**
     * @return {?}
     */
    mapReady() {
        this.geoPosition.getCurrentPosition()
            .subscribe((/**
         * @param {?} pos
         * @return {?}
         */
        (pos) => {
            this.userPosition = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            // this.getBranchesByCoordinates();
            this.goToUserPositon();
        }));
    }
    /**
     * @param {?} mapCenter
     * @return {?}
     */
    centerChange(mapCenter) {
        if (this.userPosition && this.userPosition.lng && this.userPosition.lat) {
            this.showReCenter = (this.roundCordinates(this.userPosition.lng) !== this.roundCordinates(mapCenter.lng)
                || this.roundCordinates(this.userPosition.lat) !== this.roundCordinates(mapCenter.lat));
        }
        else {
            this.showReCenter = false;
        }
    }
    /**
     * @param {?=} callAPI
     * @param {?=} openNearest
     * @return {?}
     */
    centerMapToUser(callAPI = true, openNearest = false) {
        this.goToUserPositon();
        if (callAPI) {
            this.getBranchesByCoordinates(this.userPosition, openNearest);
        }
        else if (openNearest && this.branchesList && this.branchesList.length > 0) {
            this.selectBranch(this.branchesList[0]);
            this.showNearest = true;
        }
    }
    /**
     * @param {?} state
     * @return {?}
     */
    drawerStageChange(state$$1) {
        if (state$$1 === sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["DrawerState"].Bottom) {
            this.clearSelectedMarker();
        }
        else {
            this.openDrawer();
        }
    }
    /**
     * @return {?}
     */
    closeInfo() {
        this.showDrawer = !this.showDrawer;
    }
    /**
     * @param {?} place
     * @return {?}
     */
    placeChange(place) {
        this.clearSelectedMarker();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.map.api.panTo(place)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.map.api.setZoom(this.zoom))))).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.getBranchesByBounds();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFilterApply(event) {
        this.filterCounts = event.count;
        this.getBranchesByBounds();
    }
    /**
     * @return {?}
     */
    showFilter() {
        this.clearSelectedMarker();
        this.filterView.open();
    }
    /**
     * @private
     * @param {?} cord
     * @return {?}
     */
    roundCordinates(cord) {
        return Math.round(cord * 1e7) / 1e7;
    }
    /**
     * @private
     * @return {?}
     */
    clearSelectedMarker() {
        this.showNearest = false;
        this.closeDrawer();
        if (this.selectedMarker) {
            this.selectedMarker.iconUrl = (/** @type {?} */ (this.branchIcon));
            this.selectedMarker['_markerManager'].updateIcon(this.selectedMarker);
            this.selectedMarker = undefined;
            this.selectedBranch = undefined;
        }
    }
    /**
     * @private
     * @return {?}
     */
    closeDrawer() {
        this.showDrawer = false;
    }
    /**
     * @private
     * @return {?}
     */
    openDrawer() {
        this.showDrawer = true;
    }
    /**
     * @return {?}
     */
    goToUserPositon() {
        if (this.userPosition) {
            this.map.api.panTo(this.userPosition).then((/**
             * @return {?}
             */
            () => this.map.api.setZoom(this.zoom)));
        }
    }
    /**
     * @return {?}
     */
    tilesLoaded() {
        this.getBranchesByBounds();
    }
    /**
     * @return {?}
     */
    getBranchesByBounds() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.map.api.getBounds()).
            subscribe((/**
         * @param {?} mapBounds
         * @return {?}
         */
        (mapBounds) => {
            /** @type {?} */
            const northEast = { lat: mapBounds.getNorthEast().lat(), lng: mapBounds.getNorthEast().lng() };
            /** @type {?} */
            const southWest = { lat: mapBounds.getSouthWest().lat(), lng: mapBounds.getSouthWest().lng() };
            this.mapBounds.emit({ northEast, southWest });
            this.isLoading = true;
            this.openNearest = false;
            this.position
                .subscribe((/**
             * @param {?} pos
             * @return {?}
             */
            pos => {
                this.branchService.getBranchesByBounds(northEast, southWest, pos);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    get position() {
        if (this.userPosition) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(this.userPosition);
        }
        else {
            return this.geoPosition.getCurrentPosition()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((/**
             * @param {?} pos
             * @return {?}
             */
            (pos) => {
                this.userPosition = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                return this.userPosition;
            })));
        }
    }
}
SnBranchLocatorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-branch-locator',
                template: "<!-- Mobile and Tablet -->\n<ng-container *ngIf=\"isMobile\">\n    <sn-tab-group [selectIndex]=\"selectedTabIndex\" (selectedTab)='tabsChanged($event)'>\n        <sn-tab label=\"{{ 'branchlocator.title.map' | translate }}\">\n            <section  class=\"locator-content\">\n                <agm-map [gestureHandling]=\"'greedy'\" [showDefaultInfoWindow]=\"false\" [disableDefaultUI]=\"true\"\n                [controlSize]=\"false\" [panControl]=\"false\" [streetViewControl]=\"false\" [zoomControl]=\"false\" [zoom]=\"zoom\"\n                (mapReady)=\"mapReady()\" (mapClick)=\"mapClick($event)\" (centerChange)=\"centerChange($event)\" (tilesLoaded)=\"tilesLoaded()\">\n                    <agm-marker [agmFitBounds]=\"true\" [latitude]=\"userPosition?.lat\" [longitude]=\"userPosition?.lng\"\n                        [iconUrl]=\"usericon\" [markerClickable]=\"false\" [openInfoWindow]=\"false\"></agm-marker>\n                    <agm-marker-cluster [styles]=\"clusterStyles\" [maxZoom]=\"'15'\" [minimumClusterSize]=\"5\" [averageCenter]=\"true\">\n                        <agm-marker canChangeIcon *ngFor=\"let branch of branchesList\" [title]=\"branch.name\" [label]=\"{text: branch.id, fontSize: '0'}\" [agmFitBounds]=\"true\" [latitude]=\"branch.location.geoCoords.latitude\"\n                            [longitude]=\"branch.location.geoCoords.longitude\" [iconUrl]=\"branchIcon\" (markerClick)=\"markerSelect($event, branch)\"\n                            [markerClickable]=\"true\" [openInfoWindow]=\"false\"></agm-marker>\n                    </agm-marker-cluster>\n                </agm-map>\n                <section class=\"locator-center\">\n                    <button class=\"center-map-user\" (click)=\"centerMapToUser(false, false)\">\n                        <sn-icon icon=\"sn-SYS029\"></sn-icon>\n                    </button>\n                </section>\n                <sn-drawer #drawer [dockedHeight]=\"220\" [state]=\"(showDrawer)? 1 : 0\" [distanceTop]=\"64\" (stateChange)=\"drawerStageChange($event)\">\n                    <sn-branch-info *ngIf=\"selectedBranch\" [branch]=\"selectedBranch\" (branchInfoClicked)=\"drawer.changeState()\" [isNearestMarker]=\"showNearest\"></sn-branch-info>\n                </sn-drawer>\n                \n                <sn-loading *ngIf=\"isLoading\" full=\"true\"></sn-loading>\n            </section>\n        </sn-tab>\n        <sn-tab label=\"{{ 'branchlocator.title.list' | translate }}\">\n            <section class=\"result-list-wrapper\">\n                <sn-branch-list [isLoading]=\"isLoading\" [branchesList]=\"branchesList\" (branchSelected)=\"selectBranch($event)\"></sn-branch-list>\n            </section>\n        </sn-tab>\n    </sn-tab-group>\n    <section class=\"locator-search\">\n        <div class=\"locator-search-container\">\n            <sn-branch-search [showReCenter]=\"showReCenter\" [filterCount]=\"filterCounts\"\n            (placeChange)=\"placeChange($event)\"\n            (reCenter)=\"centerMapToUser(true, true)\" (callFilter)=\"showFilter()\"></sn-branch-search>\n        </div>\n    </section>\n    <sn-filter modal (filterApply)=\"onFilterApply($event)\" ></sn-filter>\n</ng-container>\n<!-- End Mobile and Tablet -->\n\n<!-- Desktop -->\n<ng-container *ngIf=\"!isMobile\">\n    <!-- Side Menu -->\n    <sn-menu (closeInfo)=\"closeInfo()\">\n        <sn-branch-search #test [showReCenter]=\"showReCenter\" [filterCount]=\"filterCounts\"\n            (placeChange)=\"placeChange($event)\" (reCenter)=\"centerMapToUser(true, true)\" (callFilter)=\"showFilter()\">\n        </sn-branch-search>\n\n        <sn-branch-list [isLoading]=\"isLoading\" [branchesList]=\"branchesList\" (branchSelected)=\"selectBranch($event)\"></sn-branch-list>\n\n        <sn-branch-info\n            *ngIf=\"showDrawer\" \n            [branch]=\"selectedBranch\"\n            [isNearestMarker]=\"showNearest\"></sn-branch-info>\n        <sn-filter modal (filterApply)=\"onFilterApply($event)\"></sn-filter>\n    </sn-menu>\n    <!-- End Side Menu -->\n\n    <section class=\"locator-content\">\n        <agm-map [gestureHandling]=\"'greedy'\" [showDefaultInfoWindow]=\"false\" [disableDefaultUI]=\"true\"\n        [controlSize]=\"false\" [panControl]=\"false\" [streetViewControl]=\"false\" [zoomControl]=\"false\" [zoom]=\"zoom\"\n        (mapReady)=\"mapReady()\" (mapClick)=\"mapClick($event)\" (centerChange)=\"centerChange($event)\" (tilesLoaded)=\"tilesLoaded()\">\n            <agm-marker [agmFitBounds]=\"true\" [latitude]=\"userPosition?.lat\" [longitude]=\"userPosition?.lng\"\n                [iconUrl]=\"usericon\" [markerClickable]=\"false\" [openInfoWindow]=\"false\" ></agm-marker>\n            <agm-marker-cluster [styles]=\"clusterStyles\" [maxZoom]=\"'15'\" [minimumClusterSize]=\"5\" [averageCenter]=\"true\">\n                <agm-marker canChangeIcon *ngFor=\"let branch of branchesList\" [title]=\"branch.name\" [label]=\"{text: branch.id, fontSize: '0'}\" [agmFitBounds]=\"true\" [latitude]=\"branch.location.geoCoords.latitude\"\n                    [longitude]=\"branch.location.geoCoords.longitude\" [iconUrl]=\"branchIcon\" (markerClick)=\"markerSelect($event, branch)\"\n                    [markerClickable]=\"true\" [openInfoWindow]=\"false\"></agm-marker>\n            </agm-marker-cluster>\n        </agm-map>\n        <section class=\"locator-center\">\n            <button class=\"center-map-user\" (click)=\"centerMapToUser(false, false)\">\n                <sn-icon icon=\"sn-SYS029\"></sn-icon>\n            </button>\n        </section>\n        <sn-loading *ngIf=\"isLoading\" full=\"true\"></sn-loading>\n    </section>\n</ng-container>\n<!-- End Desktop -->",
                styles: [":host{position:absolute;top:0;left:0;width:100%;height:100%}:host ::ng-deep agm-map{height:100%}:host .locator-content{height:100%}:host .locator-content .locator-center{position:absolute;right:.5rem;top:.5rem}:host .locator-content .locator-center button{background-color:var(--color-primary-white,#fff);border-radius:2.7px;box-shadow:0 1px 2px 0 var(--color-secondary-mediumgray,#767676);border:0;font-size:1.5rem;height:2rem;width:2rem;padding:0}:host .locator-content .locator-center button ::ng-deep sn-icon{line-height:1;display:block}:host .locator-content .locator-center button ::ng-deep sn-icon i{line-height:1}:host .result-list-wrapper{height:100%;overflow-y:auto;margin-top:4rem}:host .locator-search{position:absolute;top:3rem;left:0;right:0;padding:.5rem}:host .locator-search .locator-search-container{position:relative;margin:0}:host sn-tab{overflow:hidden}:host sn-tab .locator-content{position:relative;height:100%}:host sn-tab .locator-content ::ng-deep sn-drawer .drawer-content{height:calc(100% - (4px + 8px + 2px))}:host sn-tab .locator-content .locator-center{top:4rem}:host sn-loading{position:absolute!important;background-color:rgba(255,255,255,.75)!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:all;touch-action:none}"]
            }] }
];
/** @nocollapse */
SnBranchLocatorComponent.ctorParameters = () => [
    { type: GeoPositionService },
    { type: SnBranchLocatorService },
    { type: Platform }
];
SnBranchLocatorComponent.propDecorators = {
    markerSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    mapBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    map: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"], args: [SnMapDirective,] }],
    branchMarkerList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChildren"], args: [_agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"],] }],
    filterView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"], args: [FilterComponent,] }],
    menuComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"], args: [MenuComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/sn-marker/sn-marker.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnMarkerDirective extends _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"] {
    /**
     * @param {?} markerManager
     */
    constructor(markerManager) {
        super(markerManager);
        this.markerManager = markerManager;
    }
}
SnMarkerDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Directive"], args: [{
                selector: '[snMarker]'
            },] }
];
/** @nocollapse */
SnMarkerDirective.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MarkerManager"] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/branch-search/branch-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BranchSearchInputComponent {
    /**
     * @param {?} mapsAPILoader
     * @param {?} windowRef
     * @param {?} env
     */
    constructor(mapsAPILoader, windowRef, env) {
        this.mapsAPILoader = mapsAPILoader;
        this.windowRef = windowRef;
        this.env = env;
        this.reCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.placeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.callFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mapsAPILoader.load()
            .then((/**
         * @return {?}
         */
        () => {
            this.initSearchBox();
        }));
        this.hasFilters = this.env.api.BranchLocator.hasFilters;
    }
    /**
     * @return {?}
     */
    initSearchBox() {
        this.searchBox = new this.windowRef.google.maps.places.SearchBox(this.inputElementRef.nativeElement);
        this.searchBox.addListener('places_changed', (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const places = this.searchBox.getPlaces();
            if (places && places.length > 0) {
                /** @type {?} */
                const place = places[0];
                if (Boolean(place.geometry)) {
                    /** @type {?} */
                    const lat = place.geometry.location.lat();
                    /** @type {?} */
                    const lng = place.geometry.location.lng();
                    this.placeChange.emit({ lat, lng });
                }
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    search(event) {
        this.inputElementRef.nativeElement.focus();
        this.windowRef.google.maps.event.trigger(this.inputElementRef.nativeElement, 'keydown', {
            keyCode: 13
        });
    }
}
BranchSearchInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-branch-search',
                template: "<div class=\"search-box\">\n  <div class=\"search-input-wrapper\">\n    <div class=\"search-input-button\" >\n      <button (click)=\"search($event)\" aria-label=\"Search\">\n        <sn-icon icon=\"sn-FUNC071\"></sn-icon>\n      </button>\n    </div>\n    <div class=\"search-input-input\">\n      <input\n        #in\n        type=\"search\"\n        [placeholder]=\"'branchlocator.searchinput.placeholder' | translate\"\n        autocomplete=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"off\"\n      />\n    </div>\n    <div  class=\"search-input-center-button\">\n        <button *ngIf=\"showReCenter\" (click)=\"reCenter.emit($event)\">\n            <sn-icon icon=\"sn-SYS028\"></sn-icon>\n          </button>\n    </div>\n  </div>\n\n\n  <div class=\"filter-button-container\" *ngIf=\"hasFilters\">\n    <button class=\"filter-button\" (click)=\"callFilter.emit($event)\" aria-label=\"Filter\">\n      <div class=\"filter-button-wrapper\">\n        <div class=\"filter-button-label\">\n          {{'branchlocator.searchinput.filterbutton' | translate}}\n        </div>\n        <div class=\"filter-button-icon\">\n          <sn-icon icon=\"sn-FUNC035\" *ngIf=\"!filterCount\"></sn-icon>\n          <div class=\"filter-button-notification\" *ngIf=\"filterCount\">\n            <div class=\"filter-button-notification-wrapper\">\n              {{ filterCount }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </button>\n  </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";.display_level_1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_1{font-size:3.75rem}}@media only screen and (max-width:375px){.display_level_1{font-size:2.625rem}}.display_level_2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_2{font-size:3.375rem}}@media only screen and (max-width:375px){.display_level_2{font-size:2.25rem}}.display_level_3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.display_level_3{font-size:3rem}}@media only screen and (min-width:375px) and (max-width:768px){.display_level_3{font-size:3rem}}@media only screen and (max-width:375px){.display_level_3{font-size:2rem}}.heading_level_1,h1{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_1,h1{font-size:2.625rem}}@media only screen and (max-width:375px){.heading_level_1,h1{font-size:2rem}}.heading_level_2,h2{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_2,h2{font-size:2.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_2,h2{font-size:2.25rem}.heading_level_3,h3{font-size:2rem}}.heading_level_3,h3{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_3,h3{font-size:2rem}}@media only screen and (max-width:375px){.heading_level_2,h2{font-size:2rem}.heading_level_3,h3{font-size:1.75rem}}.heading_level_4,h4{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_4,h4{font-size:1.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_4,h4{font-size:1.75rem}.heading_level_5,h5{font-size:1.5rem}}.heading_level_5,h5{line-height:1.2;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_5,h5{font-size:1.5rem}}@media only screen and (max-width:375px){.heading_level_4,h4{font-size:1.5rem}.heading_level_5,h5{font-size:1.25rem}}.heading_level_6,h6{line-height:1.4;letter-spacing:0}@media only screen and (min-width:768px){.heading_level_6,h6{font-size:1.25rem}}@media only screen and (min-width:375px) and (max-width:768px){.heading_level_6,h6{font-size:1.25rem}.body_text_large{font-size:1.125rem}}.body_text_large{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_large{font-size:1.125rem}}@media only screen and (max-width:375px){.heading_level_6,h6{font-size:1.125rem}.body_text_large{font-size:1rem}}.body_text_medium{font-size:1rem;line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_medium{font-size:1rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_medium{font-size:1rem}.body_text_small{font-size:.875rem}}.body_text_small{line-height:1.5;letter-spacing:0}@media only screen and (max-width:375px){.body_text_medium,.body_text_small{font-size:.875rem}}.body_text_xsmall{line-height:1.5;letter-spacing:0}@media only screen and (min-width:768px){.body_text_small{font-size:.875rem}.body_text_xsmall{font-size:.75rem}}@media only screen and (min-width:375px) and (max-width:768px){.body_text_xsmall{font-size:.75rem}}@media only screen and (max-width:375px){.body_text_xsmall{font-size:.875rem}}.search-box{display:-webkit-box;display:flex;background-color:var(--color-primary-white,#fff);border-radius:4px;box-shadow:0 1px 2px 0 var(--color-secondary-mediumgray,#767676);padding-left:8px;padding-right:8px;width:100%;height:48px;line-height:48px}.search-box ::ng-deep sn-icon{display:block}.search-box ::ng-deep sn-icon i{font-size:24px;vertical-align:middle}.search-box .search-input-wrapper{-webkit-box-flex:1;flex:1;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-align:center;align-items:center}.search-box .search-input-wrapper .search-input-button{-webkit-box-flex:0;flex:0;height:100%}.search-box .search-input-wrapper .search-input-button button{height:100%;display:block;padding:0}.search-box .search-input-wrapper .search-input-button button ::ng-deep sn-icon i{color:var(--color-primary-santander,#ec0000)}.search-box .search-input-wrapper .search-input-input{margin-left:8px;margin-right:8px;-webkit-box-flex:1;flex:1}.search-box .search-input-wrapper .search-input-input input[type=search]{font-family:inherit!important;height:100%;-webkit-appearance:none;display:block;text-align:left;font-weight:400;font-size:16px;color:currentColor;border:none;padding:0;margin:0;width:100%;text-align:inherit;max-width:100%;background:0 0;outline:0;-webkit-rtl-ordering:logical;-webkit-user-select:text;cursor:auto}.search-box .search-input-wrapper .search-input-input input[type=search]::-ms-clear{display:none;width:0;height:0}.search-box .search-input-wrapper .search-input-input input[type=search]::-ms-reveal{display:none;width:0;height:0}.search-box .search-input-wrapper .search-input-input input[type=search]::-webkit-search-cancel-button,.search-box .search-input-wrapper .search-input-input input[type=search]::-webkit-search-decoration,.search-box .search-input-wrapper .search-input-input input[type=search]::-webkit-search-results-button,.search-box .search-input-wrapper .search-input-input input[type=search]::-webkit-search-results-decoration{display:none}.search-box .search-input-wrapper .search-input-center-button{-webkit-box-flex:0;flex:0;height:100%}.search-box .search-input-wrapper .search-input-center-button button{height:100%;display:block;padding:0;margin-right:8px}.search-box .search-input-wrapper .search-input-center-button button ::ng-deep sn-icon i{color:var(--color-primary-santander,#ec0000)}.search-box .filter-button-container{-webkit-box-flex:0;flex:0;width:auto}.search-box .filter-button-container button.filter-button{-webkit-box-flex:0;flex:0;text-align:right;color:var(--color-secondary-mediumgray,#767676);padding:0;height:100%}.search-box .filter-button-container button.filter-button .filter-button-wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:nowrap;-webkit-box-align:center;align-items:center}.search-box .filter-button-container button.filter-button .filter-button-wrapper .filter-button-label{padding-left:6px;border-left:1px solid var(--color-secondary-mediumgray,#767676)}.search-box .filter-button-container button.filter-button .filter-button-wrapper .filter-button-icon{margin-left:6px}.search-box .filter-button-container button.filter-button .filter-button-wrapper .filter-button-icon .filter-button-notification{display:inline-block}.search-box .filter-button-container button.filter-button .filter-button-wrapper .filter-button-icon .filter-button-notification .filter-button-notification-wrapper{border-radius:50%;background-color:var(--color-primary-santander,#ec0000);height:25px;width:25px;color:var(--color-primary-white,#fff);text-align:center}"]
            }] }
];
/** @nocollapse */
BranchSearchInputComponent.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"] },
    { type: WindowRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: ['WINDOW',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Inject"], args: [_globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"],] }] }
];
BranchSearchInputComponent.propDecorators = {
    showReCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    reCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    placeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    callFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    filterCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    inputElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"], args: ['in',] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/branch-search/branch-search.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = window;
class BranchSearchInputModule {
}
BranchSearchInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                declarations: [BranchSearchInputComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
                ],
                exports: [BranchSearchInputComponent],
                providers: [
                    { provide: 'WINDOW', useValue: ɵ0 }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/filter/filter.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterModule {
}
FilterModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                declarations: [FilterComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["CheckboxModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
                ],
                exports: [FilterComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-drawer/drawer-state.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DrawerState$1 = {
    Bottom: 0,
    Docked: 1,
    Top: 2,
};
DrawerState$1[DrawerState$1.Bottom] = 'Bottom';
DrawerState$1[DrawerState$1.Docked] = 'Docked';
DrawerState$1[DrawerState$1.Top] = 'Top';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-drawer/drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DrawerCustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: {
                enable: true,
                threshold: 0,
                direction: hammerjs__WEBPACK_IMPORTED_MODULE_9__["DIRECTION_VERTICAL"]
            }
        };
    }
}
class DrawerComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dockedHeight = 50;
        this.shouldBounce = true;
        this.disableDrag = false;
        this.distanceTop = 0;
        this.transition = '0.25s ease-in-out';
        this.state = DrawerState$1.Bottom;
        this.minimumHeight = 0;
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this._BOUNCE_DELTA = 30;
        this.panArea = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drawerPan(event) {
        if (!this.disableDrag && this.panArea) {
            this._handlePan(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drawerPanStart(event) {
        /** @type {?} */
        const header = event.srcEvent.path.find((/**
         * @param {?} elem
         * @return {?}
         */
        elem => elem instanceof HTMLElement && elem.getAttribute('draggable') !== null));
        if (header) {
            this.panArea = true;
        }
        if (!this.disableDrag && this.panArea) {
            this.handlePanStart();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drawerPanEnd(event) {
        if (!this.disableDrag && this.panArea) {
            this.handlePanEnd(event);
        }
        this.panArea = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.setDrawerState(this.state);
    }
    /**
     * @param {?} children
     * @return {?}
     */
    getHeaderElement(children) {
        /** @type {?} */
        const size = children.length;
        for (let i = 0; i < size; i++) {
            if (children[i].getAttribute('header') !== null) {
                return children[i];
            }
            if (children[i].children) {
                return this.getHeaderElement(children[i].children);
            }
        }
    }
    /**
     * @param {?} children
     * @return {?}
     */
    setDynamicHeight(children) {
        /** @type {?} */
        const header = this.getHeaderElement(children);
        if (header) {
            this.dockedHeight = header.offsetHeight;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setDynamicHeight(this.contentElement.nativeElement.children);
            this.setDrawerState(changes.state.currentValue);
        }), 0);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDrawerState(state$$1) {
        /** @type {?} */
        const parentHeight = this.elementRef.nativeElement.parentElement.clientHeight;
        this.state = state$$1;
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', this.transition);
        switch (state$$1) {
            case DrawerState$1.Bottom:
                this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
                break;
            case DrawerState$1.Docked:
                this._setTranslateY((parentHeight - this.dockedHeight) + 'px');
                break;
            default:
                this._setTranslateY(this.distanceTop + 'px');
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setTranslateY(value) {
        window.requestAnimationFrame((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'translateY(' + value + ')');
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', 'calc(100% - ' + value + ')');
        }));
    }
    /**
     * @return {?}
     */
    handlePanStart() {
        this.startPositionTop = this.elementRef.nativeElement.getBoundingClientRect().top
            - this.elementRef.nativeElement.parentElement.offsetTop;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    handlePanEnd(ev) {
        if (this.shouldBounce && ev.isFinal) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'transition', this.transition);
            switch (this.state) {
                case DrawerState$1.Top:
                    this._handleTopPanEnd(ev);
                    break;
                case DrawerState$1.Docked:
                    this.handleDockedPanEnd(ev);
                    break;
                default:
                    this._handleBottomPanEnd(ev);
            }
        }
        this.stateChange.emit(this.state);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    handleDockedPanEnd(ev) {
        /** @type {?} */
        const parentHeight = this.elementRef.nativeElement.parentElement.clientHeight;
        /** @type {?} */
        const absDeltaY = Math.abs(ev.deltaY);
        if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
            this.state = DrawerState$1.Top;
        }
        else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
            this.state = DrawerState$1.Bottom;
        }
        else {
            this._setTranslateY((parentHeight - this.dockedHeight) + 'px');
        }
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    _handleTopPanEnd(ev) {
        if (ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState$1.Docked;
        }
        else {
            this._setTranslateY(this.distanceTop + 'px');
        }
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    _handleBottomPanEnd(ev) {
        if (-ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState$1.Docked;
        }
        else {
            this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        }
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    _handlePan(ev) {
        /** @type {?} */
        const pointerY = ev.center.y;
        /** @type {?} */
        const parentHeight = this.elementRef.nativeElement.parentElement.clientHeight;
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < parentHeight) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                /** @type {?} */
                const newTop = this.startPositionTop + ev.deltaY;
                if (newTop >= this.distanceTop) {
                    this._setTranslateY(newTop + 'px');
                }
                else if (newTop < this.distanceTop) {
                    this._setTranslateY(this.distanceTop + 'px');
                }
                if (newTop > parentHeight - this.minimumHeight) {
                    this._setTranslateY((parentHeight - this.minimumHeight) + 'px');
                }
            }
        }
    }
    /**
     * @return {?}
     */
    changeState() {
        switch (this.state) {
            case DrawerState$1.Top:
                this.setDrawerState(DrawerState$1.Docked);
                break;
            case DrawerState$1.Docked:
                this.setDrawerState(DrawerState$1.Top);
                break;
            default:
                break;
        }
    }
}
DrawerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-drawer',
                template: "<div class=\"sn-drawer-content\">\n\t<div class=\"drawer-handle\" (click)=\"changeState()\" draggable>\n\t\t<div class=\"handler\"></div>\n\t</div>\n\t<div class=\"drawer-content\" #content>\n\t\t<ng-content></ng-content>\n\t</div>\n</div>",
                providers: [{ provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], useClass: DrawerCustomHammerConfig }],
                styles: [":host{position:absolute;width:100%;height:100%;top:0;z-index:1!important;-webkit-transform:translateY(100%);transform:translateY(100%);background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;box-shadow:0 -1px 4px 0 #ccc;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .sn-drawer-content{height:100%}:host .sn-drawer-content .drawer-handle{position:relative;left:0;top:0;height:16px;width:100%;cursor:pointer;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .sn-drawer-content .drawer-handle .handler{position:absolute;background-color:#d6d6d6;top:8px;left:50%;height:4px;width:24px;border-radius:2px}:host .sn-drawer-content .drawer-content{touch-action:pan-y;max-height:100%}"]
            }] }
];
/** @nocollapse */
DrawerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Renderer2"] }
];
DrawerComponent.propDecorators = {
    contentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ViewChild"], args: ['content',] }],
    dockedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    shouldBounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    disableDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    distanceTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    minimumHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }],
    drawerPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["HostListener"], args: ['pan', ['$event'],] }],
    drawerPanStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["HostListener"], args: ['panstart', ['$event'],] }],
    drawerPanEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["HostListener"], args: ['panend', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-drawer/drawer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DrawerModule {
}
DrawerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                declarations: [
                    DrawerComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]
                ],
                exports: [
                    DrawerComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sn-drawer/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/branch-list/branch-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BranchListComponent {
    constructor() {
        this.branchSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
    }
    /**
     * @param {?} branch
     * @return {?}
     */
    selectBranch(branch) {
        this.branchSelected.emit(branch);
    }
}
BranchListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-branch-list',
                template: "<sn-option-list [style.display]=\" isLoading? 'none' : 'initial'\" lines=\"full\">\n  <!-- TODO: replace sn-option-item and use button[sn-option-item] for clicable list items -->\n  <button sn-option-item\n    *ngFor=\"let branch of branchesList\"\n    (click)=\"selectBranch(branch)\"\n  >\n    <div class=\"Type-5_Regular-Style name\">{{(branch && branch?.name)? branch.name : ''}}{{branch.location?.city? ' - ' + branch?.location?.city: ''}}</div>\n    <div class=\"Type-5_Regular-Style address\">\n      {{ branch?.location?.address }}\n    </div>\n    <div right-text class=\"Type-5_Regular-Style distance\">\n      {{ branch?.distanceInKm | number: \"0.0-2\" }} km\n    </div>\n  </button>\n</sn-option-list>\n<sn-loader *ngIf=\"isLoading\"></sn-loader>\n",
                styles: [":host button[sn-option-item]{width:100%}:host button[sn-option-item] .name{font-weight:700;color:var(--color-primary-santander,#ec0000);font-size:1rem;line-height:1.5;padding-bottom:.5rem}:host button[sn-option-item] .address{font-size:1rem;line-height:1.075;font-weight:300;color:var(--color-secondary-mediumgray,#767676)}:host button[sn-option-item] .distance{font-size:1rem;font-weight:300;color:var(--color-secondary-mediumgray,#767676)}"]
            }] }
];
BranchListComponent.propDecorators = {
    branchesList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    branchSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/sn-tab/sn-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnTabComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._label = '';
        this._onLabelChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    /**
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set label(value) {
        if (value !== this._label) {
            this._label = value || '';
            this._onLabelChange$.next({ label: this._label, index: this.index });
        }
    }
    /**
     * @return {?}
     */
    get index() {
        return this._index;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set index(index) {
        this._index = index;
        this._id = `sn-tab-${this._index}`;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @return {?}
     */
    get isTabActive() {
        return this._active;
    }
    /**
     * @return {?}
     */
    onLabelChange() {
        return this._onLabelChange$.asObservable();
    }
    /**
     * @return {?}
     */
    setTabActive() {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        this._active = true;
    }
    /**
     * @return {?}
     */
    setTabInactive() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
        this._active = false;
    }
}
SnTabComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-tab',
                template: "<ng-content></ng-content>\n",
                styles: [":host{-webkit-box-flex:1;flex:1 1 0%}"]
            }] }
];
/** @nocollapse */
SnTabComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Renderer2"] }
];
SnTabComponent.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/sn-tab-group/sn-tab-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnTabGroupComponent {
    constructor() {
        this._onLabelChange$ = [];
        this.selectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_13__["EventEmitter"]();
        this.tabslabel = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectIndex(value) {
        // this.selectedIndex = value;
        if (this._tabs && value >= 0 && value !== null && value < this._tabs.toArray().length) {
            this.tabClick(value);
        }
    }
    /**
     * @return {?}
     */
    get getPosition() {
        return {
            left: this.tabslabel ? ((100 / this.calcPosition()) * (this._activeIndex < 2 ? this._activeIndex : 2)) + '%' : 0,
            width: this.tabslabel ? (100 / this.calcPosition()) + '%' : 0 + '%'
        };
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.setTabsInitialValue();
        if (this._tabs && this._tabs.changes) {
            this._tabs.changes.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.setTabsInitialValue();
            }));
        }
    }
    /**
     * @return {?}
     */
    setTabsInitialValue() {
        this._activeIndex = this.startIndex < this._tabs.toArray().length ? this.startIndex : 0;
        this.tabslabel = this._tabs.toArray().map((/**
         * @param {?} tab
         * @param {?} index
         * @return {?}
         */
        (tab, index) => {
            tab.index = index;
            this._onLabelChange$.push(tab.onLabelChange().subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                this.tabslabel[val.index] = val.label;
            })));
            if (this._activeIndex === index) {
                tab.setTabActive();
            }
            else {
                tab.setTabInactive();
            }
            return tab.label || '';
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onLabelChange$.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        (tab) => {
            tab.unsubscribe();
        }));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    tabClick(index) {
        this._tabs.toArray()[this._activeIndex].setTabInactive();
        this._activeIndex = index;
        this._tabs.toArray()[this._activeIndex].setTabActive();
        this.selectedTab.emit({ tab: this._tabs.toArray()[this._activeIndex], tabIndex: this._activeIndex });
    }
    /**
     * @private
     * @return {?}
     */
    calcPosition() {
        return this.tabslabel.length < 3 ? this.tabslabel.length : 3;
    }
}
SnTabGroupComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"], args: [{
                selector: 'sn-tab-group',
                template: "<div class=\"tab-wrapper\">\n    <ul>\n        <li *ngFor=\"let item of tabslabel; let i=index\" (click)=\"tabClick(i)\">\n            {{item}}\n        </li>\n    </ul>\n    <div class=\"fill\" [ngStyle]=\"getPosition\"></div>\n</div>\n\n<ng-content></ng-content>\n",
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column nowrap;height:100%}:host .tab-wrapper{-webkit-box-flex:0;flex:0 1 0%;position:relative}:host .tab-wrapper ul{list-style-type:none;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-padding-start:0;padding-inline-start:0;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;min-height:48px;overflow:auto}:host .tab-wrapper ul::-webkit-scrollbar{display:none}:host .tab-wrapper ul li{-webkit-box-flex:0;flex:0 1 100%;margin:auto;border-right:1px solid grey;cursor:pointer;text-align:center;font-size:.875rem;line-height:1.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .tab-wrapper ul li:last-of-type{border-right:none}@media screen and (min-width:768px){:host .tab-wrapper ul li{padding:0 48px}}:host .tab-wrapper .fill{height:3px;position:absolute;left:0;bottom:0;background-color:red;transition:left 1s;-webkit-transition:left 1s;-moz-transition:left 1s;-ms-transition:left 1s ease;-o-transition:left 1s}"]
            }] }
];
/** @nocollapse */
SnTabGroupComponent.ctorParameters = () => [];
SnTabGroupComponent.propDecorators = {
    _tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["ContentChildren"], args: [SnTabComponent,] }],
    startIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    selectIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Input"] }],
    selectedTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tabs/sn-tab.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SnTabModule {
}
SnTabModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                declarations: [SnTabComponent, SnTabGroupComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["IconModule"]
                ],
                exports: [SnTabComponent, SnTabGroupComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sn-branch-locator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: path Update EnvironmentConfigModel
/**
 * @param {?} http
 * @param {?} path
 * @return {?}
 */
function LocalLoaderFactory(http, path) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, path.api.BranchLocator['languages'] + 'assets/i18n/branchlocator/', '.json');
}
class SnBranchLocatorModule {
}
SnBranchLocatorModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"], args: [{
                declarations: [
                    SnBranchLocatorComponent,
                    SnMapDirective,
                    SnBranchInfoComponent,
                    SnMarkerDirective,
                    MenuComponent,
                    BranchListComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"],
                    _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_5__["AgmJsMarkerClustererModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["OptionListModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                    SnTabModule,
                    BranchSearchInputModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["OptionListModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useFactory: LocalLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _globile_mobile_services__WEBPACK_IMPORTED_MODULE_7__["ENV_CONFIG"]]
                        }
                    }),
                    DrawerModule,
                    FilterModule,
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["LoadingModule"],
                    sn_common_lib__WEBPACK_IMPORTED_MODULE_14__["LoaderModule"],
                ],
                providers: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
                ],
                exports: [
                    SnBranchLocatorComponent,
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
 * Generated from: globile-branch-locator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=globile-branch-locator.js.map

/***/ }),

/***/ "./node_modules/js-marker-clusterer/src/markerclusterer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-marker-clusterer/src/markerclusterer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;


/***/ }),

/***/ "./src/app/modules/branch-locator/branch-locator-wrapper.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/branch-locator/branch-locator-wrapper.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-branch-locator></sn-branch-locator>"

/***/ }),

/***/ "./src/app/modules/branch-locator/branch-locator-wrapper.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/branch-locator/branch-locator-wrapper.component.ts ***!
  \****************************************************************************/
/*! exports provided: BranchLocatorWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchLocatorWrapperComponent", function() { return BranchLocatorWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BranchLocatorWrapperComponent = class BranchLocatorWrapperComponent {
};
BranchLocatorWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sn-branch-locator-wrapper',
        template: __webpack_require__(/*! ./branch-locator-wrapper.component.html */ "./src/app/modules/branch-locator/branch-locator-wrapper.component.html"),
    })
], BranchLocatorWrapperComponent);



/***/ }),

/***/ "./src/app/modules/branch-locator/branch-locator-wrapper.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/branch-locator/branch-locator-wrapper.module.ts ***!
  \*************************************************************************/
/*! exports provided: BranchLocatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchLocatorModule", function() { return BranchLocatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _globile_branch_locator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @globile/branch-locator */ "./node_modules/@globile/branch-locator/fesm2015/globile-branch-locator.js");
/* harmony import */ var _branch_locator_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-locator-wrapper.component */ "./src/app/modules/branch-locator/branch-locator-wrapper.component.ts");
/* harmony import */ var _branch_locator_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch-locator-wrapper.routing.module */ "./src/app/modules/branch-locator/branch-locator-wrapper.routing.module.ts");






let BranchLocatorModule = class BranchLocatorModule {
};
BranchLocatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _branch_locator_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["BranchLocatorWrapperComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _globile_branch_locator__WEBPACK_IMPORTED_MODULE_3__["SnBranchLocatorModule"],
            _branch_locator_wrapper_routing_module__WEBPACK_IMPORTED_MODULE_5__["BranchLocatorRoutingModule"]
        ],
    })
], BranchLocatorModule);



/***/ }),

/***/ "./src/app/modules/branch-locator/branch-locator-wrapper.routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/branch-locator/branch-locator-wrapper.routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BranchLocatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchLocatorRoutingModule", function() { return BranchLocatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _branch_locator_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-locator-wrapper.component */ "./src/app/modules/branch-locator/branch-locator-wrapper.component.ts");




const routes = [
    {
        path: '', component: _branch_locator_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["BranchLocatorWrapperComponent"],
        data: {
            header: {
                display: false,
                left: { icon: 'sn-SYS020', route: 'back' },
                title: { label: 'Branch Locator' },
            },
            footer: {
                display: false
            },
            showChatbot: false
        }
    },
    { path: '**', redirectTo: '/' },
];
let BranchLocatorRoutingModule = class BranchLocatorRoutingModule {
};
BranchLocatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BranchLocatorRoutingModule);



/***/ })

}]);
//# sourceMappingURL=0.js.map