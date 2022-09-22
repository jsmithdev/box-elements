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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metadata-sidebar"],{

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: ITEM_TYPE_FILE, ITEM_TYPE_FOLDER, ITEM_TYPE_WEBLINK, JSON_PATCH_OP_ADD, JSON_PATCH_OP_REMOVE, JSON_PATCH_OP_REPLACE, JSON_PATCH_OP_TEST, METADATA_FIELD_TYPE_ENUM, METADATA_FIELD_TYPE_MULTISELECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_TYPE_FILE", function() { return ITEM_TYPE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_TYPE_FOLDER", function() { return ITEM_TYPE_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEM_TYPE_WEBLINK", function() { return ITEM_TYPE_WEBLINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_PATCH_OP_ADD", function() { return JSON_PATCH_OP_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_PATCH_OP_REMOVE", function() { return JSON_PATCH_OP_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_PATCH_OP_REPLACE", function() { return JSON_PATCH_OP_REPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_PATCH_OP_TEST", function() { return JSON_PATCH_OP_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_FIELD_TYPE_ENUM", function() { return METADATA_FIELD_TYPE_ENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_FIELD_TYPE_MULTISELECT", function() { return METADATA_FIELD_TYPE_MULTISELECT; });
const ITEM_TYPE_FILE = 'file';
const ITEM_TYPE_FOLDER = 'folder';
const ITEM_TYPE_WEBLINK = 'web_link';
const JSON_PATCH_OP_ADD = 'add';
const JSON_PATCH_OP_REMOVE = 'remove';
const JSON_PATCH_OP_REPLACE = 'replace';
const JSON_PATCH_OP_TEST = 'test';
const METADATA_FIELD_TYPE_ENUM = 'enum';
const METADATA_FIELD_TYPE_MULTISELECT = 'multiSelect';


/***/ }),

/***/ "./src/common/keyboard-events.js":
/*!***************************************!*\
  !*** ./src/common/keyboard-events.js ***!
  \***************************************/
/*! exports provided: ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE, TAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_DOWN", function() { return ARROW_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_UP", function() { return ARROW_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
const ARROW_DOWN = 'ArrowDown';
const ARROW_UP = 'ArrowUp';
const ESCAPE = 'Escape';
const ENTER = 'Enter';
const SPACE = ' ';
const TAB = 'Tab';


/***/ }),

/***/ "./src/components/button-group/ButtonGroup.scss":
/*!******************************************************!*\
  !*** ./src/components/button-group/ButtonGroup.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button-group/ButtonGroup.tsx":
/*!*****************************************************!*\
  !*** ./src/components/button-group/ButtonGroup.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonGroup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonGroup.scss */ "./src/components/button-group/ButtonGroup.scss");
/* harmony import */ var _ButtonGroup_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_scss__WEBPACK_IMPORTED_MODULE_1__);



const ButtonGroup = _ref => {
  let {
    children,
    className = '',
    isDisabled
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: `btn-group ${className} ${isDisabled ? 'is-disabled' : ''}`
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./src/components/date-picker/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/date-picker/index.tsx ***!
  \**********************************************/
/*! exports provided: default, DateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker */ "./src/components/date-picker/DatePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["DateFormat"]; });



/***/ }),

/***/ "./src/components/dropdown-menu/MenuToggle.js":
/*!****************************************************!*\
  !*** ./src/components/dropdown-menu/MenuToggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./src/icons/general/IconCaretDown.tsx");
/* harmony import */ var _MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuToggle.scss */ "./src/components/dropdown-menu/MenuToggle.scss");
/* harmony import */ var _MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2__);




const MenuToggle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "menu-toggle"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "toggle-arrow",
    width: 7
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuToggle);

/***/ }),

/***/ "./src/components/dropdown-menu/MenuToggle.scss":
/*!******************************************************!*\
  !*** ./src/components/dropdown-menu/MenuToggle.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/popper/PopperComponent.js":
/*!**************************************************!*\
  !*** ./src/components/popper/PopperComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/components/popper/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PopperComponent = props => {
  const {
    children,
    isOpen,
    modifiers,
    placement: popperPlacement
  } = props;
  const elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);

  if (elements.length !== 2) {
    throw new Error('PopperComponent must have exactly two children: A reference component and the Popper content');
  }

  const [reference, popperContent] = elements;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_popper__WEBPACK_IMPORTED_MODULE_1__["Manager"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_popper__WEBPACK_IMPORTED_MODULE_1__["Reference"], null, _ref => {
    let {
      ref
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](reference, {
      ref
    });
  }), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_popper__WEBPACK_IMPORTED_MODULE_1__["Popper"], {
    placement: popperPlacement,
    modifiers: modifiers
  }, _ref2 => {
    let {
      ref,
      style,
      placement,
      scheduleUpdate
    } = _ref2;
    const {
      style: contentStyles
    } = popperContent.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](popperContent, {
      ref,
      style: _objectSpread(_objectSpread({}, contentStyles), style),
      placement,
      scheduleUpdate
    });
  }));
};

PopperComponent.defaultProps = {
  placement: _constants__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT_AUTO"]
};
/* harmony default export */ __webpack_exports__["default"] = (PopperComponent);

/***/ }),

/***/ "./src/components/popper/constants.js":
/*!********************************************!*\
  !*** ./src/components/popper/constants.js ***!
  \********************************************/
/*! exports provided: PLACEMENT_AUTO, PLACEMENT_BOTTOM_END, PLACEMENT_BOTTOM_START */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEMENT_AUTO", function() { return PLACEMENT_AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEMENT_BOTTOM_END", function() { return PLACEMENT_BOTTOM_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEMENT_BOTTOM_START", function() { return PLACEMENT_BOTTOM_START; });
const PLACEMENT_AUTO = 'auto';
const PLACEMENT_BOTTOM_END = 'bottom-end';
const PLACEMENT_BOTTOM_START = 'bottom-start';


/***/ }),

/***/ "./src/components/popper/index.js":
/*!****************************************!*\
  !*** ./src/components/popper/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopperComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopperComponent */ "./src/components/popper/PopperComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PopperComponent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/radio/RadioButton.scss":
/*!***********************************************!*\
  !*** ./src/components/radio/RadioButton.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/radio/RadioButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/radio/RadioButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButton.scss */ "./src/components/radio/RadioButton.scss");
/* harmony import */ var _RadioButton_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RadioButton_scss__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["isDisabled", "isSelected", "description", "hideLabel", "label", "name", "value"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // @NOTE: readonly is not a valid attribute for input type radio so
// this avoids the propType error that "checked" is set without "onChange"
// eslint-disable-next-line @typescript-eslint/no-empty-function

const onChangeStub = () => {};

const RadioButton = _ref => {
  let {
    isDisabled,
    isSelected = false,
    description,
    hideLabel = false,
    label,
    name,
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "radio-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    className: "radio-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
    checked: isSelected,
    disabled: isDisabled,
    name: name,
    onChange: onChangeStub,
    type: "radio",
    value: value
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: hideLabel ? 'accessibility-hidden' : ''
  }, label)), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "radio-description"
  }, description) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButton);

/***/ }),

/***/ "./src/components/radio/RadioButtonField.tsx":
/*!***************************************************!*\
  !*** ./src/components/radio/RadioButtonField.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButton */ "./src/components/radio/RadioButton.tsx");
const _excluded = ["field", "value"],
      _excluded2 = ["value"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const RadioButtonField = _ref => {
  let {
    field,
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RadioButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      value: value
    }, rest));
  }

  const {
    value: fieldValue
  } = field,
        fieldRest = _objectWithoutProperties(field, _excluded2);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RadioButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, fieldRest, rest, {
    value: value,
    isSelected: value === fieldValue
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButtonField);

/***/ }),

/***/ "./src/components/radio/RadioGroup.tsx":
/*!*********************************************!*\
  !*** ./src/components/radio/RadioGroup.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RadioGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChangeHandler", event => {
      const {
        target
      } = event;
      const {
        onChange
      } = this.props;

      if (target instanceof HTMLInputElement) {
        this.setState({
          value: target.value
        });
      }

      if (onChange) {
        onChange(event);
      }
    });

    this.state = {
      value: props.value
    };
  } // @TODO: think about adding componentDidUpdate or gDSFP
  // to update the internal state value based on new props value


  render() {
    const {
      children,
      className,
      name
    } = this.props;
    const {
      value: stateValue
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: `radio-group ${className}`,
      onChange: this.onChangeHandler
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, radio => {
      const {
        value
      } = radio.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](radio, {
        name,
        isSelected: value === stateValue
      });
    }));
  }

}

_defineProperty(RadioGroup, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./src/components/radio/RadioGroupField.tsx":
/*!**************************************************!*\
  !*** ./src/components/radio/RadioGroupField.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioGroup */ "./src/components/radio/RadioGroup.tsx");
const _excluded = ["field"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const RadioGroupField = _ref => {
  let {
    field
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RadioGroup__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      value: ""
    }, rest));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RadioGroup__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, field, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroupField);

/***/ }),

/***/ "./src/components/radio/index.ts":
/*!***************************************!*\
  !*** ./src/components/radio/index.ts ***!
  \***************************************/
/*! exports provided: RadioButton, RadioButtonField, RadioGroup, RadioGroupField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioButton */ "./src/components/radio/RadioButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _RadioButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _RadioButtonField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButtonField */ "./src/components/radio/RadioButtonField.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonField", function() { return _RadioButtonField__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioGroup */ "./src/components/radio/RadioGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RadioGroupField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadioGroupField */ "./src/components/radio/RadioGroupField.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupField", function() { return _RadioGroupField__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/search-form/SearchForm.js":
/*!**************************************************!*\
  !*** ./src/components/search-form/SearchForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon_fill_ClearBadge16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/fill/ClearBadge16 */ "./src/icon/fill/ClearBadge16.tsx");
/* harmony import */ var _icon_fill_Search16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/fill/Search16 */ "./src/icon/fill/Search16.tsx");
/* harmony import */ var _loading_indicator_makeLoadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading-indicator/makeLoadable */ "./src/components/loading-indicator/makeLoadable.tsx");
/* harmony import */ var _SearchForm_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchForm.scss */ "./src/components/search-form/SearchForm.scss");
/* harmony import */ var _SearchForm_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_scss__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["action", "className", "intl", "isLoading", "method", "name", "queryParams", "onSubmit", "useClearButton"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  clearButtonTitle: {
    "id": "boxui.searchForm.clearButtonTitle",
    "defaultMessage": "Clear"
  },
  searchButtonTitle: {
    "id": "boxui.searchForm.searchButtonTitle",
    "defaultMessage": "Search"
  },
  searchLabel: {
    "id": "boxui.searchForm.searchLabel",
    "defaultMessage": "Search query"
  }
});

class SearchForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isEmpty: true
    });

    _defineProperty(this, "onClearHandler", event => {
      const {
        onChange,
        shouldPreventClearEventPropagation
      } = this.props;

      if (shouldPreventClearEventPropagation) {
        event.stopPropagation();
      }

      if (this.searchInput) {
        this.searchInput.value = '';
      }

      this.setState({
        isEmpty: true
      });

      if (onChange) {
        onChange('');
      }
    });

    _defineProperty(this, "onChangeHandler", _ref => {
      let {
        target
      } = _ref;
      const {
        value
      } = target;
      const {
        onChange
      } = this.props;
      this.setState({
        isEmpty: !value || !value.trim().length
      });

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(this, "onSubmitHandler", event => {
      const {
        value
      } = event.target.elements[0];
      const {
        onSubmit
      } = this.props;

      if (onSubmit) {
        onSubmit(value, event);
      }
    });

    _defineProperty(this, "setInputRef", element => {
      this.searchInput = element;

      if (this.props.getSearchInput) {
        this.props.getSearchInput(this.searchInput);
      }
    });
  }

  static getDerivedStateFromProps(props) {
    const {
      value
    } = props;

    if (value && !!value.trim()) {
      return {
        isEmpty: true
      };
    }

    return null;
  }

  render() {
    const _this$props = this.props,
          {
      action,
      className,
      intl,
      isLoading,
      method,
      name,
      queryParams,
      onSubmit,
      useClearButton
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      isEmpty
    } = this.state;
    const inputProps = lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(rest, ['getSearchInput', 'onChange', 'onSubmit', 'required', 'shouldPreventClearEventPropagation']);
    const {
      formatMessage
    } = intl;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'search-input-container');
    const formClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('search-form', {
      'is-empty': isEmpty,
      'use-clear-button': useClearButton
    });
    const hiddenInputs = Object.keys(queryParams).map((param, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      key: index,
      name: param,
      type: "hidden",
      value: queryParams[param]
    }));

    const SearchActions = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "action-buttons"
    }, onSubmit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      type: "submit",
      className: "action-button search-button",
      title: formatMessage(messages.searchButtonTitle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Search16__WEBPACK_IMPORTED_MODULE_5__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "action-button search-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Search16__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      className: "action-button clear-button",
      onClick: this.onClearHandler,
      title: formatMessage(messages.clearButtonTitle),
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_ClearBadge16__WEBPACK_IMPORTED_MODULE_4__["default"], null)));

    const LoadableSearchActions = Object(_loading_indicator_makeLoadable__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchActions); // @NOTE Prevent errors from React about controlled inputs

    const onChangeStub = () => {};

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      action: action,
      className: formClassNames,
      method: method,
      onChange: this.onChangeHandler,
      onSubmit: this.onSubmitHandler,
      role: "search"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
      ref: this.setInputRef,
      "aria-label": formatMessage(messages.searchLabel),
      autoComplete: "off",
      className: "search-input",
      name: name,
      onChange: onChangeStub,
      type: "search"
    }, inputProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableSearchActions, {
      isLoading: isLoading,
      loadingIndicatorProps: {
        className: 'search-form-loading-indicator'
      }
    }), hiddenInputs));
  }

}

_defineProperty(SearchForm, "defaultProps", {
  action: undefined,
  method: 'get',
  name: 'search',
  queryParams: {},
  useClearButton: false
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(SearchForm));

/***/ }),

/***/ "./src/components/search-form/SearchForm.scss":
/*!****************************************************!*\
  !*** ./src/components/search-form/SearchForm.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/select-button/SelectButton.js":
/*!******************************************************!*\
  !*** ./src/components/select-button/SelectButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _SelectButton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectButton.scss */ "./src/components/select-button/SelectButton.scss");
/* harmony import */ var _SelectButton_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectButton_scss__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children", "className", "error", "isDisabled"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SelectButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    children,
    className = '',
    error,
    isDisabled = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isShown: !!error,
    position: "middle-right",
    text: error,
    theme: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'select-button', 'bdl-SelectButton', {
      'is-invalid': !!error
    }),
    disabled: isDisabled,
    ref: ref,
    type: "button"
  }, rest), children));
});
/* harmony default export */ __webpack_exports__["default"] = (SelectButton);

/***/ }),

/***/ "./src/components/select-button/SelectButton.scss":
/*!********************************************************!*\
  !*** ./src/components/select-button/SelectButton.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/select-button/index.js":
/*!***********************************************!*\
  !*** ./src/components/select-button/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectButton */ "./src/components/select-button/SelectButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SelectButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/select-field/BaseSelectField.js":
