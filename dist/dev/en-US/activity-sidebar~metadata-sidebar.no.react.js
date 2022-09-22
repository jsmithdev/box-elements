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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~metadata-sidebar"],{

/***/ "./src/components/close-button/CloseButton.scss":
/*!******************************************************!*\
  !*** ./src/components/close-button/CloseButton.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/close-button/CloseButton.tsx":
/*!*****************************************************!*\
  !*** ./src/components/close-button/CloseButton.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconClose */ "./src/icons/general/IconClose.tsx");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.ts");
/* harmony import */ var _CloseButton_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CloseButton.scss */ "./src/components/close-button/CloseButton.scss");
/* harmony import */ var _CloseButton_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CloseButton_scss__WEBPACK_IMPORTED_MODULE_5__);







const CloseButton = _ref => {
  let {
    className,
    onClick
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-CloseButton', className),
    "data-testid": "bdl-CloseButton",
    onClick: onClick,
    type: _button__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].BUTTON
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_4__["bdlGray62"],
    height: 18,
    width: 18
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./src/components/datalist-item/DatalistItem.scss":
/*!********************************************************!*\
  !*** ./src/components/datalist-item/DatalistItem.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/datalist-item/DatalistItem.tsx":
/*!*******************************************************!*\
  !*** ./src/components/datalist-item/DatalistItem.tsx ***!
  \*******************************************************/
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
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatalistItem.scss */ "./src/components/datalist-item/DatalistItem.scss");
/* harmony import */ var _DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children", "className", "isActive", "isSelected"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class DatalistItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setActiveItemID", () => {
      const {
        setActiveItemID
      } = this.props;

      if (setActiveItemID) {
        setActiveItemID(this.id);
      }
    });

    this.id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('datalistitem');
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.setActiveItemID();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isActive && !prevProps.isActive) {
      this.setActiveItemID();
    }
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className,
      isActive,
      isSelected
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('datalist-item', {
      'is-active': isActive
    }, className);
    const itemProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['closeDropdown', 'setActiveItemID']);
    /* eslint-disable jsx-a11y/role-has-required-aria-props */
    // required aria props are added dynamically

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", _extends({}, itemProps, {
      className: classes,
      id: this.id,
      role: "option",
      "aria-selected": isSelected
    }), children);
    /* eslint-enable jsx-a11y/role-has-required-aria-props */
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DatalistItem);

/***/ }),

/***/ "./src/components/datalist-item/index.ts":
/*!***********************************************!*\
  !*** ./src/components/datalist-item/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatalistItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatalistItem */ "./src/components/datalist-item/DatalistItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DatalistItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/date-picker/AccessiblePikaday.ts":
/*!*********************************************************!*\
  !*** ./src/components/date-picker/AccessiblePikaday.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pikaday */ "./node_modules/pikaday/pikaday.js");
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pikaday__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// An extended version of Pikaday to work when `isAccessible` prop is `true`
class AccessiblePikaday extends pikaday__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(options) {
    super(options);

    _defineProperty(this, "handleBlur", () => {
      this.hide();
    });

    _defineProperty(this, "handleClickOutside", event => {
      if (this.isVisible() && this.datePickerButtonEl && this.datePickerButtonEl.contains(event.target)) {
        return;
      }

      if (this.isVisible() && !this.el.contains(event.target)) {
        this.hide();
        const currentFocusEl = document.activeElement;

        if (this.accessibleFieldEl && currentFocusEl && currentFocusEl.tabIndex < 0) {
          this.accessibleFieldEl.focus();
        }
      }
    });

    this.accessibleFieldEl = options.accessibleFieldEl;
    this.datePickerButtonEl = options.datePickerButtonEl; // Override behavior as if `options.field` and `options.bound` were set.
    // See https://github.com/Pikaday/Pikaday/blob/master/pikaday.js#L671
    //     https://github.com/Pikaday/Pikaday/blob/master/pikaday.js#L695-L703

    if (this.accessibleFieldEl) {
      this.el.classList.add('is-bound');
      document.body.appendChild(this.el);
      this.accessibleFieldEl.addEventListener('blur', this.handleBlur);
      this.hide();
    }
  }

  show() {
    super.show();

    if (this.accessibleFieldEl) {
      document.addEventListener('click', this.handleClickOutside, true);
      this.adjustPosition();
    }
  }

  hide() {
    super.hide();

    if (this.accessibleFieldEl) {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  destroy() {
    super.destroy();

    if (this.accessibleFieldEl) {
      this.accessibleFieldEl.removeEventListener('blur', this.handleBlur);
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AccessiblePikaday);

/***/ }),

/***/ "./src/components/date-picker/DatePicker.scss":
/*!****************************************************!*\
  !*** ./src/components/date-picker/DatePicker.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/date-picker/DatePicker.tsx":
/*!***************************************************!*\
  !*** ./src/components/date-picker/DatePicker.tsx ***!
  \***************************************************/
/*! exports provided: DateFormat, DatePickerBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return DateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerBase", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _icon_fill_Alert16__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icon/fill/Alert16 */ "./src/icon/fill/Alert16.tsx");
/* harmony import */ var _icon_fill_Calendar16__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icon/fill/Calendar16 */ "./src/icon/fill/Calendar16.tsx");
/* harmony import */ var _icon_fill_ClearBadge16__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icon/fill/ClearBadge16 */ "./src/icon/fill/ClearBadge16.tsx");
/* harmony import */ var _AccessiblePikaday__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AccessiblePikaday */ "./src/components/date-picker/AccessiblePikaday.ts");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../button */ "./src/components/button/index.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../label */ "./src/components/label/index.tsx");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.ts");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _DatePicker_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DatePicker.scss */ "./src/components/date-picker/DatePicker.scss");
/* harmony import */ var _DatePicker_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_DatePicker_scss__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // @ts-ignore flow import









 // @ts-ignore flow import



const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  previousMonth: {
    "id": "boxui.base.previousMonth",
    "defaultMessage": "Previous Month"
  },
  nextMonth: {
    "id": "boxui.base.nextMonth",
    "defaultMessage": "Next Month"
  },
  iconAlertText: {
    "id": "boxui.datePicker.iconAlertText",
    "defaultMessage": "Invalid Date"
  },
  dateClearButton: {
    "id": "boxui.datePicker.dateClearButton",
    "defaultMessage": "Clear Date"
  },
  chooseDate: {
    "id": "boxui.datePicker.chooseDate",
    "defaultMessage": "Choose Date"
  },
  dateInputRangeError: {
    "id": "boxui.datePicker.dateInputRangeError",
    "defaultMessage": "Please enter a date between {minLocaleDate} and {maxLocaleDate}"
  },
  dateInputMaxError: {
    "id": "boxui.datePicker.dateInputMaxError",
    "defaultMessage": "Please enter a date before {maxLocaleDate}"
  },
  dateInputMinError: {
    "id": "boxui.datePicker.dateInputMinError",
    "defaultMessage": "Please enter a date after {minLocaleDate}"
  }
});
const TOGGLE_DELAY_MS = 300;
const ENTER_KEY = 'Enter';
const ESCAPE_KEY = 'Escape';
const TAB_KEY = 'Tab';
const ISO_DATE_FORMAT_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
let DateFormat;
/**
 * Converts date from being relative to GMT, to being relative to browser
 * timezone. E.g., Thu Jun 29 2017 00:00:00 GMT =>
 * Thu Jun 29 2017 00:00:00 GMT-0700 (PDT)
 * @param {Date} date UTC date
 * @returns {Date} date Local date
 */

