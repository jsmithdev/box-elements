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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar"],{

/***/ "./src/components/checkbox/Checkbox.scss":
/*!***********************************************!*\
  !*** ./src/components/checkbox/Checkbox.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/checkbox/Checkbox.tsx":
/*!**********************************************!*\
  !*** ./src/components/checkbox/Checkbox.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckboxTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxTooltip */ "./src/components/checkbox/CheckboxTooltip.tsx");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkbox.scss */ "./src/components/checkbox/Checkbox.scss");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["className", "description", "fieldLabel", "hideLabel", "id", "isChecked", "isDisabled", "label", "name", "onChange", "subsection", "tooltip"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Checkbox = _ref => {
  let {
    className = '',
    description,
    fieldLabel,
    hideLabel,
    id,
    isChecked,
    isDisabled,
    label,
    name,
    onChange,
    subsection,
    tooltip // @TODO: eventually remove `rest` in favor of explicit props

  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const generatedID = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('checkbox')).current; // use passed-in ID from props; otherwise generate one

  const inputID = id || generatedID;
  const checkboxAndLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
    "aria-describedby": description ? `description_${inputID}` : '',
    checked: isChecked,
    disabled: isDisabled,
    id: inputID,
    name: name,
    onChange: onChange,
    type: "checkbox"
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "checkbox-pointer-target"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-Checkbox-labelTooltipWrapper', {
      'accessibility-hidden': hideLabel
    })
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    htmlFor: inputID
  }, label), tooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CheckboxTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tooltip: tooltip
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('checkbox-container', className, {
      'is-disabled bdl-is-disabled': isDisabled
    })
  }, fieldLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "label"
  }, fieldLabel), checkboxAndLabel, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: `description_${inputID}`,
    className: "checkbox-description"
  }, description) : null, subsection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-subsection"
  }, subsection) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/components/checkbox/CheckboxField.tsx":
/*!***************************************************!*\
  !*** ./src/components/checkbox/CheckboxField.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./src/components/checkbox/Checkbox.tsx");
const _excluded = ["field"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CheckboxField = _ref => {
  let {
    field
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], rest);
  }

  const {
    value
  } = field;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, field, rest, {
    isChecked: !!value
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxField);

/***/ }),

/***/ "./src/components/checkbox/CheckboxTooltip.tsx":
/*!*****************************************************!*\
  !*** ./src/components/checkbox/CheckboxTooltip.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconInfo */ "./src/icons/general/IconInfo.tsx");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");




const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  checkboxTooltipIconInfoText: {
    "id": "boxui.checkboxTooltip.iconInfoText",
    "defaultMessage": "Info"
  }
});

const CheckboxTooltip = _ref => {
  let {
    tooltip
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-tooltip-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "info-tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], messages.checkboxTooltipIconInfoText),
    width: 16
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxTooltip);

/***/ }),

/***/ "./src/components/checkbox/index.ts":
/*!******************************************!*\
  !*** ./src/components/checkbox/index.ts ***!
  \******************************************/
/*! exports provided: default, CheckboxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./src/components/checkbox/Checkbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CheckboxField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField */ "./src/components/checkbox/CheckboxField.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxField", function() { return _CheckboxField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/contact-datalist-item/ContactDatalistItem.scss":
/*!***********************************************************************!*\
  !*** ./src/components/contact-datalist-item/ContactDatalistItem.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/contact-datalist-item/ContactDatalistItem.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/contact-datalist-item/ContactDatalistItem.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avatar */ "./src/components/avatar/index.ts");
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalist-item */ "./src/components/datalist-item/index.ts");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactDatalistItem.scss */ "./src/components/contact-datalist-item/ContactDatalistItem.scss");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["getContactAvatarUrl", "id", "isExternal", "name", "showAvatar", "subtitle"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ContactDatalistItem extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "isMounted", false);

    _defineProperty(this, "getAvatarUrlHandler", avatarUrl => {
      if (this.isMounted) {
        this.setState({
          avatarUrl
        });
      }
    });

    this.state = {
      avatarUrl: undefined
    };
  }

  /**
   * Gets the avatar URL for the user from the getContactAvatarUrl prop
   *
   * @return {void}
   */
  getAvatarUrl() {
    const {
      getContactAvatarUrl,
      id
    } = this.props;
    Promise.resolve(getContactAvatarUrl && id ? getContactAvatarUrl({
      id
    }) : undefined).then(this.getAvatarUrlHandler).catch(() => {// noop
    });
  }

  componentDidMount() {
    this.isMounted = true;
    this.getAvatarUrl();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _this$props = this.props,
          {
      getContactAvatarUrl,
      id,
      isExternal,
      name,
      showAvatar,
      subtitle
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      avatarUrl
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      className: "contact-data-list-item"
    }, rest), showAvatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "contact-avatar",
      id: id,
      name: name,
      isExternal: isExternal,
      shouldShowExternal: true,
      avatarUrl: avatarUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "contact-name-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "contact-text contact-name"
    }, name), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "contact-text contact-sub-name"
    }, subtitle)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContactDatalistItem);

/***/ }),

/***/ "./src/components/draft-js-editor/DraftJSEditor.js":
/*!*********************************************************!*\
  !*** ./src/components/draft-js-editor/DraftJSEditor.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js/dist/Draft.css */ "./node_modules/draft-js/dist/Draft.css");
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DraftJSEditor.scss */ "./src/components/draft-js-editor/DraftJSEditor.scss");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const OptionalFormattedMessage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
  className: "bdl-Label-optional"
}, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].optional), ")");

class DraftJSEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleChange", editorState => {
      const {
        onChange
      } = this.props;
      onChange(editorState);
    });

    _defineProperty(this, "handleBlur", editorState => {
      const {
        onBlur
      } = this.props;
      onBlur(editorState);
    });

    _defineProperty(this, "handleReturn", event => {
      const {
        onReturn,
        inputProps
      } = this.props;

      if (onReturn && !inputProps['aria-activedescendant']) {
        // Return 'handled' tells DraftJS Editor to not handle return key event,
        // return 'not-handled' tells DraftJS Editor to continue handle the return key event.
        // We encapsulate this DraftJS Editor specific contract here, and use true/fase
        // to indicate whether to let DraftJS Editor handle return event or not in the upper level.
        return onReturn(event) ? 'handled' : 'not-handled';
      }

      return 'not-handled';
    });

    _defineProperty(this, "labelID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('label'));

    _defineProperty(this, "descriptionID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('description'));
  }

  render() {
    const {
      editorState,
      error,
      hideLabel,
      inputProps,
      isDisabled,
      isRequired,
      label,
      description,
      onFocus,
      placeholder
    } = this.props;
    const {
      handleBlur,
      handleChange
    } = this;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'draft-js-editor': true,
      'is-disabled bdl-is-disabled': isDisabled,
      'show-error': !!error
    });
    let a11yProps = {};

    if (inputProps.role) {
      a11yProps = {
        ariaActiveDescendantID: inputProps['aria-activedescendant'],
        ariaAutoComplete: inputProps['aria-autocomplete'],
        ariaExpanded: inputProps['aria-expanded'],
        ariaOwneeID: inputProps['aria-owns'],
        ariaMultiline: true,
        role: 'textbox'
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-Label', {
        'accessibility-hidden': hideLabel
      }),
      id: this.labelID
    }, label, !isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OptionalFormattedMessage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "accessibility-hidden screenreader-description",
      id: this.descriptionID
    }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isShown: !!error,
      position: "bottom-left",
      text: error ? error.message : '',
      theme: "error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](draft_js__WEBPACK_IMPORTED_MODULE_4__["Editor"], _extends({}, a11yProps, {
      ariaLabelledBy: this.labelID,
      ariaDescribedBy: this.descriptionID,
      editorState: editorState,
      handleReturn: this.handleReturn,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: onFocus,
      placeholder: placeholder,
      readOnly: isDisabled,
      stripPastedStyles: true
    })))));
  }

}

_defineProperty(DraftJSEditor, "defaultProps", {
  inputProps: {},
  isRequired: false,
  isFocused: false
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSEditor);

/***/ }),

/***/ "./src/components/draft-js-editor/DraftJSEditor.scss":
/*!***********************************************************!*\
  !*** ./src/components/draft-js-editor/DraftJSEditor.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/draft-js-editor/index.js":
/*!*************************************************!*\
  !*** ./src/components/draft-js-editor/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftJSEditor */ "./src/components/draft-js-editor/DraftJSEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js":
/*!******************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftJSMentionSelectorCore */ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js");
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DraftMentionItem */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");
/* harmony import */ var _form_FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/FormInput */ "./src/components/form-elements/form/FormInput.js");
/* harmony import */ var _input_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-messages */ "./src/components/form-elements/input-messages.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Scans a Draft ContentBlock for entity ranges, so they can be annotated
 * @see docs at {@link https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator}
 * @param {ContentBlock} contentBlock
 * @param {function} callback
 * @param {ContentState} contentState
 */
const mentionStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    const ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

class DraftJSMentionSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleBlur", event => {
      if (this.props.validateOnBlur && this.containerEl && event.relatedTarget instanceof Node && !this.containerEl.contains(event.relatedTarget)) {
        this.checkValidity();
      }
    });

    _defineProperty(this, "handleFocus", event => {
      const {
        onFocus
      } = this.props;

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(this, "handleChange", nextEditorState => {
      const {
        internalEditorState
      } = this.state;
      const {
        onChange
      } = this.props;
      onChange(nextEditorState);

      if (internalEditorState) {
        this.setState({
          internalEditorState: nextEditorState
        });
      }
    });

    _defineProperty(this, "handleValidityStateUpdateHandler", () => {
      const {
        isTouched
      } = this.state;

      if (!isTouched) {
        return;
      }

      const error = this.getErrorFromValidityState();
      this.setState({
        error
      });
    });

    _defineProperty(this, "checkValidity", () => {
      this.handleValidityStateUpdateHandler();
    });

    const mentionDecorator = new draft_js__WEBPACK_IMPORTED_MODULE_1__["CompositeDecorator"]([{
      strategy: mentionStrategy,
      component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_4__["default"]
    }]); // @NOTE (smotraghi 2017-05-30):
    // This component might be either own its EditorState (in which case it lives in `this.state.internalEditorState`)
    // or be a controlled component whose EditorState is passed in via the `editorState` prop.
    // If `props.editorState` is set, `internalEditorState` is `null`,
    // otherwise we initialize it here

    this.state = {
      contacts: [],
      isTouched: false,
      internalEditorState: props.editorState ? null : draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty(mentionDecorator),
      error: null
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const {
      contacts
    } = nextProps;
    return contacts ? {
      contacts
    } : null;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      internalEditorState: prevInternalEditorState
    } = prevState;
    const {
      internalEditorState
    } = this.state;
    const {
      editorState: prevEditorStateFromProps
    } = prevProps;
    const {
      editorState
    } = this.props; // Determine whether we're working with the internal editor state or
    // external editor state passed in from props

    const prevEditorState = prevInternalEditorState || prevEditorStateFromProps;
    const currentEditorState = internalEditorState || editorState; // Only handle isTouched state transitions and check validity if the
    // editorState references are different. This is to avoid getting stuck
    // in an infinite loop of checking validity because checkValidity always
    // calls setState({ error })

    if (prevEditorState && currentEditorState && prevEditorState !== currentEditorState) {
      const newState = this.getDerivedStateFromEditorState(currentEditorState, prevEditorState);

      if (newState) {
        this.setState(newState, this.checkValidityIfAllowed);
      } else {
        this.checkValidityIfAllowed();
      }
    }
  }

  getDerivedStateFromEditorState(currentEditorState, previousEditorState) {
    const isPreviousEditorStateEmpty = this.isEditorStateEmpty(previousEditorState);
    const isCurrentEditorStateEmpty = this.isEditorStateEmpty(currentEditorState);
    const isNewEditorState = isCurrentEditorStateEmpty && !isPreviousEditorStateEmpty;
    const isEditorStateDirty = isPreviousEditorStateEmpty && !isCurrentEditorStateEmpty;
    let newState = null; // Detect case where controlled EditorState is created anew and empty.
    // If next editorState is empty and the current editorState is not empty
    // that means it is a new empty state and this component should not be marked dirty

    if (isNewEditorState) {
      newState = {
        isTouched: false,
        error: null
      };
    } else if (isEditorStateDirty) {
      // Detect case where controlled EditorState has been made dirty
      // If the current editorState is empty and the next editorState is not
      // empty then this is the first interaction so mark this component dirty
      newState = {
        isTouched: true
      };
    }

    return newState;
  }

  checkValidityIfAllowed() {
    const {
      validateOnBlur
    } = this.props;

    if (!validateOnBlur) {
      this.checkValidity();
    }
  }

  isEditorStateEmpty(editorState) {
    const text = editorState.getCurrentContent().getPlainText().trim();
    const lastChangeType = editorState.getLastChangeType();
    return text.length === 0 && lastChangeType === null;
  }
  /**
   * @returns {string}
   */


  getErrorFromValidityState() {
    const {
      editorState: externalEditorState,
      isRequired,
      maxLength,
      minLength
    } = this.props;
    const {
      internalEditorState
    } = this.state; // manually check for content length if isRequired is true

    const editorState = internalEditorState || externalEditorState;
    const {
      length
    } = editorState.getCurrentContent().getPlainText().trim();

    if (isRequired && !length) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["valueMissing"]();
    }

    if (typeof minLength !== 'undefined' && length < minLength) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["tooShort"](minLength);
    }

    if (typeof maxLength !== 'undefined' && length > maxLength) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["tooLong"](maxLength);
    }

    return null;
  }

  render() {
    const {
      className = '',
      contactsLoaded,
      editorState: externalEditorState,
      hideLabel,
      isDisabled,
      isRequired,
      label,
      description,
      mentionTriggers,
      name,
      onMention,
      placeholder,
      selectorRow,
      startMentionMessage,
      onReturn
    } = this.props;
    const {
      contacts,
      internalEditorState,
      error
    } = this.state;
    const {
      handleBlur,
      handleChange,
      handleFocus
    } = this;
    const editorState = internalEditorState || externalEditorState;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      ref: containerEl => {
        this.containerEl = containerEl;
      },
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_FormInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: name,
      onValidityStateUpdate: this.handleValidityStateUpdateHandler
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_3__["default"], {
      contacts: contacts,
      contactsLoaded: contactsLoaded,
      editorState: editorState,
      error: error,
      hideLabel: hideLabel,
      isDisabled: isDisabled,
      isRequired: isRequired,
      label: label,
      description: description,
      mentionTriggers: mentionTriggers,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      onMention: onMention,
      onReturn: onReturn,
      placeholder: placeholder,
      selectorRow: selectorRow,
      startMentionMessage: startMentionMessage
    })));
  }

}

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  isRequired: false,
  onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  validateOnBlur: true
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datalist-item */ "./src/components/datalist-item/index.ts");
/* harmony import */ var _draft_js_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../draft-js-editor */ "./src/components/draft-js-editor/index.js");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selector-dropdown */ "./src/components/selector-dropdown/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/components/form-elements/draft-js-mention-selector/utils.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/components/form-elements/draft-js-mention-selector/messages.js");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MentionSelector.scss */ "./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MentionSelector_scss__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["item"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const DefaultSelectorRow = _ref => {
  let {
    item = {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_4__["default"], rest, item.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "dropdown-secondary-text"
  }, item.email));
};

const DefaultStartMentionMessage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].startMention);

const MentionStartState = _ref2 => {
  let {
    message
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    role: "alert",
    className: "mention-start-state"
  }, message);
};

class DraftJSMentionSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMention", () => {
      const {
        onMention
      } = this.props;
      const {
        activeMention
      } = this.state;

      if (onMention) {
        onMention(activeMention ? activeMention.mentionString : '');
      }
    });

    _defineProperty(this, "handleContactSelected", index => {
      const {
        contacts
      } = this.props;
      this.addMention(contacts[index]);
      this.setState({
        activeMention: null,
        isFocused: true
      }, () => {
        this.handleMention();
      });
    });

    _defineProperty(this, "handleBlur", event => {
      const {
        onBlur
      } = this.props;
      this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(this, "handleFocus", event => {
      const {
        onFocus
      } = this.props;
      this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(this, "handleChange", nextEditorState => {
      const {
        onChange
      } = this.props;
      const activeMention = this.getActiveMentionForEditorState(nextEditorState);
      this.setState({
        activeMention
      }, () => {
        if (onChange) {
          onChange(nextEditorState);
        }

        if (activeMention && activeMention.mentionString) {
          this.handleMention();
        }
      });
    });

    _defineProperty(this, "shouldDisplayMentionLookup", () => {
      const {
        contacts
      } = this.props;
      const {
        activeMention
      } = this.state;
      return !!(activeMention && activeMention.mentionString && contacts.length);
    });

    const mentionTriggers = props.mentionTriggers.reduce((prev, current) => `${prev}\\${current}`, '');
    this.state = {
      activeMention: null,
      isFocused: false,
      mentionPattern: new RegExp(`([${mentionTriggers}])([^${mentionTriggers}]*)$`)
    };
  }
  /**
   * Lifecycle method that gets called immediately after an update
   * @param {object} lastProps Props the component is receiving
   * @returns {void}
   */


  componentDidUpdate(prevProps) {
    const {
      contacts: prevContacts
    } = prevProps;
    const {
      contacts: currentContacts
    } = this.props;
    const {
      activeMention
    } = this.state;

    if (activeMention !== null && !currentContacts.length && prevContacts.length !== currentContacts.length) {
      // if empty set of contacts get passed in, set active mention to null
      this.setState({
        activeMention: null
      });
    }
  }
  /**
   * Extracts the active mention from the editor state
   *
   * @param {EditorState} editorState
   * @returns {object}
   */


  getActiveMentionForEditorState(editorState) {
    const {
      mentionPattern
    } = this.state;
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getActiveMentionForEditorState"])(editorState, mentionPattern);
  }
  /**
   * Called on each keypress when a mention is being composed
   * @returns {void}
   */


  /**
   * Inserts a selected mention into the editor
   * @param {object} mention The selected mention to insert
   */
  addMention(mention) {
    const {
      activeMention
    } = this.state;
    const {
      editorState
    } = this.props;
    const editorStateWithLink = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["addMention"])(editorState, activeMention, mention);
    this.setState({
      activeMention: null
    }, () => {
      this.handleChange(editorStateWithLink);
    });
  }
  /**
   * @returns {boolean}
   */


  render() {
    const {
      className,
      contacts,
      contactsLoaded,
      editorState,
      error,
      hideLabel,
      isDisabled,
      isRequired,
      label,
      description,
      onReturn,
      placeholder,
      selectorRow,
      startMentionMessage,
      onMention
    } = this.props;
    const {
      activeMention,
      isFocused
    } = this.state;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('mention-selector-wrapper', className);
    const showMentionStartState = !!(onMention && activeMention && !activeMention.mentionString && isFocused);
    const usersFoundMessage = this.shouldDisplayMentionLookup() ? _objectSpread(_objectSpread({}, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].usersFound), {}, {
      values: {
        usersCount: contacts.length
      }
    }) : _messages__WEBPACK_IMPORTED_MODULE_8__["default"].noUsersFound;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_selector_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSelect: this.handleContactSelected,
      selector: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_draft_js_editor__WEBPACK_IMPORTED_MODULE_5__["default"], {
        editorState: editorState,
        error: error,
        hideLabel: hideLabel,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isRequired: isRequired,
        label: label,
        description: description,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onReturn: onReturn,
        placeholder: placeholder
      })
    }, this.shouldDisplayMentionLookup() ? contacts.map(contact => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](selectorRow, _objectSpread(_objectSpread(_objectSpread({}, selectorRow.props), contact), {}, {
      key: contact.id
    }))) : []), showMentionStartState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MentionStartState, {
      message: startMentionMessage
    }) : null, contactsLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "accessibility-hidden",
      "data-testid": "accessibility-alert",
      role: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], usersFoundMessage)));
  }

}

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  className: '',
  contacts: [],
  isDisabled: false,
  isRequired: false,
  mentionTriggers: _utils__WEBPACK_IMPORTED_MODULE_7__["defaultMentionTriggers"],
  selectorRow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultSelectorRow, null),
  startMentionMessage: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultStartMentionMessage, null)
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionItem */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");



const mentionStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    const ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

const DraftMentionDecorator = new draft_js__WEBPACK_IMPORTED_MODULE_0__["CompositeDecorator"]([{
  strategy: mentionStrategy,
  component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);
/* harmony default export */ __webpack_exports__["default"] = (DraftMentionDecorator);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js":
/*!************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);



const DraftMentionItem = _ref => {
  let {
    contentState,
    entityKey,
    children
  } = _ref;
  let id = '';

  if (entityKey) {
    id = contentState.getEntity(entityKey).getData().id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: `/profile/${id}`
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DraftMentionItem);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");

 // returns data for first mention in a string

const getMentionFromText = text => {
  // RegEx.exec() is stateful, so we create a new regex instance each time
  const mentionRegex = /([@＠﹫])\[([0-9]+):([^\]]+)]/gi;
  const matchArray = mentionRegex.exec(text);

  if (!matchArray) {
    return null;
  }

  const [fullMatch, triggerSymbol, id, name] = matchArray;
  const start = matchArray.index;
  const end = start + fullMatch.length;
  const data = {
    id,
    name,
    content: `${triggerSymbol}${name}`
  };
  return {
    start,
    end,
    data
  };
}; // creates draftjs state with mentions parsed into entities


const createMentionSelectorState = function () {
  let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["ContentState"].createFromText(message);
  let contentBlock = contentState.getFirstBlock();

  while (contentBlock != null) {
    const text = contentBlock.getText();
    const mention = text ? getMentionFromText(text) : null;

    if (mention == null) {
      contentBlock = contentState.getBlockAfter(contentBlock.getKey());
    } else {
      const {
        data,
        start,
        end
      } = mention;
      contentState.createEntity('MENTION', 'IMMUTABLE', data);
      const mentionEntityKey = contentState.getLastCreatedEntityKey();
      const mentionRange = draft_js__WEBPACK_IMPORTED_MODULE_0__["SelectionState"].createEmpty(contentBlock.getKey()).merge({
        anchorOffset: start,
        focusOffset: end
      });
      contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].replaceText(contentState, mentionRange, data.content, null, mentionEntityKey);
      contentBlock = contentState.getBlockForKey(contentBlock.getKey());
    }
  }

  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].createWithContent(contentState, _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (createMentionSelectorState);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/index.js":
/*!*************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/index.js ***!
  \*************************************************************************/
/*! exports provided: addMention, defaultMentionTriggers, defaultMentionPattern, getActiveMentionForEditorState, getFormattedCommentText, default, createMentionSelectorState, DraftMentionDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/form-elements/draft-js-mention-selector/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMention", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["addMention"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMentionTriggers", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["defaultMentionTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMentionPattern", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["defaultMentionPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveMentionForEditorState", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getActiveMentionForEditorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFormattedCommentText", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getFormattedCommentText"]; });

/* harmony import */ var _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftJSMentionSelector */ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMentionSelectorState */ "./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMentionSelectorState", function() { return _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraftMentionDecorator", function() { return _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/messages.js":
/*!****************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/messages.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  startMention: {
    "id": "boxui.draftjs.mentionSelector.startMention",
    "defaultMessage": "Mention someone to notify them"
  },
  noUsersFound: {
    "id": "boxui.draftjs.mentionSelector.noUsersFound",
    "defaultMessage": "No users found"
  },
  usersFound: {
    "id": "boxui.draftjs.mentionSelector.usersFound",
    "defaultMessage": "{usersCount, plural, one {one user found} other {{usersCount} users found}}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/utils.js":
/*!*************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/utils.js ***!
  \*************************************************************************/
/*! exports provided: addMention, defaultMentionTriggers, defaultMentionPattern, getActiveMentionForEditorState, getFormattedCommentText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMention", function() { return addMention; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMentionTriggers", function() { return defaultMentionTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMentionPattern", function() { return defaultMentionPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveMentionForEditorState", function() { return getActiveMentionForEditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedCommentText", function() { return getFormattedCommentText; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);

const defaultMentionTriggers = ['@', '＠', '﹫'];
const defaultMentionTriggersString = defaultMentionTriggers.reduce((prev, current) => `${prev}\\${current}`, '');
const defaultMentionPattern = new RegExp(`([${defaultMentionTriggersString}])([^${defaultMentionTriggersString}]*)$`);
/**
 * Extracts the active mention from the editor state
 */

function getActiveMentionForEditorState(editorState) {
  let mentionPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMentionPattern;
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const startKey = selectionState.getStartKey();
  const activeBlock = contentState.getBlockForKey(startKey);
  const cursorPosition = selectionState.getStartOffset();
  let result = null; // Break the active block into entity ranges.

  activeBlock.findEntityRanges(character => character.getEntity() === null, (start, end) => {
    // Find the active range (is the cursor inside this range?)
    if (start <= cursorPosition && cursorPosition <= end) {
      // Determine if the active range contains a mention.
      const activeRangeText = activeBlock.getText().substr(start, cursorPosition - start);
      const mentionMatch = activeRangeText.match(mentionPattern);

      if (mentionMatch) {
        result = {
          blockID: startKey,
          mentionString: mentionMatch[2],
          mentionTrigger: mentionMatch[1],
          start: start + mentionMatch.index,
          end: cursorPosition
        };
      }
    }

    return null;
  });
  return result;
}
/**
 * Inserts a selected mention into the editor
 */


function addMention(editorState, activeMention, mention) {
  const {
    start,
    end
  } = activeMention || {};
  const {
    id,
    name
  } = mention;
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const preInsertionSelectionState = selectionState.merge({
    anchorOffset: start,
    focusOffset: end
  });
  const textToInsert = `@${name}`;
  const contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', {
    id
  });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const contentStateWithLink = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].replaceText(contentState, preInsertionSelectionState, textToInsert, null, entityKey);
  const spaceOffset = preInsertionSelectionState.getStartOffset() + textToInsert.length;
  const selectionStateForAddingSpace = preInsertionSelectionState.merge({
    anchorOffset: spaceOffset,
    focusOffset: spaceOffset
  });
  const contentStateWithLinkAndExtraSpace = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].insertText(contentStateWithLink, selectionStateForAddingSpace, ' ');
  const editorStateWithLink = draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].push(editorState, contentStateWithLinkAndExtraSpace, 'change-block-type');
  return editorStateWithLink;
}
/**
 * Formats the editor's text such that it will be accepted by the server.
 */


