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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~versions-sidebar"],{

/***/ "./src/components/close-button/index.ts":
/*!**********************************************!*\
  !*** ./src/components/close-button/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseButton */ "./src/components/close-button/CloseButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CloseButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/dropdown-menu/index.js":
/*!***********************************************!*\
  !*** ./src/components/dropdown-menu/index.js ***!
  \***********************************************/
/*! exports provided: default, MenuToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownMenu */ "./src/components/dropdown-menu/DropdownMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggle", function() { return _MenuToggle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/inline-error/index.js":
/*!**********************************************!*\
  !*** ./src/components/inline-error/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InlineError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/menu/MenuHeader.scss":
/*!*********************************************!*\
  !*** ./src/components/menu/MenuHeader.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/MenuHeader.tsx":
/*!********************************************!*\
  !*** ./src/components/menu/MenuHeader.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _close_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close-button */ "./src/components/close-button/index.ts");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuContext */ "./src/components/menu/MenuContext.tsx");
/* harmony import */ var _MenuHeader_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuHeader.scss */ "./src/components/menu/MenuHeader.scss");
/* harmony import */ var _MenuHeader_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MenuHeader_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["className", "children", "subtitle", "title"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const MenuHeader = _ref => {
  let {
    className,
    children,
    subtitle,
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    closeMenu
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_MenuContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-MenuHeader', className),
    "data-testid": "bdl-MenuHeader",
    role: "presentation"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-MenuHeader-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-MenuHeader-title-container"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-MenuHeader-title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-MenuHeader-subtitle"
  }, subtitle)), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_close_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bdl-MenuHeader-close-button",
    onClick: closeMenu
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuHeader);

/***/ }),

/***/ "./src/components/menu/MenuLinkItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/menu/MenuLinkItem.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "isSelected", "isSelectItem"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MenuLinkItem = _ref => {
  let {
    children,
    isSelected = false,
    isSelectItem = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const linkEl = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
  const listItemProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['role', 'tabIndex']);
  listItemProps.role = 'none';
  const linkProps = {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('menu-item', linkEl ? linkEl.props.className : '', {
      'is-select-item': isSelectItem,
      'is-selected': isSelected
    }),
    role: isSelectItem ? 'menuitemradio' : 'menuitem',
    tabIndex: -1
  };

  if (isSelectItem) {
    linkProps['aria-checked'] = isSelected;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", listItemProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](linkEl, linkProps));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuLinkItem);

/***/ }),

/***/ "./src/components/menu/MenuSectionHeader.tsx":
/*!***************************************************!*\
  !*** ./src/components/menu/MenuSectionHeader.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.tsx");
const _excluded = ["className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MenuSectionHeader = _ref => {
  let {
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: `menu-section-header ${className}`,
    isDisabled: true
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuSectionHeader);

/***/ }),

/***/ "./src/components/menu/MenuSeparator.tsx":
/*!***********************************************!*\
  !*** ./src/components/menu/MenuSeparator.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const MenuSeparator = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-MenuSeparator', className),
    role: "separator"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MenuSeparator);

/***/ }),

/***/ "./src/components/menu/SelectMenuItem.tsx":
/*!************************************************!*\
  !*** ./src/components/menu/SelectMenuItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SelectMenuItem = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
  isSelectItem: true
}, props));

/* harmony default export */ __webpack_exports__["default"] = (SelectMenuItem);

/***/ }),

/***/ "./src/components/menu/SelectMenuLinkItem.tsx":
/*!****************************************************!*\
  !*** ./src/components/menu/SelectMenuLinkItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuLinkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLinkItem */ "./src/components/menu/MenuLinkItem.tsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SelectMenuLinkItem = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuLinkItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
  isSelectItem: true
}, props));

/* harmony default export */ __webpack_exports__["default"] = (SelectMenuLinkItem);

/***/ }),

/***/ "./src/components/menu/SubmenuItem.scss":
/*!**********************************************!*\
  !*** ./src/components/menu/SubmenuItem.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/SubmenuItem.tsx":
/*!*********************************************!*\
  !*** ./src/components/menu/SubmenuItem.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmenuItem.scss */ "./src/components/menu/SubmenuItem.scss");