(function (DateFormat) {
  DateFormat["ISO_STRING_DATE_FORMAT"] = "isoString";
  DateFormat["LOCALE_DATE_STRING_DATE_FORMAT"] = "localeDateString";
  DateFormat["UTC_TIME_DATE_FORMAT"] = "utcTime";
  DateFormat["UNIX_TIME_DATE_FORMAT"] = "unixTime";
  DateFormat["UTC_ISO_STRING_DATE_FORMAT"] = "utcISOString";
})(DateFormat || (DateFormat = {}));

function convertUTCToLocal(date) {
  const dateString = date.toUTCString(); // Remove ` GMT` from the timestamp string

  const dateStringWithoutTimeZone = dateString.slice(0, -4);
  return new Date(dateStringWithoutTimeZone);
}

function getFormattedDate(date, format) {
  if (!date) {
    return '';
  }

  let utcDate;

  switch (format) {
    case DateFormat.ISO_STRING_DATE_FORMAT:
      return date.toISOString();

    case DateFormat.LOCALE_DATE_STRING_DATE_FORMAT:
      return date.toLocaleDateString();

    case DateFormat.UTC_TIME_DATE_FORMAT:
      return Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_15__["convertDateToUnixMidnightTime"])(date);

    case DateFormat.UTC_ISO_STRING_DATE_FORMAT:
      utcDate = new Date(Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_15__["convertDateToUnixMidnightTime"])(date));
      return utcDate.toISOString();

    default:
      return date.getTime();
  }
}

const localesWhereWeekStartsOnSunday = ['en-US', 'en-CA', 'jp-JP'];

