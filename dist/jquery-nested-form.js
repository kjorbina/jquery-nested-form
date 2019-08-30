!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n,this.$forms=e,this.pkRegexps=this.options.associationNames.map(function(t){return new RegExp("".concat(t,"_\\d+_id$"))})}var e,n,o;return e=t,(n=[{key:"build",value:function(){var t=this.$forms.filter(":last").clone(this.options.cloneEvents,this.options.cloneEvents);return this.removePkFields(t),this.initFields(t),this.checkFirstRadioButton(t),this.options.onBuildTemplate&&this.options.onBuildTemplate(t),t}},{key:"removePkFields",value:function(t){var e=this;t.find('input[id][type="hidden"]').each(function(t,n){var i=$(n);e.pkRegexps.forEach(function(t){i.attr("id").match(t)&&i.remove()})})}},{key:"initFields",value:function(t){t.find('textarea, input[type="text"]').val(""),t.find('input[type="radio"], input[type="checkbox"]').prop("checked",!1),t.find("option").prop("selected",!1)}},{key:"checkFirstRadioButton",value:function(t){t.find('input[name][type="radio"]').map(function(t,e){return $(e).attr("name")}).get().filter(function(t,e,n){return n.indexOf(t)==e}).forEach(function(e){var n=t.find('input[type="radio"][name="'.concat(e,'"]'));0===n.filter(":checked").length&&n.filter(":first").prop("checked",!0)})}}])&&i(e.prototype,n),o&&i(e,o),t}();function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=n,this.$forms=e,this.assocRegexps=this.options.associationNames.map(function(t,e){return new RegExp("(".concat(t,"(\\[|\\]\\[|_)?)\\d+"))}),this.destroyRegexps=this.options.associationNames.map(function(t,e){return new RegExp("".concat(t,"_\\d+__destroy"))}),this.$template=new o(e,n).build()}var e,n,i;return e=t,(n=[{key:"add",value:function(){var t=this.$template.clone(!0,!0),e=this.$forms.length+this.options.startIndex;return this.renewIndex(t,e),this.options.onBuildForm&&this.options.onBuildForm(t,e),this.$forms=this.$forms.add(t),[t,e]}},{key:"remove",value:function(t){var e=this;this.options.beforeRemoveForm&&!1===this.options.beforeRemoveForm(t)||(t.hide(),t.find("input[id][type=hidden]").each(function(t,n){var i=$(n);e.destroyRegexps.forEach(function(t){i.attr("id").match(t)&&i.val("1")})}),this.options.afterRemoveForm&&this.options.afterRemoveForm(t))}},{key:"removeWith",value:function(t){var e=this;this.$forms.each(function(n,i){var o=$(i);$.contains(o.get(0),t.get(0))&&e.remove(o)})}},{key:"renewIndex",value:function(t,e){var n=this,i=this.options.tags.join(", ");t.find(i).each(function(t,i){var o=$(i);n.options.attributes.forEach(function(t){var i=o.attr(t);i&&(n.assocRegexps.forEach(function(t){i=i.replace(t,"$1"+e)}),o.attr(t,i))})})}}])&&r(e.prototype,n),i&&r(e,i),t}();function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c={forms:"",adder:"",remover:null,associations:"",postfixes:"_attributes",increment:1,startIndex:0,maxIndex:null,tags:["input","textarea","select","label"],attributes:["id","name","for"],cloneEvents:!0,afterInitialize:null,onBuildTemplate:null,onBuildForm:null,beforeAddForm:null,afterAddForm:null,beforeRemoveForm:null,afterRemoveForm:null},f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=$.extend({},c,n),this.options.associationNames=this.makeAssociationNames(),this.$container=$(e),this.$adder=$(this.options.adder),this.bind(),this.builder=new a($(this.options.forms),this.options),this.options.afterInitialize&&this.options.afterInitialize(this)}var e,n,i;return e=t,i=[{key:"getDefaults",value:function(){return c}},{key:"setDefaults",value:function(t){$.extend(c,t)}}],(n=[{key:"bind",value:function(){var t=this;this.$adder.on("click.".concat("nested-form"),function(e){e.preventDefault(),t.add()}),this.options.remover&&this.$container.on("click.".concat("nested-form"),this.options.remover,function(e){e.preventDefault(),t.remove($(e.currentTarget))})}},{key:"unbind",value:function(){this.$adder.off(".".concat("nested-form")),this.$container.off(".".concat("nested-form"))}},{key:"add",value:function(){for(var t=0;t<this.options.increment;t++){var e=s(this.builder.add(),2),n=e[0],i=e[1];if(this.options.beforeAddForm&&!1===this.options.beforeAddForm(this.$container,n,i))break;if(this.$container.append(n),this.options.afterAddForm&&this.options.afterAddForm(this.$container,n,i),this.options.maxIndex&&i>=this.options.maxIndex){this.disable();break}}}},{key:"remove",value:function(t){this.builder.removeWith(t)}},{key:"enable",value:function(){this.$adder.prop("disabled",!1)}},{key:"disable",value:function(){this.$adder.prop("disabled",!0)}},{key:"makeAssociationNames",value:function(){var t=[].concat(this.options.associations),e=[].concat(this.options.postfixes);return t.map(function(t,n){var i=e[n]||e[0];return"".concat(t).concat(i)})}}])&&u(e.prototype,n),i&&u(e,i),t}();$.fn.nestedForm=function(t){return this.each(function(){if(!$(this).data("nested-form")){var e=new f(this,t);$(this).data("nested-form",e)}})},$.NestedForm=f}]);