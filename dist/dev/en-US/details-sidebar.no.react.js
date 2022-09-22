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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-sidebar"],{

/***/ "./src/components/collapsible/index.ts":
/*!*********************************************!*\
  !*** ./src/components/collapsible/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapsible */ "./src/components/collapsible/Collapsible.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Collapsible__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/i18n/Composition.js":
/*!********************************************!*\
  !*** ./src/components/i18n/Composition.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/components/i18n/constants.js");
/*
 * Utility class for the FormattedCompMessage component.
 */



const MessageAccumulator = __webpack_require__(/*! message-accumulator */ "./node_modules/message-accumulator/message-accumulator-es5.js").default; // ES5 CommonJS module


const Node = __webpack_require__(/*! ilib-tree-node */ "./node_modules/ilib-tree-node/TreeNode-es5.js").default; // ES5 CommonJS module

/**
 * @class Compose a tree of React elements into a single string.
 *
 * @param {React.Element} element the element to compose
 */


class Composition {
  constructor(element) {
    this.element = element;
    this.isComposed = false;
    this.ma = new MessageAccumulator();
    this.keyIndex = 0;
  }

  recompose(element) {
    switch (typeof element) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["JSTYPE_OBJECT"]:
        if (Array.isArray(element)) {
          element.forEach(subelement => this.recompose(subelement));
        } else if (element) {
          if (element.type === 'Param' || element.type.name === 'Param') {
            this.ma.addParam(element);
          } else {
            this.ma.push(element);
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(element.props.children, child => this.recompose(child));
            this.ma.pop();
          }
        }

        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["JSTYPE_NUMBER"]:
      case _constants__WEBPACK_IMPORTED_MODULE_1__["JSTYPE_BOOLEAN"]:
        this.ma.addText(String(element));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["JSTYPE_STRING"]:
        this.ma.addText(element);
        break;

      default:
        break;
    }
  }
  /**
   * Compose a tree of react elements to a string that can be translated.
   *
   * @return {string} a string representing the tree of react elements
   */


  compose() {
    this.index = 0;

    if (!this.isComposed) {
      this.recompose(this.element);
    }

    this.isComposed = true;
    return this.ma.getMinimalString();
  }
  /**
   * @private
   */


  nextKey() {
    const result = `key${this.keyIndex}`;
    this.keyIndex += 1;
    return result;
  }
  /**
   * @private
   */


  mapToReactElements(node) {
    if (!node) return '';
    let children = [];

    for (let i = 0; i < node.children.length; i += 1) {
      children.push(this.mapToReactElements(node.children[i]));
    }

    const el = node.extra;

    if (children.length === 0 && el && el.props) {
      const {
        temp
      } = el.props;
      children = temp;
    }

    if (children && children.length === 1 && typeof children[0] === 'string') {
      [children] = children;
    }

    if (el) {
      return children && children.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(el, {
        key: el.key || this.nextKey()
      }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(el, {
        key: el.key || this.nextKey()
      });
    }

    if (children.length) {
      return children.length > 1 ? children : children[0];
    }

    return node.value || '';
  }
  /**
   * Convert a composed string back into an array of React elements. The elements are clones of
   * the same ones that this composition was created with, so that they have the same type and
   * props and such as the originals. The elements may be re-ordered from the original, however,
   * if the grammar of the target language requires moving around text, HTML tags, or
   * subcomponents.
   *
   * @param {string} string the string to decompose into a tree of React elements.
   * @return {React.Element} a react element
   */


  decompose(string) {
    if (!this.isComposed) {
      // need to create the mapping first from names to react elements
      this.compose();
    }

    const translation = MessageAccumulator.create(string, this.ma);
    const nodeArray = [new Node({
      type: 'root',
      use: 'start'
    })].concat(this.ma.getPrefix()).concat(translation.root.toArray().slice(1, -1)).concat(this.ma.getSuffix()).concat([new Node({
      type: 'root',
      use: 'end'
    })]); // convert to a tree again

    return this.mapToReactElements(Node.fromArray(nodeArray));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Composition);

/***/ }),

/***/ "./src/components/i18n/FormattedCompMessage.js":
/*!*****************************************************!*\
  !*** ./src/components/i18n/FormattedCompMessage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/env */ "./src/utils/env.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/components/i18n/constants.js");
/* harmony import */ var _Composition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Composition */ "./src/components/i18n/Composition.js");
const _excluded = ["count", "tagName", "intl", "description", "id", "defaultMessage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Replace the text inside of this component with a translation. This
 * component is built on top of react-intl, so it works along with the
 * regular react-intl components and objects you are used to, and it gets
 * its translations from react intl as well. The FormattedCompMessage component can
 * be used wherever it is valid to put JSX text. In regular Javascript
 * code, you should continue to use the intl.formatMessage() call and
 * extract your strings into a message.js file.
 */
class FormattedCompMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    /* eslint-disable no-console */

    console.warn("box-ui-elements: the FormattedCompMessage component is deprecated! Use react-intl's FormattedMessage instead.");
    /* eslint-enable no-console */
    // these parameters echo the ones in react-intl's FormattedMessage
    // component, plus a few extra

    const {
      defaultMessage,
      // The English string + HTML + components that you want translated
      count,
      // the pivot count to choose a plural form
      children // the components within the body

    } = this.props;
    const sourceElements = defaultMessage || children;

    if (sourceElements) {
      const composition = new _Composition__WEBPACK_IMPORTED_MODULE_5__["default"](sourceElements);
      let source = '';

      if (!lodash_isNaN__WEBPACK_IMPORTED_MODULE_2___default()(Number(count))) {
        if (children) {
          source = this.composePluralString(children);
        } else if (Object(_utils_env__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
          throw new Error('Cannot use count prop on a FormattedCompMessage component that has no children.');
        }
      } else {
        source = composition.compose();
      }

      this.state = {
        source,
        composition
      };
    }
  }
  /**
   * Search for any Plural elements in the children, and
   * then construct the English source string in the correct
   * format for react-intl to use for pluralization
   * @param {React.Element} children the children of this node
   * @return {string} the composed plural string
   */


  composePluralString(children) {
    const categories = {};
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, child => {
      if (typeof child === 'object' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](child) && child.type.name === 'Plural') {
        const childComposition = new _Composition__WEBPACK_IMPORTED_MODULE_5__["default"](child.props.children);
        categories[child.props.category] = childComposition.compose();
      }
    });

    if (!categories.one || !categories.other) {
      if (Object(_utils_env__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
        throw new Error('Cannot use count prop on a FormattedCompMessage component without giving both a "one" and "other" Plural component in the children.');
      }
    } // add these to the string in a particular order so that
    // we always end up with the same string regardless of
    // the order that the Plural elements were specified in
    // the source code


    const categoriesString = [_constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_ZERO"], _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_ONE"], _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_TWO"], _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_FEW"], _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_MANY"], _constants__WEBPACK_IMPORTED_MODULE_4__["CATEGORY_OTHER"]].map(category => categories[category] ? ` ${category} {${categories[category]}}` : '').join(''); // see the intl-messageformat project for an explanation of this syntax

    return `{count, plural,${categoriesString}}`;
  }

  render() {
    const _this$props = this.props,
          {
      count,
      tagName,
      intl,
      description,
      id,
      defaultMessage
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      composition,
      source
    } = this.state;
    const values = {};

    if (typeof count === 'number') {
      // make sure intl.formatMessage switches properly on the count
      values.count = count;
    } // react-intl will do the correct plurals if necessary


    const descriptor = {
      id,
      defaultMessage: source,
      description
    };
    const translation = intl.formatMessage(descriptor, values); // always wrap the translated string in a tag to contain everything
    // and to give us a spot to record the id. The resource id is the
    // the id in mojito for the string. Having this attr has these advantages:
    // 1. When debugging i18n or translation problems, it is MUCH easier to find
    // the exact string to fix in Mojito rather than guessing. It might be useful
    // for general debugging as well to map from something you see in the UI to
    // the actual code that implements it.
    // 2. It can be used by an in-context linguistic review tool. The tool code
    // can contact mojito and retrieve the English for any translation errors that
    // the reviewer finds and submit translation tickets to Jira and/or fixed
    // translations directly back to Mojito.
    // 3. It can be used by the planned "text experiment framework" to identify
    // whole strings in the UI that can be A/B tested in various langauges without
    // publishing new versions of the code.

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, _objectSpread({
      key: id,
      'x-resource-id': id
    }, rest), composition.decompose(translation));
  }

}

_defineProperty(FormattedCompMessage, "defaultProps", {
  tagName: 'span'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(FormattedCompMessage));

/***/ }),

/***/ "./src/components/i18n/constants.js":
/*!******************************************!*\
  !*** ./src/components/i18n/constants.js ***!
  \******************************************/
/*! exports provided: JSTYPE_BOOLEAN, JSTYPE_FUNCTION, JSTYPE_NUMBER, JSTYPE_OBJECT, JSTYPE_STRING, JSTYPE_SYMBOL, JSTYPE_UNDEFINED, CATEGORY_ZERO, CATEGORY_ONE, CATEGORY_TWO, CATEGORY_FEW, CATEGORY_MANY, CATEGORY_OTHER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_BOOLEAN", function() { return JSTYPE_BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_FUNCTION", function() { return JSTYPE_FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_NUMBER", function() { return JSTYPE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_OBJECT", function() { return JSTYPE_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_STRING", function() { return JSTYPE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_SYMBOL", function() { return JSTYPE_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSTYPE_UNDEFINED", function() { return JSTYPE_UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_ZERO", function() { return CATEGORY_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_ONE", function() { return CATEGORY_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_TWO", function() { return CATEGORY_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_FEW", function() { return CATEGORY_FEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_MANY", function() { return CATEGORY_MANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_OTHER", function() { return CATEGORY_OTHER; });
/**
 * 
 * @file Constants for the i18n components
 * @author Box
 */

/* ------------------ Javascript Object Types ----------------- */
const JSTYPE_BOOLEAN = 'boolean';
const JSTYPE_FUNCTION = 'function';
const JSTYPE_NUMBER = 'number';
const JSTYPE_OBJECT = 'object';
const JSTYPE_STRING = 'string';
const JSTYPE_SYMBOL = 'symbol';
const JSTYPE_UNDEFINED = 'undefined';
/* ------------------ Plural Category Names For react-intl ----------------- */

const CATEGORY_ZERO = 'zero';
const CATEGORY_ONE = 'one';
const CATEGORY_TWO = 'two';
const CATEGORY_FEW = 'few';
const CATEGORY_MANY = 'many';
const CATEGORY_OTHER = 'other';

/***/ }),

/***/ "./src/components/modal/index.js":
/*!***************************************!*\
  !*** ./src/components/modal/index.js ***!
  \***************************************/
/*! exports provided: Modal, ModalActions, ModalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/components/modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ModalActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalActions */ "./src/components/modal/ModalActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalActions", function() { return _ModalActions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalDialog */ "./src/components/modal/ModalDialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return _ModalDialog__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/elements/common/date/DateField.js":
/*!***********************************************!*\
  !*** ./src/elements/common/date/DateField.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ "./src/elements/common/messages.js");
/* harmony import */ var _DateField_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateField.scss */ "./src/elements/common/date/DateField.scss");
/* harmony import */ var _DateField_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DateField_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */





const DEFAULT_DATE_FORMAT = {
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  day: 'numeric'
};

const DateField = _ref => {
  let {
    date,
    dateFormat = DEFAULT_DATE_FORMAT,
    omitCommas = false,
    intl,
    relative = true,
    capitalize = false
  } = _ref;
  const d = new Date(date);
  const isTodaysDate = Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isToday"])(d);
  const isYesterdaysDate = Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isYesterday"])(d);

  if (relative && (isTodaysDate || isYesterdaysDate)) {
    let Message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].today);

    if (isYesterdaysDate) {
      Message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].yesterday);
    }

    if (capitalize) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "be-date-capitalize"
      }, Message);
    }

    return Message;
  }

  let formattedDate = intl.formatDate(d, dateFormat);
  formattedDate = omitCommas ? formattedDate.replace(/,/g, '') : formattedDate;
  return formattedDate;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(DateField));

