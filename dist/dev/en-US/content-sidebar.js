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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-sidebar"],{

/***/ "./src/components/guide-tooltip/GuideTooltip.scss":
/*!********************************************************!*\
  !*** ./src/components/guide-tooltip/GuideTooltip.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/guide-tooltip/GuideTooltip.tsx":
/*!*******************************************************!*\
  !*** ./src/components/guide-tooltip/GuideTooltip.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/components/guide-tooltip/messages.js");
/* harmony import */ var _GuideTooltip_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GuideTooltip.scss */ "./src/components/guide-tooltip/GuideTooltip.scss");
/* harmony import */ var _GuideTooltip_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_GuideTooltip_scss__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["body", "children", "className", "icon", "image", "isShown", "primaryButtonProps", "steps", "secondaryButtonProps", "showCloseButton", "title"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // @ts-ignore flow import




function GuideTooltip(_ref) {
  let {
    body,
    children,
    className = '',
    icon,
    image,
    isShown = true,
    primaryButtonProps,
    steps,
    secondaryButtonProps,
    showCloseButton = true,
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, rest, {
    className: `bdl-GuideTooltip ${className}`,
    isShown: isShown,
    showCloseButton: showCloseButton,
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-icon"
    }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-right"
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-title"
    }, title), !icon && image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-image"
    }, image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-body"
    }, body), (secondaryButtonProps || primaryButtonProps || steps) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-bottom"
    }, (secondaryButtonProps || primaryButtonProps) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-navigation"
    }, secondaryButtonProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, secondaryButtonProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-GuideTooltip-previousButton', secondaryButtonProps.className)
    })), primaryButtonProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, primaryButtonProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-GuideTooltip-nextButton', primaryButtonProps.className)
    }))), steps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bdl-GuideTooltip-steps"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_5__["default"].navigation, {
      values: {
        currentStepIndex: steps[0],
        totalNumSteps: steps[1]
      }
    })))))),
    theme: _tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipTheme"].CALLOUT
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (GuideTooltip);

/***/ }),

/***/ "./src/components/guide-tooltip/index.ts":
/*!***********************************************!*\
  !*** ./src/components/guide-tooltip/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuideTooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuideTooltip */ "./src/components/guide-tooltip/GuideTooltip.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GuideTooltip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/guide-tooltip/messages.js":
/*!**************************************************!*\
  !*** ./src/components/guide-tooltip/messages.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  navigation: {
    "id": "boxui.core.guidetooltip.navigation",
    "defaultMessage": "{currentStepIndex} of {totalNumSteps}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/sidebar-toggle-button/SidebarToggleButton.js":
/*!*********************************************************************!*\
  !*** ./src/components/sidebar-toggle-button/SidebarToggleButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconHide */ "./src/icons/general/IconHide.tsx");
/* harmony import */ var _icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconShow */ "./src/icons/general/IconShow.tsx");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarToggleButton.scss */ "./src/components/sidebar-toggle-button/SidebarToggleButton.scss");
/* harmony import */ var _SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8__);
const _excluded = ["className", "direction", "intl", "isOpen", "onClick"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';

const SidebarToggleButton = _ref => {
  let {
    className = '',
    direction = DIRECTION_RIGHT,
    intl,
    isOpen,
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const isCollapsed = !isOpen ? 'collapsed' : '';
  const intlMessage = isOpen ? _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarHide : _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarShow;
  const intlText = intl.formatMessage(intlMessage);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'bdl-SidebarToggleButton', {
    'bdl-is-collapsed': isCollapsed
  });
  const tooltipPosition = direction === DIRECTION_LEFT ? 'middle-right' : 'middle-left';

  const renderButton = () => {
    if (direction === DIRECTION_LEFT) {
      return isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        height: 16,
        width: 16
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__["default"], {
        height: 16,
        width: 16
      });
    }

    return isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      height: 16,
      width: 16
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      height: 16,
      width: 16
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: tooltipPosition,
    text: intlText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    "aria-label": intlText,
    className: classes,
    onClick: onClick,
    type: "button"
  }, rest), renderButton()));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SidebarToggleButton));

/***/ }),

/***/ "./src/components/sidebar-toggle-button/SidebarToggleButton.scss":
/*!***********************************************************************!*\
  !*** ./src/components/sidebar-toggle-button/SidebarToggleButton.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tooltip/index.ts":
/*!*****************************************!*\
  !*** ./src/components/tooltip/index.ts ***!
  \*****************************************/
/*! exports provided: default, TooltipPosition, TooltipTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./src/components/tooltip/Tooltip.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipPosition", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["TooltipPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipTheme", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["TooltipTheme"]; });

// Need to import and re-export the type to be shared in another component.
// https://github.com/babel/babel-loader/issues/603#issuecomment-418472968


/***/ }),

/***/ "./src/elements/common/api-context/APIContext.js":
/*!*******************************************************!*\
  !*** ./src/elements/common/api-context/APIContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/**
 * 
 * @file Creates an API Context
 * @author Box
 */


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext());

/***/ }),

/***/ "./src/elements/common/api-context/index.js":
/*!**************************************************!*\
  !*** ./src/elements/common/api-context/index.js ***!
  \**************************************************/
/*! exports provided: default, withAPIContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APIContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIContext */ "./src/elements/common/api-context/APIContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _APIContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _withAPIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAPIContext */ "./src/elements/common/api-context/withAPIContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAPIContext", function() { return _withAPIContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/common/api-context/withAPIContext.js":
/*!***********************************************************!*\
  !*** ./src/elements/common/api-context/withAPIContext.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _APIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIContext */ "./src/elements/common/api-context/APIContext.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Wraps a component with the API context
 * @author Box
 */



const withAPIContext = WrappedComponent => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_APIContext__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, null, api => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, _extends({
  ref: ref
}, props, {
  api: api
}))));

/* harmony default export */ __webpack_exports__["default"] = (withAPIContext);

/***/ }),

/***/ "./src/elements/common/interactionTargets.js":
/*!***************************************************!*\
  !*** ./src/elements/common/interactionTargets.js ***!
  \***************************************************/
/*! exports provided: SIDEBAR_NAV_TARGETS, SECTION_TARGETS, DETAILS_TARGETS, ACTIVITY_TARGETS, SKILLS_TARGETS, INTERACTION_TARGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_NAV_TARGETS", function() { return SIDEBAR_NAV_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_TARGETS", function() { return SECTION_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS_TARGETS", function() { return DETAILS_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY_TARGETS", function() { return ACTIVITY_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS_TARGETS", function() { return SKILLS_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERACTION_TARGET", function() { return INTERACTION_TARGET; });
const SIDEBAR_NAV_TARGETS = {
  ACTIVITY: 'sidebaractivity',
  DETAILS: 'sidebardetails',
  SIGN: 'sidebarsign',
  SKILLS: 'sidebarskills',
  METADATA: 'sidebarmetadata',
  TOGGLE: 'sidebartoggle'
};
const SECTION_TARGETS = {
  FILE_PROPERTIES: 'fileproperties',
  ACCESS_STATS: 'accessstats',
  CLASSIFICATION: 'classification'
};
const DETAILS_TARGETS = {
  ACCESS_STATS: {
    COMMENTS: 'accessstats-comments',
    DOWNLOADS: 'accessstats-downloads',
    EDITS: 'accessstats-edits',
    PREVIEWS: 'accessstats-previews',
    VIEWS: 'accessstats-views',
    VIEW_DETAILS: 'accessstats-viewdetails'
  },
  CLASSIFICATION_ADD: 'addclassification',
  CLASSIFICATION_EDIT: 'editclassification',
  DESCRIPTION: 'description',
  VERSION_HISTORY: 'versionhistory'
};
const ACTIVITY_TARGETS = {
  ANNOTATION_OPTIONS_DELETE: 'activityfeed-annotation-delete',
  ANNOTATION_OPTIONS_EDIT: 'activityfeed-annotation-edit',
  ANNOTATION_OPTIONS_RESOLVE: 'activityfeed-annotation-resolve',
  ANNOTATION_OPTIONS_UNRESOLVE: 'activityfeed-annotation-unresolve',
  ANNOTATION_OPTIONS: 'activityfeedannotation',
  // component
  APPROVAL_FORM_ADD_TASK: 'activityfeed-apporvalformaddtask',
  APPROVAL_FORM_CANCEL: 'activityfeed-approvalformcancel',
  APPROVAL_FORM_POST: 'activityfeed-approvalformpost',
  COMMENT_OPTIONS: 'activityfeedcomment',
  // component
  COMMENT_OPTIONS_DELETE: 'activityfeed-comment-delete',
  COMMENT_OPTIONS_EDIT: 'activityfeed-comment-edit',
  INLINE_DELETE_CANCEL: 'activityfeed-delete-cancel',
  INLINE_DELETE_CONFIRM: 'activityfeed-delete-confirm',
  MENTION: 'activityfeed-mentionlink',
  PROFILE: 'activityfeed-profilelink',
  TASK_APPROVE: 'activityfeed-taskapprove',
  TASK_COMPLETE: 'activityfeed-taskcomplete',
  TASK_DATE_PICKER: 'activityfeed-taskdatepicker',
  TASK_VIEW_DETAILS: 'activityfeed-viewtaskdetails',
  TASK_OPTIONS: 'activityfeedtask',
  // component
  TASK_OPTIONS_DELETE: 'activityfeed-task-delete',
  TASK_OPTIONS_EDIT: 'activityfeed-task-edit',
  TASK_REJECT: 'activityfeed-taskreject',
  VERSION_CARD: 'activityfeed-versioninfo'
};
const SKILLS_TARGETS = {
  FACES: {
    CARD: 'skill-facecard',
    FACE: 'skill-face',
    DELETE: 'skill-facedelete',
    EDIT: 'skill-faceedit',
    EDIT_SAVE: 'skill-faceeditsave',
    EDIT_CANCEL: 'skill-faceeditcancel',
    TIMELINE: 'skill-facetimeslice'
  },
  KEYWORDS: {
    CARD: 'skill-keywordcard',
    EDIT: 'skill-keywordedit',
    EDIT_SAVE: 'skill-keywordeditsave',
    EDIT_CANCEL: 'skill-keywordeditcancel',
    TIMELINE: 'skill-keywordtimeslice',
    SELECT: 'skill-keywordselect'
  },
  TRANSCRIPTS: {
    CARD: 'skill-transcriptcard',
    COPY: 'skill-transcriptcopy',
    EDIT: 'skill-transcriptedit',
    EXPAND: 'skill-transcriptexpand',
    EDIT_SAVE: 'skill-transcripteditsave',
    EDIT_CANCEL: 'skill-transcripteditcancel',
    TRANSCRIPT: 'skill-transcript',
    EDIT_TEXT: 'skill-transcriptedittext'
  },
  TIMELINE: {
    NEXT: 'skill-timelimelinenext',
    PREVIOUS: 'skill-timelineprevious'
  }
};
const INTERACTION_TARGET = 'data-resin-target';

/***/ }),