/*!********************************************************!*\
  !*** ./src/components/select-field/BaseSelectField.js ***!
  \********************************************************/
/*! exports provided: BaseSelectFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSelectFieldBase", function() { return BaseSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _icons_general_IconCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconCheck */ "./src/icons/general/IconCheck.tsx");
/* harmony import */ var _select_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-button */ "./src/components/select-button/index.js");
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datalist-item */ "./src/components/datalist-item/index.ts");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popper */ "./src/components/popper/index.js");
/* harmony import */ var _SelectFieldDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectFieldDropdown */ "./src/components/select-field/SelectFieldDropdown.js");
/* harmony import */ var _popper_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popper/constants */ "./src/components/popper/constants.js");
/* harmony import */ var _search_form_SearchForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search-form/SearchForm */ "./src/components/search-form/SearchForm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants */ "./src/components/select-field/constants.js");
/* harmony import */ var _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/keyboard-events */ "./src/common/keyboard-events.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages */ "./src/components/select-field/messages.js");
/* harmony import */ var _SelectField_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SelectField.scss */ "./src/components/select-field/SelectField.scss");
/* harmony import */ var _SelectField_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_SelectField_scss__WEBPACK_IMPORTED_MODULE_16__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function toggleOption(options, value) {
  const index = options.indexOf(value);

  if (index === -1) {
    options.push(value);
  } else {
    options.splice(index, 1);
  }
}

function defaultOptionRenderer(_ref) {
  let {
    displayText
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-SelectField-optionText",
    title: displayText
  }, displayText);
}

class BaseSelectField extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "updateSearchText", text => {
      const {
        options
      } = this.props;
      const optionIndex = lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(options, element => element.displayText.toLowerCase().includes(text.toLowerCase()));

      if (optionIndex >= 0) {
        this.setActiveItem(optionIndex);
      }

      this.setState({
        searchText: text
      });
    });

    _defineProperty(this, "handleDocumentClick", event => {
      const container = this.selectFieldContainerRef.current;
      const isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        this.closeDropdown();
      }
    });

    _defineProperty(this, "setActiveItem", function (index) {
      let shouldScrollIntoView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        activeItemIndex: index,
        shouldScrollIntoView
      });

      if (index === -1) {
        _this.setActiveItemID(null);
      }
    });

    _defineProperty(this, "setActiveItemID", id => {
      const {
        shouldScrollIntoView
      } = this.state;
      const itemEl = id ? document.getElementById(id) : null;
      this.setState({
        activeItemID: id,
        shouldScrollIntoView: false
      }, () => {
        if (shouldScrollIntoView) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["scrollIntoView"])(itemEl, {
            block: 'nearest'
          });
        }
      });
    });

    _defineProperty(this, "handleChange", selectedItems => {
      const {
        onChange
      } = this.props;

      if (onChange) {
        onChange(selectedItems);
      }
    });

    _defineProperty(this, "handleOptionSelect", selectedItem => {
      const {
        onOptionSelect
      } = this.props;

      if (onOptionSelect) {
        onOptionSelect(selectedItem);
      }
    });

    _defineProperty(this, "handleButtonClick", () => {
      if (this.state.isOpen) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    });

    _defineProperty(this, "handleClearClick", () => {
      this.handleChange([]);
    });

    _defineProperty(this, "handleButtonKeyDown", event => {
      const {
        activeItemIndex
      } = this.state; // If user is interacting with the select dropdown, don't close on space/enter (i.e. prevent click event)

      if ((event.key === _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["SPACE"] || event.key === _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ENTER"]) && activeItemIndex !== -1) {
        event.preventDefault();
      }
    });

    _defineProperty(this, "handleBlur", event => {
      const {
        isOpen
      } = this.state;
      const {
        blurExceptionClassNames = []
      } = this.props;
      const exceptionClasses = ['search-input', 'select-button', ...blurExceptionClassNames];

      if (isOpen && event && event.relatedTarget && exceptionClasses.every(className => event && !event.relatedTarget.classList.contains(className))) {
        this.closeDropdown();
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      const {
        key
      } = event;
      const {
        options,
        shouldShowClearOption,
        shouldShowSearchInput
      } = this.props;
      const {
        activeItemIndex,
        isOpen
      } = this.state;
      const itemCount = options.length;

      switch (key) {
        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ARROW_DOWN"]:
          stopDefaultEvent(event);

          if (isOpen) {
            const nextIndex = activeItemIndex === itemCount - 1 ? -1 : activeItemIndex + 1;
            this.setActiveItem(nextIndex);
          } else {
            this.openDropdown();
          }

          break;

        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ARROW_UP"]:
          stopDefaultEvent(event);

          if (isOpen) {
            const prevIndex = activeItemIndex === -1 ? itemCount - 1 : activeItemIndex - 1;
            this.setActiveItem(prevIndex);
          } else {
            this.openDropdown();
          }

          break;

        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
          if (shouldShowSearchInput) {
            // Allow space key presses in the search string when search field is active
            if (key === _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["SPACE"]) {
              break;
            } // Enter presses should be ignored when no item is active


            if (key === _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ENTER"] && activeItemIndex === -1) {
              stopDefaultEvent(event);
              break;
            }
          }

          if (activeItemIndex !== -1 && isOpen) {
            stopDefaultEvent(event);
            const isClearOption = shouldShowClearOption && activeItemIndex === 0;

            if (isClearOption) {
              this.handleClearClick();
            } else {
              this.selectOption(activeItemIndex);
            } // Enter always closes dropdown (even for multiselect)


            if (key === _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ENTER"]) {
              this.closeDropdown();
            }
          }

          break;

        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["ESCAPE"]:
          if (isOpen) {
            stopDefaultEvent(event);
            this.closeDropdown();
          }

          break;

        case _common_keyboard_events__WEBPACK_IMPORTED_MODULE_14__["TAB"]:
          if (isOpen) {
            this.closeDropdown();
          }

          break;

        default:
          {
            if (!shouldShowSearchInput) {
              stopDefaultEvent(event);
              const lowerCaseKey = key.toLowerCase();
              const optionIndex = lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(options, option => option.displayText.toLowerCase().indexOf(lowerCaseKey) === 0);

              if (optionIndex >= 0) {
                this.setActiveItem(optionIndex);
              }
            }
          }
      }
    });

    _defineProperty(this, "openDropdown", () => {
      const {
        shouldShowSearchInput
      } = this.props;

      if (!this.state.isOpen) {
        this.setState({
          isOpen: true
        }, () => shouldShowSearchInput && this.searchInputRef && this.searchInputRef.focus());
        document.addEventListener('click', this.handleDocumentClick);
      }
    });

    _defineProperty(this, "closeDropdown", () => {
      if (this.state.isOpen) {
        this.setState({
          activeItemID: null,
          activeItemIndex: -1,
          isOpen: false,
          searchText: ''
        });
        document.removeEventListener('click', this.handleDocumentClick);
      }
    });

    _defineProperty(this, "selectOption", index => {
      const {
        multiple
      } = this.props;

      if (multiple) {
        this.selectMultiOption(index);
      } else {
        this.selectSingleOption(index);
        this.closeDropdown(); // Close dropdown for single select fields
      }
    });

    _defineProperty(this, "getFilteredOptions", () => {
      const {
        options
      } = this.props;
      const {
        searchText
      } = this.state;
      return options.filter(option => {
        const isSubstring = option.displayText.toLowerCase().includes(searchText.toLowerCase());
        const isClearOption = option.value === _constants__WEBPACK_IMPORTED_MODULE_13__["default"];
        return searchText ? isSubstring && !isClearOption : true;
      });
    });

    _defineProperty(this, "selectMultiOption", index => {
      const {
        defaultValue,
        options,
        selectedValues
      } = this.props;
      const hasDefaultValue = defaultValue != null; // Checks if not undefined or null

      const item = this.getFilteredOptions()[index]; // If we are already using the default option, just return without firing onChange

      if (hasDefaultValue && defaultValue === item.value) {
        this.selectSingleOption(index);
        return;
      } // Copy the array so we can freely modify it


      const newSelectedValues = selectedValues.slice(0);
      toggleOption(newSelectedValues, item.value); // Apply constraints if a defaultValue is specified

      if (hasDefaultValue) {
        const defaultOptionIndex = lodash_findIndex__WEBPACK_IMPORTED_MODULE_3___default()(options, option => option.value === defaultValue);

        if (defaultOptionIndex !== -1) {
          if (newSelectedValues.length === 0) {
            // If nothing is selected, we should select the default option
            this.selectSingleOption(defaultOptionIndex);
            return;
          }

          if (newSelectedValues.length > 1 && newSelectedValues.includes(defaultValue)) {
            // Remove the default option from the selected values when more than one thing is selected
            newSelectedValues.splice(defaultOptionIndex, 1);
          }
        }
      } // Fire onchange event with selected items


      this.handleChange(options.filter(option => newSelectedValues.includes(option.value)));
      this.handleOptionSelect(item);
    });

    _defineProperty(this, "renderButtonText", () => {
      const {
        options,
        placeholder,
        selectedValues,
        title
      } = this.props;
      const selectedItemCount = selectedValues.length; // When there are no options selected, render placeholder

      if (selectedItemCount === 0 && placeholder) {
        return placeholder;
      } // User-specified title when options are selected


      if (title) {
        return title;
      } // Auto-generate button title based on selected options


      const selectedOptions = options.filter(option => selectedValues.includes(option.value));
      return selectedOptions.map(option => option.displayText).join(', ');
    });

    _defineProperty(this, "renderSearchInput", () => {
      const {
        intl
      } = this.props;
      const {
        searchText
      } = this.state;

      const getSearchInput = element => {
        this.searchInputRef = element;
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_search_form_SearchForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "select-field-search-container",
        getSearchInput: getSearchInput,
        onChange: this.updateSearchText,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_15__["default"].searchPlaceholder),
        value: searchText
      });
    });

    _defineProperty(this, "renderSelectButton", () => {
      const {
        activeItemID,
        isOpen
      } = this.state;
      const {
        buttonProps: buttonElProps,
        isDisabled,
        className,
        error
      } = this.props;
      const buttonText = this.renderButtonText();

      const buttonProps = _objectSpread(_objectSpread({}, buttonElProps), {}, {
        'aria-activedescendant': activeItemID,
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        'aria-owns': this.selectFieldID,
        className,
        isDisabled,
        onClick: this.handleButtonClick,
        onKeyDown: this.handleButtonKeyDown,
        // @NOTE: Technically, only text inputs should be combo-boxes but ARIA specs do not cover custom select dropdowns
        role: 'listbox',
        title: buttonText
      });

      return (
        /*#__PURE__*/
        // Need to store the select button reference so we can calculate the button width
        // in order to set it as the min width of the dropdown list
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_select_button__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, buttonProps, {
          error: error
        }), buttonText)
      );
    });

    _defineProperty(this, "renderSelectOptions", () => {
      const {
        optionRenderer,
        selectedValues,
        separatorIndices,
        shouldShowClearOption
      } = this.props;
      const {
        activeItemIndex
      } = this.state;
      const filteredOptions = this.getFilteredOptions();

      if (filteredOptions.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "select-option is-disabled"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_15__["default"].noResults));
      }

      const selectOptions = filteredOptions.map((item, index) => {
        const {
          value
        } = item;
        const isSelected = selectedValues.includes(value);
        const isClearOption = shouldShowClearOption && value === _constants__WEBPACK_IMPORTED_MODULE_13__["default"];
        const itemProps = {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('select-option', {
            'is-clear-option': isClearOption
          }),
          key: index,

          /* preventDefault on click to prevent wrapping label from re-triggering the select button */
          onClick: event => {
            event.preventDefault();

            if (isClearOption) {
              this.handleClearClick();
            } else {
              this.selectOption(index);
            }
          },
          onMouseEnter: () => {
            this.setActiveItem(index, false);
          },
          setActiveItemID: this.setActiveItemID
        };

        if (index === activeItemIndex) {
          itemProps.isActive = true;
        }

        itemProps.isSelected = isSelected; // The below actually does have a key, but eslint can't catch that

        /* eslint-disable react/jsx-key */

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_8__["default"], itemProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "select-option-check-icon"
        }, isSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCheck__WEBPACK_IMPORTED_MODULE_6__["default"], {
          height: 16,
          width: 16
        }) : null), optionRenderer(item));
        /* eslint-enable react/jsx-key */
      });
      separatorIndices.forEach((separatorIndex, index) => {
        selectOptions.splice(separatorIndex + index, 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: `separator${separatorIndex}`,
          role: "separator"
        }));
      });
      return selectOptions;
    });

    this.selectFieldID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('selectfield');
    this.selectFieldContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      isOpen: false,
      searchText: '',
      shouldScrollIntoView: false
    };
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      // Clean-up global click handlers
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  selectSingleOption(index) {
    const {
      selectedValues
    } = this.props;
    const item = this.getFilteredOptions()[index]; // If item not previously selected, fire change handler

    if (!selectedValues.includes(item.value)) {
      this.handleChange([item]);
    }

    this.handleOptionSelect(item);
  }

  render() {
    const {
      className,
      multiple,
      isEscapedWithReference,
      isRightAligned,
      isScrollable,
      selectedValues,
      shouldShowSearchInput
    } = this.props;
    const {
      isOpen
    } = this.state; // @TODO: Need invariants on specific conditions.
    // 1) # of options should be non-zero
    // 2) selectedValues, if defined, should all exist in options
    // 3) defaultValue, if defined, should exist in options
    // 4) defaultValue, if defined, should mean selectedValues is never empty
    // 5) defaultValue, if defined, cannot be selected in addition to other options (must be exclusive)

    const dropdownPlacement = isRightAligned ? _popper_constants__WEBPACK_IMPORTED_MODULE_11__["PLACEMENT_BOTTOM_END"] : _popper_constants__WEBPACK_IMPORTED_MODULE_11__["PLACEMENT_BOTTOM_START"]; // popper.js modifier to allow dropdown to overflow its boundaries and remain attached to its reference

    const dropdownModifiers = isEscapedWithReference ? {
      preventOverflow: {
        escapeWithReference: true
      }
    } : {};
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'bdl-SelectField', 'select-container'),
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        ref: this.selectFieldContainerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_popper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placement: dropdownPlacement,
        isOpen: isOpen,
        modifiers: dropdownModifiers
      }, this.renderSelectButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SelectFieldDropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isScrollable: isScrollable,
        multiple: multiple,
        selectedValues: selectedValues,
        selectFieldID: this.selectFieldID
      }, shouldShowSearchInput && this.renderSearchInput(), this.renderSelectOptions())))
    );
  }

}

_defineProperty(BaseSelectField, "defaultProps", {
  buttonProps: {},
  isDisabled: false,
  isRightAligned: false,
  isScrollable: false,
  multiple: false,
  optionRenderer: defaultOptionRenderer,
  options: [],
  selectedValues: [],
  separatorIndices: [],
  shouldShowClearOption: false,
  shouldShowSearchInput: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(BaseSelectField));

/***/ }),

/***/ "./src/components/select-field/MultiSelectField.js":
/*!*********************************************************!*\
  !*** ./src/components/select-field/MultiSelectField.js ***!
  \*********************************************************/
/*! exports provided: MultiSelectFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectFieldBase", function() { return MultiSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _BaseSelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseSelectField */ "./src/components/select-field/BaseSelectField.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/components/select-field/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/components/select-field/messages.js");
const _excluded = ["intl", "options", "shouldShowClearOption"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const optionsWithClearOption = (options, shouldShowClearOption, intl) => {
  return shouldShowClearOption ? [{
    value: _constants__WEBPACK_IMPORTED_MODULE_3__["default"],
    displayText: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].clearAll)
  }, ...options] : options;
};

const MultiSelectField = _ref => {
  let {
    intl,
    options,
    shouldShowClearOption
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseSelectField__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, rest, {
    shouldShowClearOption: shouldShowClearOption,
    options: optionsWithClearOption(options, shouldShowClearOption, intl),
    multiple: true
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(MultiSelectField));

/***/ }),

/***/ "./src/components/select-field/SelectField.scss":
/*!******************************************************!*\
  !*** ./src/components/select-field/SelectField.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/select-field/SelectFieldDropdown.js":
/*!************************************************************!*\
  !*** ./src/components/select-field/SelectFieldDropdown.js ***!
  \************************************************************/
/*! exports provided: OVERLAY_SCROLLABLE_CLASS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_SCROLLABLE_CLASS", function() { return OVERLAY_SCROLLABLE_CLASS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const OVERLAY_SCROLLABLE_CLASS = 'bdl-SelectField-overlay--scrollable';

class SelectFieldDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidUpdate(_ref) {
    let {
      selectedValues: prevSelectedValues
    } = _ref;
    const {
      multiple,
      scheduleUpdate,
      selectedValues
    } = this.props;

    if (multiple && scheduleUpdate && prevSelectedValues !== selectedValues) {
      scheduleUpdate();
    }
  }

  render() {
    const {
      children,
      innerRef,
      style,
      placement,
      isScrollable,
      multiple,
      selectFieldID
    } = this.props;
    const listboxProps = {};

    if (multiple) {
      listboxProps['aria-multiselectable'] = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", _extends({
      ref: innerRef,
      style: style,
      "data-placement": placement,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-SelectFieldDropdown', 'overlay', {
        [OVERLAY_SCROLLABLE_CLASS]: isScrollable
      }),
      id: selectFieldID,
      role: "listbox" // preventDefault on mousedown so blur doesn't happen before click
      ,
      onMouseDown: event => event.preventDefault()
    }, listboxProps), children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SelectFieldDropdown, _extends({}, props, {
  innerRef: ref
}))));

/***/ }),

/***/ "./src/components/select-field/SingleSelectField.js":
/*!**********************************************************!*\
  !*** ./src/components/select-field/SingleSelectField.js ***!
  \**********************************************************/
/*! exports provided: SingleSelectFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSelectFieldBase", function() { return SingleSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _BaseSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseSelectField */ "./src/components/select-field/BaseSelectField.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/components/select-field/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/components/select-field/messages.js");
const _excluded = ["intl", "isDisabled", "selectedValue", "placeholder", "shouldShowClearOption", "options"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class SingleSelectField extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleChange", selectedOptions => {
      const {
        onChange,
        fieldType
      } = this.props; // There should only ever be 1 selected item

      if (onChange && selectedOptions.length === 1) {
        onChange(selectedOptions[0], fieldType);
      } else if (selectedOptions.length === 0) {
        onChange({
          value: null
        });
      }
    });
  }

  render() {
    const _this$props = this.props,
          {
      intl,
      isDisabled,
      selectedValue,
      placeholder,
      shouldShowClearOption,
      options
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded); // @TODO: Invariant testing
    // 1) selectedValue is required to be contained in the options
    // 2) # of options should be non-zero
    // Make sure to omit passed props that could be interpreted incorrectly by the base component


    const selectFieldProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['defaultValue', 'multiple', 'onChange']); // If selectedValue is passed in, map it to the multi selected equivalent

    const isFieldSelected = selectedValue !== null;
    selectFieldProps.selectedValues = !isFieldSelected ? [] : [selectedValue];
    const optionsWithClearOption = shouldShowClearOption ? [{
      value: _constants__WEBPACK_IMPORTED_MODULE_4__["default"],
      displayText: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_5__["default"].clearAll)
    }, ...options] : options;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BaseSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      className: !isFieldSelected && placeholder ? 'placeholder' : '',
      isDisabled: isDisabled,
      onChange: this.handleChange,
      placeholder: placeholder,
      options: optionsWithClearOption,
      shouldShowClearOption: shouldShowClearOption
    }, selectFieldProps));
  }

}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SingleSelectField));

/***/ }),

/***/ "./src/components/select-field/constants.js":
/*!**************************************************!*\
  !*** ./src/components/select-field/constants.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CLEAR = '__clear__'; // value of clear option used in select-field components

/* harmony default export */ __webpack_exports__["default"] = (CLEAR);

/***/ }),

/***/ "./src/components/select-field/messages.js":
/*!*************************************************!*\
  !*** ./src/components/select-field/messages.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  clearAll: {
    "id": "boxui.selectField.clearAll",
    "defaultMessage": "Clear All"
  },
  searchPlaceholder: {
    "id": "boxui.selectField.searchPlaceholder",
    "defaultMessage": "Search"
  },
  noResults: {
    "id": "boxui.selectField.noResults",
    "defaultMessage": "No Results"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/text-input/TextInputField.js":
/*!*****************************************************!*\
  !*** ./src/components/text-input/TextInputField.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInput */ "./src/components/text-input/TextInput.js");
const _excluded = ["field", "form", "innerRef", "isRequired"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextInputField = _ref => {
  let {
    field,
    form,
    innerRef,
    isRequired
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    name
  } = field;
  const {
    errors,
    touched
  } = form;
  const isTouched = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(touched, name);
  const error = isTouched ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(errors, name) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, field, rest, {
    inputRef: innerRef,
    error: error,
    hideOptionalLabel: isRequired
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInputField);

/***/ }),

/***/ "./src/components/text-input/index.js":
/*!********************************************!*\
  !*** ./src/components/text-input/index.js ***!
  \********************************************/
/*! exports provided: default, TextInputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./src/components/text-input/TextInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TextInputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInputField */ "./src/components/text-input/TextInputField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInputField", function() { return _TextInputField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/toggle/Toggle.js":
/*!*****************************************!*\
  !*** ./src/components/toggle/Toggle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.scss */ "./src/components/toggle/Toggle.scss");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Toggle_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["className", "description", "isDisabled", "isOn", "isToggleRightAligned", "label", "name", "onBlur", "onChange"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Toggle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((_ref, ref) => {
  let {
    className = '',
    description,
    isDisabled,
    isOn,
    isToggleRightAligned = false,
    label,
    name,
    onBlur,
    onChange
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('toggle-container', className, {
    'is-toggle-right-aligned': isToggleRightAligned
  });
  let toggleElements = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "toggle-simple-switch",
    className: "toggle-simple-switch"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: "toggle-simple-label",
    className: "toggle-simple-label"
  }, label)];

  if (isToggleRightAligned) {
    toggleElements = toggleElements.reverse();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    className: "toggle-simple"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
    checked: isOn,
    className: "toggle-simple-input",
    disabled: isDisabled,
    ref: ref,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    type: "checkbox"
  }, rest)), toggleElements), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "toggle-simple-description"
  }, description) : null);
});
Toggle.displayName = 'Toggle';
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./src/components/toggle/Toggle.scss":
/*!*******************************************!*\
  !*** ./src/components/toggle/Toggle.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/toggle/ToggleField.js":
/*!**********************************************!*\
  !*** ./src/components/toggle/ToggleField.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle */ "./src/components/toggle/Toggle.js");
const _excluded = ["field", "form"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ToggleField = _ref => {
  let {
    field,
    form
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    value
  } = field;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Toggle__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, field, rest, {
    isOn: !!value
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleField);

/***/ }),

/***/ "./src/components/toggle/index.js":
/*!****************************************!*\
  !*** ./src/components/toggle/index.js ***!
  \****************************************/
/*! exports provided: default, ToggleField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle */ "./src/components/toggle/Toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Toggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ToggleField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleField */ "./src/components/toggle/ToggleField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleField", function() { return _ToggleField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/MetadataSidebar.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/MetadataSidebar.js ***!
  \*********************************************************/
/*! exports provided: MetadataSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataSidebarComponent", function() { return MetadataSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _features_metadata_instance_editor_EmptyContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/metadata-instance-editor/EmptyContent */ "./src/features/metadata-instance-editor/EmptyContent.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _features_metadata_instance_editor_Instances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/metadata-instance-editor/Instances */ "./src/features/metadata-instance-editor/Instances.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _features_metadata_instance_editor_TemplateDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features/metadata-instance-editor/TemplateDropdown */ "./src/features/metadata-instance-editor/TemplateDropdown.js");
/* harmony import */ var _features_metadata_instance_editor_metadataUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../features/metadata-instance-editor/metadataUtil */ "./src/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MetadataSidebar.scss */ "./src/elements/content-sidebar/MetadataSidebar.scss");
/* harmony import */ var _MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_22__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Metadata sidebar component
 * @author Box
 */























const MARK_NAME_JS_READY = `${_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_METADATA_SIDEBAR"]}_${_common_logger_constants__WEBPACK_IMPORTED_MODULE_15__["EVENT_JS_READY"]}`;
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_17__["mark"])(MARK_NAME_JS_READY);

class MetadataSidebar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "state", {
      isLoading: false
    });

    _defineProperty(this, "onApiError", function (error, code) {
      let newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const {
        onError
      } = _this.props;
      const {
        status
      } = error;
      const isValidError = Object(_utils_error__WEBPACK_IMPORTED_MODULE_16__["isUserCorrectableError"])(status);

      _this.setState(_objectSpread({
        error: _common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarMetadataEditingErrorContent,
        isLoading: false
      }, newState));

      onError(error, code, {
        error,
        [_constants__WEBPACK_IMPORTED_MODULE_21__["IS_ERROR_DISPLAYED"]]: isValidError
      });
    });

    _defineProperty(this, "onRemove", id => {
      const {
        api
      } = this.props;
      const {
        file
      } = this.state;
      const editor = this.getEditor(id);

      if (!editor || !file) {
        return;
      }

      api.getMetadataAPI(false).deleteMetadata(file, editor.template, () => this.onRemoveSuccessHandler(editor), this.onApiError);
    });

    _defineProperty(this, "onAddSuccessHandler", editor => {
      const {
        editors = []
      } = this.state;
      const clone = editors.slice(0);
      clone.push(editor);
      this.setState({
        editors: clone,
        isLoading: false
      });
    });

    _defineProperty(this, "onAdd", template => {
      const {
        api
      } = this.props;
      const {
        file
      } = this.state;

      if (!file) {
        return;
      }

      this.setState({
        isLoading: true
      });
      api.getMetadataAPI(false).createMetadata(file, template, this.onAddSuccessHandler, this.onApiError);
    });

    _defineProperty(this, "onSave", (id, ops) => {
      const {
        api
      } = this.props;
      const {
        file
      } = this.state;
      const oldEditor = this.getEditor(id);

      if (!oldEditor || !file) {
        return;
      }

      api.getMetadataAPI(false).updateMetadata(file, oldEditor.template, ops, newEditor => {
        this.replaceEditor(oldEditor, newEditor);
      }, (error, code) => {
        this.onSaveErrorHandler(oldEditor, error, code);
      });
    });

    _defineProperty(this, "onModification", (id, isDirty) => {
      const oldEditor = this.getEditor(id);

      if (!oldEditor) {
        return;
      }

      const newEditor = _objectSpread(_objectSpread({}, oldEditor), {}, {
        isDirty
      }); // shallow clone suffices for isDirty setting


      this.replaceEditor(oldEditor, newEditor);
    });

    _defineProperty(this, "fetchMetadataErrorCallback", (e, code) => {
      this.onApiError(e, code, {
        editors: undefined,
        error: _common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarMetadataFetchingErrorContent,
        templates: undefined
      });
    });

    _defineProperty(this, "fetchMetadataSuccessCallback", _ref => {
      let {
        editors,
        templates
      } = _ref;
      const {
        selectedTemplateKey,
        templateFilters
      } = this.props;
      this.setState({
        editors: editors.slice(0),
        // cloned for potential editing
        error: undefined,
        isLoading: false,
        templates: Object(_features_metadata_instance_editor_metadataUtil__WEBPACK_IMPORTED_MODULE_14__["normalizeTemplates"])(templates, selectedTemplateKey, templateFilters)
      });
    });

    _defineProperty(this, "fetchFileErrorCallback", (e, code) => {
      this.onApiError(e, code, {
        error: _common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarFileFetchingErrorContent,
        file: undefined
      });
    });

    _defineProperty(this, "fetchFileSuccessCallback", file => {
      const {
        file: currentFile
      } = this.state;
      const currentCanUpload = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(currentFile, _constants__WEBPACK_IMPORTED_MODULE_21__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
      const newCanUpload = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_21__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
      const shouldFetchMetadata = !currentFile || currentCanUpload !== newCanUpload;
      const callback = shouldFetchMetadata ? this.fetchMetadata : lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a;
      this.setState({
        file
      }, callback);
    });

    const {
      logger
    } = this.props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
  }

  componentDidMount() {
    this.fetchFile();
  }
  /**
   * Common error callback
   *
   * @param {Error} error - API error
   * @param {string} code - error code
   * @param {Object} [newState] - optional state to set
   * @return {void}
   */


  /**
   * Checks upload permission
   *
   * @return {boolean} - true if metadata can be edited
   */
  canEdit() {
    const {
      file
    } = this.state;
    return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_21__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
  }
  /**
   * Finds the editor we are editing
   *
   * @param {number} id - instance id
   * @return {Object} editor instance
   */


  getEditor(id) {
    const {
      editors = []
    } = this.state;
    return editors.find(_ref2 => {
      let {
        instance
      } = _ref2;
      return instance.id === id;
    });
  }
  /**
   * Instance remove success handler
   *
   * @param {Object} editor - the editor to remove
   * @return {void}
   */


  onRemoveSuccessHandler(editor) {
    const {
      editors = []
    } = this.state;
    const clone = editors.slice(0);
    clone.splice(editors.indexOf(editor), 1);
    this.setState({
      editors: clone
    });
  }
  /**
   * Instance remove handler
   *
   * @param {string} id - instance id
   * @return {void}
   */


  /**
   * Instance save success handler
   *
   * @param {Object} oldEditor - prior editor
   * @param {Object} newEditor - updated editor
   * @return {void}
   */
  replaceEditor(oldEditor, newEditor) {
    const {
      editors = []
    } = this.state;
    const clone = editors.slice(0);
    clone.splice(editors.indexOf(oldEditor), 1, newEditor);
    this.setState({
      editors: clone
    });
  }
  /**
   * Instance save error handler
   *
   * @param {Object} oldEditor - prior editor
   * @param {Object} error - api error
   * @param {string} code - error code
   * @return {void}
   */


  onSaveErrorHandler(oldEditor, error, code) {
    const clone = _objectSpread(_objectSpread({}, oldEditor), {}, {
      hasError: true
    }); // shallow clone suffices for hasError setting


    this.replaceEditor(oldEditor, clone);
    this.onApiError(error, code);
  }
  /**
   * Instance save handler
   *
   * @param {string} id - instance id
   * @param {Array} ops - json patch ops
   * @return {void}
   */


  /**
   * Fetches the metadata editors
   *
   * @return {void}
   */
  fetchMetadata() {
    const {
      api,
      isFeatureEnabled
    } = this.props;
    const {
      file
    } = this.state;

    if (!file) {
      return;
    }

    api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, this.fetchMetadataErrorCallback, isFeatureEnabled, {
      refreshCache: true
    });
  }
  /**
   * Handles a failed file fetch
   *
   * @private
   * @param {Error} e - API error
   * @param {string} code - error code
   * @return {void}
   */


  /**
   * Fetches a file with the fields needed for metadata sidebar
   *
   * @return {void}
   */
  fetchFile() {
    const {
      api,
      fileId
    } = this.props;
    api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.fetchFileErrorCallback, {
      fields: [_constants__WEBPACK_IMPORTED_MODULE_21__["FIELD_IS_EXTERNALLY_OWNED"], _constants__WEBPACK_IMPORTED_MODULE_21__["FIELD_PERMISSIONS"]],
      refreshCache: true // see implications in file success callback

    });
  }

  refresh() {
    this.fetchMetadata();
  }

  render() {
    const {
      editors,
      file,
      error,
      isLoading,
      templates
    } = this.state;
    const {
      elementId,
      selectedTemplateKey
    } = this.props;
    const showEditor = !!file && !!templates && !!editors;
    const showLoadingIndicator = !error && !showEditor;
    const canEdit = this.canEdit();
    const showTemplateDropdown = showEditor && canEdit;
    const showEmptyContent = showEditor && editors.length === 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
      actions: showTemplateDropdown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_metadata_instance_editor_TemplateDropdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hasTemplates: templates && templates.length !== 0,
        isDropdownBusy: false,
        onAdd: this.onAdd // $FlowFixMe checked via showTemplateDropdown & showEditor
        ,
        templates: templates // $FlowFixMe checked via showTemplateDropdown & showEditor
        ,
        usedTemplates: editors.map(editor => editor.template)
      }) : null,
      className: "bcs-metadata",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_21__["SIDEBAR_VIEW_METADATA"],
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarMetadataTitle)
    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].error)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], error)), showLoadingIndicator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null), showEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "metadata-instance-editor",
      isLoading: isLoading
    }, showEmptyContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_metadata_instance_editor_EmptyContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      canAdd: canEdit
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_metadata_instance_editor_Instances__WEBPACK_IMPORTED_MODULE_8__["default"], {
      editors: editors,
      onModification: this.onModification,
      onRemove: this.onRemove,
      onSave: this.onSave,
      selectedTemplateKey: selectedTemplateKey
    })));
  }

}