/***/ }),

/***/ "./src/elements/common/date/DateField.scss":
/*!*************************************************!*\
  !*** ./src/elements/common/date/DateField.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/date/index.js":
/*!*******************************************!*\
  !*** ./src/elements/common/date/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateField */ "./src/elements/common/date/DateField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DateField__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/DetailsSidebar.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/DetailsSidebar.js ***!
  \********************************************************/
/*! exports provided: DetailsSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSidebarComponent", function() { return DetailsSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarAccessStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarAccessStats */ "./src/elements/content-sidebar/SidebarAccessStats.js");
/* harmony import */ var _SidebarClassification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarClassification */ "./src/elements/content-sidebar/SidebarClassification.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _SidebarFileProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarFileProperties */ "./src/elements/content-sidebar/SidebarFileProperties.js");
/* harmony import */ var _SidebarNotices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarNotices */ "./src/elements/content-sidebar/SidebarNotices.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _SidebarVersions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SidebarVersions */ "./src/elements/content-sidebar/SidebarVersions.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/fields */ "./src/utils/fields.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./DetailsSidebar.scss */ "./src/elements/content-sidebar/DetailsSidebar.scss");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Details sidebar component
 * @author Box
 */
























const MARK_NAME_JS_READY = `${_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"]}_${_common_logger_constants__WEBPACK_IMPORTED_MODULE_14__["EVENT_JS_READY"]}`;
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_16__["mark"])(MARK_NAME_JS_READY);

class DetailsSidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "descriptionChangeSuccessCallback", file => {
      this.setState({
        file,
        fileError: undefined
      });
    });

    _defineProperty(this, "fetchFileSuccessCallback", file => {
      this.setState({
        file,
        fileError: undefined
      });
    });

    _defineProperty(this, "fetchFileErrorCallback", (e, code) => {
      // TODO: handle the error properly (probably with maskError) once files call split out
      this.setState({
        file: undefined
      });
      this.props.onError(e, code, {
        e
      });
    });

    _defineProperty(this, "descriptionChangeErrorCallback", file => {
      // Reset the state back to the original description since the API call failed
      this.setState({
        file,
        fileError: {
          inlineError: {
            title: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileDescriptionInlineErrorTitleMessage,
            content: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].defaultInlineErrorContentMessage
          }
        }
      });
    });

    _defineProperty(this, "onDescriptionChange", newDescription => {
      const {
        api
      } = this.props;
      const {
        file
      } = this.state;

      if (!file) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_15__["getBadItemError"])();
      }

      const {
        description
      } = file;

      if (newDescription === description) {
        return;
      }

      api.getFileAPI().setFileDescription(file, newDescription, this.descriptionChangeSuccessCallback, this.descriptionChangeErrorCallback);
    });

    _defineProperty(this, "fetchAccessStatsErrorCallback", (e, code) => {
      if (!this.props.hasAccessStats) {
        return;
      }

      const isForbidden = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(e, 'status') === _constants__WEBPACK_IMPORTED_MODULE_22__["HTTP_STATUS_CODE_FORBIDDEN"];
      let accessStatsError;

      if (isForbidden) {
        accessStatsError = {
          error: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileAccessStatsPermissionsError
        };
      } else {
        accessStatsError = {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileAccessStatsErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].defaultErrorMaskSubHeaderMessage
          }
        };
      }

      this.setState({
        isLoadingAccessStats: false,
        accessStats: undefined,
        accessStatsError
      });
      this.props.onError(e, code, {
        e,
        [_constants__WEBPACK_IMPORTED_MODULE_22__["IS_ERROR_DISPLAYED"]]: !isForbidden
      });
    });

    _defineProperty(this, "fetchAccessStatsSuccessCallback", accessStats => {
      if (!this.props.hasAccessStats) {
        return;
      }

      this.setState({
        accessStats,
        accessStatsError: undefined,
        isLoadingAccessStats: false
      });
    });

    this.state = {
      isLoadingAccessStats: false
    };
    const {
      logger
    } = this.props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
  }

  componentDidMount() {
    this.fetchFile();

    if (this.props.hasAccessStats) {
      this.fetchAccessStats();
    }
  }

  componentDidUpdate(_ref) {
    let {
      hasAccessStats: prevHasAccessStats
    } = _ref;
    const {
      hasAccessStats
    } = this.props; // Component visibility props such as hasAccessStats can sometimes be flipped after an async call

    const hasAccessStatsChanged = prevHasAccessStats !== hasAccessStats;

    if (hasAccessStatsChanged) {
      if (hasAccessStats) {
        this.fetchAccessStats();
      } else {
        this.setState({
          isLoadingAccessStats: false,
          accessStats: undefined,
          accessStatsError: undefined
        });
      }
    }
  }
  /**
   * File description update callback
   *
   * @private
   * @param {BoxItem} file - Updated file object
   * @return {void}
   */


  /**
   * Fetches a file with the fields needed for details sidebar
   *
   * @param {Function} successCallback - the success callback
   * @param {Function} errorCallback - the error callback
   * @return {void}
   */
  fetchFile() {
    let successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fetchFileSuccessCallback;
    let errorCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fetchFileErrorCallback;
    const {
      api,
      fileId
    } = this.props;
    api.getFileAPI().getFile(fileId, successCallback, errorCallback, {
      fields: _utils_fields__WEBPACK_IMPORTED_MODULE_18__["SIDEBAR_FIELDS_TO_FETCH"] // TODO: replace this with DETAILS_SIDEBAR_FIELDS_TO_FETCH as we do not need all the sidebar fields

    });
  }
  /**
   * Handles a successful file fetch
   *
   * @param {Object} file - the box file
   * @return {void}
   */


  /**
   * Fetches the access stats for a file
   *
   * @private
   * @return {void}
   */
  fetchAccessStats() {
    const {
      api,
      fileId
    } = this.props;
    const {
      isLoadingAccessStats
    } = this.state;

    if (isLoadingAccessStats) {
      return;
    }

    this.setState({
      isLoadingAccessStats: true
    });
    api.getFileAccessStatsAPI(false).getFileAccessStats(fileId, this.fetchAccessStatsSuccessCallback, this.fetchAccessStatsErrorCallback);
  }

  refresh() {
    this.fetchAccessStats();
  }

  render() {
    const {
      classification,
      elementId,
      hasProperties,
      hasNotices,
      hasAccessStats,
      hasClassification,
      hasRetentionPolicy,
      hasVersions,
      onAccessStatsClick,
      onVersionHistoryClick,
      onClassificationClick,
      onRetentionPolicyExtendClick,
      retentionPolicy
    } = this.props;
    const {
      accessStats,
      accessStatsError,
      file,
      fileError,
      isLoadingAccessStats
    } = this.state; // TODO: Add loading indicator and handle errors once file call is split out

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "bcs-details",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_22__["SIDEBAR_VIEW_DETAILS"],
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarDetailsTitle)
    }, file && hasNotices && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bcs-DetailsSidebar-notices"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarNotices__WEBPACK_IMPORTED_MODULE_11__["default"], {
      file: file
    })), file && hasClassification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarClassification__WEBPACK_IMPORTED_MODULE_8__["default"], {
      classification: classification,
      file: file,
      onEdit: onClassificationClick
    }), file && hasAccessStats && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarAccessStats__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      accessStats: accessStats,
      file: file,
      onAccessStatsClick: onAccessStatsClick
    }, accessStatsError)), file && hasProperties && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
      interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__["SECTION_TARGETS"].FILE_PROPERTIES,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarProperties)
    }, hasVersions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarVersions__WEBPACK_IMPORTED_MODULE_13__["default"], {
      file: file,
      onVersionHistoryClick: onVersionHistoryClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarFileProperties__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      file: file,
      onDescriptionChange: this.onDescriptionChange
    }, fileError, {
      hasRetentionPolicy: hasRetentionPolicy,
      isLoading: isLoadingAccessStats,
      onRetentionPolicyExtendClick: onRetentionPolicyExtendClick,
      retentionPolicy: retentionPolicy
    }))));
  }

}

_defineProperty(DetailsSidebar, "defaultProps", {
  hasNotices: false,
  hasProperties: false,
  hasAccessStats: false,
  hasClassification: false,
  hasRetentionPolicy: false,
  hasVersions: false,
  onError: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_21__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_20__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_19__["withAPIContext"]])(DetailsSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/DetailsSidebar.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/DetailsSidebar.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarAccessStats.js":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarAccessStats.js ***!
  \************************************************************/
/*! exports provided: SidebarAccessStatsComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAccessStatsComponent", function() { return SidebarAccessStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFinite */ "./node_modules/lodash/isFinite.js");
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/access-stats/AccessStats */ "./src/features/access-stats/AccessStats.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/file */ "./src/utils/file.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
/**
 * 
 * @file Versions sidebar component
 * @author Box
 */










const SidebarAccessStats = _ref => {
  let {
    onAccessStatsClick,
    accessStats = {
      comment_count: undefined,
      download_count: undefined,
      edit_count: undefined,
      has_count_overflowed: false,
      preview_count: undefined
    },
    file,
    error,
    intl
  } = _ref;
  const {
    preview_count,
    comment_count,
    download_count,
    edit_count
  } = accessStats;

  if (!lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(preview_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(comment_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(download_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(edit_count) && !error) {
    return null;
  }

  const errorMessage = error ? intl.formatMessage(error) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SECTION_TARGETS"].ACCESS_STATS,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].sidebarAccessStats)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    errorMessage: errorMessage,
    commentCount: comment_count,
    commentStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.COMMENTS
    },
    downloadCount: download_count,
    downloadStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.DOWNLOADS
    },
    previewCount: preview_count,
    previewStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.PREVIEWS
    },
    viewStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.VIEWS
    },
    editCount: edit_count,
    editStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.EDITS
    },
    openAccessStatsModal: onAccessStatsClick,
    isBoxNote: Object(_utils_file__WEBPACK_IMPORTED_MODULE_6__["isBoxNote"])(file),
    viewMoreButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.VIEW_DETAILS
    }
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SidebarAccessStats)));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarClassification.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarClassification.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _features_classification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/classification */ "./src/features/classification/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _components_collapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collapsible */ "./src/components/collapsible/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarClassification.scss */ "./src/elements/content-sidebar/SidebarClassification.scss");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Classification sidebar component
 * @author Box
 */









const SidebarClassification = _ref => {
  let {
    classification,
    file,
    onEdit
  } = _ref;
  const isEditable = !!onEdit && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, _constants__WEBPACK_IMPORTED_MODULE_6__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
  const hasClassification = !!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(classification, 'name');

  if (!hasClassification && !isEditable) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_collapsible__WEBPACK_IMPORTED_MODULE_5__["default"], {
    buttonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SECTION_TARGETS"].CLASSIFICATION
    },
    className: "bcs-SidebarClassification",
    headerActionItems: isEditable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_classification__WEBPACK_IMPORTED_MODULE_3__["EditClassificationButton"], {
      className: "bcs-SidebarClassification-edit",
      isEditing: hasClassification,
      onEdit: onEdit
    }) : null,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _features_classification__WEBPACK_IMPORTED_MODULE_3__["classificationMessages"].classification)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_classification__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, classification, {
    messageStyle: "inline"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarClassification);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarClassification.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarClassification.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarFileProperties.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarFileProperties.js ***!
  \***************************************************************/