/***/ "./src/elements/common/modal.scss":
/*!****************************************!*\
  !*** ./src/elements/common/modal.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/nav-button/BackButton.js":
/*!******************************************************!*\
  !*** ./src/elements/common/nav-button/BackButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons_general_IconNavigateLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconNavigateLeft */ "./src/icons/general/IconNavigateLeft.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _BackButton_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BackButton.scss */ "./src/elements/common/nav-button/BackButton.scss");
/* harmony import */ var _BackButton_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BackButton_scss__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["className", "to"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Back Button component
 * @author Box
 */









const BackButton = _ref => {
  let {
    className,
    to
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], null, _ref2 => {
    let {
      history
    } = _ref2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-BackButton', className),
      onClick: () => to ? history.push(to) : history.goBack(),
      type: "button"
    }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconNavigateLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
      height: 24,
      width: 24
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "accessibility-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].back)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./src/elements/common/nav-button/BackButton.scss":
/*!********************************************************!*\
  !*** ./src/elements/common/nav-button/BackButton.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/nav-button/NavButton.js":
/*!*****************************************************!*\
  !*** ./src/elements/common/nav-button/NavButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/utils/dom.js");
const _excluded = ["activeClassName", "children", "className", "component", "exact", "isActive", "onClick", "replace", "strict", "to"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Nav Button component intended to mimic React Router's NavLink component for non-anchor elements
 * @author Box
 */





const NavButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
  const {
    activeClassName = 'bdl-is-active',
    children,
    className = 'bdl-NavButton',
    component: Component = _components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"],
    exact,
    isActive,
    onClick,
    replace,
    strict,
    to
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const path = typeof to === 'object' ? to.pathname : to;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: exact,
    path: path,
    strict: strict
  }, _ref => {
    let {
      history,
      location,
      match
    } = _ref;
    const isActiveValue = !!(isActive ? isActive(match, location) : match);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
        [activeClassName]: isActiveValue
      }),
      onClick: event => {
        if (onClick) {
          onClick(event);
        }

        if (!event.defaultPrevented && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isLeftClick"])(event)) {
          const method = replace ? history.replace : history.push;
          method(to);
        }
      },
      ref: ref
    }, rest), children);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ }),

/***/ "./src/elements/common/nav-button/index.js":
/*!*************************************************!*\
  !*** ./src/elements/common/nav-button/index.js ***!
  \*************************************************/
/*! exports provided: BackButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton */ "./src/elements/common/nav-button/BackButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return _BackButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ "./src/elements/common/nav-button/NavButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/common/routing/index.js":
/*!**********************************************!*\
  !*** ./src/elements/common/routing/index.js ***!
  \**********************************************/
/*! exports provided: withRouterAndRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withRouterAndRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withRouterAndRef */ "./src/elements/common/routing/withRouterAndRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouterAndRef", function() { return _withRouterAndRef__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./src/elements/common/routing/withRouterAndRef.js":
/*!*********************************************************!*\
  !*** ./src/elements/common/routing/withRouterAndRef.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withRouterAndRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // Basically a workaround for the fact that react-router's withRouter cannot forward ref's through
// functional components. Use this instead to gain the benefits of withRouter but also ref forwarding

function withRouterAndRef(Wrapped) {
  const WithRouterAndRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], null, routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapped, _extends({
    ref: ref
  }, routeProps, props))));
  const name = Wrapped.displayName || Wrapped.name || 'Component';
  WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
  return WithRouterAndRef;
}

/***/ }),

/***/ "./src/elements/content-sidebar/ContentSidebar.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/ContentSidebar.js ***!
  \********************************************************/
/*! exports provided: ContentSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSidebarComponent", function() { return ContentSidebar; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_Internationalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Internationalize */ "./src/elements/common/Internationalize.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ "./src/elements/content-sidebar/Sidebar.js");
/* harmony import */ var _common_nav_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/nav-router */ "./src/elements/common/nav-router/index.ts");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/fields */ "./src/utils/fields.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/fonts.scss */ "./src/elements/common/fonts.scss");
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/base.scss */ "./src/elements/common/base.scss");
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_base_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_modal_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/modal.scss */ "./src/elements/common/modal.scss");
/* harmony import */ var _common_modal_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_modal_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ContentSidebar.scss */ "./src/elements/content-sidebar/ContentSidebar.scss");
/* harmony import */ var _ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Container
 * @author Box
 */





















const MARK_NAME_JS_READY = `${_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"]}_${_common_logger_constants__WEBPACK_IMPORTED_MODULE_11__["EVENT_JS_READY"]}`;
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_12__["mark"])(MARK_NAME_JS_READY);

class ContentSidebar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  /**
   * [constructor]
   *
   * @private
   * @return {ContentSidebar}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      isLoading: true
    });

    _defineProperty(this, "errorCallback", (error, code) => {
      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */

      /* eslint-disable react/prop-types */

      this.props.onError(error, code, {
        error
      });
      /* eslint-enable react/prop-types */
    });

    _defineProperty(this, "fetchMetadataSuccessCallback", _ref => {
      let {
        editors
      } = _ref;
      this.setState({
        metadataEditors: editors
      });
    });

    _defineProperty(this, "fetchFileSuccessCallback", file => {
      this.setState({
        file,
        isLoading: false
      }, this.fetchMetadata);
    });

    const {
      apiHost,
      cache,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor,
      sharedLink,
      sharedLinkPassword,
      token
    } = props;
    this.api = new _api__WEBPACK_IMPORTED_MODULE_4__["default"]({
      apiHost,
      cache,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor,
      sharedLink,
      sharedLinkPassword,
      token
    });
    /* eslint-disable react/prop-types */

    const {
      logger
    } = props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    /* eslint-enable react/prop-types */
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
   * Fetches the file data on load
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentDidMount() {
    this.fetchFile();
  }
  /**
   * Fetches new file data on update
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentDidUpdate(prevProps) {
    const {
      fileId
    } = this.props;
    const {
      fileId: prevFileId
    } = prevProps;

    if (fileId !== prevFileId) {
      this.fetchFile();
    }
  }
  /**
   * Network error callback
   *
   * @private
   * @param {Error} error - Error object
   * @param {string} code - error code
   * @return {void}
   */


  /**
   * Fetches file metadata editors if required
   *
   * @private
   * @return {void}
   */
  fetchMetadata() {
    const {
      file
    } = this.state;
    const {
      metadataSidebarProps
    } = this.props;
    const {
      isFeatureEnabled = true
    } = metadataSidebarProps; // Only fetch metadata if we think that the file may have metadata on it
    // but currently the metadata feature is turned off. Use case of this would be a free
    // user who doesn't have the metadata feature but is collabed on a file from a user
    // who added metadata on the file. If the feature is enabled we always end up showing
    // the metadata sidebar irrespective of there being any existing metadata or not.

    const canHaveMetadataSidebar = !isFeatureEnabled && _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].canHaveMetadataSidebar(this.props);

    if (canHaveMetadataSidebar) {
      this.api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a, isFeatureEnabled);
    }
  }
  /**
   * File fetch success callback that sets the file and sidebar visibility.
   * Also makes an optional request to fetch metadata editors
   *
   * @private
   * @param {Object} file - Box file
   * @return {void}
   */


  /**
   * Fetches a file
   *
   * @private
   * @param {Object|void} [fetchOptions] - Fetch options
   * @return {void}
   */
  fetchFile() {
    let fetchOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      fileId
    } = this.props;
    this.setState({
      isLoading: true
    });

    if (fileId && _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].canHaveSidebar(this.props)) {
      this.api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.errorCallback, _objectSpread(_objectSpread({}, fetchOptions), {}, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_FIELDS_TO_FETCH"]
      }));
    }
  }
  /**
   * Refreshes the sidebar panel
   * @returns {void}
   */


  refresh() {
    if (this.sidebarRef) {
      this.sidebarRef.refresh();
    }
  }
  /**
   * Renders the sidebar
   *
   * @private
   * @inheritdoc
   * @return {Element}
   */


  render() {
    const {
      activitySidebarProps,
      additionalTabs,
      className,
      currentUser,
      defaultView,
      detailsSidebarProps,
      fileId,
      getPreview,
      getViewer,
      hasAdditionalTabs,
      hasActivityFeed,
      hasMetadata,
      hasNav,
      hasSkills,
      hasVersions,
      history,
      isDefaultOpen,
      language,
      messages,
      metadataSidebarProps,
      onAnnotationSelect,
      onVersionChange,
      onVersionHistoryClick,
      versionsSidebarProps
    } = this.props;
    const {
      file,
      isLoading,
      metadataEditors
    } = this.state;
    const initialPath = defaultView.charAt(0) === '/' ? defaultView : `/${defaultView}`;

    if (!file || !fileId || !_SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].shouldRenderSidebar(this.props, file, metadataEditors)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_Internationalize__WEBPACK_IMPORTED_MODULE_6__["default"], {
      language: language,
      messages: messages
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_api_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: this.api
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_nav_router__WEBPACK_IMPORTED_MODULE_8__["default"], {
      history: history,
      initialEntries: [initialPath]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      activitySidebarProps: activitySidebarProps,
      additionalTabs: additionalTabs,
      className: className,
      currentUser: currentUser,
      detailsSidebarProps: detailsSidebarProps,
      file: file,
      fileId: fileId,
      getPreview: getPreview,
      getViewer: getViewer,
      hasActivityFeed: hasActivityFeed,
      hasAdditionalTabs: hasAdditionalTabs,
      hasNav: hasNav,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      hasVersions: hasVersions,
      isDefaultOpen: isDefaultOpen,
      isLoading: isLoading,
      metadataEditors: metadataEditors,
      metadataSidebarProps: metadataSidebarProps,
      onAnnotationSelect: onAnnotationSelect,
      onVersionChange: onVersionChange,
      onVersionHistoryClick: onVersionHistoryClick,
      versionsSidebarProps: versionsSidebarProps,
      wrappedComponentRef: ref => {
        this.sidebarRef = ref;
      }
    }))));
  }

}

_defineProperty(ContentSidebar, "defaultProps", {
  activitySidebarProps: {},
  apiHost: _constants__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_HOSTNAME_API"],
  className: '',
  clientName: _constants__WEBPACK_IMPORTED_MODULE_10__["CLIENT_NAME_CONTENT_SIDEBAR"],
  defaultView: '',
  detailsSidebarProps: {},
  getPreview: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  getViewer: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  hasActivityFeed: false,
  hasAdditionalTabs: false,
  hasMetadata: false,
  hasNav: true,
  hasSkills: false,
  isDefaultOpen: true,
  metadataSidebarProps: {}
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_3___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_15__["withFeatureProvider"], Object(_common_logger__WEBPACK_IMPORTED_MODULE_16__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_14__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"])])(ContentSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/ContentSidebar.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/ContentSidebar.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/Sidebar.js":
/*!*************************************************!*\
  !*** ./src/elements/content-sidebar/Sidebar.js ***!
  \*************************************************/
/*! exports provided: SIDEBAR_FORCE_KEY, SIDEBAR_FORCE_VALUE_CLOSED, SIDEBAR_FORCE_VALUE_OPEN, SidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_KEY", function() { return SIDEBAR_FORCE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_VALUE_CLOSED", function() { return SIDEBAR_FORCE_VALUE_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_VALUE_OPEN", function() { return SIDEBAR_FORCE_VALUE_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _utils_LocalStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/LocalStore */ "./src/utils/LocalStore.js");
/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarNav */ "./src/elements/content-sidebar/SidebarNav.js");
/* harmony import */ var _SidebarPanels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarPanels */ "./src/elements/content-sidebar/SidebarPanels.js");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Component
 * @author Box
 */