_defineProperty(MetadataSidebar, "defaultProps", {
  isFeatureEnabled: true
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_20__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_METADATA_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_19__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_METADATA_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_18__["withAPIContext"]])(MetadataSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/MetadataSidebar.scss":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/MetadataSidebar.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/CascadePolicy.js":
/*!****************************************************************!*\
  !*** ./src/features/metadata-instance-editor/CascadePolicy.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/toggle */ "./src/components/toggle/index.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/radio */ "./src/components/radio/index.ts");
/* harmony import */ var _components_link_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/link/Link */ "./src/components/link/Link.tsx");
/* harmony import */ var _icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconAlertDefault */ "./src/icons/general/IconAlertDefault.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CascadePolicy.scss */ "./src/features/metadata-instance-editor/CascadePolicy.scss");
/* harmony import */ var _CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const COMMUNITY_LINK = 'https://community.box.com/t5/Organizing-and-Tracking-Content/Metadata/ta-p/30765';

const CascadePolicy = _ref => {
  let {
    canEdit,
    isCascadingEnabled,
    isCascadingOverwritten,
    isCustomMetadata,
    onCascadeToggle,
    onCascadeModeChange,
    shouldShowCascadeOptions
  } = _ref;
  const readOnlyState = isCascadingEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-cascade-notice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].metadataCascadePolicyEnabledInfo)) : null;
  return canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-cascade-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-cascade-enable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "strong"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].enableCascadePolicy)), !isCustomMetadata && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `metadata-cascade-toggle ${isCascadingEnabled ? 'cascade-on' : 'cascade-off'}`,
    isOn: isCascadingEnabled,
    label: "",
    onChange: e => onCascadeToggle(e.target.checked)
  })), !isCustomMetadata ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "cascade-policy-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].applyCascadePolicyText), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "cascade-policy-learnmore-link",
    href: COMMUNITY_LINK,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].cascadePolicyLearnMore))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].cannotApplyCascadePolicyText)))), shouldShowCascadeOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-cascade-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-cascading-mode"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].cascadePolicyModeQuestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-operation-not-immediate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].operationNotImmediate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_radio__WEBPACK_IMPORTED_MODULE_3__["RadioGroup"], {
    className: "metadata-cascading-options",
    onChange: e => onCascadeModeChange(e.target.value === 'overwrite'),
    value: isCascadingOverwritten ? 'overwrite' : 'skip'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_radio__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].cascadePolicySkipMode),
    value: "skip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_radio__WEBPACK_IMPORTED_MODULE_3__["RadioButton"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].cascadePolicyOverwriteMode),
    value: "overwrite"
  }))))) : readOnlyState;
};

/* harmony default export */ __webpack_exports__["default"] = (CascadePolicy);

/***/ }),

/***/ "./src/features/metadata-instance-editor/CascadePolicy.scss":
/*!******************************************************************!*\
  !*** ./src/features/metadata-instance-editor/CascadePolicy.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/CustomInstance.js":
/*!*****************************************************************!*\
  !*** ./src/features/metadata-instance-editor/CustomInstance.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomInstanceNewField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomInstanceNewField */ "./src/features/metadata-instance-editor/CustomInstanceNewField.js");
/* harmony import */ var _metadata_instance_fields_CustomMetadataField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata-instance-fields/CustomMetadataField */ "./src/features/metadata-instance-fields/CustomMetadataField.js");
/* harmony import */ var _EmptyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmptyContent */ "./src/features/metadata-instance-editor/EmptyContent.js");
/* harmony import */ var _metadata_instance_fields_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metadata-instance-fields/constants */ "./src/features/metadata-instance-fields/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CustomInstance extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static getDerivedStateFromProps(_ref, _ref2) {
    let {
      data
    } = _ref;
    let {
      properties
    } = _ref2;

    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data, properties)) {
      return {
        properties: _objectSpread({}, data)
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "onFieldChange", (key, value) => {
      const {
        canEdit,
        onFieldChange
      } = this.props;

      if (canEdit && onFieldChange) {
        onFieldChange(key, value, _metadata_instance_fields_constants__WEBPACK_IMPORTED_MODULE_5__["FIELD_TYPE_STRING"]);
      }
    });

    _defineProperty(this, "onFieldRemove", key => {
      const {
        canEdit,
        onFieldRemove
      } = this.props;

      if (canEdit && onFieldRemove) {
        onFieldRemove(key);
      }
    });

    _defineProperty(this, "onAddFieldToggle", () => {
      this.setState(prevState => ({
        isAddFieldVisible: !prevState.isAddFieldVisible
      }));
    });

    this.state = {
      isAddFieldVisible: false,
      properties: _objectSpread({}, props.data)
    };
  }
  /**
   * Adds/updates a new metadata key value pair
   *
   * @param {string} key - metadata key
   * @param {string} value - metadata value
   * @return {void}
   */


  render() {
    const {
      canEdit
    } = this.props;
    const {
      isAddFieldVisible,
      properties
    } = this.state;
    const fields = Object.keys(properties);
    const canAddFields = canEdit && (isAddFieldVisible || fields.length === 0);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, fields.map((key, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_metadata_instance_fields_CustomMetadataField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: key,
      canEdit: canEdit,
      dataKey: key,
      dataValue: properties[key],
      isLast: !isAddFieldVisible && index === fields.length - 1,
      onAdd: this.onAddFieldToggle,
      onChange: this.onFieldChange,
      onRemove: this.onFieldRemove
    })), !canAddFields && fields.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyContent__WEBPACK_IMPORTED_MODULE_4__["default"], null), canAddFields && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomInstanceNewField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isCancellable: fields.length !== 0,
      onAdd: this.onFieldChange,
      onCancel: this.onAddFieldToggle,
      properties: this.props.data
    }));
  }

}

_defineProperty(CustomInstance, "defaultProps", {
  canEdit: true,
  data: {}
});

/* harmony default export */ __webpack_exports__["default"] = (CustomInstance);

/***/ }),

/***/ "./src/features/metadata-instance-editor/CustomInstanceNewField.js":
/*!*************************************************************************!*\
  !*** ./src/features/metadata-instance-editor/CustomInstanceNewField.js ***!
  \*************************************************************************/
/*! exports provided: CustomInstanceNewFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInstanceNewFieldBase", function() { return CustomInstanceNewField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./src/components/text-input/TextInput.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconInfo */ "./src/icons/general/IconInfo.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomInstanceNewField.scss */ "./src/features/metadata-instance-editor/CustomInstanceNewField.scss");
/* harmony import */ var _CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class CustomInstanceNewField extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      key: '',
      value: '',
      error: ''
    });

    _defineProperty(this, "onKeyChange", event => {
      this.onChange(event, 'key');
    });

    _defineProperty(this, "onValueChange", event => {
      this.onChange(event, 'value');
    });

    _defineProperty(this, "onAdd", () => {
      const {
        key,
        value
      } = this.state;
      const {
        onAdd,
        properties
      } = this.props;

      if (Object.prototype.hasOwnProperty.call(properties, key)) {
        this.setState({
          error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customErrorDuplicateKey)
        });
      } else if (key.startsWith('$')) {
        this.setState({
          error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customErrorInternalKey)
        });
      } else if (key) {
        onAdd(key, value);
      } else {
        this.setState({
          error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customErrorRequired)
        });
      }
    });
  }

  /**
   * Common change handler
   *
   * @param {Event} event - keyboard event
   * @param {string} attr - key or value
   * @return {void}
   */
  onChange(event, attr) {
    const currentTarget = event.currentTarget;
    this.setState({
      error: '',
      [attr]: currentTarget.value
    });
  }
  /**
   * Change handler for the key
   *
   * @param {Event} event - keyboard event
   * @return {void}
   */


  render() {
    const {
      intl,
      isCancellable,
      onCancel
    } = this.props;
    const {
      key,
      value,
      error
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "custom-new-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "custom-new-field-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
      tagName: "h5"
    }, _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customNewField)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customNewFieldMessage)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      tabIndex: "-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "#777",
      height: 18,
      width: 18
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      isRequired: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customKey),
      onChange: this.onKeyChange,
      placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].customKeyPlaceholder),
      type: "text",
      value: key
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hideOptionalLabel: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customValue),
      onChange: this.onValueChange,
      placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].customValuePlaceholder),
      type: "text",
      value: value
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "custom-new-field-actions"
    }, isCancellable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "data-resin-target": "metadata-customfieldcancel",
      onClick: onCancel,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].cancel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "data-resin-target": "metadata-customfieldadd",
      onClick: this.onAdd,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].customAdd))));
  }

}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(CustomInstanceNewField));

/***/ }),

/***/ "./src/features/metadata-instance-editor/CustomInstanceNewField.scss":
/*!***************************************************************************!*\
  !*** ./src/features/metadata-instance-editor/CustomInstanceNewField.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/EmptyContent.js":
/*!***************************************************************!*\
  !*** ./src/features/metadata-instance-editor/EmptyContent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _icons_general_IconAddMetadataEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconAddMetadataEmptyState */ "./src/icons/general/IconAddMetadataEmptyState.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _EmptyContent_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmptyContent.scss */ "./src/features/metadata-instance-editor/EmptyContent.scss");
/* harmony import */ var _EmptyContent_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EmptyContent_scss__WEBPACK_IMPORTED_MODULE_4__);






const EmptyContent = _ref => {
  let {
    canAdd
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-editor-no-instances"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAddMetadataEmptyState__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "metadata-instance-editor-no-instances--call-out"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].noMetadata)), canAdd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "metadata-instance-editor-no-instances--how-add-template"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].noMetadataAddTemplate)));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyContent);

/***/ }),

/***/ "./src/features/metadata-instance-editor/EmptyContent.scss":
/*!*****************************************************************!*\
  !*** ./src/features/metadata-instance-editor/EmptyContent.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/Footer.js":
/*!*********************************************************!*\
  !*** ./src/features/metadata-instance-editor/Footer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.scss */ "./src/features/metadata-instance-editor/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_6__);








const Footer = _ref => {
  let {
    onCancel,
    onRemove,
    showSave
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-editor-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-editor-footer-delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": "metadata-instanceremove",
    onClick: onRemove,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].metadataRemoveTemplate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-editor-footer-save-cancel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "metadata-instancecancel",
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].metadataCancel)), showSave && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-resin-target": "metadata-instancesave"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].metadataSave))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/features/metadata-instance-editor/Footer.scss":
/*!***********************************************************!*\
  !*** ./src/features/metadata-instance-editor/Footer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/Instance.js":
/*!***********************************************************!*\
  !*** ./src/features/metadata-instance-editor/Instance.js ***!
  \***********************************************************/
/*! exports provided: InstanceBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstanceBase", function() { return Instance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/collapsible/Collapsible */ "./src/components/collapsible/Collapsible.tsx");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form-elements/form/Form */ "./src/components/form-elements/form/Form.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.tsx");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _icons_general_IconMetadataColored__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/general/IconMetadataColored */ "./src/icons/general/IconMetadataColored.tsx");
/* harmony import */ var _icons_general_IconAlertCircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons/general/IconAlertCircle */ "./src/icons/general/IconAlertCircle.tsx");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icons/general/IconEdit */ "./src/icons/general/IconEdit.tsx");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _CascadePolicy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CascadePolicy */ "./src/features/metadata-instance-editor/CascadePolicy.js");
/* harmony import */ var _TemplatedInstance__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TemplatedInstance */ "./src/features/metadata-instance-editor/TemplatedInstance.js");
/* harmony import */ var _CustomInstance__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CustomInstance */ "./src/features/metadata-instance-editor/CustomInstance.js");
/* harmony import */ var _MetadataInstanceConfirmDialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./MetadataInstanceConfirmDialog */ "./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Footer */ "./src/features/metadata-instance-editor/Footer.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _metadata_instance_fields_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../metadata-instance-fields/constants */ "./src/features/metadata-instance-fields/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./constants */ "./src/features/metadata-instance-editor/constants.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../common/constants */ "./src/common/constants.js");
/* harmony import */ var _metadata_instance_fields_validateMetadataField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../metadata-instance-fields/validateMetadataField */ "./src/features/metadata-instance-fields/validateMetadataField.js");
/* harmony import */ var _metadataUtil__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./metadataUtil */ "./src/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _Instance_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Instance.scss */ "./src/features/metadata-instance-editor/Instance.scss");
/* harmony import */ var _Instance_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_Instance_scss__WEBPACK_IMPORTED_MODULE_28__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