function getFormattedCommentText(editorState) {
  const contentState = editorState.getCurrentContent();
  const blockMap = contentState.getBlockMap();
  const resultStringArr = []; // The API needs to explicitly know if a message contains a mention.

  let hasMention = false; // For all ContentBlocks in the ContentState:

  blockMap.forEach(block => {
    const text = block.getText();
    const blockMapStringArr = []; // Break down the ContentBlock into ranges

    block.findEntityRanges(() => true, (start, end) => {
      const entityKey = block.getEntityAt(start); // If the range is an Entity, format its text eg "@[1:Username]"
      // Otherwise append its text to the block result as-is

      if (entityKey) {
        const entity = contentState.getEntity(entityKey);
        const stringToAdd = `@[${entity.getData().id}:${text.substring(start + 1, end)}]`;
        blockMapStringArr.push(stringToAdd);
        hasMention = true;
      } else {
        blockMapStringArr.push(text.substring(start, end));
      }
    });
    resultStringArr.push(blockMapStringArr.join(''));
  }); // Concatenate the array of block strings with newlines
  // (Each block represents a paragraph)

  return {
    text: resultStringArr.join('\n'),
    hasMention
  };
}



/***/ }),

/***/ "./src/components/form-elements/form/FormInput.js":
/*!********************************************************!*\
  !*** ./src/components/form-elements/form/FormInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class FormInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    const {
      name,
      onValidityStateUpdate
    } = this.props;

    if (this.context.form) {
      this.context.form.registerInput(name, onValidityStateUpdate);
    }
  }

  componentWillUnmount() {
    if (this.context.form) {
      this.context.form.unregisterInput(this.props.name);
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.children);
  }

}

_defineProperty(FormInput, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,

  /** callback called when Form pushed down a new validityState, useful for displaying server validation errors */
  onValidityStateUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /** Input name */
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

_defineProperty(FormInput, "contextTypes", {
  form: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    registerInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    unregisterInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./src/components/form-elements/input-messages.js":
/*!********************************************************!*\
  !*** ./src/components/form-elements/input-messages.js ***!
  \********************************************************/
/*! exports provided: badInput, patternMismatch, tooShort, tooLong, typeMismatchEmail, typeMismatchUrl, valueMissing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badInput", function() { return badInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternMismatch", function() { return patternMismatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooShort", function() { return tooShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooLong", function() { return tooLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchEmail", function() { return typeMismatchEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchUrl", function() { return typeMismatchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueMissing", function() { return valueMissing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const badInput = () => ({
  code: 'badInput',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidInputError)
});

const patternMismatch = () => ({
  code: 'patternMismatch',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidInputError)
});

const tooShort = minLength => ({
  code: 'tooShort',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].minLengthError, {
    values: {
      min: minLength
    }
  }))
});

const tooLong = maxLength => ({
  code: 'tooLong',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].maxLengthError, {
    values: {
      max: maxLength
    }
  }))
});

const typeMismatchEmail = () => ({
  code: 'typeMismatch',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidEmailError)
});

const typeMismatchUrl = () => ({
  code: 'typeMismatch',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidURLError)
});

const valueMissing = () => ({
  code: 'valueMissing',
  message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].requiredFieldError)
});



/***/ }),

/***/ "./src/components/link/LinkButton.tsx":
/*!********************************************!*\
  !*** ./src/components/link/LinkButton.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkBase */ "./src/components/link/LinkBase.tsx");
const _excluded = ["className", "size"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LinkButton = _ref => {
  let {
    className = '',
    size
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkBase__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn', className, {
      'bdl-btn--large': size === 'large'
    })
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ }),

/***/ "./src/components/link/LinkGroup.tsx":
/*!*******************************************!*\
  !*** ./src/components/link/LinkGroup.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// TODO: convert to stateless function
// eslint-disable-next-line react/prefer-stateless-function
class LinkGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      title,
      children,
      className
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: `link-group ${className}`
    }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "link-group-title"
    }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (item, i) => item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: i
    }, item, " ") : null)));
  }

}

_defineProperty(LinkGroup, "defaultProps", {
  title: '',
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (LinkGroup);

/***/ }),

/***/ "./src/components/link/LinkPrimaryButton.tsx":
/*!***************************************************!*\
  !*** ./src/components/link/LinkPrimaryButton.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkButton */ "./src/components/link/LinkButton.tsx");
const _excluded = ["className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LinkPrimaryButton = _ref => {
  let {
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: `btn-primary ${className}`
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkPrimaryButton);

/***/ }),

/***/ "./src/components/link/index.ts":
/*!**************************************!*\
  !*** ./src/components/link/index.ts ***!
  \**************************************/
/*! exports provided: Link, LinkButton, LinkGroup, LinkPrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./src/components/link/Link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkButton */ "./src/components/link/LinkButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LinkGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkGroup */ "./src/components/link/LinkGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkGroup", function() { return _LinkGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkPrimaryButton */ "./src/components/link/LinkPrimaryButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkPrimaryButton", function() { return _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/media/Media.scss":
/*!*****************************************!*\
  !*** ./src/components/media/Media.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/media/Media.tsx":
/*!****************************************!*\
  !*** ./src/components/media/Media.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MediaFigure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaFigure */ "./src/components/media/MediaFigure.tsx");
/* harmony import */ var _MediaBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaBody */ "./src/components/media/MediaBody.tsx");
/* harmony import */ var _MediaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaMenu */ "./src/components/media/MediaMenu.tsx");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["as", "children", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Media = _ref => {
  let {
    as: Wrapper = 'div',
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media', className)
  }, rest), children);
};

Media.Body = _MediaBody__WEBPACK_IMPORTED_MODULE_3__["default"];
Media.Menu = _MediaMenu__WEBPACK_IMPORTED_MODULE_4__["default"];
Media.Figure = _MediaFigure__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/media/MediaBody.tsx":
/*!********************************************!*\
  !*** ./src/components/media/MediaBody.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["className", "children"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MediaBody = _ref => {
  let {
    className,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-body', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MediaBody);

/***/ }),

/***/ "./src/components/media/MediaFigure.tsx":
/*!**********************************************!*\
  !*** ./src/components/media/MediaFigure.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["as", "className", "children"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MediaFigure = _ref => {
  let {
    as: Wrapper = 'div',
    className,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-figure', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MediaFigure);

/***/ }),

/***/ "./src/components/media/MediaMenu.tsx":
/*!********************************************!*\
  !*** ./src/components/media/MediaMenu.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/components/media/messages.tsx");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ "./src/components/menu/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["className", "children", "isDisabled", "dropdownProps", "menuProps", "intl"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 // @ts-ignore TODO: migrate DropdownMenu to typescript






const MediaMenu = _ref => {
  let {
    className,
    children,
    isDisabled = false,
    dropdownProps = {},
    menuProps = {},
    intl
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    constrainToScrollParent: true,
    isRightAligned: true
  }, dropdownProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].menuButtonArialLabel),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-menu', className),
    isDisabled: isDisabled,
    type: _button__WEBPACK_IMPORTED_MODULE_5__["ButtonType"].BUTTON
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_9__["bdlGray50"],
    height: 16,
    width: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_menu__WEBPACK_IMPORTED_MODULE_8__["Menu"], menuProps, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(MediaMenu));

/***/ }),

/***/ "./src/components/media/index.tsx":
/*!****************************************!*\
  !*** ./src/components/media/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./src/components/media/Media.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/media/messages.tsx":
/*!*******************************************!*\
  !*** ./src/components/media/messages.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  menuButtonArialLabel: {
    "id": "boxui.media.menuButtonArialLabel",
    "defaultMessage": "Options"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelectorDropdown.js":
/*!***********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelectorDropdown.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_parseCSV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/parseCSV */ "./src/utils/parseCSV.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label */ "./src/components/label/index.tsx");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selector-dropdown */ "./src/components/selector-dropdown/index.js");
/* harmony import */ var _PillSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PillSelector */ "./src/components/pill-selector-dropdown/PillSelector.js");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PillSelectorDropdown.scss */ "./src/components/pill-selector-dropdown/PillSelectorDropdown.scss");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class PillSelectorDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      inputValue: '',
      isInCompositionMode: false
    });

    _defineProperty(this, "parsePills", inputValue => {
      const {
        allowInvalidPills,
        parseItems,
        validator
      } = this.props;
      let pills = parseItems ? parseItems(inputValue) : Object(_utils_parseCSV__WEBPACK_IMPORTED_MODULE_4__["default"])(inputValue);

      if (!pills) {
        return [];
      }

      if (!allowInvalidPills) {
        pills = pills.filter(pill => validator(pill));
      }

      const normalizedPills = pills.map(pill => typeof pill === 'string' ? {
        displayText: pill,
        text: pill,
        // deprecated, left for backwards compatibility
        value: pill
      } : pill);
      return normalizedPills;
    });

    _defineProperty(this, "addPillsFromInput", inputValue => {
      const {
        allowCustomPills,
        onPillCreate,
        onSelect,
        selectedOptions,
        shouldClearUnmatchedInput,
        validateForError
      } = this.props; // Do nothing if custom pills are not allowed

      if (!allowCustomPills) {
        return;
      } // Parse pills from input


      const pills = this.parsePills(inputValue); // "Select" the pills

      if (pills.length > 0) {
        onSelect(pills);
        onPillCreate(pills);
        this.resetInputValue();
      } else {
        if (validateForError && (inputValue !== '' || selectedOptions.length === 0)) {
          /**
           * If no pills were added, but an inputValue exists or
           * there are no pills selected, check for errors
           */
          validateForError(inputValue);
        }

        if (shouldClearUnmatchedInput) {
          this.resetInputValue();
        }
      }
    });

    _defineProperty(this, "handleBlur", event => {
      const {
        onBlur
      } = this.props;
      const {
        inputValue
      } = this.state;
      this.addPillsFromInput(inputValue);
      onBlur(event);
    });

    _defineProperty(this, "handleInput", event => {
      const {
        target
      } = event;
      const {
        value
      } = target;
      this.setState({
        inputValue: value
      });
      this.props.onInput(value, event);
    });

    _defineProperty(this, "handleEnter", event => {
      const {
        isInCompositionMode,
        inputValue
      } = this.state;

      if (!isInCompositionMode) {
        event.preventDefault();
        this.addPillsFromInput(inputValue);
      }
    });

    _defineProperty(this, "handlePaste", event => {
      event.preventDefault();
      const inputValue = event.clipboardData.getData('text');
      this.setState({
        inputValue
      });
      this.props.onInput(inputValue, event);
      this.addPillsFromInput(inputValue);
    });

    _defineProperty(this, "handleSelect", (index, event) => {
      const {
        onPillCreate,
        onSelect,
        selectorOptions
      } = this.props;
      const selectedOption = // $FlowFixMe
      typeof selectorOptions.get === 'function' ? selectorOptions.get(index) : selectorOptions[index];
      onSelect([selectedOption], event);
      onPillCreate([selectedOption]);
      this.handleInput({
        target: {
          value: ''
        }
      });
    });

    _defineProperty(this, "handleCompositionStart", () => {
      this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(this, "handleCompositionEnd", () => {
      this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(this, "resetInputValue", () => {
      const {
        onInput
      } = this.props;
      this.setState({
        inputValue: ''
      });
      onInput('');
    });
  }

  render() {
    const {
      allowInvalidPills,
      children,
      className,
      disabled,
      dividerIndex,
      dropdownScrollBoundarySelector,
      error,
      getPillClassName,
      getPillImageUrl,
      inputProps,
      label,
      onRemove,
      onSuggestedPillAdd,
      overlayTitle,
      placeholder,
      selectedOptions,
      showAvatars,
      showRoundedPills,
      suggestedPillsData,
      suggestedPillsFilter,
      suggestedPillsTitle,
      shouldSetActiveItemOnOpen,
      validator
    } = this.props;
    const selectorDropdownElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_selector_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-PillSelectorDropdown', 'pill-selector-wrapper', className),
      dividerIndex: dividerIndex,
      onEnter: this.handleEnter,
      onSelect: this.handleSelect,
      overlayTitle: overlayTitle,
      scrollBoundarySelector: dropdownScrollBoundarySelector,
      shouldSetActiveItemOnOpen: shouldSetActiveItemOnOpen,
      selector: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PillSelector__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
        onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a // fix console error
        ,
        onCompositionEnd: this.handleCompositionEnd,
        onCompositionStart: this.handleCompositionStart
      }, inputProps, {
        allowInvalidPills: allowInvalidPills,
        disabled: disabled,
        error: error,
        getPillClassName: getPillClassName,
        getPillImageUrl: getPillImageUrl,
        onBlur: this.handleBlur,
        onInput: this.handleInput,
        onPaste: this.handlePaste,
        onRemove: onRemove,
        onSuggestedPillAdd: onSuggestedPillAdd,
        placeholder: placeholder,
        selectedOptions: selectedOptions,
        showRoundedPills: showRoundedPills,
        showAvatars: showAvatars && showRoundedPills,
        suggestedPillsData: suggestedPillsData,
        suggestedPillsFilter: suggestedPillsFilter,
        suggestedPillsTitle: suggestedPillsTitle,
        validator: validator,
        value: this.state.inputValue
      }))
    }, children);
    return label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: label
    }, selectorDropdownElement) : selectorDropdownElement;
  }

}

_defineProperty(PillSelectorDropdown, "defaultProps", {
  allowCustomPills: false,
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  label: '',
  onBlur: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onPillCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  placeholder: '',
  selectedOptions: [],
  selectorOptions: [],
  shouldClearUnmatchedInput: false,
  shouldSetActiveItemOnOpen: false,
  validator: () => true
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelectorDropdown);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelectorDropdown.scss":
/*!*************************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelectorDropdown.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/text-area/TextArea.js":
/*!**********************************************!*\
  !*** ./src/components/text-area/TextArea.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label */ "./src/components/label/index.tsx");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextArea.scss */ "./src/components/text-area/TextArea.scss");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextArea_scss__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["className", "description", "error", "errorTooltipPosition", "hideLabel", "hideOptionalLabel", "isRequired", "isResizable", "label", "textareaRef", "tooltipTetherClassName"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TextArea = _ref => {
  let {
    className = '',
    description,
    error,
    errorTooltipPosition,
    hideLabel,
    hideOptionalLabel,
    isRequired,
    isResizable,
    label,
    textareaRef,
    tooltipTetherClassName
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const hasError = !!error;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'text-area-container', {
    'show-error': hasError
  });
  const errorMessageID = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('errorMessage')).current;
  const descriptionID = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('description')).current;
  const ariaAttrs = {
    'aria-invalid': hasError,
    'aria-required': isRequired,
    'aria-errormessage': errorMessageID,
    'aria-describedby': description ? descriptionID : undefined
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hideLabel: hideLabel,
    showOptionalText: !hideOptionalLabel && !isRequired,
    text: label
  }, !!description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    id: descriptionID,
    className: "text-area-description"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isShown: hasError,
    position: errorTooltipPosition || 'bottom-left',
    tetherElementClassName: tooltipTetherClassName,
    text: error || '',
    theme: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", _extends({
    ref: textareaRef,
    required: isRequired,
    style: {
      resize: isResizable ? '' : 'none'
    }
  }, ariaAttrs, rest))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextArea.displayName = 'TextArea';
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./src/components/text-area/TextArea.scss":
/*!************************************************!*\
  !*** ./src/components/text-area/TextArea.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/text-area/TextAreaField.js":
/*!***************************************************!*\
  !*** ./src/components/text-area/TextAreaField.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea */ "./src/components/text-area/TextArea.js");
const _excluded = ["field", "form", "innerRef", "isRequired"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextAreaField = _ref => {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextArea__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, field, rest, {
    textareaRef: innerRef,
    error: error,
    hideOptionalLabel: isRequired
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAreaField);

/***/ }),

/***/ "./src/components/text-area/index.js":
/*!*******************************************!*\
  !*** ./src/components/text-area/index.js ***!
  \*******************************************/
/*! exports provided: default, TextAreaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea */ "./src/components/text-area/TextArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextArea__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TextAreaField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAreaField */ "./src/components/text-area/TextAreaField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _TextAreaField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebar.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebar.js ***!
  \*********************************************************/
/*! exports provided: activityFeedInlineError, ActivitySidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedInlineError", function() { return activityFeedInlineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySidebarComponent", function() { return ActivitySidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity-feed */ "./src/elements/content-sidebar/activity-feed/index.js");
/* harmony import */ var _AddTaskButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddTaskButton */ "./src/elements/content-sidebar/AddTaskButton.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _common_annotator_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/annotator-context */ "./src/elements/common/annotator-context/index.ts");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _common_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/routing */ "./src/elements/common/routing/index.js");
/* harmony import */ var _ActivitySidebarFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ActivitySidebarFilter */ "./src/elements/content-sidebar/ActivitySidebarFilter.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ActivitySidebar.scss */ "./src/elements/content-sidebar/ActivitySidebar.scss");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_22__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed sidebar component
 * @author Box
 */























const activityFeedInlineError = {
  inlineError: {
    title: _common_messages__WEBPACK_IMPORTED_MODULE_9__["default"].errorOccured,
    content: _common_messages__WEBPACK_IMPORTED_MODULE_9__["default"].activityFeedItemApiError
  }
};
const MARK_NAME_DATA_LOADING = `${_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_ACTIVITY_SIDEBAR"]}_data_loading`;
const MARK_NAME_DATA_READY = `${_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_ACTIVITY_SIDEBAR"]}_${_common_logger_constants__WEBPACK_IMPORTED_MODULE_12__["EVENT_DATA_READY"]}`;
const MARK_NAME_JS_READY = `${_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_ACTIVITY_SIDEBAR"]}_${_common_logger_constants__WEBPACK_IMPORTED_MODULE_12__["EVENT_JS_READY"]}`;
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_14__["mark"])(MARK_NAME_JS_READY);