const SIDEBAR_FORCE_KEY = 'bcs.force';
const SIDEBAR_FORCE_VALUE_CLOSED = 'closed';
const SIDEBAR_FORCE_VALUE_OPEN = 'open';

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "id", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5___default()('bcs_'));

    _defineProperty(this, "sidebarPanels", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "store", new _utils_LocalStore__WEBPACK_IMPORTED_MODULE_8__["default"]());

    _defineProperty(this, "getUrlPrefix", pathname => {
      const basePath = pathname.substring(1).split('/')[0];
      return basePath;
    });

    _defineProperty(this, "handleVersionHistoryClick", event => {
      const {
        file,
        history
      } = this.props;
      const {
        file_version: currentVersion
      } = file;
      const fileVersionSlug = currentVersion ? `/${currentVersion.id}` : '';
      const urlPrefix = this.getUrlPrefix(history.location.pathname);

      if (event.preventDefault) {
        event.preventDefault();
      }

      history.push(`/${urlPrefix}/versions${fileVersionSlug}`);
    });

    this.state = {
      isDirty: this.getLocationState('open') || false
    };
    this.setForcedByLocation();
  }

  componentDidUpdate(prevProps) {
    const {
      fileId,
      history,
      location
    } = this.props;
    const {
      fileId: prevFileId,
      location: prevLocation
    } = prevProps;
    const {
      isDirty
    } = this.state; // User navigated to a different file without ever navigating the sidebar

    if (!isDirty && fileId !== prevFileId && location.pathname !== '/') {
      history.replace({
        pathname: '/',
        state: {
          silent: true
        }
      });
    } // User navigated or toggled the sidebar intentionally, internally or externally


    if (location !== prevLocation && !this.getLocationState('silent')) {
      this.setForcedByLocation();
      this.setState({
        isDirty: true
      });
    }
  }

  /**
   * Getter for location state properties.
   *
   * NOTE: Each location on the history stack has its own optional state object that is wholly separate from
   * this component's internal state. Values on the location state object can persist even between refreshes
   * when using certain history contexts, such as BrowserHistory.
   *
   * @param key - Optionally get a specific key value from state
   * @returns {any} - The location state or state key value
   */
  getLocationState(key) {
    const {
      location
    } = this.props;
    const {
      state: locationState = {}
    } = location;
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(locationState, key);
  }
  /**
   * Getter/setter for sidebar forced state
   *
   * @param isOpen - Optionally set the sidebar to open/closed
   * @returns {string|null} - The sidebar open/closed state
   */


  isForced(isOpen) {
    if (isOpen !== undefined) {
      this.store.setItem(SIDEBAR_FORCE_KEY, isOpen ? SIDEBAR_FORCE_VALUE_OPEN : SIDEBAR_FORCE_VALUE_CLOSED);
    }

    return this.store.getItem(SIDEBAR_FORCE_KEY);
  }
  /**
   * Getter for whether the sidebar has been forced open
   * @returns {boolean} - True if the sidebar has been forced open
   */


  isForcedOpen() {
    return this.isForced() === SIDEBAR_FORCE_VALUE_OPEN;
  }
  /**
   * Getter for whether the sidebar has been forced open/closed previously
   * @returns {boolean} - True if the sidebar has been forced open/closed previously
   */


  isForcedSet() {
    return this.isForced() !== null;
  }
  /**
   * Refreshes the sidebar panel
   * @returns {void}
   */


  refresh() {
    let shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const {
      current: sidebarPanels
    } = this.sidebarPanels;

    if (sidebarPanels) {
      sidebarPanels.refresh(shouldRefreshCache);
    }
  }
  /**
   * Helper to set the local store open state based on the location open state, if defined
   */


  setForcedByLocation() {
    const isLocationOpen = this.getLocationState('open');

    if (isLocationOpen !== undefined && isLocationOpen !== null) {
      this.isForced(isLocationOpen);
    }
  }

  render() {
    const {
      activitySidebarProps,
      additionalTabs,
      className,
      currentUser,
      detailsSidebarProps,
      file,
      fileId,
      getPreview,
      getViewer,
      hasAdditionalTabs,
      hasNav,
      hasVersions,
      isDefaultOpen,
      isLoading,
      metadataEditors,
      metadataSidebarProps,
      onAnnotationSelect,
      onVersionChange,
      versionsSidebarProps
    } = this.props;
    const isOpen = this.isForcedSet() ? this.isForcedOpen() : !!isDefaultOpen;
    const hasActivity = _SidebarUtils__WEBPACK_IMPORTED_MODULE_11__["default"].canHaveActivitySidebar(this.props);
    const hasDetails = _SidebarUtils__WEBPACK_IMPORTED_MODULE_11__["default"].canHaveDetailsSidebar(this.props);
    const hasMetadata = _SidebarUtils__WEBPACK_IMPORTED_MODULE_11__["default"].shouldRenderMetadataSidebar(this.props, metadataEditors);
    const hasSkills = _SidebarUtils__WEBPACK_IMPORTED_MODULE_11__["default"].shouldRenderSkillsSidebar(this.props, file);
    const onVersionHistoryClick = hasVersions ? this.handleVersionHistoryClick : this.props.onVersionHistoryClick;
    const styleClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('be bcs', className, {
      'bcs-is-open': isOpen
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
      id: this.id,
      className: styleClassName,
      "data-testid": "preview-sidebar"
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-loading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, hasNav && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNav__WEBPACK_IMPORTED_MODULE_9__["default"], {
      additionalTabs: additionalTabs,
      elementId: this.id,
      fileId: fileId,
      hasActivity: hasActivity,
      hasAdditionalTabs: hasAdditionalTabs,
      hasDetails: hasDetails,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      isOpen: isOpen
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarPanels__WEBPACK_IMPORTED_MODULE_10__["default"], {
      activitySidebarProps: activitySidebarProps,
      currentUser: currentUser,
      elementId: this.id,
      detailsSidebarProps: detailsSidebarProps,
      file: file,
      fileId: fileId,
      getPreview: getPreview,
      getViewer: getViewer,
      hasActivity: hasActivity,
      hasDetails: hasDetails,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      hasVersions: hasVersions,
      isOpen: isOpen,
      key: file.id,
      metadataSidebarProps: metadataSidebarProps,
      onAnnotationSelect: onAnnotationSelect,
      onVersionChange: onVersionChange,
      onVersionHistoryClick: onVersionHistoryClick,
      ref: this.sidebarPanels,
      versionsSidebarProps: versionsSidebarProps
    })));
  }

}

_defineProperty(Sidebar, "defaultProps", {
  annotatorState: {},
  isDefaultOpen: true,
  isLoading: false,
  getAnnotationsMatchPath: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  getAnnotationsPath: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_12__["withFeatureConsumer"], react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"]])(Sidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarContent.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarContent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContent.scss */ "./src/elements/content-sidebar/SidebarContent.scss");
/* harmony import */ var _SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["actions", "children", "className", "title", "elementId", "sidebarView"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Preview sidebar content component
 * @author Box
 */




const SidebarContent = _ref => {
  let {
    actions,
    children,
    className,
    title,
    elementId,
    sidebarView
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const label = `${elementId}${elementId === '' ? '' : '_'}${sidebarView}`;
  const id = `${label}-content`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    "aria-labelledby": label,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-content', className),
    "data-testid": "bcs-content",
    id: id,
    role: "tabpanel"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-content-header"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    className: "bcs-title"
  }, title), actions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-scroll-content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-scroll-content"
  }, children)));
};

SidebarContent.defaultProps = {
  elementId: '',
  sidebarView: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarContent.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarContent.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoading.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoading.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.tsx");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarLoading.scss */ "./src/elements/content-sidebar/SidebarLoading.scss");
/* harmony import */ var _SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file a placeholder component which will be displayed while a code splitted sidebar chunk is being loaded asyncronously
 * @author Box
 */






const SidebarLoading = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-sidebar-loading"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLoading);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoading.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoading.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoadingError.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoadingError.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_error_boundary_DefaultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/error-boundary/DefaultError */ "./src/elements/common/error-boundary/DefaultError.js");
/* harmony import */ var _SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarLoadingError.scss */ "./src/elements/content-sidebar/SidebarLoadingError.scss");
/* harmony import */ var _SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2__);




const SidebarLoadingError = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-loading-error"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_error_boundary_DefaultError__WEBPACK_IMPORTED_MODULE_1__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (SidebarLoadingError);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoadingError.scss":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoadingError.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNav.js":
/*!****************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNav.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _additional_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additional-tabs */ "./src/elements/content-sidebar/additional-tabs/index.js");
/* harmony import */ var _icons_general_IconChatRound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconChatRound */ "./src/icons/general/IconChatRound.tsx");
/* harmony import */ var _icons_general_IconDocInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconDocInfo */ "./src/icons/general/IconDocInfo.tsx");
/* harmony import */ var _icons_general_IconMagicWand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconMagicWand */ "./src/icons/general/IconMagicWand.tsx");
/* harmony import */ var _icons_general_IconMetadataThick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconMetadataThick */ "./src/icons/general/IconMetadataThick.tsx");
/* harmony import */ var _SidebarNavButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarNavButton */ "./src/elements/content-sidebar/SidebarNavButton.js");
/* harmony import */ var _SidebarNavSign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarNavSign */ "./src/elements/content-sidebar/SidebarNavSign.tsx");
/* harmony import */ var _SidebarNavTablist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarNavTablist */ "./src/elements/content-sidebar/SidebarNavTablist.js");
/* harmony import */ var _SidebarToggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarToggle */ "./src/elements/content-sidebar/SidebarToggle.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _SidebarNav_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SidebarNav.scss */ "./src/elements/content-sidebar/SidebarNav.scss");
/* harmony import */ var _SidebarNav_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_SidebarNav_scss__WEBPACK_IMPORTED_MODULE_15__);
/**
 * 
 * @file Preview sidebar nav component
 * @author Box
 */

