const createFieldKeyToTypeMap = function () {
  let fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return fields.reduce((prev, _ref) => {
    let {
      key,
      type
    } = _ref;
    prev[key] = type;
    return prev;
  }, {});
};

const getValue = (data, key, type) => {
  const value = data[key];

  switch (type) {
    case _metadata_instance_fields_constants__WEBPACK_IMPORTED_MODULE_22__["FIELD_TYPE_FLOAT"]:
      return parseFloat(value);

    case _metadata_instance_fields_constants__WEBPACK_IMPORTED_MODULE_22__["FIELD_TYPE_INTEGER"]:
      return parseInt(value, 10);

    default:
      return value;
  }
};

class Instance extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onCancel", () => {
      const {
        id,
        onModification
      } = this.props;
      this.setState(this.getState(this.props)); // Callback to parent to tell that something is dirty

      if (onModification) {
        onModification(id, false);
      }
    });

    _defineProperty(this, "onConfirmRemove", () => {
      this.setState({
        shouldConfirmRemove: true
      });
    });

    _defineProperty(this, "onConfirmCancel", () => {
      this.setState({
        shouldConfirmRemove: false
      });
    });

    _defineProperty(this, "onRemove", () => {
      if (!this.isEditing()) {
        return;
      }

      const {
        id,
        onRemove
      } = this.props;

      if (onRemove) {
        onRemove(id);
        this.setState({
          isBusy: true
        });
      }
    });

    _defineProperty(this, "onSave", () => {
      const {
        cascadePolicy,
        data: originalData,
        id,
        isDirty,
        isCascadingPolicyApplicable,
        onSave
      } = this.props;
      const {
        data: currentData,
        errors,
        isCascadingEnabled,
        isCascadingOverwritten
      } = this.state;

      if (!this.isEditing() || !isDirty || !onSave || Object.keys(errors).length) {
        return;
      }

      this.setState({
        isBusy: true,
        isEditing: false,
        shouldShowCascadeOptions: false
      });
      onSave(id, this.createJSONPatch(currentData, originalData), isCascadingPolicyApplicable ? {
        canEdit: cascadePolicy ? cascadePolicy.canEdit : false,
        id: cascadePolicy ? cascadePolicy.id : undefined,
        isEnabled: isCascadingEnabled,
        overwrite: isCascadingOverwritten
      } : undefined, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(currentData));
    });

    _defineProperty(this, "onFieldChange", (key, value, type) => {
      const {
        data,
        errors
      } = this.state; // Don't do anything if data is the same or not in edit mode

      if (!this.isEditing() || lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(data[key], value)) {
        return;
      }

      const isValid = Object(_metadata_instance_fields_validateMetadataField__WEBPACK_IMPORTED_MODULE_25__["isValidValue"])(type, value);

      const finalErrors = _objectSpread({}, errors);

      const finalData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(data);
      finalData[key] = value;

      if (isValid) {
        delete finalErrors[key];
      } else {
        finalErrors[key] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_21__["default"].invalidInput);
      }

      this.setState({
        data: finalData,
        errors: finalErrors
      }, () => {
        this.setDirty(type);
      });
    });

    _defineProperty(this, "onFieldRemove", key => {
      if (!this.isEditing()) {
        return;
      }

      const {
        data,
        errors
      } = this.state;
      const finalData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(data);

      const finalErrors = _objectSpread({}, errors);

      delete finalData[key];
      delete finalErrors[key];
      this.setState({
        data: finalData,
        errors: finalErrors
      }, this.setDirty);
    });

    _defineProperty(this, "onCascadeToggle", value => {
      const {
        isCascadingPolicyApplicable
      } = this.props;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      this.setState({
        isCascadingEnabled: value,
        shouldShowCascadeOptions: value
      }, this.setDirty);
    });

    _defineProperty(this, "onCascadeModeChange", value => {
      const {
        isCascadingPolicyApplicable
      } = this.props;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      this.setState({
        isCascadingOverwritten: value
      }, this.setDirty);
    });

    _defineProperty(this, "renderDeleteMessage", (isFile, template) => {
      let message;
      const isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_23__["default"];

      if (isProperties) {
        message = isFile ? 'fileMetadataRemoveCustomTemplateConfirm' : 'folderMetadataRemoveCustomTemplateConfirm';
      } else {
        message = isFile ? 'fileMetadataRemoveTemplateConfirm' : 'folderMetadataRemoveTemplateConfirm';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_21__["default"][message], {
        values: {
          metadataName: template.displayName
        }
      }));
    });

    _defineProperty(this, "setDirty", type => {
      const {
        id,
        isCascadingPolicyApplicable,
        onModification
      } = this.props;
      const {
        data,
        isCascadingEnabled,
        isCascadingOverwritten
      } = this.state;
      const hasDataChanged = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(data, this.props.data);
      let hasCascadingChanged = false;

      if (isCascadingPolicyApplicable) {
        // isCascadingOverwritten always starts out as false, so true signifies a change
        hasCascadingChanged = isCascadingOverwritten || isCascadingEnabled !== this.isCascadingEnabled(this.props);
      } // Callback to parent to tell that something is dirty


      if (onModification) {
        onModification(id, hasDataChanged || hasCascadingChanged, type);
      }
    });

    _defineProperty(this, "collapsibleRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "toggleIsEditing", () => {
      this.setState(prevState => ({
        isEditing: !prevState.isEditing
      }));
    });

    _defineProperty(this, "renderEditButton", () => {
      const {
        intl,
        isDirty
      } = this.props;
      const {
        isBusy
      } = this.state;
      const canEdit = this.canEdit();
      const isEditing = this.isEditing();
      const editClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('metadata-instance-editor-instance-edit', {
        'metadata-instance-editor-instance-is-editing': isEditing
      });

      if (canEdit && !isDirty && !isBusy) {
        const metadataLabelEditText = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_21__["default"].metadataEditTooltip);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
          position: "top-left",
          text: metadataLabelEditText
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          "aria-label": metadataLabelEditText,
          "aria-pressed": isEditing,
          className: editClassName,
          "data-resin-target": "metadata-instanceedit",
          onClick: this.toggleIsEditing,
          type: "button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_13__["default"], null)));
      }

      return null;
    });

    this.state = this.getState(props);
    this.fieldKeyToTypeMap = createFieldKeyToTypeMap(props.template.fields);
  }

  componentDidUpdate(_ref2, prevState) {
    let {
      hasError: prevHasError,
      isDirty: prevIsDirty
    } = _ref2;
    const currentElement = this.collapsibleRef.current;
    const {
      hasError,
      isDirty
    } = this.props;
    const {
      isEditing
    } = prevState;

    if (currentElement && this.state.shouldConfirmRemove) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_15__["scrollIntoView"])(currentElement, {
        block: 'start',
        behavior: 'smooth'
      });
    }

    if (hasError && hasError !== prevHasError) {
      // If hasError is true, which means an error occurred while
      // doing a network operation and hence hide the busy indicator
      // Saving also disables isEditing, so need to enable that back.
      // isDirty remains as it was before.
      this.setState({
        isBusy: false,
        isEditing: true
      });
    } else if (prevIsDirty && !isDirty) {
      // If the form was dirty and now its not dirty
      // we know a successful save may have happened.
      // We don't modify isEditing here because we maintain the
      // prior state for that. If we came here from a save
      // success then save already disabled isEditing.
      if (isEditing) {
        // We are still editing so don't reset it
        this.setState({
          isBusy: false
        });
      } else {
        // For a successfull save we reset cascading overwrite radio
        this.setState({
          isBusy: false,
          isCascadingOverwritten: false
        });
      }
    }
  }
  /**
   * Undo any changes made
   *
   * @return {void}
   */


  /**
   * Returns the state from props
   *
   * @return {Object} - react state
   */
  getState(props) {
    return {
      data: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(props.data),
      errors: {},
      isBusy: false,
      isCascadingEnabled: this.isCascadingEnabled(props),
      isCascadingOverwritten: false,
      isEditing: false,
      shouldConfirmRemove: false,
      shouldShowCascadeOptions: false
    };
  }
  /**
   * Returns the card title with possible error mark
   *
   * @return {Object} - react title element
   */


  getTitle() {
    const {
      cascadePolicy = {},
      hasError,
      isCascadingPolicyApplicable,
      template
    } = this.props;
    const isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_23__["default"];
    const type = isCascadingPolicyApplicable && cascadePolicy.id ? 'cascade' : 'default';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "metadata-instance-editor-instance-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMetadataColored__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: type
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('metadata-instance-editor-instance-title-text', {
        'metadata-instance-editor-instance-has-error': hasError
      })
    }, isProperties ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_21__["default"].customTitle) : template.displayName), hasError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAlertCircle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_14__["bdlWatermelonRed"]
    }));
  }
  /**
   * Render the correct delete message to show based on custom metadata and file/folder metadata
   */


  /**
   * Get the delete confirmation message base on the template key
   */
  getConfirmationMessage() {
    const {
      template,
      isCascadingPolicyApplicable
    } = this.props;
    const isFile = !isCascadingPolicyApplicable;
    return this.renderDeleteMessage(isFile, template);
  }
  /**
   * Evaluates if the metadata was changed or cascading policy
   * altered or enabled.
   *
   * @return {void}
   */


  /**
   * Determines if cascading policy is enabled based on
   * whether it has an id or not.
   *
   * @param {Object} props - component props
   * @return {boolean} true if cascading policy is enabled
   */
  isCascadingEnabled(props) {
    if (props.cascadePolicy) {
      return !!props.cascadePolicy.id;
    }

    return false;
  }
  /**
   * Toggles the edit mode
   *
   * @private
   * @return {void}
   */


  /**
   * Creates JSON Patch operations from the passed in
   * data while comparing it to the original data from props.
   *
   * Only diffs at the root level and primitives.
   *
   * @param {*} currentData - the latest changes by the user
   * @param {*} originalData - the original values
   * @return {Array} - JSON patch operations
   */
  createJSONPatch(currentData, originalData) {
    const ops = [];
    const data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(currentData); // clone the data for mutation
    // Iterate over the original data and find keys that have changed.
    // Also remove them from the data object to only leave new keys.

    Object.keys(originalData).forEach(key => {
      const type = this.fieldKeyToTypeMap[key];
      const originalValue = getValue(originalData, key, type);
      const path = `/${key}`;

      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = getValue(data, key, type); // Only register changed data

        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(value, originalValue)) {
          // Add a test OP for each replaces
          ops.push({
            op: _common_constants__WEBPACK_IMPORTED_MODULE_24__["JSON_PATCH_OP_TEST"],
            path,
            value: originalValue
          });
          ops.push({
            op: _common_constants__WEBPACK_IMPORTED_MODULE_24__["JSON_PATCH_OP_REPLACE"],
            path,
            value
          });
        }
      } else {
        // Key was removed
        // Add a test OP for removes
        ops.push({
          op: _common_constants__WEBPACK_IMPORTED_MODULE_24__["JSON_PATCH_OP_TEST"],
          path,
          value: originalValue
        });
        ops.push({
          op: _common_constants__WEBPACK_IMPORTED_MODULE_24__["JSON_PATCH_OP_REMOVE"],
          path
        });
      }

      delete data[key];
    }); // Iterate over the remaining keys that are new.

    Object.keys(data).forEach(key => {
      const type = this.fieldKeyToTypeMap[key];
      const value = getValue(data, key, type);
      ops.push({
        op: _common_constants__WEBPACK_IMPORTED_MODULE_24__["JSON_PATCH_OP_ADD"],
        path: `/${key}`,
        value
      });
    });
    return ops;
  }
  /**
   * Utility function to determine if instance is editable
   *
   * @return {boolean} true if editable
   */


  canEdit() {
    const {
      canEdit,
      onModification,
      onRemove,
      onSave
    } = this.props;
    return canEdit && typeof onRemove === 'function' && typeof onSave === 'function' && typeof onModification === 'function';
  }
  /**
   * Utility function to determine if instance is in edit mode
   *
   * @return {boolean} true if editing
   */


  isEditing() {
    const {
      isEditing
    } = this.state;
    return this.canEdit() && isEditing;
  }

  render() {
    const {
      cascadePolicy = {},
      isDirty,
      isCascadingPolicyApplicable,
      isOpen,
      template
    } = this.props;
    const {
      fields = []
    } = template;
    const {
      data,
      errors,
      isBusy,
      isCascadingEnabled,
      shouldConfirmRemove,
      shouldShowCascadeOptions,
      isCascadingOverwritten
    } = this.state;
    const isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_23__["default"];
    const isEditing = this.isEditing();

    if (!template || Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_26__["isHidden"])(template)) {
      return null;
    } // Animate short and tall cards at consistent speeds.


    const animationDuration = (fields.length + 1) * 50;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      ref: this.collapsibleRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_6__["default"], {
      animationDuration: animationDuration,
      buttonProps: {
        [_common_variables__WEBPACK_IMPORTED_MODULE_27__["RESIN_TAG_TARGET"]]: 'metadata-card'
      },
      hasStickyHeader: true,
      headerActionItems: this.renderEditButton(),
      isBordered: true,
      isOpen: isOpen,
      title: this.getTitle()
    }, shouldConfirmRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: isBusy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MetadataInstanceConfirmDialog__WEBPACK_IMPORTED_MODULE_19__["default"], {
      confirmationMessage: this.getConfirmationMessage(),
      onCancel: this.onConfirmCancel,
      onConfirm: this.onRemove
    })), !shouldConfirmRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: isBusy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onValidSubmit: isDirty ? this.onSave : lodash_noop__WEBPACK_IMPORTED_MODULE_5___default.a
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "metadata-instance-editor-instance"
    }, isCascadingPolicyApplicable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CascadePolicy__WEBPACK_IMPORTED_MODULE_16__["default"], {
      canEdit: isEditing && !!cascadePolicy.canEdit,
      isCascadingEnabled: isCascadingEnabled,
      isCascadingOverwritten: isCascadingOverwritten,
      isCustomMetadata: isProperties,
      onCascadeModeChange: this.onCascadeModeChange,
      onCascadeToggle: this.onCascadeToggle,
      shouldShowCascadeOptions: shouldShowCascadeOptions
    }), isProperties ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CustomInstance__WEBPACK_IMPORTED_MODULE_18__["default"], {
      canEdit: isEditing,
      data: data,
      onFieldChange: this.onFieldChange,
      onFieldRemove: this.onFieldRemove
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TemplatedInstance__WEBPACK_IMPORTED_MODULE_17__["default"], {
      canEdit: isEditing,
      data: data,
      errors: errors,
      onFieldChange: this.onFieldChange,
      onFieldRemove: this.onFieldRemove,
      template: template
    })), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
      onCancel: this.onCancel,
      onRemove: this.onConfirmRemove,
      showSave: isDirty
    })))));
  }

}

_defineProperty(Instance, "defaultProps", {
  data: {},
  isDirty: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(Instance));

/***/ }),