/*! exports provided: SidebarFilePropertiesComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFilePropertiesComponent", function() { return SidebarFileProperties; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/item-details/ItemProperties */ "./src/features/item-details/ItemProperties.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.tsx");
/* harmony import */ var _utils_getFileSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getFileSize */ "./src/utils/getFileSize.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar file properties component
 * @author Box
 */










const SidebarFileProperties = _ref => {
  let {
    file,
    onDescriptionChange,
    hasRetentionPolicy,
    retentionPolicy,
    onRetentionPolicyExtendClick,
    isLoading,
    intl
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_3__["default"], {
    createdAt: file.content_created_at,
    description: file.description,
    descriptionTextareaProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["DETAILS_TARGETS"].DESCRIPTION
    },
    modifiedAt: file.content_modified_at,
    onDescriptionChange: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_rename') ? onDescriptionChange : undefined,
    owner: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'owned_by.name'),
    retentionPolicyProps: hasRetentionPolicy ? _objectSpread(_objectSpread({}, retentionPolicy), {}, {
      openModal: onRetentionPolicyExtendClick
    }) : {},
    size: Object(_utils_getFileSize__WEBPACK_IMPORTED_MODULE_5__["default"])(file.size, intl.locale) // use uploader_display_name if uploaded anonymously
    ,
    uploader: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'created_by.id') === _constants__WEBPACK_IMPORTED_MODULE_8__["PLACEHOLDER_USER"].id ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'uploader_display_name') : lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'created_by.name')
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(SidebarFileProperties)));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNotices.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNotices.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/item-details/SharedLinkExpirationNotice */ "./src/features/item-details/SharedLinkExpirationNotice.js");
/* harmony import */ var _features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/item-details/ItemExpirationNotice */ "./src/features/item-details/ItemExpirationNotice.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _common_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/date */ "./src/elements/common/date/index.js");
/**
 * 
 * @file Preview details sidebar notices component
 * @author Box
 */






const ONE_MINUTE_IN_MS = 60000;
const NOTICE_DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

const SidebarNotices = _ref => {
  let {
    file
  } = _ref;
  const itemExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'expires_at');
  const sharedLinkExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'shared_link.unshared_at');

  if (!itemExpiration && !sharedLinkExpiration) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !!itemExpiration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expiration: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_date__WEBPACK_IMPORTED_MODULE_5__["default"] // $FlowFixMe
    , {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(itemExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    }),
    itemType: "file"
  }), !!sharedLinkExpiration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__["default"], {
    expiration: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_date__WEBPACK_IMPORTED_MODULE_5__["default"] // $FlowFixMe
    , {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(sharedLinkExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarNotices);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarVersions.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarVersions.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/item-details/VersionHistoryLink */ "./src/features/item-details/VersionHistoryLink.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/file */ "./src/utils/file.js");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarVersions.scss */ "./src/elements/content-sidebar/SidebarVersions.scss");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Versions sidebar component
 * @author Box
 */






const SidebarVersions = _ref => {
  let {
    onVersionHistoryClick,
    file
  } = _ref;
  const {
    version_number
  } = file;
  const versionNumber = parseInt(version_number, 10);

  if (Object(_utils_file__WEBPACK_IMPORTED_MODULE_3__["isBoxNote"])(file) || !versionNumber || versionNumber <= 1) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-SidebarVersions",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["DETAILS_TARGETS"].VERSION_HISTORY,
    "data-testid": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["DETAILS_TARGETS"].VERSION_HISTORY,
    onClick: onVersionHistoryClick,
    versionCount: versionNumber
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarVersions);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarVersions.scss":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarVersions.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/access-stats/AccessStats.js":
/*!**************************************************!*\
  !*** ./src/features/access-stats/AccessStats.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessStatsItemsList */ "./src/features/access-stats/AccessStatsItemsList.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/access-stats/messages.js");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccessStats.scss */ "./src/features/access-stats/AccessStats.scss");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AccessStats_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const AccessStats = _ref => {
  let {
    commentCount = 0,
    commentStatButtonProps = {},
    downloadCount = 0,
    downloadStatButtonProps = {},
    editCount = 0,
    editStatButtonProps = {},
    errorMessage,
    hasCountOverflowed = false,
    isBoxNote = false,
    openAccessStatsModal,
    previewCount = 0,
    previewStatButtonProps = {},
    viewMoreButtonProps = {},
    viewStatButtonProps = {}
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "access-stats"
  }, errorMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, errorMessage) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    commentCount: commentCount,
    commentStatButtonProps: commentStatButtonProps,
    downloadCount: downloadCount,
    downloadStatButtonProps: downloadStatButtonProps,
    editCount: editCount,
    editStatButtonProps: editStatButtonProps,
    hasCountOverflowed: hasCountOverflowed,
    isBoxNote: isBoxNote,
    openAccessStatsModal: openAccessStatsModal,
    previewCount: previewCount,
    previewStatButtonProps: previewStatButtonProps,
    viewStatButtonProps: viewStatButtonProps
  }), openAccessStatsModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: "lnk access-stats-view-details",
    onClick: openAccessStatsModal
  }, viewMoreButtonProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].accessStatsViewDetails))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStats);

/***/ }),

/***/ "./src/features/access-stats/AccessStats.scss":
/*!****************************************************!*\
  !*** ./src/features/access-stats/AccessStats.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItem.js":
/*!******************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconEye */ "./src/icons/general/IconEye.tsx");
/* harmony import */ var _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconComment */ "./src/icons/general/IconComment.tsx");
/* harmony import */ var _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconDownloadSolid */ "./src/icons/general/IconDownloadSolid.tsx");
/* harmony import */ var _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconPencilSolid */ "./src/icons/general/IconPencilSolid.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/access-stats/messages.js");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccessStatsItem.scss */ "./src/features/access-stats/AccessStatsItem.scss");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const statsAttributesTable = {
  preview: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsPreviews
  },
  view: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsViews
  },
  download: {
    icon: _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_5__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsDownloads
  },
  comment: {
    icon: _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_4__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsComments
  },
  edit: {
    icon: _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_6__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsEdits
  }
};
const ICON_COLOR = '#2a62b9';
const ITEM_CONTENT_CLASS_NAME = 'access-stats-item-content';

const AccessStatsItem = _ref => {
  let {
    type,
    count = 0,
    hasCountOverflowed = false,
    openAccessStatsModal,
    statButtonProps
  } = _ref;
  const statAttributes = statsAttributesTable[type];
  const IconComponent = statAttributes.icon;
  const labelMessage = statAttributes.message;
  const itemContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconComponent, {
    color: ICON_COLOR,
    height: 10,
    width: 14
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "access-stats-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], labelMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedNumber"], {
    value: count
  }), hasCountOverflowed && '+');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "access-stats-item"
  }, openAccessStatsModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: ITEM_CONTENT_CLASS_NAME,
    onClick: openAccessStatsModal
  }, statButtonProps), itemContent) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: ITEM_CONTENT_CLASS_NAME
  }, itemContent));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItem);

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItem.scss":
/*!********************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItem.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItemsList.js":
/*!***********************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItemsList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessStatsItem */ "./src/features/access-stats/AccessStatsItem.js");



const AccessStatsItemsList = _ref => {
  let {
    commentCount,
    commentStatButtonProps,
    downloadCount,
    downloadStatButtonProps,
    editCount,
    editStatButtonProps,
    hasCountOverflowed = false,
    isBoxNote,
    openAccessStatsModal,
    previewCount,
    previewStatButtonProps,
    viewStatButtonProps
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "access-stats-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: previewCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: isBoxNote ? viewStatButtonProps : previewStatButtonProps,
    type: isBoxNote ? 'view' : 'preview'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: editCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: editStatButtonProps,
    type: "edit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: commentCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: commentStatButtonProps,
    type: "comment"
  }), !isBoxNote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: downloadCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: downloadStatButtonProps,
    type: "download"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItemsList);

/***/ }),

/***/ "./src/features/access-stats/messages.js":
/*!***********************************************!*\
  !*** ./src/features/access-stats/messages.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  accessStatsViewDetails: {
    "id": "boxui.accessStats.accessStatsViewDetails",
    "defaultMessage": "View Details"
  },
  accessStatsViews: {
    "id": "boxui.accessStats.accessStatsViews",
    "defaultMessage": "Views"
  },
  accessStatsPreviews: {
    "id": "boxui.accessStats.accessStatsPreviews",
    "defaultMessage": "Previews"
  },
  accessStatsEdits: {
    "id": "boxui.accessStats.accessStatsEdits",
    "defaultMessage": "Edits"
  },
  accessStatsComments: {
    "id": "boxui.accessStats.accessStatsComments",
    "defaultMessage": "Comments"
  },
  accessStatsDownloads: {
    "id": "boxui.accessStats.accessStatsDownloads",
    "defaultMessage": "Downloads"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/classification/Classification.js":
/*!*******************************************************!*\
  !*** ./src/features/classification/Classification.js ***!
  \*******************************************************/
/*! exports provided: STYLE_INLINE, STYLE_TOOLTIP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_INLINE", function() { return STYLE_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_TOOLTIP", function() { return STYLE_TOOLTIP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/label/Label */ "./src/components/label/Label.tsx");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClassifiedBadge */ "./src/features/classification/ClassifiedBadge.js");
/* harmony import */ var _security_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-controls */ "./src/features/classification/security-controls/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Classification.scss */ "./src/features/classification/Classification.scss");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Classification_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const STYLE_INLINE = 'inline';
const STYLE_TOOLTIP = 'tooltip';

const Classification = _ref => {
  let {
    className = '',
    color,
    controls,
    controlsFormat,
    definition,
    isImportedClassification = false,
    isLoadingControls,
    itemName = '',
    maxAppCount,
    messageStyle,
    modifiedAt,
    modifiedBy,
    name,
    onClick
  } = _ref;
  const isClassified = !!name;
  const hasDefinition = !!definition;
  const hasModifiedAt = !!modifiedAt;
  const hasModifiedBy = !!modifiedBy;
  const hasSecurityControls = !!controls;
  const isTooltipMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_TOOLTIP;
  const isInlineMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_INLINE;
  const isNotClassifiedMessageVisible = !isClassified && messageStyle === STYLE_INLINE;
  const isControlsIndicatorEnabled = isClassified && isLoadingControls && messageStyle === STYLE_INLINE;
  const isSecurityControlsEnabled = isClassified && !isLoadingControls && hasSecurityControls && messageStyle === STYLE_INLINE;
  const modifiedDate = new Date(modifiedAt || 0);
  const isModifiedMessageVisible = isClassified && hasModifiedAt && Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isValidDate"])(modifiedDate) && hasModifiedBy && messageStyle === STYLE_INLINE;
  const formattedModifiedAt = isModifiedMessageVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], {
    value: modifiedDate,
    month: "long",
    year: "numeric",
    day: "numeric"
  });
  const modifiedByMessage = isImportedClassification ? _messages__WEBPACK_IMPORTED_MODULE_7__["default"].importedBy : _messages__WEBPACK_IMPORTED_MODULE_7__["default"].modifiedBy;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("article", {
    className: `bdl-Classification ${className}`
  }, isClassified && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ClassifiedBadge__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: color,
    name: name,
    onClick: onClick,
    tooltipText: isTooltipMessageEnabled ? definition : undefined
  }), isInlineMessageEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].definition)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bdl-Classification-definition"
  }, definition)), isNotClassifiedMessageVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-Classification-missingMessage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].missing)), isModifiedMessageVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].modifiedByLabel)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bdl-Classification-modifiedBy",
    "data-testid": "classification-modifiedby"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, modifiedByMessage, {
    values: {
      modifiedAt: formattedModifiedAt,
      modifiedBy
    }
  })))), isSecurityControlsEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_security_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
    classificationColor: color,
    classificationName: name,
    controls: controls,
    controlsFormat: controlsFormat,
    definition: definition,
    itemName: itemName,
    maxAppCount: maxAppCount,
    shouldRenderLabel: true
  }), isControlsIndicatorEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};


