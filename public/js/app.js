/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@lossendae/vue-avatar/dist/VueAvatar.common.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@lossendae/vue-avatar/dist/VueAvatar.common.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/@lossendae/vue-avatar/dist/VueAvatar.common.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholder.vue */ "./resources/js/components/ui/ContentPlaceholder.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholder: _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    uuid: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      spinner: false,
      gardendata: {},
      gardendetails: [],
      editGardenDetails: false,
      states: [],
      districts: [],
      errors: {}
    };
  },
  mounted: function mounted() {
    this.gardendetails = [{
      name: "category_name",
      type: "text",
      edit: false,
      label: "Category Name"
    }];
  },
  watch: {
    uuid: {
      deep: true,
      immediate: true,
      handler: "loadProductData"
    }
  },
  methods: {
    loadProductData: function loadProductData() {
      var _this = this;

      if (this.uuid) {
        axios.get("/category/".concat(this.uuid)).then(function (response) {
          _this.loading = false;
          _this.gardendata = response.data.data;

          _this.states.push(response.data.data.formatted_state);

          _this.districts = response.data.data.districts;
        })["catch"](function (error) {
          _this.loading = false;
        });
      }
    },
    editGarden: function editGarden() {
      this.editGardenDetails = !this.editGardenDetails;
      this._beforeEditData = Object.assign({}, this.gardendata);
    },
    cancelEdit: function cancelEdit() {
      this.editGardenDetails = !this.editGardenDetails;
      Object.assign(this.gardendata, this._beforeEditData);
    },
    updateGardenDetail: function updateGardenDetail() {
      var _this2 = this;

      this.spinner = true;
      axios.post("/category/".concat(this.uuid), this.gardendata).then(function (response) {
        _this2.spinner = false;

        _this2.loadProductData();

        _this2.$snack.success({
          text: "Category details updated",
          button: "Ok"
        });

        _this2.editGardenDetails = !_this2.editGardenDetails;
      })["catch"](function (error) {
        _this2.spinner = false;
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {},
      errors: {}
    };
  },
  methods: {
    generateProduct: function generateProduct() {
      var _this = this;

      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);
      axios.post("/category", this.product).then(function (response) {
        _this.product = {};

        _this.$snack.success({
          text: 'Category has been created successfully!',
          button: 'OK'
        });

        setTimeout(function () {
          _this.$router.push('/category');
        }, 2000);
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;

        _this.$refs.submitButton.classList.remove("spinner");

        _this.$refs.submitButton.setAttribute("disabled", false);
      }).then(function () {
        _this.$refs.submitButton.classList.remove("spinner");

        _this.$refs.submitButton.setAttribute("disabled", false);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ''
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var url = "/category";
      var params = {};

      if (this.searchInput) {
        params = {
          page: page,
          search: this.searchInput,
          size: 10
        };
      } else {
        params = {
          page: page,
          size: 10
        };
      }

      this.getAllCategories(url, params);
    },
    getAllCategories: function getAllCategories(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      return axios.get(url, {
        params: params
      }).then(function (response) {
        var dataRetured = response.data.data; // if (typeof dataRetured === "object") {
        // 	dataRetured = Object.values(dataRetured);
        // } 

        _this.products = dataRetured;
        _this.nextUrl = response.data.next_page_url;
        _this.prevUrl = response.data.prev_page_url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryDetails.vue */ "./resources/js/components/category/CategoryDetails.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CategoryDetails: _CategoryDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardSalesChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardSalesChart.vue */ "./resources/js/components/dashboard/DashboardSalesChart.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import Calendar from 'v-calendar'; 
// import 'v-calendar/lib/v-calendar.min.css'; 

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    DashboardSalesChart: _DashboardSalesChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      sales: {},
      date_range: {
        start: new Date(),
        end: new Date()
      } // formats: {
      // 	title: 'MMMM YYYY',
      // 	weekdays: 'W',
      // 	navMonths: 'MMM',
      // 	input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
      // 	dayPopover: 'L', // Only for `v-date-picker`
      // },

    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/sales').then(function (response) {
      _this.sales = response.data.data;

      _this.loadChart();
    });
  },
  methods: {
    convertDateToMysqlDateFormat: function convertDateToMysqlDateFormat(date) {
      var MONTH = date.getMonth() + 1; // 0

      var DATE = date.getDate(); // 31

      var YEAR = date.getFullYear(); // 1980

      return YEAR + '-' + MONTH + '-' + DATE;
    },
    greeting: function greeting() {
      var thehours = new Date().getHours();
      var themessage;
      var morning = 'Good morning';
      var afternoon = 'Good afternoon';
      var evening = 'Good evening';

      if (thehours >= 0 && thehours < 12) {
        themessage = morning;
      } else if (thehours >= 12 && thehours < 17) {
        themessage = afternoon;
      } else if (thehours >= 17 && thehours < 24) {
        themessage = evening;
      }

      return themessage;
    },
    loadChart: function loadChart() {
      var labels = [];
      var datasets = [];
      Object.entries(this.sales.sales).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        // var value = this.sales[key];
        labels.push(key);
        datasets.push(value);
      });
      var ctx = document.getElementById("myChart").getContext("2d");
      new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '# sales in Rs.',
            data: datasets,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['sales'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.loadChart();
  },
  methods: {
    loadChart: function loadChart() {
      // console.log(this.chartOptions)
      // console.log(this.sales) 
      var labels = [];
      var datasets = [];
      Object.entries(this.sales).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        // var value = this.sales[key];
        labels.push(key);
        datasets.push(value);
      });
      var ctx = document.getElementById("myChart").getContext("2d");
      new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '# sales in Rs.',
            data: datasets,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tabs-component */ "./node_modules/vue-tabs-component/dist/index.js");
/* harmony import */ var vue_tabs_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-status */ "./node_modules/vue-status/src/index.js");
/* harmony import */ var vue2_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-scrollbar */ "./node_modules/vue2-scrollbar/dist/vue2-scrollbar.js");
/* harmony import */ var vue2_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_scrollbar_dist_style_vue2_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-scrollbar/dist/style/vue2-scrollbar.css */ "./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css");
/* harmony import */ var vue2_scrollbar_dist_style_vue2_scrollbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_scrollbar_dist_style_vue2_scrollbar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Print_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Print.vue */ "./resources/js/components/invoice/Print.vue");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueScrollbar: vue2_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueStatus: vue_status__WEBPACK_IMPORTED_MODULE_1__["default"],
    Tabs: vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__["Tabs"],
    Tab: vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__["Tab"],
    InvoicePrint: _Print_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      search: "",
      step: 1,
      customer: {},
      errors: {},
      paymenttypes: ["Cash", "Debit/Credit Card", "Cheque"],
      paymenttype: "Cash",
      order: null,
      loading: false,
      discountPercentage: 0,
      invoiceuuid: "",
      checkin: "",
      checkout: "" // tender_amount: 0

    };
  },
  mounted: function mounted() {
    this.getItems();
  },
  methods: {
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal: function hideModal() {
      this.$refs.myModalRef.hide();
    },
    goToHome: function goToHome() {
      this.step = 1;
    },
    prev: function prev() {
      this.step--;
    },
    next: function next() {
      this.step++;
    },
    addToCart: function addToCart(invId) {
      console.log(invId);
      this.$store.dispatch("addToCart", invId);
      this.$snack.success({
        text: 'Item added to cart!',
        button: 'OK'
      });
    },
    removeFromCart: function removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
      this.$snack.success({
        text: 'Item removed from cart!',
        button: 'OK'
      });
    },
    decrementItemFromCart: function decrementItemFromCart(index) {
      this.$store.dispatch("decrementItemFromCart", index);
    },
    incrementItemFromCart: function incrementItemFromCart(index) {
      this.$store.dispatch("incrementItemFromCart", index);
    },
    getItems: function getItems() {
      var _this = this;

      return axios.get("/items").then(function (response) {
        console.log(response.data);

        _this.$store.dispatch("addItems", response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    completeOrder: function completeOrder() {
      var _order,
          _this2 = this;

      this.loading = true;
      var order = (_order = {
        payment_type: this.paymenttype,
        customer_phone: this.customer.customer_phone,
        customer_address: this.customer.customer_address,
        customer_name: this.customer.customer_name
      }, _defineProperty(_order, "customer_phone", this.customer.customer_phone), _defineProperty(_order, "customer_gstin", this.customer.customer_gstin ? this.customer.customer_gstin : ""), _defineProperty(_order, "base_amount", parseFloat(this.baseTotal).toFixed(2)), _defineProperty(_order, "discount_amount", parseFloat(this.discountAmount).toFixed(2)), _defineProperty(_order, "discount_percentage", parseFloat(this.discountPercentage).toFixed(2)), _defineProperty(_order, "gst_amount", parseFloat(this.netGst).toFixed(2)), _defineProperty(_order, "net_amount", parseFloat(this.netAmount).toFixed(2)), _defineProperty(_order, "rounded_amount", parseFloat(this.netRoundedAmount).toFixed(2)), _defineProperty(_order, "products", this.cart), _defineProperty(_order, "checkin", this.checkin), _defineProperty(_order, "checkout", this.checkout), _order);
      console.log('order', order);
      axios.post("/invoice", order).then(function (response) {
        _this2.loading = false;
        _this2.invoiceuuid = response.data.data;

        _this2.$store.dispatch("clearCart");

        _this2.$router.push("/invoices/".concat(_this2.invoiceuuid));

        _this2.step = 3;

        _this2.getItems();
      })["catch"](function (error) {
        if (error.response.status == 400) {
          _this2.$snack.danger({
            text: error.response.data.message,
            button: 'OK'
          });
        }

        if (error.response.status == 422) {
          _this2.errors = error.response.data.errors;

          _this2.$snack.danger({
            text: 'Please fix the errors and try again',
            button: 'OK'
          });
        }

        _this2.loading = false;
      });
    },
    printInvoice: function printInvoice() {
      _event_bus__WEBPACK_IMPORTED_MODULE_5__["EventBus"].$emit('print-invoice');
    }
  },
  computed: {
    showComplete: function showComplete() {
      return this.customer.customer_phone && this.customer.customer_name && this.customer.customer_address;
    },
    searchableItems: function searchableItems() {
      var matcher = new RegExp(this.search, "i");
      return this.items.filter(function (item) {
        return matcher.test([item.item_name, item.category.category_name].join());
      });
    },
    items: function items() {
      return this.$store.getters.items;
    },
    inCart: function inCart() {
      return this.$store.getters.inCart;
    },
    cart: function cart() {
      return this.$store.getters.cartItems;
    },
    total: function total() {
      return this.cart.reduce(function (accum, item) {
        return accum + item.base_price * item.quantity;
      }, 0);
    },
    baseTotal: function baseTotal() {
      return this.cart.reduce(function (accum, item) {
        return accum + item.base_price * item.quantity;
      }, 0);
    },
    discountAmount: function discountAmount() {
      return this.total * this.discountPercentage / 100;
    },
    netAmount: function netAmount() {
      return this.total - this.discountAmount + this.netGst;
    },
    netRoundedAmount: function netRoundedAmount() {
      return this.$root.$options.filters.roundedOff(this.netAmount);
    },
    netGst: function netGst() {
      var _this3 = this;

      return this.cart.reduce(function (accum, item) {
        var base_amount = item.base_price * item.quantity;
        var discount_amount = base_amount * _this3.discountPercentage / 100;
        var taxable_amount = base_amount - discount_amount;
        var total_gst = taxable_amount * (item.product_gst / 100);
        return accum + total_gst;
      }, 0);
    } // balanceLeft() {
    //     if(this.tender_amount >= this.netRoundedAmount) {
    //         return 0
    //     }
    //     return this.netRoundedAmount - this.tender_amount
    // }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ""
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.searchInput) {
        var url = "/invoices";
        var params = {
          page: page,
          search: this.searchInput
        };
        this.getInvoices(url, params);
      } else {
        var _url = "/invoices?page=".concat(page);

        this.getInvoices(_url);
      }
    },
    getInvoices: function getInvoices(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      return axios.get(url, {
        params: params
      }).then(function (response) {
        var dataRetured = response.data.data;

        if (_typeof(dataRetured) === "object") {
          dataRetured = Object.values(dataRetured);
        }

        _this.products = dataRetured;
        _this.nextUrl = response.data.next_page_url;
        _this.prevUrl = response.data.prev_page_url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Print.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      order: {},
      layout: 2
    };
  },
  props: {
    uuid: {
      type: String,
      required: true
    }
  },
  watch: {
    uuid: {
      deep: true,
      immediate: true,
      handler: "getInvoiceDetails"
    }
  },
  mounted: function mounted() {
    _event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$on("print-invoice", this.printOrder);
  },
  methods: {
    getInvoiceDetails: function getInvoiceDetails() {
      var _this = this;

      var url = "/invoices/".concat(this.uuid);
      return axios.get(url).then(function (response) {
        _this.order = response.data.data;
        var x = JSON.stringify(_this.order);
        console.log("order", x);
        _event_bus__WEBPACK_IMPORTED_MODULE_0__["EventBus"].$emit("invoice-amount", response.data.data.total_rounded_amount_payable);
      });
    },
    printOrder: function printOrder() {
      var divToPrint = this.$refs.printTable;
      var htmlToPrint = "\n\t\t\t\t<style>\n\t\t\t\t\thtml {\n\t\t\t\t\t\t// font-size: 12px;\n\t\t\t\t\t}\n\t\t\t\t\tbody {\n\t\t\t\t\t\tmargin: 5px;\n\t\t\t\t\t\tpadding: 5px;\n\t\t\t\t\t\tfont-family: Roboto, sans-serif;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t-webkit-region-break-inside: avoid;\n\t\t\t\t\t}\n\t\t\t\t\t.break {\n\t\t\t\t\t\tpage-break-after: always;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t}\n\t\t\t\t\t.table-wrapper {\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t}\n\t\t\t\t\t.brand-logo {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\t\tmargin-bottom: 0.5em;\n\t\t\t\t\t\theight: 60px !important\n\t\t\t\t\t}\n\t\t\t\t\t.mb1 {\n\t\t\t\t\t\tmargin-bottom: 1.5em;\n                    }\n                    .p-2 {\n                        padding: 0.5em !important;\n                    }\n                    .p-1 {\n                        padding: 0.25em !important;\n                    }\n                    .pb-2, .py-2 {\n                        padding-bottom: 0.5rem !important;\n                    }\n                    .pt-2, .py-2 {\n                        padding-top: 0.5rem !important;\n                    }\n                    .pl-1, .px-1 {\n                        padding-left: 0.25rem !important;\n                    }\n\n                    .pr-1, .px-1 {\n                        padding-right: 0.25rem !important;\n                    }\n\t\t\t\t\tsmall, .small {\n                        font-size: 90%;\n                        font-weight: 400;\n                    }\n\t\t\t\t\ttable {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tborder-collapse: collapse;\n\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.border-dashed{\n\t\t\t\t\t\tborder-bottom: dashed 1px #222;\n                    }\n                    .border{\n\t\t\t\t\t\tborder: solid 1px #222;\n                    }\n                    .border-right {\n                        border-right: 1px solid #222 !important;\n                    }\n\t\t\t\t\t.bt-1 {\n\t\t\t\t\t\tborder-top: 1px dashed #ddd;\n\t\t\t\t\t}\n\t\t\t\t\t.text-center {\n\t\t\t\t\t\ttext-align: center !important;\n\t\t\t\t\t}\n\t\t\t\t\t.text-right {\n\t\t\t\t\t\ttext-align: right !important;\n\t\t\t\t\t}\n\t\t\t\t\t.mt-4 {\n\t\t\t\t\t\tmargin-top: 4em;\n\t\t\t\t\t}\n\t\t\t\t\t.fw-bold {\n\t\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\t}\n\t\t\t\t\t.list-inline {\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\tlist-style-type: none; \n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\toverflow: hidden;  \n\t\t\t\t\t}\n\t\t\t\t\t.mb-1 {\n\t\t\t\t\t\tmargin-bottom: 0.25rem !important;\n\t\t\t\t\t}\n\t\t\t\t\t.pb-1 {\n\t\t\t\t\t\tpadding-bottom: 0.25rem !important; \n\t\t\t\t\t}\n\t\t\t\t\t.list-inline li {\n\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t// text-transform:uppercase;\n\t\t\t\t\t}\n\t\t\t\t\t.text-muted {\n\t\t\t\t\t\tcolor: #aaa;\n\t\t\t\t\t}\n\t\t\t\t\ttd {\n\t\t\t\t\t\t// padding-top: 5px;\n\t\t\t\t\t\t// padding-bottom: 5px;\n\t\t\t\t\t}\n\t\t\t\t\t.border-bottom-dashed {\n\t\t\t\t\t\tborder-bottom: dashed 1px #222; \n\t\t\t\t\t}\n\t\t\t\t\t.store_title { \n\t\t\t\t\t\ttext-transform: uppercase !important; \n\t\t\t\t\t\ttext-align: center !important; \n\t\t\t\t\t\tmargin-bottom: 0.25rem !important; \n\t\t\t\t\t\tfont-size: 1rem;  \n\t\t\t\t\t\tfont-family: inherit;\n\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t\tline-height: 1.2;\n\t\t\t\t\t\tcolor: inherit; \n\t\t\t\t\t}\n\t\t\t\t\t.float-right {\n\t\t\t\t\t\tfloat:right;\n\t\t\t\t\t}\n\t\t\t\t\t.text-uppercase {\n\t\t\t\t\t\ttext-transform: uppercase;\n                    }\n                    .text-underline {  \n                        text-decoration:underline solid #222;\n                    }\n                    .mt-m25 {\n    margin-top: 10px;\n                    }\n                    .mt-m40 {\n                    margin-top: 20px;\n                    }\n                    .text-left{\n                        text-align:left;\n                    }\n\t\t\t\t</style>\n\t\t\t\t";
      htmlToPrint += divToPrint.outerHTML;
      var newWin = window.open("");
      newWin.document.write(htmlToPrint);
      newWin.print();
      newWin.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Print_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print.vue */ "./resources/js/components/invoice/Print.vue");
/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event-bus */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default.a,
    InvoicePrint: _Print_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isBusy: false,
      balance: 0,
      showCollapse: false,
      tender_amount: 0,
      balances: [],
      invoiceAmount: ""
    };
  },
  mounted: function mounted() {
    _event_bus__WEBPACK_IMPORTED_MODULE_3__["EventBus"].$on("invoice-amount", this.handleInvoiceAmount);
  },
  methods: {
    handleInvoiceAmount: function handleInvoiceAmount(amount) {
      this.invoiceAmount = amount;
    },
    printInvoice: function printInvoice() {
      _event_bus__WEBPACK_IMPORTED_MODULE_3__["EventBus"].$emit("print-invoice");
    } // getBalance() {
    // 	axios
    // 		.get(`/invoices/${this.$route.params.uuid}/balance`)
    // 		.then( response => {
    // 			this.balance = response.data.data.balance
    // 			this.balances = response.data.data.balances
    // 		})
    // },
    // cancelBalance() {
    //   this.showCollapse = !this.showCollapse;
    //   this.tender_amount = 0;
    // },
    // balanceStore() {
    //   if (this.tender_amount > this.balance) {
    //     this.cancelBalance();
    //     this.$snack.danger({
    //       text: "Paid amount should not be more then pending amount!",
    //       button: "OK"
    //     });
    //     return;
    //   }
    //   this.$refs.balanceButton.classList.add("spinner");
    //   this.$refs.balanceButton.setAttribute("disabled", true);
    //   let obj = {
    //     balance: this.balance,
    //     tender_amount: parseFloat(this.tender_amount).toFixed(2),
    //     balance_left: parseFloat(this.balanceLeft).toFixed(2)
    //   };
    //   axios
    //     .post(`/invoices/${this.$route.params.uuid}/balance`, obj)
    //     .then(response => {
    //       this.getBalance();
    //       this.cancelBalance();
    //       this.$snack.success({
    //         text: "Balance has been updated successfully!",
    //         button: "OK"
    //       });
    //       this.$refs.balanceButton.classList.remove("spinner");
    //       this.$refs.balanceButton.removeAttribute("disabled", true);
    //     });
    // }

  },
  computed: {// balanceLeft() {
    //   if (parseFloat(this.tender_amount) >= this.balance) {
    //     return 0;
    //   }
    //   return this.balance - parseFloat(this.tender_amount);
    // }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholder.vue */ "./resources/js/components/ui/ContentPlaceholder.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholder: _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    uuid: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      spinner: false,
      gardendata: {},
      gardendetails: [],
      editGardenDetails: this.editable,
      states: [],
      districts: [],
      errors: {}
    };
  },
  mounted: function mounted() {
    this.gardendetails = [{
      name: "product_quantity",
      type: "text",
      edit: false,
      label: "Opening Stock"
    }, {
      name: "product_quantity_left",
      type: "text",
      edit: false,
      label: "Stock in Hand"
    }, {
      name: "product_base_price",
      type: "text",
      edit: false,
      label: "Stock Base Price"
    }, {
      name: "product_price",
      type: "text",
      edit: false,
      label: "Stock MRP"
    }];
  },
  computed: {
    editable: function editable() {
      return this.gardendata.product_quantity == this.gardendata.product_quantity_left ? true : false;
    }
  },
  watch: {
    uuid: {
      deep: true,
      immediate: true,
      handler: "loadProductData"
    }
  },
  methods: {
    loadProductData: function loadProductData() {
      var _this = this;

      if (this.uuid) {
        axios.get("/lot/".concat(this.uuid)).then(function (response) {
          _this.loading = false;
          _this.gardendata = response.data.data;

          _this.states.push(response.data.data.formatted_state);

          _this.districts = response.data.data.districts;
        })["catch"](function (error) {
          _this.loading = false;
        });
      }
    },
    editGarden: function editGarden() {
      this.editGardenDetails = !this.editGardenDetails;
      this._beforeEditData = Object.assign({}, this.gardendata);
    },
    cancelEdit: function cancelEdit() {
      this.editGardenDetails = !this.editGardenDetails;
      Object.assign(this.gardendata, this._beforeEditData);
    },
    updateGardenDetail: function updateGardenDetail() {
      var _this2 = this;

      this.spinner = true;
      axios.put("/lot/".concat(this.uuid), this.gardendata).then(function (response) {
        _this2.spinner = false;

        _this2.loadProductData();

        _this2.$snack.success({
          text: "Lot details updated",
          button: "Ok"
        });

        _this2.editGardenDetails = !_this2.editGardenDetails;
      })["catch"](function (error) {
        _this2.spinner = false;
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lot/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LotDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LotDetails.vue */ "./resources/js/components/lot/LotDetails.vue");
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
/* harmony import */ var _ui_AlertBox_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/AlertBox.vue */ "./resources/js/components/ui/AlertBox.vue");
//
//
//
//
//
//



 // import NavbarHeader from "../components/NavbarHeader.vue";



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_3___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AlertBox: _ui_AlertBox_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LotDetails: _LotDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      lot: {},
      showCollapse: false,
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: '',
      product_name: ''
    };
  },
  mounted: function mounted() {// this.getLots()
  },
  computed: {
    lotFieldCheck: function lotFieldCheck() {
      return Object.values(this.lot).reduce(function (sum, lot) {
        if (lot.length > 0) {
          sum++;
        }

        return sum;
      }, 0);
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      fields: ["Customer Name", "Mobile", "Address"],
      x: "",
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      dues: [],
      items: [] // items: [
      //   {
      //     isActive: true,
      //     age: 40,
      //     Customer: "Dickerson",
      //     Mobile: "Macdonald",
      //     Address: "dshsjd sjdbsd sdbsd",
      //     Date: ""
      //   },
      //   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   {
      //     isActive: false,
      //     age: 89,
      //     first_name: "Geneva",
      //     last_name: "Wilson",
      //     _showDetails: true
      //   },
      //   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      // ]

    };
  },
  mounted: function mounted() {
    this.getOldcustomers(); // this.getDues();
  },
  computed: {},
  methods: {
    getDues: function getDues(id) {
      var _this = this;

      console.log(id);
      axios.get("/oldcustomers/getdues/".concat(id)).then(function (res) {
        _this.dues = res.data.data;
      });
    },
    getOldcustomers: function getOldcustomers() {
      var _this2 = this;

      axios.get("/customers").then(function (res) {
        _this2.items = res.data.data;
        console.log("fuck-----------".concat(_this2.items));
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ''
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.searchInput) {
        var url = "/invoices";
        var params = {
          page: page,
          search: this.searchInput
        };
        this.getInvoices(url, params);
      } else {
        var _url = "/invoices?page=".concat(page);

        this.getInvoices(_url);
      }
    },
    getInvoices: function getInvoices(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      return axios.get(url, {
        params: params
      }).then(function (response) {
        var dataRetured = response.data.data;

        if (_typeof(dataRetured) === "object") {
          dataRetured = Object.values(dataRetured);
        }

        _this.products = dataRetured;
        _this.nextUrl = response.data.next_page_url;
        _this.prevUrl = response.data.prev_page_url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      customer: {},
      errors: {},
      categories: []
    };
  },
  mounted: function mounted() {
    console.log("kela");
    this.getAllCategories();
  },
  methods: {
    generateCustomer: function generateCustomer() {
      var _this = this;

      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);
      axios.post("/oldcustomers", this.customer).then(function (response) {
        _this.product = {};

        _this.$snack.success({
          text: "Customer has been created successfully!",
          button: "OK"
        });

        setTimeout(function () {
          _this.$router.push("/customers/old");
        }, 2000);
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;

        _this.$refs.submitButton.classList.remove("spinner");

        _this.$refs.submitButton.removeAttribute("disabled");
      }).then(function () {
        _this.$refs.submitButton.classList.remove("spinner");

        _this.$refs.submitButton.removeAttribute("disabled");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_1___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      fields: ["Customer Name", "GSTN", "Mobile", "Address", "Date", "Action"],
      x: "",
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
      dues: [],
      items: [] // items: [
      //   {
      //     isActive: true,
      //     age: 40,
      //     Customer: "Dickerson",
      //     Mobile: "Macdonald",
      //     Address: "dshsjd sjdbsd sdbsd",
      //     Date: ""
      //   },
      //   { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   {
      //     isActive: false,
      //     age: 89,
      //     first_name: "Geneva",
      //     last_name: "Wilson",
      //     _showDetails: true
      //   },
      //   { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      // ]

    };
  },
  mounted: function mounted() {
    this.getOldcustomers(); // this.getDues();
  },
  computed: {},
  methods: {
    getDues: function getDues(id) {
      var _this = this;

      console.log(id);
      axios.get("/oldcustomers/getdues/".concat(id)).then(function (res) {
        _this.dues = res.data.data;
      });
    },
    getOldcustomers: function getOldcustomers() {
      var _this2 = this;

      axios.get("/oldcustomers").then(function (res) {
        _this2.items = res.data.data;
        console.log("fuck-----------".concat(_this2.items));
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: "",
      transactions: "",
      newTransac: {},
      dues: []
    };
  },
  mounted: function mounted() {
    this.getTransaction();
    this.getDues();
  },
  filters: {
    dateparse: function dateparse(takedate) {
      var event = new Date(Date.parse(takedate));
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return event.toLocaleDateString("en-EN", options);
    }
  },
  methods: {
    getDues: function getDues() {
      var _this = this;

      console.log("sdsd", this.$route.params.id);
      axios.get("/oldcustomers/getdues/".concat(this.$route.params.id)).then(function (res) {
        _this.dues = res.data.data;
      });
    },
    getTransaction: function getTransaction() {
      var _this2 = this;

      console.log(this.$route.params.id);
      axios.get("/oldcustomers/payments/".concat(this.$route.params.id)).then(function (res) {
        _this2.transactions = res.data.data;
      });
    },
    makeTransaction: function makeTransaction() {
      var _this3 = this;

      if (this.newTransac.payment_made > this.dues['Pending Amount']) {
        this.$snack.danger({
          text: 'Paid amount should not be more then pending amount!',
          button: 'OK'
        });
        return;
      }

      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);
      this.newTransac.oldcustomer_id = this.$route.params.id; // console.log("okk");

      axios.post("/oldcustomers/payment", this.newTransac).then(function (res) {
        _this3.$snack.success({
          text: "Payment has been saved successfully!",
          button: "OK"
        });

        _this3.newTransac = {}; // setTimeout(() => {

        _this3.getTransaction();

        _this3.getDues(); // this.$router.push(
        //   `/oldcustomers/transaction/${this.$route.params.id}`
        // );
        // }, 2000);

      })["catch"](function (errors) {
        _this3.errors = errors.response.data.errors;

        _this3.$refs.submitButton.classList.remove("spinner");

        _this3.$refs.submitButton.removeAttribute("disabled");
      }).then(function () {
        _this3.$refs.submitButton.classList.remove("spinner");

        _this3.$refs.submitButton.removeAttribute("disabled");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {},
      errors: {},
      categories: []
    };
  },
  mounted: function mounted() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories: function getAllCategories(url) {
      var _this2 = this;

      var _this = this;

      axios.get("/category").then(function (response) {
        response.data.map(function (category) {
          var Obj = {};
          Obj.value = category.id;
          Obj.text = category.category_name;

          _this2.categories.push(Obj);
        });
      });
    },
    generateProduct: function generateProduct() {
      var _this3 = this;

      this.$refs.submitButton.classList.add("spinner");
      this.$refs.submitButton.setAttribute("disabled", true);
      axios.post("/products", this.product).then(function (response) {
        _this3.product = {};

        _this3.$snack.success({
          text: "Product has been created successfully!",
          button: "OK"
        });

        setTimeout(function () {
          _this3.$router.push("/products");
        }, 2000);
      })["catch"](function (errors) {
        _this3.errors = errors.response.data.errors;

        _this3.$refs.submitButton.classList.remove("spinner");

        _this3.$refs.submitButton.removeAttribute("disabled");
      }).then(function () {
        _this3.$refs.submitButton.classList.remove("spinner");

        _this3.$refs.submitButton.removeAttribute("disabled");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import NavbarHeader from "../components/NavbarHeader.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_2___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ""
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.searchInput) {
        var url = "/products";
        var params = {
          page: page,
          search: this.searchInput
        };
        this.getInvoices(url, params);
      } else {
        var _url = "/products?page=".concat(page);

        this.getInvoices(_url);
      }
    },
    getInvoices: function getInvoices(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      return axios.get(url, {
        params: params
      }).then(function (response) {
        var dataRetured = response.data.data; // if (typeof dataRetured === "object") {
        // 	dataRetured = Object.values(dataRetured);
        // }

        _this.products = dataRetured;
        _this.nextUrl = response.data.next_page_url;
        _this.prevUrl = response.data.prev_page_url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ContentPlaceholder.vue */ "./resources/js/components/ui/ContentPlaceholder.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholder: _ui_ContentPlaceholder_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    uuid: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      loading: true,
      spinner: false,
      productdata: {},
      gardendetails: [],
      editGardenDetails: false,
      categories: [],
      districts: [],
      errors: {}
    };
  },
  mounted: function mounted() {
    this.gardendetails = [{
      name: "product_name",
      type: "text",
      edit: false,
      label: "Product Name"
    }, // {
    // 	name: "hsn_code",
    // 	type: "text",
    // 	edit: false,
    // 	label: "HSN Code"
    // },
    // {
    // 	name: "state_id",
    // 	type: "select",
    // 	edit: false,
    // 	label: "State"
    // },
    // {
    // 	name: "garden_district",
    // 	type: "select",
    // 	edit: false,
    // 	label: "District"
    // },
    // {
    // 	name: "manufacturer",
    // 	type: "text",
    // 	edit: false,
    // 	label: "Manufacturer"
    // },
    {
      name: "category_id",
      type: "select",
      edit: false,
      label: "Category"
    }, {
      name: "uom",
      type: "text",
      edit: false,
      label: "UOM"
    }, {
      name: "gst",
      type: "text",
      edit: false,
      label: "GST"
    }];
  },
  watch: {
    uuid: {
      deep: true,
      immediate: true,
      handler: "loadProductData"
    }
  },
  methods: {
    loadProductData: function loadProductData() {
      var _this = this;

      if (this.uuid) {
        axios.all([axios.get("/products/".concat(this.uuid)), axios.get('/category')]).then(axios.spread(function (product_response, category_response) {
          _this.loading = false;
          _this.productdata = product_response.data.data;
          category_response.data.map(function (category) {
            var Obj = {};
            Obj.value = category.id;
            Obj.text = category.category_name;

            _this.categories.push(Obj);
          });
        })); // .catch(error => {
        // 	this.loading = false;
        // });
      }
    },
    editGarden: function editGarden() {
      this.editGardenDetails = !this.editGardenDetails;
      this._beforeEditData = Object.assign({}, this.productdata);
    },
    cancelEdit: function cancelEdit() {
      this.editGardenDetails = !this.editGardenDetails;
      Object.assign(this.productdata, this._beforeEditData);
    },
    updateProductDetail: function updateProductDetail() {
      var _this2 = this;

      this.spinner = true;
      console.log(this.productdata);
      axios.post("/products/".concat(this.uuid), this.productdata).then(function (response) {
        _this2.spinner = false; // this.loadProductData();

        _this2.$snack.success({
          text: "Product details updated",
          button: "Ok"
        });

        _this2.editGardenDetails = !_this2.editGardenDetails;
      })["catch"](function (error) {
        _this2.spinner = false;
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetails_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue */ "./resources/js/components/product/ProductDetails.vue");
/* harmony import */ var _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ContentPlaceholderTable.vue */ "./resources/js/components/ui/ContentPlaceholderTable.vue");
/* harmony import */ var _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Paginate.vue */ "./resources/js/components/ui/Paginate.vue");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/NotFound.vue */ "./resources/js/components/ui/NotFound.vue");
/* harmony import */ var _ui_AlertBox_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/AlertBox.vue */ "./resources/js/components/ui/AlertBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//



 // import NavbarHeader from "../components/NavbarHeader.vue";



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContentPlaceholderTable: _ui_ContentPlaceholderTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginate: _ui_Paginate_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_3___default.a,
    NotFound: _ui_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AlertBox: _ui_AlertBox_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ProductDetails: _ProductDetails_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      lot: {},
      showCollapse: false,
      isBusy: false,
      products: [],
      prevUrl: null,
      nextUrl: null,
      searchInput: ""
    };
  },
  mounted: function mounted() {},
  computed: {
    lotFieldCheck: function lotFieldCheck() {
      return Object.values(this.lot).reduce(function (sum, lot) {
        if (lot.length > 0) {
          sum++;
        }

        return sum;
      }, 0);
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PasswordChange",
  data: function data() {
    return {
      spinner: false,
      user: {},
      errors: {},
      successMessage: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      this.spinner = true;
      axios.post("password/change", {
        old: this.user.old,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      }).then(function (response) {
        _this.spinner = false;
        _this.successMessage = response.data.message;
        _this.user = {};
      })["catch"](function (error) {
        _this.spinner = false;
        _this.errors = error.response.data.errors;
        _this.successMessage = "";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/Profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/Profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Profile",
  data: function data() {
    return {
      spinner: false,
      User: this.$root.user,
      errors: {},
      successMessage: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      this.spinner = true;
      axios.post("password/change", {
        old: this.user.old,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      }).then(function (response) {
        _this.spinner = false;
        _this.successMessage = response.data.message;
        _this.user = {};
      })["catch"](function (error) {
        _this.spinner = false;
        _this.errors = error.response.data.errors;
        _this.successMessage = "";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-zondicons */ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js");
/* harmony import */ var vue_zondicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_zondicons__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AlertBox",
  components: {
    Zondicon: vue_zondicons__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    variant: {
      type: String,
      "default": "info"
    }
  },
  computed: {
    variantClass: function variantClass() {
      return {
        "border-top-info text-info": this.variant == "info",
        "border-top-success text-success": this.variant == "success",
        "border-top-danger text-danger": this.variant == "danger"
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    noShadow: {
      type: Boolean,
      "default": false
    },
    noImage: {
      type: Boolean,
      "default": false
    },
    height: {
      type: String,
      "default": "400px"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    prevUrl: {
      required: true,
      validator: function validator(prop) {
        return typeof prop === 'string' || prop === null;
      },
      "default": null
    },
    nextUrl: {
      required: true,
      validator: function validator(prop) {
        return typeof prop === 'string' || prop === null;
      },
      "default": null
    },
    clickHandler: {
      type: Function,
      "default": function _default() {}
    }
  },
  methods: {
    pageNumber: function pageNumber(page) {
      return page.split(/[page= ]+/).pop();
    },
    prevPage: function prevPage() {
      if (this.prevUrl == null) return;
      var number = this.pageNumber(this.prevUrl);
      this.$emit('input', number);
      this.clickHandler(number);
    },
    nextPage: function nextPage() {
      if (this.nextUrl == null) return;
      var number = this.pageNumber(this.nextUrl);
      this.$emit('input', number);
      this.clickHandler(number);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/index.js ***!
  \*************************************************/
/*! exports provided: componentsPlugin, BVModalPlugin, BVToastPlugin, AlertPlugin, BAlert, BadgePlugin, BBadge, BreadcrumbPlugin, BBreadcrumb, BBreadcrumbItem, ButtonPlugin, BButton, BButtonClose, ButtonGroupPlugin, BButtonGroup, ButtonToolbarPlugin, BButtonToolbar, CardPlugin, BCard, BCardBody, BCardFooter, BCardGroup, BCardHeader, BCardImg, BCardImgLazy, BCardSubTitle, BCardText, BCardTitle, CarouselPlugin, BCarousel, BCarouselSlide, CollapsePlugin, BCollapse, DropdownPlugin, BDropdown, BDropdownItem, BDropdownItemButton, BDropdownDivider, BDropdownForm, BDropdownGroup, BDropdownHeader, BDropdownText, EmbedPlugin, BEmbed, FormPlugin, BForm, BFormDatalist, BFormText, BFormInvalidFeedback, BFormValidFeedback, FormCheckboxPlugin, BFormCheckbox, BFormCheckboxGroup, FormFilePlugin, BFormFile, FormGroupPlugin, BFormGroup, FormInputPlugin, BFormInput, FormRadioPlugin, BFormRadio, BFormRadioGroup, FormSelectPlugin, BFormSelect, FormTextareaPlugin, BFormTextarea, ImagePlugin, BImg, BImgLazy, InputGroupPlugin, BInputGroup, BInputGroupAddon, BInputGroupAppend, BInputGroupPrepend, BInputGroupText, JumbotronPlugin, BJumbotron, LayoutPlugin, BContainer, BRow, BCol, BFormRow, LinkPlugin, BLink, ListGroupPlugin, BListGroup, BListGroupItem, MediaPlugin, BMedia, BMediaAside, BMediaBody, ModalPlugin, BModal, NavPlugin, BNav, BNavForm, BNavItem, BNavItemDropdown, BNavText, NavbarPlugin, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle, PaginationPlugin, BPagination, PaginationNavPlugin, BPaginationNav, PopoverPlugin, BPopover, ProgressPlugin, BProgress, BProgressBar, SpinnerPlugin, BSpinner, TablePlugin, BTable, BTableLite, TabsPlugin, BTabs, BTab, ToastPlugin, BToast, BToaster, TooltipPlugin, BTooltip, directivesPlugin, VBModalPlugin, VBModal, VBPopoverPlugin, VBPopover, VBScrollspyPlugin, VBScrollspy, VBTogglePlugin, VBToggle, VBTooltipPlugin, VBTooltip, BVConfigPlugin, BVConfig, BootstrapVue, install, setConfig, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/bootstrap-vue/esm/index.js'");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/chart.js/dist/Chart.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabs-component-tabs {\n    border-radius: 6px;\n    margin-bottom: 5px;\n}\n@media (min-width: 700px) {\n.tabs-component-tabs {\n        border: 0;\n        align-items: center;\n        display: flex !important;\n        flex-wrap: wrap !important;\n        margin-right: 0.2rem;\n        padding: 10px;\n}\n}\n.tabs-component-tab {\n    color: #999;\n    font-size: 14px;\n    font-family: inherit;\n    font-weight: 500;\n    margin-right: 0;\n    list-style: none;\n    margin-bottom: 0.5em;\n    border-radius: 6px;\n\n    flex-direction: row;\n    flex-grow: 1;\n}\n.tabs-component-tab:hover {\n    color: #666;\n}\n.tabs-component-tab.is-active {\n    background-color: #17a2b8;\n    color: white;\n    border-color: inherit;\n}\n.tabs-component-tab.is-active .tabs-component-tab-a:hover {\n    color: white !important;\n    text-decoration: none;\n}\n.tabs-component-tab.is-disabled * {\n    color: #cdcdcd;\n    cursor: not-allowed !important;\n}\n@media (min-width: 700px) {\n.tabs-component-tab {\n        border: solid 1px #ddd;\n        margin-right: 0.5em;\n        display: inline-block !important;\n}\n}\n.tabs-component-tab-a {\n    align-items: center;\n    color: inherit;\n    display: flex;\n    padding: 0.35em 0.65em;\n    text-decoration: none;\n    justify-content: center;\n}\n.tabs-component-tab-a:hover {\n    text-decoration: none;\n    color: #17a2b8;\n}\n.tabs-component-panels {\n\tbackground-color: #fff;\n\tborder-top: solid 1px #ddd;\n\tborder-radius: 6px;\n\tbox-shadow: none !important;\n}\n.fill-current {\n\tfill: currentColor;\n}\n.btn .icon {\n    -ms-flex-negative: 0;\n    color: inherit;\n    flex-shrink: 0;\n}\n.icon--sm {\n    font-size: 24px;\n}\n.icon {\n    -ms-flex-negative: 0;\n    color: inherit;\n    flex-shrink: 0;\n    height: 1em;\n    line-height: 1;\n    width: 1em;\n}\n.btn span, .icon {\n    vertical-align: middle;\n}\nsvg {\n    overflow: hidden;\n}\n.border-bottom-dashed {\n\tborder-bottom: dashed 1px #222;\n}\n.store_title { \n\ttext-transform: uppercase !important; \n\ttext-align: center !important; \n\tmargin-bottom: 0.25rem !important; \n\tfont-size: 1rem;  \n\tfont-family: inherit;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 0;\n}\n.text-grey {\n\tcolor: #6c757d;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.border[data-v-57eb7920] {\n  border: 1px solid #222 !important;\n}\n.border-right[data-v-57eb7920] {\n  border-right: 1px solid #222 !important;\n}\n.text-underline[data-v-57eb7920] {\n  -webkit-text-decoration: underline solid #222;\n          text-decoration: underline solid #222;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na[data-v-0ac653b7] {\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/moment/moment.js'");

/***/ }),

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/number-to-words/numberToWords.min.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? [_c("content-placeholder")]
        : [
            _c("b-card", [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-between"
                  },
                  [
                    _c("h6", { staticClass: "mb-0 h5 text-truncate" }, [
                      _vm._v("Category Details")
                    ]),
                    _vm._v(" "),
                    [
                      !_vm.editGardenDetails
                        ? _c(
                            "b-button",
                            {
                              staticClass: "font-weight-500 mb-0",
                              attrs: { variant: "link" },
                              on: { click: _vm.editGarden }
                            },
                            [_vm._v("Edit")]
                          )
                        : _vm._e()
                    ],
                    _vm._v(" "),
                    _vm.editGardenDetails
                      ? _c(
                          "div",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "font-weight-500 mb-0",
                                class: { spinner: _vm.spinner == true },
                                attrs: {
                                  variant: "primary",
                                  disabled: _vm.spinner
                                },
                                on: { click: _vm.updateGardenDetail }
                              },
                              [_vm._v("Update")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass:
                                  "border font-weight-500 mb-0 ml-2 text-gray-600",
                                attrs: { variant: "link" },
                                on: { click: _vm.cancelEdit }
                              },
                              [_vm._v("Cancel")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush" },
                  _vm._l(_vm.gardendetails, function(gardendetail, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "list-group-item border-0 pl-0"
                      },
                      [
                        _c("div", { staticClass: "row align-items-center" }, [
                          _c("div", { staticClass: "col-12 col-sm-4" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-muted mb-1 mb-md-0 text-sm text-md-right"
                              },
                              [_vm._v(_vm._s(gardendetail.label))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-sm-5" },
                            [
                              !_vm.editGardenDetails
                                ? [
                                    gardendetail.name == "state_id"
                                      ? _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.gardendata.formatted_state
                                                ? _vm.gardendata.formatted_state
                                                    .text
                                                : ""
                                            )
                                          )
                                        ])
                                      : _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.gardendata[gardendetail.name]
                                            )
                                          )
                                        ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editGardenDetails
                                ? [
                                    gardendetail.type == "text"
                                      ? _c("b-form-input", {
                                          attrs: {
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            keydown: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_state"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_tb"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_nature_of_ownership"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: [
                                              "Propritorship",
                                              "Joint",
                                              "Partnership"
                                            ],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null,
                                            name: "garden_nature_of_ownership"
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "state_id"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.states,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "garden_district"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.districts,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors[gardendetail.name]
                                            ? _vm.errors[gardendetail.name][0]
                                            : ""
                                        )
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.generateProduct($event)
            }
          }
        },
        [
          _c("b-card", { attrs: { title: "Add a new Category" } }, [
            _c("div", [
              _c("hr", { staticClass: "mx-n4" }),
              _vm._v(" "),
              _c("div", { staticClass: "row py-3" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h6", { staticClass: "text-uppercase tracking-wide" }, [
                    _vm._v("Category Details")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-black-50 mb-0" }, [
                    _vm._v("Enter basic details of the Category.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "category_name",
                              label: "Category Name",
                              "label-for": "category_name",
                              state: _vm.errors.category_name ? false : null,
                              "invalid-feedback": _vm.errors.category_name
                                ? _vm.errors.category_name[0]
                                : ""
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "category_name",
                                state: _vm.errors.category_name ? false : null
                              },
                              nativeOn: {
                                keydown: function($event) {
                                  delete _vm.errors.category_name
                                }
                              },
                              model: {
                                value: _vm.product.category_name,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.product,
                                    "category_name",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "product.category_name"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text-right py-2",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "b-button",
                  {
                    ref: "submitButton",
                    staticClass: "mb-0",
                    attrs: { type: "submit", size: "lg", variant: "primary" }
                  },
                  [_vm._v("Add Category")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Categories")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by category name..." },
                    on: {
                      input: function($event) {
                        return _vm.getCategories(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "text-md-right", attrs: { sm: "6" } },
            [
              _c(
                "b-button",
                { attrs: { variant: "primary", to: "/category/generate" } },
                [
                  _c("Zondicon", {
                    staticClass: "fill-current mr-2",
                    attrs: { icon: "add-outline", width: "20" }
                  }),
                  _vm._v("New Category\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        {
          class: { "spinner spinner-md spinner-green": _vm.isBusy },
          attrs: { "no-body": "" }
        },
        [
          _c("table", { staticClass: "table w-full table-custom" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Category Name")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Date Created")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("Last Updated")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(product) {
                return _c("tr", { key: product.id }, [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "no-underline text-red hover:text-red-dark",
                          attrs: {
                            to: {
                              name: "showcategory",
                              params: { uuid: product.uuid, product: product }
                            },
                            title: "view details"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(product.category_name) +
                              " \n                            "
                          ),
                          _c("span", [_vm._v("→")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(product.created_at)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(product.updated_at)))
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-end align-items-center bg-light p-3"
            },
            [
              _c("paginate", {
                attrs: {
                  "prev-url": _vm.prevUrl,
                  "next-url": _vm.nextUrl,
                  "click-handler": _vm.getCategories
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [_c("category-details", { attrs: { uuid: _vm.$route.params.uuid } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "my-4" },
    [
      _c(
        "b-card",
        {
          staticClass: "mb-4",
          attrs: { title: _vm.greeting() + ", " + _vm.$root.user.name }
        },
        [
          _c("div", { staticClass: "row w-100" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("p", { staticClass: "mb-4 text-muted" }, [
                _vm._v("Today is " + _vm._s(new Date()))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "lead text-muted mt-5 mb-4" }, [
                _vm._v("Here's your summary of total sales")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 col-md-3 mb-4 mb-md-0" }, [
                  _c("h4", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.sales.daily_sales))
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
                    },
                    [_vm._v("Today")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 col-md-3 mb-4 mb-md-0 border-left" },
                  [
                    _c("h4", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.sales.weekly_sales))
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
                      },
                      [_vm._v("Last Week")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 col-md-3 mb-4 mb-md-0 border-left" },
                  [
                    _c("h4", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.sales.monthly_sales))
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
                      },
                      [_vm._v("Last Month")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 col-md-3 mb-4 mb-md-0 border-left" },
                  [
                    _c("h4", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(_vm.sales.total_sales))
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "d-block text-muted text-xs text-uppercase tracking-wide text-truncate"
                      },
                      [_vm._v("Total Sales")]
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("b-card", { staticClass: "mb-4" }, [
        _c("div", { staticClass: "d-flex justify-content-between" }, [
          _c("h4", { staticClass: "mb-0" }, [_vm._v("\n\t\t\t\tSales\n\t\t\t")])
        ]),
        _vm._v(" "),
        _c("canvas", {
          staticStyle: { width: "100%", height: "300px" },
          attrs: { id: "myChart" }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-white shadow rounded w-full h-full" }, [
      _c("canvas", {
        staticClass: "p-3",
        staticStyle: { width: "100%", height: "100%" },
        attrs: { id: "myChart" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vue-status", [
        _c(
          "div",
          { attrs: { slot: "online" }, slot: "online" },
          [
            _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
              _c("div", { staticClass: "row d-flex" }, [
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "card card-body border-0 mb-4" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Search By Product Name or Category"
                      },
                      domProps: { value: _vm.search },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card border-0" },
                    [
                      _c(
                        "vue-scrollbar",
                        {
                          ref: "Scrollbar",
                          staticClass: "my-scrollbar w-100",
                          staticStyle: { height: "calc(100vh - 200px)" }
                        },
                        [
                          _vm.searchableItems.length
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "rounded list-group list-group-flush d-block"
                                },
                                _vm._l(_vm.searchableItems, function(item) {
                                  return _c(
                                    "div",
                                    {
                                      key: item.id,
                                      staticClass:
                                        "list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0"
                                    },
                                    [
                                      _c("div", { staticClass: "w-100" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "media align-items-center p-3"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "d-flex media-body justify-content-between align-items-center",
                                                attrs: { href: "#" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.addToCart(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "flex-grow-1"
                                                  },
                                                  [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block font-weight-bold tracking-wide text-dark"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            item.item_name
                                                          ) +
                                                            "   @" +
                                                            _vm._s(
                                                              item.base_price
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-black-50"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                            _vm._s(
                                                              item.category
                                                                .category_name
                                                            ) +
                                                            "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "icon icon-chevron-bottom",
                                                    attrs: {
                                                      width: "24",
                                                      height: "24",
                                                      fill: "#cccccc",
                                                      viewBox: "0 0 32 32",
                                                      "aria-hidden": "true"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            : _c(
                                "div",
                                _vm._l(7, function(i) {
                                  return _c(
                                    "div",
                                    { key: i, staticClass: "border-bottom" },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "fill-current",
                                          staticStyle: { color: "#eee" },
                                          attrs: { height: "82" }
                                        },
                                        [
                                          _c("rect", {
                                            attrs: {
                                              x: "20",
                                              y: "10",
                                              rx: "4",
                                              ry: "4",
                                              width: "64",
                                              height: "64"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("rect", {
                                            attrs: {
                                              x: "100",
                                              y: "23",
                                              rx: "4",
                                              ry: "4",
                                              width: "200",
                                              height: "13"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("rect", {
                                            attrs: {
                                              x: "100",
                                              y: "47",
                                              rx: "4",
                                              ry: "4",
                                              width: "100",
                                              height: "8"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7" }, [
                  _c("div", { staticClass: "card border-0 h-100" }, [
                    _vm.inCart.length || _vm.step === 3
                      ? _c(
                          "div",
                          [
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "card-title" }, [
                                _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("Cart")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary badge-pill float-right"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.cart.length) +
                                        " " +
                                        _vm._s(
                                          _vm._f("pluralize")(
                                            _vm.cart.length,
                                            "item"
                                          )
                                        ) +
                                        " "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm.inCart.length || _vm.step === 3
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "mt-3 d-flex justify-content-between align-items-center"
                                    },
                                    [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 font-weight-bold text-grey small",
                                          class: {
                                            "text-primary":
                                              _vm.step === 1 ||
                                              _vm.step === 2 ||
                                              _vm.step === 3
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "rounded-circle border d-inline-flex align-items-center justify-content-center",
                                              staticStyle: {
                                                width: "32px",
                                                height: "32px"
                                              }
                                            },
                                            [_vm._v("1")]
                                          ),
                                          _vm._v(" Cart Items")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", {
                                        staticClass: "mb-0 rounded",
                                        class: {
                                          "bg-primary-light":
                                            _vm.step === 2 || _vm.step === 3,
                                          "bg-light": _vm.step === 1
                                        },
                                        staticStyle: {
                                          height: "4px",
                                          width: "100px"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 font-weight-bold text-grey small",
                                          class: {
                                            "text-primary":
                                              _vm.step === 2 || _vm.step === 3
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "rounded-circle border d-inline-flex align-items-center justify-content-center",
                                              staticStyle: {
                                                width: "32px",
                                                height: "32px"
                                              }
                                            },
                                            [_vm._v("2")]
                                          ),
                                          _vm._v(" Payments")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("p", {
                                        staticClass: "mb-0 rounded",
                                        class: {
                                          "bg-primary-light": _vm.step === 3,
                                          "bg-light":
                                            _vm.step === 1 || _vm.step === 2
                                        },
                                        staticStyle: {
                                          height: "4px",
                                          width: "100px"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 font-weight-bold text-grey small",
                                          class: {
                                            "text-primary": _vm.step === 3
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "rounded-circle border d-inline-flex align-items-center justify-content-center",
                                              staticStyle: {
                                                width: "32px",
                                                height: "32px"
                                              }
                                            },
                                            [_vm._v("3")]
                                          ),
                                          _vm._v(" Complete")
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c(
                              "vue-scrollbar",
                              {
                                ref: "Scrollbar",
                                staticStyle: {
                                  height: "calc(100vh - 270px)",
                                  "overflow-y": "scroll"
                                },
                                attrs: { classes: "my-scrollbar w-100" }
                              },
                              [
                                _c(
                                  "transition",
                                  { attrs: { name: "fade", mode: "out-in" } },
                                  [
                                    _vm.step === 1
                                      ? _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-group mb-0 list-group-flush d-block"
                                          },
                                          [
                                            _vm._l(_vm.cart, function(
                                              cartitem,
                                              index
                                            ) {
                                              return _c(
                                                "li",
                                                {
                                                  key: cartitem.id,
                                                  staticClass:
                                                    "list-group-item d-flex flex-fill justify-content-between align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "container px-0"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row no-gutters"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-8"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "row no-gutters"
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col col-md-6"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "h6",
                                                                        {
                                                                          staticClass:
                                                                            "my-0"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "truncate"
                                                                              )(
                                                                                cartitem.name,
                                                                                28
                                                                              )
                                                                            )
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "font-weight-bold small"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              cartitem.product_name
                                                                            ) +
                                                                              " "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-md-6 text-right"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        [
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "text-primary",
                                                                              attrs: {
                                                                                href:
                                                                                  "#"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.decrementItemFromCart(
                                                                                    cartitem.id
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "svg",
                                                                                {
                                                                                  staticClass:
                                                                                    "fill-current",
                                                                                  attrs: {
                                                                                    width:
                                                                                      "24",
                                                                                    viewBox:
                                                                                      "0 0 20 20"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "path",
                                                                                    {
                                                                                      attrs: {
                                                                                        d:
                                                                                          "M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"
                                                                                      }
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "d-inline-block mx-2 p-1 border rounded text-center",
                                                                              staticStyle: {
                                                                                width:
                                                                                  "35px"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  parseInt(
                                                                                    cartitem.quantity
                                                                                  )
                                                                                )
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "a",
                                                                            {
                                                                              staticClass:
                                                                                "text-primary",
                                                                              attrs: {
                                                                                href:
                                                                                  "#"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  $event.preventDefault()
                                                                                  return _vm.incrementItemFromCart(
                                                                                    cartitem.id
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "svg",
                                                                                {
                                                                                  staticClass:
                                                                                    "fill-current",
                                                                                  attrs: {
                                                                                    width:
                                                                                      "24",
                                                                                    viewBox:
                                                                                      "0 0 20 20"
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "path",
                                                                                    {
                                                                                      attrs: {
                                                                                        d:
                                                                                          "M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                                                                                      }
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "col-md-4 text-md-right"
                                                            },
                                                            [
                                                              _c("span", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "currency"
                                                                    )(
                                                                      parseInt(
                                                                        cartitem.quantity
                                                                      ) *
                                                                        cartitem.base_price,
                                                                      "₹"
                                                                    )
                                                                  )
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "ml-3 text-danger no-underline fill-current",
                                                                  staticStyle: {
                                                                    width:
                                                                      "100px"
                                                                  },
                                                                  attrs: {
                                                                    href: "#"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.preventDefault()
                                                                      return _vm.removeFromCart(
                                                                        index
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "svg",
                                                                    {
                                                                      attrs: {
                                                                        xmlns:
                                                                          "http://www.w3.org/2000/svg",
                                                                        width:
                                                                          "24",
                                                                        height:
                                                                          "24",
                                                                        viewBox:
                                                                          "0 0 24 24"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs: {
                                                                            fill:
                                                                              "none",
                                                                            d:
                                                                              "M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                                                                          }
                                                                        }
                                                                      ),
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs: {
                                                                            d:
                                                                              "M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
                                                                          }
                                                                        }
                                                                      ),
                                                                      _c(
                                                                        "path",
                                                                        {
                                                                          attrs: {
                                                                            d:
                                                                              "M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"
                                                                          }
                                                                        }
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "li",
                                              {
                                                staticClass:
                                                  "list-group-item d-flex align-items-center justify-content-between"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    "Discount in percentage"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.discountPercentage,
                                                      expression:
                                                        "discountPercentage"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm text-right",
                                                  staticStyle: {
                                                    width: "100px"
                                                  },
                                                  attrs: {
                                                    type: "number",
                                                    step: "0.01",
                                                    min: "0",
                                                    max: "100"
                                                  },
                                                  domProps: {
                                                    value:
                                                      _vm.discountPercentage
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.discountPercentage =
                                                        $event.target.value
                                                    }
                                                  }
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "li",
                                              {
                                                staticClass:
                                                  "list-group-item d-flex justify-content-between"
                                              },
                                              [
                                                _c("span", [_vm._v("Total")]),
                                                _vm._v(" "),
                                                _c("strong", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency")(
                                                        _vm.total,
                                                        "₹"
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.discountPercentage > 0
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "list-group-item d-flex justify-content-between"
                                                  },
                                                  [
                                                    _c("span", [
                                                      _vm._v("Discount")
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("strong", [
                                                      _vm._v(
                                                        "- " +
                                                          _vm._s(
                                                            _vm._f("currency")(
                                                              _vm.discountAmount,
                                                              "₹"
                                                            )
                                                          )
                                                      )
                                                    ])
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "li",
                                              {
                                                staticClass:
                                                  "list-group-item d-flex justify-content-between"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v("Total GST")
                                                ]),
                                                _vm._v(" "),
                                                _c("strong", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency")(
                                                        _vm.netGst,
                                                        "₹"
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "li",
                                              {
                                                staticClass:
                                                  "list-group-item d-flex justify-content-between"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v("Sub Total")
                                                ]),
                                                _vm._v(" "),
                                                _c("strong", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency")(
                                                        _vm.netAmount,
                                                        "₹"
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "li",
                                              {
                                                staticClass:
                                                  "list-group-item d-flex align-items-center justify-content-between"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  [
                                                    _vm._v("In  "),
                                                    _c("b-form-input", {
                                                      attrs: { type: "date" },
                                                      model: {
                                                        value: _vm.checkin,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.checkin = $$v
                                                        },
                                                        expression: "checkin"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  [
                                                    _vm._v("Out "),
                                                    _c("b-form-input", {
                                                      attrs: { type: "date" },
                                                      model: {
                                                        value: _vm.checkout,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.checkout = $$v
                                                        },
                                                        expression: "checkout"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.step === 2
                                      ? _c("div", [
                                          _c(
                                            "div",
                                            { staticClass: "card-body py-0" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "mb-2" },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mb-1 font-weight-bold"
                                                    },
                                                    [_vm._v("Customer Details")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                id:
                                                                  "customer_phone",
                                                                label:
                                                                  "Phone No",
                                                                "label-for":
                                                                  "customer_phone",
                                                                state: _vm
                                                                  .errors
                                                                  .customer_phone
                                                                  ? false
                                                                  : null,
                                                                "invalid-feedback": _vm
                                                                  .errors
                                                                  .customer_phone
                                                                  ? _vm.errors
                                                                      .customer_phone[0]
                                                                  : ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    id:
                                                                      "customer_phone",
                                                                    state: _vm
                                                                      .errors
                                                                      .customer_phone
                                                                      ? false
                                                                      : null
                                                                  },
                                                                  nativeOn: {
                                                                    keydown: function(
                                                                      $event
                                                                    ) {
                                                                      delete _vm
                                                                        .errors
                                                                        .customer_phone
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .customer
                                                                        .customer_phone,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.customer,
                                                                        "customer_phone",
                                                                        typeof $$v ===
                                                                          "string"
                                                                          ? $$v.trim()
                                                                          : $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "customer.customer_phone"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                id:
                                                                  "customer_name",
                                                                label: "Name",
                                                                "label-for":
                                                                  "customer_name",
                                                                state: _vm
                                                                  .errors
                                                                  .customer_name
                                                                  ? false
                                                                  : null,
                                                                "invalid-feedback": _vm
                                                                  .errors
                                                                  .customer_name
                                                                  ? _vm.errors
                                                                      .customer_name[0]
                                                                  : ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    id:
                                                                      "customer_name",
                                                                    state: _vm
                                                                      .errors
                                                                      .customer_name
                                                                      ? false
                                                                      : null
                                                                  },
                                                                  nativeOn: {
                                                                    keydown: function(
                                                                      $event
                                                                    ) {
                                                                      delete _vm
                                                                        .errors
                                                                        .customer_name
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .customer
                                                                        .customer_name,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.customer,
                                                                        "customer_name",
                                                                        typeof $$v ===
                                                                          "string"
                                                                          ? $$v.trim()
                                                                          : $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "customer.customer_name"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                id:
                                                                  "customer_address",
                                                                label:
                                                                  "Address",
                                                                "label-for":
                                                                  "customer_address",
                                                                state: _vm
                                                                  .errors
                                                                  .customer_address
                                                                  ? false
                                                                  : null,
                                                                "invalid-feedback": _vm
                                                                  .errors
                                                                  .customer_address
                                                                  ? _vm.errors
                                                                      .customer_address[0]
                                                                  : ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    id:
                                                                      "customer_address",
                                                                    state: _vm
                                                                      .errors
                                                                      .customer_address
                                                                      ? false
                                                                      : null
                                                                  },
                                                                  nativeOn: {
                                                                    keydown: function(
                                                                      $event
                                                                    ) {
                                                                      delete _vm
                                                                        .errors
                                                                        .customer_address
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .customer
                                                                        .customer_address,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.customer,
                                                                        "customer_address",
                                                                        typeof $$v ===
                                                                          "string"
                                                                          ? $$v.trim()
                                                                          : $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "customer.customer_address"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "b-form-group",
                                                            {
                                                              attrs: {
                                                                id:
                                                                  "customer_gstin",
                                                                label: "GSTIN",
                                                                "label-for":
                                                                  "customer_gstin",
                                                                state: _vm
                                                                  .errors
                                                                  .customer_gstin
                                                                  ? false
                                                                  : null,
                                                                "invalid-feedback": _vm
                                                                  .errors
                                                                  .customer_gstin
                                                                  ? _vm.errors
                                                                      .customer_gstin[0]
                                                                  : ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  attrs: {
                                                                    id:
                                                                      "customer_gstin",
                                                                    state: _vm
                                                                      .errors
                                                                      .customer_gstin
                                                                      ? false
                                                                      : null
                                                                  },
                                                                  nativeOn: {
                                                                    keydown: function(
                                                                      $event
                                                                    ) {
                                                                      delete _vm
                                                                        .errors
                                                                        .customer_gstin
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .customer
                                                                        .customer_gstin,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.customer,
                                                                        "customer_gstin",
                                                                        typeof $$v ===
                                                                          "string"
                                                                          ? $$v.trim()
                                                                          : $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "customer.customer_gstin"
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.step === 3
                                      ? _c(
                                          "div",
                                          [
                                            _vm.invoiceuuid.length > 0
                                              ? _c("invoice-print", {
                                                  attrs: {
                                                    uuid: _vm.invoiceuuid
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.step === 1 || _vm.step === 2
                              ? _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "list-group mb-0 list-group-flush d-block"
                                  },
                                  [
                                    _c(
                                      "li",
                                      {
                                        staticClass:
                                          "list-group-item d-flex justify-content-between bg-light"
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v("Amount Payable")]
                                        ),
                                        _vm._v(" "),
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency")(
                                                _vm.netRoundedAmount,
                                                "₹"
                                              )
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-table w-100 px-4 py-3 bg-light rounded-bottom border-top"
                              },
                              [
                                _c("div", { staticClass: "d-table-cell" }, [
                                  _vm.step !== 3
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-secondary",
                                          attrs: { disabled: _vm.step === 1 },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.prev()
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "mr-2 text-white" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "fill-current icon icon--sm",
                                                  attrs: {
                                                    viewBox: "0 0 20 20"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Previous")])
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.step === 3
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-secondary",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.goToHome()
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "mr-2 text-white" },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass:
                                                    "fill-current icon icon--sm",
                                                  attrs: {
                                                    viewBox: "0 0 20 20"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Back To Home")])
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-table-cell text-right" },
                                  [
                                    _vm.step === 1
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-primary",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.next()
                                              }
                                            }
                                          },
                                          [
                                            _c("span", [_vm._v("Next")]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "ml-2 text-white"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "fill-current icon icon--sm",
                                                    attrs: {
                                                      viewBox: "0 0 20 20"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.step === 2
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-primary",
                                            class: {
                                              "btn-spinner": _vm.loading
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.loading || !_vm.showComplete
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.completeOrder()
                                              }
                                            }
                                          },
                                          [
                                            _c("span", [
                                              _vm._v("Complete Order")
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "ml-2 text-white"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "fill-current icon icon--sm",
                                                    attrs: {
                                                      viewBox: "0 0 20 20"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      attrs: {
                                                        d:
                                                          "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.step === 3
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-primary mr-2 btn-sm",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.printInvoice()
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass: "mr-2 text-white"
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass: "fill-current",
                                                    attrs: {
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      viewBox: "0 0 24 24",
                                                      width: "24",
                                                      height: "24"
                                                    }
                                                  },
                                                  [
                                                    _c("path", {
                                                      staticClass:
                                                        "heroicon-ui",
                                                      attrs: {
                                                        d:
                                                          "M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t\tPrint Receipt\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass:
                              "card-body text-center d-flex flex-column align-items-center justify-content-center"
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: __webpack_require__(/*! ../../../assets/svg/shopping-cart.svg */ "./resources/assets/svg/shopping-cart.svg"),
                                height: "40"
                              }
                            }),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-muted mt-4 small" }, [
                              _vm._v(
                                "Your cart is empty. Please try adding new product."
                              )
                            ])
                          ]
                        )
                  ])
                ])
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { slot: "offline" }, slot: "offline" },
          [
            _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
              _c("div", { staticClass: "card border-0 p-5 text-center" }, [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! ../../../assets/svg/offline.svg */ "./resources/assets/svg/offline.svg") }
                }),
                _vm._v(" "),
                _c("h4", { staticClass: "mt-3" }, [
                  _vm._v("Oops, seems like you're offline!")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0" }, [
                  _vm._v("Please check your internet connectivity.")
                ])
              ])
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Invoices")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by invoice no..." },
                    on: {
                      input: function($event) {
                        return _vm.getProducts(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "text-md-right", attrs: { sm: "6" } },
            [
              _c(
                "b-button",
                { attrs: { variant: "primary", to: "/invoice/generate" } },
                [
                  _c("Zondicon", {
                    staticClass: "fill-current mr-2",
                    attrs: { icon: "add-outline", width: "20" }
                  }),
                  _vm._v("New Invoice\n      ")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        {
          class: { "spinner spinner-md spinner-green": _vm.isBusy },
          attrs: { "no-body": "" }
        },
        [
          _c("table", { staticClass: "table w-full table-custom mb-0" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left" }, [_vm._v("Invoice No")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Invoice Date")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("Customer")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-right" }, [
                  _vm._v("Total Amount")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(invoice) {
                return _c("tr", { key: invoice.id }, [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "no-underline text-red hover:text-red-dark",
                          attrs: {
                            to: {
                              name: "showinvoice",
                              params: { uuid: invoice.uuid }
                            },
                            title: "view details"
                          }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(invoice.invoice_no) +
                              "\n              "
                          ),
                          _c("span", [_vm._v("→")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(invoice.created_at)))
                  ]),
                  _vm._v(" "),
                  invoice.customer
                    ? _c("td", { staticClass: "small" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(invoice.customer.customer_name) +
                            "\n            "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "small text-muted" }, [
                          _vm._v(_vm._s(invoice.customer.phone))
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("td", { staticClass: "small text-right" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("currency")(
                          invoice.total_rounded_amount_payable,
                          "₹"
                        )
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small text-right" }, [
                    _vm._v(_vm._s(_vm._f("currency")(invoice.balance, "₹")))
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-end align-items-center bg-light p-3"
            },
            [
              _c("paginate", {
                attrs: {
                  "prev-url": _vm.prevUrl,
                  "next-url": _vm.nextUrl,
                  "click-handler": _vm.getProducts
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.order != null
    ? _c("div", { staticClass: "card card-body bg-white" }, [
        2 == _vm.layout
          ? _c(
              "div",
              {
                staticClass: "container rounded",
                staticStyle: {
                  position: "relative",
                  border: "1px dashed #e5e5e5"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { ref: "printTable" }, [
                      _c("div", { staticClass: "px-3 py-3 w-100" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass:
                              "small list-inline text-xs-left text-uppercase mb-2 pb-1"
                          },
                          [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "small d-flex justify-content-between align-items-center"
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    "invoice mno: " +
                                      _vm._s(_vm.order.invoice_no)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _vm._v(
                                    "date: " + _vm._s(_vm.order.created_at)
                                  )
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "small list-inline mb-1 p-2 w-100",
                            staticStyle: { border: "1px solid #222" }
                          },
                          [
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("Guest Name")]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    ": " +
                                      _vm._s(_vm.order.customer.customer_name)
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("Address")]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    ": " + _vm._s(_vm.order.customer.address)
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("Phone")]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    ": " + _vm._s(_vm.order.customer.phone)
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("GSTIN")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-uppercase" }, [
                                  _vm._v(
                                    ":" +
                                      _vm._s(
                                        JSON.parse(_vm.order.invoice_address)
                                          .customer_gstin
                                          ? JSON.parse(
                                              _vm.order.invoice_address
                                            ).customer_gstin
                                          : ""
                                      )
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("Checkin")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-uppercase" }, [
                                  _vm._v(
                                    ":" +
                                      _vm._s(
                                        _vm.order.checkin
                                          ? _vm.order.checkin
                                          : ""
                                      )
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass: "small d-flex align-items-center"
                              },
                              [
                                _c(
                                  "span",
                                  { staticStyle: { width: "100px" } },
                                  [_vm._v("Checkout")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-uppercase" }, [
                                  _vm._v(
                                    ":" +
                                      _vm._s(
                                        _vm.order.checkout
                                          ? _vm.order.checkout
                                          : ""
                                      )
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticStyle: { color: "red" } })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass: "w-100 mb-1 p-2",
                            staticStyle: { border: "1px solid #222" }
                          },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              { staticClass: "mb1 small" },
                              [
                                _vm._l(_vm.order.invoicedetails, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "tr",
                                    { key: item.id, staticClass: "small" },
                                    [
                                      _c(
                                        "td",
                                        { staticClass: "border-right p-1" },
                                        [_vm._v(_vm._s(index + 1))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        { staticClass: "border-right p-1" },
                                        [_vm._v(_vm._s(item.product_name))]
                                      ),
                                      _vm._v(" "),
                                      _c("td", {
                                        staticClass: "border-right p-1"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-xs-center text-center"
                                        },
                                        [_vm._v(_vm._s(item.product_quantity))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [_vm._v(_vm._s(item.product_price))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formattedCurrency")(
                                                item.base_amount
                                              )
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formattedCurrency")(
                                                item.discount_amount
                                              )
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [_vm._v(_vm._s(item.sgst_per))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formattedCurrency")(
                                                item.sgst_value
                                              )
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [_vm._v(_vm._s(item.cgst_per))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formattedCurrency")(
                                                item.cgst_value
                                              )
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "border-right p-1 text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formattedCurrency")(
                                                item.total_amount
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _vm.order.invoicedetails.length < 12
                                  ? _vm._l(9, function(i) {
                                      return _c("tr", { key: i }, [
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "border-right",
                                          attrs: { height: "20px" }
                                        })
                                      ])
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("tr", { staticClass: "small" }, [
                                  _vm._m(2),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "border",
                                      attrs: { colspan: "3" }
                                    },
                                    [_vm._v("Total Invoice Amount")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "border text-right p-1" },
                                    [_vm._v(_vm._s(_vm.order.base_amount))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "border text-right p-1" },
                                    [_vm._v(_vm._s(_vm.order.discount_amount))]
                                  ),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "border text-right p-1"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "border text-right p-1" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formattedCurrency")(
                                            _vm.order.total_gst_amount / 2
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", {
                                    staticClass: "border text-right p-1"
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "border text-right p-1" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("formattedCurrency")(
                                            _vm.order.total_gst_amount / 2
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "border text-right p-1" },
                                    [
                                      _c("div", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formattedCurrency")(
                                              parseFloat(_vm.order.total_amount)
                                            )
                                          )
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(3),
                                _vm._v(" "),
                                _c("tr", { staticClass: "small" }, [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass: "border text-center",
                                      attrs: { colspan: "14" }
                                    },
                                    [
                                      _vm._v(
                                        "Rupees " +
                                          _vm._s(
                                            _vm._f("titleCase")(
                                              _vm._f("toWords")(
                                                parseFloat(
                                                  _vm.order.total_amount
                                                )
                                              )
                                            )
                                          ) +
                                          " only"
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm._m(5)
                              ],
                              2
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "break" })
                    ])
                  ])
                ])
              ]
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "small list-inline text-center mb-1 pb-1" },
      [
        _c("li", { staticClass: "text-right text-uppercase" }, [
          _vm._v("ph. no. +91-69001-43733")
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-left text-uppercase",
            staticStyle: { "margin-top": "-25px" }
          },
          [
            _c("img", {
              staticClass: "mt-m25",
              attrs: { src: "/images/logo1.png", height: "50" }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-uppercase text-underline mt-m40",
            staticStyle: { "margin-top": "-40px" }
          },
          [_vm._v("Tax invoice")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "h6 title my-1 text-center text-uppercase fw-bold font-weight-bold"
          },
          [_vm._v("The Eagle's Nest Happy Drifters")]
        ),
        _vm._v(" "),
        _c("li", [_vm._v("Travellers Home")]),
        _vm._v(" "),
        _c("li", { staticClass: "text-uppercase" }, [
          _vm._v(
            "Metsikchulung, Behind SNM Hospital Leh Jammu and Kashmir, 194101"
          )
        ]),
        _vm._v(" "),
        _c("li", [_vm._v("hello@happydrifters.com")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "small" }, [
        _c(
          "th",
          {
            staticClass: "border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Sl. No.")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Description of Item")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("HSN Code")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-xs-center text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Qnty.")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-right border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Rate")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-right border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Amount")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-right border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Discount")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { colspan: "2" }
          },
          [_vm._v("SGST")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { colspan: "2" }
          },
          [_vm._v("CGST")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-right border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" },
            attrs: { rowspan: "2" }
          },
          [_vm._v("Total Amount")]
        )
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "small" }, [
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" }
          },
          [_vm._v("Rate")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" }
          },
          [_vm._v("Amount")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" }
          },
          [_vm._v("Rate")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "text-center border p-1",
            staticStyle: { "font-weight": "500", "font-size": "80%" }
          },
          [_vm._v("Amount")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      {
        staticClass: "px-1 py-2 border",
        attrs: { colspan: "2", rowspan: "2" }
      },
      [
        _c("ul", { staticClass: "list-inline" }, [
          _c("li", { staticClass: "text-uppercase text-underline" }, [
            _vm._v("terms of sale")
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _vm._v("Goods & service once sold cannot be taken back")
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _vm._v("All transactions are done in Indian Rupees (₹)")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "small" }, [
      _c("td", { staticClass: "border", attrs: { colspan: "3" } }, [
        _vm._v("Tax payable on reverse charge")
      ]),
      _vm._v(" "),
      _c("td", { staticClass: "border", attrs: { colspan: "7" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "px-1 py-2", attrs: { colspan: "2" } }, [
      _c("p", { staticClass: "text-center mb-2" }, [
        _vm._v("Cerified that the particulars given above are true & Correct")
      ]),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "text-center mb-0 title fw-bold font-weight-bold" },
        [_vm._v("For: HAPPY DRIFTERS LLP")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "small" }, [
      _c(
        "td",
        {
          staticClass: "px-1 py-2",
          staticStyle: { "vertical-align": "bottom" },
          attrs: { colspan: "2" }
        },
        [
          _c("p", { staticClass: "text-center mb-0" }, [
            _vm._v("Authorised Signatory")
          ])
        ]
      ),
      _vm._v(" "),
      _c("td", { staticClass: "border p-1", attrs: { colspan: "14" } }, [
        _c("ul", { staticClass: "list-inline mb-0" }, [
          _c("li", { staticClass: "d-flex align-items-center" }, [
            _c("span", { staticStyle: { width: "100px" } })
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-flex align-items-center" }, [
            _c("span", { staticStyle: { width: "100px" } }, [
              _vm._v("Registered Office")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(": Happy Drifters LLP")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-flex align-items-center" }, [
            _c("span", { staticStyle: { width: "100px" } }, [
              _vm._v("Address")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(": House No-99, GNB Road, Silpukhuri")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-flex align-items-center" }, [
            _c("span", { staticStyle: { width: "100px" } }, [
              _vm._v("GSTIN NO")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(": 18AALFH9921N1ZM")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "d-flex align-items-center" }, [
            _c("span", { staticStyle: { width: "100px" } }),
            _vm._v(" "),
            _c("span")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12" } },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-end mb-4"
                },
                [
                  _vm.balance != 0
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm mr-3",
                          class: _vm.showCollapse ? "collapsed" : null,
                          attrs: {
                            "aria-controls": "collapse-archive",
                            "aria-expanded": _vm.showCollapse ? "true" : "false"
                          },
                          on: {
                            click: function($event) {
                              _vm.showCollapse = !_vm.showCollapse
                            }
                          }
                        },
                        [_c("span", [_vm._v("Receive Payment")])]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.printInvoice()
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "mr-2 text-white" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "fill-current",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              width: "24",
                              height: "24"
                            }
                          },
                          [
                            _c("path", {
                              staticClass: "heroicon-ui",
                              attrs: {
                                d:
                                  "M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Print Invoice")])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("invoice-print", { attrs: { uuid: this.$route.params.uuid } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              staticClass: "mb-4",
              attrs: {
                id: "collapse-archive",
                title: "Create Receipt",
                centered: ""
              },
              model: {
                value: _vm.showCollapse,
                callback: function($$v) {
                  _vm.showCollapse = $$v
                },
                expression: "showCollapse"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-12" },
                  [
                    _c(
                      "b-form-group",
                      {
                        staticClass: "text-gray-600",
                        attrs: {
                          label: "Payment Amount",
                          "label-for": "tender_amount"
                        }
                      },
                      [
                        _c("b-form-input", {
                          directives: [
                            {
                              name: "numeric-float",
                              rawName: "v-numeric-float"
                            }
                          ],
                          attrs: { min: "0", id: "tender_amount" },
                          model: {
                            value: _vm.tender_amount,
                            callback: function($$v) {
                              _vm.tender_amount = $$v
                            },
                            expression: "tender_amount"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center"
                },
                [
                  _c("span", [_vm._v("Total Amount:")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("currency")(_vm.invoiceAmount, "₹")))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center"
                },
                [_c("span", [_vm._v("Pending Amount:")])]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? [_c("content-placeholder")]
        : [
            _c("b-card", [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-between"
                  },
                  [
                    _c("h6", { staticClass: "mb-0 h5 text-truncate" }, [
                      _vm._v("Stock Details")
                    ]),
                    _vm._v(" "),
                    _vm.editable
                      ? [
                          !_vm.editGardenDetails
                            ? _c(
                                "b-button",
                                {
                                  staticClass: "font-weight-500 mb-0",
                                  attrs: { variant: "link" },
                                  on: { click: _vm.editGarden }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editGardenDetails
                      ? _c(
                          "div",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "font-weight-500 mb-0",
                                class: { spinner: _vm.spinner == true },
                                attrs: {
                                  variant: "primary",
                                  disabled: _vm.spinner
                                },
                                on: { click: _vm.updateGardenDetail }
                              },
                              [_vm._v("Update")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass:
                                  "border font-weight-500 mb-0 ml-2 text-gray-600",
                                attrs: { variant: "link" },
                                on: { click: _vm.cancelEdit }
                              },
                              [_vm._v("Cancel")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush" },
                  _vm._l(_vm.gardendetails, function(gardendetail, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "list-group-item border-0 pl-0"
                      },
                      [
                        _c("div", { staticClass: "row align-items-center" }, [
                          _c("div", { staticClass: "col-12 col-sm-4" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-muted mb-1 mb-md-0 text-sm text-md-right"
                              },
                              [_vm._v(_vm._s(gardendetail.label))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-sm-5" },
                            [
                              !_vm.editGardenDetails
                                ? [
                                    gardendetail.name == "state_id"
                                      ? _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.gardendata.formatted_state
                                                ? _vm.gardendata.formatted_state
                                                    .text
                                                : ""
                                            )
                                          )
                                        ])
                                      : _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.gardendata[gardendetail.name]
                                            )
                                          )
                                        ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editGardenDetails
                                ? [
                                    gardendetail.type == "text" &&
                                    (gardendetail.name ==
                                      "product_quantity_left" ||
                                      gardendetail.name == "product_price")
                                      ? _c("b-form-input", {
                                          attrs: {
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null,
                                            readonly: ""
                                          },
                                          nativeOn: {
                                            keydown: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "text" &&
                                    gardendetail.name !=
                                      "product_quantity_left" &&
                                    gardendetail.name != "product_price"
                                      ? _c("b-form-input", {
                                          attrs: {
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            keydown: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_state"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_tb"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_nature_of_ownership"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: [
                                              "Propritorship",
                                              "Joint",
                                              "Partnership"
                                            ],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null,
                                            name: "garden_nature_of_ownership"
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "state_id"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.states,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "garden_district"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.districts,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.gardendata[gardendetail.name],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.gardendata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "gardendata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors[gardendetail.name]
                                            ? _vm.errors[gardendetail.name][0]
                                            : ""
                                        )
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [_c("lot-details", { attrs: { uuid: _vm.$route.params.uuid } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Customers")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by customer name..." },
                    on: {
                      input: function($event) {
                        return _vm.getProducts(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-card", { attrs: { "no-body": "" } }, [
        _c("div", [
          _c("table", { staticClass: "table w-full table-custom" }, [
            _c("thead", [
              _c(
                "tr",
                _vm._l(_vm.fields, function(field) {
                  return _c("th", { key: field }, [_vm._v(_vm._s(field))])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.items, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.customer_name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.phone))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.address))
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [
        _vm._v("Invoices for " + _vm._s(_vm.products[0].customer.customer_name))
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by invoice no..." },
                    on: {
                      input: function($event) {
                        return _vm.getProducts(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        {
          class: { "spinner spinner-md spinner-green": _vm.isBusy },
          attrs: { "no-body": "" }
        },
        [
          _c("table", { staticClass: "table w-full table-custom mb-0" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left" }, [_vm._v("Invoice No")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Invoice Date")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("Customer")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-right" }, [
                  _vm._v("Total Amount")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-right" }, [
                  _vm._v("Balance Amount")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(invoice) {
                return _c("tr", { key: invoice.id }, [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "no-underline text-red hover:text-red-dark",
                          attrs: {
                            to: {
                              name: "showinvoice",
                              params: { uuid: invoice.uuid }
                            },
                            title: "view details"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(invoice.invoice_no) +
                              " \n                            "
                          ),
                          _c("span", [_vm._v("→")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(invoice.created_at)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(invoice.customer.customer_name) +
                        " "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "small text-muted" }, [
                      _vm._v(_vm._s(invoice.customer.customer_phone))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small text-right" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("currency")(
                          invoice.total_rounded_amount_payable,
                          "₹"
                        )
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small text-right" }, [
                    _vm._v(_vm._s(_vm._f("currency")(invoice.balance, "₹")))
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-end align-items-center bg-light p-3"
            },
            [
              _c("paginate", {
                attrs: {
                  "prev-url": _vm.prevUrl,
                  "next-url": _vm.nextUrl,
                  "click-handler": _vm.getProducts
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.generateCustomer($event)
            }
          }
        },
        [
          _c(
            "b-card",
            { attrs: { title: "Add old customer" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Customer Name:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-2",
                      required: "",
                      placeholder: "Enter name"
                    },
                    model: {
                      value: _vm.customer.customerName,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "customerName", $$v)
                      },
                      expression: "customer.customerName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Address:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-2",
                      required: "",
                      placeholder: "Enter Customer address"
                    },
                    model: {
                      value: _vm.customer.address,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "address", $$v)
                      },
                      expression: "customer.address"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Customer GSTN:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-2",
                      placeholder: "Enter Customer GSTN"
                    },
                    model: {
                      value: _vm.customer.gstn,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "gstn", $$v)
                      },
                      expression: "customer.gstn"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Mobile:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-2",
                      required: "",
                      placeholder: "Enter Customer Mobile"
                    },
                    model: {
                      value: _vm.customer.mobile,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "mobile", $$v)
                      },
                      expression: "customer.mobile"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Total Amount:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    directives: [
                      { name: "numeric-float", rawName: "v-numeric-float" }
                    ],
                    attrs: {
                      id: "input-2",
                      required: "",
                      placeholder: "Enter total amount"
                    },
                    model: {
                      value: _vm.customer.baseprice,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "baseprice", $$v)
                      },
                      expression: "customer.baseprice"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "input-group-2",
                    label: "Date:",
                    "label-for": "input-2"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "input-2",
                      type: "date",
                      required: "",
                      placeholder: "Enter Date"
                    },
                    model: {
                      value: _vm.customer.date,
                      callback: function($$v) {
                        _vm.$set(_vm.customer, "date", $$v)
                      },
                      expression: "customer.date"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "text-right py-2",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "b-button",
                    {
                      ref: "submitButton",
                      staticClass: "mb-0",
                      attrs: { type: "submit", size: "lg", variant: "primary" }
                    },
                    [_vm._v("Add Customer")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Old Customers")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by customer name..." },
                    on: {
                      input: function($event) {
                        return _vm.getProducts(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "text-md-right", attrs: { sm: "6" } },
            [
              _c(
                "b-button",
                { attrs: { variant: "primary", to: "/oldcustomer/create" } },
                [
                  _c("Zondicon", {
                    staticClass: "fill-current mr-2",
                    attrs: { icon: "add-outline", width: "20" }
                  }),
                  _vm._v("Old Customer\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("b-card", { attrs: { "no-body": "" } }, [
        _c("div", [
          _c("table", { staticClass: "table w-full table-custom" }, [
            _c("thead", [
              _c(
                "tr",
                _vm._l(_vm.fields, function(field) {
                  return _c("th", { key: field }, [_vm._v(_vm._s(field))])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.items, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.customerName))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.gstn))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.mobile))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.address))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(item.date))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "small" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "no-underline text-red hover:text-red-dark",
                          attrs: {
                            to: {
                              name: "OldcustomerTransac",
                              params: {
                                id: item.id
                              }
                            },
                            title: "view details"
                          }
                        },
                        [
                          _vm._v(
                            "\n                show details\n                "
                          ),
                          _c("span", [_vm._v("→")])
                        ]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        [
          _c("b-card", { staticClass: "mb-5" }, [
            _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.dues, function(due, key, index) {
                return _c(
                  "li",
                  {
                    key: index,
                    staticClass:
                      "list-group-item d-flex justify-content-between align-items-center"
                  },
                  [
                    _vm._v("\n            " + _vm._s(key) + "\n            "),
                    _c(
                      "span",
                      { staticClass: "badge badge-primary badge-pill" },
                      [_vm._v(_vm._s(due))]
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "b-card",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.dues["Pending Amount"] != 0,
                  expression: "dues['Pending Amount'] != 0"
                }
              ],
              staticClass: "font-weight-bold mb-5",
              attrs: { header: "Add Payment" }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        { name: "numeric-float", rawName: "v-numeric-float" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newTransac.payment_made,
                          expression: "newTransac.payment_made"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", placeholder: "Paid amount" },
                      domProps: { value: _vm.newTransac.payment_made },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newTransac,
                            "payment_made",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newTransac.product,
                          expression: "newTransac.product"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", placeholder: "Note" },
                      domProps: { value: _vm.newTransac.product },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newTransac,
                            "product",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      ref: "submitButton",
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", variant: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.makeTransaction()
                        }
                      }
                    },
                    [_vm._v("Pay")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          [
            _c("h4", [_vm._v("Transactions")]),
            _vm._v(" "),
            _c("b-card", { attrs: { "no-body": "" } }, [
              _c("table", { staticClass: "table w-full table-custom" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Paid Amount")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Note")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "font-weight-normal" },
                  _vm._l(_vm.transactions.transaction_list, function(
                    transaction,
                    index
                  ) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(transaction.payment_made))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm._f("dateparse")(transaction.created_at))
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(transaction.product))])
                    ])
                  }),
                  0
                )
              ])
            ])
          ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Create.vue?vue&type=template&id=c3879172&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Create.vue?vue&type=template&id=c3879172& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.generateProduct($event)
            }
          }
        },
        [
          _c("b-card", { attrs: { title: "Add a new Product" } }, [
            _c("div", [
              _c("hr", { staticClass: "mx-n4" }),
              _vm._v(" "),
              _c("div", { staticClass: "row py-3" }, [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("h6", { staticClass: "text-uppercase tracking-wide" }, [
                    _vm._v("Product Details")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-black-50 mb-0" }, [
                    _vm._v("Enter basic details of the Product.")
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-muted" }, [
                    _vm._v("if gst is not available, please mark it as 0.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "product_name",
                              label: "Product Name",
                              "label-for": "product_name",
                              state: _vm.errors.product_name ? false : null,
                              "invalid-feedback": _vm.errors.product_name
                                ? _vm.errors.product_name[0]
                                : ""
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "product_name",
                                state: _vm.errors.product_name ? false : null
                              },
                              nativeOn: {
                                keydown: function($event) {
                                  delete _vm.errors.product_name
                                }
                              },
                              model: {
                                value: _vm.product.product_name,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.product,
                                    "product_name",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "product.product_name"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "product_name",
                              label: "Product Price",
                              "label-for": "product_price",
                              state: _vm.errors.product_price ? false : null,
                              "invalid-feedback": _vm.errors.product_price
                                ? _vm.errors.product_price[0]
                                : ""
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "product_price",
                                state: _vm.errors.product_price ? false : null
                              },
                              nativeOn: {
                                keydown: function($event) {
                                  delete _vm.errors.product_price
                                }
                              },
                              model: {
                                value: _vm.product.product_price,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.product,
                                    "product_price",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "product.product_price"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "category",
                              label: "Category",
                              "label-for": "category",
                              state: _vm.errors.category ? false : null,
                              "invalid-feedback": _vm.errors.category
                                ? _vm.errors.category[0]
                                : ""
                            }
                          },
                          [
                            _c(
                              "b-form-select",
                              {
                                attrs: {
                                  id: "category",
                                  options: _vm.categories,
                                  state: _vm.errors.category ? false : null
                                },
                                nativeOn: {
                                  change: function($event) {
                                    delete _vm.errors.category
                                  }
                                },
                                model: {
                                  value: _vm.product.category,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.product,
                                      "category",
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                    )
                                  },
                                  expression: "product.category"
                                }
                              },
                              [
                                _c("template", { slot: "first" }, [
                                  _c(
                                    "option",
                                    {
                                      attrs: {
                                        value: "null",
                                        selected: "",
                                        disabled: ""
                                      }
                                    },
                                    [_vm._v("Please select an category")]
                                  )
                                ])
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "uom",
                              label: "UOM",
                              "label-for": "uom",
                              state: _vm.errors.uom ? false : null,
                              "invalid-feedback": _vm.errors.uom
                                ? _vm.errors.uom[0]
                                : ""
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "uom",
                                state: _vm.errors.uom ? false : null
                              },
                              nativeOn: {
                                keydown: function($event) {
                                  delete _vm.errors.uom
                                }
                              },
                              model: {
                                value: _vm.product.uom,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.product,
                                    "uom",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "product.uom"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "gst",
                              label: "GST",
                              "label-for": "gst",
                              state: _vm.errors.gst ? false : null,
                              "invalid-feedback": _vm.errors.gst
                                ? _vm.errors.gst[0]
                                : ""
                            }
                          },
                          [
                            _c("b-form-input", {
                              attrs: {
                                id: "gst",
                                state: _vm.errors.gst ? false : null
                              },
                              nativeOn: {
                                keydown: function($event) {
                                  delete _vm.errors.gst
                                }
                              },
                              model: {
                                value: _vm.product.gst,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.product,
                                    "gst",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "product.gst"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text-right py-2",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "b-button",
                  {
                    ref: "submitButton",
                    staticClass: "mb-0",
                    attrs: { type: "submit", size: "lg", variant: "primary" }
                  },
                  [_vm._v("Add Product")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Products")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6" } },
            [
              _c(
                "b-input-group",
                { staticClass: "mb-4" },
                [
                  _c(
                    "b-input-group-text",
                    { attrs: { slot: "prepend" }, slot: "prepend" },
                    [
                      _c("Zondicon", {
                        staticClass: "fill-current text-muted",
                        attrs: { icon: "search", width: "20" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    staticClass: "rounded-left-0 rounded-right mr-2",
                    attrs: { placeholder: "Search by product name..." },
                    on: {
                      input: function($event) {
                        return _vm.getProducts(1)
                      }
                    },
                    model: {
                      value: _vm.searchInput,
                      callback: function($$v) {
                        _vm.searchInput = $$v
                      },
                      expression: "searchInput"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "text-md-right", attrs: { sm: "6" } },
            [
              _c(
                "b-button",
                { attrs: { variant: "primary", to: "/products/generate" } },
                [
                  _c("Zondicon", {
                    staticClass: "fill-current mr-2",
                    attrs: { icon: "add-outline", width: "20" }
                  }),
                  _vm._v("New Product\n      ")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        {
          class: { "spinner spinner-md spinner-green": _vm.isBusy },
          attrs: { "no-body": "" }
        },
        [
          _c("table", { staticClass: "table w-full table-custom" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Product Name")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("Date created")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [
                  _vm._v("last updated")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "text-left" }, [_vm._v("category")])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(product) {
                return _c("tr", { key: product.id }, [
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "no-underline text-red hover:text-red-dark",
                          attrs: {
                            to: {
                              name: "showproduct",
                              params: { uuid: product.uuid, product: product }
                            },
                            title: "view details"
                          }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(product.product_name) +
                              "\n              "
                          ),
                          _c("span", [_vm._v("→")])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(product.created_at)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "small" }, [
                    _vm._v(_vm._s(_vm._f("formattedDate")(product.updated_at)))
                  ]),
                  _vm._v(" "),
                  product.category
                    ? _c("td", { staticClass: "small" }, [
                        _vm._v(_vm._s(product.category.category_name))
                      ])
                    : _vm._e()
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-end align-items-center bg-light p-3"
            },
            [
              _c("paginate", {
                attrs: {
                  "prev-url": _vm.prevUrl,
                  "next-url": _vm.nextUrl,
                  "click-handler": _vm.getProducts
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? [_c("content-placeholder")]
        : [
            _c("b-card", [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-between"
                  },
                  [
                    _c("h6", { staticClass: "mb-0 h5 text-truncate" }, [
                      _vm._v("Product Details")
                    ]),
                    _vm._v(" "),
                    [
                      !_vm.editGardenDetails
                        ? _c(
                            "b-button",
                            {
                              staticClass: "font-weight-500 mb-0",
                              attrs: { variant: "link" },
                              on: { click: _vm.editGarden }
                            },
                            [_vm._v("Edit")]
                          )
                        : _vm._e()
                    ],
                    _vm._v(" "),
                    _vm.editGardenDetails
                      ? _c(
                          "div",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "font-weight-500 mb-0",
                                class: { spinner: _vm.spinner == true },
                                attrs: {
                                  variant: "primary",
                                  disabled: _vm.spinner
                                },
                                on: { click: _vm.updateProductDetail }
                              },
                              [_vm._v("Update")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass:
                                  "border font-weight-500 mb-0 ml-2 text-gray-600",
                                attrs: { variant: "link" },
                                on: { click: _vm.cancelEdit }
                              },
                              [_vm._v("Cancel")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "ul",
                  { staticClass: "list-group list-group-flush" },
                  _vm._l(_vm.gardendetails, function(gardendetail, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "list-group-item border-0 pl-0"
                      },
                      [
                        _c("div", { staticClass: "row align-items-center" }, [
                          _c("div", { staticClass: "col-12 col-sm-4" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-muted mb-1 mb-md-0 text-sm text-md-right"
                              },
                              [_vm._v(_vm._s(gardendetail.label))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-sm-5" },
                            [
                              !_vm.editGardenDetails
                                ? [
                                    gardendetail.name == "category_id"
                                      ? _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.productdata.category
                                                .category_name
                                                ? _vm.productdata.category
                                                    .category_name
                                                : ""
                                            )
                                          )
                                        ])
                                      : _c("h6", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            _vm._s(
                                              _vm.productdata[gardendetail.name]
                                            )
                                          )
                                        ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editGardenDetails
                                ? [
                                    gardendetail.type == "text"
                                      ? _c("b-form-input", {
                                          attrs: {
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            keydown: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_state"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_subsidy_avail_tb"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: ["Yes", "No"],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "radio" &&
                                    gardendetail.name ==
                                      "garden_nature_of_ownership"
                                      ? _c("b-form-radio-group", {
                                          attrs: {
                                            buttons: "",
                                            size: "sm",
                                            "button-variant":
                                              "outline-secondary",
                                            options: [
                                              "Propritorship",
                                              "Joint",
                                              "Partnership"
                                            ],
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null,
                                            name: "garden_nature_of_ownership"
                                          },
                                          nativeOn: {
                                            change: function($event) {
                                              delete _vm.errors[
                                                gardendetail.name
                                              ]
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "category_id"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.categories,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gardendetail.type == "select" &&
                                    gardendetail.name == "garden_district"
                                      ? _c("b-form-select", {
                                          staticClass: "mb-0",
                                          attrs: {
                                            options: _vm.districts,
                                            state: _vm.errors[gardendetail.name]
                                              ? false
                                              : null
                                          },
                                          model: {
                                            value:
                                              _vm.productdata[
                                                gardendetail.name
                                              ],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.productdata,
                                                gardendetail.name,
                                                $$v
                                              )
                                            },
                                            expression:
                                              "productdata[gardendetail.name]"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-form-invalid-feedback", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors[gardendetail.name]
                                            ? _vm.errors[gardendetail.name][0]
                                            : ""
                                        )
                                      )
                                    ])
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "py-4" },
    [
      _c(
        "b-row",
        { staticClass: "mb-4" },
        [
          _c("b-col", { attrs: { sm: "6" } }),
          _vm._v(" "),
          _c("b-col", { staticClass: "text-md-right", attrs: { sm: "6" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("product-details", { attrs: { uuid: _vm.$route.params.uuid } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.changePassword($event)
            }
          }
        },
        [
          _c(
            "b-card",
            { staticClass: "my-4", attrs: { title: "Change Password" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-5" },
                  [
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          id: "current",
                          label: "Current Password",
                          "label-for": "current",
                          state: _vm.errors.old ? false : null,
                          "invalid-feedback": _vm.errors.old
                            ? _vm.errors.old[0]
                            : ""
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "password",
                            id: "current",
                            state: _vm.errors.old ? false : null
                          },
                          model: {
                            value: _vm.user.old,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.user,
                                "old",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "user.old"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          id: "password",
                          label: "Password",
                          "label-for": "password",
                          state: _vm.errors.password ? false : null,
                          "invalid-feedback": _vm.errors.password
                            ? _vm.errors.password[0]
                            : ""
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "password",
                            id: "password",
                            state: _vm.errors.password ? false : null
                          },
                          model: {
                            value: _vm.user.password,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.user,
                                "password",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "user.password"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          id: "password_confirmation",
                          label: "Password Confirmation",
                          "label-for": "password_confirmation",
                          state: _vm.errors.password_confirmation
                            ? false
                            : null,
                          "invalid-feedback": _vm.errors.password_confirmation
                            ? _vm.errors.password_confirmation[0]
                            : ""
                        }
                      },
                      [
                        _c("b-form-input", {
                          attrs: {
                            type: "password",
                            id: "password_confirmation",
                            state: _vm.errors.password_confirmation
                              ? false
                              : null
                          },
                          model: {
                            value: _vm.user.password_confirmation,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.user,
                                "password_confirmation",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "user.password_confirmation"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "py-2 text-right",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "b-button",
                    {
                      class: { spinner: _vm.spinner == true },
                      attrs: {
                        variant: "primary",
                        type: "submit",
                        disabled: _vm.spinner
                      }
                    },
                    [_vm._v("Change Password")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.successMessage
                ? _c(
                    "b-alert",
                    {
                      staticClass: "mt-4",
                      attrs: { variant: "success", show: "" }
                    },
                    [_vm._v(_vm._s(_vm.successMessage))]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.changePassword($event)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-5" },
              [
                _c(
                  "b-card",
                  { staticClass: "my-4" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column align-items-center w-full border-bottom border-grey p-4"
                          },
                          [
                            _c("vue-avatar", {
                              staticClass: "mb-3",
                              attrs: { username: _vm.User.name, size: 70 }
                            }),
                            _vm._v(" "),
                            _c("h5", { staticClass: "mb-2 text-sm text-red" }, [
                              _vm._v(_vm._s(_vm.User.name))
                            ]),
                            _vm._v(" "),
                            _c("h6", [_vm._v(_vm._s(_vm.User.email))])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-end pt-4" },
                          [
                            _c(
                              "b-button",
                              {
                                class: { spinner: _vm.spinner == true },
                                attrs: {
                                  variant: "primary",
                                  type: "submit",
                                  disabled: _vm.spinner
                                }
                              },
                              [_vm._v("Edit")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "d-flex flex-column pb-4" }, [
                          _c("h6", { staticClass: "mb-1" }, [
                            _vm._v("Address")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-sm mb-4" }, [
                            _vm._v(_vm._s(_vm.User.address))
                          ]),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mb-1" }, [_vm._v("Phone")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-sm mb-4" }, [
                            _vm._v(_vm._s(_vm.User.phone_no))
                          ]),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mb-1" }, [_vm._v("GSTIN")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-sm mb-4" }, [
                            _vm._v(_vm._s(_vm.User.manager_name))
                          ]),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mb-1" }, [
                            _vm._v("Tax Invoice Format")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-sm mb-4" }, [
                            _vm._v(_vm._s(_vm.User.manager_name))
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.successMessage
                      ? _c(
                          "b-alert",
                          {
                            staticClass: "mt-4",
                            attrs: { variant: "success", show: "" }
                          },
                          [_vm._v(_vm._s(_vm.successMessage))]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-alert",
        {
          staticClass: "shadow-sm d-flex align-items-start py-3 bg-white",
          class: _vm.variantClass,
          attrs: { show: "" }
        },
        [
          _c(
            "div",
            { staticClass: "mr-3" },
            [
              _vm._t("media", [
                this.variant == "info"
                  ? _c("Zondicon", {
                      staticClass: "fill-current svg-icon h4 mb-0",
                      attrs: { icon: "information-solid" }
                    })
                  : _vm._e(),
                _vm._v(" "),
                this.variant == "danger"
                  ? _c("Zondicon", {
                      staticClass: "fill-current svg-icon h4 mb-0",
                      attrs: { icon: "minus-solid" }
                    })
                  : _vm._e(),
                _vm._v(" "),
                this.variant == "success"
                  ? _c("Zondicon", {
                      staticClass: "fill-current svg-icon h4 mb-0",
                      attrs: { icon: "checkmark-outline" }
                    })
                  : _vm._e()
              ])
            ],
            2
          ),
          _vm._v(" "),
          _vm._t("content")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-card", [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("h5", {
            staticClass: "p-2 bg-grey rounded mb-0",
            staticStyle: { width: "180px" }
          })
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "list-group list-group-flush" }, [
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "180px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-75" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "120px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-50" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "80px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-75" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "100px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-75" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "80px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-25" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item border-0 pl-0" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-12 col-sm-4" }, [
                _c("p", {
                  staticClass: "p-2 ml-auto bg-grey rounded mb-0",
                  staticStyle: { width: "180px" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-8" }, [
                _c("p", { staticClass: "p-2 bg-grey rounded mb-0 w-50" })
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-card", { attrs: { "no-body": "" } }, [
        _c(
          "table",
          { staticClass: "table mb-0 table-custom position-relative" },
          [
            _c("thead", [
              _c("tr", [
                _c("th", { attrs: { width: "140px" } }, [
                  _c("div", {
                    staticClass: "px-4 py-2 rounded d-block",
                    staticStyle: { background: "#f1f1f1" }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("div", {
                    staticClass: "px-4 py-2 rounded d-block",
                    staticStyle: { background: "#f1f1f1" }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("div", {
                    staticClass: "px-4 py-2 rounded d-block",
                    staticStyle: { background: "#f1f1f1" }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("div", {
                    staticClass: "px-4 py-2 rounded d-block",
                    staticStyle: { background: "#f1f1f1" }
                  })
                ]),
                _vm._v(" "),
                _c("th", [
                  _c("div", {
                    staticClass: "px-4 py-2 rounded d-block",
                    staticStyle: { background: "#f1f1f1" }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(10, function(i) {
                return _c("tr", [
                  _c("td", [
                    _c("div", {
                      staticClass: "px-4 py-2 bg-grey rounded d-block"
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {
                      staticClass: "px-4 py-2 bg-grey rounded d-block"
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {
                      staticClass: "px-4 py-2 bg-grey rounded d-block"
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {
                      staticClass: "px-4 py-2 bg-grey rounded d-block"
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("div", {
                      staticClass: "px-4 py-2 bg-grey rounded d-block"
                    })
                  ])
                ])
              }),
              0
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass:
            "text-center py-3 d-flex w-100 align-items-center justify-content-center flex-row",
          class: { "shadow-none": _vm.noShadow == true },
          style: { "min-height": _vm.height }
        },
        [
          _c("img", {
            class: { "d-none": _vm.noImage },
            attrs: {
              src: __webpack_require__(/*! ../../../assets/NotFound.png */ "./resources/assets/NotFound.png"),
              alt: "Not Found",
              width: "128"
            }
          }),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      {
        staticClass:
          "d-flex list-unstyled border border-grey rounded w-auto font-sans overflow-hidden mb-0"
      },
      [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "d-block border-right border-grey px-3 py-2",
              class: {
                "bg-primary text-white": _vm.prevUrl != null,
                "cursor-not-allowed text-grey-dark": _vm.prevUrl == null
              },
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.prevPage()
                }
              }
            },
            [_vm._v("Prev")]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "d-block px-3 py-2",
              class: {
                "bg-primary text-white": _vm.nextUrl != null,
                "cursor-not-allowed text-grey-dark": _vm.nextUrl == null
              },
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.nextPage()
                }
              }
            },
            [_vm._v("Next")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-snack/dist/vue-snack.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-snack/dist/vue-snack.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-snack/dist/vue-snack.min.js'");

/***/ }),

/***/ "./node_modules/vue-status/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-status/src/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-status/src/index.js'");

/***/ }),

/***/ "./node_modules/vue-tabs-component/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-tabs-component/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-tabs-component/dist/index.js'");

/***/ }),

/***/ "./node_modules/vue-zondicons/dist/vue-zondicons.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-zondicons/dist/vue-zondicons.common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue-zondicons/dist/vue-zondicons.common.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./node_modules/vue2-filters/dist/vue2-filters.js":
/*!********************************************************!*\
  !*** ./node_modules/vue2-filters/dist/vue2-filters.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue2-filters/dist/vue2-filters.js'");

/***/ }),

/***/ "./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css":
/*!*******************************************************************!*\
  !*** ./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./vue2-scrollbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue2-scrollbar/dist/vue2-scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/vue2-scrollbar/dist/vue2-scrollbar.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vue2-scrollbar/dist/vue2-scrollbar.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/amar/Sites/happydrifters/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/assets/NotFound.png":
/*!***************************************!*\
  !*** ./resources/assets/NotFound.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/NotFound.png?22bf85245e8d8e5c9182d7f6acd576e7";

/***/ }),

/***/ "./resources/assets/svg/offline.svg":
/*!******************************************!*\
  !*** ./resources/assets/svg/offline.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/offline.svg?23fe24ff57f916602ca6ae28a042f3f2";

/***/ }),

/***/ "./resources/assets/svg/shopping-cart.svg":
/*!************************************************!*\
  !*** ./resources/assets/svg/shopping-cart.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/shopping-cart.svg?4d33ff7252e1509b825674bdbe8bf1ab";

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_snack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-snack */ "./node_modules/vue-snack/dist/vue-snack.min.js");
/* harmony import */ var vue_snack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_snack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-filters */ "./node_modules/vue2-filters/dist/vue2-filters.js");
/* harmony import */ var vue2_filters__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_filters__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lossendae_vue_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lossendae/vue-avatar */ "./node_modules/@lossendae/vue-avatar/dist/VueAvatar.common.js");
/* harmony import */ var _lossendae_vue_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lossendae_vue_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */








 // import { setupCalendar, Calendar } from 'v-calendar'
// import 'v-calendar/lib/v-calendar.min.css';
// setupCalendar({
// 	title: 'MMMM YYYY',
// 	weekdays: 'W',
// 	navMonths: 'MMM',
// 	input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
// 	dayPopover: 'L', // Only for `v-date-picker`
// });
// Vue.component("v-calendar", Calendar);

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
Vue.use(vue_snack__WEBPACK_IMPORTED_MODULE_4___default.a, {});
Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.use(vue2_filters__WEBPACK_IMPORTED_MODULE_5___default.a);
window.axios = axios; // axios.defaults.baseURL = `${process.env.MIX_APP_URL}/`;
// axios.defaults.baseURL = "http://happydrifetrs.test";
// axios.defaults.baseURL = "http://hdrifters.softinvoice.in";

Vue.component("vue-avatar", _lossendae_vue_avatar__WEBPACK_IMPORTED_MODULE_6___default.a); // const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("example-component", __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
Vue.directive("numeric-float", {
  bind: function bind(el) {
    el.addEventListener("keydown", function (e) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
      e.keyCode === 65 && e.ctrlKey === true || // Allow: Ctrl+C
      e.keyCode === 67 && e.ctrlKey === true || // Allow: Ctrl+X
      e.keyCode === 88 && e.ctrlKey === true || // Allow: home, end, left, right
      e.keyCode >= 35 && e.keyCode <= 39) {
        // let it happen, don't do anything
        return;
      } // Ensure that it is a number and stop the keypress


      if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
  }
});
Vue.filter("formattedDate", function (date) {
  return moment__WEBPACK_IMPORTED_MODULE_7___default()(date).format("DD MMM YYYY h:mm A");
});
Vue.filter("roundedOff", function (number) {
  return Math.round(number);
});
Vue.filter("formattedCurrency", function (number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
});

var converter = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/numberToWords.min.js");

Vue.filter("toWords", function (value) {
  if (!value) return "";
  return converter.toWords(value);
});
Vue.filter("titleCase", function (input) {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  input = input.toLowerCase();
  return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== "-" || title.charAt(index - 1) === "-") && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}); // const EventBus = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: "#app",
  router: _router__WEBPACK_IMPORTED_MODULE_0__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: {
    EventBus: new Vue(),
    user: window.user,
    sidebaritems: [{
      type: "link",
      to: "/",
      title: "Dashboard"
    }, {
      type: "divider",
      title: "Invoice"
    }, {
      type: "link",
      to: "/invoice/generate",
      title: "Generate Invoice"
    }, {
      type: "link",
      to: "/invoices",
      title: "All Invoices"
    }, {
      type: "divider",
      title: "Product"
    }, {
      type: "link",
      to: "/products/generate",
      title: "Add Product"
    }, {
      type: "link",
      to: "/products",
      title: "All Products"
    }, // {
    //   type: "divider",
    //   title: "Category"
    // },
    // {
    //   type: "link",
    //   to: "/category/generate",
    //   title: "Add Category"
    // },
    {
      type: "link",
      to: "/category",
      title: "All Categories"
    }, {
      type: "divider",
      title: "Customers"
    }, {
      type: "link",
      to: "/customers/new",
      title: " Customers"
    }, {
      type: "divider",
      title: "Settings"
    }, // {
    // 	type: "link",
    // 	to: "/profile",
    // 	title: "Profile"
    // },
    {
      type: "link",
      to: "/change-password",
      title: "Change Password"
    }] // render: h => h(App)

  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/category/CategoryDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/category/CategoryDetails.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true& */ "./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true&");
/* harmony import */ var _CategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "97041c04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/CategoryDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CategoryDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/CategoryDetails.vue?vue&type=template&id=97041c04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryDetails_vue_vue_type_template_id_97041c04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/category/Create.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/category/Create.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=029d8d52& */ "./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/category/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/category/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=029d8d52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Create.vue?vue&type=template&id=029d8d52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_029d8d52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/category/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/category/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=305a1aec&scoped=true& */ "./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/category/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "305a1aec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/category/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=305a1aec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Index.vue?vue&type=template&id=305a1aec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_305a1aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/category/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/category/Show.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=8564935a&scoped=true& */ "./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/category/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8564935a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/category/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=8564935a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/Show.vue?vue&type=template&id=8564935a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_8564935a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "376ddb84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=376ddb84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Dashboard.vue?vue&type=template&id=376ddb84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_376ddb84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/DashboardSalesChart.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/DashboardSalesChart.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardSalesChart.vue?vue&type=template&id=62ad0410& */ "./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410&");
/* harmony import */ var _DashboardSalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardSalesChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardSalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/DashboardSalesChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardSalesChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardSalesChart.vue?vue&type=template&id=62ad0410& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/DashboardSalesChart.vue?vue&type=template&id=62ad0410&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSalesChart_vue_vue_type_template_id_62ad0410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/invoice/Billing.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/invoice/Billing.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Billing.vue?vue&type=template&id=52d99d7e& */ "./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e&");
/* harmony import */ var _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Billing.vue?vue&type=script&lang=js& */ "./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Billing.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/invoice/Billing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Billing.vue?vue&type=template&id=52d99d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Billing.vue?vue&type=template&id=52d99d7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Billing_vue_vue_type_template_id_52d99d7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/invoice/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/invoice/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0f041f15&scoped=true& */ "./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/invoice/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f041f15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/invoice/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/invoice/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/invoice/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=0f041f15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Index.vue?vue&type=template&id=0f041f15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0f041f15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/invoice/Print.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/invoice/Print.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Print.vue?vue&type=template&id=57eb7920&scoped=true& */ "./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true&");
/* harmony import */ var _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Print.vue?vue&type=script&lang=js& */ "./resources/js/components/invoice/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& */ "./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57eb7920",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/invoice/Print.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/invoice/Print.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/invoice/Print.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=style&index=0&id=57eb7920&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_style_index_0_id_57eb7920_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Print.vue?vue&type=template&id=57eb7920&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Print.vue?vue&type=template&id=57eb7920&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Print_vue_vue_type_template_id_57eb7920_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/invoice/Show.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/invoice/Show.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=eaa3edec&scoped=true& */ "./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/invoice/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eaa3edec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/invoice/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/invoice/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/invoice/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=eaa3edec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/Show.vue?vue&type=template&id=eaa3edec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_eaa3edec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/lot/LotDetails.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/lot/LotDetails.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LotDetails.vue?vue&type=template&id=34daa6da&scoped=true& */ "./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true&");
/* harmony import */ var _LotDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LotDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LotDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34daa6da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lot/LotDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LotDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LotDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/LotDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LotDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LotDetails.vue?vue&type=template&id=34daa6da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/LotDetails.vue?vue&type=template&id=34daa6da&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LotDetails_vue_vue_type_template_id_34daa6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/lot/Show.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/lot/Show.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=9001ba34&scoped=true& */ "./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/lot/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9001ba34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lot/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lot/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/lot/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=9001ba34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lot/Show.vue?vue&type=template&id=9001ba34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_9001ba34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/newcustomer/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/newcustomer/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7fcfd4b4&scoped=true& */ "./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fcfd4b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/newcustomer/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7fcfd4b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Index.vue?vue&type=template&id=7fcfd4b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7fcfd4b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/newcustomer/Transaction.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/newcustomer/Transaction.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction.vue?vue&type=template&id=4c357cb2&scoped=true& */ "./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true&");
/* harmony import */ var _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction.vue?vue&type=script&lang=js& */ "./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c357cb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/newcustomer/Transaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=template&id=4c357cb2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/newcustomer/Transaction.vue?vue&type=template&id=4c357cb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_4c357cb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/oldcustomer/Create.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/oldcustomer/Create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=185071f1& */ "./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/oldcustomer/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=185071f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Create.vue?vue&type=template&id=185071f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_185071f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/oldcustomer/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/oldcustomer/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=430eb326&scoped=true& */ "./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "430eb326",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/oldcustomer/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=430eb326&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Index.vue?vue&type=template&id=430eb326&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_430eb326_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/oldcustomer/Transaction.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Transaction.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction.vue?vue&type=template&id=7a3bc78e& */ "./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e&");
/* harmony import */ var _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction.vue?vue&type=script&lang=js& */ "./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/oldcustomer/Transaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=template&id=7a3bc78e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/oldcustomer/Transaction.vue?vue&type=template&id=7a3bc78e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_7a3bc78e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/Create.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/product/Create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=c3879172& */ "./resources/js/components/product/Create.vue?vue&type=template&id=c3879172&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/product/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Create.vue?vue&type=template&id=c3879172&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/product/Create.vue?vue&type=template&id=c3879172& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=c3879172& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Create.vue?vue&type=template&id=c3879172&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c3879172___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/product/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f0184352&scoped=true& */ "./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0184352",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/product/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=f0184352&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Index.vue?vue&type=template&id=f0184352&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f0184352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/ProductDetails.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/product/ProductDetails.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true& */ "./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true&");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dd405bc4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductDetails.vue?vue&type=template&id=dd405bc4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_dd405bc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/Show.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/product/Show.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=5d085988&scoped=true& */ "./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/product/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5d085988",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/product/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=5d085988&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/Show.vue?vue&type=template&id=5d085988&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_5d085988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/settings/PasswordChange.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/settings/PasswordChange.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true& */ "./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true&");
/* harmony import */ var _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f32d5bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/PasswordChange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordChange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordChange.vue?vue&type=template&id=5f32d5bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_5f32d5bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/settings/Profile.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/settings/Profile.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=04208f68&scoped=true& */ "./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04208f68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/settings/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=04208f68&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/Profile.vue?vue&type=template&id=04208f68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_04208f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/AlertBox.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ui/AlertBox.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true& */ "./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true&");
/* harmony import */ var _AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertBox.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4aefba0f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/AlertBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/AlertBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/AlertBox.vue?vue&type=template&id=4aefba0f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertBox_vue_vue_type_template_id_4aefba0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/ContentPlaceholder.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/ui/ContentPlaceholder.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true& */ "./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true&");
/* harmony import */ var _ContentPlaceholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentPlaceholder.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentPlaceholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "efaf220c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/ContentPlaceholder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentPlaceholder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholder.vue?vue&type=template&id=efaf220c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholder_vue_vue_type_template_id_efaf220c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/ContentPlaceholderTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ui/ContentPlaceholderTable.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentPlaceholderTable.vue?vue&type=template&id=51b92824& */ "./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/ContentPlaceholderTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentPlaceholderTable.vue?vue&type=template&id=51b92824& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/ContentPlaceholderTable.vue?vue&type=template&id=51b92824&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentPlaceholderTable_vue_vue_type_template_id_51b92824___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/NotFound.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ui/NotFound.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true& */ "./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true&");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c51f8a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/NotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/NotFound.vue?vue&type=template&id=7c51f8a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_7c51f8a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ui/Paginate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ui/Paginate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginate.vue?vue&type=template&id=0ac653b7&scoped=true& */ "./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true&");
/* harmony import */ var _Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginate.vue?vue&type=script&lang=js& */ "./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& */ "./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ac653b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ui/Paginate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=style&index=0&id=0ac653b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_0ac653b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paginate.vue?vue&type=template&id=0ac653b7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ui/Paginate.vue?vue&type=template&id=0ac653b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_template_id_0ac653b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/event-bus.js":
/*!***********************************!*\
  !*** ./resources/js/event-bus.js ***!
  \***********************************/
/*! exports provided: EventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();

/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_invoice_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/invoice/Index */ "./resources/js/components/invoice/Index.vue");
/* harmony import */ var _components_invoice_Billing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invoice/Billing */ "./resources/js/components/invoice/Billing.vue");
/* harmony import */ var _components_invoice_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/Show */ "./resources/js/components/invoice/Show.vue");
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ "./resources/js/components/dashboard/Dashboard.vue");
/* harmony import */ var _components_product_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product/Index */ "./resources/js/components/product/Index.vue");
/* harmony import */ var _components_product_Create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/Create */ "./resources/js/components/product/Create.vue");
/* harmony import */ var _components_product_Show__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/Show */ "./resources/js/components/product/Show.vue");
/* harmony import */ var _components_category_Create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category/Create */ "./resources/js/components/category/Create.vue");
/* harmony import */ var _components_category_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/category/Index */ "./resources/js/components/category/Index.vue");
/* harmony import */ var _components_category_Show__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/category/Show */ "./resources/js/components/category/Show.vue");
/* harmony import */ var _components_lot_Show__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lot/Show */ "./resources/js/components/lot/Show.vue");
/* harmony import */ var _components_settings_PasswordChange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/settings/PasswordChange */ "./resources/js/components/settings/PasswordChange.vue");
/* harmony import */ var _components_settings_Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/settings/Profile */ "./resources/js/components/settings/Profile.vue");
/* harmony import */ var _components_oldcustomer_Create__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/oldcustomer/Create */ "./resources/js/components/oldcustomer/Create.vue");
/* harmony import */ var _components_oldcustomer_Index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/oldcustomer/Index */ "./resources/js/components/oldcustomer/Index.vue");
/* harmony import */ var _components_oldcustomer_Transaction_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/oldcustomer/Transaction.vue */ "./resources/js/components/oldcustomer/Transaction.vue");
/* harmony import */ var _components_newcustomer_Index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/newcustomer/Index */ "./resources/js/components/newcustomer/Index.vue");
/* harmony import */ var _components_newcustomer_Transaction_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/newcustomer/Transaction.vue */ "./resources/js/components/newcustomer/Transaction.vue");



















var routes = [{
  path: "/",
  component: _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: "/invoices",
  component: _components_invoice_Index__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: "/invoice/generate",
  component: _components_invoice_Billing__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: "/invoices/:uuid",
  component: _components_invoice_Show__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: "showinvoice",
  props: true
}, {
  path: "/products",
  component: _components_product_Index__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  path: "/products/generate",
  component: _components_product_Create__WEBPACK_IMPORTED_MODULE_6__["default"],
  name: "createproduct"
}, {
  path: "/products/:uuid",
  component: _components_product_Show__WEBPACK_IMPORTED_MODULE_7__["default"],
  name: "showproduct",
  props: true
}, {
  path: "/category",
  component: _components_category_Index__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: "/category/generate",
  component: _components_category_Create__WEBPACK_IMPORTED_MODULE_8__["default"],
  name: "createcategory"
}, {
  path: "/category/:uuid",
  component: _components_category_Show__WEBPACK_IMPORTED_MODULE_10__["default"],
  name: "showcategory",
  props: true
}, {
  path: "/lot/:uuid",
  component: _components_lot_Show__WEBPACK_IMPORTED_MODULE_11__["default"],
  name: "showlot",
  props: true
}, {
  path: "/oldcustomer/create",
  component: _components_oldcustomer_Create__WEBPACK_IMPORTED_MODULE_14__["default"],
  name: "Oldcustomer"
}, {
  path: "/customers/old",
  component: _components_oldcustomer_Index__WEBPACK_IMPORTED_MODULE_15__["default"],
  name: "OldcustomerList"
}, {
  path: "/oldcustomers/transaction/:id",
  component: _components_oldcustomer_Transaction_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
  name: "OldcustomerTransac"
}, {
  path: "/customers/new",
  component: _components_newcustomer_Index__WEBPACK_IMPORTED_MODULE_17__["default"],
  name: "NewcustomerList"
}, {
  path: "/customers/new/:uuid/transactions",
  component: _components_newcustomer_Transaction_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
  name: "NewcustomerTransaction"
}, // {
//     path: "/profile",
//     component: Profile,
//     name: "profile",
// },
{
  path: "/change-password",
  component: _components_settings_PasswordChange__WEBPACK_IMPORTED_MODULE_12__["default"],
  name: "passwordchange"
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  routes: routes // mode: 'history'

});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    items: [],
    inCart: [],
    lots: []
  },
  getters: {
    items: function items(state) {
      return state.items;
    },
    inCart: function inCart(state) {
      return state.inCart;
    },
    getNumberOfProducts: function getNumberOfProducts(state) {
      return state.items ? state.items.length : 0;
    },
    cartItems: function cartItems(state) {
      return state.inCart.map(function (cartItem) {
        var item = state.items.find(function (item) {
          return cartItem.id === item.id;
        }); // console.log("id", cartItem.id);
        // console.log("in cari", state.inCart);

        console.log("caritem", item);
        return {
          product_name: item.item_name,
          product_gst: item.item_gst,
          id: item.id,
          price: item.price,
          base_price: item.base_price,
          quantity: cartItem.quantity,
          total_price: item.base_price * cartItem.quantity
        };
      });
    }
  },
  mutations: {
    // POS STATES
    ADD_TO_CART: function ADD_TO_CART(state, invId) {
      var record = state.inCart.find(function (item) {
        console.log("ADD_TO_CART".concat(item.id, "- ").concat(invId));
        return item.id === invId;
      });

      if (!record) {
        state.inCart.push({
          id: invId,
          quantity: 1
        });
      } else {
        record.quantity++;
      }
    },
    CLEAR_CART: function CLEAR_CART(state) {
      state.inCart = [];
    },
    REMOVE_FROM_CART: function REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },
    INCREMENT_CART: function INCREMENT_CART(state, id) {
      var record = state.inCart.find(function (item) {
        return item.id === id;
      });

      if (record.quantity > 0) {
        record.quantity++;
      }
    },
    DECREMENT_CART: function DECREMENT_CART(state, id) {
      var record = state.inCart.find(function (item) {
        return item.id === id;
      });

      if (record.quantity > 1) {
        record.quantity--;
      }
    },
    ADD_ITEMS: function ADD_ITEMS(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    addToCart: function addToCart(context, invId) {
      context.commit("ADD_TO_CART", invId);
    },
    clearCart: function clearCart(context) {
      context.commit("CLEAR_CART");
    },
    removeFromCart: function removeFromCart(context, index) {
      context.commit("REMOVE_FROM_CART", index);
    },
    decrementItemFromCart: function decrementItemFromCart(context, index) {
      context.commit("DECREMENT_CART", index);
    },
    incrementItemFromCart: function incrementItemFromCart(context, index) {
      context.commit("INCREMENT_CART", index);
    },
    addItems: function addItems(context, payload) {
      context.commit("ADD_ITEMS", payload.items);
    }
  }
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\n@import \"node_modules/bootstrap/scss/functions\";\n       ^\n      Can't find stylesheet to import.\n  ╷\n8 │ @import \"node_modules/bootstrap/scss/functions\";\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  resources/sass/_bootstrap.scss 8:9  @import\n  stdin 2:9                           root stylesheet\n      in /home/amar/Sites/happydrifters/resources/sass/_bootstrap.scss (line 8, column 9)\n    at runLoaders (/home/amar/Sites/happydrifters/node_modules/webpack/lib/NormalModule.js:302:20)\n    at /home/amar/Sites/happydrifters/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/amar/Sites/happydrifters/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/amar/Sites/happydrifters/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/home/amar/Sites/happydrifters/node_modules/sass-loader/lib/loader.js:52:13)\n    at Function.call$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:53383:16)\n    at _render_closure1.call$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:33261:12)\n    at _RootZone.runBinary$3$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19685:18)\n    at _RootZone.runBinary$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19689:19)\n    at _FutureListener.handleError$1 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18157:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18442:40)\n    at Object._Future__propagateToListeners (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:3441:88)\n    at _Future._completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18278:9)\n    at _SyncCompleter._completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18144:19)\n    at _SyncCompleter.completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18113:12)\n    at _AsyncAwaitCompleter.completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:17650:25)\n    at Object._asyncRethrow (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:3197:17)\n    at /home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:10402:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:3220:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:17685:12)\n    at _awaitOnObject_closure0.call$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:17677:25)\n    at _RootZone.runBinary$3$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19685:18)\n    at _RootZone.runBinary$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19689:19)\n    at _FutureListener.handleError$1 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18157:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18442:40)\n    at Object._Future__propagateToListeners (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:3441:88)\n    at _Future._completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18278:9)\n    at _SyncCompleter._completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18144:19)\n    at _SyncCompleter.completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18113:12)\n    at Object.eval (eval at Closure_forwardCallTo (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:1486:14), <anonymous>:2:41)\n    at _RootZone.runBinary$3$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19685:18)\n    at _RootZone.runBinary$3 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:19689:19)\n    at _FutureListener.handleError$1 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18157:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18442:40)\n    at Object._Future__propagateToListeners (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:3441:88)\n    at _Future._completeError$2 (/home/amar/Sites/happydrifters/node_modules/sass/sass.dart.js:18278:9)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/amar/Sites/happydrifters/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/amar/Sites/happydrifters/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });