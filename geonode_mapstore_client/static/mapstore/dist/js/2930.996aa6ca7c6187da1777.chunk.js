(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2930],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>c,ih:()=>u,OX:()=>i,sb:()=>a,K$:()=>l,k7:()=>p,cX:()=>s,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>b,qv:()=>h,cI:()=>E,g6:()=>m,I4:()=>R,l$:()=>v,Xv:()=>O,k3:()=>_,CQ:()=>S,R8:()=>A,HN:()=>g,sH:()=>w,c7:()=>P,_7:()=>T,eF:()=>k,O6:()=>L,ED:()=>D,RP:()=>N,sF:()=>C,VP:()=>j,He:()=>Y,vO:()=>I,WO:()=>x,bh:()=>G,pV:()=>H,MK:()=>Z,ZF:()=>M,tV:()=>F,Dv:()=>B,Yz:()=>U,kI:()=>V,XG:()=>X,A4:()=>W,Rp:()=>q,$o:()=>$,ct:()=>z,oh:()=>K,$h:()=>Q,ud:()=>J,Qr:()=>ee,LR:()=>te,nN:()=>ne,UG:()=>re,F5:()=>oe,c9:()=>ce,Jh:()=>ue,Xy:()=>ie});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",c="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",i="SORT_NODE",a="REMOVE_NODE",l="UPDATE_NODE",p="MOVE_NODE",s="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",b="ADD_GROUP",h="REMOVE_LAYER",E="SHOW_SETTINGS",m="HIDE_SETTINGS",R="UPDATE_SETTINGS",v="REFRESH_LAYERS",O="LAYERS:UPDATE_LAYERS_DIMENSION",_="LAYERS_REFRESHED",S="LAYERS_REFRESH_ERROR",A="LAYERS:BROWSE_DATA",g="LAYERS:DOWNLOAD",w="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",T="LAYERS:FILTER_LAYERS",k="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function N(e,t,n){return{type:E,node:e,nodeType:t,options:n}}function C(){return{type:m}}function j(e){return{type:R,options:e}}function Y(e,t){return{type:r,newProperties:t,layer:e}}function I(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:c,newProperties:t,group:e}}function G(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function H(e){return{type:"CONTEXT_NODE",node:e}}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:i,node:e,order:t,sortLayers:n}}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:a,node:e,nodeType:t,removeEmpty:n}}function F(e,t,n){return{type:l,node:e,nodeType:t,options:n}}function B(e,t,n){return{type:p,node:e,groupId:t,index:n}}function U(e){return{type:s,layerId:e}}function V(e,t){return{type:f,layerId:e,error:t}}function X(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function W(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:e,foreground:t}}function q(e,t,n){return{type:b,group:e,parent:t,options:n}}function $(e){return{type:h,layerId:e}}function z(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function K(e){return{type:_,layers:e}}function Q(e,t){return{type:S,layers:e,error:t}}function J(e,t,n,r){return{type:O,dimension:e,value:t,options:n,layers:r}}function ee(e){return{type:A,layer:e}}function te(e){return{type:g,layer:e}}function ne(){return{type:w}}function re(e,t,n){return{type:P,id:e,nodeType:t,ctrlKey:n}}function oe(e){return{type:T,text:e}}function ce(e,t){return{type:k,metadataRecord:e,maskLoading:t}}function ue(){return{type:L}}function ie(e,t){return{type:D,newParams:e,update:t}}},45869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(67294),o=n.n(r),c=n(45697),u=n.n(c);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r,c,u=(r=i,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(c){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function i(){return a(this,i),u.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&l(t.prototype,n),i}(o().Component);y(d,"propTypes",{disabled:u().bool,className:u().string,checked:u().bool,onChange:u().func,onClick:u().func}),y(d,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const b=d},12346:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(67294),o=n.n(r),c=n(45697),u=n.n(c),i=n(80681),a=n(45869),l=n(80717),p=n(5346);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,r,c,u=(r=i,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(c){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function i(){return f(this,i),u.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this;return o().createElement(l.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},btnGroupProps:{style:{margin:10}},buttons:[{glyph:this.props.checked?"chevron-down":"chevron-left",visible:!0,tooltip:this.props.checked?o().createElement(p.Z,{msgId:"collapse"}):o().createElement(p.Z,{msgId:"expand"}),onClick:function(){return e.props.onClick(!e.props.checked)}}]})}}])&&y(t.prototype,n),i}(o().Component);E(m,"propTypes",{checked:u().bool,onClick:u().func}),E(m,"defaultProps",{checked:!1,onClick:function(){}});const R=m;var v=n(38560),O=n(82110);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){return o().createElement(v.Z,{className:"square-button-sm no-border switch-error"},o().createElement(i.Glyphicon,{glyph:"exclamation-mark",className:"text-danger"}))},D=function(){return o().createElement("div",{className:"switch-loading"},o().createElement(O.Z,{size:"small"}))},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(p,e);var t,n,r,c,u=(r=p,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(c){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function p(){var e;S(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return k(P(e=u.call.apply(u,[this].concat(n))),"state",{}),e}return t=p,(n=[{key:"renderHeader",value:function(){var e=this,t=this.props.useToolbar?R:a.Z;return o().createElement("div",null,o().createElement("div",{className:"pull-left"},this.props.title||this.props.header),o().createElement("div",{className:"pull-right"},this.props.locked?null:o().createElement(t,{checked:this.props.expanded,onClick:function(t){e.props.onSwitch(t)}}),this.props.error?o().createElement(L,null):null,this.props.loading?o().createElement(D,null):null,this.props.buttons.length>0&&this.props.expanded&&o().createElement(l.Z,{btnDefaultProps:{className:"square-button-sm no-border"},buttons:this.props.buttons})))}},{key:"render",value:function(){return o().createElement(i.Panel,{className:"mapstore-switch-panel",collapsible:!0,expanded:this.props.expanded,defaultExpanded:this.props.defaultExpanded,header:this.renderHeader()},this.props.children)}}])&&A(t.prototype,n),p}(o().Component);k(N,"propTypes",{header:u().node,title:u().oneOfType([u().string,u().node]),defaultExpanded:u().string,expanded:u().bool,onSwitch:u().func,locked:u().bool,buttons:u().array,loading:u().bool,error:u().any,errorMsgId:u().string,transitionProps:u().object,useToolbar:u().bool}),k(N,"defaultProps",{title:"",expanded:!1,onSwitch:function(){},locked:!1,buttons:[],useToolbar:!1});const C=N}}]);