/*! For license information please see 411b5d95.900e2448.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7378),n(3905));const i={id:"Toast",title:"Incubator.Toast",sidebar_label:"Toast"},a=void 0,l={unversionedId:"components/incubator/Toast",id:"components/incubator/Toast",isDocsHomePage:!1,title:"Incubator.Toast",description:"A toast component for displaying non-disruptive messages to the user",source:"@site/../docs/components/incubator/Toast.md",sourceDirName:"components/incubator",slug:"/components/incubator/Toast",permalink:"/react-native-ui-lib/docs/components/incubator/Toast",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/incubator/Toast.md",tags:[],version:"current",frontMatter:{id:"Toast",title:"Incubator.Toast",sidebar_label:"Toast"},sidebar:"tutorialSidebar",previous:{title:"TextField",permalink:"/react-native-ui-lib/docs/components/incubator/TextField"},next:{title:"WheelPicker",permalink:"/react-native-ui-lib/docs/components/incubator/WheelPicker"}},s=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"action",id:"action",children:[]},{value:"autoDismiss",id:"autodismiss",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"centerMessage",id:"centermessage",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"elevation",id:"elevation",children:[]},{value:"enableHapticFeedback",id:"enablehapticfeedback",children:[]},{value:"icon",id:"icon",children:[]},{value:"iconColor",id:"iconcolor",children:[]},{value:"message",id:"message",children:[]},{value:"messageStyle",id:"messagestyle",children:[]},{value:"onAnimationEnd",id:"onanimationend",children:[]},{value:"onDismiss",id:"ondismiss",children:[]},{value:"position",id:"position",children:[]},{value:"preset",id:"preset",children:[]},{value:"renderAttachment",id:"renderattachment",children:[]},{value:"showLoader",id:"showloader",children:[]},{value:"style",id:"style",children:[]},{value:"swipeable",id:"swipeable",children:[]},{value:"testID",id:"testid",children:[]},{value:"visible",id:"visible",children:[]},{value:"zIndex",id:"zindex",children:[]}]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A toast component for displaying non-disruptive messages to the user",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/incubatorScreens/IncubatorToastScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<Toast\n  visible={isVisible}\n  position={'top'}\n  autoDismiss={5000}\n  onDismiss={onDismiss}\n>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"action"},"action"),(0,o.kt)("p",null,"A single action for the user (showLoader will override this)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonProps ")," "),(0,o.kt)("h3",{id:"autodismiss"},"autoDismiss"),(0,o.kt)("p",null,"Time of milliseconds to automatically invoke the onDismiss callback",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,o.kt)("p",null,"The toast background color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"centermessage"},"centerMessage"),(0,o.kt)("p",null,"Should message be centered in the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Toast container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"elevation"},"elevation"),(0,o.kt)("h4",{id:"android-only"},"Android only"),(0,o.kt)("p",null,"Custom elevation",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"enablehapticfeedback"},"enableHapticFeedback"),(0,o.kt)("p",null,"Whether to trigger an haptic feedback once the toast is shown (requires react-native-haptic-feedback dependency)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"icon"},"icon"),(0,o.kt)("p",null,"A custom icon to render on the left side of the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,o.kt)("h3",{id:"iconcolor"},"iconColor"),(0,o.kt)("p",null,"The icon color",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"Toast message",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"messagestyle"},"messageStyle"),(0,o.kt)("p",null,"Toast message style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"StyleProp<TextStyle> ")," "),(0,o.kt)("h3",{id:"onanimationend"},"onAnimationEnd"),(0,o.kt)("p",null,"Callback for end of toast animation",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(visible?: boolean) => void ")," "),(0,o.kt)("h3",{id:"ondismiss"},"onDismiss"),(0,o.kt)("p",null,"Callback for the toast dismissal",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => void ")," "),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("p",null,"The position of the toast. 'top' or 'bottom'.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"'top' | 'bottom' ")," "),(0,o.kt)("h3",{id:"preset"},"preset"),(0,o.kt)("p",null,"Pass to have preset UI",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ToastPreset ('success' | 'failure' | 'general' | 'offline') ")," "),(0,o.kt)("h3",{id:"renderattachment"},"renderAttachment"),(0,o.kt)("p",null,"Render a custom view that will appear permanently above or below a Toast, depends on the Toast's position and animate with it when the Toast is made visible or dismissed",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"() => JSX.Element | undefined ")," "),(0,o.kt)("h3",{id:"showloader"},"showLoader"),(0,o.kt)("p",null,"Whether to show a loader",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"Toast style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"swipeable"},"swipeable"),(0,o.kt)("p",null,"Whether to support dismissing the toast with a swipe gesture. Requires to pass onDismiss method to control visibility",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"The component test id",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"visible"},"visible"),(0,o.kt)("p",null,"Whether to show or hide the toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"zindex"},"zIndex"),(0,o.kt)("p",null,"Custom zIndex for toast",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,s=o(e),c=1;c<arguments.length;c++){for(var p in a=Object(arguments[c]))n.call(a,p)&&(s[p]=a[p]);if(t){l=t(a);for(var u=0;u<l.length;u++)r.call(a,l[u])&&(s[l[u]]=a[l[u]])}}return s}},1535:(e,t,n)=>{var r=n(2525),o=60103,i=60106;var a=60109,l=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var v=y.prototype=new k;v.constructor=y,r(v,h.prototype),v.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+T(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+T(l=e[c],c);s+=S(l,t,n,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)s+=S(l=l.value,t,n,p=r+T(l,c++),a);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function D(){var e=_.current;if(null===e)throw Error(m(321));return e}},7378:(e,t,n)=>{n(1535)}}]);