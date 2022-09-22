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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~details-sidebar"],{

/***/ "./node_modules/filesize/lib/filesize.js":
/*!***********************************************!*\
  !*** ./node_modules/filesize/lib/filesize.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * filesize
 *
 * @copyright 2019 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 4.2.1
 */
(function (global) {
  var b = /^(b|B)$/,
      symbol = {
    iec: {
      bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
      bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
    },
    jedec: {
      bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
      bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    }
  },
      fullform = {
    iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
    jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
  };
  /**
   * filesize
   *
   * @method filesize
   * @param  {Mixed}   arg        String, Int or Float to transform
   * @param  {Object}  descriptor [Optional] Flags
   * @return {String}             Readable file size String
   */

  function filesize(arg) {
    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var result = [],
        val = 0,
        e = void 0,
        base = void 0,
        bits = void 0,
        ceil = void 0,
        full = void 0,
        fullforms = void 0,
        locale = void 0,
        localeOptions = void 0,
        neg = void 0,
        num = void 0,
        output = void 0,
        round = void 0,
        unix = void 0,
        separator = void 0,
        spacer = void 0,
        standard = void 0,
        symbols = void 0;

    if (isNaN(arg)) {
      throw new TypeError("Invalid number");
    }

    bits = descriptor.bits === true;
    unix = descriptor.unix === true;
    base = descriptor.base || 2;
    round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
    locale = descriptor.locale !== void 0 ? descriptor.locale : "";
    localeOptions = descriptor.localeOptions || {};
    separator = descriptor.separator !== void 0 ? descriptor.separator : "";
    spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
    symbols = descriptor.symbols || {};
    standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
    output = descriptor.output || "string";
    full = descriptor.fullform === true;
    fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
    e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
    num = Number(arg);
    neg = num < 0;
    ceil = base > 2 ? 1000 : 1024; // Flipping a negative number to determine the size

    if (neg) {
      num = -num;
    } // Determining the exponent


    if (e === -1 || isNaN(e)) {
      e = Math.floor(Math.log(num) / Math.log(ceil));

      if (e < 0) {
        e = 0;
      }
    } // Exceeding supported length, time to reduce & multiply


    if (e > 8) {
      e = 8;
    }

    if (output === "exponent") {
      return e;
    } // Zero is now a special case because bytes divide by 1


    if (num === 0) {
      result[0] = 0;
      result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
    } else {
      val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

      if (bits) {
        val = val * 8;

        if (val >= ceil && e < 8) {
          val = val / ceil;
          e++;
        }
      }

      result[0] = Number(val.toFixed(e > 0 ? round : 0));

      if (result[0] === ceil && e < 8 && descriptor.exponent === void 0) {
        result[0] = 1;
        e++;
      }

      result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

      if (unix) {
        result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

        if (b.test(result[1])) {
          result[0] = Math.floor(result[0]);
          result[1] = "";
        }
      }
    } // Decorating a 'diff'


    if (neg) {
      result[0] = -result[0];
    } // Applying custom symbol


    result[1] = symbols[result[1]] || result[1];

    if (locale === true) {
      result[0] = result[0].toLocaleString();
    } else if (locale.length > 0) {
      result[0] = result[0].toLocaleString(locale, localeOptions);
    } else if (separator.length > 0) {
      result[0] = result[0].toString().replace(".", separator);
    } // Returning Array, Object, or String (default)


    if (output === "array") {
      return result;
    }

    if (full) {
      result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
    }

    if (output === "object") {
      return {
        value: result[0],
        symbol: result[1]
      };
    }

    return result.join(spacer);
  } // Partial application for functional programming


  filesize.partial = function (opt) {
    return function (arg) {
      return filesize(arg, opt);
    };
  }; // CommonJS, AMD, script tag


  if (true) {
    module.exports = filesize;
  } else {}
})(typeof window !== "undefined" ? window : global);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ilib-tree-node/TreeNode-es5.js":
/*!*****************************************************!*\
  !*** ./node_modules/ilib-tree-node/TreeNode-es5.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}/**
 * TreeNode.js - build, construct, and deconstruct a tree
 *
 * @license
 * Copyright © 2019, 2021 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isNode(obj){return _typeof(obj)==="object"&&obj instanceof Node}/**
 * @class Node
 * @param {Object} an object to make into a tree node
 */var Node=/*#__PURE__*/function(){/**
     * Create a new node instance.
     */function Node(obj){var _this=this;_classCallCheck(this,Node);if(obj){// shallow copy all properties into this node
Object.keys(obj).forEach(function(key){if(key!=="children"&&typeof obj[key]!=="undefined"){_this[key]=obj[key]}})}else{this.type="text"}this.children=[]}/**
     * Add a child node to the current context of the tree.
     * @param {Node} child the child to add
     */_createClass(Node,[{key:"add",value:function add(child){if(!isNode(child)){return}this.children.push(child)}},{key:"addChildren",value:function addChildren(array){var _this2=this;if(!Array.isArray(array)||!array.every(function(element){return element instanceof Node})){return}array.forEach(function(element){return _this2.add(element)})}/**
     * Flatten the current node and all of its descendents into an
     * array and return it. When a node has children, it is
     * flattened into two nodes: a start node, followed by nodes for
     * all its children, and an end node. The start and end nodes
     * are marked by a "use" property set to "start" and "end".
     *
     * @returns {Array.<Node>} an array of Nodes flattened from
     * the current node
     */},{key:"toArray",value:function toArray(){if(this.children.length){var ret=[];var clone=new Node(this);clone.use="start";ret.push(clone);for(var i=0;i<this.children.length;i++){ret=ret.concat(this.children[i].toArray())}clone=new Node(this);clone.use="end";ret.push(clone);return ret}else if(this.type==="text"){this.use=undefined;return[this]}else{// self closing component
var clone=new Node(this);clone.use="startend";return[clone]}}/**
     * Recreate a full tree again from a flattened array of Node
     * instances. If the instances are well-formed (that is,
     * all start nodes are matched with end nodes with strict
     * nesting), then the tree is valid. If the array is not
     * well-formed, then the shape of the resulting tree will
     * probably not be valid and the results of this static method
     * are not defined.
     *
     * @static
     * @param {Array.<Node>} array the array of Node instances
     * to reconstruct into a tree
     * @returns {Node} a node that is the root of a tree
     * reconstructed from the array of Nodes
     */}],[{key:"fromArray",value:function fromArray(array){if(!array||!Array.isArray(array)||!array.length){return undefined}if(!array.every(function(node){return _typeof(node)==="object"})){return undefined}var clone;if(array.length===1){if(isNode(array[0])){clone=new Node(array[0]);clone.use=undefined}return clone}var rootExtra,startIndex=0;if(array[0].use==="start"){rootExtra=array[0];startIndex=1}else{rootExtra={type:"root"};startIndex=0}// not a tree? Make a wrapper node!
var root=new Node(rootExtra);var stack=[];var current=root;root.use=undefined;stack.push(root);for(var i=startIndex;i<array.length;i++){if(isNode(array[i])){if(array[i].use==="start"){clone=new Node(array[i]);clone.use=undefined;stack.push(clone);current.add(clone);current=clone}else if(array[i].use==="end"){if(stack.length>1){stack.pop();current=stack[stack.length-1]}}else{current.add(array[i])}}}return root}}]);return Node}();exports["default"]=Node;
//# sourceMappingURL=TreeNode-es5.js.map