const SidebarNav = _ref => {
  let {
    additionalTabs,
    elementId,
    fileId,
    hasActivity,
    hasAdditionalTabs,
    hasDetails,
    hasMetadata,
    hasSkills,
    intl,
    isOpen,
    onNavigate
  } = _ref;
  const {
    blockedReason: boxSignBlockedReason,
    enabled: hasBoxSign,
    onClick: onBoxSignClick,
    status: boxSignStatus,
    targetingApi: boxSignTargetingApi
  } = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_14__["useFeatureConfig"])('boxSign');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav",
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarNavLabel)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavTablist__WEBPACK_IMPORTED_MODULE_9__["default"], {
    elementId: elementId,
    isOpen: isOpen,
    onNavigate: onNavigate
  }, hasActivity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_NAV_TARGETS"].ACTIVITY,
    "data-testid": "sidebaractivity",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_VIEW_ACTIVITY"],
    tooltip: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarActivityTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconChatRound__WEBPACK_IMPORTED_MODULE_3__["default"], null)), hasDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_NAV_TARGETS"].DETAILS,
    "data-testid": "sidebardetails",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_VIEW_DETAILS"],
    tooltip: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarDetailsTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconDocInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null)), hasSkills && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_NAV_TARGETS"].SKILLS,
    "data-testid": "sidebarskills",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_VIEW_SKILLS"],
    tooltip: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarSkillsTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMagicWand__WEBPACK_IMPORTED_MODULE_5__["default"], null)), hasMetadata && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_NAV_TARGETS"].METADATA,
    "data-testid": "sidebarmetadata",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_VIEW_METADATA"],
    tooltip: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_11__["default"].sidebarMetadataTitle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMetadataThick__WEBPACK_IMPORTED_MODULE_6__["default"], null))), hasBoxSign && onBoxSignClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavSign__WEBPACK_IMPORTED_MODULE_8__["default"], {
    blockedReason: boxSignBlockedReason,
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_NAV_TARGETS"].SIGN,
    onClick: () => onBoxSignClick({
      fileId
    }),
    status: boxSignStatus,
    targetingApi: boxSignTargetingApi
  })), hasAdditionalTabs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-overflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_additional_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: fileId,
    tabs: additionalTabs
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarToggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isOpen: isOpen
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(SidebarNav));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNav.scss":
/*!******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNav.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavButton.js":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nav-button */ "./src/elements/common/nav-button/index.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.tsx");
/* harmony import */ var _SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarNavButton.scss */ "./src/elements/content-sidebar/SidebarNavButton.scss");
/* harmony import */ var _SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Preview sidebar nav button component
 * @author Box
 */





const SidebarNavButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
  const {
    'data-resin-target': dataResinTarget,
    'data-testid': dataTestId,
    children,
    elementId = '',
    isOpen,
    sidebarView,
    tooltip
  } = props;
  const sidebarPath = `/${sidebarView}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: sidebarPath
  }, _ref => {
    let {
      match
    } = _ref;
    const isMatch = !!match;

    const isActive = () => isMatch && !!isOpen;

    const isActiveValue = isActive();
    const isExactMatch = isMatch && match.isExact;
    const id = `${elementId}${elementId === '' ? '' : '_'}${sidebarView}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "middle-left",
      text: tooltip,
      isTabbable: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_nav_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "bcs-is-selected",
      "aria-selected": isActiveValue,
      "aria-controls": `${id}-content`,
      "aria-label": tooltip,
      className: "bcs-NavButton",
      "data-resin-target": dataResinTarget,
      "data-testid": dataTestId,
      getDOMRef: ref,
      id: id,
      isActive: isActive,
      replace: isExactMatch,
      role: "tab",
      tabIndex: isActiveValue ? '0' : '-1',
      to: {
        pathname: sidebarPath,
        state: {
          open: true
        }
      },
      type: "button"
    }, children));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (SidebarNavButton);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavButton.scss":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavButton.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavSign.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavSign.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavSign.tsx":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavSign.tsx ***!
  \*********************************************************/
/*! exports provided: PlaceholderTooltip, SidebarNavSign, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderTooltip", function() { return PlaceholderTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavSign", function() { return SidebarNavSign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _icon_logo_BoxSign28__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon/logo/BoxSign28 */ "./src/icon/logo/BoxSign28.tsx");
/* harmony import */ var _icon_fill_Sign16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icon/fill/Sign16 */ "./src/icon/fill/Sign16.tsx");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _features_targeting_TargetedClickThroughGuideTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/targeting/TargetedClickThroughGuideTooltip */ "./src/features/targeting/TargetedClickThroughGuideTooltip.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _SidebarNavSign_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarNavSign.scss */ "./src/elements/content-sidebar/SidebarNavSign.scss");
/* harmony import */ var _SidebarNavSign_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SidebarNavSign_scss__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["blockedReason", "intl", "status", "targetingApi"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






 // @ts-ignore Module is written in Flow


 // @ts-ignore Module is written in Flow



const PlaceholderTooltip = _ref => {
  let {
    children
  } = _ref;
  return children;
};
function SidebarNavSign(_ref2) {
  let {
    blockedReason,
    intl,
    status,
    targetingApi
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);

  const isSignDisabled = !!blockedReason;
  const isTargeted = targetingApi && targetingApi.canShow;
  const FtuxTooltip = !isSignDisabled && isTargeted ? _features_targeting_TargetedClickThroughGuideTooltip__WEBPACK_IMPORTED_MODULE_6__["default"] : PlaceholderTooltip;
  const label = intl.formatMessage(status === 'active' ? _messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignSignature : _messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignRequest);
  const buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-SidebarNavSign', {
    'bdl-is-disabled': isSignDisabled
  });
  let tooltipMessage = label;

  switch (blockedReason) {
    case 'shield-download':
    case 'shared-link':
    case 'shield-sign':
      tooltipMessage = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignSecurityBlockedTooltip);
      break;

    case 'watermark':
      tooltipMessage = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignWatermarkBlockedTooltip);
      break;

    default:
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FtuxTooltip, {
    body: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignFtuxBody),
    position: _components_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipPosition"].MIDDLE_LEFT,
    shouldTarget: isTargeted,
    title: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_8__["default"].boxSignFtuxTitle),
    useTargetingApi: () => targetingApi
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isDisabled: isTargeted,
    position: _components_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipPosition"].MIDDLE_LEFT,
    text: tooltipMessage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    "aria-label": label,
    className: buttonClassName,
    isDisabled: isSignDisabled
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_logo_BoxSign28__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "bcs-SidebarNavSign-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_fill_Sign16__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 20,
    height: 20,
    className: "bcs-SidebarNavSign-icon--grayscale"
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SidebarNavSign));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavTablist.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavTablist.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar nav tablist Component
 * @author Box
 */




const SidebarNavTablist = _ref => {
  let {
    children,
    history,
    elementId,
    isOpen,
    onNavigate
  } = _ref;
  const refs = [];
  const tablist = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, child => child && `/${child.props.sidebarView}`);

  const handleKeyDown = event => {
    const currentIndex = tablist.indexOf(history.location.pathname);
    const {
      length
    } = tablist;
    let nextIndex = currentIndex;

    switch (event.key) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].arrowUp:
        nextIndex = (currentIndex - 1 + length) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].arrowDown:
        nextIndex = (currentIndex + 1) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "aria-orientation": "vertical",
    className: "bcs-SidebarNav-main",
    role: "tablist",
    tabIndex: "0",
    onKeyDown: handleKeyDown
  }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, tab => {
    if (!tab) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](tab, _objectSpread({
      elementId,
      isOpen,
      onNavigate,
      ref: ref => {
        refs.push(ref);
      }
    }, tab.props));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SidebarNavTablist));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarPanels.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarPanels.js ***!
  \*******************************************************/
/*! exports provided: SidebarPanelsComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPanelsComponent", function() { return SidebarPanels; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _withSidebarAnnotations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withSidebarAnnotations */ "./src/elements/content-sidebar/withSidebarAnnotations.js");
/* harmony import */ var _common_annotator_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/annotator-context */ "./src/elements/common/annotator-context/index.ts");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/routing */ "./src/elements/common/routing/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Panels component
 * @author Box
 */









// TODO: place into code splitting logic
const BASE_EVENT_NAME = '_JS_LOADING';
const MARK_NAME_JS_LOADING_DETAILS = `${_constants__WEBPACK_IMPORTED_MODULE_8__["ORIGIN_DETAILS_SIDEBAR"]}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_ACTIVITY = `${_constants__WEBPACK_IMPORTED_MODULE_8__["ORIGIN_ACTIVITY_SIDEBAR"]}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_SKILLS = `${_constants__WEBPACK_IMPORTED_MODULE_8__["ORIGIN_SKILLS_SIDEBAR"]}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_METADATA = `${_constants__WEBPACK_IMPORTED_MODULE_8__["ORIGIN_METADATA_SIDEBAR"]}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_VERSIONS = `${_constants__WEBPACK_IMPORTED_MODULE_8__["ORIGIN_VERSIONS_SIDEBAR"]}${BASE_EVENT_NAME}`;
const URL_TO_FEED_ITEM_TYPE = {
  annotations: 'annotation',
  comments: 'comment',
  tasks: 'task'
};
const LoadableDetailsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"], MARK_NAME_JS_LOADING_DETAILS);
const LoadableActivitySidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"], MARK_NAME_JS_LOADING_ACTIVITY);
const LoadableSkillsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"], MARK_NAME_JS_LOADING_SKILLS);
const LoadableMetadataSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"], MARK_NAME_JS_LOADING_METADATA);
const LoadableVersionsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_3__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_VERSIONS"], MARK_NAME_JS_LOADING_VERSIONS);

