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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-open-with~content-sidebar"],{

/***/ "./src/common/tether-positions.tsx":
/*!*****************************************!*\
  !*** ./src/common/tether-positions.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TetherPosition;

(function (TetherPosition) {
  TetherPosition["TOP_LEFT"] = "top left";
  TetherPosition["TOP_CENTER"] = "top center";
  TetherPosition["TOP_RIGHT"] = "top right";
  TetherPosition["MIDDLE_LEFT"] = "middle left";
  TetherPosition["MIDDLE_CENTER"] = "middle center";
  TetherPosition["MIDDLE_RIGHT"] = "middle right";
  TetherPosition["BOTTOM_LEFT"] = "bottom left";
  TetherPosition["BOTTOM_CENTER"] = "bottom center";
  TetherPosition["BOTTOM_RIGHT"] = "bottom right";
})(TetherPosition || (TetherPosition = {}));

/* harmony default export */ __webpack_exports__["default"] = (TetherPosition);

/***/ }),

/***/ "./src/components/plain-button/index.ts":
/*!**********************************************!*\
  !*** ./src/components/plain-button/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PlainButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/tooltip/Tooltip.scss":
/*!*********************************************!*\
  !*** ./src/components/tooltip/Tooltip.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tooltip/Tooltip.tsx":
/*!********************************************!*\
  !*** ./src/components/tooltip/Tooltip.tsx ***!
  \********************************************/
/*! exports provided: TooltipTheme, TooltipPosition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipTheme", function() { return TooltipTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPosition", function() { return TooltipPosition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/tether-positions */ "./src/common/tether-positions.tsx");
/* harmony import */ var _icon_fill_X16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon/fill/X16 */ "./src/icon/fill/X16.tsx");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tooltip.scss */ "./src/components/tooltip/Tooltip.scss");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










let TooltipTheme;

(function (TooltipTheme) {
  TooltipTheme["CALLOUT"] = "callout";
  TooltipTheme["DEFAULT"] = "default";
  TooltipTheme["ERROR"] = "error";
})(TooltipTheme || (TooltipTheme = {}));

let TooltipPosition;

(function (TooltipPosition) {
  TooltipPosition["BOTTOM_CENTER"] = "bottom-center";
  TooltipPosition["BOTTOM_LEFT"] = "bottom-left";
  TooltipPosition["BOTTOM_RIGHT"] = "bottom-right";
  TooltipPosition["MIDDLE_LEFT"] = "middle-left";
  TooltipPosition["MIDDLE_RIGHT"] = "middle-right";
  TooltipPosition["TOP_CENTER"] = "top-center";
  TooltipPosition["TOP_LEFT"] = "top-left";
  TooltipPosition["TOP_RIGHT"] = "top-right";
})(TooltipPosition || (TooltipPosition = {}));

const positions = {
  [TooltipPosition.BOTTOM_CENTER]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_CENTER,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_CENTER
  },
  [TooltipPosition.BOTTOM_LEFT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_RIGHT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_RIGHT
  },
  [TooltipPosition.BOTTOM_RIGHT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_LEFT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_LEFT
  },
  [TooltipPosition.MIDDLE_LEFT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].MIDDLE_RIGHT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].MIDDLE_LEFT
  },
  [TooltipPosition.MIDDLE_RIGHT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].MIDDLE_LEFT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].MIDDLE_RIGHT
  },
  [TooltipPosition.TOP_CENTER]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_CENTER,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_CENTER
  },
  [TooltipPosition.TOP_LEFT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_RIGHT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_RIGHT
  },
  [TooltipPosition.TOP_RIGHT]: {
    attachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].BOTTOM_LEFT,
    targetAttachment: _common_tether_positions__WEBPACK_IMPORTED_MODULE_5__["default"].TOP_LEFT
  }
};