/***/ }),

/***/ "./node_modules/lodash/isFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ "./node_modules/lodash/isNil.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNil.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ "./node_modules/message-accumulator/message-accumulator-es5.js":
/*!*********************************************************************!*\
  !*** ./node_modules/message-accumulator/message-accumulator-es5.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ilibTreeNode=_interopRequireDefault(__webpack_require__(/*! ilib-tree-node */ "./node_modules/ilib-tree-node/TreeNode-es5.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}// take care of all Unicode whitespace as well as what JS thinks is whitespace
var whiteSpaceStart=/^[\t-\r \xA0\u1680\u2000-\u200D\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+/;var whiteSpaceEnd=/[\t-\r \xA0\u1680\u2000-\u200D\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+$/;var whiteSpace=/[\t-\r \xA0\u1680\u2000-\u200D\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+/g;// use [\s\S]*? instead of .* with the "s" flag because node 6 and earlier throw errors about the unknown "s" flag
var re=/(<(c\d+)>[\s\S]*?<\/\2>)/g;var first=/^<c(\d+)>/;var selfclosing=/(<([cp](\d+))\/>)/g;// "c" for component, "p" for parameter
/**
 * MessageAccumulator.js - accumulate a translatable message as a string
 */var MessageAccumulator=/*#__PURE__*/function(){/**
     * Create a new accumulator instance.
     */function MessageAccumulator(){_classCallCheck(this,MessageAccumulator);this.root=new _ilibTreeNode["default"]({type:"root",parent:null,index:-1});this.currentLevel=this.root;this.componentIndex=0;this.paramIndex=0;this.text="";this.mapping={}}/**
     * Factory method to create a new MessageAccumulator instance from
     * the given string and a source message accumulator. This will
     * parse the string and create the equivalent tree from it, and
     * then attach the "extra" information from the source accumulator
     * to the equivalent nodes in the new accumulator. This includes
     * the source information for components and replacement parameters.
     *
     * @param {String} translated the translated string to parse
     * @param {MessageAccumulator} source the source message
     * for this translation
     * @returns {MessageAccumulator} a new message accumulator
     * instance equivalent to the given string
     */_createClass(MessageAccumulator,[{key:"_parse",/**
     * @private
     */value:function _parse(string,mapping,parent){var match;re.lastIndex=0;var parts=string.split(re);for(var i=0;i<parts.length;i++){first.lastIndex=0;selfclosing.lastIndex=0;if((match=first.exec(parts[i]))!==null){var index=parseInt(match[1]);var len=match[0].length;// strip off the outer tags before processing the stuff in the middle
var substr=parts[i].substring(len,parts[i].length-len-1);var component=new _ilibTreeNode["default"]({type:"component",parent:parent,index:index,extra:mapping&&mapping["c".concat(index)]});this._parse(substr,mapping,component);parent.add(component);i++;// skip the number in the next iteration
}else if(parts[i]&&parts[i].length){var subparts=parts[i].split(selfclosing);for(var j=0;j<subparts.length;j++){selfclosing.lastIndex=0;if((match=selfclosing.exec(subparts[j]))!==null){var _index=parseInt(match[3]);parent.add(new _ilibTreeNode["default"]({type:match[2][0]==="p"?"param":"component",parent:parent,index:_index,extra:mapping&&mapping[match[2]]}));j+=2;// skip the other parts of the match in the next iteration
}else if(subparts[j]&&subparts[j].length){// don't store empty strings
parent.add(new _ilibTreeNode["default"]({type:"text",value:subparts[j]}))}}}}}/**
     * Add text to the current context of the string.
     * @param {string} text the text to add
     */},{key:"addText",value:function addText(text){if(typeof text==="string"){this.currentLevel.add(new _ilibTreeNode["default"]({type:"text",value:text}))}this.text+=text}/**
     * Add a replacement parameter to the string. This is a coding
     * for a replacement parameter in the programming language
     * or i18n library that does substitutions. By coding the replacement
     * parameters instead of leaving them in as-is, the strings are
     * normalized.<p>
     *
     * This has two advantages. First, translations for strings
     * with the same text but different replacement parameter styles
     * can be shared across i18n libraries. For
     * example, some libraries use "C" style parameters like "%1s"
     * and others use named parameters like "{name}". That means
     * the translation of "User %1s logged in." and of "User {name}
     * logged in." should have the exact same translation.<p>
     *
     * Second, the parameters can be numbered automatically so that
     * the translator has the freedom to re-arrange the parameters
     * in a string with multiple parameters as required by the
     * grammar of the target language. For some parameter styles
     * that use numbered parameters instead of named ones, the
     * caller may need to amend original parameter to insert the
     * number if the original code did not have it already. That
     * is bad style anyways and you should strongly discourage your
     * engineers from writing strings with multiple replacement
     * parameters that are unnumbered.<p>
     *
     * Parameters appear in the composed string as XML tags that
     * are distinct from the component tags. When creating a
     * translated string, the parameters are substituted back
     * into the string.
     *
     * @param {Object} extra extra information that the caller can
     * use to identify the original replacement parameter
     */},{key:"addParam",value:function addParam(extra){var index=this.paramIndex++;this.currentLevel.add(new _ilibTreeNode["default"]({type:"param",index:index,extra:extra,closed:true}));var contents="p".concat(index);this.text+="<".concat(contents,"/>");this.mapping[contents]=extra}/**
     * Create a new subcontext for a component such that all text
     * added to the accumulator goes into the new context.<p>
     *
     * A component is represented in the composed string as an
     * XML tag that is numbered according to the order of the
     * components in the string. This class maintains a mapping
     * between the component number and the given "extra"
     * information so that this can be used to create a translated
     * accumulator with the same extra info. (See the
     * MessageAccumulator.create static function.)
     *
     * @param {Object} extra extra information that the caller would
     * like to associate with the component. For example, this may
     * be a node in an AST from parsing the original text.
     * @param {boolean} keep true if this node should always be kept and
     * not optimized out during the getMinimalString
     */},{key:"push",value:function push(extra,keep){var newNode=new _ilibTreeNode["default"]({type:"component",parent:this.currentLevel,index:this.componentIndex++,extra:extra,closed:false,keep:keep});this.currentLevel.add(newNode);this.currentLevel=newNode;this.mapping["c".concat(newNode.index)]=extra}/**
     * Pop the current context from the stack and return to the previous
     * context. If the current context is already the root, then this
     * represents an unbalanced string.
     * @returns {Object|undefined} the extra information associated with the
     * context that is being popped, or undefined if we are already at the
     * root and there is nothing to pop
     */},{key:"pop",value:function pop(){if(!this.currentLevel.parent){// oh oh, unbalanced?
console.log("Unbalanced component error...");// eslint-disable-line no-console
return}var extra=this.currentLevel.extra;this.currentLevel.closed=true;this.currentLevel=this.currentLevel.parent;return extra}/**
     * @private
     */},{key:"_getString",value:function _getString(rootnode){if(rootnode.children.length===0){return rootnode.value||""}return rootnode.children.map(function(child){return child.toArray().map(function(node){if(node.type==="component"){if(node.index>-1){if(node.use==="start"){return"<c".concat(node.index,">")}else if(node.use==="end"){return"</c".concat(node.index,">")}else{// self-closing
return"<c".concat(node.index,"/>")}}}else if(node.type==="param"){// self-closing
return"<p".concat(node.index,"/>")}else{return node.value}}).join("")}).join("")}/**
     * @private
     */},{key:"_isEmpty",value:function _isEmpty(node){var _this=this;whiteSpace.lastIndex=0;if(node.type==="param")return false;if(node.type==="text"&&node.value.replace(whiteSpace,"")!=="")return false;if(node.type==="component"){if(node.keep)return false;if(node.children&&node.children.length){return node.children.every(function(child){return _this._isEmpty(child)})}}return true}/**
     * @private
     */},{key:"_renumber",value:function _renumber(node){var _this2=this;if(node.type==="component"){node.index=this.componentIndex++;this.mapping["c".concat(node.index)]=node.extra}else if(node.type==="param"){this.mapping["p".concat(node.index)]=node.extra}if(node.children){node.children.forEach(function(child){_this2._renumber(child)})}}/**
     * @private
     */},{key:"_minimize",value:function _minimize(){if(this.minimized)return;var value,changed=true;if(!this.prefixes)this.prefixes=[];if(!this.suffixes)this.suffixes=[];// keep stripping off parts until we haven't changed anything, or we have stripped off everything
while(changed&&this.root.children&&this.root.children.length){changed=false;var subroot=this.root;// check for "outer" components -- components that surround localizable text without adding anything to it
while(subroot.children&&subroot.children.length===1&&subroot.children[0].type!=="text"&&!subroot.children[0].keep){subroot=subroot.children[0];value=new _ilibTreeNode["default"](subroot);value.use="start";this.prefixes.push(value);value=new _ilibTreeNode["default"](subroot);value.use="end";this.suffixes=[value].concat(this.suffixes);changed=true}var children=subroot.children;// find empty components at the start
var i=0;while(i<children.length&&children[i]&&this._isEmpty(children[i])){this.prefixes=this.prefixes.concat(children[i].toArray());i++;changed=true}children=i>0?children.slice(i):children;// then find empty components at the end
var i=children.length-1;while(i>0&&children[i]&&this._isEmpty(children[i])){this.suffixes=children[i].toArray().concat(this.suffixes);i--;changed=true}// now strip off the leading and trailing whitespace
if(children.length&&children[0].type==="text"){whiteSpaceStart.lastIndex=0;var match=whiteSpaceStart.exec(children[0].value);if(match){children[0].value=children[0].value.substring(match[0].length);this.prefixes.push(new _ilibTreeNode["default"]({type:"text",value:match[0]}));changed=true}}var last=children.length-1;if(children.length&&children[last].type==="text"){whiteSpaceEnd.lastIndex=0;var match=whiteSpaceEnd.exec(children[last].value);if(match){children[last].value=children[last].value.substring(0,children[last].value.length-match[0].length);this.suffixes=[new _ilibTreeNode["default"]({type:"text",value:match[0]})].concat(this.suffixes);changed=true}}this.root.children=i<children.length-1?children.slice(0,i+1):children;// then do it all again until nothing changes!
}// now walk the tree again and renumber any components so that we don't start at some number greater
// than zero
this.componentIndex=0;this.mapping={};this._renumber(this.root);this.minimized=true}/**
     * Return the message accumulated so far, including any components
     * as a string that contains "c" + a number to represent those
     * components.
     *
     * @return {string} the accumulated string so far
     */},{key:"getString",value:function getString(){return this._getString(this.root)}/**
     * Return all of the irrelevant parts of the string at the beginning
     * of the message.<p>
     *
     * For a minimal string, all of the components that are irrelevant
     * for translation are removed. This method returns all of the irrelevant
     * components and text units that appear at the beginning of the string.
     *
     * @returns {Array.<Object>} an array of "extra" and text units that
     * are irrelevant
     */},{key:"getPrefix",value:function getPrefix(){this._minimize();return this.prefixes||[]}/**
     * Return the message accumulated so far as a string, including
     * any components, and leaving out any contexts that are irrelevant
     * for translation purposes. This method is similar to getString()
     * with the irrelevant parts removed. This includes:
     *
     * <ul>
     * <li>Any components that surround the entire message
     * <li>Any components that are at the beginning or end of the message
     * and which do not have any translatable text in them.
     * <li>Any text at the beginning or end of the string that only
     * contains whitespace.
     * </ul>
     *
     * A minimal string must either start with non-whitespace text or end with
     * non-whitespace text or both.<p>
     *
     * After all the irrelevant parts are removed, the remaining components
     * are renumbered so that the first one to appear starts at zero, the
     * second one is one, etc.
     *
     * @return {string} the accumuilated string so far with all irrelevant
     * components removed.
     */},{key:"getMinimalString",value:function getMinimalString(){this._minimize();return this._getString(this.root)}/**
     * Return all of the irrelevant parts of the string at the end
     * of the message.<p>
     *
     * For a minimal string, all of the components that are irrelevant
     * for translation are removed. This method returns all of the irrelevant
     * components and text units that appear at the end of the string.
     *
     * @returns {Array.<Object>} an array of "extra" and text units that
     * are irrelevant
     */},{key:"getSuffix",value:function getSuffix(){this._minimize();return this.suffixes||[]}/**
     * Return the number of characters of non-whitespace text that
     * have been accumulated so far in this accumulator. Components
     * are left out.
     * @return {number} the length of the non-whitespace text accumulated so far
     */},{key:"getTextLength",value:function getTextLength(){whiteSpace.lastIndex=0;return this.text.replace(whiteSpace,"").trim().length}/**
     * @private
     * Return the depth of the stack from the given node.
     */},{key:"countCurrentLevel",value:function countCurrentLevel(node){return node.parent?this.countCurrentLevel(node.parent)+1:0}/**
     * Return the current depth of the context stack. If the accumulator is
     * currently at the root, it will return 0.
     * @returns {number} the current depth of the context stack, or 0 if there
     * is nothing on the stack yet
     */},{key:"getCurrentLevel",value:function getCurrentLevel(){return this.countCurrentLevel(this.currentLevel)}/**
     * Return true if the current context is the root of the message.
     * @return {boolean} true if the current context is the root
     */},{key:"isRoot",value:function isRoot(){return this.componentIndex===0}/**
     * Return the mapping between components and the "extra"
     * information used when creating those components.
     *
     * @param {number} componentNumber the number of the
     * component for which the "extra" information is
     * being sought
     * @returns {Object} the "extra" information that was
     * given when the component was created
     */},{key:"getExtra",value:function getExtra(componentNumber){return this.mapping["c".concat(componentNumber)]}/**
     * Return the mapping between a replacement parameter
     * and the "extra" information used when creating those
     * components.
     *
     * @param {number} paramNumber the number of the
     * parameter for which the "extra" information is
     * being sought
     * @returns {Object} the "extra" information that was
     * given when the parameter was created
     */},{key:"getParam",value:function getParam(paramNumber){return this.mapping["p".concat(paramNumber)]}/**
     * Return the mappings between component names and
     * their "extra" information they represent.
     * @returns {Object} the mapping between the
     * component names and their "extra" information.
     */},{key:"getMapping",value:function getMapping(){return this.mapping}}],[{key:"create",value:function create(str,source){var ma=new MessageAccumulator;if(str){ma._parse(str,source&&source.getMapping()||{},ma.root)}return ma}}]);return MessageAccumulator}();exports["default"]=MessageAccumulator;
//# sourceMappingURL=message-accumulator-es5.js.map


/***/ }),

/***/ "./node_modules/react-process-string/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-process-string/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function processString(options) {
    var key = 0;

    function processInputWithRegex(option, input) {
        if (!option.fn || typeof option.fn !== 'function') return input;

        if (!option.regex || !(option.regex instanceof RegExp)) return input;

        if (typeof input === 'string') {
            var regex = option.regex;
            var result = null;
            var output = [];

            while ((result = regex.exec(input)) !== null) {
                var index = result.index;
                var match = result[0];

                output.push(input.substring(0, index));
                output.push(option.fn(++key, result));

                input = input.substring(index + match.length, input.length + 1);
                regex.lastIndex = 0;
            }

            output.push(input);
            return output;
        } else if (Array.isArray(input)) {
            return input.map(function (chunk) {
                return processInputWithRegex(option, chunk);
            });
        } else return input;
    }

    return function (input) {
        if (!options || !Array.isArray(options) || !options.length) return input;

        options.forEach(function (option) {
            return input = processInputWithRegex(option, input);
        });

        return input;
    };
}

module.exports = processString;



/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (
      candidateSelectors.some(function(candidateSelector) {
        return matches.call(el, candidateSelector);
      })
    ) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndexAttr, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndexAttr = parseInt(candidate.getAttribute('tabindex'), 10)
    candidateIndex = isNaN(candidateIndexAttr) ? candidate.tabIndex : candidateIndexAttr;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate, elementDocument)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ })

}]);
//# sourceMappingURL=vendors~details-sidebar.no.react.js.map