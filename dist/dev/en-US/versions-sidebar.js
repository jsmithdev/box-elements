/*!
 * Box UI Element
 * 
 * Copyright 2019 Box, Inc. All rights reserved.
 * 
 * This product includes software developed by Box, Inc. ("Box")
 * (http://www.box.com)
 * 
 * ALL BOX SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL BOX BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * See the Box license for the specific language governing permissions
 * and limitations under the license.
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["versions-sidebar"],{

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./src/components/close-button/CloseButton.scss":
/*!******************************************************!*\
  !*** ./src/components/close-button/CloseButton.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/close-button/CloseButton.tsx":
/*!*****************************************************!*\
  !*** ./src/components/close-button/CloseButton.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconClose */ "./src/icons/general/IconClose.tsx");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _CloseButton_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CloseButton.scss */ "./src/components/close-button/CloseButton.scss");
/* harmony import */ var _CloseButton_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CloseButton_scss__WEBPACK_IMPORTED_MODULE_5__);







const CloseButton = _ref => {
  let {
    className,
    onClick
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-CloseButton', className),
    "data-testid": "bdl-CloseButton",
    onClick: onClick,
    type: _button__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].BUTTON
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_4__["bdlGray62"],
    height: 18,
    width: 18
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./src/components/primary-button/PrimaryButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/primary-button/PrimaryButton.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button */ "./src/components/button/Button.tsx");
const _excluded = ["children", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PrimaryButton = _ref => {
  let {
    children,
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: `btn-primary ${className}`
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/components/time/index.js":
/*!**************************************!*\
  !*** ./src/components/time/index.js ***!
  \**************************************/
/*! exports provided: ReadableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReadableTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadableTime */ "./src/components/time/ReadableTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadableTime", function() { return _ReadableTime__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./src/elements/content-sidebar/versions/StaticVersionSidebar.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/StaticVersionSidebar.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _illustration_BoxDrive140__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../illustration/BoxDrive140 */ "./src/illustration/BoxDrive140.tsx");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/nav-button */ "./src/elements/common/nav-button/index.js");
/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/primary-button */ "./src/components/primary-button/index.ts");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _VersionsMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsMenu */ "./src/elements/content-sidebar/versions/VersionsMenu.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _StaticVersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StaticVersionsSidebar.scss */ "./src/elements/content-sidebar/versions/StaticVersionsSidebar.scss");
/* harmony import */ var _StaticVersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_StaticVersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8__);
/**
 * 
 * @file Static Versions Sidebar component
 * @author Box
 */










