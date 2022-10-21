!function(){"use strict";var e={418:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(e){s[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=r(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))n.call(a,p)&&(c[p]=a[p]);if(t){i=t(a);for(var u=0;u<i.length;u++)s.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c}},251:function(e,t,n){n(418);var s=n(196),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,p=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:p,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},893:function(e,t,n){e.exports=n(251)},196:function(e){e.exports=window.React}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}!function(){var e=n(893);const{useState:t,useEffect:s}=wp.element,{Placeholder:r,Spinner:o}=wp.components;var a=n=>{const[a,i]=t({}),[c,l]=t(!1);return s((()=>{n.id&&new wp.api.models.Media({id:n.id})}),[]),c?(0,e.jsx)("img",{src:a.src,width:a.width,height:a.height,alt:"attachment",className:"attachment"}):(0,e.jsx)(r,{children:(0,e.jsx)(o,{})})};const{__:__}=wp.i18n,{dispatch:i}=wp.data,{useState:c,useEffect:l}=wp.element,{Icon:p,Button:u,TextControl:d,Placeholder:m,Spinner:j}=wp.components,{MediaUpload:f}=wp.mediaUtils;var _=()=>{const[t,n]=c(""),[s,r]=c(""),[o,_]=c(0),[h,g]=c(!1);return l((()=>{wp.api.loadPromise.then((()=>{const e=new wp.api.models.Settings;!1===h&&e.fetch().then((e=>{n(e.e_quotes_fantasy_name),r(e.e_quotes_corporate_name),_(e.e_quotes_main_logo),g(!0)}))}))}),[]),h?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d,{label:__("Corporate name","e-quotes"),onChange:e=>r(e),value:s}),(0,e.jsx)(d,{label:__("Fantasy name","e-quotes"),onChange:e=>n(e),value:t}),(0,e.jsx)(f,{onSelect:e=>_(e.id),allowedTypes:["image"],value:"media",render:t=>{let{open:n}=t;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(a,{id:o}),(0,e.jsx)(p,{icon:"remove"})]}),(0,e.jsxs)(u,Object.assign({isSecondary:!0,onClick:n},{children:[" ",__("Choose file","e-quotes")]}))]})}}),(0,e.jsx)("hr",{className:"e-quotes__divider"}),(0,e.jsx)(u,Object.assign({isPrimary:!0,onClick:()=>{new wp.api.models.Settings({e_quotes_corporate_name:s,e_quotes_fantasy_name:t,e_quotes_main_logo:o}).save(),i("core/notices").createNotice("success",__("Settings Saved","e-quotes"),{type:"snackbar",isDismissible:!0})}},{children:__("Save settings","e-quotes")}))]}):(0,e.jsx)(m,{children:(0,e.jsx)(j,{})})};const{Panel:h,PanelBody:g}=wp.components,{__:x}=wp.i18n;var w=()=>(0,e.jsx)(h,{children:(0,e.jsx)(g,Object.assign({title:x("General","e-quotes"),icon:"admin-tools"},{children:(0,e.jsx)(_,{})}))});const{__:v}=wp.i18n,{store:b}=wp.notices,{Icon:y}=wp.components,{Fragment:O}=wp.element,{SnackbarList:q}=wp.components,{useDispatch:S,useSelect:N}=wp.data,E=()=>{const t=N((e=>e(b).getNotices().filter((e=>"snackbar"===e.type))),[]),{removeNotice:n}=S(b);return(0,e.jsx)(q,{className:"edit-site-notices",notices:t,onRemove:n})};const{render:P}=wp.element;document.getElementById("e-quotes-settings-page")&&P((0,e.jsx)((()=>(0,e.jsxs)(O,{children:[(0,e.jsx)("div",Object.assign({className:"e-quotes__header"},{children:(0,e.jsx)("div",Object.assign({className:"e-quotes__container"},{children:(0,e.jsx)("div",Object.assign({className:"e-quotes__title"},{children:(0,e.jsxs)("h1",{children:[v("E-Quotes Settings","e-quotes")," ",(0,e.jsx)(y,{icon:"admin-plugins"})]})}))}))})),(0,e.jsx)("div",Object.assign({className:"e-quotes__main"},{children:(0,e.jsx)(w,{})})),(0,e.jsx)("div",Object.assign({className:"e-quotes__notices"},{children:(0,e.jsx)(E,{})}))]})),{}),document.getElementById("e-quotes-settings-page"))}()}();