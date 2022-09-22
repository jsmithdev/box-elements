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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~details-sidebar~metadata-sidebar"],{

/***/ "./src/common/messages.js":
/*!********************************!*\
  !*** ./src/common/messages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  cancel: {
    "id": "boxui.core.cancel",
    "defaultMessage": "Cancel"
  },
  close: {
    "id": "boxui.core.close",
    "defaultMessage": "Close"
  },
  copy: {
    "id": "boxui.core.copy",
    "defaultMessage": "Copy"
  },
  copied: {
    "id": "boxui.core.copied",
    "defaultMessage": "Copied"
  },
  done: {
    "id": "boxui.core.done",
    "defaultMessage": "Done"
  },
  okay: {
    "id": "boxui.core.okay",
    "defaultMessage": "Okay"
  },
  save: {
    "id": "boxui.core.save",
    "defaultMessage": "Save"
  },
  send: {
    "id": "boxui.core.send",
    "defaultMessage": "Send"
  },
  optional: {
    "id": "boxui.core.optional",
    "defaultMessage": "optional"
  },
  pillSelectorPlaceholder: {
    "id": "boxui.share.pillSelectorPlaceholder",
    "defaultMessage": "Add names or email addresses"
  },
  messageSelectorPlaceholder: {
    "id": "boxui.share.messageSelectorPlaceholder",
    "defaultMessage": "Add a message"
  },
  invalidInputError: {
    "id": "boxui.validation.genericError",
    "defaultMessage": "Invalid Input"
  },
  minLengthError: {
    "id": "boxui.validation.tooShortError",
    "defaultMessage": "Input must be at least {min} characters"
  },
  maxLengthError: {
    "id": "boxui.validation.tooLongError",
    "defaultMessage": "Input cannot exceed {max} characters"
  },
  invalidEmailError: {
    "id": "boxui.validation.emailError",
    "defaultMessage": "Invalid Email Address"
  },
  invalidURLError: {
    "id": "boxui.validation.URLError",
    "defaultMessage": "Invalid URL"
  },
  invalidUserError: {
    "id": "boxui.validation.invalidUserError",
    "defaultMessage": "Invalid User"
  },
  requiredFieldError: {
    "id": "boxui.validation.requiredError",
    "defaultMessage": "Required Field"
  },
  invalidDateError: {
    "id": "boxui.validation.invalidDateError",
    "defaultMessage": "Invalid Date"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/common/variables.js":
/*!*********************************!*\
  !*** ./src/common/variables.js ***!
  \*********************************/
/*! exports provided: BOX_BLUE, SEESEE, RESIN_TAG_TARGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_BLUE", function() { return BOX_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEESEE", function() { return SEESEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIN_TAG_TARGET", function() { return RESIN_TAG_TARGET; });
const BOX_BLUE = '#0061d5';
const SEESEE = '#ccc';
const RESIN_TAG_TARGET = 'data-resin-target';


/***/ }),