class SidebarPanels extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "activitySidebar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "detailsSidebar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "metadataSidebar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "state", {
      isInitialized: false
    });

    _defineProperty(this, "versionsSidebar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());
  }

  componentDidMount() {
    this.setState({
      isInitialized: true
    });
  }
  /**
   * Refreshes the contents of the active sidebar
   * @returns {void}
   */


  refresh() {
    let shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const {
      current: activitySidebar
    } = this.activitySidebar;
    const {
      current: detailsSidebar
    } = this.detailsSidebar;
    const {
      current: metadataSidebar
    } = this.metadataSidebar;
    const {
      current: versionsSidebar
    } = this.versionsSidebar;

    if (activitySidebar) {
      activitySidebar.refresh(shouldRefreshCache);
    }

    if (detailsSidebar) {
      detailsSidebar.refresh();
    }

    if (metadataSidebar) {
      metadataSidebar.refresh();
    }

    if (versionsSidebar) {
      versionsSidebar.refresh();
    }
  }

  render() {
    const {
      activitySidebarProps,
      currentUser,
      detailsSidebarProps,
      elementId,
      file,
      fileId,
      getPreview,
      getViewer,
      hasActivity,
      hasDetails,
      hasMetadata,
      hasSkills,
      hasVersions,
      isOpen,
      metadataSidebarProps,
      onAnnotationSelect,
      onVersionChange,
      onVersionHistoryClick,
      versionsSidebarProps
    } = this.props;
    const {
      isInitialized
    } = this.state;

    if (!isOpen || !hasActivity && !hasDetails && !hasMetadata && !hasSkills && !hasVersions) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, hasSkills && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: `/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"]}`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableSkillsSidebar, {
        elementId: elementId,
        key: file.id,
        file: file,
        getPreview: getPreview,
        getViewer: getViewer,
        hasSidebarInitialized: isInitialized,
        startMarkName: MARK_NAME_JS_LOADING_SKILLS
      })
    }), hasActivity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: [`/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]}`, `/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]}/:activeFeedEntryType(annotations)/:fileVersionId/:activeFeedEntryId?`, `/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]}/:activeFeedEntryType(comments|tasks)/:activeFeedEntryId?`],
      render: _ref => {
        let {
          match
        } = _ref;
        const matchEntryType = match.params.activeFeedEntryType;
        const activeFeedEntryType = matchEntryType ? URL_TO_FEED_ITEM_TYPE[matchEntryType] : undefined;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableActivitySidebar, _extends({
          elementId: elementId,
          currentUser: currentUser,
          file: file,
          hasSidebarInitialized: isInitialized,
          onAnnotationSelect: onAnnotationSelect,
          onVersionChange: onVersionChange,
          onVersionHistoryClick: onVersionHistoryClick,
          ref: this.activitySidebar,
          startMarkName: MARK_NAME_JS_LOADING_ACTIVITY,
          activeFeedEntryId: match.params.activeFeedEntryId,
          activeFeedEntryType: match.params.activeFeedEntryId && activeFeedEntryType
        }, activitySidebarProps));
      }
    }), hasDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: `/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"]}`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableDetailsSidebar, _extends({
        elementId: elementId,
        fileId: fileId,
        hasSidebarInitialized: isInitialized,
        key: fileId,
        hasVersions: hasVersions,
        onVersionHistoryClick: onVersionHistoryClick,
        ref: this.detailsSidebar,
        startMarkName: MARK_NAME_JS_LOADING_DETAILS
      }, detailsSidebarProps))
    }), hasMetadata && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: `/${_constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"]}`,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableMetadataSidebar, _extends({
        elementId: elementId,
        fileId: fileId,
        hasSidebarInitialized: isInitialized,
        ref: this.metadataSidebar,
        startMarkName: MARK_NAME_JS_LOADING_METADATA
      }, metadataSidebarProps))
    }), hasVersions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/:sidebar(activity|details)/versions/:versionId?",
      render: _ref2 => {
        let {
          match
        } = _ref2;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableVersionsSidebar, _extends({
          fileId: fileId,
          hasSidebarInitialized: isInitialized,
          key: fileId,
          onVersionChange: onVersionChange,
          parentName: match.params.sidebar,
          ref: this.versionsSidebar,
          versionId: match.params.versionId
        }, versionsSidebarProps));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      render: () => {
        let redirect = '';

        if (hasSkills) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"];
        } else if (hasActivity) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"];
        } else if (hasDetails) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"];
        } else if (hasMetadata) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"];
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: {
            pathname: `/${redirect}`,
            state: {
              silent: true
            }
          }
        });
      }
    }));
  }

}


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([_withSidebarAnnotations__WEBPACK_IMPORTED_MODULE_4__["default"], _common_api_context__WEBPACK_IMPORTED_MODULE_6__["withAPIContext"], _common_annotator_context__WEBPACK_IMPORTED_MODULE_5__["withAnnotatorContext"], _common_routing__WEBPACK_IMPORTED_MODULE_7__["withRouterAndRef"]])(SidebarPanels));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarSection.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarSection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./src/icons/general/IconCaretDown.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarSection.scss */ "./src/elements/content-sidebar/SidebarSection.scss");
/* harmony import */ var _SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @deprecated, use Collapsible

/**
 * 
 * @file Preview sidebar section component
 * @author Box
 */







class SidebarSection extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @private
   * @return {ContentPreview}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleVisibility", () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    });

    this.state = {
      isOpen: props.isOpen
    };
  }
  /**
   * Click handler for toggling the section
   *
   * @private
   * @param {Event} event - click event
   * @return {void}
   */


  /**
   * Renders the section
   *
   * @private
   * @inheritdoc
   * @return {void}
   */
  render() {
    const {
      isOpen
    } = this.state;
    const {
      children,
      className,
      title,
      interactionTarget
    } = this.props;
    const sectionClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-section', {
      'bcs-section-open': isOpen
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: sectionClassName
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-expanded": isOpen,
      className: "bcs-section-title",
      "data-resin-target": interactionTarget,
      onClick: this.toggleVisibility,
      type: "button"
    }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: _constants__WEBPACK_IMPORTED_MODULE_4__["COLOR_999"],
      width: 8
    })), (isOpen || !title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-section-content"
    }, children));
  }

}

_defineProperty(SidebarSection, "defaultProps", {
  className: '',
  isOpen: true
});

/* harmony default export */ __webpack_exports__["default"] = (SidebarSection);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarSection.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarSection.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarToggle.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarToggle.js ***!
  \*******************************************************/
/*! exports provided: SidebarToggleComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleComponent", function() { return SidebarToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_sidebar_toggle_button_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar-toggle-button/SidebarToggleButton */ "./src/components/sidebar-toggle-button/SidebarToggleButton.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/**
 * 
 * @file Sidebar Toggle component
 * @author Box
 */





const SidebarToggle = _ref => {
  let {
    history,
    isOpen
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_sidebar_toggle_button_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_NAV_TARGETS"].TOGGLE,
    "data-testid": "sidebartoggle" // $FlowFixMe
    ,
    isOpen: isOpen,
    onClick: event => {
      event.preventDefault();
      history.replace({
        state: {
          open: !isOpen
        }
      });
    }
  });
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SidebarToggle));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarUtils.js":
/*!******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarUtils.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _common_async_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/async-load */ "./src/elements/common/async-load/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarLoading */ "./src/elements/content-sidebar/SidebarLoading.js");
/* harmony import */ var _SidebarLoadingError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLoadingError */ "./src/elements/content-sidebar/SidebarLoadingError.js");
/* harmony import */ var _skills_skillUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skillUtils */ "./src/elements/content-sidebar/skills/skillUtils.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Utility for sidebar
 * @author Box
 */










class SidebarUtils {
  /**
   * Determines if we can render the details sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */
  static canHaveDetailsSidebar(_ref) {
    let {
      detailsSidebarProps = {}
    } = _ref;
    const {
      hasProperties,
      hasAccessStats,
      hasClassification,
      hasVersions,
      hasNotices
    } = detailsSidebarProps;
    return !!hasProperties || !!hasAccessStats || !!hasClassification || !!hasVersions || !!hasNotices;
  }
  /**
   * Determines if we can render the metadata sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveMetadataSidebar(props) {
    return !!props.hasMetadata;
  }
  /**
   * Determines if we can render the activity sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveActivitySidebar(props) {
    return !!props.hasActivityFeed;
  }
  /**
   * Determines if we can render the skills sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveSkillsSidebar(props) {
    return !!props.hasSkills;
  }
  /**
   * Determines if we can render the sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should have a sidebar
   */


  static canHaveSidebar(props) {
    return SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.canHaveSkillsSidebar(props) || SidebarUtils.canHaveMetadataSidebar(props);
  }
  /**
   * Determines if we should bother rendering the skills sidebar.
   * Relies on props and file data.
   *
   * @private
   * @param {ContentSidebarProps} props - User passed in props
   * @param {BoxItem} file - box file
   * @return {Boolean} true if we should render
   */


  static shouldRenderSkillsSidebar(props, file) {
    return !!file && SidebarUtils.canHaveSkillsSidebar(props) && Object(_skills_skillUtils__WEBPACK_IMPORTED_MODULE_6__["hasSkills"])(file);
  }
  /**
   * Determines if we should bother rendering the metadata sidebar.
   * Relies on props and metadata data and feature enabled or not.
   *
   * @private
   * @param {ContentSidebarProps} props - User passed in props
   * @param {Array<MetadataEditor>} editors - metadata editors
   * @return {Boolean} true if we should render
   */


  static shouldRenderMetadataSidebar(props, editors) {
    const {
      metadataSidebarProps = {}
    } = props;
    const {
      isFeatureEnabled = true
    } = metadataSidebarProps;
    return SidebarUtils.canHaveMetadataSidebar(props) && (isFeatureEnabled || Array.isArray(editors) && editors.length > 0);
  }
  /**
   * Determines if we should bother rendering the sidebar.
   * Relies on props and file data.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @param {BoxItem} file - box file
   * @param {Array<MetadataEditor>} editors - metadata editors
   * @return {Boolean} true if we should fetch or render
   */


  static shouldRenderSidebar(props, file, editors) {
    return !!file && (SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.shouldRenderSkillsSidebar(props, file) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.shouldRenderMetadataSidebar(props, editors));
  }
  /**
   * Gets the title for a given sidebar view
   *
   * @param {string} view - the view name
   * @return {React.Node} - the node to render
   */