/***/ "./src/features/metadata-instance-editor/Instance.scss":
/*!*************************************************************!*\
  !*** ./src/features/metadata-instance-editor/Instance.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/Instances.js":
/*!************************************************************!*\
  !*** ./src/features/metadata-instance-editor/Instances.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instance */ "./src/features/metadata-instance-editor/Instance.js");



const Instances = _ref => {
  let {
    isCascadingPolicyApplicable = false,
    editors = [],
    onModification,
    onRemove,
    onSave,
    selectedTemplateKey
  } = _ref;
  return editors.map(_ref2 => {
    let {
      isDirty = false,
      instance,
      hasError = false,
      template
    } = _ref2;
    const {
      templateKey
    } = template;
    const isOpen = editors.length === 1 || templateKey === selectedTemplateKey;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Instance__WEBPACK_IMPORTED_MODULE_1__["default"], {
      canEdit: instance.canEdit,
      cascadePolicy: instance.cascadePolicy,
      data: instance.data,
      hasError: hasError,
      id: instance.id,
      isCascadingPolicyApplicable: isCascadingPolicyApplicable,
      isDirty: isDirty,
      isOpen: isOpen,
      key: `${instance.id}-${templateKey}`,
      onModification: onModification,
      onSave: onSave,
      onRemove: onRemove,
      template: template
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Instances);

/***/ }),

/***/ "./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js":
/*!********************************************************************************!*\
  !*** ./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetadataInstanceConfirmDialog.scss */ "./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss");
/* harmony import */ var _MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_5__);







const MetadataInstanceConfirmDialog = _ref => {
  let {
    onCancel,
    onConfirm,
    confirmationMessage
  } = _ref;
  const cancelButtonRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (cancelButtonRef.current) {
      cancelButtonRef.current.btnElement.focus();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-confirm-cover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-confim-container",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "metadata-instance-confirm-text"
  }, confirmationMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "metadata-instance-confirm-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: cancelButtonRef,
    "data-resin-target": "metadata-confirmcancel",
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataCancel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": "metadata-confirmremove",
    onClick: onConfirm,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].customRemove)))));
};

/* harmony default export */ __webpack_exports__["default"] = (MetadataInstanceConfirmDialog);

/***/ }),

/***/ "./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/MetadataInstanceEditorContext.js":
/*!********************************************************************************!*\
  !*** ./src/features/metadata-instance-editor/MetadataInstanceEditorContext.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  blurExceptionClassNames: []
}));

/***/ }),

/***/ "./src/features/metadata-instance-editor/TemplateDropdown.js":
/*!*******************************************************************!*\
  !*** ./src/features/metadata-instance-editor/TemplateDropdown.js ***!
  \*******************************************************************/
/*! exports provided: TemplateDropdownBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDropdownBase", function() { return TemplateDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_datalist_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/datalist-item */ "./src/components/datalist-item/index.ts");
/* harmony import */ var _components_selector_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selector-dropdown */ "./src/components/selector-dropdown/index.js");
/* harmony import */ var _components_search_form_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-form/SearchForm */ "./src/components/search-form/SearchForm.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _components_flyout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/flyout */ "./src/components/flyout/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/features/metadata-instance-editor/constants.js");
/* harmony import */ var _TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TemplateDropdown.scss */ "./src/features/metadata-instance-editor/TemplateDropdown.scss");
/* harmony import */ var _TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_13__);
const _excluded = ["inputProps"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const InputContainer = _ref => {
  let {
    inputProps = {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_search_form_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, inputProps, rest, {
    shouldPreventClearEventPropagation: true,
    "data-resin-target": "metadata-templatesearch"
  }));
};

const getAvailableTemplates = (allTemplates, usedTemplates) => allTemplates.filter(template => usedTemplates.findIndex(usedTemplate => usedTemplate.templateKey === template.templateKey && usedTemplate.scope === template.scope) === -1);

class TemplateDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getDropdown", () => {
      const {
        isDropdownBusy,
        onAdd,
        activeTemplate,
        defaultTemplateIcon,
        activeTemplateIcon,
        templates: allTemplates,
        title,
        usedTemplates
      } = this.props;
      const {
        templates
      } = this.state;
      const hasUnusedTemplates = getAvailableTemplates(allTemplates, usedTemplates).length > 0;
      const hasTemplates = allTemplates.length > 0;
      const hasResults = templates.length > 0;
      let indicatorOrMessage = null;

      if (isDropdownBusy) {
        indicatorOrMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "metadata-instance-editor-template-message template-dropdown-loading-indicator"
        });
      } else if (!hasTemplates || !hasUnusedTemplates || !hasResults) {
        let message = {
          id: ''
        };

        if (!hasTemplates) {
          message = _messages__WEBPACK_IMPORTED_MODULE_11__["default"].metadataTemplatesServerHasNoTemplates;
        } else if (!hasUnusedTemplates) {
          message = _messages__WEBPACK_IMPORTED_MODULE_11__["default"].metadataTemplatesNoRemainingTemplates;
        } else if (!hasResults) {
          message = _messages__WEBPACK_IMPORTED_MODULE_11__["default"].metadataTemplatesNoResults;
        }

        indicatorOrMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "metadata-instance-editor-template-message"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], message));
      }

      const renderedTemplates = templates.map(template => {
        const isTemplateSelected = activeTemplate && activeTemplate.id === template.id;
        const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('metadata-template-dropdown-select-template', {
          'metadata-template-dropdown-is-selected': isTemplateSelected
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_datalist_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: template.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: buttonClassName,
          tabIndex: "-1",
          type: "button"
        }, isTemplateSelected ? activeTemplateIcon : defaultTemplateIcon, this.getTemplateName(template)));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_selector_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "metadata-instance-editor-template-dropdown-menu",
        title: title,
        isAlwaysOpen: true,
        onSelect: index => {
          onAdd(templates[index]);
        },
        selector: this.getSelector(),
        shouldScroll: true
      }, indicatorOrMessage ? null : renderedTemplates), indicatorOrMessage);
    });

    _defineProperty(this, "getSelector", () => {
      const {
        intl
      } = this.props;
      const {
        filterText
      } = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](InputContainer, {
        label: "",
        onChange: this.handleUserInput,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_11__["default"].metadataTemplateSearchPlaceholder),
        type: "text",
        useClearButton: true,
        value: filterText
      });
    });

    _defineProperty(this, "handleUserInput", userInput => {
      const {
        templates: allTemplates,
        usedTemplates
      } = this.props;
      const filterText = userInput;
      const templates = getAvailableTemplates(allTemplates, usedTemplates);
      this.setState({
        filterText,
        templates: templates.filter(template => {
          const label = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_12__["default"] ? _messages__WEBPACK_IMPORTED_MODULE_11__["default"].customTitle.defaultMessage : template.displayName;
          return label.toLowerCase().includes(filterText.toLowerCase());
        })
      });
    });

    _defineProperty(this, "onOpen", () => {
      const {
        onDropdownToggle,
        templates,
        usedTemplates
      } = this.props;

      if (onDropdownToggle) {
        onDropdownToggle(true);
      }

      this.setState({
        isDropdownOpen: true,
        filterText: '',
        templates: getAvailableTemplates(templates, usedTemplates)
      });
    });

    _defineProperty(this, "onClose", () => {
      const {
        onDropdownToggle
      } = this.props;

      if (onDropdownToggle) {
        onDropdownToggle(false);
      }

      this.setState({
        isDropdownOpen: false
      });
    });

    _defineProperty(this, "renderEntryButton", () => {
      const {
        entryButton
      } = this.props;
      const {
        isDropdownOpen
      } = this.state;
      const buttonToggleClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('lnk', {
        'is-toggled': isDropdownOpen
      });

      if (entryButton) {
        return entryButton;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "data-resin-target": "metadata-templateaddmenu",
        className: buttonToggleClassName,
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_11__["default"].metadataTemplateAdd)));
    });

    this.state = {
      isDropdownOpen: false,
      filterText: '',
      templates: getAvailableTemplates(props.templates, props.usedTemplates)
    };
  }
  /**
   * Updates the state
   *
   * @param {Object} prevProps - next props
   * @return {void}
   */


  componentDidUpdate(_ref2) {
    let {
      templates: prevTemplates,
      usedTemplates: prevUsedTemplates
    } = _ref2;
    const {
      templates,
      usedTemplates
    } = this.props;

    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevTemplates, templates) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(prevUsedTemplates, usedTemplates)) {
      this.setState({
        templates: getAvailableTemplates(templates, usedTemplates)
      });
    }
  }

  /**
   * Returns template display name.
   * For custom metadata we have it on the client.
   *
   * @return {React.Node} - string or formatted name
   */
  getTemplateName(template) {
    return template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_12__["default"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
      className: "template-display-name"
    }, _messages__WEBPACK_IMPORTED_MODULE_11__["default"].customTitle)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "template-display-name"
    }, template.displayName);
  }
  /**
   * Updates the filter text and filters the results
   *
   * @param {UserInput} userInput - input value returned from onChangeHandler from SearchForm.js
   * @return {void}
   */


  render() {
    const {
      className
    } = this.props;
    const flyoutClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('metadata-instance-editor-template-dropdown-flyout', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_flyout__WEBPACK_IMPORTED_MODULE_9__["Flyout"], {
      className: flyoutClassName,
      closeOnClick: true,
      closeOnClickOutside: true,
      onClose: this.onClose,
      onOpen: this.onOpen,
      position: "bottom-left",
      shouldDefaultFocus: true
    }, this.renderEntryButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_flyout__WEBPACK_IMPORTED_MODULE_9__["Overlay"], null, this.getDropdown()));
  }

}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(TemplateDropdown));

/***/ }),

/***/ "./src/features/metadata-instance-editor/TemplateDropdown.scss":
/*!*********************************************************************!*\
  !*** ./src/features/metadata-instance-editor/TemplateDropdown.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/TemplatedInstance.js":
/*!********************************************************************!*\
  !*** ./src/features/metadata-instance-editor/TemplatedInstance.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _metadata_instance_fields_MetadataField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata-instance-fields/MetadataField */ "./src/features/metadata-instance-fields/MetadataField.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-editor/messages.js");
/* harmony import */ var _metadataUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataUtil */ "./src/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _MetadataInstanceEditorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetadataInstanceEditorContext */ "./src/features/metadata-instance-editor/MetadataInstanceEditorContext.js");
/* harmony import */ var _TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TemplatedInstance.scss */ "./src/features/metadata-instance-editor/TemplatedInstance.scss");
/* harmony import */ var _TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_6__);








const TemplatedInstance = _ref => {
  let {
    canEdit,
    data = {},
    errors,
    onFieldChange,
    onFieldRemove,
    template
  } = _ref;
  const {
    fields = []
  } = template;
  const hasFields = fields.length > 0;
  const hasVisibleFields = hasFields && fields.some(field => !Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_4__["isHidden"])(field));
  const showNoFieldsMessage = !hasFields;
  const showHiddenFieldsMessage = hasFields && !hasVisibleFields;
  const {
    blurExceptionClassNames
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_MetadataInstanceEditorContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, hasVisibleFields && fields.map(field => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_metadata_instance_fields_MetadataField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: field.id,
    blurExceptionClassNames: blurExceptionClassNames,
    canEdit: canEdit,
    dataKey: field.key,
    dataValue: data[field.key],
    description: field.description,
    displayName: field.displayName,
    error: errors[field.key],
    isHidden: Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_4__["isHidden"])(field) // Checking both isHidden and hidden attributes due to differences in V2 and V3 APIs
    ,
    onChange: (key, value) => {
      if (canEdit && onFieldChange) {
        onFieldChange(key, value, field.type);
      }
    },
    onRemove: key => {
      if (canEdit && onFieldRemove) {
        onFieldRemove(key);
      }
    },
    options: field.options,
    type: field.type
  })), showHiddenFieldsMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "attributes-hidden-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].allAttributesAreHidden)), showNoFieldsMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "no-attributes-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].noAttributesForTemplate)));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatedInstance);

/***/ }),

/***/ "./src/features/metadata-instance-editor/TemplatedInstance.scss":
/*!**********************************************************************!*\
  !*** ./src/features/metadata-instance-editor/TemplatedInstance.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-editor/constants.js":
/*!************************************************************!*\
  !*** ./src/features/metadata-instance-editor/constants.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TEMPLATE_CUSTOM_PROPERTIES = 'properties';
/* harmony default export */ __webpack_exports__["default"] = (TEMPLATE_CUSTOM_PROPERTIES);

/***/ }),