/* harmony import */ var _SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon_fill_Arrow16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/fill/Arrow16 */ "./src/icon/fill/Arrow16.tsx");
const _excluded = ["children", "className", "isDisabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SUBMENU_LEFT_ALIGNED_CLASS = 'is-left-aligned';
const SUBMENU_BOTTOM_ALIGNED_CLASS = 'is-bottom-aligned';

/**
 * A menu-item component which triggers open a submenu
 *
 * @NOTE: Nested submenus are NOT currently supported, switching
 * focus with arrow keys in the subsubmenu is not working properly.
 */
class SubmenuItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isSubmenuOpen: false,
      submenuFocusIndex: null
    });

    _defineProperty(this, "getMenuAlignmentClasses", () => {
      if (!this.submenuTriggerEl || !this.submenuEl) {
        return {};
      }

      const {
        rightBoundaryElement,
        bottomBoundaryElement
      } = this.props;
      const submenuElBounding = this.submenuEl.getBoundingClientRect();
      const submenuTriggerElBounding = this.submenuTriggerEl.getBoundingClientRect();
      const rightBoundaryElementBounding = rightBoundaryElement ? rightBoundaryElement.getBoundingClientRect() : {
        right: window.innerWidth
      };
      const bottomBoundaryElementBounding = bottomBoundaryElement ? bottomBoundaryElement.getBoundingClientRect() : {
        bottom: window.innerHeight
      };
      const isLeftAligned = submenuTriggerElBounding.right + submenuElBounding.width > rightBoundaryElementBounding.right;
      const isBottomAligned = submenuTriggerElBounding.top + submenuElBounding.height > bottomBoundaryElementBounding.bottom;
      return {
        [SUBMENU_LEFT_ALIGNED_CLASS]: isLeftAligned,
        [SUBMENU_BOTTOM_ALIGNED_CLASS]: isBottomAligned
      };
    });

    _defineProperty(this, "handleMenuItemClick", event => {
      const {
        isDisabled,
        onClick
      } = this.props; // If aria-disabled is passed as a prop, we should ignore clicks on this menu item

      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (onClick) {
        onClick(event);
      } // If event target is triggering submenu element, do not propagate to close menu


      if (this.submenuEl && !this.submenuEl.contains(event.target)) {
        event.stopPropagation();
        event.preventDefault();
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      switch (event.key) {
        case ' ':
        case 'Enter':
        case 'ArrowRight':
          event.stopPropagation();
          event.preventDefault();
          this.openSubmenuAndFocus();
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "closeSubmenu", lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(() => {
      this.setState({
        isSubmenuOpen: false
      });
    }, 50));

    _defineProperty(this, "closeSubmenuAndFocusTrigger", isKeyboardEvent => {
      this.closeSubmenu();

      if (this.submenuTriggerEl && isKeyboardEvent) {
        this.submenuTriggerEl.focus();
      }
    });

    _defineProperty(this, "openSubmenu", () => {
      this.closeSubmenu.cancel();
      const {
        onOpen
      } = this.props;

      if (onOpen) {
        onOpen();
      }

      this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: null
      });
    });

    _defineProperty(this, "openSubmenuAndFocus", () => {
      const {
        onOpen
      } = this.props;

      if (onOpen) {
        onOpen();
      }

      this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: 0
      });
    });
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className,
      isDisabled
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      isSubmenuOpen,
      submenuFocusIndex
    } = this.state;
    const elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
    const submenuTriggerContent = elements[0];
    const submenu = elements[1];

    if (elements.length !== 2 || !submenuTriggerContent || !submenu) {
      throw new Error('SubmenuItem must have exactly two children, a trigger component and a <Menu>');
    }

    const chevron = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Arrow16__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "menu-item-arrow",
      width: 12,
      height: 12
    });

    const menuItemProps = _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['bottomBoundaryElement', 'onClick', 'onOpen', 'rightBoundaryElement', 'role', 'tabIndex'])), {}, {
      'aria-disabled': isDisabled ? 'true' : undefined,
      'aria-expanded': isSubmenuOpen ? 'true' : 'false',
      'aria-haspopup': 'true',
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('menu-item', 'submenu-target', className),
      onClick: this.handleMenuItemClick,
      onMouseLeave: this.closeSubmenu,
      onMouseEnter: this.openSubmenu,
      onKeyDown: this.handleKeyDown,
      ref: ref => {
        this.submenuTriggerEl = ref;
      },
      role: 'menuitem',
      tabIndex: -1
    });

    const submenuProps = {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(submenu.props.className, 'submenu', this.getMenuAlignmentClasses()),
      initialFocusIndex: submenuFocusIndex,
      // Hide the menu instead of unmounting it. Otherwise onMouseLeave won't work.
      isHidden: !isSubmenuOpen,
      isSubmenu: true,
      onClose: this.closeSubmenuAndFocusTrigger,
      setRef: ref => {
        this.submenuEl = ref;
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", menuItemProps, submenuTriggerContent, chevron, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](submenu, submenuProps));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubmenuItem);

/***/ }),