class ActivitySidebar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "handleAnnotationDelete", _ref => {
      let {
        id,
        permissions
      } = _ref;
      const {
        api,
        file
      } = this.props;
      api.getFeedAPI(false).deleteAnnotation(file, id, permissions, this.deleteAnnotationSuccess.bind(this, id), this.feedErrorCallback);
      this.fetchFeedItems();
    });

    _defineProperty(this, "handleAnnotationEdit", (id, text, permissions) => {
      const {
        api,
        file
      } = this.props;
      api.getFeedAPI(false).updateAnnotation(file, id, text, undefined, permissions, this.feedSuccessCallback, this.feedErrorCallback);
      this.fetchFeedItems();
    });

    _defineProperty(this, "handleAnnotationStatusChange", (id, status, permissions) => {
      const {
        api,
        file
      } = this.props;
      api.getFeedAPI(false).updateAnnotation(file, id, undefined, status, permissions, this.feedSuccessCallback, this.feedErrorCallback);
      this.fetchFeedItems();
    });

    _defineProperty(this, "feedSuccessCallback", () => {
      this.fetchFeedItems();
    });

    _defineProperty(this, "feedErrorCallback", (e, code, contextInfo) => {
      this.errorCallback(e, code, contextInfo);
      this.fetchFeedItems();
    });

    _defineProperty(this, "createTask", (message, assignees, taskType, dueAt, completionRule, onSuccess, onError) => {
      const {
        currentUser
      } = this.state;
      const {
        file,
        api
      } = this.props;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_13__["getBadUserError"])();
      }

      const errorCallback = (e, code, contextInfo) => {
        if (onError) {
          onError(e, code, contextInfo);
        }

        this.feedErrorCallback(e, code, contextInfo);
      };

      const successCallback = () => {
        if (onSuccess) {
          onSuccess();
        }

        this.feedSuccessCallback();
      };

      api.getFeedAPI(false).createTaskNew(file, currentUser, message, assignees, taskType, dueAt, completionRule, successCallback, errorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteTask", task => {
      const {
        file,
        api,
        onTaskDelete
      } = this.props;
      api.getFeedAPI(false).deleteTaskNew(file, task, taskId => {
        this.feedSuccessCallback();
        onTaskDelete(taskId);
      }, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "updateTask", (task, onSuccess, onError) => {
      const {
        file,
        api,
        onTaskUpdate
      } = this.props;

      const errorCallback = (e, code) => {
        if (onError) {
          onError(e, code);
        }

        this.feedErrorCallback(e, code);
      };

      const successCallback = () => {
        this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onTaskUpdate();
      };

      api.getFeedAPI(false).updateTaskNew(file, task, successCallback, errorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "updateTaskAssignment", (taskId, taskAssignmentId, status) => {
      const {
        file,
        api,
        onTaskAssignmentUpdate
      } = this.props;
      const {
        currentUser = {}
      } = this.state;

      const successCallback = () => {
        this.feedSuccessCallback();
        onTaskAssignmentUpdate(taskId, taskAssignmentId, status, currentUser.id);
      };

      api.getFeedAPI(false).updateTaskCollaborator(file, taskId, taskAssignmentId, status, successCallback, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteComment", _ref2 => {
      let {
        id,
        permissions
      } = _ref2;
      const {
        file,
        api,
        hasReplies,
        onCommentDelete
      } = this.props;

      const successCallback = comment => {
        this.feedSuccessCallback();
        onCommentDelete(comment);
      };

      if (hasReplies) {
        api.getFeedAPI(false).deleteThreadedComment(file, id, permissions, successCallback, this.feedErrorCallback);
      } else {
        api.getFeedAPI(false).deleteComment(file, id, permissions, successCallback, this.feedErrorCallback);
      } // need to load the pending item


      this.fetchFeedItems();
    });

    _defineProperty(this, "updateComment", (id, text, status, hasMention, permissions, onSuccess, onError) => {
      const {
        api,
        file,
        hasReplies,
        onCommentUpdate
      } = this.props;

      const errorCallback = (e, code) => {
        if (onError) {
          onError(e, code);
        }

        this.feedErrorCallback(e, code);
      };

      const successCallback = () => {
        this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onCommentUpdate();
      };

      if (hasReplies) {
        api.getFeedAPI(false).updateThreadedComment(file, id, text, status, hasMention, permissions, successCallback, errorCallback);
      } else {
        api.getFeedAPI(false).updateComment(file, id, text || '', hasMention, permissions, successCallback, errorCallback);
      } // need to load the pending item


      this.fetchFeedItems();
    });

    _defineProperty(this, "createComment", (text, hasMention) => {
      const {
        file,
        api,
        hasReplies,
        onCommentCreate
      } = this.props;
      const {
        currentUser
      } = this.state;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_13__["getBadUserError"])();
      }

      const successCallback = comment => {
        onCommentCreate(comment);
        this.feedSuccessCallback();
      };

      if (hasReplies) {
        api.getFeedAPI(false).createThreadedComment(file, currentUser, text, hasMention, successCallback, this.feedErrorCallback);
      } else {
        api.getFeedAPI(false).createComment(file, currentUser, text, hasMention, successCallback, this.feedErrorCallback);
      } // need to load the pending item


      this.fetchFeedItems();
    });

    _defineProperty(this, "createReply", (parentId, parentType, text, hasMention) => {
      const {
        file,
        api
      } = this.props;
      const {
        currentUser
      } = this.state;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_13__["getBadUserError"])();
      }

      api.getFeedAPI(false).createReply(file, currentUser, parentId, parentType, text, hasMention, this.feedSuccessCallback, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteAppActivity", _ref3 => {
      let {
        id
      } = _ref3;
      const {
        file,
        api
      } = this.props;
      api.getFeedAPI(false).deleteAppActivity(file, id, this.feedSuccessCallback, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "fetchFeedItemsSuccessCallback", feedItems => {
      const {
        file: {
          id: fileId
        },
        logger
      } = this.props;
      Object(_utils_performance__WEBPACK_IMPORTED_MODULE_14__["mark"])(MARK_NAME_DATA_READY); // Only emit metric if has >1 activity feed items (there should always at least be the current version)

      if (feedItems.length > 1) {
        logger.onDataReadyMetric({
          endMarkName: MARK_NAME_DATA_READY,
          startMarkName: MARK_NAME_DATA_LOADING
        }, fileId);
      }

      this.setState({
        feedItems,
        activityFeedError: undefined
      });
    });

    _defineProperty(this, "fetchFeedItemsErrorCallback", (feedItems, errors) => {
      const {
        onError
      } = this.props;
      this.setState({
        feedItems,
        activityFeedError: activityFeedInlineError
      });

      if (Array.isArray(errors) && errors.length) {
        onError(new Error('Fetch feed items error'), _constants__WEBPACK_IMPORTED_MODULE_21__["ERROR_CODE_FETCH_ACTIVITY"], {
          showNotification: true,
          errors: errors.map(_ref4 => {
            let {
              code
            } = _ref4;
            return code;
          })
        });
      }
    });

    _defineProperty(this, "errorCallback", function (error, code) {
      let contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */
      // eslint-disable-next-line react/prop-types

      _this.props.onError(error, code, contextInfo);
    });

    _defineProperty(this, "fetchCurrentUserSuccessCallback", currentUser => {
      this.setState({
        currentUser,
        currentUserError: undefined
      });
    });

    _defineProperty(this, "getApproverContactsSuccessCallback", collaborators => {
      const {
        entries
      } = collaborators;
      this.setState({
        approverSelectorContacts: entries
      });
    });

    _defineProperty(this, "getMentionContactsSuccessCallback", collaborators => {
      const {
        entries
      } = collaborators;
      this.setState({
        contactsLoaded: false
      }, () => this.setState({
        contactsLoaded: true,
        mentionSelectorContacts: entries
      }));
    });

    _defineProperty(this, "getApproverWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(searchStr => this.getCollaborators(this.getApproverContactsSuccessCallback, this.errorCallback, searchStr, {
      includeGroups: true
    }), _constants__WEBPACK_IMPORTED_MODULE_21__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(this, "getMentionWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(searchStr => this.getCollaborators(this.getMentionContactsSuccessCallback, this.errorCallback, searchStr), _constants__WEBPACK_IMPORTED_MODULE_21__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(this, "fetchCurrentUserErrorCallback", (e, code) => {
      this.setState({
        currentUser: undefined,
        currentUserError: {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_9__["default"].currentUserErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_9__["default"].defaultErrorMaskSubHeaderMessage
          }
        }
      });
      this.errorCallback(e, code, {
        error: e
      });
    });

    _defineProperty(this, "getAvatarUrl", async userId => {
      const {
        file,
        api
      } = this.props;
      return api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id);
    });

    _defineProperty(this, "handleAnnotationSelect", annotation => {
      const {
        file_version,
        id: nextActiveAnnotationId
      } = annotation;
      const {
        emitAnnotatorActiveChangeEvent,
        file,
        getAnnotationsMatchPath,
        getAnnotationsPath,
        history,
        location,
        onAnnotationSelect
      } = this.props;
      const annotationFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(file_version, 'id');
      const currentFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(file, 'file_version.id');
      const match = getAnnotationsMatchPath(location);
      const selectedFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(match, 'params.fileVersionId', currentFileVersionId);
      emitAnnotatorActiveChangeEvent(nextActiveAnnotationId);

      if (annotationFileVersionId && annotationFileVersionId !== selectedFileVersionId) {
        history.push(getAnnotationsPath(annotationFileVersionId, nextActiveAnnotationId));
      }

      onAnnotationSelect(annotation);
    });

    _defineProperty(this, "handleItemsFiltered", status => {
      this.setState({
        feedItemsStatusFilter: status
      });
    });

    _defineProperty(this, "getFilteredFeedItems", () => {
      const {
        feedItems,
        feedItemsStatusFilter
      } = this.state;

      if (!feedItems || !feedItemsStatusFilter) {
        return feedItems;
      }

      return feedItems.filter(item => {
        return item.status === feedItemsStatusFilter || item.type === 'file_version';
      });
    });

    _defineProperty(this, "onTaskModalClose", () => {
      this.setState({
        approverSelectorContacts: []
      });
    });

    _defineProperty(this, "renderAddTaskButton", () => {
      const {
        isDisabled,
        hasTasks
      } = this.props;
      const {
        approverSelectorContacts
      } = this.state;
      const {
        getApproverWithQuery,
        getAvatarUrl,
        createTask,
        onTaskModalClose
      } = this;

      if (!hasTasks) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddTaskButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isDisabled: isDisabled,
        onTaskModalClose: onTaskModalClose,
        taskFormProps: {
          approvers: [],
          approverSelectorContacts,
          completionRule: _constants__WEBPACK_IMPORTED_MODULE_21__["TASK_COMPLETION_RULE_ALL"],
          createTask,
          getApproverWithQuery,
          getAvatarUrl,
          id: '',
          message: ''
        }
      });
    });

    _defineProperty(this, "renderActivitySidebarFilter", () => {
      const {
        features
      } = this.props;
      const {
        feedItemsStatusFilter
      } = this.state;
      const shouldShowActivityFeedFilter = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["isFeatureEnabled"])(features, 'activityFeed.filter.enabled');

      if (!shouldShowActivityFeedFilter) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivitySidebarFilter__WEBPACK_IMPORTED_MODULE_20__["default"], {
        feedItemStatus: feedItemsStatusFilter,
        onFeedItemStatusClick: selectedStatus => {
          this.handleItemsFiltered(selectedStatus);
        }
      });
    });

    _defineProperty(this, "renderActions", () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.renderActivitySidebarFilter(), this.renderAddTaskButton()));

    _defineProperty(this, "renderTitle", () => {
      const {
        features
      } = this.props;

      if (Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["isFeatureEnabled"])(features, 'activityFeed.filter.enabled')) {
        return undefined;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_9__["default"].sidebarActivityTitle);
    });

    // eslint-disable-next-line react/prop-types
    const {
      logger: _logger
    } = this.props;
    Object(_utils_performance__WEBPACK_IMPORTED_MODULE_14__["mark"])(MARK_NAME_DATA_LOADING);

    _logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });

    this.state = {};
  }

  componentDidMount() {
    const {
      currentUser
    } = this.props;
    this.fetchFeedItems(true);
    this.fetchCurrentUser(currentUser);
  }

  deleteAnnotationSuccess(id) {
    const {
      emitRemoveEvent
    } = this.props;
    this.feedSuccessCallback();
    emitRemoveEvent(id);
  }
  /**
   * Fetches a Users info
   *
   * @private
   * @param {User} [user] - Box User. If missing, gets user that the current token was generated for.
   * @param {boolean} shouldDestroy
   * @return {void}
   */


  fetchCurrentUser(user) {
    let shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      api,
      file
    } = this.props;

    if (!file) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_13__["getBadItemError"])();
    }

    if (typeof user === 'undefined') {
      api.getUsersAPI(shouldDestroy).getUser(file.id, this.fetchCurrentUserSuccessCallback, this.fetchCurrentUserErrorCallback);
    } else {
      this.setState({
        currentUser: user,
        currentUserError: undefined
      });
    }
  }
  /**
   * Success callback for fetching feed items
   */


  /**
   * Fetches the feed items for the sidebar
   *
   * @param {boolean} shouldRefreshCache true if the cache should be refreshed
   * @param {boolean} shouldDestroy true if the api factory should be destroyed
   */
  fetchFeedItems() {
    let shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      file,
      api,
      features,
      hasReplies: shouldShowReplies,
      hasTasks: shouldShowTasks,
      hasVersions: shouldShowVersions
    } = this.props;
    const shouldShowAppActivity = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["isFeatureEnabled"])(features, 'activityFeed.appActivity.enabled');
    const shouldShowAnnotations = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["isFeatureEnabled"])(features, 'activityFeed.annotations.enabled');
    api.getFeedAPI(shouldDestroy).feedItems(file, shouldRefreshCache, this.fetchFeedItemsSuccessCallback, this.fetchFeedItemsErrorCallback, this.errorCallback, {
      shouldShowAnnotations,
      shouldShowAppActivity,
      shouldShowReplies,
      shouldShowTasks,
      shouldShowVersions
    });
  }
  /**
   * Handles a successful feed API fetch
   *
   * @private
   * @param {Array} feedItems - the feed items
   * @return {void}
   */


  /**
   * Fetches file collaborators
   *
   * @param {Function} successCallback - the success callback
   * @param {Function} errorCallback - the error callback
   * @param {string} searchStr - the search string
   * @param {Object} [options]
   * @param {boolean} [options.includeGroups] - return groups as well as users
   * @return {void}
   */
  getCollaborators(successCallback, errorCallback, searchStr) {
    let {
      includeGroups = false
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    // Do not fetch without filter
    const {
      file,
      api
    } = this.props;

    if (!searchStr || searchStr.trim() === '') {
      return;
    }

    api.getFileCollaboratorsAPI(true).getFileCollaborators(file.id, successCallback, errorCallback, {
      filter_term: searchStr,
      include_groups: includeGroups,
      include_uploader_collabs: false
    });
  }
  /**
   * Handles a failed file user info fetch
   *
   * @private
   * @param {ElementsXhrError} e - API error
   * @return {void}
   */


  refresh() {
    let shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.fetchFeedItems(shouldRefreshCache);
  }

  render() {
    const {
      elementId,
      file,
      isDisabled = false,
      onVersionHistoryClick,
      getUserProfileUrl,
      activeFeedEntryId,
      activeFeedEntryType,
      onTaskView
    } = this.props;
    const {
      currentUser,
      approverSelectorContacts,
      mentionSelectorContacts,
      contactsLoaded,
      activityFeedError,
      currentUserError
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      actions: this.renderActions(),
      className: "bcs-activity",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_21__["SIDEBAR_VIEW_ACTIVITY"],
      title: this.renderTitle()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_activity_feed__WEBPACK_IMPORTED_MODULE_6__["default"], {
      activeFeedEntryId: activeFeedEntryId,
      activeFeedEntryType: activeFeedEntryType,
      activityFeedError: activityFeedError,
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      currentUserError: currentUserError,
      feedItems: this.getFilteredFeedItems(),
      file: file,
      getApproverWithQuery: this.getApproverWithQuery,
      getAvatarUrl: this.getAvatarUrl,
      getMentionWithQuery: this.getMentionWithQuery,
      getUserProfileUrl: getUserProfileUrl,
      isDisabled: isDisabled,
      mentionSelectorContacts: mentionSelectorContacts,
      contactsLoaded: contactsLoaded,
      onAnnotationDelete: this.handleAnnotationDelete,
      onAnnotationEdit: this.handleAnnotationEdit,
      onAnnotationSelect: this.handleAnnotationSelect,
      onAnnotationStatusChange: this.handleAnnotationStatusChange,
      onAppActivityDelete: this.deleteAppActivity,
      onCommentCreate: this.createComment,
      onCommentDelete: this.deleteComment,
      onCommentUpdate: this.updateComment,
      onReplyCreate: this.createReply,
      onTaskAssignmentUpdate: this.updateTaskAssignment,
      onTaskCreate: this.createTask,
      onTaskDelete: this.deleteTask,
      onTaskModalClose: this.onTaskModalClose,
      onTaskUpdate: this.updateTask,
      onTaskView: onTaskView,
      onVersionHistoryClick: onVersionHistoryClick
    }));
  }

}

_defineProperty(ActivitySidebar, "defaultProps", {
  annotatorState: {},
  emitAnnotatorActiveChangeEvent: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  getAnnotationsMatchPath: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  getAnnotationsPath: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  hasReplies: false,
  hasTasks: true,
  hasVersions: true,
  isDisabled: false,
  onAnnotationSelect: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onCommentCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onCommentDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onCommentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onTaskAssignmentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onTaskCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onTaskDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onTaskUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionChange: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionHistoryClick: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_18__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_ACTIVITY_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_16__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_ACTIVITY_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_15__["withAPIContext"], _common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["withFeatureConsumer"], _common_annotator_context__WEBPACK_IMPORTED_MODULE_11__["withAnnotatorContext"], _common_routing__WEBPACK_IMPORTED_MODULE_19__["withRouterAndRef"]])(ActivitySidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebar.scss":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebar.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebarFilter.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebarFilter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _ActivitySidebarFilter_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ActivitySidebarFilter.scss */ "./src/elements/content-sidebar/ActivitySidebarFilter.scss");
/* harmony import */ var _ActivitySidebarFilter_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ActivitySidebarFilter_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * 
 * @file Activity feed sidebar filter component
 * @author Box
 */








const ACTIVITY_FEED_ITEM_ALL = 'all';
const ACTIVITY_FEED_ITEM_OPEN = _constants__WEBPACK_IMPORTED_MODULE_5__["COMMENT_STATUS_OPEN"];
const ACTIVITY_FEED_ITEM_RESOLVED = _constants__WEBPACK_IMPORTED_MODULE_5__["COMMENT_STATUS_RESOLVED"];
const statuses = [ACTIVITY_FEED_ITEM_ALL, ACTIVITY_FEED_ITEM_OPEN, ACTIVITY_FEED_ITEM_RESOLVED];
const statusMap = {
  [ACTIVITY_FEED_ITEM_ALL]: {
    msg: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].activitySidebarFilterOptionAll,
    val: undefined
  },
  [ACTIVITY_FEED_ITEM_OPEN]: {
    msg: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].activitySidebarFilterOptionOpen,
    val: _constants__WEBPACK_IMPORTED_MODULE_5__["COMMENT_STATUS_OPEN"]
  },
  [ACTIVITY_FEED_ITEM_RESOLVED]: {
    msg: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].activitySidebarFilterOptionResolved,
    val: _constants__WEBPACK_IMPORTED_MODULE_5__["COMMENT_STATUS_RESOLVED"]
  }
};

function ActivitySidebarFilter(_ref) {
  let {
    feedItemStatus = ACTIVITY_FEED_ITEM_ALL,
    onFeedItemStatusClick
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-ActivitySidebarFilter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivitySidebarFilter-dropdownMenu",
    constrainToWindow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__["MenuToggle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], statusMap[feedItemStatus].msg))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], null, statuses.map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_6__["SelectMenuItem"], {
    key: status,
    isSelected: status === feedItemStatus,
    onClick: () => onFeedItemStatusClick(statusMap[status].val)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], statusMap[status].msg))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ActivitySidebarFilter);

/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebarFilter.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebarFilter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskButton.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskButton.js ***!
  \*******************************************************/
/*! exports provided: AddTaskButtonComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskButtonComponent", function() { return AddTaskButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AddTaskMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTaskMenu */ "./src/elements/content-sidebar/AddTaskMenu.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskModal */ "./src/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AddTaskButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "buttonRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "state", {
      error: null,
      isTaskFormOpen: false,
      taskType: _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_APPROVAL"]
    });

    _defineProperty(this, "handleClickMenuItem", taskType => {
      this.props.history.replace({
        state: {
          open: true
        }
      });
      this.setState({
        isTaskFormOpen: true,
        taskType
      });
    });

    _defineProperty(this, "handleModalClose", () => {
      const {
        onTaskModalClose
      } = this.props;
      this.setState({
        isTaskFormOpen: false,
        error: null
      });

      if (this.buttonRef.current) {
        this.buttonRef.current.focus();
      }

      onTaskModalClose();
    });

    _defineProperty(this, "handleSubmitError", e => this.setState({
      error: e
    }));

    _defineProperty(this, "setAddTaskButtonRef", element => {
      this.buttonRef.current = element;
    });
  }

  render() {
    const {
      isDisabled,
      taskFormProps
    } = this.props;
    const {
      isTaskFormOpen,
      taskType,
      error
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddTaskMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isDisabled: isDisabled,
      onMenuItemClick: this.handleClickMenuItem,
      setAddTaskButtonRef: this.setAddTaskButtonRef
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      onSubmitError: this.handleSubmitError,
      onSubmitSuccess: this.handleModalClose,
      onModalClose: this.handleModalClose,
      isTaskFormOpen: isTaskFormOpen,
      taskFormProps: taskFormProps,
      taskType: taskType
    }));
  }

}

_defineProperty(AddTaskButton, "defaultProps", {
  isDisabled: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AddTaskButton));

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskMenu.js":
/*!*****************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskMenu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.ts");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskApproval */ "./src/icons/two-toned/IconTaskApproval.tsx");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskGeneral */ "./src/icons/two-toned/IconTaskGeneral.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddTaskMenu.scss */ "./src/elements/content-sidebar/AddTaskMenu.scss");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10__);












const AddTaskMenu = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
  constrainToScrollParent: true,
  isRightAligned: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  isDisabled: props.isDisabled,
  type: "button",
  setRef: props.setAddTaskButtonRef
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].tasksAddTask))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
  className: "bcs-AddTaskMenu"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
  className: "bcs-AddTaskMenu-menuItem",
  onClick: () => props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_9__["TASK_TYPE_GENERAL"])
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-icon"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_7__["default"], {
  width: 30,
  height: 30
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-title"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskGeneral)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-description"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskGeneralDescription)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
  className: "bcs-AddTaskMenu-menuItem",
  onClick: () => props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_9__["TASK_TYPE_APPROVAL"])
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-icon"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_6__["default"], {
  width: 30,
  height: 30
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-title"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskApproval)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-description"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskApprovalDescription))))));

/* harmony default export */ __webpack_exports__["default"] = (AddTaskMenu);

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskMenu.scss":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskMenu.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/TaskModal.js":
/*!***************************************************!*\
  !*** ./src/elements/content-sidebar/TaskModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal/Modal */ "./src/components/modal/Modal.js");
/* harmony import */ var _activity_feed_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-feed/task-form */ "./src/elements/content-sidebar/activity-feed/task-form/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function getMessageForModalTitle(taskType, mode) {
  switch (taskType) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_GENERAL"]:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksCreateGeneralTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksEditGeneralTaskFormTitle;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_APPROVAL"]:
    default:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksCreateApprovalTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksEditApprovalTaskFormTitle;
  }
}

const focusTargetSelector = '.task-modal textarea, .task-modal input';

const TaskModal = props => {
  const {
    editMode = _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"],
    error,
    onSubmitError,
    onSubmitSuccess,
    onModalClose,
    taskType,
    isTaskFormOpen,
    taskFormProps
  } = props; // Note: Modal throws an error if this fails to find an element!

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "be-modal task-modal",
    "data-testid": "create-task-modal",
    focusElementSelector: focusTargetSelector,
    isOpen: isTaskFormOpen,
    onRequestClose: onModalClose,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], getMessageForModalTitle(taskType, editMode))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_activity_feed_task_form__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    editMode: editMode // $FlowFixMe
    ,
    error: error,
    onCancel: onModalClose,
    onSubmitError: onSubmitError,
    onSubmitSuccess: onSubmitSuccess,
    taskType: taskType
  }, taskFormProps))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskModal);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/ActivityCard.scss":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/ActivityCard.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/ActivityCard.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActivityCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityCard.scss */ "./src/elements/content-sidebar/activity-feed/ActivityCard.scss");
/* harmony import */ var _ActivityCard_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ActivityCard_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActivityCard = (props, ref) => {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-ActivityCard', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ActivityCard));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/Avatar.js":
/*!**************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/Avatar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/avatar */ "./src/components/avatar/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file avatar component
 * @author Box
 */



class Avatar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      avatarUrl: null
    });

    _defineProperty(this, "isMounted", false);

    _defineProperty(this, "getAvatarUrlHandler", avatarUrl => {
      if (this.isMounted) {
        this.setState({
          avatarUrl
        });
      }
    });
  }

  /**
   * Gets the avatar URL for the user from the getAvatarUrl prop
   *
   * @return {Promise<?string>} Promise which resolve with the avatar url string
   */
  getAvatarUrl() {
    const {
      user = {},
      getAvatarUrl
    } = this.props;
    const {
      avatar_url = null,
      id
    } = user;
    const avatarPromise = id && getAvatarUrl ? getAvatarUrl(`${id}`) : Promise.resolve(avatar_url);
    return avatarPromise.then(this.getAvatarUrlHandler);
  }

  componentDidMount() {
    this.isMounted = true;
    this.getAvatarUrl();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const {
      user,
      className
    } = this.props;
    const {
      avatarUrl
    } = this.state;
    const {
      id,
      name
    } = user;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      avatarUrl: avatarUrl,
      className: className,
      id: id,
      name: name
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/SelectableActivityCard.scss":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/SelectableActivityCard.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/SelectableActivityCard.tsx":
/*!*******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/SelectableActivityCard.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/keys */ "./src/utils/keys.js");
/* harmony import */ var _SelectableActivityCard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectableActivityCard.scss */ "./src/elements/content-sidebar/activity-feed/SelectableActivityCard.scss");
/* harmony import */ var _SelectableActivityCard_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SelectableActivityCard_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children", "className", "isDisabled", "onSelect"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // @ts-ignore flow import



const ALLOWABLE_NODENAMES = ['A', 'BUTTON'];

function isAllowableNode(_ref) {
  let {
    target
  } = _ref;
  return target instanceof HTMLElement && ALLOWABLE_NODENAMES.includes(target.nodeName);
}