class DatePicker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    _defineProperty(this, "state", {
      isDateInputInvalid: false,
      showDateInputError: false
    });

    _defineProperty(this, "errorMessageID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5___default()('errorMessage'));

    _defineProperty(this, "descriptionID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_5___default()('description'));

    _defineProperty(this, "onSelectHandler", function () {
      let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      const {
        onChange,
        isAccessible
      } = _this.props;
      const {
        isDateInputInvalid
      } = _this.state;

      if (onChange) {
        const formattedDate = _this.formatValue(date);

        onChange(date, formattedDate);
      }

      if (isAccessible) {
        if (_this.dateInputEl && _this.datePicker) {
          // Required because Pikaday instance is unbound
          // See https://github.com/Pikaday/Pikaday#usage
          _this.dateInputEl.value = _this.datePicker.toString();
        }

        if (_this.datePicker && _this.datePicker.isVisible()) {
          _this.datePicker.hide();

          _this.focusDatePicker();
        }
      }

      if (isDateInputInvalid) {
        _this.setState({
          isDateInputInvalid: false,
          showDateInputError: false
        });
      }
    });

    _defineProperty(this, "datePicker", null);

    _defineProperty(this, "canUseDateInputType", true);

    _defineProperty(this, "shouldStayClosed", false);

    _defineProperty(this, "focusDatePicker", () => {
      // This also opens the date picker when isAccessible is disabled
      if (this.dateInputEl) {
        this.dateInputEl.focus();
      }
    });

    _defineProperty(this, "getDateInputError", () => {
      const {
        intl,
        maxDate = null,
        minDate = null
      } = this.props;
      const {
        showDateInputError
      } = this.state;
      const {
        formatMessage
      } = intl;
      if (!showDateInputError) return '';
      let dateInputError = '';
      const maxLocaleDate = getFormattedDate(maxDate, DateFormat.LOCALE_DATE_STRING_DATE_FORMAT);
      const minLocaleDate = getFormattedDate(minDate, DateFormat.LOCALE_DATE_STRING_DATE_FORMAT);

      if (maxLocaleDate && minLocaleDate) {
        dateInputError = formatMessage(messages.dateInputRangeError, {
          maxLocaleDate,
          minLocaleDate
        });
      } else if (maxLocaleDate) {
        dateInputError = formatMessage(messages.dateInputMaxError, {
          maxLocaleDate
        });
      } else if (minLocaleDate) {
        dateInputError = formatMessage(messages.dateInputMinError, {
          minLocaleDate
        });
      }

      return dateInputError;
    });

    _defineProperty(this, "handleInputKeyDown", event => {
      const {
        isKeyboardInputAllowed,
        isTextInputAllowed,
        isAccessible
      } = this.props;

      if (!isKeyboardInputAllowed && this.datePicker && this.datePicker.isVisible()) {
        event.stopPropagation();
      } // Stops up/down arrow & spacebar from moving page scroll position since pikaday does not preventDefault correctly


      if (!(isTextInputAllowed || isAccessible) && event.key !== TAB_KEY) {
        event.preventDefault();
      }

      if ((isTextInputAllowed || isAccessible && !this.canUseDateInputType) && event.key === ENTER_KEY) {
        event.preventDefault();
      } // Stops enter & spacebar from opening up the browser's default date picker


      if (isAccessible && (event.key === ENTER_KEY || event.key === ' ')) {
        event.preventDefault();
      }

      if (event.key === ENTER_KEY || event.key === ESCAPE_KEY || event.key === ' ') {
        // Since pikaday auto-selects when you move the select box, enter/space don't do anything but close the date picker
        if (this.datePicker && this.datePicker.isVisible()) {
          this.datePicker.hide();
        }
      }
    });

    _defineProperty(this, "handleOnChange", event => {
      const {
        isAccessible,
        maxDate,
        minDate,
        onChange
      } = this.props;
      const {
        isDateInputInvalid
      } = this.state;

      if (!isAccessible || !this.canUseDateInputType) {
        return;
      }

      if (this.datePicker && this.datePicker.isVisible()) {
        event.stopPropagation();
      }

      const {
        value
      } = event.target;

      if (this.datePicker && value) {
        const parsedDate = this.parseDisplayDateType(value);

        if (parsedDate) {
          if (minDate && parsedDate < minDate || maxDate && parsedDate > maxDate) {
            this.datePicker.setDate(null);
            this.setState({
              isDateInputInvalid: true
            });
            return;
          } // Reset the error styling on valid date input


          if (isDateInputInvalid) {
            this.setState({
              isDateInputInvalid: false,
              showDateInputError: false
            });
          }
        } else {
          this.setState({
            isDateInputInvalid: true
          });
        } // Set date so Pikaday date picker value stays in sync with input


        this.datePicker.setDate(parsedDate, true);

        if (onChange) {
          const formattedDate = this.formatValue(parsedDate);
          onChange(parsedDate, formattedDate);
        }
      } else if (isDateInputInvalid) {
        this.setState({
          isDateInputInvalid: false,
          showDateInputError: false
        });
      }
    });

    _defineProperty(this, "handleInputBlur", event => {
      const {
        isAccessible,
        isTextInputAllowed,
        onBlur
      } = this.props;
      const {
        isDateInputInvalid
      } = this.state;
      const nextActiveElement = event.relatedTarget || document.activeElement; // This is mostly here to cancel out the pikaday hide() on blur

      if (this.datePicker && this.datePicker.isVisible() && nextActiveElement && nextActiveElement === this.datePickerButtonEl) {
        this.shouldStayClosed = true;
        setTimeout(() => {
          this.shouldStayClosed = false;
        }, TOGGLE_DELAY_MS);
      }

      if (onBlur) {
        onBlur(event);
      } // Since we fire parent onChange event if isTextInputAllowed,
      // fire it on blur if the user typed a correct date format


      let inputDate = null;

      if (this.dateInputEl) {
        let dateInputElVal = null;

        if (isAccessible && !this.canUseDateInputType) {
          dateInputElVal = this.parseDisplayDateType(this.dateInputEl.value);
        }

        inputDate = new Date(dateInputElVal || this.dateInputEl.value);
      }

      if ((isTextInputAllowed || isAccessible && !this.canUseDateInputType) && inputDate && inputDate.getDate()) {
        this.onSelectHandler(inputDate);
      }

      if (isAccessible && isDateInputInvalid) this.setState({
        showDateInputError: true
      });
    });

    _defineProperty(this, "handleButtonClick", event => {
      event.preventDefault();
      event.stopPropagation();
      const {
        isAccessible,
        isDisabled
      } = this.props;

      if (isAccessible) {
        if (isDisabled || !this.datePicker) {
          return;
        }

        if (this.datePicker.isVisible()) {
          this.datePicker.hide();
          this.focusDatePicker();
        } else {
          this.datePicker.show();
        }

        return;
      }

      if (!this.shouldStayClosed) {
        this.focusDatePicker();
      }
    });

    _defineProperty(this, "handleOnClick", event => {
      const {
        isAccessible
      } = this.props;

      if (isAccessible) {
        // Suppress Firefox default behavior: clicking on input type "date"
        // opens the browser date picker.
        event.preventDefault();
        event.stopPropagation();
      }
    });

    _defineProperty(this, "formatDisplay", date => {
      const {
        displayFormat,
        intl
      } = this.props;
      return date ? intl.formatDate(date, displayFormat) : '';
    });

    _defineProperty(this, "formatDisplayDateType", date => {
      // Input type "date" only accepts the format YYYY-MM-DD
      return date ? getFormattedDate(date, DateFormat.UTC_ISO_STRING_DATE_FORMAT).slice(0, 10) : '';
    });

    _defineProperty(this, "parseDisplayDateType", dateString => {
      if (dateString && ISO_DATE_FORMAT_PATTERN.test(dateString)) {
        // Calling new Date('YYYY-MM-DD') without 'T00:00:00' yields undesired results:
        // E.g. new Date('2017-06-01') => May 31 2017
        // E.g. new Date('2017-06-01T00:00:00') => June 01 2017
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
        return new Date(`${dateString}T00:00:00`);
      }

      return null;
    });

    _defineProperty(this, "formatValue", date => {
      const {
        dateFormat
      } = this.props;
      return dateFormat ? getFormattedDate(date, dateFormat) : '';
    });

    _defineProperty(this, "clearDate", event => {
      // Prevents the date picker from opening after clearing
      event.preventDefault();
      const {
        isAccessible
      } = this.props;

      if (this.datePicker) {
        this.datePicker.setDate(null);
      }

      this.onSelectHandler(null);

      if (isAccessible) {
        this.focusDatePicker();
      }
    });

    _defineProperty(this, "shouldUseAccessibleFallback", () => {
      const test = document.createElement('input');

      try {
        test.type = 'date';
      } catch (e) {// no-op
      } // If date input falls back to text input, show the fallback


      return test.type === 'text';
    });

    _defineProperty(this, "renderCalendarButton", () => {
      const {
        intl,
        isAccessible,
        isAlwaysVisible,
        isDisabled
      } = this.props;
      const {
        formatMessage
      } = intl;

      if (isAlwaysVisible) {
        return null;
      } // De-emphasizing the Pikaday date picker because it does not meet accessibility standards
      // Screenreaders & navigating via keyboard will no longer pick up on this element


      const accessibleAttrs = isAccessible ? {
        'aria-hidden': true,
        tabIndex: -1
      } : {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
        "aria-label": formatMessage(messages.chooseDate),
        className: "date-picker-open-btn",
        getDOMRef: ref => {
          this.datePickerButtonEl = ref;
        },
        isDisabled: isDisabled,
        onClick: this.handleButtonClick,
        type: _button__WEBPACK_IMPORTED_MODULE_11__["ButtonType"].BUTTON
      }, accessibleAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Calendar16__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    });
  }

  componentDidMount() {
    const {
      customInput,
      dateFormat,
      displayFormat,
      intl,
      isAccessible,
      isAlwaysVisible,
      isTextInputAllowed,
      maxDate,
      minDate,
      onChange,
      value,
      yearRange
    } = this.props;
    const {
      formatDate,
      formatMessage
    } = intl;
    const {
      nextMonth,
      previousMonth
    } = messages;
    let defaultValue = value;

    if (isAccessible && this.shouldUseAccessibleFallback()) {
      this.canUseDateInputType = false;
    } // When date format is utcTime, initial date needs to be converted from being relative to GMT to being
    // relative to browser timezone


    if (dateFormat === DateFormat.UTC_TIME_DATE_FORMAT && value) {
      defaultValue = convertUTCToLocal(value);

      if (onChange) {
        const formattedDate = this.formatValue(defaultValue);
        onChange(defaultValue, formattedDate);
      }
    } // Make sure the DST detection algorithm in browsers is up-to-date


    const year = new Date().getFullYear();
    const {
      timeZone
    } = displayFormat || {};
    const i18n = {
      previousMonth: formatMessage(previousMonth),
      nextMonth: formatMessage(nextMonth),
      months: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(12).map(month => formatDate(new Date(year, month, 15), {
        month: 'long',
        timeZone
      })),
      // weekdays must start with Sunday, so array of dates below is May 1st-8th, 2016
      weekdays: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(1, 8).map(date => formatDate(new Date(2016, 4, date), {
        weekday: 'long',
        timeZone
      })),
      weekdaysShort: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(1, 8).map(date => formatDate(new Date(2016, 4, date), {
        weekday: 'narrow',
        timeZone
      }))
    }; // If "bound" is true (default), the DatePicker will be appended at the end of the document, with absolute positioning
    // If "bound" is false, the DatePicker will be appended to the DOM right after the input, with relative positioning

    const datePickerConfig = {
      bound: !customInput,
      blurFieldOnSelect: false,
      // Available in pikaday > 1.5.1
      setDefaultDate: true,
      defaultDate: defaultValue === null ? undefined : defaultValue,
      field: this.dateInputEl,
      firstDay: localesWhereWeekStartsOnSunday.includes(intl.locale) ? 0 : 1,
      maxDate,
      minDate,
      position: 'bottom left',
      i18n,
      showDaysInNextAndPreviousMonths: true,
      onSelect: this.onSelectHandler,
      yearRange,
      toString: this.formatDisplay
    };

    if (isAccessible) {
      if (this.canUseDateInputType) {
        delete datePickerConfig.field;
        datePickerConfig.trigger = this.dateInputEl;
        datePickerConfig.accessibleFieldEl = this.dateInputEl;
        datePickerConfig.datePickerButtonEl = this.datePickerButtonEl;
      }

      datePickerConfig.parse = this.parseDisplayDateType;
      datePickerConfig.toString = this.formatDisplayDateType;
      datePickerConfig.keyboardInput = false;
    }

    this.datePicker = new _AccessiblePikaday__WEBPACK_IMPORTED_MODULE_10__["default"](datePickerConfig);

    if (isTextInputAllowed) {
      this.updateDateInputValue(this.formatDisplay(defaultValue));
    }

    if (isAlwaysVisible) {
      this.datePicker.show();
      this.datePicker.hide = lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
  } // eslint-disable-next-line camelcase


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.datePicker) return;
    const {
      value: nextValue = null,
      minDate: nextMinDate = null,
      maxDate: nextMaxDate = null
    } = nextProps;
    const {
      value,
      minDate,
      maxDate,
      isTextInputAllowed
    } = this.props;
    const selectedDate = this.datePicker && this.datePicker.getDate(); // only set date when props change

    if (nextValue && !value || !nextValue && value || nextValue && value && nextValue.getTime() !== value.getTime()) {
      this.datePicker.setDate(nextValue);
    } // If text input is allowed the dateInputEl will act as an uncontrolled input and
    // we need to set formatted value manually.


    if (isTextInputAllowed) {
      this.updateDateInputValue(this.formatDisplay(nextValue));
    }

    if (nextMinDate && !minDate || nextMinDate && minDate || nextMinDate && minDate && nextMinDate.getTime() !== minDate.getTime()) {
      this.datePicker.setMinDate(nextMinDate);

      if (selectedDate && selectedDate < nextMinDate) {
        this.datePicker.gotoDate(nextMinDate);
      }
    }

    if (nextMaxDate && !maxDate || !nextMaxDate && maxDate || nextMaxDate && maxDate && nextMaxDate.getTime() !== maxDate.getTime()) {
      this.datePicker.setMaxDate(nextMaxDate);

      if (selectedDate && nextMaxDate && selectedDate > nextMaxDate) {
        this.datePicker.gotoDate(nextMaxDate);
      }
    }
  }

  componentWillUnmount() {
    if (this.datePicker) {
      this.datePicker.destroy();
    }
  }

  updateDateInputValue(value) {
    if (this.dateInputEl) {
      this.dateInputEl.value = value;
    }
  }

  render() {
    const {
      className,
      customInput,
      description,
      error,
      errorTooltipPosition,
      hideLabel,
      hideOptionalLabel,
      inputProps,
      intl,
      isAccessible,
      isClearable,
      isDisabled,
      isRequired,
      isTextInputAllowed,
      label,
      maxDate,
      minDate,
      name,
      onFocus,
      placeholder,
      resinTarget,
      value
    } = this.props;
    const {
      isDateInputInvalid
    } = this.state;
    const {
      formatMessage
    } = intl;
    const errorMessage = error || this.getDateInputError();
    const hasError = !!errorMessage || isDateInputInvalid;
    const hasValue = !!value || isDateInputInvalid;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'date-picker-wrapper', {
      'show-clear-btn': isClearable && hasValue && !isDisabled,
      'show-error': hasError
    });
    const ariaAttrs = {
      'aria-invalid': hasError,
      'aria-required': isRequired,
      'aria-errormessage': this.errorMessageID,
      'aria-describedby': description ? this.descriptionID : undefined
    };
    const resinTargetAttr = resinTarget ? {
      [_common_variables__WEBPACK_IMPORTED_MODULE_6__["RESIN_TAG_TARGET"]]: resinTarget
    } : {};
    let valueAttr;

    if (isAccessible) {
      valueAttr = {
        defaultValue: this.formatDisplayDateType(value)
      };
    } else if (isTextInputAllowed) {
      valueAttr = {
        defaultValue: this.formatDisplay(value)
      };
    } else {
      valueAttr = {
        value: this.formatDisplay(value)
      };
    }

    let onChangeAttr;

    if (isAccessible && this.canUseDateInputType) {
      onChangeAttr = {
        onChange: this.handleOnChange
      };
    } else if (isTextInputAllowed || isAccessible && !this.canUseDateInputType) {
      onChangeAttr = {};
    } else {
      // Fixes prop type error about read-only field
      // Not adding readOnly so constraint validation works
      onChangeAttr = {
        onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
      };
    }

    let additionalAttrs;

    if (isAccessible && this.canUseDateInputType) {
      additionalAttrs = {
        max: this.formatDisplayDateType(maxDate) || '9999-12-31',
        min: this.formatDisplayDateType(minDate) || '0001-01-01'
      };
    } else if (isAccessible && !this.canUseDateInputType) {
      // "name" prop is required for pattern validation to be surfaced on form submit. See components/form-elements/form/Form.js
      // "title" prop is shown during constraint validation as a description of the pattern
      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern#usability
      additionalAttrs = {
        name,
        pattern: ISO_DATE_FORMAT_PATTERN.source,
        title: 'YYYY-MM-DD'
      };
    } else {
      additionalAttrs = {};
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "date-picker-icon-holder"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_12__["default"], {
      hideLabel: hideLabel,
      showOptionalText: !hideOptionalLabel && !isRequired,
      text: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !!description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      id: this.descriptionID,
      className: "date-picker-description"
    }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "date-picker-error-tooltip",
      isShown: !!errorMessage,
      position: errorTooltipPosition,
      text: errorMessage || '',
      theme: _tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipTheme"].ERROR
    }, customInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](customInput, _objectSpread(_objectSpread({
      disabled: isDisabled,
      ref: ref => {
        this.dateInputEl = ref;
      },
      required: isRequired
    }, resinTargetAttr), ariaAttrs)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
      ref: ref => {
        this.dateInputEl = ref;
      },
      className: "date-picker-input",
      disabled: isDisabled,
      onBlur: this.handleInputBlur,
      onClick: this.handleOnClick,
      placeholder: placeholder || formatMessage(messages.chooseDate),
      required: isRequired,
      type: isAccessible && this.canUseDateInputType ? 'date' : 'text'
    }, onChangeAttr, {
      onFocus: onFocus,
      onKeyDown: this.handleInputKeyDown
    }, resinTargetAttr, ariaAttrs, inputProps, valueAttr, additionalAttrs))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      id: this.errorMessageID,
      className: "accessibility-hidden",
      role: "alert"
    }, errorMessage))), isClearable && hasValue && !isDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "aria-label": formatMessage(messages.dateClearButton),
      className: "date-picker-clear-btn",
      onClick: this.clearDate,
      type: _button__WEBPACK_IMPORTED_MODULE_11__["ButtonType"].BUTTON
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_ClearBadge16__WEBPACK_IMPORTED_MODULE_9__["default"], null)) : null, hasError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon_fill_Alert16__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "date-picker-icon-alert",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], messages.iconAlertText)
    }) : null, this.renderCalendarButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      className: "date-picker-unix-time-input",
      name: name,
      readOnly: true,
      type: "hidden",
      value: value ? this.formatValue(value) : ''
    })));
  }

}

