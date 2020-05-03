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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _js_gio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _js_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _js_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);








const init = () => {
    _js_background__WEBPACK_IMPORTED_MODULE_5__["init"]();
    _js_time__WEBPACK_IMPORTED_MODULE_0__["init"]();
    _js_name__WEBPACK_IMPORTED_MODULE_1__["init"]();
    _js_todo__WEBPACK_IMPORTED_MODULE_2__["init"]();
    _js_weather__WEBPACK_IMPORTED_MODULE_4__["init"]();
}

init();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
const elTime = document.querySelector('.time');
const elDate = document.querySelector('.date');

const getFormatTime = (time) => {
    
}

const getNowTime = () => {
    const t = new Date();

    let YYYY = t.getFullYear();
    let MM = t.getMonth() + 1;
    let DD = t.getDate();
    let hh = t.getHours();
    let mm = t.getMinutes();
    let ss = t.getSeconds();
    
    const date = `${YYYY}-${MM < 10? `0${MM}` : MM }-${DD < 10? `0${DD}` : DD }`;
    const time = `${hh < 10? `0${hh}` : hh }:${mm < 10? `0${mm}` : mm }:${ss < 10? `0${ss}` : ss }`;
    return {
        date,
        time
    }
}

const init = () => {
    setInterval(() => {
        const {date, time} = getNowTime();
        elTime.innerText = time
        elDate.innerText = date
    }, 1000);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const elInputName = document.getElementById('input-name');
const elName = document.querySelector('.name');
const elForm = document.getElementById('form-name');
const KEY_NAME = 'KEY_NAME';

const inputName = (name) => {
    elName.innerText = name;
    elForm.style.display = 'none';
    elName.style.display = 'block';

    Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["save"])(KEY_NAME, name);
}

const resetName = () => {
    elForm.style.display = 'block';
    elName.style.display = 'none';
}
const onSubmitForm = (e) => {
    e.preventDefault();
    const {value} = elInputName;
    inputName(value);
};

const init = () => {
    elForm.addEventListener('submit', onSubmitForm);
    elName.addEventListener('click', resetName);

    resetName();
    
    const initName = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["load"])(KEY_NAME);
    if (initName && initName !== 'null') {
        inputName(initName);
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
const save = (key, str) => {
    localStorage.setItem(key, str);
}
const load = (key) => {
    return localStorage.getItem(key);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const elForm = document.getElementById("action-add-todo");
const elPending = document.getElementById("pending-list");
const elFinished = document.getElementById("finished-list");
const elInputTodo = document.getElementById("input-todo");

let todoList = [];
let finishedList = [];

const KEY_PENDDING = "PENDDING";
const KEY_FINISHED = "FINISHED";

const init = () => {
  // get localstorage
  todoList = loadList(KEY_PENDDING) || [];
  finishedList = loadList(KEY_FINISHED) || [];

  // update
  updatePending();
  updateFinsihed();

  // elform add Event
  elForm.addEventListener("submit", e => {
    e.preventDefault();
    
    const todoStr = elInputTodo.value;
    elInputTodo.value = "";
    addTodo(todoStr);
    updatePending();
  });

  elPending.addEventListener("click", onClickBtnEvent);
  elFinished.addEventListener("click", onClickBtnEvent);
};

const addTodo = todo => {
  const obj = {
    id: new Date().getTime(),
    text: todo
  };
  todoList.push(obj);
  saveList(KEY_PENDDING, todoList);
};

const onClickBtnEvent = e => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  const id = Number(e.target.getAttribute("data-id"));
  const method = e.target.getAttribute("data-method");

  let index = -1;
  todoList.forEach((item, i) => {
    if (item.id === id) {
      index = i;
    }
  });

  switch (method) {
    case "delete":
      todoList.splice(index, 1);
      break;
    case "delete_at_finish":
      finishedList.splice(index, 1);
      break;
    case "finish":
      const todoItem = todoList.splice(index, 1);
      finishedList.push(todoItem[0]);
      break;
    case "return":
      const returnItem = finishedList.splice(index, 1);
      todoList.push(returnItem[0]);
      break;
    default:
      console.log(`what is ${method}???`);
      break;
  }
  saveList(KEY_PENDDING, todoList);
  saveList(KEY_FINISHED, finishedList);

  updatePending();
  updateFinsihed();
};

const updatePending = () => {
  let el = "";
  todoList.forEach((item, i) => {
    el += `<li>
      ${item.text}
      <button type="button" class="delete btn-icon" data-method="delete" data-id=${
        item.id
      }>👏</button>
    </li>`;
  });
  elPending.innerHTML = el;

  // <button type="button" class="finish" data-method="finish" data-id=${
  //   item.id
  // }>👌</button>
};

const updateFinsihed = () => {
  let el = "";
  finishedList.forEach((item, i) => {
    el += `<li>
      ${item.text}
      <button type="button" class="delete_at_finish" data-method="delete_at_finish" data-id=${
        item.id
      }>🗑</button>
      <button type="button" class="return" data-method="return" data-id=${
        item.id
      }>📄</button>
    </li>`;
  });
  elFinished.innerHTML = el;
};

const saveList = (key, list) => {
  Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["save"])(key, JSON.stringify(list));
};

const loadList = key => {
  return JSON.parse(Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["load"])(key));
};

// https://codesandbox.io/s/empty-blueprint-rrk2g


// const updateList = (container, list, key) => {
//   let el = "";
//   let methods = {
//     btnDelete: 'delete',
//     btnFinished: 'finish',
//     btnFinishedIcon: 'ok'
//   }
//   if (key === KEY_FINISHED ) {
//     methods = {
//       btnDelete: 'delete_at_finish',
//       btnFinished: 'return',
//       btnFinishedIcon: 'doc'
//     }
//   }