  static getTitleForView(view) {
    switch (view) {
      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarSkillsTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarDetailsTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarMetadataTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarActivityTitle);

      default:
        return null;
    }
  }
  /**
   * Marks and gets the loader for a given sidebar view
   *
   * @param {String} view - the view name
   * @param {String} markName -  the name to be used by performance.mark
   * @return {Function} - a function which will resolve the module to load
   */


  static getLoaderForView(view, markName) {
    Object(_utils_performance__WEBPACK_IMPORTED_MODULE_7__["mark"])(markName);
    let importFn;

    switch (view) {
      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"]:
        importFn = Promise.all(/*! import() | skills-sidebar */[__webpack_require__.e("vendors~activity-sidebar~skills-sidebar"), __webpack_require__.e("vendors~metadata-sidebar~skills-sidebar"), __webpack_require__.e("vendors~details-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~skills-sidebar"), __webpack_require__.e("skills-sidebar")]).then(__webpack_require__.bind(null, /*! ./SkillsSidebar */ "./src/elements/content-sidebar/SkillsSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"]:
        importFn = Promise.all(/*! import() | details-sidebar */[__webpack_require__.e("vendors~details-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~details-sidebar~skills-sidebar"), __webpack_require__.e("vendors~details-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar"), __webpack_require__.e("details-sidebar~metadata-sidebar"), __webpack_require__.e("details-sidebar")]).then(__webpack_require__.bind(null, /*! ./DetailsSidebar */ "./src/elements/content-sidebar/DetailsSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"]:
        importFn = Promise.all(/*! import() | metadata-sidebar */[__webpack_require__.e("vendors~activity-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~details-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~metadata-sidebar~skills-sidebar"), __webpack_require__.e("vendors~metadata-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar"), __webpack_require__.e("details-sidebar~metadata-sidebar"), __webpack_require__.e("metadata-sidebar")]).then(__webpack_require__.bind(null, /*! ./MetadataSidebar */ "./src/elements/content-sidebar/MetadataSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]:
        importFn = Promise.all(/*! import() | activity-sidebar */[__webpack_require__.e("vendors~activity-sidebar~skills-sidebar"), __webpack_require__.e("vendors~activity-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~activity-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~content-open-with~versions-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar"), __webpack_require__.e("activity-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar"), __webpack_require__.e("activity-sidebar")]).then(__webpack_require__.bind(null, /*! ./ActivitySidebar */ "./src/elements/content-sidebar/ActivitySidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_VERSIONS"]:
        importFn = Promise.all(/*! import() | versions-sidebar */[__webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~content-open-with~versions-sidebar"), __webpack_require__.e("activity-sidebar~versions-sidebar"), __webpack_require__.e("versions-sidebar")]).then(__webpack_require__.bind(null, /*! ./versions */ "./src/elements/content-sidebar/versions/index.js"));
        break;

      default:
        return Promise.resolve(null);
    }

    return importFn;
  }
  /**
   * Gets the component which async loads a given sidebar view
   *
   * @param {String} view - the view name
   * @param {String} markName -  the name to be used by performance.mark
   * @param {Object} props - additional props
   * @return {React.Node} - the node to render
   */


  static getAsyncSidebarContent(view, markName) {
    let props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(_common_async_load__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread({
      errorComponent: _SidebarLoadingError__WEBPACK_IMPORTED_MODULE_5__["default"],
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarLoading__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: this.getTitleForView(view)
      }),
      loader: () => this.getLoaderForView(view, markName)
    }, props));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarUtils);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTab.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.tsx");
/* harmony import */ var _AdditionalTabTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdditionalTabTooltip */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.js");
/* harmony import */ var _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdditionalTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js");
/* harmony import */ var _icon_fill_Apps16__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icon/fill/Apps16 */ "./src/icon/fill/Apps16.tsx");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/additional-tabs/messages.js");
/* harmony import */ var _AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdditionalTab.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss");
/* harmony import */ var _AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["callback", "id", "isLoading", "iconUrl", "ftuxTooltipData", "onImageLoad", "title"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar Additional Tab component
 * @author Box
 */










const BLOCKED_BY_SHEILD = 'BLOCKED_BY_SHIELD_ACCESS_POLICY';

class AdditionalTab extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isErrored: false
    });

    _defineProperty(this, "onImageError", () => {
      this.props.onImageLoad();
      this.setState({
        isErrored: true
      });
    });
  }

  isDisabled() {
    const {
      status
    } = this.props;
    return status === BLOCKED_BY_SHEILD;
  }

  getDisabledReason() {
    let reason = '';
    const {
      status
    } = this.props;

    switch (status) {
      case BLOCKED_BY_SHEILD:
        reason = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].blockedByShieldAccessPolicy);
        break;

      default: // noop

    }

    return reason;
  }

  getTabIcon() {
    const {
      id,
      iconUrl,
      onImageLoad,
      title
    } = this.props;
    const {
      isErrored
    } = this.state;
    let TabIcon;

    if (isErrored) {
      TabIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: false
      });
    } else if (id && id > 0) {
      TabIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "bdl-AdditionalTab-icon",
        src: iconUrl,
        onError: this.onImageError,
        onLoad: onImageLoad,
        alt: title
      });
    } else {
      TabIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Apps16__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray50"],
        width: 20,
        height: 20
      });
    }

    return TabIcon;
  }

  render() {
    const _this$props = this.props,
          {
      callback: callbackFn,
      id,
      isLoading,
      iconUrl,
      ftuxTooltipData,
      onImageLoad,
      title
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const isDisabled = this.isDisabled();
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-AdditionalTab', {
      'bdl-is-hidden': isLoading,
      'bdl-is-disabled': isDisabled,
      'bdl-is-overflow': id && id < 0
    });
    const tooltipText = isDisabled ? this.getDisabledReason() : title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AdditionalTabTooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultTooltipText: tooltipText,
      ftuxTooltipData: ftuxTooltipData,
      isFtuxVisible: !isLoading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": title,
      className: className,
      "data-testid": "additionaltab",
      type: "button",
      isDisabled: isDisabled,
      onClick: () => callbackFn({
        id,
        callbackData: rest
      })
    }, this.getTabIcon()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTab);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/**
 * 
 * @file Preview sidebar additional tab placeholder component
 * @author Box
 */



const AdditionalTabPlaceholder = _ref => {
  let {
    isLoading = false
  } = _ref;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-AdditionalTabPlaceholder-icon', {
    'bdl-AdditionalTabPlaceholder-icon--loading': isLoading
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-AdditionalTabPlaceholder",
    "data-testid": "additionaltabplaceholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabPlaceholder);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Tooltip */ "./src/elements/common/Tooltip.js");
/* harmony import */ var _features_targeting_TargetedClickThroughGuideTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../features/targeting/TargetedClickThroughGuideTooltip */ "./src/features/targeting/TargetedClickThroughGuideTooltip.js");
/* harmony import */ var _AdditionalTabTooltip_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdditionalTabTooltip.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.scss");
/* harmony import */ var _AdditionalTabTooltip_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTabTooltip_scss__WEBPACK_IMPORTED_MODULE_3__);
/**
 * 
 * @file Sidebar Additional Tab FTUX tooltip
 * @author Box
 */





const AdditionalTabTooltip = _ref => {
  let {
    children,
    defaultTooltipText,
    isFtuxVisible,
    ftuxTooltipData
  } = _ref;

  if (!isFtuxVisible || !ftuxTooltipData || !ftuxTooltipData.targetingApi().canShow) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
      position: "middle-left",
      text: defaultTooltipText
    }, children);
  }

  const {
    targetingApi,
    text
  } = ftuxTooltipData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_targeting_TargetedClickThroughGuideTooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bdl-AdditionalTabTooltip",
    body: text,
    position: "middle-right",
    shouldTarget: true,
    useTargetingApi: targetingApi
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabTooltip);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.scss":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabTooltip.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionalTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalTab */ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.js");
/* harmony import */ var _AdditionalTabsLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdditionalTabsLoading */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js");
/* harmony import */ var _AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdditionalTabs.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss");
/* harmony import */ var _AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Preview sidebar additional tabs component
 * @author Box
 */





class AdditionalTabs extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "numLoadedTabs", 0);

    _defineProperty(this, "onImageLoad", () => {
      const {
        tabs
      } = this.props;

      if (!tabs) {
        return;
      }

      const hasMoreTab = tabs.find(tab => tab.id < 0 && !tab.iconUrl);
      const numTabs = tabs.length - (hasMoreTab ? 1 : 0);
      this.numLoadedTabs += 1;

      if (this.numLoadedTabs === numTabs) {
        this.setState({
          isLoading: false
        });
      }
    });

    this.state = {
      isLoading: true
    };
  }
  /**
   * Handles an individual icon image load
   *
   * @return {void}
   */


  render() {
    const {
      tabs
    } = this.props;
    const {
      isLoading
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bdl-AdditionalTabs"
    }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdditionalTabsLoading__WEBPACK_IMPORTED_MODULE_2__["default"], null), tabs && tabs.map(tabData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdditionalTab__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: tabData.id,
      onImageLoad: this.onImageLoad,
      isLoading: isLoading
    }, tabData))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabs);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js":
/*!*******************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js");
/* harmony import */ var _MoreTabPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js");
/* harmony import */ var _AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdditionalTabsLoading.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss");
/* harmony import */ var _AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3__);
/**
 * 
 * @file Preview sidebar additional tabs loading component
 * @author Box
 */



 // Loading layout for the sidebar's additional tabs