_defineProperty(DatePicker, "defaultProps", {
  className: '',
  dateFormat: DateFormat.UNIX_TIME_DATE_FORMAT,
  displayFormat: {},
  error: '',
  errorTooltipPosition: _tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipPosition"].BOTTOM_LEFT,
  inputProps: {},
  isClearable: true,
  isKeyboardInputAllowed: false,
  isTextInputAllowed: false,
  yearRange: 10
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(DatePicker));

/***/ }),

/***/ "./src/components/flyout/Flyout.js":
/*!*****************************************!*\
  !*** ./src/components/flyout/Flyout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _FlyoutContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FlyoutContext */ "./src/components/flyout/FlyoutContext.js");
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Flyout.scss */ "./src/components/flyout/Flyout.scss");
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Flyout_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const BOTTOM_CENTER = 'bottom-center';
const BOTTOM_LEFT = 'bottom-left';
const BOTTOM_RIGHT = 'bottom-right';
const MIDDLE_LEFT = 'middle-left';
const MIDDLE_RIGHT = 'middle-right';
const TOP_CENTER = 'top-center';
const TOP_LEFT = 'top-left';
const TOP_RIGHT = 'top-right';
const positions = {
  [BOTTOM_CENTER]: {
    attachment: 'top center',
    targetAttachment: 'bottom center'
  },
  [BOTTOM_LEFT]: {
    attachment: 'top right',
    targetAttachment: 'bottom right'
  },
  [BOTTOM_RIGHT]: {
    attachment: 'top left',
    targetAttachment: 'bottom left'
  },
  [MIDDLE_LEFT]: {
    attachment: 'middle right',
    targetAttachment: 'middle left'
  },
  [MIDDLE_RIGHT]: {
    attachment: 'middle left',
    targetAttachment: 'middle right'
  },
  [TOP_CENTER]: {
    attachment: 'bottom center',
    targetAttachment: 'top center'
  },
  [TOP_LEFT]: {
    attachment: 'bottom right',
    targetAttachment: 'top right'
  },
  [TOP_RIGHT]: {
    attachment: 'bottom left',
    targetAttachment: 'top left'
  }
};
/**
 * Checks if there is a clickable ancestor or self
 * @param {Node} rootNode The base node we should stop at
 * @param {Node} targetNode The target node of the event
 * @returns {boolean}
 */

