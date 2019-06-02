(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js ***!
  \***************************************************************************/
/*! exports provided: ChartHTMLTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return ChartHTMLTooltip; });
var ChartHTMLTooltip = /** @class */ (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    ChartHTMLTooltip.PIXELS = 'px';
    return ChartHTMLTooltip;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js ***!
  \**************************************************************************/
/*! exports provided: ChartMouseEvent, MouseOverEvent, ChartMouseOverEvent, ChartMouseOutEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseEvent", function() { return ChartMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return MouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return ChartMouseOverEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return ChartMouseOutEvent; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ChartMouseEvent = /** @class */ (function () {
    function ChartMouseEvent() {
    }
    return ChartMouseEvent;
}());

/**
 * @deprecated Use ChartMouseOverEvent instead
 */
var MouseOverEvent = /** @class */ (function (_super) {
    __extends(MouseOverEvent, _super);
    function MouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOverEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOverEvent, _super);
    function ChartMouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOverEvent;
}(ChartMouseEvent));

var ChartMouseOutEvent = /** @class */ (function (_super) {
    __extends(ChartMouseOutEvent, _super);
    function ChartMouseOutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOutEvent;
}(ChartMouseEvent));



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-chart/google-chart.component.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return GoogleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");
/* harmony import */ var _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleChartComponent = /** @class */ (function () {
    function GoogleChartComponent(el, loaderService) {
        var _this = this;
        this.mouseOverListener = function (item) {
            var event = _this.parseMouseEvent(item);
            event.tooltip = _this.getHTMLTooltip();
            return event;
        };
        this.mouseOutListener = function (item) {
            var event = _this.parseMouseEvent(item);
            return event;
        };
        this.selectListener = function () {
            var event = {
                message: 'select',
                row: null,
                column: null,
                selectedRowValues: [],
                selectedRowFormattedValues: [],
                columnLabel: ''
            };
            var s = _this.wrapper.visualization.getSelection();
            var gs = s[s.length - 1];
            if (!gs) {
                event.message = 'deselect';
                return event;
            }
            var selection = gs;
            if (gs.row != null) {
                event.row = selection.row;
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                var dataTable = _this.wrapper.getDataTable();
                var numberOfColumns = dataTable.getNumberOfColumns();
                for (var i = 0; i < numberOfColumns; i++) {
                    selectedRowValues.push(dataTable.getValue(selection.row, i));
                    selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                }
                event.selectedRowValues = selectedRowValues;
                event.selectedRowFormattedValues = selectedRowFormattedValues;
            }
            if (selection.column != null) {
                event.column = selection.column;
                event.columnLabel = _this.getColumnLabelAtPosition(selection);
            }
            if (gs.name) {
                event.columnLabel = gs.name;
            }
            return event;
        };
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartSelectOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartReadyOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartErrorOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOverOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseOutOneTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (!this.data) {
                return;
            }
            this.options = this.data.options;
            if (!this.options) {
                this.options = {};
            }
            this.data.component = this;
            this.loaderService.load().then(function () {
                if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                    _this.convertOptions();
                    if (_this.data.opt_firstRowIsData && Array.isArray(_this.data.dataTable)) {
                        _this.data.dataTable = google.visualization.arrayToDataTable(_this.data.dataTable, true);
                    }
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                    _this.registerChartWrapperEvents();
                }
                else {
                    // this.unregisterEvents();
                }
                _this.draw();
            });
        }
    };
    GoogleChartComponent.prototype.draw = function () {
        this.wrapper.setDataTable(this.data.dataTable);
        this.convertOptions();
        this.wrapper.setOptions(this.options);
        this.reformat();
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    /**
     * Applies formatters to data columns, if defined
     */
    GoogleChartComponent.prototype.reformat = function () {
        if (!this.data) {
            return;
        }
        if (this.data.formatters !== undefined) {
            for (var _i = 0, _a = this.data.formatters; _i < _a.length; _i++) {
                var formatterConfig = _a[_i];
                var formatterConstructor = google.visualization[formatterConfig.type];
                var formatterOptions = formatterConfig.options;
                var formatter = new formatterConstructor(formatterOptions);
                if (formatterConfig.type === 'ColorFormat' && formatterOptions) {
                    for (var _b = 0, _c = formatterOptions.ranges; _b < _c.length; _b++) {
                        var range = _c[_b];
                        if (typeof (range.fromBgColor) !== 'undefined' && typeof (range.toBgColor) !== 'undefined') {
                            formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
                        }
                        else {
                            formatter.addRange(range.from, range.to, range.color, range.bgcolor);
                        }
                    }
                }
                var dt = this.wrapper.getDataTable();
                for (var _d = 0, _e = formatterConfig.columns; _d < _e.length; _d++) {
                    var col = _e[_d];
                    formatter.format(dt, col);
                }
            }
        }
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row == null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new _chart_html_tooltip__WEBPACK_IMPORTED_MODULE_2__["ChartHTMLTooltip"](tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var chartType = this.wrapper.getChartType();
        var eventColumn = item.column;
        if (eventColumn == null) {
            switch (chartType) {
                case 'Timeline':
                    eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
                    break;
                default:
                    eventColumn = 0;
            }
        }
        var eventRow = item.row;
        var myItem = {
            row: eventRow,
            column: eventColumn
        };
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(myItem),
            value: this.getValueAtPosition(myItem),
            columnType: this.getColumnTypeAtPosition(myItem),
            columnLabel: this.getColumnLabelAtPosition(myItem)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper.getChart());
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        var chart = this.wrapper.getChart();
        this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
        if (this.mouseOver.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOverOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOverOneTime.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
        if (this.mouseOutOneTime.observers.length > 0) {
            google.visualization.events.addOneTimeListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOutOneTime.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'ready', function () {
            _this.chartReadyOneTime.emit({ message: 'Chart ready (one time)' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addOneTimeListener(this.wrapper, 'error', function (error) {
            _this.chartErrorOneTime.emit(error);
        });
        this.addListener(this.wrapper, 'select', this.selectListener, this.chartSelect);
        this.addOneTimeListener(this.wrapper, 'select', this.selectListener, this.chartSelectOneTime);
    };
    GoogleChartComponent.prototype.addListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.addOneTimeListener = function (source, eventType, listenerFn, evEmitter) {
        google.visualization.events.addOneTimeListener(source, eventType, function () {
            evEmitter.emit(listenerFn());
        });
    };
    GoogleChartComponent.prototype.convertOptions = function () {
        try {
            this.options = google.charts[this.data.chartType].convertOptions(this.options);
        }
        catch (error) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleChartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartReadyOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartError", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartErrorOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "chartSelectOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOverOneTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GoogleChartComponent.prototype, "mouseOutOneTime", void 0);
    GoogleChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'google-chart',
            template: '<div></div>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartsLoaderService"]])
    ], GoogleChartComponent);
    return GoogleChartComponent;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts-loader.service.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts-loader.service.js ***!
  \************************************************************************/
/*! exports provided: GoogleChartsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartsLoaderService", function() { return GoogleChartsLoaderService; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var GoogleChartsLoaderService = /** @class */ (function () {
    function GoogleChartsLoaderService(localeId, googleChartsVersion, mapsApiKey) {
        this.googleChartsVersion = googleChartsVersion;
        this.mapsApiKey = mapsApiKey;
        this.googleScriptLoadingNotifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
        if (this.googleChartsVersion === null) {
            this.googleChartsVersion = '46';
        }
    }
    GoogleChartsLoaderService.prototype.load = function (packages) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                var initializer = {
                    language: _this.localeId,
                    callback: resolve,
                    packages: packages
                };
                if (_this.mapsApiKey) {
                    initializer.mapsApiKey = _this.mapsApiKey;
                }
                google.charts.load(_this.googleChartsVersion, initializer);
            }).catch(function (err) { return reject(); });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    GoogleChartsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('googleChartsVersion')), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('mapsApiKey')), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [String, String, String])
    ], GoogleChartsLoaderService);
    return GoogleChartsLoaderService;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/google-charts.module.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-google-charts/google-charts.module.js ***!
  \****************************************************************/
