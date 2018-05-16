//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * Vue.js v2.2.6
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e);return isNaN(t)?e:t}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return $i.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return ki.call(e)===Ai}function p(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function d(){}function v(e,t){var n=l(e),r=l(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{return JSON.stringify(e)===JSON.stringify(t)}catch(n){return e===t}}function h(e,t){for(var n=0;n<e.length;n++)if(v(e[n],t))return n;return-1}function m(e){var t=!1;return function(){t||(t=!0,e())}}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!ji.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){qi.target&&Wi.push(qi.target),qi.target=e}function w(){qi.target=Wi.pop()}function x(e,t){e.__proto__=t}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function k(e,t){if(l(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof Xi?n=e.__ob__:Qi.shouldConvert&&!Ui()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Xi(e)),t&&n&&n.vmCount++,n}}function A(e,t,n,r){var i=new qi,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return qi.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&S(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify())}})}}function O(e,t,n){if(Array.isArray(e)&&"number"==typeof t)return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(A(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function T(e,t){if(Array.isArray(e)&&"number"==typeof t)return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function S(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&S(t)}function E(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&E(r,o):O(e,n,o);return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?u(n,t):n}function I(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)"string"==typeof(r=t[n])&&(i=wi(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=wi(a),o[i]=f(r)?r:{type:r};e.props=o}}function L(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function D(e,t,n){function r(r){var i=eo[r]||to;l[r]=i(e[r],t[r],n,r)}I(t),L(t);var o=t.extends;if(o&&(e="function"==typeof o?D(e,o.options,n):D(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof nt&&(c=c.options),e=D(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function M(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=wi(n);if(i(o,a))return o[a];var s=xi(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function P(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(H(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:H(String,o.type)||""!==s&&s!==Ci(e)||(s=!0)),void 0===s){s=R(r,o,e);var c=Qi.shouldConvert;Qi.shouldConvert=!0,k(s),Qi.shouldConvert=c}return s}function R(e,t,n){if(i(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==F(t.type)?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function H(e,t){if(!Array.isArray(t))return F(t)===F(e);for(var n=0,r=t.length;n<r;n++)if(F(t[n])===F(e))return!0;return!1}function U(e,t,n){if(Si.errorHandler)Si.errorHandler.call(null,e,t,n);else{if(!Ii||"undefined"==typeof console)throw e;console.error(e)}}function B(e){return new no(void 0,void 0,void 0,String(e))}function V(e){var t=new no(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function z(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=V(e[r]);return n}function J(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function K(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=ao(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=J(a)),n(c.name,a,c.once,c.capture)));for(o in t)e[o]||(c=ao(o),r(c.name,t[o],c.capture))}function q(e,t,n){function i(){n.apply(this,arguments),r(o.fns,i)}var o,a=e[t];a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=J([a,i]):o=J([i]),o.merged=!0,e[t]=o}function W(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Z(e){return o(e)?[B(e)]:Array.isArray(e)?G(e):void 0}function G(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)null!=(r=e[n])&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,G(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(B(r)):r.text&&i&&i.text?a[a.length-1]=B(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Y(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function Q(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&te(e,t)}function X(e,t,n){n?io.$once(e,t):io.$on(e,t)}function ee(e,t){io.$off(e,t)}function te(e,t,n){io=e,K(t,n||{},X,ee,e)}function ne(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)}else o.push(i);return o.every(re)||(n.default=o),n}function re(e){return e.isComment||" "===e.text}function ie(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function oe(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ae(e,t,n){e.$el=t,e.$options.render||(e.$options.render=oo),fe(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new ho(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,fe(e,"mounted")),e}function se(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Ei);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){Qi.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=P(u,e.$options.props,t,e)}Qi.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,te(e,n,l)}o&&(e.$slots=ne(i,r.context),e.$forceUpdate())}function ce(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function ue(e,t){if(t){if(e._directInactive=!1,ce(e))return}else if(e._directInactive)return;if(e._inactive||null==e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)ue(e.$children[n]);fe(e,"activated")}}function le(e,t){if(!(t&&(e._directInactive=!0,ce(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)le(e.$children[n]);fe(e,"deactivated")}}function fe(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){U(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function pe(){co.length=0,uo={},lo=fo=!1}function de(){fo=!0;var e,t,n;for(co.sort(function(e,t){return e.id-t.id}),po=0;po<co.length;po++)e=co[po],t=e.id,uo[t]=null,e.run();var r=co.slice();for(pe(),po=r.length;po--;)e=r[po],n=e.vm,n._watcher===e&&n._isMounted&&fe(n,"updated");Bi&&Si.devtools&&Bi.emit("flush")}function ve(e){var t=e.id;if(null==uo[t]){if(uo[t]=!0,fo){for(var n=co.length-1;n>=0&&co[n].id>e.id;)n--;co.splice(Math.max(n,po)+1,0,e)}else co.push(e);lo||(lo=!0,zi(de))}}function he(e){mo.clear(),me(e,mo)}function me(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)me(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)me(e[r[n]],t)}}function ge(e,t,n){go.get=function(){return this[t][n]},go.set=function(e){this[t][n]=e},Object.defineProperty(e,n,go)}function ye(e){e._watchers=[];var t=e.$options;t.props&&_e(e,t.props),t.methods&&ke(e,t.methods),t.data?be(e):k(e._data={},!0),t.computed&&we(e,t.computed),t.watch&&Ae(e,t.watch)}function _e(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;Qi.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=P(o,t,n,e);A(r,o,a),o in e||ge(e,"_props",o)}(a);Qi.shouldConvert=!0}function be(e){var t=e.$options.data;t=e._data="function"==typeof t?$e(t,e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||g(n[o])||ge(e,"_data",n[o]);k(t,!0)}function $e(e,t){try{return e.call(t)}catch(e){return U(e,t,"data()"),{}}}function we(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new ho(e,o,d,yo),r in e||xe(e,r,i)}}function xe(e,t,n){"function"==typeof n?(go.get=Ce(t),go.set=d):(go.get=n.get?n.cache!==!1?Ce(t):n.get:d,go.set=n.set?n.set:d),Object.defineProperty(e,t,go)}function Ce(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),qi.target&&t.depend(),t.value}}function ke(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?d:s(t[n],e)}function Ae(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Oe(e,n,r[i]);else Oe(e,n,r)}}function Oe(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Te(e,t,n,r,i){if(e){var o=n.$options._base;if(l(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(!(e=je(e,o,function(){n.$forceUpdate()})))return;Xe(e),t=t||{},t.model&&Me(e.options,t);var a=Ne(t,e,i);if(e.options.functional)return Se(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),Le(t);var c=e.options.name||i;return new no("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r})}}}function Se(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=P(s,a,t);var c=Object.create(r),u=function(e,t,n,r){return Pe(c,e,t,n,r,!0)},l=e.options.render.call(null,u,{props:o,data:n,parent:r,children:i,slots:function(){return ne(i,r)}});return l instanceof no&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function Ee(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function je(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function Ne(e,t,n){var r=t.options.props;if(r){var i={},o=e.attrs,a=e.props,s=e.domProps;if(o||a||s)for(var c in r){var u=Ci(c);Ie(i,a,c,u,!0)||Ie(i,o,c,u)||Ie(i,s,c,u)}return i}}function Ie(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function Le(e){e.hook||(e.hook={});for(var t=0;t<bo.length;t++){var n=bo[t],r=e.hook[n],i=_o[n];e.hook[n]=r?De(i,r):i}}function De(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function Me(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});i[r]?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}function Pe(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=wo),Re(e,t,n,r,i)}function Re(e,t,n,r,i){if(n&&n.__ob__)return oo();if(!t)return oo();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===wo?r=Z(r):i===$o&&(r=W(r));var o,a;if("string"==typeof t){var s;a=Si.getTagNamespace(t),o=Si.isReservedTag(t)?new no(Si.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=M(e.$options,"components",t))?Te(s,n,e,r,t):new no(t,n,r,void 0,void 0,e)}else o=Te(t,n,e,r);return o?(a&&Fe(o,a),o):oo()}function Fe(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Fe(i,t)}}function He(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n}function Ue(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&u(n,r),i(n)||t;var o=this.$slots[e];return o||t}function Be(e){return M(this.$options,"filters",e,!0)||Ti}function Ve(e,t,n){var r=Si.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e}function ze(e,t,n,r){if(n)if(l(n)){Array.isArray(n)&&(n=p(n));var i;for(var o in n){if("class"===o||"style"===o)i=e;else{var a=e.attrs&&e.attrs.type;i=r||Si.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in i||(i[o]=n[o])}}else;return e}function Je(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?z(n):V(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),qe(n,"__static__"+e,!1),n)}function Ke(e,t,n){return qe(e,"__once__"+t+(n?"_"+n:""),!0),e}function qe(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&We(e[r],t+"_"+r,n);else We(e,t,n)}function We(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Ze(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=ne(e.$options._renderChildren,n),e.$scopedSlots=Ei,e._c=function(t,n,r,i){return Pe(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Pe(e,t,n,r,i,!0)}}function Ge(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ye(e){var t=e.$options.inject;if(t)for(var n=Array.isArray(t),r=n?t:Vi?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)!function(i){for(var o=r[i],a=n?o:t[o],s=e;s;){if(s._provided&&a in s._provided){A(e,o,s._provided[a]);break}s=s.$parent}}(i)}function Qe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Xe(e){var t=e.options;if(e.super){var n=Xe(e.super);if(n!==e.superOptions){e.superOptions=n;var r=et(e);r&&u(e.extendOptions,r),t=e.options=D(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function et(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=tt(n[i],r[i]));return t}function tt(e,t){if(Array.isArray(e)){var n=[];t=Array.isArray(t)?t:[t];for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);return n}return e}function nt(e){this._init(e)}function rt(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function it(e){e.mixin=function(e){this.options=D(this.options,e)}}function ot(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=D(n.options,e),a.super=n,a.options.props&&at(a),a.options.computed&&st(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Si._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),i[r]=a,a}}function at(e){var t=e.options.props;for(var n in t)ge(e.prototype,"_props",n)}function st(e){var t=e.options.computed;for(var n in t)xe(e.prototype,n,t[n])}function ct(e){Si._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function ut(e){return e&&(e.Ctor.options.name||e.tag)}function lt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp&&e.test(t)}function ft(e,t){for(var n in e){var r=e[n];if(r){var i=ut(r.componentOptions);i&&!t(i)&&(pt(r),e[n]=null)}}}function pt(e){e&&(e.componentInstance._inactive||fe(e.componentInstance,"deactivated"),e.componentInstance.$destroy())}function dt(e){for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=vt(r.data,t));for(;n=n.parent;)n.data&&(t=vt(t,n.data));return ht(t)}function vt(e,t){return{staticClass:mt(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function ht(e){var t=e.class,n=e.staticClass;return n||t?mt(n,gt(t)):""}function mt(e,t){return e?t?e+" "+t:e:t||""}function gt(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=gt(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function yt(e){return Ko(e)?"svg":"math"===e?"math":void 0}function _t(e){if(!Ii)return!0;if(Wo(e))return!1;if(e=e.toLowerCase(),null!=Zo[e])return Zo[e];var t=document.createElement(e);return e.indexOf("-")>-1?Zo[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Zo[e]=/HTMLUnknownElement/.test(t.toString())}function bt(e){if("string"==typeof e){var t=document.querySelector(e);return t?t:document.createElement("div")}return e}function $t(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function wt(e,t){return document.createElementNS(zo[e],t)}function xt(e){return document.createTextNode(e)}function Ct(e){return document.createComment(e)}function kt(e,t,n){e.insertBefore(t,n)}function At(e,t){e.removeChild(t)}function Ot(e,t){e.appendChild(t)}function Tt(e){return e.parentNode}function St(e){return e.nextSibling}function Et(e){return e.tagName}function jt(e,t){e.textContent=t}function Nt(e,t,n){e.setAttribute(t,n)}function It(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function Lt(e){return void 0===e||null===e}function Dt(e){return void 0!==e&&null!==e}function Mt(e){return e===!0}function Pt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&Dt(e.data)===Dt(t.data)&&Rt(e,t)}function Rt(e,t){if("input"!==e.tag)return!0;var n;return(Dt(n=e.data)&&Dt(n=n.attrs)&&n.type)===(Dt(n=t.data)&&Dt(n=n.attrs)&&n.type)}function Ft(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,Dt(i)&&(o[i]=r);return o}function Ht(e,t){(e.data.directives||t.data.directives)&&Ut(e,t)}function Ut(e,t){var n,r,i,o=e===Qo,a=t===Qo,s=Bt(e.data.directives,e.context),c=Bt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,zt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(zt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)zt(u[n],"inserted",t,e)};o?q(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&q(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)zt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||zt(s[n],"unbind",e,e,a)}function Bt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=ta),n[Vt(i)]=i,i.def=M(t.$options,"directives",i.name,!0);return n}function Vt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function zt(e,t,n,r,i){var o=e.def&&e.def[t];o&&o(n.elm,e,n,r,i)}function Jt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i=t.elm,o=e.data.attrs||{},a=t.data.attrs||{};a.__ob__&&(a=t.data.attrs=u({},a));for(n in a)r=a[n],o[n]!==r&&Kt(i,n,r);Mi&&a.value!==o.value&&Kt(i,"value",a.value);for(n in o)null==a[n]&&(Uo(n)?i.removeAttributeNS(Ho,Bo(n)):Ro(n)||i.removeAttribute(n))}}function Kt(e,t,n){Fo(t)?Vo(n)?e.removeAttribute(t):e.setAttribute(t,t):Ro(t)?e.setAttribute(t,Vo(n)||"false"===n?"false":"true"):Uo(t)?Vo(n)?e.removeAttributeNS(Ho,Bo(t)):e.setAttributeNS(Ho,t,n):Vo(n)?e.removeAttribute(t):e.setAttribute(t,n)}function qt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=dt(t),a=n._transitionClasses;a&&(o=mt(o,gt(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function Wt(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&oa.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=Zt(o,a[i]);return o}function Zt(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function Gt(e){console.error("[Vue compiler]: "+e)}function Yt(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Qt(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function Xt(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function en(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function tn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):o[t]=s?i?[a,s]:[s,a]:a}function nn(e,t,n){var r=rn(e,":"+t)||rn(e,"v-bind:"+t);if(null!=r)return Wt(r);if(n!==!1){var i=rn(e,t);if(null!=i)return JSON.stringify(i)}}function rn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function on(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=an(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function an(e,t){var n=sn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function sn(e){if(To=e,Oo=To.length,Eo=jo=No=0,e.indexOf("[")<0||e.lastIndexOf("]")<Oo-1)return{exp:e,idx:null};for(;!un();)So=cn(),ln(So)?pn(So):91===So&&fn(So);return{exp:e.substring(0,jo),idx:e.substring(jo+1,No)}}function cn(){return To.charCodeAt(++Eo)}function un(){return Eo>=Oo}function ln(e){return 34===e||39===e}function fn(e){var t=1;for(jo=Eo;!un();)if(e=cn(),ln(e))pn(e);else if(91===e&&t++,93===e&&t--,0===t){No=Eo;break}}function pn(e){for(var t=e;!un()&&(e=cn())!==t;);}function dn(e,t,n){Io=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)mn(e,r,i);else if("input"===o&&"checkbox"===a)vn(e,r,i);else if("input"===o&&"radio"===a)hn(e,r,i);else if("input"===o||"textarea"===o)gn(e,r,i);else if(!Si.isReservedTag(o))return on(e,r,i),!1;return!0}function vn(e,t,n){var r=n&&n.number,i=nn(e,"value")||"null",o=nn(e,"true-value")||"true",a=nn(e,"false-value")||"false";Qt(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),tn(e,sa,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function hn(e,t,n){var r=n&&n.number,i=nn(e,"value")||"null";i=r?"_n("+i+")":i,Qt(e,"checked","_q("+t+","+i+")"),tn(e,sa,an(t,i),null,!0)}function mn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+an(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),tn(e,"change",o,null,!0)}function gn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?aa:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=an(t,l);c&&(f="if($event.target.composing)return;"+f),Qt(e,"value","("+t+")"),tn(e,u,f,null,!0),(s||a||"number"===r)&&tn(e,"blur","$forceUpdate()")}function yn(e){var t;e[aa]&&(t=Di?"change":"input",e[t]=[].concat(e[aa],e[t]||[]),delete e[aa]),e[sa]&&(t=Hi?"click":"change",e[t]=[].concat(e[sa],e[t]||[]),delete e[sa])}function _n(e,t,n,r){if(n){var i=t,o=Lo;t=function(n){null!==(1===arguments.length?i(n):i.apply(null,arguments))&&bn(e,t,r,o)}}Lo.addEventListener(e,t,r)}function bn(e,t,n,r){(r||Lo).removeEventListener(e,t,n)}function $n(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Lo=t.elm,yn(n),K(n,r,_n,bn,t.context)}}function wn(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);xn(i,t,s)&&(i.value=s)}else i[n]=r}}function xn(e,t,n){return!e.composing&&("option"===t.tag||Cn(e,n)||kn(e,n))}function Cn(e,t){return document.activeElement!==e&&e.value!==t}function kn(e,n){var r=e.value,i=e._vModifiers;return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function An(e){var t=On(e.style);return e.staticStyle?u(e.staticStyle,t):t}function On(e){return Array.isArray(e)?p(e):"string"==typeof e?la(e):e}function Tn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=An(i.data))&&u(r,n);(n=An(e.data))&&u(r,n);for(var o=e;o=o.parent;)o.data&&(n=An(o.data))&&u(r,n);return r}function Sn(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=On(t.data.style)||{};t.data.style=f.__ob__?u({},f):f;var p=Tn(t,!0);for(o in l)null==p[o]&&da(a,o,"");for(o in p)(i=p[o])!==l[o]&&da(a,o,null==i?"":i)}}function En(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function jn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Nn(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,ga(e.name||"v")),u(t,e),t}return"string"==typeof e?ga(e):void 0}}function In(e){ka(function(){ka(e)})}function Ln(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),En(e,t)}function Dn(e,t){e._transitionClasses&&r(e._transitionClasses,t),jn(e,t)}function Mn(e,t,n){var r=Pn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===_a?wa:Ca,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Pn(e,t){var n,r=window.getComputedStyle(e),i=r[$a+"Delay"].split(", "),o=r[$a+"Duration"].split(", "),a=Rn(i,o),s=r[xa+"Delay"].split(", "),c=r[xa+"Duration"].split(", "),u=Rn(s,c),l=0,f=0;return t===_a?a>0&&(n=_a,l=a,f=o.length):t===ba?u>0&&(n=ba,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?_a:ba:null,f=n?n===_a?o.length:c.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===_a&&Aa.test(r[$a+"Property"])}}function Rn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Fn(t)+Fn(e[n])}))}function Fn(e){return 1e3*Number(e.slice(0,-1))}function Hn(e,n){var r=e.elm;r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=Nn(e.data.transition);if(i&&!r._enterCb&&1===r.nodeType){for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,g=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,x=i.duration,C=so,k=so.$vnode;k&&k.parent;)k=k.parent,C=k.context;var A=!C._isMounted||!e.isRootInsert;if(!A||b||""===b){var O=A&&f?f:s,T=A&&d?d:u,S=A&&p?p:c,E=A?_||v:v,j=A&&"function"==typeof b?b:h,N=A?$||g:g,I=A?w||y:y,L=t(l(x)?x.enter:x),D=o!==!1&&!Mi,M=Vn(j),P=r._enterCb=m(function(){D&&(Dn(r,S),Dn(r,T)),P.cancelled?(D&&Dn(r,O),I&&I(r)):N&&N(r),r._enterCb=null});e.data.show||q(e.data.hook||(e.data.hook={}),"insert",function(){var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,P)}),E&&E(r),D&&(Ln(r,O),Ln(r,T),In(function(){Ln(r,S),Dn(r,O),P.cancelled||M||(Bn(L)?setTimeout(P,L):Mn(r,a,P))})),e.data.show&&(n&&n(),j&&j(r,P)),D||M||P()}}}function Un(e,n){function r(){w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),_&&(Ln(i,c),Ln(i,f),In(function(){Ln(i,u),Dn(i,c),w.cancelled||b||(Bn($)?setTimeout(w,$):Mn(i,s,w))})),d&&d(i,w),_||b||w())}var i=e.elm;i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());var o=Nn(e.data.transition);if(!o)return n();if(!i._leaveCb&&1===i.nodeType){
var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,g=o.delayLeave,y=o.duration,_=a!==!1&&!Mi,b=Vn(d),$=t(l(y)?y.leave:y),w=i._leaveCb=m(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(Dn(i,u),Dn(i,f)),w.cancelled?(_&&Dn(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null});g?g(r):r()}}function Bn(e){return"number"==typeof e&&!isNaN(e)}function Vn(e){if(!e)return!1;var t=e.fns;return t?Vn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function zn(e,t){t.data.show||Hn(t)}function Jn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=h(r,qn(a))>-1,a.selected!==o&&(a.selected=o);else if(v(qn(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Kn(e,t){for(var n=0,r=t.length;n<r;n++)if(v(qn(t[n]),e))return!1;return!0}function qn(e){return"_value"in e?e._value:e.value}function Wn(e){e.target.composing=!0}function Zn(e){e.target.composing=!1,Gn(e.target,"input")}function Gn(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Yn(e){return!e.componentInstance||e.data&&e.data.transition?e:Yn(e.componentInstance._vnode)}function Qn(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Qn(Y(t.children)):e}function Xn(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[wi(o)]=i[o];return t}function er(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function tr(e){for(;e=e.parent;)if(e.data.transition)return!0}function nr(e,t){return t.key===e.key&&t.tag===e.tag}function rr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ir(e){e.data.newPos=e.elm.getBoundingClientRect()}function or(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function ar(e){return Fa=Fa||document.createElement("div"),Fa.innerHTML=e,Fa.textContent}function sr(e,t){var n=t?ws:$s;return e.replace(n,function(e){return bs[e]})}function cr(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Oi,u=t.canBeLeftOpenTag||Oi,l=0;e;){if(i=e,o&&ys(o)){var f=o.toLowerCase(),p=_s[f]||(_s[f]=new RegExp("([\\s\\S]*?)(</"+f+"[^>]*>)","i")),d=0,v=e.replace(p,function(e,n,r){return d=r.length,ys(f)||"noscript"===f||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(f,l-d,l)}else{var h=e.indexOf("<");if(0===h){if(Ya.test(e)){var m=e.indexOf("-->");if(m>=0){n(m+3);continue}}if(Qa.test(e)){var g=e.indexOf("]>");if(g>=0){n(g+2);continue}}var y=e.match(Ga);if(y){n(y[0].length);continue}var _=e.match(Za);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(qa);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(Wa))&&(o=e.match(Ja));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&Va(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||"html"===n&&"head"===o||!!i,f=e.attrs.length,p=new Array(f),d=0;d<f;d++){var v=e.attrs[d];Xa&&v[0].indexOf('""')===-1&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:sr(h,t.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),t.start&&t.start(n,p,l,e.start,e.end)}($);continue}}var w=void 0,x=void 0,C=void 0;if(h>=0){for(x=e.slice(h);!(Za.test(x)||qa.test(x)||Ya.test(x)||Qa.test(x)||(C=x.indexOf("<",1))<0);)h+=C,x=e.slice(h);w=e.substring(0,h),n(h)}h<0&&(w=e,e=""),t.chars&&w&&t.chars(w)}if(e===i){t.chars&&t.chars(e);break}}r()}function ur(e,t){var n=t?Cs(t):xs;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=Wt(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function lr(e,t){function n(e){e.pre&&(s=!1),os(e.tag)&&(c=!1)}es=t.warn||Gt,ss=t.getTagNamespace||Oi,as=t.mustUseProp||Oi,os=t.isPreTag||Oi,rs=Yt(t.modules,"preTransformNode"),ns=Yt(t.modules,"transformNode"),is=Yt(t.modules,"postTransformNode"),ts=t.delimiters;var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;return cr(e,{warn:es,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){var l=i&&i.ns||ss(e);Di&&"svg"===l&&(a=Tr(a));var f={type:1,tag:e,attrsList:a,attrsMap:Ar(a),parent:i,children:[]};l&&(f.ns=l),Or(f)&&!Ui()&&(f.forbidden=!0);for(var p=0;p<rs.length;p++)rs[p](f,t);if(s||(fr(f),f.pre&&(s=!0)),os(f.tag)&&(c=!0),s)pr(f);else{hr(f),mr(f),br(f),dr(f),f.plain=!f.key&&!a.length,vr(f),$r(f),wr(f);for(var d=0;d<ns.length;d++)ns[d](f,t);xr(f)}if(r?o.length||r.if&&(f.elseif||f.else)&&_r(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)gr(f,i);else if(f.slotScope){i.plain=!1;var v=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[v]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var h=0;h<is.length;h++)is[h](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Di||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Ns(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=ur(e,ts))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function fr(e){null!=rn(e,"v-pre")&&(e.pre=!0)}function pr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function dr(e){var t=nn(e,"key");t&&(e.key=t)}function vr(e){var t=nn(e,"ref");t&&(e.ref=t,e.refInFor=Cr(e))}function hr(e){var t;if(t=rn(e,"v-for")){var n=t.match(Os);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ts);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function mr(e){var t=rn(e,"v-if");if(t)e.if=t,_r(e,{exp:t,block:e});else{null!=rn(e,"v-else")&&(e.else=!0);var n=rn(e,"v-else-if");n&&(e.elseif=n)}}function gr(e,t){var n=yr(t.children);n&&n.if&&_r(n,{exp:e.elseif,block:e})}function yr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function _r(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function br(e){null!=rn(e,"v-once")&&(e.once=!0)}function $r(e){if("slot"===e.tag)e.slotName=nn(e,"name");else{var t=nn(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=rn(e,"scope"))}}function wr(e){var t;(t=nn(e,"is"))&&(e.component=t),null!=rn(e,"inline-template")&&(e.inlineTemplate=!0)}function xr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,As.test(r))if(e.hasBindings=!0,a=kr(r),a&&(r=r.replace(js,"")),Es.test(r))r=r.replace(Es,""),o=Wt(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=wi(r))&&(r="innerHTML")),a.camel&&(r=wi(r))),s||as(e.tag,e.attrsMap.type,r)?Qt(e,r,o):Xt(e,r,o);else if(ks.test(r))r=r.replace(ks,""),tn(e,r,o,a);else{r=r.replace(As,"");var u=r.match(Ss),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),en(e,r,i,o,l,a)}else Xt(e,r,JSON.stringify(o))}function Cr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function kr(e){var t=e.match(js);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Ar(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Or(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Tr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Is.test(r.name)||(r.name=r.name.replace(Ls,""),t.push(r))}return t}function Sr(e,t){e&&(cs=Ds(t.staticKeys||""),us=t.isReservedTag||Oi,jr(e),Nr(e,!1))}function Er(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function jr(e){if(e.static=Lr(e),1===e.type){if(!us(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];jr(r),r.static||(e.static=!1)}}}function Nr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Nr(e.children[n],t||!!e.for);e.ifConditions&&Ir(e.ifConditions,t)}}function Ir(e,t){for(var n=1,r=e.length;n<r;n++)Nr(e[n].block,t)}function Lr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||bi(e.tag)||!us(e.tag)||Dr(e)||!Object.keys(e).every(cs))))}function Dr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Mr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Pr(r,e[r])+",";return n.slice(0,-1)+"}"}function Pr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Pr(e,t)}).join(",")+"]";var n=Ps.test(t.value),r=Ms.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)Hs[s]?(o+=Hs[s],Rs[s]&&a.push(s)):a.push(s);a.length&&(i+=Rr(a)),o&&(i+=o);return"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Rr(e){return"if(!('button' in $event)&&"+e.map(Fr).join("&&")+")return null;"}function Fr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Rs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Hr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Ur(e,t){var n=hs,r=hs=[],i=ms;ms=0,gs=t,ls=t.warn||Gt,fs=Yt(t.modules,"transformCode"),ps=Yt(t.modules,"genData"),ds=t.directives||{},vs=t.isReservedTag||Oi;var o=e?Br(e):'_c("div")';return hs=n,ms=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Br(e){if(e.staticRoot&&!e.staticProcessed)return Vr(e);if(e.once&&!e.onceProcessed)return zr(e);if(e.for&&!e.forProcessed)return qr(e);if(e.if&&!e.ifProcessed)return Jr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return oi(e);var t;if(e.component)t=ai(e.component,e);else{var n=e.plain?void 0:Wr(e),r=e.inlineTemplate?null:Xr(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<fs.length;i++)t=fs[i](e,t);return t}return Xr(e)||"void 0"}function Vr(e){return e.staticProcessed=!0,hs.push("with(this){return "+Br(e)+"}"),"_m("+(hs.length-1)+(e.staticInFor?",true":"")+")"}function zr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Jr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Br(e)+","+ms+++(t?","+t:"")+")":Br(e)}return Vr(e)}function Jr(e){return e.ifProcessed=!0,Kr(e.ifConditions.slice())}function Kr(e){function t(e){return e.once?zr(e):Br(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+Kr(e):""+t(n.block)}function qr(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Br(e)+"})"}function Wr(e){var t="{",n=Zr(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<ps.length;r++)t+=ps[r](e);if(e.attrs&&(t+="attrs:{"+si(e.attrs)+"},"),e.props&&(t+="domProps:{"+si(e.props)+"},"),e.events&&(t+=Mr(e.events)+","),e.nativeEvents&&(t+=Mr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=Yr(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=Gr(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function Zr(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=ds[i.name]||Us[i.name];c&&(o=!!c(e,i,ls)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function Gr(e){var t=e.children[0];if(1===t.type){var n=Ur(t,gs);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function Yr(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return Qr(t,e[t])}).join(",")+"])"}function Qr(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?Xr(t)||"void 0":Br(t))+"}]"}function Xr(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Br(r);var i=t?ei(n):0;return"["+n.map(ri).join(",")+"]"+(i?","+i:"")}}function ei(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ti(r)||r.ifConditions&&r.ifConditions.some(function(e){return ti(e.block)})){t=2;break}(ni(r)||r.ifConditions&&r.ifConditions.some(function(e){return ni(e.block)}))&&(t=1)}}return t}function ti(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function ni(e){return!vs(e.tag)}function ri(e){return 1===e.type?Br(e):ii(e)}function ii(e){return"_v("+(2===e.type?e.expression:ci(JSON.stringify(e.text)))+")"}function oi(e){var t=e.slotName||'"default"',n=Xr(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return wi(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function ai(e,t){var n=t.inlineTemplate?null:Xr(t,!0);return"_c("+e+","+Wr(t)+(n?","+n:"")+")"}function si(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+ci(r.value)+","}return t.slice(0,-1)}function ci(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function ui(e,t){var n=lr(e.trim(),t);Sr(n,t);var r=Ur(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function li(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),d}}function fi(e,t){var n=(t.warn,rn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=nn(e,"class",!1);r&&(e.classBinding=r)}function pi(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function di(e,t){var n=(t.warn,rn(e,"style"));n&&(e.staticStyle=JSON.stringify(la(n)));var r=nn(e,"style",!1);r&&(e.styleBinding=r)}function vi(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function hi(e,t){t.value&&Qt(e,"textContent","_s("+t.value+")")}function mi(e,t){t.value&&Qt(e,"innerHTML","_s("+t.value+")")}function gi(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var yi,_i,bi=n("slot,component",!0),$i=Object.prototype.hasOwnProperty,wi=a(function(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}),xi=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Ci=a(function(e){return e.replace(/([^-])([A-Z])/g,"$1-$2").replace(/([^-])([A-Z])/g,"$1-$2").toLowerCase()}),ki=Object.prototype.toString,Ai="[object Object]",Oi=function(){return!1},Ti=function(e){return e},Si={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Oi,isUnknownElement:Oi,getTagNamespace:d,parsePlatformTagName:Ti,mustUseProp:Oi,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Ei=Object.freeze({}),ji=/[^\w.$]/,Ni="__proto__"in{},Ii="undefined"!=typeof window,Li=Ii&&window.navigator.userAgent.toLowerCase(),Di=Li&&/msie|trident/.test(Li),Mi=Li&&Li.indexOf("msie 9.0")>0,Pi=Li&&Li.indexOf("edge/")>0,Ri=Li&&Li.indexOf("android")>0,Fi=Li&&/iphone|ipad|ipod|ios/.test(Li),Hi=Li&&/chrome\/\d+/.test(Li)&&!Pi,Ui=function(){return void 0===yi&&(yi=!Ii&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),yi},Bi=Ii&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Vi="undefined"!=typeof Symbol&&b(Symbol)&&"undefined"!=typeof Reflect&&b(Reflect.ownKeys),zi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Fi&&setTimeout(d)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}}();_i="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Ji=d,Ki=0,qi=function(){this.id=Ki++,this.subs=[]};qi.prototype.addSub=function(e){this.subs.push(e)},qi.prototype.removeSub=function(e){r(this.subs,e)},qi.prototype.depend=function(){qi.target&&qi.target.addDep(this)},qi.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},qi.target=null;var Wi=[],Zi=Array.prototype,Gi=Object.create(Zi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Zi[e];y(Gi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var Yi=Object.getOwnPropertyNames(Gi),Qi={shouldConvert:!0,isSettingProps:!1},Xi=function(e){if(this.value=e,this.dep=new qi,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){(Ni?x:C)(e,Gi,Yi),this.observeArray(e)}else this.walk(e)};Xi.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]])},Xi.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t])};var eo=Si.optionMergeStrategies;eo.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},Si._lifecycleHooks.forEach(function(e){eo[e]=j}),Si._assetTypes.forEach(function(e){eo[e+"s"]=N}),eo.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},eo.props=eo.methods=eo.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var to=function(e,t){return void 0===t?e:t},no=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},ro={child:{}};ro.child.get=function(){return this.componentInstance},Object.defineProperties(no.prototype,ro);var io,oo=function(){var e=new no;return e.text="",e.isComment=!0,e},ao=a(function(e){var t="~"===e.charAt(0);e=t?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:t,capture:n}}),so=null,co=[],uo={},lo=!1,fo=!1,po=0,vo=0,ho=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new _i,this.newDepIds=new _i,this.expression="","function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ho.prototype.get=function(){$(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){U(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&he(e),w(),this.cleanupDeps(),e},ho.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ho.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ho.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ve(this)},ho.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){U(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},ho.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ho.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ho.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var mo=new _i,go={enumerable:!0,configurable:!0,get:d,set:d},yo={lazy:!0},_o={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){(e.componentInstance=Ee(e,so,n,r)).$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var i=e;_o.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;se(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,fe(e.componentInstance,"mounted")),e.data.keepAlive&&ue(e.componentInstance,!0)},destroy:function(e){e.componentInstance._isDestroyed||(e.data.keepAlive?le(e.componentInstance,!0):e.componentInstance.$destroy())}},bo=Object.keys(_o),$o=1,wo=2,xo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=xo++,t._isVue=!0,e&&e._isComponent?Qe(t,e):t.$options=D(Xe(t.constructor),e||{},t),t._renderProxy=t,t._self=t,oe(t),Q(t),Ze(t),fe(t,"beforeCreate"),Ye(t),ye(t),Ge(t),fe(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(nt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=O,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new ho(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(nt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}(nt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&fe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=so;so=n,n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),so=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){fe(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),fe(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$options._parentElm=e.$options._refElm=null}}}(nt),function(n){n.prototype.$nextTick=function(e){return zi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=z(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||Ei,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){U(t,e,"render function"),a=e._vnode}return a instanceof no||(a=oo()),a.parent=i,a},n.prototype._o=Ke,n.prototype._n=t,n.prototype._s=e,n.prototype._l=He,n.prototype._t=Ue,n.prototype._q=v,n.prototype._i=h,n.prototype._m=Je,n.prototype._f=Be,n.prototype._k=Ve,n.prototype._b=ze,n.prototype._v=B,n.prototype._e=oo,n.prototype._u=ie}(nt);var Co=[String,RegExp],ko={name:"keep-alive",abstract:!0,props:{include:Co,exclude:Co},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)pt(e.cache[t])},watch:{include:function(e){ft(this.cache,function(t){return lt(e,t)})},exclude:function(e){ft(this.cache,function(t){return!lt(e,t)})}},render:function(){var e=Y(this.$slots.default),t=e&&e.componentOptions;if(t){var n=ut(t);if(n&&(this.include&&!lt(this.include,n)||this.exclude&&lt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Ao={KeepAlive:ko};!function(e){var t={};t.get=function(){return Si},Object.defineProperty(e,"config",t),e.util={warn:Ji,extend:u,mergeOptions:D,defineReactive:A},e.set=O,e.delete=T,e.nextTick=zi,e.options=Object.create(null),Si._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,u(e.options.components,Ao),rt(e),it(e),ot(e),ct(e)}(nt),Object.defineProperty(nt.prototype,"$isServer",{get:Ui}),nt.version="2.2.6";var Oo,To,So,Eo,jo,No,Io,Lo,Do,Mo=n("input,textarea,option,select"),Po=function(e,t,n){return"value"===n&&Mo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Ro=n("contenteditable,draggable,spellcheck"),Fo=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Ho="http://www.w3.org/1999/xlink",Uo=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Bo=function(e){return Uo(e)?e.slice(6,e.length):""},Vo=function(e){return null==e||e===!1},zo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jo=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ko=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),qo=function(e){return"pre"===e},Wo=function(e){return Jo(e)||Ko(e)},Zo=Object.create(null),Go=Object.freeze({createElement:$t,createElementNS:wt,createTextNode:xt,createComment:Ct,insertBefore:kt,removeChild:At,appendChild:Ot,parentNode:Tt,nextSibling:St,tagName:Et,setTextContent:jt,setAttribute:Nt}),Yo={create:function(e,t){It(t)},update:function(e,t){e.data.ref!==t.data.ref&&(It(e,!0),It(t))},destroy:function(e){It(e,!0)}},Qo=new no("",{},[]),Xo=["create","activate","update","remove","destroy"],ea={create:Ht,update:Ht,destroy:function(e){Ht(e,Qo)}},ta=Object.create(null),na=[Yo,ea],ra={create:Jt,update:Jt},ia={create:qt,update:qt},oa=/[\w).+\-_$\]]/,aa="__r",sa="__c",ca={create:$n,update:$n},ua={create:wn,update:wn},la=a(function(e){var t={};return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var n=e.split(/:(.+)/);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),fa=/^--/,pa=/\s*!important$/,da=function(e,t,n){fa.test(t)?e.style.setProperty(t,n):pa.test(n)?e.style.setProperty(t,n.replace(pa,""),"important"):e.style[ha(t)]=n},va=["Webkit","Moz","ms"],ha=a(function(e){if(Do=Do||document.createElement("div"),"filter"!==(e=wi(e))&&e in Do.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<va.length;n++){var r=va[n]+t;if(r in Do.style)return r}}),ma={create:Sn,update:Sn},ga=a(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ya=Ii&&!Mi,_a="transition",ba="animation",$a="transition",wa="transitionend",xa="animation",Ca="animationend";ya&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&($a="WebkitTransition",wa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(xa="WebkitAnimation",Ca="webkitAnimationEnd"));var ka=Ii&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Aa=/\b(transform|all)(,|$)/,Oa=Ii?{create:zn,activate:zn,remove:function(e,t){e.data.show?t():Un(e,t)}}:{},Ta=[ra,ia,ca,ua,ma,Oa],Sa=Ta.concat(na),Ea=function(e){function t(e){return new no(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0==--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);Dt(t)&&O.removeChild(t,e)}function a(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var o=e.data,a=e.children,c=e.tag;Dt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),f(e,a,t),Dt(o)&&d(e,t),l(n,e.elm,r)):Mt(e.isComment)?(e.elm=O.createComment(e.text),
l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r))}}function s(e,t,n,r){var i=e.data;if(Dt(i)){var o=Dt(e.componentInstance)&&i.keepAlive;if(Dt(i=i.hook)&&Dt(i=i.init)&&i(e,!1,n,r),Dt(e.componentInstance))return c(e,t),Mt(o)&&u(e,t,n,r),!0}}function c(e,t){Dt(e.data.pendingInsert)&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,p(e)?(d(e,t),v(e)):(It(e),t.push(e))}function u(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Dt(i=o.data)&&Dt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](Qo,o);t.push(o);break}l(n,e.elm,r)}function l(e,t,n){Dt(e)&&(Dt(n)?O.insertBefore(e,t,n):O.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function p(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return Dt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](Qo,e);x=e.data.hook,Dt(x)&&(Dt(x.create)&&x.create(Qo,e),Dt(x.insert)&&t.push(e))}function v(e){for(var t,n=e;n;)Dt(t=n.context)&&Dt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),n=n.parent;Dt(t=so)&&t!==e.context&&Dt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t)}function m(e){var t,n,r=e.data;if(Dt(r))for(Dt(t=r.hook)&&Dt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(Dt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var o=t[n];Dt(o)&&(Dt(o.tag)?(y(o),m(o)):i(o.elm))}}function y(e,t){if(Dt(t)||Dt(e.data)){var n=k.remove.length+1;for(Dt(t)?t.listeners+=n:t=r(e.elm,n),Dt(x=e.componentInstance)&&Dt(x=x._vnode)&&Dt(x.data)&&y(x,t),x=0;x<k.remove.length;++x)k.remove[x](e,t);Dt(x=e.data.hook)&&Dt(x=x.remove)?x(e,t):t()}else i(e.elm)}function _(e,t,n,r,i){for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;l<=p&&f<=m;)Lt(d)?d=t[++l]:Lt(v)?v=t[--p]:Pt(d,y)?(b(d,y,r),d=t[++l],y=n[++f]):Pt(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):Pt(d,_)?(b(d,_,r),$&&O.insertBefore(e,d.elm,O.nextSibling(v.elm)),d=t[++l],_=n[--m]):Pt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(Lt(o)&&(o=Ft(t,l,p)),s=Dt(y.key)?o[y.key]:null,Lt(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],Pt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));l>p?(u=Lt(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p)}function b(e,t,n,r){if(e!==t){if(Mt(t.isStatic)&&Mt(e.isStatic)&&t.key===e.key&&(Mt(t.isCloned)||Mt(t.isOnce)))return t.elm=e.elm,void(t.componentInstance=e.componentInstance);var i,o=t.data;Dt(o)&&Dt(i=o.hook)&&Dt(i=i.prepatch)&&i(e,t);var a=t.elm=e.elm,s=e.children,c=t.children;if(Dt(o)&&p(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);Dt(i=o.hook)&&Dt(i=i.update)&&i(e,t)}Lt(t.text)?Dt(s)&&Dt(c)?s!==c&&_(a,s,c,n,r):Dt(c)?(Dt(e.text)&&O.setTextContent(a,""),h(a,null,c,0,c.length-1,n)):Dt(s)?g(a,s,0,s.length-1):Dt(e.text)&&O.setTextContent(a,""):e.text!==t.text&&O.setTextContent(a,t.text),Dt(o)&&Dt(i=o.hook)&&Dt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(Mt(n)&&Dt(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(Dt(i)&&(Dt(x=i.hook)&&Dt(x=x.init)&&x(t,!0),Dt(x=t.componentInstance)))return c(t,n),!0;if(Dt(r)){if(Dt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){if(!s||!w(s,o[u],n)){a=!1;break}s=s.nextSibling}if(!a||s)return!1}else f(t,o,n);if(Dt(i))for(var l in i)if(!T(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var x,C,k={},A=e.modules,O=e.nodeOps;for(x=0;x<Xo.length;++x)for(k[Xo[x]]=[],C=0;C<A.length;++C)Dt(A[C][Xo[x]])&&k[Xo[x]].push(A[C][Xo[x]]);var T=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(Lt(n))return void(Dt(e)&&m(e));var c=!1,u=[];if(Lt(e))c=!0,a(n,u,o,s);else{var l=Dt(e.nodeType);if(!l&&Pt(e,n))b(e,n,u,i);else{if(l){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),Mt(r)&&w(e,n,u))return $(n,u,!0),e;e=t(e)}var f=e.elm,d=O.parentNode(f);if(a(n,u,f._leaveCb?null:d,O.nextSibling(f)),Dt(n.parent)){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(p(n))for(var h=0;h<k.create.length;++h)k.create[h](Qo,n.parent)}Dt(d)?g(d,[e],0,0):Dt(e.tag)&&m(e)}}return $(n,u,c),n.elm}}({nodeOps:Go,modules:Sa});Mi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Gn(e,"input")});var ja={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Jn(e,t,n.context)};r(),(Di||Pi)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type&&"password"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(Ri||(e.addEventListener("compositionstart",Wn),e.addEventListener("compositionend",Zn)),Mi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Jn(e,t,n.context);(e.multiple?t.value.some(function(t){return Kn(t,e.options)}):t.value!==t.oldValue&&Kn(t.value,e.options))&&Gn(e,"change")}}},Na={bind:function(e,t,n){var r=t.value;n=Yn(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Mi?(n.data.show=!0,Hn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=Yn(n),n.data&&n.data.transition&&!Mi?(n.data.show=!0,r?Hn(n,function(){e.style.display=e.__vOriginalDisplay}):Un(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ia={model:ja,show:Na},La={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Da={name:"transition",props:La,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(tr(this.$vnode))return i;var a=Qn(i);if(!a)return i;if(this._leaving)return er(e,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=Xn(this),l=this._vnode,f=Qn(l);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),f&&f.data&&!nr(a,f)){var p=f&&(f.data.transition=u({},c));if("out-in"===r)return this._leaving=!0,q(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),er(e,i);if("in-out"===r){var d,v=function(){d()};q(c,"afterEnter",v),q(c,"enterCancelled",v),q(p,"delayLeave",function(e){d=e})}}return i}}},Ma=u({tag:String,moveClass:String},La);delete Ma.mode;var Pa={props:Ma,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Xn(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(rr),e.forEach(ir),e.forEach(or);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ln(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(wa,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(wa,e),n._moveCb=null,Dn(n,t))})}})}},methods:{hasMove:function(e,t){if(!ya)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){jn(n,e)}),En(n,t),n.style.display="none",this.$el.appendChild(n);var r=Pn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Ra={Transition:Da,TransitionGroup:Pa};nt.config.mustUseProp=Po,nt.config.isReservedTag=Wo,nt.config.getTagNamespace=yt,nt.config.isUnknownElement=_t,u(nt.options.directives,Ia),u(nt.options.components,Ra),nt.prototype.__patch__=Ii?Ea:d,nt.prototype.$mount=function(e,t){return e=e&&Ii?bt(e):void 0,ae(this,e,t)},setTimeout(function(){Si.devtools&&Bi&&Bi.emit("init",nt)},0);var Fa,Ha=!!Ii&&function(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}("\n","&#10;"),Ua=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Ba=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Va=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),za=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Ja=new RegExp("^\\s*"+/([^\s"'<>\/=]+)/.source+"(?:\\s*("+/(?:=)/.source+")\\s*(?:"+za.join("|")+"))?"),Ka="[a-zA-Z_][\\w\\-\\.]*",qa=new RegExp("^<((?:"+Ka+"\\:)?"+Ka+")"),Wa=/^\s*(\/?)>/,Za=new RegExp("^<\\/((?:"+Ka+"\\:)?"+Ka+")[^>]*>"),Ga=/^<!DOCTYPE [^>]+>/i,Ya=/^<!--/,Qa=/^<!\[/,Xa=!1;"x".replace(/x(.)?/g,function(e,t){Xa=""===t});var es,ts,ns,rs,is,os,as,ss,cs,us,ls,fs,ps,ds,vs,hs,ms,gs,ys=n("script,style,textarea",!0),_s={},bs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},$s=/&(?:lt|gt|quot|amp);/g,ws=/&(?:lt|gt|quot|amp|#10);/g,xs=/\{\{((?:.|\n)+?)\}\}/g,Cs=a(function(e){var t=e[0].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),n=e[1].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),ks=/^@|^v-on:/,As=/^v-|^@|^:/,Os=/(.*?)\s+(?:in|of)\s+(.*)/,Ts=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ss=/:(.*)$/,Es=/^:|^v-bind:/,js=/\.[^.]+/g,Ns=a(ar),Is=/^xmlns:NS\d+/,Ls=/^NS\d+:/,Ds=a(Er),Ms=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ps=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Rs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fs=function(e){return"if("+e+")return null;"},Hs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Fs("$event.target !== $event.currentTarget"),ctrl:Fs("!$event.ctrlKey"),shift:Fs("!$event.shiftKey"),alt:Fs("!$event.altKey"),meta:Fs("!$event.metaKey"),left:Fs("'button' in $event && $event.button !== 0"),middle:Fs("'button' in $event && $event.button !== 1"),right:Fs("'button' in $event && $event.button !== 2")},Us={bind:Hr,cloak:d},Bs={staticKeys:["staticClass"],transformNode:fi,genData:pi},Vs={staticKeys:["staticStyle"],transformNode:di,genData:vi},zs=[Bs,Vs],Js={model:dn,text:hi,html:mi},Ks={expectHTML:!0,modules:zs,directives:Js,isPreTag:qo,isUnaryTag:Ua,mustUseProp:Po,canBeLeftOpenTag:Ba,isReservedTag:Wo,getTagNamespace:yt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(zs)},qs=function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=ui(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=li(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=li(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}(Ks),Ws=qs.compileToFunctions,Zs=a(function(e){var t=bt(e);return t&&t.innerHTML}),Gs=nt.prototype.$mount;return nt.prototype.$mount=function(e,t){if((e=e&&bt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Zs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=gi(e));if(r){var i=Ws(r,{shouldDecodeNewlines:Ha,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Gs.call(this,e,t)},nt.compile=Ws,nt});

/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('hammerjs')) :
  typeof define === 'function' && define.amd ? define(['hammerjs'], factory) :
  (factory(global.Hammer));
}(this, (function (Hammer) { 'use strict';

Hammer = 'default' in Hammer ? Hammer['default'] : Hammer;

function assign(target) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];
  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    var keys = Object.keys(source);
    for (var i$1 = 0; i$1 < keys.length; i$1++) {
      var key = keys[i$1];
      target[key] = source[key];
    }
  }
  return target
}
function createProp() {
  return {
    type: Object,
    default: function() { return {} }
  }
}
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
var directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'];
function guardDirections (options) {
  var dir = options.direction;
  if (typeof dir === 'string') {
    var hammerDirection = 'DIRECTION_' + dir.toUpperCase();
    if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDirection)) {
      options.direction = Hammer[hammerDirection];
    } else {
      console.warn('[vue-touch] invalid direction: ' + dir);
    }
  }
  return options
}
var config = {
};
var customEvents = {
};
var gestures = [
  'pan','panstart','panmove','panend','pancancel','panleft','panright','panup','pandown',
  'pinch','pinchstart','pinchmove','pinchend','pinchcancel','pinchin','pinchout',
  'press','pressup',
  'rotate','rotatestart','rotatemove','rotateend','rotatecancel',
  'swipe','swipeleft','swiperight','swipeup','swipedown',
  'tap'
];
var gestureMap = {
  pan: 'pan',
  panstart: 'pan',
  panmove: 'pan',
  panend: 'pan',
  pancancel: 'pan',
  panleft: 'pan',
  panright: 'pan',
  panup: 'pan',
  pandown: 'pan',
  pinch: 'pinch',
  pinchstart: 'pinch',
  pinchmove: 'pinch',
  pinchend: 'pinch',
  pinchcancel: 'pinch',
  pinchin: 'pinch',
  pinchout: 'pinch',
  press: 'press',
  pressup: 'press',
  rotate: 'rotate',
  rotatestart: 'rotate',
  rotatemove: 'rotate',
  rotateend: 'rotate',
  rotatecancel: 'rotate',
  swipe: 'swipe',
  swipeleft: 'swipe',
  swiperight: 'swipe',
  swipeup: 'swipe',
  swipedown: 'swipe',
  tap: 'tap'
};