/* harmony default export */ __webpack_exports__["default"] = (Classification);

/***/ }),

/***/ "./src/features/classification/Classification.scss":
/*!*********************************************************!*\
  !*** ./src/features/classification/Classification.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/ClassifiedBadge.js":
/*!********************************************************!*\
  !*** ./src/features/classification/ClassifiedBadge.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconSecurityClassification */ "./src/icons/general/IconSecurityClassification.tsx");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security */ "./src/features/security/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassifiedBadge.scss */ "./src/features/classification/ClassifiedBadge.scss");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__);







const ICON_SIZE = 12;

const ClassifiedBadge = _ref => {
  let {
    color,
    name,
    onClick,
    tooltipPosition = 'bottom-center',
    tooltipText
  } = _ref;
  const isClickable = typeof onClick === 'function';
  const isTooltipDisabled = !tooltipText;
  const badge = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_security__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bdl-ClassifiedBadge",
    color: color,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__["default"], {
      height: ICON_SIZE,
      width: ICON_SIZE
    }),
    message: name
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isDisabled: isTooltipDisabled,
    isTabbable: false,
    position: tooltipPosition,
    text: tooltipText
  }, isClickable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-ClassifiedBadge-editButton",
    "data-resin-target": "editclassification",
    onClick: onClick,
    type: "button"
  }, badge) : badge);
};

ClassifiedBadge.defaultProps = {
  color: _styles_variables__WEBPACK_IMPORTED_MODULE_5__["bdlYellow50"]
};
/* harmony default export */ __webpack_exports__["default"] = (ClassifiedBadge);

/***/ }),

/***/ "./src/features/classification/ClassifiedBadge.scss":
/*!**********************************************************!*\
  !*** ./src/features/classification/ClassifiedBadge.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/EditClassificationButton.js":
/*!*****************************************************************!*\
  !*** ./src/features/classification/EditClassificationButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
const _excluded = ["className", "isEditing", "onEdit"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Classification add/edit button
 * @author Box
 */





const EditClassificationButton = _ref => {
  let {
    className = '',
    isEditing,
    onEdit
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const message = isEditing ? _messages__WEBPACK_IMPORTED_MODULE_2__["default"].edit : _messages__WEBPACK_IMPORTED_MODULE_2__["default"].add;
  const interaction = isEditing ? 'editclassification' : 'addclassification';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: `bdl-EditClassificationButton ${className}`,
    "data-resin-target": interaction,
    onClick: onEdit,
    type: "button"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message));
};

/* harmony default export */ __webpack_exports__["default"] = (EditClassificationButton);

/***/ }),

/***/ "./src/features/classification/classificationColorsMap.js":
/*!****************************************************************!*\
  !*** ./src/features/classification/classificationColorsMap.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/features/classification/constants.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");



const classificationColorsMap = {
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_0"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationYellow,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlYellow50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlYellorange"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_1"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationOrange,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlOrange50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlOrange"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_2"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationRed,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlWatermelonRed50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlWatermelonRed"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_3"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationPurple,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlPurpleRain50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlPurpleRain"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_4"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationLightBlue,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlLightBlue50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlLightBlue"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_5"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationDarkBlue,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlDarkBlue50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlDarkBlue"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_6"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationGreen,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGreenLight50"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGreenLight"]
  },
  [_constants__WEBPACK_IMPORTED_MODULE_1__["CLASSIFICATION_COLOR_ID_7"]]: {
    name: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].classificationGrey,
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray20"],
    tinycon: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray62"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (classificationColorsMap);

/***/ }),

/***/ "./src/features/classification/constants.js":
/*!**************************************************!*\
  !*** ./src/features/classification/constants.js ***!
  \**************************************************/
/*! exports provided: ACCESS_POLICY_RESTRICTION, APP_RESTRICTION_MESSAGE_TYPE, CLASSIFICATION_COLOR_ID_0, CLASSIFICATION_COLOR_ID_1, CLASSIFICATION_COLOR_ID_2, CLASSIFICATION_COLOR_ID_3, CLASSIFICATION_COLOR_ID_4, CLASSIFICATION_COLOR_ID_5, CLASSIFICATION_COLOR_ID_6, CLASSIFICATION_COLOR_ID_7, DEFAULT_CLASSIFICATION_COLOR_ID, DEFAULT_MAX_APP_COUNT, DOWNLOAD_CONTROL, LIST_ACCESS_LEVEL, MANAGED_USERS_ACCESS_LEVEL, SECURITY_CONTROLS_FORMAT, SHARED_LINK_ACCESS_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_POLICY_RESTRICTION", function() { return ACCESS_POLICY_RESTRICTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_RESTRICTION_MESSAGE_TYPE", function() { return APP_RESTRICTION_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_0", function() { return CLASSIFICATION_COLOR_ID_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_1", function() { return CLASSIFICATION_COLOR_ID_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_2", function() { return CLASSIFICATION_COLOR_ID_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_3", function() { return CLASSIFICATION_COLOR_ID_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_4", function() { return CLASSIFICATION_COLOR_ID_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_5", function() { return CLASSIFICATION_COLOR_ID_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_6", function() { return CLASSIFICATION_COLOR_ID_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_7", function() { return CLASSIFICATION_COLOR_ID_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CLASSIFICATION_COLOR_ID", function() { return DEFAULT_CLASSIFICATION_COLOR_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_APP_COUNT", function() { return DEFAULT_MAX_APP_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_CONTROL", function() { return DOWNLOAD_CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_ACCESS_LEVEL", function() { return LIST_ACCESS_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGED_USERS_ACCESS_LEVEL", function() { return MANAGED_USERS_ACCESS_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_CONTROLS_FORMAT", function() { return SECURITY_CONTROLS_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_LINK_ACCESS_LEVEL", function() { return SHARED_LINK_ACCESS_LEVEL; });
const DEFAULT_MAX_APP_COUNT = 3;
const SECURITY_CONTROLS_FORMAT = {
  FULL: 'full',
  SHORT: 'short',
  SHORT_WITH_BTN: 'shortWithBtn'
};
const ACCESS_POLICY_RESTRICTION = {
  APP: 'app',
  BOX_SIGN_REQUEST: 'boxSignRequest',
  DOWNLOAD: 'download',
  EXTERNAL_COLLAB: 'externalCollab',
  FTP: 'ftp',
  SHARED_LINK: 'sharedLink',
  WATERMARK: 'watermark'
};
const DOWNLOAD_CONTROL = {
  DESKTOP: 'desktop',
  FTP: 'ftp',
  MOBILE: 'mobile',
  WEB: 'web'
};
const LIST_ACCESS_LEVEL = {
  BLACKLIST: 'blacklist',
  BLOCK: 'block',
  WHITELIST: 'whitelist'
};
const MANAGED_USERS_ACCESS_LEVEL = {
  OWNERS_AND_COOWNERS: 'ownersCoOwners',
  OWNERS_COOWNERS_AND_EDITORS: 'ownersCoOwnersEditors'
};
const SHARED_LINK_ACCESS_LEVEL = {
  COLLAB_AND_COMPANY_ONLY: 'companyAndCollabOnly',
  COLLAB_ONLY: 'collabOnly',
  PUBLIC: 'public'
};
const APP_RESTRICTION_MESSAGE_TYPE = {
  DEFAULT: 'default',
  WITH_APP_LIST: 'withAppList',
  WITH_OVERFLOWN_APP_LIST: 'withOverflownAppList'
};
const CLASSIFICATION_COLOR_ID_0 = 0;
const CLASSIFICATION_COLOR_ID_1 = 1;
const CLASSIFICATION_COLOR_ID_2 = 2;
const CLASSIFICATION_COLOR_ID_3 = 3;
const CLASSIFICATION_COLOR_ID_4 = 4;
const CLASSIFICATION_COLOR_ID_5 = 5;
const CLASSIFICATION_COLOR_ID_6 = 6;
const CLASSIFICATION_COLOR_ID_7 = 7;
const DEFAULT_CLASSIFICATION_COLOR_ID = CLASSIFICATION_COLOR_ID_0;


/***/ }),

/***/ "./src/features/classification/index.js":
/*!**********************************************!*\
  !*** ./src/features/classification/index.js ***!
  \**********************************************/
/*! exports provided: default, STYLE_INLINE, STYLE_TOOLTIP, ClassifiedBadge, classificationMessages, EditClassificationButton, SecurityControls, classificationColorsMap, getClassificationLabelColor, getClassificationTinyconColor, ACCESS_POLICY_RESTRICTION, APP_RESTRICTION_MESSAGE_TYPE, CLASSIFICATION_COLOR_ID_0, CLASSIFICATION_COLOR_ID_1, CLASSIFICATION_COLOR_ID_2, CLASSIFICATION_COLOR_ID_3, CLASSIFICATION_COLOR_ID_4, CLASSIFICATION_COLOR_ID_5, CLASSIFICATION_COLOR_ID_6, CLASSIFICATION_COLOR_ID_7, DEFAULT_CLASSIFICATION_COLOR_ID, DEFAULT_MAX_APP_COUNT, DOWNLOAD_CONTROL, LIST_ACCESS_LEVEL, MANAGED_USERS_ACCESS_LEVEL, SECURITY_CONTROLS_FORMAT, SHARED_LINK_ACCESS_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classification */ "./src/features/classification/Classification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Classification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLE_INLINE", function() { return _Classification__WEBPACK_IMPORTED_MODULE_0__["STYLE_INLINE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLE_TOOLTIP", function() { return _Classification__WEBPACK_IMPORTED_MODULE_0__["STYLE_TOOLTIP"]; });

/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassifiedBadge */ "./src/features/classification/ClassifiedBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassifiedBadge", function() { return _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classificationMessages", function() { return _messages__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditClassificationButton */ "./src/features/classification/EditClassificationButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditClassificationButton", function() { return _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _security_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security-controls */ "./src/features/classification/security-controls/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityControls", function() { return _security_controls__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _classificationColorsMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classificationColorsMap */ "./src/features/classification/classificationColorsMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classificationColorsMap", function() { return _classificationColorsMap__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/features/classification/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationLabelColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getClassificationLabelColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationTinyconColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["getClassificationTinyconColor"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/features/classification/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCESS_POLICY_RESTRICTION", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["ACCESS_POLICY_RESTRICTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_RESTRICTION_MESSAGE_TYPE", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["APP_RESTRICTION_MESSAGE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_0", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_1", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_2", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_3", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_4", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_5", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_6", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASSIFICATION_COLOR_ID_7", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["CLASSIFICATION_COLOR_ID_7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CLASSIFICATION_COLOR_ID", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_CLASSIFICATION_COLOR_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAX_APP_COUNT", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_MAX_APP_COUNT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_CONTROL", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["DOWNLOAD_CONTROL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIST_ACCESS_LEVEL", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["LIST_ACCESS_LEVEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MANAGED_USERS_ACCESS_LEVEL", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["MANAGED_USERS_ACCESS_LEVEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SECURITY_CONTROLS_FORMAT", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["SECURITY_CONTROLS_FORMAT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHARED_LINK_ACCESS_LEVEL", function() { return _constants__WEBPACK_IMPORTED_MODULE_7__["SHARED_LINK_ACCESS_LEVEL"]; });










/***/ }),

/***/ "./src/features/classification/messages.js":
/*!*************************************************!*\
  !*** ./src/features/classification/messages.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  add: {
    "id": "boxui.classification.add",
    "defaultMessage": "Add"
  },
  classification: {
    "id": "boxui.classification.classification",
    "defaultMessage": "Classification"
  },
  definition: {
    "id": "boxui.classification.definition",
    "defaultMessage": "Definition"
  },
  edit: {
    "id": "boxui.classification.edit",
    "defaultMessage": "Edit"
  },
  missing: {
    "id": "boxui.classification.missing",
    "defaultMessage": "Not classified"
  },
  modifiedByLabel: {
    "id": "boxui.classification.modifiedByLabel",
    "defaultMessage": "Classification Label"
  },
  importedBy: {
    "id": "boxui.classification.importedBy",
    "defaultMessage": "Imported from {modifiedBy} on {modifiedAt}"
  },
  modifiedBy: {
    "id": "boxui.classification.modifiedBy",
    "defaultMessage": "Applied by {modifiedBy} on {modifiedAt}"
  },
  // Classification Colors
  classificationYellow: {
    "id": "boxui.classification.classificationYellow",
    "defaultMessage": "Yellow"
  },
  classificationOrange: {
    "id": "boxui.classification.classificationOrange",
    "defaultMessage": "Orange"
  },
  classificationRed: {
    "id": "boxui.classification.classificationRed",
    "defaultMessage": "Red"
  },
  classificationPurple: {
    "id": "boxui.classification.classificationPurple",
    "defaultMessage": "Purple"
  },
  classificationLightBlue: {
    "id": "boxui.classification.classificationLightBlue",
    "defaultMessage": "Light Blue"
  },
  classificationDarkBlue: {
    "id": "boxui.classification.classificationDarkBlue",
    "defaultMessage": "Dark Blue"
  },
  classificationGreen: {
    "id": "boxui.classification.classificationGreen",
    "defaultMessage": "Green"
  },
  classificationGrey: {
    "id": "boxui.classification.classificationGrey",
    "defaultMessage": "Grey"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControls.js":
/*!***************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControls.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/features/classification/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/features/classification/security-controls/utils.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/classification/security-controls/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/label/Label */ "./src/components/label/Label.tsx");
/* harmony import */ var _SecurityControlsItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SecurityControlsItem */ "./src/features/classification/security-controls/SecurityControlsItem.js");
/* harmony import */ var _SecurityControlsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SecurityControlsModal */ "./src/features/classification/security-controls/SecurityControlsModal.js");
/* harmony import */ var _SecurityControls_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SecurityControls.scss */ "./src/features/classification/security-controls/SecurityControls.scss");
/* harmony import */ var _SecurityControls_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SecurityControls_scss__WEBPACK_IMPORTED_MODULE_9__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  FULL,
  SHORT,
  SHORT_WITH_BTN
} = _constants__WEBPACK_IMPORTED_MODULE_2__["SECURITY_CONTROLS_FORMAT"];

