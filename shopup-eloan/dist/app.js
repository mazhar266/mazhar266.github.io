/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,c){'use strict';function P(c){var h=[];C(h,E).chars(c);return h.join("")}var D=c.$$minErr("$sanitize"),F,h,G,H,I,q,E,J,K,C;c.module("ngSanitize",[]).provider("$sanitize",function(){function f(a,e){return B(a.split(","),e)}function B(a,e){var d={},b;for(b=0;b<a.length;b++)d[e?q(a[b]):a[b]]=!0;return d}function t(a,e){e&&e.length&&h(a,B(e))}function Q(a){for(var e={},d=0,b=a.length;d<b;d++){var k=a[d];e[k.name]=k.value}return e}function L(a){return a.replace(/&/g,"&amp;").replace(z,function(a){var d=
a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,d=0,b=e.length;d<b;d++){var k=e[d],g=k.name.toLowerCase();if("xmlns:ns1"===g||0===g.lastIndexOf("ns1:",0))a.removeAttributeNode(k),d--,b--}(e=a.firstChild)&&A(e);a=v("nextSibling",a)}}function v(a,e){var d=e[a];if(d&&J.call(e,d))throw D("elclob",
e.outerHTML||e.outerText);return d}var y=!1,g=!1;this.$get=["$$sanitizeUri",function(a){y=!0;g&&h(m,l);return function(e){var d=[];K(e,C(d,function(b,d){return!/^unsafe:/.test(a(b,d))}));return d.join("")}}];this.enableSvg=function(a){return I(a)?(g=a,this):g};this.addValidElements=function(a){y||(H(a)&&(a={htmlElements:a}),t(l,a.svgElements),t(r,a.htmlVoidElements),t(m,a.htmlVoidElements),t(m,a.htmlElements));return this};this.addValidAttrs=function(a){y||h(M,B(a,!0));return this};F=c.bind;h=c.extend;
G=c.forEach;H=c.isArray;I=c.isDefined;q=c.$$lowercase;E=c.noop;K=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);var d=N(a);if(!d)return"";var b=5;do{if(0===b)throw D("uinput");b--;a=d.innerHTML;d=N(a)}while(a!==d.innerHTML);for(b=d.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),Q(b.attributes));break;case 3:e.chars(b.textContent)}var k;if(!(k=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),k=v("nextSibling",b),!k))for(;null==k;){b=
v("parentNode",b);if(b===d)break;k=v("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=k}for(;b=d.firstChild;)d.removeChild(b)};C=function(a,e){var d=!1,b=F(a,a.push);return{start:function(a,g){a=q(a);!d&&w[a]&&(d=a);d||!0!==m[a]||(b("<"),b(a),G(g,function(d,g){var c=q(g),f="img"===a&&"src"===c||"background"===c;!0!==M[c]||!0===O[c]&&!e(d,f)||(b(" "),b(g),b('="'),b(L(d)),b('"'))}),b(">"))},end:function(a){a=q(a);d||!0!==m[a]||!0===r[a]||(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||
b(L(a))}}};J=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var z=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^#-~ |!])/g,r=f("area,br,col,hr,img,wbr"),x=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),p=f("rp,rt"),n=h({},p,x),x=h({},x,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),p=h({},p,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
l=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),w=f("script,style"),m=h({},r,x,p,n),O=f("background,cite,href,longdesc,src,xlink:href,xml:base"),n=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
p=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),M=h({},O,p,n),N=function(a,e){function d(b){b="<remove></remove>"+b;try{var d=(new a.DOMParser).parseFromString(b,"text/html").body;d.firstChild.remove();return d}catch(e){}}function b(a){c.innerHTML=a;e.documentMode&&A(c);return c}var g;if(e&&e.implementation)g=e.implementation.createHTMLDocument("inert");else throw D("noinert");var c=(g.documentElement||g.getDocumentElement()).querySelector("body");c.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';return c.querySelector("svg")?
(c.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',c.querySelector("svg img")?d:b):function(b){b="<remove></remove>"+b;try{b=encodeURI(b)}catch(d){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.7.8"});c.module("ngSanitize").filter("linky",["$sanitize",function(f){var h=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
t=/^mailto:/i,q=c.$$minErr("linky"),s=c.isDefined,A=c.isFunction,v=c.isObject,y=c.isString;return function(c,z,u){function r(c){c&&l.push(P(c))}function x(c,g){var f,a=p(c);l.push("<a ");for(f in a)l.push(f+'="'+a[f]+'" ');!s(z)||"target"in a||l.push('target="',z,'" ');l.push('href="',c.replace(/"/g,"&quot;"),'">');r(g);l.push("</a>")}if(null==c||""===c)return c;if(!y(c))throw q("notstring",c);for(var p=A(u)?u:v(u)?function(){return u}:function(){return{}},n=c,l=[],w,m;c=n.match(h);)w=c[0],c[2]||
c[4]||(w=(c[3]?"http://":"mailto:")+w),m=c.index,r(n.substr(0,m)),x(w,c[0].replace(t,"")),n=n.substring(m+c[0].length);r(n);return f(l.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

/**
 * @ngdoc overview
 * @name pascalprecht.translate
 *
 * @description
 * The main module which holds everything together.
 */
runTranslate.$inject = ['$translate'];
$translate.$inject = ['$STORAGE_KEY', '$windowProvider', '$translateSanitizationProvider', 'pascalprechtTranslateOverrider'];
$translateDefaultInterpolation.$inject = ['$interpolate', '$translateSanitization'];
translateDirective.$inject = ['$translate', '$interpolate', '$compile', '$parse', '$rootScope'];
translateAttrDirective.$inject = ['$translate', '$rootScope'];
translateCloakDirective.$inject = ['$translate', '$rootScope'];
translateFilterFactory.$inject = ['$parse', '$translate'];
$translationCache.$inject = ['$cacheFactory'];
angular.module('pascalprecht.translate', ['ng'])
  .run(runTranslate);

function runTranslate($translate) {

  'use strict';

  var key = $translate.storageKey(),
    storage = $translate.storage();

  var fallbackFromIncorrectStorageValue = function () {
    var preferred = $translate.preferredLanguage();
    if (angular.isString(preferred)) {
      $translate.use(preferred);
      // $translate.use() will also remember the language.
      // So, we don't need to call storage.put() here.
    } else {
      storage.put(key, $translate.use());
    }
  };

  fallbackFromIncorrectStorageValue.displayName = 'fallbackFromIncorrectStorageValue';

  if (storage) {
    if (!storage.get(key)) {
      fallbackFromIncorrectStorageValue();
    } else {
      $translate.use(storage.get(key))['catch'](fallbackFromIncorrectStorageValue);
    }
  } else if (angular.isString($translate.preferredLanguage())) {
    $translate.use($translate.preferredLanguage());
  }
}

runTranslate.displayName = 'runTranslate';

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateSanitizationProvider
 *
 * @description
 *
 * Configurations for $translateSanitization
 */
angular.module('pascalprecht.translate').provider('$translateSanitization', $translateSanitizationProvider);

function $translateSanitizationProvider () {

  'use strict';

  var $sanitize,
      $sce,
      currentStrategy = null, // TODO change to either 'sanitize', 'escape' or ['sanitize', 'escapeParameters'] in 3.0.
      hasConfiguredStrategy = false,
      hasShownNoStrategyConfiguredWarning = false,
      strategies;

  /**
   * Definition of a sanitization strategy function
   * @callback StrategyFunction
   * @param {string|object} value - value to be sanitized (either a string or an interpolated value map)
   * @param {string} mode - either 'text' for a string (translation) or 'params' for the interpolated params
   * @return {string|object}
   */

  /**
   * @ngdoc property
   * @name strategies
   * @propertyOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Following strategies are built-in:
   * <dl>
   *   <dt>sanitize</dt>
   *   <dd>Sanitizes HTML in the translation text using $sanitize</dd>
   *   <dt>escape</dt>
   *   <dd>Escapes HTML in the translation</dd>
   *   <dt>sanitizeParameters</dt>
   *   <dd>Sanitizes HTML in the values of the interpolation parameters using $sanitize</dd>
   *   <dt>escapeParameters</dt>
   *   <dd>Escapes HTML in the values of the interpolation parameters</dd>
   *   <dt>escaped</dt>
   *   <dd>Support legacy strategy name 'escaped' for backwards compatibility (will be removed in 3.0)</dd>
   * </dl>
   *
   */

  strategies = {
    sanitize: function (value, mode/*, context*/) {
      if (mode === 'text') {
        value = htmlSanitizeValue(value);
      }
      return value;
    },
    escape: function (value, mode/*, context*/) {
      if (mode === 'text') {
        value = htmlEscapeValue(value);
      }
      return value;
    },
    sanitizeParameters: function (value, mode/*, context*/) {
      if (mode === 'params') {
        value = mapInterpolationParameters(value, htmlSanitizeValue);
      }
      return value;
    },
    escapeParameters: function (value, mode/*, context*/) {
      if (mode === 'params') {
        value = mapInterpolationParameters(value, htmlEscapeValue);
      }
      return value;
    },
    sce: function (value, mode, context) {
      if (mode === 'text') {
        value = htmlTrustValue(value);
      } else if (mode === 'params') {
        if (context !== 'filter') {
          // do html escape in filter context #1101
          value = mapInterpolationParameters(value, htmlEscapeValue);
        }
      }
      return value;
    },
    sceParameters: function (value, mode/*, context*/) {
      if (mode === 'params') {
        value = mapInterpolationParameters(value, htmlTrustValue);
      }
      return value;
    }
  };
  // Support legacy strategy name 'escaped' for backwards compatibility.
  // TODO should be removed in 3.0
  strategies.escaped = strategies.escapeParameters;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#addStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Adds a sanitization strategy to the list of known strategies.
   *
   * @param {string} strategyName - unique key for a strategy
   * @param {StrategyFunction} strategyFunction - strategy function
   * @returns {object} this
   */
  this.addStrategy = function (strategyName, strategyFunction) {
    strategies[strategyName] = strategyFunction;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#removeStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Removes a sanitization strategy from the list of known strategies.
   *
   * @param {string} strategyName - unique key for a strategy
   * @returns {object} this
   */
  this.removeStrategy = function (strategyName) {
    delete strategies[strategyName];
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#useStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
   *
   * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
   * @returns {object} this
   */
  this.useStrategy = function (strategy) {
    hasConfiguredStrategy = true;
    currentStrategy = strategy;
    return this;
  };

  /**
   * @ngdoc object
   * @name pascalprecht.translate.$translateSanitization
   * @requires $injector
   * @requires $log
   *
   * @description
   * Sanitizes interpolation parameters and translated texts.
   *
   */
  this.$get = ['$injector', '$log', function ($injector, $log) {

    var cachedStrategyMap = {};

    var applyStrategies = function (value, mode, context, selectedStrategies) {
      angular.forEach(selectedStrategies, function (selectedStrategy) {
        if (angular.isFunction(selectedStrategy)) {
          value = selectedStrategy(value, mode, context);
        } else if (angular.isFunction(strategies[selectedStrategy])) {
          value = strategies[selectedStrategy](value, mode, context);
        } else if (angular.isString(strategies[selectedStrategy])) {
          if (!cachedStrategyMap[strategies[selectedStrategy]]) {
            try {
              cachedStrategyMap[strategies[selectedStrategy]] = $injector.get(strategies[selectedStrategy]);
            } catch (e) {
              cachedStrategyMap[strategies[selectedStrategy]] = function() {};
              throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
            }
          }
          value = cachedStrategyMap[strategies[selectedStrategy]](value, mode, context);
        } else {
          throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
        }
      });
      return value;
    };

    // TODO: should be removed in 3.0
    var showNoStrategyConfiguredWarning = function () {
      if (!hasConfiguredStrategy && !hasShownNoStrategyConfiguredWarning) {
        $log.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.');
        hasShownNoStrategyConfiguredWarning = true;
      }
    };

    if ($injector.has('$sanitize')) {
      $sanitize = $injector.get('$sanitize');
    }
    if ($injector.has('$sce')) {
      $sce = $injector.get('$sce');
    }

    return {
      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translateSanitization#useStrategy
       * @methodOf pascalprecht.translate.$translateSanitization
       *
       * @description
       * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
       *
       * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
       */
      useStrategy: (function (self) {
        return function (strategy) {
          self.useStrategy(strategy);
        };
      })(this),

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translateSanitization#sanitize
       * @methodOf pascalprecht.translate.$translateSanitization
       *
       * @description
       * Sanitizes a value.
       *
       * @param {string|object} value The value which should be sanitized.
       * @param {string} mode The current sanitization mode, either 'params' or 'text'.
       * @param {string|StrategyFunction|array} [strategy] Optional custom strategy which should be used instead of the currently selected strategy.
       * @param {string} [context] The context of this call: filter, service. Default is service
       * @returns {string|object} sanitized value
       */
      sanitize: function (value, mode, strategy, context) {
        if (!currentStrategy) {
          showNoStrategyConfiguredWarning();
        }

        if (!strategy && strategy !== null) {
          strategy = currentStrategy;
        }

        if (!strategy) {
          return value;
        }

        if (!context) {
          context = 'service';
        }

        var selectedStrategies = angular.isArray(strategy) ? strategy : [strategy];
        return applyStrategies(value, mode, context, selectedStrategies);
      }
    };
  }];

  var htmlEscapeValue = function (value) {
    var element = angular.element('<div></div>');
    element.text(value); // not chainable, see #1044
    return element.html();
  };

  var htmlSanitizeValue = function (value) {
    if (!$sanitize) {
      throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
    }
    return $sanitize(value);
  };

  var htmlTrustValue = function (value) {
    if (!$sce) {
      throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sce service.');
    }
    return $sce.trustAsHtml(value);
  };

  var mapInterpolationParameters = function (value, iteratee, stack) {
    if (angular.isDate(value)) {
      return value;
    } else if (angular.isObject(value)) {
      var result = angular.isArray(value) ? [] : {};

      if (!stack) {
        stack = [];
      } else {
        if (stack.indexOf(value) > -1) {
          throw new Error('pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object');
        }
      }

      stack.push(value);
      angular.forEach(value, function (propertyValue, propertyKey) {

        /* Skipping function properties. */
        if (angular.isFunction(propertyValue)) {
          return;
        }

        result[propertyKey] = mapInterpolationParameters(propertyValue, iteratee, stack);
      });
      stack.splice(-1, 1); // remove last

      return result;
    } else if (angular.isNumber(value)) {
      return value;
    } else if (value === true || value === false) {
      return value;
    } else if (!angular.isUndefined(value) && value !== null) {
      return iteratee(value);
    } else {
      return value;
    }
  };
}

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateProvider
 * @description
 *
 * $translateProvider allows developers to register translation-tables, asynchronous loaders
 * and similar to configure translation behavior directly inside of a module.
 *
 */
angular.module('pascalprecht.translate')
  .constant('pascalprechtTranslateOverrider', {})
  .provider('$translate', $translate);

function $translate($STORAGE_KEY, $windowProvider, $translateSanitizationProvider, pascalprechtTranslateOverrider) {

  'use strict';

  var $translationTable = {},
    $preferredLanguage,
    $availableLanguageKeys = [],
    $languageKeyAliases,
    $fallbackLanguage,
    $fallbackWasString,
    $uses,
    $nextLang,
    $storageFactory,
    $storageKey = $STORAGE_KEY,
    $storagePrefix,
    $missingTranslationHandlerFactory,
    $interpolationFactory,
    $interpolatorFactories = [],
    $loaderFactory,
    $cloakClassName = 'translate-cloak',
    $loaderOptions,
    $notFoundIndicatorLeft,
    $notFoundIndicatorRight,
    $postCompilingEnabled = false,
    $forceAsyncReloadEnabled = false,
    $nestedObjectDelimeter = '.',
    $isReady = false,
    $keepContent = false,
    loaderCache,
    directivePriority = 0,
    statefulFilter = true,
    postProcessFn,
    uniformLanguageTagResolver = 'default',
    languageTagResolver = {
      'default' : function (tag) {
        return (tag || '').split('-').join('_');
      },
      java : function (tag) {
        var temp = (tag || '').split('-').join('_');
        var parts = temp.split('_');
        return parts.length > 1 ? (parts[0].toLowerCase() + '_' + parts[1].toUpperCase()) : temp;
      },
      bcp47 : function (tag) {
        var temp = (tag || '').split('_').join('-');
        var parts = temp.split('-');

        switch (parts.length) {
          case 1: // language only
            parts[0] = parts[0].toLowerCase();
            break;
          case 2: // language-script or language-region
            parts[0] = parts[0].toLowerCase();
            if (parts[1].length === 4) { // parts[1] is script
              parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
            } else { // parts[1] is region
              parts[1] = parts[1].toUpperCase();
            }
            break;
          case 3: // language-script-region
            parts[0] = parts[0].toLowerCase();
            parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase();
            parts[2] = parts[2].toUpperCase();
            break;
          default:
            return temp;
        }

        return parts.join('-');
      },
      'iso639-1' : function (tag) {
        var temp = (tag || '').split('_').join('-');
        var parts = temp.split('-');
        return parts[0].toLowerCase();
      }
    };

  var version = '2.18.1';

  // tries to determine the browsers language
  var getFirstBrowserLanguage = function () {

    // internal purpose only
    if (angular.isFunction(pascalprechtTranslateOverrider.getLocale)) {
      return pascalprechtTranslateOverrider.getLocale();
    }

    var nav = $windowProvider.$get().navigator,
      browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
      i,
      language;

    // support for HTML 5.1 "navigator.languages"
    if (angular.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = nav[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  };
  getFirstBrowserLanguage.displayName = 'angular-translate/service: getFirstBrowserLanguage';

  // tries to determine the browsers locale
  var getLocale = function () {
    var locale = getFirstBrowserLanguage() || '';
    if (languageTagResolver[uniformLanguageTagResolver]) {
      locale = languageTagResolver[uniformLanguageTagResolver](locale);
    }
    return locale;
  };
  getLocale.displayName = 'angular-translate/service: getLocale';

  /**
   * @name indexOf
   * @private
   *
   * @description
   * indexOf polyfill. Kinda sorta.
   *
   * @param {array} array Array to search in.
   * @param {string} searchElement Element to search for.
   *
   * @returns {int} Index of search element.
   */
  var indexOf = function (array, searchElement) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };

  /**
   * @name trim
   * @private
   *
   * @description
   * trim polyfill
   *
   * @returns {string} The string stripped of whitespace from both ends
   */
  var trim = function () {
    return this.toString().replace(/^\s+|\s+$/g, '');
  };

  /**
   * @name lowercase
   * @private
   *
   * @description
   * Return the lowercase string only if the type is string
   *
   * @returns {string} The string all in lowercase
   */
  var lowercase = function (string) {
    return angular.isString(string) ? string.toLowerCase() : string;
  };

  var negotiateLocale = function (preferred) {
    if (!preferred) {
      return;
    }

    var avail = [],
      locale = lowercase(preferred),
      i = 0,
      n = $availableLanguageKeys.length;

    for (; i < n; i++) {
      avail.push(lowercase($availableLanguageKeys[i]));
    }

    // Check for an exact match in our list of available keys
    i = indexOf(avail, locale);
    if (i > -1) {
      return $availableLanguageKeys[i];
    }

    if ($languageKeyAliases) {
      var alias;
      for (var langKeyAlias in $languageKeyAliases) {
        if ($languageKeyAliases.hasOwnProperty(langKeyAlias)) {
          var hasWildcardKey = false;
          var hasExactKey = Object.prototype.hasOwnProperty.call($languageKeyAliases, langKeyAlias) &&
            lowercase(langKeyAlias) === lowercase(preferred);

          if (langKeyAlias.slice(-1) === '*') {
            hasWildcardKey = lowercase(langKeyAlias.slice(0, -1)) === lowercase(preferred.slice(0, langKeyAlias.length - 1));
          }
          if (hasExactKey || hasWildcardKey) {
            alias = $languageKeyAliases[langKeyAlias];
            if (indexOf(avail, lowercase(alias)) > -1) {
              return alias;
            }
          }
        }
      }
    }

    // Check for a language code without region
    var parts = preferred.split('_');

    if (parts.length > 1 && indexOf(avail, lowercase(parts[0])) > -1) {
      return parts[0];
    }

    // If everything fails, return undefined.
    return;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#translations
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a new translation table for specific language key.
   *
   * To register a translation table for specific language, pass a defined language
   * key as first parameter.
   *
   * <pre>
   *  // register translation table for language: 'de_DE'
   *  $translateProvider.translations('de_DE', {
   *    'GREETING': 'Hallo Welt!'
   *  });
   *
   *  // register another one
   *  $translateProvider.translations('en_US', {
   *    'GREETING': 'Hello world!'
   *  });
   * </pre>
   *
   * When registering multiple translation tables for for the same language key,
   * the actual translation table gets extended. This allows you to define module
   * specific translation which only get added, once a specific module is loaded in
   * your app.
   *
   * Invoking this method with no arguments returns the translation table which was
   * registered with no language key. Invoking it with a language key returns the
   * related translation table.
   *
   * @param {string} langKey A language key.
   * @param {object} translationTable A plain old JavaScript object that represents a translation table.
   *
   */
  var translations = function (langKey, translationTable) {

    if (!langKey && !translationTable) {
      return $translationTable;
    }

    if (langKey && !translationTable) {
      if (angular.isString(langKey)) {
        return $translationTable[langKey];
      }
    } else {
      if (!angular.isObject($translationTable[langKey])) {
        $translationTable[langKey] = {};
      }
      angular.extend($translationTable[langKey], flatObject(translationTable));
    }
    return this;
  };

  this.translations = translations;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#cloakClassName
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   *
   * Let's you change the class name for `translate-cloak` directive.
   * Default class name is `translate-cloak`.
   *
   * @param {string} name translate-cloak class name
   */
  this.cloakClassName = function (name) {
    if (!name) {
      return $cloakClassName;
    }
    $cloakClassName = name;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#nestedObjectDelimeter
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   *
   * Let's you change the delimiter for namespaced translations.
   * Default delimiter is `.`.
   *
   * @param {string} delimiter namespace separator
   */
  this.nestedObjectDelimeter = function (delimiter) {
    if (!delimiter) {
      return $nestedObjectDelimeter;
    }
    $nestedObjectDelimeter = delimiter;
    return this;
  };

  /**
   * @name flatObject
   * @private
   *
   * @description
   * Flats an object. This function is used to flatten given translation data with
   * namespaces, so they are later accessible via dot notation.
   */
  var flatObject = function (data, path, result, prevKey) {
    var key, keyWithPath, keyWithShortPath, val;

    if (!path) {
      path = [];
    }
    if (!result) {
      result = {};
    }
    for (key in data) {
      if (!Object.prototype.hasOwnProperty.call(data, key)) {
        continue;
      }
      val = data[key];
      if (angular.isObject(val)) {
        flatObject(val, path.concat(key), result, key);
      } else {
        keyWithPath = path.length ? ('' + path.join($nestedObjectDelimeter) + $nestedObjectDelimeter + key) : key;
        if (path.length && key === prevKey) {
          // Create shortcut path (foo.bar == foo.bar.bar)
          keyWithShortPath = '' + path.join($nestedObjectDelimeter);
          // Link it to original path
          result[keyWithShortPath] = '@:' + keyWithPath;
        }
        result[keyWithPath] = val;
      }
    }
    return result;
  };
  flatObject.displayName = 'flatObject';

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#addInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Adds interpolation services to angular-translate, so it can manage them.
   *
   * @param {object} factory Interpolation service factory
   */
  this.addInterpolation = function (factory) {
    $interpolatorFactories.push(factory);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMessageFormatInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use interpolation functionality of messageformat.js.
   * This is useful when having high level pluralization and gender selection.
   */
  this.useMessageFormatInterpolation = function () {
    return this.useInterpolation('$translateMessageFormatInterpolation');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate which interpolation style to use as default, application-wide.
   * Simply pass a factory/service name. The interpolation service has to implement
   * the correct interface.
   *
   * @param {string} factory Interpolation service name.
   */
  this.useInterpolation = function (factory) {
    $interpolationFactory = factory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useSanitizeStrategy
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Simply sets a sanitation strategy type.
   *
   * @param {string} value Strategy type.
   */
  this.useSanitizeValueStrategy = function (value) {
    $translateSanitizationProvider.useStrategy(value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#preferredLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which of the registered translation tables to use for translation
   * at initial startup by passing a language key. Similar to `$translateProvider#use`
   * only that it says which language to **prefer**.
   * It is recommended to call this after {@link pascalprecht.translate.$translate#fallbackLanguage fallbackLanguage()}.
   *
   * @param {string} langKey A language key.
   */
  this.preferredLanguage = function (langKey) {
    if (langKey) {
      setupPreferredLanguage(langKey);
      return this;
    }
    return $preferredLanguage;
  };
  var setupPreferredLanguage = function (langKey) {
    if (langKey) {
      $preferredLanguage = langKey;
    }
    return $preferredLanguage;
  };
  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicator
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found. E.g. when
   * setting the indicator as 'X' and one tries to translate a translation id
   * called `NOT_FOUND`, this will result in `X NOT_FOUND X`.
   *
   * Internally this methods sets a left indicator and a right indicator using
   * `$translateProvider.translationNotFoundIndicatorLeft()` and
   * `$translateProvider.translationNotFoundIndicatorRight()`.
   *
   * **Note**: These methods automatically add a whitespace between the indicators
   * and the translation id.
   *
   * @param {string} indicator An indicator, could be any string.
   */
  this.translationNotFoundIndicator = function (indicator) {
    this.translationNotFoundIndicatorLeft(indicator);
    this.translationNotFoundIndicatorRight(indicator);
    return this;
  };

  /**
   * ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found left to the
   * translation id.
   *
   * @param {string} indicator An indicator.
   */
  this.translationNotFoundIndicatorLeft = function (indicator) {
    if (!indicator) {
      return $notFoundIndicatorLeft;
    }
    $notFoundIndicatorLeft = indicator;
    return this;
  };

  /**
   * ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found right to the
   * translation id.
   *
   * @param {string} indicator An indicator.
   */
  this.translationNotFoundIndicatorRight = function (indicator) {
    if (!indicator) {
      return $notFoundIndicatorRight;
    }
    $notFoundIndicatorRight = indicator;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#fallbackLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which of the registered translation tables to use when missing translations
   * at initial startup by passing a language key. Similar to `$translateProvider#use`
   * only that it says which language to **fallback**.
   *
   * @param {string||array} langKey A language key.
   *
   */
  this.fallbackLanguage = function (langKey) {
    fallbackStack(langKey);
    return this;
  };

  var fallbackStack = function (langKey) {
    if (langKey) {
      if (angular.isString(langKey)) {
        $fallbackWasString = true;
        $fallbackLanguage = [langKey];
      } else if (angular.isArray(langKey)) {
        $fallbackWasString = false;
        $fallbackLanguage = langKey;
      }
      if (angular.isString($preferredLanguage) && indexOf($fallbackLanguage, $preferredLanguage) < 0) {
        $fallbackLanguage.push($preferredLanguage);
      }

      return this;
    } else {
      if ($fallbackWasString) {
        return $fallbackLanguage[0];
      } else {
        return $fallbackLanguage;
      }
    }
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#use
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Set which translation table to use for translation by given language key. When
   * trying to 'use' a language which isn't provided, it'll throw an error.
   *
   * You actually don't have to use this method since `$translateProvider#preferredLanguage`
   * does the job too.
   *
   * @param {string} langKey A language key.
   */
  this.use = function (langKey) {
    if (langKey) {
      if (!$translationTable[langKey] && (!$loaderFactory)) {
        // only throw an error, when not loading translation data asynchronously
        throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + langKey + '\'');
      }
      $uses = langKey;
      return this;
    }
    return $uses;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#resolveClientLocale
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
   *
   * @returns {string} the current client/browser language key
   */
  this.resolveClientLocale = function () {
    return getLocale();
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#storageKey
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which key must represent the choosed language by a user in the storage.
   *
   * @param {string} key A key for the storage.
   */
  var storageKey = function (key) {
    if (!key) {
      if ($storagePrefix) {
        return $storagePrefix + $storageKey;
      }
      return $storageKey;
    }
    $storageKey = key;
    return this;
  };

  this.storageKey = storageKey;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useUrlLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateUrlLoader` extension service as loader.
   *
   * @param {string} url Url
   * @param {Object=} options Optional configuration object
   */
  this.useUrlLoader = function (url, options) {
    return this.useLoader('$translateUrlLoader', angular.extend({url : url}, options));
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useStaticFilesLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateStaticFilesLoader` extension service as loader.
   *
   * @param {Object=} options Optional configuration object
   */
  this.useStaticFilesLoader = function (options) {
    return this.useLoader('$translateStaticFilesLoader', options);
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use any other service as loader.
   *
   * @param {string} loaderFactory Factory name to use
   * @param {Object=} options Optional configuration object
   */
  this.useLoader = function (loaderFactory, options) {
    $loaderFactory = loaderFactory;
    $loaderOptions = options || {};
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLocalStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateLocalStorage` service as storage layer.
   *
   */
  this.useLocalStorage = function () {
    return this.useStorage('$translateLocalStorage');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useCookieStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateCookieStorage` service as storage layer.
   */
  this.useCookieStorage = function () {
    return this.useStorage('$translateCookieStorage');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use custom service as storage layer.
   */
  this.useStorage = function (storageFactory) {
    $storageFactory = storageFactory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#storagePrefix
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets prefix for storage key.
   *
   * @param {string} prefix Storage key prefix
   */
  this.storagePrefix = function (prefix) {
    if (!prefix) {
      return prefix;
    }
    $storagePrefix = prefix;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandlerLog
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use built-in log handler when trying to translate
   * a translation Id which doesn't exist.
   *
   * This is actually a shortcut method for `useMissingTranslationHandler()`.
   *
   */
  this.useMissingTranslationHandlerLog = function () {
    return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandler
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Expects a factory name which later gets instantiated with `$injector`.
   * This method can be used to tell angular-translate to use a custom
   * missingTranslationHandler. Just build a factory which returns a function
   * and expects a translation id as argument.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.useMissingTranslationHandler('customHandler');
   *  });
   *
   *  app.factory('customHandler', function (dep1, dep2) {
   *    return function (translationId) {
   *      // something with translationId and dep1 and dep2
   *    };
   *  });
   * </pre>
   *
   * @param {string} factory Factory name
   */
  this.useMissingTranslationHandler = function (factory) {
    $missingTranslationHandlerFactory = factory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#usePostCompiling
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * If post compiling is enabled, all translated values will be processed
   * again with AngularJS' $compile.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.usePostCompiling(true);
   *  });
   * </pre>
   *
   * @param {string} factory Factory name
   */
  this.usePostCompiling = function (value) {
    $postCompilingEnabled = !(!value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#forceAsyncReload
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * If force async reload is enabled, async loader will always be called
   * even if $translationTable already contains the language key, adding
   * possible new entries to the $translationTable.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.forceAsyncReload(true);
   *  });
   * </pre>
   *
   * @param {boolean} value - valid values are true or false
   */
  this.forceAsyncReload = function (value) {
    $forceAsyncReloadEnabled = !(!value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#uniformLanguageTag
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate which language tag should be used as a result when determining
   * the current browser language.
   *
   * This setting must be set before invoking {@link pascalprecht.translate.$translateProvider#methods_determinePreferredLanguage determinePreferredLanguage()}.
   *
   * <pre>
   * $translateProvider
   *   .uniformLanguageTag('bcp47')
   *   .determinePreferredLanguage()
   * </pre>
   *
   * The resolver currently supports:
   * * default
   *     (traditionally: hyphens will be converted into underscores, i.e. en-US => en_US)
   *     en-US => en_US
   *     en_US => en_US
   *     en-us => en_us
   * * java
   *     like default, but the second part will be always in uppercase
   *     en-US => en_US
   *     en_US => en_US
   *     en-us => en_US
   * * BCP 47 (RFC 4646 & 4647)
   *     EN => en
   *     en-US => en-US
   *     en_US => en-US
   *     en-us => en-US
   *     sr-latn => sr-Latn
   *     sr-latn-rs => sr-Latn-RS
   *
   * See also:
   * * http://en.wikipedia.org/wiki/IETF_language_tag
   * * http://www.w3.org/International/core/langtags/
   * * http://tools.ietf.org/html/bcp47
   *
   * @param {string|object} options - options (or standard)
   * @param {string} options.standard - valid values are 'default', 'bcp47', 'java'
   */
  this.uniformLanguageTag = function (options) {

    if (!options) {
      options = {};
    } else if (angular.isString(options)) {
      options = {
        standard : options
      };
    }

    uniformLanguageTagResolver = options.standard;

    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#determinePreferredLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to try to determine on its own which language key
   * to set as preferred language. When `fn` is given, angular-translate uses it
   * to determine a language key, otherwise it uses the built-in `getLocale()`
   * method.
   *
   * The `getLocale()` returns a language key in the format `[lang]_[country]` or
   * `[lang]` depending on what the browser provides.
   *
   * Use this method at your own risk, since not all browsers return a valid
   * locale (see {@link pascalprecht.translate.$translateProvider#methods_uniformLanguageTag uniformLanguageTag()}).
   *
   * @param {Function=} fn Function to determine a browser's locale
   */
  this.determinePreferredLanguage = function (fn) {

    var locale = (fn && angular.isFunction(fn)) ? fn() : getLocale();

    if (!$availableLanguageKeys.length) {
      $preferredLanguage = locale;
    } else {
      $preferredLanguage = negotiateLocale(locale) || locale;
    }

    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#registerAvailableLanguageKeys
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a set of language keys the app will work with. Use this method in
   * combination with
   * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
   * When available languages keys are registered, angular-translate
   * tries to find the best fitting language key depending on the browsers locale,
   * considering your language key convention.
   *
   * @param {object} languageKeys Array of language keys the your app will use
   * @param {object=} aliases Alias map.
   */
  this.registerAvailableLanguageKeys = function (languageKeys, aliases) {
    if (languageKeys) {
      $availableLanguageKeys = languageKeys;
      if (aliases) {
        $languageKeyAliases = aliases;
      }
      return this;
    }
    return $availableLanguageKeys;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLoaderCache
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a cache for internal $http based loaders.
   * {@link pascalprecht.translate.$translationCache $translationCache}.
   * When false the cache will be disabled (default). When true or undefined
   * the cache will be a default (see $cacheFactory). When an object it will
   * be treat as a cache object itself: the usage is $http({cache: cache})
   *
   * @param {object} cache boolean, string or cache-object
   */
  this.useLoaderCache = function (cache) {
    if (cache === false) {
      // disable cache
      loaderCache = undefined;
    } else if (cache === true) {
      // enable cache using AJS defaults
      loaderCache = true;
    } else if (typeof(cache) === 'undefined') {
      // enable cache using default
      loaderCache = '$translationCache';
    } else if (cache) {
      // enable cache using given one (see $cacheFactory)
      loaderCache = cache;
    }
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#directivePriority
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets the default priority of the translate directive. The standard value is `0`.
   * Calling this function without an argument will return the current value.
   *
   * @param {number} priority for the translate-directive
   */
  this.directivePriority = function (priority) {
    if (priority === undefined) {
      // getter
      return directivePriority;
    } else {
      // setter with chaining
      directivePriority = priority;
      return this;
    }
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#statefulFilter
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Since AngularJS 1.3, filters which are not stateless (depending at the scope)
   * have to explicit define this behavior.
   * Sets whether the translate filter should be stateful or stateless. The standard value is `true`
   * meaning being stateful.
   * Calling this function without an argument will return the current value.
   *
   * @param {boolean} state - defines the state of the filter
   */
  this.statefulFilter = function (state) {
    if (state === undefined) {
      // getter
      return statefulFilter;
    } else {
      // setter with chaining
      statefulFilter = state;
      return this;
    }
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#postProcess
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * The post processor will be intercept right after the translation result. It can modify the result.
   *
   * @param {object} fn Function or service name (string) to be called after the translation value has been set / resolved. The function itself will enrich every value being processed and then continue the normal resolver process
   */
  this.postProcess = function (fn) {
    if (fn) {
      postProcessFn = fn;
    } else {
      postProcessFn = undefined;
    }
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#keepContent
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * If keepContent is set to true than translate directive will always use innerHTML
   * as a default translation
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.keepContent(true);
   *  });
   * </pre>
   *
   * @param {boolean} value - valid values are true or false
   */
  this.keepContent = function (value) {
    $keepContent = !(!value);
    return this;
  };

  /**
   * @ngdoc object
   * @name pascalprecht.translate.$translate
   * @requires $interpolate
   * @requires $log
   * @requires $rootScope
   * @requires $q
   *
   * @description
   * The `$translate` service is the actual core of angular-translate. It expects a translation id
   * and optional interpolate parameters to translate contents.
   *
   * <pre>
   *  $translate('HEADLINE_TEXT').then(function (translation) {
   *    $scope.translatedText = translation;
   *  });
   * </pre>
   *
   * @param {string|array} translationId A token which represents a translation id
   *                                     This can be optionally an array of translation ids which
   *                                     results that the function returns an object where each key
   *                                     is the translation id and the value the translation.
   * @param {object=} [interpolateParams={}] An object hash for dynamic values
   * @param {string=} [interpolationId=undefined] The id of the interpolation to use (use default unless set via useInterpolation())
   * @param {string=} [defaultTranslationText=undefined] the optional default translation text that is written as
   *                                        as default text in case it is not found in any configured language
   * @param {string=} [forceLanguage=false] A language to be used instead of the current language
   * @param {string=} [sanitizeStrategy=undefined] force sanitize strategy for this call instead of using the configured one (use default unless set)
   * @returns {object} promise
   */
  this.$get = ['$log', '$injector', '$rootScope', '$q', function ($log, $injector, $rootScope, $q) {

    var Storage,
      defaultInterpolator = $injector.get($interpolationFactory || '$translateDefaultInterpolation'),
      pendingLoader = false,
      interpolatorHashMap = {},
      langPromises = {},
      fallbackIndex,
      startFallbackIteration;

    var $translate = function (translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage, sanitizeStrategy) {
      if (!$uses && $preferredLanguage) {
        $uses = $preferredLanguage;
      }
      var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
        (negotiateLocale(forceLanguage) || forceLanguage) : $uses;

      // Check forceLanguage is present
      if (forceLanguage) {
        loadTranslationsIfMissing(forceLanguage);
      }

      // Duck detection: If the first argument is an array, a bunch of translations was requested.
      // The result is an object.
      if (angular.isArray(translationId)) {
        // Inspired by Q.allSettled by Kris Kowal
        // https://github.com/kriskowal/q/blob/b0fa72980717dc202ffc3cbf03b936e10ebbb9d7/q.js#L1553-1563
        // This transforms all promises regardless resolved or rejected
        var translateAll = function (translationIds) {
          var results = {}; // storing the actual results
          var promises = []; // promises to wait for
          // Wraps the promise a) being always resolved and b) storing the link id->value
          var translate = function (translationId) {
            var deferred = $q.defer();
            var regardless = function (value) {
              results[translationId] = value;
              deferred.resolve([translationId, value]);
            };
            // we don't care whether the promise was resolved or rejected; just store the values
            $translate(translationId, interpolateParams, interpolationId, defaultTranslationText, forceLanguage, sanitizeStrategy).then(regardless, regardless);
            return deferred.promise;
          };
          for (var i = 0, c = translationIds.length; i < c; i++) {
            promises.push(translate(translationIds[i]));
          }
          // wait for all (including storing to results)
          return $q.all(promises).then(function () {
            // return the results
            return results;
          });
        };
        return translateAll(translationId);
      }

      var deferred = $q.defer();

      // trim off any whitespace
      if (translationId) {
        translationId = trim.apply(translationId);
      }

      var promiseToWaitFor = (function () {
        var promise = langPromises[uses] || langPromises[$preferredLanguage];

        fallbackIndex = 0;

        if ($storageFactory && !promise) {
          // looks like there's no pending promise for $preferredLanguage or
          // $uses. Maybe there's one pending for a language that comes from
          // storage.
          var langKey = Storage.get($storageKey);
          promise = langPromises[langKey];

          if ($fallbackLanguage && $fallbackLanguage.length) {
            var index = indexOf($fallbackLanguage, langKey);
            // maybe the language from storage is also defined as fallback language
            // we increase the fallback language index to not search in that language
            // as fallback, since it's probably the first used language
            // in that case the index starts after the first element
            fallbackIndex = (index === 0) ? 1 : 0;

            // but we can make sure to ALWAYS fallback to preferred language at least
            if (indexOf($fallbackLanguage, $preferredLanguage) < 0) {
              $fallbackLanguage.push($preferredLanguage);
            }
          }
        }
        return promise;
      }());

      if (!promiseToWaitFor) {
        // no promise to wait for? okay. Then there's no loader registered
        // nor is a one pending for language that comes from storage.
        // We can just translate.
        determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy).then(deferred.resolve, deferred.reject);
      } else {
        var promiseResolved = function () {
          // $uses may have changed while waiting
          if (!forceLanguage) {
            uses = $uses;
          }
          determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy).then(deferred.resolve, deferred.reject);
        };
        promiseResolved.displayName = 'promiseResolved';

        promiseToWaitFor['finally'](promiseResolved)['catch'](angular.noop); // we don't care about errors here, already handled
      }
      return deferred.promise;
    };

    /**
     * @name applyNotFoundIndicators
     * @private
     *
     * @description
     * Applies not fount indicators to given translation id, if needed.
     * This function gets only executed, if a translation id doesn't exist,
     * which is why a translation id is expected as argument.
     *
     * @param {string} translationId Translation id.
     * @returns {string} Same as given translation id but applied with not found
     * indicators.
     */
    var applyNotFoundIndicators = function (translationId) {
      // applying notFoundIndicators
      if ($notFoundIndicatorLeft) {
        translationId = [$notFoundIndicatorLeft, translationId].join(' ');
      }
      if ($notFoundIndicatorRight) {
        translationId = [translationId, $notFoundIndicatorRight].join(' ');
      }
      return translationId;
    };

    /**
     * @name useLanguage
     * @private
     *
     * @description
     * Makes actual use of a language by setting a given language key as used
     * language and informs registered interpolators to also use the given
     * key as locale.
     *
     * @param {string} key Locale key.
     */
    var useLanguage = function (key) {
      $uses = key;

      // make sure to store new language key before triggering success event
      if ($storageFactory) {
        Storage.put($translate.storageKey(), $uses);
      }

      $rootScope.$emit('$translateChangeSuccess', {language : key});

      // inform default interpolator
      defaultInterpolator.setLocale($uses);

      var eachInterpolator = function (interpolator, id) {
        interpolatorHashMap[id].setLocale($uses);
      };
      eachInterpolator.displayName = 'eachInterpolatorLocaleSetter';

      // inform all others too!
      angular.forEach(interpolatorHashMap, eachInterpolator);
      $rootScope.$emit('$translateChangeEnd', {language : key});
    };

    /**
     * @name loadAsync
     * @private
     *
     * @description
     * Kicks off registered async loader using `$injector` and applies existing
     * loader options. When resolved, it updates translation tables accordingly
     * or rejects with given language key.
     *
     * @param {string} key Language key.
     * @return {Promise} A promise.
     */
    var loadAsync = function (key) {
      if (!key) {
        throw 'No language key specified for loading.';
      }

      var deferred = $q.defer();

      $rootScope.$emit('$translateLoadingStart', {language : key});
      pendingLoader = true;

      var cache = loaderCache;
      if (typeof(cache) === 'string') {
        // getting on-demand instance of loader
        cache = $injector.get(cache);
      }

      var loaderOptions = angular.extend({}, $loaderOptions, {
        key : key,
        $http : angular.extend({}, {
          cache : cache
        }, $loaderOptions.$http)
      });

      var onLoaderSuccess = function (data) {
        var translationTable = {};
        $rootScope.$emit('$translateLoadingSuccess', {language : key});

        if (angular.isArray(data)) {
          angular.forEach(data, function (table) {
            angular.extend(translationTable, flatObject(table));
          });
        } else {
          angular.extend(translationTable, flatObject(data));
        }
        pendingLoader = false;
        deferred.resolve({
          key : key,
          table : translationTable
        });
        $rootScope.$emit('$translateLoadingEnd', {language : key});
      };
      onLoaderSuccess.displayName = 'onLoaderSuccess';

      var onLoaderError = function (key) {
        $rootScope.$emit('$translateLoadingError', {language : key});
        deferred.reject(key);
        $rootScope.$emit('$translateLoadingEnd', {language : key});
      };
      onLoaderError.displayName = 'onLoaderError';

      $injector.get($loaderFactory)(loaderOptions)
        .then(onLoaderSuccess, onLoaderError);

      return deferred.promise;
    };

    if ($storageFactory) {
      Storage = $injector.get($storageFactory);

      if (!Storage.get || !Storage.put) {
        throw new Error('Couldn\'t use storage \'' + $storageFactory + '\', missing get() or put() method!');
      }
    }

    // if we have additional interpolations that were added via
    // $translateProvider.addInterpolation(), we have to map'em
    if ($interpolatorFactories.length) {
      var eachInterpolationFactory = function (interpolatorFactory) {
        var interpolator = $injector.get(interpolatorFactory);
        // setting initial locale for each interpolation service
        interpolator.setLocale($preferredLanguage || $uses);
        // make'em recognizable through id
        interpolatorHashMap[interpolator.getInterpolationIdentifier()] = interpolator;
      };
      eachInterpolationFactory.displayName = 'interpolationFactoryAdder';

      angular.forEach($interpolatorFactories, eachInterpolationFactory);
    }

    /**
     * @name getTranslationTable
     * @private
     *
     * @description
     * Returns a promise that resolves to the translation table
     * or is rejected if an error occurred.
     *
     * @param langKey
     * @returns {Q.promise}
     */
    var getTranslationTable = function (langKey) {
      var deferred = $q.defer();
      if (Object.prototype.hasOwnProperty.call($translationTable, langKey)) {
        deferred.resolve($translationTable[langKey]);
      } else if (langPromises[langKey]) {
        var onResolve = function (data) {
          translations(data.key, data.table);
          deferred.resolve(data.table);
        };
        onResolve.displayName = 'translationTableResolver';
        langPromises[langKey].then(onResolve, deferred.reject);
      } else {
        deferred.reject();
      }
      return deferred.promise;
    };

    /**
     * @name getFallbackTranslation
     * @private
     *
     * @description
     * Returns a promise that will resolve to the translation
     * or be rejected if no translation was found for the language.
     * This function is currently only used for fallback language translation.
     *
     * @param langKey The language to translate to.
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param sanitizeStrategy
     * @returns {Q.promise}
     */
    var getFallbackTranslation = function (langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
      var deferred = $q.defer();

      var onResolve = function (translationTable) {
        if (Object.prototype.hasOwnProperty.call(translationTable, translationId) && translationTable[translationId] !== null) {
          Interpolator.setLocale(langKey);
          var translation = translationTable[translationId];
          if (translation.substr(0, 2) === '@:') {
            getFallbackTranslation(langKey, translation.substr(2), interpolateParams, Interpolator, sanitizeStrategy)
              .then(deferred.resolve, deferred.reject);
          } else {
            var interpolatedValue = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'service', sanitizeStrategy, translationId);
            interpolatedValue = applyPostProcessing(translationId, translationTable[translationId], interpolatedValue, interpolateParams, langKey);

            deferred.resolve(interpolatedValue);

          }
          Interpolator.setLocale($uses);
        } else {
          deferred.reject();
        }
      };
      onResolve.displayName = 'fallbackTranslationResolver';

      getTranslationTable(langKey).then(onResolve, deferred.reject);

      return deferred.promise;
    };

    /**
     * @name getFallbackTranslationInstant
     * @private
     *
     * @description
     * Returns a translation
     * This function is currently only used for fallback language translation.
     *
     * @param langKey The language to translate to.
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param sanitizeStrategy sanitize strategy override
     *
     * @returns {string} translation
     */
    var getFallbackTranslationInstant = function (langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
      var result, translationTable = $translationTable[langKey];

      if (translationTable && Object.prototype.hasOwnProperty.call(translationTable, translationId) && translationTable[translationId] !== null) {
        Interpolator.setLocale(langKey);
        result = Interpolator.interpolate(translationTable[translationId], interpolateParams, 'filter', sanitizeStrategy, translationId);
        result = applyPostProcessing(translationId, translationTable[translationId], result, interpolateParams, langKey, sanitizeStrategy);
        // workaround for TrustedValueHolderType
        if (!angular.isString(result) && angular.isFunction(result.$$unwrapTrustedValue)) {
          var result2 = result.$$unwrapTrustedValue();
          if (result2.substr(0, 2) === '@:') {
            return getFallbackTranslationInstant(langKey, result2.substr(2), interpolateParams, Interpolator, sanitizeStrategy);
          }
        } else if (result.substr(0, 2) === '@:') {
          return getFallbackTranslationInstant(langKey, result.substr(2), interpolateParams, Interpolator, sanitizeStrategy);
        }
        Interpolator.setLocale($uses);
      }

      return result;
    };


    /**
     * @name translateByHandler
     * @private
     *
     * Translate by missing translation handler.
     *
     * @param translationId
     * @param interpolateParams
     * @param defaultTranslationText
     * @param sanitizeStrategy sanitize strategy override
     *
     * @returns translation created by $missingTranslationHandler or translationId is $missingTranslationHandler is
     * absent
     */
    var translateByHandler = function (translationId, interpolateParams, defaultTranslationText, sanitizeStrategy) {
      // If we have a handler factory - we might also call it here to determine if it provides
      // a default text for a translationid that can't be found anywhere in our tables
      if ($missingTranslationHandlerFactory) {
        return $injector.get($missingTranslationHandlerFactory)(translationId, $uses, interpolateParams, defaultTranslationText, sanitizeStrategy);
      } else {
        return translationId;
      }
    };

    /**
     * @name resolveForFallbackLanguage
     * @private
     *
     * Recursive helper function for fallbackTranslation that will sequentially look
     * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
     *
     * @param fallbackLanguageIndex
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param defaultTranslationText
     * @param sanitizeStrategy
     * @returns {Q.promise} Promise that will resolve to the translation.
     */
    var resolveForFallbackLanguage = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy) {
      var deferred = $q.defer();

      if (fallbackLanguageIndex < $fallbackLanguage.length) {
        var langKey = $fallbackLanguage[fallbackLanguageIndex];
        getFallbackTranslation(langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy).then(
          function (data) {
            deferred.resolve(data);
          },
          function () {
            // Look in the next fallback language for a translation.
            // It delays the resolving by passing another promise to resolve.
            return resolveForFallbackLanguage(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy).then(deferred.resolve, deferred.reject);
          }
        );
      } else {
        // No translation found in any fallback language
        // if a default translation text is set in the directive, then return this as a result
        if (defaultTranslationText) {
          deferred.resolve(defaultTranslationText);
        } else {
          var missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, defaultTranslationText);

          // if no default translation is set and an error handler is defined, send it to the handler
          // and then return the result if it isn't undefined
          if ($missingTranslationHandlerFactory && missingTranslationHandlerTranslation) {
            deferred.resolve(missingTranslationHandlerTranslation);
          } else {
            deferred.reject(applyNotFoundIndicators(translationId));
          }
        }
      }
      return deferred.promise;
    };

    /**
     * @name resolveForFallbackLanguageInstant
     * @private
     *
     * Recursive helper function for fallbackTranslation that will sequentially look
     * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
     *
     * @param fallbackLanguageIndex
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param sanitizeStrategy
     * @returns {string} translation
     */
    var resolveForFallbackLanguageInstant = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, sanitizeStrategy) {
      var result;

      if (fallbackLanguageIndex < $fallbackLanguage.length) {
        var langKey = $fallbackLanguage[fallbackLanguageIndex];
        result = getFallbackTranslationInstant(langKey, translationId, interpolateParams, Interpolator, sanitizeStrategy);
        if (!result && result !== '') {
          result = resolveForFallbackLanguageInstant(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator);
        }
      }
      return result;
    };

    /**
     * Translates with the usage of the fallback languages.
     *
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param defaultTranslationText
     * @param sanitizeStrategy
     * @returns {Q.promise} Promise, that resolves to the translation.
     */
    var fallbackTranslation = function (translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy) {
      // Start with the fallbackLanguage with index 0
      return resolveForFallbackLanguage((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy);
    };

    /**
     * Translates with the usage of the fallback languages.
     *
     * @param translationId
     * @param interpolateParams
     * @param Interpolator
     * @param sanitizeStrategy
     * @returns {String} translation
     */
    var fallbackTranslationInstant = function (translationId, interpolateParams, Interpolator, sanitizeStrategy) {
      // Start with the fallbackLanguage with index 0
      return resolveForFallbackLanguageInstant((startFallbackIteration > 0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, sanitizeStrategy);
    };

    var determineTranslation = function (translationId, interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy) {

      var deferred = $q.defer();

      var table = uses ? $translationTable[uses] : $translationTable,
        Interpolator = (interpolationId) ? interpolatorHashMap[interpolationId] : defaultInterpolator;

      // if the translation id exists, we can just interpolate it
      if (table && Object.prototype.hasOwnProperty.call(table, translationId) && table[translationId] !== null) {
        var translation = table[translationId];

        // If using link, rerun $translate with linked translationId and return it
        if (translation.substr(0, 2) === '@:') {

          $translate(translation.substr(2), interpolateParams, interpolationId, defaultTranslationText, uses, sanitizeStrategy)
            .then(deferred.resolve, deferred.reject);
        } else {
          //
          var resolvedTranslation = Interpolator.interpolate(translation, interpolateParams, 'service', sanitizeStrategy, translationId);
          resolvedTranslation = applyPostProcessing(translationId, translation, resolvedTranslation, interpolateParams, uses);
          deferred.resolve(resolvedTranslation);
        }
      } else {
        var missingTranslationHandlerTranslation;
        // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
        if ($missingTranslationHandlerFactory && !pendingLoader) {
          missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, defaultTranslationText);
        }

        // since we couldn't translate the inital requested translation id,
        // we try it now with one or more fallback languages, if fallback language(s) is
        // configured.
        if (uses && $fallbackLanguage && $fallbackLanguage.length) {
          fallbackTranslation(translationId, interpolateParams, Interpolator, defaultTranslationText, sanitizeStrategy)
            .then(function (translation) {
              deferred.resolve(translation);
            }, function (_translationId) {
              deferred.reject(applyNotFoundIndicators(_translationId));
            });
        } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
          // looks like the requested translation id doesn't exists.
          // Now, if there is a registered handler for missing translations and no
          // asyncLoader is pending, we execute the handler
          if (defaultTranslationText) {
            deferred.resolve(defaultTranslationText);
          } else {
            deferred.resolve(missingTranslationHandlerTranslation);
          }
        } else {
          if (defaultTranslationText) {
            deferred.resolve(defaultTranslationText);
          } else {
            deferred.reject(applyNotFoundIndicators(translationId));
          }
        }
      }
      return deferred.promise;
    };

    var determineTranslationInstant = function (translationId, interpolateParams, interpolationId, uses, sanitizeStrategy) {

      var result, table = uses ? $translationTable[uses] : $translationTable,
        Interpolator = defaultInterpolator;

      // if the interpolation id exists use custom interpolator
      if (interpolatorHashMap && Object.prototype.hasOwnProperty.call(interpolatorHashMap, interpolationId)) {
        Interpolator = interpolatorHashMap[interpolationId];
      }

      // if the translation id exists, we can just interpolate it
      if (table && Object.prototype.hasOwnProperty.call(table, translationId) && table[translationId] !== null) {
        var translation = table[translationId];

        // If using link, rerun $translate with linked translationId and return it
        if (translation.substr(0, 2) === '@:') {
          result = determineTranslationInstant(translation.substr(2), interpolateParams, interpolationId, uses, sanitizeStrategy);
        } else {
          result = Interpolator.interpolate(translation, interpolateParams, 'filter', sanitizeStrategy, translationId);
          result = applyPostProcessing(translationId, translation, result, interpolateParams, uses, sanitizeStrategy);
        }
      } else {
        var missingTranslationHandlerTranslation;
        // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
        if ($missingTranslationHandlerFactory && !pendingLoader) {
          missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, sanitizeStrategy);
        }

        // since we couldn't translate the inital requested translation id,
        // we try it now with one or more fallback languages, if fallback language(s) is
        // configured.
        if (uses && $fallbackLanguage && $fallbackLanguage.length) {
          fallbackIndex = 0;
          result = fallbackTranslationInstant(translationId, interpolateParams, Interpolator, sanitizeStrategy);
        } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
          // looks like the requested translation id doesn't exists.
          // Now, if there is a registered handler for missing translations and no
          // asyncLoader is pending, we execute the handler
          result = missingTranslationHandlerTranslation;
        } else {
          result = applyNotFoundIndicators(translationId);
        }
      }

      return result;
    };

    var clearNextLangAndPromise = function (key) {
      if ($nextLang === key) {
        $nextLang = undefined;
      }
      langPromises[key] = undefined;
    };

    var applyPostProcessing = function (translationId, translation, resolvedTranslation, interpolateParams, uses, sanitizeStrategy) {
      var fn = postProcessFn;

      if (fn) {

        if (typeof(fn) === 'string') {
          // getting on-demand instance
          fn = $injector.get(fn);
        }
        if (fn) {
          return fn(translationId, translation, resolvedTranslation, interpolateParams, uses, sanitizeStrategy);
        }
      }

      return resolvedTranslation;
    };

    var loadTranslationsIfMissing = function (key) {
      if (!$translationTable[key] && $loaderFactory && !langPromises[key]) {
        langPromises[key] = loadAsync(key).then(function (translation) {
          translations(translation.key, translation.table);
          return translation;
        });
      }
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#preferredLanguage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the language key for the preferred language.
     *
     * @param {string} langKey language String or Array to be used as preferredLanguage (changing at runtime)
     *
     * @return {string} preferred language key
     */
    $translate.preferredLanguage = function (langKey) {
      if (langKey) {
        setupPreferredLanguage(langKey);
      }
      return $preferredLanguage;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#cloakClassName
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the configured class name for `translate-cloak` directive.
     *
     * @return {string} cloakClassName
     */
    $translate.cloakClassName = function () {
      return $cloakClassName;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#nestedObjectDelimeter
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the configured delimiter for nested namespaces.
     *
     * @return {string} nestedObjectDelimeter
     */
    $translate.nestedObjectDelimeter = function () {
      return $nestedObjectDelimeter;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#fallbackLanguage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the language key for the fallback languages or sets a new fallback stack.
     * It is recommended to call this before {@link pascalprecht.translate.$translateProvider#preferredLanguage preferredLanguage()}.
     *
     * @param {string=} langKey language String or Array of fallback languages to be used (to change stack at runtime)
     *
     * @return {string||array} fallback language key
     */
    $translate.fallbackLanguage = function (langKey) {
      if (langKey !== undefined && langKey !== null) {
        fallbackStack(langKey);

        // as we might have an async loader initiated and a new translation language might have been defined
        // we need to add the promise to the stack also. So - iterate.
        if ($loaderFactory) {
          if ($fallbackLanguage && $fallbackLanguage.length) {
            for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
              if (!langPromises[$fallbackLanguage[i]]) {
                langPromises[$fallbackLanguage[i]] = loadAsync($fallbackLanguage[i]);
              }
            }
          }
        }
        $translate.use($translate.use());
      }
      if ($fallbackWasString) {
        return $fallbackLanguage[0];
      } else {
        return $fallbackLanguage;
      }

    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#useFallbackLanguage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Sets the first key of the fallback language stack to be used for translation.
     * Therefore all languages in the fallback array BEFORE this key will be skipped!
     *
     * @param {string=} langKey Contains the langKey the iteration shall start with. Set to false if you want to
     * get back to the whole stack
     */
    $translate.useFallbackLanguage = function (langKey) {
      if (langKey !== undefined && langKey !== null) {
        if (!langKey) {
          startFallbackIteration = 0;
        } else {
          var langKeyPosition = indexOf($fallbackLanguage, langKey);
          if (langKeyPosition > -1) {
            startFallbackIteration = langKeyPosition;
          }
        }

      }

    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#proposedLanguage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the language key of language that is currently loaded asynchronously.
     *
     * @return {string} language key
     */
    $translate.proposedLanguage = function () {
      return $nextLang;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#storage
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns registered storage.
     *
     * @return {object} Storage
     */
    $translate.storage = function () {
      return Storage;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#negotiateLocale
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns a language key based on available languages and language aliases. If a
     * language key cannot be resolved, returns undefined.
     *
     * If no or a falsy key is given, returns undefined.
     *
     * @param {string} [key] Language key
     * @return {string|undefined} Language key or undefined if no language key is found.
     */
    $translate.negotiateLocale = negotiateLocale;

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#use
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Tells angular-translate which language to use by given language key. This method is
     * used to change language at runtime. It also takes care of storing the language
     * key in a configured store to let your app remember the choosed language.
     *
     * When trying to 'use' a language which isn't available it tries to load it
     * asynchronously with registered loaders.
     *
     * Returns promise object with loaded language file data or string of the currently used language.
     *
     * If no or a falsy key is given it returns the currently used language key.
     * The returned string will be ```undefined``` if setting up $translate hasn't finished.
     * @example
     * $translate.use("en_US").then(function(data){
       *   $scope.text = $translate("HELLO");
       * });
     *
     * @param {string=} key Language key
     * @return {object|string} Promise with loaded language data or the language key if a falsy param was given.
     */
    $translate.use = function (key) {
      if (!key) {
        return $uses;
      }

      var deferred = $q.defer();
      deferred.promise.then(null, angular.noop); // AJS "Possibly unhandled rejection"

      $rootScope.$emit('$translateChangeStart', {language : key});

      // Try to get the aliased language key
      var aliasedKey = negotiateLocale(key);
      // Ensure only registered language keys will be loaded
      if ($availableLanguageKeys.length > 0 && !aliasedKey) {
        return $q.reject(key);
      }

      if (aliasedKey) {
        key = aliasedKey;
      }

      // if there isn't a translation table for the language we've requested,
      // we load it asynchronously
      $nextLang = key;
      if (($forceAsyncReloadEnabled || !$translationTable[key]) && $loaderFactory && !langPromises[key]) {
        langPromises[key] = loadAsync(key).then(function (translation) {
          translations(translation.key, translation.table);
          deferred.resolve(translation.key);
          if ($nextLang === key) {
            useLanguage(translation.key);
          }
          return translation;
        }, function (key) {
          $rootScope.$emit('$translateChangeError', {language : key});
          deferred.reject(key);
          $rootScope.$emit('$translateChangeEnd', {language : key});
          return $q.reject(key);
        });
        langPromises[key]['finally'](function () {
          clearNextLangAndPromise(key);
        })['catch'](angular.noop); // we don't care about errors (clearing)
      } else if (langPromises[key]) {
        // we are already loading this asynchronously
        // resolve our new deferred when the old langPromise is resolved
        langPromises[key].then(function (translation) {
          if ($nextLang === translation.key) {
            useLanguage(translation.key);
          }
          deferred.resolve(translation.key);
          return translation;
        }, function (key) {
          // find first available fallback language if that request has failed
          if (!$uses && $fallbackLanguage && $fallbackLanguage.length > 0 && $fallbackLanguage[0] !== key) {
            return $translate.use($fallbackLanguage[0]).then(deferred.resolve, deferred.reject);
          } else {
            return deferred.reject(key);
          }
        });
      } else {
        deferred.resolve(key);
        useLanguage(key);
      }

      return deferred.promise;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#resolveClientLocale
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * This returns the current browser/client's language key. The result is processed with the configured uniform tag resolver.
     *
     * @returns {string} the current client/browser language key
     */
    $translate.resolveClientLocale = function () {
      return getLocale();
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#storageKey
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the key for the storage.
     *
     * @return {string} storage key
     */
    $translate.storageKey = function () {
      return storageKey();
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#isPostCompilingEnabled
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns whether post compiling is enabled or not
     *
     * @return {bool} storage key
     */
    $translate.isPostCompilingEnabled = function () {
      return $postCompilingEnabled;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#isForceAsyncReloadEnabled
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns whether force async reload is enabled or not
     *
     * @return {boolean} forceAsyncReload value
     */
    $translate.isForceAsyncReloadEnabled = function () {
      return $forceAsyncReloadEnabled;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#isKeepContent
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns whether keepContent or not
     *
     * @return {boolean} keepContent value
     */
    $translate.isKeepContent = function () {
      return $keepContent;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#refresh
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Refreshes a translation table pointed by the given langKey. If langKey is not specified,
     * the module will drop all existent translation tables and load new version of those which
     * are currently in use.
     *
     * Refresh means that the module will drop target translation table and try to load it again.
     *
     * In case there are no loaders registered the refresh() method will throw an Error.
     *
     * If the module is able to refresh translation tables refresh() method will broadcast
     * $translateRefreshStart and $translateRefreshEnd events.
     *
     * @example
     * // this will drop all currently existent translation tables and reload those which are
     * // currently in use
     * $translate.refresh();
     * // this will refresh a translation table for the en_US language
     * $translate.refresh('en_US');
     *
     * @param {string} langKey A language key of the table, which has to be refreshed
     *
     * @return {promise} Promise, which will be resolved in case a translation tables refreshing
     * process is finished successfully, and reject if not.
     */
    $translate.refresh = function (langKey) {
      if (!$loaderFactory) {
        throw new Error('Couldn\'t refresh translation table, no loader registered!');
      }

      $rootScope.$emit('$translateRefreshStart', {language : langKey});

      var deferred = $q.defer(), updatedLanguages = {};

      //private helper
      function loadNewData(languageKey) {
        var promise = loadAsync(languageKey);
        //update the load promise cache for this language
        langPromises[languageKey] = promise;
        //register a data handler for the promise
        promise.then(function (data) {
            //clear the cache for this language
            $translationTable[languageKey] = {};
            //add the new data for this language
            translations(languageKey, data.table);
            //track that we updated this language
            updatedLanguages[languageKey] = true;
          },
          //handle rejection to appease the $q validation
          angular.noop);
        return promise;
      }

      //set up post-processing
      deferred.promise.then(
        function () {
          for (var key in $translationTable) {
            if ($translationTable.hasOwnProperty(key)) {
              //delete cache entries that were not updated
              if (!(key in updatedLanguages)) {
                delete $translationTable[key];
              }
            }
          }
          if ($uses) {
            useLanguage($uses);
          }
        },
        //handle rejection to appease the $q validation
        angular.noop
      )['finally'](
        function () {
          $rootScope.$emit('$translateRefreshEnd', {language : langKey});
        }
      );

      if (!langKey) {
        // if there's no language key specified we refresh ALL THE THINGS!
        var languagesToReload = $fallbackLanguage && $fallbackLanguage.slice() || [];
        if ($uses && languagesToReload.indexOf($uses) === -1) {
          languagesToReload.push($uses);
        }
        $q.all(languagesToReload.map(loadNewData)).then(deferred.resolve, deferred.reject);

      } else if ($translationTable[langKey]) {
        //just refresh the specified language cache
        loadNewData(langKey).then(deferred.resolve, deferred.reject);

      } else {
        deferred.reject();
      }

      return deferred.promise;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#instant
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns a translation instantly from the internal state of loaded translation. All rules
     * regarding the current language, the preferred language of even fallback languages will be
     * used except any promise handling. If a language was not found, an asynchronous loading
     * will be invoked in the background.
     *
     * @param {string|array} translationId A token which represents a translation id
     *                                     This can be optionally an array of translation ids which
     *                                     results that the function's promise returns an object where
     *                                     each key is the translation id and the value the translation.
     * @param {object=} [interpolateParams={}] Params
     * @param {string=} [interpolationId=undefined] The id of the interpolation to use (use default unless set via useInterpolation())
     * @param {string=} [forceLanguage=false] A language to be used instead of the current language
     * @param {string=} [sanitizeStrategy=undefined] force sanitize strategy for this call instead of using the configured one (use default unless set)
     *
     * @return {string|object} translation
     */
    $translate.instant = function (translationId, interpolateParams, interpolationId, forceLanguage, sanitizeStrategy) {

      // we don't want to re-negotiate $uses
      var uses = (forceLanguage && forceLanguage !== $uses) ? // we don't want to re-negotiate $uses
        (negotiateLocale(forceLanguage) || forceLanguage) : $uses;

      // Detect undefined and null values to shorten the execution and prevent exceptions
      if (translationId === null || angular.isUndefined(translationId)) {
        return translationId;
      }

      // Check forceLanguage is present
      if (forceLanguage) {
        loadTranslationsIfMissing(forceLanguage);
      }

      // Duck detection: If the first argument is an array, a bunch of translations was requested.
      // The result is an object.
      if (angular.isArray(translationId)) {
        var results = {};
        for (var i = 0, c = translationId.length; i < c; i++) {
          results[translationId[i]] = $translate.instant(translationId[i], interpolateParams, interpolationId, forceLanguage, sanitizeStrategy);
        }
        return results;
      }

      // We discarded unacceptable values. So we just need to verify if translationId is empty String
      if (angular.isString(translationId) && translationId.length < 1) {
        return translationId;
      }

      // trim off any whitespace
      if (translationId) {
        translationId = trim.apply(translationId);
      }

      var result, possibleLangKeys = [];
      if ($preferredLanguage) {
        possibleLangKeys.push($preferredLanguage);
      }
      if (uses) {
        possibleLangKeys.push(uses);
      }
      if ($fallbackLanguage && $fallbackLanguage.length) {
        possibleLangKeys = possibleLangKeys.concat($fallbackLanguage);
      }
      for (var j = 0, d = possibleLangKeys.length; j < d; j++) {
        var possibleLangKey = possibleLangKeys[j];
        if ($translationTable[possibleLangKey]) {
          if (typeof $translationTable[possibleLangKey][translationId] !== 'undefined') {
            result = determineTranslationInstant(translationId, interpolateParams, interpolationId, uses, sanitizeStrategy);
          }
        }
        if (typeof result !== 'undefined') {
          break;
        }
      }

      if (!result && result !== '') {
        if ($notFoundIndicatorLeft || $notFoundIndicatorRight) {
          result = applyNotFoundIndicators(translationId);
        } else {
          // Return translation of default interpolator if not found anything.
          result = defaultInterpolator.interpolate(translationId, interpolateParams, 'filter', sanitizeStrategy);

          // looks like the requested translation id doesn't exists.
          // Now, if there is a registered handler for missing translations and no
          // asyncLoader is pending, we execute the handler
          var missingTranslationHandlerTranslation;
          if ($missingTranslationHandlerFactory && !pendingLoader) {
            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams, sanitizeStrategy);
          }

          if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
            result = missingTranslationHandlerTranslation;
          }
        }
      }

      return result;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#versionInfo
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the current version information for the angular-translate library
     *
     * @return {string} angular-translate version
     */
    $translate.versionInfo = function () {
      return version;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#loaderCache
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns the defined loaderCache.
     *
     * @return {boolean|string|object} current value of loaderCache
     */
    $translate.loaderCache = function () {
      return loaderCache;
    };

    // internal purpose only
    $translate.directivePriority = function () {
      return directivePriority;
    };

    // internal purpose only
    $translate.statefulFilter = function () {
      return statefulFilter;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#isReady
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns whether the service is "ready" to translate (i.e. loading 1st language).
     *
     * See also {@link pascalprecht.translate.$translate#methods_onReady onReady()}.
     *
     * @return {boolean} current value of ready
     */
    $translate.isReady = function () {
      return $isReady;
    };

    var $onReadyDeferred = $q.defer();
    $onReadyDeferred.promise.then(function () {
      $isReady = true;
    });

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#onReady
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Calls the function provided or resolved the returned promise after the service is "ready" to translate (i.e. loading 1st language).
     *
     * See also {@link pascalprecht.translate.$translate#methods_isReady isReady()}.
     *
     * @param {Function=} fn Function to invoke when service is ready
     * @return {object} Promise resolved when service is ready
     */
    $translate.onReady = function (fn) {
      var deferred = $q.defer();
      if (angular.isFunction(fn)) {
        deferred.promise.then(fn);
      }
      if ($isReady) {
        deferred.resolve();
      } else {
        $onReadyDeferred.promise.then(deferred.resolve);
      }
      return deferred.promise;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#getAvailableLanguageKeys
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * This function simply returns the registered language keys being defined before in the config phase
     * With this, an application can use the array to provide a language selection dropdown or similar
     * without any additional effort
     *
     * @returns {object} returns the list of possibly registered language keys and mapping or null if not defined
     */
    $translate.getAvailableLanguageKeys = function () {
      if ($availableLanguageKeys.length > 0) {
        return $availableLanguageKeys;
      }
      return null;
    };

    /**
     * @ngdoc function
     * @name pascalprecht.translate.$translate#getTranslationTable
     * @methodOf pascalprecht.translate.$translate
     *
     * @description
     * Returns translation table by the given language key.
     *
     * Unless a language is provided it returns a translation table of the current one.
     * Note: If translation dictionary is currently downloading or in progress
     * it will return null.
     *
     * @param {string} langKey A token which represents a translation id
     *
     * @return {object} a copy of angular-translate $translationTable
     */
    $translate.getTranslationTable = function (langKey) {
      langKey = langKey || $translate.use();
      if (langKey && $translationTable[langKey]) {
        return angular.copy($translationTable[langKey]);
      }
      return null;
    };

    // Whenever $translateReady is being fired, this will ensure the state of $isReady
    var globalOnReadyListener = $rootScope.$on('$translateReady', function () {
      $onReadyDeferred.resolve();
      globalOnReadyListener(); // one time only
      globalOnReadyListener = null;
    });
    var globalOnChangeListener = $rootScope.$on('$translateChangeEnd', function () {
      $onReadyDeferred.resolve();
      globalOnChangeListener(); // one time only
      globalOnChangeListener = null;
    });

    if ($loaderFactory) {

      // If at least one async loader is defined and there are no
      // (default) translations available we should try to load them.
      if (angular.equals($translationTable, {})) {
        if ($translate.use()) {
          $translate.use($translate.use());
        }
      }

      // Also, if there are any fallback language registered, we start
      // loading them asynchronously as soon as we can.
      if ($fallbackLanguage && $fallbackLanguage.length) {
        var processAsyncResult = function (translation) {
          translations(translation.key, translation.table);
          $rootScope.$emit('$translateChangeEnd', {language : translation.key});
          return translation;
        };
        for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
          var fallbackLanguageId = $fallbackLanguage[i];
          if ($forceAsyncReloadEnabled || !$translationTable[fallbackLanguageId]) {
            langPromises[fallbackLanguageId] = loadAsync(fallbackLanguageId).then(processAsyncResult);
          }
        }
      }
    } else {
      $rootScope.$emit('$translateReady', {language : $translate.use()});
    }

    return $translate;
  }];
}

$translate.displayName = 'displayName';

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateDefaultInterpolation
 * @requires $interpolate
 *
 * @description
 * Uses angular's `$interpolate` services to interpolate strings against some values.
 *
 * Be aware to configure a proper sanitization strategy.
 *
 * See also:
 * * {@link pascalprecht.translate.$translateSanitization}
 *
 * @return {object} $translateDefaultInterpolation Interpolator service
 */
angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', $translateDefaultInterpolation);

function $translateDefaultInterpolation ($interpolate, $translateSanitization) {

  'use strict';

  var $translateInterpolator = {},
      $locale,
      $identifier = 'default';

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#setLocale
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Sets current locale (this is currently not use in this interpolation).
   *
   * @param {string} locale Language key or locale.
   */
  $translateInterpolator.setLocale = function (locale) {
    $locale = locale;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#getInterpolationIdentifier
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Returns an identifier for this interpolation service.
   *
   * @returns {string} $identifier
   */
  $translateInterpolator.getInterpolationIdentifier = function () {
    return $identifier;
  };

  /**
   * @deprecated will be removed in 3.0
   * @see {@link pascalprecht.translate.$translateSanitization}
   */
  $translateInterpolator.useSanitizeValueStrategy = function (value) {
    $translateSanitization.useStrategy(value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#interpolate
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Interpolates given value agains given interpolate params using angulars
   * `$interpolate` service.
   *
   * Since AngularJS 1.5, `value` must not be a string but can be anything input.
   *
   * @param {string} value translation
   * @param {object} [interpolationParams={}] interpolation params
   * @param {string} [context=undefined] current context (filter, directive, service)
   * @param {string} [sanitizeStrategy=undefined] sanitize strategy (use default unless set)
   * @param {string} translationId current translationId
   *
   * @returns {string} interpolated string
   */
  $translateInterpolator.interpolate = function (value, interpolationParams, context, sanitizeStrategy, translationId) { // jshint ignore:line
    interpolationParams = interpolationParams || {};
    interpolationParams = $translateSanitization.sanitize(interpolationParams, 'params', sanitizeStrategy, context);

    var interpolatedText;
    if (angular.isNumber(value)) {
      // numbers are safe
      interpolatedText = '' + value;
    } else if (angular.isString(value)) {
      // strings must be interpolated (that's the job here)
      interpolatedText = $interpolate(value)(interpolationParams);
      interpolatedText = $translateSanitization.sanitize(interpolatedText, 'text', sanitizeStrategy, context);
    } else {
      // neither a number or a string, cant interpolate => empty string
      interpolatedText = '';
    }

    return interpolatedText;
  };

  return $translateInterpolator;
}

$translateDefaultInterpolation.displayName = '$translateDefaultInterpolation';

angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY');

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translate
 * @requires $interpolate,
 * @requires $compile,
 * @requires $parse,
 * @requires $rootScope
 * @restrict AE
 *
 * @description
 * Translates given translation id either through attribute or DOM content.
 * Internally it uses $translate service to translate the translation id. It possible to
 * pass an optional `translate-values` object literal as string into translation id.
 *
 * @param {string=} translate Translation id which could be either string or interpolated string.
 * @param {string=} translate-values Values to pass into translation id. Can be passed as object literal string or interpolated object.
 * @param {string=} translate-attr-ATTR translate Translation id and put it into ATTR attribute.
 * @param {string=} translate-default will be used unless translation was successful
 * @param {string=} translate-sanitize-strategy defines locally sanitize strategy
 * @param {boolean=} translate-compile (default true if present) defines locally activation of {@link pascalprecht.translate.$translateProvider#methods_usePostCompiling}
 * @param {boolean=} translate-keep-content (default true if present) defines that in case a KEY could not be translated, that the existing content is left in the innerHTML}
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="TranslateCtrl">

        <pre translate="TRANSLATION_ID"></pre>
        <pre translate>TRANSLATION_ID</pre>
        <pre translate translate-attr-title="TRANSLATION_ID"></pre>
        <pre translate="{{translationId}}"></pre>
        <pre translate>{{translationId}}</pre>
        <pre translate="WITH_VALUES" translate-values="{value: 5}"></pre>
        <pre translate translate-values="{value: 5}">WITH_VALUES</pre>
        <pre translate="WITH_VALUES" translate-values="{{values}}"></pre>
        <pre translate translate-values="{{values}}">WITH_VALUES</pre>
        <pre translate translate-attr-title="WITH_VALUES" translate-values="{{values}}"></pre>
        <pre translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hi"></pre>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en',{
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}',
          'WITH_CAMEL_CASE_KEY': 'The interpolation key is camel cased: {{camelCaseKey}}'
        }).preferredLanguage('en');

      });

      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
    </file>
    <file name="scenario.js">
      it('should translate', function () {
        inject(function ($rootScope, $compile) {
          $rootScope.translationId = 'TRANSLATION_ID';

          element = $compile('<p translate="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate="{{translationId}}"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>TRANSLATION_ID</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>{{translationId}}</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate translate-attr-title="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.attr('title')).toBe('Hello there!');

          element = $compile('<p translate="WITH_CAMEL_CASE_KEY" translate-value-camel-case-key="Hello"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('The interpolation key is camel cased: Hello');
        });
      });
    </file>
   </example>
 */
.directive('translate', translateDirective);
function translateDirective($translate, $interpolate, $compile, $parse, $rootScope) {

  'use strict';

  /**
   * @name trim
   * @private
   *
   * @description
   * trim polyfill
   *
   * @returns {string} The string stripped of whitespace from both ends
   */
  var trim = function() {
    return this.toString().replace(/^\s+|\s+$/g, '');
  };

  /**
   * @name lowercase
   * @private
   *
   * @description
   * Return the lowercase string only if the type is string
   *
   * @returns {string} The string all in lowercase
   */
  var lowercase = function (string) {
    return angular.isString(string) ? string.toLowerCase() : string;
  };

  return {
    restrict: 'AE',
    scope: true,
    priority: $translate.directivePriority(),
    compile: function (tElement, tAttr) {

      var translateValuesExist = (tAttr.translateValues) ?
        tAttr.translateValues : undefined;

      var translateInterpolation = (tAttr.translateInterpolation) ?
        tAttr.translateInterpolation : undefined;

      var translateSanitizeStrategyExist = (tAttr.translateSanitizeStrategy) ?
        tAttr.translateSanitizeStrategy : undefined;

      var translateValueExist = tElement[0].outerHTML.match(/translate-value-+/i);

      var interpolateRegExp = '^(.*)(' + $interpolate.startSymbol() + '.*' + $interpolate.endSymbol() + ')(.*)',
          watcherRegExp = '^(.*)' + $interpolate.startSymbol() + '(.*)' + $interpolate.endSymbol() + '(.*)';

      return function linkFn(scope, iElement, iAttr) {

        scope.interpolateParams = {};
        scope.preText = '';
        scope.postText = '';
        scope.translateNamespace = getTranslateNamespace(scope);
        var translationIds = {};

        var initInterpolationParams = function (interpolateParams, iAttr, tAttr) {
          // initial setup
          if (iAttr.translateValues) {
            angular.extend(interpolateParams, $parse(iAttr.translateValues)(scope.$parent));
          }
          // initially fetch all attributes if existing and fill the params
          if (translateValueExist) {
            for (var attr in tAttr) {
              if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                var attributeName = lowercase(attr.substr(14, 1)) + attr.substr(15);
                interpolateParams[attributeName] = tAttr[attr];
              }
            }
          }
        };

        // Ensures any change of the attribute "translate" containing the id will
        // be re-stored to the scope's "translationId".
        // If the attribute has no content, the element's text value (white spaces trimmed off) will be used.
        var observeElementTranslation = function (translationId) {

          // Remove any old watcher
          if (angular.isFunction(observeElementTranslation._unwatchOld)) {
            observeElementTranslation._unwatchOld();
            observeElementTranslation._unwatchOld = undefined;
          }

          if (angular.equals(translationId , '') || !angular.isDefined(translationId)) {
            var iElementText = trim.apply(iElement.text());

            // Resolve translation id by inner html if required
            var interpolateMatches = iElementText.match(interpolateRegExp);
            // Interpolate translation id if required
            if (angular.isArray(interpolateMatches)) {
              scope.preText = interpolateMatches[1];
              scope.postText = interpolateMatches[3];
              translationIds.translate = $interpolate(interpolateMatches[2])(scope.$parent);
              var watcherMatches = iElementText.match(watcherRegExp);
              if (angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length) {
                observeElementTranslation._unwatchOld = scope.$watch(watcherMatches[2], function (newValue) {
                  translationIds.translate = newValue;
                  updateTranslations();
                });
              }
            } else {
              // do not assigne the translation id if it is empty.
              translationIds.translate = !iElementText ? undefined : iElementText;
            }
          } else {
            translationIds.translate = translationId;
          }
          updateTranslations();
        };

        var observeAttributeTranslation = function (translateAttr) {
          iAttr.$observe(translateAttr, function (translationId) {
            translationIds[translateAttr] = translationId;
            updateTranslations();
          });
        };

        // initial setup with values
        initInterpolationParams(scope.interpolateParams, iAttr, tAttr);

        var firstAttributeChangedEvent = true;
        iAttr.$observe('translate', function (translationId) {
          if (typeof translationId === 'undefined') {
            // case of element "<translate>xyz</translate>"
            observeElementTranslation('');
          } else {
            // case of regular attribute
            if (translationId !== '' || !firstAttributeChangedEvent) {
              translationIds.translate = translationId;
              updateTranslations();
            }
          }
          firstAttributeChangedEvent = false;
        });

        for (var translateAttr in iAttr) {
          if (iAttr.hasOwnProperty(translateAttr) && translateAttr.substr(0, 13) === 'translateAttr' && translateAttr.length > 13) {
            observeAttributeTranslation(translateAttr);
          }
        }

        iAttr.$observe('translateDefault', function (value) {
          scope.defaultText = value;
          updateTranslations();
        });

        if (translateSanitizeStrategyExist) {
          iAttr.$observe('translateSanitizeStrategy', function (value) {
            scope.sanitizeStrategy = $parse(value)(scope.$parent);
            updateTranslations();
          });
        }

        if (translateValuesExist) {
          iAttr.$observe('translateValues', function (interpolateParams) {
            if (interpolateParams) {
              scope.$parent.$watch(function () {
                angular.extend(scope.interpolateParams, $parse(interpolateParams)(scope.$parent));
              });
            }
          });
        }

        if (translateValueExist) {
          var observeValueAttribute = function (attrName) {
            iAttr.$observe(attrName, function (value) {
              var attributeName = lowercase(attrName.substr(14, 1)) + attrName.substr(15);
              scope.interpolateParams[attributeName] = value;
            });
          };
          for (var attr in iAttr) {
            if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
              observeValueAttribute(attr);
            }
          }
        }

        // Master update function
        var updateTranslations = function () {
          for (var key in translationIds) {
            if (translationIds.hasOwnProperty(key) && translationIds[key] !== undefined) {
              updateTranslation(key, translationIds[key], scope, scope.interpolateParams, scope.defaultText, scope.translateNamespace);
            }
          }
        };

        // Put translation processing function outside loop
        var updateTranslation = function(translateAttr, translationId, scope, interpolateParams, defaultTranslationText, translateNamespace) {
          if (translationId) {
            // if translation id starts with '.' and translateNamespace given, prepend namespace
            if (translateNamespace && translationId.charAt(0) === '.') {
              translationId = translateNamespace + translationId;
            }

            $translate(translationId, interpolateParams, translateInterpolation, defaultTranslationText, scope.translateLanguage, scope.sanitizeStrategy)
              .then(function (translation) {
                applyTranslation(translation, scope, true, translateAttr);
              }, function (translationId) {
                applyTranslation(translationId, scope, false, translateAttr);
              });
          } else {
            // as an empty string cannot be translated, we can solve this using successful=false
            applyTranslation(translationId, scope, false, translateAttr);
          }
        };

        var applyTranslation = function (value, scope, successful, translateAttr) {
          if (!successful) {
            if (typeof scope.defaultText !== 'undefined') {
              value = scope.defaultText;
            }
          }
          if (translateAttr === 'translate') {
            // default translate into innerHTML
            if (successful || (!successful && !$translate.isKeepContent() && typeof iAttr.translateKeepContent === 'undefined')) {
              iElement.empty().append(scope.preText + value + scope.postText);
            }
            var globallyEnabled = $translate.isPostCompilingEnabled();
            var locallyDefined = typeof tAttr.translateCompile !== 'undefined';
            var locallyEnabled = locallyDefined && tAttr.translateCompile !== 'false';
            if ((globallyEnabled && !locallyDefined) || locallyEnabled) {
              $compile(iElement.contents())(scope);
            }
          } else {
            // translate attribute
            var attributeName = iAttr.$attr[translateAttr];
            if (attributeName.substr(0, 5) === 'data-') {
              // ensure html5 data prefix is stripped
              attributeName = attributeName.substr(5);
            }
            attributeName = attributeName.substr(15);
            iElement.attr(attributeName, value);
          }
        };

        if (translateValuesExist || translateValueExist || iAttr.translateDefault) {
          scope.$watch('interpolateParams', updateTranslations, true);
        }

        // Replaced watcher on translateLanguage with event listener
        scope.$on('translateLanguageChanged', updateTranslations);

        // Ensures the text will be refreshed after the current language was changed
        // w/ $translate.use(...)
        var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

        // ensure translation will be looked up at least one
        if (iElement.text().length) {
          if (iAttr.translate) {
            observeElementTranslation(iAttr.translate);
          } else {
            observeElementTranslation('');
          }
        } else if (iAttr.translate) {
          // ensure attribute will be not skipped
          observeElementTranslation(iAttr.translate);
        }
        updateTranslations();
        scope.$on('$destroy', unbind);
      };
    }
  };
}

/**
 * Returns the scope's namespace.
 * @private
 * @param scope
 * @returns {string}
 */
function getTranslateNamespace(scope) {
  'use strict';
  if (scope.translateNamespace) {
    return scope.translateNamespace;
  }
  if (scope.$parent) {
    return getTranslateNamespace(scope.$parent);
  }
}

translateDirective.displayName = 'translateDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translate-attr
 * @restrict A
 *
 * @description
 * Translates attributes like translate-attr-ATTR, but with an object like ng-class.
 * Internally it uses `translate` service to translate translation id. It possible to
 * pass an optional `translate-values` object literal as string into translation id.
 *
 * @param {string=} translate-attr Object literal mapping attributes to translation ids.
 * @param {string=} translate-values Values to pass into the translation ids. Can be passed as object literal string.
 * @param {string=} translate-sanitize-strategy defines locally sanitize strategy
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="TranslateCtrl">

        <input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{value: 5}" />

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en',{
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}',
        }).preferredLanguage('en');

      });

      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
    </file>
    <file name="scenario.js">
      it('should translate', function () {
        inject(function ($rootScope, $compile) {
          $rootScope.translationId = 'TRANSLATION_ID';

          element = $compile('<input translate-attr="{ placeholder: translationId, title: 'WITH_VALUES' }" translate-values="{ value: 5 }" />')($rootScope);
          $rootScope.$digest();
          expect(element.attr('placeholder)).toBe('Hello there!');
          expect(element.attr('title)).toBe('The following value is dynamic: 5');
        });
      });
    </file>
   </example>
 */
.directive('translateAttr', translateAttrDirective);
function translateAttrDirective($translate, $rootScope) {

  'use strict';

  return {
    restrict: 'A',
    priority: $translate.directivePriority(),
    link: function linkFn(scope, element, attr) {

      var translateAttr,
          translateValues,
          translateSanitizeStrategy,
          previousAttributes = {};

      // Main update translations function
      var updateTranslations = function () {
        angular.forEach(translateAttr, function (translationId, attributeName) {
          if (!translationId) {
            return;
          }
          previousAttributes[attributeName] = true;

          // if translation id starts with '.' and translateNamespace given, prepend namespace
          if (scope.translateNamespace && translationId.charAt(0) === '.') {
            translationId = scope.translateNamespace + translationId;
          }
          $translate(translationId, translateValues, attr.translateInterpolation, undefined, scope.translateLanguage, translateSanitizeStrategy)
            .then(function (translation) {
              element.attr(attributeName, translation);
            }, function (translationId) {
              element.attr(attributeName, translationId);
            });
        });

        // Removing unused attributes that were previously used
        angular.forEach(previousAttributes, function (flag, attributeName) {
          if (!translateAttr[attributeName]) {
            element.removeAttr(attributeName);
            delete previousAttributes[attributeName];
          }
        });
      };

      // Watch for attribute changes
      watchAttribute(
        scope,
        attr.translateAttr,
        function (newValue) { translateAttr = newValue; },
        updateTranslations
      );
      // Watch for value changes
      watchAttribute(
        scope,
        attr.translateValues,
        function (newValue) { translateValues = newValue; },
        updateTranslations
      );
      // Watch for sanitize strategy changes
      watchAttribute(
        scope,
        attr.translateSanitizeStrategy,
        function (newValue) { translateSanitizeStrategy = newValue; },
        updateTranslations
      );

      if (attr.translateValues) {
        scope.$watch(attr.translateValues, updateTranslations, true);
      }

      // Replaced watcher on translateLanguage with event listener
      scope.$on('translateLanguageChanged', updateTranslations);

      // Ensures the text will be refreshed after the current language was changed
      // w/ $translate.use(...)
      var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

      updateTranslations();
      scope.$on('$destroy', unbind);
    }
  };
}

function watchAttribute(scope, attribute, valueCallback, changeCallback) {
  'use strict';
  if (!attribute) {
    return;
  }
  if (attribute.substr(0, 2) === '::') {
    attribute = attribute.substr(2);
  } else {
    scope.$watch(attribute, function(newValue) {
      valueCallback(newValue);
      changeCallback();
    }, true);
  }
  valueCallback(scope.$eval(attribute));
}

translateAttrDirective.displayName = 'translateAttrDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translateCloak
 * @requires $translate
 * @restrict A
 *
 * $description
 * Adds a `translate-cloak` class name to the given element where this directive
 * is applied initially and removes it, once a loader has finished loading.
 *
 * This directive can be used to prevent initial flickering when loading translation
 * data asynchronously.
 *
 * The class name is defined in
 * {@link pascalprecht.translate.$translateProvider#cloakClassName $translate.cloakClassName()}.
 *
 * @param {string=} translate-cloak If a translationId is provided, it will be used for showing
 *                                  or hiding the cloak. Basically it relies on the translation
 *                                  resolve.
 */
.directive('translateCloak', translateCloakDirective);

function translateCloakDirective($translate, $rootScope) {

  'use strict';

  return {
    compile : function (tElement) {
      var applyCloak = function (element) {
          element.addClass($translate.cloakClassName());
        },
        removeCloak = function (element) {
          element.removeClass($translate.cloakClassName());
        };
      applyCloak(tElement);

      return function linkFn(scope, iElement, iAttr) {
        //Create bound functions that incorporate the active DOM element.
        var iRemoveCloak = removeCloak.bind(this, iElement), iApplyCloak = applyCloak.bind(this, iElement);
        if (iAttr.translateCloak && iAttr.translateCloak.length) {
          // Register a watcher for the defined translation allowing a fine tuned cloak
          iAttr.$observe('translateCloak', function (translationId) {
            $translate(translationId).then(iRemoveCloak, iApplyCloak);
          });
          $rootScope.$on('$translateChangeSuccess', function () {
            $translate(iAttr.translateCloak).then(iRemoveCloak, iApplyCloak);
          });
        } else {
          $translate.onReady(iRemoveCloak);
        }
      };
    }
  };
}

translateCloakDirective.displayName = 'translateCloakDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translateNamespace
 * @restrict A
 *
 * @description
 * Translates given translation id either through attribute or DOM content.
 * Internally it uses `translate` filter to translate translation id. It is possible to
 * pass an optional `translate-values` object literal as string into translation id.
 *
 * @param {string=} translate namespace name which could be either string or interpolated string.
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div translate-namespace="CONTENT">

        <div>
            <h1 translate>.HEADERS.TITLE</h1>
            <h1 translate>.HEADERS.WELCOME</h1>
        </div>

        <div translate-namespace=".HEADERS">
            <h1 translate>.TITLE</h1>
            <h1 translate>.WELCOME</h1>
        </div>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en',{
          'TRANSLATION_ID': 'Hello there!',
          'CONTENT': {
            'HEADERS': {
                TITLE: 'Title'
            }
          },
          'CONTENT.HEADERS.WELCOME': 'Welcome'
        }).preferredLanguage('en');

      });

    </file>
   </example>
 */
.directive('translateNamespace', translateNamespaceDirective);

function translateNamespaceDirective() {

  'use strict';

  return {
    restrict: 'A',
    scope: true,
    compile: function () {
      return {
        pre: function (scope, iElement, iAttrs) {
          scope.translateNamespace = _getTranslateNamespace(scope);

          if (scope.translateNamespace && iAttrs.translateNamespace.charAt(0) === '.') {
            scope.translateNamespace += iAttrs.translateNamespace;
          } else {
            scope.translateNamespace = iAttrs.translateNamespace;
          }
        }
      };
    }
  };
}

/**
 * Returns the scope's namespace.
 * @private
 * @param scope
 * @returns {string}
 */
function _getTranslateNamespace(scope) {
  'use strict';
  if (scope.translateNamespace) {
    return scope.translateNamespace;
  }
  if (scope.$parent) {
    return _getTranslateNamespace(scope.$parent);
  }
}

translateNamespaceDirective.displayName = 'translateNamespaceDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translateLanguage
 * @restrict A
 *
 * @description
 * Forces the language to the directives in the underlying scope.
 *
 * @param {string=} translate language that will be negotiated.
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div>

        <div>
            <h1 translate>HELLO</h1>
        </div>

        <div translate-language="de">
            <h1 translate>HELLO</h1>
        </div>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider
          .translations('en',{
            'HELLO': 'Hello world!'
          })
          .translations('de',{
            'HELLO': 'Hallo Welt!'
          })
          .preferredLanguage('en');

      });

    </file>
   </example>
 */
.directive('translateLanguage', translateLanguageDirective);

function translateLanguageDirective() {

  'use strict';

  return {
    restrict: 'A',
    scope: true,
    compile: function () {
      return function linkFn(scope, iElement, iAttrs) {

        iAttrs.$observe('translateLanguage', function (newTranslateLanguage) {
          scope.translateLanguage = newTranslateLanguage;
        });

        scope.$watch('translateLanguage', function(){
          scope.$broadcast('translateLanguageChanged');
        });
      };
    }
  };
}

translateLanguageDirective.displayName = 'translateLanguageDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc filter
 * @name pascalprecht.translate.filter:translate
 * @requires $parse
 * @requires pascalprecht.translate.$translate
 * @function
 *
 * @description
 * Uses `$translate` service to translate contents. Accepts interpolate parameters
 * to pass dynamized values though translation.
 *
 * @param {string} translationId A translation id to be translated.
 * @param {*=} interpolateParams Optional object literal (as hash or string) to pass values into translation.
 *
 * @returns {string} Translated text.
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="TranslateCtrl">

        <pre>{{ 'TRANSLATION_ID' | translate }}</pre>
        <pre>{{ translationId | translate }}</pre>
        <pre>{{ 'WITH_VALUES' | translate:'{value: 5}' }}</pre>
        <pre>{{ 'WITH_VALUES' | translate:values }}</pre>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en', {
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}'
        });
        $translateProvider.preferredLanguage('en');

      });

      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
    </file>
   </example>
 */
.filter('translate', translateFilterFactory);

function translateFilterFactory($parse, $translate) {

  'use strict';

  var translateFilter = function (translationId, interpolateParams, interpolation, forceLanguage) {
    if (!angular.isObject(interpolateParams)) {
      var ctx = this || {
        '__SCOPE_IS_NOT_AVAILABLE': 'More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f'
        };
      interpolateParams = $parse(interpolateParams)(ctx);
    }

    return $translate.instant(translationId, interpolateParams, interpolation, forceLanguage);
  };

  if ($translate.statefulFilter()) {
    translateFilter.$stateful = true;
  }

  return translateFilter;
}

translateFilterFactory.displayName = 'translateFilterFactory';

angular.module('pascalprecht.translate')

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translationCache
 * @requires $cacheFactory
 *
 * @description
 * The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You
 * can load translation tables directly into the cache by consuming the
 * `$translationCache` service directly.
 *
 * @return {object} $cacheFactory object.
 */
  .factory('$translationCache', $translationCache);

function $translationCache($cacheFactory) {

  'use strict';

  return $cacheFactory('translations');
}

$translationCache.displayName = '$translationCache';
return 'pascalprecht.translate';

}));

/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(e,i){"function"==typeof define&&define.amd?define([],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():i()}(0,function(){function e(n,a){"use strict";return function(r){if(!(r&&(angular.isArray(r.files)||angular.isString(r.prefix)&&angular.isString(r.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");r.files||(r.files=[{prefix:r.prefix,suffix:r.suffix}]);for(var e=function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var i=[e.prefix,r.key,e.suffix].join("");return angular.isObject(r.fileMap)&&r.fileMap[i]&&(i=r.fileMap[i]),a(angular.extend({url:i,method:"GET"},r.$http)).then(function(e){return e.data},function(){return n.reject(r.key)})},i=[],t=r.files.length,f=0;f<t;f++)i.push(e({prefix:r.files[f].prefix,key:r.key,suffix:r.files[f].suffix}));return n.all(i).then(function(e){for(var i=e.length,r={},t=0;t<i;t++)for(var f in e[t])r[f]=e[t][f];return r})}}return e.$inject=["$q","$http"],angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",e),e.displayName="$translateStaticFilesLoader","pascalprecht.translate"});
/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,b){'use strict';function z(b,h){var d=[],c=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(b,c,h,k){b="?"===k||"*?"===k;k="*"===k||"*?"===k;d.push({name:h,optional:b});c=c||"";return(b?"(?:"+c:c+"(?:")+(k?"(.+?)":"([^/]+)")+(b?"?)?":")")}).replace(/([/$*])/g,"\\$1");h.ignoreTrailingSlashes&&(c=c.replace(/\/+$/,"")+"/*");return{keys:d,regexp:new RegExp("^"+c+"(?:[?#]|$)",h.caseInsensitiveMatch?"i":"")}}function A(b){p&&b.get("$route")}function v(u,h,d){return{restrict:"ECA",
terminal:!0,priority:400,transclude:"element",link:function(c,f,g,l,k){function q(){r&&(d.cancel(r),r=null);m&&(m.$destroy(),m=null);s&&(r=d.leave(s),r.done(function(b){!1!==b&&(r=null)}),s=null)}function C(){var g=u.current&&u.current.locals;if(b.isDefined(g&&g.$template)){var g=c.$new(),l=u.current;s=k(g,function(g){d.enter(g,null,s||f).done(function(d){!1===d||!b.isDefined(w)||w&&!c.$eval(w)||h()});q()});m=l.scope=g;m.$emit("$viewContentLoaded");m.$eval(p)}else q()}var m,s,r,w=g.autoscroll,p=g.onload||
"";c.$on("$routeChangeSuccess",C);C()}}}function x(b,h,d){return{restrict:"ECA",priority:-400,link:function(c,f){var g=d.current,l=g.locals;f.html(l.$template);var k=b(f.contents());if(g.controller){l.$scope=c;var q=h(g.controller,l);g.controllerAs&&(c[g.controllerAs]=q);f.data("$ngControllerController",q);f.children().data("$ngControllerController",q)}c[g.resolveAs||"$resolve"]=l;k(c)}}}var D,E,F,G,y=b.module("ngRoute",[]).info({angularVersion:"1.7.8"}).provider("$route",function(){function u(d,
c){return b.extend(Object.create(d),c)}D=b.isArray;E=b.isObject;F=b.isDefined;G=b.noop;var h={};this.when=function(d,c){var f;f=void 0;if(D(c)){f=f||[];for(var g=0,l=c.length;g<l;g++)f[g]=c[g]}else if(E(c))for(g in f=f||{},c)if("$"!==g.charAt(0)||"$"!==g.charAt(1))f[g]=c[g];f=f||c;b.isUndefined(f.reloadOnUrl)&&(f.reloadOnUrl=!0);b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0);b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch);h[d]=b.extend(f,{originalPath:d},
d&&z(d,f));d&&(g="/"===d[d.length-1]?d.substr(0,d.length-1):d+"/",h[g]=b.extend({originalPath:d,redirectTo:d},z(g,f)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};p=!0;this.eagerInstantiationEnabled=function(b){return F(b)?(p=b,this):p};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(d,c,f,g,l,k,q,p){function m(a){var e=t.current;n=A();(x=
!B&&n&&e&&n.$$route===e.$$route&&(!n.reloadOnUrl||!n.reloadOnSearch&&b.equals(n.pathParams,e.pathParams)))||!e&&!n||d.$broadcast("$routeChangeStart",n,e).defaultPrevented&&a&&a.preventDefault()}function s(){var a=t.current,e=n;if(x)a.params=e.params,b.copy(a.params,f),d.$broadcast("$routeUpdate",a);else if(e||a){B=!1;t.current=e;var c=g.resolve(e);p.$$incOutstandingRequestCount("$route");c.then(r).then(w).then(function(g){return g&&c.then(y).then(function(c){e===t.current&&(e&&(e.locals=c,b.copy(e.params,
f)),d.$broadcast("$routeChangeSuccess",e,a))})}).catch(function(b){e===t.current&&d.$broadcast("$routeChangeError",e,a,b)}).finally(function(){p.$$completeOutstandingRequest(G,"$route")})}}function r(a){var e={route:a,hasRedirection:!1};if(a)if(a.redirectTo)if(b.isString(a.redirectTo))e.path=v(a.redirectTo,a.params),e.search=a.params,e.hasRedirection=!0;else{var d=c.path(),f=c.search();a=a.redirectTo(a.pathParams,d,f);b.isDefined(a)&&(e.url=a,e.hasRedirection=!0)}else if(a.resolveRedirectTo)return g.resolve(l.invoke(a.resolveRedirectTo)).then(function(a){b.isDefined(a)&&
(e.url=a,e.hasRedirection=!0);return e});return e}function w(a){var b=!0;if(a.route!==t.current)b=!1;else if(a.hasRedirection){var g=c.url(),d=a.url;d?c.url(d).replace():d=c.path(a.path).search(a.search).replace().url();d!==g&&(b=!1)}return b}function y(a){if(a){var e=b.extend({},a.resolve);b.forEach(e,function(a,c){e[c]=b.isString(a)?l.get(a):l.invoke(a,null,null,c)});a=z(a);b.isDefined(a)&&(e.$template=a);return g.all(e)}}function z(a){var e,c;b.isDefined(e=a.template)?b.isFunction(e)&&(e=e(a.params)):
b.isDefined(c=a.templateUrl)&&(b.isFunction(c)&&(c=c(a.params)),b.isDefined(c)&&(a.loadedTemplateUrl=q.valueOf(c),e=k(c)));return e}function A(){var a,e;b.forEach(h,function(d,g){var f;if(f=!e){var h=c.path();f=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=f[k-1],n=h[k];m&&n&&(l[m.name]=n)}f=l}else f=null;else f=null;f=a=f}f&&(e=u(d,{params:b.extend({},c.search(),a),pathParams:a}),e.$$route=d)});return e||h[null]&&u(h[null],{params:{},pathParams:{}})}function v(a,
c){var d=[];b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),g=f[1];d.push(c[g]);d.push(f[2]||"");delete c[g]}});return d.join("")}var B=!1,n,x,t={routes:h,reload:function(){B=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;B=!1}};d.$evalAsync(function(){m(a);a.defaultPrevented||s()})},updateParams:function(a){if(this.current&&this.current.$$route)a=b.extend({},this.current.params,a),c.path(v(this.current.$$route.originalPath,
a)),c.search(a);else throw H("norout");}};d.$on("$locationChangeStart",m);d.$on("$locationChangeSuccess",s);return t}]}).run(A),H=b.$$minErr("ngRoute"),p;A.$inject=["$injector"];y.provider("$routeParams",function(){this.$get=function(){return{}}});y.directive("ngView",v);y.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*! angularjs-slider - v7.0.0 -  (c) Rafal Zajac <rzajac@gmail.com>, Valentin Hervieu <valentin@hervi.eu>, Jussi Saarivirta <jusasi@gmail.com>, Angelin Sirbu <angelin.sirbu@gmail.com> -  https://github.com/angular-slider/angularjs-slider -  2019-02-23 */
!function(a,b){"use strict";if("function"==typeof define&&define.amd)define(["angular"],b);else if("object"==typeof module&&module.exports){var c=angular||require("angular");c&&c.module||"undefined"==typeof angular||(c=angular),module.exports=b(c)}else b(a.angular)}(this,function(a){"use strict";var b=a.module("rzSlider",[]).factory("RzSliderOptions",function(){var b={floor:0,ceil:null,step:1,precision:0,minRange:null,maxRange:null,restrictedRange:null,pushRange:!1,minLimit:null,maxLimit:null,id:null,translate:null,getLegend:null,stepsArray:null,bindIndexForStepsArray:!1,draggableRange:!1,draggableRangeOnly:!1,showSelectionBar:!1,showSelectionBarEnd:!1,showSelectionBarFromValue:null,showOuterSelectionBars:!1,hidePointerLabels:!1,hideLimitLabels:!1,autoHideLimitLabels:!0,readOnly:!1,disabled:!1,interval:350,showTicks:!1,showTicksValues:!1,ticksArray:null,ticksTooltip:null,ticksValuesTooltip:null,vertical:!1,getSelectionBarColor:null,getTickColor:null,getPointerColor:null,keyboardSupport:!0,scale:1,enforceStep:!0,enforceRange:!1,noSwitching:!1,onlyBindHandles:!1,disableAnimation:!1,onStart:null,onChange:null,onEnd:null,rightToLeft:!1,reversedControls:!1,boundPointerLabels:!0,mergeRangeLabelsIfSame:!1,labelOverlapSeparator:" - ",customTemplateScope:null,logScale:!1,customValueToPosition:null,customPositionToValue:null,selectionBarGradient:null,ariaLabel:null,ariaLabelledBy:null,ariaLabelHigh:null,ariaLabelledByHigh:null},c={},d={};return d.options=function(b){a.extend(c,b)},d.getOptions=function(d){return a.extend({},b,c,d)},d}).factory("rzThrottle",["$timeout",function(a){return function(b,c,d){var e,f,g,h=Date.now||function(){return(new Date).getTime()},i=null,j=0;d=d||{};var k=function(){j=h(),i=null,g=b.apply(e,f),e=f=null};return function(){var l=h(),m=c-(l-j);return e=this,f=arguments,0>=m?(a.cancel(i),i=null,j=l,g=b.apply(e,f),e=f=null):i||d.trailing===!1||(i=a(k,m)),g}}}]).factory("RzSlider",["$timeout","$document","$window","$compile","RzSliderOptions","rzThrottle",function(b,c,d,e,f,g){var h=function(a,b){this.scope=a,this.lowValue=0,this.highValue=0,this.sliderElem=b,this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.dragging={active:!1,value:0,difference:0,position:0,lowLimit:0,highLimit:0},this.positionProperty="left",this.dimensionProperty="width",this.handleHalfDim=0,this.maxPos=0,this.precision=0,this.step=1,this.tracking="",this.minValue=0,this.maxValue=0,this.valueRange=0,this.intermediateTicks=!1,this.initHasRun=!1,this.firstKeyDown=!1,this.internalChange=!1,this.cmbLabelShown=!1,this.currentFocusElement=null,this.moving=!1,this.fullBar=null,this.selBar=null,this.minH=null,this.maxH=null,this.flrLab=null,this.ceilLab=null,this.minLab=null,this.maxLab=null,this.cmbLab=null,this.ticks=null,this.init()};return h.prototype={init:function(){var b,c,e=this,f=function(){e.calcViewDimensions()};this.applyOptions(),this.syncLowValue(),this.range&&this.syncHighValue(),this.initElemHandles(),this.manageElementsStyle(),this.setDisabledState(),this.calcViewDimensions(),this.setMinAndMax(),this.updateRestrictionBar(),this.addAccessibility(),this.updateCeilLab(),this.updateFloorLab(),this.initHandles(),this.manageEventsBindings(),this.scope.$on("reCalcViewDimensions",f),a.element(d).on("resize",f),this.initHasRun=!0,this.options.disableAnimation&&this.sliderElem.addClass("noanimate"),b=g(function(){e.onLowHandleChange()},e.options.interval),c=g(function(){e.onHighHandleChange()},e.options.interval),this.scope.$on("rzSliderForceRender",function(){e.resetLabelsValue(),b(),e.range&&c(),e.resetSlider()}),this.scope.$watchCollection("rzSliderOptions()",function(a,b){a!==b&&(e.applyOptions(),e.syncLowValue(),e.range&&e.syncHighValue(),e.resetSlider())}),this.scope.$watch("rzSliderModel",function(a,c){e.internalChange||a!==c&&b()}),this.scope.$watch("rzSliderHigh",function(a,b){e.internalChange||a!==b&&(null!=a&&c(),(e.range&&null==a||!e.range&&null!=a)&&(e.applyOptions(),e.resetSlider()))}),this.scope.$on("$destroy",function(){e.unbindEvents(),a.element(d).off("resize",f),e.currentFocusElement=null})},findStepIndex:function(b){for(var c=0,d=0;d<this.options.stepsArray.length;d++){var e=this.options.stepsArray[d];if(e===b){c=d;break}if(a.isDate(e)){if(e.getTime()===b.getTime()){c=d;break}}else if(a.isObject(e)&&(a.isDate(e.value)&&e.value.getTime()===b.getTime()||e.value===b)){c=d;break}}return c},syncLowValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.lowValue=this.scope.rzSliderModel:this.lowValue=this.findStepIndex(this.scope.rzSliderModel):this.lowValue=this.scope.rzSliderModel},syncHighValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.highValue=this.scope.rzSliderHigh:this.highValue=this.findStepIndex(this.scope.rzSliderHigh):this.highValue=this.scope.rzSliderHigh},getStepValue:function(b){var c=this.options.stepsArray[b];return a.isDate(c)?c:a.isObject(c)?c.value:c},applyLowValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.scope.rzSliderModel=this.lowValue:this.scope.rzSliderModel=this.getStepValue(this.lowValue):this.scope.rzSliderModel=this.lowValue},applyHighValue:function(){this.options.stepsArray?this.options.bindIndexForStepsArray?this.scope.rzSliderHigh=this.highValue:this.scope.rzSliderHigh=this.getStepValue(this.highValue):this.scope.rzSliderHigh=this.highValue},onLowHandleChange:function(){this.syncLowValue(),this.range&&this.syncHighValue(),this.setMinAndMax(),this.updateLowHandle(this.valueToPosition(this.lowValue)),this.updateSelectionBar(),this.updateTicksScale(),this.updateAriaAttributes(),this.range&&this.updateCmbLabel()},onHighHandleChange:function(){this.syncLowValue(),this.syncHighValue(),this.setMinAndMax(),this.updateHighHandle(this.valueToPosition(this.highValue)),this.updateSelectionBar(),this.updateTicksScale(),this.updateCmbLabel(),this.updateAriaAttributes()},applyOptions:function(){var b;b=this.scope.rzSliderOptions?this.scope.rzSliderOptions():{},this.options=f.getOptions(b),this.options.step<=0&&(this.options.step=1),this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.options.draggableRange=this.range&&this.options.draggableRange,this.options.draggableRangeOnly=this.range&&this.options.draggableRangeOnly,this.options.draggableRangeOnly&&(this.options.draggableRange=!0),this.options.showTicks=this.options.showTicks||this.options.showTicksValues||!!this.options.ticksArray,this.scope.showTicks=this.options.showTicks,(a.isNumber(this.options.showTicks)||this.options.ticksArray)&&(this.intermediateTicks=!0),this.options.showSelectionBar=this.options.showSelectionBar||this.options.showSelectionBarEnd||null!==this.options.showSelectionBarFromValue,this.options.stepsArray?this.parseStepsArray():(this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return String(a)},this.getLegend=this.options.getLegend),this.options.vertical?(this.positionProperty="bottom",this.dimensionProperty="height"):(this.positionProperty="left",this.dimensionProperty="width"),this.options.customTemplateScope&&(this.scope.custom=this.options.customTemplateScope)},parseStepsArray:function(){this.options.floor=0,this.options.ceil=this.options.stepsArray.length-1,this.options.step=1,this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return this.options.bindIndexForStepsArray?this.getStepValue(a):a},this.getLegend=function(b){var c=this.options.stepsArray[b];return a.isObject(c)?c.legend:null}},resetSlider:function(){this.resetLabelsValue(),this.manageElementsStyle(),this.addAccessibility(),this.setMinAndMax(),this.updateCeilLab(),this.updateFloorLab(),this.unbindEvents(),this.manageEventsBindings(),this.setDisabledState(),this.calcViewDimensions(),this.updateRestrictionBar(),this.refocusPointerIfNeeded()},refocusPointerIfNeeded:function(){this.currentFocusElement&&(this.onPointerFocus(this.currentFocusElement.pointer,this.currentFocusElement.ref),this.focusElement(this.currentFocusElement.pointer))},initElemHandles:function(){a.forEach(this.sliderElem.children(),function(b,c){var d=a.element(b);switch(c){case 0:this.leftOutSelBar=d;break;case 1:this.rightOutSelBar=d;break;case 2:this.fullBar=d;break;case 3:this.selBar=d;break;case 4:this.restrictedBar=d;break;case 5:this.minH=d;break;case 6:this.maxH=d;break;case 7:this.flrLab=d;break;case 8:this.ceilLab=d;break;case 9:this.minLab=d;break;case 10:this.maxLab=d;break;case 11:this.cmbLab=d;break;case 12:this.ticks=d}},this),this.selBar.rzsp=0,this.minH.rzsp=0,this.maxH.rzsp=0,this.flrLab.rzsp=0,this.ceilLab.rzsp=0,this.minLab.rzsp=0,this.maxLab.rzsp=0,this.cmbLab.rzsp=0},manageElementsStyle:function(){this.range?this.maxH.css("display",""):this.maxH.css("display","none"),this.alwaysHide(this.flrLab,this.options.showTicksValues||this.options.hideLimitLabels),this.alwaysHide(this.ceilLab,this.options.showTicksValues||this.options.hideLimitLabels);var a=this.options.showTicksValues&&!this.intermediateTicks;this.alwaysHide(this.minLab,a||this.options.hidePointerLabels),this.alwaysHide(this.maxLab,a||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.cmbLab,a||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.selBar,!this.range&&!this.options.showSelectionBar),this.alwaysHide(this.leftOutSelBar,!this.range||!this.options.showOuterSelectionBars),this.alwaysHide(this.restrictedBar,!this.options.restrictedRange),this.alwaysHide(this.rightOutSelBar,!this.range||!this.options.showOuterSelectionBars),this.range&&this.options.showOuterSelectionBars&&this.fullBar.addClass("rz-transparent"),this.options.vertical?this.sliderElem.addClass("rz-vertical"):this.sliderElem.removeClass("rz-vertical"),this.options.draggableRange?this.selBar.addClass("rz-draggable"):this.selBar.removeClass("rz-draggable"),this.intermediateTicks&&this.options.showTicksValues&&this.ticks.addClass("rz-ticks-values-under")},alwaysHide:function(a,b){a.rzAlwaysHide=b,b?this.hideEl(a):this.showEl(a)},manageEventsBindings:function(){this.options.disabled||this.options.readOnly?this.unbindEvents():this.bindEvents()},setDisabledState:function(){this.options.disabled?this.sliderElem.attr("disabled","disabled"):this.sliderElem.attr("disabled",null)},resetLabelsValue:function(){this.minLab.rzsv=void 0,this.maxLab.rzsv=void 0,this.flrLab.rzsv=void 0,this.ceilLab.rzsv=void 0,this.cmbLab.rzsv=void 0,this.resetPosition(this.flrLab),this.resetPosition(this.ceilLab),this.resetPosition(this.cmbLab),this.resetPosition(this.minLab),this.resetPosition(this.maxLab)},initHandles:function(){this.updateLowHandle(this.valueToPosition(this.lowValue)),this.range&&this.updateHighHandle(this.valueToPosition(this.highValue)),this.updateSelectionBar(),this.range&&this.updateCmbLabel(),this.updateTicksScale()},translateFn:function(a,b,c,d){d=void 0===d?!0:d;var e="",f=!1,g=b.hasClass("no-label-injection");d?(this.options.stepsArray&&!this.options.bindIndexForStepsArray&&(a=this.getStepValue(a)),e=String(this.customTrFn(a,this.options.id,c))):e=String(a),(void 0===b.rzsv||b.rzsv.length!==e.length||b.rzsv.length>0&&0===b.rzsd)&&(f=!0,b.rzsv=e),g||b.html(e),this.scope[c+"Label"]=e,f&&this.getDimension(b)},setMinAndMax:function(){if(this.step=+this.options.step,this.precision=+this.options.precision,this.minValue=this.options.floor,this.options.logScale&&0===this.minValue)throw Error("Can't use floor=0 with logarithmic scale");this.options.enforceStep&&(this.lowValue=this.roundStep(this.lowValue),this.range&&(this.highValue=this.roundStep(this.highValue))),null!=this.options.ceil?this.maxValue=this.options.ceil:this.maxValue=this.options.ceil=this.range?this.highValue:this.lowValue,this.options.enforceRange&&(this.lowValue=this.sanitizeValue(this.lowValue),this.range&&(this.highValue=this.sanitizeValue(this.highValue))),this.applyLowValue(),this.range&&this.applyHighValue(),this.valueRange=this.maxValue-this.minValue},addAccessibility:function(){this.minH.attr("role","slider"),this.updateAriaAttributes(),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.minH.attr("tabindex",""):this.minH.attr("tabindex","0"),this.options.vertical?this.minH.attr("aria-orientation","vertical"):this.minH.attr("aria-orientation","horizontal"),this.options.ariaLabel?this.minH.attr("aria-label",this.options.ariaLabel):this.options.ariaLabelledBy&&this.minH.attr("aria-labelledby",this.options.ariaLabelledBy),this.range&&(this.maxH.attr("role","slider"),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.maxH.attr("tabindex",""):this.maxH.attr("tabindex","0"),this.options.vertical?this.maxH.attr("aria-orientation","vertical"):this.maxH.attr("aria-orientation","horizontal"),this.options.ariaLabelHigh?this.maxH.attr("aria-label",this.options.ariaLabelHigh):this.options.ariaLabelledByHigh&&this.maxH.attr("aria-labelledby",this.options.ariaLabelledByHigh))},updateAriaAttributes:function(){this.minH.attr({"aria-valuenow":this.scope.rzSliderModel,"aria-valuetext":this.customTrFn(this.scope.rzSliderModel,this.options.id,"model"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue}),this.range&&this.maxH.attr({"aria-valuenow":this.scope.rzSliderHigh,"aria-valuetext":this.customTrFn(this.scope.rzSliderHigh,this.options.id,"high"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue})},calcViewDimensions:function(){var a=this.getDimension(this.minH);if(this.handleHalfDim=a/2,this.barDimension=this.getDimension(this.fullBar),this.maxPos=this.barDimension-a,this.getDimension(this.sliderElem),this.sliderElem.rzsp=this.sliderElem[0].getBoundingClientRect()[this.positionProperty],this.initHasRun){this.updateFloorLab(),this.updateCeilLab(),this.initHandles();var c=this;b(function(){c.updateTicksScale()})}},updateTicksScale:function(){if(this.options.showTicks){var b=this.options.ticksArray||this.getTicksArray(),c=this.options.vertical?"translateY":"translateX",d=this;this.options.rightToLeft&&b.reverse(),this.scope.ticks=b.map(function(b){var e=null;a.isObject(b)&&(e=b.legend,b=b.value);var f=d.valueToPosition(b);d.options.vertical&&(f=d.maxPos-f);var g=c+"("+Math.round(f)+"px)",h={legend:e,selected:d.isTickSelected(b),style:{"-webkit-transform":g,"-moz-transform":g,"-o-transform":g,"-ms-transform":g,transform:g}};return h.selected&&d.options.getSelectionBarColor&&(h.style["background-color"]=d.getSelectionBarColor()),!h.selected&&d.options.getTickColor&&(h.style["background-color"]=d.getTickColor(b)),d.options.ticksTooltip&&(h.tooltip=d.options.ticksTooltip(b),h.tooltipPlacement=d.options.vertical?"right":"top"),(d.options.showTicksValues===!0||b%d.options.showTicksValues===0)&&(h.value=d.getDisplayValue(b,"tick-value"),d.options.ticksValuesTooltip&&(h.valueTooltip=d.options.ticksValuesTooltip(b),h.valueTooltipPlacement=d.options.vertical?"right":"top")),d.getLegend&&(e=d.getLegend(b,d.options.id),e&&(h.legend=e)),h})}},getTicksArray:function(){var a=this.step,b=[];this.intermediateTicks&&(a=this.options.showTicks);for(var c=this.minValue;c<=this.maxValue;c+=a)b.push(c);return b},isTickSelected:function(a){if(!this.range)if(null!==this.options.showSelectionBarFromValue){var b=this.options.showSelectionBarFromValue;if(this.lowValue>b&&a>=b&&a<=this.lowValue)return!0;if(this.lowValue<b&&b>=a&&a>=this.lowValue)return!0}else if(this.options.showSelectionBarEnd){if(a>=this.lowValue)return!0}else if(this.options.showSelectionBar&&a<=this.lowValue)return!0;return this.range&&a>=this.lowValue&&a<=this.highValue?!0:!1},updateFloorLab:function(){this.translateFn(this.minValue,this.flrLab,"floor"),this.getDimension(this.flrLab);var a=this.options.rightToLeft?this.barDimension-this.flrLab.rzsd:0;this.setPosition(this.flrLab,a)},updateCeilLab:function(){this.translateFn(this.maxValue,this.ceilLab,"ceil"),this.getDimension(this.ceilLab);var a=this.options.rightToLeft?0:this.barDimension-this.ceilLab.rzsd;this.setPosition(this.ceilLab,a)},updateHandles:function(a,b){"lowValue"===a?this.updateLowHandle(b):this.updateHighHandle(b),this.updateSelectionBar(),this.updateTicksScale(),this.range&&this.updateCmbLabel()},getHandleLabelPos:function(a,b){var c=this[a].rzsd,d=b-c/2+this.handleHalfDim,e=this.barDimension-c;return this.options.boundPointerLabels?this.options.rightToLeft&&"minLab"===a||!this.options.rightToLeft&&"maxLab"===a?Math.min(d,e):Math.min(Math.max(d,0),e):d},updateLowHandle:function(a){if(this.setPosition(this.minH,a),this.translateFn(this.lowValue,this.minLab,"model"),this.setPosition(this.minLab,this.getHandleLabelPos("minLab",a)),this.options.getPointerColor){var b=this.getPointerColor("min");this.scope.minPointerStyle={backgroundColor:b}}this.options.autoHideLimitLabels&&this.shFloorCeil()},updateHighHandle:function(a){if(this.setPosition(this.maxH,a),this.translateFn(this.highValue,this.maxLab,"high"),this.setPosition(this.maxLab,this.getHandleLabelPos("maxLab",a)),this.options.getPointerColor){var b=this.getPointerColor("max");this.scope.maxPointerStyle={backgroundColor:b}}this.options.autoHideLimitLabels&&this.shFloorCeil()},shFloorCeil:function(){if(!this.options.hidePointerLabels){var a=!1,b=!1,c=this.isLabelBelowFloorLab(this.minLab),d=this.isLabelAboveCeilLab(this.minLab),e=this.isLabelAboveCeilLab(this.maxLab),f=this.isLabelBelowFloorLab(this.cmbLab),g=this.isLabelAboveCeilLab(this.cmbLab);if(c?(a=!0,this.hideEl(this.flrLab)):(a=!1,this.showEl(this.flrLab)),d?(b=!0,this.hideEl(this.ceilLab)):(b=!1,this.showEl(this.ceilLab)),this.range){var h=this.cmbLabelShown?g:e,i=this.cmbLabelShown?f:c;h?this.hideEl(this.ceilLab):b||this.showEl(this.ceilLab),i?this.hideEl(this.flrLab):a||this.showEl(this.flrLab)}}},isLabelBelowFloorLab:function(a){var b=this.options.rightToLeft,c=a.rzsp,d=a.rzsd,e=this.flrLab.rzsp,f=this.flrLab.rzsd;return b?c+d>=e-2:e+f+2>=c},isLabelAboveCeilLab:function(a){var b=this.options.rightToLeft,c=a.rzsp,d=a.rzsd,e=this.ceilLab.rzsp,f=this.ceilLab.rzsd;return b?e+f+2>=c:c+d>=e-2},updateRestrictionBar:function(){var a=0,b=0;if(this.options.restrictedRange){var c=this.valueToPosition(this.options.restrictedRange.from),d=this.valueToPosition(this.options.restrictedRange.to);b=Math.abs(d-c),a=this.options.rightToLeft?d+this.handleHalfDim:c+this.handleHalfDim,this.setDimension(this.restrictedBar,b),this.setPosition(this.restrictedBar,a)}},updateSelectionBar:function(){var a=0,b=0,c=this.options.rightToLeft?!this.options.showSelectionBarEnd:this.options.showSelectionBarEnd,d=this.options.rightToLeft?this.maxH.rzsp+this.handleHalfDim:this.minH.rzsp+this.handleHalfDim;if(this.range)b=Math.abs(this.maxH.rzsp-this.minH.rzsp),a=d;else if(null!==this.options.showSelectionBarFromValue){var e=this.options.showSelectionBarFromValue,f=this.valueToPosition(e),g=this.options.rightToLeft?this.lowValue<=e:this.lowValue>e;g?(b=this.minH.rzsp-f,a=f+this.handleHalfDim):(b=f-this.minH.rzsp,a=this.minH.rzsp+this.handleHalfDim)}else c?(b=Math.abs(this.maxPos-this.minH.rzsp)+this.handleHalfDim,a=this.minH.rzsp+this.handleHalfDim):(b=this.minH.rzsp+this.handleHalfDim,a=0);if(this.setDimension(this.selBar,b),this.setPosition(this.selBar,a),this.range&&this.options.showOuterSelectionBars&&(this.options.rightToLeft?(this.setDimension(this.rightOutSelBar,a),this.setPosition(this.rightOutSelBar,0),this.setDimension(this.leftOutSelBar,this.getDimension(this.fullBar)-(a+b)),this.setPosition(this.leftOutSelBar,a+b)):(this.setDimension(this.leftOutSelBar,a),this.setPosition(this.leftOutSelBar,0),this.setDimension(this.rightOutSelBar,this.getDimension(this.fullBar)-(a+b)),this.setPosition(this.rightOutSelBar,a+b))),this.options.getSelectionBarColor){var h=this.getSelectionBarColor();this.scope.barStyle={backgroundColor:h}}else if(this.options.selectionBarGradient){var i=null!==this.options.showSelectionBarFromValue?this.valueToPosition(this.options.showSelectionBarFromValue):0,j=i-a>0^c,k=this.options.vertical?j?"bottom":"top":j?"left":"right";this.scope.barStyle={backgroundImage:"linear-gradient(to "+k+", "+this.options.selectionBarGradient.from+" 0%,"+this.options.selectionBarGradient.to+" 100%)"},this.options.vertical?(this.scope.barStyle.backgroundPosition="center "+(i+b+a+(j?-this.handleHalfDim:0))+"px",this.scope.barStyle.backgroundSize="100% "+(this.barDimension-this.handleHalfDim)+"px"):(this.scope.barStyle.backgroundPosition=i-a+(j?this.handleHalfDim:0)+"px center",this.scope.barStyle.backgroundSize=this.barDimension-this.handleHalfDim+"px 100%")}},getSelectionBarColor:function(){return this.range?this.options.getSelectionBarColor(this.scope.rzSliderModel,this.scope.rzSliderHigh):this.options.getSelectionBarColor(this.scope.rzSliderModel)},getPointerColor:function(a){return"max"===a?this.options.getPointerColor(this.scope.rzSliderHigh,a):this.options.getPointerColor(this.scope.rzSliderModel,a)},getTickColor:function(a){return this.options.getTickColor(a)},updateCmbLabel:function(){var a=null;if(a=this.options.rightToLeft?this.minLab.rzsp-this.minLab.rzsd-10<=this.maxLab.rzsp:this.minLab.rzsp+this.minLab.rzsd+10>=this.maxLab.rzsp){var b=this.getDisplayValue(this.lowValue,"model"),c=this.getDisplayValue(this.highValue,"high"),d="";d=this.options.mergeRangeLabelsIfSame&&b===c?b:this.options.rightToLeft?c+this.options.labelOverlapSeparator+b:b+this.options.labelOverlapSeparator+c,this.translateFn(d,this.cmbLab,"cmb",!1);var e=this.options.boundPointerLabels?Math.min(Math.max(this.selBar.rzsp+this.selBar.rzsd/2-this.cmbLab.rzsd/2,0),this.barDimension-this.cmbLab.rzsd):this.selBar.rzsp+this.selBar.rzsd/2-this.cmbLab.rzsd/2;this.setPosition(this.cmbLab,e),this.cmbLabelShown=!0,this.hideEl(this.minLab),this.hideEl(this.maxLab),this.showEl(this.cmbLab)}else this.cmbLabelShown=!1,this.updateHighHandle(this.valueToPosition(this.highValue)),this.updateLowHandle(this.valueToPosition(this.lowValue)),this.showEl(this.maxLab),this.showEl(this.minLab),this.hideEl(this.cmbLab);this.options.autoHideLimitLabels&&this.shFloorCeil()},getDisplayValue:function(a,b){return this.options.stepsArray&&!this.options.bindIndexForStepsArray&&(a=this.getStepValue(a)),this.customTrFn(a,this.options.id,b)},roundStep:function(a,b){var c=b?b:this.step,d=parseFloat((a-this.minValue)/c).toPrecision(12);d=Math.round(+d)*c;var e=(this.minValue+d).toFixed(this.precision);return+e},hideEl:function(a){return a.css({visibility:"hidden"})},showEl:function(a){return a.rzAlwaysHide?a:a.css({visibility:"visible"})},setPosition:function(a,b){a.rzsp=b;var c={};return c[this.positionProperty]=Math.round(b)+"px",a.css(c),b},resetPosition:function(a){a.css({left:null,bottom:null})},getDimension:function(a){var b=a[0].getBoundingClientRect();return this.options.vertical?a.rzsd=(b.bottom-b.top)*this.options.scale:a.rzsd=(b.right-b.left)*this.options.scale,a.rzsd},setDimension:function(a,b){a.rzsd=b;var c={};return c[this.dimensionProperty]=Math.round(b)+"px",a.css(c),b},sanitizeValue:function(a){return Math.min(Math.max(a,this.minValue),this.maxValue)},valueToPosition:function(a){var b=this.linearValueToPosition;this.options.customValueToPosition?b=this.options.customValueToPosition:this.options.logScale&&(b=this.logValueToPosition),a=this.sanitizeValue(a);var c=b(a,this.minValue,this.maxValue)||0;return this.options.rightToLeft&&(c=1-c),c*this.maxPos},linearValueToPosition:function(a,b,c){var d=c-b;return(a-b)/d},logValueToPosition:function(a,b,c){a=Math.log(a),b=Math.log(b),c=Math.log(c);var d=c-b;return(a-b)/d},positionToValue:function(a){var b=a/this.maxPos;this.options.rightToLeft&&(b=1-b);var c=this.linearPositionToValue;return this.options.customPositionToValue?c=this.options.customPositionToValue:this.options.logScale&&(c=this.logPositionToValue),c(b,this.minValue,this.maxValue)||0},linearPositionToValue:function(a,b,c){return a*(c-b)+b},logPositionToValue:function(a,b,c){b=Math.log(b),c=Math.log(c);var d=a*(c-b)+b;return Math.exp(d)},getEventAttr:function(a,b){return void 0===a.originalEvent?a[b]:a.originalEvent[b]},getEventXY:function(a,b){var c=this.options.vertical?"clientY":"clientX";if(void 0!==a[c])return a[c];var d=this.getEventAttr(a,"touches");if(void 0!==b)for(var e=0;e<d.length;e++)if(d[e].identifier===b)return d[e][c];return d[0][c]},getEventPosition:function(a,b){var c=this.sliderElem.rzsp,d=0;return d=this.options.vertical?-this.getEventXY(a,b)+c:this.getEventXY(a,b)-c,d*this.options.scale-this.handleHalfDim},getEventNames:function(a){var b={moveEvent:"",endEvent:""};return this.getEventAttr(a,"touches")?(b.moveEvent="touchmove",b.endEvent="touchend"):(b.moveEvent="mousemove",b.endEvent="mouseup"),b},getNearestHandle:function(a){if(!this.range)return this.minH;var b=this.getEventPosition(a),c=Math.abs(b-this.minH.rzsp),d=Math.abs(b-this.maxH.rzsp);return d>c?this.minH:c>d?this.maxH:this.options.rightToLeft?b>this.minH.rzsp?this.minH:this.maxH:b<this.minH.rzsp?this.minH:this.maxH},focusElement:function(a){var b=0;a[b].focus()},bindEvents:function(){var b,c,d;this.options.draggableRange?(b="rzSliderDrag",c=this.onDragStart,d=this.onDragMove):(b="lowValue",c=this.onStart,d=this.onMove),this.options.onlyBindHandles||(this.selBar.on("mousedown",a.bind(this,c,null,b)),this.selBar.on("mousedown",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("mousedown",a.bind(this,c,null,b)),this.maxH.on("mousedown",a.bind(this,c,null,b))):(this.minH.on("mousedown",a.bind(this,this.onStart,this.minH,"lowValue")),this.range&&this.maxH.on("mousedown",a.bind(this,this.onStart,this.maxH,"highValue")),this.options.onlyBindHandles||(this.fullBar.on("mousedown",a.bind(this,this.onStart,null,null)),this.fullBar.on("mousedown",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("mousedown",a.bind(this,this.onStart,null,null)),this.ticks.on("mousedown",a.bind(this,this.onTickClick,this.ticks)))),this.options.onlyBindHandles||(this.selBar.on("touchstart",a.bind(this,c,null,b)),this.selBar.on("touchstart",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("touchstart",a.bind(this,c,null,b)),this.maxH.on("touchstart",a.bind(this,c,null,b))):(this.minH.on("touchstart",a.bind(this,this.onStart,this.minH,"lowValue")),this.range&&this.maxH.on("touchstart",a.bind(this,this.onStart,this.maxH,"highValue")),this.options.onlyBindHandles||(this.fullBar.on("touchstart",a.bind(this,this.onStart,null,null)),this.fullBar.on("touchstart",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("touchstart",a.bind(this,this.onStart,null,null)),this.ticks.on("touchstart",a.bind(this,this.onTickClick,this.ticks)))),this.options.keyboardSupport&&(this.minH.on("focus",a.bind(this,this.onPointerFocus,this.minH,"lowValue")),this.range&&this.maxH.on("focus",a.bind(this,this.onPointerFocus,this.maxH,"highValue")))},unbindEvents:function(){this.minH.off(),this.maxH.off(),this.fullBar.off(),this.selBar.off(),this.ticks.off()},onStart:function(b,d,e){var f,g,h=this.getEventNames(e);e.stopPropagation(),e.preventDefault(),this.calcViewDimensions(),b?this.tracking=d:(b=this.getNearestHandle(e),this.tracking=b===this.minH?"lowValue":"highValue"),b.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(b),f=a.bind(this,this.dragging.active?this.onDragMove:this.onMove,b),g=a.bind(this,this.onEnd,f),c.on(h.moveEvent,f),c.on(h.endEvent,g),this.endHandlerToBeRemovedOnEnd=g,this.callOnStart();var i=this.getEventAttr(e,"changedTouches");i&&(this.touchId||(this.isDragging=!0,this.touchId=i[0].identifier))},onMove:function(b,c,d){this.options.disableAnimation||this.moving&&this.sliderElem.addClass("noanimate"),this.moving=!0;var e,f=this.getEventAttr(c,"changedTouches");if(f)for(var g=0;g<f.length;g++)if(f[g].identifier===this.touchId){e=f[g];break}if(!f||e){var h,i=this.getEventPosition(c,e?e.identifier:void 0),j=this.options.rightToLeft?this.minValue:this.maxValue,k=this.options.rightToLeft?this.maxValue:this.minValue;0>=i?h=k:i>=this.maxPos?h=j:(h=this.positionToValue(i),h=d&&a.isNumber(this.options.showTicks)?this.roundStep(h,this.options.showTicks):this.roundStep(h)),this.positionTrackingHandle(h)}},onEnd:function(a,b){this.moving=!1,this.options.disableAnimation||this.sliderElem.removeClass("noanimate");var d=this.getEventAttr(b,"changedTouches");if(!d||d[0].identifier===this.touchId){this.isDragging=!1,this.touchId=null,this.options.keyboardSupport||(this.minH.removeClass("rz-active"),this.maxH.removeClass("rz-active"),this.tracking=""),this.dragging.active=!1;var e=this.getEventNames(b);c.off(e.moveEvent,a),c.off(e.endEvent,this.endHandlerToBeRemovedOnEnd),this.endHandlerToBeRemovedOnEnd=null,this.callOnEnd()}},onTickClick:function(a,b){this.onMove(a,b,!0)},onPointerFocus:function(b,c){this.tracking=c,b.one("blur",a.bind(this,this.onPointerBlur,b)),b.on("keydown",a.bind(this,this.onKeyboardEvent)),b.on("keyup",a.bind(this,this.onKeyUp)),this.firstKeyDown=!0,b.addClass("rz-active"),this.currentFocusElement={pointer:b,ref:c}},onKeyUp:function(){this.firstKeyDown=!0,this.callOnEnd()},onPointerBlur:function(a){a.off("keydown"),a.off("keyup"),a.removeClass("rz-active"),this.isDragging||(this.tracking="",this.currentFocusElement=null)},getKeyActions:function(a){var b=a+this.step,c=a-this.step,d=a+this.valueRange/10,e=a-this.valueRange/10;this.options.reversedControls&&(b=a-this.step,c=a+this.step,d=a-this.valueRange/10,e=a+this.valueRange/10);var f={UP:b,DOWN:c,LEFT:c,RIGHT:b,PAGEUP:d,PAGEDOWN:e,HOME:this.options.reversedControls?this.maxValue:this.minValue,END:this.options.reversedControls?this.minValue:this.maxValue};return this.options.rightToLeft&&(f.LEFT=b,f.RIGHT=c,this.options.vertical&&(f.UP=c,f.DOWN=b)),f},onKeyboardEvent:function(a){var c=this[this.tracking],d=a.keyCode||a.which,e={38:"UP",40:"DOWN",37:"LEFT",39:"RIGHT",33:"PAGEUP",34:"PAGEDOWN",36:"HOME",35:"END"},f=this.getKeyActions(c),g=e[d],h=f[g];if(null!=h&&""!==this.tracking){a.preventDefault(),this.firstKeyDown&&(this.firstKeyDown=!1,this.callOnStart());var i=this;b(function(){var a=i.roundStep(i.sanitizeValue(h));if(i.options.draggableRangeOnly){var b,c,d=i.highValue-i.lowValue;"lowValue"===i.tracking?(b=a,c=a+d,c>i.maxValue&&(c=i.maxValue,b=c-d)):(c=a,b=a-d,b<i.minValue&&(b=i.minValue,c=b+d)),i.positionTrackingBar(b,c)}else i.positionTrackingHandle(a)})}},onDragStart:function(a,b,c){var d=this.getEventPosition(c);this.dragging={active:!0,value:this.positionToValue(d),difference:this.highValue-this.lowValue,lowLimit:this.options.rightToLeft?this.minH.rzsp-d:d-this.minH.rzsp,highLimit:this.options.rightToLeft?d-this.maxH.rzsp:this.maxH.rzsp-d},this.onStart(a,b,c)},getValue:function(a,b,c,d){var e=this.options.rightToLeft,f=null;return f="min"===a?c?d?e?this.minValue:this.maxValue-this.dragging.difference:e?this.maxValue-this.dragging.difference:this.minValue:e?this.positionToValue(b+this.dragging.lowLimit):this.positionToValue(b-this.dragging.lowLimit):c?d?e?this.minValue+this.dragging.difference:this.maxValue:e?this.maxValue:this.minValue+this.dragging.difference:e?this.positionToValue(b+this.dragging.lowLimit)+this.dragging.difference:this.positionToValue(b-this.dragging.lowLimit)+this.dragging.difference,this.roundStep(f)},onDragMove:function(a,b){this.options.disableAnimation||this.moving&&this.sliderElem.addClass("noanimate"),this.moving=!0;var c,d,e,f,g,h,i,j,k=this.getEventPosition(b);if(this.options.rightToLeft?(e=this.dragging.lowLimit,f=this.dragging.highLimit,i=this.maxH,j=this.minH):(e=this.dragging.highLimit,f=this.dragging.lowLimit,i=this.minH,j=this.maxH),g=f>=k,h=k>=this.maxPos-e,g){if(0===i.rzsp)return;c=this.getValue("min",k,!0,!1),d=this.getValue("max",k,!0,!1)}else if(h){if(j.rzsp===this.maxPos)return;d=this.getValue("max",k,!0,!0),c=this.getValue("min",k,!0,!0)}else c=this.getValue("min",k,!1),d=this.getValue("max",k,!1);this.positionTrackingBar(c,d)},positionTrackingBar:function(a,b){null!=this.options.minLimit&&a<this.options.minLimit&&(a=this.options.minLimit,b=a+this.dragging.difference),null!=this.options.maxLimit&&b>this.options.maxLimit&&(b=this.options.maxLimit,a=b-this.dragging.difference),
this.lowValue=a,this.highValue=b,this.applyLowValue(),this.range&&this.applyHighValue(),this.applyModel(!0),this.updateHandles("lowValue",this.valueToPosition(a)),this.updateHandles("highValue",this.valueToPosition(b))},positionTrackingHandle:function(a){var b=!1;a=this.applyMinMaxLimit(a),a=this.applyRestrictedRange(a),this.range&&(this.options.pushRange?(a=this.applyPushRange(a),b=!0):(this.options.noSwitching&&("lowValue"===this.tracking&&a>this.highValue?a=this.applyMinMaxRange(this.highValue):"highValue"===this.tracking&&a<this.lowValue&&(a=this.applyMinMaxRange(this.lowValue))),a=this.applyMinMaxRange(a),"lowValue"===this.tracking&&a>this.highValue?(this.lowValue=this.highValue,this.applyLowValue(),this.applyModel(),this.updateHandles(this.tracking,this.maxH.rzsp),this.updateAriaAttributes(),this.tracking="highValue",this.minH.removeClass("rz-active"),this.maxH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.maxH),b=!0):"highValue"===this.tracking&&a<this.lowValue&&(this.highValue=this.lowValue,this.applyHighValue(),this.applyModel(),this.updateHandles(this.tracking,this.minH.rzsp),this.updateAriaAttributes(),this.tracking="lowValue",this.maxH.removeClass("rz-active"),this.minH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.minH),b=!0))),this[this.tracking]!==a&&(this[this.tracking]=a,"lowValue"===this.tracking?this.applyLowValue():this.applyHighValue(),this.applyModel(),this.updateHandles(this.tracking,this.valueToPosition(a)),this.updateAriaAttributes(),b=!0),b&&this.applyModel(!0)},applyMinMaxLimit:function(a){return null!=this.options.minLimit&&a<this.options.minLimit?this.options.minLimit:null!=this.options.maxLimit&&a>this.options.maxLimit?this.options.maxLimit:a},applyMinMaxRange:function(a){var b="lowValue"===this.tracking?this.highValue:this.lowValue,c=Math.abs(a-b);return null!=this.options.minRange&&c<this.options.minRange?"lowValue"===this.tracking?this.highValue-this.options.minRange:this.lowValue+this.options.minRange:null!=this.options.maxRange&&c>this.options.maxRange?"lowValue"===this.tracking?this.highValue-this.options.maxRange:this.lowValue+this.options.maxRange:a},applyRestrictedRange:function(a){if(null!=this.options.restrictedRange&&a>this.options.restrictedRange.from&&a<this.options.restrictedRange.to){var b=(this.options.restrictedRange.to-this.options.restrictedRange.from)/2;if("lowValue"===this.tracking)return a>this.options.restrictedRange.from+b?this.options.restrictedRange.to:this.options.restrictedRange.from;if("highValue"===this.tracking)return a<this.options.restrictedRange.to-b?this.options.restrictedRange.from:this.options.restrictedRange.to}return a},applyPushRange:function(a){var b="lowValue"===this.tracking?this.highValue-a:a-this.lowValue,c=null!==this.options.minRange?this.options.minRange:this.options.step,d=this.options.maxRange;return c>b?("lowValue"===this.tracking?(this.highValue=Math.min(a+c,this.maxValue),a=this.highValue-c,this.applyHighValue(),this.updateHandles("highValue",this.valueToPosition(this.highValue))):(this.lowValue=Math.max(a-c,this.minValue),a=this.lowValue+c,this.applyLowValue(),this.updateHandles("lowValue",this.valueToPosition(this.lowValue))),this.updateAriaAttributes()):null!==d&&b>d&&("lowValue"===this.tracking?(this.highValue=a+d,this.applyHighValue(),this.updateHandles("highValue",this.valueToPosition(this.highValue))):(this.lowValue=a-d,this.applyLowValue(),this.updateHandles("lowValue",this.valueToPosition(this.lowValue))),this.updateAriaAttributes()),a},applyModel:function(a){this.internalChange=!0,this.scope.$apply(),a&&this.callOnChange(),this.internalChange=!1},callOnStart:function(){if(this.options.onStart){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onStart(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}},callOnChange:function(){if(this.options.onChange){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onChange(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}},callOnEnd:function(){if(this.options.onEnd){var a=this,b="lowValue"===this.tracking?"min":"max";this.scope.$evalAsync(function(){a.options.onEnd(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh,b)})}this.scope.$emit("slideEnded")}},h}]).directive("rzslider",["RzSlider",function(a){return{restrict:"AE",replace:!0,scope:{rzSliderModel:"=?",rzSliderHigh:"=?",rzSliderOptions:"&?",rzSliderTplUrl:"@"},templateUrl:function(a,b){return b.rzSliderTplUrl||"rzSliderTpl.html"},link:function(b,c){b.slider=new a(b,c)}}}]);return b.run(["$templateCache",function(a){a.put("rzSliderTpl.html",'<div class=rzslider><span class="rz-bar-wrapper rz-left-out-selection"><span class=rz-bar></span></span> <span class="rz-bar-wrapper rz-right-out-selection"><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class="rz-bar rz-selection" ng-style=barStyle></span></span> <span class=rz-bar-wrapper><span class="rz-bar rz-restricted" ng-style=restrictionStyle></span></span> <span class="rz-pointer rz-pointer-min" ng-style=minPointerStyle></span> <span class="rz-pointer rz-pointer-max" ng-style=maxPointerStyle></span> <span class="rz-bubble rz-limit rz-floor"></span> <span class="rz-bubble rz-limit rz-ceil"></span> <span class="rz-bubble rz-model-value"></span> <span class="rz-bubble rz-model-high"></span> <span class=rz-bubble></span><ul ng-show=showTicks class=rz-ticks><li ng-repeat="t in ticks track by $index" class=rz-tick ng-class="{\'rz-selected\': t.selected}" ng-style=t.style ng-attr-uib-tooltip="{{ t.tooltip }}" ng-attr-tooltip-placement={{t.tooltipPlacement}} ng-attr-tooltip-append-to-body="{{ t.tooltip ? true : undefined}}"><span ng-if="t.value != null" class=rz-tick-value ng-attr-uib-tooltip="{{ t.valueTooltip }}" ng-attr-tooltip-placement={{t.valueTooltipPlacement}}>{{ t.value }}</span> <span ng-if="t.legend != null" class=rz-tick-legend>{{ t.legend }}</span></li></ul></div>')}]),b.name});
/*!
 * angular-slick-carousel
 * DevMark <hc.devmark@gmail.com>
 * https://github.com/devmark/angular-slick-carousel
 * Version: 3.1.7 - 2016-08-04T06:43:29.508Z
 * License: MIT
 */
"use strict";angular.module("slickCarousel",[]).constant("slickCarouselConfig",{method:{},event:{}}).directive("slick",["$timeout","slickCarouselConfig",function(e,n){var i,t;return i=["slickGoTo","slickNext","slickPrev","slickPause","slickPlay","slickAdd","slickRemove","slickFilter","slickUnfilter","unslick"],t=["afterChange","beforeChange","breakpoint","destroy","edge","init","reInit","setPosition","swipe","lazyLoaded","lazyLoadError"],{scope:{settings:"=",enabled:"@",accessibility:"@",adaptiveHeight:"@",autoplay:"@",autoplaySpeed:"@",arrows:"@",asNavFor:"@",appendArrows:"@",prevArrow:"@",nextArrow:"@",centerMode:"@",centerPadding:"@",cssEase:"@",customPaging:"&",dots:"@",draggable:"@",fade:"@",focusOnSelect:"@",easing:"@",edgeFriction:"@",infinite:"@",initialSlide:"@",lazyLoad:"@",mobileFirst:"@",pauseOnHover:"@",pauseOnDotsHover:"@",respondTo:"@",responsive:"=?",rows:"@",slide:"@",slidesPerRow:"@",slidesToShow:"@",slidesToScroll:"@",speed:"@",swipe:"@",swipeToSlide:"@",touchMove:"@",touchThreshold:"@",useCSS:"@",variableWidth:"@",vertical:"@",verticalSwiping:"@",rtl:"@"},restrict:"AE",link:function(t,o,a){angular.element(o).css("display","none");var r,s,l,d,u,c;return s=function(){r=angular.extend(angular.copy(n),{enabled:"false"!==t.enabled,accessibility:"false"!==t.accessibility,adaptiveHeight:"true"===t.adaptiveHeight,autoplay:"true"===t.autoplay,autoplaySpeed:null!=t.autoplaySpeed?parseInt(t.autoplaySpeed,10):3e3,arrows:"false"!==t.arrows,asNavFor:t.asNavFor?t.asNavFor:void 0,appendArrows:angular.element(t.appendArrows?t.appendArrows:o),prevArrow:t.prevArrow?angular.element(t.prevArrow):void 0,nextArrow:t.nextArrow?angular.element(t.nextArrow):void 0,centerMode:"true"===t.centerMode,centerPadding:t.centerPadding||"50px",cssEase:t.cssEase||"ease",customPaging:a.customPaging?function(e,n){return t.customPaging({slick:e,index:n})}:void 0,dots:"true"===t.dots,draggable:"false"!==t.draggable,fade:"true"===t.fade,focusOnSelect:"true"===t.focusOnSelect,easing:t.easing||"linear",edgeFriction:t.edgeFriction||.15,infinite:"false"!==t.infinite,initialSlide:parseInt(t.initialSlide)||0,lazyLoad:t.lazyLoad||"ondemand",mobileFirst:"true"===t.mobileFirst,pauseOnHover:"false"!==t.pauseOnHover,pauseOnDotsHover:"true"===t.pauseOnDotsHover,respondTo:null!=t.respondTo?t.respondTo:"window",responsive:t.responsive||void 0,rows:null!=t.rows?parseInt(t.rows,10):1,slide:t.slide||"",slidesPerRow:null!=t.slidesPerRow?parseInt(t.slidesPerRow,10):1,slidesToShow:null!=t.slidesToShow?parseInt(t.slidesToShow,10):1,slidesToScroll:null!=t.slidesToScroll?parseInt(t.slidesToScroll,10):1,speed:null!=t.speed?parseInt(t.speed,10):300,swipe:"false"!==t.swipe,swipeToSlide:"true"===t.swipeToSlide,touchMove:"false"!==t.touchMove,touchThreshold:t.touchThreshold?parseInt(t.touchThreshold,10):5,useCSS:"false"!==t.useCSS,variableWidth:"true"===t.variableWidth,vertical:"true"===t.vertical,verticalSwiping:"true"===t.verticalSwiping,rtl:"true"===t.rtl},t.settings)},l=function(){var e=angular.element(o);return e.hasClass("slick-initialized")&&(e.remove("slick-list"),e.slick("unslick")),e},d=function(){s();var n=angular.element(o);if(angular.element(o).hasClass("slick-initialized")){if(r.enabled)return n.slick("getSlick");l()}else{if(!r.enabled)return;n.on("init",function(e,n){return"undefined"!=typeof r.event.init&&r.event.init(e,n),"undefined"!=typeof c?n.slideHandler(c):void 0}),e(function(){angular.element(o).css("display","block"),n.not(".slick-initialized").slick(r)})}t.internalControl=r.method||{},i.forEach(function(e){t.internalControl[e]=function(){var i;i=Array.prototype.slice.call(arguments),i.unshift(e),n.slick.apply(o,i)}}),n.on("afterChange",function(n,i,o){c=o,"undefined"!=typeof r.event.afterChange&&e(function(){t.$apply(function(){r.event.afterChange(n,i,o)})})}),n.on("beforeChange",function(n,i,o,a){"undefined"!=typeof r.event.beforeChange&&e(function(){e(function(){t.$apply(function(){r.event.beforeChange(n,i,o,a)})})})}),n.on("reInit",function(n,i){"undefined"!=typeof r.event.reInit&&e(function(){t.$apply(function(){r.event.reInit(n,i)})})}),"undefined"!=typeof r.event.breakpoint&&n.on("breakpoint",function(n,i,o){e(function(){t.$apply(function(){r.event.breakpoint(n,i,o)})})}),"undefined"!=typeof r.event.destroy&&n.on("destroy",function(n,i){e(function(){t.$apply(function(){r.event.destroy(n,i)})})}),"undefined"!=typeof r.event.edge&&n.on("edge",function(n,i,o){e(function(){t.$apply(function(){r.event.edge(n,i,o)})})}),"undefined"!=typeof r.event.setPosition&&n.on("setPosition",function(n,i){e(function(){t.$apply(function(){r.event.setPosition(n,i)})})}),"undefined"!=typeof r.event.swipe&&n.on("swipe",function(n,i,o){e(function(){t.$apply(function(){r.event.swipe(n,i,o)})})}),"undefined"!=typeof r.event.lazyLoaded&&n.on("lazyLoaded",function(n,i,o,a){e(function(){t.$apply(function(){r.event.lazyLoaded(n,i,o,a)})})}),"undefined"!=typeof r.event.lazyLoadError&&n.on("lazyLoadError",function(n,i,o,a){e(function(){t.$apply(function(){r.event.lazyLoadError(n,i,o,a)})})})},u=function(){l(),d()},o.one("$destroy",function(){l()}),t.$watch("settings",function(e,n){return null!==e?u():void 0},!0)}}}]);
(function(){
    'use strict';

    var app = angular.module('eloan', [
        'ngSanitize',
        // 'angular-lodash',
        'pascalprecht.translate',
        // 'angularMoment',
        'ngRoute',
        'rzSlider',
        'slickCarousel',
    ]);
})();

(function(){
    'use strict';

    var app = angular.module('eloan');

    app.config(function ($translateProvider) {
        $translateProvider
        .useStaticFilesLoader({
            prefix: 'dist/locales/',
            suffix: '.json'
        }) 
        // remove the warning from console log by putting the sanitize strategy
        .useSanitizeValueStrategy('sanitizeParameters')    
        .preferredLanguage('bn');
    });


    // app.config(['$translateProvider', function($translateProvider){
    //     //Set up the angular-translate plugin
    //     // $translateProvider.useSanitizeValueStrategy('sanitize');

    //     $translateProvider.useStaticFilesLoader({
    //         prefix: window.CONFIG.STATIC_URL + 'locales/',
    //         suffix: '.json'
    //     });
    //     // $translateProvider.preferredLanguage(window.CONFIG.LANGUAGE);
    //     $translateProvider.preferredLanguage('bn');
    //     $translateProvider.useSanitizeValueStrategy('escape');
    // }]);


    // app.config(['$httpProvider', function($httpProvider) {
    //     $httpProvider.defaults.useXDomain = true;
    //     $httpProvider.defaults.withCredentials = true;
    //     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    // }]);

    // app.config(function($rootScopeProvider){
    //     $rootScopeProvider.digestTtl(14);
    // });
})();

(function(){
    'use strict';

    var app = angular.module('eloan');

    app.run(['$rootScope', function($rootScope) {
        $rootScope.lang = 'bn';
    }]);


    // Set some basic stuff in $rootScope so that they can be accessed globally
    // app.run(/* @ngInject */ ['$rootScope', '$state', '$stateParams', '$location', 'amMoment', '$log', function($rootScope, $state, $stateParams, $location, amMoment, $log) {
    //     $rootScope.location = $location;
    //     $rootScope.$state = $state;
    //     $rootScope.$stateParams = $stateParams;

    //     amMoment.changeLocale(window.CONFIG.LANGUAGE);

    //     $rootScope.$on('$stateChangeStart', function(evt, to, params) {
    //         if (to.redirectTo) {
    //             evt.preventDefault();
    //             $state.go(to.redirectTo, params, {location: 'replace'});
    //         }
    //     });

    // }]);


    // // Scroll to top when a state changes
    // app.run(/* @ngInject */ ['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
    //     $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    //         $location.hash();
    //         $anchorScroll();
    //     });
    // }]);

})();


angular.module('eloan').run(['$templateCache', function($templateCache) {$templateCache.put('/404.html','<div class="main-container">\n    <div class="illustration"></div>\n    <div class="empty-elements">\n        <h3>\u09EA\u09E6\u09EA</h3>\n        <p>\u09AF\u09C7 \u09AA\u09C7\u099C\u099F\u09BE \u0996\u09C1\u099C\u099B\u09C7\u09A8 \u09B8\u09C7\u099F\u09BE \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964</p>\n    </div>\n</div>\n');
$templateCache.put('/documents.html','<!-- questions -->\n<section class="questions">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h2 class="text-center">\n            \u099C\u09C7\u09A8\u09C7 \u09A8\u09BF\u09A8 \u0986\u09AA\u09A8\u09BF \u0987\u09B2\u09CB\u09A8 \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09AF\u09CB\u0997\u09CD\u09AF \u0995\u09BF \u09A8\u09BE\n        </h2>\n    </div>\n    </div>\n\n    <!-- box -->\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <div class="survey-box">\n        <div class="box-head">\n            <div class="col-md-6 offset-md-3">\n            \n            <div class="row progress-numbers">\n                <div class="col text-center">\u09E7</div>\n                <div class="col text-center">\u09E8</div>\n                <div class="col text-center">\u09E9</div>\n                <div class="col text-center">\u09EA</div>\n                <div class="col text-center">\u09EB</div>\n            </div>\n\n            <div class="row">\n                <div class="col">\n                <!-- progress bar -->\n                <div class="progress">\n                    <div\n                        class="progress-bar"\n                        role="progressbar"\n                        aria-valuenow="73"\n                        aria-valuemin="0"\n                        aria-valuemax="100"\n                        style="width: 18%;"\n                    >\n                    <span class="sr-only">20% Complete</span>\n                    </div>\n                </div>\n                <!-- /progress bar -->\n                </div>\n            </div>\n\n            </div>\n        </div>\n        <div class="box-body">\n            <div class="row">\n            <div class="col-md-7 text-center">\n                <p>\n                    \u0986\u09AE\u09BE\u09B0 \u09AC\u09AF\u09BC\u09B8 \u09E7\u09EE \u098F\u09B0 \u09AC\u09C7\u09B6\u09BF?\n                </p>\n            </div>\n            <div class="col-md-5">\n                <button type="button" class="btn btn-secondary">no</button>\n                <button type="button" class="btn btn-primary">yes</button>\n            </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n    </div>\n    <!-- /box -->\n\n</div>\n</section>\n<!-- /questions -->\n\n');
$templateCache.put('/index.html','<!-- main hero slider -->\n<section class="hero-slider">\n    <div class="container">\n        <div class="row">\n        <div class="col-xs-12 col-sm-8 col-md-6 col-lg-6">\n            <h1>\n                \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u09AC\u09AA\u09CD\u09A8, \u0986\u09B0 \u0995\u09C7\u0989 \u09A8\u09BE<br>\n                \u09AC\u09C1\u099D\u09B2\u09C7\u0993, \u0986\u09AE\u09B0\u09BE \u09AC\u09C1\u099D\u09BF!\n            </h1>\n            <p>\n                \u098F\u0995\u099F\u09C1\u0996\u09BE\u09A8\u09BF \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF, \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u0995\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AF\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09AC\u09B9\u09C1\u09A6\u09C2\u09B0\u0964 \u09A4\u09BE\u0987 <br>\n                \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u09AC\u09AA\u09CD\u09A8\u09AA\u09C2\u09B0\u09A3\u09C7\u09B0 \u09AF\u09BE\u09A4\u09CD\u09B0\u09BE\u09AF\u09BC \u0986\u09B0\u09CD\u09A5\u09BF\u0995 \u09B8\u09B9\u09AF\u09CB\u0997\u09BF\u09A4\u09BE\u09AF\u09BC \u0987-\u09B2\u09CB\u09A8\u0964*\n            </p>\n            <a href="https://play.google.com/store/apps/details?id=com.shopup.eloan">\n                <img src="img/google-play.png" srcset="\n                    img/google-play.png 1x,\n                    img/google-play@2x.png 2x,\n                    img/google-play@3x.png 3x\n                " alt="Google Play">\n            </a>\n        </div>\n        </div>\n    </div>\n</section>\n<!-- /main hero slider -->\n\n<!-- features -->\n<section class="features">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-md-12">\n        <h2 class="text-center">\n            \u09E8\u09EB \u09B9\u09BE\u099C\u09BE\u09B0\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF \u0989\u09A6\u09CD\u09AF\u09CB\u0995\u09CD\u09A4\u09BE\u09A6\u09C7\u09B0 \u09AA\u09BE\u09B6\u09C7 \u09AC\u09A8\u09CD\u09A7\u09C1 \u09B9\u09DF\u09C7 \u0986\u099B\u09C7 \u09B6\u09AA\u0986\u09AA\n        </h2>\n    </div>\n    <div class="col-6 col-sm-3 col-md-3 col-lg-3 entry">\n        <div class="text-center">\n        <img src="img/people.png" srcset="\n            img/people.png 1x,\n            img/people@2x.png 2x,\n            img/people@3x.png 3x\n        " alt="people">\n        </div>\n        <p class="text-center">\n            \u0995\u09CD\u09B7\u09C1\u09A6\u09CD\u09B0 \u0989\u09A6\u09CD\u09AF\u09CB\u0995\u09CD\u09A4\u09BE\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\n        </p>\n    </div>\n    <div class="col-6 col-sm-3 col-md-3 col-lg-3 entry">\n        <div class="text-center">\n        <img src="img/phones.png" srcset="\n            img/phones.png 1x,\n            img/phones@2x.png 2x,\n            img/phones@3x.png 3x\n        " alt="phones">\n        </div>\n        <p class="text-center">\n            \u0985\u09A8\u09B2\u09BE\u0987\u09A8\u09C7 \u09B8\u09B9\u099C<br>\n            \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8\n        </p>\n    </div>\n    <div class="col-6 col-sm-3 col-md-3 col-lg-3 entry">\n        <div class="text-center">\n        <img src="img/payment.png" srcset="\n            img/payment.png 1x,\n            img/payment@2x.png 2x,\n            img/payment@3x.png 3x\n        " alt="payment">\n        </div>\n        <p class="text-center mod">\n            \u09E9 \u09B2\u0995\u09CD\u09B7 \u099F\u09BE\u0995\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4\n        </p>\n    </div>\n    <div class="col-6 col-sm-3 col-md-3 col-lg-3 entry">\n        <div class="text-center">\n        <img src="img/24hrs.png" srcset="\n            img/24hrs.png 1x,\n            img/24hrs@2x.png 2x,\n            img/24hrs@3x.png 3x\n        " alt="24hrs">\n        </div>\n        <p class="text-center mod">\n            \u09E8\u09EA \u0998\u09A8\u09CD\u099F\u09BE\u09AF\u09BC \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u09BF\u0982\n        </p>\n    </div>\n    </div>\n</div>\n</section>\n<!-- /features -->\n\n<!-- recommendations -->\n<section class="recommendations">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h2 class="text-center">\n            \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B9\u09BE\u09A4 \u09A7\u09B0\u09C7 \u09AC\u09C7\u09DC\u09C7 \u0989\u09A0\u099B\u09C7 \u09B9\u09BE\u099C\u09BE\u09B0\u09CB \u09B8\u09CD\u09AC\u09AA\u09CD\u09A8- \u099A\u09B2\u09C1\u09A8 \u09B6\u09C1\u09A8\u09C7 \u09A8\u09C7\u0987 \u09A4\u09BE\u09A6\u09C7\u09B0 \u0995\u09A5\u09BE\n        </h2>\n    </div>\n    </div>\n\n    <!-- slider -->\n    <div class="slider">\n    <slick infinite=true slides-to-show=3 slides-to-scroll=1 autoplay=true>\n        <!-- Da Ching Ching, Finery -->\n        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">\n            <div class="image-holder">\n            <img src="img/slide1.png" srcset="\n                img/slide1.png 1x,\n                img/slide1@2x.png 2x,\n                img/slide1@3x.png 3x,\n            " alt="Da Ching Ching, Finery">\n            </div>\n            <div class="text-holder">\n            <div class="tag">\n                Da Ching Ching, Finery\n            </div>\n            <p>\n                \u09AE\u09C7\u09AF\u09BC\u09C7\u0995\u09C7 \u0995\u09CB\u09B2\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09B0\u09CB \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09BF\u0964 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u098F\u09A4\u09CB \u09B8\u09CB\u099C\u09BE \u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09CB?\n            </p>\n            </div>\n        </div>\n        <!-- /Da Ching Ching, Finery -->\n\n        <!-- Dee Ba, Suchi Shoili -->\n        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">\n            <div class="image-holder">\n            <img src="img/slide2.png" srcset="\n                img/slide2.png 1x,\n                img/slide2@2x.png 2x,\n                img/slide2@3x.png 3x,\n            " alt="Dee Ba, Suchi Shoili">\n            </div>\n            <div class="text-holder">\n            <div class="tag">\n                Dee Ba, Suchi Shoili\n            </div>\n            <p>\n                \u09AE\u09C7\u09AF\u09BC\u09C7\u0995\u09C7 \u0995\u09CB\u09B2\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09B0\u09CB \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09BF\u0964 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u098F\u09A4\u09CB \u09B8\u09CB\u099C\u09BE \u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09CB?\n            </p>\n            </div>\n        </div>\n        <!-- /Dee Ba, Suchi Shoili -->\n\n        <!-- Faysal Islam, BEAUTIV -->\n        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">\n            <div class="image-holder">\n            <img src="img/slide3.png" srcset="\n                img/slide3.png 1x,\n                img/slide3@2x.png 2x,\n                img/slide3@3x.png 3x,\n            " alt="Faysal Islam, BEAUTIV">\n            </div>\n            <div class="text-holder">\n            <div class="tag">\n                Faysal Islam, BEAUTIV\n            </div>\n            <p>\n                \u09AE\u09C7\u09AF\u09BC\u09C7\u0995\u09C7 \u0995\u09CB\u09B2\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09B0\u09CB \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09BF\u0964 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u098F\u09A4\u09CB \u09B8\u09CB\u099C\u09BE \u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09CB?\n            </p>\n            </div>\n        </div>\n        <!-- /Faysal Islam, BEAUTIV -->\n\n        <!-- Dee Ba, Suchi Shoili -->\n        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">\n            <div class="image-holder">\n            <img src="img/slide2.png" srcset="\n                img/slide2.png 1x,\n                img/slide2@2x.png 2x,\n                img/slide2@3x.png 3x,\n            " alt="Dee Ba, Suchi Shoili">\n            </div>\n            <div class="text-holder">\n            <div class="tag">\n                Dee Ba, Suchi Shoili\n            </div>\n            <p>\n                \u09AE\u09C7\u09AF\u09BC\u09C7\u0995\u09C7 \u0995\u09CB\u09B2\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09B0\u09CB \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09BF\u0964 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u098F\u09A4\u09CB \u09B8\u09CB\u099C\u09BE \u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09CB?\n            </p>\n            </div>\n        </div>\n        <!-- /Dee Ba, Suchi Shoili -->\n\n        <!-- Faysal Islam, BEAUTIV -->\n        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">\n            <div class="image-holder">\n            <img src="img/slide3.png" srcset="\n                img/slide3.png 1x,\n                img/slide3@2x.png 2x,\n                img/slide3@3x.png 3x,\n            " alt="Faysal Islam, BEAUTIV">\n            </div>\n            <div class="text-holder">\n            <div class="tag">\n                Faysal Islam, BEAUTIV\n            </div>\n            <p>\n                \u09AE\u09C7\u09AF\u09BC\u09C7\u0995\u09C7 \u0995\u09CB\u09B2\u09C7 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09B0\u09CB \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09BF\u0964 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u098F\u09A4\u09CB \u09B8\u09CB\u099C\u09BE \u0995\u09C7 \u099C\u09BE\u09A8\u09A4\u09CB?\n            </p>\n            </div>\n        </div>\n        <!-- /Faysal Islam, BEAUTIV -->\n    </slick>\n    </div>\n    <!-- /slider -->\n</div>\n</section>\n<!-- /recommendations -->\n\n<!-- loan amount -->\n<section class="loan-amount">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h2 class="text-center ">\n            \u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C1\u09B2\u09C7\u099F\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7 \u099C\u09C7\u09A8\u09C7 \u09A8\u09BF\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B2\u09CB\u09A8 \u098F\u09AE\u09BE\u0989\u09A8\u09CD\u099F\n        </h2>\n    </div>\n    </div>\n\n    <!-- calculator -->\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <div class="calulator-box">\n        <div class="row">\n            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <h3 class="text-center">\n                \u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09BE\u09B8\u09BF\u0995 \u09B8\u09C7\u09B2 \u0995\u09A4? \n            </h3>\n            </div>\n            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <div class="text-center">\n                <div class="select-holder">\n                <select name="monthly-sell" id="sell-selector">\n                    <option>\u09E7\u09E6,\u09E6\u09E6\u09E6 - \u09E7\u09EB,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                    <option>\u09E7\u09EB,\u09E6\u09E6\u09E6 - \u09E8\u09EB,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                    <option>\u09E8\u09EB,\u09E6\u09E6\u09E6 - \u09EA\u09E6,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                    <option>\u09EA\u09E6,\u09E6\u09E6\u09E6 - \u09EC\u09E6,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                    <option>\u09EC\u09E6,\u09E6\u09E6\u09E6 - \u09E7,\u09E6\u09E6,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                    <option>\u09E7,\u09E6\u09E6,\u09E6\u09E6\u09E6 - \u09E9,\u09E6\u09E6,\u09E6\u09E6\u09E6 \u099F\u09BE\u0995\u09BE</option>\n                </select>\n                </div>\n            </div>\n            </div>\n        </div>\n\n        <!-- hr -->\n        <div class="row">\n            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n            <hr>\n            </div>\n        </div>\n        <!-- /hr -->\n\n        <div class="row cal">\n            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <div class="text-center mod mobile-mod">\n                <p>\n                    \u0995\u09A4 \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u099A\u09BE\u09A8?\n                </p>\n                <h3>\n                    \u09F3 {{ loanAmount }}\n                </h3>\n                <div class="slider-holder">\n                <rzslider\n                    rz-slider-model="loanAmount"\n                    rz-slider-options="loanAmountOption"\n                ></rzslider>\n                </div>\n            </div>\n            </div>\n            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <div class="text-center mod mobile-mod">\n                <p>\n                    \u0995\u09A4 \u09A6\u09BF\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A8\u09BF\u09A4\u09C7 \u099A\u09BE\u09A8?\n                </p>\n                <h3>\n                    {{ loanDuration }} \u09AE\u09BE\u09B8\n                </h3>\n                <div class="slider-holder">\n                <rzslider\n                    rz-slider-model="loanDuration"\n                    rz-slider-options="loanDurationOption"\n                ></rzslider>\n                </div>\n            </div>\n            </div>\n        </div>\n\n        <!-- summary -->\n        <div class="summary">\n            <div class="row">\n                <div class="col-4 col-sm-3 col-md-3 col-lg-3 order-2 order-sm-1 text-center l-mod n-mod">\n                <p>\n                    \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE \u09AB\u09BF\n                </p>\n                <h4>\n                    \u09F31,500\n                </h4>\n                </div>\n                <div class="col-4 col-sm-3 col-md-3 col-lg-3 order-3 order-sm-2 text-center n-mod">\n                <p>\n                    \u09AE\u09CB\u099F \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09C7\u09B8\u09CD\u099F\n                </p>\n                <h4>\n                    \u09F31,684\n                </h4>\n                </div>\n                <div class="col-4 col-sm-3 col-md-3 col-lg-3 order-4 order-sm-3 text-center r-mod n-mod">\n                <p>\n                    \u09AE\u09CB\u099F \u09B0\u09BF\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\n                </p>\n                <h4>\n                    \u09F328,684\n                </h4>\n                </div>\n                <div class="col-12 col-sm-3 col-md-3 col-lg-3 order-1 order-sm-4 text-center total">\n                <p>\n                    \u09AE\u09BE\u09B8\u09BF\u0995 \u0987\u09A8\u09B8\u09CD\u099F\u09B2\u09AE\u09C7\u09A8\u09CD\u099F\n                </p>\n                <h4>\n                    \u09F35,736\n                </h4>\n                </div>\n            </div>\n            </div>\n            <!-- /summary -->\n\n            <!-- info -->\n            <div class="row info">\n            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                <div class="text-center">\n                    <span>\n                        <i class="fas fa-exclamation-circle"></i>\n                    </span>\n                    <span>\n                        \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8\u09C0\u09AF\u09BC \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09B2\u09BF\u09B8\u09CD\u099F \'CHECK NOW\' \u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C7 \u09A6\u09C7\u0996\u09C7 \u09A8\u09BF\u09A8\n                    </span>\n                    <button type="button" class="btn btn-primary"\n                        onclick="location.href=\'/#!/documents\'">CHECK NOW</button>\n                </div>\n            </div>\n            </div>\n            <!-- /info -->\n\n        </div>\n    </div>\n    </div>\n    <!-- /calculator -->\n\n</div>\n</section>\n<!-- /loan amount -->\n\n<!-- mobile-steps -->\n<section class="mobile-steps">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h2 class="text-center">\n            \u09A6\u09C7\u0996\u09C7 \u09A8\u09BF\u09A8 \u0995\u09BF\u09AD\u09BE\u09AC\u09C7 \u09B2\u09CB\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u09AA\u09CD\u09B2\u09BE\u0987 \u0995\u09B0\u09AC\u09C7\u09A8\u0964\n        </h2>\n    </div>\n    </div>\n\n    <!-- slider -->\n    <div class="align-items-center">\n    <slick infinite=true slides-to-show=5 slides-to-scroll=2 autoplay=true class="align-items-center">\n    <div class="col">\n        <img src="img/phone1.png" srcset="\n        img/phone1.png 1x,\n        img/phone1@2x.png 2x,\n        img/phone1@3x.png 3x\n        " alt="Play Store">\n    </div>\n    <div class="col">\n        <h6 class="screenshot-label">\u09E7</h6>\n        <p>\n            Google Play \u09B8\u09CD\u099F\u09CB\u09B0<br>\n            \u09A5\u09C7\u0995\u09C7 \u0985\u09CD\u09AF\u09BE\u09AA<br>\n            \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09C1\u09A8\n        </p>\n    </div>\n    <div class="col">\n        <img src="img/phone1.png" srcset="\n        img/phone2.png 1x,\n        img/phone2@2x.png 2x,\n        img/phone2@3x.png 3x\n        " alt="Registration">\n    </div>\n    <div class="col">\n        <h6 class="screenshot-label">\u09E8</h6>\n        <p>\n            \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F<br>\n            \u0995\u09B0\u09C1\u09A8 <br>\n            &nbsp;\n        </p>\n    </div>\n    <div class="col">\n        <img src="img/phone3.png" srcset="\n        img/phone3.png 1x,\n        img/phone3@2x.png 2x,\n        img/phone3@3x.png 3x\n        " alt="loan">\n    </div>\n    <div class="col">\n        <h6 class="screenshot-label">\u09E9</h6>\n        <p>\n            \u09B2\u09CB\u09A8\u09C7\u09B0 \u09B8\u09CD\u099F\u09C7\u099F\u09BE\u09B8 \u09A6\u09C7\u0996\u09C1\u09A8\n        </p>\n    </div>\n\n    <div class="col">\n        <img src="img/phone4.png" srcset="\n        img/phone4.png 1x,\n        img/phone4@2x.png 2x,\n        img/phone4@3x.png 3x\n        " alt="instalment">\n    </div>\n    <div class="col">\n        <h6 class="screenshot-label">\u09EA</h6>\n        <p>\n            \u0987\u09A8\u09B8\u09CD\u099F\u09B2\u09AE\u09C7\u09A8\u09CD\u099F \u098F\u09B0<br>\n            \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3/ \u09A4\u09BE\u09B0\u09BF\u0996 \u09A6\u09C7\u0996\u09C1\u09A8\n        </p>\n    </div>\n\n    <div class="col">\n        <img src="img/phone5.png" srcset="\n        img/phone5.png 1x,\n        img/phone5@2x.png 2x,\n        img/phone5@3x.png 3x\n        " alt="Calculation">\n    </div>\n    <div class="col">\n        <h6 class="screenshot-label">\u09EB</h6>\n        <p>\n            \u0987\u09A8\u09B8\u09CD\u099F\u09B2\u09AE\u09C7\u09A8\u09CD\u099F \u099C\u09AE\u09BE \u09A6\u09BF\u09A8<br>\n            \u09AC\u09CD\u09AF\u09BE\u0982\u0995 \u09AC\u09BE \u09AC\u09BF\u0995\u09BE\u09B6\u09C7\n        </p>\n    </div>\n    </slick>\n    </div>\n    <!-- /slider -->\n</div>\n</section>\n<!-- /mobile-steps -->\n\n<!-- download -->\n<section class="download">\n<div class="row">\n    <div class="col-md-7 offset-md-1">\n    <h3 class="text-center">\n        \u0996\u09C1\u09AC \u09B8\u09B9\u099C\u09C7 \u09AB\u09CB\u09A8 \u09A6\u09BF\u09AF\u09BC\u09C7 \u098F\u09AA\u09CD\u09B2\u09BE\u0987 \u0995\u09B0\u09C1\u09A8 \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A \u09EB \u09B2\u0995\u09CD\u09B7 \u099F\u09BE\u0995\u09BE\n    </h3>\n    </div>\n    <div class="col-md-3">\n    <button type="button" class="btn btn-primary">DOWNLOAD APP</button>\n    </div>\n</div>\n</section>\n<!-- /download -->\n\n<!-- questions -->\n<section class="questions">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h2 class="text-center">\n            \u099C\u09C7\u09A8\u09C7 \u09A8\u09BF\u09A8 \u0986\u09AA\u09A8\u09BF \u0987\u09B2\u09CB\u09A8 \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09AF\u09CB\u0997\u09CD\u09AF \u0995\u09BF \u09A8\u09BE\n        </h2>\n    </div>\n    </div>\n\n    <!-- box -->\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <div class="survey-box">\n        <div class="box-head">\n            <div class="col-md-6 offset-md-3">\n            \n            <div class="row progress-numbers">\n                <div class="col text-center">\u09E7</div>\n                <div class="col text-center">\u09E8</div>\n                <div class="col text-center">\u09E9</div>\n                <div class="col text-center">\u09EA</div>\n                <div class="col text-center">\u09EB</div>\n            </div>\n\n            <div class="row">\n                <div class="col">\n                <!-- progress bar -->\n                <div class="progress">\n                    <div\n                        class="progress-bar"\n                        role="progressbar"\n                        aria-valuenow="73"\n                        aria-valuemin="0"\n                        aria-valuemax="100"\n                        style="width: 18%;"\n                    >\n                    <span class="sr-only">20% Complete</span>\n                    </div>\n                </div>\n                <!-- /progress bar -->\n                </div>\n            </div>\n\n            </div>\n        </div>\n        <div class="box-body">\n            <div class="row">\n            <div class="col-md-7 text-center">\n                <p>\n                    \u0986\u09AE\u09BE\u09B0 \u09AC\u09AF\u09BC\u09B8 \u09E7\u09EE \u098F\u09B0 \u09AC\u09C7\u09B6\u09BF?\n                </p>\n            </div>\n            <div class="col-md-5">\n                <button type="button" class="btn btn-secondary">no</button>\n                <button type="button" class="btn btn-primary">yes</button>\n            </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n    </div>\n    <!-- /box -->\n\n</div>\n</section>\n<!-- /questions -->\n\n<!-- sponsors -->\n<section class="sponsors">\n<div class="container">\n    <div class="row">\n    <div class="col-md-6">\n        <h3>\n        \u09B6\u09AA\u0986\u09AA + \u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\n        </h3>\n        <p>\n        \u09B6\u09AA\u0986\u09AA \u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u0995 \u09AF\u09CC\u09A5\u09AD\u09BE\u09AC\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09C7 \u0986\u09B0\u09CD\u09A5\u09BF\u0995 \u09B8\u09C7\u09AC\u09BE \u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE \u0995\u09B0\u099B\u09C7 \u09B8\u09BE\u09B0\u09BE<br>\n        \u09A6\u09C7\u09B6\u09C7 \u099B\u09CB\u099F \u0989\u09A6\u09CD\u09AF\u09CB\u0995\u09CD\u09A4\u09BE\u09A6\u09C7\u09B0 \u098B\u09A3 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09C7\u0964\n        </p>\n    </div>\n    <div class="col-md-6">\n        <ul class="align-right">\n        <li>\n            <img src="img/brac.png" srcset="\n            img/brac.png 1x,\n            img/brac@2x.png 2x,\n            img/brac@3x.png 3x\n            " alt="BRAC">\n        </li>\n        <li>\n            <img src="img/shopup.png" srcset="\n            img/shopup.png 1x,\n            img/shopup@2x.png 2x,\n            img/shopup@3x.png 3x\n            " alt="ShopUp">\n        </li>\n        </ul>\n    </div>\n    </div>\n</div>\n</section>\n<!-- /sponsors -->\n\n<!-- faq -->\n<section class="faq">\n<div class="container">\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <h3 class="text-center">\n        \u099C\u09C7\u09A8\u09C7 \u09A8\u09BF\u09A8 \u099C\u09B0\u09C1\u09B0\u09C0 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0989\u09A4\u09CD\u09A4\u09B0 \u0997\u09C1\u09B2\u09CB\n        </h3>\n    </div>\n    </div>\n\n    <!-- collapsable -->\n    <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n        <!-- row 1 -->\n        <div class="collapable expanded">\n        <div class="head">\n            <div class="row">\n            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n                \u0987-\u09B2\u09CB\u09A8 \u0995\u09BF?\n            </div>\n            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n                <div class="icon-down">\n                <i class="fas fa-chevron-down"></i>\n                </div>\n                <div class="icon-up">\n                <i class="fas fa-chevron-up"></i>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div class="body">\n            \n            <!-- inner expandable -->\n            <ul class="inner-expandable">\n            <li class="expanded">\n                <div class="header">\n                \u0987-\u09B2\u09CB\u09A8 \u0995\u09BF?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u0985\u09A8\u09C7\u0995 \u09B8\u09AE\u09DF \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u09AD\u09BE\u09B2\u09CB \u099A\u09B2\u09B2\u09C7\u0993, \u09AC\u09CD\u09AF\u09BE\u0999\u09CD\u0995 \u09A5\u09C7\u0995\u09C7 \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u09A6\u09C7\u0996\u09BF\u09DF\u09C7\n                    \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BE\u0964 \u0995\u09CD\u09B7\u09C1\u09A6\u09CD\u09B0 \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u0989\u09A6\u09CD\u09AF\u09CB\u0997\u0997\u09C1\u09B2\u09BF \u09AF\u09C7\u09A8 \u09B8\u09B9\u099C\u09C7\u0987, \u098F\u09AC\u0982 \u0985\u09B2\u09CD\u09AA \u09B8\u09AE\u09DF\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7\u0987\n                    \u09B2\u09CB\u09A8 \u09AA\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u09B8\u09C7\u0987 \u0989\u09A6\u09CD\u09AF\u09CB\u0997 \u09A8\u09BF\u09DF\u09C7\u0987 \u09B6\u09AA \u0986\u09AA \u0987-\u09B2\u09CB\u09A8 \u09AA\u09CD\u09B0\u09CB\u0997\u09CD\u09B0\u09BE\u09AE \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09BE\u0964 \u09B2\u09CB\u09A8\u0997\u09C1\u09B2\u09BF\n                    \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B2\u09C7\u09A8\u09CD\u09A1\u09BF\u0982 \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0\u09A6\u09C7\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u09A6\u09C7\u09DF\u09BE \u09B9\u09DF\u0964 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B2\u09C7\u09A8\u09CD\u09A1\u09BF\u0982 \u09AA\u09BE\u09B0\u09CD\u099F\u09A8\u09BE\u09B0 \u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u0964\n                </p>\n                </div>\n            </li>\n            <li>\n                <div class="header">\n                \u0986\u09AE\u09BF \u0995\u09A4 \u099F\u09BE\u0995\u09BE \u09B2\u09CB\u09A8 \u09AA\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u0986\u09AE\u09B0\u09BE \u09E8\u09EB,\u09E6\u09E6\u09E6 \u09A5\u09C7\u0995\u09C7 \u09E9 \u09B2\u09BE\u0996 \u099F\u09BE\u0995\u09BE \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B2\u09CB\u09A8 \u09A6\u09BF\u09DF\u09C7 \u09A5\u09BE\u0995\u09BF\u0964 \u0986\u09AA\u09A8\u09BF \u0995\u09A4 \u099F\u09BE\u0995\u09BE \u09AA\u09BE\u09AC\u09C7\u09A8 \u09A4\u09BE \u09A8\u09BF\u09B0\u09CD\u09AD\u09B0 \u0995\u09B0\u09AC\u09C7\n                    \u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09B8\u09C7\u09B2 \u098F\u09B0 \u0989\u09AA\u09B0\u0964 \u098F\u09B0 \u0995\u09BE\u09B0\u09A3 \u09B9\u09B2, \u0986\u09AE\u09B0\u09BE \u099A\u09BE\u0987 \u09AF\u09C7\u09A8 \u0986\u09AA\u09A8\u09BF \u09B8\u09AE\u09DF \u09AE\u09A4\u09CB \u09B2\u09CB\u09A8\u09C7\u09B0\n                    \u0987\u09A8\u09B8\u09CD\u099F\u09B2\u09AE\u09C7\u09A8\u09CD\u099F \u0997\u09C1\u09B2\u09CB \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964\n                </p>\n                <p>\n                    \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u0996\u09C1\u09AC \u09AC\u09C7\u09B6\u09BF \u09AC\u09DC \u09B2\u09CB\u09A8 \u09A8\u09C7\u09DF\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u09A8\u09BE \u0995\u09B0\u09C7, \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7 \u099B\u09CB\u099F \u09B2\u09CB\u09A8 \u09A8\u09BF\u09DF\u09C7, \u09A4\u09BE\u09B0\u09AA\u09B0 \u0986\u09AA\u09A8\u09BE\u09B0 \u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AC\u09BF\u09B2\u09CD\u09A1\n                    \u0995\u09B0\u09C1\u09A8\u0964 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09AC\u09C7\u09A8, \u0986\u09AA\u09A8\u09BE\u09B0 \u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u09B0\u09C7\u0995\u09B0\u09CD\u09A1 \u09AF\u09A4 \u09AD\u09BE\u09B2\u09CB \u09B9\u09AC\u09C7, \u0986\u09AA\u09A8\u09BF \u09A4\u09A4 \u09AC\u09C7\u09B6\u09BF \u09AA\u09B0\u09BF\u09AE\u09BE\u09A8\n                    \u098F\u09AC\u0982 \u09AE\u09C7\u09DF\u09BE\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u09C7 \u09B2\u09CB\u09A8 \u09AA\u09BE\u09AC\u09C7\u09A8\u0964\n                </p>\n                </div>\n            </li>\n            <li>\n                <div class="header">\n                \u0986\u09AE\u09BF \u0995\u09A4 \u09A6\u09BF\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u09C7 \u09B2\u09CB\u09A8 \u09AA\u09C7\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B2\u09CB\u09A8 \u098F\u09B0 \u09AE\u09C7\u09DF\u09BE\u09A6 \u09B8\u09B0\u09CD\u09AC\u09CB\u099A\u09CD\u099A  \u09E9-\u09EF \u09AE\u09BE\u09B8\u0964 \u0986\u09AE\u09B0\u09BE \u09B8\u09AC\u09B8\u09AE\u09DF \u09B8\u09BE\u099C\u09C7\u09B8\u09CD\u099F \u0995\u09B0\u09BF \u09AA\u09CD\u09B0\u09A5\u09AE\u09C7 \u09B8\u09CD\u09AC\u09B2\u09CD\u09AA \u09AE\u09C7\u09DF\u09BE\u09A6\u09C7\u09B0 \u09B2\u09CB\u09A8 \u09A8\u09BF\u09DF\u09C7,\n                    \u09B6\u09CB\u09A7 \u0995\u09B0\u09C7, \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8 \u09B9\u09B2\u09C7 \u0986\u09B0\u09C7\u0995\u099F\u09BE \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7\u0964 \u098F\u09A4\u09C7 \u0995\u09B0\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09C7\u09B8\u09CD\u099F \u098F\u09B0 \u0996\u09B0\u099A \u0995\u09AE \u0986\u09B8\u09C7\u0964\n                </p>\n                </div>\n            </li>\n            </ul>\n            <!-- /inner expandable -->\n            \n        </div>\n        </div>\n        <!-- /row 1 -->\n\n        <!-- row 2 -->\n        <div class="collapable">\n        <div class="head">\n            <div class="row">\n            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n                \u0987-\u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u0995\u09BF \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7?\n            </div>\n            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n                <div class="icon-down">\n                <i class="fas fa-chevron-down"></i>\n                </div>\n                <div class="icon-up">\n                <i class="fas fa-chevron-up"></i>\n                </div>\n            </div>\n            </div>\n        </div>\n\n\n        <div class="body">\n            \n            <!-- inner expandable -->\n            <ul class="inner-expandable">\n            <li class="expanded">\n                <div class="header">\n                \u0986\u09AE\u09BF \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u099A\u09BE\u099A\u09CD\u099B\u09BF\u09B2\u09BE\u09AE, \u0995\u09BF \u0995\u09B0\u09AC\u09CB?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u0986\u09AA\u09A8\u09BF \u09AF\u09A6\u09BF \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u099A\u09BE\u09A8, \u09A4\u09BE\u09B9\u09B2\u09C7 \u098F\u0987 \u098F\u09AA\u099F\u09BF \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09C7 \u098F\u09AA\u09B2\u09BE\u0987 \u0995\u09B0\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8 \n                    <a href="#">https://play.google.com/store/apps/details?id=com.shopup.eloan</a>\n                </p>\n                </div>\n            </li>\n            <li>\n                <div class="header">\n                \u0995\u09BF \u0995\u09BF \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u09B2\u09BE\u0997\u09AC\u09C7?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u09B6\u09C1\u09A7\u09C1 \u09AE\u09BE\u09A4\u09CD\u09B0 \u098F\u0987 \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u0997\u09C1\u09B2\u09CB \u09A6\u09BF\u09DF\u09C7\u0987 \u098F\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09AE\u09AA\u09CD\u09B2\u09BF\u099F \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8:\n                    <ol class="normal">\n                    <li>\u0986\u09AA\u09A8\u09BE\u09B0 \u09A8\u09CD\u09AF\u09BE\u09B6\u09A8\u09BE\u09B2 \u0986\u0987\u09A1\u09BF</li>\n                    <li>Guarantor \u098F\u09B0 \u09A8\u09CD\u09AF\u09BE\u09B6\u09A8\u09BE\u09B2 \u0986\u0987\u09A1\u09BF</li>\n                    <li>\u099A\u09C7\u0995 \u09AC\u0987 \u098F\u09B0 \u099B\u09AC\u09BF</li>\n                    <li>\u099B\u09AF\u09BC \u09AE\u09BE\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u0982\u0995 \u09B8\u09CD\u099F\u09C7\u099F\u09CD\u09AE\u09C7\u09A8\u09CD\u099F</li>\n                    <li>\u0986\u09AA\u09A8\u09BE\u09B0 \u0993 Guarantor \u098F\u09B0 \u098F\u0995\u0995\u09AA\u09BF \u09AA\u09BE\u09B8\u09AA\u09CB\u09B0\u09CD\u099F \u09B8\u09BE\u0987\u099C \u099B\u09AC\u09BF</li>\n                    <li>\u09AC\u09BF\u09A6\u09CD\u09AF\u09C1\u09CE \u09AC\u09BE \u09AA\u09BE\u09A8\u09BF\u09B0 \u09AC\u09BF\u09B2\u09C7\u09B0 \u09AB\u099F\u09CB\u0995\u09AA\u09BF</li>\n                    <li>\u099F\u09CD\u09B0\u09C7\u09A1 \u09B2\u09BE\u0987\u09B8\u09C7\u09A8\u09CD\u09B8 \u098F\u09B0 \u0995\u09AA\u09BF \u098F\u09AC\u0982 \u09A6\u09CB\u0995\u09BE\u09A8\u09C7\u09B0 \u09A1\u09BF\u09A1 \u0995\u09AA\u09BF (\u0985\u09AB\u09B2\u09BE\u0987\u09A8 \u09AC\u09CD\u09AF\u09BE\u09AC\u09B8\u09BE, \u0985\u09A8\u09B2\u09BE\u0987\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u09B9\u09B2\u09C7 \u09A6\u09B0\u0995\u09BE\u09B0 \u09A8\u09C7\u0987)</li>\n                    <li>\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09B8\u09CD\u099F\u09C7\u099F\u09AE\u09C7\u09A8\u09CD\u099F ( \u09AC\u09BF\u0995\u09BE\u09B6/ \u0995\u09CD\u09AF\u09BE\u09B6 \u09AE\u09C7\u09AE\u09CB)</li>\n                    <li>\u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF  \u09B8\u09CD\u099F\u09C7\u099F\u09AE\u09C7\u09A8\u09CD\u099F ( \u09AA\u09BE\u09A0\u09BE\u0993, \u0987 \u0995\u09C1\u09B0\u09BF\u09AF\u09BC\u09BE\u09B0, \u0985\u09A5\u09AC\u09BE \u0985\u09A8\u09CD\u09AF \u0995\u09CB\u09A8 \u09A1\u09C7\u09B2\u09BF\u09AD\u09BE\u09B0\u09BF \u09B8\u09CD\u099F\u09C7\u099F\u09AE\u09C7\u09A8\u09CD\u099F)</li>\n                    </ol>\n                </p>\n                </div>\n            </li>\n            <li>\n                <div class="header">\n                \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u0995\u09AC\u09C7 \u099C\u09AE\u09BE \u09A8\u09BF\u09AC\u09C7\u09A8?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09B6\u09C0\u0998\u09CD\u09B0\u0987 \u09B2\u09CB\u09A8 \u099F\u09BF\u09AE \u09A5\u09C7\u0995\u09C7 \u0995\u09B2 \u0995\u09B0\u09BE \u09B9\u09AC\u09C7 \u098F\u09AC\u0982 \u099C\u09BE\u09A8\u09BF\u09DF\u09C7 \u09A6\u09C7\u09DF\u09BE \u09B9\u09AC\u09C7\u0964 \u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F \u098F \u09A6\u09C7\u09DF\u09BE \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u0997\u09C1\u09B2\u09CB\n                    \u09B0\u09C7\u09A1\u09BF \u0995\u09B0\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8\u0964 \u09AF\u09A4 \u09AC\u09C7\u09B6\u09BF \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8, \u09A4\u09A4 \u09A6\u09CD\u09B0\u09C1\u09A4 \u0993 \u09B8\u09B9\u099C\u09C7 \u09B2\u09CB\u09A8 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8 \u0995\u09B0\u09BE \u09AF\u09BE\u09AC\u09C7\u0964\n                </p>\n                </div>\n            </li>\n            <li>\n                <div class="header">\n                \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u0995\u09BF\u09AD\u09BE\u09AC\u09C7 \u099C\u09AE\u09BE \u09A8\u09BF\u09AC\u09C7\u09A8?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u0997\u09C1\u09B2\u09CB \u0987\u09AE\u09C7\u0987\u09B2 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8 \u09AC\u09BE \u0995\u09C1\u09B0\u09BF\u09DF\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8; \u09AF\u09C7\u099F\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09C1\u09AC\u09BF\u09A7\u09BE\u0964\n                    \u0987\u09AE\u09C7\u0987\u09B2 \u0995\u09B0\u09B2\u09C7 <a href="mailto:eloan@shopf.co">eloan@shopf.co</a> \u098F\u0996\u09BE\u09A8\u09C7 \u09AE\u09C7\u0987\u09B2 \u0995\u09B0\u09C7 \u09AA\u09BE\u09A0\u09BE\u09AC\u09C7\u09A8\n                </p>\n                </div>\n            </li>\n            </ul>\n            <!-- /inner expandable -->\n            \n        </div>\n        </div>\n        <!-- /row 2 -->\n\n        <!-- row 3 -->\n        <div class="collapable">\n        <div class="head">\n            <div class="row">\n            <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n                \u0986\u09AE\u09BF \u0995\u0996\u09A8 \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09CB?\n            </div>\n            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n                <div class="icon-down">\n                <i class="fas fa-chevron-down"></i>\n                </div>\n                <div class="icon-up">\n                <i class="fas fa-chevron-up"></i>\n                </div>\n            </div>\n            </div>\n        </div>\n        \n        \n        <div class="body">\n            \n            <!-- inner expandable -->\n            <ul class="inner-expandable">\n            <li class="expanded">\n                <div class="header">\n                \u0986\u09AE\u09BF \u09A8\u09A4\u09C1\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF\u09C7 \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A4\u09C7 \u099A\u09BE\u099A\u09CD\u099B\u09BF\u0964 \u0986\u09AE\u09BF \u0995\u09BF \u09AA\u09BE\u09AC\u09CB?\n                </div>\n                <div class="main-body">\n                <p>\n                    \u09AC\u09C7\u09B6\u09BF\u09B0\u09AD\u09BE\u0997 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7\u0987 \u09A8\u09A4\u09C1\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF\u09C7 \u09B2\u09CB\u09A8 \u09AA\u09BE\u0993\u09DF\u09BE \u099F\u09BE \u0995\u09A0\u09BF\u09A8\u0964 \u09A4\u09BE\u09B0 \u0995\u09BE\u09B0\u09A3 \u09B9\u09B2\u09CB, \u0985\u09A8\u09C7\u0995 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7\u0987 \u09A8\u09A4\u09C1\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u09B0\u09BF\u09B8\u09CD\u0995\u09BF\u0964\n                    \u09AC\u09BF\u099C\u09A8\u09C7\u09B8\u099F\u09BE\u09DF \u09B2\u09BE\u09AD \u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7, \u0986\u09AC\u09BE\u09B0 \u09B2\u09B8 \u0993 \u09B9\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964\n                    \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u098F\u09B0 \u09B2\u09B8 \u09B9\u09B2\u09C7\u0993 \u09B2\u09CB\u09A8\u099F\u09BE \u09B8\u09AE\u09DF \u09AE\u09A4\u09CB \u09AA\u09B0\u09BF\u09B6\u09CB\u09A7 \u0995\u09B0\u09A4\u09C7 \u09B9\u09AC\u09C7\u0964 \u09B8\u09C7\u0987 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u0985\u09A8\u09C7\u0995 \u09B8\u09AE\u09DF \u0989\u09A6\u09CD\u09AF\u09CB\u0995\u09CD\u09A4\u09BE\u09A6\u09C7\u09B0 \u0989\u09AA\u09B0 \u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4\n                    \u099A\u09BE\u09AA \u09AA\u09DC\u09C7 \u09AF\u09BE\u09DF, \u098F\u09AC\u0982 \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09CE \u09A8\u09B7\u09CD\u099F \u09B9\u09DF\u0964\n                    \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7\u0987 \u09B2\u09CB\u09A8 \u09A8\u09BE \u09A8\u09BF\u09DF\u09C7, \u099B\u09CB\u099F \u0995\u09B0\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C7 \u0985\u09A8\u09CD\u09A4\u09A4 \u09E8-\u09E9 \u09AE\u09BE\u09B8 \u099A\u09BE\u09B2\u09BF\u09DF\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8\u099F\u09BE\u09DF \u09B2\u09BE\u09AD \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u099B\u09C7\u09A8 \u09A8\u09BE\u0995\u09BF\u0964\n                    \u098F\u09B0 \u09AA\u09B0\u09C7 \u09AC\u09BF\u099C\u09A8\u09C7\u09B8 \u0986\u09B0\u09CB \u09AC\u09DC \u0995\u09B0\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF\u09C7 \u09B2\u09CB\u09A8 \u09A8\u09BF\u09A8\u0964\n                    \u0986\u09AE\u09B0\u09BE \u0986\u09A8\u09CD\u09A4\u09B0\u09BF\u0995 \u09AD\u09BE\u09AC\u09C7 \u09A6\u09C1\u0983\u0996\u09BF\u09A4, \u0986\u09AE\u09B0\u09BE \u098F\u0996\u09A8 \u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u09B0\u09BE\u09A8\u09BF\u0982 \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u0997\u09C1\u09B2\u09CB\u09B0  \u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8\u09C7\u09B0 \u0985\u09AA\u09C7\u09B0\u09C7\u09B6\u09A8 \u099A\u09BE\u09B2\u09C1 \u09B0\u09BE\u0996\u09BE\u09B0 \u09AF\u09C7 \u099F\u09BE\u0995\u09BE\n                    \u09A6\u09B0\u0995\u09BE\u09B0 \u09B9\u09DF, \u09B8\u09C7\u099F\u09BE \u09A6\u09BF\u099A\u09CD\u099B\u09BF\u0964 \u09A8\u09A4\u09C1\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE\u09B0 \u09B2\u09CB\u09A8 \u09A6\u09C7\u09DF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09B8\u09C7\u09B8\u099F\u09BE \u0985\u09A8\u09CD\u09AF\u09B0\u0995\u09AE\u0964 \u09B9\u09DF\u09A4 \u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09A4\u09C7 \u09B9\u09AC\u09C7 \u09A4\u0996\u09A8 \u09B2\u09CB\u09A8 \u09A6\u09BF\u09AC\u0964\n                </p>\n                </div>\n            </li>\n            </ul>\n            <!-- /inner expandable -->\n            \n        </div>\n        </div>\n        <!-- /row 3 -->\n\n    </div>\n    </div>\n    <!-- /collapsable -->\n\n</div>\n</section>\n<!-- /faq -->');}]);
(function(){

    'use strict';

    var app = angular.module('eloan');
    
    app.config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: '/index.html',
      //   controller: 'BookController',
      })
      .when('/documents', {
        templateUrl: '/documents.html',
      //   controller: 'ChapterController'
      }).otherwise({
        templateUrl: '/404.html',
      });
    });

})();

(function () {
    'use strict';

    angular
        .module('eloan')
        .controller('AppController', ['$scope', function ($scope) {
        $scope.loanAmount = 27000;
        $scope.loanAmountOption = {
            floor: 30000,
            ceil: 300000,
            step: 1000,
            showSelectionBar: true,
            hidePointerLabels: true,
            hideLimitLabels: true,
            ticksArray: [
                30000,
                63750,
                97500,
                131250,
                165000,
                198750,
                232500,
                266250,
                300000,
            ]
        };

        $scope.loanDuration = 5;
        $scope.loanDurationOption = {
            floor: 1,
            ceil: 36,
            showSelectionBar: true,
            hidePointerLabels: true,
            hideLimitLabels: true,
            ticksArray: [0, 4.5, 9, 13.5, 18, 22.5, 27, 31.5, 36]
        };
    }]);

})();