/*! exports provided: Ng2GoogleChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return Ng2GoogleChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony import */ var _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-charts-loader.service */ "./node_modules/ng2-google-charts/google-charts-loader.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Ng2GoogleChartsModule = /** @class */ (function () {
    function Ng2GoogleChartsModule() {
    }
    Ng2GoogleChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ],
            providers: [
                _google_charts_loader_service__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsLoaderService"]
            ],
            exports: [
                _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]
            ]
        })
    ], Ng2GoogleChartsModule);
    return Ng2GoogleChartsModule;
}());



/***/ }),

/***/ "./node_modules/ng2-google-charts/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-google-charts/index.js ***!
  \*************************************************/
/*! exports provided: ChartHTMLTooltip, ChartMouseOverEvent, ChartMouseOutEvent, MouseOverEvent, Ng2GoogleChartsModule, GoogleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-chart/google-chart.component */ "./node_modules/ng2-google-charts/google-chart/google-chart.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleChartComponent", function() { return _google_chart_google_chart_component__WEBPACK_IMPORTED_MODULE_0__["GoogleChartComponent"]; });

/* harmony import */ var _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/chart-html-tooltip */ "./node_modules/ng2-google-charts/google-chart/chart-html-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartHTMLTooltip", function() { return _google_chart_chart_html_tooltip__WEBPACK_IMPORTED_MODULE_1__["ChartHTMLTooltip"]; });

