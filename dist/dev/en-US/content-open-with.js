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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-open-with"],{

/***/ "./src/elements/content-open-with/BoxToolsInstallMessage.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-open-with/BoxToolsInstallMessage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _BoxToolsInstallMessage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxToolsInstallMessage.scss */ "./src/elements/content-open-with/BoxToolsInstallMessage.scss");
/* harmony import */ var _BoxToolsInstallMessage_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BoxToolsInstallMessage_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Custom message to install Box Tools inside of Open With.
 * @author Box
 */




const DEFAULT_BOX_TOOLS_INSTALLATION_URL = 'https://cloud.box.com/v/installboxtools';
const DEFAULT_BOX_TOOLS_NAME = 'Box Tools';

const BoxToolsInstallMessage = _ref => {
  let {
    boxToolsName = DEFAULT_BOX_TOOLS_NAME,
    boxToolsInstallUrl = DEFAULT_BOX_TOOLS_INSTALLATION_URL
  } = _ref;

  const onLinkClick = () => {
    // Manually open the URL since disabled menu items are blocked from clickable actions by default
    window.open(boxToolsInstallUrl);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].boxToolsInstallMessage, {
    values: {
      boxTools:
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "#",
        onClick: onLinkClick,
        rel: "noopener noreferrer"
      }, boxToolsName)
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxToolsInstallMessage);

/***/ }),

/***/ "./src/elements/content-open-with/BoxToolsInstallMessage.scss":
/*!********************************************************************!*\
  !*** ./src/elements/content-open-with/BoxToolsInstallMessage.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-open-with/ContentOpenWith.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-open-with/ContentOpenWith.js ***!
  \***********************************************************/
/*! exports provided: ContentOpenWithComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOpenWithComponent", function() { return ContentOpenWith; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Internationalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Internationalize */ "./src/elements/common/Internationalize.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _IntegrationPortalContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IntegrationPortalContainer */ "./src/elements/content-open-with/IntegrationPortalContainer.js");
/* harmony import */ var _OpenWithDropdownMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OpenWithDropdownMenu */ "./src/elements/content-open-with/OpenWithDropdownMenu.js");
/* harmony import */ var _BoxToolsInstallMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BoxToolsInstallMessage */ "./src/elements/content-open-with/BoxToolsInstallMessage.js");
/* harmony import */ var _OpenWithButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenWithButton */ "./src/elements/content-open-with/OpenWithButton.js");
/* harmony import */ var _OpenWithFallbackButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OpenWithFallbackButton */ "./src/elements/content-open-with/OpenWithFallbackButton.js");
/* harmony import */ var _ExecuteForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ExecuteForm */ "./src/elements/content-open-with/ExecuteForm.js");
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/base.scss */ "./src/elements/common/base.scss");
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_common_base_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ContentOpenWith_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ContentOpenWith.scss */ "./src/elements/content-open-with/ContentOpenWith.scss");
/* harmony import */ var _ContentOpenWith_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ContentOpenWith_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Open With Component
 * @author Box
 */



















const UNSUPPORTED_INVOCATION_METHOD_TYPE = 'Integration invocation using this HTTP method type is not supported';
const BLACKLISTED_ERROR_MESSAGE_KEY = 'boxToolsBlacklistedError';
const BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY = 'boxToolsInstallErrorMessage';
const GENERIC_EXECUTE_MESSAGE_KEY = 'executeIntegrationOpenWithErrorHeader';
const AUTH_CODE = 'auth_code';

