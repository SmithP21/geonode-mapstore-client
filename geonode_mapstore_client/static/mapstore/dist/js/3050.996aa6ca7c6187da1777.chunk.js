(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3050,5578],{64210:(t,e,n)=>{"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=n(87883),a=n(44020),f=n(74851);function l(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function s(t,e){return e.decode?a(t):t}function p(t){return Array.isArray(t)?t.sort():"object"===r(t)?p(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function v(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function d(t){var e=(t=v(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function y(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":return function(t,e,n){var r="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;n[t]=r};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var i,c,a,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=u(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}(t.split("&"));try{for(l.s();!(i=l.n()).done;){var v=i.value,d=(c=f(e.decode?v.replace(/\+/g," "):v,"="),a=2,function(t){if(Array.isArray(t))return t}(c)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return u}}(c,a)||u(c,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=d[0],m=d[1];m=void 0===m?null:s(m,e),n(s(h,e),m,o)}}catch(t){l.e(t)}finally{l.f()}for(var b=0,g=Object.keys(o);b<g.length;b++){var w=g[b],x=o[w];if("object"===r(x)&&null!==x)for(var S=0,j=Object.keys(x);S<j.length;S++){var k=j[S];x[k]=y(x[k],e)}else o[w]=y(x,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(t,e){var n=o[e];return Boolean(n)&&"object"===r(n)&&!Array.isArray(n)?t[e]=p(n):t[e]=n,t}),Object.create(null))}e.extract=d,e.parse=h,e.stringify=function(t,e){if(!t)return"";var n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(n,r){var u=n.length;return void 0===r||t.skipNull&&null===r?n:[].concat(o(n),null===r?[[l(e,t),"[",u,"]"].join("")]:[[l(e,t),"[",l(u,t),"]=",l(r,t)].join("")])}};case"bracket":return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r?n:[].concat(o(n),null===r?[[l(e,t),"[]"].join("")]:[[l(e,t),"[]=",l(r,t)].join("")])}};case"comma":return function(e){return function(n,r){return null==r||0===r.length?n:0===n.length?[[l(e,t),"=",l(r,t)].join("")]:[[n,l(r,t)].join(",")]}};default:return function(e){return function(n,r){return void 0===r||t.skipNull&&null===r?n:[].concat(o(n),null===r?[l(e,t)]:[[l(e,t),"=",l(r,t)].join("")])}}}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),r=Object.assign({},t);if(e.skipNull)for(var u=0,i=Object.keys(r);u<i.length;u++){var c=i[u];void 0!==r[c]&&null!==r[c]||delete r[c]}var a=Object.keys(r);return!1!==e.sort&&a.sort(e.sort),a.map((function(r){var o=t[r];return void 0===o?"":null===o?l(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,e)+"="+l(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:v(t).split("?")[0]||"",query:h(d(t),e)}}},87883:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},74851:t=>{"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},44020:t=>{"use strict";var e="%[a-f0-9]{2}",n=new RegExp(e,"gi"),r=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],o(n),o(r))}function u(t){try{return decodeURIComponent(t)}catch(u){for(var e=t.match(n),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=r.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var o=u(n[0]);o!==n[0]&&(e[n[0]]=o)}n=r.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),c=0;c<i.length;c++){var a=i[c];t=t.replace(new RegExp(a,"g"),e[a])}return t}(t)}}},80760:(t,e,n)=>{var r=n(89881);t.exports=function(t,e){var n=[];return r(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}},69199:(t,e,n)=>{var r=n(89881),o=n(98612);t.exports=function(t,e){var n=-1,u=o(t)?Array(t.length):[];return r(t,(function(t,r,o){u[++n]=e(t,r,o)})),u}},82689:(t,e,n)=>{var r=n(29932),o=n(97786),u=n(67206),i=n(69199),c=n(71131),a=n(7518),f=n(85022),l=n(6557),s=n(1469);t.exports=function(t,e,n){e=e.length?r(e,(function(t){return s(t)?function(e){return o(e,1===t.length?t[0]:t)}:t})):[l];var p=-1;e=r(e,a(u));var v=i(t,(function(t,n,o){return{criteria:r(e,(function(e){return e(t)})),index:++p,value:t}}));return c(v,(function(t,e){return f(t,e,n)}))}},71131:t=>{t.exports=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}},26393:(t,e,n)=>{var r=n(33448);t.exports=function(t,e){if(t!==e){var n=void 0!==t,o=null===t,u=t==t,i=r(t),c=void 0!==e,a=null===e,f=e==e,l=r(e);if(!a&&!l&&!i&&t>e||i&&c&&f&&!a&&!l||o&&c&&f||!n&&f||!u)return 1;if(!o&&!i&&!l&&t<e||l&&n&&u&&!o&&!i||a&&n&&u||!c&&u||!f)return-1}return 0}},85022:(t,e,n)=>{var r=n(26393);t.exports=function(t,e,n){for(var o=-1,u=t.criteria,i=e.criteria,c=u.length,a=n.length;++o<c;){var f=r(u[o],i[o]);if(f)return o>=a?f:f*("desc"==n[o]?-1:1)}return t.index-e.index}},23279:(t,e,n)=>{var r=n(13218),o=n(7771),u=n(14841),i=Math.max,c=Math.min;t.exports=function(t,e,n){var a,f,l,s,p,v,d=0,y=!1,h=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=a,r=f;return a=f=void 0,d=e,s=t.apply(r,n)}function g(t){return d=t,p=setTimeout(x,e),y?b(t):s}function w(t){var n=t-v;return void 0===v||n>=e||n<0||h&&t-d>=l}function x(){var t=o();if(w(t))return S(t);p=setTimeout(x,function(t){var n=e-(t-v);return h?c(n,l-(t-d)):n}(t))}function S(t){return p=void 0,m&&a?b(t):(a=f=void 0,s)}function j(){var t=o(),n=w(t);if(a=arguments,f=this,v=t,n){if(void 0===p)return g(v);if(h)return clearTimeout(p),p=setTimeout(x,e),b(v)}return void 0===p&&(p=setTimeout(x,e)),s}return e=u(e)||0,r(n)&&(y=!!n.leading,l=(h="maxWait"in n)?i(u(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==p&&clearTimeout(p),d=0,a=v=f=p=void 0},j.flush=function(){return void 0===p?s:S(o())},j}},63105:(t,e,n)=>{var r=n(34963),o=n(80760),u=n(67206),i=n(1469);t.exports=function(t,e){return(i(t)?r:o)(t,u(e,3))}},7771:(t,e,n)=>{var r=n(55639);t.exports=function(){return r.Date.now()}},89734:(t,e,n)=>{var r=n(21078),o=n(82689),u=n(5976),i=n(16612),c=u((function(t,e){if(null==t)return[];var n=e.length;return n>1&&i(t,e[0],e[1])?e=[]:n>2&&i(e[0],e[1],e[2])&&(e=[e[0]]),o(t,r(e,1),[])}));t.exports=c},44908:(t,e,n)=>{var r=n(45652);t.exports=function(t){return t&&t.length?r(t):[]}},19155:(t,e,n)=>{var r=n(67206),o=n(45652);t.exports=function(t,e){return t&&t.length?o(t,r(e,2)):[]}},19081:(t,e,n)=>{"use strict";t.exports=n(1174)},80628:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var r=n(67294),o=n.n(r),u=n(85331);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}const d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handleWidth:!0,handleHeight:!0};return function(n){function r(){return c(this,r),l(this,s(r).apply(this,arguments))}return p(r,n),f(r,[{key:"render",value:function(){return o().createElement(u.Z,e,o().createElement(t,this.props))}}]),r}(r.Component)}},45338:(t,e,n)=>{"use strict";n.d(e,{QS:()=>y});var r=n(67294),o=n.n(r),u=n(45697),i=n.n(u);function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}var a={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},f={xy:[0,0],swiping:!1,eventData:void 0,start:void 0},l="mousemove",s="mouseup";function p(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function v(t,e){var n=function(e){e.touches&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(l,r),document.addEventListener(s,u));var o=e.touches?e.touches[0]:e,i=p([o.clientX,o.clientY],n.rotationAngle);return c({},t,f,{eventData:{initial:[].concat(i),first:!0},xy:i,start:e.timeStamp||0})}))},r=function(e){t((function(t,n){if(!t.xy[0]||!t.xy[1]||e.touches&&e.touches.length>1)return t;var r=e.touches?e.touches[0]:e,o=p([r.clientX,r.clientY],n.rotationAngle),u=o[0],i=o[1],a=t.xy[0]-u,f=t.xy[1]-i,l=Math.abs(a),s=Math.abs(f),v=(e.timeStamp||0)-t.start,d=Math.sqrt(l*l+s*s)/(v||1);if(l<n.delta&&s<n.delta&&!t.swiping)return t;var y=function(t,e,n,r){return t>e?n>0?"Left":"Right":r>0?"Up":"Down"}(l,s,a,f),h=c({},t.eventData,{event:e,absX:l,absY:s,deltaX:a,deltaY:f,velocity:d,dir:y});n.onSwiping&&n.onSwiping(h);var m=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+y])&&(m=!0),m&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),c({},t,{eventData:c({},h,{first:!1}),swiping:!0})}))},o=function(e){t((function(t,n){var r;return t.swiping&&(r=c({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),c({},t,f,{eventData:r})}))},u=function(t){document.removeEventListener(l,r),document.removeEventListener(s,u),o(t)},i=function(t){if(t&&t.addEventListener){var e=[["touchstart",n],["touchmove",r],["touchend",o]];return e.forEach((function(e){var n=e[0],r=e[1];return t.addEventListener(n,r)})),function(){return e.forEach((function(e){var n=e[0],r=e[1];return t.removeEventListener(n,r)}))}}},a={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var r={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&e&&(r.cleanUpTouch=i(e)),c({},t,{el:e},r)}))}};return e.trackMouse&&(a.onMouseDown=n),[a,i]}function d(t,e,n){var r={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),r.cleanUpTouch=null):e.trackTouch&&!t.cleanUpTouch&&t.el&&(r.cleanUpTouch=n(t.el)),c({},t,r)}function y(t){var e=t.trackMouse,n=o().useRef(c({},f,{type:"hook"})),r=o().useRef();r.current=c({},a,t);var u=o().useMemo((function(){return v((function(t){return n.current=t(n.current,r.current)}),{trackMouse:e})}),[e]),i=u[0],l=u[1];return n.current=d(n.current,r.current,l),i}var h=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this)._set=function(t){n.transientState=t(n.transientState,n.props)},n.transientState=c({},f,{type:"class"}),n}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.className,n=t.style,r=t.nodeName,u=void 0===r?"div":r,i=t.innerRef,a=t.children,f=t.trackMouse,l=v(this._set,{trackMouse:f}),s=l[0],p=l[1];this.transientState=d(this.transientState,this.props,p);var y=i?function(t){return i(t),s.ref(t)}:s.ref;return o().createElement(u,c({},s,{className:e,style:n,ref:y}),a)},r}(o().PureComponent);h.propTypes={onSwiped:i().func,onSwiping:i().func,onSwipedUp:i().func,onSwipedRight:i().func,onSwipedDown:i().func,onSwipedLeft:i().func,delta:i().number,preventDefaultTouchmoveEvent:i().bool,nodeName:i().string,trackMouse:i().bool,trackTouch:i().bool,innerRef:i().func,rotationAngle:i().number},h.defaultProps=a}}]);