const hasClickableAncestor = (rootNode, targetNode) => {
  // Check if the element or any of the ancestors are click-able (stopping at the component boundary)
  let currentNode = targetNode;

  while (currentNode && currentNode instanceof Node && currentNode.parentNode && currentNode !== rootNode) {
    const nodeName = currentNode.nodeName.toUpperCase();

    if (nodeName === 'A' || nodeName === 'BUTTON') {
      return true;
    }

    currentNode = currentNode.parentNode;
  }

  return false;
};
/**
 * Checks if the target element is inside an element with the given CSS class.
 * @param {HTMLElement} targetEl The target element
 * @param {string} className A CSS class on the element to check for
 */


const hasClassAncestor = (targetEl, className) => {
  let el = targetEl;

  while (el && el instanceof HTMLElement) {
    if (el.classList.contains(className)) {
      return true;
    }

    el = el.parentNode;
  }

  return false;
};

class Flyout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOverlayClick", event => {
      const overlayNode = document.getElementById(this.overlayID);
      const {
        closeOnClick,
        closeOnClickPredicate
      } = this.props;

      if (!closeOnClick || !hasClickableAncestor(overlayNode, event.target)) {
        return;
      }

      if (closeOnClickPredicate && !closeOnClickPredicate(event)) {
        return;
      }

      this.handleOverlayClose();
    });

    _defineProperty(this, "handleButtonClick", event => {
      const {
        isVisible
      } = this.state;

      if (isVisible) {
        this.closeOverlay();
      } else {
        this.openOverlay();
      } // In at least one place, .click() is called programmatically
      //     src/features/presence/Presence.js
      // In the programmatic case, the event is not supposed to trigger
      // autofocus of the content (TBD if this is truly correct behavior).
      // This line was using "event.detail > 0"
      // to detect if a click event was from a user, but that made keyboard
      // triggers of the button click behave differently than the mouse.
      // So, we use "isTrusted" instead. Note: React polyfills for IE11.
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted
      // https://reactjs.org/docs/events.html


      const isButtonClicked = event.isTrusted;
      this.setState({
        isButtonClicked
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleButtonHover", () => {
      const {
        openOnHover,
        openOnHoverDelayTimeout
      } = this.props;

      if (openOnHover) {
        clearTimeout(this.hoverDelay);
        this.hoverDelay = setTimeout(() => {
          this.openOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(this, "handleButtonHoverLeave", () => {
      const {
        openOnHover,
        openOnHoverDelayTimeout
      } = this.props;

      if (openOnHover) {
        clearTimeout(this.hoverDelay);
        this.hoverDelay = setTimeout(() => {
          this.closeOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(this, "handleKeyPress", () => {
      if (_constants__WEBPACK_IMPORTED_MODULE_4__["KEYS"].enter) {
        this.openOverlay();
        this.focusButton();
      }
    });

    _defineProperty(this, "openOverlay", () => {
      this.setState({
        isVisible: true
      });
      const {
        onOpen
      } = this.props;

      if (onOpen) {
        onOpen();
      }
    });

    _defineProperty(this, "closeOverlay", () => {
      this.setState({
        isVisible: false
      });
      const {
        onClose
      } = this.props;

      if (onClose) {
        onClose();
      }
    });

    _defineProperty(this, "focusButton", () => {
      const buttonEl = document.getElementById(this.overlayButtonID);

      if (buttonEl) {
        buttonEl.focus();
      }
    });

    _defineProperty(this, "handleOverlayClose", () => {
      this.focusButton();
      this.closeOverlay();
    });

    _defineProperty(this, "handleDocumentClickOrWindowBlur", event => {
      const {
        portaledClasses,
        closeOnClickOutside,
        closeOnWindowBlur
      } = this.props;
      const {
        isVisible
      } = this.state;

      if (!isVisible || !(closeOnClickOutside || closeOnWindowBlur)) {
        return;
      }

      const overlayNode = document.getElementById(this.overlayID);
      const buttonNode = document.getElementById(this.overlayButtonID);
      const isInsideToggleButton = buttonNode && event.target instanceof Node && buttonNode.contains(event.target) || buttonNode === event.target;
      const isInsideOverlay = overlayNode && event.target instanceof Node && overlayNode.contains(event.target) || overlayNode === event.target;
      const isInside = isInsideToggleButton || isInsideOverlay;

      if (isInside || portaledClasses.some(className => hasClassAncestor(event.target, className))) {
        return;
      } // Only close overlay when the click is outside of the flyout or window loses focus


      this.closeOverlay();
    });

    this.overlayID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('overlay');
    this.overlayButtonID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('flyoutbutton');
    this.state = {
      isVisible: props.isVisibleByDefault,
      isButtonClicked: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isVisible && this.state.isVisible) {
      const {
        closeOnClickOutside,
        closeOnWindowBlur
      } = this.props; // When overlay is being opened

      if (closeOnClickOutside) {
        document.addEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        document.addEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      }

      if (closeOnWindowBlur) {
        window.addEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }
    } else if (prevState.isVisible && !this.state.isVisible) {
      // When overlay is being closed
      document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
      window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
    }
  }

  componentWillUnmount() {
    if (this.state.isVisible) {
      // Clean-up global click handlers
      document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
      window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
    }

    if (this.props.openOnHover && this.hoverDelay) {
      clearTimeout(this.hoverDelay);
    }
  }

  render() {
    const {
      children,
      className = '',
      constrainToScrollParent,
      constrainToWindow,
      isResponsive,
      offset,
      openOnHover,
      position,
      shouldDefaultFocus
    } = this.props;
    const {
      isButtonClicked,
      isVisible
    } = this.state;
    const elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
    const tetherPosition = positions[position];

    if (elements.length !== 2) {
      throw new Error('Flyout must have exactly two children: A button component and a <Overlay>');
    }

    const overlayButton = elements[0];
    const overlayContent = elements[1];
    const overlayButtonProps = {
      id: this.overlayButtonID,
      key: this.overlayButtonID,
      onClick: this.handleButtonClick,
      onKeyPress: this.handleKeyPress,
      onMouseEnter: this.handleButtonHover,
      onMouseLeave: this.handleButtonHoverLeave,
      role: 'button',
      tabIndex: '0',
      'aria-haspopup': 'true',
      'aria-expanded': isVisible ? 'true' : 'false'
    };

    if (isVisible) {
      overlayButtonProps['aria-controls'] = this.overlayID;
    }

    const overlayProps = {
      id: this.overlayID,
      key: this.overlayID,
      role: 'dialog',
      onClick: this.handleOverlayClick,
      onClose: this.handleOverlayClose,
      onMouseEnter: this.handleButtonHover,
      onMouseLeave: this.handleButtonHoverLeave,
      shouldDefaultFocus: shouldDefaultFocus || !isButtonClicked && !openOnHover,
      'aria-labelledby': this.overlayButtonID
    };
    const constraints = [];

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

    const tetherProps = {
      classPrefix: 'flyout-overlay',
      attachment: tetherPosition.attachment,
      targetAttachment: tetherPosition.targetAttachment,
      enabled: isVisible,
      classes: {
        element: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flyout-overlay', {
          'bdl-Flyout--responsive': isResponsive
        }, className)
      },
      constraints
    };

    if (offset) {
      tetherProps.offset = offset;
    } else {
      switch (position) {
        case BOTTOM_CENTER:
        case BOTTOM_LEFT:
        case BOTTOM_RIGHT:
          tetherProps.offset = '-10px 0';
          break;

        case TOP_CENTER:
        case TOP_LEFT:
        case TOP_RIGHT:
          tetherProps.offset = '10px 0';
          break;

        case MIDDLE_LEFT:
          tetherProps.offset = '0 10px';
          break;

        case MIDDLE_RIGHT:
          tetherProps.offset = '0 -10px';
          break;

        default: // no default

      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_2___default.a, tetherProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](overlayButton, overlayButtonProps), isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FlyoutContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: {
        closeOverlay: this.closeOverlay
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](overlayContent, overlayProps)));
  }

}

_defineProperty(Flyout, "defaultProps", {
  className: '',
  closeOnClick: true,
  closeOnClickOutside: true,
  closeOnWindowBlur: false,
  constrainToScrollParent: true,
  constrainToWindow: false,
  isResponsive: false,
  isVisibleByDefault: false,
  openOnHover: false,
  openOnHoverDelayTimeout: 300,
  portaledClasses: [],
  position: BOTTOM_RIGHT
});

/* harmony default export */ __webpack_exports__["default"] = (Flyout);

/***/ }),

/***/ "./src/components/flyout/Flyout.scss":
/*!*******************************************!*\
  !*** ./src/components/flyout/Flyout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/flyout/FlyoutContext.js":
/*!************************************************!*\
  !*** ./src/components/flyout/FlyoutContext.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  closeOverlay: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a
}));

/***/ }),

/***/ "./src/components/flyout/Overlay.js":
/*!******************************************!*\
  !*** ./src/components/flyout/Overlay.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus-trap */ "./src/components/focus-trap/index.js");
const _excluded = ["children", "className"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Overlay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "closeOverlay", () => {
      const {
        onClose
      } = this.props;

      if (!onClose) {
        return;
      }

      setTimeout(() => onClose(), 0);
    });

    _defineProperty(this, "handleOverlayKeyDown", event => {
      if (event.key !== 'Escape') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.closeOverlay();
    });
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const overlayProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['onClose']);
    overlayProps.className = className;
    overlayProps.handleOverlayKeyDown = this.handleOverlayKeyDown;
    overlayProps.tabIndex = 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_focus_trap__WEBPACK_IMPORTED_MODULE_2__["default"], overlayProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "overlay"
    }, children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./src/components/flyout/OverlayHeader.scss":
