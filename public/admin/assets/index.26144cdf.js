import{c as y,R as h,m as S,r as _,C as O,u as T,j as g,F as E,a as R,y as $,l as z}from"./index.2449c2f3.js";function A(e){var a=e.style,r=e.width,s=r===void 0?"60%":r,n=e.rows,i=n===void 0?3:n,c=e.className,t=e.prefixCls,u=y(t+"-text",c),l=[];function f(d){if(S(s))return s[d];if(i-1===d)return s}for(var m=0;m<i;m++)l.push(h.createElement("li",{className:t+"-text-row",key:m,style:{width:f(m)}}));return h.createElement("ul",{className:u,style:a},l)}function F(e){var a,r=e.style,s=e.shape,n=s===void 0?"square":s,i=e.size,c=e.position,t=c===void 0?"left":c,u=e.className,l=e.prefixCls,f=y(l+"-image",(a={},a[l+"-image-"+t]=t,a[l+"-image-"+n]=n,a[l+"-image-"+i]=i,a),u);return h.createElement("div",{className:f,style:r})}var v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(e){for(var a,r=1,s=arguments.length;r<s;r++){a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)};function p(e){return z(e)?e:{}}var q={text:!0,loading:!0};function D(e,a){var r,s=_.exports.useContext(O),n=s.getPrefixCls,i=s.componentConfig,c=s.rtl,t=T(e,q,i==null?void 0:i.Skeleton),u=t.style,l=t.className,f=t.animation,m=t.loading,d=t.image,C=t.text,k=t.children,x=p(d),w=p(C),o=n("skeleton"),P=y(o,(r={},r[o+"-animate"]=f,r[o+"-rtl"]=c,r),l);function N(){return d&&g("div",{className:o+"-header",children:g(F,{...v({prefixCls:o},x)})})}function j(){return C&&g("div",{className:o+"-content",children:g(A,{...v({prefixCls:o},w)})})}return g(E,{children:m?R("div",{...v({},$(t),{className:P,style:u,ref:a}),children:[x.position!=="right"&&N(),j(),x.position==="right"&&N()]}):k})}var b=_.exports.forwardRef(D);b.displayName="Skeleton";var M=b;export{M as S};