const LOADING_TABS = [_AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _MoreTabPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"]];

const AdditionalTabsLoading = () => {
  return LOADING_TABS.map((LoadingComponent, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingComponent, {
    isLoading: true,
    key: idx
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabsLoading);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.tsx");
/**
 * 
 * @file Preview sidebar more tabs loading component
 * @author Box
 */




const MoreTabPlaceholder = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-AdditionalTabPlaceholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray10"],
    className: "bdl-AdditionalTabPlaceholder-moreIcon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MoreTabPlaceholder);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/index.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdditionalTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdditionalTabs */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AdditionalTabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/messages.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/messages.js ***!
  \******************************************************************/
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
  blockedByShieldAccessPolicy: {
    "id": "be.additionalTab.blockedByShieldAccessPolicy",
    "defaultMessage": "Use of this app is blocked due to a security policy."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/index.js":
/*!***********************************************!*\
  !*** ./src/elements/content-sidebar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentSidebar */ "./src/elements/content-sidebar/ContentSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ContentSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/messages.js":
/*!**************************************************!*\
  !*** ./src/elements/content-sidebar/messages.js ***!
  \**************************************************/
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
  activitySidebarFilterOptionAll: {
    "id": "be.activitySidebarFilter.status.all",
    "defaultMessage": "All Comments"
  },
  activitySidebarFilterOptionOpen: {
    "id": "be.activitySidebarFilter.status.open",
    "defaultMessage": "Unresolved Comments"
  },
  activitySidebarFilterOptionResolved: {
    "id": "be.activitySidebarFilter.status.resolved",
    "defaultMessage": "Resolved Comments"
  },
  boxSignFtuxBody: {
    "id": "be.contentSidebar.boxSignFtuxBody",
    "defaultMessage": "Sign documents or send signature requests, right from where your content lives"
  },
  boxSignFtuxTitle: {
    "id": "be.contentSidebar.boxSignFtuxTitle",
    "defaultMessage": "Box Sign - Secure, seamless e-signatures in Box"
  },
  boxSignRequest: {
    "id": "be.contentSidebar.boxSignRequest",
    "defaultMessage": "Request Signature"
  },
  boxSignSignature: {
    "id": "be.contentSidebar.boxSignSignature",
    "defaultMessage": "Sign"
  },
  boxSignSecurityBlockedTooltip: {
    "id": "be.contentSidebar.boxSignSecurityBlockedTooltip",
    "defaultMessage": "This action is unavailable due to a security policy."
  },
  boxSignWatermarkBlockedTooltip: {
    "id": "be.contentSidebar.boxSignWatermarkBlockedTooltip",
    "defaultMessage": "This action is unavailable, because the file is watermarked."
  },
  tasksAddTask: {
    "id": "be.contentSidebar.addTask",
    "defaultMessage": "Add Task"
  },
  taskAddTaskGeneral: {
    "id": "be.contentSidebar.addTask.general",
    "defaultMessage": "General Task"
  },
  taskAddTaskGeneralDescription: {
    "id": "be.contentSidebar.addTask.general.description",
    "defaultMessage": "Assignees will be responsible for marking tasks as complete"
  },
  taskAddTaskApproval: {
    "id": "be.contentSidebar.addTask.approval",
    "defaultMessage": "Approval Task"
  },
  taskAddTaskApprovalDescription: {
    "id": "be.contentSidebar.addTask.approval.description",
    "defaultMessage": "Assignees will be responsible for approving or rejecting tasks"
  },
  tasksCreateGeneralTaskFormTitle: {
    "id": "be.contentSidebar.addTask.general.title",
    "defaultMessage": "Create General Task"
  },
  tasksCreateApprovalTaskFormTitle: {
    "id": "be.contentSidebar.addTask.approval.title",
    "defaultMessage": "Create Approval Task"
  },
  tasksEditApprovalTaskFormTitle: {
    "id": "be.contentSidebar.editTask.approval.title",
    "defaultMessage": "Modify Approval Task"
  },
  tasksEditGeneralTaskFormTitle: {
    "id": "be.contentSidebar.editTask.general.title",
    "defaultMessage": "Modify General Task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/skillUtils.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/skills/skillUtils.js ***!
  \***********************************************************/
/*! exports provided: hasSkills, isValidSkillsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSkills", function() { return hasSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidSkillsCard", function() { return isValidSkillsCard; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 
 * @file Skills utils
 * @author Box
 */


/**
 * Returns true if its a valid skills card.
 *
 * @param {SkillCard} card - box skill card
 * @return {boolean} if its valid skills card
 */
const isValidSkillsCard = (file, card) => {
  const fileVersion = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file, 'file_version.id');
  const skillCardFileVersion = card.file_version ? card.file_version.id : fileVersion;
  return fileVersion === skillCardFileVersion && (!!card.status || Array.isArray(card.entries));
};
/**
 * Returns true if there are valid skills to show.
 *
 * @param {BoxItem} file - box file
 * @return {boolean} if there are valid skills to show
 */


const hasSkills = file => {
  const cards = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file, 'metadata.global.boxSkillsCards.cards', []);
  return Array.isArray(cards) && cards.length > 0 && cards.some(card => isValidSkillsCard(file, card));
};



/***/ }),

/***/ "./src/elements/content-sidebar/withSidebarAnnotations.js":
/*!****************************************************************!*\
  !*** ./src/elements/content-sidebar/withSidebarAnnotations.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withSidebarAnnotations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function withSidebarAnnotations(WrappedComponent) {
  class WithSidebarAnnotations extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
      super(props);

      _defineProperty(this, "sidebarPanels", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

      _defineProperty(this, "redirectDeeplinkedAnnotation", () => {
        const {
          file,
          getAnnotationsPath,
          getAnnotationsMatchPath,
          history,
          location
        } = this.props;
        const match = getAnnotationsMatchPath(location);
        const annotationId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(match, 'params.annotationId');
        const currentFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'file_version.id');
        const fileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(match, 'params.fileVersionId');

        if (fileVersionId && fileVersionId !== currentFileVersionId) {
          history.replace(getAnnotationsPath(currentFileVersionId, annotationId));
        }
      });

      _defineProperty(this, "updateActiveAnnotation", () => {
        const {
          annotatorState: {
            activeAnnotationFileVersionId,
            activeAnnotationId
          },
          file,
          getAnnotationsMatchPath,
          getAnnotationsPath,
          history,
          location
        } = this.props;
        const match = getAnnotationsMatchPath(location);
        const currentFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'file_version.id');
        const defaultFileVersionId = activeAnnotationFileVersionId || currentFileVersionId;
        const fileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(match, 'params.fileVersionId', defaultFileVersionId);
        const newLocationState = activeAnnotationId ? {
          open: true
        } : location.state; // Update the location pathname and open state if transitioning to an active annotation id, force the sidebar open

        history.push({
          pathname: getAnnotationsPath(fileVersionId, activeAnnotationId),
          state: newLocationState
        });
      });

      _defineProperty(this, "updateActiveVersion", () => {
        const {
          api,
          file,
          fileId,
          getAnnotationsMatchPath,
          getAnnotationsPath,
          history,
          location,
          onVersionChange
        } = this.props;
        const feedAPI = api.getFeedAPI(false);
        const match = getAnnotationsMatchPath(location);
        const currentFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'file_version.id');
        const fileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(match, 'params.fileVersionId');
        const {
          items: feedItems = []
        } = feedAPI.getCachedItems(fileId) || {};
        const version = feedItems.filter(item => item.type === 'file_version').find(item => item.id === fileVersionId);

        if (version) {
          onVersionChange(version, {
            currentVersionId: currentFileVersionId,
            updateVersionToCurrent: () => history.push(getAnnotationsPath(currentFileVersionId))
          });
        }
      });

      this.redirectDeeplinkedAnnotation();
    }

    componentDidUpdate(prevProps) {
      const {
        annotatorState,
        fileId,
        getAnnotationsMatchPath,
        location,
        onVersionChange
      } = this.props;
      const {
        annotatorState: prevAnnotatorState,
        fileId: prevFileId,
        location: prevLocation
      } = prevProps;
      const {
        activeAnnotationId,
        annotation
      } = annotatorState;
      const {
        activeAnnotationId: prevActiveAnnotationId,
        annotation: prevAnnotation
      } = prevAnnotatorState;
      const match = getAnnotationsMatchPath(location);
      const prevMatch = getAnnotationsMatchPath(prevLocation);
      const fileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(match, 'params.fileVersionId');
      const hasActiveAnnotationChanged = prevActiveAnnotationId !== activeAnnotationId;
      const isAnnotationsPath = !!match;
      const isTransitioningToAnnotationPath = activeAnnotationId && !isAnnotationsPath;
      const prevFileVersionId = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(prevMatch, 'params.fileVersionId');

      if (annotation && prevAnnotation !== annotation) {
        this.addAnnotation();
      } // Active annotation id changed. If location is currently an annotation path or
      // if location is not currently an annotation path but the active annotation id
      // transitioned from falsy to truthy, update the location accordingly


      if (hasActiveAnnotationChanged && (isAnnotationsPath || isTransitioningToAnnotationPath)) {
        this.updateActiveAnnotation();
      }

      if (fileVersionId && prevFileVersionId !== fileVersionId) {
        this.updateActiveVersion();
      }

      if (prevFileId !== fileId) {
        // If the file id has changed, reset the current version id since the previous (possibly versioned)
        // location is no longer active
        onVersionChange(null);
      }
    }

    addAnnotation() {
      const {
        annotatorState: {
          action,
          annotation,
          meta: {
            requestId
          } = {}
        },
        api,
        currentUser,
        file,
        fileId,
        isOpen,
        location
      } = this.props;

      if (!requestId) {
        return;
      } // TODO: need to address in follow on -- currentUser may be undefined here but is never fetched for sure until ActivitySidebar


      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_4__["getBadUserError"])();
      }

      const feedAPI = api.getFeedAPI(false);
      const pathname = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(location, 'pathname', '');
      const isActivity = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(pathname, '/activity');
      const isPending = action === 'create_start';
      const {
        items: hasItems
      } = feedAPI.getCachedItems(fileId) || {};
      const {
        current
      } = this.sidebarPanels; // If there are existing items in the cache for this file, then patch the cache with the new annotation
      // If there are no cache entry for feeditems, then it is assumed that it has not yet been fetched.

      if (hasItems) {
        feedAPI.addAnnotation(file, currentUser, annotation, requestId, isPending);
      } // If the activity sidebar is currently open, then force it to refresh with the updated data


      if (current && isActivity && isOpen) {
        current.refresh(false);
      }
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, _extends({
        ref: this.sidebarPanels
      }, this.props));
    }

  }

  _defineProperty(WithSidebarAnnotations, "defaultProps", {
    annotatorState: {},
    getAnnotationsMatchPath: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    getAnnotationsPath: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
    onVersionChange: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
  });

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithSidebarAnnotations.displayName = `WithSidebarAnnotations(${displayName})`;
  return WithSidebarAnnotations;
}

/***/ }),

/***/ "./src/features/targeting/TargetedClickThroughGuideTooltip.js":
/*!********************************************************************!*\
  !*** ./src/features/targeting/TargetedClickThroughGuideTooltip.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hocs */ "./src/features/targeting/hocs/index.js");
/* harmony import */ var _components_guide_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/guide-tooltip */ "./src/components/guide-tooltip/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs__WEBPACK_IMPORTED_MODULE_1__["withTargetedClickThrough"])(_components_guide_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/features/targeting/hocs/index.js":
/*!**********************************************!*\
  !*** ./src/features/targeting/hocs/index.js ***!
  \**********************************************/
/*! exports provided: withTargetedClickThrough */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withTargetedClickThrough__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTargetedClickThrough */ "./src/features/targeting/hocs/withTargetedClickThrough.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTargetedClickThrough", function() { return _withTargetedClickThrough__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* eslint-disable import/prefer-default-export */


/***/ }),

/***/ "./src/features/targeting/hocs/withTargetedClickThrough.js":
/*!*****************************************************************!*\
  !*** ./src/features/targeting/hocs/withTargetedClickThrough.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/features/targeting/utils/index.js");
const _excluded = ["children", "closeOnClickOutside", "shouldTarget", "useTargetingApi"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function withTargetedClickThrough(WrappedComponent) {
  const WrapperComponent = _ref => {
    let {
      children,
      closeOnClickOutside,
      shouldTarget,
      useTargetingApi
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    const {
      canShow,
      onComplete,
      onClose,
      onShow
    } = useTargetingApi();

    const handleOnComplete = () => {
      if (shouldTarget && canShow) {
        onComplete();
      }
    };

    const shouldShow = shouldTarget && canShow;
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["useOnClickBody"])(onClose, !!(shouldShow && closeOnClickOutside));
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
      if (shouldShow) {
        onShow();
      }
    }, [shouldShow, onShow]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, _extends({
      showCloseButton: true,
      stopBubble: true
    }, rest, {
      isShown: shouldShow,
      onDismiss: onClose
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "bdl-targeted-click-through",
      "data-targeting": "click-through",
      "data-testid": "with-targeted-click-span",
      onClickCapture: handleOnComplete,
      onKeyPressCapture: handleOnComplete,
      tabIndex: -1
    }, children));
  };

  WrapperComponent.displayName = `withTargetedClickThrough(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WrapperComponent;
}

/* harmony default export */ __webpack_exports__["default"] = (withTargetedClickThrough);

/***/ }),

/***/ "./src/features/targeting/neverTargeted.js":
/*!*************************************************!*\
  !*** ./src/features/targeting/neverTargeted.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Return a targetingApi that is never targeting
 */
const neverTargeted = {
  canShow: false,
  onShow: () => {},
  onClose: () => {},
  onComplete: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (neverTargeted);

/***/ }),

/***/ "./src/features/targeting/utils/index.js":
/*!***********************************************!*\
  !*** ./src/features/targeting/utils/index.js ***!
  \***********************************************/
/*! exports provided: useCombined, useOnClickBody, useSuppressed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCombined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCombined */ "./src/features/targeting/utils/useCombined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCombined", function() { return _useCombined__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useOnClickBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useOnClickBody */ "./src/features/targeting/utils/useOnClickBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnClickBody", function() { return _useOnClickBody__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useSuppressed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSuppressed */ "./src/features/targeting/utils/useSuppressed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSuppressed", function() { return _useSuppressed__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/features/targeting/utils/useCombined.js":
/*!*****************************************************!*\
  !*** ./src/features/targeting/utils/useCombined.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neverTargeted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../neverTargeted */ "./src/features/targeting/neverTargeted.js");


// This function takes in an array of targetingApi hooks (functions) and returns the first
// eligible targetingApi hook OR defaults to the neverTargeted hook.
//
// @TODO (online-sales): Incorporate priority for determining targeting in case we have multiple
// items in the array which are eligible (i.e. contextual messages having greater priority than onboarding).
const useCombined = useTargetingApis => {
  const useGetTargetingApi = useTargetingApi => useTargetingApi();

  const targetingApis = useTargetingApis.map(useGetTargetingApi);
  const firstEligibleTargetingApi = targetingApis.find(_ref => {
    let {
      canShow
    } = _ref;
    return canShow;
  });
  return firstEligibleTargetingApi || _neverTargeted__WEBPACK_IMPORTED_MODULE_0__["default"];
};

/* harmony default export */ __webpack_exports__["default"] = (useCombined);

/***/ }),

/***/ "./src/features/targeting/utils/useOnClickBody.js":
/*!********************************************************!*\
  !*** ./src/features/targeting/utils/useOnClickBody.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * onClick will be called if enable is true when document is clicked.
 * options such as capture and once are directly passed to event listener.
 * Recommend to use once
 */