class SecurityControls extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isSecurityControlsModalOpen: false
    });

    _defineProperty(this, "openModal", () => this.setState({
      isSecurityControlsModalOpen: true
    }));

    _defineProperty(this, "closeModal", () => this.setState({
      isSecurityControlsModalOpen: false
    }));
  }

  render() {
    const {
      classificationColor,
      classificationName,
      controls,
      controlsFormat,
      definition,
      itemName,
      maxAppCount,
      shouldRenderLabel
    } = this.props;
    let items = [];
    let modalItems;

    if (controlsFormat === FULL) {
      items = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getFullSecurityControlsMessages"])(controls, maxAppCount);
    } else {
      items = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getShortSecurityControlsMessage"])(controls);

      if (items.length && controlsFormat === SHORT_WITH_BTN) {
        modalItems = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getFullSecurityControlsMessages"])(controls, maxAppCount);
      }
    }

    if (!items.length) {
      return null;
    }

    const {
      isSecurityControlsModalOpen
    } = this.state;
    const shouldShowSecurityControlsModal = controlsFormat === SHORT_WITH_BTN && !!itemName && !!classificationName && !!definition;
    let itemsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "bdl-SecurityControls"
    }, items.map((_ref, index) => {
      let {
        message,
        tooltipMessage
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecurityControlsItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index,
        message: message,
        tooltipMessage: tooltipMessage
      });
    }));

    if (shouldRenderLabel) {
      itemsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].securityControlsLabel)
      }, itemsList);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, itemsList, shouldShowSecurityControlsModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "lnk",
      onClick: this.openModal,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].viewAll)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecurityControlsModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      classificationColor: classificationColor,
      classificationName: classificationName,
      closeModal: this.closeModal,
      definition: definition,
      itemName: itemName,
      isSecurityControlsModalOpen: isSecurityControlsModalOpen,
      modalItems: modalItems
    })));
  }

}

_defineProperty(SecurityControls, "defaultProps", {
  classificationName: '',
  definition: '',
  itemName: '',
  controls: {},
  controlsFormat: SHORT,
  maxAppCount: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MAX_APP_COUNT"],
  shouldRenderLabel: false
});

/* harmony default export */ __webpack_exports__["default"] = (SecurityControls);

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControls.scss":
/*!*****************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControls.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControlsItem.js":
/*!*******************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControlsItem.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconInfo */ "./src/icons/general/IconInfo.tsx");
/* harmony import */ var _SecurityControlsItem_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SecurityControlsItem.scss */ "./src/features/classification/security-controls/SecurityControlsItem.scss");
/* harmony import */ var _SecurityControlsItem_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SecurityControlsItem_scss__WEBPACK_IMPORTED_MODULE_5__);






const ICON_SIZE = 13;

const SecurityControlsItem = _ref => {
  let {
    message,
    tooltipMessage
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "bdl-SecurityControlsItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](message) ? message : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message), tooltipMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "bdl-SecurityControlsItem-tooltip",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], tooltipMessage),
    position: "middle-right",
    isTabbable: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-SecurityControlsItem-tooltipIcon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    width: ICON_SIZE,
    height: ICON_SIZE
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SecurityControlsItem);

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControlsItem.scss":
/*!*********************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControlsItem.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControlsModal.js":
/*!********************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControlsModal.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modal */ "./src/components/modal/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/button */ "./src/components/button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ "./src/features/classification/messages.js");
/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ClassifiedBadge */ "./src/features/classification/ClassifiedBadge.js");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/label/Label */ "./src/components/label/Label.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/features/classification/security-controls/messages.js");
/* harmony import */ var _SecurityControlsItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SecurityControlsItem */ "./src/features/classification/security-controls/SecurityControlsItem.js");
/* harmony import */ var _SecurityControlsModal_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SecurityControlsModal.scss */ "./src/features/classification/security-controls/SecurityControlsModal.scss");
/* harmony import */ var _SecurityControlsModal_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_SecurityControlsModal_scss__WEBPACK_IMPORTED_MODULE_10__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const SecurityControlsModal = _ref => {
  let {
    closeModal,
    definition,
    classificationColor,
    classificationName,
    isSecurityControlsModalOpen,
    itemName,
    modalItems
  } = _ref;

  if (!itemName || !classificationName || !definition) {
    return null;
  }

  const title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].modalTitle, {
    values: {
      itemName
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    className: "bdl-SecurityControlsModal",
    title: title,
    onRequestClose: closeModal,
    isOpen: isSecurityControlsModalOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].modalDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ClassifiedBadge__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: classificationColor,
    name: classificationName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].definition)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bdl-SecurityControlsModal-definition"
  }, definition)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "bdl-SecurityControlsModal-controlsItemList"
  }, modalItems.map((_ref2, index) => {
    let {
      message,
      tooltipMessage
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SecurityControlsItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      message: message,
      tooltipMessage: tooltipMessage
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_modal__WEBPACK_IMPORTED_MODULE_2__["ModalActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: closeModal,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].close))));
};

SecurityControlsModal.defaultProps = {
  isSecurityControlsModalOpen: false,
  modalItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (SecurityControlsModal);

/***/ }),

/***/ "./src/features/classification/security-controls/SecurityControlsModal.scss":
/*!**********************************************************************************!*\
  !*** ./src/features/classification/security-controls/SecurityControlsModal.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/security-controls/appRestrictionsMessageMap.js":
/*!************************************************************************************!*\
  !*** ./src/features/classification/security-controls/appRestrictionsMessageMap.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/features/classification/security-controls/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/features/classification/constants.js");


const {
  BLACKLIST,
  WHITELIST
} = _constants__WEBPACK_IMPORTED_MODULE_1__["LIST_ACCESS_LEVEL"];
const {
  DEFAULT,
  WITH_APP_LIST,
  WITH_OVERFLOWN_APP_LIST
} = _constants__WEBPACK_IMPORTED_MODULE_1__["APP_RESTRICTION_MESSAGE_TYPE"];
const appRestrictionsMessageMap = {
  [BLACKLIST]: {
    [DEFAULT]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadRestricted,
    [WITH_APP_LIST]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadBlacklist,
    [WITH_OVERFLOWN_APP_LIST]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadBlacklistOverflow
  },
  [WHITELIST]: {
    [DEFAULT]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadRestricted,
    [WITH_APP_LIST]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadWhitelist,
    [WITH_OVERFLOWN_APP_LIST]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].appDownloadWhitelistOverflow
  }
};
/* harmony default export */ __webpack_exports__["default"] = (appRestrictionsMessageMap);

/***/ }),

/***/ "./src/features/classification/security-controls/downloadRestrictionsMessageMap.js":
/*!*****************************************************************************************!*\
  !*** ./src/features/classification/security-controls/downloadRestrictionsMessageMap.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/features/classification/security-controls/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/features/classification/constants.js");


const {
  DESKTOP,
  MOBILE,
  WEB
} = _constants__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_CONTROL"];
const {
  OWNERS_AND_COOWNERS,
  OWNERS_COOWNERS_AND_EDITORS
} = _constants__WEBPACK_IMPORTED_MODULE_1__["MANAGED_USERS_ACCESS_LEVEL"];
const downloadRestrictionsMessageMap = {
  [DESKTOP]: {
    externalAllowed: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].desktopDownloadOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].desktopDownloadOwnersEditors
    },
    externalRestricted: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].desktopDownloadExternalOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].desktopDownloadExternalOwnersEditors,
      default: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].desktopDownloadExternal
    }
  },
  [MOBILE]: {
    externalAllowed: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].mobileDownloadOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].mobileDownloadOwnersEditors
    },
    externalRestricted: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].mobileDownloadExternalOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].mobileDownloadExternalOwnersEditors,
      default: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].mobileDownloadExternal
    }
  },
  [WEB]: {
    externalAllowed: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].webDownloadOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].webDownloadOwnersEditors
    },
    externalRestricted: {
      [OWNERS_AND_COOWNERS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].webDownloadExternalOwners,
      [OWNERS_COOWNERS_AND_EDITORS]: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].webDownloadExternalOwnersEditors,
      default: _messages__WEBPACK_IMPORTED_MODULE_0__["default"].webDownloadExternal
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (downloadRestrictionsMessageMap);

/***/ }),

/***/ "./src/features/classification/security-controls/index.js":
/*!****************************************************************!*\
  !*** ./src/features/classification/security-controls/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecurityControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityControls */ "./src/features/classification/security-controls/SecurityControls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SecurityControls__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/features/classification/security-controls/messages.js":