const StaticVersionsSidebar = _ref => {
  let {
    isLoading,
    onUpgradeClick,
    parentName
  } = _ref;
  const versionTimestamp = new Date();
  versionTimestamp.setDate(versionTimestamp.getDate() - 1);
  const versions = ['1', '2', '3'].map(versionNumber => {
    return {
      id: versionNumber,
      version_number: versionNumber,
      type: 'file_version',
      permissions: {
        can_preview: true
      },
      created_at: versionTimestamp.toUTCString(),
      modified_by: null,
      size: 1875887,
      trashed_at: null,
      uploader_display_name: 'John Doe'
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-StaticVersionSidebar",
    role: "tabpanel",
    "data-resin-component": "preview",
    "data-resin-feature": "versions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-StaticVersionSidebar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    className: "bcs-StaticVersionSidebar-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_nav_button__WEBPACK_IMPORTED_MODULE_3__["BackButton"], {
    "data-resin-target": "back",
    to: `/${parentName}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionsTitle)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-StaticVersionSidebar-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_5__["LoadingIndicatorWrapper"], {
    className: "bcs-StaticVersionSidebar-content",
    crawlerPosition: "top",
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    versions: versions,
    fileId: "1",
    versionCount: 3,
    versionLimit: 3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-StaticVersionSidebar-upsell-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-StaticVersionSidebar-upsell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_illustration_BoxDrive140__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-StaticVersionSidebar-upsell-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bcs-StaticVersionSidebar-upsell-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionUpgradeLink)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionUpsell)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-StaticVersionSidebar-upsell-button",
    "data-resin-target": "versioning_error_upgrade_cta",
    onClick: onUpgradeClick,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].upgradeButton)))));
};

/* harmony default export */ __webpack_exports__["default"] = (StaticVersionsSidebar);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/StaticVersionsSidebar.scss":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/StaticVersionsSidebar.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsGroup.js":
/*!****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsGroup.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VersionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsList */ "./src/elements/content-sidebar/versions/VersionsList.js");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsGroup.scss */ "./src/elements/content-sidebar/versions/VersionsGroup.scss");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["heading"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Group component
 * @author Box
 */




const VersionsGroup = _ref => {
  let {
    heading
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bcs-VersionsGroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "bcs-VersionsGroup-heading"
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsList__WEBPACK_IMPORTED_MODULE_1__["default"], rest));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsGroup);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsGroup.scss":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsGroup.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItem.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _utils_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/size */ "./src/utils/size.js");
/* harmony import */ var _VersionsItemActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsItemActions */ "./src/elements/content-sidebar/versions/VersionsItemActions.js");
/* harmony import */ var _VersionsItemButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsItemButton */ "./src/elements/content-sidebar/versions/VersionsItemButton.js");
/* harmony import */ var _VersionsItemBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VersionsItemBadge */ "./src/elements/content-sidebar/versions/VersionsItemBadge.js");
/* harmony import */ var _VersionsItemRetention__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VersionsItemRetention */ "./src/elements/content-sidebar/versions/VersionsItemRetention.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/time */ "./src/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VersionsItem.scss */ "./src/elements/content-sidebar/versions/VersionsItem.scss");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item component
 * @author Box
 */












const ACTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_DELETE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionDeletedBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_RESTORE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionRestoredBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_PROMOTE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionPromotedBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_UPLOAD_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionUploadedBy
};
const FILE_EXTENSIONS_OFFICE = ['xlsb', 'xlsm', 'xlsx'];
const FIVE_MINUTES_MS = 5 * 60 * 1000;

const VersionsItem = _ref => {
  let {
    fileId,
    isCurrent = false,
    isSelected = false,
    isWatermarked = false,
    onDelete,
    onDownload,
    onPreview,
    onPromote,
    onRestore,
    version,
    versionCount,
    versionLimit
  } = _ref;
  const {
    created_at: createdAt,
    extension,
    id: versionId,
    is_download_available,
    permissions = {},
    restored_at: restoredAt,
    retention,
    size,
    trashed_at: trashedAt,
    version_number: versionNumber,
    version_promoted: versionPromoted
  } = version;
  const {
    can_delete,
    can_download,
    can_preview,
    can_upload
  } = permissions;
  const {
    applied_at: retentionAppliedAt,
    disposition_at: retentionDispositionAt
  } = retention || {};
  const retentionDispositionAtDate = retentionDispositionAt && new Date(retentionDispositionAt); // Version info helpers

  const versionAction = _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionAction(version);
  const versionInteger = versionNumber ? parseInt(versionNumber, 10) : 1;
  const versionTime = restoredAt || trashedAt || createdAt;
  const versionTimestamp = versionTime && new Date(versionTime).getTime();
  const versionUserName = _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionUser(version).name || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionUserUnknown);
  const versionDisplayName = versionUserName !== _constants__WEBPACK_IMPORTED_MODULE_10__["FILE_REQUEST_NAME"] ? versionUserName : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].fileRequestDisplayName); // Version state helpers

  const isDeleted = versionAction === _constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_DELETE_ACTION"];
  const isDownloadable = !!is_download_available;
  const isLimited = versionCount - versionInteger >= versionLimit;
  const isOffice = FILE_EXTENSIONS_OFFICE.includes(extension);
  const isRestricted = (isOffice || isWatermarked) && !isCurrent;
  const isRetained = !!retentionAppliedAt && (!retentionDispositionAtDate || retentionDispositionAtDate > new Date()); // Version action helpers

  const canPreview = can_preview && !isDeleted && !isLimited && !isRestricted;
  const showDelete = can_delete && !isDeleted && !isCurrent;
  const showDownload = can_download && !isDeleted && isDownloadable;
  const showPromote = can_upload && !isDeleted && !isCurrent;
  const showRestore = can_delete && isDeleted;
  const showPreview = canPreview && !isSelected;
  const hasActions = showDelete || showDownload || showPreview || showPromote || showRestore; // Version action callback helper

  const handleAction = handler => () => {
    if (handler) {
      handler(versionId);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: !canPreview,
    isSelected: isSelected,
    onClick: handleAction(onPreview)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemBadge__WEBPACK_IMPORTED_MODULE_7__["default"], {
    versionNumber: versionNumber
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-details"
  }, isCurrent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionCurrent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-log",
    "data-testid": "bcs-VersionsItem-log",
    title: versionDisplayName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, ACTION_MAP[versionAction], {
    values: {
      name: versionDisplayName,
      versionPromoted
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-info"
  }, versionTimestamp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("time", {
    className: "bcs-VersionsItem-date",
    dateTime: versionTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time__WEBPACK_IMPORTED_MODULE_9__["ReadableTime"], {
    alwaysShowTime: true,
    relativeThreshold: FIVE_MINUTES_MS,
    timestamp: versionTimestamp
  })), !!size && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-VersionsItem-size"
  }, Object(_utils_size__WEBPACK_IMPORTED_MODULE_4__["default"])(size))), isRetained && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-retention"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemRetention__WEBPACK_IMPORTED_MODULE_8__["default"], {
    retention: retention
  })), isLimited && hasActions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionLimitExceeded, {
    values: {
      versionLimit
    }
  }))))), !isLimited && hasActions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isRetained: isRetained,
    onDelete: handleAction(onDelete),
    onDownload: handleAction(onDownload),
    onPreview: handleAction(onPreview),
    onPromote: handleAction(onPromote),
    onRestore: handleAction(onRestore),
    showDelete: showDelete,
    showDownload: showDownload,
    showPreview: showPreview,
    showPromote: showPromote,
    showRestore: showRestore
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItem);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItem.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItem.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemAction.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemAction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItemAction.scss */ "./src/elements/content-sidebar/versions/VersionsItemAction.scss");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["action", "children", "fileId", "isCurrent"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Item Action component
 * @author Box
 */




const VersionsItemAction = _ref => {
  let {
    action,
    children,
    fileId,
    isCurrent
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], _extends({
    className: "bcs-VersionsItemAction",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": action
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemAction);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemAction.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemAction.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemActions.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemActions.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/general/IconClockPast */ "./src/icons/general/IconClockPast.tsx");
/* harmony import */ var _icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconDownload */ "./src/icons/general/IconDownload.tsx");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.tsx");
/* harmony import */ var _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/general/IconOpenWith */ "./src/icons/general/IconOpenWith.tsx");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.tsx");
/* harmony import */ var _icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../icons/general/IconUpload */ "./src/icons/general/IconUpload.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.tsx");
/* harmony import */ var _VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VersionsItemAction */ "./src/elements/content-sidebar/versions/VersionsItemAction.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VersionsItemActions.scss */ "./src/elements/content-sidebar/versions/VersionsItemActions.scss");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14__);
/**
 * 
 * @file Versions Item Actions component
 * @author Box
 */
















const handleMenuClose = event => {
  event.stopPropagation();
};

const handleToggleClick = event => {
  event.stopPropagation();
};

const VersionsItemActions = _ref => {
  let {
    fileId,
    isCurrent = false,
    isRetained = false,
    onDelete,
    onDownload,
    onPreview,
    onPromote,
    onRestore,
    showDelete = false,
    showDownload = false,
    showPreview = false,
    showPromote = false,
    showRestore = false
  } = _ref;

  if (!showDelete && !showDownload && !showPreview && !showPromote && !showRestore) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-VersionsItemActions",
    constrainToScrollParent: true,
    constrainToWindow: true,
    isRightAligned: true,
    onMenuClose: handleMenuClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "bcs-VersionsItemActions-toggle",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": "overflow",
    onClick: handleToggleClick,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 4,
    width: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionToggle, text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "accessibility-hidden"
  }, text))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_13__["Menu"], {
    className: "bcs-VersionsItemActions-menu",
    "data-resin-component": "preview" // Needed for resin events due to tether moving menu to body
    ,
    "data-resin-feature": "versions" // Needed for resin events due to tether moving menu to body

  }, showPreview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "preview",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionPreview)), showDownload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "download",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onDownload
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDownload)), showPromote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "promote",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPromote
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionPromote)), showRestore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "restore",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onRestore
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: 14,
    width: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionRestore)), showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
    position: "middle-left",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDisabledRetention),
    isTabbable: false,
    isDisabled: !isRetained
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "remove",
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: isRetained,
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDelete)))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemActions);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemActions.scss":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemActions.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemBadge.js":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemBadge.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionsItemBadge.scss */ "./src/elements/content-sidebar/versions/VersionsItemBadge.scss");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Badge component
 * @author Box
 */





const VersionsItemBadge = _ref => {
  let {
    intl,
    versionNumber
  } = _ref;
  const intlValues = {
    versionNumber
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionNumberLabel, intlValues),
    className: "bcs-VersionsItemBadge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionNumberBadge, {
    values: intlValues
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(VersionsItemBadge));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemBadge.scss":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemBadge.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemButton.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionsItemButton.scss */ "./src/elements/content-sidebar/versions/VersionsItemButton.scss");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item Button component
 * @author Box
 */






class VersionsItemButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "setButtonRef", buttonRef => {
      this.buttonRef = buttonRef;
    });

    _defineProperty(this, "setScroll", () => {
      const {
        isSelected
      } = this.props;

      if (this.buttonRef && isSelected) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(this.buttonRef);
      }
    });
  }

  componentDidMount() {
    this.setScroll();
  }

  componentDidUpdate(_ref) {
    let {
      isSelected: prevIsSelected
    } = _ref;
    const {
      isSelected
    } = this.props;

    if (isSelected !== prevIsSelected) {
      this.setScroll();
    }
  }

  render() {
    const {
      children,
      fileId,
      isCurrent,
      isDisabled,
      isSelected,
      onClick
    } = this.props;
    const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-VersionsItemButton', {
      'bcs-is-disabled': isDisabled,
      'bcs-is-selected': isSelected && !isDisabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-disabled": isDisabled,
      className: buttonClassName,
      "data-resin-iscurrent": isCurrent,
      "data-resin-itemid": fileId,
      "data-resin-target": "select",
      "data-testid": "versions-item-button",
      getDOMRef: this.setButtonRef,
      isDisabled: isDisabled,
      onClick: onClick,
      type: "button"
    }, children);
  }

}

_defineProperty(VersionsItemButton, "defaultProps", {
  isCurrent: false,
  isDisabled: false,
  isSelected: false
});

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemButton);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemButton.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemButton.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemRetention.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemRetention.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/time */ "./src/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Retention component
 * @author Box
 */





const RETENTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_DELETE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionDelete,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_REMOVE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionRemove
};

const VersionsItemRetention = _ref => {
  let {
    retention
  } = _ref;
  const {
    disposition_at: dispositionAt,
    winning_retention_policy: retentionPolicy
  } = retention || {};
  const {
    disposition_action: dispositionAction,
    retention_length: retentionLength
  } = retentionPolicy || {};
  const dispositionAtTime = dispositionAt && new Date(dispositionAt).getTime();

  if (!dispositionAction) {
    return null;
  }

  return retentionLength === _constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_INDEFINITE"] || !dispositionAtTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionIndefinite) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, RETENTION_MAP[dispositionAction], {
    values: {
      time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time__WEBPACK_IMPORTED_MODULE_2__["ReadableTime"], {
        timestamp: dispositionAtTime,
        showWeekday: true
      })
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemRetention);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsList.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsList.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _VersionsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItem */ "./src/elements/content-sidebar/versions/VersionsItem.js");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionsList.scss */ "./src/elements/content-sidebar/versions/VersionsList.scss");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_VersionsList_scss__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["currentId", "versions"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions List component
 * @author Box
 */





const VersionsList = _ref => {
  let {
    currentId,
    versions
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bcs-VersionsList"
  }, versions.map(version => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "bcs-VersionsList-item",
    key: version.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: _ref2 => {
      let {
        match
      } = _ref2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        isCurrent: currentId === version.id,
        isSelected: match.params.versionId === version.id,
        version: version
      }, rest));
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsList);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsList.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsList.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsMenu.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsMenu.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsGroup */ "./src/elements/content-sidebar/versions/VersionsGroup.js");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsMenu.scss */ "./src/elements/content-sidebar/versions/VersionsMenu.scss");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["intl", "versions"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Menu component
 * @author Box
 */








const getHeading = _ref => {
  let {
    intl,
    version
  } = _ref;
  const {
    created_at: createdAt
  } = version;
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentSunday = currentDate.getDate() - currentDay;
  const createdAtDate = _utils_datetime__WEBPACK_IMPORTED_MODULE_3__["convertToDate"](createdAt);
  let heading;

  if (_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isToday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsToday); // Today
  } else if (_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isYesterday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsYesterday); // Yesterday
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isCurrentYear"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      year: 'numeric'
    }); // 2018
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isCurrentMonth"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      month: 'long'
    }); // January
  } else if (createdAtDate.getDate() <= currentSunday - 7) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsThisMonth); // This Month
  } else if (createdAtDate.getDate() <= currentSunday) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsPriorWeek); // Last Week
  } else {
    heading = intl.formatDate(createdAt, {
      weekday: 'long'
    }); // Monday
  }

  return heading;
};

const VersionsMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_ref2 => {
  let {
    intl,
    versions
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);

  const {
    id: currentId
  } = versions[0] || {}; // Build an ordered set of groups with headings based on the original order of the versions array

  const versionGroups = versions.reduce((groups, version) => {
    const currentGroup = lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups);
    const groupHeading = getHeading({
      intl,
      version
    }); // Push a new group if there are no groups or if the heading has changed

    if (!currentGroup || currentGroup.groupHeading !== groupHeading) {
      groups.push({
        groupHeading,
        groupVersions: []
      });
    } // Push the sorted version to the newest group's versions collection


    lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups).groupVersions.push(version);
    return groups;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bcs-VersionsMenu"
  }, versionGroups.map(_ref3 => {
    let {
      groupHeading,
      groupVersions
    } = _ref3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "bcs-VersionsMenu-item",
      key: groupHeading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsGroup__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      currentId: currentId,
      heading: groupHeading,
      versions: groupVersions
    }, rest)));
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(VersionsMenu));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsMenu.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsMenu.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebar.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/inline-error */ "./src/components/inline-error/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _VersionsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsMenu */ "./src/elements/content-sidebar/versions/VersionsMenu.js");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/nav-button */ "./src/elements/common/nav-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VersionsSidebar.scss */ "./src/elements/content-sidebar/versions/VersionsSidebar.scss");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["error", "isLoading", "parentName", "versions"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Sidebar component
 * @author Box
 */










const MAX_VERSIONS = _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_FETCH_END"];

const VersionsSidebar = _ref => {
  let {
    error,
    isLoading,
    parentName,
    versions
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const showLimit = versions.length >= MAX_VERSIONS;
  const showVersions = !!versions.length;
  const showEmpty = !isLoading && !showVersions;
  const showError = !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-Versions",
    "data-resin-component": "preview",
    "data-resin-feature": "versions",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_nav_button__WEBPACK_IMPORTED_MODULE_6__["BackButton"], {
      "data-resin-target": "back",
      to: `/${parentName}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsTitle))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__["LoadingIndicatorWrapper"], {
    className: "bcs-Versions-content",
    crawlerPosition: "top",
    isLoading: isLoading
  }, showError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionServerError)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], error)), showEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsEmpty)), showVersions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsMenu__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    versions: versions
  }, rest))), showLimit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-maxEntries",
    "data-testid": "max-versions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionMaxEntries, {
    values: {
      maxVersions: MAX_VERSIONS
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsSidebar);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebar.scss":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebar.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebarAPI.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebarAPI.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VersionsSidebarAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/fields */ "./src/utils/fields.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar API Helper
 * @author Box
 */