/***/ "./src/components/menu/index.ts":
/*!**************************************!*\
  !*** ./src/components/menu/index.ts ***!
  \**************************************/
/*! exports provided: Menu, MenuContext, MenuHeader, MenuItem, MenuLinkItem, MenuSectionHeader, MenuSeparator, SelectMenuItem, SelectMenuLinkItem, SubmenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components/menu/Menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContext */ "./src/components/menu/MenuContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return _MenuContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MenuHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuHeader */ "./src/components/menu/MenuHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuHeader", function() { return _MenuHeader__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _MenuLinkItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuLinkItem */ "./src/components/menu/MenuLinkItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinkItem", function() { return _MenuLinkItem__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _MenuSectionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuSectionHeader */ "./src/components/menu/MenuSectionHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuSectionHeader", function() { return _MenuSectionHeader__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _MenuSeparator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuSeparator */ "./src/components/menu/MenuSeparator.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuSeparator", function() { return _MenuSeparator__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SelectMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectMenuItem */ "./src/components/menu/SelectMenuItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMenuItem", function() { return _SelectMenuItem__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _SelectMenuLinkItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectMenuLinkItem */ "./src/components/menu/SelectMenuLinkItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMenuLinkItem", function() { return _SelectMenuLinkItem__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _SubmenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubmenuItem */ "./src/components/menu/SubmenuItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmenuItem", function() { return _SubmenuItem__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./src/components/primary-button/index.ts":
/*!************************************************!*\
  !*** ./src/components/primary-button/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryButton */ "./src/components/primary-button/PrimaryButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/time/ReadableTime.js":
/*!*********************************************!*\
  !*** ./src/components/time/ReadableTime.js ***!
  \*********************************************/
/*! exports provided: ReadableTimeComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableTimeComponent", function() { return ReadableTime; });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/components/time/messages.js");




// exclude languages that do not have a grammar for uppercase (e.g. russian)
const nonUppercaseLocales = ['ru'];

const ReadableTime = _ref => {
  let {
    intl,
    timestamp,
    relativeThreshold = _constants__WEBPACK_IMPORTED_MODULE_1__["ONE_HOUR_MS"],
    allowFutureTimestamps = true,
    alwaysShowTime = false,
    showWeekday = false,
    uppercase = false
  } = _ref;
  const shouldUppercase = uppercase && !nonUppercaseLocales.includes(intl.locale);
  const relativeIfNewerThanTs = Date.now() - relativeThreshold;
  const shouldShowYear = !Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isCurrentYear"])(timestamp);

  if (!allowFutureTimestamps && timestamp > Date.now()) {
    // TODO: what is the reasoning behind this rule?
    timestamp = relativeIfNewerThanTs; // Default to 'Today' for timestamps that would show a future date
  } // e.g. Oct 5, 2018


  let dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTime;
  let date = null;
  let weekday = null;
  let output;

  if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isToday"])(timestamp)) {
    // e.g. Today at 12:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeToday;
  } else if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isYesterday"])(timestamp)) {
    // e.g. Yesterday at 11:30 AM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeYesterday;
  } else if (showWeekday) {
    // e.g. Monday, Oct 5, 2018
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeWeekdayLong;
    weekday = intl.formatDate(timestamp, {
      weekday: 'long'
    });
  } else if (shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5, 2018 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeDate;
  } else if (!shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeDateShort;
    date = intl.formatDate(timestamp, {
      month: 'short',
      day: 'numeric'
    });
  } else if (!shouldShowYear && !alwaysShowTime) {
    // e.g. Oct 5
    output = intl.formatDate(timestamp, {
      month: 'short',
      day: 'numeric'
    });
    return shouldUppercase ? output.toLocaleUpperCase(intl.locale) : output;
  }

  const values = {
    time: timestamp,
    date,
    weekday
  };
  output = intl.formatMessage(dateMessage, values); // if the time stamp is within +/- the relative threshold for the current time,
  // print the default time format

  const timeDiff = timestamp - Date.now();

  if (Math.abs(timeDiff) <= relativeThreshold) {
    if (intl.formatRelativeTime) {
      // react-intl v3
      output = intl.formatRelativeTime(timeDiff);
    } else {
      // react-intl v2
      output = intl.formatRelative(timestamp);
    }
  }

  return shouldUppercase ? output.toLocaleUpperCase(intl.locale) : output;
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["injectIntl"])(ReadableTime));

/***/ }),