/*!**************************************************!*\
  !*** ./src/components/flyout/OverlayHeader.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/flyout/OverlayHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/flyout/OverlayHeader.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _close_button_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close-button/CloseButton */ "./src/components/close-button/CloseButton.tsx");
/* harmony import */ var _FlyoutContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FlyoutContext */ "./src/components/flyout/FlyoutContext.js");
/* harmony import */ var _OverlayHeader_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverlayHeader.scss */ "./src/components/flyout/OverlayHeader.scss");
/* harmony import */ var _OverlayHeader_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_OverlayHeader_scss__WEBPACK_IMPORTED_MODULE_4__);


 // @ts-ignore flow




const OverlayHeader = _ref => {
  let {
    children,
    className
  } = _ref;

  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const {
    closeOverlay
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_FlyoutContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-OverlayHeader', className),
    "data-testid": "bdl-OverlayHeader",
    onClick: handleClick,
    role: "presentation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-OverlayHeader-content"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_close_button_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: closeOverlay
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayHeader);

/***/ }),

/***/ "./src/components/flyout/index.js":
/*!****************************************!*\
  !*** ./src/components/flyout/index.js ***!
  \****************************************/
/*! exports provided: Flyout, FlyoutContext, Overlay, OverlayHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flyout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flyout */ "./src/components/flyout/Flyout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flyout", function() { return _Flyout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FlyoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlyoutContext */ "./src/components/flyout/FlyoutContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlyoutContext", function() { return _FlyoutContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overlay */ "./src/components/flyout/Overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _OverlayHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverlayHeader */ "./src/components/flyout/OverlayHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayHeader", function() { return _OverlayHeader__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/form-elements/form/Form.js":
/*!***************************************************!*\
  !*** ./src/components/form-elements/form/Form.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getFormValidityState(form) {
  // Turn the form.elements HTMLCollection into Array before reducing
  return [].slice.call(form.elements).reduce((validityObj, inputEl) => {
    // Only serialize inputs that have a name defined
    if (inputEl.name && !inputEl.validity.valid) {
      const validityState = inputEl.validity;

      if (inputEl.validity.customError) {
        // If the input is displaying a custom error,
        // we expose the errorCode stored in the validationMessage
        validityState.customErrorCode = inputEl.validationMessage;
      }

      validityObj[inputEl.name] = {
        validityState
      };
      return validityObj;
    }

    return validityObj;
  }, {});
}

class Form extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", _ref => {
      let {
        currentTarget
      } = _ref;

      if (this.props.onChange) {
        const formData = form_serialize__WEBPACK_IMPORTED_MODULE_2___default()(currentTarget, {
          hash: true,
          empty: true
        });
        this.props.onChange(formData);
      }
    });

    _defineProperty(this, "onSubmit", event => {
      const form = event.target;
      event.preventDefault();
      const isValid = form.checkValidity();
      const {
        onInvalidSubmit,
        onValidSubmit
      } = this.props;
      const {
        registeredInputs
      } = this.state;

      if (isValid) {
        const formData = form_serialize__WEBPACK_IMPORTED_MODULE_2___default()(form, {
          hash: true,
          empty: true
        });
        onValidSubmit(formData);
      } else {
        const formValidityState = getFormValidityState(form); // Push form validity state to inputs so errors are shown on submit

        Object.keys(formValidityState).forEach(key => registeredInputs[key] && registeredInputs[key](formValidityState[key].validityState));

        if (onInvalidSubmit) {
          onInvalidSubmit(formValidityState);
        }
      }
    });

    _defineProperty(this, "registerInput", (name, setValidityStateHandler) => {
      const {
        registeredInputs
      } = this.state;

      if (registeredInputs[name]) {
        throw new Error(`Input '${name}' is already registered.`);
      }

      const nextState = this.state;
      nextState.registeredInputs[name] = setValidityStateHandler;
      this.setState(nextState);
    });

    _defineProperty(this, "unregisterInput", name => {
      const nextState = this.state;
      delete nextState.registeredInputs[name];
      this.setState(nextState);
    });

    this.state = {
      registeredInputs: {}
    };
  }

  getChildContext() {
    return {
      form: {
        registerInput: this.registerInput.bind(this),
        unregisterInput: this.unregisterInput.bind(this)
      }
    };
  }

  componentDidUpdate(_ref2) {
    let {
      formValidityState: prevFormValidityState
    } = _ref2;
    const {
      formValidityState
    } = this.props;
    const {
      registeredInputs
    } = this.state;

    if (formValidityState !== prevFormValidityState) {
      Object.keys(formValidityState).forEach(key => {
        if (registeredInputs[key]) {
          registeredInputs[key](formValidityState[key]);
        }
      });
    }
  }

  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      noValidate: true,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    }, children);
  }

}

_defineProperty(Form, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,

  /** Called when an input in the form changes */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** Called when a valid submit is made */
  onValidSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /** Called when an invalid submit is made */
  onInvalidSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** An object mapping input names to error messages */
  formValidityState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object // eslint-disable-line react/no-unused-prop-types

});