class VersionsSidebarAPI {
  constructor(_ref) {
    let {
      api,
      fileId
    } = _ref;

    _defineProperty(this, "fetchData", () => {
      return Promise.all([this.fetchFile(), this.fetchVersions()]).then(this.fetchVersionCurrent);
    });

    _defineProperty(this, "fetchDownloadUrl", version => {
      return new Promise((resolve, reject) => {
        if (!version) {
          return reject(new Error('Could not find requested version'));
        }

        return this.api.getFileAPI().getDownloadUrl(this.fileId, version, resolve, reject);
      });
    });

    _defineProperty(this, "fetchFile", () => {
      return new Promise((resolve, reject) => this.api.getFileAPI().getFile(this.fileId, resolve, reject, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_1__["FILE_VERSION_FIELDS_TO_FETCH"],
        forceFetch: true
      }));
    });

    _defineProperty(this, "fetchVersions", () => {
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersions(this.fileId, resolve, reject));
    });

    _defineProperty(this, "fetchVersionCurrent", _ref2 => {
      let [fileResponse, versionsResponse] = _ref2;
      const {
        file_version = {}
      } = fileResponse;
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersion(this.fileId, file_version.id, currentVersionResponse => {
        resolve([fileResponse, this.api.getVersionsAPI(false).addCurrentVersion(currentVersionResponse, versionsResponse, fileResponse)]);
      }, reject));
    });

    _defineProperty(this, "fetchVersion", versionId => {
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersion(this.fileId, versionId, resolve, reject));
    });

    _defineProperty(this, "deleteVersion", version => {
      const {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).deleteVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    _defineProperty(this, "promoteVersion", version => {
      const {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).promoteVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    _defineProperty(this, "restoreVersion", version => {
      const {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).restoreVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    this.api = api;
    this.fileId = fileId;
  }

}

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebarContainer.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebarContainer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _utils_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/iframe */ "./src/utils/iframe.js");
/* harmony import */ var _StaticVersionSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StaticVersionSidebar */ "./src/elements/content-sidebar/versions/StaticVersionSidebar.js");
/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VersionsSidebar */ "./src/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony import */ var _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VersionsSidebarAPI */ "./src/elements/content-sidebar/versions/VersionsSidebarAPI.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/api-context */ "./src/elements/common/api-context/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar container
 * @author Box
 */














class VersionsSidebarContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isLoading: true,
      isWatermarked: false,
      versionCount: Infinity,
      versionLimit: Infinity,
      versions: []
    });

    _defineProperty(this, "window", window);

    _defineProperty(this, "handleActionDelete", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.deleteVersion(this.findVersion(versionId)).then(() => this.api.fetchVersion(versionId)).then(this.handleDeleteSuccess).then(() => this.props.onVersionDelete(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionDeleteError));
    });

    _defineProperty(this, "handleActionDownload", versionId => {
      return this.api.fetchDownloadUrl(this.findVersion(versionId)).then(_utils_iframe__WEBPACK_IMPORTED_MODULE_8__["default"]).then(() => this.props.onVersionDownload(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionDownloadError));
    });

    _defineProperty(this, "handleActionPreview", versionId => {
      this.updateVersion(versionId);
      this.props.onVersionPreview(versionId);
    });

    _defineProperty(this, "handleActionPromote", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.promoteVersion(this.findVersion(versionId)).then(this.api.fetchData).then(this.handleFetchSuccess).then(this.handlePromoteSuccess).then(() => this.props.onVersionPromote(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionPromoteError));
    });

    _defineProperty(this, "handleActionRestore", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.restoreVersion(this.findVersion(versionId)).then(() => this.api.fetchVersion(versionId)).then(this.handleRestoreSuccess).then(() => this.props.onVersionRestore(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionRestoreError));
    });

    _defineProperty(this, "handleActionError", message => {
      this.setState({
        error: message,
        isLoading: false
      });
    });

    _defineProperty(this, "handleDeleteSuccess", data => {
      const {
        versionId: selectedVersionId
      } = this.props;
      const {
        id: versionId
      } = data;
      this.mergeResponse(data); // Bump the user to the current version if they deleted their selected version

      if (versionId === selectedVersionId) {
        this.updateVersionToCurrent();
      }
    });

    _defineProperty(this, "handleRestoreSuccess", data => {
      this.mergeResponse(data);
    });

    _defineProperty(this, "handleFetchError", () => {
      this.setState({
        error: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionFetchError,
        isLoading: false,
        isWatermarked: false,
        versionCount: 0,
        versions: []
      });
    });

    _defineProperty(this, "handleFetchSuccess", _ref => {
      let [fileResponse, versionsResponse] = _ref;
      const {
        api
      } = this.props;
      const {
        version_limit
      } = fileResponse;
      const isWatermarked = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(fileResponse, 'watermark_info.is_watermarked', false);
      const versionLimit = version_limit !== null && version_limit !== undefined ? version_limit : Infinity;
      const versionsWithPermissions = api.getVersionsAPI(false).addPermissions(versionsResponse, fileResponse) || {};
      const {
        entries: versions,
        total_count: versionCount
      } = versionsWithPermissions;
      this.setState({
        error: undefined,
        isLoading: false,
        isWatermarked,
        versionCount,
        versionLimit,
        versions: this.sortVersions(versions)
      }, this.verifyVersion);
      return [fileResponse, versionsResponse];
    });

    _defineProperty(this, "handlePromoteSuccess", _ref2 => {
      let [file] = _ref2;
      const {
        file_version: fileVersion
      } = file;

      if (fileVersion) {
        this.updateVersion(fileVersion.id);
      }
    });

    _defineProperty(this, "initialize", () => {
      this.api = new _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_11__["default"](this.props);
    });

    _defineProperty(this, "fetchData", () => {
      return this.api.fetchData().then(this.handleFetchSuccess).catch(this.handleFetchError);
    });

    _defineProperty(this, "findVersion", versionId => {
      const {
        versions
      } = this.state;
      return versions.find(version => version.id === versionId);
    });

    _defineProperty(this, "getCurrentVersionId", () => {
      const {
        versions
      } = this.state;
      return versions[0] ? versions[0].id : null;
    });

    _defineProperty(this, "mergeVersions", newVersion => {
      const {
        versions
      } = this.state;
      const newVersionId = newVersion ? newVersion.id : '';
      return versions.map(version => version.id === newVersionId ? lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread({}, version), newVersion) : version);
    });

    _defineProperty(this, "mergeResponse", data => {
      const newVersions = this.mergeVersions(data);
      this.setState({
        error: undefined,
        isLoading: false,
        versions: newVersions
      });
    });

    _defineProperty(this, "updateVersion", versionId => {
      const {
        history,
        match
      } = this.props;
      return history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["generatePath"])(match.path, _objectSpread(_objectSpread({}, match.params), {}, {
        versionId
      })));
    });

    _defineProperty(this, "updateVersionToCurrent", () => {
      this.updateVersion(this.getCurrentVersionId());
    });

    _defineProperty(this, "verifyVersion", () => {
      const {
        onVersionChange,
        versionId
      } = this.props;
      const selectedVersion = this.findVersion(versionId);

      if (selectedVersion) {
        onVersionChange(selectedVersion, {
          currentVersionId: this.getCurrentVersionId(),
          updateVersionToCurrent: this.updateVersionToCurrent
        });
      } else {
        this.updateVersionToCurrent();
      }
    });
  }

  componentDidMount() {
    const {
      onLoad
    } = this.props;
    this.initialize();
    this.fetchData().then(() => {
      onLoad({
        component: 'preview',
        feature: 'versions'
      });
    });
  }

  componentDidUpdate(_ref3) {
    let {
      fileId: prevFileId,
      versionId: prevVersionId
    } = _ref3;
    const {
      fileId,
      versionId
    } = this.props;

    if (fileId !== prevFileId) {
      this.refresh();
    }

    if (versionId !== prevVersionId) {
      this.verifyVersion();
    }
  }

  componentWillUnmount() {
    // Reset the current version id since the wrapping route is no longer active
    this.props.onVersionChange(null);
  }

  refresh() {
    this.initialize();
    this.setState({
      isLoading: true
    }, this.fetchData);
  }

  sortVersions() {
    let versions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return [...versions].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  }

  render() {
    const {
      fileId,
      parentName,
      onUpgradeClick
    } = this.props;

    if (onUpgradeClick) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StaticVersionSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
        onUpgradeClick: onUpgradeClick,
        parentName: parentName
      }, this.state));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsSidebar__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      fileId: fileId,
      onDelete: this.handleActionDelete,
      onDownload: this.handleActionDownload,
      onPreview: this.handleActionPreview,
      onPromote: this.handleActionPromote,
      onRestore: this.handleActionRestore,
      parentName: parentName
    }, this.state));
  }

}