class Tooltip extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "tooltipID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('tooltip'));

    _defineProperty(this, "tetherRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "position", () => {
      if (this.tetherRef.current && this.isShown()) {
        this.tetherRef.current.position();
      }
    });

    _defineProperty(this, "closeTooltip", () => {
      const {
        onDismiss
      } = this.props;
      this.setState({
        wasClosedByUser: true
      });

      if (onDismiss) {
        onDismiss();
      }
    });

    _defineProperty(this, "fireChildEvent", (type, event) => {
      const {
        children
      } = this.props;
      const handler = children.props[type];

      if (handler) {
        handler(event);
      }
    });

    _defineProperty(this, "handleTooltipEvent", event => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "handleMouseEnter", event => {
      this.setState({
        isShown: true
      });
      this.fireChildEvent('onMouseEnter', event);
    });

    _defineProperty(this, "handleMouseLeave", event => {
      this.setState({
        isShown: false
      });
      this.fireChildEvent('onMouseLeave', event);
    });

    _defineProperty(this, "handleFocus", event => {
      this.setState({
        isShown: true
      });
      this.fireChildEvent('onFocus', event);
    });

    _defineProperty(this, "handleBlur", event => {
      this.setState({
        isShown: false
      });
      this.fireChildEvent('onBlur', event);
    });

    _defineProperty(this, "isControlled", () => {
      const {
        isShown: isShownProp
      } = this.props;
      return typeof isShownProp !== 'undefined';
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        this.setState({
          isShown: false
        });
      }

      this.fireChildEvent('onKeyDown', event);
    });

    _defineProperty(this, "isShown", () => {
      const {
        isShown: isShownProp
      } = this.props;
      const isControlled = this.isControlled();
      const isShown = isControlled ? isShownProp : this.state.isShown;
      const showTooltip = isShown && !this.state.wasClosedByUser && this.state.hasRendered;
      return showTooltip;
    });

    this.state = {
      isShown: !!props.isShown,
      hasRendered: false,
      wasClosedByUser: false
    };
  }

  componentDidMount() {
    this.setState({
      hasRendered: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const isControlled = this.isControlled(); // Reset wasClosedByUser state when isShown transitions from false to true

    if (isControlled) {
      if (!prevProps.isShown && this.props.isShown) {
        this.setState({
          wasClosedByUser: false
        });
      }
    } else {
      if (!prevState.isShown && this.state.isShown) {
        // capture event so that tooltip closes before any other floating components that can be closed by
        // "Escape" key(e.g. Modal, Menu, etc.)
        document.addEventListener('keydown', this.handleKeyDown, true);
      }

      if (prevState.isShown && !this.state.isShown) {
        document.removeEventListener('keydown', this.handleKeyDown, true);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, true);
  }

  render() {
    const {
      ariaHidden,
      bodyElement,
      children,
      className,
      constrainToScrollParent,
      constrainToWindow,
      isDisabled,
      isTabbable = true,
      offset,
      position = TooltipPosition.TOP_CENTER,
      showCloseButton,
      stopBubble,
      tetherElementClassName,
      text,
      theme
    } = this.props;
    const childAriaLabel = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(children, 'props.aria-label');
    const isLabelMatchingTooltipText = !!childAriaLabel && childAriaLabel === text; // If the tooltip is disabled just render the children

    if (isDisabled) {
      return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
    }

    const isControlled = this.isControlled();
    const showTooltip = this.isShown();
    const withCloseButton = showCloseButton && isControlled;
    const tetherPosition = typeof position === 'string' ? positions[position] : position;
    const constraints = [];
    const componentProps = {};

    if (constrainToScrollParent) {
      constraints.push({
        to: 'scrollParent',
        attachment: 'together'
      });
    }

    if (constrainToWindow) {
      constraints.push({
        to: 'window',
        attachment: 'together'
      });
    }

    if (showTooltip) {
      if (!isLabelMatchingTooltipText || childAriaLabel === undefined) {
        componentProps['aria-describedby'] = this.tooltipID;
      }

      if (theme === TooltipTheme.ERROR) {
        componentProps['aria-errormessage'] = this.tooltipID;
      }
    }

    if (!isControlled) {
      componentProps.onBlur = this.handleBlur;
      componentProps.onFocus = this.handleFocus;
      componentProps.onMouseEnter = this.handleMouseEnter;
      componentProps.onMouseLeave = this.handleMouseLeave;

      if (isTabbable) {
        componentProps.tabIndex = '0';
      }
    }

    const bodyEl = bodyElement instanceof HTMLElement ? bodyElement : document.body;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('tooltip', 'bdl-Tooltip', className, {
      'is-callout': theme === TooltipTheme.CALLOUT,
      'is-error': theme === TooltipTheme.ERROR,
      'with-close-button': withCloseButton
    });
    const tetherProps = {
      attachment: tetherPosition.attachment,
      bodyElement: bodyEl,
      classPrefix: 'tooltip',
      constraints,
      enabled: showTooltip,
      targetAttachment: tetherPosition.targetAttachment
    };

    if (tetherElementClassName) {
      tetherProps.className = tetherElementClassName;
    }

    if (offset) {
      tetherProps.offset = offset;
    }

    const tooltipInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, text, withCloseButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "tooltip-close-button",
      onClick: this.closeTooltip
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_X16__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bdl-Tooltip-iconClose",
      width: 14,
      height: 14
    })));
    const tooltip = stopBubble ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes,
      id: this.tooltipID,
      onClick: this.handleTooltipEvent,
      onContextMenu: this.handleTooltipEvent,
      onKeyPress: this.handleTooltipEvent,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      role: "presentation"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      role: theme === TooltipTheme.ERROR ? undefined : 'tooltip',
      "aria-live": "polite",
      "aria-hidden": ariaHidden || isLabelMatchingTooltipText,
      "data-testid": "bdl-Tooltip"
    }, tooltipInner)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      "aria-live": "polite",
      "aria-hidden": ariaHidden || isLabelMatchingTooltipText,
      className: classes,
      "data-testid": "bdl-Tooltip",
      id: this.tooltipID,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      role: theme === TooltipTheme.ERROR ? undefined : 'tooltip'
    }, tooltipInner);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
      ref: this.tetherRef
    }, tetherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children), componentProps), showTooltip && tooltip);
  }

}

_defineProperty(Tooltip, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isDisabled: false,
  position: TooltipPosition.TOP_CENTER,
  theme: TooltipTheme.DEFAULT
});

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./src/elements/common/Tooltip.js":
/*!****************************************!*\
  !*** ./src/elements/common/Tooltip.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.tsx");
const _excluded = ["children", "isDisabled", "text"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Wrapper to conditionally add a tooltip
 * @author Box
 */



const Tooltip = _ref => {
  let {
    children,
    isDisabled,
    text
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (isDisabled || !text) {
    return children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    text: text
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./src/icons/general/IconCaretDown.tsx":
/*!*********************************************!*\
  !*** ./src/icons/general/IconCaretDown.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconCaretDown = _ref => {
  let {
    className = '',
    color = '#000',
    height = 6,
    title,
    width = 10
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-caret-down ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 10 6",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M0 .5l5 5 5-5H0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCaretDown);

/***/ })

}]);
//# sourceMappingURL=content-open-with~content-sidebar.no.react.js.map