class ContentOpenWith extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @private
   * @return {ContentOpenWith}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "initialState", {
      isDropdownOpen: false,
      integrations: null,
      isLoading: true,
      fetchError: null,
      executePostData: null,
      shouldRenderErrorIntegrationPortal: false,
      shouldRenderLoadingIntegrationPortal: false
    });

    _defineProperty(this, "fetchOpenWithSuccessHandler", async integrations => {
      const {
        boxToolsName,
        boxToolsInstallUrl
      } = this.props;
      const boxEditIntegration = integrations.find(_ref => {
        let {
          appIntegrationId
        } = _ref;
        return this.isBoxEditIntegration(appIntegrationId);
      });

      if (boxEditIntegration && !boxEditIntegration.isDisabled) {
        try {
          const {
            extension
          } = await this.getIntegrationFileExtension();
          boxEditIntegration.extension = extension; // If Box Edit is present and enabled, we need to set its ability to locally open the given file
          // No-op if these checks are successful

          await this.isBoxEditAvailable();
          await this.canOpenExtensionWithBoxEdit(boxEditIntegration);
        } catch (error) {
          const errorMessageObject = _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"][error.message] || _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"][GENERIC_EXECUTE_MESSAGE_KEY];
          let formattedErrorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], errorMessageObject);

          if (error.message === BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY) {
            formattedErrorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxToolsInstallMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
              boxToolsInstallUrl: boxToolsInstallUrl,
              boxToolsName: boxToolsName
            });
          }

          boxEditIntegration.disabledReasons.push(formattedErrorMessage);
          boxEditIntegration.isDisabled = true;
        }
      }

      this.setState({
        integrations,
        isLoading: false
      });
    });

    _defineProperty(this, "getIntegrationFileExtension", () => {
      const {
        fileId
      } = this.props;
      return new Promise((resolve, reject) => {
        this.api.getFileAPI().getFileExtension(fileId, resolve, () => reject(new Error(GENERIC_EXECUTE_MESSAGE_KEY)));
      });
    });

    _defineProperty(this, "isBoxEditAvailable", () => {
      return this.api.getBoxEditAPI().checkBoxEditAvailability().catch(() => {
        throw new Error(BOX_TOOLS_INSTALL_ERROR_MESSAGE_KEY);
      });
    });

    _defineProperty(this, "canOpenExtensionWithBoxEdit", _ref2 => {
      let {
        extension = ''
      } = _ref2;
      return this.api.getBoxEditAPI().getAppForExtension(extension).catch(() => {
        throw new Error(BLACKLISTED_ERROR_MESSAGE_KEY);
      });
    });

    _defineProperty(this, "fetchErrorHandler", (error, code) => {
      this.props.onError(error, code, {
        error
      });
      this.setState({
        fetchError: error,
        isLoading: false
      });
    });

    _defineProperty(this, "onIntegrationClick", _ref3 => {
      let {
        appIntegrationId,
        displayName
      } = _ref3;
      const {
        fileId
      } = this.props;
      const isBoxEditIntegration = this.isBoxEditIntegration(appIntegrationId);
      this.api.getAppIntegrationsAPI(false).execute(appIntegrationId, fileId, this.executeIntegrationSuccessHandler.bind(this, appIntegrationId), isBoxEditIntegration ? this.executeBoxEditErrorHandler : this.executeIntegrationErrorHandler);

      if (isBoxEditIntegration) {
        // No window management is required when using Box Edit.
        return;
      } // These window features will open the new window directly on top of the current window at the same


      const windowFeatures = `left=${window.screenX},top=${window.screenY},height=${window.outerHeight},width=${window.innerWidth},toolbar=0`; // window.open() is immediately invoked to avoid popup-blockers
      // The name is included to be the target of a form if the integration is a POST integration.
      // A uniqueid is used to force the browser to open a new tab every time, while still allowing
      // a form to reference a given tab.

      this.integrationWindow = this.window.open('', `${lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()(appIntegrationId)}`, windowFeatures);
      this.integrationWindow.document.title = displayName;
      this.integrationWindow.onunload = this.cleanupIntegrationWindow;
      this.setState({
        shouldRenderLoadingIntegrationPortal: true,
        shouldRenderErrorIntegrationPortal: false
      });
    });

    _defineProperty(this, "cleanupIntegrationWindow", () => {
      this.setState({
        shouldRenderLoadingIntegrationPortal: false,
        shouldRenderErrorIntegrationPortal: false
      });
    });

    _defineProperty(this, "executeIntegrationSuccessHandler", (integrationId, executeData) => {
      if (this.isBoxEditIntegration(integrationId)) {
        this.executeBoxEditSuccessHandler(integrationId, executeData);
      } else {
        this.executeOnlineIntegrationSuccessHandler(executeData);
      }

      this.onExecute(integrationId);
    });

    _defineProperty(this, "executeOnlineIntegrationSuccessHandler", executeData => {
      const {
        method,
        url
      } = executeData;

      switch (method) {
        case _constants__WEBPACK_IMPORTED_MODULE_18__["HTTP_POST"]:
          this.setState({
            executePostData: executeData
          });
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_18__["HTTP_GET"]:
          if (!this.integrationWindow) {
            return;
          } // Prevents abuse of window.opener
          // see here for more details: https://mathiasbynens.github.io/rel-noopener/


          this.integrationWindow.location = url;
          this.integrationWindow.opener = null;
          break;

        default:
          this.executeIntegrationErrorHandler(Error(UNSUPPORTED_INVOCATION_METHOD_TYPE), _constants__WEBPACK_IMPORTED_MODULE_18__["ERROR_CODE_EXECUTE_INTEGRATION"]);
      }

      this.integrationWindow = null;
    });

    _defineProperty(this, "executeBoxEditSuccessHandler", (integrationId, _ref4) => {
      let {
        url
      } = _ref4;
      const {
        fileId,
        token,
        onError
      } = this.props;
      const queryParams = query_string__WEBPACK_IMPORTED_MODULE_5___default.a.parse(url);
      const authCode = queryParams[AUTH_CODE];
      const isFileScoped = this.isBoxEditSFCIntegration(integrationId);
      this.api.getBoxEditAPI().openFile(fileId, {
        data: {
          auth_code: authCode,
          token,
          token_scope: isFileScoped ? _constants__WEBPACK_IMPORTED_MODULE_18__["TYPE_FILE"] : _constants__WEBPACK_IMPORTED_MODULE_18__["TYPE_FOLDER"]
        }
      }).catch(error => {
        onError(error, _constants__WEBPACK_IMPORTED_MODULE_18__["ERROR_CODE_EXECUTE_INTEGRATION"], {
          error
        });
      });
    });

    _defineProperty(this, "onExecuteFormSubmit", () => {
      this.setState({
        executePostData: null
      });
    });

    _defineProperty(this, "executeIntegrationErrorHandler", (error, code) => {
      this.props.onError(error, code, {
        error
      }); // eslint-disable-next-line no-console

      console.error(error);
      this.setState({
        shouldRenderLoadingIntegrationPortal: false,
        shouldRenderErrorIntegrationPortal: true
      });
    });

    _defineProperty(this, "executeBoxEditErrorHandler", error => {
      this.props.onError(error); // eslint-disable-next-line no-console

      console.error(error);
    });

    const {
      token: _token,
      apiHost,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor
    } = props;
    this.id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('bcow_');
    this.api = new _api__WEBPACK_IMPORTED_MODULE_9__["default"]({
      apiHost,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor,
      token: _token
    }); // Clone initial state to allow for state reset on new files

    this.state = _objectSpread({}, this.initialState);
  }
  /**
   * Destroys api instances with caches
   *
   * @private
   * @return {void}
   */


  clearCache() {
    this.api.destroy(true);
  }
  /**
   * Cleanup
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentWillUnmount() {
    // Don't destroy the cache while unmounting
    this.api.destroy(false);
  }
  /**
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentDidMount() {
    const {
      fileId
    } = this.props;

    if (!fileId) {
      return;
    }

    this.window = window;
    this.fetchOpenWithData();
  }
  /**
   * After component updates, re-fetch Open With data if appropriate.
   *
   * @return {void}
   */


  componentDidUpdate(prevProps) {
    const {
      fileId: currentFileId
    } = this.props;
    const {
      fileId: previousFileId
    } = prevProps;

    if (!currentFileId) {
      return;
    }

    if (currentFileId !== previousFileId) {
      this.setState(_objectSpread({}, this.initialState));
      this.fetchOpenWithData();
    }
  }
  /**
   * Checks if a given integration is a Box Edit integration.
   *
   * @param {string} [integrationId] - The integration ID
   * @return {boolean}
   */


  isBoxEditIntegration(integrationId) {
    return integrationId === _constants__WEBPACK_IMPORTED_MODULE_18__["BOX_EDIT_INTEGRATION_ID"] || this.isBoxEditSFCIntegration(integrationId);
  }
  /**
   * Checks if a given integration is a Box Edit integration.
   *
   * @param {string} [integrationId] - The integration ID
   * @return {boolean}
   */


  isBoxEditSFCIntegration(integrationId) {
    return integrationId === _constants__WEBPACK_IMPORTED_MODULE_18__["BOX_EDIT_SFC_INTEGRATION_ID"];
  }
  /**
   * Fetches Open With data.
   *
   * @return {void}
   */


  fetchOpenWithData() {
    const {
      fileId
    } = this.props;
    this.api.getOpenWithAPI(false).getOpenWithIntegrations(fileId, this.fetchOpenWithSuccessHandler, this.fetchErrorHandler);
  }
  /**
   * Fetch app integrations info needed to render.
   *
   * @param {OpenWithIntegrations} integrations - The available Open With integrations
   * @return {void}
   */


  /**
   * Calls the onExecute prop
   *
   * @private
   * @param {string} integrationID - The integration that was executed
   * @return {void}
   */
  onExecute(integrationID) {
    this.props.onExecute(integrationID);
    this.setState({
      shouldRenderLoadingIntegrationPortal: false
    });
  }
  /**
   * Handles execution related errors
   *
   * @private
   * @param {Error} error - Error object
   * @return {void}
   */


  /**
   * Gets a display integration, if available, for the Open With button
   *
   * @private
   * @return {?Integration}
   */
  getDisplayIntegration() {
    const {
      integrations
    } = this.state; // We only consider an integration a display integration if is the only integration in our state

    return Array.isArray(integrations) && integrations.length === 1 ? integrations[0] : null;
  }
  /**
   * Render the Open With element
   *
   * @private
   * @inheritdoc
   * @return {Element}
   */


  render() {
    const {
      language,
      messages: intlMessages,
      dropdownAlignment
    } = this.props;
    const {
      fetchError,
      isLoading,
      integrations,
      executePostData,
      shouldRenderLoadingIntegrationPortal,
      shouldRenderErrorIntegrationPortal
    } = this.state;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('be bcow', this.props.className);
    const displayIntegration = this.getDisplayIntegration();
    const numIntegrations = integrations ? integrations.length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Internationalize__WEBPACK_IMPORTED_MODULE_6__["default"], {
      language: language,
      messages: intlMessages
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      "data-testid": "bcow-content",
      id: this.id
    }, numIntegrations <= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenWithButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      displayIntegration: displayIntegration,
      error: fetchError,
      isLoading: isLoading,
      onClick: this.onIntegrationClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenWithDropdownMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
      dropdownAlignment: dropdownAlignment,
      integrations: integrations,
      onClick: this.onIntegrationClick
    }), (shouldRenderLoadingIntegrationPortal || shouldRenderErrorIntegrationPortal) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IntegrationPortalContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hasError: shouldRenderErrorIntegrationPortal,
      integrationWindow: this.integrationWindow
    }), executePostData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExecuteForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
      executePostData: executePostData,
      id: this.id,
      onSubmit: this.onExecuteFormSubmit,
      windowName: this.integrationWindow && this.integrationWindow.name
    })));
  }

}

_defineProperty(ContentOpenWith, "defaultProps", {
  apiHost: _constants__WEBPACK_IMPORTED_MODULE_18__["DEFAULT_HOSTNAME_API"],
  className: '',
  clientName: _constants__WEBPACK_IMPORTED_MODULE_18__["CLIENT_NAME_OPEN_WITH"],
  onExecute: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onError: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_8__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_18__["ORIGIN_OPEN_WITH"], _OpenWithFallbackButton__WEBPACK_IMPORTED_MODULE_14__["default"])(ContentOpenWith));

/***/ }),

/***/ "./src/elements/content-open-with/ContentOpenWith.scss":
/*!*************************************************************!*\
  !*** ./src/elements/content-open-with/ContentOpenWith.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-open-with/ExecuteForm.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-open-with/ExecuteForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/**
 * 
 * @file Form to invoke an integration via POST
 * @author Box
 */



class ExecuteForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidMount() {
    const {
      onSubmit
    } = this.props;
    this.ref.current.submit();
    onSubmit();
  }

  render() {
    const {
      executePostData: {
        url,
        params
      },
      id,
      windowName
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      ref: this.ref,
      action: url,
      id: `bcow-execute-form-${id}`,
      method: _constants__WEBPACK_IMPORTED_MODULE_1__["HTTP_POST"],
      rel: "noreferrer noopener",
      target: windowName || '_blank'
    }, params && params.map(_ref => {
      let {
        key,
        value
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        key: key,
        name: key,
        type: "hidden",
        value: value
      });
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExecuteForm);

/***/ }),

/***/ "./src/elements/content-open-with/IconFileMap.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-open-with/IconFileMap.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_google_docs_IconGoogleDocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/google-docs/IconGoogleDocs */ "./src/icons/google-docs/IconGoogleDocs.tsx");
/* harmony import */ var _icons_google_docs_IconGoogleSheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/google-docs/IconGoogleSheets */ "./src/icons/google-docs/IconGoogleSheets.tsx");
/* harmony import */ var _icons_google_docs_IconGoogleSlides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/google-docs/IconGoogleSlides */ "./src/icons/google-docs/IconGoogleSlides.tsx");
/* harmony import */ var _icons_file_icon_FileIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/file-icon/FileIcon */ "./src/icons/file-icon/FileIcon.tsx");
/**
 * 
 * @file Maintains a mapping of integration names to icons.
 * @author Box
 */





const ICON_FILE_MAP = {
  'Google Docs': _icons_google_docs_IconGoogleDocs__WEBPACK_IMPORTED_MODULE_1__["default"],
  'Google Docs (beta)': _icons_google_docs_IconGoogleDocs__WEBPACK_IMPORTED_MODULE_1__["default"],
  'Google Sheets': _icons_google_docs_IconGoogleSheets__WEBPACK_IMPORTED_MODULE_2__["default"],
  'Google Sheets (beta)': _icons_google_docs_IconGoogleSheets__WEBPACK_IMPORTED_MODULE_2__["default"],
  'Google Slides': _icons_google_docs_IconGoogleSlides__WEBPACK_IMPORTED_MODULE_3__["default"],
  'Google Slides (beta)': _icons_google_docs_IconGoogleSlides__WEBPACK_IMPORTED_MODULE_3__["default"]
};

function getIcon(iconName) {
  return ICON_FILE_MAP[iconName] || _icons_file_icon_FileIcon__WEBPACK_IMPORTED_MODULE_4__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = (getIcon);

/***/ }),

/***/ "./src/elements/content-open-with/IntegrationPortal.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-open-with/IntegrationPortal.js ***!
  \*************************************************************/
/*! exports provided: copyStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyStyles", function() { return copyStyles; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 
 * @file Allows react to render a component in an arbitrary DOM node, in this case in a new window.
 * @author Box
 */


/**
 * Copies stylesheets to the new window.
 *
 * @private
 * @param {HTMLDocument} documentElement - an HTML document
 * @param {Window} integrationWindow - a browser window
 * @return {void}
 */
function copyStyles(documentElement, integrationWindow) {
  // The new window will have no CSS, so we copy all style sheets as a safe way
  // of ensuring required styles are present
  Array.from(documentElement.styleSheets).forEach(styleSheet => {
    if (!styleSheet.href) {
      return;
    }

    const copiedStyleSheet = integrationWindow.document.createElement('link');
    copiedStyleSheet.rel = 'stylesheet';
    copiedStyleSheet.href = styleSheet.href;
    integrationWindow.document.head.appendChild(copiedStyleSheet);
  }); // Reset margin and padding in our new window

  integrationWindow.document.body.style.margin = 0;
  integrationWindow.document.body.style.padding = 0;
}

const IntegrationPortal = _ref => {
  let {
    integrationWindow,
    children
  } = _ref;
  const containerElement = integrationWindow.document.createElement('div');
  copyStyles(document, integrationWindow);
  integrationWindow.document.body.appendChild(containerElement);
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["createPortal"])(children, containerElement);
};

/* harmony default export */ __webpack_exports__["default"] = (IntegrationPortal);

/***/ }),

/***/ "./src/elements/content-open-with/IntegrationPortalContainer.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-open-with/IntegrationPortalContainer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/error-mask/ErrorMask */ "./src/components/error-mask/ErrorMask.tsx");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _IntegrationPortal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IntegrationPortal */ "./src/elements/content-open-with/IntegrationPortal.js");
/**
 * 
 * @file integration portal container
 * @author Box
 */







const IntegrationPortalContainer = _ref => {
  let {
    hasError,
    integrationWindow
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_IntegrationPortal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    integrationWindow: integrationWindow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be bcow bcow-portal-container"
  }, hasError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errorHeader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].executeIntegrationOpenWithErrorHeader),
    errorSubHeader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].executeIntegrationOpenWithErrorSubHeader)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "bcow-portal-loading-indicator",
    size: "large"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IntegrationPortalContainer);

/***/ }),

/***/ "./src/elements/content-open-with/MultipleIntegrationsOpenWithButton.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-open-with/MultipleIntegrationsOpenWithButton.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconOpenWith */ "./src/icons/general/IconOpenWith.tsx");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _common_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Tooltip */ "./src/elements/common/Tooltip.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _OpenWithButtonContents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OpenWithButtonContents */ "./src/elements/content-open-with/OpenWithButtonContents.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Open With button when multiple integrations are present
 * @author Box
 */










const MultipleIntegrationsOpenWithButton = buttonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
  position: "middle-left",
  text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].defaultOpenWithDescription)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
  "data-testid": "multipleintegrationsbutton"
}, buttonProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OpenWithButtonContents__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: _constants__WEBPACK_IMPORTED_MODULE_8__["CLASS_INTEGRATION_ICON"],
  dimension: _constants__WEBPACK_IMPORTED_MODULE_8__["OPEN_WITH_BUTTON_ICON_SIZE"],
  height: _constants__WEBPACK_IMPORTED_MODULE_8__["OPEN_WITH_BUTTON_ICON_SIZE"],
  width: _constants__WEBPACK_IMPORTED_MODULE_8__["OPEN_WITH_BUTTON_ICON_SIZE"]
})))));

/* harmony default export */ __webpack_exports__["default"] = (MultipleIntegrationsOpenWithButton);

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithButton.js":
/*!**********************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithButton.js ***!
  \**********************************************************/
/*! exports provided: getTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTooltip", function() { return getTooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/Button */ "./src/components/button/Button.tsx");
/* harmony import */ var _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconOpenWith */ "./src/icons/general/IconOpenWith.tsx");
/* harmony import */ var _common_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Tooltip */ "./src/elements/common/Tooltip.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _OpenWithButtonContents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OpenWithButtonContents */ "./src/elements/content-open-with/OpenWithButtonContents.js");
/* harmony import */ var _openWithUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./openWithUtils */ "./src/elements/content-open-with/openWithUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _IconFileMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconFileMap */ "./src/elements/content-open-with/IconFileMap.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Open With button
 * @author Box
 */












/**
 * Gets the tooltip text for the ContentOpenWith button
 *
 * @private
 * @return {?(string | Element)} the tooltip message
 */
