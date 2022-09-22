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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~skills-sidebar"],{

/***/ "./src/components/avatar/Avatar.scss":
/*!*******************************************!*\
  !*** ./src/components/avatar/Avatar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/avatar/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/avatar/Avatar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _badgeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../badgeable */ "./src/components/badgeable/index.ts");
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarImage */ "./src/components/avatar/AvatarImage.tsx");
/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarInitials */ "./src/components/avatar/AvatarInitials.tsx");
/* harmony import */ var _UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UnknownUserAvatar */ "./src/components/avatar/UnknownUserAvatar.tsx");
/* harmony import */ var _icon_fill_GlobeBadge16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icon/fill/GlobeBadge16 */ "./src/icon/fill/GlobeBadge16.tsx");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Avatar.scss */ "./src/components/avatar/Avatar.scss");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Avatar_scss__WEBPACK_IMPORTED_MODULE_7__);








const SIZES = {
  small: true,
  large: true
};

function Avatar(_ref) {
  let {
    avatarUrl,
    className,
    name,
    id,
    isExternal,
    shouldShowExternal = false,
    size = ''
  } = _ref;
  const [hasImageErrored, setHasImageErrored] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [prevAvatarUrl, setPrevAvatarUrl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['avatar', className, {
    [`avatar--${size}`]: size && SIZES[size],
    'avatar--isExternal': shouldShowExternal && isExternal
  }]); // Reset hasImageErrored state when avatarUrl changes

  if (avatarUrl !== prevAvatarUrl) {
    setHasImageErrored(false);
    setPrevAvatarUrl(avatarUrl);
  }

  let avatar;

  if (avatarUrl && !hasImageErrored) {
    avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onError: () => {
        setHasImageErrored(true);
      },
      url: avatarUrl
    });
  } else if (name) {
    avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarInitials__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id,
      name: name
    });
  } else {
    avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "avatar-icon"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_badgeable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes,
    bottomRight: shouldShowExternal && isExternal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_GlobeBadge16__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bdl-Avatar-externalBadge"
    }) : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, avatar));
}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/avatar/AvatarImage.tsx":
/*!***********************************************!*\
  !*** ./src/components/avatar/AvatarImage.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AvatarImage = _ref => {
  let {
    className = '',
    url,
    onError
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    alt: "",
    className: `avatar-image ${className}`,
    onError: event => {
      if (typeof onError === 'function') {
        onError(event);
      }
    },
    src: url
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarImage);

/***/ }),

/***/ "./src/components/avatar/AvatarInitials.tsx":
/*!**************************************************!*\
  !*** ./src/components/avatar/AvatarInitials.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");



const getInitials = name => {
  // Remove any bracketed text from the user name
  const cleanedName = name.replace(/[[({<]+.*[\])}>]+/g, '').trim();
  const firstInitial = cleanedName.slice(0, 1);
  const lastInitial = cleanedName.slice(cleanedName.lastIndexOf(' ') + 1, cleanedName.lastIndexOf(' ') + 2);
  return (firstInitial + lastInitial).toUpperCase();
};

const AvatarInitials = _ref => {
  let {
    className = '',
    id = 0,
    name
  } = _ref;
  const avatarColorSelector = parseInt(id, 10) || 0;
  const backgroundColorIndex = avatarColorSelector % _styles_variables__WEBPACK_IMPORTED_MODULE_1__["avatarColors"].length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: `avatar-initials ${className}`,
    "data-bg-idx": backgroundColorIndex
  }, getInitials(name));
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarInitials);

/***/ }),

/***/ "./src/components/avatar/UnknownUserAvatar.tsx":
/*!*****************************************************!*\
  !*** ./src/components/avatar/UnknownUserAvatar.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg/AccessibleSVG */ "./src/components/accessible-svg/AccessibleSVG.tsx");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");




const UnknownUserAvatar = _ref => {
  let {
    className = '',
    height = 28,
    title,
    width = 28
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `unknown-user-avatar ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray50"],
    fillRule: "evenodd",
    d: "M8 0a8 8 0 110 16A8 8 0 018 0zm0 9.5c-1.21 0-2.293.413-3.232 1.096-.56.407-.953.817-1.168 1.104a.5.5 0 00.8.6c.035-.047.114-.141.234-.267.205-.214.447-.428.722-.629.78-.567 1.665-.904 2.644-.904.979 0 1.865.337 2.644.904.275.2.517.415.722.63.12.125.199.219.234.266a.5.5 0 00.8-.6c-.215-.287-.607-.697-1.168-1.104C10.293 9.913 9.21 9.5 8 9.5zm0-6a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 018 4.5z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnknownUserAvatar);

/***/ }),

/***/ "./src/components/avatar/index.ts":
/*!****************************************!*\
  !*** ./src/components/avatar/index.ts ***!
  \****************************************/
/*! exports provided: AvatarImage, AvatarInitials, UnknownUserAvatar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarImage */ "./src/components/avatar/AvatarImage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarImage", function() { return _AvatarImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarInitials */ "./src/components/avatar/AvatarInitials.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarInitials", function() { return _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnknownUserAvatar */ "./src/components/avatar/UnknownUserAvatar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnknownUserAvatar", function() { return _UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar */ "./src/components/avatar/Avatar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/badgeable/Badgeable.scss":
/*!*************************************************!*\
  !*** ./src/components/badgeable/Badgeable.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/badgeable/Badgeable.tsx":
/*!************************************************!*\
  !*** ./src/components/badgeable/Badgeable.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Badgeable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Badgeable.scss */ "./src/components/badgeable/Badgeable.scss");
/* harmony import */ var _Badgeable_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badgeable_scss__WEBPACK_IMPORTED_MODULE_2__);




const Badgeable = props => {
  const {
    children,
    className = '',
    topLeft = null,
    topRight = null,
    bottomLeft = null,
    bottomRight = null
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('badgeable-container', className)
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "badges"
  }, topLeft && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "top-left-badge"
  }, topLeft), topRight && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "top-right-badge"
  }, topRight), bottomLeft && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bottom-left-badge"
  }, bottomLeft), bottomRight && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bottom-right-badge"
  }, bottomRight)));
};

/* harmony default export */ __webpack_exports__["default"] = (Badgeable);

/***/ }),

/***/ "./src/components/badgeable/index.ts":
/*!*******************************************!*\
  !*** ./src/components/badgeable/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badgeable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badgeable */ "./src/components/badgeable/Badgeable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Badgeable__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/label-pill/LabelPill.scss":
/*!**************************************************!*\
  !*** ./src/components/label-pill/LabelPill.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/label-pill/LabelPill.tsx":
/*!*************************************************!*\
  !*** ./src/components/label-pill/LabelPill.tsx ***!
  \*************************************************/
/*! exports provided: LabelPillStatus, LabelPillSize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPillStatus", function() { return LabelPillStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelPillSize", function() { return LabelPillSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LabelPillIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LabelPillIcon */ "./src/components/label-pill/LabelPillIcon.tsx");
/* harmony import */ var _LabelPillText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LabelPillText */ "./src/components/label-pill/LabelPillText.tsx");
/* harmony import */ var _LabelPill_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelPill.scss */ "./src/components/label-pill/LabelPill.scss");
/* harmony import */ var _LabelPill_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LabelPill_scss__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["children", "type", "size", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







let LabelPillStatus;

(function (LabelPillStatus) {
  LabelPillStatus["DEFAULT"] = "default";
  LabelPillStatus["INFO"] = "info";
  LabelPillStatus["FTUX"] = "ftux";
  LabelPillStatus["HIGHLIGHT"] = "highlight";
  LabelPillStatus["SUCCESS"] = "success";
  LabelPillStatus["WARNING"] = "warning";
  LabelPillStatus["ALERT"] = "alert";
  LabelPillStatus["ERROR"] = "error";
})(LabelPillStatus || (LabelPillStatus = {}));

let LabelPillSize;

(function (LabelPillSize) {
  LabelPillSize["REGULAR"] = "regular";
  LabelPillSize["LARGE"] = "large";
})(LabelPillSize || (LabelPillSize = {}));

const LabelPillContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
  const {
    children,
    type = LabelPillStatus.DEFAULT,
    size = LabelPillSize.REGULAR,
    className
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const labelPillClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-LabelPill', `bdl-LabelPill--${type}`, `bdl-LabelPill--size${lodash_startCase__WEBPACK_IMPORTED_MODULE_2___default()(size)}`, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
    ref: ref,
    className: labelPillClasses
  }, rest), children);
});
LabelPillContainer.displayName = 'LabelPill';
const LabelPill = {
  Pill: LabelPillContainer,
  Text: _LabelPillText__WEBPACK_IMPORTED_MODULE_4__["default"],
  Icon: _LabelPillIcon__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (LabelPill);

/***/ }),

/***/ "./src/components/label-pill/LabelPillIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/components/label-pill/LabelPillIcon.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["Component", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LabelPillIcon = _ref => {
  let {
    Component,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-LabelPill-iconContent', className),
    width: 12,
    height: 12
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LabelPillIcon);

/***/ }),

/***/ "./src/components/label-pill/LabelPillText.tsx":
/*!*****************************************************!*\
  !*** ./src/components/label-pill/LabelPillText.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LabelPillText = _ref => {
  let {
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-LabelPill-textContent', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LabelPillText);

/***/ }),

/***/ "./src/components/label-pill/index.ts":
/*!********************************************!*\
  !*** ./src/components/label-pill/index.ts ***!
  \********************************************/
/*! exports provided: default, LabelPillStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabelPill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelPill */ "./src/components/label-pill/LabelPill.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LabelPill__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelPillStatus", function() { return _LabelPill__WEBPACK_IMPORTED_MODULE_0__["LabelPillStatus"]; });



/***/ }),

/***/ "./src/components/pill-selector-dropdown/Pill.js":
/*!*******************************************************!*\
  !*** ./src/components/pill-selector-dropdown/Pill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const Pill = _ref => {
  let {
    isDisabled = false,
    isSelected = false,
    isValid = true,
    onRemove,
    text
  } = _ref;
  const styles = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-Pill', 'pill', {
    'is-selected': isSelected && !isDisabled,
    'is-invalid': !isValid,
    'is-disabled': isDisabled,
    'bdl-is-disabled': isDisabled
  });
  const onClick = isDisabled ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : onRemove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bdl-Pill-text pill-text"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "close-btn",
    onClick: onClick
  }, "\u2715"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pill);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelector.js":
/*!***************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelector.js ***!
  \***************************************************************/
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
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _RoundPill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundPill */ "./src/components/pill-selector-dropdown/RoundPill.js");
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pill */ "./src/components/pill-selector-dropdown/Pill.js");
/* harmony import */ var _SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SuggestedPillsRow */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.js");
const _excluded = ["allowInvalidPills", "className", "disabled", "error", "getPillClassName", "getPillImageUrl", "inputProps", "onInput", "onRemove", "onSuggestedPillAdd", "placeholder", "selectedOptions", "showAvatars", "showRoundedPills", "suggestedPillsData", "suggestedPillsFilter", "suggestedPillsTitle", "validator"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

class PillSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isFocused: false,
      selectedIndex: -1
    });

    _defineProperty(this, "getNumSelected", () => {
      const {
        selectedOptions
      } = this.props;
      return typeof selectedOptions.size === 'number' ? selectedOptions.size : selectedOptions.length;
    });

    _defineProperty(this, "getPillsByKey", key => {
      const {
        selectedOptions
      } = this.props;
      return selectedOptions.map(option => option[key]);
    });

    _defineProperty(this, "handleClick", () => {
      this.inputEl.focus();
    });

    _defineProperty(this, "handleFocus", () => {
      this.setState({
        isFocused: true
      });
    });

    _defineProperty(this, "handleBlur", () => {
      this.setState({
        isFocused: false
      });
    });

    _defineProperty(this, "handleKeyDown", event => {
      const inputValue = this.inputEl.value;
      const numPills = this.getNumSelected();
      const {
        selectedIndex
      } = this.state;

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__["KEYS"].backspace:
          {
            let index = -1;

            if (selectedIndex >= 0) {
              // remove selected pill
              index = selectedIndex;
              this.resetSelectedIndex();
              this.inputEl.focus();
            } else if (inputValue === '') {
              // remove last pill
              index = numPills - 1;
            }

            if (index >= 0) {
              const {
                onRemove,
                selectedOptions
              } = this.props;
              const selectedOption = // $FlowFixMe
              typeof selectedOptions.get === 'function' ? selectedOptions.get(index) : selectedOptions[index];
              onRemove(selectedOption, index);
              stopDefaultEvent(event);
            }

            break;
          }

        case _constants__WEBPACK_IMPORTED_MODULE_5__["KEYS"].arrowLeft:
          if (selectedIndex >= 0) {
            // select previous pill
            this.setState({
              selectedIndex: Math.max(selectedIndex - 1, 0)
            });
            stopDefaultEvent(event);
          } else if (inputValue === '' && numPills > 0) {
            // select last pill
            this.hiddenEl.focus();
            this.setState({
              selectedIndex: numPills - 1
            });
            stopDefaultEvent(event);
          }

          break;

        case _constants__WEBPACK_IMPORTED_MODULE_5__["KEYS"].arrowRight:
          {
            if (selectedIndex >= 0) {
              const index = selectedIndex + 1;

              if (index >= numPills) {
                // deselect last pill
                this.resetSelectedIndex();
                this.inputEl.focus();
              } else {
                // select next pill
                this.setState({
                  selectedIndex: index
                });
              }

              stopDefaultEvent(event);
            }

            break;
          }
        // no default
      }
    });

    _defineProperty(this, "errorMessageID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('errorMessage'));

    _defineProperty(this, "hiddenRef", hiddenEl => {
      if (hiddenEl) {
        this.hiddenEl = hiddenEl;
      }
    });

    _defineProperty(this, "resetSelectedIndex", () => {
      if (this.state.selectedIndex !== -1) {
        this.setState({
          selectedIndex: -1
        });
      }
    });
  }

  render() {
    const {
      isFocused,
      selectedIndex
    } = this.state;

    const _this$props = this.props,
          {
      allowInvalidPills,
      className,
      disabled,
      error,
      getPillClassName,
      getPillImageUrl,
      inputProps,
      onInput,
      onRemove,
      onSuggestedPillAdd,
      placeholder,
      selectedOptions,
      showAvatars,
      showRoundedPills,
      suggestedPillsData,
      suggestedPillsFilter,
      suggestedPillsTitle,
      validator
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const suggestedPillsEnabled = suggestedPillsData && suggestedPillsData.length > 0;
    const hasError = !!error;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-PillSelector', 'pill-selector-input-wrapper', {
      'is-disabled': disabled,
      'bdl-is-disabled': disabled,
      'is-focused': isFocused,
      'show-error': hasError,
      'pill-selector-suggestions-enabled': suggestedPillsEnabled,
      'bdl-PillSelector--suggestionsEnabled': suggestedPillsEnabled
    });
    const ariaAttrs = {
      'aria-invalid': hasError,
      'aria-errormessage': this.errorMessageID,
      'aria-describedby': this.errorMessageID
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isShown: hasError,
      text: error || '',
      position: "middle-right",
      theme: "error"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: classes,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown
    }, showRoundedPills ? selectedOptions.map((option, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_RoundPill__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: getPillClassName ? getPillClassName(option) : undefined,
        getPillImageUrl: getPillImageUrl,
        isValid: allowInvalidPills ? validator(option) : true,
        isDisabled: disabled,
        isSelected: index === selectedIndex,
        key: option.value,
        onRemove: onRemove.bind(this, option, index) // $FlowFixMe option.text is for backwards compatibility
        ,
        text: option.displayText || option.text,
        showAvatar: true,
        id: option.id,
        hasWarning: option.hasWarning,
        isExternal: option.isExternalUser
      });
    }) : selectedOptions.map((option, index) => {
      // TODO: This and associated types will be removed once all views are updates with round pills.
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Pill__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isValid: allowInvalidPills ? validator(option) : true,
        isDisabled: disabled,
        isSelected: index === selectedIndex,
        key: option.value,
        onRemove: onRemove.bind(this, option, index) // $FlowFixMe option.text is for backwards compatibility
        ,
        text: option.displayText || option.text
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      "aria-hidden": "true",
      className: "accessibility-hidden",
      onBlur: this.resetSelectedIndex,
      ref: this.hiddenRef,
      tabIndex: -1,
      "data-testid": "pill-selection-helper"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", _extends({}, ariaAttrs, rest, inputProps, {
      autoComplete: "off",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-PillSelector-input', 'pill-selector-input', className, {
        'bdl-PillSelector-input--showAvatars': showAvatars
      }),
      disabled: disabled,
      onInput: onInput,
      placeholder: this.getNumSelected() === 0 ? placeholder : '',
      ref: input => {
        this.inputEl = input;
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSuggestedPillAdd: onSuggestedPillAdd,
      selectedPillsValues: this.getPillsByKey('value'),
      suggestedPillsFilter: suggestedPillsFilter,
      suggestedPillsData: suggestedPillsData,
      title: suggestedPillsTitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      id: this.errorMessageID,
      className: "accessibility-hidden",
      role: "alert"
    }, error)));
  }

}

_defineProperty(PillSelector, "defaultProps", {
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  placeholder: '',
  selectedOptions: [],
  validator: () => true
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelector);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/RoundPill.js":
/*!************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/RoundPill.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_fill_X16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icon/fill/X16 */ "./src/icon/fill/X16.tsx");
/* harmony import */ var _label_pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label-pill */ "./src/components/label-pill/index.ts");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar */ "./src/components/avatar/index.ts");
/* harmony import */ var _RoundPill_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundPill.scss */ "./src/components/pill-selector-dropdown/RoundPill.scss");
/* harmony import */ var _RoundPill_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_RoundPill_scss__WEBPACK_IMPORTED_MODULE_6__);
const _excluded = ["onClick"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // $FlowFixMe this imports from a typescript file





const RemoveButton = _ref => {
  let {
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon_fill_X16__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, rest, {
    "aria-hidden": "true",
    onClick: onClick
  }));
};

class RoundPill extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      avatarUrl: undefined
    });

    _defineProperty(this, "isMounted", false);

    _defineProperty(this, "getStyles", () => {
      const {
        className,
        isSelected,
        isDisabled,
        hasWarning,
        isValid
      } = this.props;
      return classnames__WEBPACK_IMPORTED_MODULE_2___default()('bdl-RoundPill', className, {
        'bdl-RoundPill--selected': isSelected && !isDisabled,
        'bdl-RoundPill--disabled': isDisabled,
        'bdl-RoundPill--warning': hasWarning,
        'bdl-RoundPill--error': !isValid
      });
    });

    _defineProperty(this, "handleClickRemove", () => {
      const {
        isDisabled,
        onRemove
      } = this.props;
      return isDisabled ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : onRemove();
    });

    _defineProperty(this, "getAvatarUrlHandler", avatarUrl => {
      if (this.isMounted) {
        this.setState({
          avatarUrl
        });
      }
    });
  }

  /**
   * Gets the avatar URL for the user from the getPillImageUrl prop
   *
   * @return {void}
   */
  getAvatarUrl() {
    const {
      getPillImageUrl,
      id
    } = this.props;
    Promise.resolve(getPillImageUrl && id ? getPillImageUrl({
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
    const {
      id,
      isExternal,
      showAvatar,
      text
    } = this.props;
    const {
      avatarUrl
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Pill, {
      size: "large",
      className: this.getStyles()
    }, showAvatar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Icon, {
      Component: _avatar__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "bdl-RoundPill-avatar",
      avatarUrl: avatarUrl,
      id: id,
      isExternal: isExternal,
      name: text,
      size: "small",
      shouldShowExternal: true
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Text, {
      className: "bdl-RoundPill-text"
    }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_pill__WEBPACK_IMPORTED_MODULE_4__["default"].Icon, {
      className: "bdl-RoundPill-closeBtn",
      Component: RemoveButton,
      onClick: this.handleClickRemove
    }));
  }

}

_defineProperty(RoundPill, "defaultProps", {
  isDisabled: false,
  isSelected: false,
  isValid: true,
  hasWarning: false,
  showAvatar: false
});

/* harmony default export */ __webpack_exports__["default"] = (RoundPill);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/RoundPill.scss":
/*!**************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/RoundPill.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPill.js":
/*!****************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPill.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__);






const SuggestedPill = _ref => {
  let {
    email,
    id,
    name,
    onAdd
  } = _ref;

  const addSuggestedPill = event => {
    event.preventDefault(); // TODO: refactor this so inline conversions aren't required at every usage

    onAdd({
      email,
      id,
      name,
      text: name,
      type: 'user',
      value: email
    });
  };

  const handleKeyPress = event => {
    if (event.key === _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].enter) {
      addSuggestedPill(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "bottom-center",
    text: email
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "suggested-pill-invisible-button",
    onClick: addSuggestedPill,
    onKeyDown: handleKeyPress,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bdl-Pill-text pill-text suggested-pill"
  }, name)));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPill);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPillsRow.js":
/*!********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPillsRow.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SuggestedPill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestedPill */ "./src/components/pill-selector-dropdown/SuggestedPill.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__);





const SuggestedPillsRow = _ref => {
  let {
    onSuggestedPillAdd = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
    selectedPillsValues = [],
    suggestedPillsData = [],
    suggestedPillsFilter = 'id',
    title
  } = _ref;
  // Prevents pills from being rendered that are in the form by checking for value (id or custom value)
  const filteredSuggestedPillData = suggestedPillsData.filter(item => !selectedPillsValues.includes(item[suggestedPillsFilter]));

  if (filteredSuggestedPillData.length === 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pill-selector-suggested"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), filteredSuggestedPillData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestedPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: item.id,
    email: item.email,
    id: item.id,
    name: item.name,
    onAdd: onSuggestedPillAdd
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPillsRow);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss":
/*!**********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPillsRow.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icon/fill/GlobeBadge16.tsx":
/*!****************************************!*\
  !*** ./src/icon/fill/GlobeBadge16.tsx ***!
  \****************************************/
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

const GlobeBadge16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M8 0a7.988 7.988 0 00-5.662 2.338A7.992 7.992 0 000 8a7.988 7.988 0 002.338 5.662A7.992 7.992 0 008 16a7.988 7.988 0 005.662-2.338A7.992 7.992 0 0016 8a7.988 7.988 0 00-2.338-5.662A7.992 7.992 0 008 0zm-.862 14.4C4.062 13.908 1.6 11.323 1.6 8c0-.492.123-.984.123-1.477L5.54 10.34v.861c0 .862.738 1.6 1.6 1.6v1.6zm5.539-2.092c-.247-.616-.861-1.108-1.477-1.108h-.862V8.738c0-.368-.246-.738-.738-.738H4.8V6.4h1.6c.492 0 .862-.37.862-.862V4.062h1.6c.861 0 1.6-.739 1.6-1.6v-.37C12.8 3.077 14.4 5.292 14.4 8c0 1.723-.616 3.2-1.723 4.308z"
}));

/* harmony default export */ __webpack_exports__["default"] = (GlobeBadge16);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~skills-sidebar.no.react.js.map