/* harmony import */ var _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart/chart-mouse-event */ "./node_modules/ng2-google-charts/google-chart/chart-mouse-event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOverEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMouseOutEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["ChartMouseOutEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseOverEvent", function() { return _google_chart_chart_mouse_event__WEBPACK_IMPORTED_MODULE_2__["MouseOverEvent"]; });

/* harmony import */ var _google_charts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-charts.module */ "./node_modules/ng2-google-charts/google-charts.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ng2GoogleChartsModule", function() { return _google_charts_module__WEBPACK_IMPORTED_MODULE_3__["Ng2GoogleChartsModule"]; });







/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ "./node_modules/ng2-google-charts/index.js");








var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
                ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__["Ng2GoogleChartsModule"]
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Info\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let item of items\">\n          <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\n          {{item.title}}\n          <div class=\"item-note\" slot=\"end\">\n            {{item.note}}\n          </div>\n        </ion-item>\n</ion-list>\n<div style=\"margin-top: 1rem;\">\n<google-chart [data]=\"pieChartData\"></google-chart>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FiaGlzaGVrL0Rlc2t0b3AvZXYtYXBwL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.icons = [
            'battery-charging',
            'thermometer'
        ];
        this.title = [
            'Available Charge',
            'Temerature'
        ];
        this.notes = [
            '88%',
            '20°C'
        ];
        this.items = [];
        for (var i = 0; i < this.title.length; i++) {
            this.items.push({
                title: this.title[i],
                note: this.notes[i],
                icon: this.icons[i]
            });
        }
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.useAngularLibrary();
    };
    Tab1Page.prototype.useAngularLibrary = function () {
        this.pieChartData = {
            chartType: 'LineChart',
            dataTable: [
                ['Battery', 'Percent'],
                [1, 68],
                [2, 65],
                [3, 64],
                [4, 61],
                [5, 56],
                [6, 53],
                [7, 48],
                [8, 43],
                [9, 41],
                [10, 39],
                [11, 35],
                [12, 32]
            ],
            options: {
                'title': 'Battery (%)',
                'width': '100%',
            }
        };
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map