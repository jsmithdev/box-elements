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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~details-sidebar"],{

/***/ "./src/components/modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabbable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-trap */ "./src/components/focus-trap/index.js");
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-indicator */ "./src/components/loading-indicator/index.ts");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portal */ "./src/components/portal/index.tsx");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalDialog */ "./src/components/modal/ModalDialog.js");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal.scss */ "./src/components/modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_8__);
const _excluded = ["className", "isLoading", "isOpen", "onRequestClose", "shouldNotUsePortal", "style"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onKeyDown", event => {
      const {
        isOpen,
        onRequestClose
      } = this.props;

      if (isOpen && onRequestClose && event.key === 'Escape') {
        event.stopPropagation();
        onRequestClose(event);
      }
    });

    _defineProperty(this, "onBackdropClick", event => {
      const {
        onRequestClose,
        onBackdropClick
      } = this.props;

      if (onBackdropClick) {
        onBackdropClick(event);
      } else if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(this, "onModalOpen", () => {
      setTimeout(() => {
        const {
          focusElementSelector
        } = this.props;
        const focusElementSelectorTrimmed = focusElementSelector && focusElementSelector.trim();

        if (focusElementSelectorTrimmed) {
          this.focusElement(focusElementSelectorTrimmed);
        } else {
          this.focusFirstUsefulElement();
        }
      }, 0);
    });

    _defineProperty(this, "focusFirstUsefulElement", () => {
      if (!this.dialog) {
        return;
      }

      const tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_2___default()(this.dialog);

      if (tabbableEls.length > 1) {
        tabbableEls[1].focus();
      } else if (tabbableEls.length > 0) {
        tabbableEls[0].focus();
      }
    });

    _defineProperty(this, "focusElement", elementSelector => {
      if (!this.dialog) {
        return;
      }

      const el = this.dialog.querySelector(elementSelector);

      if (el) {
        el.focus();
      } else {
        throw new Error(`Could not find element matching selector ${elementSelector} to focus on.`);
      }
    });
  }

  componentDidMount() {
    const {
      isOpen
    } = this.props;

    if (isOpen) {
      this.onModalOpen();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      isLoading,
      isOpen
    } = this.props; // Set focus if modal is transitioning from closed -> open and/or loading -> not loading

    if ((!prevProps.isOpen || prevProps.isLoading) && isOpen && !isLoading) {
      this.onModalOpen();
    }
  }
  /**
   * Call props.onRequestClose when escape is pressed
   * @param {SyntheticKeyboardEvent} event
   */


  render() {
    const _this$props = this.props,
          {
      className,
      isLoading,
      isOpen,
      onRequestClose,
      shouldNotUsePortal,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    if (!isOpen) {
      return null;
    }

    const bodyOverrideStyle = `
            body {
                overflow:hidden;
            }
        `; // used `omit` here to prevent certain key/value pairs from going into the spread on `ModalDialog`

    const modalProps = lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(rest, ['onBackdropClick', 'focusElementSelector']);
    const WrapperComponent = shouldNotUsePortal ? 'div' : _portal__WEBPACK_IMPORTED_MODULE_6__["default"]; // Render a style tag to prevent body from scrolling as long as the Modal is open

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperComponent, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal', className),
      onKeyDown: this.onKeyDown,
      tabIndex: "-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-backdrop",
      onClick: this.onBackdropClick,
      style: style.backdrop
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_focus_trap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "modal-dialog-container"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_loading_indicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "large"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ModalDialog__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      modalRef: modalEl => {
        // This callback gets passed through as a regular prop since
        // ModalDialog is wrapped in a HOC
        this.dialog = modalEl;
      },
      onRequestClose: onRequestClose,
      style: style.dialog
    }, modalProps))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
      type: "text/css"
    }, bodyOverrideStyle));
  }

}