const getTooltip = function (displayDescription, isLoading, error) {
  let disabledReasons = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (isLoading) {
    return null;
  }

  let message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].emptyOpenWithDescription);

  if (disabledReasons.length > 0) {
    [message] = disabledReasons;
  } else if (error) {
    message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].errorOpenWithDescription);
  } else if (displayDescription) {
    message = displayDescription;
  }

  return message;
};

const OpenWithButton = _ref => {
  let {
    error,
    onClick = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    displayIntegration,
    isLoading
  } = _ref;
  const {
    displayName,
    isDisabled: isDisplayIntegrationDisabled,
    extension,
    disabledReasons,
    displayDescription
  } = displayIntegration || {};
  const isDisabled = !!isDisplayIntegrationDisabled || !displayName;
  const Icon = displayName ? Object(_IconFileMap__WEBPACK_IMPORTED_MODULE_10__["default"])(displayName) : _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_4__["default"];
  const tooltipDisplayProps = _openWithUtils__WEBPACK_IMPORTED_MODULE_8__["default"].isDisabledBecauseBoxToolsIsNotInstalled(displayIntegration) ? {
    isShown: true,
    showCloseButton: true
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    className: "bcow-tooltip",
    position: "bottom-center",
    text: getTooltip(displayDescription, isLoading, error, disabledReasons)
  }, tooltipDisplayProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-testid": "singleintegrationbutton",
    isDisabled: isDisabled,
    onClick: () => displayIntegration ? onClick(displayIntegration) : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OpenWithButtonContents__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, {
    className: _constants__WEBPACK_IMPORTED_MODULE_9__["CLASS_INTEGRATION_ICON"],
    dimension: _constants__WEBPACK_IMPORTED_MODULE_9__["OPEN_WITH_BUTTON_ICON_SIZE"],
    extension: extension,
    height: _constants__WEBPACK_IMPORTED_MODULE_9__["OPEN_WITH_BUTTON_ICON_SIZE"],
    width: _constants__WEBPACK_IMPORTED_MODULE_9__["OPEN_WITH_BUTTON_ICON_SIZE"]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenWithButton);

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithButtonContents.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithButtonContents.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/**
 * 
 * @file Open With button contents
 * @author Box
 */




const OpenWithButtonContents = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcow-btn-header-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].open)));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenWithButtonContents);

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithDropdownMenu.js":
/*!****************************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithDropdownMenu.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dropdown_menu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dropdown-menu/DropdownMenu */ "./src/components/dropdown-menu/DropdownMenu.js");
/* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/Menu */ "./src/components/menu/Menu.tsx");
/* harmony import */ var _OpenWithDropdownMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenWithDropdownMenuItem */ "./src/elements/content-open-with/OpenWithDropdownMenuItem.js");
/* harmony import */ var _MultipleIntegrationsOpenWithButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MultipleIntegrationsOpenWithButton */ "./src/elements/content-open-with/MultipleIntegrationsOpenWithButton.js");
/**
 * 
 * @file Open With dropdown menu
 * @author Box
 */





const RIGHT_ALIGNMENT = 'right';

const OpenWithDropdownMenu = _ref => {
  let {
    dropdownAlignment = RIGHT_ALIGNMENT,
    integrations,
    onClick
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu_DropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isRightAligned: dropdownAlignment === RIGHT_ALIGNMENT
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MultipleIntegrationsOpenWithButton__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcow-menu"
  }, integrations.map(integration => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OpenWithDropdownMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: integration.appIntegrationId,
    integration: integration,
    onClick: onClick
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenWithDropdownMenu);

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithDropdownMenuItem.js":
/*!********************************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithDropdownMenuItem.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/menu/MenuItem */ "./src/components/menu/MenuItem.tsx");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _IconFileMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconFileMap */ "./src/elements/content-open-with/IconFileMap.js");
/* harmony import */ var _openWithUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openWithUtils */ "./src/elements/content-open-with/openWithUtils.js");
/* harmony import */ var _OpenWithDropdownMenuItem_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OpenWithDropdownMenuItem.scss */ "./src/elements/content-open-with/OpenWithDropdownMenuItem.scss");
/* harmony import */ var _OpenWithDropdownMenuItem_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_OpenWithDropdownMenuItem_scss__WEBPACK_IMPORTED_MODULE_8__);
/**
 * 
 * @file Open With dropdown menu item
 * @author Box
 */










function getErrorMessage() {
  let disabledReasons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let message; // Use the first disabled reason as the description if the integration is disabled.

  const code = disabledReasons[0];
  const defaultErrorMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].errorOpenWithDescription);

  switch (code) {
    case 'blocked_by_shield_access_policy':
      message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].boxEditErrorBlockedByPolicy);
      break;

    case 'collaborators_hidden':
      message = defaultErrorMessage;
      break;

    default:
      message = disabledReasons[0] || defaultErrorMessage;
  }

  return message;
}