_defineProperty(VersionsSidebarContainer, "defaultProps", {
  onLoad: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionChange: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDownload: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPreview: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPromote: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionRestore: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  parentName: ''
});

/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"], _common_api_context__WEBPACK_IMPORTED_MODULE_12__["withAPIContext"]])(VersionsSidebarContainer));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/index.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/versions/index.js ***!
  \********************************************************/
/*! exports provided: default, VersionsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionsSidebarContainer */ "./src/elements/content-sidebar/versions/VersionsSidebarContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsSidebar */ "./src/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionsSidebarComponent", function() { return _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/versions/messages.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/versions/messages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  fileRequestDisplayName: {
    "id": "be.sidebarVersions.fileRequestDisplayName",
    "defaultMessage": "File Request"
  },
  versionsEmpty: {
    "id": "be.sidebarVersions.empty",
    "defaultMessage": "No prior versions are available for this file."
  },
  versionsPriorWeek: {
    "id": "be.sidebarVersions.priorWeek",
    "defaultMessage": "Last Week"
  },
  versionsThisMonth: {
    "id": "be.sidebarVersions.thisMonth",
    "defaultMessage": "This Month"
  },
  versionsToday: {
    "id": "be.sidebarVersions.today",
    "defaultMessage": "Today"
  },
  versionsYesterday: {
    "id": "be.sidebarVersions.yesterday",
    "defaultMessage": "Yesterday"
  },
  versionsTitle: {
    "id": "be.sidebarVersions.title",
    "defaultMessage": "Version History"
  },
  versionCurrent: {
    "id": "be.sidebarVersions.current",
    "defaultMessage": "Current Version"
  },
  versionActionDelete: {
    "id": "be.sidebarVersions.delete",
    "defaultMessage": "Delete"
  },
  versionActionDeleteError: {
    "id": "be.sidebarVersions.deleteError",
    "defaultMessage": "File version could not be deleted."
  },
  versionActionDisabledRetention: {
    "id": "be.sidebarVersions.disabledByRetention",
    "defaultMessage": "Disabled by retention policy"
  },
  versionActionDownload: {
    "id": "be.sidebarVersions.download",
    "defaultMessage": "Download"
  },
  versionActionDownloadError: {
    "id": "be.sidebarVersions.downloadError",
    "defaultMessage": "File version could not be downloaded."
  },
  versionActionPreview: {
    "id": "be.sidebarVersions.preview",
    "defaultMessage": "Preview"
  },
  versionActionPromote: {
    "id": "be.sidebarVersions.promote",
    "defaultMessage": "Make Current"
  },
  versionActionPromoteError: {
    "id": "be.sidebarVersions.promoteError",
    "defaultMessage": "File version could not be made current."
  },
  versionActionRestore: {
    "id": "be.sidebarVersions.restore",
    "defaultMessage": "Restore"
  },
  versionActionRestoreError: {
    "id": "be.sidebarVersions.restoreError",
    "defaultMessage": "File version could not be restored."
  },
  versionActionToggle: {
    "id": "be.sidebarVersions.toggle",
    "defaultMessage": "Toggle Actions Menu"
  },
  versionDeletedBy: {
    "id": "be.sidebarVersions.deletedBy",
    "defaultMessage": "Deleted by {name}"
  },
  versionFetchError: {
    "id": "be.sidebarVersions.fetchError",
    "defaultMessage": "File versions could not be retrieved."
  },
  versionNotAvailable: {
    "id": "be.sidebarVersions.notAvailable",
    "defaultMessage": "Sorry, version history is not available with your current account plan. To access versioning, select from one of our paid plans."
  },
  versionLimitExceeded: {
    "id": "be.sidebarVersions.versionLimitExceeded",
    "defaultMessage": "You are limited to the last {versionLimit, number} {versionLimit, plural, one {version} other {versions}}."
  },
  versionNumberBadge: {
    "id": "be.sidebarVersions.versionNumberBadge",
    "defaultMessage": "V{versionNumber}"
  },
  versionNumberLabel: {
    "id": "be.sidebarVersions.versionNumberLabel",
    "defaultMessage": "Version number {versionNumber}"
  },
  versionPromotedBy: {
    "id": "be.sidebarVersions.promotedBy",
    "defaultMessage": "Promoted from v{versionPromoted} by {name}"
  },
  versionRestoredBy: {
    "id": "be.sidebarVersions.restoredBy",
    "defaultMessage": "Restored by {name}"
  },
  versionServerError: {
    "id": "be.sidebarVersions.serverError",
    "defaultMessage": "Server Error"
  },
  versionUpgradeLink: {
    "id": "be.sidebarVersions.upgradeLink",
    "defaultMessage": "Upgrade Now"
  },
  versionUploadedBy: {
    "id": "be.sidebarVersions.uploadedBy",
    "defaultMessage": "Uploaded by {name}"
  },
  versionUserUnknown: {
    "id": "be.sidebarVersions.versionUserUnknown",
    "defaultMessage": "Unknown"
  },
  versionMaxEntries: {
    "id": "be.sidebarVersions.versionMaxEntries",
    "defaultMessage": "Version history is limited to the last {maxVersions} entries."
  },
  versionRetentionDelete: {
    "id": "be.sidebarVersions.versionRetentionDelete",
    "defaultMessage": "Will be deleted {time} by retention policy."
  },
  versionRetentionIndefinite: {
    "id": "be.sidebarVersions.versionRetentionIndefinite",
    "defaultMessage": "Retained indefinitely by retention policy."
  },
  versionRetentionRemove: {
    "id": "be.sidebarVersions.versionRetentionRemove",
    "defaultMessage": "Retention policy expires on {time}."
  },
  versionUpsell: {
    "id": "be.sidebarVersions.versionUpsell",
    "defaultMessage": "Sorry, version history is not available with your current account plan. To access versioning, select from one of our paid plans."
  },
  upgradeButton: {
    "id": "be.sidebarVersions.upgradeButton",
    "defaultMessage": "Upgrade"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/icons/general/IconClockPast.tsx":
/*!*********************************************!*\
  !*** ./src/icons/general/IconClockPast.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconClockPast = _ref => {
  let {
    className = '',
    color = '#444',
    height = 14,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-clock-past ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 14",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: "5",
    rx: ".5",
    width: "1",
    x: "9.66",
    y: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    width: "3",
    x: "9.66",
    y: "7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "stroke-color",
    d: "M5.66 10.62C6.697 11.48 8.032 12 9.487 12c3.314 0 6-2.686 6-6s-2.686-6-6-6c-3.313 0-6 2.686-6 6",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M6.317 5l-2.83 2.828L.66 5",
    fill: color
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClockPast);

/***/ }),