const SelectableActivityCard = _ref2 => {
  let {
    children,
    className,
    isDisabled = false,
    onSelect
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);

  const ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  const handleClick = event => {
    if (isDisabled || isAllowableNode(event)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus(); // Buttons do not receive focus in Firefox and Safari on MacOS

    onSelect();
  };

  const handleKeyDown = event => {
    if (isDisabled || isAllowableNode(event)) {
      return;
    }

    const key = Object(_utils_keys__WEBPACK_IMPORTED_MODULE_3__["decode"])(event);

    if (key === 'Space' || key === 'Enter') {
      onSelect();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    ref: ref,
    "aria-disabled": isDisabled,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-SelectableActivityCard', className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectableActivityCard);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js ***!
  \*********************************************************************************/
/*! exports provided: ActiveStateComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStateComponent", function() { return ActiveState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActivityThread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityThread */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.js");
/* harmony import */ var _ActivityItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActivityItem */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityItem.tsx");
/* harmony import */ var _app_activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-activity */ "./src/elements/content-sidebar/activity-feed/app-activity/index.js");
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../annotations */ "./src/elements/content-sidebar/activity-feed/annotations/index.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment */ "./src/elements/content-sidebar/activity-feed/comment/index.js");
/* harmony import */ var _task_new__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../task-new */ "./src/elements/content-sidebar/activity-feed/task-new/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../version */ "./src/elements/content-sidebar/activity-feed/version/index.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Active state component for Activity Feed
 */











const ActiveState = _ref => {
  let {
    activeFeedEntryId,
    activeFeedEntryType,
    activeFeedItemRef,
    approverSelectorContacts,
    currentFileVersionId,
    currentUser,
    hasReplies = false,
    items,
    mentionSelectorContacts,
    getMentionWithQuery,
    onAnnotationDelete,
    onAnnotationEdit,
    onAnnotationSelect,
    onAnnotationStatusChange,
    onAppActivityDelete,
    onCommentDelete,
    onCommentEdit,
    onTaskDelete,
    onTaskEdit,
    onTaskView,
    onTaskAssignmentUpdate,
    onTaskModalClose,
    onVersionInfo,
    translations,
    getApproverWithQuery,
    getAvatarUrl,
    getUserProfileUrl
  } = _ref;
  const activeEntry = items.find(_ref2 => {
    let {
      id,
      type
    } = _ref2;
    return id === activeFeedEntryId && type === activeFeedEntryType;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(item => {
    const isFocused = item === activeEntry;
    const refValue = isFocused ? activeFeedItemRef : undefined;
    const itemFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item, 'file_version.id');

    switch (item.type) {
      case 'comment':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: item.type + item.id,
          "data-testid": "comment",
          isFocused: isFocused,
          ref: refValue
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityThread__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "data-testid": "activity-thread",
          onReplyDelete: onCommentDelete,
          onReplyEdit: onCommentEdit,
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          hasReplies: hasReplies,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          repliesTotalCount: item.total_reply_count,
          replies: item.replies,
          translations: translations
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, item, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          onDelete: onCommentDelete,
          onEdit: onCommentEdit,
          permissions: {
            can_delete: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_delete', false),
            can_edit: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_edit', false),
            can_reply: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_reply', false),
            can_resolve: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_resolve', false)
          },
          translations: translations
        }))));

      case 'task':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: item.type + item.id,
          className: "bcs-activity-feed-task-new",
          "data-testid": "task",
          isFocused: isFocused,
          ref: refValue
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_new__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onView: onTaskView,
          onModalClose: onTaskModalClose,
          translations: translations
        })));

      case 'file_version':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: item.type + item.id,
          className: "bcs-version-item",
          "data-testid": "version"
        }, item.versions ?
        /*#__PURE__*/
        // $FlowFixMe
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_version__WEBPACK_IMPORTED_MODULE_8__["CollapsedVersion"], _extends({}, item, {
          onInfo: onVersionInfo
        })) :
        /*#__PURE__*/
        // $FlowFixMe
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_version__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case 'app_activity':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity",
          "data-testid": "app-activity"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_activity__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      case 'annotation':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: item.type + item.id,
          className: "bcs-activity-feed-annotation-activity",
          "data-testid": "annotation-activity",
          isFocused: isFocused,
          ref: refValue
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityThread__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "data-testid": "activity-thread",
          onReplyDelete: onCommentDelete,
          onReplyEdit: onCommentEdit,
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          hasReplies: hasReplies,
          mentionSelectorContacts: mentionSelectorContacts,
          repliesTotalCount: item.total_reply_count,
          replies: item.replies,
          translations: translations
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_annotations__WEBPACK_IMPORTED_MODULE_5__["default"], {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          getMentionWithQuery: getMentionWithQuery,
          isCurrentVersion: currentFileVersionId === itemFileVersionId,
          item: item,
          mentionSelectorContacts: mentionSelectorContacts,
          onEdit: onAnnotationEdit,
          onDelete: onAnnotationDelete,
          onSelect: onAnnotationSelect,
          onStatusChange: onAnnotationStatusChange
        })));

      default:
        return null;
    }
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_9__["default"])(ActiveState));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ActiveState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActiveState */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment-form */ "./src/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmptyState */ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/activity-feed/messages.js");
/* harmony import */ var _activityFeedUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./activityFeedUtils */ "./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ActivityFeed.scss */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_14__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Activity feed
 */
















class ActivityFeed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    _defineProperty(this, "state", {
      isInputOpen: false
    });

    _defineProperty(this, "activeFeedItemRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "isEmpty", function () {
      let {
        feedItems
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      if (feedItems === undefined) {
        return false;
      }

      return feedItems.length === 0 || feedItems.length === 1 && feedItems[0].type === _activityFeedUtils__WEBPACK_IMPORTED_MODULE_11__["ItemTypes"].fileVersion;
    });

    _defineProperty(this, "hasLoaded", (prevCurrentUser, prevFeedItems) => {
      const {
        currentUser,
        feedItems
      } = this.props;
      return currentUser !== undefined && feedItems !== undefined && (!prevCurrentUser || !prevFeedItems);
    });

    _defineProperty(this, "resetFeedScroll", () => {
      if (this.feedContainer) {
        this.feedContainer.scrollTop = this.feedContainer.scrollHeight;
      }
    });

    _defineProperty(this, "onKeyDown", event => {
      const {
        nativeEvent
      } = event;
      nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "commentFormFocusHandler", () => {
      this.resetFeedScroll();
      this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(this, "commentFormCancelHandler", () => this.setState({
      isInputOpen: false
    }));

    _defineProperty(this, "commentFormSubmitHandler", () => this.setState({
      isInputOpen: false
    }));

    _defineProperty(this, "onCommentCreate", _ref => {
      let {
        text,
        hasMention
      } = _ref;
      const {
        onCommentCreate = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
      } = this.props;
      onCommentCreate(text, hasMention);
      this.commentFormSubmitHandler();
    });

    _defineProperty(this, "onTaskCreate", _ref2 => {
      let {
        text,
        assignees,
        dueAt
      } = _ref2;
      const {
        onTaskCreate = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
      } = this.props;
      onTaskCreate(text, assignees, dueAt);
      this.commentFormSubmitHandler();
    });

    _defineProperty(this, "openVersionHistoryPopup", data => {
      const versionInfoHandler = this.props.onVersionHistoryClick || lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a;
      versionInfoHandler(data);
    });
  }

  componentDidMount() {
    this.resetFeedScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      activeFeedEntryId: prevActiveFeedEntryId,
      currentUser: prevCurrentUser,
      feedItems: prevFeedItems
    } = prevProps;
    const {
      feedItems: currFeedItems,
      activeFeedEntryId
    } = this.props;
    const {
      isInputOpen: prevIsInputOpen
    } = prevState;
    const {
      isInputOpen: currIsInputOpen
    } = this.state;
    const hasLoaded = this.hasLoaded(prevCurrentUser, prevFeedItems);
    const hasMoreItems = prevFeedItems && currFeedItems && prevFeedItems.length < currFeedItems.length;
    const didLoadFeedItems = prevFeedItems === undefined && currFeedItems !== undefined;
    const hasInputOpened = currIsInputOpen !== prevIsInputOpen;
    const hasActiveFeedEntryIdChanged = activeFeedEntryId !== prevActiveFeedEntryId;

    if ((hasLoaded || hasMoreItems || didLoadFeedItems || hasInputOpened) && activeFeedEntryId === undefined) {
      this.resetFeedScroll();
    }

    if (didLoadFeedItems || hasActiveFeedEntryIdChanged) {
      this.scrollToActiveFeedItemOrErrorMessage();
    }
  }

  scrollToActiveFeedItemOrErrorMessage() {
    const {
      current: activeFeedItemRef
    } = this.activeFeedItemRef;
    const {
      activeFeedEntryId
    } = this.props; // if there is no active item, do not scroll

    if (!activeFeedEntryId) {
      return;
    } // if there was supposed to be an active feed item but the feed item does not exist
    // scroll to the bottom to show the inline error message


    if (activeFeedItemRef === null) {
      this.resetFeedScroll();
      return;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_13__["scrollIntoView"])(activeFeedItemRef);
  }
  /**
   * Detects whether or not the empty state should be shown.
   * @param {object} currentUser - The user that is logged into the account
   * @param {object} feedItems - Items in the activity feed
   */


  render() {
    const {
      activeFeedEntryId,
      activeFeedEntryType,
      activityFeedError,
      approverSelectorContacts,
      currentUser,
      feedItems,
      file,
      getApproverWithQuery,
      getAvatarUrl,
      getMentionWithQuery,
      getUserProfileUrl,
      isDisabled,
      mentionSelectorContacts,
      contactsLoaded,
      onAnnotationDelete,
      onAnnotationEdit,
      onAnnotationSelect,
      onAnnotationStatusChange,
      onAppActivityDelete,
      onCommentCreate,
      onCommentDelete,
      onCommentUpdate,
      onReplyCreate,
      onTaskAssignmentUpdate,
      onTaskDelete,
      onTaskModalClose,
      onTaskUpdate,
      onTaskView,
      onVersionHistoryClick,
      translations
    } = this.props;
    const {
      isInputOpen
    } = this.state;
    const hasAnnotationCreatePermission = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, ['permissions', _constants__WEBPACK_IMPORTED_MODULE_12__["PERMISSION_CAN_CREATE_ANNOTATIONS"]], false);
    const hasCommentPermission = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_comment', false);
    const showCommentForm = !!(currentUser && hasCommentPermission && onCommentCreate && feedItems);
    const isEmpty = this.isEmpty(this.props);
    const isLoading = !this.hasLoaded();
    const activeEntry = Array.isArray(feedItems) && feedItems.find(_ref3 => {
      let {
        id,
        type
      } = _ref3;
      return id === activeFeedEntryId && type === activeFeedEntryType;
    });
    const errorMessageByEntryType = {
      annotation: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].annotationMissingError,
      comment: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].commentMissingError,
      task: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].taskMissingError
    };
    const inlineFeedItemErrorMessage = activeFeedEntryType ? errorMessageByEntryType[activeFeedEntryType] : undefined;
    const isInlineFeedItemErrorVisible = !isLoading && activeFeedEntryType && !activeEntry;
    const currentFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'file_version.id');
    return (
      /*#__PURE__*/
      // eslint-disable-next-line
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bcs-activity-feed",
        "data-testid": "activityfeed",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: ref => {
          this.feedContainer = ref;
        },
        className: "bcs-activity-feed-items-container"
      }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bcs-activity-feed-loading-state"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null)), isEmpty && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_7__["default"], {
        showAnnotationMessage: hasAnnotationCreatePermission,
        showCommentMessage: showCommentForm
      }), !isEmpty && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActiveState__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, activityFeedError, {
        items: Object(_activityFeedUtils__WEBPACK_IMPORTED_MODULE_11__["collapseFeedState"])(feedItems),
        isDisabled: isDisabled,
        currentUser: currentUser,
        currentFileVersionId: currentFileVersionId,
        onTaskAssignmentUpdate: onTaskAssignmentUpdate,
        onAnnotationDelete: onAnnotationDelete,
        onAnnotationEdit: onAnnotationEdit,
        onAnnotationSelect: onAnnotationSelect,
        onAnnotationStatusChange: onAnnotationStatusChange,
        onAppActivityDelete: onAppActivityDelete,
        onCommentDelete: hasCommentPermission ? onCommentDelete : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onCommentEdit: hasCommentPermission ? onCommentUpdate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onReplyCreate: hasCommentPermission ? onReplyCreate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onTaskDelete: onTaskDelete,
        onTaskEdit: onTaskUpdate,
        onTaskView: onTaskView,
        onTaskModalClose: onTaskModalClose,
        onVersionInfo: onVersionHistoryClick ? this.openVersionHistoryPopup : null,
        translations: translations,
        getAvatarUrl: getAvatarUrl,
        getUserProfileUrl: getUserProfileUrl,
        mentionSelectorContacts: mentionSelectorContacts,
        getMentionWithQuery: getMentionWithQuery,
        approverSelectorContacts: approverSelectorContacts,
        getApproverWithQuery: getApproverWithQuery,
        activeFeedEntryId: activeFeedEntryId,
        activeFeedEntryType: activeFeedEntryType,
        activeFeedItemRef: this.activeFeedItemRef
      })), isInlineFeedItemErrorVisible && inlineFeedItemErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_10__["default"].feedInlineErrorTitle),
        className: "bcs-feedItemInlineError"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], inlineFeedItemErrorMessage))), showCommentForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSubmit: this.resetFeedScroll,
        isDisabled: isDisabled,
        mentionSelectorContacts: mentionSelectorContacts,
        contactsLoaded: contactsLoaded,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('bcs-activity-feed-comment-input', {
          'bcs-is-disabled': isDisabled
        }),
        createComment: hasCommentPermission ? this.onCommentCreate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        getMentionWithQuery: getMentionWithQuery,
        isOpen: isInputOpen // $FlowFixMe
        ,
        user: currentUser,
        onCancel: this.commentFormCancelHandler,
        onFocus: this.commentFormFocusHandler,
        getAvatarUrl: getAvatarUrl
      }) : null)
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ActivityFeed);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss":
/*!************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityItem.tsx":
/*!***********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityItem.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "className", "isFocused"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ActivityItem(_ref, ref) {
  let {
    children,
    className,
    isFocused
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-ActivityItem', className, {
      'bcs-is-focused': isFocused
    }),
    ref: ref
  }, rest), children);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ActivityItem));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.js":
/*!************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _ActivityThreadReplies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityThreadReplies */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/activity-feed/messages.js");
/* harmony import */ var _ActivityThread_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ActivityThread.scss */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.scss");
/* harmony import */ var _ActivityThread_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ActivityThread_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const ActivityThread = _ref => {
  let {
    children,
    currentUser,
    getAvatarUrl,
    getMentionWithQuery,
    getUserProfileUrl,
    hasReplies,
    isRepliesLoading,
    mentionSelectorContacts,
    onGetReplies = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    onReplyDelete = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    onReplyEdit = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    replies = [],
    repliesTotalCount = 0,
    translations
  } = _ref;
  const [isExpanded, setIsExpanded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const toggleButtonLabel = isExpanded ? _messages__WEBPACK_IMPORTED_MODULE_6__["default"].hideReplies : _messages__WEBPACK_IMPORTED_MODULE_6__["default"].showReplies;
  const repliesToLoadCount = Math.max(repliesTotalCount - 1, 0);

  const toggleReplies = () => {
    if (!isExpanded) {
      onGetReplies();
    }

    setIsExpanded(previousState => !previousState);
  };

  if (!hasReplies) {
    return children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-ActivityThread",
    "data-testid": "activity-thread"
  }, children, isRepliesLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-ActivityThread-loading",
    "data-testid": "activity-thread-loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], null)), !isRepliesLoading && repliesTotalCount > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-ActivityThread-toggle",
    onClick: toggleReplies,
    type: "button",
    "data-testid": "activity-thread-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    values: {
      repliesToLoadCount
    }
  }, toggleButtonLabel))), !isRepliesLoading && repliesTotalCount > 0 && replies.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityThreadReplies__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    isExpanded: isExpanded,
    mentionSelectorContacts: mentionSelectorContacts,
    onDelete: onReplyDelete,
    onEdit: onReplyEdit,
    replies: replies,
    translations: translations
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityThread);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.scss":
/*!**************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.js":
/*!*******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comment */ "./src/elements/content-sidebar/activity-feed/comment/index.js");
/* harmony import */ var _ActivityThreadReplies_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityThreadReplies.scss */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.scss");
/* harmony import */ var _ActivityThreadReplies_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ActivityThreadReplies_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ActivityThreadReplies = _ref => {
  let {
    currentUser,
    getAvatarUrl,
    getMentionWithQuery,
    getUserProfileUrl,
    isExpanded,
    mentionSelectorContacts,
    onDelete,
    onEdit,
    replies,
    translations
  } = _ref;
  const lastReply = replies[replies.length - 1];

  const getReplyPermissions = reply => {
    const {
      permissions: {
        can_delete = false,
        can_edit = false,
        can_resolve = false
      }
    } = reply;
    return {
      can_delete,
      can_edit,
      can_resolve
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bcs-ActivityThreadReplies",
    "data-testid": "activity-thread-replies"
  }, !isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comment__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: lastReply.type + lastReply.id
  }, lastReply, {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    mentionSelectorContacts: mentionSelectorContacts,
    onDelete: onDelete,
    onEdit: onEdit,
    permissions: getReplyPermissions(lastReply),
    translations: translations
  })) : replies.map(reply => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comment__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: reply.type + reply.id
  }, reply, {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    mentionSelectorContacts: mentionSelectorContacts,
    onDelete: onDelete,
    onEdit: onEdit,
    permissions: getReplyPermissions(reply),
    translations: translations
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityThreadReplies);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.scss":
/*!*********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _illustrations_ActivityFeedEmptyStateIllustration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../illustrations/ActivityFeedEmptyStateIllustration */ "./src/elements/content-sidebar/activity-feed/illustrations/ActivityFeedEmptyStateIllustration.tsx");
/* harmony import */ var _illustration_EmptyStatePreviewActivity140__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../illustration/EmptyStatePreviewActivity140 */ "./src/illustration/EmptyStatePreviewActivity140.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _EmptyState_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmptyState.scss */ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.scss");
/* harmony import */ var _EmptyState_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EmptyState_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * 
 * @file Component for Activity feed empty state
 */







const EmptyState = _ref => {
  let {
    showAnnotationMessage,
    showCommentMessage
  } = _ref;
  const showActionMessage = showAnnotationMessage || showCommentMessage;
  const actionMessage = showAnnotationMessage ? _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].noActivityAnnotationPrompt : _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].noActivityCommentPrompt;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-EmptyState"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-EmptyState-illustration"
  }, showAnnotationMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_illustrations_ActivityFeedEmptyStateIllustration__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_illustration_EmptyStatePreviewActivity140__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-EmptyState-cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].noActivity, text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-EmptyState-cta-detail"
  }, text)), showActionMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
    className: "bcs-EmptyState-cta-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], actionMessage))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyState);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js ***!
  \***************************************************************************************/
/*! exports provided: ItemTypes, collapseFeedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseFeedState", function() { return collapseFeedState; });
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed utility methods
 */


const ItemTypes = {
  fileVersion: 'file_version'
};
function collapseFeedState(feedState) {
  if (!feedState) {
    return [];
  }

  return feedState.reduce((collapsedFeedState, feedItem) => {
    const previousFeedItem = collapsedFeedState.pop();

    if (!previousFeedItem) {
      return collapsedFeedState.concat([feedItem]);
    }

    if (feedItem.type === ItemTypes.fileVersion && previousFeedItem.type === ItemTypes.fileVersion && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(feedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"] && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(previousFeedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"]) {
      const {
        modified_by: tmpModifiedBy,
        versions = [previousFeedItem],
        version_start = parseInt(previousFeedItem.version_number, 10),
        version_end = parseInt(previousFeedItem.version_number, 10)
      } = previousFeedItem;
      const prevModifiedBy = tmpModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"];
      const {
        modified_by: tmpCurModifiedBy,
        created_at,
        trashed_at,
        id,
        version_number
      } = feedItem;
      const parsedVersionNumber = parseInt(version_number, 10);
      const collaborators = previousFeedItem.collaborators || {
        [prevModifiedBy.id]: _objectSpread({}, prevModifiedBy)
      };
      const modifiedBy = tmpCurModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"]; // add collaborators
      // $FlowFixMe

      collaborators[modifiedBy.id] = _objectSpread({}, modifiedBy);
      return collapsedFeedState.concat([{
        collaborators,
        created_at,
        modified_by: modifiedBy,
        trashed_at,
        id,
        type: ItemTypes.fileVersion,
        version_number,
        versions: versions.concat([feedItem]),
        version_start: Math.min(version_start, parsedVersionNumber),
        version_end: Math.max(version_end, parsedVersionNumber)
      }]);
    }

    return collapsedFeedState.concat([previousFeedItem, feedItem]);
  }, []);
}

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/index.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityFeed */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/messages.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/messages.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  annotationMissingError: {
    "id": "be.activitySidebar.activityFeed.annotationMissingError",
    "defaultMessage": "This comment no longer exists"
  },
  feedInlineErrorTitle: {
    "id": "be.activitySidebar.activityFeed.feedInlineErrorTitle",
    "defaultMessage": "Error"
  },
  taskMissingError: {
    "id": "be.activitySidebar.activityFeed.taskMissingError",
    "defaultMessage": "This task no longer exists"
  },
  commentMissingError: {
    "id": "be.activitySidebar.activityFeed.commentMissingError",
    "defaultMessage": "This comment no longer exists"
  },
  showReplies: {
    "id": "be.activitySidebar.activityFeed.showReplies",
    "defaultMessage": "See {repliesToLoadCount, plural, one {# reply} other {# replies}}"
  },
  hideReplies: {
    "id": "be.activitySidebar.activityFeed.hideReplies",
    "defaultMessage": "Hide replies"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.js":
/*!**************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/activity-error */ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/activity-message */ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _AnnotationActivityLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnnotationActivityLink */ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.tsx");
/* harmony import */ var _AnnotationActivityMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnnotationActivityMenu */ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityMenu.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _comment_form_CommentForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comment-form/CommentForm */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/annotations/messages.js");
/* harmony import */ var _SelectableActivityCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SelectableActivityCard */ "./src/elements/content-sidebar/activity-feed/SelectableActivityCard.tsx");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _AnnotationActivity_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AnnotationActivity.scss */ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.scss");
/* harmony import */ var _AnnotationActivity_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_AnnotationActivity_scss__WEBPACK_IMPORTED_MODULE_19__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const AnnotationActivity = _ref => {
  let {
    currentUser,
    item,
    getAvatarUrl,
    getMentionWithQuery,
    getUserProfileUrl,
    isCurrentVersion,
    mentionSelectorContacts,
    onDelete = lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
    onEdit = lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
    onSelect = lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
    onStatusChange = lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
  } = _ref;
  const [isConfirmingDelete, setIsConfirmingDelete] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [isEditing, setIsEditing] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const {
    created_at,
    created_by,
    description,
    error,
    file_version,
    id,
    isPending,
    permissions = {},
    status,
    target
  } = item;
  const {
    can_delete: canDelete,
    can_edit: canEdit,
    can_resolve: canResolve
  } = permissions;
  const isFileVersionUnavailable = file_version === null;
  const isCardDisabled = !!error || isConfirmingDelete || isMenuOpen || isEditing || isFileVersionUnavailable;
  const isMenuVisible = (canDelete || canEdit || canResolve) && !isPending;

  const handleDelete = () => setIsConfirmingDelete(true);

  const handleDeleteCancel = () => setIsConfirmingDelete(false);

  const handleDeleteConfirm = () => {
    setIsConfirmingDelete(false);
    onDelete({
      id,
      permissions
    });
  };

  const handleEdit = () => setIsEditing(true);

  const handleFormCancel = () => setIsEditing(false);

  const handleFormSubmit = _ref2 => {
    let {
      text
    } = _ref2;
    setIsEditing(false);
    onEdit(id, text, permissions);
  };

  const handleMenuClose = () => setIsMenuOpen(false);

  const handleMenuOpen = () => setIsMenuOpen(true);

  const handleMouseDown = event => {
    if (isCardDisabled) {
      return;
    } // Prevents document event handlers from executing because box-annotations relies on
    // detecting mouse events on the document outside of annotation targets to determine when to
    // deselect annotations


    event.stopPropagation();
  };

  const handleSelect = () => onSelect(item);

  const handleStatusChange = newStatus => onStatusChange(id, newStatus, permissions);

  const createdAtTimestamp = new Date(created_at).getTime();
  const createdByUser = created_by || _constants__WEBPACK_IMPORTED_MODULE_18__["PLACEHOLDER_USER"];
  const linkMessage = isCurrentVersion ? _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityPageItem : _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityVersionLink;
  const linkValue = isCurrentVersion ? target.location.value : lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file_version, 'version_number');
  const message = description && description.message || '';
  const activityLinkMessage = isFileVersionUnavailable ? _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityVersionUnavailable : _objectSpread(_objectSpread({}, linkMessage), {}, {
    values: {
      number: linkValue
    }
  });
  const tetherProps = {
    attachment: 'top right',
    className: 'bcs-AnnotationActivity-deleteConfirmationModal',
    constraints: [{
      to: 'scrollParent',
      attachment: 'together'
    }],
    targetAttachment: 'bottom right'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SelectableActivityCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "bcs-AnnotationActivity",
    "data-resin-feature": "annotations",
    "data-resin-iscurrent": isCurrentVersion,
    "data-resin-itemid": id,
    "data-resin-target": "annotationButton",
    isDisabled: isCardDisabled,
    onMouseDown: handleMouseDown,
    onSelect: handleSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-AnnotationActivity-media', {
      'bcs-is-pending': isPending || error
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_13__["default"].Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    getAvatarUrl: getAvatarUrl,
    user: createdByUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_13__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AnnotationActivity-headline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_16__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__["ACTIVITY_TARGETS"].PROFILE,
    getUserProfileUrl: getUserProfileUrl,
    id: createdByUser.id,
    name: createdByUser.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AnnotationActivity-timestamp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    date: createdAtTimestamp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationActivityLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "bcs-AnnotationActivity-link",
    "data-resin-target": "annotationLink",
    id: id,
    isDisabled: isFileVersionUnavailable,
    message: activityLinkMessage,
    onClick: handleSelect
  })), isEditing && currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment_form_CommentForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "bcs-AnnotationActivity-editor",
    entityId: id,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    isEditing: isEditing,
    isOpen: isEditing,
    mentionSelectorContacts: mentionSelectorContacts,
    onCancel: handleFormCancel,
    updateComment: handleFormSubmit,
    user: currentUser,
    tagged_message: message
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_message__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: id,
    tagged_message: message,
    getUserProfileUrl: getUserProfileUrl
  }))), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_error__WEBPACK_IMPORTED_MODULE_5__["default"], error) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, tetherProps, isMenuVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationActivityMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    canDelete: canDelete,
    canEdit: canEdit,
    canResolve: canResolve,
    className: "bcs-AnnotationActivity-menu",
    id: id,
    isDisabled: isConfirmingDelete,
    status: status,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onMenuClose: handleMenuClose,
    onMenuOpen: handleMenuOpen,
    onStatusChange: handleStatusChange
  }), isConfirmingDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__["ACTIVITY_TARGETS"].ANNOTATION_OPTIONS,
    isOpen: isConfirmingDelete,
    message: _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityDeletePrompt,
    onDeleteCancel: handleDeleteCancel,
    onDeleteConfirm: handleDeleteConfirm
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationActivity);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.scss":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.scss":
/*!********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.tsx ***!
  \*******************************************************************************************/
