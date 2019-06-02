(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic-native/bluetooth-serial/ngx/index.js ***!
  \******************************************************************/
/*! exports provided: BluetoothSerial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothSerial", function() { return BluetoothSerial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BluetoothSerial = /** @class */ (function (_super) {
    __extends(BluetoothSerial, _super);
    function BluetoothSerial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothSerial.prototype.connect = function (macAddress_or_uuid) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "connect", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerial.prototype.connectInsecure = function (macAddress) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "connectInsecure", { "platforms": ["Android"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerial.prototype.disconnect = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disconnect", {}, arguments); };
    BluetoothSerial.prototype.write = function (data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "write", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.available = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "available", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.read = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "read", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.readUntil = function (delimiter) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "readUntil", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.subscribe = function (delimiter) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "subscribe", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    BluetoothSerial.prototype.subscribeRawData = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "subscribeRawData", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribeRawData" }, arguments); };
    BluetoothSerial.prototype.clear = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clear", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.list = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "list", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isEnabled", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.isConnected = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isConnected", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.readRSSI = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "readRSSI", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.showBluetoothSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "showBluetoothSettings", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "enable", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.discoverUnpaired = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "discoverUnpaired", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerial.prototype.setDeviceDiscoveredListener = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setDeviceDiscoveredListener", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "clearDeviceDiscoveredListener" }, arguments); };
    BluetoothSerial.prototype.setName = function (newName) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setName", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerial.prototype.setDiscoverable = function (discoverableDuration) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setDiscoverable", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerial.pluginName = "BluetoothSerial";
    BluetoothSerial.repo = "https://github.com/don/BluetoothSerial";
    BluetoothSerial.plugin = "cordova-plugin-bluetooth-serial";
    BluetoothSerial.pluginRef = "bluetoothSerial";
    BluetoothSerial.platforms = ["Android", "iOS", "Windows Phone 8"];
    BluetoothSerial = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BluetoothSerial);
    return BluetoothSerial;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsdWV0b290aC1zZXJpYWwvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFzQ0csbUNBQWlCOzs7O0lBV3BELGlDQUFPLGFBQUMsa0JBQTBCO0lBY2xDLHlDQUFlLGFBQUMsVUFBa0I7SUFTbEMsb0NBQVU7SUFZViwrQkFBSyxhQUFDLElBQVM7SUFXZixtQ0FBUztJQVdULDhCQUFJO0lBWUosbUNBQVMsYUFBQyxTQUFpQjtJQWMzQixtQ0FBUyxhQUFDLFNBQWlCO0lBYTNCLDBDQUFnQjtJQVdoQiwrQkFBSztJQVdMLDhCQUFJO0lBV0osbUNBQVM7SUFXVCxxQ0FBVztJQVdYLGtDQUFRO0lBV1IsK0NBQXFCO0lBV3JCLGdDQUFNO0lBV04sMENBQWdCO0lBYWhCLHFEQUEyQjtJQVkzQixpQ0FBTyxhQUFDLE9BQWU7SUFVdkIseUNBQWUsYUFBQyxvQkFBNEI7Ozs7OztJQXRPakMsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQXhDNUI7RUF3Q3FDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgQmx1ZXRvb3RoIFNlcmlhbFxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGVuYWJsZXMgc2VyaWFsIGNvbW11bmljYXRpb24gb3ZlciBCbHVldG9vdGguIEl0IHdhcyB3cml0dGVuIGZvciBjb21tdW5pY2F0aW5nIGJldHdlZW4gQW5kcm9pZCBvciBpT1MgYW5kIGFuIEFyZHVpbm8gKG5vdCBBbmRyb2lkIHRvIEFuZHJvaWQgb3IgaU9TIHRvIGlPUykuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsdWV0b290aFNlcmlhbCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmx1ZXRvb3RoLXNlcmlhbC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmx1ZXRvb3RoU2VyaWFsOiBCbHVldG9vdGhTZXJpYWwpIHsgfVxuICpcbiAqXG4gKiAvLyBXcml0ZSBhIHN0cmluZ1xuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoJ2hlbGxvIHdvcmxkJykudGhlbihzdWNjZXNzLCBmYWlsdXJlKTtcbiAqXG4gKiAvLyBBcnJheSBvZiBpbnQgb3IgYnl0ZXNcbiAqIHRoaXMuYmx1ZXRvb3RoU2VyaWFsLndyaXRlKFsxODYsIDIyMCwgMjIyXSkudGhlbihzdWNjZXNzLCBmYWlsdXJlKTtcbiAqXG4gKiAvLyBUeXBlZCBBcnJheVxuICogdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheSg0KTtcbiAqIGRhdGFbMF0gPSAweDQxO1xuICogZGF0YVsxXSA9IDB4NDI7XG4gKiBkYXRhWzJdID0gMHg0MztcbiAqIGRhdGFbM10gPSAweDQ0O1xuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoZGF0YSkudGhlbihzdWNjZXNzLCBmYWlsdXJlKTtcbiAqXG4gKiAvLyBBcnJheSBCdWZmZXJcbiAqIHRoaXMuYmx1ZXRvb3RoU2VyaWFsLndyaXRlKGRhdGEuYnVmZmVyKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmx1ZXRvb3RoU2VyaWFsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kb24vQmx1ZXRvb3RoU2VyaWFsJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RoLXNlcmlhbCcsXG4gIHBsdWdpblJlZjogJ2JsdWV0b290aFNlcmlhbCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhTZXJpYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGEgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFjQWRkcmVzc19vcl91dWlkIElkZW50aWZpZXIgb2YgdGhlIHJlbW90ZSBkZXZpY2VcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gU3Vic2NyaWJlIHRvIGNvbm5lY3QsIHVuc3Vic2NyaWJlIHRvIGRpc2Nvbm5lY3QuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0J1xuICB9KVxuICBjb25uZWN0KG1hY0FkZHJlc3Nfb3JfdXVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCBpbnNlY3VyZWx5IHRvIGEgQmx1ZXRvb3RoIGRldmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFjQWRkcmVzcyBJZGVudGlmaWVyIG9mIHRoZSByZW1vdGUgZGV2aWNlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFN1YnNjcmliZSB0byBjb25uZWN0LCB1bnN1YnNjcmliZSB0byBkaXNjb25uZWN0LlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnZGlzY29ubmVjdCdcbiAgfSlcbiAgY29ubmVjdEluc2VjdXJlKG1hY0FkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgY29ubmVjdGVkIGRldmljZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHRoZSBzZXJpYWwgcG9ydFxuICAgKiBAcGFyYW0ge2FueX0gZGF0YSBBcnJheUJ1ZmZlciBvZiBkYXRhXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdoZW4gZGF0YSBoYXMgYmVlbiB3cml0dGVuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICB3cml0ZShkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSBhdmFpbGFibGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb250YWlucyB0aGUgYXZhaWxhYmxlIGJ5dGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICBhdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgZGF0YSBmcm9tIHRoZSBidWZmZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2Ugd2l0aCBkYXRhIGZyb20gdGhlIGJ1ZmZlclxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ11cbiAgfSlcbiAgcmVhZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyBkYXRhIGZyb20gdGhlIGJ1ZmZlciB1bnRpbCBpdCByZWFjaGVzIGEgZGVsaW1pdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gc2VhcmNoIHVudGlsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICByZWFkVW50aWwoZGVsaW1pdGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYmUgbm90aWZpZWQgd2hlbiBkYXRhIGlzIHJlY2VpdmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgdGhlIHN0cmluZyB5b3Ugd2FudCB0byB3YXRjaCBmb3JcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnXG4gIH0pXG4gIHN1YnNjcmliZShkZWxpbWl0ZXI6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCB3aGVuIGRhdGEgaXMgcmVjZWl2ZWRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gcmV0dXJucyBhbiBvYnNlcnZhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICd1bnN1YnNjcmliZVJhd0RhdGEnXG4gIH0pXG4gIHN1YnNjcmliZVJhd0RhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGRhdGEgaW4gYnVmZmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdoZW4gY29tcGxldGVkXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0cyBib25kZWQgZGV2aWNlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ11cbiAgfSlcbiAgbGlzdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIGlmIGJsdWV0b290aCBpcyBlbmFibGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0cyB0aGUgY29ubmVjdGlvbiBzdGF0dXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddXG4gIH0pXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBSU1NJIGZyb20gdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXVxuICB9KVxuICByZWFkUlNTSSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBCbHVldG9vdGggc2V0dGluZ3Mgb24gdGhlIGRldmljZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ11cbiAgfSlcbiAgc2hvd0JsdWV0b290aFNldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBCbHVldG9vdGggb24gdGhlIGRldmljZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ11cbiAgfSlcbiAgZW5hYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2NvdmVyIHVucGFpcmVkIGRldmljZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddXG4gIH0pXG4gIGRpc2NvdmVyVW5wYWlyZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGJlIG5vdGlmaWVkIG9uIEJsdWV0b290aCBkZXZpY2UgZGlzY292ZXJ5LiBEaXNjb3ZlcnkgcHJvY2VzcyBtdXN0IGJlIGluaXRpYXRlZCB3aXRoIHRoZSBgZGlzY292ZXJVbnBhaXJlZGAgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2xlYXJEZXZpY2VEaXNjb3ZlcmVkTGlzdGVuZXInXG4gIH0pXG4gIHNldERldmljZURpc2NvdmVyZWRMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBodW1hbiByZWFkYWJsZSBkZXZpY2UgbmFtZSB0aGF0IGlzIGJyb2FkY2FzdGVkIHRvIG90aGVyIGRldmljZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld05hbWUgRGVzaXJlZCBuYW1lIG9mIGRldmljZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzZXROYW1lKG5ld05hbWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogTWFrZXMgdGhlIGRldmljZSBkaXNjb3ZlcmFibGUgYnkgb3RoZXIgZGV2aWNlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlzY292ZXJhYmxlRHVyYXRpb24gRGVzaXJlZCBudW1iZXIgb2Ygc2Vjb25kcyBkZXZpY2Ugc2hvdWxkIGJlIGRpc2NvdmVyYWJsZSBmb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgc2V0RGlzY292ZXJhYmxlKGRpc2NvdmVyYWJsZUR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");










var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"],
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_8__["TabsPage"]],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_7__["BluetoothSerial"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_2__["LaunchNavigator"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>Info</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>List Stations</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"send\"></ion-icon>\n      <ion-label>Third Tab</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");





var TabsPage = /** @class */ (function () {
    function TabsPage(
    // public loadingController: LoadingController,
    geolocation, bs, 
    // public navCtrl: NavController,
    alertCtrl, toastCtrl) {
        this.geolocation = geolocation;
        this.bs = bs;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.listToggle = false;
        this.pairedDeviceID = 0;
        this.dataSend = "";
        this.dataReceived = "";
        this.logData = [];
        // this.presentToast("consdd");
        // this.presentToast("const");
        console.log("works");
        this.checkBluetoothEnabled();
    }
    TabsPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.checkBluetoothEnabled = function () {
        var _this = this;
        this.bs.isEnabled().then(function (success) {
            // this.presentToast("the blue tooth is enabled");
            // this.presentToast("the blue tooth is enabled");
            _this.listPairedDevices();
        }, function (error) {
            console.log(error);
            _this.presentToast("bluetooth enabled error");
            if (_this.bs.available) {
                _this.bs
                    .enable()
                    .then(function () {
                    _this.listPairedDevices();
                })
                    .catch(function (err) {
                    _this.presentToast("Unable to Start Bluetooth");
                });
            }
            else {
                _this.presentToast("Bluetooth not available");
            }
        });
    };
    TabsPage.prototype.parseData = function (data) {
        if (!data) {
            console.log("Some data recieved");
            console.log(data);
        }
        else {
            var _a = data.split(","), mac = _a[0], ts = _a[1], batteryPercent = _a[2], amp = _a[3];
            var dataobj = { mac: mac, ts: ts, batteryPercent: batteryPercent, amp: amp };
            this.logData.push(dataobj);
        }
    };
    TabsPage.prototype.errorParse = function (data) {
        if (!data) {
            console.log("Some error");
        }
        else {
        }
    };
    //-l -c -s
    TabsPage.prototype.connectToDevice = function (devices) {
        var _this = this;
        // find BLE_PI
        var connectTo = devices.filter(function (device) { return device.name === "BLE_PI"; });
        this.bs.connect(connectTo[0].address).subscribe(function (d) {
            console.log(d);
            // this.presentToast("bluetooth connected");
            // this.bs.subscribeRawData().subscribe(d=>{console.log(d);this.parseData(d)},this.errorParse);
            _this.bs.subscribe('\n').subscribe(function (d) { console.log(d); _this.parseData(d); }, _this.parseData);
            // this.bs.read().then(this.parseData).catch(this.parseData);
        }, function (err) {
            // this.presentToast(err);
        });
        // this.presentToast(JSON.stringify(devices));
        // devices.map(console.log);
    };
    TabsPage.prototype.listPairedDevices = function () {
        var _this = this;
        this.bs.list().then(function (success) {
            // this.presentToast("listPaireddevices: success")
            // this.presentToast(JSON.stringify(success));
            _this.pairedList = success;
            // this.presentToast(JSON.stringify(this.pairedList));
            _this.connectToDevice(success);
            _this.listToggle = true;
        }, function (error) {
            _this.presentToast(JSON.stringify(error));
            _this.presentToast("Please Enable Bluetooth");
            _this.bs.enable();
            _this.listToggle = false;
        });
    };
    TabsPage.prototype.showError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Alert",
                            subHeader: error,
                            buttons: ["Dismiss"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-tabs",
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_1__["BluetoothSerial"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map