var mc=Object.defineProperty;var hc=(r,i,s)=>i in r?mc(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s;var En=(r,i,s)=>hc(r,typeof i!="symbol"?i+"":i,s);import{g as getDefaultExportFromCjs,i as invariant,A as Action,p as parsePath,s as stripBasename,m as matchRoutes,j as joinPaths,a as isRouteErrorResponse,r as resolveTo,b as getResolveToMatches,c as createRouter,d as createBrowserHistory,E as ErrorResponseImpl,e as createPath,f as clsx,h as invariant$1,k as shallowEqual,P as PropTypes,l as parse$1,n as icon2,o as requireJquery,C as Chart$1,L as LineController,q as createIntegrationUsageDataPlugin,u as uid,t as once,v as createDefer,w as isCKEditorFreeLicense,x as appendExtraPluginsToEditorConfig,y as commonjsGlobal,z as requireCodemirror}from"./vendor_misc-BI84RedS.js";function _mergeNamespaces(r,i){for(var s=0;s<i.length;s++){const c=i[s];if(typeof c!="string"&&!Array.isArray(c)){for(const p in c)if(p!=="default"&&!(p in r)){const m=Object.getOwnPropertyDescriptor(c,p);m&&Object.defineProperty(r,p,m.get?m:{enumerable:!0,get:()=>c[p]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production_min;function requireReact_production_min(){if(hasRequiredReact_production_min)return react_production_min;hasRequiredReact_production_min=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),h=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.iterator;function d(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,k={};function D(w,O,ve){this.props=w,this.context=O,this.refs=k,this.updater=ve||M}D.prototype.isReactComponent={},D.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},D.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function ee(){}ee.prototype=D.prototype;function ne(w,O,ve){this.props=w,this.context=O,this.refs=k,this.updater=ve||M}var te=ne.prototype=new ee;te.constructor=ne,R(te,D.prototype),te.isPureReactComponent=!0;var re=Array.isArray,ge=Object.prototype.hasOwnProperty,Ae={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ue(w,O,ve){var ye,we={},Me=null,Ie=null;if(O!=null)for(ye in O.ref!==void 0&&(Ie=O.ref),O.key!==void 0&&(Me=""+O.key),O)ge.call(O,ye)&&!me.hasOwnProperty(ye)&&(we[ye]=O[ye]);var Se=arguments.length-2;if(Se===1)we.children=ve;else if(1<Se){for(var Oe=Array(Se),jt=0;jt<Se;jt++)Oe[jt]=arguments[jt+2];we.children=Oe}if(w&&w.defaultProps)for(ye in Se=w.defaultProps,Se)we[ye]===void 0&&(we[ye]=Se[ye]);return{$$typeof:r,type:w,key:Me,ref:Ie,props:we,_owner:Ae.current}}function be(w,O){return{$$typeof:r,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function Ce(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function Fe(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ve){return O[ve]})}var Te=/\/+/g;function ze(w,O){return typeof w=="object"&&w!==null&&w.key!=null?Fe(""+w.key):O.toString(36)}function Ve(w,O,ve,ye,we){var Me=typeof w;(Me==="undefined"||Me==="boolean")&&(w=null);var Ie=!1;if(w===null)Ie=!0;else switch(Me){case"string":case"number":Ie=!0;break;case"object":switch(w.$$typeof){case r:case i:Ie=!0}}if(Ie)return Ie=w,we=we(Ie),w=ye===""?"."+ze(Ie,0):ye,re(we)?(ve="",w!=null&&(ve=w.replace(Te,"$&/")+"/"),Ve(we,O,ve,"",function(jt){return jt})):we!=null&&(Ce(we)&&(we=be(we,ve+(!we.key||Ie&&Ie.key===we.key?"":(""+we.key).replace(Te,"$&/")+"/")+w)),O.push(we)),1;if(Ie=0,ye=ye===""?".":ye+":",re(w))for(var Se=0;Se<w.length;Se++){Me=w[Se];var Oe=ye+ze(Me,Se);Ie+=Ve(Me,O,ve,Oe,we)}else if(Oe=d(w),typeof Oe=="function")for(w=Oe.call(w),Se=0;!(Me=w.next()).done;)Me=Me.value,Oe=ye+ze(Me,Se++),Ie+=Ve(Me,O,ve,Oe,we);else if(Me==="object")throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ie}function ct(w,O,ve){if(w==null)return w;var ye=[],we=0;return Ve(w,ye,"","",function(Me){return O.call(ve,Me,we++)}),ye}function Je(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(ve){(w._status===0||w._status===-1)&&(w._status=1,w._result=ve)},function(ve){(w._status===0||w._status===-1)&&(w._status=2,w._result=ve)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var Re={current:null},le={transition:null},he={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:le,ReactCurrentOwner:Ae};function ie(){throw Error("act(...) is not supported in production builds of React.")}return react_production_min.Children={map:ct,forEach:function(w,O,ve){ct(w,function(){O.apply(this,arguments)},ve)},count:function(w){var O=0;return ct(w,function(){O++}),O},toArray:function(w){return ct(w,function(O){return O})||[]},only:function(w){if(!Ce(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},react_production_min.Component=D,react_production_min.Fragment=s,react_production_min.Profiler=p,react_production_min.PureComponent=ne,react_production_min.StrictMode=c,react_production_min.Suspense=g,react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,react_production_min.act=ie,react_production_min.cloneElement=function(w,O,ve){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ye=R({},w.props),we=w.key,Me=w.ref,Ie=w._owner;if(O!=null){if(O.ref!==void 0&&(Me=O.ref,Ie=Ae.current),O.key!==void 0&&(we=""+O.key),w.type&&w.type.defaultProps)var Se=w.type.defaultProps;for(Oe in O)ge.call(O,Oe)&&!me.hasOwnProperty(Oe)&&(ye[Oe]=O[Oe]===void 0&&Se!==void 0?Se[Oe]:O[Oe])}var Oe=arguments.length-2;if(Oe===1)ye.children=ve;else if(1<Oe){Se=Array(Oe);for(var jt=0;jt<Oe;jt++)Se[jt]=arguments[jt+2];ye.children=Se}return{$$typeof:r,type:w.type,key:we,ref:Me,props:ye,_owner:Ie}},react_production_min.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:m,_context:w},w.Consumer=w},react_production_min.createElement=ue,react_production_min.createFactory=function(w){var O=ue.bind(null,w);return O.type=w,O},react_production_min.createRef=function(){return{current:null}},react_production_min.forwardRef=function(w){return{$$typeof:E,render:w}},react_production_min.isValidElement=Ce,react_production_min.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:Je}},react_production_min.memo=function(w,O){return{$$typeof:x,type:w,compare:O===void 0?null:O}},react_production_min.startTransition=function(w){var O=le.transition;le.transition={};try{w()}finally{le.transition=O}},react_production_min.unstable_act=ie,react_production_min.useCallback=function(w,O){return Re.current.useCallback(w,O)},react_production_min.useContext=function(w){return Re.current.useContext(w)},react_production_min.useDebugValue=function(){},react_production_min.useDeferredValue=function(w){return Re.current.useDeferredValue(w)},react_production_min.useEffect=function(w,O){return Re.current.useEffect(w,O)},react_production_min.useId=function(){return Re.current.useId()},react_production_min.useImperativeHandle=function(w,O,ve){return Re.current.useImperativeHandle(w,O,ve)},react_production_min.useInsertionEffect=function(w,O){return Re.current.useInsertionEffect(w,O)},react_production_min.useLayoutEffect=function(w,O){return Re.current.useLayoutEffect(w,O)},react_production_min.useMemo=function(w,O){return Re.current.useMemo(w,O)},react_production_min.useReducer=function(w,O,ve){return Re.current.useReducer(w,O,ve)},react_production_min.useRef=function(w){return Re.current.useRef(w)},react_production_min.useState=function(w){return Re.current.useState(w)},react_production_min.useSyncExternalStore=function(w,O,ve){return Re.current.useSyncExternalStore(w,O,ve)},react_production_min.useTransition=function(){return Re.current.useTransition()},react_production_min.version="18.3.1",react_production_min}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production_min()),react.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production_min;function requireReactJsxRuntime_production_min(){if(hasRequiredReactJsxRuntime_production_min)return reactJsxRuntime_production_min;hasRequiredReactJsxRuntime_production_min=1;var r=requireReact(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function h(E,g,x){var S,v={},d=null,M=null;x!==void 0&&(d=""+x),g.key!==void 0&&(d=""+g.key),g.ref!==void 0&&(M=g.ref);for(S in g)c.call(g,S)&&!m.hasOwnProperty(S)&&(v[S]=g[S]);if(E&&E.defaultProps)for(S in g=E.defaultProps,g)v[S]===void 0&&(v[S]=g[S]);return{$$typeof:i,type:E,key:d,ref:M,props:v,_owner:p.current}}return reactJsxRuntime_production_min.Fragment=s,reactJsxRuntime_production_min.jsx=h,reactJsxRuntime_production_min.jsxs=h,reactJsxRuntime_production_min}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production_min()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),reactExports=requireReact();const React=getDefaultExportFromCjs(reactExports),React$1=_mergeNamespaces({__proto__:null,default:React},[reactExports]);var client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredScheduler_production_min;function requireScheduler_production_min(){return hasRequiredScheduler_production_min||(hasRequiredScheduler_production_min=1,(function(r){function i(le,he){var ie=le.length;le.push(he);e:for(;0<ie;){var w=ie-1>>>1,O=le[w];if(0<p(O,he))le[w]=he,le[ie]=O,ie=w;else break e}}function s(le){return le.length===0?null:le[0]}function c(le){if(le.length===0)return null;var he=le[0],ie=le.pop();if(ie!==he){le[0]=ie;e:for(var w=0,O=le.length,ve=O>>>1;w<ve;){var ye=2*(w+1)-1,we=le[ye],Me=ye+1,Ie=le[Me];if(0>p(we,ie))Me<O&&0>p(Ie,we)?(le[w]=Ie,le[Me]=ie,w=Me):(le[w]=we,le[ye]=ie,w=ye);else if(Me<O&&0>p(Ie,ie))le[w]=Ie,le[Me]=ie,w=Me;else break e}}return he}function p(le,he){var ie=le.sortIndex-he.sortIndex;return ie!==0?ie:le.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var h=Date,E=h.now();r.unstable_now=function(){return h.now()-E}}var g=[],x=[],S=1,v=null,d=3,M=!1,R=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(le){for(var he=s(x);he!==null;){if(he.callback===null)c(x);else if(he.startTime<=le)c(x),he.sortIndex=he.expirationTime,i(g,he);else break;he=s(x)}}function re(le){if(k=!1,te(le),!R)if(s(g)!==null)R=!0,Je(ge);else{var he=s(x);he!==null&&Re(re,he.startTime-le)}}function ge(le,he){R=!1,k&&(k=!1,ee(ue),ue=-1),M=!0;var ie=d;try{for(te(he),v=s(g);v!==null&&(!(v.expirationTime>he)||le&&!Fe());){var w=v.callback;if(typeof w=="function"){v.callback=null,d=v.priorityLevel;var O=w(v.expirationTime<=he);he=r.unstable_now(),typeof O=="function"?v.callback=O:v===s(g)&&c(g),te(he)}else c(g);v=s(g)}if(v!==null)var ve=!0;else{var ye=s(x);ye!==null&&Re(re,ye.startTime-he),ve=!1}return ve}finally{v=null,d=ie,M=!1}}var Ae=!1,me=null,ue=-1,be=5,Ce=-1;function Fe(){return!(r.unstable_now()-Ce<be)}function Te(){if(me!==null){var le=r.unstable_now();Ce=le;var he=!0;try{he=me(!0,le)}finally{he?ze():(Ae=!1,me=null)}}else Ae=!1}var ze;if(typeof ne=="function")ze=function(){ne(Te)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ct=Ve.port2;Ve.port1.onmessage=Te,ze=function(){ct.postMessage(null)}}else ze=function(){D(Te,0)};function Je(le){me=le,Ae||(Ae=!0,ze())}function Re(le,he){ue=D(function(){le(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(le){le.callback=null},r.unstable_continueExecution=function(){R||M||(R=!0,Je(ge))},r.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<le?Math.floor(1e3/le):5},r.unstable_getCurrentPriorityLevel=function(){return d},r.unstable_getFirstCallbackNode=function(){return s(g)},r.unstable_next=function(le){switch(d){case 1:case 2:case 3:var he=3;break;default:he=d}var ie=d;d=he;try{return le()}finally{d=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(le,he){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var ie=d;d=le;try{return he()}finally{d=ie}},r.unstable_scheduleCallback=function(le,he,ie){var w=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?w+ie:w):ie=w,le){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ie+O,le={id:S++,callback:he,priorityLevel:le,startTime:ie,expirationTime:O,sortIndex:-1},ie>w?(le.sortIndex=ie,i(x,le),s(g)===null&&le===s(x)&&(k?(ee(ue),ue=-1):k=!0,Re(re,ie-w))):(le.sortIndex=O,i(g,le),R||M||(R=!0,Je(ge))),le},r.unstable_shouldYield=Fe,r.unstable_wrapCallback=function(le){var he=d;return function(){var ie=d;d=he;try{return le.apply(this,arguments)}finally{d=ie}}}})(scheduler_production_min)),scheduler_production_min}var hasRequiredScheduler;function requireScheduler(){return hasRequiredScheduler||(hasRequiredScheduler=1,scheduler.exports=requireScheduler_production_min()),scheduler.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDom_production_min;function requireReactDom_production_min(){if(hasRequiredReactDom_production_min)return reactDom_production_min;hasRequiredReactDom_production_min=1;var r=requireReact(),i=requireScheduler();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function m(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},v={};function d(e){return g.call(v,e)?!0:g.call(S,e)?!1:x.test(e)?v[e]=!0:(S[e]=!0,!1)}function M(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,t,n,l){if(t===null||typeof t>"u"||M(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function k(e,t,n,l,a,o,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=u}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ee,ne);D[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ee,ne);D[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ee,ne);D[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,t,n,l){var a=D.hasOwnProperty(t)?D[t]:null;(a!==null?a.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R(t,n,a,l)&&(n=null),l||a===null?d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,l=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var re=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Fe=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),le=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,w;function O(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ve=!1;function ye(e,t){if(!e||ve)return"";ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(T){var l=T}Reflect.construct(e,[],t)}else{try{t.call()}catch(T){l=T}e.call(t.prototype)}else{try{throw Error()}catch(T){l=T}e()}}catch(T){if(T&&l&&typeof T.stack=="string"){for(var a=T.stack.split(`
`),o=l.stack.split(`
`),u=a.length-1,f=o.length-1;1<=u&&0<=f&&a[u]!==o[f];)f--;for(;1<=u&&0<=f;u--,f--)if(a[u]!==o[f]){if(u!==1||f!==1)do if(u--,f--,0>f||a[u]!==o[f]){var _=`
`+a[u].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=u&&0<=f);break}}}finally{ve=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function we(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=ye(e.type,!1),e;case 11:return e=ye(e.type.render,!1),e;case 1:return e=ye(e.type,!0),e;default:return""}}function Me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case Ae:return"Portal";case be:return"Profiler";case ue:return"StrictMode";case ze:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fe:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}function Ie(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(t);case 8:return t===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jt(e){var t=Oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){l=""+u,o.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dr(e){e._valueTracker||(e._valueTracker=jt(e))}function Mi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Oe(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ki(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=Se(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ci(e,t){t=t.checked,t!=null&&te(e,"checked",t,!1)}function wa(e,t){Ci(e,t);var n=Se(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Si(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sl=Array.isArray;function tl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Se(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Sl(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Se(n)}}function bi(e,t){var n=Se(t.value),l=Se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Ti(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ri(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ri(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,Ii=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v1=["Webkit","ms","Moz","O"];Object.keys(bl).forEach(function(e){v1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bl[t]=bl[e]})});function Di(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bl.hasOwnProperty(e)&&bl[e]?(""+t).trim():t+"px"}function Li(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,a=Di(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,a):e[n]=a}}var y1=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(y1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,nl=null,ll=null;function ji(e){if(e=Yl(e)){if(typeof Ra!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Pr(t),Ra(e.stateNode,e.type,t))}}function Oi(e){nl?ll?ll.push(e):ll=[e]:nl=e}function Pi(){if(nl){var e=nl,t=ll;if(ll=nl=null,ji(e),t)for(e=0;e<t.length;e++)ji(t[e])}}function Bi(e,t){return e(t)}function Ni(){}var Ia=!1;function Ui(e,t,n){if(Ia)return e(t,n);Ia=!0;try{return Bi(e,t,n)}finally{Ia=!1,(nl!==null||ll!==null)&&(Ni(),Pi())}}function Tl(e,t){var n=e.stateNode;if(n===null)return null;var l=Pr(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Da=!1;if(E)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){Da=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{Da=!1}function A1(e,t,n,l,a,o,u,f,_){var T=Array.prototype.slice.call(arguments,3);try{t.apply(n,T)}catch(q){this.onError(q)}}var Il=!1,mr=null,hr=!1,La=null,E1={onError:function(e){Il=!0,mr=e}};function w1(e,t,n,l,a,o,u,f,_){Il=!1,mr=null,A1.apply(E1,arguments)}function M1(e,t,n,l,a,o,u,f,_){if(w1.apply(this,arguments),Il){if(Il){var T=mr;Il=!1,mr=null}else throw Error(s(198));hr||(hr=!0,La=T)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(Kn(e)!==e)throw Error(s(188))}function k1(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ki(a),e;if(o===l)return Ki(a),t;o=o.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=o;else{for(var u=!1,f=a.child;f;){if(f===n){u=!0,n=a,l=o;break}if(f===l){u=!0,l=a,n=o;break}f=f.sibling}if(!u){for(f=o.child;f;){if(f===n){u=!0,n=o,l=a;break}if(f===l){u=!0,l=o,n=a;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Wi(e){return e=k1(e),e!==null?Fi(e):null}function Fi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fi(e);if(t!==null)return t;e=e.sibling}return null}var zi=i.unstable_scheduleCallback,qi=i.unstable_cancelCallback,C1=i.unstable_shouldYield,S1=i.unstable_requestPaint,Ke=i.unstable_now,x1=i.unstable_getCurrentPriorityLevel,ja=i.unstable_ImmediatePriority,Zi=i.unstable_UserBlockingPriority,_r=i.unstable_NormalPriority,b1=i.unstable_LowPriority,Hi=i.unstable_IdlePriority,gr=null,sn=null;function T1(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(gr,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:D1,R1=Math.log,I1=Math.LN2;function D1(e){return e>>>=0,e===0?32:31-(R1(e)/I1|0)|0}var vr=64,yr=4194304;function Dl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,a=e.suspendedLanes,o=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~a;f!==0?l=Dl(f):(o&=u,o!==0&&(l=Dl(o)))}else u=n&~a,u!==0?l=Dl(u):o!==0&&(l=Dl(o));if(l===0)return 0;if(t!==0&&t!==l&&(t&a)===0&&(a=l&-l,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((l&4)!==0&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-en(t),a=1<<n,l|=e[n],t&=~a;return l}function L1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var u=31-en(o),f=1<<u,_=a[u];_===-1?((f&n)===0||(f&l)!==0)&&(a[u]=L1(f,t)):_<=t&&(e.expiredLanes|=f),o&=~f}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qi(){var e=vr;return vr<<=1,(vr&4194240)===0&&(vr=64),e}function Pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function O1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-en(n),o=1<<a;t[a]=0,l[a]=-1,e[a]=-1,n&=~o}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-en(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}var xe=0;function Gi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yi,Na,Ji,Xi,$i,Ua=!1,Er=[],wn=null,Mn=null,kn=null,jl=new Map,Ol=new Map,Cn=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":jl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(t.pointerId)}}function Pl(e,t,n,l,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Yl(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function B1(e,t,n,l,a){switch(t){case"focusin":return wn=Pl(wn,e,t,n,l,a),!0;case"dragenter":return Mn=Pl(Mn,e,t,n,l,a),!0;case"mouseover":return kn=Pl(kn,e,t,n,l,a),!0;case"pointerover":var o=a.pointerId;return jl.set(o,Pl(jl.get(o)||null,e,t,n,l,a)),!0;case"gotpointercapture":return o=a.pointerId,Ol.set(o,Pl(Ol.get(o)||null,e,t,n,l,a)),!0}return!1}function ts(e){var t=Wn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vi(n),t!==null){e.blockedOn=t,$i(e.priority,function(){Ji(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ba=l,n.target.dispatchEvent(l),ba=null}else return t=Yl(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){wr(e)&&n.delete(t)}function N1(){Ua=!1,wn!==null&&wr(wn)&&(wn=null),Mn!==null&&wr(Mn)&&(Mn=null),kn!==null&&wr(kn)&&(kn=null),jl.forEach(ns),Ol.forEach(ns)}function Bl(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,N1)))}function Nl(e){function t(a){return Bl(a,e)}if(0<Er.length){Bl(Er[0],e);for(var n=1;n<Er.length;n++){var l=Er[n];l.blockedOn===e&&(l.blockedOn=null)}}for(wn!==null&&Bl(wn,e),Mn!==null&&Bl(Mn,e),kn!==null&&Bl(kn,e),jl.forEach(t),Ol.forEach(t),n=0;n<Cn.length;n++)l=Cn[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)ts(n),n.blockedOn===null&&Cn.shift()}var rl=re.ReactCurrentBatchConfig,Mr=!0;function U1(e,t,n,l){var a=xe,o=rl.transition;rl.transition=null;try{xe=1,Va(e,t,n,l)}finally{xe=a,rl.transition=o}}function V1(e,t,n,l){var a=xe,o=rl.transition;rl.transition=null;try{xe=4,Va(e,t,n,l)}finally{xe=a,rl.transition=o}}function Va(e,t,n,l){if(Mr){var a=Ka(e,t,n,l);if(a===null)co(e,t,l,kr,n),es(e,l);else if(B1(a,e,t,n,l))l.stopPropagation();else if(es(e,l),t&4&&-1<P1.indexOf(e)){for(;a!==null;){var o=Yl(a);if(o!==null&&Yi(o),o=Ka(e,t,n,l),o===null&&co(e,t,l,kr,n),o===a)break;a=o}a!==null&&l.stopPropagation()}else co(e,t,l,null,n)}}var kr=null;function Ka(e,t,n,l){if(kr=null,e=Ta(l),e=Wn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vi(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kr=e,null}function ls(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case ja:return 1;case Zi:return 4;case _r:case b1:return 16;case Hi:return 536870912;default:return 16}default:return 16}}var Sn=null,Wa=null,Cr=null;function rs(){if(Cr)return Cr;var e,t=Wa,n=t.length,l,a="value"in Sn?Sn.value:Sn.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var u=n-e;for(l=1;l<=u&&t[n-l]===a[o-l];l++);return Cr=a.slice(e,1<l?1-l:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function as(){return!1}function Bt(e){function t(n,l,a,o,u){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xr:as,this.isPropagationStopped=as,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Bt(al),Ul=ie({},al,{view:0,detail:0}),K1=Bt(Ul),za,qa,Vl,br=ie({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ha,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(za=e.screenX-Vl.screenX,qa=e.screenY-Vl.screenY):qa=za=0,Vl=e),za)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),os=Bt(br),W1=ie({},br,{dataTransfer:0}),F1=Bt(W1),z1=ie({},Ul,{relatedTarget:0}),Za=Bt(z1),q1=ie({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=Bt(q1),H1=ie({},al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Q1=Bt(H1),G1=ie({},al,{data:0}),is=Bt(G1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X1[e])?!!t[e]:!1}function Ha(){return $1}var eu=ie({},Ul,{key:function(e){if(e.key){var t=Y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ha,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tu=Bt(eu),nu=ie({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=Bt(nu),lu=ie({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ha}),ru=Bt(lu),au=ie({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),ou=Bt(au),iu=ie({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),su=Bt(iu),uu=[9,13,27,32],Qa=E&&"CompositionEvent"in window,Kl=null;E&&"documentMode"in document&&(Kl=document.documentMode);var cu=E&&"TextEvent"in window&&!Kl,us=E&&(!Qa||Kl&&8<Kl&&11>=Kl),cs=" ",ds=!1;function ps(e,t){switch(e){case"keyup":return uu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function du(e,t){switch(e){case"compositionend":return fs(t);case"keypress":return t.which!==32?null:(ds=!0,cs);case"textInput":return e=t.data,e===cs&&ds?null:e;default:return null}}function pu(e,t){if(ol)return e==="compositionend"||!Qa&&ps(e,t)?(e=rs(),Cr=Wa=Sn=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var fu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fu[e.type]:t==="textarea"}function hs(e,t,n,l){Oi(l),t=Lr(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Wl=null,Fl=null;function mu(e){Ls(e,0)}function Tr(e){var t=dl(e);if(Mi(t))return e}function hu(e,t){if(e==="change")return t}var _s=!1;if(E){var Ga;if(E){var Ya="oninput"in document;if(!Ya){var gs=document.createElement("div");gs.setAttribute("oninput","return;"),Ya=typeof gs.oninput=="function"}Ga=Ya}else Ga=!1;_s=Ga&&(!document.documentMode||9<document.documentMode)}function vs(){Wl&&(Wl.detachEvent("onpropertychange",ys),Fl=Wl=null)}function ys(e){if(e.propertyName==="value"&&Tr(Fl)){var t=[];hs(t,Fl,e,Ta(e)),Ui(mu,t)}}function _u(e,t,n){e==="focusin"?(vs(),Wl=t,Fl=n,Wl.attachEvent("onpropertychange",ys)):e==="focusout"&&vs()}function gu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tr(Fl)}function vu(e,t){if(e==="click")return Tr(t)}function yu(e,t){if(e==="input"||e==="change")return Tr(t)}function Au(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Au;function zl(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!g.call(t,a)||!tn(e[a],t[a]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,t){var n=As(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=As(n)}}function ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ms(){for(var e=window,t=pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pr(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eu(e){var t=Ms(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ws(n.ownerDocument.documentElement,n)){if(l!==null&&Ja(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(l.start,a);l=l.end===void 0?o:Math.min(l.end,a),!e.extend&&o>l&&(a=l,l=o,o=a),a=Es(n,o);var u=Es(n,l);a&&u&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>l?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wu=E&&"documentMode"in document&&11>=document.documentMode,il=null,Xa=null,ql=null,$a=!1;function ks(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$a||il==null||il!==pr(l)||(l=il,"selectionStart"in l&&Ja(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ql&&zl(ql,l)||(ql=l,l=Lr(Xa,"onSelect"),0<l.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=il)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sl={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},eo={},Cs={};E&&(Cs=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Ir(e){if(eo[e])return eo[e];if(!sl[e])return e;var t=sl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cs)return eo[e]=t[n];return e}var Ss=Ir("animationend"),xs=Ir("animationiteration"),bs=Ir("animationstart"),Ts=Ir("transitionend"),Rs=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Rs.set(e,t),m(t,[e])}for(var to=0;to<Is.length;to++){var oo=Is[to],Mu=oo.toLowerCase(),ku=oo[0].toUpperCase()+oo.slice(1);xn(Mu,"on"+ku)}xn(Ss,"onAnimationEnd"),xn(xs,"onAnimationIteration"),xn(bs,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(Ts,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zl));function Ds(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,M1(l,t,void 0,e),e.currentTarget=null}function Ls(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var o=void 0;if(t)for(var u=l.length-1;0<=u;u--){var f=l[u],_=f.instance,T=f.currentTarget;if(f=f.listener,_!==o&&a.isPropagationStopped())break e;Ds(a,f,T),o=_}else for(u=0;u<l.length;u++){if(f=l[u],_=f.instance,T=f.currentTarget,f=f.listener,_!==o&&a.isPropagationStopped())break e;Ds(a,f,T),o=_}}}if(hr)throw e=La,hr=!1,La=null,e}function Le(e,t){var n=t[vo];n===void 0&&(n=t[vo]=new Set);var l=e+"__bubble";n.has(l)||(js(t,e,2,!1),n.add(l))}function uo(e,t,n){var l=0;t&&(l|=4),js(n,e,l,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function Hl(e){if(!e[Dr]){e[Dr]=!0,c.forEach(function(n){n!=="selectionchange"&&(Cu.has(n)||uo(n,!1,e),uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,uo("selectionchange",!1,t))}}function js(e,t,n,l){switch(ls(t)){case 1:var a=U1;break;case 4:a=V1;break;default:a=Va}n=a.bind(null,t,n,e),a=void 0,!Da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function co(e,t,n,l,a){var o=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var f=l.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(u===4)for(u=l.return;u!==null;){var _=u.tag;if((_===3||_===4)&&(_=u.stateNode.containerInfo,_===a||_.nodeType===8&&_.parentNode===a))return;u=u.return}for(;f!==null;){if(u=Wn(f),u===null)return;if(_=u.tag,_===5||_===6){l=o=u;continue e}f=f.parentNode}}l=l.return}Ui(function(){var T=o,q=Ta(n),H=[];e:{var j=Rs.get(e);if(j!==void 0){var ae=Fa,se=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":ae=tu;break;case"focusin":se="focus",ae=Za;break;case"focusout":se="blur",ae=Za;break;case"beforeblur":case"afterblur":ae=Za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=ru;break;case Ss:case xs:case bs:ae=Z1;break;case Ts:ae=ou;break;case"scroll":ae=K1;break;case"wheel":ae=su;break;case"copy":case"cut":case"paste":ae=Q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=ss}var ce=(t&4)!==0,We=!ce&&e==="scroll",C=ce?j!==null?j+"Capture":null:j;ce=[];for(var A=T,b;A!==null;){b=A;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,C!==null&&(Y=Tl(A,C),Y!=null&&ce.push(Ql(A,Y,b)))),We)break;A=A.return}0<ce.length&&(j=new ae(j,se,null,n,q),H.push({event:j,listeners:ce}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",ae=e==="mouseout"||e==="pointerout",j&&n!==ba&&(se=n.relatedTarget||n.fromElement)&&(Wn(se)||se[fn]))break e;if((ae||j)&&(j=q.window===q?q:(j=q.ownerDocument)?j.defaultView||j.parentWindow:window,ae?(se=n.relatedTarget||n.toElement,ae=T,se=se?Wn(se):null,se!==null&&(We=Kn(se),se!==We||se.tag!==5&&se.tag!==6)&&(se=null)):(ae=null,se=T),ae!==se)){if(ce=os,Y="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ce=ss,Y="onPointerLeave",C="onPointerEnter",A="pointer"),We=ae==null?j:dl(ae),b=se==null?j:dl(se),j=new ce(Y,A+"leave",ae,n,q),j.target=We,j.relatedTarget=b,Y=null,Wn(q)===T&&(ce=new ce(C,A+"enter",se,n,q),ce.target=b,ce.relatedTarget=We,Y=ce),We=Y,ae&&se)t:{for(ce=ae,C=se,A=0,b=ce;b;b=ul(b))A++;for(b=0,Y=C;Y;Y=ul(Y))b++;for(;0<A-b;)ce=ul(ce),A--;for(;0<b-A;)C=ul(C),b--;for(;A--;){if(ce===C||C!==null&&ce===C.alternate)break t;ce=ul(ce),C=ul(C)}ce=null}else ce=null;ae!==null&&Os(H,j,ae,ce,!1),se!==null&&We!==null&&Os(H,We,se,ce,!0)}}e:{if(j=T?dl(T):window,ae=j.nodeName&&j.nodeName.toLowerCase(),ae==="select"||ae==="input"&&j.type==="file")var de=hu;else if(ms(j))if(_s)de=yu;else{de=gu;var pe=_u}else(ae=j.nodeName)&&ae.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(de=vu);if(de&&(de=de(e,T))){hs(H,de,n,q);break e}pe&&pe(e,j,T),e==="focusout"&&(pe=j._wrapperState)&&pe.controlled&&j.type==="number"&&Ma(j,"number",j.value)}switch(pe=T?dl(T):window,e){case"focusin":(ms(pe)||pe.contentEditable==="true")&&(il=pe,Xa=T,ql=null);break;case"focusout":ql=Xa=il=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,ks(H,n,q);break;case"selectionchange":if(wu)break;case"keydown":case"keyup":ks(H,n,q)}var fe;if(Qa)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ol?ps(e,n)&&(_e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_e="onCompositionStart");_e&&(us&&n.locale!=="ko"&&(ol||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ol&&(fe=rs()):(Sn=q,Wa="value"in Sn?Sn.value:Sn.textContent,ol=!0)),pe=Lr(T,_e),0<pe.length&&(_e=new is(_e,e,null,n,q),H.push({event:_e,listeners:pe}),fe?_e.data=fe:(fe=fs(n),fe!==null&&(_e.data=fe)))),(fe=cu?du(e,n):pu(e,n))&&(T=Lr(T,"onBeforeInput"),0<T.length&&(q=new is("onBeforeInput","beforeinput",null,n,q),H.push({event:q,listeners:T}),q.data=fe))}Ls(H,t)})}function Ql(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lr(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Tl(e,n),o!=null&&l.unshift(Ql(e,o,a)),o=Tl(e,t),o!=null&&l.push(Ql(e,o,a))),e=e.return}return l}function ul(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,l,a){for(var o=t._reactName,u=[];n!==null&&n!==l;){var f=n,_=f.alternate,T=f.stateNode;if(_!==null&&_===l)break;f.tag===5&&T!==null&&(f=T,a?(_=Tl(n,o),_!=null&&u.unshift(Ql(n,_,f))):a||(_=Tl(n,o),_!=null&&u.push(Ql(n,_,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Su=/\r\n?/g,xu=/\u0000|\uFFFD/g;function Ps(e){return(typeof e=="string"?e:""+e).replace(Su,`
`).replace(xu,"")}function jr(e,t,n){if(t=Ps(t),Ps(e)!==t&&n)throw Error(s(425))}function Or(){}var po=null,fo=null;function mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ho=typeof setTimeout=="function"?setTimeout:void 0,bu=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,Tu=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(e){return Bs.resolve(null).then(e).catch(Ru)}:ho;function Ru(e){setTimeout(function(){throw e})}function go(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(l===0){e.removeChild(a),Nl(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=a}while(n);Nl(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cl=Math.random().toString(36).slice(2),un="__reactFiber$"+cl,Gl="__reactProps$"+cl,fn="__reactContainer$"+cl,vo="__reactEvents$"+cl,Iu="__reactListeners$"+cl,Du="__reactHandles$"+cl;function Wn(e){var t=e[un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ns(e);e!==null;){if(n=e[un])return n;e=Ns(e)}return t}e=n,n=e.parentNode}return null}function Yl(e){return e=e[un]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Pr(e){return e[Gl]||null}var yo=[],pl=-1;function Tn(e){return{current:e}}function je(e){0>pl||(e.current=yo[pl],yo[pl]=null,pl--)}function De(e,t){pl++,yo[pl]=e.current,e.current=t}var Rn={},et=Tn(Rn),kt=Tn(!1),Fn=Rn;function fl(e,t){var n=e.type.contextTypes;if(!n)return Rn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function Br(){je(kt),je(et)}function Us(e,t,n){if(et.current!==Rn)throw Error(s(168));De(et,t),De(kt,n)}function Vs(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var a in l)if(!(a in t))throw Error(s(108,Ie(e)||"Unknown",a));return ie({},n,l)}function Nr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Fn=et.current,De(et,e),De(kt,kt.current),!0}function Ks(e,t,n){var l=e.stateNode;if(!l)throw Error(s(169));n?(e=Vs(e,t,Fn),l.__reactInternalMemoizedMergedChildContext=e,je(kt),je(et),De(et,e)):je(kt),De(kt,n)}var mn=null,Ur=!1,Ao=!1;function Ws(e){mn===null?mn=[e]:mn.push(e)}function Lu(e){Ur=!0,Ws(e)}function In(){if(!Ao&&mn!==null){Ao=!0;var e=0,t=xe;try{var n=mn;for(xe=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}mn=null,Ur=!1}catch(a){throw mn!==null&&(mn=mn.slice(e+1)),zi(ja,In),a}finally{xe=t,Ao=!1}}return null}var ml=[],hl=0,Vr=null,Kr=0,zt=[],Zt=0,zn=null,hn=1,_n="";function qn(e,t){ml[hl++]=Kr,ml[hl++]=Vr,Vr=e,Kr=t}function Fs(e,t,n){zt[Zt++]=hn,zt[Zt++]=_n,zt[Zt++]=zn,zn=e;var l=hn;e=_n;var a=32-en(l)-1;l&=~(1<<a),n+=1;var o=32-en(t)+a;if(30<o){var u=a-a%5;o=(l&(1<<u)-1).toString(32),l>>=u,a-=u,hn=1<<32-en(t)+a|n<<a|l,_n=o+e}else hn=1<<o|n<<a|l,_n=e}function Eo(e){e.return!==null&&(qn(e,1),Fs(e,1,0))}function wo(e){for(;e===Vr;)Vr=ml[--hl],ml[hl]=null,Kr=ml[--hl],ml[hl]=null;for(;e===zn;)zn=zt[--Zt],zt[Zt]=null,_n=zt[--Zt],zt[Zt]=null,hn=zt[--Zt],zt[Zt]=null}var Ut=null,Kt=null,Pe=!1,nn=null;function zs(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Kt=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:hn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Kt=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(Pe){var t=Kt;if(t){var n=t;if(!qs(e,t)){if(Mo(e))throw Error(s(418));t=bn(n.nextSibling);var l=Ut;t&&qs(e,t)?zs(l,n):(e.flags=e.flags&-4097|2,Pe=!1,Ut=e)}}else{if(Mo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Pe=!1,Ut=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function Wr(e){if(e!==Ut)return!1;if(!Pe)return Zs(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mo(e.type,e.memoizedProps)),t&&(t=Kt)){if(Mo(e))throw Hs(),Error(s(418));for(;t;)zs(e,t),t=bn(t.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Ut?bn(e.stateNode.nextSibling):null;return!0}function Hs(){for(var e=Kt;e;)e=bn(e.nextSibling)}function _l(){Kt=Ut=null,Pe=!1}function Co(e){nn===null?nn=[e]:nn.push(e)}var ju=re.ReactCurrentBatchConfig;function Jl(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var l=n.stateNode}if(!l)throw Error(s(147,e));var a=l,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(u){var f=a.refs;u===null?delete f[o]:f[o]=u},t._stringRef=o,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function Gs(e){function t(C,A){if(e){var b=C.deletions;b===null?(C.deletions=[A],C.flags|=16):b.push(A)}}function n(C,A){if(!e)return null;for(;A!==null;)t(C,A),A=A.sibling;return null}function l(C,A){for(C=new Map;A!==null;)A.key!==null?C.set(A.key,A):C.set(A.index,A),A=A.sibling;return C}function a(C,A){return C=Un(C,A),C.index=0,C.sibling=null,C}function o(C,A,b){return C.index=b,e?(b=C.alternate,b!==null?(b=b.index,b<A?(C.flags|=2,A):b):(C.flags|=2,A)):(C.flags|=1048576,A)}function u(C){return e&&C.alternate===null&&(C.flags|=2),C}function f(C,A,b,Y){return A===null||A.tag!==6?(A=_i(b,C.mode,Y),A.return=C,A):(A=a(A,b),A.return=C,A)}function _(C,A,b,Y){var de=b.type;return de===me?q(C,A,b.props.children,Y,b.key):A!==null&&(A.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Je&&Qs(de)===A.type)?(Y=a(A,b.props),Y.ref=Jl(C,A,b),Y.return=C,Y):(Y=fa(b.type,b.key,b.props,null,C.mode,Y),Y.ref=Jl(C,A,b),Y.return=C,Y)}function T(C,A,b,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==b.containerInfo||A.stateNode.implementation!==b.implementation?(A=gi(b,C.mode,Y),A.return=C,A):(A=a(A,b.children||[]),A.return=C,A)}function q(C,A,b,Y,de){return A===null||A.tag!==7?(A=$n(b,C.mode,Y,de),A.return=C,A):(A=a(A,b),A.return=C,A)}function H(C,A,b){if(typeof A=="string"&&A!==""||typeof A=="number")return A=_i(""+A,C.mode,b),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ge:return b=fa(A.type,A.key,A.props,null,C.mode,b),b.ref=Jl(C,null,A),b.return=C,b;case Ae:return A=gi(A,C.mode,b),A.return=C,A;case Je:var Y=A._init;return H(C,Y(A._payload),b)}if(Sl(A)||he(A))return A=$n(A,C.mode,b,null),A.return=C,A;Fr(C,A)}return null}function j(C,A,b,Y){var de=A!==null?A.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return de!==null?null:f(C,A,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ge:return b.key===de?_(C,A,b,Y):null;case Ae:return b.key===de?T(C,A,b,Y):null;case Je:return de=b._init,j(C,A,de(b._payload),Y)}if(Sl(b)||he(b))return de!==null?null:q(C,A,b,Y,null);Fr(C,b)}return null}function ae(C,A,b,Y,de){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return C=C.get(b)||null,f(A,C,""+Y,de);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ge:return C=C.get(Y.key===null?b:Y.key)||null,_(A,C,Y,de);case Ae:return C=C.get(Y.key===null?b:Y.key)||null,T(A,C,Y,de);case Je:var pe=Y._init;return ae(C,A,b,pe(Y._payload),de)}if(Sl(Y)||he(Y))return C=C.get(b)||null,q(A,C,Y,de,null);Fr(A,Y)}return null}function se(C,A,b,Y){for(var de=null,pe=null,fe=A,_e=A=0,Ye=null;fe!==null&&_e<b.length;_e++){fe.index>_e?(Ye=fe,fe=null):Ye=fe.sibling;var ke=j(C,fe,b[_e],Y);if(ke===null){fe===null&&(fe=Ye);break}e&&fe&&ke.alternate===null&&t(C,fe),A=o(ke,A,_e),pe===null?de=ke:pe.sibling=ke,pe=ke,fe=Ye}if(_e===b.length)return n(C,fe),Pe&&qn(C,_e),de;if(fe===null){for(;_e<b.length;_e++)fe=H(C,b[_e],Y),fe!==null&&(A=o(fe,A,_e),pe===null?de=fe:pe.sibling=fe,pe=fe);return Pe&&qn(C,_e),de}for(fe=l(C,fe);_e<b.length;_e++)Ye=ae(fe,C,_e,b[_e],Y),Ye!==null&&(e&&Ye.alternate!==null&&fe.delete(Ye.key===null?_e:Ye.key),A=o(Ye,A,_e),pe===null?de=Ye:pe.sibling=Ye,pe=Ye);return e&&fe.forEach(function(Vn){return t(C,Vn)}),Pe&&qn(C,_e),de}function ce(C,A,b,Y){var de=he(b);if(typeof de!="function")throw Error(s(150));if(b=de.call(b),b==null)throw Error(s(151));for(var pe=de=null,fe=A,_e=A=0,Ye=null,ke=b.next();fe!==null&&!ke.done;_e++,ke=b.next()){fe.index>_e?(Ye=fe,fe=null):Ye=fe.sibling;var Vn=j(C,fe,ke.value,Y);if(Vn===null){fe===null&&(fe=Ye);break}e&&fe&&Vn.alternate===null&&t(C,fe),A=o(Vn,A,_e),pe===null?de=Vn:pe.sibling=Vn,pe=Vn,fe=Ye}if(ke.done)return n(C,fe),Pe&&qn(C,_e),de;if(fe===null){for(;!ke.done;_e++,ke=b.next())ke=H(C,ke.value,Y),ke!==null&&(A=o(ke,A,_e),pe===null?de=ke:pe.sibling=ke,pe=ke);return Pe&&qn(C,_e),de}for(fe=l(C,fe);!ke.done;_e++,ke=b.next())ke=ae(fe,C,_e,ke.value,Y),ke!==null&&(e&&ke.alternate!==null&&fe.delete(ke.key===null?_e:ke.key),A=o(ke,A,_e),pe===null?de=ke:pe.sibling=ke,pe=ke);return e&&fe.forEach(function(fc){return t(C,fc)}),Pe&&qn(C,_e),de}function We(C,A,b,Y){if(typeof b=="object"&&b!==null&&b.type===me&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ge:e:{for(var de=b.key,pe=A;pe!==null;){if(pe.key===de){if(de=b.type,de===me){if(pe.tag===7){n(C,pe.sibling),A=a(pe,b.props.children),A.return=C,C=A;break e}}else if(pe.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Je&&Qs(de)===pe.type){n(C,pe.sibling),A=a(pe,b.props),A.ref=Jl(C,pe,b),A.return=C,C=A;break e}n(C,pe);break}else t(C,pe);pe=pe.sibling}b.type===me?(A=$n(b.props.children,C.mode,Y,b.key),A.return=C,C=A):(Y=fa(b.type,b.key,b.props,null,C.mode,Y),Y.ref=Jl(C,A,b),Y.return=C,C=Y)}return u(C);case Ae:e:{for(pe=b.key;A!==null;){if(A.key===pe)if(A.tag===4&&A.stateNode.containerInfo===b.containerInfo&&A.stateNode.implementation===b.implementation){n(C,A.sibling),A=a(A,b.children||[]),A.return=C,C=A;break e}else{n(C,A);break}else t(C,A);A=A.sibling}A=gi(b,C.mode,Y),A.return=C,C=A}return u(C);case Je:return pe=b._init,We(C,A,pe(b._payload),Y)}if(Sl(b))return se(C,A,b,Y);if(he(b))return ce(C,A,b,Y);Fr(C,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,A!==null&&A.tag===6?(n(C,A.sibling),A=a(A,b),A.return=C,C=A):(n(C,A),A=_i(b,C.mode,Y),A.return=C,C=A),u(C)):n(C,A)}return We}var gl=Gs(!0),Ys=Gs(!1),zr=Tn(null),qr=null,vl=null,So=null;function xo(){So=vl=qr=null}function bo(e){var t=zr.current;je(zr),e._currentValue=t}function To(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function yl(e,t){qr=e,So=vl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Tt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(So!==e)if(e={context:e,memoizedValue:t,next:null},vl===null){if(qr===null)throw Error(s(308));vl=e,qr.dependencies={lanes:0,firstContext:e}}else vl=vl.next=e;return t}var Zn=null;function Ro(e){Zn===null?Zn=[e]:Zn.push(e)}function Js(e,t,n,l){var a=t.interleaved;return a===null?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,gn(e,l)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,gn(e,n)}return a=l.interleaved,a===null?(t.next=t,Ro(l)):(t.next=a.next,a.next=t),l.interleaved=t,gn(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ba(e,n)}}function $s(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=u:o=o.next=u,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,l){var a=e.updateQueue;Dn=!1;var o=a.firstBaseUpdate,u=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var _=f,T=_.next;_.next=null,u===null?o=T:u.next=T,u=_;var q=e.alternate;q!==null&&(q=q.updateQueue,f=q.lastBaseUpdate,f!==u&&(f===null?q.firstBaseUpdate=T:f.next=T,q.lastBaseUpdate=_))}if(o!==null){var H=a.baseState;u=0,q=T=_=null,f=o;do{var j=f.lane,ae=f.eventTime;if((l&j)===j){q!==null&&(q=q.next={eventTime:ae,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var se=e,ce=f;switch(j=t,ae=n,ce.tag){case 1:if(se=ce.payload,typeof se=="function"){H=se.call(ae,H,j);break e}H=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ce.payload,j=typeof se=="function"?se.call(ae,H,j):se,j==null)break e;H=ie({},H,j);break e;case 2:Dn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[f]:j.push(f))}else ae={eventTime:ae,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},q===null?(T=q=ae,_=H):q=q.next=ae,u|=j;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;j=f,f=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(q===null&&(_=H),a.baseState=_,a.firstBaseUpdate=T,a.lastBaseUpdate=q,t=a.shared.interleaved,t!==null){a=t;do u|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Gn|=u,e.lanes=u,e.memoizedState=H}}function e0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],a=l.callback;if(a!==null){if(l.callback=null,l=n,typeof a!="function")throw Error(s(191,a));a.call(l)}}}var Xl={},cn=Tn(Xl),$l=Tn(Xl),er=Tn(Xl);function Hn(e){if(e===Xl)throw Error(s(174));return e}function Do(e,t){switch(De(er,t),De($l,e),De(cn,Xl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}je(cn),De(cn,t)}function Al(){je(cn),je($l),je(er)}function t0(e){Hn(er.current);var t=Hn(cn.current),n=Ca(t,e.type);t!==n&&(De($l,e),De(cn,n))}function Lo(e){$l.current===e&&(je(cn),je($l))}var Be=Tn(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jo=[];function Oo(){for(var e=0;e<jo.length;e++)jo[e]._workInProgressVersionPrimary=null;jo.length=0}var Gr=re.ReactCurrentDispatcher,Po=re.ReactCurrentBatchConfig,Qn=0,Ne=null,Ze=null,Qe=null,Yr=!1,tr=!1,nr=0,Ou=0;function ot(){throw Error(s(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function No(e,t,n,l,a,o){if(Qn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gr.current=e===null||e.memoizedState===null?Uu:Vu,e=n(l,a),tr){o=0;do{if(tr=!1,nr=0,25<=o)throw Error(s(301));o+=1,Qe=Ze=null,t.updateQueue=null,Gr.current=Ku,e=n(l,a)}while(tr)}if(Gr.current=$r,t=Ze!==null&&Ze.next!==null,Qn=0,Qe=Ze=Ne=null,Yr=!1,t)throw Error(s(300));return e}function Uo(){var e=nr!==0;return nr=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ne.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Yt(){if(Ze===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=Qe===null?Ne.memoizedState:Qe.next;if(t!==null)Qe=t,Ze=e;else{if(e===null)throw Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Qe===null?Ne.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function lr(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Yt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=Ze,a=l.baseQueue,o=n.pending;if(o!==null){if(a!==null){var u=a.next;a.next=o.next,o.next=u}l.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,l=l.baseState;var f=u=null,_=null,T=o;do{var q=T.lane;if((Qn&q)===q)_!==null&&(_=_.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),l=T.hasEagerState?T.eagerState:e(l,T.action);else{var H={lane:q,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};_===null?(f=_=H,u=l):_=_.next=H,Ne.lanes|=q,Gn|=q}T=T.next}while(T!==null&&T!==o);_===null?u=l:_.next=f,tn(l,t.memoizedState)||(Tt=!0),t.memoizedState=l,t.baseState=u,t.baseQueue=_,n.lastRenderedState=l}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Ne.lanes|=o,Gn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Yt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do o=e(o,u.action),u=u.next;while(u!==a);tn(o,t.memoizedState)||(Tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,l]}function n0(){}function l0(e,t){var n=Ne,l=Yt(),a=t(),o=!tn(l.memoizedState,a);if(o&&(l.memoizedState=a,Tt=!0),l=l.queue,Wo(o0.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,rr(9,a0.bind(null,n,l,a,t),void 0,null),Ge===null)throw Error(s(349));(Qn&30)!==0||r0(n,t,a)}return a}function r0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function a0(e,t,n,l){t.value=n,t.getSnapshot=l,i0(t)&&s0(e)}function o0(e,t,n){return n(function(){i0(t)&&s0(e)})}function i0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function s0(e){var t=gn(e,1);t!==null&&on(t,e,1,-1)}function u0(e){var t=dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Nu.bind(null,Ne,e),[t.memoizedState,e]}function rr(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function c0(){return Yt().memoizedState}function Jr(e,t,n,l){var a=dn();Ne.flags|=e,a.memoizedState=rr(1|t,n,void 0,l===void 0?null:l)}function Xr(e,t,n,l){var a=Yt();l=l===void 0?null:l;var o=void 0;if(Ze!==null){var u=Ze.memoizedState;if(o=u.destroy,l!==null&&Bo(l,u.deps)){a.memoizedState=rr(t,n,o,l);return}}Ne.flags|=e,a.memoizedState=rr(1|t,n,o,l)}function d0(e,t){return Jr(8390656,8,e,t)}function Wo(e,t){return Xr(2048,8,e,t)}function p0(e,t){return Xr(4,2,e,t)}function f0(e,t){return Xr(4,4,e,t)}function m0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h0(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4,4,m0.bind(null,t,e),n)}function Fo(){}function _0(e,t){var n=Yt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Bo(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function g0(e,t){var n=Yt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&Bo(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function v0(e,t,n){return(Qn&21)===0?(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n):(tn(n,t)||(n=Qi(),Ne.lanes|=n,Gn|=n,e.baseState=!0),t)}function Pu(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var l=Po.transition;Po.transition={};try{e(!1),t()}finally{xe=n,Po.transition=l}}function y0(){return Yt().memoizedState}function Bu(e,t,n){var l=Bn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},A0(e))E0(t,n);else if(n=Js(e,t,n,l),n!==null){var a=ft();on(n,e,l,a),w0(n,t,l)}}function Nu(e,t,n){var l=Bn(e),a={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(e))E0(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var u=t.lastRenderedState,f=o(u,n);if(a.hasEagerState=!0,a.eagerState=f,tn(f,u)){var _=t.interleaved;_===null?(a.next=a,Ro(t)):(a.next=_.next,_.next=a),t.interleaved=a;return}}catch{}finally{}n=Js(e,t,a,l),n!==null&&(a=ft(),on(n,e,l,a),w0(n,t,l))}}function A0(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function E0(e,t){tr=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function w0(e,t,n){if((n&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Ba(e,n)}}var $r={readContext:Ht,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Uu={readContext:Ht,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:d0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,m0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=dn();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Bu.bind(null,Ne,e),[l.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:u0,useDebugValue:Fo,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=u0(!1),t=e[0];return e=Pu.bind(null,e[1]),dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=Ne,a=dn();if(Pe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ge===null)throw Error(s(349));(Qn&30)!==0||r0(l,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,d0(o0.bind(null,l,o,e),[e]),l.flags|=2048,rr(9,a0.bind(null,l,o,n,t),void 0,null),n},useId:function(){var e=dn(),t=Ge.identifierPrefix;if(Pe){var n=_n,l=hn;n=(l&~(1<<32-en(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ou++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vu={readContext:Ht,useCallback:_0,useContext:Ht,useEffect:Wo,useImperativeHandle:h0,useInsertionEffect:p0,useLayoutEffect:f0,useMemo:g0,useReducer:Vo,useRef:c0,useState:function(){return Vo(lr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Yt();return v0(t,Ze.memoizedState,e)},useTransition:function(){var e=Vo(lr)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:n0,useSyncExternalStore:l0,useId:y0,unstable_isNewReconciler:!1},Ku={readContext:Ht,useCallback:_0,useContext:Ht,useEffect:Wo,useImperativeHandle:h0,useInsertionEffect:p0,useLayoutEffect:f0,useMemo:g0,useReducer:Ko,useRef:c0,useState:function(){return Ko(lr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Yt();return Ze===null?t.memoizedState=e:v0(t,Ze.memoizedState,e)},useTransition:function(){var e=Ko(lr)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:n0,useSyncExternalStore:l0,useId:y0,unstable_isNewReconciler:!1};function ln(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zo(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ea={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ft(),a=Bn(e),o=vn(l,a);o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,a),t!==null&&(on(t,e,a,l),Zr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ft(),a=Bn(e),o=vn(l,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ln(e,o,a),t!==null&&(on(t,e,a,l),Zr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),l=Bn(e),a=vn(n,l);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,l),t!==null&&(on(t,e,l,n),Zr(t,e,l))}};function M0(e,t,n,l,a,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,u):t.prototype&&t.prototype.isPureReactComponent?!zl(n,l)||!zl(a,o):!0}function k0(e,t,n){var l=!1,a=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ht(o):(a=St(t)?Fn:et.current,l=t.contextTypes,o=(l=l!=null)?fl(e,a):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ea,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function C0(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ea.enqueueReplaceState(t,t.state,null)}function qo(e,t,n,l){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Io(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ht(o):(o=St(t)?Fn:et.current,a.context=fl(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zo(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ea.enqueueReplaceState(a,a.state,null),Hr(e,n,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function El(e,t){try{var n="",l=t;do n+=we(l),l=l.return;while(l);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wu=typeof WeakMap=="function"?WeakMap:Map;function S0(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){ia||(ia=!0,si=l),Ho(e,t)},n}function x0(e,t,n){n=vn(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;n.payload=function(){return l(a)},n.callback=function(){Ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t),typeof l!="function"&&(On===null?On=new Set([this]):On.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function b0(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Wu;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(a.add(n),e=nc.bind(null,e,t,n),t.then(e,e))}function T0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function R0(e,t,n,l,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Fu=re.ReactCurrentOwner,Tt=!1;function dt(e,t,n,l){t.child=e===null?Ys(t,null,n,l):gl(t,e.child,n,l)}function I0(e,t,n,l,a){n=n.render;var o=t.ref;return yl(t,a),l=No(e,t,n,l,o,a),n=Uo(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):(Pe&&n&&Eo(t),t.flags|=1,dt(e,t,l,a),t.child)}function D0(e,t,n,l,a){if(e===null){var o=n.type;return typeof o=="function"&&!hi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,L0(e,t,o,l,a)):(e=fa(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var u=o.memoizedProps;if(n=n.compare,n=n!==null?n:zl,n(u,l)&&e.ref===t.ref)return yn(e,t,a)}return t.flags|=1,e=Un(o,l),e.ref=t.ref,e.return=t,t.child=e}function L0(e,t,n,l,a){if(e!==null){var o=e.memoizedProps;if(zl(o,l)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=l=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Tt=!0);else return t.lanes=e.lanes,yn(e,t,a)}return Qo(e,t,n,l,a)}function j0(e,t,n){var l=t.pendingProps,a=l.children,o=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Ml,Ft),Ft|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Ml,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=o!==null?o.baseLanes:n,De(Ml,Ft),Ft|=l}else o!==null?(l=o.baseLanes|n,t.memoizedState=null):l=n,De(Ml,Ft),Ft|=l;return dt(e,t,a,n),t.child}function O0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qo(e,t,n,l,a){var o=St(n)?Fn:et.current;return o=fl(t,o),yl(t,a),n=No(e,t,n,l,o,a),l=Uo(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):(Pe&&l&&Eo(t),t.flags|=1,dt(e,t,n,a),t.child)}function P0(e,t,n,l,a){if(St(n)){var o=!0;Nr(t)}else o=!1;if(yl(t,a),t.stateNode===null)na(e,t),k0(t,n,l),qo(t,n,l,a),l=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var _=u.context,T=n.contextType;typeof T=="object"&&T!==null?T=Ht(T):(T=St(n)?Fn:et.current,T=fl(t,T));var q=n.getDerivedStateFromProps,H=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function";H||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==l||_!==T)&&C0(t,u,l,T),Dn=!1;var j=t.memoizedState;u.state=j,Hr(t,l,u,a),_=t.memoizedState,f!==l||j!==_||kt.current||Dn?(typeof q=="function"&&(zo(t,n,q,l),_=t.memoizedState),(f=Dn||M0(t,n,f,l,j,_,T))?(H||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=_),u.props=l,u.state=_,u.context=T,l=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Xs(e,t),f=t.memoizedProps,T=t.type===t.elementType?f:ln(t.type,f),u.props=T,H=t.pendingProps,j=u.context,_=n.contextType,typeof _=="object"&&_!==null?_=Ht(_):(_=St(n)?Fn:et.current,_=fl(t,_));var ae=n.getDerivedStateFromProps;(q=typeof ae=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==H||j!==_)&&C0(t,u,l,_),Dn=!1,j=t.memoizedState,u.state=j,Hr(t,l,u,a);var se=t.memoizedState;f!==H||j!==se||kt.current||Dn?(typeof ae=="function"&&(zo(t,n,ae,l),se=t.memoizedState),(T=Dn||M0(t,n,T,l,j,se,_)||!1)?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,se,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,se,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=se),u.props=l,u.state=se,u.context=_,l=T):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),l=!1)}return Go(e,t,n,l,o,a)}function Go(e,t,n,l,a,o){O0(e,t);var u=(t.flags&128)!==0;if(!l&&!u)return a&&Ks(t,n,!1),yn(e,t,o);l=t.stateNode,Fu.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&u?(t.child=gl(t,e.child,null,o),t.child=gl(t,null,f,o)):dt(e,t,f,o),t.memoizedState=l.state,a&&Ks(t,n,!0),t.child}function B0(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),Do(e,t.containerInfo)}function N0(e,t,n,l,a){return _l(),Co(a),t.flags|=256,dt(e,t,n,l),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function U0(e,t,n){var l=t.pendingProps,a=Be.current,o=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De(Be,a&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=l.children,e=l.fallback,o?(l=t.mode,o=t.child,u={mode:"hidden",children:u},(l&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=u):o=ma(u,l,0,null),e=$n(e,l,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Jo(n),t.memoizedState=Yo,e):Xo(t,u));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return zu(e,t,u,l,f,a,n);if(o){o=l.fallback,u=t.mode,a=e.child,f=a.sibling;var _={mode:"hidden",children:l.children};return(u&1)===0&&t.child!==a?(l=t.child,l.childLanes=0,l.pendingProps=_,t.deletions=null):(l=Un(a,_),l.subtreeFlags=a.subtreeFlags&14680064),f!==null?o=Un(f,o):(o=$n(o,u,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,l=o,o=t.child,u=e.child.memoizedState,u=u===null?Jo(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},o.memoizedState=u,o.childLanes=e.childLanes&~n,t.memoizedState=Yo,l}return o=e.child,e=o.sibling,l=Un(o,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function Xo(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ta(e,t,n,l){return l!==null&&Co(l),gl(t,e.child,null,n),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zu(e,t,n,l,a,o,u){if(n)return t.flags&256?(t.flags&=-257,l=Zo(Error(s(422))),ta(e,t,u,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=l.fallback,a=t.mode,l=ma({mode:"visible",children:l.children},a,0,null),o=$n(o,a,u,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,(t.mode&1)!==0&&gl(t,e.child,null,u),t.child.memoizedState=Jo(u),t.memoizedState=Yo,o);if((t.mode&1)===0)return ta(e,t,u,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var f=l.dgst;return l=f,o=Error(s(419)),l=Zo(o,l,void 0),ta(e,t,u,l)}if(f=(u&e.childLanes)!==0,Tt||f){if(l=Ge,l!==null){switch(u&-u){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(l.suspendedLanes|u))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,gn(e,a),on(l,e,a,-1))}return mi(),l=Zo(Error(s(421))),ta(e,t,u,l)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=lc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Kt=bn(a.nextSibling),Ut=t,Pe=!0,nn=null,e!==null&&(zt[Zt++]=hn,zt[Zt++]=_n,zt[Zt++]=zn,hn=e.id,_n=e.overflow,zn=t),t=Xo(t,l.children),t.flags|=4096,t)}function V0(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),To(e.return,t,n)}function $o(e,t,n,l,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=a)}function K0(e,t,n){var l=t.pendingProps,a=l.revealOrder,o=l.tail;if(dt(e,t,l.children,n),l=Be.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V0(e,n,t);else if(e.tag===19)V0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(De(Be,l),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$o(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$o(t,!0,n,null,o);break;case"together":$o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function na(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qu(e,t,n){switch(t.tag){case 3:B0(t),_l();break;case 5:t0(t);break;case 1:St(t.type)&&Nr(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,a=t.memoizedProps.value;De(zr,l._currentValue),l._currentValue=a;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(De(Be,Be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?U0(e,t,n):(De(Be,Be.current&1),e=yn(e,t,n),e!==null?e.sibling:null);De(Be,Be.current&1);break;case 19:if(l=(n&t.childLanes)!==0,(e.flags&128)!==0){if(l)return K0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De(Be,Be.current),l)break;return null;case 22:case 23:return t.lanes=0,j0(e,t,n)}return yn(e,t,n)}var W0,ei,F0,z0;W0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ei=function(){},F0=function(e,t,n,l){var a=e.memoizedProps;if(a!==l){e=t.stateNode,Hn(cn.current);var o=null;switch(n){case"input":a=Ea(e,a),l=Ea(e,l),o=[];break;case"select":a=ie({},a,{value:void 0}),l=ie({},l,{value:void 0}),o=[];break;case"textarea":a=ka(e,a),l=ka(e,l),o=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Or)}Sa(n,l);var u;n=null;for(T in a)if(!l.hasOwnProperty(T)&&a.hasOwnProperty(T)&&a[T]!=null)if(T==="style"){var f=a[T];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(p.hasOwnProperty(T)?o||(o=[]):(o=o||[]).push(T,null));for(T in l){var _=l[T];if(f=a?.[T],l.hasOwnProperty(T)&&_!==f&&(_!=null||f!=null))if(T==="style")if(f){for(u in f)!f.hasOwnProperty(u)||_&&_.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in _)_.hasOwnProperty(u)&&f[u]!==_[u]&&(n||(n={}),n[u]=_[u])}else n||(o||(o=[]),o.push(T,n)),n=_;else T==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,f=f?f.__html:void 0,_!=null&&f!==_&&(o=o||[]).push(T,_)):T==="children"?typeof _!="string"&&typeof _!="number"||(o=o||[]).push(T,""+_):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(p.hasOwnProperty(T)?(_!=null&&T==="onScroll"&&Le("scroll",e),o||f===_||(o=[])):(o=o||[]).push(T,_))}n&&(o=o||[]).push("style",n);var T=o;(t.updateQueue=T)&&(t.flags|=4)}},z0=function(e,t,n,l){n!==l&&(t.flags|=4)};function ar(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Zu(e,t,n){var l=t.pendingProps;switch(wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return St(t.type)&&Br(),it(t),null;case 3:return l=t.stateNode,Al(),je(kt),je(et),Oo(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nn!==null&&(di(nn),nn=null))),ei(e,t),it(t),null;case 5:Lo(t);var a=Hn(er.current);if(n=t.type,e!==null&&t.stateNode!=null)F0(e,t,n,l,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(s(166));return it(t),null}if(e=Hn(cn.current),Wr(t)){l=t.stateNode,n=t.type;var o=t.memoizedProps;switch(l[un]=t,l[Gl]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",l),Le("close",l);break;case"iframe":case"object":case"embed":Le("load",l);break;case"video":case"audio":for(a=0;a<Zl.length;a++)Le(Zl[a],l);break;case"source":Le("error",l);break;case"img":case"image":case"link":Le("error",l),Le("load",l);break;case"details":Le("toggle",l);break;case"input":ki(l,o),Le("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!o.multiple},Le("invalid",l);break;case"textarea":xi(l,o),Le("invalid",l)}Sa(n,o),a=null;for(var u in o)if(o.hasOwnProperty(u)){var f=o[u];u==="children"?typeof f=="string"?l.textContent!==f&&(o.suppressHydrationWarning!==!0&&jr(l.textContent,f,e),a=["children",f]):typeof f=="number"&&l.textContent!==""+f&&(o.suppressHydrationWarning!==!0&&jr(l.textContent,f,e),a=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Le("scroll",l)}switch(n){case"input":dr(l),Si(l,o,!0);break;case"textarea":dr(l),Ti(l);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(l.onclick=Or)}l=a,t.updateQueue=l,l!==null&&(t.flags|=4)}else{u=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ri(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=u.createElement(n,{is:l.is}):(e=u.createElement(n),n==="select"&&(u=e,l.multiple?u.multiple=!0:l.size&&(u.size=l.size))):e=u.createElementNS(e,n),e[un]=t,e[Gl]=l,W0(e,t,!1,!1),t.stateNode=e;e:{switch(u=xa(n,l),n){case"dialog":Le("cancel",e),Le("close",e),a=l;break;case"iframe":case"object":case"embed":Le("load",e),a=l;break;case"video":case"audio":for(a=0;a<Zl.length;a++)Le(Zl[a],e);a=l;break;case"source":Le("error",e),a=l;break;case"img":case"image":case"link":Le("error",e),Le("load",e),a=l;break;case"details":Le("toggle",e),a=l;break;case"input":ki(e,l),a=Ea(e,l),Le("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=ie({},l,{value:void 0}),Le("invalid",e);break;case"textarea":xi(e,l),a=ka(e,l),Le("invalid",e);break;default:a=l}Sa(n,a),f=a;for(o in f)if(f.hasOwnProperty(o)){var _=f[o];o==="style"?Li(e,_):o==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&Ii(e,_)):o==="children"?typeof _=="string"?(n!=="textarea"||_!=="")&&xl(e,_):typeof _=="number"&&xl(e,""+_):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(p.hasOwnProperty(o)?_!=null&&o==="onScroll"&&Le("scroll",e):_!=null&&te(e,o,_,u))}switch(n){case"input":dr(e),Si(e,l,!1);break;case"textarea":dr(e),Ti(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Se(l.value));break;case"select":e.multiple=!!l.multiple,o=l.value,o!=null?tl(e,!!l.multiple,o,!1):l.defaultValue!=null&&tl(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Or)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)z0(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(n=Hn(er.current),Hn(cn.current),Wr(t)){if(l=t.stateNode,n=t.memoizedProps,l[un]=t,(o=l.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:jr(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(l.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[un]=t,t.stateNode=l}return it(t),null;case 13:if(je(Be),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hs(),_l(),t.flags|=98560,o=!1;else if(o=Wr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[un]=t}else _l(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else nn!==null&&(di(nn),nn=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Be.current&1)!==0?He===0&&(He=3):mi())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Al(),ei(e,t),e===null&&Hl(t.stateNode.containerInfo),it(t),null;case 10:return bo(t.type._context),it(t),null;case 17:return St(t.type)&&Br(),it(t),null;case 19:if(je(Be),o=t.memoizedState,o===null)return it(t),null;if(l=(t.flags&128)!==0,u=o.rendering,u===null)if(l)ar(o,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Qr(e),u!==null){for(t.flags|=128,ar(o,!1),l=u.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)o=n,e=l,o.flags&=14680066,u=o.alternate,u===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=u.childLanes,o.lanes=u.lanes,o.child=u.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=u.memoizedProps,o.memoizedState=u.memoizedState,o.updateQueue=u.updateQueue,o.type=u.type,e=u.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return De(Be,Be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ke()>kl&&(t.flags|=128,l=!0,ar(o,!1),t.lanes=4194304)}else{if(!l)if(e=Qr(u),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!Pe)return it(t),null}else 2*Ke()-o.renderingStartTime>kl&&n!==1073741824&&(t.flags|=128,l=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(n=o.last,n!==null?n.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,n=Be.current,De(Be,l?n&1|2:n&1),t):(it(t),null);case 22:case 23:return fi(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Ft&1073741824)!==0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Hu(e,t){switch(wo(t),t.tag){case 1:return St(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Al(),je(kt),je(et),Oo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Lo(t),null;case 13:if(je(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));_l()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Be),null;case 4:return Al(),null;case 10:return bo(t.type._context),null;case 22:case 23:return fi(),null;case 24:return null;default:return null}}var la=!1,ut=!1,Qu=typeof WeakSet=="function"?WeakSet:Set,oe=null;function wl(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Ue(e,t,l)}else n.current=null}function ti(e,t,n){try{n()}catch(l){Ue(e,t,l)}}var q0=!1;function Gu(e,t){if(po=Mr,e=Ms(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var u=0,f=-1,_=-1,T=0,q=0,H=e,j=null;t:for(;;){for(var ae;H!==n||a!==0&&H.nodeType!==3||(f=u+a),H!==o||l!==0&&H.nodeType!==3||(_=u+l),H.nodeType===3&&(u+=H.nodeValue.length),(ae=H.firstChild)!==null;)j=H,H=ae;for(;;){if(H===e)break t;if(j===n&&++T===a&&(f=u),j===o&&++q===l&&(_=u),(ae=H.nextSibling)!==null)break;H=j,j=H.parentNode}H=ae}n=f===-1||_===-1?null:{start:f,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(fo={focusedElem:e,selectionRange:n},Mr=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var se=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ce=se.memoizedProps,We=se.memoizedState,C=t.stateNode,A=C.getSnapshotBeforeUpdate(t.elementType===t.type?ce:ln(t.type,ce),We);C.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Y){Ue(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return se=q0,q0=!1,se}function or(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&ti(t,n,o)}a=a.next}while(a!==l)}}function ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function ni(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Z0(e){var t=e.alternate;t!==null&&(e.alternate=null,Z0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[un],delete t[Gl],delete t[vo],delete t[Iu],delete t[Du])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function H0(e){return e.tag===5||e.tag===3||e.tag===4}function Q0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function li(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Or));else if(l!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}function ri(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(ri(e,t,n),e=e.sibling;e!==null;)ri(e,t,n),e=e.sibling}var Xe=null,rn=!1;function jn(e,t,n){for(n=n.child;n!==null;)G0(e,t,n),n=n.sibling}function G0(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(gr,n)}catch{}switch(n.tag){case 5:ut||wl(n,t);case 6:var l=Xe,a=rn;Xe=null,jn(e,t,n),Xe=l,rn=a,Xe!==null&&(rn?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(rn?(e=Xe,n=n.stateNode,e.nodeType===8?go(e.parentNode,n):e.nodeType===1&&go(e,n),Nl(e)):go(Xe,n.stateNode));break;case 4:l=Xe,a=rn,Xe=n.stateNode.containerInfo,rn=!0,jn(e,t,n),Xe=l,rn=a;break;case 0:case 11:case 14:case 15:if(!ut&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var o=a,u=o.destroy;o=o.tag,u!==void 0&&((o&2)!==0||(o&4)!==0)&&ti(n,t,u),a=a.next}while(a!==l)}jn(e,t,n);break;case 1:if(!ut&&(wl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(f){Ue(n,t,f)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(ut=(l=ut)||n.memoizedState!==null,jn(e,t,n),ut=l):jn(e,t,n);break;default:jn(e,t,n)}}function Y0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qu),t.forEach(function(l){var a=rc.bind(null,e,l);n.has(l)||(n.add(l),l.then(a,a))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];try{var o=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:Xe=f.stateNode,rn=!1;break e;case 3:Xe=f.stateNode.containerInfo,rn=!0;break e;case 4:Xe=f.stateNode.containerInfo,rn=!0;break e}f=f.return}if(Xe===null)throw Error(s(160));G0(o,u,a),Xe=null,rn=!1;var _=a.alternate;_!==null&&(_.return=null),a.return=null}catch(T){Ue(a,t,T)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)J0(t,e),t=t.sibling}function J0(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),pn(e),l&4){try{or(3,e,e.return),ra(3,e)}catch(ce){Ue(e,e.return,ce)}try{or(5,e,e.return)}catch(ce){Ue(e,e.return,ce)}}break;case 1:an(t,e),pn(e),l&512&&n!==null&&wl(n,n.return);break;case 5:if(an(t,e),pn(e),l&512&&n!==null&&wl(n,n.return),e.flags&32){var a=e.stateNode;try{xl(a,"")}catch(ce){Ue(e,e.return,ce)}}if(l&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,u=n!==null?n.memoizedProps:o,f=e.type,_=e.updateQueue;if(e.updateQueue=null,_!==null)try{f==="input"&&o.type==="radio"&&o.name!=null&&Ci(a,o),xa(f,u);var T=xa(f,o);for(u=0;u<_.length;u+=2){var q=_[u],H=_[u+1];q==="style"?Li(a,H):q==="dangerouslySetInnerHTML"?Ii(a,H):q==="children"?xl(a,H):te(a,q,H,T)}switch(f){case"input":wa(a,o);break;case"textarea":bi(a,o);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var ae=o.value;ae!=null?tl(a,!!o.multiple,ae,!1):j!==!!o.multiple&&(o.defaultValue!=null?tl(a,!!o.multiple,o.defaultValue,!0):tl(a,!!o.multiple,o.multiple?[]:"",!1))}a[Gl]=o}catch(ce){Ue(e,e.return,ce)}}break;case 6:if(an(t,e),pn(e),l&4){if(e.stateNode===null)throw Error(s(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(ce){Ue(e,e.return,ce)}}break;case 3:if(an(t,e),pn(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(t.containerInfo)}catch(ce){Ue(e,e.return,ce)}break;case 4:an(t,e),pn(e);break;case 13:an(t,e),pn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ii=Ke())),l&4&&Y0(e);break;case 22:if(q=n!==null&&n.memoizedState!==null,e.mode&1?(ut=(T=ut)||q,an(t,e),ut=T):an(t,e),pn(e),l&8192){if(T=e.memoizedState!==null,(e.stateNode.isHidden=T)&&!q&&(e.mode&1)!==0)for(oe=e,q=e.child;q!==null;){for(H=oe=q;oe!==null;){switch(j=oe,ae=j.child,j.tag){case 0:case 11:case 14:case 15:or(4,j,j.return);break;case 1:wl(j,j.return);var se=j.stateNode;if(typeof se.componentWillUnmount=="function"){l=j,n=j.return;try{t=l,se.props=t.memoizedProps,se.state=t.memoizedState,se.componentWillUnmount()}catch(ce){Ue(l,n,ce)}}break;case 5:wl(j,j.return);break;case 22:if(j.memoizedState!==null){e1(H);continue}}ae!==null?(ae.return=j,oe=ae):e1(H)}q=q.sibling}e:for(q=null,H=e;;){if(H.tag===5){if(q===null){q=H;try{a=H.stateNode,T?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(f=H.stateNode,_=H.memoizedProps.style,u=_!=null&&_.hasOwnProperty("display")?_.display:null,f.style.display=Di("display",u))}catch(ce){Ue(e,e.return,ce)}}}else if(H.tag===6){if(q===null)try{H.stateNode.nodeValue=T?"":H.memoizedProps}catch(ce){Ue(e,e.return,ce)}}else if((H.tag!==22&&H.tag!==23||H.memoizedState===null||H===e)&&H.child!==null){H.child.return=H,H=H.child;continue}if(H===e)break e;for(;H.sibling===null;){if(H.return===null||H.return===e)break e;q===H&&(q=null),H=H.return}q===H&&(q=null),H.sibling.return=H.return,H=H.sibling}}break;case 19:an(t,e),pn(e),l&4&&Y0(e);break;case 21:break;default:an(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(H0(n)){var l=n;break e}n=n.return}throw Error(s(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(xl(a,""),l.flags&=-33);var o=Q0(e);ri(e,o,a);break;case 3:case 4:var u=l.stateNode.containerInfo,f=Q0(e);li(e,f,u);break;default:throw Error(s(161))}}catch(_){Ue(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yu(e,t,n){oe=e,X0(e)}function X0(e,t,n){for(var l=(e.mode&1)!==0;oe!==null;){var a=oe,o=a.child;if(a.tag===22&&l){var u=a.memoizedState!==null||la;if(!u){var f=a.alternate,_=f!==null&&f.memoizedState!==null||ut;f=la;var T=ut;if(la=u,(ut=_)&&!T)for(oe=a;oe!==null;)u=oe,_=u.child,u.tag===22&&u.memoizedState!==null?t1(a):_!==null?(_.return=u,oe=_):t1(a);for(;o!==null;)oe=o,X0(o),o=o.sibling;oe=a,la=f,ut=T}$0(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,oe=o):$0(e)}}function $0(e){for(;oe!==null;){var t=oe;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ut||ra(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!ut)if(n===null)l.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ln(t.type,n.memoizedProps);l.componentDidUpdate(a,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&e0(t,o,l);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}e0(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var _=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&n.focus();break;case"img":_.src&&(n.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var T=t.alternate;if(T!==null){var q=T.memoizedState;if(q!==null){var H=q.dehydrated;H!==null&&Nl(H)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}ut||t.flags&512&&ni(t)}catch(j){Ue(t,t.return,j)}}if(t===e){oe=null;break}if(n=t.sibling,n!==null){n.return=t.return,oe=n;break}oe=t.return}}function e1(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,oe=n;break}oe=t.return}}function t1(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ra(4,t)}catch(_){Ue(t,n,_)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var a=t.return;try{l.componentDidMount()}catch(_){Ue(t,a,_)}}var o=t.return;try{ni(t)}catch(_){Ue(t,o,_)}break;case 5:var u=t.return;try{ni(t)}catch(_){Ue(t,u,_)}}}catch(_){Ue(t,t.return,_)}if(t===e){oe=null;break}var f=t.sibling;if(f!==null){f.return=t.return,oe=f;break}oe=t.return}}var Ju=Math.ceil,aa=re.ReactCurrentDispatcher,ai=re.ReactCurrentOwner,Jt=re.ReactCurrentBatchConfig,Ee=0,Ge=null,qe=null,$e=0,Ft=0,Ml=Tn(0),He=0,ir=null,Gn=0,oa=0,oi=0,sr=null,Rt=null,ii=0,kl=1/0,An=null,ia=!1,si=null,On=null,sa=!1,Pn=null,ua=0,ur=0,ui=null,ca=-1,da=0;function ft(){return(Ee&6)!==0?Ke():ca!==-1?ca:ca=Ke()}function Bn(e){return(e.mode&1)===0?1:(Ee&2)!==0&&$e!==0?$e&-$e:ju.transition!==null?(da===0&&(da=Qi()),da):(e=xe,e!==0||(e=window.event,e=e===void 0?16:ls(e.type)),e)}function on(e,t,n,l){if(50<ur)throw ur=0,ui=null,Error(s(185));Ll(e,n,l),((Ee&2)===0||e!==Ge)&&(e===Ge&&((Ee&2)===0&&(oa|=n),He===4&&Nn(e,$e)),Dt(e,l),n===1&&Ee===0&&(t.mode&1)===0&&(kl=Ke()+500,Ur&&In()))}function Dt(e,t){var n=e.callbackNode;j1(e,t);var l=Ar(e,e===Ge?$e:0);if(l===0)n!==null&&qi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&qi(n),t===1)e.tag===0?Lu(l1.bind(null,e)):Ws(l1.bind(null,e)),Tu(function(){(Ee&6)===0&&In()}),n=null;else{switch(Gi(l)){case 1:n=ja;break;case 4:n=Zi;break;case 16:n=_r;break;case 536870912:n=Hi;break;default:n=_r}n=d1(n,n1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function n1(e,t){if(ca=-1,da=0,(Ee&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Cl()&&e.callbackNode!==n)return null;var l=Ar(e,e===Ge?$e:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=pa(e,l);else{t=l;var a=Ee;Ee|=2;var o=a1();(Ge!==e||$e!==t)&&(An=null,kl=Ke()+500,Jn(e,t));do try{ec();break}catch(f){r1(e,f)}while(!0);xo(),aa.current=o,Ee=a,qe!==null?t=0:(Ge=null,$e=0,t=He)}if(t!==0){if(t===2&&(a=Oa(e),a!==0&&(l=a,t=ci(e,a))),t===1)throw n=ir,Jn(e,0),Nn(e,l),Dt(e,Ke()),n;if(t===6)Nn(e,l);else{if(a=e.current.alternate,(l&30)===0&&!Xu(a)&&(t=pa(e,l),t===2&&(o=Oa(e),o!==0&&(l=o,t=ci(e,o))),t===1))throw n=ir,Jn(e,0),Nn(e,l),Dt(e,Ke()),n;switch(e.finishedWork=a,e.finishedLanes=l,t){case 0:case 1:throw Error(s(345));case 2:Xn(e,Rt,An);break;case 3:if(Nn(e,l),(l&130023424)===l&&(t=ii+500-Ke(),10<t)){if(Ar(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){ft(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ho(Xn.bind(null,e,Rt,An),t);break}Xn(e,Rt,An);break;case 4:if(Nn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,a=-1;0<l;){var u=31-en(l);o=1<<u,u=t[u],u>a&&(a=u),l&=~o}if(l=a,l=Ke()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ju(l/1960))-l,10<l){e.timeoutHandle=ho(Xn.bind(null,e,Rt,An),l);break}Xn(e,Rt,An);break;case 5:Xn(e,Rt,An);break;default:throw Error(s(329))}}}return Dt(e,Ke()),e.callbackNode===n?n1.bind(null,e):null}function ci(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=pa(e,t),e!==2&&(t=Rt,Rt=n,t!==null&&di(t)),e}function di(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function Xu(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var a=n[l],o=a.getSnapshot;a=a.value;try{if(!tn(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~oi,t&=~oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),l=1<<n;e[n]=-1,t&=~l}}function l1(e){if((Ee&6)!==0)throw Error(s(327));Cl();var t=Ar(e,0);if((t&1)===0)return Dt(e,Ke()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var l=Oa(e);l!==0&&(t=l,n=ci(e,l))}if(n===1)throw n=ir,Jn(e,0),Nn(e,t),Dt(e,Ke()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,Rt,An),Dt(e,Ke()),null}function pi(e,t){var n=Ee;Ee|=1;try{return e(t)}finally{Ee=n,Ee===0&&(kl=Ke()+500,Ur&&In())}}function Yn(e){Pn!==null&&Pn.tag===0&&(Ee&6)===0&&Cl();var t=Ee;Ee|=1;var n=Jt.transition,l=xe;try{if(Jt.transition=null,xe=1,e)return e()}finally{xe=l,Jt.transition=n,Ee=t,(Ee&6)===0&&In()}}function fi(){Ft=Ml.current,je(Ml)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bu(n)),qe!==null)for(n=qe.return;n!==null;){var l=n;switch(wo(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Br();break;case 3:Al(),je(kt),je(et),Oo();break;case 5:Lo(l);break;case 4:Al();break;case 13:je(Be);break;case 19:je(Be);break;case 10:bo(l.type._context);break;case 22:case 23:fi()}n=n.return}if(Ge=e,qe=e=Un(e.current,null),$e=Ft=t,He=0,ir=null,oi=oa=Gn=0,Rt=sr=null,Zn!==null){for(t=0;t<Zn.length;t++)if(n=Zn[t],l=n.interleaved,l!==null){n.interleaved=null;var a=l.next,o=n.pending;if(o!==null){var u=o.next;o.next=a,l.next=u}n.pending=l}Zn=null}return e}function r1(e,t){do{var n=qe;try{if(xo(),Gr.current=$r,Yr){for(var l=Ne.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}Yr=!1}if(Qn=0,Qe=Ze=Ne=null,tr=!1,nr=0,ai.current=null,n===null||n.return===null){He=1,ir=t,qe=null;break}e:{var o=e,u=n.return,f=n,_=t;if(t=$e,f.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var T=_,q=f,H=q.tag;if((q.mode&1)===0&&(H===0||H===11||H===15)){var j=q.alternate;j?(q.updateQueue=j.updateQueue,q.memoizedState=j.memoizedState,q.lanes=j.lanes):(q.updateQueue=null,q.memoizedState=null)}var ae=T0(u);if(ae!==null){ae.flags&=-257,R0(ae,u,f,o,t),ae.mode&1&&b0(o,T,t),t=ae,_=T;var se=t.updateQueue;if(se===null){var ce=new Set;ce.add(_),t.updateQueue=ce}else se.add(_);break e}else{if((t&1)===0){b0(o,T,t),mi();break e}_=Error(s(426))}}else if(Pe&&f.mode&1){var We=T0(u);if(We!==null){(We.flags&65536)===0&&(We.flags|=256),R0(We,u,f,o,t),Co(El(_,f));break e}}o=_=El(_,f),He!==4&&(He=2),sr===null?sr=[o]:sr.push(o),o=u;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var C=S0(o,_,t);$s(o,C);break e;case 1:f=_;var A=o.type,b=o.stateNode;if((o.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(On===null||!On.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var Y=x0(o,f,t);$s(o,Y);break e}}o=o.return}while(o!==null)}i1(n)}catch(de){t=de,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function a1(){var e=aa.current;return aa.current=$r,e===null?$r:e}function mi(){(He===0||He===3||He===2)&&(He=4),Ge===null||(Gn&268435455)===0&&(oa&268435455)===0||Nn(Ge,$e)}function pa(e,t){var n=Ee;Ee|=2;var l=a1();(Ge!==e||$e!==t)&&(An=null,Jn(e,t));do try{$u();break}catch(a){r1(e,a)}while(!0);if(xo(),Ee=n,aa.current=l,qe!==null)throw Error(s(261));return Ge=null,$e=0,He}function $u(){for(;qe!==null;)o1(qe)}function ec(){for(;qe!==null&&!C1();)o1(qe)}function o1(e){var t=c1(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?i1(e):qe=t,ai.current=null}function i1(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Zu(n,t,Ft),n!==null){qe=n;return}}else{if(n=Hu(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);He===0&&(He=5)}function Xn(e,t,n){var l=xe,a=Jt.transition;try{Jt.transition=null,xe=1,tc(e,t,n,l)}finally{Jt.transition=a,xe=l}return null}function tc(e,t,n,l){do Cl();while(Pn!==null);if((Ee&6)!==0)throw Error(s(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(O1(e,o),e===Ge&&(qe=Ge=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||sa||(sa=!0,d1(_r,function(){return Cl(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Jt.transition,Jt.transition=null;var u=xe;xe=1;var f=Ee;Ee|=4,ai.current=null,Gu(e,n),J0(n,e),Eu(fo),Mr=!!po,fo=po=null,e.current=n,Yu(n),S1(),Ee=f,xe=u,Jt.transition=o}else e.current=n;if(sa&&(sa=!1,Pn=e,ua=a),o=e.pendingLanes,o===0&&(On=null),T1(n.stateNode),Dt(e,Ke()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],l(a.value,{componentStack:a.stack,digest:a.digest});if(ia)throw ia=!1,e=si,si=null,e;return(ua&1)!==0&&e.tag!==0&&Cl(),o=e.pendingLanes,(o&1)!==0?e===ui?ur++:(ur=0,ui=e):ur=0,In(),null}function Cl(){if(Pn!==null){var e=Gi(ua),t=Jt.transition,n=xe;try{if(Jt.transition=null,xe=16>e?16:e,Pn===null)var l=!1;else{if(e=Pn,Pn=null,ua=0,(Ee&6)!==0)throw Error(s(331));var a=Ee;for(Ee|=4,oe=e.current;oe!==null;){var o=oe,u=o.child;if((oe.flags&16)!==0){var f=o.deletions;if(f!==null){for(var _=0;_<f.length;_++){var T=f[_];for(oe=T;oe!==null;){var q=oe;switch(q.tag){case 0:case 11:case 15:or(8,q,o)}var H=q.child;if(H!==null)H.return=q,oe=H;else for(;oe!==null;){q=oe;var j=q.sibling,ae=q.return;if(Z0(q),q===T){oe=null;break}if(j!==null){j.return=ae,oe=j;break}oe=ae}}}var se=o.alternate;if(se!==null){var ce=se.child;if(ce!==null){se.child=null;do{var We=ce.sibling;ce.sibling=null,ce=We}while(ce!==null)}}oe=o}}if((o.subtreeFlags&2064)!==0&&u!==null)u.return=o,oe=u;else e:for(;oe!==null;){if(o=oe,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:or(9,o,o.return)}var C=o.sibling;if(C!==null){C.return=o.return,oe=C;break e}oe=o.return}}var A=e.current;for(oe=A;oe!==null;){u=oe;var b=u.child;if((u.subtreeFlags&2064)!==0&&b!==null)b.return=u,oe=b;else e:for(u=A;oe!==null;){if(f=oe,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ra(9,f)}}catch(de){Ue(f,f.return,de)}if(f===u){oe=null;break e}var Y=f.sibling;if(Y!==null){Y.return=f.return,oe=Y;break e}oe=f.return}}if(Ee=a,In(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(gr,e)}catch{}l=!0}return l}finally{xe=n,Jt.transition=t}}return!1}function s1(e,t,n){t=El(n,t),t=S0(e,t,1),e=Ln(e,t,1),t=ft(),e!==null&&(Ll(e,1,t),Dt(e,t))}function Ue(e,t,n){if(e.tag===3)s1(e,e,n);else for(;t!==null;){if(t.tag===3){s1(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){e=El(n,e),e=x0(t,e,1),t=Ln(t,e,1),e=ft(),t!==null&&(Ll(t,1,e),Dt(t,e));break}}t=t.return}}function nc(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&($e&n)===n&&(He===4||He===3&&($e&130023424)===$e&&500>Ke()-ii?Jn(e,0):oi|=n),Dt(e,t)}function u1(e,t){t===0&&((e.mode&1)===0?t=1:(t=yr,yr<<=1,(yr&130023424)===0&&(yr=4194304)));var n=ft();e=gn(e,t),e!==null&&(Ll(e,t,n),Dt(e,n))}function lc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),u1(e,n)}function rc(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(s(314))}l!==null&&l.delete(t),u1(e,n)}var c1;c1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Tt=!1,qu(e,t,n);Tt=(e.flags&131072)!==0}else Tt=!1,Pe&&(t.flags&1048576)!==0&&Fs(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;na(e,t),e=t.pendingProps;var a=fl(t,et.current);yl(t,n),a=No(null,t,l,e,a,n);var o=Uo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(l)?(o=!0,Nr(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Io(t),a.updater=ea,t.stateNode=a,a._reactInternals=t,qo(t,l,e,n),t=Go(null,t,l,!0,o,n)):(t.tag=0,Pe&&o&&Eo(t),dt(null,t,a,n),t=t.child),t;case 16:l=t.elementType;e:{switch(na(e,t),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=oc(l),e=ln(l,e),a){case 0:t=Qo(null,t,l,e,n);break e;case 1:t=P0(null,t,l,e,n);break e;case 11:t=I0(null,t,l,e,n);break e;case 14:t=D0(null,t,l,ln(l.type,e),n);break e}throw Error(s(306,l,""))}return t;case 0:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:ln(l,a),Qo(e,t,l,a,n);case 1:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:ln(l,a),P0(e,t,l,a,n);case 3:e:{if(B0(t),e===null)throw Error(s(387));l=t.pendingProps,o=t.memoizedState,a=o.element,Xs(e,t),Hr(t,l,null,n);var u=t.memoizedState;if(l=u.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=El(Error(s(423)),t),t=N0(e,t,l,n,a);break e}else if(l!==a){a=El(Error(s(424)),t),t=N0(e,t,l,n,a);break e}else for(Kt=bn(t.stateNode.containerInfo.firstChild),Ut=t,Pe=!0,nn=null,n=Ys(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_l(),l===a){t=yn(e,t,n);break e}dt(e,t,l,n)}t=t.child}return t;case 5:return t0(t),e===null&&ko(t),l=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,u=a.children,mo(l,a)?u=null:o!==null&&mo(l,o)&&(t.flags|=32),O0(e,t),dt(e,t,u,n),t.child;case 6:return e===null&&ko(t),null;case 13:return U0(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=gl(t,null,l,n):dt(e,t,l,n),t.child;case 11:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:ln(l,a),I0(e,t,l,a,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,a=t.pendingProps,o=t.memoizedProps,u=a.value,De(zr,l._currentValue),l._currentValue=u,o!==null)if(tn(o.value,u)){if(o.children===a.children&&!kt.current){t=yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var f=o.dependencies;if(f!==null){u=o.child;for(var _=f.firstContext;_!==null;){if(_.context===l){if(o.tag===1){_=vn(-1,n&-n),_.tag=2;var T=o.updateQueue;if(T!==null){T=T.shared;var q=T.pending;q===null?_.next=_:(_.next=q.next,q.next=_),T.pending=_}}o.lanes|=n,_=o.alternate,_!==null&&(_.lanes|=n),To(o.return,n,t),f.lanes|=n;break}_=_.next}}else if(o.tag===10)u=o.type===t.type?null:o.child;else if(o.tag===18){if(u=o.return,u===null)throw Error(s(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),To(u,n,t),u=o.sibling}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===t){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}dt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,l=t.pendingProps.children,yl(t,n),a=Ht(a),l=l(a),t.flags|=1,dt(e,t,l,n),t.child;case 14:return l=t.type,a=ln(l,t.pendingProps),a=ln(l.type,a),D0(e,t,l,a,n);case 15:return L0(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:ln(l,a),na(e,t),t.tag=1,St(l)?(e=!0,Nr(t)):e=!1,yl(t,n),k0(t,l,a),qo(t,l,a,n),Go(null,t,l,!0,e,n);case 19:return K0(e,t,n);case 22:return j0(e,t,n)}throw Error(s(156,t.tag))};function d1(e,t){return zi(e,t)}function ac(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,l){return new ac(e,t,n,l)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oc(e){if(typeof e=="function")return hi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===ct)return 14}return 2}function Un(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fa(e,t,n,l,a,o){var u=2;if(l=e,typeof e=="function")hi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case me:return $n(n.children,a,o,t);case ue:u=8,a|=8;break;case be:return e=$t(12,n,t,a|2),e.elementType=be,e.lanes=o,e;case ze:return e=$t(13,n,t,a),e.elementType=ze,e.lanes=o,e;case Ve:return e=$t(19,n,t,a),e.elementType=Ve,e.lanes=o,e;case Re:return ma(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:u=10;break e;case Fe:u=9;break e;case Te:u=11;break e;case ct:u=14;break e;case Je:u=16,l=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=$t(u,n,t,a),t.elementType=e,t.type=l,t.lanes=o,t}function $n(e,t,n,l){return e=$t(7,e,l,t),e.lanes=n,e}function ma(e,t,n,l){return e=$t(22,e,l,t),e.elementType=Re,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function gi(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ic(e,t,n,l,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function vi(e,t,n,l,a,o,u,f,_){return e=new ic(e,t,n,f,_),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(o),e}function sc(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function p1(e){if(!e)return Rn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(St(n))return Vs(e,n,t)}return t}function f1(e,t,n,l,a,o,u,f,_){return e=vi(n,l,!0,e,a,o,u,f,_),e.context=p1(null),n=e.current,l=ft(),a=Bn(n),o=vn(l,a),o.callback=t??null,Ln(n,o,a),e.current.lanes=a,Ll(e,a,l),Dt(e,l),e}function ha(e,t,n,l){var a=t.current,o=ft(),u=Bn(a);return n=p1(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,u),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Ln(a,t,u),e!==null&&(on(e,a,u,o),Zr(e,a,u)),u}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function m1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yi(e,t){m1(e,t),(e=e.alternate)&&m1(e,t)}function uc(){return null}var h1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ai(e){this._internalRoot=e}ga.prototype.render=Ai.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));ha(e,t,null,null)},ga.prototype.unmount=Ai.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){ha(null,e,null,null)}),t[fn]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&ts(e)}};function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _1(){}function cc(e,t,n,l,a){if(a){if(typeof l=="function"){var o=l;l=function(){var T=_a(u);o.call(T)}}var u=f1(t,l,e,0,null,!1,!1,"",_1);return e._reactRootContainer=u,e[fn]=u.current,Hl(e.nodeType===8?e.parentNode:e),Yn(),u}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var f=l;l=function(){var T=_a(_);f.call(T)}}var _=vi(e,0,!1,null,null,!1,!1,"",_1);return e._reactRootContainer=_,e[fn]=_.current,Hl(e.nodeType===8?e.parentNode:e),Yn(function(){ha(t,_,n,l)}),_}function ya(e,t,n,l,a){var o=n._reactRootContainer;if(o){var u=o;if(typeof a=="function"){var f=a;a=function(){var _=_a(u);f.call(_)}}ha(t,u,e,a)}else u=cc(n,t,e,a,l);return _a(u)}Yi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dl(t.pendingLanes);n!==0&&(Ba(t,n|1),Dt(t,Ke()),(Ee&6)===0&&(kl=Ke()+500,In()))}break;case 13:Yn(function(){var l=gn(e,1);if(l!==null){var a=ft();on(l,e,1,a)}}),yi(e,1)}},Na=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=ft();on(t,e,134217728,n)}yi(e,134217728)}},Ji=function(e){if(e.tag===13){var t=Bn(e),n=gn(e,t);if(n!==null){var l=ft();on(n,e,t,l)}yi(e,t)}},Xi=function(){return xe},$i=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},Ra=function(e,t,n){switch(t){case"input":if(wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=Pr(l);if(!a)throw Error(s(90));Mi(l),wa(l,a)}}}break;case"textarea":bi(e,n);break;case"select":t=n.value,t!=null&&tl(e,!!n.multiple,t,!1)}},Bi=pi,Ni=Yn;var dc={usingClientEntryPoint:!1,Events:[Yl,dl,Pr,Oi,Pi,pi]},cr={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pc={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wi(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||uc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{gr=Aa.inject(pc),sn=Aa}catch{}}return reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dc,reactDom_production_min.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ei(t))throw Error(s(200));return sc(e,t,null,n)},reactDom_production_min.createRoot=function(e,t){if(!Ei(e))throw Error(s(299));var n=!1,l="",a=h1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=vi(e,1,!1,null,null,n,!1,l,a),e[fn]=t.current,Hl(e.nodeType===8?e.parentNode:e),new Ai(t)},reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Wi(t),e=e===null?null:e.stateNode,e},reactDom_production_min.flushSync=function(e){return Yn(e)},reactDom_production_min.hydrate=function(e,t,n){if(!va(t))throw Error(s(200));return ya(null,e,t,!0,n)},reactDom_production_min.hydrateRoot=function(e,t,n){if(!Ei(e))throw Error(s(405));var l=n!=null&&n.hydratedSources||null,a=!1,o="",u=h1;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=f1(t,null,e,1,n??null,a,!1,o,u),e[fn]=t.current,Hl(e),l)for(e=0;e<l.length;e++)n=l[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ga(t)},reactDom_production_min.render=function(e,t,n){if(!va(t))throw Error(s(200));return ya(null,e,t,!1,n)},reactDom_production_min.unmountComponentAtNode=function(e){if(!va(e))throw Error(s(40));return e._reactRootContainer?(Yn(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1},reactDom_production_min.unstable_batchedUpdates=pi,reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!va(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ya(e,t,n,!1,l)},reactDom_production_min.version="18.3.1-next-f1338f8080-20240426",reactDom_production_min}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),reactDom.exports=requireReactDom_production_min(),reactDom.exports}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client;hasRequiredClient=1;var r=requireReactDom();return client.createRoot=r.createRoot,client.hydrateRoot=r.hydrateRoot,client}var clientExports=requireClient(),reactDomExports=requireReactDom();const ReactDOM=getDefaultExportFromCjs(reactDomExports),ReactDOM$1=_mergeNamespaces({__proto__:null,default:ReactDOM},[reactDomExports]);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(r[c]=s[c])}return r},_extends$1.apply(this,arguments)}const DataRouterContext=reactExports.createContext(null),DataRouterStateContext=reactExports.createContext(null),NavigationContext=reactExports.createContext(null),LocationContext=reactExports.createContext(null),RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1}),RouteErrorContext=reactExports.createContext(null);function useHref(r,i){let{relative:s}=i===void 0?{}:i;useInRouterContext()||invariant(!1);let{basename:c,navigator:p}=reactExports.useContext(NavigationContext),{hash:m,pathname:h,search:E}=useResolvedPath(r,{relative:s}),g=h;return c!=="/"&&(g=h==="/"?c:joinPaths([c,h])),p.createHref({pathname:g,search:E,hash:m})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),reactExports.useContext(LocationContext).location}function useIsomorphicLayoutEffect(r){reactExports.useContext(NavigationContext).static||reactExports.useLayoutEffect(r)}function useNavigate(){let{isDataRoute:r}=reactExports.useContext(RouteContext);return r?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){useInRouterContext()||invariant(!1);let r=reactExports.useContext(DataRouterContext),{basename:i,future:s,navigator:c}=reactExports.useContext(NavigationContext),{matches:p}=reactExports.useContext(RouteContext),{pathname:m}=useLocation(),h=JSON.stringify(getResolveToMatches(p,s.v7_relativeSplatPath)),E=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{E.current=!0}),reactExports.useCallback(function(x,S){if(S===void 0&&(S={}),!E.current)return;if(typeof x=="number"){c.go(x);return}let v=resolveTo(x,JSON.parse(h),m,S.relative==="path");r==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:joinPaths([i,v.pathname])),(S.replace?c.replace:c.push)(v,S.state,S)},[i,c,h,m,r])}const OutletContext=reactExports.createContext(null);function useOutlet(r){let i=reactExports.useContext(RouteContext).outlet;return i&&reactExports.createElement(OutletContext.Provider,{value:r},i)}function useParams(){let{matches:r}=reactExports.useContext(RouteContext),i=r[r.length-1];return i?i.params:{}}function useResolvedPath(r,i){let{relative:s}=i===void 0?{}:i,{future:c}=reactExports.useContext(NavigationContext),{matches:p}=reactExports.useContext(RouteContext),{pathname:m}=useLocation(),h=JSON.stringify(getResolveToMatches(p,c.v7_relativeSplatPath));return reactExports.useMemo(()=>resolveTo(r,JSON.parse(h),m,s==="path"),[r,h,m,s])}function useRoutesImpl(r,i,s,c){useInRouterContext()||invariant(!1);let{navigator:p}=reactExports.useContext(NavigationContext),{matches:m}=reactExports.useContext(RouteContext),h=m[m.length-1],E=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let x=useLocation(),S;S=x;let v=S.pathname||"/",d=v;if(g!=="/"){let k=g.replace(/^\//,"").split("/");d="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let M=matchRoutes(r,{pathname:d});return _renderMatches(M&&M.map(k=>Object.assign({},k,{params:Object.assign({},E,k.params),pathname:joinPaths([g,p.encodeLocation?p.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:joinPaths([g,p.encodeLocation?p.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),m,s,c)}function DefaultErrorComponent(){let r=useRouteError(),i=isRouteErrorResponse(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},i),s?reactExports.createElement("pre",{style:p},s):null,null)}const defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null);class RenderErrorBoundary extends reactExports.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(r){let{routeContext:i,match:s,children:c}=r,p=reactExports.useContext(DataRouterContext);return p&&p.static&&p.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=s.route.id),reactExports.createElement(RouteContext.Provider,{value:i},c)}function _renderMatches(r,i,s,c){var p;if(i===void 0&&(i=[]),s===void 0&&(s=null),c===void 0&&(c=null),r==null){var m;if(!s)return null;if(s.errors)r=s.matches;else if((m=c)!=null&&m.v7_partialHydration&&i.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let h=r,E=(p=s)==null?void 0:p.errors;if(E!=null){let S=h.findIndex(v=>v.route.id&&E?.[v.route.id]!==void 0);S>=0||invariant(!1),h=h.slice(0,Math.min(h.length,S+1))}let g=!1,x=-1;if(s&&c&&c.v7_partialHydration)for(let S=0;S<h.length;S++){let v=h[S];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=S),v.route.id){let{loaderData:d,errors:M}=s,R=v.route.loader&&d[v.route.id]===void 0&&(!M||M[v.route.id]===void 0);if(v.route.lazy||R){g=!0,x>=0?h=h.slice(0,x+1):h=[h[0]];break}}}return h.reduceRight((S,v,d)=>{let M,R=!1,k=null,D=null;s&&(M=E&&v.route.id?E[v.route.id]:void 0,k=v.route.errorElement||defaultErrorElement,g&&(x<0&&d===0?(warningOnce("route-fallback"),R=!0,D=null):x===d&&(R=!0,D=v.route.hydrateFallbackElement||null)));let ee=i.concat(h.slice(0,d+1)),ne=()=>{let te;return M?te=k:R?te=D:v.route.Component?te=reactExports.createElement(v.route.Component,null):v.route.element?te=v.route.element:te=S,reactExports.createElement(RenderedRoute,{match:v,routeContext:{outlet:S,matches:ee,isDataRoute:s!=null},children:te})};return s&&(v.route.ErrorBoundary||v.route.errorElement||d===0)?reactExports.createElement(RenderErrorBoundary,{location:s.location,revalidation:s.revalidation,component:k,error:M,children:ne(),routeContext:{outlet:null,matches:ee,isDataRoute:!0}}):ne()},null)}var DataRouterHook$1=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(DataRouterHook$1||{}),DataRouterStateHook$1=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(DataRouterStateHook$1||{});function useDataRouterContext(r){let i=reactExports.useContext(DataRouterContext);return i||invariant(!1),i}function useDataRouterState(r){let i=reactExports.useContext(DataRouterStateContext);return i||invariant(!1),i}function useRouteContext(r){let i=reactExports.useContext(RouteContext);return i||invariant(!1),i}function useCurrentRouteId(r){let i=useRouteContext(),s=i.matches[i.matches.length-1];return s.route.id||invariant(!1),s.route.id}function useRouteError(){var r;let i=reactExports.useContext(RouteErrorContext),s=useDataRouterState(DataRouterStateHook$1.UseRouteError),c=useCurrentRouteId();return i!==void 0?i:(r=s.errors)==null?void 0:r[c]}function useNavigateStable(){let{router:r}=useDataRouterContext(DataRouterHook$1.UseNavigateStable),i=useCurrentRouteId(),s=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{s.current=!0}),reactExports.useCallback(function(p,m){m===void 0&&(m={}),s.current&&(typeof p=="number"?r.navigate(p):r.navigate(p,_extends$1({fromRouteId:i},m)))},[r,i])}const alreadyWarned$1={};function warningOnce(r,i,s){alreadyWarned$1[r]||(alreadyWarned$1[r]=!0)}function logV6DeprecationWarnings(r,i){r?.v7_startTransition,r?.v7_relativeSplatPath===void 0&&(!i||i.v7_relativeSplatPath),i&&(i.v7_fetcherPersist,i.v7_normalizeFormMethod,i.v7_partialHydration,i.v7_skipActionErrorRevalidation)}function Navigate(r){let{to:i,replace:s,state:c,relative:p}=r;useInRouterContext()||invariant(!1);let{future:m,static:h}=reactExports.useContext(NavigationContext),{matches:E}=reactExports.useContext(RouteContext),{pathname:g}=useLocation(),x=useNavigate(),S=resolveTo(i,getResolveToMatches(E,m.v7_relativeSplatPath),g,p==="path"),v=JSON.stringify(S);return reactExports.useEffect(()=>x(JSON.parse(v),{replace:s,state:c,relative:p}),[x,v,p,s,c]),null}function Outlet(r){return useOutlet(r.context)}function Route(r){invariant(!1)}function Router(r){let{basename:i="/",children:s=null,location:c,navigationType:p=Action.Pop,navigator:m,static:h=!1,future:E}=r;useInRouterContext()&&invariant(!1);let g=i.replace(/^\/*/,"/"),x=reactExports.useMemo(()=>({basename:g,navigator:m,static:h,future:_extends$1({v7_relativeSplatPath:!1},E)}),[g,E,m,h]);typeof c=="string"&&(c=parsePath(c));let{pathname:S="/",search:v="",hash:d="",state:M=null,key:R="default"}=c,k=reactExports.useMemo(()=>{let D=stripBasename(S,g);return D==null?null:{location:{pathname:D,search:v,hash:d,state:M,key:R},navigationType:p}},[g,S,v,d,M,R,p]);return k==null?null:reactExports.createElement(NavigationContext.Provider,{value:x},reactExports.createElement(LocationContext.Provider,{children:s,value:k}))}new Promise(()=>{});function createRoutesFromChildren(r,i){i===void 0&&(i=[]);let s=[];return reactExports.Children.forEach(r,(c,p)=>{if(!reactExports.isValidElement(c))return;let m=[...i,p];if(c.type===reactExports.Fragment){s.push.apply(s,createRoutesFromChildren(c.props.children,m));return}c.type!==Route&&invariant(!1),!c.props.index||!c.props.children||invariant(!1);let h={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=createRoutesFromChildren(c.props.children,m)),s.push(h)}),s}function mapRouteProperties(r){let i={hasErrorBoundary:r.ErrorBoundary!=null||r.errorElement!=null};return r.Component&&Object.assign(i,{element:reactExports.createElement(r.Component),Component:void 0}),r.HydrateFallback&&Object.assign(i,{hydrateFallbackElement:reactExports.createElement(r.HydrateFallback),HydrateFallback:void 0}),r.ErrorBoundary&&Object.assign(i,{errorElement:reactExports.createElement(r.ErrorBoundary),ErrorBoundary:void 0}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(r[c]=s[c])}return r},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose$1(r,i){if(r==null)return{};var s={},c=Object.keys(r),p,m;for(m=0;m<c.length;m++)p=c[m],!(i.indexOf(p)>=0)&&(s[p]=r[p]);return s}function isModifiedEvent(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function shouldProcessLinkClick(r,i){return r.button===0&&(!i||i==="_self")&&!isModifiedEvent(r)}const _excluded$1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],REACT_ROUTER_VERSION="6";try{window.__reactRouterVersion=REACT_ROUTER_VERSION}catch{}function createBrowserRouter(r,i){return createRouter({basename:void 0,future:_extends({},void 0,{v7_prependBasename:!0}),history:createBrowserHistory({window:void 0}),hydrationData:parseHydrationData(),routes:r,mapRouteProperties,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function parseHydrationData(){var r;let i=(r=window)==null?void 0:r.__staticRouterHydrationData;return i&&i.errors&&(i=_extends({},i,{errors:deserializeErrors(i.errors)})),i}function deserializeErrors(r){if(!r)return null;let i=Object.entries(r),s={};for(let[c,p]of i)if(p&&p.__type==="RouteErrorResponse")s[c]=new ErrorResponseImpl(p.status,p.statusText,p.data,p.internal===!0);else if(p&&p.__type==="Error"){if(p.__subType){let m=window[p.__subType];if(typeof m=="function")try{let h=new m(p.message);h.stack="",s[c]=h}catch{}}if(s[c]==null){let m=new Error(p.message);m.stack="",s[c]=m}}else s[c]=p;return s}const ViewTransitionContext=reactExports.createContext({isTransitioning:!1}),FetchersContext=reactExports.createContext(new Map),START_TRANSITION="startTransition",startTransitionImpl=React$1[START_TRANSITION],FLUSH_SYNC="flushSync",flushSyncImpl=ReactDOM$1[FLUSH_SYNC];function startTransitionSafe(r){startTransitionImpl?startTransitionImpl(r):r()}function flushSyncSafe(r){flushSyncImpl?flushSyncImpl(r):r()}class Deferred{constructor(){this.status="pending",this.promise=new Promise((i,s)=>{this.resolve=c=>{this.status==="pending"&&(this.status="resolved",i(c))},this.reject=c=>{this.status==="pending"&&(this.status="rejected",s(c))}})}}function RouterProvider(r){let{fallbackElement:i,router:s,future:c}=r,[p,m]=reactExports.useState(s.state),[h,E]=reactExports.useState(),[g,x]=reactExports.useState({isTransitioning:!1}),[S,v]=reactExports.useState(),[d,M]=reactExports.useState(),[R,k]=reactExports.useState(),D=reactExports.useRef(new Map),{v7_startTransition:ee}=c||{},ne=reactExports.useCallback(ue=>{ee?startTransitionSafe(ue):ue()},[ee]),te=reactExports.useCallback((ue,be)=>{let{deletedFetchers:Ce,flushSync:Fe,viewTransitionOpts:Te}=be;ue.fetchers.forEach((Ve,ct)=>{Ve.data!==void 0&&D.current.set(ct,Ve.data)}),Ce.forEach(Ve=>D.current.delete(Ve));let ze=s.window==null||s.window.document==null||typeof s.window.document.startViewTransition!="function";if(!Te||ze){Fe?flushSyncSafe(()=>m(ue)):ne(()=>m(ue));return}if(Fe){flushSyncSafe(()=>{d&&(S&&S.resolve(),d.skipTransition()),x({isTransitioning:!0,flushSync:!0,currentLocation:Te.currentLocation,nextLocation:Te.nextLocation})});let Ve=s.window.document.startViewTransition(()=>{flushSyncSafe(()=>m(ue))});Ve.finished.finally(()=>{flushSyncSafe(()=>{v(void 0),M(void 0),E(void 0),x({isTransitioning:!1})})}),flushSyncSafe(()=>M(Ve));return}d?(S&&S.resolve(),d.skipTransition(),k({state:ue,currentLocation:Te.currentLocation,nextLocation:Te.nextLocation})):(E(ue),x({isTransitioning:!0,flushSync:!1,currentLocation:Te.currentLocation,nextLocation:Te.nextLocation}))},[s.window,d,S,D,ne]);reactExports.useLayoutEffect(()=>s.subscribe(te),[s,te]),reactExports.useEffect(()=>{g.isTransitioning&&!g.flushSync&&v(new Deferred)},[g]),reactExports.useEffect(()=>{if(S&&h&&s.window){let ue=h,be=S.promise,Ce=s.window.document.startViewTransition(async()=>{ne(()=>m(ue)),await be});Ce.finished.finally(()=>{v(void 0),M(void 0),E(void 0),x({isTransitioning:!1})}),M(Ce)}},[ne,h,S,s.window]),reactExports.useEffect(()=>{S&&h&&p.location.key===h.location.key&&S.resolve()},[S,d,p.location,h]),reactExports.useEffect(()=>{!g.isTransitioning&&R&&(E(R.state),x({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}),k(void 0))},[g.isTransitioning,R]),reactExports.useEffect(()=>{},[]);let re=reactExports.useMemo(()=>({createHref:s.createHref,encodeLocation:s.encodeLocation,go:ue=>s.navigate(ue),push:(ue,be,Ce)=>s.navigate(ue,{state:be,preventScrollReset:Ce?.preventScrollReset}),replace:(ue,be,Ce)=>s.navigate(ue,{replace:!0,state:be,preventScrollReset:Ce?.preventScrollReset})}),[s]),ge=s.basename||"/",Ae=reactExports.useMemo(()=>({router:s,navigator:re,static:!1,basename:ge}),[s,re,ge]),me=reactExports.useMemo(()=>({v7_relativeSplatPath:s.future.v7_relativeSplatPath}),[s.future.v7_relativeSplatPath]);return reactExports.useEffect(()=>logV6DeprecationWarnings(c,s.future),[c,s.future]),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement(DataRouterContext.Provider,{value:Ae},reactExports.createElement(DataRouterStateContext.Provider,{value:p},reactExports.createElement(FetchersContext.Provider,{value:D.current},reactExports.createElement(ViewTransitionContext.Provider,{value:g},reactExports.createElement(Router,{basename:ge,location:p.location,navigationType:p.historyAction,navigator:re,future:me},p.initialized||s.future.v7_partialHydration?reactExports.createElement(MemoizedDataRoutes,{routes:s.routes,future:s.future,state:p}):i))))),null)}const MemoizedDataRoutes=reactExports.memo(DataRoutes);function DataRoutes(r){let{routes:i,future:s,state:c}=r;return useRoutesImpl(i,void 0,c,s)}const isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports.forwardRef(function(i,s){let{onClick:c,relative:p,reloadDocument:m,replace:h,state:E,target:g,to:x,preventScrollReset:S,viewTransition:v}=i,d=_objectWithoutPropertiesLoose$1(i,_excluded$1),{basename:M}=reactExports.useContext(NavigationContext),R,k=!1;if(typeof x=="string"&&ABSOLUTE_URL_REGEX.test(x)&&(R=x,isBrowser))try{let te=new URL(window.location.href),re=x.startsWith("//")?new URL(te.protocol+x):new URL(x),ge=stripBasename(re.pathname,M);re.origin===te.origin&&ge!=null?x=ge+re.search+re.hash:k=!0}catch{}let D=useHref(x,{relative:p}),ee=useLinkClickHandler(x,{replace:h,state:E,target:g,preventScrollReset:S,relative:p,viewTransition:v});function ne(te){c&&c(te),te.defaultPrevented||ee(te)}return reactExports.createElement("a",_extends({},d,{href:R||D,onClick:k||m?c:ne,ref:s,target:g}))});var DataRouterHook;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function useLinkClickHandler(r,i){let{target:s,replace:c,state:p,preventScrollReset:m,relative:h,viewTransition:E}=i===void 0?{}:i,g=useNavigate(),x=useLocation(),S=useResolvedPath(r,{relative:h});return reactExports.useCallback(v=>{if(shouldProcessLinkClick(v,s)){v.preventDefault();let d=c!==void 0?c:createPath(x)===createPath(S);g(r,{replace:d,state:p,preventScrollReset:m,relative:h,viewTransition:E})}},[x,g,S,c,p,s,r,m,h,E])}function Mt(r){if(typeof document>"u")return;let i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(document.createTextNode(r))}Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var L=r=>typeof r=="number"&&!isNaN(r),N=r=>typeof r=="string",P=r=>typeof r=="function",mt=r=>N(r)||L(r),B=r=>N(r)||P(r)?r:null,pt=(r,i)=>r===!1||L(r)&&r>0?r:i,z=r=>reactExports.isValidElement(r)||N(r)||P(r)||L(r);function Z(r,i,s=300){let{scrollHeight:c,style:p}=r;requestAnimationFrame(()=>{p.minHeight="initial",p.height=c+"px",p.transition=`all ${s}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(i,s)})})}function $({enter:r,exit:i,appendPosition:s=!1,collapse:c=!0,collapseDuration:p=300}){return function({children:m,position:h,preventExitTransition:E,done:g,nodeRef:x,isIn:S,playToast:v}){let d=s?`${r}--${h}`:r,M=s?`${i}--${h}`:i,R=reactExports.useRef(0);return reactExports.useLayoutEffect(()=>{let k=x.current,D=d.split(" "),ee=ne=>{ne.target===x.current&&(v(),k.removeEventListener("animationend",ee),k.removeEventListener("animationcancel",ee),R.current===0&&ne.type!=="animationcancel"&&k.classList.remove(...D))};k.classList.add(...D),k.addEventListener("animationend",ee),k.addEventListener("animationcancel",ee)},[]),reactExports.useEffect(()=>{let k=x.current,D=()=>{k.removeEventListener("animationend",D),c?Z(k,g,p):g()};S||(E?D():(R.current=1,k.className+=` ${M}`,k.addEventListener("animationend",D)))},[S]),React.createElement(React.Fragment,null,m)}}function J(r,i){return{content:tt(r.content,r.props),containerId:r.props.containerId,id:r.props.toastId,theme:r.props.theme,type:r.props.type,data:r.props.data||{},isLoading:r.props.isLoading,icon:r.props.icon,reason:r.removalReason,status:i}}function tt(r,i,s=!1){return reactExports.isValidElement(r)&&!N(r.type)?reactExports.cloneElement(r,{closeToast:i.closeToast,toastProps:i,data:i.data,isPaused:s}):P(r)?r({closeToast:i.closeToast,toastProps:i,data:i.data,isPaused:s}):r}function yt({closeToast:r,theme:i,ariaLabel:s="close"}){return React.createElement("button",{className:`Toastify__close-button Toastify__close-button--${i}`,type:"button",onClick:c=>{c.stopPropagation(),r(!0)},"aria-label":s},React.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},React.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function gt({delay:r,isRunning:i,closeToast:s,type:c="default",hide:p,className:m,controlledProgress:h,progress:E,rtl:g,isIn:x,theme:S}){let v=p||h&&E===0,d={animationDuration:`${r}ms`,animationPlayState:i?"running":"paused"};h&&(d.transform=`scaleX(${E})`);let M=clsx("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${S}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":g}),R=P(m)?m({rtl:g,type:c,defaultClassName:M}):clsx(M,m),k={[h&&E>=1?"onTransitionEnd":"onAnimationEnd"]:h&&E<1?null:()=>{x&&s()}};return React.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},React.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${S} Toastify__progress-bar--${c}`}),React.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:R,style:d,...k}))}var Xt=1,at=()=>`${Xt++}`;function _t(r,i,s){let c=1,p=0,m=[],h=[],E=i,g=new Map,x=new Set,S=ne=>(x.add(ne),()=>x.delete(ne)),v=()=>{h=Array.from(g.values()),x.forEach(ne=>ne())},d=({containerId:ne,toastId:te,updateId:re})=>{let ge=ne?ne!==r:r!==1,Ae=g.has(te)&&re==null;return ge||Ae},M=(ne,te)=>{g.forEach(re=>{var ge;(te==null||te===re.props.toastId)&&((ge=re.toggle)==null||ge.call(re,ne))})},R=ne=>{var te,re;(re=(te=ne.props)==null?void 0:te.onClose)==null||re.call(te,ne.removalReason),ne.isActive=!1},k=ne=>{if(ne==null)g.forEach(R);else{let te=g.get(ne);te&&R(te)}v()},D=()=>{p-=m.length,m=[]},ee=ne=>{var te,re;let{toastId:ge,updateId:Ae}=ne.props,me=Ae==null;ne.staleId&&g.delete(ne.staleId),ne.isActive=!0,g.set(ge,ne),v(),s(J(ne,me?"added":"updated")),me&&((re=(te=ne.props).onOpen)==null||re.call(te))};return{id:r,props:E,observe:S,toggle:M,removeToast:k,toasts:g,clearQueue:D,buildToast:(ne,te)=>{if(d(te))return;let{toastId:re,updateId:ge,data:Ae,staleId:me,delay:ue}=te,be=ge==null;be&&p++;let Ce={...E,style:E.toastStyle,key:c++,...Object.fromEntries(Object.entries(te).filter(([Te,ze])=>ze!=null)),toastId:re,updateId:ge,data:Ae,isIn:!1,className:B(te.className||E.toastClassName),progressClassName:B(te.progressClassName||E.progressClassName),autoClose:te.isLoading?!1:pt(te.autoClose,E.autoClose),closeToast(Te){g.get(re).removalReason=Te,k(re)},deleteToast(){let Te=g.get(re);if(Te!=null){if(s(J(Te,"removed")),g.delete(re),p--,p<0&&(p=0),m.length>0){ee(m.shift());return}v()}}};Ce.closeButton=E.closeButton,te.closeButton===!1||z(te.closeButton)?Ce.closeButton=te.closeButton:te.closeButton===!0&&(Ce.closeButton=z(E.closeButton)?E.closeButton:!0);let Fe={content:ne,props:Ce,staleId:me};E.limit&&E.limit>0&&p>E.limit&&be?m.push(Fe):L(ue)?setTimeout(()=>{ee(Fe)},ue):ee(Fe)},setProps(ne){E=ne},setToggle:(ne,te)=>{let re=g.get(ne);re&&(re.toggle=te)},isToastActive:ne=>{var te;return(te=g.get(ne))==null?void 0:te.isActive},getSnapshot:()=>h}}var I=new Map,F=[],st=new Set,Vt=r=>st.forEach(i=>i(r)),bt=()=>I.size>0;function Qt(){F.forEach(r=>nt(r.content,r.options)),F=[]}var vt=(r,{containerId:i})=>{var s;return(s=I.get(i||1))==null?void 0:s.toasts.get(r)};function X(r,i){var s;if(i)return!!((s=I.get(i))!=null&&s.isToastActive(r));let c=!1;return I.forEach(p=>{p.isToastActive(r)&&(c=!0)}),c}function ht(r){if(!bt()){F=F.filter(i=>r!=null&&i.options.toastId!==r);return}if(r==null||mt(r))I.forEach(i=>{i.removeToast(r)});else if(r&&("containerId"in r||"id"in r)){let i=I.get(r.containerId);i?i.removeToast(r.id):I.forEach(s=>{s.removeToast(r.id)})}}var Ct=(r={})=>{I.forEach(i=>{i.props.limit&&(!r.containerId||i.id===r.containerId)&&i.clearQueue()})};function nt(r,i){z(r)&&(bt()||F.push({content:r,options:i}),I.forEach(s=>{s.buildToast(r,i)}))}function xt(r){var i;(i=I.get(r.containerId||1))==null||i.setToggle(r.id,r.fn)}function rt(r,i){I.forEach(s=>{(i==null||!(i!=null&&i.containerId)||i?.containerId===s.id)&&s.toggle(r,i?.id)})}function Et(r){let i=r.containerId||1;return{subscribe(s){let c=_t(i,r,Vt);I.set(i,c);let p=c.observe(s);return Qt(),()=>{p(),I.delete(i)}},setProps(s){var c;(c=I.get(i))==null||c.setProps(s)},getSnapshot(){var s;return(s=I.get(i))==null?void 0:s.getSnapshot()}}}function Pt(r){return st.add(r),()=>{st.delete(r)}}function Wt(r){return r&&(N(r.toastId)||L(r.toastId))?r.toastId:at()}function U(r,i){return nt(r,i),i.toastId}function V(r,i){return{...i,type:i&&i.type||r,toastId:Wt(i)}}function Q(r){return(i,s)=>U(i,V(r,s))}function y(r,i){return U(r,V("default",i))}y.loading=(r,i)=>U(r,V("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i}));function Gt(r,{pending:i,error:s,success:c},p){let m;i&&(m=N(i)?y.loading(i,p):y.loading(i.render,{...p,...i}));let h={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},E=(x,S,v)=>{if(S==null){y.dismiss(m);return}let d={type:x,...h,...p,data:v},M=N(S)?{render:S}:S;return m?y.update(m,{...d,...M}):y(M.render,{...d,...M}),v},g=P(r)?r():r;return g.then(x=>E("success",c,x)).catch(x=>E("error",s,x)),g}y.promise=Gt;y.success=Q("success");y.info=Q("info");y.error=Q("error");y.warning=Q("warning");y.warn=y.warning;y.dark=(r,i)=>U(r,V("default",{theme:"dark",...i}));function qt(r){ht(r)}y.dismiss=qt;y.clearWaitingQueue=Ct;y.isActive=X;y.update=(r,i={})=>{let s=vt(r,i);if(s){let{props:c,content:p}=s,m={delay:100,...c,...i,toastId:i.toastId||r,updateId:at()};m.toastId!==r&&(m.staleId=r);let h=m.render||p;delete m.render,U(h,m)}};y.done=r=>{y.update(r,{progress:1})};y.onChange=Pt;y.play=r=>rt(!0,r);y.pause=r=>rt(!1,r);function It(r){var i;let{subscribe:s,getSnapshot:c,setProps:p}=reactExports.useRef(Et(r)).current;p(r);let m=(i=reactExports.useSyncExternalStore(s,c,c))==null?void 0:i.slice();function h(E){if(!m)return[];let g=new Map;return r.newestOnTop&&m.reverse(),m.forEach(x=>{let{position:S}=x.props;g.has(S)||g.set(S,[]),g.get(S).push(x)}),Array.from(g,x=>E(x[0],x[1]))}return{getToastToRender:h,isToastActive:X,count:m?.length}}function At(r){let[i,s]=reactExports.useState(!1),[c,p]=reactExports.useState(!1),m=reactExports.useRef(null),h=reactExports.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:E,pauseOnHover:g,closeToast:x,onClick:S,closeOnClick:v}=r;xt({id:r.toastId,containerId:r.containerId,fn:s}),reactExports.useEffect(()=>{if(r.pauseOnFocusLoss)return d(),()=>{M()}},[r.pauseOnFocusLoss]);function d(){document.hasFocus()||ee(),window.addEventListener("focus",D),window.addEventListener("blur",ee)}function M(){window.removeEventListener("focus",D),window.removeEventListener("blur",ee)}function R(me){if(r.draggable===!0||r.draggable===me.pointerType){ne();let ue=m.current;h.canCloseOnClick=!0,h.canDrag=!0,ue.style.transition="none",r.draggableDirection==="x"?(h.start=me.clientX,h.removalDistance=ue.offsetWidth*(r.draggablePercent/100)):(h.start=me.clientY,h.removalDistance=ue.offsetHeight*(r.draggablePercent===80?r.draggablePercent*1.5:r.draggablePercent)/100)}}function k(me){let{top:ue,bottom:be,left:Ce,right:Fe}=m.current.getBoundingClientRect();me.nativeEvent.type!=="touchend"&&r.pauseOnHover&&me.clientX>=Ce&&me.clientX<=Fe&&me.clientY>=ue&&me.clientY<=be?ee():D()}function D(){s(!0)}function ee(){s(!1)}function ne(){h.didMove=!1,document.addEventListener("pointermove",re),document.addEventListener("pointerup",ge)}function te(){document.removeEventListener("pointermove",re),document.removeEventListener("pointerup",ge)}function re(me){let ue=m.current;if(h.canDrag&&ue){h.didMove=!0,i&&ee(),r.draggableDirection==="x"?h.delta=me.clientX-h.start:h.delta=me.clientY-h.start,h.start!==me.clientX&&(h.canCloseOnClick=!1);let be=r.draggableDirection==="x"?`${h.delta}px, var(--y)`:`0, calc(${h.delta}px + var(--y))`;ue.style.transform=`translate3d(${be},0)`,ue.style.opacity=`${1-Math.abs(h.delta/h.removalDistance)}`}}function ge(){te();let me=m.current;if(h.canDrag&&h.didMove&&me){if(h.canDrag=!1,Math.abs(h.delta)>h.removalDistance){p(!0),r.closeToast(!0),r.collapseAll();return}me.style.transition="transform 0.2s, opacity 0.2s",me.style.removeProperty("transform"),me.style.removeProperty("opacity")}}let Ae={onPointerDown:R,onPointerUp:k};return E&&g&&(Ae.onMouseEnter=ee,r.stacked||(Ae.onMouseLeave=D)),v&&(Ae.onClick=me=>{S&&S(me),h.canCloseOnClick&&x(!0)}),{playToast:D,pauseToast:ee,isRunning:i,preventExitTransition:c,toastRef:m,eventHandlers:Ae}}var Ot=typeof window<"u"?reactExports.useLayoutEffect:reactExports.useEffect,G=({theme:r,type:i,isLoading:s,...c})=>React.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:r==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...c});function ao(r){return React.createElement(G,{...r},React.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function so(r){return React.createElement(G,{...r},React.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function no(r){return React.createElement(G,{...r},React.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function ro(r){return React.createElement(G,{...r},React.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function io(){return React.createElement("div",{className:"Toastify__spinner"})}var W={info:so,warning:ao,success:no,error:ro,spinner:io},lo=r=>r in W;function Nt({theme:r,type:i,isLoading:s,icon:c}){let p=null,m={theme:r,type:i};return c===!1||(P(c)?p=c({...m,isLoading:s}):reactExports.isValidElement(c)?p=reactExports.cloneElement(c,m):s?p=W.spinner():lo(i)&&(p=W[i](m))),p}var wt=r=>{let{isRunning:i,preventExitTransition:s,toastRef:c,eventHandlers:p,playToast:m}=At(r),{closeButton:h,children:E,autoClose:g,onClick:x,type:S,hideProgressBar:v,closeToast:d,transition:M,position:R,className:k,style:D,progressClassName:ee,updateId:ne,role:te,progress:re,rtl:ge,toastId:Ae,deleteToast:me,isIn:ue,isLoading:be,closeOnClick:Ce,theme:Fe,ariaLabel:Te}=r,ze=clsx("Toastify__toast",`Toastify__toast-theme--${Fe}`,`Toastify__toast--${S}`,{"Toastify__toast--rtl":ge},{"Toastify__toast--close-on-click":Ce}),Ve=P(k)?k({rtl:ge,position:R,type:S,defaultClassName:ze}):clsx(ze,k),ct=Nt(r),Je=!!re||!g,Re={closeToast:d,type:S,theme:Fe},le=null;return h===!1||(P(h)?le=h(Re):reactExports.isValidElement(h)?le=reactExports.cloneElement(h,Re):le=yt(Re)),React.createElement(M,{isIn:ue,done:me,position:R,preventExitTransition:s,nodeRef:c,playToast:m},React.createElement("div",{id:Ae,tabIndex:0,onClick:x,"data-in":ue,className:Ve,...p,style:D,ref:c,...ue&&{role:te,"aria-label":Te}},ct!=null&&React.createElement("div",{className:clsx("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!be})},ct),tt(E,r,!i),le,!r.customProgressBar&&React.createElement(gt,{...ne&&!Je?{key:`p-${ne}`}:{},rtl:ge,theme:Fe,delay:g,isRunning:i,isIn:ue,closeToast:d,hide:v,type:S,className:ee,controlledProgress:Je,progress:re||0})))},K=(r,i=!1)=>({enter:`Toastify--animate Toastify__${r}-enter`,exit:`Toastify--animate Toastify__${r}-exit`,appendPosition:i}),lt=$(K("bounce",!0)),_o={position:"top-right",transition:lt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:r=>r.altKey&&r.code==="KeyT"};function Lt(r){let i={..._o,...r},s=r.stacked,[c,p]=reactExports.useState(!0),m=reactExports.useRef(null),{getToastToRender:h,isToastActive:E,count:g}=It(i),{className:x,style:S,rtl:v,containerId:d,hotKeys:M}=i;function R(D){let ee=clsx("Toastify__toast-container",`Toastify__toast-container--${D}`,{"Toastify__toast-container--rtl":v});return P(x)?x({position:D,rtl:v,defaultClassName:ee}):clsx(ee,B(x))}function k(){s&&(p(!0),y.play())}return Ot(()=>{var D;if(s){let ee=m.current.querySelectorAll('[data-in="true"]'),ne=12,te=(D=i.position)==null?void 0:D.includes("top"),re=0,ge=0;Array.from(ee).reverse().forEach((Ae,me)=>{let ue=Ae;ue.classList.add("Toastify__toast--stacked"),me>0&&(ue.dataset.collapsed=`${c}`),ue.dataset.pos||(ue.dataset.pos=te?"top":"bot");let be=re*(c?.2:1)+(c?0:ne*me);ue.style.setProperty("--y",`${te?be:be*-1}px`),ue.style.setProperty("--g",`${ne}`),ue.style.setProperty("--s",`${1-(c?ge:0)}`),re+=ue.offsetHeight,ge+=.025})}},[c,g,s]),reactExports.useEffect(()=>{function D(ee){var ne;let te=m.current;M(ee)&&((ne=te.querySelector('[tabIndex="0"]'))==null||ne.focus(),p(!1),y.pause()),ee.key==="Escape"&&(document.activeElement===te||te!=null&&te.contains(document.activeElement))&&(p(!0),y.play())}return document.addEventListener("keydown",D),()=>{document.removeEventListener("keydown",D)}},[M]),React.createElement("section",{ref:m,className:"Toastify",id:d,onMouseEnter:()=>{s&&(p(!1),y.pause())},onMouseLeave:k,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},h((D,ee)=>{let ne=ee.length?{...S}:{...S,pointerEvents:"none"};return React.createElement("div",{tabIndex:-1,className:R(D),"data-stacked":s,style:ne,key:`c-${D}`},ee.map(({content:te,props:re})=>React.createElement(wt,{...re,stacked:s,collapseAll:k,isIn:E(re.toastId,re.containerId),key:`t-${re.key}`},te)))}))}var reactFastCompare,hasRequiredReactFastCompare;function requireReactFastCompare(){if(hasRequiredReactFastCompare)return reactFastCompare;hasRequiredReactFastCompare=1;var r=typeof Element<"u",i=typeof Map=="function",s=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function p(m,h){if(m===h)return!0;if(m&&h&&typeof m=="object"&&typeof h=="object"){if(m.constructor!==h.constructor)return!1;var E,g,x;if(Array.isArray(m)){if(E=m.length,E!=h.length)return!1;for(g=E;g--!==0;)if(!p(m[g],h[g]))return!1;return!0}var S;if(i&&m instanceof Map&&h instanceof Map){if(m.size!==h.size)return!1;for(S=m.entries();!(g=S.next()).done;)if(!h.has(g.value[0]))return!1;for(S=m.entries();!(g=S.next()).done;)if(!p(g.value[1],h.get(g.value[0])))return!1;return!0}if(s&&m instanceof Set&&h instanceof Set){if(m.size!==h.size)return!1;for(S=m.entries();!(g=S.next()).done;)if(!h.has(g.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(h)){if(E=m.length,E!=h.length)return!1;for(g=E;g--!==0;)if(m[g]!==h[g])return!1;return!0}if(m.constructor===RegExp)return m.source===h.source&&m.flags===h.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof h.valueOf=="function")return m.valueOf()===h.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof h.toString=="function")return m.toString()===h.toString();if(x=Object.keys(m),E=x.length,E!==Object.keys(h).length)return!1;for(g=E;g--!==0;)if(!Object.prototype.hasOwnProperty.call(h,x[g]))return!1;if(r&&m instanceof Element)return!1;for(g=E;g--!==0;)if(!((x[g]==="_owner"||x[g]==="__v"||x[g]==="__o")&&m.$$typeof)&&!p(m[x[g]],h[x[g]]))return!1;return!0}return m!==m&&h!==h}return reactFastCompare=function(h,E){try{return p(h,E)}catch(g){if((g.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw g}},reactFastCompare}var reactFastCompareExports=requireReactFastCompare();const fastCompare=getDefaultExportFromCjs(reactFastCompareExports);var TAG_NAMES=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(TAG_NAMES||{}),SEO_PRIORITY_TAGS={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},VALID_TAG_NAMES=Object.values(TAG_NAMES),REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},HTML_TAG_MAP=Object.entries(REACT_TAG_MAP).reduce((r,[i,s])=>(r[s]=i,r),{}),HELMET_ATTRIBUTE="data-rh",HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},getInnermostProperty=(r,i)=>{for(let s=r.length-1;s>=0;s-=1){const c=r[s];if(Object.prototype.hasOwnProperty.call(c,i))return c[i]}return null},getTitleFromPropsList=r=>{let i=getInnermostProperty(r,"title");const s=getInnermostProperty(r,HELMET_PROPS.TITLE_TEMPLATE);if(Array.isArray(i)&&(i=i.join("")),s&&i)return s.replace(/%s/g,()=>i);const c=getInnermostProperty(r,HELMET_PROPS.DEFAULT_TITLE);return i||c||void 0},getOnChangeClientState=r=>getInnermostProperty(r,HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||(()=>{}),getAttributesFromPropsList=(r,i)=>i.filter(s=>typeof s[r]<"u").map(s=>s[r]).reduce((s,c)=>({...s,...c}),{}),getBaseTagFromPropsList=(r,i)=>i.filter(s=>typeof s.base<"u").map(s=>s.base).reverse().reduce((s,c)=>{if(!s.length){const p=Object.keys(c);for(let m=0;m<p.length;m+=1){const E=p[m].toLowerCase();if(r.indexOf(E)!==-1&&c[E])return s.concat(c)}}return s},[]),warn=r=>console&&typeof console.warn=="function"&&console.warn(r),getTagsFromPropsList=(r,i,s)=>{const c={};return s.filter(p=>Array.isArray(p[r])?!0:(typeof p[r]<"u"&&warn(`Helmet: ${r} should be of type "Array". Instead found type "${typeof p[r]}"`),!1)).map(p=>p[r]).reverse().reduce((p,m)=>{const h={};m.filter(g=>{let x;const S=Object.keys(g);for(let d=0;d<S.length;d+=1){const M=S[d],R=M.toLowerCase();i.indexOf(R)!==-1&&!(x==="rel"&&g[x].toLowerCase()==="canonical")&&!(R==="rel"&&g[R].toLowerCase()==="stylesheet")&&(x=R),i.indexOf(M)!==-1&&(M==="innerHTML"||M==="cssText"||M==="itemprop")&&(x=M)}if(!x||!g[x])return!1;const v=g[x].toLowerCase();return c[x]||(c[x]={}),h[x]||(h[x]={}),c[x][v]?!1:(h[x][v]=!0,!0)}).reverse().forEach(g=>p.push(g));const E=Object.keys(h);for(let g=0;g<E.length;g+=1){const x=E[g],S={...c[x],...h[x]};c[x]=S}return p},[]).reverse()},getAnyTrueFromPropsList=(r,i)=>{if(Array.isArray(r)&&r.length){for(let s=0;s<r.length;s+=1)if(r[s][i])return!0}return!1},reducePropsToState=r=>({baseTag:getBaseTagFromPropsList(["href"],r),bodyAttributes:getAttributesFromPropsList("bodyAttributes",r),defer:getInnermostProperty(r,HELMET_PROPS.DEFER),encode:getInnermostProperty(r,HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:getAttributesFromPropsList("htmlAttributes",r),linkTags:getTagsFromPropsList("link",["rel","href"],r),metaTags:getTagsFromPropsList("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:getTagsFromPropsList("noscript",["innerHTML"],r),onChangeClientState:getOnChangeClientState(r),scriptTags:getTagsFromPropsList("script",["src","innerHTML"],r),styleTags:getTagsFromPropsList("style",["cssText"],r),title:getTitleFromPropsList(r),titleAttributes:getAttributesFromPropsList("titleAttributes",r),prioritizeSeoTags:getAnyTrueFromPropsList(r,HELMET_PROPS.PRIORITIZE_SEO_TAGS)}),flattenArray=r=>Array.isArray(r)?r.join(""):r,checkIfPropsMatch=(r,i)=>{const s=Object.keys(r);for(let c=0;c<s.length;c+=1)if(i[s[c]]&&i[s[c]].includes(r[s[c]]))return!0;return!1},prioritizer=(r,i)=>Array.isArray(r)?r.reduce((s,c)=>(checkIfPropsMatch(c,i)?s.priority.push(c):s.default.push(c),s),{priority:[],default:[]}):{default:r,priority:[]},without=(r,i)=>({...r,[i]:void 0}),SELF_CLOSING_TAGS=["noscript","script","style"],encodeSpecialCharacters=(r,i=!0)=>i===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),generateElementAttributesAsString=r=>Object.keys(r).reduce((i,s)=>{const c=typeof r[s]<"u"?`${s}="${r[s]}"`:`${s}`;return i?`${i} ${c}`:c},""),generateTitleAsString=(r,i,s,c)=>{const p=generateElementAttributesAsString(s),m=flattenArray(i);return p?`<${r} ${HELMET_ATTRIBUTE}="true" ${p}>${encodeSpecialCharacters(m,c)}</${r}>`:`<${r} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(m,c)}</${r}>`},generateTagsAsString=(r,i,s=!0)=>i.reduce((c,p)=>{const m=p,h=Object.keys(m).filter(x=>!(x==="innerHTML"||x==="cssText")).reduce((x,S)=>{const v=typeof m[S]>"u"?S:`${S}="${encodeSpecialCharacters(m[S],s)}"`;return x?`${x} ${v}`:v},""),E=m.innerHTML||m.cssText||"",g=SELF_CLOSING_TAGS.indexOf(r)===-1;return`${c}<${r} ${HELMET_ATTRIBUTE}="true" ${h}${g?"/>":`>${E}</${r}>`}`},""),convertElementAttributesToReactProps=(r,i={})=>Object.keys(r).reduce((s,c)=>{const p=REACT_TAG_MAP[c];return s[p||c]=r[c],s},i),generateTitleAsReactComponent=(r,i,s)=>{const c={key:i,[HELMET_ATTRIBUTE]:!0},p=convertElementAttributesToReactProps(s,c);return[React.createElement("title",p,i)]},generateTagsAsReactComponent=(r,i)=>i.map((s,c)=>{const p={key:c,[HELMET_ATTRIBUTE]:!0};return Object.keys(s).forEach(m=>{const E=REACT_TAG_MAP[m]||m;if(E==="innerHTML"||E==="cssText"){const g=s.innerHTML||s.cssText;p.dangerouslySetInnerHTML={__html:g}}else p[E]=s[m]}),React.createElement(r,p)}),getMethodsForTag=(r,i,s=!0)=>{switch(r){case"title":return{toComponent:()=>generateTitleAsReactComponent(r,i.title,i.titleAttributes),toString:()=>generateTitleAsString(r,i.title,i.titleAttributes,s)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>convertElementAttributesToReactProps(i),toString:()=>generateElementAttributesAsString(i)};default:return{toComponent:()=>generateTagsAsReactComponent(r,i),toString:()=>generateTagsAsString(r,i,s)}}},getPriorityMethods=({metaTags:r,linkTags:i,scriptTags:s,encode:c})=>{const p=prioritizer(r,SEO_PRIORITY_TAGS.meta),m=prioritizer(i,SEO_PRIORITY_TAGS.link),h=prioritizer(s,SEO_PRIORITY_TAGS.script);return{priorityMethods:{toComponent:()=>[...generateTagsAsReactComponent("meta",p.priority),...generateTagsAsReactComponent("link",m.priority),...generateTagsAsReactComponent("script",h.priority)],toString:()=>`${getMethodsForTag("meta",p.priority,c)} ${getMethodsForTag("link",m.priority,c)} ${getMethodsForTag("script",h.priority,c)}`},metaTags:p.default,linkTags:m.default,scriptTags:h.default}},mapStateOnServer=r=>{const{baseTag:i,bodyAttributes:s,encode:c=!0,htmlAttributes:p,noscriptTags:m,styleTags:h,title:E="",titleAttributes:g,prioritizeSeoTags:x}=r;let{linkTags:S,metaTags:v,scriptTags:d}=r,M={toComponent:()=>{},toString:()=>""};return x&&({priorityMethods:M,linkTags:S,metaTags:v,scriptTags:d}=getPriorityMethods(r)),{priority:M,base:getMethodsForTag("base",i,c),bodyAttributes:getMethodsForTag("bodyAttributes",s,c),htmlAttributes:getMethodsForTag("htmlAttributes",p,c),link:getMethodsForTag("link",S,c),meta:getMethodsForTag("meta",v,c),noscript:getMethodsForTag("noscript",m,c),script:getMethodsForTag("script",d,c),style:getMethodsForTag("style",h,c),title:getMethodsForTag("title",{title:E,titleAttributes:g},c)}},server_default=mapStateOnServer,instances=[],isDocument=!!(typeof window<"u"&&window.document&&window.document.createElement),HelmetData=class{constructor(r,i){En(this,"instances",[]);En(this,"canUseDOM",isDocument);En(this,"context");En(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?instances:this.instances,add:r=>{(this.canUseDOM?instances:this.instances).push(r)},remove:r=>{const i=(this.canUseDOM?instances:this.instances).indexOf(r);(this.canUseDOM?instances:this.instances).splice(i,1)}}});this.context=r,this.canUseDOM=i||!1,i||(r.helmet=server_default({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},defaultValue={},Context=React.createContext(defaultValue),el,HelmetProvider=(el=class extends reactExports.Component{constructor(s){super(s);En(this,"helmetData");this.helmetData=new HelmetData(this.props.context||{},el.canUseDOM)}render(){return React.createElement(Context.Provider,{value:this.helmetData.value},this.props.children)}},En(el,"canUseDOM",isDocument),el),updateTags=(r,i)=>{const s=document.head||document.querySelector("head"),c=s.querySelectorAll(`${r}[${HELMET_ATTRIBUTE}]`),p=[].slice.call(c),m=[];let h;return i&&i.length&&i.forEach(E=>{const g=document.createElement(r);for(const x in E)if(Object.prototype.hasOwnProperty.call(E,x))if(x==="innerHTML")g.innerHTML=E.innerHTML;else if(x==="cssText")g.styleSheet?g.styleSheet.cssText=E.cssText:g.appendChild(document.createTextNode(E.cssText));else{const S=x,v=typeof E[S]>"u"?"":E[S];g.setAttribute(x,v)}g.setAttribute(HELMET_ATTRIBUTE,"true"),p.some((x,S)=>(h=S,g.isEqualNode(x)))?p.splice(h,1):m.push(g)}),p.forEach(E=>E.parentNode?.removeChild(E)),m.forEach(E=>s.appendChild(E)),{oldTags:p,newTags:m}},updateAttributes=(r,i)=>{const s=document.getElementsByTagName(r)[0];if(!s)return;const c=s.getAttribute(HELMET_ATTRIBUTE),p=c?c.split(","):[],m=[...p],h=Object.keys(i);for(const E of h){const g=i[E]||"";s.getAttribute(E)!==g&&s.setAttribute(E,g),p.indexOf(E)===-1&&p.push(E);const x=m.indexOf(E);x!==-1&&m.splice(x,1)}for(let E=m.length-1;E>=0;E-=1)s.removeAttribute(m[E]);p.length===m.length?s.removeAttribute(HELMET_ATTRIBUTE):s.getAttribute(HELMET_ATTRIBUTE)!==h.join(",")&&s.setAttribute(HELMET_ATTRIBUTE,h.join(","))},updateTitle=(r,i)=>{typeof r<"u"&&document.title!==r&&(document.title=flattenArray(r)),updateAttributes("title",i)},commitTagChanges=(r,i)=>{const{baseTag:s,bodyAttributes:c,htmlAttributes:p,linkTags:m,metaTags:h,noscriptTags:E,onChangeClientState:g,scriptTags:x,styleTags:S,title:v,titleAttributes:d}=r;updateAttributes("body",c),updateAttributes("html",p),updateTitle(v,d);const M={baseTag:updateTags("base",s),linkTags:updateTags("link",m),metaTags:updateTags("meta",h),noscriptTags:updateTags("noscript",E),scriptTags:updateTags("script",x),styleTags:updateTags("style",S)},R={},k={};Object.keys(M).forEach(D=>{const{newTags:ee,oldTags:ne}=M[D];ee.length&&(R[D]=ee),ne.length&&(k[D]=M[D].oldTags)}),i&&i(),g(r,R,k)},_helmetCallback=null,handleStateChangeOnClient=r=>{_helmetCallback&&cancelAnimationFrame(_helmetCallback),r.defer?_helmetCallback=requestAnimationFrame(()=>{commitTagChanges(r,()=>{_helmetCallback=null})}):(commitTagChanges(r),_helmetCallback=null)},client_default=handleStateChangeOnClient,HelmetDispatcher=class extends reactExports.Component{constructor(){super(...arguments);En(this,"rendered",!1)}shouldComponentUpdate(i){return!shallowEqual(i,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:i}=this.props.context;i.remove(this),this.emitChange()}emitChange(){const{helmetInstances:i,setHelmet:s}=this.props.context;let c=null;const p=reducePropsToState(i.get().map(m=>{const h={...m.props};return delete h.context,h}));HelmetProvider.canUseDOM?client_default(p):server_default&&(c=server_default(p)),s(c)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:i}=this.props.context;i.add(this),this.emitChange()}render(){return this.init(),null}},wi,Helmet=(wi=class extends reactExports.Component{shouldComponentUpdate(r){return!fastCompare(without(this.props,"helmetData"),without(r,"helmetData"))}mapNestedChildrenToProps(r,i){if(!i)return null;switch(r.type){case"script":case"noscript":return{innerHTML:i};case"style":return{cssText:i};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,i,s,c){return{...i,[r.type]:[...i[r.type]||[],{...s,...this.mapNestedChildrenToProps(r,c)}]}}mapObjectTypeChildren(r,i,s,c){switch(r.type){case"title":return{...i,[r.type]:c,titleAttributes:{...s}};case"body":return{...i,bodyAttributes:{...s}};case"html":return{...i,htmlAttributes:{...s}};default:return{...i,[r.type]:{...s}}}}mapArrayTypeChildrenToProps(r,i){let s={...i};return Object.keys(r).forEach(c=>{s={...s,[c]:r[c]}}),s}warnOnInvalidChildren(r,i){return invariant$1(VALID_TAG_NAMES.some(s=>r.type===s),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${VALID_TAG_NAMES.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),invariant$1(!i||typeof i=="string"||Array.isArray(i)&&!i.some(s=>typeof s!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,i){let s={};return React.Children.forEach(r,c=>{if(!c||!c.props)return;const{children:p,...m}=c.props,h=Object.keys(m).reduce((g,x)=>(g[HTML_TAG_MAP[x]||x]=m[x],g),{});let{type:E}=c;switch(typeof E=="symbol"?E=E.toString():this.warnOnInvalidChildren(c,p),E){case"Symbol(react.fragment)":i=this.mapChildrenToProps(p,i);break;case"link":case"meta":case"noscript":case"script":case"style":s=this.flattenArrayTypeChildren(c,s,h,p);break;default:i=this.mapObjectTypeChildren(c,i,h,p);break}}),this.mapArrayTypeChildrenToProps(s,i)}render(){const{children:r,...i}=this.props;let s={...i},{helmetData:c}=i;if(r&&(s=this.mapChildrenToProps(r,s)),c&&!(c instanceof HelmetData)){const p=c;c=new HelmetData(p.context,!0),delete s.helmetData}return c?React.createElement(HelmetDispatcher,{...s,context:c.value}):React.createElement(Context.Consumer,null,p=>React.createElement(HelmetDispatcher,{...s,context:p}))}},En(wi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),wi),define_process_env_default={};function _arrayLikeToArray(r,i){(i==null||i>r.length)&&(i=r.length);for(var s=0,c=Array(i);s<i;s++)c[s]=r[s];return c}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _defineProperty(r,i,s){return(i=_toPropertyKey(i))in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s,r}function _iterableToArray(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _iterableToArrayLimit(r,i){var s=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(s!=null){var c,p,m,h,E=[],g=!0,x=!1;try{if(m=(s=s.call(r)).next,i!==0)for(;!(g=(c=m.call(s)).done)&&(E.push(c.value),E.length!==i);g=!0);}catch(S){x=!0,p=S}finally{try{if(!g&&s.return!=null&&(h=s.return(),Object(h)!==h))return}finally{if(x)throw p}}return E}}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _nonIterableSpread(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ownKeys(r,i){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);i&&(c=c.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),s.push.apply(s,c)}return s}function _objectSpread2(r){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?ownKeys(Object(s),!0).forEach(function(c){_defineProperty(r,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):ownKeys(Object(s)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(s,c))})}return r}function _objectWithoutProperties(r,i){if(r==null)return{};var s,c,p=_objectWithoutPropertiesLoose(r,i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(c=0;c<m.length;c++)s=m[c],i.indexOf(s)===-1&&{}.propertyIsEnumerable.call(r,s)&&(p[s]=r[s])}return p}function _objectWithoutPropertiesLoose(r,i){if(r==null)return{};var s={};for(var c in r)if({}.hasOwnProperty.call(r,c)){if(i.indexOf(c)!==-1)continue;s[c]=r[c]}return s}function _slicedToArray(r,i){return _arrayWithHoles(r)||_iterableToArrayLimit(r,i)||_unsupportedIterableToArray(r,i)||_nonIterableRest()}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _toPrimitive(r,i){if(typeof r!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var c=s.call(r,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function _toPropertyKey(r){var i=_toPrimitive(r,"string");return typeof i=="symbol"?i:i+""}function _typeof(r){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_typeof(r)}function _unsupportedIterableToArray(r,i){if(r){if(typeof r=="string")return _arrayLikeToArray(r,i);var s={}.toString.call(r).slice(8,-1);return s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set"?Array.from(r):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?_arrayLikeToArray(r,i):void 0}}var ICON_PACKS_STARTING_VERSION="7.0.0",SVG_CORE_VERSION;try{var svgCorePackageJson=require("@fortawesome/fontawesome-svg-core/package.json");SVG_CORE_VERSION=svgCorePackageJson.version}catch{SVG_CORE_VERSION=typeof process<"u"&&define_process_env_default.FA_VERSION||"7.0.0"}function classList(r){var i=r.beat,s=r.fade,c=r.beatFade,p=r.bounce,m=r.shake,h=r.flash,E=r.spin,g=r.spinPulse,x=r.spinReverse,S=r.pulse,v=r.fixedWidth,d=r.inverse,M=r.border,R=r.listItem,k=r.flip,D=r.size,ee=r.rotation,ne=r.pull,te=r.swapOpacity,re=r.rotateBy,ge=r.widthAuto,Ae=versionCheckGte(SVG_CORE_VERSION,ICON_PACKS_STARTING_VERSION),me=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({"fa-beat":i,"fa-fade":s,"fa-beat-fade":c,"fa-bounce":p,"fa-shake":m,"fa-flash":h,"fa-spin":E,"fa-spin-reverse":x,"fa-spin-pulse":g,"fa-pulse":S,"fa-fw":v,"fa-inverse":d,"fa-border":M,"fa-li":R,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},"fa-".concat(D),typeof D<"u"&&D!==null),"fa-rotate-".concat(ee),typeof ee<"u"&&ee!==null&&ee!==0),"fa-pull-".concat(ne),typeof ne<"u"&&ne!==null),"fa-swap-opacity",te),"fa-rotate-by",Ae&&re),"fa-width-auto",Ae&&ge);return Object.keys(me).map(function(ue){return me[ue]?ue:null}).filter(function(ue){return ue})}function versionCheckGte(r,i){for(var s=r.split("-"),c=_slicedToArray(s,2),p=c[0],m=c[1],h=i.split("-"),E=_slicedToArray(h,2),g=E[0],x=E[1],S=p.split("."),v=g.split("."),d=0;d<Math.max(S.length,v.length);d++){var M=S[d]||"0",R=v[d]||"0",k=parseInt(M,10),D=parseInt(R,10);if(k!==D)return k>D}for(var ee=0;ee<Math.max(S.length,v.length);ee++){var ne=S[ee]||"0",te=v[ee]||"0";if(ne!==te&&ne.length!==te.length)return ne.length<te.length}return!(m&&!x)}function _isNumerical(r){return r=r-0,r===r}function camelize(r){return _isNumerical(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(i,s){return s?s.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var _excluded=["style"];function capitalize(r){return r.charAt(0).toUpperCase()+r.slice(1)}function styleToObject(r){return r.split(";").map(function(i){return i.trim()}).filter(function(i){return i}).reduce(function(i,s){var c=s.indexOf(":"),p=camelize(s.slice(0,c)),m=s.slice(c+1).trim();return p.startsWith("webkit")?i[capitalize(p)]=m:i[p]=m,i},{})}function convert(r,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof i=="string")return i;var c=(i.children||[]).map(function(g){return convert(r,g)}),p=Object.keys(i.attributes||{}).reduce(function(g,x){var S=i.attributes[x];switch(x){case"class":g.attrs.className=S,delete i.attributes.class;break;case"style":g.attrs.style=styleToObject(S);break;default:x.indexOf("aria-")===0||x.indexOf("data-")===0?g.attrs[x.toLowerCase()]=S:g.attrs[camelize(x)]=S}return g},{attrs:{}}),m=s.style,h=m===void 0?{}:m,E=_objectWithoutProperties(s,_excluded);return p.attrs.style=_objectSpread2(_objectSpread2({},p.attrs.style),h),r.apply(void 0,[i.tag,_objectSpread2(_objectSpread2({},p.attrs),E)].concat(_toConsumableArray(c)))}var PRODUCTION=!1;try{PRODUCTION=!0}catch{}function log(){if(!PRODUCTION&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function normalizeIconArgs(r){if(r&&_typeof(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(parse$1.icon)return parse$1.icon(r);if(r===null)return null;if(r&&_typeof(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function objectWithKey(r,i){return Array.isArray(i)&&i.length>0||!Array.isArray(i)&&i?_defineProperty({},r,i):{}}var defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},FontAwesomeIcon=React.forwardRef(function(r,i){var s=_objectSpread2(_objectSpread2({},defaultProps),r),c=s.icon,p=s.mask,m=s.symbol,h=s.className,E=s.title,g=s.titleId,x=s.maskId,S=normalizeIconArgs(c),v=objectWithKey("classes",[].concat(_toConsumableArray(classList(s)),_toConsumableArray((h||"").split(" ")))),d=objectWithKey("transform",typeof s.transform=="string"?parse$1.transform(s.transform):s.transform),M=objectWithKey("mask",normalizeIconArgs(p)),R=icon2(S,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},v),d),M),{},{symbol:m,title:E,titleId:g,maskId:x}));if(!R)return log("Could not find icon",S),null;var k=R.abstract,D={ref:i};return Object.keys(s).forEach(function(ee){defaultProps.hasOwnProperty(ee)||(D[ee]=s[ee])}),convertCurry(k[0],D)});FontAwesomeIcon.displayName="FontAwesomeIcon";FontAwesomeIcon.propTypes={beat:PropTypes.bool,border:PropTypes.bool,beatFade:PropTypes.bool,bounce:PropTypes.bool,className:PropTypes.string,fade:PropTypes.bool,flash:PropTypes.bool,mask:PropTypes.oneOfType([PropTypes.object,PropTypes.array,PropTypes.string]),maskId:PropTypes.string,fixedWidth:PropTypes.bool,inverse:PropTypes.bool,flip:PropTypes.oneOf([!0,!1,"horizontal","vertical","both"]),icon:PropTypes.oneOfType([PropTypes.object,PropTypes.array,PropTypes.string]),listItem:PropTypes.bool,pull:PropTypes.oneOf(["right","left"]),pulse:PropTypes.bool,rotation:PropTypes.oneOf([0,90,180,270]),rotateBy:PropTypes.bool,shake:PropTypes.bool,size:PropTypes.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:PropTypes.bool,spinPulse:PropTypes.bool,spinReverse:PropTypes.bool,symbol:PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),title:PropTypes.string,titleId:PropTypes.string,transform:PropTypes.oneOfType([PropTypes.string,PropTypes.object]),swapOpacity:PropTypes.bool,widthAuto:PropTypes.bool};var convertCurry=convert.bind(null,React.createElement),dist={exports:{}},hasRequiredDist;function requireDist(){return hasRequiredDist||(hasRequiredDist=1,(function(module,exports){(function(i,s){module.exports=s(requireJquery(),requireReact())})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)}),"./src/components/MapContainer/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)}),"./src/components/MultiMap/MultiMap.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)}),"./src/components/MultiMap/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)}),"./src/components/VectorMap/VectorMap.tsx":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)}),"./src/components/VectorMap/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)}),"./src/components/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)}),"./src/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)}),"./src/utils/builders/AttributeSeriesBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)}),"./src/utils/builders/LabelsBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)}),"./src/utils/builders/LabelsPropsBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)}),"./src/utils/builders/MarkerBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)}),"./src/utils/builders/MultiMapBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)}),"./src/utils/builders/SeriesBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)}),"./src/utils/builders/StyleBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)}),"./src/utils/builders/VectorMapBuilder.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)}),"./src/utils/builders/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)}),"./src/utils/builders/utils.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)}),"./src/utils/index.ts":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)}),"../../node_modules/classnames/index.js":((module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)}),"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":((module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA== */ "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)}),"../../node_modules/css-loader/dist/runtime/api.js":(module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)}),"../../node_modules/css-loader/dist/runtime/getUrl.js":(module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)}),"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":(module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)}),"./src/components/MapContainer/styles.module.scss":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)}),"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":(module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)}),"../../node_modules/style-loader/dist/runtime/insertBySelector.js":(module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)}),"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":(module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)}),"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":((module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)}),"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":(module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)}),"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":(module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)}),"../jquery-mousewheel/jquery.mousewheel.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)}),"../jvectormap/index.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)}),"../jvectormap/jquery.jvectormap.min.js":((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)}),"data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==":(module=>{eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==?`)}),jquery:(r=>{r.exports=__WEBPACK_EXTERNAL_MODULE_jquery__}),react:(r=>{r.exports=__WEBPACK_EXTERNAL_MODULE_react__})},__webpack_module_cache__={};function __webpack_require__(r){var i=__webpack_module_cache__[r];if(i!==void 0)return i.exports;var s=__webpack_module_cache__[r]={id:r,exports:{}};return __webpack_modules__[r](s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=r=>{var i=r&&r.__esModule?()=>r.default:()=>r;return __webpack_require__.d(i,{a:i}),i},__webpack_require__.d=(r,i)=>{for(var s in i)__webpack_require__.o(i,s)&&!__webpack_require__.o(r,s)&&Object.defineProperty(r,s,{enumerable:!0,get:i[s]})},__webpack_require__.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),__webpack_require__.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist)),dist.exports}var distExports=requireDist();const name="world_mill",content=JSON.parse(`{"insets":[{"width":900,"top":0,"height":440.7063107441331,"bbox":[{"y":-12671671.123330014,"x":-20004297.151525836},{"y":6930392.025135122,"x":20026572.394749384}],"left":0}],"paths":{"BD":{"path":"M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z","name":"Bangladesh"},"BE":{"path":"M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z","name":"Belgium"},"BF":{"path":"M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z","name":"Burkina Faso"},"BG":{"path":"M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z","name":"Bulgaria"},"BA":{"path":"M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z","name":"Bosnia and Herz."},"BN":{"path":"M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z","name":"Brunei"},"BO":{"path":"M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z","name":"Bolivia"},"JP":{"path":"M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z","name":"Japan"},"BI":{"path":"M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z","name":"Burundi"},"BJ":{"path":"M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z","name":"Benin"},"BT":{"path":"M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z","name":"Bhutan"},"JM":{"path":"M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z","name":"Jamaica"},"BW":{"path":"M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z","name":"Botswana"},"BR":{"path":"M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z","name":"Brazil"},"BS":{"path":"M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z","name":"Bahamas"},"BY":{"path":"M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z","name":"Belarus"},"BZ":{"path":"M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z","name":"Belize"},"RU":{"path":"M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z","name":"Russia"},"RW":{"path":"M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z","name":"Rwanda"},"RS":{"path":"M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z","name":"Serbia"},"TL":{"path":"M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z","name":"Timor-Leste"},"TM":{"path":"M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z","name":"Turkmenistan"},"TJ":{"path":"M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z","name":"Tajikistan"},"RO":{"path":"M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z","name":"Romania"},"GW":{"path":"M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z","name":"Guinea-Bissau"},"GT":{"path":"M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z","name":"Guatemala"},"GR":{"path":"M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z","name":"Greece"},"GQ":{"path":"M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z","name":"Eq. Guinea"},"GY":{"path":"M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z","name":"Guyana"},"GE":{"path":"M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z","name":"Georgia"},"GB":{"path":"M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z","name":"United Kingdom"},"GA":{"path":"M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z","name":"Gabon"},"GN":{"path":"M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z","name":"Guinea"},"GM":{"path":"M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z","name":"Gambia"},"GL":{"path":"M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z","name":"Greenland"},"GH":{"path":"M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z","name":"Ghana"},"OM":{"path":"M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z","name":"Oman"},"TN":{"path":"M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z","name":"Tunisia"},"JO":{"path":"M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z","name":"Jordan"},"HR":{"path":"M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z","name":"Croatia"},"HT":{"path":"M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z","name":"Haiti"},"HU":{"path":"M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z","name":"Hungary"},"HN":{"path":"M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z","name":"Honduras"},"PR":{"path":"M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z","name":"Puerto Rico"},"PS":{"path":"M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z","name":"Palestine"},"PT":{"path":"M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z","name":"Portugal"},"PY":{"path":"M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z","name":"Paraguay"},"PA":{"path":"M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z","name":"Panama"},"PG":{"path":"M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z","name":"Papua New Guinea"},"PE":{"path":"M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z","name":"Peru"},"PK":{"path":"M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z","name":"Pakistan"},"PH":{"path":"M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z","name":"Philippines"},"PL":{"path":"M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z","name":"Poland"},"ZM":{"path":"M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z","name":"Zambia"},"EH":{"path":"M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z","name":"W. Sahara"},"EE":{"path":"M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z","name":"Estonia"},"EG":{"path":"M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z","name":"Egypt"},"ZA":{"path":"M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z","name":"South Africa"},"EC":{"path":"M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z","name":"Ecuador"},"IT":{"path":"M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z","name":"Italy"},"VN":{"path":"M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z","name":"Vietnam"},"SB":{"path":"M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z","name":"Solomon Is."},"ET":{"path":"M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z","name":"Ethiopia"},"SO":{"path":"M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z","name":"Somalia"},"ZW":{"path":"M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z","name":"Zimbabwe"},"ES":{"path":"M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z","name":"Spain"},"ER":{"path":"M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z","name":"Eritrea"},"ME":{"path":"M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z","name":"Montenegro"},"MD":{"path":"M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z","name":"Moldova"},"MG":{"path":"M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z","name":"Madagascar"},"MA":{"path":"M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z","name":"Morocco"},"UZ":{"path":"M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z","name":"Uzbekistan"},"MM":{"path":"M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z","name":"Myanmar"},"ML":{"path":"M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z","name":"Mali"},"MN":{"path":"M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z","name":"Mongolia"},"MK":{"path":"M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z","name":"Macedonia"},"MW":{"path":"M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z","name":"Malawi"},"MR":{"path":"M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z","name":"Mauritania"},"UG":{"path":"M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z","name":"Uganda"},"MY":{"path":"M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z","name":"Malaysia"},"MX":{"path":"M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z","name":"Mexico"},"IL":{"path":"M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z","name":"Israel"},"FR":{"path":"M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z","name":"France"},"XS":{"path":"M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z","name":"Somaliland"},"FI":{"path":"M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z","name":"Finland"},"FJ":{"path":"M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z","name":"Fiji"},"FK":{"path":"M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z","name":"Falkland Is."},"NI":{"path":"M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z","name":"Nicaragua"},"NL":{"path":"M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z","name":"Netherlands"},"NO":{"path":"M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z","name":"Norway"},"NA":{"path":"M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z","name":"Namibia"},"VU":{"path":"M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z","name":"Vanuatu"},"NC":{"path":"M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z","name":"New Caledonia"},"NE":{"path":"M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z","name":"Niger"},"NG":{"path":"M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z","name":"Nigeria"},"NZ":{"path":"M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z","name":"New Zealand"},"NP":{"path":"M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z","name":"Nepal"},"XK":{"path":"M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z","name":"Kosovo"},"CI":{"path":"M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z","name":"Côte d'Ivoire"},"CH":{"path":"M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z","name":"Switzerland"},"CO":{"path":"M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z","name":"Colombia"},"CN":{"path":"M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z","name":"China"},"CM":{"path":"M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z","name":"Cameroon"},"CL":{"path":"M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z","name":"Chile"},"XC":{"path":"M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z","name":"N. Cyprus"},"CA":{"path":"M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z","name":"Canada"},"CG":{"path":"M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z","name":"Congo"},"CF":{"path":"M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z","name":"Central African Rep."},"CD":{"path":"M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z","name":"Dem. Rep. Congo"},"CZ":{"path":"M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z","name":"Czech Rep."},"CY":{"path":"M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z","name":"Cyprus"},"CR":{"path":"M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z","name":"Costa Rica"},"CU":{"path":"M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z","name":"Cuba"},"SZ":{"path":"M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z","name":"Swaziland"},"SY":{"path":"M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z","name":"Syria"},"KG":{"path":"M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z","name":"Kyrgyzstan"},"KE":{"path":"M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z","name":"Kenya"},"SS":{"path":"M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z","name":"S. Sudan"},"SR":{"path":"M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z","name":"Suriname"},"KH":{"path":"M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z","name":"Cambodia"},"SV":{"path":"M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z","name":"El Salvador"},"SK":{"path":"M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z","name":"Slovakia"},"KR":{"path":"M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z","name":"Korea"},"SI":{"path":"M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z","name":"Slovenia"},"KP":{"path":"M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z","name":"Dem. Rep. Korea"},"KW":{"path":"M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z","name":"Kuwait"},"SN":{"path":"M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z","name":"Senegal"},"SL":{"path":"M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z","name":"Sierra Leone"},"KZ":{"path":"M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z","name":"Kazakhstan"},"SA":{"path":"M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z","name":"Saudi Arabia"},"SE":{"path":"M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z","name":"Sweden"},"SD":{"path":"M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z","name":"Sudan"},"DO":{"path":"M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z","name":"Dominican Rep."},"DJ":{"path":"M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z","name":"Djibouti"},"DK":{"path":"M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z","name":"Denmark"},"DE":{"path":"M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z","name":"Germany"},"YE":{"path":"M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z","name":"Yemen"},"DZ":{"path":"M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z","name":"Algeria"},"US":{"path":"M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z","name":"United States"},"UY":{"path":"M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z","name":"Uruguay"},"LB":{"path":"M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z","name":"Lebanon"},"LA":{"path":"M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z","name":"Lao PDR"},"TW":{"path":"M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z","name":"Taiwan"},"TT":{"path":"M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z","name":"Trinidad and Tobago"},"TR":{"path":"M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z","name":"Turkey"},"LK":{"path":"M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z","name":"Sri Lanka"},"LV":{"path":"M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z","name":"Latvia"},"LT":{"path":"M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z","name":"Lithuania"},"LU":{"path":"M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z","name":"Luxembourg"},"LR":{"path":"M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z","name":"Liberia"},"LS":{"path":"M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z","name":"Lesotho"},"TH":{"path":"M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z","name":"Thailand"},"TF":{"path":"M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z","name":"Fr. S. Antarctic Lands"},"TG":{"path":"M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z","name":"Togo"},"TD":{"path":"M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z","name":"Chad"},"LY":{"path":"M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z","name":"Libya"},"AE":{"path":"M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z","name":"United Arab Emirates"},"VE":{"path":"M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z","name":"Venezuela"},"AF":{"path":"M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z","name":"Afghanistan"},"IQ":{"path":"M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z","name":"Iraq"},"IS":{"path":"M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z","name":"Iceland"},"IR":{"path":"M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z","name":"Iran"},"AM":{"path":"M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z","name":"Armenia"},"AL":{"path":"M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z","name":"Albania"},"AO":{"path":"M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z","name":"Angola"},"AR":{"path":"M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z","name":"Argentina"},"AU":{"path":"M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z","name":"Australia"},"AT":{"path":"M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z","name":"Austria"},"IN":{"path":"M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z","name":"India"},"TZ":{"path":"M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z","name":"Tanzania"},"AZ":{"path":"M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z","name":"Azerbaijan"},"IE":{"path":"M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z","name":"Ireland"},"ID":{"path":"M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z","name":"Indonesia"},"UA":{"path":"M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z","name":"Ukraine"},"QA":{"path":"M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z","name":"Qatar"},"MZ":{"path":"M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z","name":"Mozambique"}},"height":440.7063107441331,"projection":{"type":"mill","centralMeridian":11.5},"width":900}`),worldMill={name,content},defaultDatasetIdKey="label";function reforwardRef(r,i){typeof r=="function"?r(i):r&&(r.current=i)}function setOptions(r,i){const s=r.options;s&&i&&Object.assign(s,i)}function setLabels(r,i){r.labels=i}function setDatasets(r,i){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:defaultDatasetIdKey;const c=[];r.datasets=i.map(p=>{const m=r.datasets.find(h=>h[s]===p[s]);return!m||!p.data||c.includes(m)?{...p}:(c.push(m),Object.assign(m,p),m)})}function cloneData(r){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:defaultDatasetIdKey;const s={labels:[],datasets:[]};return setLabels(s,r.labels),setDatasets(s,r.datasets,i),s}function ChartComponent(r,i){const{height:s=150,width:c=300,redraw:p=!1,datasetIdKey:m,type:h,data:E,options:g,plugins:x=[],fallbackContent:S,updateMode:v,...d}=r,M=reactExports.useRef(null),R=reactExports.useRef(null),k=()=>{M.current&&(R.current=new Chart$1(M.current,{type:h,data:cloneData(E,m),options:g&&{...g},plugins:x}),reforwardRef(i,R.current))},D=()=>{reforwardRef(i,null),R.current&&(R.current.destroy(),R.current=null)};return reactExports.useEffect(()=>{!p&&R.current&&g&&setOptions(R.current,g)},[p,g]),reactExports.useEffect(()=>{!p&&R.current&&setLabels(R.current.config.data,E.labels)},[p,E.labels]),reactExports.useEffect(()=>{!p&&R.current&&E.datasets&&setDatasets(R.current.config.data,E.datasets,m)},[p,E.datasets]),reactExports.useEffect(()=>{R.current&&(p?(D(),setTimeout(k)):R.current.update(v))},[p,g,E.labels,E.datasets,v]),reactExports.useEffect(()=>{R.current&&(D(),setTimeout(k))},[h]),reactExports.useEffect(()=>(k(),()=>D()),[]),React.createElement("canvas",{ref:M,role:"img",height:s,width:c,...d},S)}const Chart=reactExports.forwardRef(ChartComponent);function createTypedChart(r,i){return Chart$1.register(i),reactExports.forwardRef((s,c)=>React.createElement(Chart,{...s,ref:c,type:r}))}const Line=createTypedChart("line",LineController);var __defProp=Object.defineProperty,__defNormalProp=(r,i,s)=>i in r?__defProp(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,__publicField=(r,i,s)=>__defNormalProp(r,typeof i!="symbol"?i+"":i,s);/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const _LifeCycleElementSemaphore=class g1{constructor(i,s){__publicField(this,"_lifecycle"),__publicField(this,"_element"),__publicField(this,"_releaseLock",null),__publicField(this,"_value",null),__publicField(this,"_afterMountCallbacks",[]),__publicField(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),__publicField(this,"release",once(()=>{const{_releaseLock:c,_state:p,_element:m,_lifecycle:h}=this;p.mountingInProgress?p.mountingInProgress.then(()=>h.unmount({element:m,mountResult:this.value})).catch(E=>{console.error("Semaphore unmounting error:",E)}).then(c.resolve).then(()=>{this._value=null}):(p.destroyedBeforeInitialization=!0,c.resolve())})),this._element=i,this._lifecycle=s,this._lock()}get value(){return this._value}unsafeSetValue(i){this._value=i,this._afterMountCallbacks.forEach(s=>s(i)),this._afterMountCallbacks=[]}runAfterMount(i){const{_value:s,_afterMountCallbacks:c}=this;s?i(s):c.push(i)}_lock(){const{_semaphores:i}=g1,{_state:s,_element:c,_lifecycle:p}=this,m=i.get(c)||Promise.resolve(null),h=createDefer();this._releaseLock=h;const E=m.then(()=>s.destroyedBeforeInitialization?Promise.resolve(void 0):(s.mountingInProgress=p.mount().then(g=>(g&&this.unsafeSetValue(g),g)),s.mountingInProgress)).then(async g=>{g&&p.afterMount&&await p.afterMount({element:c,mountResult:g})}).then(()=>h.promise).catch(g=>{console.error("Semaphore mounting error:",g)}).then(()=>{i.get(c)===E&&i.delete(c)});i.set(c,E)}};__publicField(_LifeCycleElementSemaphore,"_semaphores",new Map);let LifeCycleElementSemaphore=_LifeCycleElementSemaphore;/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ReactContextMetadataKey="$__CKEditorReactContextMetadata";function withCKEditorReactContextMetadata(r,i){return{...i,[ReactContextMetadataKey]:r}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ContextWatchdogContext=React.createContext(null),isContextWatchdogValue=r=>!!r&&typeof r=="object"&&"status"in r&&["initializing","initialized","error"].includes(r.status),isContextWatchdogValueWithStatus=r=>i=>isContextWatchdogValue(i)&&i.status===r,isContextWatchdogInitializing=isContextWatchdogValueWithStatus("initializing"),isContextWatchdogReadyToUse=r=>isContextWatchdogValueWithStatus("initialized")(r)&&r.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const ReactIntegrationUsageDataPlugin=createIntegrationUsageDataPlugin("react",{version:"9.5.0",frameworkVersion:React.version});/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function appendAllIntegrationPluginsToConfig(r){return isCKEditorFreeLicense(r.licenseKey)?r:appendExtraPluginsToEditorConfig(r,[ReactIntegrationUsageDataPlugin])}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */const REACT_INTEGRATION_READ_ONLY_LOCK_ID$1="Lock from React integration (@ckeditor/ckeditor5-react)";class CKEditor extends React.Component{constructor(i){super(i),__publicField(this,"domContainer",React.createRef()),__publicField(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:i}=window;if(!i)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[s]=i.split(".").map(Number);s>=42||i.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:i}=this;return i?i.value:null}get watchdog(){const{_semaphoreValue:i}=this;return i?i.watchdog:null}get editor(){const{_semaphoreValue:i}=this;return i?i.instance:null}shouldComponentUpdate(i){const{props:s,editorSemaphore:c}=this;return i.id!==s.id||i.disableWatchdog!==s.disableWatchdog?!0:(c&&(c.runAfterMount(({instance:p})=>{this._shouldUpdateEditorData(s,i,p)&&p.data.set(i.data)}),"disabled"in i&&c.runAfterMount(({instance:p})=>{i.disabled?p.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1):p.disableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1)})),!1)}componentDidMount(){isContextWatchdogInitializing(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){isContextWatchdogInitializing(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new LifeCycleElementSemaphore(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:i})=>{const{onReady:s}=this.props;s&&this.domContainer.current!==null&&s(i.instance)},unmount:async({element:i,mountResult:s})=>{const{onAfterDestroy:c}=this.props;try{await this._destroyEditor(s),i.innerHTML=""}finally{c&&c(s.instance)}}})}render(){return React.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const i=isContextWatchdogReadyToUse(this.context)?new EditorWatchdogAdapter(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig),s={current:0};return i.setCreator(async(c,p)=>{var m;const{editorSemaphore:h}=this,{onAfterDestroy:E}=this.props;s.current>0&&E&&((m=h?.value)!=null&&m.instance)&&E(h.value.instance);const g=await this._createEditor(c,p);return h&&s.current>0&&(h.unsafeSetValue({instance:g,watchdog:i}),setTimeout(()=>{this.props.onReady&&this.props.onReady(i.editor)})),s.current++,g}),i.on("error",(c,{error:p,causesRestart:m})=>{(this.props.onError||console.error)(p,{phase:"runtime",willEditorRestart:m})}),await i.create(this.domContainer.current,this._getConfig()).catch(c=>{(this.props.onError||console.error)(c,{phase:"initialization",willEditorRestart:!1})}),{watchdog:i,instance:i.editor}}_createEditor(i,s){const{contextItemMetadata:c}=this.props;return c&&(s=withCKEditorReactContextMetadata(c,s)),this.props.editor.create(i,appendAllIntegrationPluginsToConfig(s)).then(p=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&p.enableReadOnlyMode(REACT_INTEGRATION_READ_ONLY_LOCK_ID$1)}const m=p.model.document,h=p.editing.view.document;return m.on("change:data",E=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(E,p)}),h.on("focus",E=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(E,p)}),h.on("blur",E=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(E,p)}),p})}async _destroyEditor(i){const{watchdog:s,instance:c}=i;return new Promise((p,m)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(s)return await s.destroy(),p();if(c)return await c.destroy(),p();p()}catch(h){console.error(h),m(h)}})})}_shouldUpdateEditorData(i,s,c){return!(i.data===s.data||c.data.get()===s.data)}_getConfig(){const i=this.props.config||{};return this.props.data&&i.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...i,initialData:i.initialData||this.props.data||""}}}__publicField(CKEditor,"contextType",ContextWatchdogContext);class EditorWatchdogAdapter{constructor(i){__publicField(this,"_contextWatchdog"),__publicField(this,"_id"),__publicField(this,"_creator"),this._contextWatchdog=i,this._id=uid()}setCreator(i){this._creator=i}create(i,s){return this._contextWatchdog.add({sourceElementOrData:i,config:s,creator:this._creator,id:this._id,type:"editor"})}on(i,s){this._contextWatchdog.on("itemError",(c,{itemId:p,error:m})=>{p===this._id&&s(null,{error:m,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function mergeRefs(...r){return i=>{r.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}const EditorEditable=reactExports.memo(reactExports.forwardRef(({id:r,semaphore:i,rootName:s},c)=>{const p=reactExports.useRef(null);return reactExports.useEffect(()=>{let m,h;return i.runAfterMount(({instance:E})=>{if(!p.current)return;h=E;const{ui:g,model:x}=h,S=x.document.getRoot(s);S&&h.ui.getEditableElement(s)&&h.detachEditable(S),m=g.view.createEditable(s,p.current),g.addEditable(m),E.editing.view.forceRender()}),()=>{if(h&&h.state!=="destroyed"&&p.current){const E=h.model.document.getRoot(s);/* istanbul ignore else -- @preserve */E&&h.detachEditable(E)}}},[i.revision]),React.createElement("div",{key:i.revision,id:r,ref:mergeRefs(c,p)})}));EditorEditable.displayName="EditorEditable";const EditorToolbarWrapper=reactExports.forwardRef(({editor:r},i)=>{const s=reactExports.useRef(null);return reactExports.useEffect(()=>{const c=s.current;if(!r||!c)return;const p=r.ui.view.toolbar.element;return c.appendChild(p),()=>{c.contains(p)&&c.removeChild(p)}},[r&&r.id]),React.createElement("div",{ref:mergeRefs(s,i)})});EditorToolbarWrapper.displayName="EditorToolbarWrapper";var reactCodemirror2={},hasRequiredReactCodemirror2;function requireReactCodemirror2(){if(hasRequiredReactCodemirror2)return reactCodemirror2;hasRequiredReactCodemirror2=1;function r(){return r=Object.assign?Object.assign.bind():function(S){for(var v=1;v<arguments.length;v++){var d=arguments[v];for(var M in d)Object.prototype.hasOwnProperty.call(d,M)&&(S[M]=d[M])}return S},r.apply(this,arguments)}function i(S){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},i(S)}var s=(function(){var S=function(d,M){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(R,k){R.__proto__=k}||function(R,k){for(var D in k)Object.prototype.hasOwnProperty.call(k,D)&&(R[D]=k[D])},S(d,M)};return function(v,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");S(v,d);function M(){this.constructor=v}v.prototype=d===null?Object.create(d):(M.prototype=d.prototype,new M)}})();Object.defineProperty(reactCodemirror2,"__esModule",{value:!0}),reactCodemirror2.UnControlled=reactCodemirror2.Controlled=void 0;var c=requireReact(),p=typeof window>"u"||typeof commonjsGlobal<"u"&&commonjsGlobal.PREVENT_CODEMIRROR_RENDER===!0,m;p||(m=requireCodemirror());var h=(function(){function S(){}return S.equals=function(v,d){var M=this,R=Object.keys,k=i(v),D=i(d);return v&&d&&k==="object"&&k===D?R(v).length===R(d).length&&R(v).every(function(ee){return M.equals(v[ee],d[ee])}):v===d},S})(),E=(function(){function S(v,d){this.editor=v,this.props=d}return S.prototype.delegateCursor=function(v,d,M){var R=this.editor.getDoc();M&&this.editor.focus(),d?R.setCursor(v):R.setCursor(v,null,{scroll:!1})},S.prototype.delegateScroll=function(v){this.editor.scrollTo(v.x,v.y)},S.prototype.delegateSelection=function(v,d){var M=this.editor.getDoc();M.setSelections(v),d&&this.editor.focus()},S.prototype.apply=function(v){v&&v.selection&&v.selection.ranges&&this.delegateSelection(v.selection.ranges,v.selection.focus||!1),v&&v.cursor&&this.delegateCursor(v.cursor,v.autoScroll||!1,this.editor.getOption("autofocus")||!1),v&&v.scroll&&this.delegateScroll(v.scroll)},S.prototype.applyNext=function(v,d,M){v&&v.selection&&v.selection.ranges&&d&&d.selection&&d.selection.ranges&&!h.equals(v.selection.ranges,d.selection.ranges)&&this.delegateSelection(d.selection.ranges,d.selection.focus||!1),v&&v.cursor&&d&&d.cursor&&!h.equals(v.cursor,d.cursor)&&this.delegateCursor(M.cursor||d.cursor,d.autoScroll||!1,d.autoCursor||!1),v&&v.scroll&&d&&d.scroll&&!h.equals(v.scroll,d.scroll)&&this.delegateScroll(d.scroll)},S.prototype.applyUserDefined=function(v,d){d&&d.cursor&&this.delegateCursor(d.cursor,v.autoScroll||!1,this.editor.getOption("autofocus")||!1)},S.prototype.wire=function(v){var d=this;Object.keys(v||{}).filter(function(M){return/^on/.test(M)}).forEach(function(M){switch(M){case"onBlur":d.editor.on("blur",function(R,k){d.props.onBlur(d.editor,k)});break;case"onContextMenu":{d.editor.on("contextmenu",function(R,k){d.props.onContextMenu(d.editor,k)});break}case"onCopy":{d.editor.on("copy",function(R,k){d.props.onCopy(d.editor,k)});break}case"onCursor":d.editor.on("cursorActivity",function(R){d.props.onCursor(d.editor,d.editor.getDoc().getCursor())});break;case"onCursorActivity":d.editor.on("cursorActivity",function(R){d.props.onCursorActivity(d.editor)});break;case"onCut":{d.editor.on("cut",function(R,k){d.props.onCut(d.editor,k)});break}case"onDblClick":{d.editor.on("dblclick",function(R,k){d.props.onDblClick(d.editor,k)});break}case"onDragEnter":d.editor.on("dragenter",function(R,k){d.props.onDragEnter(d.editor,k)});break;case"onDragLeave":{d.editor.on("dragleave",function(R,k){d.props.onDragLeave(d.editor,k)});break}case"onDragOver":d.editor.on("dragover",function(R,k){d.props.onDragOver(d.editor,k)});break;case"onDragStart":{d.editor.on("dragstart",function(R,k){d.props.onDragStart(d.editor,k)});break}case"onDrop":d.editor.on("drop",function(R,k){d.props.onDrop(d.editor,k)});break;case"onFocus":d.editor.on("focus",function(R,k){d.props.onFocus(d.editor,k)});break;case"onGutterClick":d.editor.on("gutterClick",function(R,k,D,ee){d.props.onGutterClick(d.editor,k,D,ee)});break;case"onInputRead":d.editor.on("inputRead",function(R,k){d.props.onInputRead(d.editor,k)});break;case"onKeyDown":d.editor.on("keydown",function(R,k){d.props.onKeyDown(d.editor,k)});break;case"onKeyHandled":d.editor.on("keyHandled",function(R,k,D){d.props.onKeyHandled(d.editor,k,D)});break;case"onKeyPress":d.editor.on("keypress",function(R,k){d.props.onKeyPress(d.editor,k)});break;case"onKeyUp":d.editor.on("keyup",function(R,k){d.props.onKeyUp(d.editor,k)});break;case"onMouseDown":{d.editor.on("mousedown",function(R,k){d.props.onMouseDown(d.editor,k)});break}case"onPaste":{d.editor.on("paste",function(R,k){d.props.onPaste(d.editor,k)});break}case"onRenderLine":{d.editor.on("renderLine",function(R,k,D){d.props.onRenderLine(d.editor,k,D)});break}case"onScroll":d.editor.on("scroll",function(R){d.props.onScroll(d.editor,d.editor.getScrollInfo())});break;case"onSelection":d.editor.on("beforeSelectionChange",function(R,k){d.props.onSelection(d.editor,k)});break;case"onTouchStart":{d.editor.on("touchstart",function(R,k){d.props.onTouchStart(d.editor,k)});break}case"onUpdate":d.editor.on("update",function(R){d.props.onUpdate(d.editor)});break;case"onViewportChange":d.editor.on("viewportChange",function(R,k,D){d.props.onViewportChange(d.editor,k,D)});break}})},S})(),g=(function(S){s(v,S);function v(d){var M=S.call(this,d)||this;return p||(M.applied=!1,M.appliedNext=!1,M.appliedUserDefined=!1,M.deferred=null,M.emulating=!1,M.hydrated=!1,M.initCb=function(){M.props.editorDidConfigure&&M.props.editorDidConfigure(M.editor)},M.mounted=!1),M}return v.prototype.hydrate=function(d){var M=this,R=d&&d.options?d.options:{},k=r({},m.defaults,this.editor.options,R),D=Object.keys(k).some(function(ee){return M.editor.getOption(ee)!==k[ee]});D&&Object.keys(k).forEach(function(ee){R.hasOwnProperty(ee)&&M.editor.getOption(ee)!==k[ee]&&(M.editor.setOption(ee,k[ee]),M.mirror.setOption(ee,k[ee]))}),this.hydrated||(this.deferred?this.resolveChange(d.value):this.initChange(d.value||"")),this.hydrated=!0},v.prototype.initChange=function(d){this.emulating=!0;var M=this.editor.getDoc(),R=M.lastLine(),k=M.getLine(M.lastLine()).length;M.replaceRange(d||"",{line:0,ch:0},{line:R,ch:k}),this.mirror.setValue(d),M.clearHistory(),this.mirror.clearHistory(),this.emulating=!1},v.prototype.resolveChange=function(d){this.emulating=!0;var M=this.editor.getDoc();if(this.deferred.origin==="undo"?M.undo():this.deferred.origin==="redo"?M.redo():M.replaceRange(this.deferred.text,this.deferred.from,this.deferred.to,this.deferred.origin),d&&d!==M.getValue()){var R=M.getCursor();M.setValue(d),M.setCursor(R)}this.emulating=!1,this.deferred=null},v.prototype.mirrorChange=function(d){var M=this.editor.getDoc();return d.origin==="undo"?(M.setHistory(this.mirror.getHistory()),this.mirror.undo()):d.origin==="redo"?(M.setHistory(this.mirror.getHistory()),this.mirror.redo()):this.mirror.replaceRange(d.text,d.from,d.to,d.origin),this.mirror.getValue()},v.prototype.componentDidMount=function(){var d=this;p||(this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&m.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=m(this.ref,this.props.options),this.shared=new E(this.editor,this.props),this.mirror=m(function(){},this.props.options),this.editor.on("electricInput",function(){d.mirror.setHistory(d.editor.getDoc().getHistory())}),this.editor.on("cursorActivity",function(){d.mirror.setCursor(d.editor.getDoc().getCursor())}),this.editor.on("beforeChange",function(M,R){if(!d.emulating){R.cancel(),d.deferred=R;var k=d.mirrorChange(d.deferred);d.props.onBeforeChange&&d.props.onBeforeChange(d.editor,d.deferred,k)}}),this.editor.on("change",function(M,R){d.mounted&&d.props.onChange&&d.props.onChange(d.editor,R,d.editor.getValue())}),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getOption("autofocus")&&this.editor.focus(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},v.prototype.componentDidUpdate=function(d){if(!p){var M={cursor:null};this.props.value!==d.value&&(this.hydrated=!1),!this.props.autoCursor&&this.props.autoCursor!==void 0&&(M.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.appliedNext||(this.shared.applyNext(d,this.props,M),this.appliedNext=!0),this.shared.applyUserDefined(d,M),this.appliedUserDefined=!0}},v.prototype.componentWillUnmount=function(){p||this.props.editorWillUnmount&&this.props.editorWillUnmount(m)},v.prototype.shouldComponentUpdate=function(d,M){return!p},v.prototype.render=function(){var d=this;if(p)return null;var M=this.props.className?"react-codemirror2 ".concat(this.props.className):"react-codemirror2";return c.createElement("div",{className:M,ref:function(k){return d.ref=k}})},v})(c.Component);reactCodemirror2.Controlled=g;var x=(function(S){s(v,S);function v(d){var M=S.call(this,d)||this;return p||(M.applied=!1,M.appliedUserDefined=!1,M.continueChange=!1,M.detached=!1,M.hydrated=!1,M.initCb=function(){M.props.editorDidConfigure&&M.props.editorDidConfigure(M.editor)},M.mounted=!1,M.onBeforeChangeCb=function(){M.continueChange=!0}),M}return v.prototype.hydrate=function(d){var M=this,R=d&&d.options?d.options:{},k=r({},m.defaults,this.editor.options,R),D=Object.keys(k).some(function(re){return M.editor.getOption(re)!==k[re]});if(D&&Object.keys(k).forEach(function(re){R.hasOwnProperty(re)&&M.editor.getOption(re)!==k[re]&&M.editor.setOption(re,k[re])}),!this.hydrated){var ee=this.editor.getDoc(),ne=ee.lastLine(),te=ee.getLine(ee.lastLine()).length;ee.replaceRange(d.value||"",{line:0,ch:0},{line:ne,ch:te})}this.hydrated=!0},v.prototype.componentDidMount=function(){var d=this;p||(this.detached=this.props.detach===!0,this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&m.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=m(this.ref,this.props.options),this.shared=new E(this.editor,this.props),this.editor.on("beforeChange",function(M,R){d.props.onBeforeChange&&d.props.onBeforeChange(d.editor,R,d.editor.getValue(),d.onBeforeChangeCb)}),this.editor.on("change",function(M,R){!d.mounted||!d.props.onChange||(d.props.onBeforeChange?d.continueChange&&d.props.onChange(d.editor,R,d.editor.getValue()):d.props.onChange(d.editor,R,d.editor.getValue()))}),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getDoc().clearHistory(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},v.prototype.componentDidUpdate=function(d){if(this.detached&&this.props.detach===!1&&(this.detached=!1,d.editorDidAttach&&d.editorDidAttach(this.editor)),!this.detached&&this.props.detach===!0&&(this.detached=!0,d.editorDidDetach&&d.editorDidDetach(this.editor)),!(p||this.detached)){var M={cursor:null};this.props.value!==d.value&&(this.hydrated=!1,this.applied=!1,this.appliedUserDefined=!1),!d.autoCursor&&d.autoCursor!==void 0&&(M.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.applied||(this.shared.apply(d),this.applied=!0),this.appliedUserDefined||(this.shared.applyUserDefined(d,M),this.appliedUserDefined=!0)}},v.prototype.componentWillUnmount=function(){p||this.props.editorWillUnmount&&this.props.editorWillUnmount(m)},v.prototype.shouldComponentUpdate=function(d,M){var R=!0;return p&&(R=!1),this.detached&&d.detach&&(R=!1),R},v.prototype.render=function(){var d=this;if(p)return null;var M=this.props.className?"react-codemirror2 ".concat(this.props.className):"react-codemirror2";return c.createElement("div",{className:M,ref:function(k){return d.ref=k}})},v})(c.Component);return reactCodemirror2.UnControlled=x,reactCodemirror2}var reactCodemirror2Exports=requireReactCodemirror2();export{Chart as C,FontAwesomeIcon as F,Helmet as H,Link as L,Navigate as N,Outlet as O,RouterProvider as R,useParams as a,useLocation as b,Lt as c,distExports as d,CKEditor as e,Line as f,reactCodemirror2Exports as g,createBrowserRouter as h,createRoutesFromChildren as i,jsxRuntimeExports as j,Route as k,clientExports as l,HelmetProvider as m,reactExports as r,useNavigate as u,worldMill as w,y};