/***/ "./src/features/metadata-instance-editor/messages.js":
/*!***********************************************************!*\
  !*** ./src/features/metadata-instance-editor/messages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  customTitle: {
    "id": "boxui.metadataInstanceEditor.customTitle",
    "defaultMessage": "Custom Metadata"
  },
  customAdd: {
    "id": "boxui.metadataInstanceEditor.customAdd",
    "defaultMessage": "Add"
  },
  customRemove: {
    "id": "boxui.metadataInstanceEditor.customRemove",
    "defaultMessage": "Remove"
  },
  customKey: {
    "id": "boxui.metadataInstanceEditor.customKey",
    "defaultMessage": "Key"
  },
  customKeyPlaceholder: {
    "id": "boxui.metadataInstanceEditor.customKeyPlaceholder",
    "defaultMessage": "e.g. Order Number"
  },
  customValue: {
    "id": "boxui.metadataInstanceEditor.customValue",
    "defaultMessage": "Value"
  },
  customValuePlaceholder: {
    "id": "boxui.metadataInstanceEditor.customValuePlaceholder",
    "defaultMessage": "e.g. 42"
  },
  customNewField: {
    "id": "boxui.metadataInstanceEditor.customNewField",
    "defaultMessage": "New Field"
  },
  customNewFieldMessage: {
    "id": "boxui.metadataInstanceEditor.customNewFieldMessage",
    "defaultMessage": "Add a custom metadata field. Other people will be able to see and search for this field."
  },
  customErrorRequired: {
    "id": "boxui.metadataInstanceEditor.customErrorRequired",
    "defaultMessage": "A key is required."
  },
  customErrorDuplicateKey: {
    "id": "boxui.metadataInstanceEditor.customErrorDuplicateKey",
    "defaultMessage": "A field with that key already exists."
  },
  customErrorInternalKey: {
    "id": "boxui.metadataInstanceEditor.customErrorInternalKey",
    "defaultMessage": "Keys cannot begin with a $."
  },
  invalidInput: {
    "id": "boxui.metadataInstanceEditor.invalidValue",
    "defaultMessage": "Invalid Input!"
  },
  metadataEditTooltip: {
    "id": "boxui.metadataInstanceEditor.editTooltip",
    "defaultMessage": "Edit Metadata"
  },
  metadataRemoveTemplate: {
    "id": "boxui.metadataInstanceEditor.removeTemplate",
    "defaultMessage": "Remove"
  },
  fileMetadataRemoveTemplateConfirm: {
    "id": "boxui.metadataInstanceEditor.fileMetadataRemoveTemplateConfirm",
    "defaultMessage": "Are you sure you want to delete \"{metadataName}\" and all of its values from this file?"
  },
  folderMetadataRemoveTemplateConfirm: {
    "id": "boxui.metadataInstanceEditor.folderMetadataRemoveTemplateConfirm",
    "defaultMessage": "Are you sure you want to delete \"{metadataName}\" and all of its values? Any metadata template values already applied to files in this folder will not be deleted."
  },
  fileMetadataRemoveCustomTemplateConfirm: {
    "id": "boxui.metadataInstanceEditor.fileMetadataRemoveCustomTemplateConfirm",
    "defaultMessage": "Are you sure you want to delete this custom metadata and all of its values from this file?"
  },
  folderMetadataRemoveCustomTemplateConfirm: {
    "id": "boxui.metadataInstanceEditor.folderMetadataRemoveCustomTemplateConfirm",
    "defaultMessage": "Are you sure you want to delete this custom metadata and all of its values? Any metadata template values already applied to files in this folder will not be deleted."
  },
  metadataTemplateSearchPlaceholder: {
    "id": "boxui.metadataInstanceEditor.templateSearchPlaceholder",
    "defaultMessage": "Search all templates"
  },
  metadataTemplateAdd: {
    "id": "boxui.metadataInstanceEditor.templateAdd",
    "defaultMessage": "Add"
  },
  metadataTemplatesTitle: {
    "id": "boxui.metadataInstanceEditor.templatesTitle",
    "defaultMessage": "Templates"
  },
  metadataTemplatesNoResults: {
    "id": "boxui.metadataInstanceEditor.templatesNoResults",
    "defaultMessage": "No Results"
  },
  metadataTemplatesFetchFailed: {
    "id": "boxui.metadataInstanceEditor.templatesFetchFailed",
    "defaultMessage": "Sorry! We could not fetch templates. Please contact your administrator"
  },
  metadataTemplatesNoRemainingTemplates: {
    "id": "boxui.metadataInstanceEditor.templatesNoRemainingTemplates",
    "defaultMessage": "All templates have been added"
  },
  metadataTemplatesServerHasNoTemplates: {
    "id": "boxui.metadataInstanceEditor.templatesServerHasNoTemplates",
    "defaultMessage": "Zero templates"
  },
  metadataSave: {
    "id": "boxui.metadataInstanceEditor.metadataSave",
    "defaultMessage": "Save"
  },
  metadataCancel: {
    "id": "boxui.metadataInstanceEditor.metadataCancel",
    "defaultMessage": "Cancel"
  },
  metadataCascadePolicyEnabledInfo: {
    "id": "boxui.metadataInstanceEditor.metadataCascadePolicyEnabledInfo",
    "defaultMessage": "This template and its values are being cascaded to all items in this folder and its subfolders."
  },
  noMetadata: {
    "id": "boxui.metadataInstanceEditor.noMetadata",
    "defaultMessage": "No Metadata Applied"
  },
  noMetadataAddTemplate: {
    "id": "boxui.metadataInstanceEditor.noMetadataAddTemplate",
    "defaultMessage": "Click 'Add' in the top right to add metadata to this item"
  },
  enableCascadePolicy: {
    "id": "boxui.metadataInstanceEditor.enableCascadePolicy",
    "defaultMessage": "Enable Cascade Policy"
  },
  applyCascadePolicyText: {
    "id": "boxui.metadataInstanceEditor.applyCascadePolicyText",
    "defaultMessage": "Apply template and its values to all new and existing items in this folder and its subfolders."
  },
  cannotApplyCascadePolicyText: {
    "id": "boxui.metadataInstanceEditor.cannotApplyCascadePolicyText",
    "defaultMessage": "Cascade policy cannot be applied to custom metadata at this time."
  },
  cascadePolicyLearnMore: {
    "id": "boxui.metadataInstanceEditor.cascadePolicyLearnMore",
    "defaultMessage": "Learn more"
  },
  cascadePolicyModeQuestion: {
    "id": "boxui.metadataInstanceEditor.cascadePolicyModeQuestion",
    "defaultMessage": "In the case of conflicts when applying this template and its values to existing items, what would you like to do? This is a one time action."
  },
  cascadePolicySkipMode: {
    "id": "boxui.metadataInstanceEditor.cascadePolicySkipMode",
    "defaultMessage": "Skip and keep all existing template values"
  },
  cascadePolicyOverwriteMode: {
    "id": "boxui.metadataInstanceEditor.cascadePolicyOverwriteMode",
    "defaultMessage": "Overwrite all existing template values"
  },
  allAttributesAreHidden: {
    "id": "boxui.metadataInstanceEditor.allAttributesAreHidden",
    "defaultMessage": "All attributes in this template have been hidden."
  },
  noAttributesForTemplate: {
    "id": "boxui.metadataInstanceEditor.noAttributesForTemplate",
    "defaultMessage": "There are no attributes in this template."
  },
  operationNotImmediate: {
    "id": "boxui.metadataInstanceEditor.operationNotImmediate",
    "defaultMessage": "This operation is not immediate and may take some time."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/metadata-instance-editor/metadataUtil.js":
/*!***************************************************************!*\
  !*** ./src/features/metadata-instance-editor/metadataUtil.js ***!
  \***************************************************************/
/*! exports provided: isHidden, normalizeTemplates, normalizeTemplateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTemplates", function() { return normalizeTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTemplateFilters", function() { return normalizeTemplateFilters; });
const isHidden = obj => {
  return !!obj.isHidden || !!obj.hidden;
};
/**
 * Utility function for converting a string or array of strings into a Set object
 * @param templateFilters - Array<string> | string
 * @returns {Set<T>}
 */


const normalizeTemplateFilters = templateFilters => {
  return typeof templateFilters === 'string' ? new Set([templateFilters]) : new Set(templateFilters);
};
/**
 * Utility function for cloning an array of metadata templates and filtering the templates and fields if necessary
 * @param templates Array<MetadataTemplate>
 * @param selectedTemplateKey - string
 * @param templateFilters - Array<string> | string
 * @returns {Array<T>}
 */


const normalizeTemplates = (templates, selectedTemplateKey, templateFilters) => {
  if (!selectedTemplateKey) {
    return [...templates];
  }

  const clonedTemplates = templates.filter(template => template.templateKey === selectedTemplateKey);
  const fields = clonedTemplates[0] ? clonedTemplates[0].fields : null;

  if (templateFilters && fields) {
    const normalizedFilters = normalizeTemplateFilters(templateFilters);
    clonedTemplates[0].fields = fields.filter(field => normalizedFilters.has(field.id));
  }

  return clonedTemplates;
};



/***/ }),

/***/ "./src/features/metadata-instance-fields/CustomMetadataField.js":
/*!**********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/CustomMetadataField.js ***!
  \**********************************************************************/
/*! exports provided: CustomMetadataFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMetadataFieldBase", function() { return CustomMetadataField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _components_button_group_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button-group/ButtonGroup */ "./src/components/button-group/ButtonGroup.tsx");
/* harmony import */ var _icons_general_IconMinusThin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconMinusThin */ "./src/icons/general/IconMinusThin.tsx");
/* harmony import */ var _icons_general_IconPlusThin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconPlusThin */ "./src/icons/general/IconPlusThin.tsx");
/* harmony import */ var _MetadataField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetadataField */ "./src/features/metadata-instance-fields/MetadataField.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _CustomMetadataField_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomMetadataField.scss */ "./src/features/metadata-instance-fields/CustomMetadataField.scss");
/* harmony import */ var _CustomMetadataField_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CustomMetadataField_scss__WEBPACK_IMPORTED_MODULE_8__);









const COLOR_999 = '#999';

const CustomMetadataField = _ref => {
  let {
    intl,
    canEdit,
    isLast,
    dataKey,
    dataValue,
    onAdd,
    onChange,
    onRemove
  } = _ref;
  const addBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].customAdd),
    "data-resin-target": "metadata-customfieldnew",
    onClick: onAdd,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconPlusThin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: COLOR_999
  }));
  const removeBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].customRemove),
    "data-resin-target": "metadata-customfieldremove",
    onClick: () => {
      if (onRemove) {
        onRemove(dataKey);
      }
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMinusThin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: COLOR_999
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-CustomMetadataField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MetadataField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    canEdit: canEdit,
    dataKey: dataKey,
    dataValue: dataValue,
    displayName: dataKey,
    onChange: onChange // Custom metadata doesn't allow removing of props if the value is emptied out, leave it as empty string
    ,
    onRemove: key => onChange(key, ''),
    type: "string"
  }), canEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-CustomMetadataField-customActions"
  }, isLast ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_group_ButtonGroup__WEBPACK_IMPORTED_MODULE_3__["default"], null, removeBtn, addBtn) : removeBtn));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(CustomMetadataField));

/***/ }),

/***/ "./src/features/metadata-instance-fields/CustomMetadataField.scss":
/*!************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/CustomMetadataField.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/DateMetadataField.js":
/*!********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/DateMetadataField.js ***!
  \********************************************************************/
/*! exports provided: DateMetadataFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMetadataFieldBase", function() { return DateMetadataField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.tsx");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _DateMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateMetadataField.scss */ "./src/features/metadata-instance-fields/DateMetadataField.scss");
/* harmony import */ var _DateMetadataField_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_DateMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__);







const DateMetadataField = _ref => {
  let {
    dataKey,
    dataValue,
    displayName,
    description,
    intl,
    onChange,
    onRemove
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_date_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bdl-DateMetadataField",
    dateFormat: "utcISOString",
    description: description,
    displayFormat: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    },
    hideOptionalLabel: true,
    label: displayName,
    onChange: (date, isoDate) => {
      if (isoDate) {
        onChange(dataKey, isoDate);
      } else {
        onRemove(dataKey);
      }
    },
    placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataFieldSetDate),
    value: typeof dataValue === 'string' ? Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["convertISOStringToUTCDate"])(dataValue) : undefined
  });
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(DateMetadataField));

/***/ }),

/***/ "./src/features/metadata-instance-fields/DateMetadataField.scss":
/*!**********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/DateMetadataField.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/EnumMetadataField.js":
/*!********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/EnumMetadataField.js ***!
  \********************************************************************/
/*! exports provided: EnumMetadataFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumMetadataFieldBase", function() { return EnumMetadataField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/label/Label */ "./src/components/label/Label.tsx");
/* harmony import */ var _components_select_field_SingleSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/select-field/SingleSelectField */ "./src/components/select-field/SingleSelectField.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _EnumMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EnumMetadataField.scss */ "./src/features/metadata-instance-fields/EnumMetadataField.scss");
/* harmony import */ var _EnumMetadataField_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EnumMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__);







const EnumMetadataField = _ref => {
  let {
    blurExceptionClassNames,
    dataKey,
    dataValue,
    displayName,
    description,
    intl,
    onChange,
    onRemove,
    options = []
  } = _ref;
  const selectOptions = options.map(option => ({
    displayText: option.key,
    value: option.key,
    isSelectable: true
  }));
  const defaultValue = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataFieldSelectValue);
  selectOptions.unshift({
    displayText: defaultValue,
    value: defaultValue,
    isSelectable: false
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-EnumMetadataField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: displayName
  }, !!description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "bdl-EnumMetadataField-desc"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_select_field_SingleSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blurExceptionClassNames: blurExceptionClassNames,
    isEscapedWithReference: true,
    isScrollable: true,
    onChange: option => {
      if (option.isSelectable) {
        onChange(dataKey, option.value);
      } else if (onRemove) {
        onRemove(dataKey);
      }
    },
    options: selectOptions,
    selectedValue: // Conditional to make flow happy, dataValue should never be an array
    Array.isArray(dataValue) ? dataValue.join(', ') : dataValue || defaultValue
  })));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(EnumMetadataField));

/***/ }),

/***/ "./src/features/metadata-instance-fields/EnumMetadataField.scss":
/*!**********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/EnumMetadataField.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/FloatMetadataField.js":
/*!*********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/FloatMetadataField.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextMetadataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextMetadataField */ "./src/features/metadata-instance-fields/TextMetadataField.js");
/* harmony import */ var _validateMetadataField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateMetadataField */ "./src/features/metadata-instance-fields/validateMetadataField.js");




const FloatMetadataField = _ref => {
  let {
    dataKey,
    dataValue,
    displayName,
    description,
    error,
    onChange,
    onRemove,
    type
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextMetadataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dataKey: dataKey,
    dataValue: dataValue,
    description: description,
    displayName: displayName,
    error: error,
    onChange: (key, value) => {
      if (Object(_validateMetadataField__WEBPACK_IMPORTED_MODULE_2__["isValidValue"])(type, value)) {
        onChange(key, value);
      }
    },
    onRemove: onRemove
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FloatMetadataField);

/***/ }),

/***/ "./src/features/metadata-instance-fields/IntegerMetadataField.js":
/*!***********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/IntegerMetadataField.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextMetadataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextMetadataField */ "./src/features/metadata-instance-fields/TextMetadataField.js");
/* harmony import */ var _validateMetadataField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateMetadataField */ "./src/features/metadata-instance-fields/validateMetadataField.js");




const IntegerMetadataField = _ref => {
  let {
    dataKey,
    dataValue,
    displayName,
    description,
    error,
    onChange,
    onRemove,
    type
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextMetadataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dataKey: dataKey,
    dataValue: dataValue,
    description: description,
    displayName: displayName,
    error: error,
    onChange: (key, value) => {
      if (Object(_validateMetadataField__WEBPACK_IMPORTED_MODULE_2__["isValidValue"])(type, value)) {
        onChange(key, value);
      }
    },
    onRemove: onRemove
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IntegerMetadataField);

/***/ }),

/***/ "./src/features/metadata-instance-fields/MetadataField.js":
/*!****************************************************************!*\
  !*** ./src/features/metadata-instance-fields/MetadataField.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _TextMetadataField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextMetadataField */ "./src/features/metadata-instance-fields/TextMetadataField.js");
/* harmony import */ var _EnumMetadataField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnumMetadataField */ "./src/features/metadata-instance-fields/EnumMetadataField.js");
/* harmony import */ var _DateMetadataField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateMetadataField */ "./src/features/metadata-instance-fields/DateMetadataField.js");
/* harmony import */ var _FloatMetadataField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FloatMetadataField */ "./src/features/metadata-instance-fields/FloatMetadataField.js");
/* harmony import */ var _IntegerMetadataField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IntegerMetadataField */ "./src/features/metadata-instance-fields/IntegerMetadataField.js");
/* harmony import */ var _MultiSelectMetadataField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MultiSelectMetadataField */ "./src/features/metadata-instance-fields/MultiSelectMetadataField.js");
/* harmony import */ var _ReadOnlyMetadataField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReadOnlyMetadataField */ "./src/features/metadata-instance-fields/ReadOnlyMetadataField.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/features/metadata-instance-fields/constants.js");