/*!*******************************************************************!*\
  !*** ./src/features/classification/security-controls/messages.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  securityControlsLabel: {
    "id": "boxui.securityControls.securityControlsLabel",
    "defaultMessage": "Restrictions"
  },
  // Short summary messages - 1 restriction
  shortSharing: {
    "id": "boxui.securityControls.shortSharing",
    "defaultMessage": "Sharing restriction applies"
  },
  shortDownload: {
    "id": "boxui.securityControls.shortDownload",
    "defaultMessage": "Download restrictions apply"
  },
  shortApp: {
    "id": "boxui.securityControls.shortApp",
    "defaultMessage": "Application restrictions apply"
  },
  shortWatermarking: {
    "id": "boxui.securityControls.shortWatermarking",
    "defaultMessage": "Watermarking applies"
  },
  shortSign: {
    "id": "boxui.securityControls.shortSign",
    "defaultMessage": "Sign restrictions apply"
  },
  // Short summary messages - 2 restrictions
  shortSharingDownload: {
    "id": "boxui.securityControls.shortSharingDownload",
    "defaultMessage": "Sharing and download restrictions apply"
  },
  shortSharingApp: {
    "id": "boxui.securityControls.shortSharingApp",
    "defaultMessage": "Sharing and app restrictions apply"
  },
  shortDownloadApp: {
    "id": "boxui.securityControls.shortDownloadApp",
    "defaultMessage": "Download and app restrictions apply"
  },
  shortSharingSign: {
    "id": "boxui.securityControls.shortSharingSign",
    "defaultMessage": "Sharing and Sign restrictions apply"
  },
  shortDownloadSign: {
    "id": "boxui.securityControls.shortDownloadSign",
    "defaultMessage": "Download and Sign restrictions apply"
  },
  shortAppSign: {
    "id": "boxui.securityControls.shortAppSign",
    "defaultMessage": "App and Sign restrictions apply"
  },
  // Short summary messages - 3 restrictions
  shortDownloadAppSign: {
    "id": "boxui.securityControls.shortDownloadAppSign",
    "defaultMessage": "Download, app and Sign restrictions apply"
  },
  shortSharingAppSign: {
    "id": "boxui.securityControls.shortSharingAppSign",
    "defaultMessage": "Sharing, app and Sign restrictions apply"
  },
  shortSharingDownloadSign: {
    "id": "boxui.securityControls.shortSharingDownloadSign",
    "defaultMessage": "Sharing, download and Sign restrictions apply"
  },
  shortSharingDownloadApp: {
    "id": "boxui.securityControls.shortSharingDownloadApp",
    "defaultMessage": "Sharing, download and app restrictions apply"
  },
  // Short summary messages - 4 restrictions
  shortSharingDownloadAppSign: {
    "id": "boxui.securityControls.shortSharingDownloadAppSign",
    "defaultMessage": "Sharing, download, app and Sign restrictions apply"
  },
  // Full list individual restriction bullets
  sharingCollabOnly: {
    "id": "boxui.securityControls.sharingCollabOnly",
    "defaultMessage": "Shared links allowed for collaborators only."
  },
  sharingCollabAndCompanyOnly: {
    "id": "boxui.securityControls.sharingCollabAndCompanyOnly",
    "defaultMessage": "Shared links cannot be made publicly accessible."
  },
  externalCollabBlock: {
    "id": "boxui.securityControls.externalCollabBlock",
    "defaultMessage": "External collaboration restricted."
  },
  externalCollabDomainList: {
    "id": "boxui.securityControls.externalCollabDomainList",
    "defaultMessage": "External collaboration limited to approved domains."
  },
  appDownloadRestricted: {
    "id": "boxui.securityControls.appDownloadRestricted",
    "defaultMessage": "Download restricted for some applications."
  },
  appDownloadBlacklist: {
    "id": "boxui.securityControls.appDownloadBlacklist",
    "defaultMessage": "Download restricted for some applications: {appNames}"
  },
  appDownloadBlacklistOverflow: {
    "id": "boxui.securityControls.appDownloadBlacklistOverflow",
    "defaultMessage": "Download restricted for some applications: {appNames} +{remainingAppCount} more"
  },
  appDownloadWhitelist: {
    "id": "boxui.securityControls.appDownloadWhitelist",
    "defaultMessage": "Only select applications are allowed: {appNames}"
  },
  appDownloadWhitelistOverflow: {
    "id": "boxui.securityControls.appDownloadWhitelistOverflow",
    "defaultMessage": "Only select applications are allowed: {appNames} +{remainingAppCount} more"
  },
  allAppNames: {
    "id": "boxui.securityControls.allAppNames",
    "defaultMessage": "All applications: {appsList}"
  },
  // Web Download Restrictions
  webDownloadOwners: {
    "id": "boxui.securityControls.webDownloadOwners",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners."
  },
  webDownloadOwnersEditors: {
    "id": "boxui.securityControls.webDownloadOwnersEditors",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners/Editors."
  },
  webDownloadExternalOwners: {
    "id": "boxui.securityControls.webDownloadExternalOwners",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners. Also restricted for external users."
  },
  webDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.webDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  webDownloadExternal: {
    "id": "boxui.securityControls.webDownloadExternal",
    "defaultMessage": "Download restricted on web for external users."
  },
  boxSignRequestRestricted: {
    "id": "boxui.securityControls.boxSignRequestRestricted",
    "defaultMessage": "Sign restrictions apply."
  },
  // Mobile Download Restrictions
  mobileDownloadOwners: {
    "id": "boxui.securityControls.mobileDownloadOwners",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners."
  },
  mobileDownloadOwnersEditors: {
    "id": "boxui.securityControls.mobileDownloadOwnersEditors",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners/Editors."
  },
  mobileDownloadExternalOwners: {
    "id": "boxui.securityControls.mobileDownloadExternalOwners",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners. Also restricted for external users."
  },
  mobileDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.mobileDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  mobileDownloadExternal: {
    "id": "boxui.securityControls.mobileDownloadExternal",
    "defaultMessage": "Download restricted on mobile for external users."
  },
  // Desktop Download Restrictions
  desktopDownloadOwners: {
    "id": "boxui.securityControls.desktopDownloadOwners",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners."
  },
  desktopDownloadOwnersEditors: {
    "id": "boxui.securityControls.desktopDownloadOwnersEditors",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners/Editors."
  },
  desktopDownloadExternalOwners: {
    "id": "boxui.securityControls.desktopDownloadExternalOwners",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners. Also restricted for external users."
  },
  desktopDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.desktopDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  desktopDownloadExternal: {
    "id": "boxui.securityControls.downloadExternal",
    "defaultMessage": "Download restricted on Box Drive for external users."
  },
  // Security Controls Modal
  viewAll: {
    "id": "boxui.securityControls.viewAll",
    "defaultMessage": "View All"
  },
  modalTitle: {
    "id": "boxui.securityControls.modalTitle",
    "defaultMessage": "View Classification for '{itemName}'"
  },
  modalDescription: {
    "id": "boxui.securityControls.modalDescription",
    "defaultMessage": "Classification labels defined by your administrator can be used to label content and apply security policies."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/classification/security-controls/utils.js":
/*!****************************************************************!*\
  !*** ./src/features/classification/security-controls/utils.js ***!
  \****************************************************************/
/*! exports provided: getShortSecurityControlsMessage, getFullSecurityControlsMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShortSecurityControlsMessage", function() { return getShortSecurityControlsMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullSecurityControlsMessages", function() { return getFullSecurityControlsMessages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isNil */ "./node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_i18n_FormattedCompMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/i18n/FormattedCompMessage */ "./src/components/i18n/FormattedCompMessage.js");
/* harmony import */ var _components_link_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/link/Link */ "./src/components/link/Link.tsx");
/* harmony import */ var _appRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appRestrictionsMessageMap */ "./src/features/classification/security-controls/appRestrictionsMessageMap.js");
/* harmony import */ var _downloadRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloadRestrictionsMessageMap */ "./src/features/classification/security-controls/downloadRestrictionsMessageMap.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/classification/security-controls/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/features/classification/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  APP,
  BOX_SIGN_REQUEST,
  DOWNLOAD,
  EXTERNAL_COLLAB,
  SHARED_LINK,
  WATERMARK
} = _constants__WEBPACK_IMPORTED_MODULE_8__["ACCESS_POLICY_RESTRICTION"];
const {
  DEFAULT,
  WITH_APP_LIST,
  WITH_OVERFLOWN_APP_LIST
} = _constants__WEBPACK_IMPORTED_MODULE_8__["APP_RESTRICTION_MESSAGE_TYPE"];
const {
  DESKTOP,
  MOBILE,
  WEB
} = _constants__WEBPACK_IMPORTED_MODULE_8__["DOWNLOAD_CONTROL"];
const {
  BLOCK,
  WHITELIST,
  BLACKLIST
} = _constants__WEBPACK_IMPORTED_MODULE_8__["LIST_ACCESS_LEVEL"];
const {
  COLLAB_ONLY,
  COLLAB_AND_COMPANY_ONLY,
  PUBLIC
} = _constants__WEBPACK_IMPORTED_MODULE_8__["SHARED_LINK_ACCESS_LEVEL"];

const getShortSecurityControlsMessage = controls => {
  const items = [];
  const {
    app,
    boxSignRequest,
    download,
    externalCollab,
    sharedLink,
    watermark
  } = controls; // Shared link and external collab restrictions are grouped
  // together as generic "sharing" restrictions

  const sharing = sharedLink && sharedLink.accessLevel !== PUBLIC || externalCollab; // 4 restriction combinations

  if (sharing && download && app && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingDownloadAppSign
    });
  } // 3 restriction combinations
  else if (sharing && download && app) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingDownloadApp
    });
  } else if (download && app && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortDownloadAppSign
    });
  } else if (sharing && app && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingAppSign
    });
  } else if (sharing && download && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingDownloadSign
    });
  } // 2 restriction combinations
  else if (sharing && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingSign
    });
  } else if (download && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortDownloadSign
    });
  } else if (app && boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortAppSign
    });
  } else if (sharing && download) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingDownload
    });
  } else if (sharing && app) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharingApp
    });
  } else if (download && app) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortDownloadApp
    });
  } // 1 restriction combinations
  else if (boxSignRequest) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSign
    });
  } else if (sharing) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortSharing
    });
  } else if (download) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortDownload
    });
  } else if (app) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortApp
    });
  }

  if (watermark) {
    items.push({
      message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].shortWatermarking
    });
  }

  return items;
};

const getSharedLinkMessages = controls => {
  const items = [];
  const accessLevel = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${SHARED_LINK}.accessLevel`);

  switch (accessLevel) {
    case COLLAB_ONLY:
      items.push({
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].sharingCollabOnly
      });
      break;

    case COLLAB_AND_COMPANY_ONLY:
      items.push({
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].sharingCollabAndCompanyOnly
      });
      break;

    default:
      // no-op
      break;
  }

  return items;
};

const getWatermarkingMessages = controls => {
  const items = [];
  const isWatermarkEnabled = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${WATERMARK}.enabled`, false);

  if (isWatermarkEnabled) {
    const formattedCompMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_i18n_FormattedCompMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "boxui.securityControls.watermarkingAppliedWithLink",
      description: "Bullet point that summarizes watermarking applied to classification"
    }, "Watermarking will be applied, click", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "support-link",
      href: "https://support.box.com/hc/en-us/articles/360044195253",
      target: "_blank"
    }, "here"), ' ', "more details on Watermarking");
    items.push({
      message: formattedCompMessage
    });
  }

  return items;
};