const useOnClickBody = (onClick, enable) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (enable) {
      if (document.body) {
        document.body.addEventListener('click', onClick);
      }

      if (document.body) {
        document.body.addEventListener('contextmenu', onClick);
      }
    }

    return () => {
      if (enable) {
        if (document.body) {
          document.body.removeEventListener('click', onClick);
        }

        if (document.body) {
          document.body.removeEventListener('contextmenu', onClick);
        }
      }
    };
  }, [onClick, enable]);
};

/* harmony default export */ __webpack_exports__["default"] = (useOnClickBody);

/***/ }),

/***/ "./src/features/targeting/utils/useSuppressed.js":
/*!*******************************************************!*\
  !*** ./src/features/targeting/utils/useSuppressed.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neverTargeted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../neverTargeted */ "./src/features/targeting/neverTargeted.js");


/**
 * Returns a targetingApi that will be targeted as long as the input targeting api is targeted
 * and should suppress is false.
 */
const useSuppressed = (useTargetingApi, useShouldSuppress) => {
  const targetingApi = useTargetingApi();
  const shouldSuppress = useShouldSuppress();

  if (shouldSuppress) {
    return _neverTargeted__WEBPACK_IMPORTED_MODULE_0__["default"];
  }

  return targetingApi;
};

/* harmony default export */ __webpack_exports__["default"] = (useSuppressed);

/***/ }),

/***/ "./src/icon/fill/Apps16.tsx":
/*!**********************************!*\
  !*** ./src/icon/fill/Apps16.tsx ***!
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

const Apps16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M14 11a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2zm-5 0a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1h2zm-5 0a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2a1 1 0 011-1h2zm10-5a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7a1 1 0 011-1h2zM9 6a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h2zM4 6a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1h2zm10-5a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2a1 1 0 011-1h2zM9 1a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2a1 1 0 011-1h2zM4 1a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h2z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Apps16);

/***/ }),

/***/ "./src/icon/fill/Sign16.tsx":
/*!**********************************!*\
  !*** ./src/icon/fill/Sign16.tsx ***!
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

const Sign16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray40"],
  d: "M15.5 15a.5.5 0 110 1H.5a.5.5 0 110-1h15zM6 0c1.936 0 3.191 2.265 2.996 4.584-.138 1.652-1.277 3.625-2.87 5.267l-.11.111.078.123c.36.54.794.863 1.283.91L7.5 11c.393 0 .73-.251 1.179-.887l.197-.295.35-.544.154-.226.143-.193C9.94 8.32 10.381 8 11 8c.674 0 1.138.39 1.468.983.076.138.139.266.202.422l.1.258.319.93.071.192.081.185.11-.03c.243-.08.508-.245.796-.507l.146-.14a1 1 0 011.414 1.414C14.867 12.547 13.961 13 13 13c-.674 0-1.138-.39-1.468-.983a3.822 3.822 0 01-.202-.422l-.1-.258-.332-.965-.44.683C9.613 12.32 8.781 13 7.5 13c-1.252 0-2.23-.576-2.949-1.558l-.09-.127-.057.043c-.916.674-1.9 1.21-2.884 1.529l-.245.075a1 1 0 11-.55-1.924c.92-.263 1.867-.797 2.737-1.475l.128-.103-.032-.1c-.359-1.175-.541-2.568-.557-4.079L3 4.997C3.009 2.197 4.053 0 6 0zm0 2c-.437 0-.994 1.173-1 3.003-.003.963.073 1.854.217 2.638l.038.196.165-.197c.84-1.038 1.427-2.136 1.563-3.045l.02-.179C7.114 3.111 6.498 2 6 2zm5 3a1 1 0 110 2 1 1 0 010-2z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Sign16);

/***/ }),

/***/ "./src/icon/logo/BoxSign28.tsx":
/*!*************************************!*\
  !*** ./src/icon/logo/BoxSign28.tsx ***!
  \*************************************/
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

const BoxSign28 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 28,
  height: 28,
  viewBox: "0 0 28 28"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlDarkBlue"],
  d: "M0 7.692v12.616c0 2.675.278 3.645.801 4.623a5.452 5.452 0 002.268 2.268c.978.523 1.948.801 4.623.801h12.616c2.675 0 3.645-.278 4.623-.801a5.452 5.452 0 002.268-2.268c.523-.978.801-1.948.801-4.623V7.692c0-2.675-.278-3.645-.801-4.623A5.452 5.452 0 0024.93.801C23.953.278 22.983 0 20.308 0H7.692C5.017 0 4.047.278 3.069.801A5.452 5.452 0 00.801 3.07C.278 4.047 0 5.017 0 7.692z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["white"],
  d: "M21.5 21a.5.5 0 010 1h-15a.5.5 0 110-1h15zM12 6c1.936 0 3.192 2.265 2.997 4.584-.14 1.652-1.278 3.625-2.87 5.267l-.11.111.078.123c.359.54.793.863 1.282.91L13.5 17c.394 0 .73-.251 1.179-.887l.197-.295.35-.544.155-.226.142-.193C15.94 14.32 16.381 14 17 14c.674 0 1.139.39 1.468.983.077.138.139.266.203.422l.099.258.32.93.07.192.081.185.11-.03c.243-.08.508-.245.796-.507l.146-.14a1 1 0 111.414 1.414C20.867 18.547 19.961 19 19 19c-.674 0-1.138-.39-1.468-.983a3.822 3.822 0 01-.202-.422l-.1-.258-.332-.965-.44.683C15.613 18.32 14.781 19 13.5 19c-1.252 0-2.229-.576-2.948-1.558l-.09-.127-.058.043c-.916.674-1.9 1.21-2.883 1.529l-.246.075a1 1 0 11-.55-1.924c.921-.263 1.867-.797 2.738-1.475l.127-.103-.031-.1c-.36-1.175-.542-2.568-.558-4.079v-.284C9.008 8.197 10.052 6 12 6zm0 2c-.437 0-.994 1.173-1 3.003-.003.963.074 1.854.217 2.638l.038.196.165-.197c.84-1.038 1.427-2.136 1.563-3.045l.02-.179C13.114 9.111 12.499 8 12 8zm5 3a1 1 0 110 2 1 1 0 010-2z"
})));

/* harmony default export */ __webpack_exports__["default"] = (BoxSign28);

/***/ }),

/***/ "./src/icons/general/IconChatRound.tsx":
/*!*********************************************!*\
  !*** ./src/icons/general/IconChatRound.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconChatRound = _ref => {
  let {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-chat-round ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M14 3h-4a8 8 0 0 0-5 14.26V21a1 1 0 0 0 .08.37 1 1 0 0 0 1.31.53L12 19h2a8 8 0 0 0 0-16zm-6 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconChatRound);

/***/ }),

/***/ "./src/icons/general/IconDocInfo.tsx":
/*!*******************************************!*\
  !*** ./src/icons/general/IconDocInfo.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconDocInfo = _ref => {
  let {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-doc-info ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19.41 7.41l-4.82-4.82A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42zM13 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm-1-6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDocInfo);

/***/ }),

/***/ "./src/icons/general/IconEllipsis.tsx":
/*!********************************************!*\
  !*** ./src/icons/general/IconEllipsis.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconEllipsis = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 20,
    title,
    width = 20
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-ellipsis ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 10 2",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M1 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM5 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEllipsis);

/***/ }),

/***/ "./src/icons/general/IconHide.tsx":
/*!****************************************!*\
  !*** ./src/icons/general/IconHide.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconHide = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-hide ${className}`,
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.646 7.646L4.354 4.354a.5.5 0 0 1 0-.708l1.292-1.292a.5.5 0 0 1 .708 0l5.292 5.292a.5.5 0 0 1 0 .708l-5.292 5.292a.5.5 0 0 1-.708 0l-1.292-1.292a.5.5 0 0 1 0-.708l3.292-3.292a.5.5 0 0 0 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconHide);

/***/ }),

/***/ "./src/icons/general/IconMagicWand.tsx":
/*!*********************************************!*\
  !*** ./src/icons/general/IconMagicWand.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconMagicWand = _ref => {
  let {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-magic-wand ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19.91 5.84a2.85 2.85 0 0 0-4 0L3.83 17.89a2.83 2.83 0 0 0 4 4L19.91 9.83a2.84 2.84 0 0 0 0-3.99zm-1.6 2.44l-2.92 3-.86-.86 3-3a.51.51 0 0 1 .43-.18.61.61 0 0 1 .43.19l.08.1a.64.64 0 0 1-.16.75zM11.11 3.51a2.67 2.67 0 0 1 .91.86 5.39 5.39 0 0 1 .38.76l.06.14a7.6 7.6 0 0 1 .37-.76 2.71 2.71 0 0 1 .78-.84 4 4 0 0 1 .73-.4l.24-.11c-.25-.11-.5-.23-.74-.36a2.51 2.51 0 0 1-.94-.89 5.63 5.63 0 0 1-.4-.82v-.05a5.93 5.93 0 0 1-.34.72 2.73 2.73 0 0 1-.88.94 6.45 6.45 0 0 1-.74.38l-.16.06a4.3 4.3 0 0 1 .73.37zM8.48 7.61a1.9 1.9 0 0 1 .66.63 4.73 4.73 0 0 1 .28.55v.09a4.64 4.64 0 0 1 .26-.55 2.05 2.05 0 0 1 .56-.61 3.2 3.2 0 0 1 .54-.3l.22-.09a2.11 2.11 0 0 1-.52-.26 1.87 1.87 0 0 1-.68-.66 3.14 3.14 0 0 1-.29-.58c-.08.19-.16.35-.25.52a2 2 0 0 1-.68.65 3.89 3.89 0 0 1-.58.28h-.12a5.36 5.36 0 0 1 .6.33z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMagicWand);

/***/ }),

/***/ "./src/icons/general/IconMetadataThick.tsx":
/*!*************************************************!*\
  !*** ./src/icons/general/IconMetadataThick.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconMetadataThick = _ref => {
  let {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-metadata-thick ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.37,13.43a1,1,0,0,1-.37.07,1,1,0,0,1-.93-.63L13.9,11.94l-1,2a1,1,0,0,1-1.78,0l-1-2L8.93,14.87a1,1,0,1,1-1.86-.74l2-5a1,1,0,0,1,1.82-.08L12,11.26l1.11-2.21A1,1,0,0,1,14,8.5a1,1,0,0,1,.89.63l2,5A1,1,0,0,1,16.37,15.43Z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMetadataThick);

/***/ }),

/***/ "./src/icons/general/IconShow.tsx":
/*!****************************************!*\
  !*** ./src/icons/general/IconShow.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");




const IconShow = _ref => {
  let {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `icon-show ${className}`,
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.354 7.646l3.292-3.292a.5.5 0 0 0 0-.708L9.354 2.354a.5.5 0 0 0-.708 0L3.354 7.646a.5.5 0 0 0 0 .708l5.292 5.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708L7.354 8.354a.5.5 0 0 1 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconShow);

/***/ })

}]);
//# sourceMappingURL=content-sidebar.js.map