/*! exports provided: AnnotationActivityLinkBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationActivityLinkBase", function() { return AnnotationActivityLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/button */ "./src/components/button/index.ts");
/* harmony import */ var _AnnotationActivityLink_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnnotationActivityLink.scss */ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityLink.scss");
/* harmony import */ var _AnnotationActivityLink_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AnnotationActivityLink_scss__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["className", "id", "intl", "isDisabled", "message", "onClick"],
      _excluded2 = ["values"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const AnnotationActivityLink = _ref => {
  let {
    className,
    id,
    intl,
    isDisabled = false,
    message,
    onClick = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    values
  } = message,
        messageDescriptor = _objectWithoutProperties(message, _excluded2);

  const translatedMessage = intl.formatMessage(messageDescriptor, values);

  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.focus(); // Buttons do not receive focus in Firefox and Safari on MacOS

    onClick(id);
  };

  const handleMouseDown = event => {
    if (isDisabled) {
      return;
    } // Prevents document event handlers from executing because box-annotations relies on
    // detecting mouse events on the document outside of annotation targets to determine when to
    // deselect annotations. This link also may represent that annotation target in the sidebar.


    event.nativeEvent.stopImmediatePropagation();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-AnnotationActivityLink', className),
    "data-testid": "bcs-AnnotationActivity-link",
    isDisabled: isDisabled,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    title: translatedMessage,
    type: _components_button__WEBPACK_IMPORTED_MODULE_5__["ButtonType"].BUTTON
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-AnnotationActivityLink-message"
  }, translatedMessage));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(AnnotationActivityLink));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityMenu.js":
/*!******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivityMenu.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _icon_fill_Checkmark16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icon/fill/Checkmark16 */ "./src/icon/fill/Checkmark16.tsx");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.tsx");
/* harmony import */ var _icon_line_Pencil16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icon/line/Pencil16 */ "./src/icon/line/Pencil16.tsx");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _icon_fill_Trash16__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../icon/fill/Trash16 */ "./src/icon/fill/Trash16.tsx");
/* harmony import */ var _icon_fill_X16__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icon/fill/X16 */ "./src/icon/fill/X16.tsx");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/annotations/messages.js");
















const AnnotationActivityMenu = _ref => {
  let {
    canDelete,
    canEdit,
    canResolve,
    className,
    id,
    isDisabled,
    onDelete,
    onEdit,
    onMenuClose,
    onMenuOpen,
    onStatusChange,
    status
  } = _ref;
  const menuProps = {
    'data-resin-component': 'preview',
    'data-resin-feature': 'annotations'
  };
  const isResolved = status === _constants__WEBPACK_IMPORTED_MODULE_12__["COMMENT_STATUS_RESOLVED"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    constrainToScrollParent: true,
    isRightAligned: true,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-AnnotationActivityMenu', className),
    isDisabled: isDisabled,
    "data-testid": "annotation-activity-actions-menu",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_13__["bdlGray50"],
    height: 16,
    width: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_10__["Menu"], menuProps, canResolve && isResolved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
    "data-resin-itemid": id,
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["ACTIVITY_TARGETS"].ANNOTATION_OPTIONS_UNRESOLVE,
    "data-testid": "unresolve-annotation-activity",
    onClick: () => onStatusChange(_constants__WEBPACK_IMPORTED_MODULE_12__["COMMENT_STATUS_OPEN"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_X16__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityUnresolveMenuItem)), canResolve && !isResolved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
    "data-resin-itemid": id,
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["ACTIVITY_TARGETS"].ANNOTATION_OPTIONS_RESOLVE,
    "data-testid": "resolve-annotation-activity",
    onClick: () => onStatusChange(_constants__WEBPACK_IMPORTED_MODULE_12__["COMMENT_STATUS_RESOLVED"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Checkmark16__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityResolveMenuItem)), canEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
    "data-resin-itemid": id,
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["ACTIVITY_TARGETS"].ANNOTATION_OPTIONS_EDIT,
    "data-testid": "edit-annotation-activity",
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_line_Pencil16__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityEditMenuItem)), canDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
    "data-resin-itemid": id,
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["ACTIVITY_TARGETS"].ANNOTATION_OPTIONS_DELETE,
    "data-testid": "delete-annotation-activity",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Trash16__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_14__["default"].annotationActivityDeleteMenuItem))));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationActivityMenu);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/index.js":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnnotationActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnotationActivity */ "./src/elements/content-sidebar/activity-feed/annotations/AnnotationActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AnnotationActivity__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/annotations/messages.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/annotations/messages.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  annotationActivityDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityDeleteMenuItem",
    "defaultMessage": "Delete"
  },
  annotationActivityDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this comment?"
  },
  annotationActivityEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityEditMenuItem",
    "defaultMessage": "Modify"
  },
  annotationActivityPostedFullDateTime: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityPostedFullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  },
  annotationActivityPageItem: {
    "id": "be.contentSidebar.activityFeed.annotationActivityPageItem",
    "defaultMessage": "Page {number}"
  },
  annotationActivityResolveMenuItem: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityResolveMenuItem",
    "defaultMessage": "Resolve"
  },
  annotationActivityVersionLink: {
    "id": "be.contentSidebar.activityFeed.annotationActivityVersionLink",
    "defaultMessage": "Version {number}"
  },
  annotationActivityVersionUnavailable: {
    "id": "be.contentSidebar.activityFeed.annotationActivityVersionUnavailable",
    "defaultMessage": "Version Unavailable"
  },
  annotationActivityUnresolveMenuItem: {
    "id": "be.contentSidebar.activityFeed.annotationActivity.annotationActivityUnresolveMenuItem",
    "defaultMessage": "Unresolve"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.tsx");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/app-activity/messages.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/link */ "./src/components/link/index.ts");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppActivity.scss */ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_AppActivity_scss__WEBPACK_IMPORTED_MODULE_15__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file AppActivity component
 */

















function mapActivityNodes(node) {
  const {
    dataset = {},
    href = '#',
    tagName,
    textContent
  } = node;

  switch (tagName) {
    case 'A':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        href: href,
        "data-resin-target": dataset.resinTarget,
        "data-resin-action": dataset.resinAction,
        key: `app_actvity_link_${href}`,
        rel: "roreferrer noopener",
        className: "bcs-AppActivity-link",
        target: "_blank"
      }, textContent);

    default:
      return textContent;
  }
}

