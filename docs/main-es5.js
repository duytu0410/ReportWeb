function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent, lineChartSeries, barChart */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lineChartSeries", function () {
      return lineChartSeries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "barChart", function () {
      return barChart;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_report_sale_report_sale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/report-sale/report-sale.component */
    "./src/app/components/report-sale/report-sale.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.view = [500, 400];
      this.showXAxis = true;
      this.showYAxis = true;
      this.gradient = false;
      this.showLegend = true;
      this.legendTitle = 'Legend';
      this.legendPosition = 'right';
      this.showXAxisLabel = true;
      this.xAxisLabel = 'Country';
      this.showYAxisLabel = true;
      this.yAxisLabel = 'GDP Per Capita';
      this.showGridLines = true;
      this.innerPadding = '10%';
      this.animations = true;
      this.barChart = barChart;
      this.lineChartSeries = lineChartSeries;
      this.lineChartScheme = {
        name: 'coolthree',
        selectable: true,
        group: 'Ordinal',
        domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
      };
      this.comboBarScheme = {
        name: 'singleLightBlue',
        selectable: true,
        group: 'Ordinal',
        domain: ['#01579b']
      };
      this.showRightYAxisLabel = true;
      this.yAxisLabelRight = 'Utilization';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-report-sale");
        }
      },
      directives: [_components_report_sale_report_sale_component__WEBPACK_IMPORTED_MODULE_1__["ReportSaleComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();

    var lineChartSeries = [{
      name: 'Computers',
      series: [{
        value: 2,
        name: 'USA'
      }, {
        value: 4,
        name: 'United Kingdom'
      }, {
        value: 20,
        name: 'France'
      }, {
        value: 30,
        name: 'Japan'
      }, {
        value: 35,
        name: 'China'
      }]
    }];
    var barChart = [{
      name: 'USA',
      value: 50000
    }, {
      name: 'United Kingdom',
      value: 30000
    }, {
      name: 'France',
      value: 10000
    }, {
      name: 'Japan',
      value: 5000
    }, {
      name: 'China',
      value: 500
    }];
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pipe_formatpipe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pipe/formatpipe.pipe */
    "./src/app/pipe/formatpipe.pipe.ts");
    /* harmony import */


    var _pipe_filterpipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pipe/filterpipe.pipe */
    "./src/app/pipe/filterpipe.pipe.ts");
    /* harmony import */


    var _service_logging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/logging.service */
    "./src/app/service/logging.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_combo_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/combo-chart */
    "./src/app/components/combo-chart/index.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _service_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_report_sale_report_sale_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/report-sale/report-sale.component */
    "./src/app/components/report-sale/report-sale.component.ts"); // const appRoutes:Routes=[
    //   {
    //     path:'/movie',
    //     component:Movie
    //   },
    //   {
    //     path:'/movielist',
    //     component:MovieListComponent,
    //   },
    //   {
    //     path:'/movieadd',
    //     component:MovieAddComponent
    //   },
    // ];


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_logging_service__WEBPACK_IMPORTED_MODULE_8__["LoggingService"], _service_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"] // RouterModule.forRoot(appRoutes)
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pipe_formatpipe_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatpipePipe"], _pipe_filterpipe_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterpipePipe"], _components_report_sale_report_sale_component__WEBPACK_IMPORTED_MODULE_15__["ReportSaleComponent"], _components_combo_chart__WEBPACK_IMPORTED_MODULE_10__["ComboChartComponent"], _components_combo_chart__WEBPACK_IMPORTED_MODULE_10__["ComboSeriesVerticalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"] // RouterModule.forRoot(appRoutes)
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pipe_formatpipe_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatpipePipe"], _pipe_filterpipe_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterpipePipe"], _components_report_sale_report_sale_component__WEBPACK_IMPORTED_MODULE_15__["ReportSaleComponent"], _components_combo_chart__WEBPACK_IMPORTED_MODULE_10__["ComboChartComponent"], _components_combo_chart__WEBPACK_IMPORTED_MODULE_10__["ComboSeriesVerticalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"] // RouterModule.forRoot(appRoutes)
          ],
          providers: [_service_logging_service__WEBPACK_IMPORTED_MODULE_8__["LoggingService"], _service_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/combo-chart/combo-chart.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/combo-chart/combo-chart.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ComboChartComponent */

  /***/
  function srcAppComponentsComboChartComboChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboChartComponent", function () {
      return ComboChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3-shape */
    "./node_modules/d3-shape/src/index.js");
    /* harmony import */


    var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3-scale */
    "./node_modules/d3-scale/src/index.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./combo-series-vertical.component */
    "./src/app/components/combo-chart/combo-series-vertical.component.ts");

    var _c0 = ["tooltipTemplate"];
    var _c1 = ["seriesTooltipTemplate"];

    function ComboChartComponent__svg_g_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dimensionsChanged", function ComboChartComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.updateXAxisHeight($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("tickFormatting", ctx_r0.xAxisTickFormatting);
      }
    }

    function ComboChartComponent__svg_g_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dimensionsChanged", function ComboChartComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.updateYAxisWidth($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("yOrient", ctx_r1.yOrientLeft)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("tickFormatting", ctx_r1.yAxisTickFormatting);
      }
    }

    function ComboChartComponent__svg_g_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dimensionsChanged", function ComboChartComponent__svg_g_4_Template__svg_g_dimensionsChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.updateYAxisWidth($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("yScale", ctx_r2.yScaleLine)("dims", ctx_r2.dims)("yOrient", ctx_r2.yOrientRight)("showGridLines", ctx_r2.showGridLines)("showLabel", ctx_r2.showRightYAxisLabel)("labelText", ctx_r2.yAxisLabelRight)("tickFormatting", ctx_r2.yRightAxisTickFormatting);
      }
    }

    function ComboChartComponent__svg_g_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "g", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var series_r12 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xScale", ctx_r3.xScaleLine)("yScale", ctx_r3.yScaleLine)("colors", ctx_r3.colorsLine)("data", series_r12)("activeEntries", ctx_r3.activeEntries)("scaleType", ctx_r3.scaleType)("curve", ctx_r3.curve)("rangeFillOpacity", ctx_r3.rangeFillOpacity)("animations", ctx_r3.animations);
      }
    }

    function ComboChartComponent__svg_g_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hover", function ComboChartComponent__svg_g_9_Template__svg_g_hover_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.updateHoveredVertical($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dims", ctx_r4.dims)("xSet", ctx_r4.xSet)("xScale", ctx_r4.xScaleLine)("yScale", ctx_r4.yScaleLine)("results", ctx_r4.combinedSeries)("colors", ctx_r4.colorsLine)("tooltipDisabled", ctx_r4.tooltipDisabled);
      }
    }

    function ComboChartComponent__svg_g_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ComboChartComponent__svg_g_10_Template__svg_g_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onClick($event);
        })("activate", function ComboChartComponent__svg_g_10_Template__svg_g_activate_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onActivate($event);
        })("deactivate", function ComboChartComponent__svg_g_10_Template__svg_g_deactivate_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onDeactivate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var series_r15 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xScale", ctx_r5.xScaleLine)("yScale", ctx_r5.yScaleLine)("colors", ctx_r5.colorsLine)("data", series_r15)("scaleType", ctx_r5.scaleType)("visibleValue", ctx_r5.hoveredVertical)("activeEntries", ctx_r5.activeEntries)("tooltipDisabled", ctx_r5.tooltipDisabled);
      }
    }

    var _c2 = function _c2(a0, a1) {
      return [a0, a1];
    };

    var ComboChartComponent =
    /*#__PURE__*/
    function (_swimlane_ngx_charts_) {
      _inherits(ComboChartComponent, _swimlane_ngx_charts_);

      function ComboChartComponent() {
        var _this;

        _classCallCheck(this, ComboChartComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboChartComponent).apply(this, arguments));
        _this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveLinear"];
        _this.legend = false;
        _this.legendTitle = 'Legend';
        _this.legendPosition = 'right';
        _this.tooltipDisabled = false;
        _this.showGridLines = true;
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.animations = true;
        _this.noBarWhenZero = true;
        _this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.deactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.scaleType = 'linear';
        _this.yOrientLeft = 'left';
        _this.yOrientRight = 'right';
        _this.legendSpacing = 0;
        _this.barPadding = 8;
        return _this;
      }

      _createClass(ComboChartComponent, [{
        key: "trackBy",
        value: function trackBy(index, item) {
          return item.name;
        }
      }, {
        key: "update",
        value: function update() {
          _get(_getPrototypeOf(ComboChartComponent.prototype), "update", this).call(this);

          this.dims = Object(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
          });

          if (!this.yAxis) {
            this.legendSpacing = 0;
          } else if (this.showYAxisLabel && this.yAxis) {
            this.legendSpacing = 100;
          } else {
            this.legendSpacing = 40;
          }

          this.xScale = this.getXScale();
          this.yScale = this.getYScale(); // line chart

          this.xDomainLine = this.getXDomainLine();

          if (this.filteredDomain) {
            this.xDomainLine = this.filteredDomain;
          }

          this.yDomainLine = this.getYDomainLine();
          this.seriesDomain = this.getSeriesDomain();
          this.scaleLines();
          this.setColors();
          this.legendOptions = this.getLegendOptions();
          this.transform = "translate(".concat(this.dims.xOffset, " , ").concat(this.margin[0], ")");
        }
      }, {
        key: "deactivateAll",
        value: function deactivateAll() {
          this.activeEntries = _toConsumableArray(this.activeEntries);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.activeEntries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var entry = _step.value;
              this.deactivate.emit({
                value: entry,
                entries: []
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.activeEntries = [];
        }
      }, {
        key: "hideCircles",
        value: function hideCircles() {
          this.hoveredVertical = null;
          this.deactivateAll();
        }
      }, {
        key: "updateHoveredVertical",
        value: function updateHoveredVertical(item) {
          this.hoveredVertical = item.value;
          this.deactivateAll();
        }
      }, {
        key: "updateDomain",
        value: function updateDomain(domain) {
          this.filteredDomain = domain;
          this.xDomainLine = this.filteredDomain;
          this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        }
      }, {
        key: "scaleLines",
        value: function scaleLines() {
          this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
          this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
        }
      }, {
        key: "getSeriesDomain",
        value: function getSeriesDomain() {
          this.combinedSeries = this.lineChart.slice(0);
          this.combinedSeries.push({
            name: this.yAxisLabel,
            series: this.results
          });
          return this.combinedSeries.map(function (d) {
            return d.name;
          });
        }
      }, {
        key: "isDate",
        value: function isDate(value) {
          if (value instanceof Date) {
            return true;
          }

          return false;
        }
      }, {
        key: "getScaleType",
        value: function getScaleType(values) {
          var date = true;
          var num = true;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var value = _step2.value;

              if (!this.isDate(value)) {
                date = false;
              }

              if (typeof value !== 'number') {
                num = false;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (date) return 'time';
          if (num) return 'linear';
          return 'ordinal';
        }
      }, {
        key: "getXDomainLine",
        value: function getXDomainLine() {
          var values = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.lineChart[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var results = _step3.value;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = results.series[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var d = _step4.value;

                  if (!values.includes(d.name)) {
                    values.push(d.name);
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          this.scaleType = this.getScaleType(values);
          var domain = [];

          if (this.scaleType === 'time') {
            var min = Math.min.apply(Math, _toConsumableArray(values));
            var max = Math.max.apply(Math, _toConsumableArray(values));
            domain = [min, max];
          } else if (this.scaleType === 'linear') {
            values = values.map(function (v) {
              return Number(v);
            });

            var _min = Math.min.apply(Math, _toConsumableArray(values));

            var _max = Math.max.apply(Math, _toConsumableArray(values));

            domain = [_min, _max];
          } else {
            domain = values;
          }

          this.xSet = values;
          return domain;
        }
      }, {
        key: "getYDomainLine",
        value: function getYDomainLine() {
          var domain = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.lineChart[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var results = _step5.value;
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = results.series[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var d = _step6.value;

                  if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                  }

                  if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                      domain.push(d.min);
                    }
                  }

                  if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                      domain.push(d.max);
                    }
                  }
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          var min = Math.min.apply(Math, domain);
          var max = Math.max.apply(Math, domain);

          if (this.yRightAxisScaleFactor) {
            var minMax = this.yRightAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
          } else {
            min = Math.min(0, min);
            return [min, max];
          }
        }
      }, {
        key: "getXScaleLine",
        value: function getXScaleLine(domain, width) {
          var scale;

          if (this.bandwidth === undefined) {
            this.bandwidth = width - this.barPadding;
          }

          var offset = Math.floor((width + this.barPadding - (this.bandwidth + this.barPadding) * domain.length) / 2);

          if (this.scaleType === 'time') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleTime"])().range([0, width]).domain(domain);
          } else if (this.scaleType === 'linear') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([0, width]).domain(domain);

            if (this.roundDomains) {
              scale = scale.nice();
            }
          } else if (this.scaleType === 'ordinal') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scalePoint"])().range([offset + this.bandwidth / 2, width - offset - this.bandwidth / 2]).domain(domain);
          }

          return scale;
        }
      }, {
        key: "getYScaleLine",
        value: function getYScaleLine(domain, height) {
          var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([height, 0]).domain(domain);
          return this.roundDomains ? scale.nice() : scale;
        }
      }, {
        key: "getXScale",
        value: function getXScale() {
          this.xDomain = this.getXDomain();
          var spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
          return Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"])().range([0, this.dims.width]).paddingInner(spacing).domain(this.xDomain);
        }
      }, {
        key: "getYScale",
        value: function getYScale() {
          this.yDomain = this.getYDomain();
          var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([this.dims.height, 0]).domain(this.yDomain);
          return this.roundDomains ? scale.nice() : scale;
        }
      }, {
        key: "getXDomain",
        value: function getXDomain() {
          return this.results.map(function (d) {
            return d.name;
          });
        }
      }, {
        key: "getYDomain",
        value: function getYDomain() {
          var values = this.results.map(function (d) {
            return d.value;
          });
          var min = Math.min.apply(Math, [0].concat(_toConsumableArray(values)));
          var max = Math.max.apply(Math, _toConsumableArray(values));

          if (this.yLeftAxisScaleFactor) {
            var minMax = this.yLeftAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
          } else {
            return [min, max];
          }
        }
      }, {
        key: "onClick",
        value: function onClick(data) {
          this.select.emit(data);
        }
      }, {
        key: "setColors",
        value: function setColors() {
          var domain;

          if (this.schemeType === 'ordinal') {
            domain = this.xDomain;
          } else {
            domain = this.yDomain;
          }

          this.colors = new _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
          this.colorsLine = new _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["ColorHelper"](this.colorSchemeLine, this.schemeType, domain, this.customColors);
        }
      }, {
        key: "getLegendOptions",
        value: function getLegendOptions() {
          var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
          };

          if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colorsLine;
            opts.title = this.legendTitle;
          } else {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors.scale;
          }

          return opts;
        }
      }, {
        key: "updateLineWidth",
        value: function updateLineWidth(width) {
          this.bandwidth = width;
          this.scaleLines();
        }
      }, {
        key: "updateYAxisWidth",
        value: function updateYAxisWidth(_ref) {
          var width = _ref.width;
          this.yAxisWidth = width + 20;
          this.update();
        }
      }, {
        key: "updateXAxisHeight",
        value: function updateXAxisHeight(_ref2) {
          var height = _ref2.height;
          this.xAxisHeight = height;
          this.update();
        }
      }, {
        key: "onActivate",
        value: function onActivate(item) {
          var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
          });

          if (idx > -1) {
            return;
          }

          this.activeEntries = [item].concat(_toConsumableArray(this.activeEntries));
          this.activate.emit({
            value: item,
            entries: this.activeEntries
          });
        }
      }, {
        key: "onDeactivate",
        value: function onDeactivate(item) {
          var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
          });
          this.activeEntries.splice(idx, 1);
          this.activeEntries = _toConsumableArray(this.activeEntries);
          this.deactivate.emit({
            value: item,
            entries: this.activeEntries
          });
        }
      }]);

      return ComboChartComponent;
    }(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartComponent"]);

    ComboChartComponent.ɵfac = function ComboChartComponent_Factory(t) {
      return ɵComboChartComponent_BaseFactory(t || ComboChartComponent);
    };

    ComboChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComboChartComponent,
      selectors: [["combo-chart-component"]],
      contentQueries: function ComboChartComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.seriesTooltipTemplate = _t.first);
        }
      },
      viewQuery: function ComboChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeriesComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineSeriesComponent = _t.first);
        }
      },
      hostBindings: function ComboChartComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ComboChartComponent_mouseleave_HostBindingHandler($event) {
            return ctx.hideCircles();
          });
        }
      },
      inputs: {
        curve: "curve",
        legend: "legend",
        legendTitle: "legendTitle",
        legendPosition: "legendPosition",
        xAxis: "xAxis",
        yAxis: "yAxis",
        showXAxisLabel: "showXAxisLabel",
        showYAxisLabel: "showYAxisLabel",
        showRightYAxisLabel: "showRightYAxisLabel",
        xAxisLabel: "xAxisLabel",
        yAxisLabel: "yAxisLabel",
        yAxisLabelRight: "yAxisLabelRight",
        tooltipDisabled: "tooltipDisabled",
        gradient: "gradient",
        showGridLines: "showGridLines",
        activeEntries: "activeEntries",
        schemeType: "schemeType",
        xAxisTickFormatting: "xAxisTickFormatting",
        yAxisTickFormatting: "yAxisTickFormatting",
        yRightAxisTickFormatting: "yRightAxisTickFormatting",
        roundDomains: "roundDomains",
        colorSchemeLine: "colorSchemeLine",
        autoScale: "autoScale",
        lineChart: "lineChart",
        yLeftAxisScaleFactor: "yLeftAxisScaleFactor",
        yRightAxisScaleFactor: "yRightAxisScaleFactor",
        rangeFillOpacity: "rangeFillOpacity",
        animations: "animations",
        noBarWhenZero: "noBarWhenZero"
      },
      outputs: {
        activate: "activate",
        deactivate: "deactivate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 11,
      vars: 27,
      consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "tickFormatting", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "yOrient", "showGridLines", "showLabel", "labelText", "tickFormatting", "dimensionsChanged", 4, "ngIf"], ["ngx-combo-charts-series-vertical", "", "tooltipDisabled", "true", 3, "xScale", "yScale", "colors", "series", "seriesLine", "dims", "gradient", "activeEntries", "animations", "noBarWhenZero", "activate", "deactivate", "bandwidth", "select"], [1, "line-chart", "chart"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "hover", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "tickFormatting", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "yOrient", "showGridLines", "showLabel", "labelText", "tickFormatting", "dimensionsChanged"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "animations"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "hover"], ["ngx-charts-circle-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "visibleValue", "activeEntries", "tooltipDisabled", "select", "activate", "deactivate"]],
      template: function ComboChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-chart", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("legendLabelClick", function ComboChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) {
            return ctx.onClick($event);
          })("legendLabelActivate", function ComboChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) {
            return ctx.onActivate($event);
          })("legendLabelDeactivate", function ComboChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) {
            return ctx.onDeactivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComboChartComponent__svg_g_2_Template, 1, 5, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComboChartComponent__svg_g_3_Template, 1, 7, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComboChartComponent__svg_g_4_Template, 1, 7, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function ComboChartComponent_Template__svg_g_activate_5_listener($event) {
            return ctx.onActivate($event);
          })("deactivate", function ComboChartComponent_Template__svg_g_deactivate_5_listener($event) {
            return ctx.onDeactivate($event);
          })("bandwidth", function ComboChartComponent_Template__svg_g_bandwidth_5_listener($event) {
            return ctx.updateLineWidth($event);
          })("select", function ComboChartComponent_Template__svg_g_select_5_listener($event) {
            return ctx.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ComboChartComponent__svg_g_8_Template, 2, 9, "g", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComboChartComponent__svg_g_9_Template, 1, 7, "g", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ComboChartComponent__svg_g_10_Template, 2, 8, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c2, ctx.width + ctx.legendSpacing, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.transform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.xAxis);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yAxis);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yAxis);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xScale", ctx.xScale)("yScale", ctx.yScale)("colors", ctx.colors)("series", ctx.results)("seriesLine", ctx.lineChart)("dims", ctx.dims)("gradient", ctx.gradient)("activeEntries", ctx.activeEntries)("animations", ctx.animations)("noBarWhenZero", ctx.noBarWhenZero);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", ctx.transform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lineChart)("ngForTrackBy", ctx.trackBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tooltipDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lineChart);
        }
      },
      directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_5__["ComboSeriesVerticalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["XAxisComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["YAxisComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeriesComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["TooltipArea"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["CircleSeriesComponent"]],
      styles: [".ngx-charts {\n  float: left;\n  overflow: visible;\n}\n.ngx-charts .circle,\n.ngx-charts .bar,\n.ngx-charts .arc {\n  cursor: pointer;\n}\n.ngx-charts .bar.active, .ngx-charts .bar:hover,\n.ngx-charts .cell.active,\n.ngx-charts .cell:hover,\n.ngx-charts .arc.active,\n.ngx-charts .arc:hover,\n.ngx-charts .card.active,\n.ngx-charts .card:hover {\n  opacity: 0.8;\n  -webkit-transition: opacity 100ms ease-in-out;\n  transition: opacity 100ms ease-in-out;\n}\n.ngx-charts .bar:focus,\n.ngx-charts .cell:focus,\n.ngx-charts .arc:focus,\n.ngx-charts .card:focus {\n  outline: none;\n}\n.ngx-charts .bar.hidden,\n.ngx-charts .cell.hidden,\n.ngx-charts .arc.hidden,\n.ngx-charts .card.hidden {\n  display: none;\n}\n.ngx-charts g:focus {\n  outline: none;\n}\n.ngx-charts .line-series.inactive,\n.ngx-charts .line-series-range.inactive,\n.ngx-charts .area-series.inactive {\n  -webkit-transition: opacity 100ms ease-in-out;\n  transition: opacity 100ms ease-in-out;\n  opacity: 0.2;\n}\n.ngx-charts .line-highlight {\n  display: none;\n}\n.ngx-charts .line-highlight.active {\n  display: block;\n}\n.ngx-charts .area {\n  opacity: 0.6;\n}\n.ngx-charts .circle:hover {\n  cursor: pointer;\n}\n.ngx-charts .label {\n  font-size: 12px;\n  font-weight: normal;\n}\n.ngx-charts .tooltip-anchor {\n  fill: black;\n}\n.ngx-charts .gridline-path {\n  stroke: #ddd;\n  stroke-width: 1;\n  fill: none;\n}\n.ngx-charts .grid-panel rect {\n  fill: none;\n}\n.ngx-charts .grid-panel.odd rect {\n  fill: rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21iby1jaGFydC9DOlxcVXNlcnNcXEFETUlOXFxEZXNrdG9wXFxBbmd1bGFyXFxSZXBvcnRlZFdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tYm8tY2hhcnRcXGNvbWJvLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbWJvLWNoYXJ0L2NvbWJvLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTs7O0VBR0UsZUFBQTtBQ0NOO0FETU07Ozs7Ozs7RUFFRSxZQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ0NSO0FERU07Ozs7RUFDRSxhQUFBO0FDR1I7QURETTs7OztFQUNFLGFBQUE7QUNNUjtBRERNO0VBQ0UsYUFBQTtBQ0dSO0FESU07OztFQUNFLDZDQUFBO0VBQUEscUNBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNFLGFBQUE7QUNGTjtBRElNO0VBQ0UsY0FBQTtBQ0ZSO0FETUk7RUFDRSxZQUFBO0FDSk47QURRTTtFQUNFLGVBQUE7QUNOUjtBRFVJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDUk47QURXSTtFQUNFLFdBQUE7QUNUTjtBRFlJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDVk47QURjTTtFQUNFLFVBQUE7QUNaUjtBRGdCUTtFQUNFLHlCQUFBO0FDZFYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbWJvLWNoYXJ0L2NvbWJvLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1jaGFydHMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBcclxuICAgIC5jaXJjbGUsXHJcbiAgICAuYmFyLFxyXG4gICAgLmFyYyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5iYXIsXHJcbiAgICAuY2VsbCxcclxuICAgIC5hcmMsXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICYuYWN0aXZlLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnIHtcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxpbmUtc2VyaWVzLFxyXG4gICAgLmxpbmUtc2VyaWVzLXJhbmdlLFxyXG4gICAgLmFyZWEtc2VyaWVzIHtcclxuICAgICAgJi5pbmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5saW5lLWhpZ2hsaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFyZWEge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudG9vbHRpcC1hbmNob3Ige1xyXG4gICAgICBmaWxsOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZ3JpZGxpbmUtcGF0aCB7XHJcbiAgICAgIHN0cm9rZTogI2RkZDtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiAxO1xyXG4gICAgICBmaWxsOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmdyaWQtcGFuZWwge1xyXG4gICAgICByZWN0IHtcclxuICAgICAgICBmaWxsOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYub2RkIHtcclxuICAgICAgICByZWN0IHtcclxuICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi5uZ3gtY2hhcnRzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLm5neC1jaGFydHMgLmNpcmNsZSxcbi5uZ3gtY2hhcnRzIC5iYXIsXG4ubmd4LWNoYXJ0cyAuYXJjIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5neC1jaGFydHMgLmJhci5hY3RpdmUsIC5uZ3gtY2hhcnRzIC5iYXI6aG92ZXIsXG4ubmd4LWNoYXJ0cyAuY2VsbC5hY3RpdmUsXG4ubmd4LWNoYXJ0cyAuY2VsbDpob3Zlcixcbi5uZ3gtY2hhcnRzIC5hcmMuYWN0aXZlLFxuLm5neC1jaGFydHMgLmFyYzpob3Zlcixcbi5uZ3gtY2hhcnRzIC5jYXJkLmFjdGl2ZSxcbi5uZ3gtY2hhcnRzIC5jYXJkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLm5neC1jaGFydHMgLmJhcjpmb2N1cyxcbi5uZ3gtY2hhcnRzIC5jZWxsOmZvY3VzLFxuLm5neC1jaGFydHMgLmFyYzpmb2N1cyxcbi5uZ3gtY2hhcnRzIC5jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uZ3gtY2hhcnRzIC5iYXIuaGlkZGVuLFxuLm5neC1jaGFydHMgLmNlbGwuaGlkZGVuLFxuLm5neC1jaGFydHMgLmFyYy5oaWRkZW4sXG4ubmd4LWNoYXJ0cyAuY2FyZC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5neC1jaGFydHMgZzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubmd4LWNoYXJ0cyAubGluZS1zZXJpZXMuaW5hY3RpdmUsXG4ubmd4LWNoYXJ0cyAubGluZS1zZXJpZXMtcmFuZ2UuaW5hY3RpdmUsXG4ubmd4LWNoYXJ0cyAuYXJlYS1zZXJpZXMuaW5hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjI7XG59XG4ubmd4LWNoYXJ0cyAubGluZS1oaWdobGlnaHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5neC1jaGFydHMgLmxpbmUtaGlnaGxpZ2h0LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5neC1jaGFydHMgLmFyZWEge1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubmd4LWNoYXJ0cyAuY2lyY2xlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5neC1jaGFydHMgLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm5neC1jaGFydHMgLnRvb2x0aXAtYW5jaG9yIHtcbiAgZmlsbDogYmxhY2s7XG59XG4ubmd4LWNoYXJ0cyAuZ3JpZGxpbmUtcGF0aCB7XG4gIHN0cm9rZTogI2RkZDtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBmaWxsOiBub25lO1xufVxuLm5neC1jaGFydHMgLmdyaWQtcGFuZWwgcmVjdCB7XG4gIGZpbGw6IG5vbmU7XG59XG4ubmd4LWNoYXJ0cyAuZ3JpZC1wYW5lbC5vZGQgcmVjdCB7XG4gIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59Il19 */"],
      encapsulation: 2
    });

    var ɵComboChartComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ComboChartComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComboChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'combo-chart-component',
          templateUrl: './combo-chart.component.html',
          styleUrls: ['./combo-chart.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        curve: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legendTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        legendPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showXAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showYAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showRightYAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yAxisLabelRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showGridLines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeEntries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        schemeType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xAxisTickFormatting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yAxisTickFormatting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yRightAxisTickFormatting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roundDomains: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorSchemeLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lineChart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yLeftAxisScaleFactor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yRightAxisScaleFactor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rangeFillOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noBarWhenZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['tooltipTemplate']
        }],
        seriesTooltipTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: ['seriesTooltipTemplate']
        }],
        lineSeriesComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeriesComponent"]]
        }],
        hideCircles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/combo-chart/combo-series-vertical.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/combo-chart/combo-series-vertical.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ComboSeriesVerticalComponent */

  /***/
  function srcAppComponentsComboChartComboSeriesVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboSeriesVerticalComponent", function () {
      return ComboSeriesVerticalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["ngx-combo-charts-series-vertical", ""];

    function ComboSeriesVerticalComponent__svg_g_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_select_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.onClick($event);
        })("activate", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_activate_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.activate.emit($event);
        })("deactivate", function ComboSeriesVerticalComponent__svg_g_0_Template__svg_g_deactivate_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.deactivate.emit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bar_r21 = ctx.$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animationState", "active")("width", bar_r21.width)("height", bar_r21.height)("x", bar_r21.x)("y", bar_r21.y)("fill", bar_r21.color)("stops", bar_r21.gradientStops)("data", bar_r21.data)("orientation", "vertical")("roundEdges", bar_r21.roundEdges)("gradient", ctx_r20.gradient)("isActive", ctx_r20.isActive(bar_r21.data))("animations", ctx_r20.animations)("noBarWhenZero", ctx_r20.noBarWhenZero)("tooltipDisabled", ctx_r20.tooltipDisabled)("tooltipPlacement", "top")("tooltipType", "tooltip")("tooltipTitle", bar_r21.tooltipText);
      }
    }

    var ComboSeriesVerticalComponent =
    /*#__PURE__*/
    function () {
      function ComboSeriesVerticalComponent() {
        _classCallCheck(this, ComboSeriesVerticalComponent);

        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.noBarWhenZero = true;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bandwidth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ComboSeriesVerticalComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.update();
        }
      }, {
        key: "update",
        value: function update() {
          var _this2 = this;

          var width;

          if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
          }

          var d0 = 0;
          var total;

          if (this.type === 'normalized') {
            total = this.series.map(function (d) {
              return d.value;
            }).reduce(function (sum, d) {
              return sum + d;
            }, 0);
          }

          this.bars = this.series.map(function (d, index) {
            var value = d.value;
            var label = d.name;
            var formattedLabel = Object(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["formatLabel"])(label);
            var roundEdges = _this2.type === 'standard';
            var bar = {
              value: value,
              label: label,
              roundEdges: roundEdges,
              data: d,
              width: width,
              formattedLabel: formattedLabel,
              height: 0,
              x: 0,
              y: 0
            };

            if (_this2.type === 'standard') {
              bar.height = Math.abs(_this2.yScale(value) - _this2.yScale(0));
              bar.x = _this2.xScale(label);

              if (value < 0) {
                bar.y = _this2.yScale(0);
              } else {
                bar.y = _this2.yScale(value);
              }
            } else if (_this2.type === 'stacked') {
              var offset0 = d0;
              var offset1 = offset0 + value;
              d0 += value;
              bar.height = _this2.yScale(offset0) - _this2.yScale(offset1);
              bar.x = 0;
              bar.y = _this2.yScale(offset1);
              bar.offset0 = offset0;
              bar.offset1 = offset1;
            } else if (_this2.type === 'normalized') {
              var _offset = d0;

              var _offset2 = _offset + value;

              d0 += value;

              if (total > 0) {
                _offset = _offset * 100 / total;
                _offset2 = _offset2 * 100 / total;
              } else {
                _offset = 0;
                _offset2 = 0;
              }

              bar.height = _this2.yScale(_offset) - _this2.yScale(_offset2);
              bar.x = 0;
              bar.y = _this2.yScale(_offset2);
              bar.offset0 = _offset;
              bar.offset1 = _offset2;
              value = (_offset2 - _offset).toFixed(2) + '%';
            }

            if (_this2.colors.scaleType === 'ordinal') {
              bar.color = _this2.colors.getColor(label);
            } else {
              if (_this2.type === 'standard') {
                bar.color = _this2.colors.getColor(value);
                bar.gradientStops = _this2.colors.getLinearGradientStops(value);
              } else {
                bar.color = _this2.colors.getColor(bar.offset1);
                bar.gradientStops = _this2.colors.getLinearGradientStops(bar.offset1, bar.offset0);
              }
            }

            var tooltipLabel = formattedLabel;

            if (_this2.seriesName) {
              tooltipLabel = "".concat(_this2.seriesName, " \u2022 ").concat(formattedLabel);
            }

            _this2.getSeriesTooltips(_this2.seriesLine, index);

            var lineValue = _this2.seriesLine[0].series[index].value;
            bar.tooltipText = "\n        <span class=\"tooltip-label\">".concat(tooltipLabel, "</span>\n        <span class=\"tooltip-val\"> Y1 - ").concat(value.toLocaleString(), " \u2022 Y2 - ").concat(lineValue.toLocaleString(), "%</span>\n      ");
            return bar;
          });
        }
      }, {
        key: "getSeriesTooltips",
        value: function getSeriesTooltips(seriesLine, index) {
          return seriesLine.map(function (d) {
            return d.series[index];
          });
        }
      }, {
        key: "isActive",
        value: function isActive(entry) {
          if (!this.activeEntries) return false;
          var item = this.activeEntries.find(function (d) {
            return entry.name === d.name && entry.series === d.series;
          });
          return item !== undefined;
        }
      }, {
        key: "onClick",
        value: function onClick(data) {
          this.select.emit(data);
        }
      }, {
        key: "trackBy",
        value: function trackBy(index, bar) {
          return bar.label;
        }
      }]);

      return ComboSeriesVerticalComponent;
    }();

    ComboSeriesVerticalComponent.ɵfac = function ComboSeriesVerticalComponent_Factory(t) {
      return new (t || ComboSeriesVerticalComponent)();
    };

    ComboSeriesVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComboSeriesVerticalComponent,
      selectors: [["g", "ngx-combo-charts-series-vertical", ""]],
      inputs: {
        dims: "dims",
        type: "type",
        series: "series",
        seriesLine: "seriesLine",
        xScale: "xScale",
        yScale: "yScale",
        colors: "colors",
        tooltipDisabled: "tooltipDisabled",
        gradient: "gradient",
        activeEntries: "activeEntries",
        seriesName: "seriesName",
        animations: "animations",
        noBarWhenZero: "noBarWhenZero"
      },
      outputs: {
        select: "select",
        activate: "activate",
        deactivate: "deactivate",
        bandwidth: "bandwidth"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      attrs: _c0,
      decls: 1,
      vars: 2,
      consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "animations", "noBarWhenZero", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "isActive", "animations", "noBarWhenZero", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "select", "activate", "deactivate"]],
      template: function ComboSeriesVerticalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComboSeriesVerticalComponent__svg_g_0_Template, 1, 18, "g", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BarComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]],
      encapsulation: 2,
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1,
          transform: '*'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0,
          transform: 'scale(0)'
        }))])])]
      },
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComboSeriesVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'g[ngx-combo-charts-series-vertical]',
          template: "\n    <svg:g\n      ngx-charts-bar\n      *ngFor=\"let bar of bars; trackBy: trackBy\"\n      [@animationState]=\"'active'\"\n      [width]=\"bar.width\"\n      [height]=\"bar.height\"\n      [x]=\"bar.x\"\n      [y]=\"bar.y\"\n      [fill]=\"bar.color\"\n      [stops]=\"bar.gradientStops\"\n      [data]=\"bar.data\"\n      [orientation]=\"'vertical'\"\n      [roundEdges]=\"bar.roundEdges\"\n      [gradient]=\"gradient\"\n      [isActive]=\"isActive(bar.data)\"\n      [animations]=\"animations\"\n      [noBarWhenZero]=\"noBarWhenZero\"\n      (select)=\"onClick($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      ngx-tooltip\n      [tooltipDisabled]=\"tooltipDisabled\"\n      [tooltipPlacement]=\"'top'\"\n      [tooltipType]=\"'tooltip'\"\n      [tooltipTitle]=\"bar.tooltipText\"\n    ></svg:g>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1,
            transform: '*'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'scale(0)'
          }))])])]
        }]
      }], null, {
        dims: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        series: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        seriesLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        yScale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeEntries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        seriesName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noBarWhenZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        bandwidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/combo-chart/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/combo-chart/index.ts ***!
    \*************************************************/

  /*! exports provided: ComboChartComponent, ComboSeriesVerticalComponent */

  /***/
  function srcAppComponentsComboChartIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _combo_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./combo-chart.component */
    "./src/app/components/combo-chart/combo-chart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ComboChartComponent", function () {
      return _combo_chart_component__WEBPACK_IMPORTED_MODULE_0__["ComboChartComponent"];
    });
    /* harmony import */


    var _combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./combo-series-vertical.component */
    "./src/app/components/combo-chart/combo-series-vertical.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ComboSeriesVerticalComponent", function () {
      return _combo_series_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ComboSeriesVerticalComponent"];
    });
    /***/

  },

  /***/
  "./src/app/components/report-sale/report-sale.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/report-sale/report-sale.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ReportSaleComponent, lineChartSeries, barChart */

  /***/
  function srcAppComponentsReportSaleReportSaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportSaleComponent", function () {
      return ReportSaleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lineChartSeries", function () {
      return lineChartSeries;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "barChart", function () {
      return barChart;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_Variable_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../model/Variable.class */
    "./src/app/model/Variable.class.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _combo_chart_combo_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../combo-chart/combo-chart.component */
    "./src/app/components/combo-chart/combo-chart.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ReportSaleComponent_label_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_26_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.handleYear($event);
        })("ngModelChange", function ReportSaleComponent_label_26_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.year = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r34 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34);
      }
    }

    function ReportSaleComponent_label_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_52_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.handleMonth($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r38 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r27.checkedAllMonth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r38);
      }
    }

    function ReportSaleComponent_label_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_64_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.handleSystem($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r41 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r28.checkedAllSystem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41);
      }
    }

    function ReportSaleComponent_label_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_76_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.handleShop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r44 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r29.checkedAllShop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r44);
      }
    }

    function ReportSaleComponent_label_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_88_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.handleKind($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r47 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r30.checkedAllChanel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r47);
      }
    }

    function ReportSaleComponent_label_100_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_100_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.handleMaNhom($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r50 = ctx.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r50.manhomsp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r31.checkedAllNhomSP);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.tennhomsp);
      }
    }

    function ReportSaleComponent_label_112_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r53 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r32.checkedAllNV);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r53);
      }
    }

    function ReportSaleComponent_label_124_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_label_124_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.handleTitle($event);
        })("ngModelChange", function ReportSaleComponent_label_124_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r54 = ctx.$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r54);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        out: a0
      };
    };

    var ReportSaleComponent =
    /*#__PURE__*/
    function () {
      function ReportSaleComponent(http, dataService) {
        _classCallCheck(this, ReportSaleComponent);

        this.http = http;
        this.dataService = dataService;
        this.API1 = 'https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/GetAllNhomSp'; //lấy nhóm sản phầm

        this.API2 = 'https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/nhanvien'; // lấy nhân viên

        this.API3 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/PlanRevenue/GetSumWithTitle";
        this.API4 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSumWithTitle";
        this.API5 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSpecificStoresWithTitle"; //6,7

        this.API6 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetCountedOrders"; //get counted order

        this.API7 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetCountedCustomers";
        this.API8 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetTopTenProductsWithTitle";
        this.API9 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetSumGroupByChannel";
        this.API10 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/RealRevenue/GetTopTenStoresWithTitle";
        this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.systems = ["BENTONI", "DOMINO", "ELENTRANG"];
        this.shop = ["ELENTRANG", "HÀNG BÔNG", "KIM MÃ", "CÁT LINH", "CẦU GIẤY"];
        this.kind = ["Bán buôn", "Bán lẻ", "Online"];
        this.types = [];
        this.saler = ["Nguyễn Minh 01", "Nguyễn Minh 02", "Nguyễn Minh 03", "Nguyễn Minh 04", "Nguyễn Minh 05", "Nguyễn Minh 06"];
        this.titles = ["Số lượng bán", "Doanh thu bán hàng", "Chiết khấu", "Giảm giá", "Hàng trả lại", "Tổng giảm trừ", "Doanh thu thuần", "Giá vốn", "LN gộp"];
        this.sidebar = true;
        this.body = new _model_Variable_class__WEBPACK_IMPORTED_MODULE_1__["Variable"]();
        this.body2 = new _model_Variable_class__WEBPACK_IMPORTED_MODULE_1__["Variable"]();
        this.years = [2018, 2019, 2020];
        this.year = 2018;
        this.planRevenue = 0;
        this.realRevenueold = 0;
        this.realRevenuenow = 0;
        this.checkedAllNhomSP = false;
        this.checkedAllMonth = false;
        this.checkedAllChanel = false;
        this.checkedAllShop = false;
        this.checkedAllSystem = false;
        this.checkedAllNV = false; // Chart
        //chart1
        // horizonchart

        this.view = [200, 150];
        this.hori = [{
          name: "Updating...",
          value: 5000
        }, {
          name: "Updating..",
          value: 5000
        }, {
          name: "Updating.",
          value: 5000
        }];
        this.hori2 = [{
          name: "Updating...",
          value: 5000
        }, {
          name: "Updating..",
          value: 5000
        }, {
          name: "Updating.",
          value: 5000
        }]; // options

        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.yAxisLabel = '';
        this.showYAxisLabel = true;
        this.xAxisLabel = '';
        this.barPadding = 10;
        this.top10Product = [{
          "name": "Loading",
          "value": "200"
        }, {
          "name": "Loading...",
          "value": "200"
        }, {
          "name": "Loading...",
          "value": "200"
        }, {
          "name": "Updating.....",
          "value": "200"
        }, {
          "name": "Updating",
          "value": "200"
        }, {
          "name": "Updating....",
          "value": "200"
        }, {
          "name": "Updating....",
          "value": "200"
        }, {
          "name": "Updating",
          "value": "200"
        }, {
          "name": "Updating.",
          "value": "200"
        }, {
          "name": "Updating..",
          "value": "200"
        }];
        this.top10Store = [{
          "name": "Loading....",
          "value": "2000"
        }, {
          "name": "Loading...",
          "value": "2000"
        }, {
          "name": "Loading....",
          "value": "2000"
        }, {
          "name": "Updating.....",
          "value": "2000"
        }, {
          "name": "Updating",
          "value": "2000"
        }, {
          "name": "Updating....",
          "value": "200"
        }, {
          "name": "Updating....",
          "value": "200"
        }, {
          "name": "Updating",
          "value": "200"
        }, {
          "name": "Updating.",
          "value": "200"
        }, {
          "name": "Updating..",
          "value": "200"
        }];
        this.view3 = [450, 280];
        this.colorScheme = {
          domain: ['rgba(255, 0, 0, 1)', '#ffc107', 'rgba(0, 123, 255)', '#6610f2', '#e83e8c', '#fd7e14', '#AAAAAA']
        }; // hết horizonchart
        // Bat dau barlinechart

        this.view2 = [600, 300];
        this.showXAxis2 = true;
        this.showYAxis2 = true;
        this.gradient2 = false;
        this.showLegend2 = true;
        this.legendTitle = '';
        this.legendPosition = 'right';
        this.showXAxisLabel2 = false;
        this.xAxisLabel2 = 'Country';
        this.showYAxisLabel2 = false;
        this.yAxisLabel2 = 'Khách hàng';
        this.showGridLines = true;
        this.innerPadding = '10%';
        this.animations = true;
        this.barChart = barChart;
        this.lineChartSeries = lineChartSeries;
        this.lineChartScheme = {
          name: 'coolthree',
          selectable: true,
          group: 'Ordinal',
          domain: ['#01579b', '#a8385d']
        };
        this.comboBarScheme = {
          name: 'singleLightBlue',
          selectable: true,
          group: 'Ordinal',
          domain: ['#a8385d']
        };
        this.showRightYAxisLabel = true;
        this.yAxisLabelRight = 'Utilization'; // Bắt đầu group horizoncal bar chart

        this.topChanel = [{
          "name": "Online",
          "series": [{
            "name": "2018",
            "value": 7300000
          }, {
            "name": "2019",
            "value": 8940000
          }]
        }, {
          "name": "Bán lẻ",
          "series": [{
            "name": "2018",
            "value": 7870000
          }, {
            "name": "2019",
            "value": 8270000
          }]
        }, {
          "name": "Bán buôn",
          "series": [{
            "name": "2018",
            "value": 5000002
          }, {
            "name": "2019",
            "value": 5800000
          }]
        }];
      }

      _createClass(ReportSaleComponent, [{
        key: "checkAllMonth",
        value: function checkAllMonth() {
          this.checkedAllMonth = !this.checkedAllMonth;
          this.body.thang = [];
          this.body2.thang = [];
        }
      }, {
        key: "checkAllNhomSP",
        value: function checkAllNhomSP() {
          this.checkedAllNhomSP = !this.checkedAllNhomSP;
          this.body.manhom = [];
          this.body2.manhom = [];
        }
      }, {
        key: "checkAllShop",
        value: function checkAllShop() {
          this.checkedAllShop = !this.checkedAllShop;
          this.body.macuahang = [];
          this.body2.macuahang = [];
        }
      }, {
        key: "checkAllChanel",
        value: function checkAllChanel() {
          this.checkedAllChanel = !this.checkedAllChanel;
          this.body.kenhbanhang = [];
          this.body2.kenhbanhang = [];
        }
      }, {
        key: "checkAllSystem",
        value: function checkAllSystem() {
          this.checkedAllSystem = !this.checkedAllSystem;
          this.body.hethong = [];
          this.body2.hethong = [];
        }
      }, {
        key: "checkAllNV",
        value: function checkAllNV() {
          this.checkedAllNV = !this.checkedAllNV;
          this.body.manhanvien = [];
          this.body2.manhanvien = [];
        } // hàm xóa dấu tiếng viết

      }, {
        key: "removeAccents",
        value: function removeAccents(str) {
          return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
        } // Hàm trị tuyệt đối
        // Hàm tính tỉ số
        // Hàm xử lí dữ liệu truyền từ filter

      }, {
        key: "handleYear",
        value: function handleYear(event) {
          this.body.nam = Number(this.year);
          this.body2.nam = Number(this.year) - 1;
        }
      }, {
        key: "handleCN",
        value: function handleCN(event) {
          if (event.target.checked) {
            this.body.machinhanh.push(event.target.value);
            this.body2.machinhanh.push(event.target.value);
          } else {
            this.body.machinhanh.splice(this.body.machinhanh.indexOf(event.target.value), 1);
            this.body2.machinhanh.splice(this.body.machinhanh.indexOf(event.target.value), 1);
          }
        }
      }, {
        key: "handleMonth",
        value: function handleMonth(event) {
          if (event.target.checked) {
            this.body.thang.push(Number(event.target.value));
            this.body2.thang.push(Number(event.target.value));
          } else {
            this.body.thang.splice(this.body.thang.indexOf(event.target.value), 1);
            this.body2.thang.splice(this.body.thang.indexOf(event.target.value), 1);
          }
        }
      }, {
        key: "handleSystem",
        value: function handleSystem(event) {
          if (event.target.checked) {
            this.body.hethong.push(event.target.value);
            this.body2.hethong.push(event.target.value);
          } else {
            this.body.hethong.splice(this.body.hethong.indexOf(event.target.value), 1);
            this.body2.hethong.splice(this.body.hethong.indexOf(event.target.value), 1);
          }
        }
      }, {
        key: "handleShop",
        value: function handleShop(event) {
          if (event.target.checked) {
            this.body.macuahang.push(event.target.value);
            this.body2.macuahang.push(event.target.value);
          } else {
            this.body.macuahang.splice(this.body.macuahang.indexOf(event.target.value), 1);
            this.body2.macuahang.splice(this.body.macuahang.indexOf(event.target.value), 1);
          }
        }
      }, {
        key: "handleKind",
        value: function handleKind(event) {
          if (event.target.checked) {
            this.body.kenhbanhang.push(this.removeAccents(event.target.value));
            this.body2.kenhbanhang.push(this.removeAccents(event.target.value));
          } else {
            this.body.kenhbanhang.splice(this.body.kenhbanhang.indexOf(this.removeAccents(event.target.value)), 1);
            this.body2.kenhbanhang.splice(this.body.kenhbanhang.indexOf(this.removeAccents(event.target.value)), 1);
          }
        }
      }, {
        key: "handleMaNhom",
        value: function handleMaNhom(event) {
          if (event.target.checked) {
            this.body.manhom.push(event.target.value);
            this.body2.manhom.push(event.target.value);
          } else {
            this.body.manhom.splice(this.body.manhom.indexOf(event.target.value), 1);
            this.body2.manhom.splice(this.body.manhom.indexOf(event.target.value), 1);
          }
        }
      }, {
        key: "handleTitle",
        value: function handleTitle(event) {
          this.body.tieude = this.removeAccents(this.title).replace(/\s+/g, ''); //xóa khoảng trắng và chuyển thành chữ không dấu 

          this.body2.tieude = this.removeAccents(this.title).replace(/\s+/g, ''); //xóa khoảng trắng và chuyển thành chữ không dấu 

          this.titlee = this.title.toUpperCase();
        }
      }, {
        key: "getApi",
        value: function getApi() {
          this.getPlanRevenue();
          this.getRealRevenuenow();
          this.getRealRevenueOld();
          this.getSpecificStore2(this.API5, this.chart2);
          this.getSpecificStore3(this.API5, this.chart3);
          this.getCountedOrder(this.API6);
          this.getCountedCustomer(this.API7);
          this.get10Product(this.API8);
          this.getTopChanel(this.API9, 0, this.body);
          this.getTopChanel(this.API9, 1, this.body2);
          this.getTopStore(this.API10);
        }
      }, {
        key: "sideBar",
        value: function sideBar() {
          this.sidebar = !this.sidebar;
        }
      }, {
        key: "getPlanRevenue",
        value: function getPlanRevenue() {
          var _this3 = this;

          this.subscription = this.dataService.post(this.API3, this.body).subscribe(function (data) {
            if (data.status == 200) {
              _this3.planRevenue = Number(JSON.parse(data._body));
            }
          });
        }
      }, {
        key: "getRealRevenueOld",
        value: function getRealRevenueOld() {
          var _this4 = this;

          this.subscription = this.dataService.post(this.API4, this.body2).subscribe(function (data) {
            if (data.status == 200) {
              _this4.realRevenueold = Number(JSON.parse(data._body));
              _this4.tiSo2 = _this4.dataService.PS(_this4.realRevenuenow, Number(JSON.parse(data._body)));

              _this4.addData(1, _this4.chart1, "Thực tế năm ngoái", Number(JSON.parse(data._body)));
            }
          });
        }
      }, {
        key: "getRealRevenuenow",
        value: function getRealRevenuenow() {
          var _this5 = this;

          this.subscription = this.dataService.post(this.API4, this.body).subscribe(function (data) {
            if (data.status == 200) {
              _this5.realRevenuenow = Number(JSON.parse(data._body));
              _this5.tiSo1 = _this5.dataService.PS(Number(JSON.parse(data._body)), _this5.planRevenue);

              _this5.addData(0, _this5.chart0, "Thực tế năm nay", Number(JSON.parse(data._body)));

              _this5.addData(0, _this5.chart1, "Thực tế năm nay", Number(JSON.parse(data._body)));

              _this5.addData(1, _this5.chart0, "Kế hoạch năm nay", _this5.planRevenue);
            }
          });
        }
      }, {
        key: "getSpecificStore2",
        value: function getSpecificStore2(url, chart) {
          var _this6 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body.nam;
          bodyFake['machinhanh'] = this.body.machinhanh;
          bodyFake['thang'] = this.body.thang;
          bodyFake['tieude'] = this.body.tieude;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                _this6.addData(i, chart, element.hethong, _this6.dataService.handlePercent(_this6.realRevenuenow, element.tong));

                _this6.hori[i].name = element.hethong;
                _this6.hori[i].value = element.tong;
                _this6.hori = _toConsumableArray(_this6.hori);
              });
            }
          });
        }
      }, {
        key: "getSpecificStore3",
        value: function getSpecificStore3(url, chart) {
          var _this7 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body2.nam;
          bodyFake['machinhanh'] = this.body2.machinhanh;
          bodyFake['thang'] = this.body2.thang;
          bodyFake['tieude'] = this.body2.tieude;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                _this7.addData(i, chart, element.hethong, _this7.dataService.handlePercent(_this7.realRevenueold, element.tong));

                _this7.hori2[i].name = element.hethong;
                _this7.hori2[i].value = element.tong;
                _this7.hori2 = _toConsumableArray(_this7.hori2);
              });
            }
          });
        }
      }, {
        key: "getCountedOrder",
        value: function getCountedOrder(url) {
          var _this8 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body.nam;
          bodyFake['machinhanh'] = this.body.machinhanh;
          bodyFake['hethong'] = this.body.hethong;
          bodyFake['kenhbanhang'] = this.body.kenhbanhang;
          bodyFake['macuahang'] = this.body.macuahang;
          bodyFake['manhom'] = this.body.manhom;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                lineChartSeries[0].series[i].value = element.counted;
                _this8.lineChartSeries = lineChartSeries;
              });
            }
          });
        }
      }, {
        key: "getCountedCustomer",
        value: function getCountedCustomer(url) {
          var _this9 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body.nam;
          bodyFake['machinhanh'] = this.body.machinhanh;
          bodyFake['hethong'] = this.body.hethong;
          bodyFake['kenhbanhang'] = this.body.kenhbanhang;
          bodyFake['macuahang'] = this.body.macuahang;
          bodyFake['manhom'] = this.body.manhom;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                var value = {
                  name: element.thang,
                  value: element.counted
                };
                barChart[i].value = value.value;
                barChart = _toConsumableArray(barChart);
                _this9.barChart = barChart;
              });
            }
          });
        }
      }, {
        key: "get10Product",
        value: function get10Product(url) {
          var _this10 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body.nam;
          bodyFake['machinhanh'] = this.body.machinhanh;
          bodyFake['hethong'] = this.body.hethong;
          bodyFake['kenhbanhang'] = this.body.kenhbanhang;
          bodyFake['macuahang'] = this.body.macuahang;
          bodyFake['manhom'] = this.body.manhom;
          bodyFake['tieude'] = this.body.tieude;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                _this10.top10Product[i].name = element.tensanpham;
                _this10.top10Product[i].value = element.tong;
                _this10.top10Product = _toConsumableArray(_this10.top10Product);
              });
            }
          });
        }
      }, {
        key: "getTopChanel",
        value: function getTopChanel(url, j, body) {
          var _this11 = this;

          this.subscription = this.dataService.post(url, body).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                _this11.topChanel[i].name = element.kenhbanhang;
                _this11.topChanel[i].series[j].name = body.nam.toString();
                _this11.topChanel[i].series[j].value = element.tong;
                _this11.topChanel = _toConsumableArray(_this11.topChanel);
              });
            }
          });
        }
      }, {
        key: "getTopStore",
        value: function getTopStore(url) {
          var _this12 = this;

          var bodyFake = {};
          bodyFake['nam'] = this.body.nam;
          bodyFake['machinhanh'] = this.body.machinhanh;
          bodyFake['hethong'] = this.body.hethong;
          bodyFake['kenhbanhang'] = this.body.kenhbanhang;
          bodyFake['macuahang'] = this.body.macuahang;
          bodyFake['manhom'] = this.body.manhom;
          bodyFake['tieude'] = this.body.tieude;
          this.subscription = this.dataService.post(url, bodyFake).subscribe(function (data) {
            if (data.status == 200) {
              JSON.parse(data._body).forEach(function (element, i) {
                _this12.top10Store[i].name = element.macuahang;
                _this12.top10Store[i].value = element.tong;
                _this12.top10Store = _toConsumableArray(_this12.top10Store);
              });
            }
          });
        }
      }, {
        key: "addData",
        value: function addData(i, chart, label, data) {
          chart.data.datasets[0].data[i] = data;
          chart.data.labels[i] = label;
          chart.update();
        } // hàm lấy về danh sách nhóm sản phẩm

      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this13 = this;

          this.subscription = this.dataService.get(this.API1).subscribe(function (data) {
            _this13.types = JSON.parse(data._body);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTypes();
          this.body.nam = 2019;
          this.body.machinhanh = new Array();
          this.body.thang = new Array();
          this.body.hethong = new Array();
          this.body.macuahang = new Array();
          this.body.kenhbanhang = new Array();
          this.body.manhom = new Array();
          this.body.manhanvien = new Array();
          this.body.tieude = "Doanhthubanhang";
          this.body2.nam = 2018;
          this.body2.machinhanh = new Array();
          this.body2.thang = new Array();
          this.body2.hethong = new Array();
          this.body2.macuahang = new Array();
          this.body2.kenhbanhang = new Array();
          this.body2.manhom = new Array();
          this.body2.manhanvien = new Array();
          this.body2.tieude = "Doanhthubanhang"; //chart1

          this.chart0 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('canvas', {
            type: 'doughnut',
            data: {
              labels: ["Updating..."],
              datasets: [{
                data: [50, 50, 50],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 123, 255,0.5)'],
                fill: true
              }]
            },
            options: {
              legend: {
                display: true
              },
              tooltips: {
                enabled: true
              }
            }
          });
          this.chart1 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('canvas1', {
            type: 'doughnut',
            data: {
              labels: ["Updating..."],
              datasets: [{
                data: [50, 50, 50],
                backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 193, 7, 0.5)'],
                fill: false
              }]
            },
            options: {
              legend: {
                display: true
              },
              tooltips: {
                enabled: true
              }
            }
          });
          this.chart2 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('canvas2', {
            type: 'doughnut',
            data: {
              labels: ["Updating...", "Updating...", "Updating..."],
              datasets: [{
                data: [50, 50, 50],
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(255, 193, 7)', 'rgba(0, 123, 255)'],
                fill: false
              }]
            },
            options: {
              legend: {
                display: true
              },
              tooltips: {
                enabled: true
              }
            }
          });
          this.chart3 = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('canvas3', {
            type: 'doughnut',
            data: {
              labels: ["Updating...", "Updating...", "Updating..."],
              datasets: [{
                data: [50, 50, 50],
                backgroundColor: ['rgba(255, 0, 0)', 'rgba(255, 193, 7)', 'rgba(0, 123, 255)'],
                fill: false
              }]
            },
            options: {
              legend: {
                display: true
              },
              tooltips: {
                enabled: true
              }
            }
          }); // các chart swimlane
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }]);

      return ReportSaleComponent;
    }();

    ReportSaleComponent.ɵfac = function ReportSaleComponent_Factory(t) {
      return new (t || ReportSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
    };

    ReportSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportSaleComponent,
      selectors: [["app-report-sale"]],
      decls: 188,
      vars: 101,
      consts: [[1, "wrapper", "w-100"], ["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "bg-light", "border-right", 3, "ngClass"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush"], ["href", "#", 1, "list-group-item", "list-group-item-action", "bg-light"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-light", "bg-light", "border-bottom", "justify-between", "flex"], ["id", "menu-toggle", 1, "sidebarbutton", "ba", "br3", "bg-white", "mb2", 3, "click"], ["src", "./../../../assets/img/hamburger.png", "alt", "", 1, "ba", "bn", "br3"], [1, "btn", "btn-primary", "justify-end", 3, "click"], [1, "filters", "w-100-ns", "bb", "b--gray", "flex", 2, "height", "10rem"], [1, "filter_block", "h-100"], [1, "filter", "h-50", "w-100"], [1, "justify-between", "flex", "bb", "w-100"], ["for", "", 1, "f5", "gray", "tc", "content-center", "ml2", "mt1"], [1, "flex", "w-50", "justify-between"], [1, "w-40", "bn", "bg-white"], ["src", "./../../../assets/img/images.png", "alt", ""], ["src", "./../../../assets/img/t\u1EA3i xu\u1ED1ng.jpg", "alt", ""], [1, "dlk-radio", "flex", "w-100", "justify-around", "overflow-y-scroll"], ["class", "btn btn-success ", 4, "ngFor", "ngForOf"], [1, "flex", "w-100", "justify-between", "overflow-y-scroll", "dlk-radio"], [1, "btn", "btn-success", "ml2"], ["name", "choices[2][]", "type", "checkbox", "value", "HN", 1, "form-control", 3, "change"], [1, "fa"], [1, "filter_block"], [1, "filter", "h-100", "w-100"], [1, "justify-between", "flex", "bb", "w-100", "h-20"], [1, "w-40", "bn", "bg-white", 3, "click"], [1, "dlk-radio", "flex", "w-100", "justify-between", "overflow-y-scroll", 2, "height", "7rem"], ["class", "btn btn-success w-40 ml1 mr1", 4, "ngFor", "ngForOf"], ["for", "", 1, "f5", "gray", "tc", "content-center", "ml1", "mt1"], ["class", "btn btn-success w-80 ml1", 4, "ngFor", "ngForOf"], ["class", "btn btn-success w-80 ml2", 4, "ngFor", "ngForOf"], ["class", "btn btn-success w-100 ml1", 4, "ngFor", "ngForOf"], ["for", "", 1, "f5", "gray", "tc", "content-center", "ml1", "mt1", "w-50"], ["class", "btn btn-success w-100 mr1", 4, "ngFor", "ngForOf"], [1, "flex", "w-100", "flex-wrap", "bb", "b--gray", 2, "height", "15rem"], [1, "donut", "w-30", "h-10", "tc"], [3, "hidden"], ["id", "canvas"], [1, "w-40", "h-100"], [1, "f4", "h-20", "b", "mt1"], [1, "f5", "h-20", "bb", "b--blue", "bw1", "mt1"], [1, "f5", "h-20", "bb", "b--red", "inline-flex", "mt1", "bw1"], [1, "f5", "h-20", "bb", "b--yellow", "bw1", "mt1"], [1, "f5", "h-20", "b", "mt1"], [1, "donut", "w-30", "h-100", "tc"], ["id", "canvas1"], [1, "block", "w-50", "h-100", "tc"], [1, "f4", "h-20", "b", "mt2"], [1, "flex", "h-80", "w-100"], [1, "donut", "w-50", "h-100", "tc"], ["id", "canvas2"], [1, "w-50", "h-100"], [1, "mt3"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "barPadding", "xScaleMin", "xScaleMax"], ["id", "canvas3"], [1, "flex", "w-100", "bb", "b--gray", 2, "height", "21rem"], [1, "w-60", "tc"], [1, "f5", "h-20", "b", "mt2"], [3, "view", "scheme", "colorSchemeLine", "results", "animations", "lineChart", "gradient", "xAxis", "yAxis", "legend", "legendTitle", "legendPosition", "showGridLines", "showXAxisLabel", "showYAxisLabel", "showRightYAxisLabel", "xAxisLabel", "yAxisLabel", "yAxisLabelRight"], [1, "w-40", "tc"], [1, "w-100", "flex", 2, "height", "10rem"], [1, "w-60", "h-100", "tc"], [3, "view", "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"], [1, "btn", "btn-success"], ["name", "choices[1]", "type", "radio", 1, "form-control", 3, "value", "ngModel", "change", "ngModelChange"], [1, "btn", "btn-success", "w-40", "ml1", "mr1"], ["name", "choices[3][]", "type", "checkbox", 1, "form-control", 3, "value", "checked", "change"], [1, "btn", "btn-success", "w-80", "ml1"], [1, "btn", "btn-success", "w-80", "ml2"], [1, "btn", "btn-success", "w-100", "ml1"], ["name", "choices[3][]", "type", "checkbox", "value", "", 1, "form-control", 3, "checked"], [1, "btn", "btn-success", "w-100", "mr1"], ["name", "choices[3][]", "type", "radio", 1, "form-control", 3, "value", "ngModel", "change", "ngModelChange"], [1, "fa", "f6"]],
      template: function ReportSaleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sale Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_10_listener($event) {
            return ctx.sideBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_12_listener($event) {
            return ctx.getApi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "L\u1EA5y d\u1EEF li\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "N\u0103m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "body", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportSaleComponent_label_26_Template, 4, 3, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "T\xEAn CN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "body", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReportSaleComponent_Template_input_change_38_listener($event) {
            return ctx.handleCN($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "H\xE0 N\u1ED9i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Th\xE1ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_47_listener($event) {
            return ctx.checkAllMonth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ReportSaleComponent_label_52_Template, 4, 3, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "H\u1EC7 th\u1ED1ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_59_listener($event) {
            return ctx.checkAllSystem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ReportSaleComponent_label_64_Template, 4, 3, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "C\u1EEDa h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_71_listener($event) {
            return ctx.checkAllShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ReportSaleComponent_label_76_Template, 4, 3, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "K\xEAnh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_83_listener($event) {
            return ctx.checkAllChanel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ReportSaleComponent_label_88_Template, 4, 3, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nh\xF3m SP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_95_listener($event) {
            return ctx.checkAllNhomSP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ReportSaleComponent_label_100_Template, 4, 3, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Nh\xE2n vi\xEAn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportSaleComponent_Template_button_click_107_listener($event) {
            return ctx.checkAllNV();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ReportSaleComponent_label_112_Template, 4, 2, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "section", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Ti\xEAu \u0111\u1EC1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "body", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, ReportSaleComponent_label_124_Template, 4, 3, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "canvas", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "canvas", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "canvas", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "ngx-charts-bar-horizontal", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "canvas", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "ngx-charts-bar-horizontal", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "combo-chart-component", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "ngx-charts-bar-horizontal", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ngx-charts-bar-horizontal-2d", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ReportSaleComponent_Template_ngx_charts_bar_horizontal_2d_select_182_listener($event) {
            return ctx.onSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "ngx-charts-bar-horizontal", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](99, _c0, ctx.sidebar));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.systems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kind);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.saler);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.chart0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CH\xCANH L\u1EC6CH ", ctx.tiSo1, "% SO V\u1EDAI K\u1EBE HO\u1EA0CH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ch\xEAnh l\u1EC7ch ", ctx.realRevenuenow - ctx.planRevenue, " SO V\u1EDAI K\u1EBE HO\u1EA0CH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.planRevenue, " ", ctx.titlee, " K\u1EBE HO\u1EA0CH N\u0102M NAY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.realRevenuenow, " ", ctx.titlee, " N\u0102M NAY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.realRevenueold, " ", ctx.titlee, " N\u0102M TR\u01AF\u1EDAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ch\xEAnh l\u1EC7ch ", ctx.realRevenuenow - ctx.realRevenueold, " SO V\u1EDAI N\u0102M TR\u01AF\u1EDAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.chart1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CH\xCANH L\u1EC6CH ", ctx.tiSo2, " % SO V\u1EDAI N\u0102M TR\u01AF\u1EDAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.titlee, " TH\u1EF0C HI\u1EC6N ", ctx.body.nam, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.chart2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.hori)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("barPadding", ctx.barPadding)("xScaleMin", 100)("xScaleMax", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.titlee, " TH\u1EF0C HI\u1EC6N ", ctx.body2.nam, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.chart3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.hori2)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("barPadding", ctx.barPadding)("xScaleMin", 100)("xScaleMax", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S\u1ED0 L\u01AF\u1EE2NG \u0110\u01A0N H\xC0NG V\xC0 KH\xC1CH H\xC0NG N\u0102M ", ctx.body.nam, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view2)("scheme", ctx.comboBarScheme)("colorSchemeLine", ctx.lineChartScheme)("results", ctx.barChart)("animations", ctx.animations)("lineChart", ctx.lineChartSeries)("gradient", ctx.gradient2)("xAxis", ctx.showXAxis2)("yAxis", ctx.showYAxis2)("legend", ctx.showLegend2)("legendTitle", ctx.legendTitle)("legendPosition", ctx.legendPosition)("showGridLines", ctx.showGridLines)("showXAxisLabel", ctx.showXAxisLabel2)("showYAxisLabel", ctx.showYAxisLabel2)("showRightYAxisLabel", ctx.showYAxisLabel2)("xAxisLabel", ctx.xAxisLabel2)("yAxisLabel", ctx.yAxisLabel2)("yAxisLabelRight", ctx.yAxisLabelRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TOP 10 S\u1EA2N PH\u1EA8M V\u1EC0 ", ctx.titlee, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view3)("scheme", ctx.colorScheme)("results", ctx.top10Product)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("barPadding", ctx.barPadding)("xScaleMin", 100)("xScaleMax", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.titlee, " \u0110\u01AF\u1EE2C TH\u1EF0C HI\u1EC6N THEO N\u0102M ", ctx.body2.nam, " V\xC0 N\u0102M ", ctx.body.nam, " THEO K\xCANH B\xC1N H\xC0NG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view3)("scheme", ctx.colorScheme)("results", ctx.topChanel)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TOP 10 \u0110I\u1EC2M B\xC1N V\u1EC0 ", ctx.titlee, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view3)("scheme", ctx.colorScheme)("results", ctx.top10Store)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("barPadding", ctx.barPadding)("xScaleMin", 200)("xScaleMax", 300);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["BarHorizontalComponent"], _combo_chart_combo_chart_component__WEBPACK_IMPORTED_MODULE_7__["ComboChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["BarHorizontal2DComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n  } \r\n .out[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    margin-left: -10rem!important;\r\n    -webkit-transition: margin .25s ease-out!important;\r\n    transition: margin .25s ease-out!important;\r\n  } \r\n #sidebar-wrapper[_ngcontent-%COMP%]{\r\n    width: 10rem!important;\r\n  } \r\n #sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n    padding: 0.8rem 1.25rem;\r\n    font-size: 1.2rem;\r\n  } \r\n #sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n    width: 10rem;\r\n  } \r\n #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n  } \r\n #page-content-wrapper[_ngcontent-%COMP%]   .sidebarbutton[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n      outline:none;\r\n      border:none;\r\n  } \r\n #page-content-wrapper[_ngcontent-%COMP%]   .sidebarbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      width: 2.5rem;\r\n      height:1.8rem;\r\n  } \r\n #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  } \r\n .filter_block[_ngcontent-%COMP%]{\r\n      width: 12.5%;\r\n      height: 100%;\r\n      border:1px solid gray\r\n  } \r\n .dlk-radio[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n  } \r\n .filter[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  max-width: 50%!important;\r\n  } \r\n .dlk-radio[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    height: 1.6rem;\r\n    line-height: 0.8rem!important;\r\n    margin-top: 0.2rem;\r\n    border-radius: 5px!important;\r\n    border:none!important;\r\n  } \r\n .dlk-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .dlk-radio[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] \r\n{\r\n\tmargin-left:-99999px;\r\n  display:none;\r\n \r\n} \r\n .dlk-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + .fa[_ngcontent-%COMP%], .dlk-radio[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] + .fa[_ngcontent-%COMP%] {\r\n     opacity:0.5;\r\n     font-size: 0.9rem;\r\n\r\n} \r\n .dlk-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + .fa[_ngcontent-%COMP%], .dlk-radio[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + .fa[_ngcontent-%COMP%]{\r\n    opacity:1;\r\n    color:white\r\n} \r\n .checked[_ngcontent-%COMP%]{\r\n  opacity:1;\r\n  color:white\r\n} \r\n .horizontal[_ngcontent-%COMP%]{\r\n \r\n} \r\n .donut[_ngcontent-%COMP%]{\r\n\r\n} \r\n @media (min-width: 768px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: -15rem;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQtc2FsZS9yZXBvcnQtc2FsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O2lCQUlpQjtDQUNoQjtJQUNHLGtCQUFrQjtFQUNwQjtDQUNDO0lBQ0MsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrREFBa0Q7SUFHbEQsMENBQTBDO0VBQzVDO0NBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7Q0FDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7Q0FFQTtJQUNFLFlBQVk7RUFDZDtDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0NBQ0E7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtNQUNqQixZQUFZO01BQ1osV0FBVztFQUNmO0NBQ0E7TUFDSSxhQUFhO01BQ2IsYUFBYTtFQUNqQjtDQUNBO0lBQ0UsY0FBYztFQUNoQjtDQUNBO01BQ0ksWUFBWTtNQUNaLFlBQVk7TUFDWjtFQUNKO0NBQ0E7SUFDRSxlQUFlO0VBQ2pCO0NBQ0M7RUFDRCx3QkFBd0I7RUFDeEI7Q0FDQTtJQUNFLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixxQkFBcUI7RUFDdkI7Q0FDQTs7O0NBR0Qsb0JBQW9CO0VBQ25CLFlBQVk7O0FBRWQ7Q0FDQTs7S0FFSyxXQUFXO0tBQ1gsaUJBQWlCOztBQUV0QjtDQUNBOztJQUVJLFNBQVM7SUFDVDtBQUNKO0NBQ0E7RUFDRSxTQUFTO0VBQ1Q7QUFDRjtDQUNBOztBQUVBO0NBQ0E7O0FBRUE7Q0FFRTtJQUNFO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0LXNhbGUvcmVwb3J0LXNhbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICogbcOgdSBuw6B5IHNpZGViYXIgMmYzNTNhXHJcbnhhbmggbmjhuqF0IDYzYzJkZVxyXG7EkeG7jyBmODZjNmJcclxudsOgbmcgZmZjMTA3XHJcbnhhbmggxJHhuq1tIDIwYThkOCAqLyBcclxuIGJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICAgLm91dCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTByZW0haW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dCFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0IWltcG9ydGFudDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0IWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0IWltcG9ydGFudDtcclxuICB9XHJcbiAgI3NpZGViYXItd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMHJlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciAuc2lkZWJhcmJ1dHRvbntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgfVxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciAuc2lkZWJhcmJ1dHRvbiBpbWd7XHJcbiAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgIGhlaWdodDoxLjhyZW07XHJcbiAgfSBcclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5maWx0ZXJfYmxvY2t7XHJcbiAgICAgIHdpZHRoOiAxMi41JTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXI6MXB4IHNvbGlkIGdyYXlcclxuICB9XHJcbiAgLmRsay1yYWRpbyB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gICAuZmlsdGVyIHNlY3Rpb24gbGFiZWx7XHJcbiAgbWF4LXdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGxrLXJhZGlvIC5idG57XHJcbiAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjhyZW0haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlcjpub25lIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRsay1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbi5kbGstcmFkaW8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIFxyXG57XHJcblx0bWFyZ2luLWxlZnQ6LTk5OTk5cHg7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gXHJcbn1cclxuLmRsay1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyAuZmEgLFxyXG4uZGxrLXJhZGlvIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSsgLmZhIHtcclxuICAgICBvcGFjaXR5OjAuNTtcclxuICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbn1cclxuLmRsay1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIC5mYSxcclxuLmRsay1yYWRpbyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5mYXtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuLmNoZWNrZWR7XHJcbiAgb3BhY2l0eToxO1xyXG4gIGNvbG9yOndoaXRlXHJcbn1cclxuLmhvcml6b250YWx7XHJcbiBcclxufVxyXG4uZG9udXR7XHJcblxyXG59XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-report-sale',
          templateUrl: './report-sale.component.html',
          styleUrls: ['./report-sale.component.css']
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]
        }, {
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      }, null);
    })();

    var lineChartSeries = [{
      name: 'Số đơn hàng',
      series: [{
        value: 20000,
        name: 'Tháng 1'
      }, {
        value: 40000,
        name: 'Tháng 2'
      }, {
        value: 20000,
        name: 'Tháng 3'
      }, {
        value: 30000,
        name: 'Tháng 4'
      }, {
        value: 40000,
        name: 'Tháng5'
      }, {
        value: 20000,
        name: 'Tháng 6'
      }, {
        value: 30000,
        name: 'Tháng 7'
      }, {
        value: 30999,
        name: 'Tháng 8'
      }, {
        value: 40000,
        name: 'Tháng 9'
      }, {
        value: 20000,
        name: 'Tháng 10'
      }, {
        value: 30000,
        name: 'Tháng 11'
      }, {
        value: 35000,
        name: 'Tháng 12'
      }]
    }];
    var barChart = [{
      name: 'Tháng 1',
      value: 50000
    }, {
      name: 'Tháng 2',
      value: 30000
    }, {
      name: 'Tháng 3',
      value: 10000
    }, {
      name: 'Tháng 4',
      value: 30000
    }, {
      name: 'Tháng 5',
      value: 20000
    }, {
      name: 'Tháng 6',
      value: 40000
    }, {
      name: 'Tháng 7',
      value: 50000
    }, {
      name: 'Tháng 8',
      value: 20000
    }, {
      name: 'Tháng 9',
      value: 60000
    }, {
      name: 'Tháng 10',
      value: 20000
    }, {
      name: 'Tháng 11',
      value: 50000
    }, {
      name: 'Tháng 12',
      value: 33000
    }];
    /***/
  },

  /***/
  "./src/app/model/Variable.class.ts":
  /*!*****************************************!*\
    !*** ./src/app/model/Variable.class.ts ***!
    \*****************************************/

  /*! exports provided: Variable */

  /***/
  function srcAppModelVariableClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Variable", function () {
      return Variable;
    });

    var Variable = function Variable(nam, tieude, manhomsp, tennhomsp, machinhanh, thang, hethong, macuahang, kenhbanhang, manhom, manhanvien, hovaten) {
      _classCallCheck(this, Variable);

      manhomsp = this.manhomsp;
      tennhomsp = this.tennhomsp;
      tieude = this.tieude;
      nam = this.nam;
      machinhanh = this.machinhanh;
      thang = this.thang;
      hethong = this.hethong;
      macuahang = this.macuahang;
      kenhbanhang = this.kenhbanhang;
      manhom = this.manhom;
      manhanvien = this.manhanvien;
      hovaten = this.hovaten;
    };
    /***/

  },

  /***/
  "./src/app/pipe/filterpipe.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipe/filterpipe.pipe.ts ***!
    \*****************************************/

  /*! exports provided: FilterpipePipe */

  /***/
  function srcAppPipeFilterpipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterpipePipe", function () {
      return FilterpipePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterpipePipe =
    /*#__PURE__*/
    function () {
      function FilterpipePipe() {
        _classCallCheck(this, FilterpipePipe);
      }

      _createClass(FilterpipePipe, [{
        key: "transform",
        value: function transform(products2, id, name, price) {
          if (!id && !name && !price) {
            return products2;
          } else {
            if (id) {
              products2 = products2.filter(function (x) {
                return x.id.toString().indexOf(id) != -1;
              });
            }

            if (name) {
              products2 = products2.filter(function (x) {
                return x.name.indexOf(name) != -1;
              });
            }

            if (price) {
              products2 = products2.filter(function (x) {
                return x.price.indexOf(price) != -1;
              });
            }

            return products2;
          }
        }
      }]);

      return FilterpipePipe;
    }();

    FilterpipePipe.ɵfac = function FilterpipePipe_Factory(t) {
      return new (t || FilterpipePipe)();
    };

    FilterpipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterpipe",
      type: FilterpipePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterpipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterpipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipe/formatpipe.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipe/formatpipe.pipe.ts ***!
    \*****************************************/

  /*! exports provided: FormatpipePipe */

  /***/
  function srcAppPipeFormatpipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatpipePipe", function () {
      return FormatpipePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatpipePipe =
    /*#__PURE__*/
    function () {
      function FormatpipePipe() {
        _classCallCheck(this, FormatpipePipe);
      }

      _createClass(FormatpipePipe, [{
        key: "transform",
        value: function transform(value) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return value.substr(0, args) + '...';
        }
      }]);

      return FormatpipePipe;
    }();

    FormatpipePipe.ɵfac = function FormatpipePipe_Factory(t) {
      return new (t || FormatpipePipe)();
    };

    FormatpipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatpipe",
      type: FormatpipePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatpipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatpipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/data.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/data.service.ts ***!
    \*****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.API1 = 'https://aggregatedrevenue20200331042045.azurewebsites.net/api/DoanhThuThucTe/GetAllNhomSp';
        this.API3 = "https://aggregatedrevenue20200331042045.azurewebsites.net/api/PlanRevenue/GetSumWithTitle";
      }

      _createClass(DataService, [{
        key: "getTypes",
        value: function getTypes() {
          var _this14 = this;

          this.subscription = this.get(this.API1).subscribe(function (data) {
            _this14.types = JSON.parse(data._body);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "post",
        value: function post(url, body) {
          return this.http.post(url, body);
        }
      }, {
        key: "get",
        value: function get(url) {
          return this.http.get(url);
        } // get(url:string,onFinish){
        //  this.http.get(url).subscribe(
        //    (data)=>{
        //     onFinish(true,data)
        //  },(err)=>{
        //    onFinish(false,err)
        //  }
        //  )
        // }

      }, {
        key: "handlePercent",
        value: function handlePercent(value1, value2) {
          return Math.round(value2 / value1 * 100 + Number.EPSILON);
        }
      }, {
        key: "PS",
        value: function PS(value1, value2) {
          if (value1 > value2) {
            return Math.round((1 - value2 / value1) * 100 + Number.EPSILON);
          }

          if (value2 > value1) {
            return Math.round((1 - value1 / value2) * 100 + Number.EPSILON);
          } else {
            return 0;
          }
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/logging.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/logging.service.ts ***!
    \********************************************/

  /*! exports provided: LoggingService */

  /***/
  function srcAppServiceLoggingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggingService", function () {
      return LoggingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoggingService = function LoggingService() {
      _classCallCheck(this, LoggingService);
    };

    LoggingService.ɵfac = function LoggingService_Factory(t) {
      return new (t || LoggingService)();
    };

    LoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggingService,
      factory: LoggingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ADMIN\Desktop\Angular\ReportedWeb\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map