const getExternalCollabMessages = controls => {
  const items = [];
  const accessLevel = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${EXTERNAL_COLLAB}.accessLevel`);

  switch (accessLevel) {
    case BLOCK:
      items.push({
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].externalCollabBlock
      });
      break;

    case WHITELIST:
    case BLACKLIST:
      items.push({
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].externalCollabDomainList
      });
      break;

    default:
      // no-op
      break;
  }

  return items;
};

const getAppDownloadMessages = (controls, maxAppCount) => {
  const items = [];
  const accessLevel = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${APP}.accessLevel`);

  switch (accessLevel) {
    case BLOCK:
      items.push({
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].appDownloadRestricted
      });
      break;

    case WHITELIST:
    case BLACKLIST:
      {
        const apps = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${APP}.apps`, []);
        maxAppCount = lodash_isNil__WEBPACK_IMPORTED_MODULE_2___default()(maxAppCount) ? apps.length : maxAppCount;
        const appsToDisplay = apps.slice(0, maxAppCount);
        const remainingAppCount = apps.slice(maxAppCount).length;
        const appNames = appsToDisplay.map(_ref => {
          let {
            displayText
          } = _ref;
          return displayText;
        }).join(', ');

        if (remainingAppCount) {
          const appsList = apps.map(_ref2 => {
            let {
              displayText
            } = _ref2;
            return displayText;
          }).join(', ');
          items.push({
            message: _objectSpread(_objectSpread({}, _appRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_5__["default"][accessLevel][WITH_OVERFLOWN_APP_LIST]), {}, {
              values: {
                appNames,
                remainingAppCount
              }
            }),
            tooltipMessage: _objectSpread(_objectSpread({}, _messages__WEBPACK_IMPORTED_MODULE_7__["default"].allAppNames), {}, {
              values: {
                appsList
              }
            })
          });
        } else {
          // Display list of apps if available, otherwise use generic
          // app restriction copy
          const messageType = apps.length ? WITH_APP_LIST : DEFAULT;
          items.push({
            message: _objectSpread(_objectSpread({}, _appRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_5__["default"][accessLevel][messageType]), {}, {
              values: {
                appNames
              }
            })
          });
        }

        break;
      }

    default:
      // no-op
      break;
  }

  return items;
};

const getDownloadMessages = controls => {
  const items = [];
  const {
    web,
    mobile,
    desktop
  } = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, DOWNLOAD, {});
  const downloadRestrictions = {
    [WEB]: {
      platform: WEB,
      restrictions: web
    },
    [MOBILE]: {
      platform: MOBILE,
      restrictions: mobile
    },
    [DESKTOP]: {
      platform: DESKTOP,
      restrictions: desktop
    }
  };
  Object.keys(downloadRestrictions).forEach(platformKey => {
    const {
      platform,
      restrictions
    } = downloadRestrictions[platformKey];

    if (!restrictions) {
      return;
    }

    const {
      restrictExternalUsers,
      restrictManagedUsers
    } = restrictions;

    if (restrictManagedUsers && restrictExternalUsers) {
      items.push({
        message: _downloadRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_6__["default"][platform].externalRestricted[restrictManagedUsers]
      });
    } else if (restrictManagedUsers) {
      items.push({
        message: _downloadRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_6__["default"][platform].externalAllowed[restrictManagedUsers]
      });
    } else if (restrictExternalUsers) {
      items.push({
        message: _downloadRestrictionsMessageMap__WEBPACK_IMPORTED_MODULE_6__["default"][platform].externalRestricted.default
      });
    }
  });
  return items;
};

const getBoxSignRequestMessages = controls => {
  const isBoxSignRequestRestrictionEnabled = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(controls, `${BOX_SIGN_REQUEST}.enabled`, false);
  const items = isBoxSignRequestRestrictionEnabled ? [{
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].boxSignRequestRestricted
  }] : [];
  return items;
};

const getFullSecurityControlsMessages = (controls, maxAppCount) => {
  const items = [...getSharedLinkMessages(controls), ...getExternalCollabMessages(controls), ...getDownloadMessages(controls), ...getAppDownloadMessages(controls, maxAppCount), ...getWatermarkingMessages(controls), ...getBoxSignRequestMessages(controls)];
  return items;
};



/***/ }),

/***/ "./src/features/classification/utils.js":
/*!**********************************************!*\
  !*** ./src/features/classification/utils.js ***!
  \**********************************************/
/*! exports provided: getClassificationLabelColor, getClassificationTinyconColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassificationLabelColor", function() { return getClassificationLabelColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassificationTinyconColor", function() { return getClassificationTinyconColor; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classificationColorsMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classificationColorsMap */ "./src/features/classification/classificationColorsMap.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/features/classification/constants.js");




function getClassificationLabelColor(classificationLabelData) {
  const colorID = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(classificationLabelData, 'colorID', _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CLASSIFICATION_COLOR_ID"]);
  const {
    color
  } = _classificationColorsMap__WEBPACK_IMPORTED_MODULE_1__["default"][colorID] || _classificationColorsMap__WEBPACK_IMPORTED_MODULE_1__["default"][_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CLASSIFICATION_COLOR_ID"]];
  return color;
}

function getClassificationTinyconColor(classificationLabelData) {
  const colorID = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(classificationLabelData, 'colorID', _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CLASSIFICATION_COLOR_ID"]);
  const {
    tinycon
  } = _classificationColorsMap__WEBPACK_IMPORTED_MODULE_1__["default"][colorID] || _classificationColorsMap__WEBPACK_IMPORTED_MODULE_1__["default"][_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CLASSIFICATION_COLOR_ID"]];
  return tinycon;
} // eslint-disable-next-line import/prefer-default-export




/***/ }),

/***/ "./src/features/item-details/EditableDescription.js":
/*!**********************************************************!*\
  !*** ./src/features/item-details/EditableDescription.js ***!
  \**********************************************************/
/*! exports provided: EditableDescriptionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableDescriptionBase", function() { return EditableDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EditableDescription extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleBlur", () => {
      const {
        value
      } = this.state;
      this.props.onDescriptionChange(value);
    });

    _defineProperty(this, "handleChange", event => {
      const {
        value
      } = event.currentTarget;
      this.setState({
        value
      });
    });

    this.state = {
      value: props.value || ''
    };
  }

  componentDidUpdate(_ref) {
    let {
      value: prevValue
    } = _ref;
    const {
      value
    } = this.props;

    if (prevValue !== value) {
      this.setState({
        value
      });
    }
  }

  render() {
    const {
      intl,
      textAreaProps
    } = this.props;
    const {
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, textAreaProps, {
      className: "description-textarea",
      maxLength: "255",
      maxRows: 6,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].descriptionPlaceholder),
      value: value
    }));
  }

}

_defineProperty(EditableDescription, "defaultProps", {
  textAreaProps: {},
  value: ''
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(EditableDescription));

/***/ }),

/***/ "./src/features/item-details/EditableURL.js":
/*!**************************************************!*\
  !*** ./src/features/item-details/EditableURL.js ***!
  \**************************************************/
/*! exports provided: EditableURLBase, VALUE_MISSING, TYPE_MISMATCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableURLBase", function() { return EditableURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_MISSING", function() { return VALUE_MISSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MISMATCH", function() { return TYPE_MISMATCH; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./src/components/text-input/TextInput.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const VALUE_MISSING = 'valueMissing';
const TYPE_MISMATCH = 'typeMismatch';
const errorMap = {
  [VALUE_MISSING]: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].requiredFieldError),
  [TYPE_MISMATCH]: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].invalidURLError)
};

class EditableURL extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      error: '',
      value: this.props.value
    });

    _defineProperty(this, "handleBlur", () => {
      if (!this.inputEl) {
        return;
      }

      const {
        valid,
        valueMissing
      } = this.inputEl.validity;

      if (!valid) {
        this.setState({
          error: valueMissing ? VALUE_MISSING : TYPE_MISMATCH
        });
        return;
      }

      this.props.onValidURLChange(this.state.value);
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.currentTarget.value
      });
    });

    _defineProperty(this, "handleFocus", () => {
      this.setState({
        error: ''
      });
    });
  }

  componentDidUpdate(_ref) {
    let {
      value: prevValue
    } = _ref;
    const {
      value
    } = this.props;

    if (prevValue !== value) {
      this.setState({
        value
      });
    }
  }

  render() {
    const {
      intl: {
        formatMessage
      }
    } = this.props;
    const {
      error,
      value
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "url-input",
      error: error ? errorMap[error] : undefined,
      hideLabel: true,
      inputRef: ref => {
        this.inputEl = ref;
      },
      isRequired: true,
      label: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].url),
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      placeholder: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].urlPlaceholder),
      type: "url",
      value: value
    });
  }

}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(EditableURL));

/***/ }),

/***/ "./src/features/item-details/ItemExpirationNotice.js":
/*!***********************************************************!*\
  !*** ./src/features/item-details/ItemExpirationNotice.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-notice */ "./src/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const FILE = 'file';
const FOLDER = 'folder';
const WEBLINK = 'web_link';

const ItemExpirationNotice = _ref => {
  let {
    expiration,
    itemType
  } = _ref;
  let messageID = '';

  switch (itemType) {
    case FILE:
      messageID = 'fileExpiration';
      break;

    case FOLDER:
      messageID = 'folderExpiration';
      break;

    case WEBLINK:
      messageID = 'bookmarkExpiration';
      break;
    // no default
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"][messageID], {
    values: {
      expiration
    }
  })));
};

ItemExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /** the type of the item */
  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([FILE, FOLDER, WEBLINK]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemExpirationNotice);

/***/ }),

/***/ "./src/features/item-details/ItemProperties.js":
/*!*****************************************************!*\
  !*** ./src/features/item-details/ItemProperties.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _EditableDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditableDescription */ "./src/features/item-details/EditableDescription.js");
/* harmony import */ var _EditableURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditableURL */ "./src/features/item-details/EditableURL.js");
/* harmony import */ var _RetentionPolicy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RetentionPolicy */ "./src/features/item-details/RetentionPolicy.js");
/* harmony import */ var _ReadonlyDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReadonlyDescription */ "./src/features/item-details/ReadonlyDescription.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ItemProperties.scss */ "./src/features/item-details/ItemProperties.scss");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const datetimeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

const ItemProperties = _ref => {
  let {
    createdAt,
    description,
    descriptionTextareaProps = {},
    enterpriseOwner,
    modifiedAt,
    onDescriptionChange,
    onValidURLChange,
    owner,
    retentionPolicyProps = {},
    size,
    trashedAt,
    uploader,
    url
  } = _ref;
  const descriptionId = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('description_');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
    className: "item-properties"
  }, description || onDescriptionChange ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].description, text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    id: descriptionId
  }, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, onDescriptionChange ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDescriptionChange: onDescriptionChange,
    textAreaProps: _objectSpread(_objectSpread({}, descriptionTextareaProps), {}, {
      'aria-labelledby': descriptionId
    }),
    value: description
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReadonlyDescription__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: description
  }))) : null, !!url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, onValidURLChange ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableURL__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onValidURLChange: onValidURLChange,
    value: url
  }) : url)), owner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].owner)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, owner)) : null, enterpriseOwner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].enterpriseOwner)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, enterpriseOwner)) : null, uploader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].uploader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, uploader)) : null, createdAt ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].created)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(createdAt)
  }, datetimeOptions)))) : null, modifiedAt ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].modified)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(modifiedAt)
  }, datetimeOptions)))) : null, size ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].size)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, size)) : null, trashedAt ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].deleted)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(trashedAt)
  }, datetimeOptions)))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RetentionPolicy__WEBPACK_IMPORTED_MODULE_6__["default"], retentionPolicyProps));
};

ItemProperties.propTypes = {
  /** the datetime this item was created, accepts any value that can be passed to the Date() constructor */
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** a description for the item */
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** props for the editable description textarea */
  descriptionTextareaProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** the name of the item's enterprise owner if the item is owned by a different enterprise */
  enterpriseOwner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the datetime this item was last modified, accepts any value that can be passed to the Date() constructor */
  modifiedAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** function called on description textarea blur with the new value to save */
  onDescriptionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** function called on url input blur with the new value to save */
  onValidURLChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** the name of the item's owner */
  owner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** props for the retention policy of this item */
  retentionPolicyProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** use the getFileSize util to get a localized human-readable string from the number of bytes */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the datetime this item was deleted or moved to trash, accepts any value that can be passed to the Date() constructor */
  trashedAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** the name of the user who uploaded this item */
  uploader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the URL for the item when the item is a weblink */
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ItemProperties);

/***/ }),

/***/ "./src/features/item-details/ItemProperties.scss":
/*!*******************************************************!*\
  !*** ./src/features/item-details/ItemProperties.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/item-details/ReadonlyDescription.js":
/*!**********************************************************!*\
  !*** ./src/features/item-details/ReadonlyDescription.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-process-string */ "./node_modules/react-process-string/dist/index.js");
/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_process_string__WEBPACK_IMPORTED_MODULE_2__);



const NEWLINE_REGEX = /(\r\n|\n\r|\n|\r)/g; // eslint-disable-next-line no-useless-escape

const URL_REGEX = /\b(ht|f)tps?:\/\/[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!\$'\(\)\*;,]*)?/gim;

const ReadonlyDescription = _ref => {
  let {
    value
  } = _ref;
  return react_process_string__WEBPACK_IMPORTED_MODULE_2___default()([{
    regex: NEWLINE_REGEX,
    // eslint-disable-next-line react/display-name
    fn: key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      key: key
    })
  }, {
    regex: URL_REGEX,
    // eslint-disable-next-line react/display-name
    fn: (key, result) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: key,
      href: result[0],
      rel: "noopener noreferrer",
      target: "_blank"
    }, result[0])
  }])(value);
};

ReadonlyDescription.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ReadonlyDescription);

/***/ }),

/***/ "./src/features/item-details/RetentionPolicy.js":
/*!******************************************************!*\
  !*** ./src/features/item-details/RetentionPolicy.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const datetimeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
};

const RetentionPolicy = _ref => {
  let {
    dispositionTime,
    openModal,
    policyType,
    retentionPolicyDescription
  } = _ref;

  if (!retentionPolicyDescription) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, retentionPolicyDescription), policyType !== 'indefinite' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyExpiration)), dispositionTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], _extends({
    value: new Date(dispositionTime)
  }, datetimeOptions)), openModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "lnk bdl-RetentionLink",
    onClick: openModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyExtend)) : null) : null) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (RetentionPolicy);

/***/ }),

/***/ "./src/features/item-details/SharedLinkExpirationNotice.js":
/*!*****************************************************************!*\
  !*** ./src/features/item-details/SharedLinkExpirationNotice.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-notice */ "./src/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const SharedLinkExpirationNotice = _ref => {
  let {
    expiration
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].sharedLinkExpiration, {
    values: {
      expiration
    }
  })));
};

SharedLinkExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SharedLinkExpirationNotice);

/***/ }),

/***/ "./src/features/item-details/VersionHistoryLink.js":
/*!*********************************************************!*\
  !*** ./src/features/item-details/VersionHistoryLink.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
const _excluded = ["className", "versionCount", "onClick"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const VersionHistoryLink = _ref => {
  let {
    className,
    versionCount,
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const formattedMessageComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].savedVersions, {
    values: {
      versionCount
    }
  })); // Only render it as a link if there is an onClick

  if (onClick) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('lnk', className),
      onClick: onClick
    }, rest), formattedMessageComponent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, formattedMessageComponent);
};

VersionHistoryLink.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (VersionHistoryLink);

/***/ }),

/***/ "./src/features/item-details/messages.js":
/*!***********************************************!*\
  !*** ./src/features/item-details/messages.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  bookmarkExpiration: {
    "id": "boxui.itemDetails.bookmarkExpiration",
    "defaultMessage": "This bookmark will be deleted on {expiration}."
  },
  created: {
    "id": "boxui.itemDetails.created",
    "defaultMessage": "Created"
  },
  deleted: {
    "id": "boxui.itemDetails.deleted",
    "defaultMessage": "Deleted"
  },
  description: {
    "id": "boxui.itemDetails.description",
    "defaultMessage": "Description"
  },
  descriptionPlaceholder: {
    "id": "boxui.itemDetails.descriptionPlaceholder",
    "defaultMessage": "Enter a description"
  },
  enterpriseOwner: {
    "id": "boxui.itemDetails.enterpriseOwner",
    "defaultMessage": "Enterprise Owner"
  },
  fileExpiration: {
    "id": "boxui.itemDetails.fileExpiration",
    "defaultMessage": "This file will be deleted on {expiration}."
  },
  folderExpiration: {
    "id": "boxui.itemDetails.folderExpiration",
    "defaultMessage": "This folder will be deleted on {expiration}."
  },
  modified: {
    "id": "boxui.itemDetails.modified",
    "defaultMessage": "Modified"
  },
  owner: {
    "id": "boxui.itemDetails.owner",
    "defaultMessage": "Owner"
  },
  retentionPolicyDescription: {
    "id": "boxui.itemDetails.retentionPolicyDescription",
    "defaultMessage": "Policy"
  },
  retentionPolicyExpiration: {
    "id": "boxui.itemDetails.retentionPolicyExpiration",
    "defaultMessage": "Policy Expiration"
  },
  retentionPolicyExtend: {
    "id": "boxui.itemDetails.retentionPolicyExtend",
    "defaultMessage": "Extend"
  },
  savedVersions: {
    "id": "boxui.itemDetails.savedVersions",
    "defaultMessage": "{versionCount, number} Saved Versions"
  },
  sharedLinkExpiration: {
    "id": "boxui.itemDetails.sharedLinkExpiration",
    "defaultMessage": "This shared link will be disabled on {expiration}."
  },
  size: {
    "id": "boxui.itemDetails.size",
    "defaultMessage": "Size"
  },
  uploader: {
    "id": "boxui.itemDetails.uploader",
    "defaultMessage": "Uploader"
  },
  url: {
    "id": "boxui.itemDetails.url",
    "defaultMessage": "URL"
  },
  urlPlaceholder: {
    "id": "boxui.itemDetails.urlPlaceholder",
    "defaultMessage": "Enter a valid url"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/security/SecurityBadge.js":
/*!************************************************!*\
  !*** ./src/features/security/SecurityBadge.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconAlertDefault */ "./src/icons/general/IconAlertDefault.tsx");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecurityBadge.scss */ "./src/features/security/SecurityBadge.scss");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["className", "color", "icon", "message"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SecurityBadge = _ref => {
  let {
    className,
    color,
    icon,
    message
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-SecurityBadge', className),
    style: {
      backgroundColor: color
    }
  }, rest), icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-SecurityBadge-name"
  }, message));
};

SecurityBadge.defaultProps = {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlYellow50"],
    height: 22,
    width: 22,
    strokeWidth: 3
  })
};
/* harmony default export */ __webpack_exports__["default"] = (SecurityBadge);

/***/ }),

/***/ "./src/features/security/SecurityBadge.scss":
/*!**************************************************!*\
  !*** ./src/features/security/SecurityBadge.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/security/index.js":
/*!****************************************!*\
  !*** ./src/features/security/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityBadge */ "./src/features/security/SecurityBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/icons/general/IconComment.tsx":
/*!*******************************************!*\
  !*** ./src/icons/general/IconComment.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconComment = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 11,
    title,
    width = 11
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-comment ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 11 11",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M9.556.932H1.492C.938.932.49 1.386.49 1.94l-.006 9.072L2.5 8.996h7.056c.554 0 1.008-.454 1.008-1.008V1.94c0-.554-.454-1.008-1.008-1.008zM2.5 4.46h6.048v1.008H2.5V4.46zm4.032 2.52H2.5V5.972h4.032V6.98zm2.016-3.024H2.5V2.948h6.048v1.008z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconComment);

/***/ }),

/***/ "./src/icons/general/IconDownloadSolid.tsx":
/*!*************************************************!*\
  !*** ./src/icons/general/IconDownloadSolid.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconDownloadSolid = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 10,
    title,
    width = 10
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-download-solid ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M9.658 4.304H7.143V.634h-3.77v3.67H.857l4.4 4.283 4.4-4.283zM.858 9.81v1.224h8.8V9.81h-8.8z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDownloadSolid);

/***/ }),

/***/ "./src/icons/general/IconEye.tsx":
/*!***************************************!*\
  !*** ./src/icons/general/IconEye.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconEye = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 11,
    title,
    width = 15
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-eye ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 15 11",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M.118 5.857C1.233 8.855 3.986 10.98 7.21 10.98c3.223 0 5.976-2.125 7.09-5.123C13.187 2.86 10.434.735 7.21.735 3.986.735 1.233 2.86.118 5.857zM7.21 9.27c-1.78 0-3.224-1.528-3.224-3.413 0-1.885 1.444-3.414 3.224-3.414 1.78 0 3.223 1.53 3.223 3.414 0 1.885-1.444 3.414-3.223 3.414zm0-5.462c-1.07 0-1.935.915-1.935 2.05 0 1.133.864 2.048 1.935 2.048 1.07 0 1.934-.915 1.934-2.05 0-1.133-.864-2.048-1.934-2.048z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEye);

/***/ }),

/***/ "./src/icons/general/IconPencilSolid.tsx":
/*!***********************************************!*\
  !*** ./src/icons/general/IconPencilSolid.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconPencilSolid = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 10,
    title,
    width = 10
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-pencil-solid ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M.5 7.625V9.5h1.875l5.53-5.53-1.876-1.874L.5 7.626zM9.354 2.52c.195-.194.195-.51 0-.704L8.184.646C7.99.45 7.674.45 7.48.646l-.916.915L8.44 3.437l.914-.915z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPencilSolid);

/***/ }),

/***/ "./src/icons/general/IconSecurityClassification.tsx":
/*!**********************************************************!*\
  !*** ./src/icons/general/IconSecurityClassification.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");





// TODO - Move this icon to the Asset repo. P Paul 5/2020
const IconSecurityClassification = _ref => {
  let {
    className = '',
    height = 12,
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray"],
    title,
    width = 12
  } = _ref;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-IconSecurityClassification', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes,
    height: height,
    title: title,
    viewBox: "0 0 12 12",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M6 0l4.875 2.438v2.856c0 2.645-2.309 5.792-4.79 6.366L6 11.68l-.084-.02c-2.482-.574-4.791-3.721-4.791-6.366V2.438L6 0zm0 .839L1.875 2.9v2.393c0 2.276 2.026 5.068 4.125 5.614 2.1-.546 4.125-3.338 4.125-5.614V2.901L6 .839zm2.25 2.58c.207 0 .375.168.375.375v3c0 .207-.168.375-.375.375s-.375-.168-.375-.375v-3c0-.207.168-.375.375-.375z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconSecurityClassification);

/***/ }),

/***/ "./src/utils/env.js":
/*!**************************!*\
  !*** ./src/utils/env.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDevEnvironment; });
/**
 * 
 * @file File for some simple environment-related utilities
 * @author Box
 */

/**
 * Return true if we are currently running in a test or development
 * environment.
 *
 * @return {boolean} true if we are running in a test or dev environment
 */
function isDevEnvironment() {
  return process && Object({"NODE_ENV":"development","BABEL_ENV":"development"}) && ( false || "development" === 'dev');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/getFileSize.js":
/*!**********************************!*\
  !*** ./src/utils/getFileSize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_0__);

const defaultDigitalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const bcp47TagToDigitalUnits = {
  fi: ['t', 'kt', 'Mt', 'Gt', 'Tt', 'Pt', 'Et', 'Zt', 'Yt'],
  fr: ['o', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'],
  ru: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ']
};
/**
 * Formats a file size from number of bytes to a human-readable, localized string.
 * @param {number} size Number of bytes
 * @param {string} [locale] Optional locale, defaults to 'en'
 * @returns {string} The size as a localized string
 */

const getFileSize = function (size) {
  let locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  const settings = {
    round: 1,
    locale
  };
  const localizedUnits = bcp47TagToDigitalUnits[locale];

  if (localizedUnits) {
    // map default units to localized units, ex. { B: Б, KB: КБ, ... }
    settings.symbols = defaultDigitalUnits.reduce((symbols, unit, index) => {
      symbols[unit] = localizedUnits[index];
      return symbols;
    }, {});
  }

  return filesize__WEBPACK_IMPORTED_MODULE_0___default()(size, settings);
};

/* harmony default export */ __webpack_exports__["default"] = (getFileSize);

/***/ })

}]);
//# sourceMappingURL=details-sidebar.no.react.js.map