class AppActivity extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "parser", new DOMParser());

    _defineProperty(this, "state", {
      isConfirmingDelete: false
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      const {
        id,
        onDelete,
        permissions
      } = this.props;
      onDelete({
        id,
        permissions
      });
    });

    _defineProperty(this, "parseActivity", () => {
      const {
        rendered_text: renderedText
      } = this.props;
      const doc = this.parser.parseFromString(renderedText, 'text/html');

      if (!doc) {
        return [];
      }

      const childNodes = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(doc, 'body.childNodes', []);
      return Array.from(childNodes);
    });
  }

  render() {
    const {
      activity_template: {
        id: templateId
      },
      app: {
        name,
        icon_url
      },
      created_at: createdAt,
      created_by: createdBy,
      currentUser,
      error,
      intl,
      isPending,
      permissions
    } = this.props;
    const canDelete = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(permissions, 'can_delete', false) || currentUser && currentUser.id === createdBy.id;
    const createdAtTimestamp = new Date(createdAt).getTime();
    const isMenuVisible = canDelete && !isPending;
    const {
      isConfirmingDelete
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bcs-AppActivity",
      "data-resin-target": "loaded",
      "data-resin-feature": `appActivityCard${templateId}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'bcs-is-pending': isPending || error
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      className: "bcs-AppActivity-icon",
      alt: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_11__["default"].appActivityAltIcon, {
        appActivityName: name
      }),
      src: icon_url
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
      className: "bcs-AppActivity-body"
    }, isMenuVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, {
      attachment: "top right",
      className: "bcs-AppActivity-confirm",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Menu, {
      isDisabled: isConfirmingDelete
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_14__["MenuItem"], {
      onClick: this.handleDeleteClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_12__["bdlGray80"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_11__["default"].appActivityDeleteMenuItem))), isConfirmingDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_11__["default"].appActivityDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figcaption", {
      className: "bcs-AppActivity-headline"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: createdAtTimestamp
    })), this.parseActivity().map(mapActivityNodes))));
  }

}

_defineProperty(AppActivity, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  permissions: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(AppActivity));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/index.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppActivity */ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppActivity__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/messages.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/messages.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  appActivityDeleteMenuItem: {
    "id": "be.appActivity.deleteMenuItem",
    "defaultMessage": "Delete"
  },
  appActivityDeletePrompt: {
    "id": "be.appActivity.deletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this app activity?"
  },
  appActivityAltIcon: {
    "id": "be.appActivity.altIcon",
    "defaultMessage": "{appActivityName} Icon"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js ***!
  \********************************************************************************/
/*! exports provided: CommentFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormUnwrapped", function() { return CommentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _CommentFormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentFormControls */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js");
/* harmony import */ var _components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form-elements/draft-js-mention-selector */ "./src/components/form-elements/draft-js-mention-selector/index.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./src/components/form-elements/form/Form.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm.scss */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_scss__WEBPACK_IMPORTED_MODULE_10__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */












class CommentForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])(this.props.tagged_message)
    });

    _defineProperty(this, "onFormValidSubmitHandler", () => {
      const {
        createComment = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        updateComment = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        onSubmit,
        entityId
      } = this.props;
      const {
        text,
        hasMention
      } = this.getFormattedCommentText();

      if (!text) {
        return;
      }

      if (entityId) {
        updateComment({
          id: entityId,
          text,
          hasMention
        });
      } else {
        createComment({
          text,
          hasMention
        });
      }

      if (onSubmit) {
        onSubmit();
      }

      this.setState({
        commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])()
      });
    });

    _defineProperty(this, "onMentionSelectorChangeHandler", nextEditorState => this.setState({
      commentEditorState: nextEditorState
    }));

    _defineProperty(this, "getFormattedCommentText", () => {
      const {
        commentEditorState
      } = this.state;
      return Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["getFormattedCommentText"])(commentEditorState);
    });
  }

  componentDidUpdate(_ref) {
    let {
      isOpen: prevIsOpen
    } = _ref;
    const {
      isOpen
    } = this.props;

    if (isOpen !== prevIsOpen && !isOpen) {
      this.setState({
        commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])()
      });
    }
  }

  render() {
    const {
      className,
      getMentionWithQuery,
      intl: {
        formatMessage
      },
      isDisabled,
      isOpen,
      mentionSelectorContacts = [],
      contactsLoaded,
      onCancel,
      onFocus,
      user,
      isEditing,
      tagged_message,
      getAvatarUrl,
      showTip = true
    } = this.props;
    const {
      commentEditorState
    } = this.state;
    const inputContainerClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-CommentForm', className, {
      'bcs-is-open': isOpen
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: inputContainerClassNames
    }, !isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Figure, {
      className: "bcs-CommentForm-avatar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: user
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
      className: "bcs-CommentForm-body",
      "data-testid": "bcs-CommentForm-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onValidSubmit: this.onFormValidSubmitHandler
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bcs-CommentForm-input",
      contacts: isOpen ? mentionSelectorContacts : [],
      contactsLoaded: contactsLoaded,
      editorState: commentEditorState,
      hideLabel: true,
      isDisabled: isDisabled,
      isRequired: isOpen,
      name: "commentText",
      label: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__["default"].commentLabel),
      description: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__["default"].atMentionTipDescription),
      onChange: this.onMentionSelectorChangeHandler,
      onFocus: onFocus,
      onMention: getMentionWithQuery,
      placeholder: tagged_message ? undefined : formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__["default"].commentWrite),
      validateOnBlur: false
    }), showTip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-CommentForm-tip"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].atMentionTip)), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommentFormControls__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onCancel: onCancel
    }))));
  }

} // For testing only


_defineProperty(CommentForm, "defaultProps", {
  isOpen: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(CommentForm));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/**
 * 
 * @file Comment Input Controls components for CommentForm
 */







const CommentInputControls = _ref => {
  let {
    onCancel
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-CommentFormControls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
    onClick: onCancel,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].commentCancel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].commentPost)));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentInputControls);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/index.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommentForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/messages.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  commentCancel: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentCancel",
    "defaultMessage": "Cancel"
  },
  commentLabel: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentLabel",
    "defaultMessage": "Write a comment"
  },
  commentPost: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentPost",
    "defaultMessage": "Post"
  },
  commentWrite: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentWrite",
    "defaultMessage": "Write a comment"
  },
  approvalAddAssignee: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddAssignee",
    "defaultMessage": "Add an assignee"
  },
  approvalAddTask: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTask",
    "defaultMessage": "Add Task"
  },
  approvalAddTaskTooltip: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTaskTooltip",
    "defaultMessage": "Assigning a task to someone will send them a notification with the message in the comment box and allow them to approve or deny."
  },
  approvalAssignees: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAssignees",
    "defaultMessage": "Assignees"
  },
  approvalDueDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalDueDate",
    "defaultMessage": "Due Date"
  },
  approvalSelectDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalSelectDate",
    "defaultMessage": "Select a date"
  },
  atMentionTip: {
    "id": "be.contentSidebar.activityFeed.commentForm.atMentionTip",
    "defaultMessage": "@mention users to notify them."
  },
  atMentionTipDescription: {
    "id": "be.contentSidebar.activityFeed.commentForm.atMentionTipDescription",
    "defaultMessage": "Use the @ symbol to mention users and use the up and down arrow keys to scroll through autocomplete suggestions."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/Comment.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/Comment.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon_line_Trash16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icon/line/Trash16 */ "./src/icon/line/Trash16.tsx");
/* harmony import */ var _icon_line_Pencil16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icon/line/Pencil16 */ "./src/icon/line/Pencil16.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.tsx");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/activity-error */ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/activity-message */ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../comment-form */ "./src/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment/messages.js");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Comment.scss */ "./src/elements/content-sidebar/activity-feed/comment/Comment.scss");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Comment_scss__WEBPACK_IMPORTED_MODULE_20__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























class Comment extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isConfirmingDelete: false,
      isEditing: false,
      isInputOpen: false
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      const {
        id,
        onDelete,
        permissions
      } = this.props;
      onDelete({
        id,
        permissions
      });
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleEditClick", () => {
      this.setState({
        isEditing: true,
        isInputOpen: true
      });
    });

    _defineProperty(this, "commentFormFocusHandler", () => this.setState({
      isInputOpen: true
    }));

    _defineProperty(this, "commentFormCancelHandler", () => this.setState({
      isInputOpen: false,
      isEditing: false
    }));

    _defineProperty(this, "commentFormSubmitHandler", () => this.setState({
      isInputOpen: false,
      isEditing: false
    }));

    _defineProperty(this, "handleMessageUpdate", _ref => {
      let {
        id,
        text,
        hasMention
      } = _ref;
      const {
        onEdit,
        permissions
      } = this.props;
      onEdit(id, text, undefined, hasMention, permissions);
      this.commentFormSubmitHandler();
    });
  }

  render() {
    const {
      created_by,
      created_at,
      permissions = {},
      id,
      isPending,
      error,
      tagged_message = '',
      translatedTaggedMessage,
      translations,
      currentUser,
      isDisabled,
      getAvatarUrl,
      getUserProfileUrl,
      getMentionWithQuery,
      mentionSelectorContacts,
      onEdit
    } = this.props;
    const {
      isConfirmingDelete,
      isEditing,
      isInputOpen
    } = this.state;
    const createdAtTimestamp = new Date(created_at).getTime();
    const createdByUser = created_by || _constants__WEBPACK_IMPORTED_MODULE_18__["PLACEHOLDER_USER"];
    const canEdit = onEdit !== lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a && permissions.can_edit;
    const canDelete = permissions.can_delete;
    const isMenuVisible = (canDelete || canEdit) && !isPending;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "bcs-Comment"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-Comment-media', {
        'bcs-is-pending': isPending || error
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: createdByUser
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, isMenuVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, {
      attachment: "top right",
      className: "bcs-Comment-deleteConfirmationModal",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Menu, {
      isDisabled: isConfirmingDelete,
      "data-testid": "comment-actions-menu",
      menuProps: {
        'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS
      }
    }, canEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_EDIT,
      "data-testid": "edit-comment",
      onClick: this.handleEditClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_line_Pencil16__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentEditMenuItem)), canDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_DELETE,
      "data-testid": "delete-comment",
      onClick: this.handleDeleteClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_line_Trash16__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentDeleteMenuItem))), isConfirmingDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS,
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Comment-headline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].PROFILE,
      id: createdByUser.id,
      name: createdByUser.name,
      getUserProfileUrl: getUserProfileUrl
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: createdAtTimestamp
    })), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment_form__WEBPACK_IMPORTED_MODULE_17__["default"], {
      isDisabled: isDisabled,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-Comment-editor', {
        'bcs-is-disabled': isDisabled
      }),
      updateComment: this.handleMessageUpdate,
      isOpen: isInputOpen // $FlowFixMe
      ,
      user: currentUser,
      onCancel: this.commentFormCancelHandler,
      onFocus: this.commentFormFocusHandler,
      isEditing: isEditing,
      entityId: id,
      tagged_message: tagged_message,
      getAvatarUrl: getAvatarUrl,
      mentionSelectorContacts: mentionSelectorContacts,
      getMentionWithQuery: getMentionWithQuery
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_message__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
      id: id,
      tagged_message: tagged_message,
      translatedTaggedMessage: translatedTaggedMessage
    }, translations, {
      translationFailed: error ? true : null,
      getUserProfileUrl: getUserProfileUrl
    })))), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_error__WEBPACK_IMPORTED_MODULE_15__["default"], error) : null);
  }

}

_defineProperty(Comment, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  onEdit: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
});

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/Comment.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/Comment.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/index.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./src/elements/content-sidebar/activity-feed/comment/Comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/messages.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/messages.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  commentDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeleteMenuItem",
    "defaultMessage": "Delete"
  },
  commentDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this comment?"
  },
  commentEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentEditMenuItem",
    "defaultMessage": "Modify"
  },
  commentPostedFullDateTime: {
    "id": "be.contentSidebar.activityFeed.comment.commentPostedFullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/ActivityDatestamp.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-datestamp/ActivityDatestamp.tsx ***!
  \****************************************************************************************************/
/*! exports provided: MILLISECONDS_PER_YEAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_PER_YEAR", function() { return MILLISECONDS_PER_YEAR; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/time/ReadableTime */ "./src/components/time/ReadableTime.js");
const _excluded = ["date"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


// @ts-ignore flow import

const MILLISECONDS_PER_YEAR = 365 * 24 * 60 * 60 * 1000; // 365 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
// TODO: duplicated ReadableTime props until it migrates to typescript

const ActivityDatestamp = _ref => {
  let {
    date
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const now = new Date().getTime();
  const dateInMs = new Date(date).getTime(); // Only show time if activity time is within the last year

  const showTime = now - dateInMs < MILLISECONDS_PER_YEAR;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    timestamp: dateInMs,
    alwaysShowTime: showTime,
    relativeThreshold: 0
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityDatestamp);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-datestamp/index.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityDatestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityDatestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/ActivityDatestamp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityDatestamp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js":
/*!*******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/inline-error */ "./src/components/inline-error/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityError.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActivityError_scss__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["action", "message", "title", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ActivityError = _ref => {
  let {
    action,
    message,
    title,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-ActivityError', className),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, title, rest))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message)), action ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-ActivityError-action lnk",
    onClick: action.onAction,
    type: "button"
  }, action.text) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityError);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss":
/*!*********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js":
/*!***********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityError */ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js":
/*!***********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatTaggedMessage */ "./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js");
/* harmony import */ var _ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowOriginalButton */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js");
/* harmony import */ var _TranslateButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TranslateButton */ "./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActivityMessage.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ActivityMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isLoading: false,
      isTranslation: false
    });

    _defineProperty(this, "handleTranslate", event => {
      const {
        id,
        tagged_message,
        onTranslate = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        translatedTaggedMessage
      } = this.props;

      if (!translatedTaggedMessage) {
        this.setState({
          isLoading: true
        });
        onTranslate({
          id,
          tagged_message
        });
      }

      this.setState({
        isTranslation: true
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleShowOriginal", event => {
      this.setState({
        isTranslation: false
      });
      event.preventDefault();
    });
  }

  componentDidUpdate(prevProps) {
    const {
      translatedTaggedMessage,
      translationFailed
    } = this.props;
    const {
      translatedTaggedMessage: prevTaggedMessage,
      translationFailed: prevTranslationFailed
    } = prevProps;

    if (prevTaggedMessage === translatedTaggedMessage || prevTranslationFailed === translationFailed) {
      return;
    }

    if (translatedTaggedMessage || translationFailed) {
      this.setState({
        isLoading: false
      });
    }
  }

  getButton(isTranslation) {
    let button = null;

    if (isTranslation) {
      button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleShowOriginal: this.handleShowOriginal
      });
    } else {
      button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TranslateButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleTranslate: this.handleTranslate
      });
    }

    return button;
  }

  render() {
    const {
      id,
      tagged_message,
      translatedTaggedMessage,
      translationEnabled,
      getUserProfileUrl
    } = this.props;
    const {
      isLoading,
      isTranslation
    } = this.state;
    const commentToDisplay = translationEnabled && isTranslation && translatedTaggedMessage ? translatedTaggedMessage : tagged_message;
    return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-ActivityMessageLoading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "small"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-ActivityMessage"
    }, Object(_utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(commentToDisplay, id, false, getUserProfileUrl), translationEnabled ? this.getButton(isTranslation) : null);
  }

}

_defineProperty(ActivityMessage, "defaultProps", {
  translationEnabled: false
});

/* harmony default export */ __webpack_exports__["default"] = (ActivityMessage);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss":
/*!*************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js":
/*!**************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Show Original button component used by Comment Text component
 */





const ShowOriginalButton = _ref => {
  let {
    handleShowOriginal
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleShowOriginal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].activityMessageShowOriginal));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowOriginalButton);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js":
/*!***********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Translate button component used by Comment Text component
 */





const TranslateButton = _ref => {
  let {
    handleTranslate
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleTranslate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].activityMessageTranslate));
};

/* harmony default export */ __webpack_exports__["default"] = (TranslateButton);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js":
/*!*************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityMessage */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  activityMessageShowOriginal: {
    "id": "be.contentSidebar.activityFeed.commmon.showOriginalMessage",
    "defaultMessage": "Show Original"
  },
  activityMessageTranslate: {
    "id": "be.contentSidebar.activityFeed.common.translateMessage",
    "defaultMessage": "Translate"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js":
/*!***************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _activity_datestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-datestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/index.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityTimestamp.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const ActivityTimestamp = _ref => {
  let {
    date
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].fullDateTime, {
      values: {
        time: date
      }
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    className: "bcs-ActivityTimestamp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_activity_datestamp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityTimestamp);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityTimestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js":
/*!******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  fullDateTime: {
    "id": "be.activityFeed.fullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/button */ "./src/components/button/index.ts");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/primary-button */ "./src/components/primary-button/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants.js");
/* harmony import */ var _components_flyout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/flyout */ "./src/components/flyout/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteConfirmation.scss */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8__);
const _excluded = ["isOpen", "message", "onDeleteCancel", "onDeleteConfirm"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Comment component
 */










class DeleteConfirmation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onKeyDown", event => {
      const {
        nativeEvent
      } = event;
      const {
        isOpen,
        onDeleteCancel
      } = this.props;
      nativeEvent.stopImmediatePropagation();

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__["KEYS"].escape:
          event.stopPropagation();
          event.preventDefault();

          if (isOpen) {
            onDeleteCancel();
          }

          break;

        default:
          break;
      }
    });
  }

  render() {
    const _this$props = this.props,
          {
      isOpen,
      message,
      onDeleteCancel,
      onDeleteConfirm
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_flyout__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _extends({
      className: "be-modal bcs-DeleteConfirmation",
      onKeyDown: this.onKeyDown,
      role: "dialog",
      shouldDefaultFocus: true,
      shouldOutlineFocus: false
    }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-DeleteConfirmation-promptMessage"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bcs-DeleteConfirmation-cancel",
      onClick: onDeleteCancel,
      type: "button",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].INLINE_DELETE_CANCEL
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].cancel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-DeleteConfirmation-delete",
      onClick: onDeleteConfirm,
      type: "button",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].INLINE_DELETE_CONFIRM
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].delete))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DeleteConfirmation);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteConfirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/link */ "./src/components/link/index.ts");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserLink.scss */ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UserLink_scss__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["name", "getUserProfileUrl", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class UserLink extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {});

    _defineProperty(this, "getProfileUrlHandler", profileUrl => {
      this.setState({
        profileUrl
      });
    });
  }

  /**
   * Gets the profile URL for the user from the getUserProfileUrl prop
   *
   * @return {Promise} a promise which resolves with the profileUrl string
   */
  getUserProfileUrl() {
    const {
      id,
      getUserProfileUrl
    } = this.props;

    if (!getUserProfileUrl) {
      return Promise.resolve();
    }

    return getUserProfileUrl(id).then(this.getProfileUrlHandler);
  }

  componentDidMount() {
    this.getUserProfileUrl();
  }

  render() {
    const _this$props = this.props,
          {
      name,
      getUserProfileUrl,
      className
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      profileUrl
    } = this.state;
    return profileUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-UserLink', className)
    }, rest, {
      href: profileUrl
    }), name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", rest, name);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserLink);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss":
/*!***********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UserLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/illustrations/ActivityFeedEmptyStateIllustration.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/illustrations/ActivityFeedEmptyStateIllustration.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/accessible-svg */ "./src/icons/accessible-svg/index.ts");



const ActivityFeedEmptyStateIllustration = _ref => {
  let {
    className = '',
    width = 140,
    height = 140
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `bcs-ActivityFeedEmptyStateIllustration ${className}`,
    height: height,
    viewBox: "0 0 140 140",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#FFF",
    d: "M42 39h63c2.761 0 5 2.239 5 5v68H42c-2.761 0-5-2.239-5-5V44c0-2.761 2.239-5 5-5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#E5EFFA",
    d: "M13.871 122c2.138 0 3.87 1.79 3.87 4s-1.732 4-3.87 4S10 128.21 10 126s1.733-4 3.871-4zM95 27c5.523 0 10 4.477 10 10v2H42c-2.689 0-4.882 2.122-4.995 4.783L37 44v63h-2c-5.523 0-10-4.477-10-10V37c0-5.523 4.477-10 10-10h60zm6 65c.552 0 1 .448 1 1s-.448 1-1 1H47c-.552 0-1-.448-1-1s.448-1 1-1zm-4-10c.552 0 1 .448 1 1s-.448 1-1 1H47c-.552 0-1-.448-1-1s.448-1 1-1zm-3-10c.552 0 1 .448 1 1s-.448 1-1 1H47c-.552 0-1-.448-1-1s.448-1 1-1zm-5-10c.552 0 1 .448 1 1s-.448 1-1 1H47c-.552 0-1-.448-1-1s.448-1 1-1zm-4-10c.552 0 1 .448 1 1s-.448 1-1 1H47c-.552 0-1-.448-1-1s.448-1 1-1zm37.258-42c4.276 0 7.742 3.582 7.742 8s-3.466 8-7.742 8-7.742-3.582-7.742-8 3.466-8 7.742-8z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#0061D5",
    d: "M111 106c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1s-.448 1-1 1h-5v5c0 .552-.448 1-1 1s-1-.448-1-1v-5h-5c-.552 0-1-.448-1-1s.448-1 1-1h5v-5c0-.552.448-1 1-1zm-60 6c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm-55-6c.552 0 1 .448 1 1 0 2.849 1.913 5 5 5 .552 0 1 .448 1 1s-.448 1-1 1c-4.248 0-7-3.095-7-7 0-.552.448-1 1-1zm83-3c.552 0 1 .448 1 1v3c0 .552-.448 1-1 1h-3c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1h3zM46 47c.513 0 .936.386.993.883L47 48v47c0 3.785 3.005 6.87 6.76 6.996L54 102h37c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L91 104H54c-4.882 0-8.856-3.887-8.996-8.735L45 95V48c0-.552.448-1 1-1zM36 97c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm58-30c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.626 0-1.22-.144-1.747-.4l-6.61 6.744C85.871 81.85 86 82.41 86 83c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.593.13-1.156.36-1.663l-2.627-2.73C75.209 78.858 74.62 79 74 79c-.849 0-1.636-.264-2.284-.716L61.284 88.716c.452.648.716 1.435.716 2.284 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.632 0 1.23.147 1.762.408l10.646-10.646C70.147 76.23 70 75.632 70 75c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .862-.272 1.66-.736 2.312l2.37 2.462C80.297 79.288 81.114 79 82 79c.889 0 1.71.29 2.374.78l6.353-6.48C90.269 72.65 90 71.856 90 71c0-2.21 1.79-4 4-4zm17 20c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm-75 0c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm22 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm24-8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm29-4c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm-75 0c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm38-4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm37-6c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm-75 0c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm58 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm17-12c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm-75 0c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm75-10c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm-75 0c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zm6-10c.552 0 1 .448 1 1s-.448 1-1 1c-3.087 0-5 2.151-5 5 0 .552-.448 1-1 1s-1-.448-1-1c0-3.905 2.752-7 7-7zm63 0c4.248 0 7 3.095 7 7 0 .552-.448 1-1 1s-1-.448-1-1c0-2.849-1.913-5-5-5-.552 0-1-.448-1-1s.448-1 1-1zm-54 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zm10 0c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "#E5EFFA",
    d: "M58 89c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm24-8c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm-8-8c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm20-4c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityFeedEmptyStateIllustration);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/index.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-feed */ "./src/elements/content-sidebar/activity-feed/activity-feed/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _activity_feed__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskError.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskError.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _api_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/messages */ "./src/api/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/inline-notice/InlineNotice */ "./src/components/inline-notice/InlineNotice.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Component for in-modal error messages for tasks
 */








const TaskError = _ref => {
  let {
    editMode,
    error,
    taskType
  } = _ref;
  const isEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_EDIT"];
  const isForbiddenErrorOnEdit = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'status') === 403 && isEditMode;
  const taskGroupExceedsError = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'code') === _constants__WEBPACK_IMPORTED_MODULE_5__["ERROR_CODE_GROUP_EXCEEDS_LIMIT"];
  const errorTitle = isForbiddenErrorOnEdit ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskEditWarningTitle : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskCreateErrorTitle;
  let errorMessage = isEditMode ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskUpdateErrorMessage : _api_messages__WEBPACK_IMPORTED_MODULE_4__["default"].taskCreateErrorMessage;

  if (!error) {
    return null;
  } // error message changes when a forbidden operation occurs while editing a task


  if (isForbiddenErrorOnEdit) {
    switch (taskType) {
      case 'GENERAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskGeneralAssigneeRemovalWarningMessage;
        break;

      case 'APPROVAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskApprovalAssigneeRemovalWarningMessage;
        break;

      default:
        return null;
    }
  }

  return taskGroupExceedsError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "warning",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskGroupExceedsLimitWarningTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _api_messages__WEBPACK_IMPORTED_MODULE_4__["default"].taskGroupExceedsLimitWarningMessage, {
    values: {
      max: _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_MAX_GROUP_ASSIGNEES"]
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "error",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], errorTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], errorMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskError);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js ***!
  \**************************************************************************/
/*! exports provided: TaskFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return TaskForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _comment_form_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comment-form/messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./src/components/form-elements/form/Form.js");
/* harmony import */ var _components_modal_ModalActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/modal/ModalActions */ "./src/components/modal/ModalActions.js");
/* harmony import */ var _components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/contact-datalist-item/ContactDatalistItem */ "./src/components/contact-datalist-item/ContactDatalistItem.tsx");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/date-picker/DatePicker */ "./src/components/date-picker/DatePicker.tsx");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/checkbox */ "./src/components/checkbox/index.ts");
/* harmony import */ var _components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/pill-selector-dropdown/PillSelectorDropdown */ "./src/components/pill-selector-dropdown/PillSelectorDropdown.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _TaskError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TaskError */ "./src/elements/content-sidebar/activity-feed/task-form/TaskError.js");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./TaskForm.scss */ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_scss__WEBPACK_IMPORTED_MODULE_22__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */
























function convertAssigneesToSelectorItems(approvers) {
  return approvers.map(_ref => {
    let {
      target
    } = _ref;
    const newSelectorItem = {
      id: target.id,
      name: target.name,
      item: target,
      value: target.id,
      text: target.name // for PillSelectorDropdown SelectorOptions type

    };
    return newSelectorItem;
  });
}

class TaskForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", this.getInitialFormState());

    _defineProperty(this, "validateForm", (only, invalidSubmitValidityState) => {
      this.setState(state => {
        const {
          intl
        } = this.props;
        const {
          approvers,
          message,
          approverTextInput
        } = state;
        const assigneeFieldMissingError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].requiredFieldError)
        };
        const assigneeFieldInvalidError = {
          code: 'invalid',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].invalidUserError)
        };
        const messageFieldError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].requiredFieldError)
        };
        const taskDueDateError = {
          code: 'invalid',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].invalidDateError)
        };
        const formValidityState = {
          taskAssignees: (approverTextInput.length ? assigneeFieldInvalidError : null) || (approvers.length ? null : assigneeFieldMissingError),
          taskName: message ? null : messageFieldError,
          taskDueDate: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(invalidSubmitValidityState, 'taskDueDate.validityState.patternMismatch') ? taskDueDateError : null
        };
        const isValid = Object.values(formValidityState).every(val => val == null);
        return {
          isValid,
          formValidityState: only ? _objectSpread(_objectSpread({}, state.formValidityState), {}, {
            [only]: formValidityState[only]
          }) : formValidityState
        };
      });
    });

    _defineProperty(this, "getErrorByFieldname", fieldName => {
      const {
        formValidityState
      } = this.state;
      return formValidityState[fieldName] ? formValidityState[fieldName].message : null;
    });

    _defineProperty(this, "clearForm", () => this.setState(this.getInitialFormState()));

    _defineProperty(this, "handleInvalidSubmit", invalidSubmitValidityState => {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(invalidSubmitValidityState)) {
        this.validateForm(undefined, invalidSubmitValidityState);
      } else {
        this.validateForm();
      }
    });

    _defineProperty(this, "handleSubmitSuccess", () => {
      const {
        onSubmitSuccess
      } = this.props;

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      this.clearForm();
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "handleSubmitError", e => {
      const {
        onSubmitError
      } = this.props;
      onSubmitError(e);
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "addResinInfo", () => {
      const {
        id,
        taskType,
        editMode
      } = this.props;
      const {
        dueDate
      } = this.state;
      const addedAssignees = this.getAddedAssignees();
      const removedAssignees = this.getRemovedAssignees();
      return {
        'data-resin-taskid': id,
        'data-resin-tasktype': taskType,
        'data-resin-isediting': editMode === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_EDIT_MODE_EDIT"],
        'data-resin-numassigneesadded': addedAssignees.filter(assignee => assignee.target.type === 'user').length,
        'data-resin-numgroupssadded': addedAssignees.filter(assignee => assignee.target.type === 'group').length,
        'data-resin-numassigneesremoved': removedAssignees.length,
        'data-resin-assigneesadded': addedAssignees.map(assignee => assignee.target.id),
        'data-resin-assigneesremoved': removedAssignees.map(assignee => assignee.target.id),
        'data-resin-duedate': dueDate && dueDate.getTime()
      };
    });

    _defineProperty(this, "getAddedAssignees", () => {
      // Added assignees are the ones in state that weren't in the prop
      const {
        approvers
      } = this.props;
      const {
        approvers: currentApprovers
      } = this.state;
      const approverIds = approvers.map(approver => approver.id);
      return currentApprovers.filter(currentApprover => approverIds.indexOf(currentApprover.id) === -1);
    });

    _defineProperty(this, "getRemovedAssignees", () => {
      // Assignees to remove are the ones in the prop that cannot be found in state
      const {
        approvers
      } = this.props;
      const {
        approvers: currentApprovers
      } = this.state;
      const currentApproverIds = currentApprovers.map(currentApprover => currentApprover.id);
      return approvers.filter(approver => currentApproverIds.indexOf(approver.id) === -1);
    });

    _defineProperty(this, "handleValidSubmit", () => {
      const {
        id,
        createTask,
        editTask,
        editMode,
        taskType
      } = this.props;
      const {
        message,
        approvers: currentApprovers,
        dueDate,
        completionRule,
        isValid
      } = this.state;
      const dueDateString = dueDate && dueDate.toISOString();
      if (!isValid) return;
      this.setState({
        isLoading: true
      });

      if (editMode === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_EDIT_MODE_EDIT"] && editTask) {
        editTask({
          id,
          completion_rule: completionRule,
          description: message,
          due_at: dueDateString,
          addedAssignees: convertAssigneesToSelectorItems(this.getAddedAssignees()),
          removedAssignees: this.getRemovedAssignees()
        }, this.handleSubmitSuccess, this.handleSubmitError);
      } else {
        createTask(message, convertAssigneesToSelectorItems(currentApprovers), taskType, dueDateString, completionRule, this.handleSubmitSuccess, this.handleSubmitError);
      }
    });

    _defineProperty(this, "handleDueDateChange", date => {
      let dateValue = null;

      if (date) {
        dateValue = new Date(date); // The date given to us is midnight of the date selected.
        // Modify date to be the end of day (minus 1 millisecond) for the given due date

        dateValue.setHours(23, 59, 59, 999);
      }

      this.setState({
        dueDate: dateValue
      });
      this.validateForm('taskDueDate');
    });

    _defineProperty(this, "handleCompletionRuleChange", event => {
      this.setState({
        completionRule: event.target.checked ? _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_COMPLETION_RULE_ANY"] : _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_COMPLETION_RULE_ALL"]
      });
    });

    _defineProperty(this, "handleApproverSelectorInput", value => {
      const {
        getApproverWithQuery = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a
      } = this.props;
      this.setState({
        approverTextInput: value
      });
      getApproverWithQuery(value);
    });

    _defineProperty(this, "handleApproverSelectorSelect", pills => {
      this.setState({
        approvers: this.state.approvers.concat(pills.map(pill => {
          return {
            id: '',
            target: pill.item,
            role: 'ASSIGNEE',
            type: 'task_collaborator',
            status: 'NOT_STARTED',
            permissions: {
              can_delete: false,
              can_update: false
            }
          };
        })),
        approverTextInput: ''
      });
      this.validateForm('taskAssignees');
    });

    _defineProperty(this, "handleApproverSelectorRemove", (option, index) => {
      const approvers = [...this.state.approvers];
      approvers.splice(index, 1);
      this.setState({
        approvers
      });
      this.validateForm('taskAssignees');
    });

    _defineProperty(this, "handleChangeMessage", e => {
      e.persist();
      this.setState({
        message: e.currentTarget.value
      });
      this.validateForm('taskName');
    });

    _defineProperty(this, "handleCancelClick", () => {
      this.props.onCancel();
    });
  }

  getInitialFormState() {
    const {
      dueDate,
      id,
      message,
      approvers,
      completionRule
    } = this.props;
    return {
      id,
      completionRule: completionRule || _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_COMPLETION_RULE_ALL"],
      approvers,
      approverTextInput: '',
      dueDate: dueDate ? new Date(dueDate) : null,
      formValidityState: {},
      message,
      isLoading: false,
      isValid: null
    };
  }

  render() {
    const {
      approverSelectorContacts,
      className,
      error,
      isDisabled,
      intl,
      editMode,
      taskType
    } = this.props;
    const {
      dueDate,
      approvers,
      message,
      formValidityState,
      isLoading,
      completionRule
    } = this.state;
    const inputContainerClassNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()('bcs-task-input-container', 'bcs-task-input-is-open', className);
    const isCreateEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_EDIT_MODE_CREATE"];
    const selectedApprovers = convertAssigneesToSelectorItems(approvers); // filter out selected approvers
    // map to datalist item format

    const approverOptions = approverSelectorContacts.filter(_ref2 => {
      let {
        id
      } = _ref2;
      return !selectedApprovers.find(_ref3 => {
        let {
          value
        } = _ref3;
        return value === id;
      });
    });
    const pillSelectorOverlayClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      scrollable: approverOptions.length > 4
    });
    const submitButtonMessage = isCreateEditMode ? _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTaskFormSubmitLabel : _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksEditTaskFormSubmitLabel;
    const shouldShowCompletionRule = approvers.length > 0; // Enable checkbox when there is a group or multiple users being assigned
    // TODO: consider setting contants for assignee types to src/constants.js
    // - move from src/features/collaborator-avatars/constants.js

    const isCompletionRuleCheckboxDisabled = approvers.filter(approver => approver.target.type === 'group').length <= 0 && approvers.filter(approver => approver.target.type === 'user').length <= 1;
    const isCompletionRuleCheckboxChecked = completionRule === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_COMPLETION_RULE_ANY"];
    const isForbiddenErrorOnEdit = isLoading || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'status') === 403 && !isCreateEditMode;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: inputContainerClassNames,
      "data-resin-component": "taskform"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-task-input-form-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskError__WEBPACK_IMPORTED_MODULE_21__["default"], {
      editMode: editMode,
      error: error,
      taskType: taskType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
      formValidityState: formValidityState,
      onInvalidSubmit: this.handleInvalidSubmit,
      onValidSubmit: this.handleValidSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: pillSelectorOverlayClasses,
      error: this.getErrorByFieldname('taskAssignees'),
      disabled: isForbiddenErrorOnEdit,
      inputProps: {
        'data-testid': 'task-form-assignee-input'
      },
      isRequired: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTaskFormSelectAssigneesLabel),
      name: "taskAssignees",
      onBlur: () => this.validateForm('taskAssignees'),
      onInput: this.handleApproverSelectorInput,
      onRemove: this.handleApproverSelectorRemove,
      onSelect: this.handleApproverSelectorSelect,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_8__["default"].approvalAddAssignee),
      selectedOptions: selectedApprovers,
      selectorOptions: approverOptions,
      shouldSetActiveItemOnOpen: true,
      shouldClearUnmatchedInput: true,
      validateForError: () => this.validateForm('taskAssignees')
    }, approverOptions.map(_ref4 => {
      let {
        id,
        name,
        item = {}
      } = _ref4;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: id,
        "data-testid": "task-assignee-option",
        name: name,
        subtitle: item.type === 'group' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskCreateGroupLabel) : item.email
      });
    })), shouldShowCompletionRule && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["FeatureFlag"], {
      feature: "activityFeed.tasks.assignToGroup"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "data-testid": "task-form-completion-rule-checkbox-group",
      isChecked: isCompletionRuleCheckboxChecked,
      isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAnyCheckboxLabel),
      tooltip: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAnyInfoGroupTooltip),
      name: "completionRule",
      onChange: this.handleCompletionRuleChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_feature_checking__WEBPACK_IMPORTED_MODULE_17__["FeatureFlag"], {
      not: true,
      feature: "activityFeed.tasks.assignToGroup"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "data-testid": "task-form-completion-rule-checkbox",
      isChecked: isCompletionRuleCheckboxChecked,
      isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAnyCheckboxLabel),
      tooltip: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAnyInfoTooltip),
      name: "completionRule",
      onChange: this.handleCompletionRuleChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_area__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "bcs-task-name-input",
      "data-testid": "task-form-name-input",
      disabled: isDisabled || isForbiddenErrorOnEdit,
      error: this.getErrorByFieldname('taskName'),
      isRequired: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTaskFormMessageLabel),
      name: "taskName",
      onBlur: () => this.validateForm('taskName'),
      onChange: this.handleChangeMessage,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_8__["default"].commentWrite),
      value: message
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: "bcs-task-add-due-date-input",
      error: this.getErrorByFieldname('taskDueDate'),
      inputProps: {
        [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].TASK_DATE_PICKER,
        'data-testid': 'task-form-date-input'
      },
      isAccessible: true,
      isDisabled: isForbiddenErrorOnEdit,
      isKeyboardInputAllowed: true,
      isRequired: false,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTaskFormDueDateLabel),
      minDate: new Date(),
      name: "taskDueDate",
      onChange: this.handleDueDateChange,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_8__["default"].approvalSelectDate),
      value: dueDate || undefined
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_modal_ModalActions__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
      className: "bcs-task-input-cancel-btn",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
      "data-testid": "task-form-cancel-button",
      onClick: this.handleCancelClick,
      isDisabled: isLoading,
      type: "button"
    }, this.addResinInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTaskFormCancelLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({
      className: "bcs-task-input-submit-btn",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST,
      "data-testid": "task-form-submit-button",
      isDisabled: isForbiddenErrorOnEdit,
      isLoading: isLoading
    }, this.addResinInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], submitButtonMessage))))));
  }

} // For testing only


_defineProperty(TaskForm, "defaultProps", {
  approvers: [],
  approverSelectorContacts: [],
  editMode: _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_EDIT_MODE_CREATE"],
  id: '',
  message: ''
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(TaskForm));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/index.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/index.js ***!
  \***********************************************************************/
/*! exports provided: TaskFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["TaskFormUnwrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/messages.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/messages.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  taskCreateErrorTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskCreateErrorTitle",
    "defaultMessage": "Error"
  },
  taskEditWarningTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskEditWarningTitle",
    "defaultMessage": "Task Updated with Errors"
  },
  taskGroupExceedsLimitWarningTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskGroupExceedsWarningTitle",
    "defaultMessage": "Exceeded max assignees per group"
  },
  taskUpdateErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskUpdateErrorMessage",
    "defaultMessage": "An error occurred while modifying this task. Please try again."
  },
  taskApprovalAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskApprovalAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now approved."
  },
  taskGeneralAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskGeneralAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now completed."
  },
  tasksAddTaskFormSelectAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSelectAssigneesLabel",
    "defaultMessage": "Select Assignees"
  },
  tasksAddTaskFormMessageLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormMessageLabel",
    "defaultMessage": "Message"
  },
  tasksAddTaskFormDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormDueDateLabel",
    "defaultMessage": "Due Date"
  },
  tasksAddTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSubmitLabel",
    "defaultMessage": "Create"
  },
  tasksEditTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksEditTaskFormSubmitLabel",
    "defaultMessage": "Update"
  },
  tasksAddTaskFormCancelLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormCancelLabel",
    "defaultMessage": "Cancel"
  },
  taskAnyCheckboxLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyCheckboxLabel",
    "defaultMessage": "Only one assignee is required to complete this task"
  },
  taskAnyInfoTooltip: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyInfoTooltip",
    "defaultMessage": "By default, all assignees are required to take action before a task is complete. Selecting this option will require only one assignee to complete this task."
  },
  taskAnyInfoGroupTooltip: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyInfoGroupTooltip",
    "defaultMessage": "Selecting this option will require only one assignee to complete this task. This will include assignees across all groups."
  },
  taskCreateGroupLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskCreateGroupLabel",
    "defaultMessage": "Group"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_activity_datestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/activity-datestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/index.ts");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AssigneeDetails.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const statusMessages = {
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_APPROVED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusApproved,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_REJECTED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusRejected,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_COMPLETED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusCompleted,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_NOT_STARTED"]]: null
};
const AssigneeDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](_ref => {
  let {
    user,
    status,
    completedAt,
    className
  } = _ref;
  const statusMessage = statusMessages[status] || null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'bcs-AssigneeDetails')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeDetails-name"
  }, user.name ? user.name : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].priorCollaborator)), statusMessage && completedAt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeDetails-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, statusMessage, {
    values: {
      dateTime: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_datestamp__WEBPACK_IMPORTED_MODULE_3__["default"], {
        date: completedAt
      })
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (AssigneeDetails);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarGroupAvatar */ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js");
/* harmony import */ var _AssigneeDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssigneeDetails */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssigneeList.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const DEFAULT_ASSIGNEES_SHOWN = 3;
const TASKS_PAGE_SIZE = 20; // service does not return the page size to the client at the moment

function AssigneeList(props) {
  const {
    initialAssigneeCount = DEFAULT_ASSIGNEES_SHOWN,
    users = {},
    getAvatarUrl,
    isOpen,
    onCollapse,
    onExpand
  } = props;
  const {
    entries = [],
    next_marker
  } = users;
  const entryCount = entries.length;
  const numVisibleAssignees = isOpen ? entryCount : initialAssigneeCount;
  const visibleUsers = entries.slice(0, numVisibleAssignees).map(_ref => {
    let {
      id,
      target,
      status,
      completed_at: completedAt
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: id,
      className: "bcs-AssigneeList-listItem",
      "data-testid": "assignee-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      status: status,
      className: "bcs-AssigneeList-listItemAvatar",
      user: target,
      getAvatarUrl: getAvatarUrl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AssigneeDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: target,
      status: status,
      completedAt: completedAt
    }));
  });
  const hiddenAssigneeCount = Math.max(0, entryCount - initialAssigneeCount);
  const maxAdditionalAssignees = TASKS_PAGE_SIZE - initialAssigneeCount;
  const hasMoreAssigneesThanPageSize = hiddenAssigneeCount > maxAdditionalAssignees || next_marker;
  const additionalAssigneeMessage = hasMoreAssigneesThanPageSize ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowMoreAssigneesOverflow : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowMoreAssignees;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "bcs-AssigneeList-list",
    "data-testid": "task-assignee-list"
  }, visibleUsers), !isOpen && hiddenAssigneeCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "showmorebtn",
    "data-testid": "show-more-assignees",
    onClick: onExpand,
    className: "lnk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, additionalAssigneeMessage, {
    values: {
      additionalAssigneeCount: hasMoreAssigneesThanPageSize ? maxAdditionalAssignees : hiddenAssigneeCount
    }
  })))), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "showlessbtn",
    "data-testid": "show-less-assignees",
    onClick: onCollapse,
    className: "lnk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowLessAssignees))));
}

/* harmony default export */ __webpack_exports__["default"] = (AssigneeList);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss":
/*!*******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconVerified */ "./src/icons/general/IconVerified.tsx");
/* harmony import */ var _icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconRejected */ "./src/icons/general/IconRejected.tsx");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AvatarGroupAvatar.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["status"],
      _excluded2 = ["user", "status", "getAvatarUrl", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const StatusIcon = _ref => {
  let {
    status
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_APPROVED"]:
    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_COMPLETED"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_4__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_REJECTED"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_5__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_NOT_STARTED"]:
    default:
      return null;
  }
};

const AvatarGroupAvatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](_ref2 => {
  let {
    user,
    status,
    getAvatarUrl,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-AvatarGroupAvatar', className),
    "data-testid": "avatar-group-avatar-container"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "bcs-AvatarGroupAvatar-avatar",
    user: user,
    getAvatarUrl: getAvatarUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusIcon, {
    status: status,
    className: `bcs-AvatarGroupAvatar-statusIcon ${lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default()(status)}`,
    height: 12,
    width: 12,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAssignmentCompleted)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AvatarGroupAvatar);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss":
/*!************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/Task.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/Task.js ***!
  \*********************************************************************/
/*! exports provided: TaskComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return Task; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.tsx");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.ts");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/activity-error */ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/activity-message */ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskApproval */ "./src/icons/two-toned/IconTaskApproval.tsx");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskGeneral */ "./src/icons/two-toned/IconTaskGeneral.tsx");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.tsx");
/* harmony import */ var _icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../icons/general/IconPencil */ "./src/icons/general/IconPencil.tsx");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _api_APIFactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../api/APIFactory */ "./src/api/APIFactory.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _TaskActions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./TaskActions */ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js");
/* harmony import */ var _TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TaskCompletionRuleIcon */ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js");
/* harmony import */ var _TaskDueDate__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./TaskDueDate */ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js");
/* harmony import */ var _TaskStatus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./TaskStatus */ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js");
/* harmony import */ var _AssigneeList__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./AssigneeList */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../TaskModal */ "./src/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _TaskMultiFileIcon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./TaskMultiFileIcon */ "./src/elements/content-sidebar/activity-feed/task-new/TaskMultiFileIcon.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Task.scss */ "./src/elements/content-sidebar/activity-feed/task-new/Task.scss");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_Task_scss__WEBPACK_IMPORTED_MODULE_35__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































class Task extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      loadCollabError: undefined,
      assignedToFull: this.props.assigned_to,
      modalError: undefined,
      isEditing: false,
      isLoading: false,
      isAssigneeListOpen: false,
      isConfirmingDelete: false
    });

    _defineProperty(this, "handleAssigneeListExpand", () => {
      this.getAllTaskCollaborators(() => {
        this.setState({
          isAssigneeListOpen: true
        });
      });
    });

    _defineProperty(this, "handleAssigneeListCollapse", () => {
      this.setState({
        isAssigneeListOpen: false
      });
    });

    _defineProperty(this, "handleEditClick", () => {
      this.getAllTaskCollaborators(() => {
        this.setState({
          isEditing: true
        });
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      const {
        id,
        onDelete,
        permissions
      } = this.props;

      if (onDelete) {
        onDelete({
          id,
          permissions
        });
      }
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleEditModalClose", () => {
      const {
        onModalClose
      } = this.props;
      this.setState({
        isEditing: false,
        modalError: undefined
      });

      if (onModalClose) {
        onModalClose();
      }
    });

    _defineProperty(this, "handleEditSubmitError", error => {
      this.setState({
        modalError: error
      });
    });

    _defineProperty(this, "getAllTaskCollaborators", onSuccess => {
      const {
        id,
        api,
        task_links,
        assigned_to
      } = this.props;
      const {
        errorOccured
      } = _common_messages__WEBPACK_IMPORTED_MODULE_33__["default"];
      const {
        taskCollaboratorLoadErrorMessage
      } = _messages__WEBPACK_IMPORTED_MODULE_34__["default"]; // skip fetch when there are no additional collaborators

      if (!assigned_to.next_marker) {
        this.setState({
          assignedToFull: assigned_to
        });
        onSuccess();
        return;
      } // fileid is required for api calls, check for presence


      const fileId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(task_links, 'entries[0].target.id');

      if (!fileId) {
        return;
      }

      this.setState({
        isLoading: true
      });
      api.getTaskCollaboratorsAPI(false).getTaskCollaborators({
        task: {
          id
        },
        file: {
          id: fileId
        },
        errorCallback: () => {
          this.setState({
            isLoading: false,
            loadCollabError: {
              message: taskCollaboratorLoadErrorMessage,
              title: errorOccured
            }
          });
        },
        successCallback: assignedToFull => {
          this.setState({
            assignedToFull,
            isLoading: false
          });
          onSuccess();
        }
      });
    });

    _defineProperty(this, "handleTaskAction", (taskId, assignmentId, taskStatus) => {
      const {
        onAssignmentUpdate
      } = this.props;
      this.setState({
        isAssigneeListOpen: false
      });
      onAssignmentUpdate(taskId, assignmentId, taskStatus);
    });
  }

  render() {
    const {
      approverSelectorContacts,
      assigned_to,
      completion_rule,
      created_at,
      created_by,
      currentUser,
      due_at,
      error,
      features,
      getApproverWithQuery,
      getAvatarUrl,
      getUserProfileUrl,
      id,
      isPending,
      description,
      onEdit,
      onView,
      permissions,
      status,
      task_links,
      task_type,
      translatedTaggedMessage,
      translations
    } = this.props;
    const {
      assignedToFull,
      modalError,
      isEditing,
      isLoading,
      loadCollabError,
      isAssigneeListOpen,
      isConfirmingDelete
    } = this.state;
    const inlineError = loadCollabError || error;
    const assignments = assigned_to && assigned_to.entries;
    const currentUserAssignment = assignments && assignments.find(_ref => {
      let {
        target
      } = _ref;
      return target.id === currentUser.id;
    });
    const createdByUser = created_by.target || _constants__WEBPACK_IMPORTED_MODULE_23__["PLACEHOLDER_USER"];
    const createdAtTimestamp = new Date(created_at).getTime();
    const isTaskCompleted = !(status === _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_NOT_STARTED"] || status === _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_IN_PROGRESS"]);
    const isCreator = created_by.target.id === currentUser.id;
    const isMultiFile = task_links.entries.length > 1;
    let shouldShowActions;

    if (isTaskCompleted) {
      shouldShowActions = false;
    } else if (isMultiFile && isCreator) {
      shouldShowActions = true;
    } else {
      shouldShowActions = currentUserAssignment && currentUserAssignment.permissions && currentUserAssignment.permissions.can_update && currentUserAssignment.status === _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_NOT_STARTED"];
    }

    const TaskTypeIcon = task_type === _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_TYPE_APPROVAL"] ? _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_17__["default"] : _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_18__["default"];
    const isMenuVisible = (permissions.can_delete || permissions.can_update) && !isPending;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "bcs-Task",
      "data-resin-feature": "tasks",
      "data-resin-taskid": id,
      "data-resin-tasktype": task_type,
      "data-resin-numassignees": assignments && assignments.length
    }, inlineError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_error__WEBPACK_IMPORTED_MODULE_13__["default"], inlineError) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('bcs-Task-media', {
        'bcs-is-pending': isPending || isLoading
      }),
      "data-testid": "task-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Figure, {
      className: "bcs-Task-avatar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: createdByUser
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TaskTypeIcon, {
      width: 20,
      height: 20,
      className: "bcs-Task-avatarBadge"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, isMenuVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_6___default.a, {
      attachment: "top right",
      className: "bcs-Task-deleteConfirmationModal",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Menu, {
      isDisabled: isConfirmingDelete,
      "data-testid": "task-actions-menu",
      menuProps: {
        'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__["ACTIVITY_TARGETS"].TASK_OPTIONS
      }
    }, permissions.can_update && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__["ACTIVITY_TARGETS"].TASK_OPTIONS_EDIT,
      "data-testid": "edit-task",
      onClick: this.handleEditClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_20__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_25__["bdlGray80"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_34__["default"].taskEditMenuItem)), permissions.can_delete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__["ACTIVITY_TARGETS"].TASK_OPTIONS_DELETE,
      "data-testid": "delete-task",
      onClick: this.handleDeleteClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_19__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_25__["bdlGray80"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_34__["default"].taskDeleteMenuItem))), isConfirmingDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__["ACTIVITY_TARGETS"].TASK_OPTIONS,
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_34__["default"].taskDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-headline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, createdByUser, {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_24__["ACTIVITY_TARGETS"].PROFILE,
      getUserProfileUrl: getUserProfileUrl
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_15__["default"], {
      date: createdAtTimestamp
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-status"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskStatus__WEBPACK_IMPORTED_MODULE_29__["default"], {
      status: status
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskMultiFileIcon__WEBPACK_IMPORTED_MODULE_32__["default"], {
      isMultiFile: isMultiFile
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_27__["default"], {
      completionRule: completion_rule
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-dueDate"
    }, !!due_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskDueDate__WEBPACK_IMPORTED_MODULE_28__["default"], {
      dueDate: due_at,
      status: status
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_message__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({
      id: id,
      tagged_message: description,
      translatedTaggedMessage: translatedTaggedMessage
    }, translations, {
      translationFailed: error ? true : null,
      getUserProfileUrl: getUserProfileUrl
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-assigneeListContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AssigneeList__WEBPACK_IMPORTED_MODULE_30__["default"], {
      isOpen: isAssigneeListOpen,
      onCollapse: this.handleAssigneeListCollapse,
      onExpand: this.handleAssigneeListExpand,
      getAvatarUrl: getAvatarUrl,
      initialAssigneeCount: 3,
      users: isAssigneeListOpen ? assignedToFull : assigned_to
    })), shouldShowActions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-actionsContainer",
      "data-testid": "action-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskActions__WEBPACK_IMPORTED_MODULE_26__["default"], {
      isMultiFile: isMultiFile,
      taskType: task_type,
      onTaskApproval: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => // $FlowFixMe checked by shouldShowActions
      this.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_APPROVED"]),
      onTaskReject: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => // $FlowFixMe checked by shouldShowActions
      this.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_REJECTED"]),
      onTaskComplete: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => this.handleTaskAction(id, // $FlowFixMe checked by shouldShowActions
      currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_NEW_COMPLETED"]),
      onTaskView: onView && (() => onView(id, isCreator))
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskModal__WEBPACK_IMPORTED_MODULE_31__["default"], {
      editMode: _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_EDIT_MODE_EDIT"],
      error: modalError,
      feedbackUrl: Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_7__["getFeatureConfig"])(features, 'activityFeed.tasks').feedbackUrl || '',
      onSubmitError: this.handleEditSubmitError,
      onSubmitSuccess: this.handleEditModalClose,
      onModalClose: this.handleEditModalClose,
      isTaskFormOpen: isEditing,
      taskFormProps: {
        id,
        approvers: assignedToFull.entries,
        approverSelectorContacts,
        completionRule: completion_rule,
        getApproverWithQuery,
        getAvatarUrl,
        createTask: () => {},
        editTask: onEdit,
        dueDate: due_at,
        message: description
      },
      taskType: task_type
    }));
  }

}

_defineProperty(Task, "defaultProps", {
  completion_rule: _constants__WEBPACK_IMPORTED_MODULE_23__["TASK_COMPLETION_RULE_ALL"]
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_7__["withFeatureConsumer"], _common_api_context__WEBPACK_IMPORTED_MODULE_8__["withAPIContext"]])(Task));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/Task.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/Task.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/button */ "./src/components/button/index.ts");
/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/primary-button */ "./src/components/primary-button/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskActions.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TaskActions_scss__WEBPACK_IMPORTED_MODULE_7__);









const TaskActions = _ref => {
  let {
    isMultiFile,
    onTaskApproval,
    onTaskReject,
    onTaskComplete,
    onTaskView,
    taskType
  } = _ref;
  let action = null;

  if (isMultiFile) {
    action = onTaskView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "view-task",
      onClick: onTaskView,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_VIEW_DETAILS
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedViewDetailsAction));
  } else if (taskType === _constants__WEBPACK_IMPORTED_MODULE_6__["TASK_TYPE_APPROVAL"]) {
    action = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "reject-task",
      onClick: onTaskReject,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_REJECT
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedRejectAction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "approve-task",
      onClick: onTaskApproval,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_APPROVE
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedApproveAction)));
  } else if (taskType === _constants__WEBPACK_IMPORTED_MODULE_6__["TASK_TYPE_GENERAL"]) {
    action = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "complete-task",
      onClick: onTaskComplete,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_COMPLETE
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedCompleteAction));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-TaskActions"
  }, action);
};

/* harmony default export */ __webpack_exports__["default"] = (TaskActions);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_label_pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/label-pill */ "./src/components/label-pill/index.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _icon_line_Avatar16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icon/line/Avatar16 */ "./src/icon/line/Avatar16.tsx");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskCompletionRuleIcon.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_7__);



 // $FlowFixMe LabelPill is in typescript






const TaskCompletionRuleIcon = _ref => {
  let {
    completionRule
  } = _ref;
  return completionRule === _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_COMPLETION_RULE_ANY"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-TaskCompletionRuleIcon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "top-center",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskAnyAffordanceTooltip)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Pill, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Icon, {
    Component: _icon_line_Avatar16__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Text, {
    className: "bcs-TaskCompletionRuleIcon-oneSize"
  }, "1"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskCompletionRuleIcon);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss":
/*!*****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_activity_datestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/activity-datestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-datestamp/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_label_pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/label-pill */ "./src/components/label-pill/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // $FlowFixMe LabelPill is in typescript




const TaskDueDate = _ref => {
  let {
    dueDate,
    status
  } = _ref;
  const isOverdue = dueDate ? status === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_NOT_STARTED"] && new Date(dueDate) < Date.now() : false;
  const fullDueDate = new Date(dueDate);
  const pillProps = isOverdue ? {
    'data-testid': 'task-overdue-date',
    type: 'error'
  } : {
    type: 'default'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "data-testid": "task-due-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Pill, pillProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedStatusDue, {
    values: {
      dateTime: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_datestamp__WEBPACK_IMPORTED_MODULE_2__["default"], {
        date: fullDueDate.getTime(),
        uppercase: true
      })
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskDueDate);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskMultiFileIcon.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskMultiFileIcon.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_label_pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/label-pill */ "./src/components/label-pill/index.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _icon_line_MoveCopy16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icon/line/MoveCopy16 */ "./src/icon/line/MoveCopy16.tsx");


 // $FlowFixMe LabelPill is in typescript





const TaskMultiFileIcon = _ref => {
  let {
    isMultiFile
  } = _ref;
  return isMultiFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "top-center",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskMultipleFilesAffordanceTooltip)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_3__["default"].Pill, {
    "data-testid": "multifile-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_3__["default"].Icon, {
    Component: _icon_line_MoveCopy16__WEBPACK_IMPORTED_MODULE_5__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskMultiFileIcon);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_label_pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/label-pill */ "./src/components/label-pill/index.ts");



 // $FlowFixMe LabelPill is in typescript


const statusMessageKeyMap = {
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_APPROVED"]]: _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedApprovedUppercaseLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_COMPLETED"]]: _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedCompletedUppercaseLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_REJECTED"]]: _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedRejectedUppercaseLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_NOT_STARTED"]]: _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedInProgressUppercaseLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_IN_PROGRESS"]]: _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskFeedInProgressUppercaseLabel
};
const typeKeyMap = {
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_APPROVED"]]: 'success',
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_COMPLETED"]]: 'success',
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_REJECTED"]]: 'error',
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_NOT_STARTED"]]: 'default',
  [_constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_IN_PROGRESS"]]: 'default'
};
const Status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](_ref => {
  let {
    status
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Pill, {
    type: typeKeyMap[status]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], statusMessageKeyMap[status])));
});
/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/index.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/index.js ***!
  \**********************************************************************/
/*! exports provided: default, TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/elements/content-sidebar/activity-feed/task-new/Task.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["TaskComponent"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/messages.js":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/messages.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  taskCollaboratorLoadErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskCollaboratorLoadErrorMessage",
    "defaultMessage": "An error has occurred while loading collaborators for this task. Please try again."
  },
  taskShowMoreAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssignees",
    "defaultMessage": "Show {additionalAssigneeCount} More"
  },
  taskShowMoreAssigneesOverflow: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssigneesOverflow",
    "defaultMessage": "{additionalAssigneeCount, plural, one {Show #+ More} other {Show #+ More}}"
  },
  taskShowLessAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowLessAssignees",
    "defaultMessage": "Show Less"
  },
  taskDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskDueDateLabel",
    "defaultMessage": "Due: {date}"
  },
  tasksFeedApproveAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApproveAction",
    "defaultMessage": "Approve"
  },
  tasksFeedCompleteAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompleteAction",
    "defaultMessage": "Mark as Complete"
  },
  tasksFeedRejectAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectAction",
    "defaultMessage": "Reject"
  },
  tasksFeedViewDetailsAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedViewDetailsAction",
    "defaultMessage": "View Task Details"
  },
  tasksFeedCompletedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompletedLabel",
    "defaultMessage": "Completed"
  },
  taskFeedCompletedUppercaseLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompletedUppercaseLabel",
    "defaultMessage": "COMPLETED"
  },
  tasksFeedApprovedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApprovedLabel",
    "defaultMessage": "Approved"
  },
  taskFeedApprovedUppercaseLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApprovedUppercaseLabel",
    "defaultMessage": "APPROVED"
  },
  tasksFeedRejectedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectedLabel",
    "defaultMessage": "Rejected"
  },
  taskFeedRejectedUppercaseLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectedUppercaseLabel",
    "defaultMessage": "REJECTED"
  },
  tasksFeedInProgressLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedInProgressLabel",
    "defaultMessage": "In Progress"
  },
  taskFeedInProgressUppercaseLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedInProgressUppercaseLabel",
    "defaultMessage": "IN PROGRESS"
  },
  tasksFeedHeadlineApprovalCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApprovalCurrentUser",
    "defaultMessage": "{user} assigned you an Approval Task"
  },
  tasksFeedHeadlineApproval: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApproval",
    "defaultMessage": "{user} assigned an Approval Task"
  },
  tasksFeedHeadlineGeneralCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneralCurrentUser",
    "defaultMessage": "{user} assigned you a Task"
  },
  tasksFeedHeadlineGeneral: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneral",
    "defaultMessage": "{user} assigned a Task"
  },
  tasksFeedMoreAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedMoreAssigneesLabel",
    "defaultMessage": "See all assignees"
  },
  tasksFeedAssigneeListTitle: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedAssigneeListTitle",
    "defaultMessage": "Assignees"
  },
  tasksFeedStatusRejected: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusRejected",
    "defaultMessage": "Rejected {dateTime}"
  },
  tasksFeedStatusApproved: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusApproved",
    "defaultMessage": "Approved {dateTime}"
  },
  tasksFeedStatusCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusCompleted",
    "defaultMessage": "Completed {dateTime}"
  },
  taskFeedStatusDue: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskFeedStatusDue",
    "defaultMessage": "DUE {dateTime}"
  },
  taskAssignmentCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskAssignmentCompleted",
    "defaultMessage": "Completed"
  },
  taskDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskDeleteMenuItem",
    "defaultMessage": "Delete task"
  },
  taskEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskEditMenuItem",
    "defaultMessage": "Modify task"
  },
  taskDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.task.taskDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this task?"
  },
  taskAnyAffordanceTooltip: {
    "id": "be.contentSidebar.activityFeed.task.taskAnyAffordanceTooltip",
    "defaultMessage": "Only one assignee is required to complete this task"
  },
  taskMultipleFilesAffordanceTooltip: {
    "id": "be.contentSidebar.activityFeed.task.taskMultipleFilesAffordanceTooltip",
    "defaultMessage": "There are multiple files associated with this task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/link */ "./src/components/link/index.ts");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/**
 * 
 * @file Util for formatting tagged messages
 */



 // this regex matches one of the following regular expressions:
// mentions: ([@＠﹫]\[[0-9]+:[^\]]+])
// urls: (?:\b)((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)
// NOTE: There are useless escapes in the regex below, should probably remove them when safe
// eslint-disable-next-line

const splitRegex = /((?:[@＠﹫]\[[0-9]+:[^\]]+])|(?:\b(?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?))/gim;
/**
 * Formats a message a string and replaces the following:
 * - all occurrence of mention patterns with a UserLink component
 * - all occurrence of urls with a Link component
 * Ex mention format: @[123:Hello World]
 * @param {String} tagged_message The message string to format
 * @param {String} itemID The id of the tagged message
 * @param {Boolean} shouldReturnString The boolean value whether it should return string
 * @param {Function} [getUserProfileUrl] The method to generate a user profile url
 * @returns {String|React.Node}
 */

const formatTaggedMessage = (tagged_message, itemID, shouldReturnString, getUserProfileUrl) => {
  const contentItems = tagged_message.split(splitRegex).map((text, contentIndex) => {
    const contentKey = `${contentIndex}-${itemID}`; // attempt mention match

    const mentionMatch = text.match(/([@＠﹫])\[([0-9]+):([^\]]+)]/i);

    if (mentionMatch) {
      const [, trigger, id, name] = mentionMatch;

      if (shouldReturnString) {
        return `${trigger}${name}`;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: contentKey,
        className: "bcs-comment-mention",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].MENTION,
        getUserProfileUrl: getUserProfileUrl,
        id: id,
        name: `${trigger}${name}`
      });
    }

    if (!shouldReturnString) {
      // attempt url match
      // NOTE: There are useless escapes in the regex below, should probably remove them when safe
      const urlMatch = text.match( // eslint-disable-next-line no-useless-escape
      /((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)/i);

      if (urlMatch) {
        const [, url] = urlMatch;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          key: contentKey,
          href: url
        }, url);
      }
    }

    return text;
  });
  return shouldReturnString ? contentItems.join('') : contentItems;
};

/* harmony default export */ __webpack_exports__["default"] = (formatTaggedMessage);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js ***!
  \********************************************************************************/
/*! exports provided: CollapsedVersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersionBase", function() { return CollapsedVersion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconInfo */ "./src/icons/general/IconInfo.tsx");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Version.scss */ "./src/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Collapsed Version component
 */










function getMessageForAction(action, collaborators, version_start, version_end) {
  // We only support collapsing for multiple upload versions
  if (action !== 'upload') {
    return null;
  }

  const collaboratorIDs = Object.keys(collaborators);
  const numberOfCollaborators = collaboratorIDs.length;
  const versionRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-range"
  }, version_start, " - ", version_end);

  if (numberOfCollaborators === 1) {
    const collaborator = collaborators[collaboratorIDs[0]];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].versionUploadCollapsed, {
      values: {
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, collaborator.name),
        versions: versionRange
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].versionMultipleUsersUploaded, {
    values: {
      numberOfCollaborators,
      versions: versionRange
    }
  }));
}

const CollapsedVersion = props => {
  // $FlowFixMe
  const action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_6__["default"].getVersionAction(props);
  const {
    collaborators,
    intl,
    onInfo,
    versions,
    version_start,
    version_end
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-Version"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-message"
  }, getMessageForAction(action, collaborators, version_start, version_end)), onInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: () => {
      onInfo({
        versions
      });
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(CollapsedVersion));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/Version.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/Version.js ***!
  \***********************************************************************/
/*! exports provided: VersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionBase", function() { return Version; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActivityCard */ "./src/elements/content-sidebar/activity-feed/ActivityCard.tsx");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconInfo */ "./src/icons/general/IconInfo.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Version.scss */ "./src/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Version component
 */










const ACTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_8__["VERSION_DELETE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionDeleted,
  [_constants__WEBPACK_IMPORTED_MODULE_8__["VERSION_PROMOTE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionPromoted,
  [_constants__WEBPACK_IMPORTED_MODULE_8__["VERSION_RESTORE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRestored,
  [_constants__WEBPACK_IMPORTED_MODULE_8__["VERSION_UPLOAD_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionUploaded
};

const Version = props => {
  // $FlowFixMe
  const action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_6__["default"].getVersionAction(props);
  const {
    id,
    intl,
    onInfo,
    version_number,
    version_promoted
  } = props; // $FlowFixMe

  const user = _common_selectors_version__WEBPACK_IMPORTED_MODULE_6__["default"].getVersionUser(props);
  const name = user.name === _constants__WEBPACK_IMPORTED_MODULE_8__["FILE_REQUEST_NAME"] ? intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].fileRequestDisplayName) : user.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActivityCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-Version"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, ACTION_MAP[action], {
    values: {
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, name),
      version_number,
      version_promoted
    }
  }))), onInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: () => {
      onInfo({
        id,
        version_number
      });
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(Version));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/Version.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/Version.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/index.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/index.js ***!
  \*********************************************************************/
/*! exports provided: CollapsedVersion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsedVersion */ "./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersion", function() { return _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version */ "./src/elements/content-sidebar/activity-feed/version/Version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Version__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/icon/fill/Checkmark16.tsx":
/*!***************************************!*\
  !*** ./src/icon/fill/Checkmark16.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Checkmark16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  d: "M6.617 14c.55 0 .968-.2 1.253-.603l6.34-9.273c.102-.15.175-.296.221-.438.046-.143.069-.28.069-.41a1.2 1.2 0 00-.387-.912C13.855 2.121 13.53 2 13.139 2c-.26 0-.482.05-.666.15-.183.101-.357.275-.52.523l-5.357 8.152-2.693-3.12a1.327 1.327 0 00-1.05-.476c-.39 0-.714.121-.97.364-.255.243-.383.55-.383.919 0 .163.029.319.087.466.058.147.162.302.311.466l3.518 4.023c.318.355.719.533 1.201.533z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Checkmark16);

/***/ }),

/***/ "./src/icon/fill/Trash16.tsx":
/*!***********************************!*\
  !*** ./src/icon/fill/Trash16.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Trash16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-3.5 2h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Trash16);

/***/ }),

/***/ "./src/icon/line/Avatar16.tsx":
/*!************************************!*\
  !*** ./src/icon/line/Avatar16.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Avatar16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray"],
  fillRule: "evenodd",
  d: "M8 9.5a6.497 6.497 0 015.63 3.251.5.5 0 01-.865.5A5.497 5.497 0 008 10.5a5.497 5.497 0 00-4.767 2.754.5.5 0 11-.866-.5A6.497 6.497 0 018 9.5zM8 2a3 3 0 110 6 3 3 0 010-6zm0 1a2 2 0 100 4 2 2 0 000-4z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Avatar16);

/***/ }),

/***/ "./src/icon/line/MoveCopy16.tsx":
/*!**************************************!*\
  !*** ./src/icon/line/MoveCopy16.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const MoveCopy16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray"],
  fillRule: "evenodd",
  d: "M13 3c.557 0 .942.345.994.875L14 4v11H4V3h9zm0 1H5v10h8V4zm-2-3v1H3v10H2V1h9zm-.5 9c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3zm0-3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3z"
}));

/* harmony default export */ __webpack_exports__["default"] = (MoveCopy16);

/***/ }),

/***/ "./src/icon/line/Pencil16.tsx":
/*!************************************!*\
  !*** ./src/icon/line/Pencil16.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Pencil16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray"],
  fillRule: "evenodd",
  d: "M3.829 9.096l7.392-7.392a.997.997 0 011.418.01l1.4 1.4c.395.395.397 1.032.01 1.419l-7.392 7.392L3.83 9.096zm1.414 0l1.414 1.414 6.685-6.684c-.005.004-.005 0-.01-.004l-1.4-1.401c-.005-.005-.006-.007-.006-.008L5.243 9.096zM2.925 10l2.829 2.828-3.398 1.184c-.52.18-.791-.105-.614-.614L2.925 10zm3.904 3h7v1h-7v-1z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Pencil16);

/***/ }),

/***/ "./src/icon/line/Trash16.tsx":
/*!***********************************!*\
  !*** ./src/icon/line/Trash16.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const Trash16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray"],
  fillRule: "evenodd",
  d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-1.2 1H3.2l1.6 9.9s.1.1.2.1h6c.06 0 .12-.036.158-.065l.042-.035L12.8 3zm-2.3 1c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Trash16);

/***/ }),

/***/ "./src/icons/general/IconPencil.tsx":
/*!******************************************!*\
  !*** ./src/icons/general/IconPencil.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconPencil = _ref => {
  let {
    className = '',
    color = '#777777',
    height = 13,
    title,
    width = 13
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-pencil ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M12,1c-0.8-0.8-2.1-0.8-2.9,0L2,8.1c0,0,0,0-0.1,0.1l0,0c0,0,0,0,0,0.1l0,0L0.6,12c-0.1,0.2,0,0.4,0.2,0.5 c0.1,0,0.2,0,0.2,0l3.7-1.3l0,0c0,0,0,0,0.1,0l0,0c0,0,0,0,0.1-0.1l6.5-6.5l0,0L12,3.9C12.8,3.1,12.8,1.8,12,1z M4.6,10.2L2.8,8.4 l6-6l1.8,1.8L4.6,10.2z M2.4,9.1l1.5,1.5l-2.4,0.8L2.4,9.1z M11.5,3.4l-0.4,0.4L9.3,1.9l0.4-0.4c0.5-0.5,1.3-0.5,1.8,0 C12,2.1,12,2.9,11.5,3.4z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPencil);

/***/ }),

/***/ "./src/icons/general/IconRejected.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconRejected.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconRejected = _ref => {
  let {
    className = '',
    color = '#ED3757',
    height = 18,
    title,
    width = 18
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-rejected ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 9,
    cy: 9,
    fill: color,
    r: 9
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 7.586l2.828-2.829 1.415 1.415L10.414 9l2.829 2.828-1.415 1.415L9 10.414l-2.828 2.829-1.415-1.415L7.586 9 4.757 6.172l1.415-1.415z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconRejected);

/***/ }),

/***/ "./src/icons/two-toned/IconTaskApproval.tsx":
/*!**************************************************!*\
  !*** ./src/icons/two-toned/IconTaskApproval.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");




const IconTaskApproval = _ref => {
  let {
    className = '',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `bdl-IconTaskApproval ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "nonzero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16",
    cy: "16",
    r: "16"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(8 5.333)",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11.267 6.51c-1.133 2.242-1.669 4.276-1.614 6.102.006.213-.177.388-.405.388H6.752c-.228 0-.41-.175-.405-.388.055-1.826-.481-3.86-1.614-6.102C2.953 2.986 4.557 0 8 0s5.047 2.986 3.267 6.51z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: "14.337",
    width: "16",
    height: "3.353",
    rx: "1.676"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    x: "1.143",
    y: "18.808",
    width: "13.714",
    height: "1.192",
    rx: ".596"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskApproval);

/***/ }),

