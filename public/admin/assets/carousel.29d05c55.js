import{R as L,r as l,C as te,s as c,x as T,J as Re,a1 as Ee,a2 as Me,a3 as We,a4 as ke,v as me,w as De,Z as ze,$ as Fe}from"./index.92ea8f58.js";var ee=globalThis&&globalThis.__assign||function(){return ee=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},ee.apply(this,arguments)};function Le(e,a){var r,n,t=l.exports.useContext(te).getPrefixCls,d=e.className,u=e.type,x=u===void 0?"line":u,i=e.count,N=i===void 0?2:i,p=e.activeIndex,w=p===void 0?0:p,C=e.position,g=C===void 0?"bottom":C,E=e.trigger,M=E===void 0?"click":E,_=e.onSelectIndex,y=t("carousel-indicator"),W=[];if(x==="slider"){var k=100/N;W.push(c("span",{style:{width:k+"%",left:w*k+"%"},className:T(y+"-item",y+"-item-active")},0))}else for(var A=0;A<N;A++)W.push(c("span",{"data-index":A,className:T(y+"-item",(r={},r[y+"-item-active"]=A===w,r))},A));var U=(n={ref:a,className:T(y,y+"-"+x,y+"-"+g,d)},n[M==="click"?"onClick":"onMouseEnter"]=function(P){if(P.preventDefault(),x==="slider"){var J=P.nativeEvent.offsetX,q=P.currentTarget.clientWidth;if(P.target===P.currentTarget){var V=~~(J/q*N);V!==w&&_(V)}}else{var D=P.target.getAttribute("data-index");D&&+D!==w&&_(+D)}},n);return c("div",{...ee({},U),children:W})}var $e=L.forwardRef(Le),Ue=$e,Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Y.apply(this,arguments)};function Ve(e,a){var r,n=e.className,t=e.direction,d=t===void 0?"horizontal":t,u=e.showArrow,x=u===void 0?"always":u,i=e.prev,N=e.next,p=e.icons,w=Re(),C=l.exports.useContext(te).getPrefixCls,g=C("carousel"),E=T(g+"-arrow",(r={},r[g+"-arrow-hover"]=x==="hover",r),n),M=p&&p.hasOwnProperty("prev")?p.prev:d==="horizontal"?c(Ee,{}):c(Me,{}),_=p&&p.hasOwnProperty("next")?p.next:d==="horizontal"?c(We,{}):c(ke,{});return me("div",{ref:a,className:E,children:[c("div",{...Y({className:g+"-arrow-"+(d==="vertical"?"top":"left"),onClick:i,role:"button",tabIndex:0},w({onPressEnter:i})),children:M}),c("div",{...Y({className:g+"-arrow-"+(d==="vertical"?"bottom":"right"),onClick:N,role:"button",tabIndex:0},w({onPressEnter:N})),children:_})]})}var He=L.forwardRef(Ve),Ke=He;function Ye(e,a){var r=l.exports.useRef(null),n=l.exports.useRef(),t=function(){a!==null&&(r.current=setInterval(function(){n.current()},a))},d=function(){r.current&&clearInterval(r.current)},u=function(){d(),t()};return l.exports.useEffect(function(){n.current=e},[e]),l.exports.useEffect(function(){return t(),d},[a]),u}var re=globalThis&&globalThis.__assign||function(){return re=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},re.apply(this,arguments)},Je=globalThis&&globalThis.__rest||function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r},F=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),t,d=[],u;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)d.push(t.value)}catch(x){u={error:x}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return d},qe=3e3,Be={animation:"slide",indicatorType:"dot",indicatorPosition:"bottom",direction:"horizontal",showArrow:"always",trigger:"click",moveSpeed:500,timingFunc:"cubic-bezier(0.34, 0.69, 0.1, 1)"};function Ge(e,a){var r,n,t=l.exports.useContext(te),d=t.getPrefixCls,u=t.componentConfig,x=t.rtl,i=De(e,Be,u==null?void 0:u.Carousel),N=i.style,p=i.className,w=i.children,C=i.currentIndex,g=i.animation,E=i.trigger,M=i.direction,_=i.moveSpeed,y=i.timingFunc,W=i.indicatorType,k=i.indicatorPosition,A=i.indicatorClassName,U=i.showArrow,P=i.miniRender,J=i.arrowClassName,q=i.carousel,V=i.icons,D=i.onChange,he=Je(i,["style","className","children","currentIndex","animation","trigger","direction","moveSpeed","timingFunc","indicatorType","indicatorPosition","indicatorClassName","showArrow","miniRender","arrowClassName","carousel","icons","onChange"]),h=i.autoPlay;h&&i.autoPlaySpeed&&(h={interval:i.autoPlaySpeed});var ae=L.Children.toArray(w).filter(function(o){return L.isValidElement(o)}),z=ae.length,ne=l.exports.useRef(null),H=l.exports.useRef(null),K=l.exports.useRef(null),ie=F(l.exports.useState(typeof C=="number"?$(C):0),2),B=ie[0],be=ie[1],oe=F(l.exports.useState(B),2),xe=oe[0],we=oe[1],se=F(l.exports.useState(!1),2),Ce=se[0],le=se[1],ce=F(l.exports.useState(!1),2),G=ce[0],ue=ce[1],ve=F(l.exports.useState(null),2),Q=ve[0],Ie=ve[1],de=F(l.exports.useState({sliderWrapper:null,indicatorWrapper:null}),2),fe=de[0],pe=de[1],I=typeof C=="number"?$(C):B,X=$(I-1),Z=$(I+1),Ne=typeof h=="object"&&h.interval?h.interval:qe;l.exports.useEffect(function(){return function(){return K.current&&clearTimeout(K.current)}},[]),l.exports.useEffect(function(){O({targetIndex:I})},[I]);var _e=Ye(function(){O({targetIndex:Z})},h&&!Ce&&z>1?Ne:null);l.exports.useImperativeHandle(q,function(){return{dom:ne.current,goto:function(o){var s=o.index,v=o.isNegative,m=o.isManual,b=o.resetAutoPlayInterval;O({targetIndex:$(s),isNegative:v,isManual:m,resetAutoPlayInterval:b})}}});function $(o){var s=+o;return typeof s=="number"&&!isNaN(s)?(s+z)%z:o}function O(o){var s=o.targetIndex,v=o.isNegative,m=v===void 0?!1:v,b=o.isManual,S=b===void 0?!1:b,j=o.resetAutoPlayInterval,R=j===void 0?!1:j;!G&&s!==I&&(ue(!0),be(s),we(B),Ie(m?"negative":"positive"),D&&D(s,I,S),h&&R&&_e(),K.current=setTimeout(function(){ue(!1),K.current=null},_))}function Pe(){if(g==="card"){if(H.current){var o=H.current.children[0];if(!o)return;var s=H.current.clientWidth,v=o.clientWidth,m=(s-v)/2,b=200,S=s/2,j=v,R=S+50>=j?b*4:b*S/(j-S);pe({sliderWrapper:{perspective:R},indicatorWrapper:{width:"auto",left:m,right:m}})}}else pe({sliderWrapper:null,indicatorWrapper:null})}var f=d("carousel"),Se=T(f,f+"-indicator-position-"+k,(r={},r[f+"-rtl"]=x,r),p),Te=Object.assign({},h&&(typeof h!="object"||h.hoverToPause!==!1)?{onMouseEnter:function(){return le(!0)},onMouseLeave:function(){return le(!1)}}:null);return c(ze,{onResize:Pe,children:me("div",{...re({ref:function(o){a=o,ne.current=a},className:Se,style:N},Fe(he,["autoplay","autoPlaySpeed"]),Te),children:[c("div",{ref:H,style:fe.sliderWrapper,className:T(f+"-"+g,f+"-"+M,(n={},n[f+"-negative"]=Q==="negative",n)),children:ae.map(function(o,s){var v,m=s===I,b=s===X,S=s===Z,j=!P||m||b||S;if(!j)return null;var R=o.props,Ae=R.style,Oe=R.className,ge=R.onClick;return L.cloneElement(o,{"aria-hidden":!m,style:Object.assign({transitionTimingFunction:y,transitionDuration:_+"ms",animationTimingFunction:y,animationDuration:_+"ms"},Ae),className:T(Oe,(v={},v[f+"-item-prev"]=b,v[f+"-item-next"]=S,v[f+"-item-current"]=m,v[f+"-item-slide-in"]=g==="slide"&&Q&&G&&m,v[f+"-item-slide-out"]=g==="slide"&&Q&&G&&s===xe,v)),onClick:function(je){ge&&ge(je),O({targetIndex:s,isNegative:s===X,isManual:!0})}})})}),W!=="never"&&z>1&&c("div",{style:fe.indicatorWrapper,className:T(f+"-indicator-wrapper",f+"-indicator-wrapper-"+k),children:c(Ue,{className:A,type:W,count:z,activeIndex:I,position:k,trigger:E,onSelectIndex:function(o){return O({targetIndex:o,isNegative:o<I,isManual:!0})}})}),U!=="never"&&z>1&&c(Ke,{className:J,direction:M,showArrow:U,icons:V,prev:function(){return O({targetIndex:X,isNegative:!0,isManual:!0})},next:function(){return O({targetIndex:Z,isManual:!0})}})]})})}var ye=L.forwardRef(Ge);ye.displayName="Carousel";var Qe=ye;const Xe=["//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f7e8fc1e09c42e30682526252365be1c.jpg~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/94e8dd2d6dc4efb2c8cfd82c0ff02a2c.jpg~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/ec447228c59ae1ebe185bab6cd776ca4.jpg~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1d1580d2a5a1e27415ff594c756eabd8.jpg~tplv-uwbnlip3yd-webp.webp"];function er(){return c(Qe,{indicatorType:"slider",showArrow:"never",autoPlay:!0,style:{width:"100%",height:160},children:Xe.map((e,a)=>c("div",{children:c("img",{src:e,style:{width:280,transform:"translateY(-30px)"}})},a))})}export{er as default};