const MetadataField = _ref => {
  let {
    blurExceptionClassNames,
    dataKey,
    dataValue,
    displayName,
    description,
    error,
    isHidden,
    canEdit,
    onChange,
    onRemove,
    options,
    type
  } = _ref;

  if (isHidden) {
    return null;
  }

  if (!canEdit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ReadOnlyMetadataField__WEBPACK_IMPORTED_MODULE_9__["default"], {
      dataValue: dataValue,
      description: description,
      displayName: displayName,
      type: type
    });
  }

  if (!onChange || !onRemove) {
    throw new Error('Need to have onChange and onRemove');
  }

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_STRING"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextMetadataField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_FLOAT"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FloatMetadataField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        error: error,
        onChange: onChange,
        onRemove: onRemove,
        type: type
      });

    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_INTEGER"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_IntegerMetadataField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        error: error,
        onChange: onChange,
        onRemove: onRemove,
        type: type
      });

    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_ENUM"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EnumMetadataField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        blurExceptionClassNames: blurExceptionClassNames,
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_MULTISELECT"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultiSelectMetadataField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        blurExceptionClassNames: blurExceptionClassNames,
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove,
        options: options
      });

    case _constants__WEBPACK_IMPORTED_MODULE_11__["FIELD_TYPE_DATE"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DateMetadataField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dataKey: dataKey,
        dataValue: dataValue,
        description: description,
        displayName: displayName,
        onChange: onChange,
        onRemove: onRemove
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: type
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_10__["default"].invalidMetadataFieldType));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MetadataField);

/***/ }),

/***/ "./src/features/metadata-instance-fields/MultiSelectMetadataField.js":
/*!***************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/MultiSelectMetadataField.js ***!
  \***************************************************************************/
/*! exports provided: MultiSelectMetadataFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectMetadataFieldBase", function() { return MultiSelectMetadataField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/label/Label */ "./src/components/label/Label.tsx");
/* harmony import */ var _components_select_field_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/select-field/MultiSelectField */ "./src/components/select-field/MultiSelectField.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _MultiSelectMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultiSelectMetadataField.scss */ "./src/features/metadata-instance-fields/MultiSelectMetadataField.scss");
/* harmony import */ var _MultiSelectMetadataField_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MultiSelectMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__);







const MultiSelectMetadataField = _ref => {
  let {
    blurExceptionClassNames,
    dataKey,
    dataValue,
    displayName,
    description,
    onChange,
    onRemove,
    options = []
  } = _ref;
  const placeholder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataFieldMultiSelectValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-MultiSelectMetadataField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: displayName
  }, !!description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "bdl-MultiSelectMetadataField-desc"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_select_field_MultiSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blurExceptionClassNames: blurExceptionClassNames,
    isEscapedWithReference: true,
    isScrollable: true,
    onChange: selectedOptions => {
      if (selectedOptions.length) {
        onChange(dataKey, selectedOptions.map(_ref2 => {
          let {
            value
          } = _ref2;
          return value;
        }));
      } else {
        onRemove(dataKey);
      }
    },
    options: options.map(option => ({
      displayText: option.key,
      value: option.key
    })),
    placeholder: placeholder,
    selectedValues: dataValue
  })));
};


/* harmony default export */ __webpack_exports__["default"] = (MultiSelectMetadataField);

/***/ }),

/***/ "./src/features/metadata-instance-fields/MultiSelectMetadataField.scss":
/*!*****************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/MultiSelectMetadataField.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/ReadOnlyMetadataField.js":
/*!************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/ReadOnlyMetadataField.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/features/metadata-instance-fields/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _ReadOnlyMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadOnlyMetadataField.scss */ "./src/features/metadata-instance-fields/ReadOnlyMetadataField.scss");
/* harmony import */ var _ReadOnlyMetadataField_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReadOnlyMetadataField_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const ReadOnlyMetadataField = _ref => {
  let {
    dataValue,
    description,
    displayName,
    type
  } = _ref;
  let value = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "i"
  }, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataFieldNoValue));

  if (dataValue || typeof dataValue === 'number') {
    if (typeof dataValue === 'string' && type === _constants__WEBPACK_IMPORTED_MODULE_3__["FIELD_TYPE_DATE"]) {
      value = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], {
        day: "numeric",
        month: "long",
        value: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["convertISOStringToUTCDate"])(dataValue),
        year: "numeric"
      });
    } else if (Array.isArray(dataValue)) {
      value = dataValue.join(', ');
    } else {
      value = dataValue;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dl", {
    className: "bdl-ReadOnlyMetadataField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dt", null, displayName), !!description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "bdl-ReadOnlyMetadataField-desc"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, value));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyMetadataField);

/***/ }),

/***/ "./src/features/metadata-instance-fields/ReadOnlyMetadataField.scss":
/*!**************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/ReadOnlyMetadataField.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/TextMetadataField.js":
/*!********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/TextMetadataField.js ***!
  \********************************************************************/
/*! exports provided: TextMetadataFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMetadataFieldBase", function() { return TextMetadataField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/text-input */ "./src/components/text-input/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/metadata-instance-fields/messages.js");
/* harmony import */ var _TextMetadataField_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextMetadataField.scss */ "./src/features/metadata-instance-fields/TextMetadataField.scss");
/* harmony import */ var _TextMetadataField_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TextMetadataField_scss__WEBPACK_IMPORTED_MODULE_4__);






const TextMetadataField = _ref => {
  let {
    dataKey,
    dataValue,
    displayName,
    description,
    error,
    intl,
    onChange,
    onRemove,
    type = 'text'
  } = _ref;
  let value = '';

  if (typeof dataValue === 'number') {
    value = dataValue;
  } else if (dataValue) {
    value = dataValue;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bdl-TextMetadataField",
    description: description,
    error: error,
    hideOptionalLabel: true,
    label: displayName,
    name: dataKey,
    onChange: event => {
      const currentTarget = event.currentTarget;

      if (currentTarget.value) {
        onChange(dataKey, currentTarget.value);
      } else {
        onRemove(dataKey);
      }
    },
    placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].metadataFieldSetValue),
    type: type,
    value: value
  });
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(TextMetadataField));

/***/ }),

/***/ "./src/features/metadata-instance-fields/TextMetadataField.scss":
/*!**********************************************************************!*\
  !*** ./src/features/metadata-instance-fields/TextMetadataField.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/metadata-instance-fields/constants.js":
/*!************************************************************!*\
  !*** ./src/features/metadata-instance-fields/constants.js ***!
  \************************************************************/
/*! exports provided: FIELD_TYPE_DATE, FIELD_TYPE_ENUM, FIELD_TYPE_INTEGER, FIELD_TYPE_FLOAT, FIELD_TYPE_MULTISELECT, FIELD_TYPE_STRING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_DATE", function() { return FIELD_TYPE_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_ENUM", function() { return FIELD_TYPE_ENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_INTEGER", function() { return FIELD_TYPE_INTEGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_FLOAT", function() { return FIELD_TYPE_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_MULTISELECT", function() { return FIELD_TYPE_MULTISELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD_TYPE_STRING", function() { return FIELD_TYPE_STRING; });
const FIELD_TYPE_DATE = 'date';
const FIELD_TYPE_ENUM = 'enum';
const FIELD_TYPE_INTEGER = 'integer';
const FIELD_TYPE_FLOAT = 'float';
const FIELD_TYPE_MULTISELECT = 'multiSelect';
const FIELD_TYPE_STRING = 'string';

/***/ }),

/***/ "./src/features/metadata-instance-fields/messages.js":
/*!***********************************************************!*\
  !*** ./src/features/metadata-instance-fields/messages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  customAdd: {
    "id": "boxui.metadataInstanceFields.customAdd",
    "defaultMessage": "Add"
  },
  customRemove: {
    "id": "boxui.metadataInstanceFields.customRemove",
    "defaultMessage": "Remove"
  },
  invalidMetadataFieldType: {
    "id": "boxui.metadataInstanceFields.invalidMetadataFieldType",
    "defaultMessage": "Invalid metadata field type!"
  },
  metadataFieldNoValue: {
    "id": "boxui.metadataInstanceFields.fieldNoValue",
    "defaultMessage": "No Value"
  },
  metadataFieldSelectValue: {
    "id": "boxui.metadataInstanceFields.fieldSelectValue",
    "defaultMessage": "Select Value"
  },
  metadataFieldMultiSelectValue: {
    "id": "boxui.metadataInstanceFields.fieldMultiSelectValue",
    "defaultMessage": "Select Values"
  },
  metadataFieldSetValue: {
    "id": "boxui.metadataInstanceFields.fieldSetValue",
    "defaultMessage": "Set Value"
  },
  metadataFieldSetDate: {
    "id": "boxui.metadataInstanceFields.fieldSetDate",
    "defaultMessage": "Set Date"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/metadata-instance-fields/validateMetadataField.js":
/*!************************************************************************!*\
  !*** ./src/features/metadata-instance-fields/validateMetadataField.js ***!
  \************************************************************************/
/*! exports provided: isValidValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidValue", function() { return isValidValue; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/features/metadata-instance-fields/constants.js");

const floatRegex = /^[-+]?[0-9]*\.?[0-9]*$/;
const integerRegex = /^[-+]?[0-9]+$/;

const floatValidator = value => !!value.match(floatRegex);

const integerValidator = value => !!value.match(integerRegex);

const isValidValue = (type, value) => {
  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_FLOAT"] && typeof value === 'string') {
    return floatValidator(value);
  }

  if (type === _constants__WEBPACK_IMPORTED_MODULE_0__["FIELD_TYPE_INTEGER"] && typeof value === 'string') {
    return integerValidator(value);
  }

  return true;
}; // eslint-disable-next-line import/prefer-default-export




/***/ }),

/***/ "./src/icon/fill/Search16.tsx":
/*!************************************!*\
  !*** ./src/icon/fill/Search16.tsx ***!
  \************************************/
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

const Search16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M6.994 1a5.994 5.994 0 014.906 9.438l2.807 2.807a1 1 0 010 1.415l-.047.047a1 1 0 01-1.415 0L10.438 11.9A5.994 5.994 0 116.994 1zm0 1.998a3.996 3.996 0 100 7.992 3.996 3.996 0 000-7.992z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Search16);

/***/ }),

/***/ "./src/icons/general/IconAddMetadataEmptyState.tsx":
/*!*********************************************************!*\
  !*** ./src/icons/general/IconAddMetadataEmptyState.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconAddMetadataEmptyState = _ref => {
  let {
    className = '',
    color = '#0061D5',
    title,
    width = 140
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-add-metadata-empty-state ${className}`,
    title: title,
    viewBox: "0 0 140 105",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M92 1.134V.492a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-90.5 83.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629A1.005 1.005 0 0 1 1.134 86H.49a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm136 5.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-29-78v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-80 3.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-5.563 8.075v-.402a.313.313 0 0 1 .625 0v.402a.628.628 0 0 1 .23.229h.401c.17 0 .307.144.307.312a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.625.004v-.406a.628.628 0 0 1-.228-.229h-.402A.313.313 0 0 1 22 24.25c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm-11.5 79v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.624.004v-.406a.628.628 0 0 1-.23-.228h-.401a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228z",
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17 54c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H23.992C20.131 61 17 57.858 17 54zm-6 20c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H17.992C14.131 81 11 77.858 11 74zM5 94c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H11.992C8.131 101 5 97.858 5 94z",
    fill: color,
    fillOpacity: ".1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M130 61a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-6 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-6 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14z",
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M117.944 95.189l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935zm12-40l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935z",
    fill: "#FFF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M25 38.49c0-.823.668-1.49 1.509-1.49H54.77c.833 0 1.788.605 2.139 1.365l3.207 6.942c.348.754-.036 1.365-.86 1.365H26.491c-.824 0-1.491-.665-1.491-1.49V38.49z",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M27 40.49c0-.823.668-1.49 1.494-1.49h25.164c.825 0 1.751.62 2.07 1.386l2.869 6.9c.318.766-.096 1.386-.933 1.386H28.51A1.498 1.498 0 0 1 27 47.182V40.49z",
    fill: "#22A7F0",
    fillOpacity: ".1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    fill: "#FFF",
    height: "53.197",
    rx: "1.5",
    stroke: color,
    strokeWidth: "2",
    width: "80",
    x: "25",
    y: "43"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M27 82.214c0-.827.657-1.34 1.475-1.185 0 0 3.614 1.268 23.858 1.268 12.585 0 18.165 3.312 25.334 3.312 14.499 0 23.954-4.331 23.954-4.331.762-.31 1.379.115 1.379.936v10.284c0 .827-.68 1.497-1.501 1.497H28.501A1.503 1.503 0 0 1 27 92.498V82.214z",
    fill: color,
    fillOpacity: ".1"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAddMetadataEmptyState);

/***/ }),

/***/ "./src/icons/general/IconAlertCircle.tsx":
/*!***********************************************!*\
  !*** ./src/icons/general/IconAlertCircle.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconAlertCircle = _ref => {
  let {
    className = '',
    color = '#FFFFFF',
    height = 20,
    title,
    width = 20
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-alert-circle ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 20 20",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "stroke-color",
    cx: "9",
    cy: "9",
    r: "9",
    stroke: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: "6",
    rx: "1",
    width: "2",
    x: "8",
    y: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "fill-color",
    cx: "9",
    cy: "13",
    fill: color,
    r: "1"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAlertCircle);

/***/ }),

/***/ "./src/icons/general/IconCheck.tsx":
/*!*****************************************!*\
  !*** ./src/icons/general/IconCheck.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconCheck = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-check ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCheck);

/***/ }),

/***/ "./src/icons/general/IconEdit.tsx":
/*!****************************************!*\
  !*** ./src/icons/general/IconEdit.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconEdit = _ref => {
  let {
    className = '',
    color = '#767676',
    height = 14,
    title,
    width = 14
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-edit ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M3.21 7.89l6.47-6.48a2 2 0 0 1 2.88 2.78h-.05L6 10.72 3.21 7.89zM2.24 9l2.83 2.83L1.67 13c-.52.18-.79-.1-.62-.61z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEdit);

/***/ }),

/***/ "./src/icons/general/IconMetadataColored.tsx":
/*!***************************************************!*\
  !*** ./src/icons/general/IconMetadataColored.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconMetadataColored = _ref => {
  let {
    className = '',
    color,
    title,
    type,
    width = 16,
    height = 16
  } = _ref;
  let fill;

  if (color) {
    fill = color;
  } else if (type === 'cascade') {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlPurpleRain"];
  } else if (type === 'default') {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"];
  } else {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-metadata ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-2.515-5.879L6.2 7.263l1.376 2.202a.5.5 0 0 0 .848 0L9.8 7.263l.715 2.858a.5.5 0 0 0 .97-.242l-1-4a.5.5 0 0 0-.909-.144L8 8.257 6.424 5.735a.5.5 0 0 0-.91.144l-1 4a.5.5 0 0 0 .971.242z",
    fill: fill,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMetadataColored);

/***/ }),

/***/ "./src/icons/general/IconMinusThin.tsx":
/*!*********************************************!*\
  !*** ./src/icons/general/IconMinusThin.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconMinusThin = _ref => {
  let {
    className = '',
    color = '#222',
    height = 1,
    title,
    width = 9
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-minus-thin ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 9 1",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M0 0h9v1H0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMinusThin);

/***/ }),

/***/ "./src/icons/general/IconPlusThin.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconPlusThin.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconPlusThin = _ref => {
  let {
    className = '',
    color = '#222',
    height = 9,
    title,
    width = 9
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-plus-thin ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 9 9",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M5 4V0H4v4H0v1h4v4h1V5h4V4H5z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPlusThin);

/***/ })

}]);
//# sourceMappingURL=metadata-sidebar.js.map