_defineProperty(Modal, "defaultProps", {
  style: {
    backdrop: {},
    dialog: {}
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/modal/Modal.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/Modal.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modal/ModalActions.js":
/*!**********************************************!*\
  !*** ./src/components/modal/ModalActions.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ModalActions = _ref => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-actions', className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalActions);

/***/ }),

/***/ "./src/components/modal/ModalDialog.js":
/*!*********************************************!*\
  !*** ./src/components/modal/ModalDialog.js ***!
  \*********************************************/
/*! exports provided: ModalDialogBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogBase", function() { return ModalDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _icon_fill_X16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icon/fill/X16 */ "./src/icon/fill/X16.tsx");
const _excluded = ["className", "modalRef", "title", "type"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ALERT_TYPE = 'alert';
const DIALOG_TYPE = 'dialog';
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  closeModalText: {
    "id": "boxui.modalDialog.closeModalText",
    "defaultMessage": "Close Modal"
  }
});

class ModalDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onCloseButtonClick", event => {
      const {
        onRequestClose
      } = this.props;

      if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(this, "modalID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('modal'));
  }

  /**
   * Renders a button if onRequestClose is passed in
   * @return {ReactElement|null} - Returns the button, or null if the button shouldn't be rendered
   */
  renderCloseButton() {
    const {
      closeButtonProps,
      onRequestClose,
      intl
    } = this.props;
    const {
      formatMessage
    } = intl;

    if (!onRequestClose) {
      return null;
    }

    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/button-has-type
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({}, closeButtonProps, {
        "aria-label": formatMessage(messages.closeModalText),
        className: "modal-close-button",
        onClick: this.onCloseButtonClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_X16__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#909090",
        height: 18,
        width: 18
      }))
    );
  }

  renderContent() {
    const {
      children,
      type
    } = this.props;

    if (type !== ALERT_TYPE) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "modal-content"
      }, children);
    }

    const elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);

    if (elements.length !== 2) {
      throw new Error('Alert modal must have exactly two children: A message and <ModalActions>');
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      id: `${this.modalID}-desc`
    }, elements[0]), elements[1]);
  }

  render() {
    const _this$props = this.props,
          {
      className,
      modalRef,
      title,
      type // Useful for resin tagging, and other misc tags such as a11y

    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const isAlertType = type === ALERT_TYPE;
    const divProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['children', 'closeButtonProps', 'onRequestClose', 'intl']);
    divProps.role = isAlertType ? 'alertdialog' : 'dialog';
    divProps['aria-labelledby'] = `${this.modalID}-label`;

    if (isAlertType) {
      divProps['aria-describedby'] = `${this.modalID}-desc`;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
      ref: modalRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-dialog', className)
    }, divProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-header-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
      className: "modal-title",
      id: `${this.modalID}-label`
    }, title)), this.renderCloseButton()), this.renderContent());
  }

}

_defineProperty(ModalDialog, "defaultProps", {
  type: DIALOG_TYPE,
  closeButtonProps: {}
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(ModalDialog));

/***/ }),

/***/ "./src/components/portal/Portal.tsx":
/*!******************************************!*\
  !*** ./src/components/portal/Portal.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Portal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.container = this.props.container;
    this.layer = document.createElement('div');
    this.layer.setAttribute('data-portal', '');

    if (this.container && this.layer) {
      this.container.appendChild(this.layer);
    }
  }

  componentWillUnmount() {
    if (this.container && this.layer) {
      this.container.removeChild(this.layer);
    }

    this.layer = null;
  }

  render() {
    const _this$props = this.props,
          elementProps = _extends({}, _this$props);

    if (!this.layer) {
      return null;
    }

    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", elementProps), this.layer);
  }

}

_defineProperty(Portal, "defaultProps", {
  container: document.body
});

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./src/components/portal/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/portal/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./src/components/portal/Portal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Portal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/withErrorHandling.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/withErrorHandling.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/error-mask/ErrorMask */ "./src/components/error-mask/ErrorMask.tsx");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
const _excluded = ["maskError", "inlineError", "errorCode"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file withErrorHandling higher order component
 * @author Box
 */






const withErrorHandling = WrappedComponent => _ref => {
  let {
    maskError,
    inlineError,
    errorCode
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (maskError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSection__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorHeader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], maskError.errorHeader),
      errorSubHeader: maskError.errorSubHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], maskError.errorSubHeader) : undefined
    }));
  }

  if (inlineError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], inlineError.title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], inlineError.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, rest));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, rest);
};

/* harmony default export */ __webpack_exports__["default"] = (withErrorHandling);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~details-sidebar.no.react.js.map