var Component = {
  props: {
    options: createProp(),
    tapOptions: createProp(),
    panOptions: createProp(),
    pinchOptions: createProp(),
    pressOptions: createProp(),
    rotateOptions: createProp(),
    swipeOptions: createProp(),
    tag: { type: String, default: 'div' },
    enabled: {
      default: true,
      type: [Boolean, Object],
    }
  },
  mounted: function mounted() {
    if (!this.$isServer) {
      this.hammer = new Hammer.Manager(this.$el, this.options);
      this.recognizers = {};
      this.setupBuiltinRecognizers();
      this.setupCustomRecognizers();
      this.updateEnabled(this.enabled);
    }
  },
  destroyed: function destroyed() {
    if (!this.$isServer) {
      this.hammer.destroy();
    }
  },
  watch: {
    enabled: {
      deep: true,
      handler: function handler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        (ref = this).updateEnabled.apply(ref, args);
        var ref;
      }
    }
  },
  methods: {
    setupBuiltinRecognizers: function setupBuiltinRecognizers()  {
      var this$1 = this;
      for (var i = 0; i < gestures.length; i++) {
        var gesture = gestures[i];
        if (this$1._events[gesture]) {
          var mainGesture = gestureMap[gesture];
          var options = assign({}, (config[mainGesture] || {}), this$1[(mainGesture + "Options")]);
          this$1.addRecognizer(mainGesture, options);
          this$1.addEvent(gesture);
        }
      }
    },
    setupCustomRecognizers: function setupCustomRecognizers() {
      var this$1 = this;
      var gestures$$1 = Object.keys(customEvents);
      for (var i = 0; i < gestures$$1.length; i++) {
        var gesture = gestures$$1[i];
        if (this$1._events[gesture]) {
          var opts = customEvents[gesture];
          var localCustomOpts = this$1[(gesture + "Options")] || {};
          var options = assign({}, opts, localCustomOpts);
          this$1.addRecognizer(gesture, options, {mainGesture: options.type});
          this$1.addEvent(gesture);
        }
      }
    },
    addRecognizer: function addRecognizer(gesture, options, ref) {
      if ( ref === void 0 ) ref = {};
      var mainGesture = ref.mainGesture;
      if (!this.recognizers[gesture]) {
        var recognizer = new Hammer[capitalize(mainGesture || gesture)](guardDirections(options));
        this.recognizers[gesture] = recognizer;
        this.hammer.add(recognizer);
        recognizer.recognizeWith(this.hammer.recognizers);
      }
    },
    addEvent: function addEvent(gesture) {
      var this$1 = this;
      this.hammer.on(gesture, function (e) { return this$1.$emit(gesture, e); });
    },
    updateEnabled: function updateEnabled(newVal, oldVal) {
      var this$1 = this;
      if (newVal === true) {
        this.enableAll();
      } else if (newVal === false) {
        this.disableAll();
      } else if (typeof newVal === 'object') {
        var keys = Object.keys(newVal);
        for (var i = 0; i < keys.length; i++) {
          var event = keys[i];
          if (this$1.recognizers[event]) {
            newVal[event]
              ? this$1.enable(event)
              : this$1.disable(event);
          }
        }
      }
    },
    enable: function enable(r) {
      var recognizer = this.recognizers[r];
      if (!recognizer.options.enable) {
        recognizer.set({ enable: true });
      }
    },
    disable: function disable(r) {
      var recognizer = this.recognizers[r];
      if (recognizer.options.enable) {
        recognizer.set({ enable: false });
      }
    },
    toggle: function toggle(r) {
      var recognizer = this.recognizers[r];
      if (recognizer) {
        recognizer.options.enable
          ? this.disable(r)
          : this.enable(r);
      }
    },
    enableAll: function enableAll(r) {
      this.toggleAll({ enable: true });
    },
    disableAll: function disableAll(r) {
      this.toggleAll({ enable: false });
    },
    toggleAll: function toggleAll(ref) {
      var this$1 = this;
      var enable = ref.enable;
      var keys = Object.keys(this.recognizers);
      for (var i = 0; i < keys.length; i++) {
        var r = this$1.recognizers[keys[i]];
        if (r.options.enable !== enable) {
          r.set({ enable: enable });
        }
      }
    },
    isEnabled: function isEnabled(r) {
      return this.recognizers[r] && this.recognizers[r].options.enable
    }
  },
  render: function render(h) {
    return h(this.tag, {}, this.$slots.default)
  }
};

var installed = false;
var vueTouch = { config: config, customEvents: customEvents };
vueTouch.install = function install(Vue, opts) {
  if ( opts === void 0 ) opts = {};
  var name = opts.name || 'v-touch';
  Vue.component(name, assign(Component, { name: name }));
  installed = true;
}.bind(vueTouch);
vueTouch.registerCustomEvent = function registerCustomEvent(event, options) {
  if ( options === void 0 ) options = {};
  if (installed) {
    console.warn(("\n      [vue-touch]: Custom Event '" + event + "' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "));
    return
  }
  options.event = event;
  customEvents[event] = options;
  Component.props[(event + "Options")] = {
    type: Object,
    default: function default$1() { return {} }
  };
}.bind(vueTouch);
vueTouch.component = Component;
if (typeof exports == "object") {
  module.exports = vueTouch;
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return vueTouch });
} else if (typeof window !== 'undefined' && window.Vue) {
  window.VueTouch = vueTouch;
  Vue.use(vueTouch);
}

})));
//# sourceMappingURL=vue-touch.js.map
