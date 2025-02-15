import{c as U,e as F,g as me,n as R,m as O,b as ue,w as J,u as ee,d as H,f as de,h as ve,I as ge,p as B,i as Z,L as he,t as X,j as fe,k as Y,l as G,o as we,q as pe,s as Se,v as _e,x as ye,H as xe,a as Pe,y as Ie,z as be,P as Ce,r as Te}from"./PageTemplate-60b7d20f.js";import{S as K}from"./SectionTitle-f4d74ad1.js";import{a as m,d as E,k as I,l as De,m as j,r as A,n as z,o as oe,q as Ze,s as te,f as ze,w as ke,b as L,g as _,c as V,e as Ne,t as He,F as Xe,_ as Ye}from"./index-5b4e5106.js";import{S as $e,a as Re}from"./index-94b14c03.js";const[Ae,k]=U("loading"),Ee=Array(12).fill(null).map((e,a)=>m("i",{class:k("line",String(a+1))},null)),Me=m("svg",{class:k("circular"),viewBox:"25 25 50 50"},[m("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Be={size:R,type:O("circular"),color:String,vertical:Boolean,textSize:R,textColor:String};var Le=E({name:Ae,props:Be,setup(e,{slots:a}){const c=I(()=>F({color:e.color},me(e.size))),o=()=>{const i=e.type==="spinner"?Ee:Me;return m("span",{class:k("spinner",e.type),style:c.value},[a.icon?a.icon():i])},s=()=>{var i;if(a.default)return m("span",{class:k("text"),style:{fontSize:ue(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[a.default()])};return()=>{const{type:i,vertical:d}=e;return m("div",{class:k([i,{vertical:d}]),"aria-live":"polite","aria-busy":!0},[o(),s()])}}});const We=J(Le);function Oe(){const e=j({show:!1}),a=s=>{e.show=s},c=s=>{F(e,s,{transitionAppear:!0}),a(!0)},o=()=>a(!1);return ee({open:c,close:o,toggle:a}),{open:c,close:o,state:e,toggle:a}}function Ue(e){const a=De(e),c=document.createElement("div");return document.body.appendChild(c),{instance:a.mount(c),unmount(){a.unmount(),document.body.removeChild(c)}}}const Q=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),W=U("image-preview")[1];var Fe=E({props:{src:String,show:Boolean,active:Number,minZoom:H(R),maxZoom:H(R),rootWidth:H(Number),rootHeight:H(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:a,slots:c}){const o=j({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),s=de(),i=A(),d=I(()=>{const{rootWidth:t,rootHeight:l}=e,r=l/t;return o.imageRatio>r}),u=I(()=>{const{scale:t,moveX:l,moveY:r,moving:w,zooming:p}=o,N={transitionDuration:p||w?"0s":".3s"};if(t!==1){const le=l/t,re=r/t;N.transform=`scale(${t}, ${t}) translate(${le}px, ${re}px)`}return N}),v=I(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:l}=e,r=d.value?l/o.imageRatio:t;return Math.max(0,(o.scale*r-t)/2)}return 0}),h=I(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:l}=e,r=d.value?l:t*o.imageRatio;return Math.max(0,(o.scale*r-l)/2)}return 0}),b=t=>{t=Z(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,a("scale",{scale:t,index:e.active}))},C=()=>{b(1),o.moveX=0,o.moveY=0},M=()=>{const t=o.scale>1?1:2;b(t),o.moveX=0,o.moveY=0};let S,y,x,T,D,n,f,g=!1;const se=t=>{const{touches:l}=t;if(S=l.length,S===2&&e.disableZoom)return;const{offsetX:r}=s;s.start(t),y=o.moveX,x=o.moveY,f=Date.now(),g=!1,o.moving=S===1&&o.scale!==1,o.zooming=S===2&&!r.value,o.zooming&&(T=o.scale,D=Q(t.touches))},ne=t=>{const{touches:l}=t;if(s.move(t),o.moving){const{deltaX:r,deltaY:w}=s,p=r.value+y,N=w.value+x;if((p>v.value||p<-v.value)&&!g&&s.isHorizontal()){o.moving=!1;return}g=!0,B(t,!0),o.moveX=Z(p,-v.value,v.value),o.moveY=Z(N,-h.value,h.value)}if(o.zooming&&(B(t,!0),l.length===2)){const r=Q(l),w=T*r/D;b(w)}},ie=()=>{if(S>1)return;const{offsetX:t,offsetY:l}=s,r=Date.now()-f,w=250,p=5;t.value<p&&l.value<p&&(r<w?n?(clearTimeout(n),n=null,M()):n=setTimeout(()=>{a("close"),n=null},w):r>he&&a("longPress"))},q=t=>{let l=!1;if((o.moving||o.zooming)&&(l=!0,o.moving&&y===o.moveX&&x===o.moveY&&(l=!1),!t.touches.length)){o.zooming&&(o.moveX=Z(o.moveX,-v.value,v.value),o.moveY=Z(o.moveY,-h.value,h.value),o.zooming=!1),o.moving=!1,y=0,x=0,T=1,o.scale<1&&C();const r=+e.maxZoom;o.scale>r&&(o.scale=r)}B(t,l),ie(),s.reset()},ce=t=>{const{naturalWidth:l,naturalHeight:r}=t.target;o.imageRatio=r/l};return z(()=>e.active,C),z(()=>e.show,t=>{t||C()}),ve("touchmove",ne,{target:I(()=>{var t;return(t=i.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>m(We,{type:"spinner"},null)};return m($e,{ref:i,class:W("swipe-item"),onTouchstartPassive:se,onTouchend:q,onTouchcancel:q},{default:()=>[c.image?m("div",{class:W("image-wrap")},[c.image({src:e.src})]):m(ge,{src:e.src,fit:"contain",class:W("image",{vertical:d.value}),style:u.value,onLoad:ce},t)]})}}});const[je,P]=U("image-preview"),qe=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ge={show:Boolean,loop:X,images:fe(),minZoom:Y(1/3),maxZoom:Y(3),overlay:X,closeable:Boolean,showIndex:X,className:G,closeIcon:O("clear"),transition:String,beforeClose:Function,overlayClass:G,overlayStyle:Object,swipeDuration:Y(300),startPosition:Y(0),showIndicators:Boolean,closeOnPopstate:X,closeIconPosition:O("top-right"),teleport:[String,Object]};var ae=E({name:je,props:Ge,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:a,slots:c}){const o=A(),s=j({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),i=()=>{if(o.value){const n=ye(o.value.$el);s.rootWidth=n.width,s.rootHeight=n.height,o.value.resize()}},d=n=>a("scale",n),u=n=>a("update:show",n),v=()=>{Ie(e.beforeClose,{args:[s.active],done:()=>u(!1)})},h=n=>{n!==s.active&&(s.active=n,a("change",n))},b=()=>{if(e.showIndex)return m("div",{class:P("index")},[c.index?c.index({index:s.active}):`${s.active+1} / ${e.images.length}`])},C=()=>{if(c.cover)return m("div",{class:P("cover")},[c.cover()])},M=()=>{s.disableZoom=!0},S=()=>{s.disableZoom=!1},y=()=>m(Re,{ref:o,lazyRender:!0,loop:e.loop,class:P("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:h,onDragEnd:S,onDragStart:M},{default:()=>[e.images.map((n,f)=>m(Fe,{src:n,show:e.show,active:s.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:s.rootWidth,rootHeight:s.rootHeight,disableZoom:s.disableZoom,onScale:d,onClose:v,onLongPress:()=>a("longPress",{index:f})},{image:c.image}))]}),x=()=>{if(e.closeable)return m(Pe,{role:"button",name:e.closeIcon,class:[P("close-icon",e.closeIconPosition),xe],onClick:v},null)},T=()=>a("closed"),D=(n,f)=>{var g;return(g=o.value)==null?void 0:g.swipeTo(n,f)};return ee({swipeTo:D}),oe(i),z([we,pe],i),z(()=>e.startPosition,n=>h(+n)),z(()=>e.show,n=>{const{images:f,startPosition:g}=e;n?(h(+g),Ze(()=>{i(),D(+g,{immediate:!0})})):a("close",{index:s.active,url:f[s.active]})}),()=>m(_e,te({class:[P(),e.className],overlayClass:[P("overlay"),e.overlayClass],onClosed:T,"onUpdate:show":u},Se(e,qe)),{default:()=>[x(),y(),b(),C()]})}});let $;const Ke={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Ve(){({instance:$}=Ue({setup(){const{state:e,toggle:a}=Oe(),c=()=>{e.images=[]};return()=>m(ae,te(e,{onClosed:c,"onUpdate:show":a}),null)}}))}const Qe=(e,a=0)=>{if(be)return $||Ve(),e=Array.isArray(e)?{images:e,startPosition:a}:e,$.open(F({},Ke,e)),$};J(ae);const Je={class:"honor-list"},eo=["onClick"],oo={class:"honor-img"},to=["src","alt"],ao={class:"honor-name"},so={class:"thanks-letter"},no={class:"letter-content"},io=E({__name:"honor",setup(e){const a=A([]),c=A("http://www.hexingcpa.com/dev-api"),o=async()=>{try{const i=await Te({url:"/system/honor/list",method:"get",params:{pageNum:1,pageSize:100}});i.code===200&&(a.value=i.rows)}catch(i){console.error("获取荣誉列表失败:",i)}},s=i=>{Qe({images:[`${i.imageUrl.includes("http://www.hexingcpa.com/")?i.imageUrl:`${c.value}${i.imageUrl}`}`],closeable:!0,showIndex:!1})};return oe(()=>{o()}),(i,d)=>(L(),ze(Ce,{type:"content"},{"after-content":ke(()=>[m(K,{title:"荣誉资质","title-en":"HONOR AND QUALIFICATIONS"}),_("div",Je,[(L(!0),V(Xe,null,Ne(a.value,u=>(L(),V("div",{key:u.id,class:"honor-item",onClick:v=>s(u)},[_("div",oo,[_("img",{src:c.value+u.imageUrl,alt:u.name},null,8,to)]),_("div",ao,He(u.name),1)],8,eo))),128))]),_("div",so,[m(K,{title:"感谢信","title-en":"THANK YOU LETTER"}),_("div",no,[_("img",{src:"http://www.hexingcpa.com/static/img/MasterDDSSlicePNG1e442dcde2ce4e7b47284582255d8396.5c315546.jpg",alt:"感谢信",class:"letter-img",onClick:d[0]||(d[0]=u=>s({imageUrl:"http://www.hexingcpa.com/static/img/MasterDDSSlicePNG1e442dcde2ce4e7b47284582255d8396.5c315546.jpg"}))})])])]),_:1}))}});const uo=Ye(io,[["__scopeId","data-v-29669ba4"]]);export{uo as default};