/***/ "./src/icons/two-toned/IconTaskGeneral.tsx":
/*!*************************************************!*\
  !*** ./src/icons/two-toned/IconTaskGeneral.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");




const IconTaskGeneral = _ref => {
  let {
    className = '',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `bdl-IconTaskGeneral ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fillRule: "nonzero",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16.162",
    cy: "16.162",
    r: "16"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11.717 8.162v.889c0 1.472.995 2.666 2.222 2.666h4.445c1.227 0 2.222-1.194 2.222-2.666v-.89h1.281c.766 0 1.386.62 1.386 1.386v13.23c0 .764-.62 1.385-1.386 1.385H10.436c-.765 0-1.385-.62-1.385-1.386V9.546c0-.764.62-1.384 1.385-1.384h1.281zm6.463 6.503l-2.741 2.924-1.354-1.203a.889.889 0 1 0-1.18 1.329l2 1.778c.36.32.909.295 1.238-.057l3.334-3.555a.889.889 0 1 0-1.297-1.216zm-4.981-6.503h5.926v.889c0 .49-.332.888-.741.888h-4.445c-.409 0-.74-.398-.74-.888v-.89z",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskGeneral);

/***/ }),

/***/ "./src/illustration/EmptyStatePreviewActivity140.tsx":
/*!***********************************************************!*\
  !*** ./src/illustration/EmptyStatePreviewActivity140.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

const EmptyStatePreviewActivity140 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 140,
  height: 140,
  viewBox: "0 0 140 140"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 102,
  cy: 93,
  r: 8,
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M81 32c18.809 0 34 13.02 34 29 0 15.373-14.1 28.104-32.087 28.955l-1.51.071 1.043 2.17.467 1.008C83.625 94.771 84 95.76 84 96c0 .684-.263 1-1 1-1.161 0-2.917-.894-5.391-2.793l-.298-.233-.57-.462c-.951-.787-2.218-1.898-3.793-3.329l-1.455-1.33-.244-.063c-.5-.128-.996-.265-1.486-.41.11-.659.182-1.325.215-1.999l.018-.507L70 85.5c0-10.979-10.064-19.881-22.672-20.47A24.93 24.93 0 0147 61c0-15.98 15.191-29 34-29z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  fillRule: "nonzero",
  d: "M81 30c19.851 0 36 13.842 36 31 0 15.857-13.831 28.974-31.75 30.786l-.544.052-.211.016.338.734.25.564c.547 1.258.843 2.115.905 2.651l.01.11L86 96c0 1.716-1.07 3-3 3-1.733 0-3.807-1.056-6.609-3.207l-.35-.274-.597-.485a95.536 95.536 0 01-2.599-2.251l-.633-.569-1.705-1.551-.206-.053c-.327-.088-.652-.18-.974-.274-1.684 5.956-6.435 10.994-12.974 13.666l-.222.088-1.698 1.465-.895.76-.807.674a48.3 48.3 0 01-2.053 1.626l-.151.11c-2.04 1.467-3.76 2.275-5.027 2.275-1.526 0-2.5-.921-2.5-2.391l.003-.104c.031-.492.275-1.198.745-2.195l.187-.386-.345-.026C31.478 104.867 22 96.148 22 85.5c0-11.065 10.223-20.021 22.97-20.481l.33-.01a26.72 26.72 0 01-.276-2.868l-.02-.726L45 61c0-17.158 16.149-31 36-31zM46 67c-12.183 0-22 8.323-22 18.5 0 10.039 9.561 18.297 21.556 18.496l1.64.028-.775 1.445c-.931 1.736-1.421 2.886-1.421 3.14 0 .34.055.391.5.391.733 0 2.134-.658 3.86-1.899l.262-.193.521-.4.4-.315c.698-.56 1.569-1.284 2.608-2.173l1.924-1.663.163-.063C62.972 99.277 68 92.754 68 85.5 68 75.323 58.183 67 46 67zm35-35c-18.809 0-34 13.02-34 29 0 1.364.112 2.71.328 4.032C59.933 65.616 70 74.52 70 85.5l-.004.374a17.608 17.608 0 01-.159 2.023l-.073.482c.326.097.655.19.986.28l.743.193 1.455 1.331 1.274 1.148.58.515a71.767 71.767 0 002.329 1.984l.18.144.298.233.58.436C80.359 96.243 81.932 97 83 97c.737 0 1-.316 1-1 0-.276-.496-1.542-1.43-3.54l-.124-.264-1.044-2.17 1.511-.071C100.9 89.104 115 76.373 115 61c0-15.98-15.191-29-34-29zM55.332 71.082c4.425 2.02 7.83 5.802 9.598 10.501.198.527-.038 1.128-.529 1.341-.49.214-1.048-.04-1.246-.568-1.58-4.198-4.619-7.572-8.571-9.377-.487-.223-.714-.827-.508-1.351.207-.524.77-.768 1.256-.546zm42.053-32.005c5.722 2.384 10.755 8.18 12.564 13.607a1.001 1.001 0 01-1.898.632c-1.633-4.9-6.271-10.241-11.436-12.393a1 1 0 01.77-1.846z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  fillRule: "nonzero",
  d: "M46 67c-12.183 0-22 8.323-22 18.5 0 10.039 9.561 18.297 21.556 18.496l1.64.028-.775 1.445c-.931 1.736-1.421 2.886-1.421 3.14 0 .34.055.391.5.391.733 0 2.134-.658 3.86-1.899l.262-.193.521-.4a94.07 94.07 0 003.008-2.488l1.924-1.663.163-.063C62.972 99.277 68 92.754 68 85.5 68 75.323 58.183 67 46 67z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"],
  fillRule: "nonzero",
  d: "M38 82a3 3 0 110 6 3 3 0 010-6zm8 0a3 3 0 110 6 3 3 0 010-6zm8 0a3 3 0 110 6 3 3 0 010-6zm-16 2a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zm23.901-29.435l.048.119 5.136 15.409 4.987-12.464a1 1 0 011.685-.283l.075.1L93.535 63h4.636a3 3 0 11-.001 2H93c-.293 0-.568-.128-.757-.346l-.075-.1-2.946-4.418-5.294 13.235c-.33.826-1.472.83-1.83.06l-.047-.115L77 58.161l-2.051 6.155a1 1 0 01-.833.677L74 65h-8.17a3 3 0 11-.001-2h7.45l2.772-8.316c.29-.87 1.479-.91 1.85-.119zM63 63a1 1 0 100 2 1 1 0 000-2zm38 0a1 1 0 100 2 1 1 0 000-2z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 37,
  cy: 39,
  r: 10,
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue10"]
})));

/* harmony default export */ __webpack_exports__["default"] = (EmptyStatePreviewActivity140);