/***/ "./src/components/focus-trap/FocusTrap.js":
/*!************************************************!*\
  !*** ./src/components/focus-trap/FocusTrap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabbable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "className", "getRef", "handleOverlayKeyDown", "shouldDefaultFocus", "shouldOutlineFocus"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FocusTrap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "focusFirstElement", () => {
      if (!this.el) {
        return;
      }

      const tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_1___default()(this.el); // There are three trap-related elements, including first element.
      // If there are 3 or fewer tabbable elements, that means there are no
      // tabbable children, so focus on the trap element instead.

      if (tabbableEls.length > 3) {
        tabbableEls[1].focus();
      } else if (this.trapEl) {
        this.trapEl.focus();
      }
    });

    _defineProperty(this, "focusLastElement", () => {
      if (!this.el) {
        return;
      }

      const tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_1___default()(this.el); // There are three trap-related elements, including the last two elements.
      // If there are 3 or fewer tabbable elements, that means there are no
      // tabbable children, so focus on the trap element instead.

      if (tabbableEls.length > 3) {
        tabbableEls[tabbableEls.length - 3].focus();
      } else if (this.trapEl) {
        this.trapEl.focus();
      }
    });

    _defineProperty(this, "handleElKeyDown", event => {
      const {
        handleOverlayKeyDown
      } = this.props;

      if (this.el === document.activeElement && event.key === 'Tab') {
        this.focusFirstElement();
        event.stopPropagation();
        event.preventDefault();
      }

      if (handleOverlayKeyDown) {
        handleOverlayKeyDown(event);
      }
    });

    _defineProperty(this, "handleTrapElKeyDown", event => {
      if (event.key !== 'Tab') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    });
  }

  componentDidMount() {
    if (this.props.shouldDefaultFocus) {
      setTimeout(() => {
        this.previousFocusEl = document.activeElement;
        this.focusFirstElement();
      }, 0);
    } else {
      setTimeout(() => {
        if (this.el) {
          this.el.focus();
        }
      }, 0);
    }
  }

  componentWillUnmount() {
    setTimeout(() => {
      if (this.previousFocusEl) {
        this.previousFocusEl.focus();
      }
    }, 0);
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className,
      getRef,
      handleOverlayKeyDown,
      shouldDefaultFocus,
      shouldOutlineFocus
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
        ref: ref => {
          this.el = ref;

          if (getRef) {
            getRef(ref);
          }
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
          'should-outline-focus': shouldOutlineFocus
        }),
        onKeyDown: this.handleElKeyDown
      }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        "aria-hidden": true,
        onFocus: this.focusLastElement,
        tabIndex: "0"
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        "aria-hidden": true,
        onFocus: this.focusFirstElement,
        tabIndex: "0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        ref: ref => {
          this.trapEl = ref;
        },
        "aria-hidden": true,
        onKeyDown: this.handleTrapElKeyDown // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        ,
        tabIndex: "0"
      }))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FocusTrap);

/***/ }),

/***/ "./src/components/focus-trap/index.js":
/*!********************************************!*\
  !*** ./src/components/focus-trap/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusTrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusTrap */ "./src/components/focus-trap/FocusTrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FocusTrap__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/label/HiddenLabel.tsx":
/*!**********************************************!*\
  !*** ./src/components/label/HiddenLabel.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelPrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelPrimitive */ "./src/components/label/LabelPrimitive.tsx");



const HiddenLabel = _ref => {
  let {
    children,
    labelContent
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelPrimitive__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "accessibility-hidden",
    labelContent: labelContent
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (HiddenLabel);

/***/ }),

/***/ "./src/components/label/InfoIconWithTooltip.tsx":
/*!******************************************************!*\
  !*** ./src/components/label/InfoIconWithTooltip.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_fill_Info16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon/fill/Info16 */ "./src/icon/fill/Info16.tsx");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");




const InfoIconWithTooltip = _ref => {
  let {
    className = '',
    iconProps,
    tooltipText
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    key: "infoIcon",
    className: `${className} tooltip-icon-container`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: _tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipPosition"].TOP_CENTER,
    text: tooltipText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "info-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Info16__WEBPACK_IMPORTED_MODULE_1__["default"], iconProps))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoIconWithTooltip);

/***/ }),

/***/ "./src/components/label/Label.scss":
/*!*****************************************!*\
  !*** ./src/components/label/Label.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/label/Label.tsx":
/*!****************************************!*\
  !*** ./src/components/label/Label.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _InfoIconWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoIconWithTooltip */ "./src/components/label/InfoIconWithTooltip.tsx");
/* harmony import */ var _StandardLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StandardLabel */ "./src/components/label/StandardLabel.tsx");
/* harmony import */ var _HiddenLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HiddenLabel */ "./src/components/label/HiddenLabel.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _Label_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label.scss */ "./src/components/label/Label.scss");
/* harmony import */ var _Label_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Label_scss__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // @ts-ignore flow import




const OptionalFormattedMessage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
  className: "label-optional bdl-Label-optional"
}, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].optional), ")");

const Label = _ref => {
  let {
    text,
    tooltip,
    infoTooltip,
    infoIconProps,
    showOptionalText,
    hideLabel,
    children
  } = _ref;
  const labelContent = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    key: "labelText"
  }, text), showOptionalText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OptionalFormattedMessage, {
    key: "optionalMessage"
  }) : null];

  if (infoTooltip) {
    labelContent.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_InfoIconWithTooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "infoTooltip",
      iconProps: _objectSpread({
        className: 'tooltip-icon'
      }, infoIconProps),
      tooltipText: infoTooltip
    }));
  }

  if (hideLabel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HiddenLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelContent: labelContent
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StandardLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelContent: labelContent,
    tooltip: tooltip
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/components/label/LabelPrimitive.tsx":
/*!*************************************************!*\
  !*** ./src/components/label/LabelPrimitive.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "className", "labelContent"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LabelPrimitive = _ref => {
  let {
    children,
    className,
    labelContent
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('label bdl-Label', className)
  }, rest), labelContent), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LabelPrimitive);

/***/ }),