/***/ "./src/icons/general/IconClose.tsx":
/*!*****************************************!*\
  !*** ./src/icons/general/IconClose.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconClose = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-close ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClose);

/***/ }),

/***/ "./src/icons/general/IconDownload.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconDownload.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");




const IconDownload = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-download ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM10.996 2v4.997H14L8 13 2 6.997h3.004V2h5.992zm-.998 1H6.002v4.996h-1.59L8 11.586l3.589-3.59H9.998V3z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDownload);

/***/ }),

/***/ "./src/icons/general/IconOpenWith.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconOpenWith.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");




const IconOpenWith = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-open-with ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 2v6h-1V6.71l-4.65 4.64-.7-.7L9.29 6H5V5h6z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconOpenWith);

/***/ }),

/***/ "./src/icons/general/IconUpload.tsx":
/*!******************************************!*\
  !*** ./src/icons/general/IconUpload.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconUpload = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-upload ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM8 1l6 6.003h-3.004V12H5.004V7.003H2L8 1zm0 1.413l-3.589 3.59h1.591v4.998h3.996V6.004h1.59L8 2.414z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconUpload);

/***/ }),

/***/ "./src/illustration/BoxDrive140.tsx":
/*!******************************************!*\
  !*** ./src/illustration/BoxDrive140.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/accessible-svg/AccessibleSVG */ "./src/components/accessible-svg/AccessibleSVG.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/jsx-sort-props */