//   list.forEach((item, i) => {
//     el += `<li>
//       ${item.text}
//       <button type="button" class="${methods.btnDelete}" data-method="${methods.btnDelete}" data-id=${
//         item.id
//       }>🗑</button>
//       <button type="button" class="${methods.btnFinished}" data-method="${methods.btnFinished}" data-id=${
//         item.id
//       }>${item.btnFinishedIcon == "ok" ? '': ''}</button>
//     </li>`;
//   });
//   container.innerHTML = el;
// }

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCoords", function() { return eventCoords; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const KEY = 'COORDS';
let coords = null;
let addedCallback = null;

const eventCoords = (callback) => {
    addedCallback = callback;
    if (coords) {
        callback(coords);
    } else {
        init();
    }
}
const handleSucess = (e) => {
    const {latitude, longitude} = e.coords;
    coords = {
        latitude,
        longitude
    }
    if (addedCallback) {
        addedCallback(coords);
    }
    saveCoords(coords);
}
const handleFail = (e) => {
    
}

const saveCoords = (obj) => {
    Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["save"])(KEY, JSON.stringify(obj))
}
const askGio = () => {
    navigator.geolocation.getCurrentPosition(handleSucess, handleFail)
}

const init = () => {
    coords = JSON.parse(Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__["load"])(KEY));
    if (coords === null) {
        askGio();
    } else {
        addedCallback(coords);
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherAsync", function() { return getWeatherAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _gio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const API_KEY = 'eb7343bdb9fa9d75ca84237f0c496425';

const elWapper = document.querySelector('.wapper-weather');
const elTemp = document.querySelector('.temperature');
const elCity = document.querySelector('.city');
const elWeatherImg = document.querySelector('.img-weather');

const getWeatherAsync = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => {
            return res.text();
        })
        .then(res => {
            const obj = JSON.parse(res);
            const city = obj.name;
            const temp = obj.main.temp;
            const icon = obj.weather[0].icon;
            elTemp.innerText = temp;
            elCity.innerText = city;
            const weather = obj.weather[0].main;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            elWeatherImg.setAttribute('src', iconUrl);
            elWeatherImg.setAttribute('alt', weather);
            elWapper.style.display = 'block';
        })
}

const onGetGio = async(coords) => {
    const { latitude, longitude} = coords;
    const obj = await getWeatherAsync(latitude, longitude)
}

const init = () => {
    elWapper.style.display = 'none';
    Object(_gio__WEBPACK_IMPORTED_MODULE_1__["eventCoords"])(onGetGio)
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });

const init = () => {
  const elBody = document.querySelector('body');
  const num = Math.floor(Math.random() * 5) + 1;
  elBody.classList.add(`b${num}`);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(10);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(11);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(12);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(14);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(15);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(16);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(17);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "html, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    color:white;\r\n}\r\nbody {\r\n    font-family: 'Nanum Gothic', sans-serif;\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n    \r\n    /* background:lightblue url(\"./assets/images/img1.jpg\") center center cover no-repeat fixed; */\r\n    /* background-image:url(\"./assets/images/img1.jpg\");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-color: #464646;\r\n    opacity: 0.8; */\r\n    background-color: black;\r\n}\r\nbody::after {\r\n    content : \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity : 0.7;\r\n    z-index: -1;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    font-size: 3.5rem;\r\n}\r\nh2{\r\n    margin: 0;\r\n    font-size: 2.8rem;\r\n}\r\n.date {\r\n    font-weight: bold;\r\n}\r\n.name {\r\n    cursor: pointer;\r\n    border-bottom: 1px dashed;\r\n    box-sizing: border-box;\r\n}\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nsection {\r\n    text-align: center;\r\n}\r\nsection > div {\r\n    /* width: 100%; */\r\n    margin: 10px 0;\r\n}\r\n#pending-list {\r\n    max-width: 320px;\r\n    max-height: 350px;\r\n    font-size: 1.5rem;\r\n    list-style: none;\r\n    text-align: left;\r\n    padding: 0;\r\n    overflow-y: auto;\r\n}\r\ninput {\r\n    font-size: 1rem;\r\n    margin: 10px;\r\n    border: 0;\r\n    border-radius: 14px;\r\n    background: rgba(255,255,255,0.8);\r\n    padding: 8px;\r\n    opacity: 0.6;\r\n}\r\n#input-name {\r\n}\r\n.name::after {\r\n    content: '! GO!';\r\n}\r\n#input-todo {\r\n}\r\n.section-weather {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px;\r\n}\r\n.temperature {\r\n    font-weight: bold;\r\n}\r\n.temperature::after {\r\n    content: \"°C\";\r\n}\r\n.img-weather {\r\n    width: 50px;\r\n    height: 50px;\r\n    display: block;\r\n}\r\n.btn-icon {\r\n    border: 0;\r\n    padding:0;\r\n    margin:0;\r\n    font-size: 1.5rem;\r\n    background-color:transparent;\r\n}\r\n.b1::after {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.b2::after {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.b3::after {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n.b4::after {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n.b5::after {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n@media screen and (max-width: 360px) {\r\n    body {\r\n        min-width: 360px;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "deb5138267b9e3ec02b7a980e52a1885.jpg");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de763aee339aa975b1b43d6701bdf748.jpg");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6444116638844fedd72cd1882cbd4a3b.jpg");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df08f599d7fe8c53f41edec650f6b96f.jpg");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "968846a0eca88f8e726c201ee9ccf08b.jpg");

/***/ })
/******/ ]);