/***/ }),

/***/ "./src/utils/keys.js":
/*!***************************!*\
  !*** ./src/utils/keys.js ***!
  \***************************/
/*! exports provided: decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/**
 * 
 * @file Helper functions for keyboard events
 * @author Box
 */

/**
 * Function to decode key events into keys.
 * Works for both React synthetic and native events.
 *
 * Will output in the format Shift+I, Control+I...
 * Will outpur Space for spacebar.
 * Will return empty string for modifiers only.
 *
 * @public
 * @param {Event} event - Keyboard event
 * @return {string} Decoded keydown key or empty string
 */
function decode(event) {
  let modifier = ''; // KeyboardEvent.key is the new spec supported in Chrome, Firefox and IE.
  // KeyboardEvent.keyIdentifier is the old spec supported in Safari.
  // Priority is given to the new spec.
  // $FlowFixMe

  const {
    keyIdentifier
  } = event;
  let key = event.key || keyIdentifier || ''; // Get the modifiers on their own

  if (event.ctrlKey) {
    modifier = 'Control';
  } else if (event.shiftKey) {
    modifier = 'Shift';
  } else if (event.metaKey) {
    modifier = 'Meta';
  } // The key and keyIdentifier specs also include modifiers.
  // Since we are manually getting the modifiers above we do
  // not want to trap them again here.


  if (key === modifier) {
    key = '';
  } // keyIdentifier spec returns UTF8 char codes
  // Need to convert them back to ascii.


  if (key.indexOf('U+') === 0) {
    if (key === 'U+001B') {
      key = 'Escape';
    } else {
      key = String.fromCharCode(Number(key.replace('U+', '0x')));
    }
  } // If nothing was pressed or we evaluated to nothing, just return


  if (!key) {
    return '';
  } // Special casing for space bar


  if (key === ' ') {
    key = 'Space';
  } // Edge bug which outputs "Esc" instead of "Escape"
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/5290772/


  if (key === 'Esc') {
    key = 'Escape';
  } // keyIdentifier spec does not prefix the word Arrow.
  // Newer key spec does it automatically.


  if (key === 'Right' || key === 'Left' || key === 'Down' || key === 'Up') {
    key = `Arrow${key}`;
  }

  if (modifier) {
    modifier += '+';
  }

  return modifier + key;
}

 // eslint-disable-line

/***/ }),

/***/ "./src/utils/parseCSV.js":
/*!*******************************!*\
  !*** ./src/utils/parseCSV.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse a comma separated values text and return an array of separated strings
 *
 * @param  {string} text The input string
 * @return {array} A list of separated strings
 *
 * @example
 * parse('a, b, "c, d"')
 * returns ["a", "b", "c, d"]
 */
function parseCSV(text) {
  if (text === null || typeof text === 'undefined') {
    // Input text is either null or undefined
    return [];
  } // Convert the comma separated text into array
  //
  // The logic of the regular expression is simple
  // look ahead comma or carriage return and retrieve:
  //   1. either strings that are surrounded by double quotes
  //   2. or strings that do not contain comma and carriage return


  const components = text.match(/(".*?"|[^",\r\n]+)(?=\s*[,\r\n]|\s*$)/g);

  if (!components) {
    // No match pattern is found
    return [];
  }

  return components.map(c => {
    // Trim the leading and trailing spaces
    c = c.trim(); // Remove double quote pairs from both ends
    // example '"""abc"""' will be altered to 'abc'

    while (c.length >= 2 && c.charAt(0) === '"' && c.charAt(c.length - 1) === '"') {
      c = c.substr(1, c.length - 2);
    }

    return c;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (parseCSV);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar.no.react.js.map