const OpenWithDropdownMenuItem = _ref => {
  let {
    integration,
    onClick
  } = _ref;
  const {
    displayName,
    displayDescription,
    isDisabled,
    extension,
    disabledReasons
  } = integration;
  const Icon = Object(_IconFileMap__WEBPACK_IMPORTED_MODULE_6__["default"])(displayName);
  const description = isDisabled ? getErrorMessage(disabledReasons) : displayDescription;
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'bcow-box-tools-uninstalled': _openWithUtils__WEBPACK_IMPORTED_MODULE_7__["default"].isDisabledBecauseBoxToolsIsNotInstalled(integration)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    isDisabled: isDisabled,
    onClick: () => onClick(integration)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, {
    dimension: _constants__WEBPACK_IMPORTED_MODULE_5__["OPEN_WITH_MENU_ITEM_ICON_SIZE"],
    extension: extension,
    height: _constants__WEBPACK_IMPORTED_MODULE_5__["OPEN_WITH_MENU_ITEM_ICON_SIZE"],
    width: _constants__WEBPACK_IMPORTED_MODULE_5__["OPEN_WITH_MENU_ITEM_ICON_SIZE"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bcow-menu-item-title"
  }, displayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bcow-menu-item-description"
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenWithDropdownMenuItem);

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithDropdownMenuItem.scss":
/*!**********************************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithDropdownMenuItem.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-open-with/OpenWithFallbackButton.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-open-with/OpenWithFallbackButton.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OpenWithButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenWithButton */ "./src/elements/content-open-with/OpenWithButton.js");
/**
 * 
 * @file Open With fallback button
 * @author Box
 */



const OpenWithFallbackButton = _ref => {
  let {
    error
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be bcow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_OpenWithButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: error,
    isLoading: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenWithFallbackButton);

/***/ }),

/***/ "./src/elements/content-open-with/index.js":
/*!*************************************************!*\
  !*** ./src/elements/content-open-with/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentOpenWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentOpenWith */ "./src/elements/content-open-with/ContentOpenWith.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ContentOpenWith__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-open-with/openWithUtils.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-open-with/openWithUtils.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoxToolsInstallMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxToolsInstallMessage */ "./src/elements/content-open-with/BoxToolsInstallMessage.js");
/**
 * 
 * @file Open With utils
 * @author Box
 */



const isDisabledBecauseBoxToolsIsNotInstalled = integration => {
  const disabledReasonType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(integration, 'disabledReasons.0.type');
  return disabledReasonType === _BoxToolsInstallMessage__WEBPACK_IMPORTED_MODULE_1__["default"];
};

/* harmony default export */ __webpack_exports__["default"] = ({
  isDisabledBecauseBoxToolsIsNotInstalled
});

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

/***/ "./src/icons/google-docs/IconGoogleDocs.tsx":
/*!**************************************************!*\
  !*** ./src/icons/google-docs/IconGoogleDocs.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ICON_CLASS = 'icon-google-docs';

class IconGoogleDocs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "idPrefix", `${lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(ICON_CLASS)}-`);
  }

  render() {
    const {
      className,
      height,
      title,
      width
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: `${ICON_CLASS} ${className}`,
      height: height,
      title: title,
      viewBox: "0 0 30 30",
      width: width
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
      gradientTransform: "matrix(2.67 0 0 -2.67 596.67 1357)",
      gradientUnits: "userSpaceOnUse",
      id: `${this.idPrefix}a`,
      x1: "-215.49",
      x2: "-215.49",
      y1: "505.79",
      y2: "503.19"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: "0",
      stopColor: "#1a237e",
      stopOpacity: ".2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: "1",
      stopColor: "#1a237e",
      stopOpacity: ".02"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0H6.05A2.05 2.05 0 0 0 4 2.05V28a2.05 2.05 0 0 0 2.05 2h17.72a2.05 2.05 0 0 0 2.05-2V8.18l-4.77-3.41z",
      fill: "#4285f4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M18.23 7.58l7.59 7.58V8.18l-7.59-.6z",
      fill: `url(#${this.idPrefix}a)`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M9.45 21.82h10.91v-1.37H9.45zm0 2.73h8.19v-1.37H9.45zm0-9.55v1.36h10.91V15zm0 4.09h10.91v-1.36H9.45z",
      fill: "#f1f1f1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0v6.14a2 2 0 0 0 2 2h6.14z",
      fill: "#a1c2fa"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M6.05 0A2.05 2.05 0 0 0 4 2.05v.17A2.05 2.05 0 0 1 6.05.17h11.59V0z",
      fill: "#fff",
      fillOpacity: ".2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M19.68 8.18a2 2 0 0 1-2-2v.17a2 2 0 0 0 2 2h6.14v-.17z",
      fill: "#1a237e",
      fillOpacity: ".1"
    }));
  }

}

_defineProperty(IconGoogleDocs, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

/* harmony default export */ __webpack_exports__["default"] = (IconGoogleDocs);