_defineProperty(Form, "childContextTypes", {
  form: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    registerInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    unregisterInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/primary-button/PrimaryButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/primary-button/PrimaryButton.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button */ "./src/components/button/Button.tsx");
const _excluded = ["children", "className"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const PrimaryButton = _ref => {
  let {
    children,
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: `btn-primary ${className}`
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/components/scroll-wrapper/ScrollWrapper.js":
/*!********************************************************!*\
  !*** ./src/components/scroll-wrapper/ScrollWrapper.js ***!
  \********************************************************/
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
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollWrapper.scss */ "./src/components/scroll-wrapper/ScrollWrapper.scss");
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["children", "className", "scrollRefFn", "shadowSize"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ScrollWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      shouldShowTopScrollShadow: false,
      shouldShowBottomScrollShadow: false
    });

    _defineProperty(this, "componentDidMount", () => {
      const newState = this.getScrollShadowState();
      this.setState(newState);

      if (this.scrollRef) {
        this.scrollRef.addEventListener('transitionend', this.throttledOnContentScroll); // Apparently, flow only allows for one truthy check per command, so I have to either:
        // 1) duplicate this check per call, or
        // 2) nest if checks (_slightly more performant_)

        if (this.scrollRef) {
          this.observer.observe(this.scrollRef, {
            attributes: true,
            childlist: true,
            subtree: true
          });
        }
      }
    });

    _defineProperty(this, "onContentScroll", () => {
      const newState = this.getScrollShadowState();
      this.setState(newState);
    });

    _defineProperty(this, "getScrollShadowState", () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = this.scrollRef || {};
      const newState = {};

      if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowTopScrollShadow = true;
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === 0) {
        newState.shouldShowTopScrollShadow = false;
      }

      if (scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = false;
      }

      return newState;
    });

    _defineProperty(this, "scrollRef", null);

    _defineProperty(this, "throttledOnContentScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(this.onContentScroll, 100));

    this.observer = new MutationObserver(this.throttledOnContentScroll);
  }

  componentWillUnmount() {
    this.observer.disconnect();

    if (this.scrollRef) {
      this.scrollRef.removeEventListener('transitionend', this.throttledOnContentScroll);
    }
  }

  render() {
    const _this$props = this.props,
          {
      children,
      className = '',
      scrollRefFn,
      shadowSize
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, _excluded);

    const {
      shouldShowTopScrollShadow,
      shouldShowBottomScrollShadow
    } = this.state;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`scroll-container`, className, {
      'is-showing-top-shadow': shouldShowTopScrollShadow,
      'is-showing-bottom-shadow': shouldShowBottomScrollShadow
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
      className: classes
    }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('scroll-wrap-container', `style--${shadowSize}`),
      onScroll: this.throttledOnContentScroll,
      ref: el => {
        this.scrollRef = el;
        scrollRefFn(el);
      }
    }, children));
  }

}

_defineProperty(ScrollWrapper, "defaultProps", {
  scrollRefFn: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  shadowSize: 'cover'
});

/* harmony default export */ __webpack_exports__["default"] = (ScrollWrapper);

/***/ }),

/***/ "./src/components/scroll-wrapper/ScrollWrapper.scss":
/*!**********************************************************!*\
  !*** ./src/components/scroll-wrapper/ScrollWrapper.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/scroll-wrapper/index.js":
/*!************************************************!*\
  !*** ./src/components/scroll-wrapper/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollWrapper */ "./src/components/scroll-wrapper/ScrollWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/selector-dropdown/SelectorDropdown.js":
/*!**************************************************************!*\
  !*** ./src/components/selector-dropdown/SelectorDropdown.js ***!
  \**************************************************************/
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
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _scroll_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scroll-wrapper */ "./src/components/scroll-wrapper/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectorDropdown.scss */ "./src/components/selector-dropdown/SelectorDropdown.scss");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

class SelectorDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setActiveItem", index => {
      this.setState({
        activeItemIndex: index
      });

      if (index === -1) {
        this.setActiveItemID(null);
      }
    });

    _defineProperty(this, "setActiveItemID", id => {
      const {
        scrollBoundarySelector
      } = this.props;
      const itemEl = id ? document.getElementById(id) : null;
      const scrollOptions = {
        block: 'nearest'
      }; // Allow null in case we want to clear the default
      // boundary from scrollIntoView

      if (typeof scrollBoundarySelector !== 'undefined') {
        scrollOptions.boundary = document.querySelector(scrollBoundarySelector);
      }

      this.setState({
        activeItemID: id
      }, () => {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(itemEl, scrollOptions);
      });
    });

    _defineProperty(this, "haveChildrenChanged", prevChildren => {
      const {
        children
      } = this.props;
      const childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);
      const prevChildrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(prevChildren);

      if (childrenCount !== prevChildrenCount) {
        return true;
      }

      if (childrenCount === 0) {
        return false;
      }

      const childrenKeys = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, child => child.key);
      const prevChildrenKeys = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(prevChildren, child => child.key);
      return childrenKeys.some((childKey, index) => childKey !== prevChildrenKeys[index]);
    });

    _defineProperty(this, "resetActiveItem", () => {
      this.setState({
        activeItemID: null,
        activeItemIndex: -1
      });
    });

    _defineProperty(this, "handleFocus", () => {
      this.openDropdown();
    });

    _defineProperty(this, "handleDocumentClick", event => {
      const container = this.selectorDropdownRef.current;
      const isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        this.closeDropdown();
      }
    });

    _defineProperty(this, "handleInput", () => {
      this.openDropdown();
    });

    _defineProperty(this, "handleKeyDown", event => {
      const {
        children,
        isAlwaysOpen,
        onEnter
      } = this.props;
      const {
        activeItemIndex
      } = this.state;
      const childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);

      switch (event.key) {
        case 'ArrowDown':
          if (this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            const nextIndex = activeItemIndex === childrenCount - 1 ? -1 : activeItemIndex + 1;
            this.setActiveItem(nextIndex);
          } else {
            this.openDropdown();
          }

          break;

        case 'ArrowUp':
          if (this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            const prevIndex = activeItemIndex === -1 ? childrenCount - 1 : activeItemIndex - 1;
            this.setActiveItem(prevIndex);
          } else {
            this.openDropdown();
          }

          break;

        case 'Enter':
          if (activeItemIndex !== -1 && this.isDropdownOpen()) {
            stopDefaultEvent(event);
            this.selectItem(activeItemIndex, event);
          } else if (onEnter) {
            onEnter(event);
          }

          break;

        case 'Tab':
          if (this.isDropdownOpen()) {
            this.closeDropdown();
            this.resetActiveItem();
          }

          break;

        case 'Escape':
          if (!isAlwaysOpen && this.isDropdownOpen()) {
            stopDefaultEvent(event);
            this.closeDropdown();
            this.resetActiveItem();
          }

          break;

        default:
          this.handleInput();
      }
    });

    _defineProperty(this, "isDropdownOpen", () => {
      const {
        children,
        isAlwaysOpen
      } = this.props;
      const {
        shouldOpen
      } = this.state;
      const childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);
      return childrenCount > 0 && (!!isAlwaysOpen || shouldOpen);
    });

    _defineProperty(this, "openDropdown", () => {
      if (!this.state.shouldOpen) {
        const {
          shouldSetActiveItemOnOpen
        } = this.props;

        if (shouldSetActiveItemOnOpen) {
          this.setActiveItem(0);
        }

        this.setState({
          shouldOpen: true
        });
        document.addEventListener('click', this.handleDocumentClick, true);
      }
    });

    _defineProperty(this, "closeDropdown", () => {
      this.setState({
        shouldOpen: false
      });
      document.removeEventListener('click', this.handleDocumentClick, true);
    });

    _defineProperty(this, "selectItem", (index, event) => {
      const {
        onSelect
      } = this.props;

      if (onSelect) {
        onSelect(index, event);
      }

      this.closeDropdown();
    });

    this.listboxID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('listbox');
    this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      shouldOpen: false
    };
    this.selectorDropdownRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
  }

  componentDidUpdate(_ref) {
    let {
      shouldSetActiveItemOnOpen,
      children
    } = _ref;

    if (this.haveChildrenChanged(children)) {
      // For UX purposes filtering the items is equivalent
      // to re-opening the dropdown. In such cases we highlight
      // the first item when configured to do so
      if (shouldSetActiveItemOnOpen) {
        this.setActiveItem(0);
      } else {
        this.resetActiveItem();
      }
    }
  }

  componentWillUnmount() {
    // just in case event listener was added during openDropdown() but the component
    // gets unmounted without closeDropdown()
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  render() {
    const {
      listboxID,
      selectItem,
      setActiveItem,
      setActiveItemID,
      closeDropdown
    } = this;
    const {
      dividerIndex,
      overlayTitle,
      children,
      className,
      title,
      selector,
      shouldScroll
    } = this.props;
    const {
      activeItemID,
      activeItemIndex
    } = this.state;
    const isOpen = this.isDropdownOpen();
    const inputProps = {
      'aria-activedescendant': activeItemID,
      'aria-autocomplete': 'list',
      'aria-expanded': isOpen,
      role: 'combobox'
    };

    if (isOpen) {
      inputProps['aria-owns'] = listboxID;
    }

    const list = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('overlay', overlayTitle ? overlayTitle.toLowerCase() : ''),
      id: listboxID,
      role: "listbox"
    }, overlayTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
      className: "SelectorDropdown-title"
    }, overlayTitle), react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (item, index) => {
      const itemProps = {
        onClick: event => {
          selectItem(index, event);
        },

        /* preventDefault on mousedown so blur doesn't happen before click */
        onMouseDown: event => {
          event.preventDefault();
        },
        onMouseEnter: () => {
          setActiveItem(index);
        },
        closeDropdown: () => {
          closeDropdown();
        },
        setActiveItemID
      };

      if (index === activeItemIndex) {
        itemProps.isActive = true;
      }

      const hasDivider = index === dividerIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, hasDivider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", {
        className: "SelectorDropdown-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](item, itemProps));
    })); // change onPaste back to onInput when React fixes this IE11 bug: https://github.com/facebook/react/issues/7280
    // We're simulating the blur event with the tab key listener and the
    // click listener as a proxy because IE will trigger a blur when
    // using the scrollbar in the dropdown which indavertently closes the dropdown.

    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('SelectorDropdown', className),
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onPaste: this.handleInput,
        ref: this.selectorDropdownRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](selector, {
        inputProps
      }), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: `${_constants__WEBPACK_IMPORTED_MODULE_5__["OVERLAY_WRAPPER_CLASS"]} is-visible`
      }, title, shouldScroll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_scroll_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], null, list) : list))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectorDropdown);

/***/ }),

/***/ "./src/components/selector-dropdown/SelectorDropdown.scss":
/*!****************************************************************!*\
  !*** ./src/components/selector-dropdown/SelectorDropdown.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/selector-dropdown/index.js":
/*!***************************************************!*\
  !*** ./src/components/selector-dropdown/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorDropdown */ "./src/components/selector-dropdown/SelectorDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/icon/fill/Alert16.tsx":
/*!***********************************!*\
  !*** ./src/icon/fill/Alert16.tsx ***!
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

const Alert16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M8 1a7 7 0 110 14A7 7 0 018 1zm0 10a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 00-1 1v5a1 1 0 002 0V4a1 1 0 00-1-1z"
}));

/* harmony default export */ __webpack_exports__["default"] = (Alert16);

/***/ }),

/***/ "./src/icon/fill/Calendar16.tsx":
/*!**************************************!*\
  !*** ./src/icon/fill/Calendar16.tsx ***!
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

const Calendar16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M13.436 0c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v10.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H2.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 01-.757-.756C.093 14.65 0 14.327 0 13.437V2.563c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757C1.35.093 1.673 0 2.563 0h10.873zM13 4H3a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  transform: "translate(3 5.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 2.833,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 5.667,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 8.5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  y: 2.5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 2.83,
  y: 2.5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 5.67,
  y: 2.5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 8.5,
  y: 2.5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  y: 5,
  rx: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 1.5,
  height: 1.5,
  x: 2.83,
  y: 5,
  rx: 0.5
}))));

/* harmony default export */ __webpack_exports__["default"] = (Calendar16);

/***/ }),

/***/ "./src/icon/fill/ClearBadge16.tsx":
/*!****************************************!*\
  !*** ./src/icon/fill/ClearBadge16.tsx ***!
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

const ClearBadge16 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_accessible_svg_AccessibleSVG__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
  width: 16,
  height: 16,
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
  fillRule: "evenodd",
  d: "M7.19 8L4.46 5.27a.572.572 0 01.81-.81L8 7.19l2.73-2.73a.572.572 0 01.81.81L8.81 8l2.73 2.73a.572.572 0 01-.81.81L8 8.81l-2.73 2.73a.572.572 0 01-.81-.81L7.19 8zm5.76 4.95a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z"
}));

/* harmony default export */ __webpack_exports__["default"] = (ClearBadge16);

/***/ }),

/***/ "./src/icons/general/IconClose.tsx":
/*!*****************************************!*\
  !*** ./src/icons/general/IconClose.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.ts");



const IconClose = _ref => {
  let {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `icon-close ${className}`,
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fill: color
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClose);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~metadata-sidebar.no.react.js.map