/**
 * This is an auto-generated component and should not be edited
 * manually in contributor pull requests.
 *
 * If you have problems with this component:
 * - https://github.com/box/box-ui-elements/issues/new?template=Bug_report.md
 *
 * If there are missing features in this component:
 * - https://github.com/box/box-ui-elements/issues/new?template=Feature_request.md
 */

const BoxDrive140 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 140,
  height: 140,
  viewBox: "0 0 140 140"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M74.512 19.775a4 4 0 014.842-2.637l14.986 4.015.218.065c.082.027.163.057.244.09l-1.287 4.8-.058.234a7 7 0 005.008 8.34l4.8 1.287a4 4 0 01-.096.476l-1.826 6.81L108.997 30l.104-.17a4 4 0 015.173-1.396l.187.102 13.436 7.757.193.12.108.072.105.077-2.486 4.304-.116.21a7 7 0 002.463 9.223l.216.13 4.304 2.485-.102.22-.115.214-13.757 23.829-.104.17a4 4 0 01-5.173 1.396l-.187-.102-.247-.143L113 60a6 6 0 00-5.775-5.996L107 54l-8.535-.002-2.418 9.024-.056.191a4 4 0 01-4.843 2.637L67.966 59.64l-.191-.057a4 4 0 01-2.637-4.842l9.317-34.774zm-55.64 12.544l2.485 4.304.124.207a7 7 0 009.439 2.356l4.041-2.334L39.556 54H33a6 6 0 00-6 6v18.399l-.174.095a4 4 0 01-5.29-1.56l-18-31.177-.095-.175a4 4 0 011.56-5.289l13.436-7.757.2-.108c.077-.039.156-.075.235-.11zm33.557-15.28l1.286 4.801.066.232a7 7 0 008.507 4.718l4.802-1.286a4 4 0 01.154.46l1.766 6.594L63.264 54H41.626l-7.488-27.95-.047-.193a4 4 0 012.875-4.705l14.986-4.016.22-.052c.086-.018.171-.033.257-.045z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(1 15)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ellipse", {
  cx: 69,
  cy: 104,
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"],
  rx: 60,
  ry: 7
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M106 39a6 6 0 016 6v54h9a6 6 0 01-6 6H23a6 6 0 01-6-6h9V45a6 6 0 016-6h74z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  fillRule: "nonzero",
  d: "M78.872.206L93.858 4.22a6 6 0 013.643 2.796l5.863 10.155.522.943L106.265 14a6 6 0 018.196-2.196l13.436 7.757a6 6 0 012.796 3.643l3.106 11.592a6 6 0 01-.6 4.552l-13.757 23.829A6.001 6.001 0 01112 65.743L112 99h9a6 6 0 01-6 6H23a6 6 0 01-6-6h9l-.001-33.408-.235.079a6.002 6.002 0 01-6.96-2.737l-18-31.177a6 6 0 012.197-8.196l13.436-7.757a6 6 0 014.553-.6l11.591 3.106c.16.043.316.092.47.147l-1.845-6.889a6 6 0 014.243-7.348L50.435.204a6 6 0 014.553.6l10.392 6a6 6 0 012.795 3.643l.87 3.248 2.478-9.246A6 6 0 0178.872.206zM61.765 101L19.536 101l.01.019a3.999 3.999 0 003.254 1.976l.2.005h92a3.996 3.996 0 003.34-1.797l.123-.203H76.235c-.549.614-1.347 1-2.235 1H64a2.993 2.993 0 01-2.235-1zM106 41H32a4 4 0 00-3.995 3.8L28 45v54h82V45a4 4 0 00-3.8-3.995L106 41zm0 1a3 3 0 013 3v53H29V45a3 3 0 013-3h74zm0 2H32a1 1 0 00-.993.883L31 45v51h76V45a1 1 0 00-.883-.993L106 44zm5.999 19.5l.247.142a4 4 0 005.36-1.294l.104-.17 13.757-23.829a4 4 0 00.217-.434l-4.304-2.486a7 7 0 01-2.68-9.352l.117-.21 2.486-4.304a3.999 3.999 0 00-.213-.15l-.193-.119-13.436-7.757a4 4 0 00-5.36 1.294l-.104.17L94.14 39H106a6 6 0 016 6l-.001 18.5zM17.872 17.319c-.08.034-.158.07-.235.11l-.2.107-13.436 7.757a4 4 0 00-1.56 5.289l.096.175 18 31.177a4 4 0 005.289 1.56l.174-.095V45a6 6 0 016-6h6.556l-4.595-17.148-4.041 2.334a7 7 0 01-9.439-2.356l-.124-.207-2.485-4.304zM51.43 2.039a3.999 3.999 0 00-.256.045l-.22.052-14.987 4.016a4 4 0 00-2.875 4.705l.047.194L40.626 39h21.638l5.746-21.442-1.766-6.593a4 4 0 00-.154-.46l-4.802 1.285a7 7 0 01-8.507-4.718l-.066-.232-1.286-4.8zm77.188 21.249l-2.068 3.579a5 5 0 001.645 6.718l.186.112 3.58 2.068-.04-.23-.053-.22-3.106-11.592a4 4 0 00-.144-.435zM20.024 17.043l2.065 3.58a5 5 0 006.64 1.935l.19-.104 3.582-2.067-.22-.08-.217-.065-11.592-3.106a4 4 0 00-.448-.093zm75.494-9.41l-1.071 3.993a5 5 0 003.327 6.063l.208.06 3.994 1.072-.1-.212-.107-.2-6-10.392a4 4 0 00-.251-.383zM53.578 2.33l1.069 3.993A5 5 0 0060.56 9.91l.21-.052 3.995-1.07-.192-.133-.193-.12-10.392-6a4 4 0 00-.41-.205zm48.516 18.893l-.002-.001.151-.258-4.778-1.282-.237-.068a7 7 0 01-4.822-8.033l.05-.239.059-.233 1.287-4.801-.122-.047-.122-.043-.218-.065-14.986-4.015-.2-.049c-.2-.042-.401-.07-.6-.081L77.355 2a4.005 4.005 0 00-3.7 2.395l-.076.187-.067.193-.057.191L64.335 39h27.496l10.263-17.777z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"],
  fillRule: "nonzero",
  d: "M113.987 35.357l6.062 3.5-1 1.732-6.062-3.5 1-1.732zm2-3.464l6.062 3.5-1 1.732-6.062-3.5 1-1.732zm-6.33.964l2.598 1.5-1 1.732-2.598-1.5 1-1.732zm18.96-9.57a4 4 0 01.144.436l3.106 11.591.052.22.041.231-3.58-2.068-.186-.112a5 5 0 01-1.645-6.718zm-16.96 6.106l2.598 1.5-1 1.732-2.598-1.5 1-1.732z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  d: "M106.791 35.822a1 1 0 01-.366-1.367l4-6.928a1 1 0 011.366-.366l12.124 7a1 1 0 01.367 1.366l-4 6.928a1 1 0 01-1.262.419l-.105-.052-12.124-7zm12.258 4.767l1-1.732-6.062-3.5-1 1.732 6.062 3.5zm-6.794-6.232l-2.598-1.5-1 1.732 2.598 1.5 1-1.732zm8.794 2.768l1-1.732-6.062-3.5-1 1.732 6.062 3.5zm-6.794-6.232l-2.598-1.5-1 1.732 2.598 1.5 1-1.732zm-86.433-3.61a1 1 0 01-.367 1.367l2 3.464a1 1 0 111 1.732l-5.196 3 .5.866.866-.5a1 1 0 011 1.732l-3.464 2a1 1 0 01-1-1.732l.866-.5-.5-.866-5.196 3a1 1 0 11-1-1.732l-2-3.464a1 1 0 11-1-1.732l12.124-7a1 1 0 011.367.366zm-2.099 2.367l-8.66 5 2 3.464 8.66-5-2-3.464zm58.765-8.992l.055.117 1.432 3.569 1.452-.837a1 1 0 011.342.325l.059.106.046.115 2.311 6.83a1 1 0 01-1.096 1.31l-.11-.023-13.523-3.624a1 1 0 01-.503-1.614l.08-.083 6.9-6.433a1 1 0 011.555.242zm-21.913 5.078a1 1 0 01-.707 1.225l-13.523 3.624a1 1 0 01-.518-1.932l13.523-3.624a1 1 0 011.225.707zm20.655-2.864l-4.515 4.21 9.976 2.672-1.32-3.905-1.393.804a1 1 0 01-1.31-.278l-.067-.107-.051-.108-1.32-3.288zm-22.028-1.544a1 1 0 01-.707 1.225l-13.523 3.623a1 1 0 01-.517-1.932l13.523-3.623a1 1 0 011.224.707zM56.303 18.5a1 1 0 01-.707 1.224l-9.66 2.589a1 1 0 01-.517-1.932l9.66-2.589a1 1 0 011.224.708zm32.47-1.147a2 2 0 11-1.035 3.863 2 2 0 011.035-3.863z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  fillRule: "nonzero",
  d: "M95.518 7.634l-1.071 3.992a5 5 0 003.327 6.063l.208.06 3.994 1.072-.1-.212-.107-.2-6-10.392a4 4 0 00-.251-.383z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M61.765 101c.549.614 1.347 1 2.235 1h10c.888 0 1.686-.386 2.235-1h42.228l-.124.203A3.996 3.996 0 01115 103H23l-.2-.005a3.999 3.999 0 01-3.254-1.976l-.01-.019zM106 41l.2.005a4 4 0 013.795 3.789L110 45v54H28V45l.005-.2a4 4 0 013.789-3.795L32 41h74zm0 1H32a3 3 0 00-2.995 2.824L29 45v53h80V45a3 3 0 00-2.824-2.995L106 42zm0 2l.117.007a1 1 0 01.876.876L107 45v51H31V45l.007-.117a1 1 0 01.876-.876L32 44h74zm0 1H32v50h74V45z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue05"],
  d: "M32 45h74v50H32z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M84.709 64A7.98 7.98 0 0082 70a7.98 7.98 0 002.71 6.001L48 76l-.225-.004A6 6 0 0148 64z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  fillRule: "nonzero",
  d: "M90 62a8 8 0 01.25 15.996L90 78H48a8 8 0 110-16h42zm-5.291 2H48a6 6 0 00-.225 11.996L48 76l36.71.001A7.98 7.98 0 0182 70a7.98 7.98 0 012.709-6zM49 66a1 1 0 011 1v6a1 1 0 01-2 0v-6a1 1 0 011-1z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"],
  d: "M89 66a3 3 0 012.708 4.293l2 2a1 1 0 01-1.32 1.497l-.095-.083-2-1.999A3 3 0 1189 66zm0 2a1 1 0 100 2 1 1 0 000-2z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"],
  fillRule: "nonzero",
  d: "M26.723 44.65l2 3.464-8.66 5-2-3.464 8.66-5zm57.507-6.778l1.32 3.288.05.108.068.107a1 1 0 001.31.278l1.392-.804 1.321 3.905-9.976-2.673 4.515-4.209zm-63.206-5.829a4 4 0 01.448.093l11.592 3.106.217.065.22.08-3.581 2.067-.19.104a5 5 0 01-6.64-1.935zm75.494-9.41a4 4 0 01.251.384l6 10.392.108.2.099.212-3.994-1.071-.208-.06a5 5 0 01-3.327-6.064zm-41.94-5.303a4 4 0 01.41.206l10.392 6 .193.119.192.134-3.994 1.07-.211.05a5 5 0 01-5.913-3.586z"
})));