/***/ }),

/***/ "./src/icons/google-docs/IconGoogleSheets.tsx":
/*!****************************************************!*\
  !*** ./src/icons/google-docs/IconGoogleSheets.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ICON_CLASS = 'icon-google-sheets';

class IconGoogleSheets extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "idPrefix", `${lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(ICON_CLASS)}-`);
  }

  render() {
    const {
      className,
      height,
      title,
      width
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: `${ICON_CLASS} ${className}`,
      height: height,
      title: title,
      viewBox: "0 0 30 30",
      width: width
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
      gradientTransform: "matrix(2.67 0 0 -2.67 596.67 1357)",
      gradientUnits: "userSpaceOnUse",
      id: `${this.idPrefix}a`,
      x1: "-215.49",
      x2: "-215.49",
      y1: "505.79",
      y2: "503.19"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: "0",
      stopColor: "#208256"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: ".55",
      stopColor: "#19955a",
      stopOpacity: ".2"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0H6.05A2.05 2.05 0 0 0 4 2.05V28a2.05 2.05 0 0 0 2.05 2h17.72a2.05 2.05 0 0 0 2.05-2V8.18l-4.77-3.41z",
      fill: "#22a565"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M18.23 7.58l7.59 7.58V8.18l-7.59-.6z",
      fill: `url(#${this.idPrefix}a)`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0v6.14a2 2 0 0 0 2 2h6.14z",
      fill: "#8ed1b1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M6.05 0A2.05 2.05 0 0 0 4 2.05v.17A2.05 2.05 0 0 1 6.05.17h11.59V0z",
      fill: "#fff",
      fillOpacity: ".2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M19.68 8.18a2 2 0 0 1-2-2v.17a2 2 0 0 0 2 2h6.14v-.17z",
      fill: "#1a237e",
      fillOpacity: ".1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M10 14v10h10V14zm1 1h3.5v2H11zm0 3h3.5v2H11zm0 5v-2h3.5v2zm8 0h-3.5v-2H19zm0-3h-3.5v-2H19zm0-3h-3.5v-2H19z",
      fill: "#f1f1f1"
    }));
  }

}

_defineProperty(IconGoogleSheets, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

/* harmony default export */ __webpack_exports__["default"] = (IconGoogleSheets);

/***/ }),

/***/ "./src/icons/google-docs/IconGoogleSlides.tsx":
/*!****************************************************!*\
  !*** ./src/icons/google-docs/IconGoogleSlides.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ICON_CLASS = 'icon-google-slides';

class IconGoogleSlides extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "idPrefix", `${lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(ICON_CLASS)}-`);
  }

  render() {
    const {
      className,
      height,
      title,
      width
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: `${ICON_CLASS} ${className}`,
      height: height,
      title: title,
      viewBox: "0 0 30 30",
      width: width
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
      gradientTransform: "matrix(2.67 0 0 -2.67 596.67 1357)",
      gradientUnits: "userSpaceOnUse",
      id: `${this.idPrefix}a`,
      x1: "-215.49",
      x2: "-215.49",
      y1: "505.79",
      y2: "503.19"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: "0",
      stopColor: "#d08714",
      stopOpacity: ".88"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
      offset: ".55",
      stopColor: "#cf8714",
      stopOpacity: ".2"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0H6.05A2.05 2.05 0 0 0 4 2.05V28a2.05 2.05 0 0 0 2.05 2h17.72a2.05 2.05 0 0 0 2.05-2V8.18l-4.77-3.41z",
      fill: "#f4b912"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M18.23 7.58l7.59 7.58V8.18l-7.59-.6z",
      fill: `url(#${this.idPrefix}a)`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M17.64 0v6.14a2 2 0 0 0 2 2h6.14z",
      fill: "#fadc87"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M6.05 0A2.05 2.05 0 0 0 4 2.05v.17A2.05 2.05 0 0 1 6.05.17h11.59V0z",
      fill: "#fff",
      fillOpacity: ".2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M19.68 8.18a2 2 0 0 1-2-2v.17a2 2 0 0 0 2 2h6.14v-.17z",
      fill: "#1a237e",
      fillOpacity: ".1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M10 15v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm9 6h-8v-4h8z",
      fill: "#f1f1f1"
    }));
  }

}

_defineProperty(IconGoogleSlides, "defaultProps", {
  className: '',
  height: 30,
  width: 30
});

/* harmony default export */ __webpack_exports__["default"] = (IconGoogleSlides);

/***/ })

}]);
//# sourceMappingURL=content-open-with.js.map