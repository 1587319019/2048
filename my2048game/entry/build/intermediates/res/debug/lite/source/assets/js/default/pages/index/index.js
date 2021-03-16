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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)
var options=$app_script$
 if ($app_script$.__esModule) {

      options = $app_script$.default;
 }
options.styleSheet=$app_style$
options.render=$app_template$;
module.exports=new ViewModel(options);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (vm) { var _vm = vm || this; return _c('div', {'staticClass' : ["container"]} , [_c('text', {'attrs' : {'value' : function () {return 'Best ' + (_vm.best)}},'staticClass' : ["scores"]} ),_c('text', {'attrs' : {'value' : function () {return 'Score ' + (_vm.score)}},'staticClass' : ["scores"]} ),_c('stack', {'staticClass' : ["stack"]} , [_c('div', {'staticClass' : ["tile-wrap"],'on' : {'swipe' : _vm.onSwipe}} , [_l((function () {return _vm.tiles}),function($item,$idx){return _c('div', {'staticClass' : ["tile"],'dynamicStyle' :{'backgroundColor' : function () {return $item.backgroundColor}}} , [_c('text', {'attrs' : {'value' : function () {return $item.text}},'staticClass' : ["text"],'dynamicStyle' :{'color' : function () {return $item.color}}} )] )})] ),_c('div', {'attrs' : {'show' : function () {return _vm.isShow}},'staticClass' : ["subcontainer"]} , [_c('text', {'attrs' : {'value' : "游戏结束"},'staticClass' : ["gameover"]} )] )] ),_c('input', {'attrs' : {'type' : "button",'value' : "重新开始"},'staticClass' : ["btn"],'on' : {'click' : _vm.onInit}} )] ) }

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"classSelectors":{"container":{"width":454,"height":454,"flexDirection":"column","justifyContent":"center","alignItems":"center"},"scores":{"fontSize":24,"textAlign":"center","width":400,"height":28,"letterSpacing":0,"marginTop":5},"tile-wrap":{"width":305,"height":305,"flexWrap":"wrap","backgroundColor":12299680},"tile":{"width":70,"height":70,"marginTop":5,"marginLeft":5,"justifyContent":"center","alignItems":"center"},"btn":{"width":120,"height":35,"backgroundColor":11378063,"fontSize":24,"marginTop":10,"color":0},"text":{"fontSize":26,"color":0},"stack":{"width":305,"height":305,"marginTop":10},"subcontainer":{"width":305,"height":305,"justifyContent":"center","alignItems":"center","backgroundColor":"rgba(0,0,0,0)"},"gameover":{"fontSize":38,"color":0}}}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var numbers, newNumbers;
var NewTheme = {
  "0": "#D4C8BD",
  "2": "#EDE3DA",
  "4": "#EDE1D1",
  "8": "#F0CBAA",
  "16": "#F1BC9F",
  "32": "#F1AF9D",
  "64": "#F1A08B",
  "128": "#EDD9A6",
  "256": "#F6E5B0",
  "512": "#CDFF3F",
  "1024": "#CADCD4",
  "2048": "#75DBFF"
};
var _default = {
  data: {
    score: 0,
    best: 9818,
    tiles: [],
    isShow: false,
    Restart: '重新开始'
  },
  onInit: function onInit() {
    this.tiles = [{
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }, {
      text: "",
      backgroundColor: "#cdc1b4",
      color: ""
    }];
    numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.supplyNumber();
    this.supplyNumber();
    this.updateView();
  },
  supplyNumber: function supplyNumber() {
    var positions = [];

    for (var _i = 0; _i < 16; _i++) {
      if (!newNumbers[_i]) {
        positions.push(_i);
      }
    }

    var i = Math.floor(Math.random() * positions.length);

    if (Math.random() < 0.8) {
      newNumbers[positions[i]] = 2;
    } else {
      newNumbers[positions[i]] = 4;
    }
  },
  onSwipe: function onSwipe(e) {
    newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var start, differ, step;

    switch (e.direction) {
      case 'left':
        start = 0;
        differ = 1;
        step = 4;
        break;

      case 'right':
        start = 3;
        differ = -1;
        step = 4;
        break;

      case 'up':
        start = 0;
        differ = 4;
        step = 1;
        break;

      case 'down':
        start = 12;
        differ = -4;
        step = 1;
    }

    var ids;

    for (var i = 0; i < 4; i++) {
      ids = this.getIds(start, differ);
      var before = null;
      var noZeros = 0;

      for (var j = 0; j < 4; j++) {
        var id = ids[j];
        var number = numbers[id];

        if (number) {
          if (number === before) {
            this.score += number * 2;
            newNumbers[ids[noZeros - 1]] *= 2;
            before = null;
          } else {
            newNumbers[ids[noZeros]] = number;
            before = number;
            noZeros += 1;
          }
        }
      }

      start += step;
    }

    if (numbers.toString() != newNumbers.toString()) {
      this.supplyNumber();
      this.updateView();

      if (this.isGameOver() == true) {
        for (var _i2 = 0; _i2 < 16; _i2++) {
          this.tiles[_i2].backgroundColor = NewTheme[numbers[_i2].toString()];
        }

        this.isShow = true;
      }

      newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  },
  isGameOver: function isGameOver() {
    if (this.isGridsFull() == true && this.isGridsNotMergeable() == true) {
      return true;
    }
  },
  isGridsFull: function isGridsFull() {
    if (numbers.indexOf(0) == -1) {
      return true;
    }
  },
  isGridsNotMergeable: function isGridsNotMergeable() {
    for (var i = 0; i < 16; i++) {
      if (i < 15) {
        if (numbers[i] == numbers[i + 1] && (i + 1) % 4 != 0) {
          return false;
        }
      }

      if (i < 12) {
        if (numbers[i] == numbers[i + 4]) {
          return false;
        }
      }
    }

    return true;
  },
  getIds: function getIds(start, differ) {
    var ids = [];

    for (var i = 4; i; i--) {
      ids.push(start);
      start += differ;
    }

    return ids;
  },
  updateView: function updateView() {
    var theme = {
      "2": "#eee4da",
      "4": "#ede0c8",
      "8": "#f2b179",
      "16": "#f59563",
      "32": "#f67c5f",
      "64": "#f65e3b",
      "128": "#edcf72",
      "256": "#edcc61",
      "512": "#99cc00",
      "1024": "#83af9b",
      "2048": "#0099cc"
    };

    for (var i = 0; i < 16; i++) {
      if (newNumbers[i] != 0) {
        this.tiles[i].text = newNumbers[i].toString();
        this.tiles[i].backgroundColor = theme[newNumbers[i].toString()];

        if (newNumbers[i] == 2 || newNumbers[i] == 4) {
          this.tiles[i].color = "#645B52";
        } else {
          this.tiles[i].color = "#FFFFFF";
        }
      } else {
        this.tiles[i].text = "";
        this.tiles[i].backgroundColor = '#cdc1b4';
      }
    }

    numbers = newNumbers;
  }
};
exports["default"] = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map