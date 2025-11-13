import{Aa as N1,Da as b1,E as p1,Ea as y1,Ga as w1,H as $,Ha as k1,Ia as A1,J as q,K as u1,L as M1,P as d1,S as X,T as P,U as R,V as w,_ as L1,a as f1,b as n1,ba as v1,ca as h1,ja as C1,ka as g1,o as N2,p as o1,pa as x1,qa as b2,ra as S1,s as O,sa as i2,ta as S,w as t1,y as m1,z as z1}from"./chunk-HTKGOQCI.js";var P1=[{path:"",loadChildren:()=>import("./chunk-D22OPZND.js").then(c=>c.HOME_ROUTES)},{path:"video/:id",loadChildren:()=>import("./chunk-2ZC3VCKW.js").then(c=>c.VIDEO_DETAILS_ROUTES)}];var T1={providers:[m1(),x1({eventCoalescing:!0}),A1(P1),b1()]};function B2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function w3(c){if(Array.isArray(c))return c}function k3(c){if(Array.isArray(c))return B2(c)}function A3(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function F1(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,t4(e.key),e)}}function P3(c,l,a){return l&&F1(c.prototype,l),a&&F1(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function o2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=X2(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,f=!1;return{s:function(){a=a.call(c)},n:function(){var n=a.next();return i=n.done,n},e:function(n){f=!0,s=n},f:function(){try{i||a.return==null||a.return()}finally{if(f)throw s}}}}function u(c,l,a){return(l=t4(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function T3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function F3(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,s,i,f=[],n=!0,t=!1;try{if(s=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;n=!1}else for(;!(n=(e=s.call(a)).done)&&(f.push(e.value),f.length!==l);n=!0);}catch(z){t=!0,r=z}finally{try{if(!n&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(t)throw r}}return f}}function B3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B1(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function o(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?B1(Object(a),!0).forEach(function(e){u(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):B1(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function M2(c,l){return w3(c)||F3(c,l)||X2(c,l)||B3()}function A(c){return k3(c)||T3(c)||X2(c)||D3()}function H3(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function t4(c){var l=H3(c,"string");return typeof l=="symbol"?l:l+""}function z2(c){"@babel/helpers - typeof";return z2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},z2(c)}function X2(c,l){if(c){if(typeof c=="string")return B2(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?B2(c,l):void 0}}var D1=function(){},Y2={},m4={},z4=null,p4={mark:D1,measure:D1};try{typeof window<"u"&&(Y2=window),typeof document<"u"&&(m4=document),typeof MutationObserver<"u"&&(z4=MutationObserver),typeof performance<"u"&&(p4=performance)}catch{}var R3=Y2.navigator||{},H1=R3.userAgent,R1=H1===void 0?"":H1,U=Y2,L=m4,E1=z4,f2=p4,o5=!!U.document,H=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",u4=~R1.indexOf("MSIE")||~R1.indexOf("Trident/"),y2,E3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,U3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,M4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},I3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],g="classic",e2="duotone",L4="sharp",v4="sharp-duotone",h4="chisel",C4="etch",g4="jelly",x4="jelly-duo",S4="jelly-fill",N4="notdog",b4="notdog-duo",y4="slab",w4="slab-press",k4="thumbprint",A4="utility",P4="utility-duo",T4="utility-fill",F4="whiteboard",W3="Classic",O3="Duotone",q3="Sharp",G3="Sharp Duotone",j3="Chisel",V3="Etch",_3="Jelly",$3="Jelly Duo",X3="Jelly Fill",Y3="Notdog",K3="Notdog Duo",Q3="Slab",J3="Slab Press",Z3="Thumbprint",c0="Utility",a0="Utility Duo",l0="Utility Fill",e0="Whiteboard",B4=[g,e2,L4,v4,h4,C4,g4,x4,S4,N4,b4,y4,w4,k4,A4,P4,T4,F4],t5=(y2={},u(u(u(u(u(u(u(u(u(u(y2,g,W3),e2,O3),L4,q3),v4,G3),h4,j3),C4,V3),g4,_3),x4,$3),S4,X3),N4,Y3),u(u(u(u(u(u(u(u(y2,b4,K3),y4,Q3),w4,J3),k4,Z3),A4,c0),P4,a0),T4,l0),F4,e0)),r0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},s0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},i0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),f0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},D4=["fak","fa-kit","fakd","fa-kit-duotone"],U1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},n0=["kit"],o0="kit",t0="kit-duotone",m0="Kit",z0="Kit Duotone",m5=u(u({},o0,m0),t0,z0),p0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},u0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},I1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},w2,n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],L0="classic",v0="duotone",h0="sharp",C0="sharp-duotone",g0="chisel",x0="etch",S0="jelly",N0="jelly-duo",b0="jelly-fill",y0="notdog",w0="notdog-duo",k0="slab",A0="slab-press",P0="thumbprint",T0="utility",F0="utility-duo",B0="utility-fill",D0="whiteboard",H0="Classic",R0="Duotone",E0="Sharp",U0="Sharp Duotone",I0="Chisel",W0="Etch",O0="Jelly",q0="Jelly Duo",G0="Jelly Fill",j0="Notdog",V0="Notdog Duo",_0="Slab",$0="Slab Press",X0="Thumbprint",Y0="Utility",K0="Utility Duo",Q0="Utility Fill",J0="Whiteboard",z5=(w2={},u(u(u(u(u(u(u(u(u(u(w2,L0,H0),v0,R0),h0,E0),C0,U0),g0,I0),x0,W0),S0,O0),N0,q0),b0,G0),y0,j0),u(u(u(u(u(u(u(u(w2,w0,V0),k0,_0),A0,$0),P0,X0),T0,Y0),F0,K0),B0,Q0),D0,J0)),Z0="kit",c6="kit-duotone",a6="Kit",l6="Kit Duotone",p5=u(u({},Z0,a6),c6,l6),e6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},r6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},D2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},s6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],H4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(d0,s6),i6=["solid","regular","light","thin","duotone","brands","semibold"],R4=[1,2,3,4,5,6,7,8,9,10],f6=R4.concat([11,12,13,14,15,16,17,18,19,20]),n6=["aw","fw","pull-left","pull-right"],o6=[].concat(A(Object.keys(r6)),i6,n6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY]).concat(R4.map(function(c){return"".concat(c,"x")})).concat(f6.map(function(c){return"w-".concat(c)})),t6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},B="___FONT_AWESOME___",H2=16,E4="fa",U4="svg-inline--fa",j="data-fa-i2svg",R2="data-fa-pseudo-element",m6="data-fa-pseudo-element-pending",K2="data-prefix",Q2="data-icon",W1="fontawesome-i2svg",z6="async",p6=["HTML","HEAD","STYLE","SCRIPT"],I4=["::before","::after",":before",":after"],W4=(function(){try{return!0}catch{return!1}})();function r2(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[g]}})}var O4=o({},M4);O4[g]=o(o(o(o({},{"fa-duotone":"duotone"}),M4[g]),U1.kit),U1["kit-duotone"]);var u6=r2(O4),E2=o({},f0);E2[g]=o(o(o(o({},{duotone:"fad"}),E2[g]),I1.kit),I1["kit-duotone"]);var O1=r2(E2),U2=o({},D2);U2[g]=o(o({},U2[g]),M0.kit);var J2=r2(U2),I2=o({},e6);I2[g]=o(o({},I2[g]),p0.kit);var u5=r2(I2),M6=E3,q4="fa-layers-text",d6=U3,L6=o({},r0),M5=r2(L6),v6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],k2=I3,h6=[].concat(A(n0),A(o6)),c2=U.FontAwesomeConfig||{};function C6(c){var l=L.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function g6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(q1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],q1.forEach(function(c){var l=M2(c,2),a=l[0],e=l[1],r=g6(C6(a));r!=null&&(c2[e]=r)}));var q1,G4={styleDefault:"solid",familyDefault:g,cssPrefix:E4,replacementClass:U4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};c2.familyPrefix&&(c2.cssPrefix=c2.familyPrefix);var Q=o(o({},G4),c2);Q.autoReplaceSvg||(Q.observeMutations=!1);var p={};Object.keys(G4).forEach(function(c){Object.defineProperty(p,c,{enumerable:!0,set:function(a){Q[c]=a,a2.forEach(function(e){return e(p)})},get:function(){return Q[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(l){Q.cssPrefix=l,a2.forEach(function(a){return a(p)})},get:function(){return Q.cssPrefix}});U.FontAwesomeConfig=p;var a2=[];function x6(c){return a2.push(c),function(){a2.splice(a2.indexOf(c),1)}}var E=H2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S6(c){if(!(!c||!H)){var l=L.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=L.head.childNodes,e=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return L.head.insertBefore(l,e),c}}var N6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function G1(){for(var c=12,l="";c-- >0;)l+=N6[Math.random()*62|0];return l}function J(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function Z2(c){return c.classList?J(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function j4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b6(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat(j4(c[a]),'" ')},"").trim()}function d2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function c1(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function y6(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(l.x*32,", ").concat(l.y*32,") "),i="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),n={transform:"".concat(s," ").concat(i," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function w6(c){var l=c.transform,a=c.width,e=a===void 0?H2:a,r=c.height,s=r===void 0?H2:r,i=c.startCentered,f=i===void 0?!1:i,n="";return f&&u4?n+="translate(".concat(l.x/E-e/2,"em, ").concat(l.y/E-s/2,"em) "):f?n+="translate(calc(-50% + ".concat(l.x/E,"em), calc(-50% + ").concat(l.y/E,"em)) "):n+="translate(".concat(l.x/E,"em, ").concat(l.y/E,"em) "),n+="scale(".concat(l.size/E*(l.flipX?-1:1),", ").concat(l.size/E*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var k6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function V4(){var c=E4,l=U4,a=p.cssPrefix,e=p.replacementClass,r=k6;if(a!==c||e!==l){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(f,".".concat(e))}return r}var j1=!1;function A2(){p.autoAddCss&&!j1&&(S6(V4()),j1=!0)}var A6={mixout:function(){return{dom:{css:V4,insertCss:A2}}},hooks:function(){return{beforeDOMElementCreation:function(){A2()},beforeI2svg:function(){A2()}}}},D=U||{};D[B]||(D[B]={});D[B].styles||(D[B].styles={});D[B].hooks||(D[B].hooks={});D[B].shims||(D[B].shims=[]);var k=D[B],_4=[],$4=function(){L.removeEventListener("DOMContentLoaded",$4),p2=1,_4.map(function(l){return l()})},p2=!1;H&&(p2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),p2||L.addEventListener("DOMContentLoaded",$4));function P6(c){H&&(p2?setTimeout(c,0):_4.push(c))}function s2(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?j4(c):"<".concat(l," ").concat(b6(e),">").concat(s.map(s2).join(""),"</").concat(l,">")}function V1(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var T6=function(l,a){return function(e,r,s,i){return l.call(a,e,r,s,i)}},P2=function(l,a,e,r){var s=Object.keys(l),i=s.length,f=r!==void 0?T6(a,r):a,n,t,z;for(e===void 0?(n=1,z=l[s[0]]):(n=0,z=e);n<i;n++)t=s[n],z=f(z,l[t],t,l);return z};function X4(c){return A(c).length!==1?null:c.codePointAt(0).toString(16)}function _1(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function W2(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,s=_1(l);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(c,_1(l)):k.styles[c]=o(o({},k.styles[c]||{}),s),c==="fas"&&W2("fa",l)}var l2=k.styles,F6=k.shims,Y4=Object.keys(J2),B6=Y4.reduce(function(c,l){return c[l]=Object.keys(J2[l]),c},{}),a1=null,K4={},Q4={},J4={},Z4={},c3={};function D6(c){return~h6.indexOf(c)}function H6(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!D6(r)?r:null}var a3=function(){var l=function(s){return P2(l2,function(i,f,n){return i[n]=P2(f,s,{}),i},{})};K4=l(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var f=s[2].filter(function(n){return typeof n=="number"});f.forEach(function(n){r[n.toString(16)]=i})}return r}),Q4=l(function(r,s,i){if(r[i]=i,s[2]){var f=s[2].filter(function(n){return typeof n=="string"});f.forEach(function(n){r[n]=i})}return r}),c3=l(function(r,s,i){var f=s[2];return r[i]=i,f.forEach(function(n){r[n]=i}),r});var a="far"in l2||p.autoFetchSvg,e=P2(F6,function(r,s){var i=s[0],f=s[1],n=s[2];return f==="far"&&!a&&(f="fas"),typeof i=="string"&&(r.names[i]={prefix:f,iconName:n}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:f,iconName:n}),r},{names:{},unicodes:{}});J4=e.names,Z4=e.unicodes,a1=L2(p.styleDefault,{family:p.familyDefault})};x6(function(c){a1=L2(c.styleDefault,{family:p.familyDefault})});a3();function l1(c,l){return(K4[c]||{})[l]}function R6(c,l){return(Q4[c]||{})[l]}function G(c,l){return(c3[c]||{})[l]}function l3(c){return J4[c]||{prefix:null,iconName:null}}function E6(c){var l=Z4[c],a=l1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function I(){return a1}var e3=function(){return{prefix:null,iconName:null,rest:[]}};function U6(c){var l=g,a=Y4.reduce(function(e,r){return e[r]="".concat(p.cssPrefix,"-").concat(r),e},{});return B4.forEach(function(e){(c.includes(a[e])||c.some(function(r){return B6[e].includes(r)}))&&(l=e)}),l}function L2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?g:a,r=u6[e][c];if(e===e2&&!c)return"fad";var s=O1[e][c]||O1[e][r],i=c in k.styles?c:null,f=s||i||null;return f}function I6(c){var l=[],a=null;return c.forEach(function(e){var r=H6(p.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function $1(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var X1=H4.concat(D4);function v2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,s=$1(c.filter(function(M){return X1.includes(M)})),i=$1(c.filter(function(M){return!X1.includes(M)})),f=s.filter(function(M){return r=M,!d4.includes(M)}),n=M2(f,1),t=n[0],z=t===void 0?null:t,m=U6(s),d=o(o({},I6(i)),{},{prefix:L2(z,{family:m})});return o(o(o({},d),G6({values:c,family:m,styles:l2,config:p,canonical:d,givenPrefix:r})),W6(e,r,d))}function W6(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=l==="fa"?l3(r):{},i=G(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!l2.far&&l2.fas&&!p.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var O6=B4.filter(function(c){return c!==g||c!==e2}),q6=Object.keys(D2).filter(function(c){return c!==g}).map(function(c){return Object.keys(D2[c])}).flat();function G6(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,f=i===void 0?{}:i,n=c.config,t=n===void 0?{}:n,z=a===e2,m=l.includes("fa-duotone")||l.includes("fad"),d=t.familyDefault==="duotone",M=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||d||M)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&O6.includes(a)){var h=Object.keys(f).find(function(x){return q6.includes(x)});if(h||t.autoFetchSvg){var v=i0.get(a).defaultShortPrefixId;e.prefix=v,e.iconName=G(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=I()||"fas"),e}var j6=(function(){function c(){A3(this,c),this.definitions={}}return P3(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){a.definitions[f]=o(o({},a.definitions[f]||{}),i[f]),W2(f,i[f]);var n=J2[g][f];n&&W2(n,i[f]),a3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],f=i.prefix,n=i.iconName,t=i.icon,z=t[2];a[f]||(a[f]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[f][m]=t)}),a[f][n]=t}),a}}])})(),Y1=[],Y={},K={},V6=Object.keys(K);function _6(c,l){var a=l.mixoutsTo;return Y1=c,Y={},Object.keys(K).forEach(function(e){V6.indexOf(e)===-1&&delete K[e]}),Y1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),z2(r[i])==="object"&&Object.keys(r[i]).forEach(function(f){a[i]||(a[i]={}),a[i][f]=r[i][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){Y[i]||(Y[i]=[]),Y[i].push(s[i])})}e.provides&&e.provides(K)}),a}function O2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var s=Y[c]||[];return s.forEach(function(i){l=i.apply(null,[l].concat(e))}),l}function V(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=Y[c]||[];r.forEach(function(s){s.apply(null,a)})}function W(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return K[c]?K[c].apply(null,l):void 0}function q2(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||I();if(l)return l=G(a,l)||l,V1(r3.definitions,a,l)||V1(k.styles,a,l)}var r3=new j6,$6=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,V("noAuto")},X6={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(V("beforeI2svg",l),W("pseudoElements2svg",l),W("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,P6(function(){K6({autoReplaceSvgRoot:a}),V("watch",l)})}},Y6={icon:function(l){if(l===null)return null;if(z2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:G(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=L2(l[0]);return{prefix:e,iconName:G(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(p.cssPrefix,"-"))>-1||l.match(M6))){var r=v2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||I(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var s=I();return{prefix:s,iconName:G(s,l)||l}}}},b={noAuto:$6,config:p,dom:X6,parse:Y6,library:r3,findIconDefinition:q2,toHtml:s2},K6=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?L:a;(Object.keys(k.styles).length>0||p.autoFetchSvg)&&H&&p.autoReplaceSvg&&b.dom.i2svg({node:e})};function h2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return s2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(H){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function Q6(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(c1(i)&&a.found&&!e.found){var f=a.width,n=a.height,t={x:f/n/2,y:.5};r.style=d2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function J6(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(l,"-").concat(p.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function Z6(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function e1(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,s=c.iconName,i=c.transform,f=c.symbol,n=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,d=e.found?e:a,M=d.width,h=d.height,v=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(function(F){return t.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(h)})};!Z6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[j]="");var C=o(o({},x),{},{prefix:r,iconName:s,main:a,mask:e,maskId:n,transform:i,symbol:f,styles:o({},t.styles)}),N=e.found&&a.found?W("generateAbstractMask",C)||{children:[],attributes:{}}:W("generateAbstractIcon",C)||{children:[],attributes:{}},y=N.children,_=N.attributes;return C.children=y,C.attributes=_,f?J6(C):Q6(C)}function K1(c){var l=c.content,a=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,f=i===void 0?!1:i,n=o(o({},s.attributes),{},{class:s.classes.join(" ")});f&&(n[j]="");var t=o({},s.styles);c1(r)&&(t.transform=w6({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var z=d2(t);z.length>0&&(n.style=z);var m=[];return m.push({tag:"span",attributes:n,children:[l]}),m}function c8(c){var l=c.content,a=c.extra,e=o(o({},a.attributes),{},{class:a.classes.join(" ")}),r=d2(a.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[l]}),s}var T2=k.styles;function G2(c){var l=c[0],a=c[1],e=c.slice(4),r=M2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(k2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(k2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(k2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:i}}var a8={found:!1,width:512,height:512};function l8(c,l){!W4&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function j2(c,l){var a=l;return l==="fa"&&p.styleDefault!==null&&(l=I()),new Promise(function(e,r){if(a==="fa"){var s=l3(c)||{};c=s.iconName||c,l=s.prefix||l}if(c&&l&&T2[l]&&T2[l][c]){var i=T2[l][c];return e(G2(i))}l8(c,l),e(o(o({},a8),{},{icon:p.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var Q1=function(){},V2=p.measurePerformance&&f2&&f2.mark&&f2.measure?f2:{mark:Q1,measure:Q1},Z='FA "7.1.0"',e8=function(l){return V2.mark("".concat(Z," ").concat(l," begins")),function(){return s3(l)}},s3=function(l){V2.mark("".concat(Z," ").concat(l," ends")),V2.measure("".concat(Z," ").concat(l),"".concat(Z," ").concat(l," begins"),"".concat(Z," ").concat(l," ends"))},r1={begin:e8,end:s3},t2=function(){};function J1(c){var l=c.getAttribute?c.getAttribute(j):null;return typeof l=="string"}function r8(c){var l=c.getAttribute?c.getAttribute(K2):null,a=c.getAttribute?c.getAttribute(Q2):null;return l&&a}function s8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function i8(){if(p.autoReplaceSvg===!0)return m2.replace;var c=m2[p.autoReplaceSvg];return c||m2.replace}function f8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function n8(c){return L.createElement(c)}function i3(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?f8:n8:a;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(i3(i,{ceFn:e}))}),r}function o8(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var m2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(i3(r),a)}),a.getAttribute(j)===null&&p.keepOriginalSource){var e=L.createComment(o8(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~Z2(a).indexOf(p.replacementClass))return m2.replace(l);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,n){return n===p.replacementClass||n.match(r)?f.toSvg.push(n):f.toNode.push(n),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(f){return s2(f)}).join(`
`);a.setAttribute(j,""),a.innerHTML=i}};function Z1(c){c()}function f3(c,l){var a=typeof l=="function"?l:t2;if(c.length===0)a();else{var e=Z1;p.mutateApproach===z6&&(e=U.requestAnimationFrame||Z1),e(function(){var r=i8(),s=r1.begin("mutate");c.map(r),s(),a()})}}var s1=!1;function n3(){s1=!0}function _2(){s1=!1}var u2=null;function c4(c){if(E1&&p.observeMutations){var l=c.treeCallback,a=l===void 0?t2:l,e=c.nodeCallback,r=e===void 0?t2:e,s=c.pseudoElementsCallback,i=s===void 0?t2:s,f=c.observeMutationsRoot,n=f===void 0?L:f;u2=new E1(function(t){if(!s1){var z=I();J(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!J1(m.addedNodes[0])&&(p.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&J1(m.target)&&~v6.indexOf(m.attributeName))if(m.attributeName==="class"&&r8(m.target)){var d=v2(Z2(m.target)),M=d.prefix,h=d.iconName;m.target.setAttribute(K2,M||z),h&&m.target.setAttribute(Q2,h)}else s8(m.target)&&r(m.target)})}}),H&&u2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t8(){u2&&u2.disconnect()}function m8(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],f=s.slice(1);return i&&f.length>0&&(e[i]=f.join(":").trim()),e},{})),a}function z8(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=v2(Z2(c));return r.prefix||(r.prefix=I()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=R6(r.prefix,c.innerText)||l1(r.prefix,X4(c.innerText))),!r.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function p8(c){var l=J(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function u8(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=z8(c),e=a.iconName,r=a.prefix,s=a.rest,i=p8(c),f=O2("parseNodeAttributes",{},c),n=l.styleParser?m8(c):[];return o({iconName:e,prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:n,attributes:i}},f)}var M8=k.styles;function o3(c){var l=p.autoReplaceSvg==="nest"?a4(c,{styleParser:!1}):a4(c);return~l.extra.classes.indexOf(q4)?W("generateLayersText",c,l):W("generateSvgReplacementMutation",c,l)}function d8(){return[].concat(A(D4),A(H4))}function l4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var a=L.documentElement.classList,e=function(m){return a.add("".concat(W1,"-").concat(m))},r=function(m){return a.remove("".concat(W1,"-").concat(m))},s=p.autoFetchSvg?d8():d4.concat(Object.keys(M8));s.includes("fa")||s.push("fa");var i=[".".concat(q4,":not([").concat(j,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(j,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=J(c.querySelectorAll(i))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var n=r1.begin("onTree"),t=f.reduce(function(z,m){try{var d=o3(m);d&&z.push(d)}catch(M){W4||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(d){f3(d,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),n(),z()})}).catch(function(d){n(),m(d)})})}function L8(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o3(c).then(function(a){a&&f3([a],l)})}function v8(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:q2(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:q2(r||{})),c(e,o(o({},a),{},{mask:r}))}}var h8=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?T:e,s=a.symbol,i=s===void 0?!1:s,f=a.mask,n=f===void 0?null:f,t=a.maskId,z=t===void 0?null:t,m=a.classes,d=m===void 0?[]:m,M=a.attributes,h=M===void 0?{}:M,v=a.styles,x=v===void 0?{}:v;if(l){var C=l.prefix,N=l.iconName,y=l.icon;return h2(o({type:"icon"},l),function(){return V("beforeDOMElementCreation",{iconDefinition:l,params:a}),e1({icons:{main:G2(y),mask:n?G2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:o(o({},T),r),symbol:i,maskId:z,extra:{attributes:h,styles:x,classes:d}})})}},C8={mixout:function(){return{icon:v8(h8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=l4,a.nodeCallback=L8,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?L:e,s=a.callback,i=s===void 0?function(){}:s;return l4(r,i)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,s=e.prefix,i=e.transform,f=e.symbol,n=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,d){Promise.all([j2(r,s),n.iconName?j2(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var h=M2(M,2),v=h[0],x=h[1];m([a,e1({icons:{main:v,mask:x},prefix:s,iconName:r,transform:i,symbol:f,maskId:t,extra:z,watchable:!0})])}).catch(d)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.transform,f=a.styles,n=d2(f);n.length>0&&(r.style=n);var t;return c1(i)&&(t=W("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},g8={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return h2({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(f){Array.isArray(f)?f.map(function(n){i=i.concat(n.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(A(s)).join(" ")},children:i}]})}}}},x8={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return h2({type:"counter",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:e}),c8({content:a.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(A(f))}})})}}}},S8={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?T:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return h2({type:"text",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:e}),K1({content:a,transform:o(o({},T),s),extra:{attributes:t,styles:m,classes:["".concat(p.cssPrefix,"-layers-text")].concat(A(f))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,s=e.extra,i=null,f=null;if(u4){var n=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();i=t.width/n,f=t.height/n}return Promise.resolve([a,K1({content:a.innerHTML,width:i,height:f,transform:r,extra:s,watchable:!0})])}}},t3=new RegExp('"',"ug"),e4=[1105920,1112319],r4=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),s0),t6),u0),$2=Object.keys(r4).reduce(function(c,l){return c[l.toLowerCase()]=r4[l],c},{}),N8=Object.keys($2).reduce(function(c,l){var a=$2[l];return c[l]=a[900]||A(Object.entries(a))[0][1],c},{});function b8(c){var l=c.replace(t3,"");return X4(A(l)[0]||"")}function y8(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(t3,""),r=e.codePointAt(0),s=r>=e4[0]&&r<=e4[1],i=e.length===2?e[0]===e[1]:!1;return s||i||l}function w8(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return($2[a]||{})[r]||N8[a]}function s4(c,l){var a="".concat(m6).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var s=J(c.children),i=s.filter(function(x2){return x2.getAttribute(R2)===l})[0],f=U.getComputedStyle(c,l),n=f.getPropertyValue("font-family"),t=n.match(d6),z=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var d=f.getPropertyValue("content"),M=w8(n,z),h=b8(d),v=t[0].startsWith("FontAwesome"),x=y8(f),C=l1(M,h),N=C;if(v){var y=E6(h);y.iconName&&y.prefix&&(C=y.iconName,M=y.prefix)}if(C&&!x&&(!i||i.getAttribute(K2)!==M||i.getAttribute(Q2)!==N)){c.setAttribute(a,N),i&&c.removeChild(i);var _=u8(),F=_.extra;F.attributes[R2]=l,j2(C,M).then(function(x2){var b3=e1(o(o({},_),{},{icons:{main:x2,mask:e3()},prefix:M,iconName:N,extra:F,watchable:!0})),S2=L.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(S2,c.firstChild):c.appendChild(S2),S2.outerHTML=b3.map(function(y3){return s2(y3)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function k8(c){return Promise.all([s4(c,"::before"),s4(c,"::after")])}function A8(c){return c.parentNode!==document.head&&!~p6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(R2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var P8=function(l){return!!l&&I4.some(function(a){return l.includes(a)})},T8=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=o2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(P8(i)){var f=I4.reduce(function(n,t){return n.replace(t,"")},i);f!==""&&f!=="*"&&a.add(f)}}}catch(n){r.e(n)}finally{r.f()}return a};function i4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(H){var a;if(l)a=c;else if(p.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=o2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var f=o2(i.cssRules),n;try{for(f.s();!(n=f.n()).done;){var t=n.value,z=T8(t.selectorText),m=o2(z),d;try{for(m.s();!(d=m.n()).done;){var M=d.value;e.add(M)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){f.e(v)}finally{f.f()}}catch(v){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{a=c.querySelectorAll(h)}catch{}}return new Promise(function(v,x){var C=J(a).filter(A8).map(k8),N=r1.begin("searchPseudoElements");n3(),Promise.all(C).then(function(){N(),_2(),v()}).catch(function(){N(),_2(),x()})})}}var F8={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=i4,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?L:e;p.searchPseudoElements&&i4(r)}}},f4=!1,B8={mixout:function(){return{dom:{unwatch:function(){n3(),f4=!0}}}},hooks:function(){return{bootstrap:function(){c4(O2("mutationObserverCallbacks",{}))},noAuto:function(){t8()},watch:function(a){var e=a.observeMutationsRoot;f4?_2():c4(O2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},n4=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],f=s.slice(1).join("-");if(i&&f==="h")return e.flipX=!0,e;if(i&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(i){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},a)},D8={mixout:function(){return{parse:{transform:function(a){return n4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=n4(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,f={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(n," ").concat(t," ").concat(z)},d={transform:"translate(".concat(i/2*-1," -256)")},M={outer:f,inner:m,path:d};return{tag:"g",attributes:o({},M.outer),children:[{tag:"g",attributes:o({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),M.path)}]}]}}}},F2={x:0,y:0,width:"100%",height:"100%"};function o4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function H8(c){return c.tag==="g"?c.children:[c]}var R8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),s=r?v2(r.split(" ").map(function(i){return i.trim()})):e3();return s.prefix||(s.prefix=I()),a.mask=s,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.mask,f=a.maskId,n=a.transform,t=s.width,z=s.icon,m=i.width,d=i.icon,M=y6({transform:n,containerWidth:m,iconWidth:t}),h={tag:"rect",attributes:o(o({},F2),{},{fill:"white"})},v=z.children?{children:z.children.map(o4)}:{},x={tag:"g",attributes:o({},M.inner),children:[o4(o({tag:z.tag,attributes:o(o({},z.attributes),M.path)},v))]},C={tag:"g",attributes:o({},M.outer),children:[x]},N="mask-".concat(f||G1()),y="clip-".concat(f||G1()),_={tag:"mask",attributes:o(o({},F2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,C]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:H8(d)},_]};return e.push(F,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(N,")")},F2)}),{children:e,attributes:r}}}},E8={provides:function(l){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||f.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},U8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},I8=[A6,C8,g8,x8,S8,F8,B8,D8,R8,E8,U8];_6(I8,{mixoutsTo:b});var d5=b.noAuto,m3=b.config,L5=b.library,z3=b.dom,p3=b.parse,v5=b.findIconDefinition,h5=b.toHtml,u3=b.icon,C5=b.layer,W8=b.text,O8=b.counter;var q8=["*"],G8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){m3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=N2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),j8=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=N2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),V8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},_8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},L3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),$8=c=>{let l=L3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)},i1=new WeakSet,M3="fa-auto-css";function X8(c,l){if(!l.autoAddCss||i1.has(c))return;if(c.getElementById(M3)!=null){l.autoAddCss=!1,i1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",M3),a.innerHTML=z3.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],f=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=i)}c.head.insertBefore(a,r),l.autoAddCss=!1,i1.add(c)}var Y8=c=>c.prefix!==void 0&&c.iconName!==void 0,K8=(c,l)=>Y8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},Q8=(()=>{class c{stackItemSize=i2("1x");size=i2();_effect=S1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=M1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),J8=(()=>{class c{size=i2();classes=b2(()=>{let a=this.size(),e=a?{[`fa-${a}`]:!0}:{};return n1(f1({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=q({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&C1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:q8,decls:1,vars:0,template:function(e,r){e&1&&(v1(),h1(0))},encapsulation:2,changeDetection:0})}return c})(),v3=(()=>{class c{icon=S();title=S();animation=S();mask=S();flip=S();size=S();pull=S();border=S();inverse=S();symbol=S();rotate=S();fixedWidth=S();transform=S();a11yRole=S();renderedIconHTML=b2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return _8(),"";let e=this.findIconDefinition(a);if(!e)return"";let r=this.buildParams();X8(this.document,this.config);let s=u3(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=O(t1);sanitizer=O(y1);config=O(G8);iconLibrary=O(j8);stackItem=O(Q8,{optional:!0});stack=O(J8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let e=K8(a,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(V8(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?p3.transform(r):r,i=this.mask(),f=i!=null?this.findIconDefinition(i):null,n={},t=this.a11yRole();t!=null&&(n.role=t);let z={};return e.rotate!=null&&!L3(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:$8(e),mask:f??void 0,symbol:this.symbol(),attributes:n,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=q({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(L1("innerHTML",r.renderedIconHTML(),p1),d1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var h3=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=u1({type:c});static \u0275inj=o1({})}return c})();var C3={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]};var g3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var x3={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96l0 128c0 53 43 96 96 96s96-43 96-96l0-128c0-53-43-96-96-96zM48 184c0-13.3-10.7-24-24-24S0 170.7 0 184l0 40c0 97.9 73.3 178.7 168 190.5l0 49.5-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-49.5c94.7-11.8 168-92.6 168-190.5l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 79.5-64.5 144-144 144S48 303.5 48 224l0-40z"]};var c5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},S3=c5;var N3={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var C2=class c{faBars=N3;faMagnifyingGlass=g3;faMicrophone=x3;faAdd=S3;faBell=C3;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=q({type:c,selectors:[["app-navbar"]],decls:22,vars:5,consts:[[1,"nav"],[1,"nav-left-side"],[1,"menu"],[3,"icon"],["routerLink","",1,"logo"],["src","https://upload.wikimedia.org/wikipedia/commons/0/0b/YouTube_2024_%28white_text%29.svg","alt","YouTube Logo"],[1,"nav-center"],[1,"search-parent"],["type","text","placeholder","Search"],[1,"search-icon"],[1,"voice"],[1,"nav-right-side"],[1,"create"],[1,"notification"],[1,"profile"],["src","https://lh3.googleusercontent.com/ogw/AF2bZyhcgXoCv3FWafVkRRnRDRmyupy6E8xwSrQJUq0fDtqSrA=s64-c-mo","alt","pfp"]],template:function(a,e){a&1&&(P(0,"div",0)(1,"div",1)(2,"div",2),w(3,"fa-icon",3),R(),P(4,"div",4),w(5,"img",5),R()(),P(6,"div",6)(7,"div",7),w(8,"input",8),P(9,"div",9),w(10,"fa-icon",3),R()(),P(11,"div",10),w(12,"fa-icon",3),R()(),P(13,"div",11)(14,"div",12),w(15,"fa-icon",3),P(16,"p"),g1(17,"Create"),R()(),P(18,"div",13),w(19,"fa-icon",3),R(),P(20,"div",14),w(21,"img",15),R()()()),a&2&&($(3),X("icon",e.faBars),$(7),X("icon",e.faMagnifyingGlass),$(2),X("icon",e.faMicrophone),$(3),X("icon",e.faAdd),$(4),X("icon",e.faBell))},dependencies:[h3,v3,k1],encapsulation:2})};var g2=class c{title=z1("youtube");static \u0275fac=function(a){return new(a||c)};static \u0275cmp=q({type:c,selectors:[["app-root"]],decls:2,vars:0,template:function(a,e){a&1&&w(0,"app-navbar")(1,"router-outlet")},dependencies:[w1,C2],encapsulation:2})};N1(g2,T1).catch(c=>console.error(c));