/* harmony default export */ __webpack_exports__["default"] = (BoxDrive140);

/***/ }),

/***/ "./src/utils/iframe.js":
/*!*****************************!*\
  !*** ./src/utils/iframe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openUrlInsideIframe; });
/**
 * 
 * @file Function to create iframe and downloading
 * @author Box
 */

/**
 * Creates an empty iframe or uses an existing one
 * for the purposes of downloading or printing
 *
 * @private
 * @return {HTMLIFrameElement} Iframe
 */
function createDownloadIframe() {
  let iframe = document.querySelector('#boxdownloadiframe');

  if (!iframe) {
    // if no existing iframe create a new one
    iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'boxdownloadiframe');
    iframe.style.display = 'none';

    if (document.body) {
      document.body.appendChild(iframe);
    }
  } // If the iframe previously failed to load contentDocument will be null


  if (iframe.contentDocument) {
    // Clean the iframe up
    iframe.contentDocument.write('<head></head><body></body>');
  }

  return iframe;
}
/**
 * Opens url in an iframe
 * Used for downloads
 *
 * @param {string} url - URL to open
 * @return {HTMLIFrameElement}
 */


function openUrlInsideIframe(url) {
  const iframe = createDownloadIframe();
  iframe.src = url;
  return iframe;
}

/***/ }),

/***/ "./src/utils/size.js":
/*!***************************!*\
  !*** ./src/utils/size.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @file Function to create size in words out of number
 * @author Box
 */

/**
 * Gets the size in words
 *
 * @param {number} size in bytes
 * @return {string} size in words
 */
/* harmony default export */ __webpack_exports__["default"] = (function (size) {
  if (!size) return '0 Byte';
  const kilo = 1024;
  const decimals = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const exp = Math.floor(Math.log(size) / Math.log(kilo));
  return `${parseFloat((size / kilo ** exp).toFixed(decimals))} ${sizes[exp]}`;
});

/***/ })

}]);
//# sourceMappingURL=versions-sidebar.js.map