/***/ "./src/components/time/messages.js":
/*!*****************************************!*\
  !*** ./src/components/time/messages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  eventTime: {
    "id": "boxui.readableTime.eventTime",
    "defaultMessage": "{time, date, medium}"
  },
  eventTimeToday: {
    "id": "boxui.readableTime.eventTimeToday",
    "defaultMessage": "Today at {time, time, short}"
  },
  eventTimeYesterday: {
    "id": "boxui.readableTime.eventTimeYesterday",
    "defaultMessage": "Yesterday at {time, time, short}"
  },
  eventTimeDate: {
    "id": "boxui.readableTime.eventTimeDate",
    "defaultMessage": "{time, date, medium} at {time, time, short}"
  },
  eventTimeDateShort: {
    "id": "boxui.readableTime.eventTimeDateShort",
    "defaultMessage": "{date} at {time, time, short}"
  },
  eventTimeWeekdayLong: {
    "id": "boxui.readableTime.eventTimeWeekdayLong",
    "defaultMessage": "{weekday}, {time, date, medium}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/common/selectors/version.js":
/*!**************************************************!*\
  !*** ./src/elements/common/selectors/version.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
const _excluded = ["name", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const getVersionAction = _ref => {
  let {
    restored_at,
    trashed_at,
    version_promoted
  } = _ref;
  let action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_UPLOAD_ACTION"];

  if (trashed_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_DELETE_ACTION"];
  }

  if (restored_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_RESTORE_ACTION"];
  }

  if (version_promoted) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_PROMOTE_ACTION"];
  }

  return action;
};

const getVersionUser = _ref2 => {
  let {
    modified_by,
    restored_by,
    trashed_by,
    uploader_display_name
  } = _ref2;

  const _ref3 = restored_by || trashed_by || modified_by || _constants__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER_USER"],
        {
    name,
    id
  } = _ref3,
        rest = _objectWithoutProperties(_ref3, _excluded);

  const isAnonymous = id === _constants__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER_USER"].id;
  return _objectSpread(_objectSpread({}, rest), {}, {
    id,
    name: isAnonymous && uploader_display_name ? uploader_display_name : name
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getVersionAction,
  getVersionUser
});

/***/ }),

/***/ "./src/icon/fill/Arrow16.tsx":
/*!***********************************!*\
  !*** ./src/icon/fill/Arrow16.tsx ***!
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

const Arrow16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M7.646 7.646L4.354 4.354a.5.5 0 010-.708l1.292-1.292a.5.5 0 01.708 0l5.292 5.292a.5.5 0 010 .708l-5.292 5.292a.5.5 0 01-.708 0l-1.292-1.292a.5.5 0 010-.708l3.292-3.292a.5.5 0 000-.708z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Arrow16);

/***/ }),

/***/ "./src/icons/general/IconTrash.tsx":
/*!*****************************************!*\
  !*** ./src/icons/general/IconTrash.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconTrash = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-trash ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-1.2 1H3.2l1.6 9.9s.1.1.2.1h6c.06 0 .12-.036.158-.065l.042-.035L12.8 3zm-2.3 1c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrash);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~versions-sidebar.no.react.js.map