/***/ "./src/components/label/StandardLabel.tsx":
/*!************************************************!*\
  !*** ./src/components/label/StandardLabel.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _LabelPrimitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabelPrimitive */ "./src/components/label/LabelPrimitive.tsx");




const StandardLabel = _ref => {
  let {
    children,
    labelContent,
    tooltip
  } = _ref;
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelPrimitive__WEBPACK_IMPORTED_MODULE_2__["default"], {
    labelContent: labelContent
  }, children);
  return tooltip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: _tooltip__WEBPACK_IMPORTED_MODULE_1__["TooltipPosition"].TOP_RIGHT,
    text: tooltip
  }, label) : label;
};

/* harmony default export */ __webpack_exports__["default"] = (StandardLabel);

/***/ }),

/***/ "./src/components/label/index.tsx":
/*!****************************************!*\
  !*** ./src/components/label/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label */ "./src/components/label/Label.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Label__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/link/Link.tsx":
/*!**************************************!*\
  !*** ./src/components/link/Link.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBase */ "./src/components/link/LinkBase.tsx");
const _excluded = ["className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// TODO: convert to stateless function
// eslint-disable-next-line react/prefer-stateless-function
class Link extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const _this$props = this.props,
          {
      className
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkBase__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      className: `link ${className}`
    }, rest));
  }

}

_defineProperty(Link, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/link/LinkBase.tsx":
/*!******************************************!*\
  !*** ./src/components/link/LinkBase.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["children", "href", "linkRef", "target", "rel", "component", "refProp"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const LinkBase = _ref => {
  let {
    children,
    href = '#',
    linkRef,
    target,
    rel,
    component,
    refProp
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  // Automatically append rel="noopener" for external links
  // (security fix) if no `rel` was passed
  const linkRel = target === '_blank' && !rel ? 'noopener' : rel;
  const LinkComponent = component || 'a';
  const ref = {
    [refProp || 'ref']: linkRef
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkComponent, _extends({
    href: href,
    rel: linkRel,
    target: target
  }, ref, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LinkBase);

/***/ }),

/***/ "./src/icon/fill/Info16.tsx":
/*!**********************************!*\
  !*** ./src/icon/fill/Info16.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/accessible-svg/AccessibleSVG */ "./src/components/accessible-svg/AccessibleSVG.tsx");
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

const Info16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  d: "M8 1a7 7 0 110 14A7 7 0 018 1zm.5 6H7a.5.5 0 000 1h.5v3H7a.5.5 0 100 1h2.5a.5.5 0 100-1H9V7.75a.783.783 0 00-.012-.139A.502.502 0 008.5 7zM8 4a1 1 0 100 2 1 1 0 000-2z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Info16);

/***/ }),

/***/ "./src/icons/general/IconInfo.tsx":
/*!****************************************!*\
  !*** ./src/icons/general/IconInfo.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconInfo = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-info ${className}`,
    height: height,
    title: title,
    viewBox: "-603 389 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M-595 403c5.5 0 8-7.1 3.9-10.6-4.2-3.6-10.8.3-9.8 5.7.5 2.8 3 4.9 5.9 4.9zm.9-6.7v3.7h-1.4v-3.7h1.4zm.1-2.2c0 1-1.7 1.1-1.7 0 .1-1.1 1.7-1.1 1.7 0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconInfo);

/***/ }),

/***/ "./src/icons/general/IconVerified.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconVerified.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconVerified = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGreenLight"],
    height = 14,
    opacity = 1,
    title,
    width = 14
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-verified ${className}`,
    height: height,
    opacity: opacity,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 14c-3.865993 0-7-3.134007-7-7s3.134007-7 7-7 7 3.134007 7 7-3.134007 7-7 7zM5.31288 9.303048l1.44555 1.21296 4.499514-5.36231-1.44555-1.21296-4.499514 5.36231zM3 7.36231L5.31288 9.30305l1.21296-1.44555L4.21296 5.91676 3 7.36231z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconVerified);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~details-sidebar~metadata-sidebar.js.map