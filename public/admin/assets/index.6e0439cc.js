import{R as w,r as v,I,j as f,C as L,u as j,k as P,a as $,c as R}from"./index.2449c2f3.js";function T(r,s){const a=v.exports.useContext(I),e=a.prefixCls,t=e===void 0?"arco":e,l=r.spin,i=r.className,n={"aria-hidden":!0,focusable:!1,ref:s,...r,className:`${i?i+" ":""}${t}-icon ${t}-icon-link`};return l&&(n.className=`${n.className} ${t}-icon-loading`),delete n.spin,delete n.isIcon,f("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...n,children:f("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"})})}const b=w.forwardRef(T);b.defaultProps={isIcon:!0};b.displayName="IconLink";var E=b,u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(r){for(var s,a=1,e=arguments.length;a<e;a++){s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(r[t]=s[t])}return r},u.apply(this,arguments)},K=globalThis&&globalThis.__rest||function(r,s){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&s.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)s.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},D={hoverable:!0};function S(r,s){var a,e=v.exports.useContext(L),t=e.getPrefixCls,l=e.componentConfig,i=e.rtl,n=j(r,D,l==null?void 0:l.Link),x=n.className,y=n.style,C=n.children,c=n.icon,h=n.status,p=n.disabled,k=n.hoverable,_=K(n,["className","style","children","icon","status","disabled","hoverable"]),N=P({onKeyDown:n.onKeyDown}),o=t("link"),O="href"in n?"a":"span",g=function(d){p?(d.preventDefault(),d.stopPropagation()):n.onClick&&n.onClick(d)};return $(O,{...u({className:R(o,(a={},a[o+"-disabled"]=p,a[o+"-is-"+h]=h,a[o+"-with-icon"]=c,a[o+"-hoverless"]=!k,a[o+"-rtl"]=i,a),x),ref:s,tabIndex:p?-1:void 0},_,{style:y,onClick:g},N({onPressEnter:g})),children:[c?f("span",{className:o+"-icon",children:c===!0?f(E,{}):c}):null,C]})}var m=v.exports.forwardRef(S);m.displayName="Link";var B=m;export{B as L};
