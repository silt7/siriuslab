(function(t){function e(e){for(var i,a,n=e[0],l=e[1],c=e[2],p=0,u=[];p<n.length;p++)a=n[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/siriuslab/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("8a23"),r=s.n(i);r.a},4230:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-container",[t.showLoading?s("div",{staticClass:"load d-flex align-center justify-center"},[s("svg",{attrs:{width:"180",height:"80"}},[s("g",{attrs:{id:"logo_animate1",transform:"scale(1, 1)","transform-origin":"48px 0",opacity:"1"}},[s("polygon",{attrs:{points:"32,26 48,0 64,26",fill:"#654da5","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate2",transform:"scale(1, 1)","transform-origin":"16px 0",opacity:"1"}},[s("polygon",{attrs:{points:"0,26 16,52 32,26",fill:"#654da5","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate3",transform:"scale(1, 1)","transform-origin":"32px 0",opacity:"1"}},[s("polygon",{attrs:{points:"16,52 32,26 48,52",fill:"#654da5","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate4",transform:"scale(1, 1)","transform-origin":"32px 0",opacity:"1"}},[s("polygon",{attrs:{points:"16,52 32,78 48,52",fill:"#654da5","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate5",transform:"scale(1, 1)","transform-origin":"96px 0",opacity:"1"}},[s("polygon",{attrs:{points:"80,52 96,26 112,52",fill:"#e85eac","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate6",transform:"scale(1, 1)","transform-origin":"112px 0",opacity:"1"}},[s("polygon",{attrs:{points:"96,26 112,52 128,26",fill:"#e85eac","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate7",transform:"scale(1, 1)","transform-origin":"144px 0",opacity:"1"}},[s("polygon",{attrs:{points:"128,26 144,0 160,26",fill:"#e85eac","stroke-width":"0"}})]),s("g",{attrs:{id:"logo_animate8",transform:"scale(1, 1)","transform-origin":"160px 0",opacity:"1"}},[s("polygon",{attrs:{points:"144,52 160,78 176,52",fill:"#e85eac","stroke-width":"0"}})])])]):t._e(),t.showPreload?s("Preloader",{ref:"preload"}):t._e(),t.visible?s("router-view",{attrs:{name:"header"}}):t._e(),t.visible?s("main",[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1):t._e(),t.visible?s("router-view",{attrs:{name:"footer"}}):t._e()],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show2?s("div",[s("div",{staticClass:"blob"},[s("transition",{attrs:{name:"fade"}},[t.show?s("svg",{staticClass:"svg-pulse",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1920 1080",width:"1920",height:"1080"}},[s("defs",[s("path",{attrs:{d:"M401.19 1074.99C478.25 1081.33 513.72 1087.96 589.43 1075.55C599.98 1073.82 652.32 1047.52 746.42 996.65C838.52 946.87 925.52 888.19 1006.18 821.44C1016.19 813.16 988.81 835.82 1014.79 814.32C1014.79 814.32 1100.16 749.07 1100.16 749.07C1118.59 736.09 1097.55 750.92 1107.88 743.63C1162.69 705 1203.64 649.78 1224.67 586.11C1228.96 573.14 1227.74 576.82 1236.6 549.99C1240.09 539.43 1229.04 529.94 1219.13 534.99C1175.64 557.13 1142.46 565.75 1119.58 560.85C1030.67 541.82 1052.57 515.15 1070.46 502.56C1103.56 479.26 1128.86 458.86 1146.36 441.35C1174.92 412.78 1206.47 317.75 1193.51 304.59C1106.82 216.59 1061.43 297.78 1033.6 298.51C935.22 301.08 832.02 378.35 832.02 378.35C819.68 380.74 786.04 433.56 743.26 441.35C641.02 459.96 456.91 457.26 416.3 502.56C408.6 511.15 250.11 574.39 225.29 616.54C212.36 638.5 187.95 642.56 121.82 748.44C94.16 792.75 53.55 901.78 0 1075.55C88.21 1084.28 143.34 1089.73 165.39 1091.91C187.01 1094.05 208.79 1094 230.4 1091.76C340.8 1080.3 397.73 1074.71 401.19 1074.99Z",id:"aRE6ttzFU"}})]),s("g",[s("g",[s("g",[s("use",{attrs:{"xlink:href":"#aRE6ttzFU",opacity:"1",fill:"#593795","fill-opacity":"1"}}),s("g",[s("use",{attrs:{"xlink:href":"#aRE6ttzFU",opacity:"1","fill-opacity":"0",stroke:"#000000","stroke-width":"0","stroke-opacity":"1"}})])])])])]):t._e()])],1),s("div",{staticClass:"blob2"},[s("transition",{attrs:{name:"fade"}},[t.show?s("svg",{staticClass:"svg-pulse",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1920 1080",width:"1920",height:"1080"}},[s("defs",[s("path",{attrs:{d:"M498.28 470.3C619.09 470.29 627.68 451.54 729.56 412.77C772.03 396.61 827.88 381.68 897.11 367.99C970.18 353.54 1030 426.13 1001.86 495.09C963.07 590.16 948.94 624.78 919.32 697.4C848.96 869.84 703.44 1000.51 524.46 1051.99C419.34 1082.22 333.8 1106.82 215.28 1140.91C94.77 1175.57 -31.45 1108.1 -69.58 988.64C-70.09 987.03 -71.37 983.02 -73.42 976.6C48.01 873.55 123.9 809.14 154.26 783.37C246.76 704.86 377.46 470.32 498.28 470.3Z",id:"a2ANOhnwrO"}})]),s("g",[s("g",[s("g",[s("use",{attrs:{"xlink:href":"#a2ANOhnwrO",opacity:"1",fill:"#e85eab","fill-opacity":"1"}}),s("g",[s("use",{attrs:{"xlink:href":"#a2ANOhnwrO",opacity:"1","fill-opacity":"0",stroke:"#000000","stroke-width":"0","stroke-opacity":"1"}})])])])])]):t._e()])],1)]):t._e()},n=[],l={name:"preloader",data:function(){return{show:!0,show2:!0}}},c=l,d=(s("e58d"),s("2877")),p=Object(d["a"])(c,a,n,!1,null,null,null),u=p.exports,f={components:{Preloader:u},data:function(){return{showLoading:!0,visible:!1,showPreload:!1}},mounted:function(){this.$nextTick((function(){setTimeout(function(){this.showPreload=!0}.bind(this),2e3),setTimeout(function(){this.showLoading=!1,this.visible=!0,this.$refs.preload.show=!1}.bind(this),4e3),setTimeout(function(){this.$refs.preload.show2=!1}.bind(this),4500)}))}},h=f,v=(s("034f"),s("6544")),g=s.n(v),m=s("7496"),k=s("a523"),y=Object(d["a"])(h,r,o,!1,null,null,null),b=y.exports;g()(y,{VApp:m["a"],VContainer:k["a"]});var _=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{staticClass:"px-10",attrs:{fixed:"",color:"white","elevate-on-scroll":"",large:""}},[s("router-link",{attrs:{to:"/"}},[s("v-toolbar-title",[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#2b215f",d:"M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"}})]),s("div",{staticClass:"display-1\n                            font-weight-bold\n                            secondary--text\n                            d-inline-flex ml-5"},[t._v("SiriusLab")])])],1),s("v-spacer"),"/contact-us"===t.$route.path?s("div",{staticClass:"d-flex align-center"},[t.$root.btnShow_menu?s("div",{staticClass:"font-weight-bold secondary--text subtitle-2 mr-5"},[t._v("ЕЩЕ НЕ ГОТОВ ОБРАЩАТЬСЯ К НАМ?")]):t._e(),s("router-link",{attrs:{to:"/"}},[s("v-btn",{staticClass:"mr-5 font-weight-bold",attrs:{rounded:"",color:"primary",outlined:"",large:"",dark:""}},[t._v("Отмена")])],1)],1):s("router-link",{attrs:{to:"/contact-us"}},[s("v-btn",{staticClass:"d-inline-flex mr-5",attrs:{rounded:"",color:"primary",large:"",dark:""}},[t._v("Связаться")])],1),s("v-app-bar-nav-icon",[s("nav",{attrs:{role:"navigation"}},[s("div",{attrs:{id:"menuToggle"}},[s("input",{attrs:{type:"checkbox"}}),s("span",{staticClass:"secondary--text"}),s("span"),s("span"),s("ul",{attrs:{id:"menu"}},[s("router-link",{attrs:{to:"/"}},[s("li",{staticClass:"pb-1"},[t._v("Home")])]),s("router-link",{attrs:{to:"/products"}},[s("li",{staticClass:"mt-4 pb-1"},[t._v("Продукты")])]),s("router-link",{attrs:{to:"/contact-us"}},[s("li",{staticClass:"mt-4"},[s("v-btn",{attrs:{rounded:"",color:"primary",large:"",dark:""}},[t._v("Связаться")])],1)]),s("li",{staticClass:"white--text",staticStyle:{position:"absolute",bottom:"7%"}},[t._v("© 2020 SiriusLab")])],1)])])])],1)},x=[],C=(s("c653"),s("40dc")),j=s("5bc1"),F=s("8336"),L=s("2fa4"),B=s("2a7f"),S={},E=Object(d["a"])(S,w,x,!1,null,null,null),M=E.exports;g()(E,{VAppBar:C["a"],VAppBarNavIcon:j["a"],VBtn:F["a"],VSpacer:L["a"],VToolbarTitle:B["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app",[s("v-content")],1)],1)},O=[],V=s("a75b"),z={},A=Object(d["a"])(z,D,O,!1,null,null,null),P=A.exports;g()(A,{VApp:m["a"],VContent:V["a"]});var $=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("div",{staticClass:"left-arrow-fixed"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"140 0 260 307"}},[s("defs",[s("clipPath",{attrs:{id:"clip_0"}},[s("rect",{attrs:{x:"134.77759",y:"-2098.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_0)"}},[s("path",{attrs:{fill:"rgb(43,33,95)","fill-opacity":"0.05882353",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 133.78 153.437)",d:"M266.417 76.9049L133.213 0L133.204 0.006L0 76.9109L133.204 153.817L133.213 153.81L266.417 76.9049Z"}})]),s("defs",[s("clipPath",{attrs:{id:"clip_1"}},[s("rect",{attrs:{x:"134.77759",y:"-2098.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_1)"}},[s("path",{attrs:{fill:"rgb(43,33,95)","fill-opacity":"0.027450981",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 1.13937 76.6453)",d:"M266.417 76.9049L133.213 0L133.204 0.006L0 76.9109L133.204 153.817L133.213 153.81L266.417 76.9049Z"}})]),s("defs",[s("clipPath",{attrs:{id:"clip_2"}},[s("rect",{attrs:{x:"134.77759",y:"-2098.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_2)"}},[s("path",{staticClass:"color-svg-fix",attrs:{fill:"rgb(237,68,135)",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 1.13937 0.850494)",d:"M266.417 76.9059L133.213 0L133.204 0.00699999L0 76.9119L133.204 153.818L133.213 153.811L266.417 76.9059Z"}})])])]),s("div",{staticClass:"right-arrow-fixed"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 260 308"}},[s("defs",[s("clipPath",{attrs:{id:"clip_4"}},[s("rect",{attrs:{x:"-2287.2224",y:"-2922.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_4)"}},[s("path",{attrs:{fill:"rgb(43,33,95)","fill-opacity":"0.05882353",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 0.583862 154.205)",d:"M0 76.9049L133.204 0L133.212 0.007L266.417 76.9119L133.212 153.817L133.204 153.81L0 76.9049Z"}})]),s("defs",[s("clipPath",{attrs:{id:"clip_1"}},[s("rect",{attrs:{x:"-2287.2224",y:"-2922.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_1)"}},[s("path",{attrs:{fill:"rgb(43,33,95)","fill-opacity":"0.027450981",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 133.225 77.4124)",d:"M0 76.9049L133.204 0L133.213 0.007L266.417 76.9119L133.213 153.817L133.204 153.81L0 76.9049Z"}})]),s("defs",[s("clipPath",{attrs:{id:"clip_2"}},[s("rect",{attrs:{x:"-2287.2224",y:"-2922.4661",width:"2553.0881",height:"6464.499","clip-rule":"evenodd"}})])]),s("g",{attrs:{"clip-path":"url(#clip_2)"}},[s("path",{staticClass:"color-svg-fix",attrs:{fill:"rgb(237,68,135)",stroke:"none",transform:"matrix(0.9973 0 0 0.9973 133.225 0.6203)",d:"M0 76.9049L133.204 0L133.213 0.006L266.417 76.9119L133.213 153.817L133.204 153.81L0 76.9049Z"}})])])]),s("v-row",{staticClass:"d-flex align-center",staticStyle:{height:"95vh"},attrs:{"no-gutters":""}},[s("v-col",{staticClass:"d-flex justify-end",staticStyle:{"padding-right":"5%"},attrs:{cols:"12",lg:"5"}},[s("svg",{staticStyle:{width:"60%"},attrs:{id:"main-image",viewBox:"0 0 371 548",xmlns:"http://www.w3.org/2000/svg"}},[s("defs",[s("mask",{attrs:{id:"msk1"}},[s("rect",{attrs:{fill:"#fff",width:"100%",height:"100%"}}),s("polyline",{attrs:{fill:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"242.63 473.8 242.63 414.8 294.22 444.37 294.22 503.37 242.63 473.8"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"translate",from:"0 0",to:"0 -200",begin:"0s",dur:"1s",fill:"freeze"}})],1)]),s("mask",{attrs:{id:"msk2"}},[s("rect",{attrs:{fill:"#fff",width:"100%",height:"100%"}}),s("polyline",{staticStyle:{display:"block"},attrs:{"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"243.63 413.28 294.22 384.28 345.09000000000003 413 294 442.64"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"translate",from:"0 0",to:"350 -200",begin:".4s",dur:"1s",fill:"freeze"}})],1)]),s("mask",{attrs:{id:"msk3"}},[s("rect",{attrs:{fill:"#fff",width:"100%",height:"100%"}}),s("polyline",{attrs:{"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"295.22 502.64 345.82 473.28 345.82 414.28 295.22 443.64"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"translate",from:"0 0",to:"0 200",begin:"0.7s",dur:"1s",fill:"freeze"}})],1)])]),s("g",{attrs:{id:"Page-1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"wiredavenue-homepage",transform:"translate(-661 -263)"}},[s("g",{attrs:{id:"0",transform:"translate(662 264)"}},[s("path",{attrs:{d:"M263.05,349.36 L315.65,318.99",stroke:"#FFF","stroke-width":"1.66",opacity:"0.15","stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":"6.74"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"92.94 463.67 66.64 478.86 118.47 508.78 144.77 493.59 131.59 485.99 131.58 470.81 118.43 478.39"}}),s("path",{attrs:{d:"M307.74,435.95 L294.59,428.36",stroke:"#FFF","stroke-width":"1.66",opacity:"0.15","stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":"6.74"}}),s("path",{attrs:{d:"M105.27,364.54 L105.27,349.36",stroke:"#5E50A0","stroke-width":"1.66","stroke-linecap":"round","stroke-linejoin":"round"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"27.17 425.58 0.87 440.77 52.7 470.69 79 455.5 65.82 447.9 65.81 432.72 52.66 440.3"}}),s("path",{attrs:{d:"M184.17,364.5 L368.25,258.23",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M13.25,258.23 L39.54,272.91",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M52.69,281 L171.02,349.36",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M13.25,273.41 L39.54,288.09",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M52.69,296.18 L171.02,364.54",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"171.02 402.38 171.02 387.31 118.42 417.68 118.42 478.41 131.58 470.81"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"105.29 364.54 105.29 349.36 52.7 379.72 52.7 440.45 65.68 432.95"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"6.64 132.98 184.16 235.46 361.67 132.98 355.09 129.18 184.16 227.87 13.24 129.16"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.09 121.59 0.09 106.41 184.16 212.69 184.16 227.87"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.09 121.59 184.16 227.87 368.18 121.62 368.24 106.41"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"355.09 129.18 368.24 136.77 184.16 243.05 0.09 136.77 13.24 129.16"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"184.16 0.13 0.09 106.41 184.16 212.69 368.24 106.41 184.16 0.13"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"184.56 303.58 342.37 212.47 316.08 197.32 184.56 273.22 53.12 197.32 26.82 212.47"}}),s("path",{attrs:{d:"M52.69,197.5 L0.1,227.86",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"184.17 334.14 368.25 227.86 315.65 197.5"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"184.16 243.05 184.16 273.41 0.09 167.14 0.09 136.77"}}),s("polyline",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"184.16 273.41 368.01 167.27 368.24 136.77"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"368.01 167.27 368.24 136.77 184.16 243.05 184.16 273.41"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.1 227.86 184.17 334.14 368.25 227.86 315.65 197.5 184.16 273.41 52.54 197.5"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"315.2 441.07 288.96 425.92 262.65 441.1 315.2 471.42 367.79 441.06 341.5 425.88"}}),s("polygon",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"262.63 349.28 315.23 318.92 367.82 349.28 315.23 379.64"}}),s("polygon",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"315.23 440.37 367.82 410.01 367.82 349.28 315.23 379.64"}}),s("polyline",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"262.63 409.8 262.63 349.28 315.23 379.64 315.23 440.37 262.63 410.01"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"341.94 335.14 314.65 320.99 265.05 349.36 271.86 353.05 285.79 361.1 291.53 364.41"}}),s("polygon",{attrs:{id:"svg1-line4",fill:"#DFDFEA","fill-rule":"nonzero",points:"294.2 505.07 267.95 489.92 241.65999999999997 505.1 294.2 535.4200000000001 346.79 505.06 320.5 489.88"}}),s("polygon",{attrs:{id:"svg1-line3",fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"241.63 413.28 294.22999999999996 382.92 346.82 413.28 294.22999999999996 443.64"}}),s("polygon",{attrs:{id:"svg1-line2",fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"294.22999999999996 504.37 346.82 474.01 346.82 413.28 294.22999999999996 443.64"}}),s("polyline",{attrs:{id:"svg1-line1",fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"241.63 473.8 241.63 413.28 294.22999999999996 443.64 294.22999999999996 504.37 241.63 474.01"}}),s("polygon",{staticStyle:{display:"none"},attrs:{id:"svg1-shadow-line1",fill:"#DFDFEA","fill-rule":"nonzero",points:"277.94 372.14 293.64 384.99 244.05 413.36 227.52 401.41"}}),s("polyline",{staticStyle:{display:"block"},attrs:{id:"svg1-line5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"242.63 473.8 242.63 414.8 294.22 444.37 294.22 503.37 242.63 473.8"}}),s("polyline",{staticStyle:{display:"block"},attrs:{id:"svg1-line6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"243.63 413.28 294.22 384.28 345.09000000000003 413 294 442.64"}}),s("polyline",{staticStyle:{display:"block"},attrs:{id:"svg1-line7",fill:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"295.22 502.64 345.82 473.28 345.82 414.28 295.22 443.64"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"184.13 394.89 52.7 318.99 26.39 334.14 184.13 425.25 210.46 410.05 210.46 410.05 184.13 394.89"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"368.25 288.59 368.25 227.86 184.17 334.14 184.17 394.87"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.1 227.86 0.1 288.59 184.17 394.87 184.17 334.14"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.1 410.09 0.1 349.36 52.7 379.72 52.7 440.45"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"0.1 349.36 52.7 318.99 105.29 349.36 52.7 379.72"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"65.83 448.04 65.83 387.31 118.42 417.68 118.42 478.41"}}),s("polygon",{attrs:{stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"65.83 387.31 118.42 356.95 171.02 387.31 118.42 417.68"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"184.16 516.34 157.93 501.19 131.63 516.38 184.16 546.71 236.76 516.34 210.47 501.15"}}),s("polygon",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"184.16 516.38 236.76 486.01 236.76 425.29 184.16 455.65"}}),s("polygon",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"131.57 486.01 131.57 425.29 184.16 455.65 184.16 516.38"}}),s("polygon",{attrs:{fill:"#ffffff",stroke:"#2B215F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:"131.57 425.29 184.16 394.92 236.76 425.29 184.16 455.65"}}),s("polygon",{attrs:{fill:"#DFDFEA","fill-rule":"nonzero",points:"183.7 395.99 158.39 411.14 184.13 425.25 209.46 411.05"}})])])])])]),s("v-col",{staticStyle:{"padding-left":"10%"},attrs:{cols:"12",lg:"7"}},[s("p",{staticClass:"display-3 font-weight-bold secondary--text mr-lg-10",staticStyle:{display:"block"},attrs:{id:"text_1"}},[t._v(" WEB & MOBILE"),s("br"),s("span",{staticClass:"primary--text",attrs:{id:"text_2"}}),s("br"),s("span"),s("br"),s("span"),s("br")])])],1)],1)},T=[],N={name:"home"},W=N,I=(s("cccb"),s("62ad")),R=s("0fd9"),Z=Object(d["a"])(W,$,T,!1,null,null,null),q=Z.exports;g()(Z,{VCol:I["a"],VRow:R["a"]});var K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"contact-us"}},[t.visible?s("v-row",{staticClass:"d-flex align-center",staticStyle:{height:"95vh"}},[s("v-col",{staticClass:"d-flex justify-center",attrs:{lg:"5",col:"12"}},[s("div",{staticStyle:{position:"relative","margin-top":"15%"}},[s("img",{class:{"cloud cl1":!0,cloudEnd:t.animated},staticStyle:{"z-index":"1"},attrs:{src:"/img/get-quote-cloud2.svg"}}),s("img",{class:{balloon:!0,balloonEnd:t.animated},staticStyle:{position:"relative","z-index":"2"},attrs:{src:"/img/get-quote-balloon.svg"}}),s("img",{class:{cloud:!0,cloudEnd:t.animated},staticStyle:{"z-index":"2",bottom:"20%",left:"0",position:"absolute"},attrs:{src:"/img/get-quote-cloud1.svg"}})])]),s("v-col",{staticClass:"d-flex justify-center",attrs:{lg:"7",col:"12"}},[s("div",{class:{"display-3 font-weight-bold secondary--text":!0,textEnd:t.animated},staticStyle:{display:"inline-block"}},[s("span",{staticClass:"cu-text1"},[t._v("МЫ РАСТЁМ, ЧТОБЫ")]),s("br"),s("span",{staticClass:"cu-text2 primary--text"},[t._v("РАЗВИВАТЬ ДРУГИХ")]),s("span",{staticClass:"cu-text_hide",staticStyle:{opacity:"0"}},[t._v("РАЗВИВАТЬ ДРУГИХ")]),s("v-btn",{staticClass:"cu-button",staticStyle:{display:"block","margin-top":"15%"},attrs:{rounded:"",color:"primary",large:"",dark:""},on:{click:function(e){return t.form_go()}}},[t._v(" НАЧНЁМ РАБОТАТЬ ВМЕСТЕ")])],1)])],1):s("v-row",{staticClass:"d-flex align-center",staticStyle:{height:"95vh"}},[s("v-row",[s("v-col",{staticClass:"d-flex justify-center",attrs:{col:"12",lg:"8"}},[t.step_1?s("v-form",{ref:"form",staticClass:"slide-step",staticStyle:{width:"100%"},attrs:{"lazy-validation":t.lazy},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),s("v-btn",{staticClass:"mr-5 font-weight-bold",attrs:{rounded:"",color:"primary",outlined:"",large:"",dark:""},on:{click:function(e){return t.form_back("start")}}},[t._v("Назад")]),s("v-btn",{staticClass:"float-right",attrs:{disabled:!t.valid,color:"primary",rounded:"",large:""},on:{click:[t.validate,function(e){return t.next_step(2)}]}},[t._v(" Далее ")])],1):t._e(),t.step_2?s("div",{staticClass:"slide-step font-weight-bold"},[s("v-row",[s("v-col",{attrs:{lg:"4"}},[s("input",{attrs:{type:"checkbox",id:"c1",value:"Mobile Development"}}),s("label",{staticClass:"pa-5",attrs:{for:"c1"}},[s("img",{staticClass:"d-block mb-7",attrs:{src:"img/icon/icon1.svg"}}),s("span",[t._v("Web Разработка")])])]),s("v-col",{attrs:{lg:"4"}},[s("input",{attrs:{type:"checkbox",id:"c2",value:"Mobile Development"}}),s("label",{staticClass:"pa-5",attrs:{for:"c2"}},[s("img",{staticClass:"d-block mb-7",attrs:{src:"img/icon/icon2.svg"}}),s("span",[t._v("Mobile Разработка")])])]),s("v-col",{attrs:{lg:"4"}},[s("input",{attrs:{type:"checkbox",id:"c3",value:"Mobile Development"}}),s("label",{staticClass:"pa-5",attrs:{for:"c3"}},[s("img",{staticClass:"d-block mb-7",attrs:{src:"img/icon/icon3.svg"}}),s("span",[t._v("UI/UX Design")])])]),s("v-col",{attrs:{lg:"4"}},[s("input",{attrs:{type:"checkbox",id:"c4",value:"Mobile Development"}}),s("label",{staticClass:"pa-5",attrs:{for:"c4"}},[s("img",{staticClass:"d-block mb-7",attrs:{src:"img/icon/icon4.svg"}}),s("span",[t._v("Другое")])])])],1),s("v-btn",{staticClass:"mr-5 font-weight-bold",attrs:{rounded:"",color:"primary",outlined:"",large:"",dark:""},on:{click:function(e){return t.form_back(1)}}},[t._v("Назад")]),s("v-btn",{staticClass:"float-right",attrs:{color:"primary",rounded:"",large:""},on:{click:function(e){return t.next_step(3)}}},[t._v(" Далее ")])],1):t._e(),t.step_3?s("div",{staticClass:"slide-step font-weight-bold"},[s("input",{attrs:{type:"radio",id:"r1",name:"budget"}}),s("label",{staticClass:"pa-5",attrs:{for:"r1"}},[s("span",[t._v("₽0 - 10K")])]),s("input",{attrs:{type:"radio",id:"r2",name:"budget"}}),s("label",{staticClass:"pa-5",attrs:{for:"r2"}},[s("span",[t._v("₽10 - 25K")])]),s("input",{attrs:{type:"radio",id:"r3",name:"budget"}}),s("label",{staticClass:"pa-5",attrs:{for:"r3"}},[s("span",[t._v("₽25 - 50K")])]),s("input",{attrs:{type:"radio",id:"r4",name:"budget"}}),s("label",{staticClass:"pa-5",attrs:{for:"r4"}},[s("span",[t._v("₽50 - 100K")])]),s("input",{attrs:{type:"radio",id:"r5",name:"budget"}}),s("label",{staticClass:"pa-5",attrs:{for:"r5"}},[s("span",[t._v("₽100K+")])]),s("v-btn",{staticClass:"mr-5 font-weight-bold",attrs:{rounded:"",color:"primary",outlined:"",large:"",dark:""},on:{click:function(e){return t.form_back(2)}}},[t._v("Назад")]),s("v-btn",{staticClass:"float-right",attrs:{color:"primary",rounded:"",large:""},on:{click:function(e){return t.next_step(4)}}},[t._v(" Далее ")])],1):t._e(),t.step_4?s("div",{staticClass:"slide-step"},[s("span",[t._v("ТВОЁ СООБЩЕНИЕ")]),s("textarea",{staticStyle:{display:"block",width:"100%",border:"1px solid black","border-radius":"5px","margin-bottom":"15px"},attrs:{rows:"10"}}),s("v-btn",{staticClass:"mr-5 font-weight-bold",attrs:{rounded:"",color:"primary",outlined:"",large:"",dark:""},on:{click:function(e){return t.form_back(3)}}},[t._v("Назад")]),s("v-btn",{staticClass:"float-right",attrs:{color:"primary",rounded:"",large:""},on:{click:function(e){return t.next_step("finish")}}},[t._v(" Отправить ")])],1):t._e()],1),s("v-col",{staticClass:"slide-right\n                   contact-us-panel\n                   white--text \n                   d-flex \n                   align-center",attrs:{col:"12",lg:"4"}},[s("div",{staticClass:"pl-12 pr-12"},[s("div",{staticClass:"d-flex align-center mb-8",style:{opacity:t.op_step1}},[s("span",{staticClass:"d-flex align-center justify-center"},[t._v("1")]),s("div",[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("КАК НАМ СВЯЗАТЬСЯ?")]),s("p",{staticClass:"mb-0"},[t._v("Информация, что бы могли связаться")])])]),s("div",{staticClass:"d-flex align-center mb-8",style:{opacity:t.op_step2}},[s("span",{staticClass:"d-flex align-center justify-center"},[t._v("2")]),s("div",[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("КАК МЫ МОЖЕМ ПОМОЧЬ ТЕБЕ?")]),s("p",{staticClass:"mb-0"},[t._v("Выбери из списка интересующие"),s("br"),t._v("услуги")])])]),s("div",{staticClass:"d-flex align-center mb-8",style:{opacity:t.op_step3}},[s("span",{staticClass:"d-flex align-center justify-center"},[t._v("3")]),s("div",[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("КАКОЙ БЮДЖЕТ?")]),s("p",{staticClass:"mb-0"},[t._v("Назови свой бюджет и мы"),s("br"),t._v("предложим лучшие опции")])])]),s("div",{staticClass:"d-flex align-center mb-8",style:{opacity:t.op_step4}},[s("span",{staticClass:"d-flex align-center justify-center"},[t._v("4")]),s("div",[s("p",{staticClass:"font-weight-bold mb-1"},[t._v("В ЧЁМ ТВОЯ ИДЕЯ?")]),s("p",{staticClass:"mb-0"},[t._v("Опиши в нескольких словах свой"),s("br"),t._v(" проект или идею")])])])])])],1)],1)],1)},U=[],Y={name:"contact-us",data:function(){return{visible:!0,valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,checkbox:!1,lazy:!1,step_1:!0,step_2:!1,step_3:!1,step_4:!1,op_step1:1,op_step2:.3,op_step3:.3,op_step4:.3,animated:!1}},methods:{form_go:function(){this.animated=!0,setTimeout(function(){this.$root.btnShow_menu=!1,this.visible=!1}.bind(this),1e3)},form_back:function(t){"start"==t?(this.animated=!1,this.visible=!0,this.$root.btnShow_menu=!0):1==t?(this.step_2=!1,this.step_1=!0,this.op_step2=.3,this.op_step1=1):2==t?(this.step_3=!1,this.step_2=!0,this.op_step3=.3,this.op_step2=1):3==t&&(this.step_4=!1,this.step_3=!0,this.op_step4=.3,this.op_step3=1)},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},next_step:function(t){2==t?(this.step_1=!1,this.step_2=!0,this.op_step2=1,this.op_step1=.3):3==t?(this.step_2=!1,this.step_3=!0,this.op_step3=1,this.op_step2=.3):4==t?(this.step_3=!1,this.step_4=!0,this.op_step4=1,this.op_step3=.3):"finish"==t&&alert("Отправлено")}},mounted:function(){this.$root.btnShow_menu=!0}},J=Y,H=(s("b903"),s("ac7c")),X=s("4bd4"),G=s("8654"),Q=Object(d["a"])(J,K,U,!1,null,null,null),tt=Q.exports;g()(Q,{VBtn:F["a"],VCheckbox:H["a"],VCol:I["a"],VForm:X["a"],VRow:R["a"],VTextField:G["a"]});var et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-top":"10%"}},[s("p",{staticClass:"display-2 secondary--text",staticStyle:{"text-align":"center","font-weight":"200"}},[t._v("НАШИ ПРОДУКТЫ")]),s("v-row",{staticClass:"mt-12"},[s("v-col",{attrs:{lg:"6"}},[s("v-card",{staticClass:"ml-12 mr-2"},[s("v-img",{attrs:{src:"img/gptek.png"}}),s("v-card-title",{staticClass:"pb-0"},[t._v("Number 10")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Whitehaven Beach")]),s("div",[t._v("Whitsunday Island, Whitsunday Islands")])])],1),s("v-card",{staticClass:"ml-12 mr-2 mt-8"},[s("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),s("v-card-title",{staticClass:"pb-0"},[t._v("Number 10")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Whitehaven Beach")]),s("div",[t._v("Whitsunday Island, Whitsunday Islands")])])],1)],1),s("v-col",{staticStyle:{"padding-top":"10%"},attrs:{lg:"6"}},[s("v-card",{staticClass:"ml-2 mr-12"},[s("v-img",{attrs:{src:"img/cadflo.jpg"}}),s("v-card-title",{staticClass:"pb-0"},[t._v("Number 10")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Whitehaven Beach")]),s("div",[t._v("Whitsunday Island, Whitsunday Islands")])])],1),s("v-card",{staticClass:"ml-2 mr-12 mt-8"},[s("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),s("v-card-title",{staticClass:"pb-0"},[t._v("Number 10")]),s("v-card-text",{staticClass:"text--primary"},[s("div",[t._v("Whitehaven Beach")]),s("div",[t._v("Whitsunday Island, Whitsunday Islands")])])],1)],1)],1)],1)},st=[],it=s("b0af"),rt=s("99d9"),ot=s("adda"),at={},nt=Object(d["a"])(at,et,st,!1,null,null,null),lt=nt.exports;g()(nt,{VCard:it["a"],VCardText:rt["a"],VCardTitle:rt["b"],VCol:I["a"],VImg:ot["a"],VRow:R["a"]}),i["a"].use(_["a"]);var ct=new _["a"]({linkExactActiveClass:"active",mode:"history",routes:[{path:"/",name:"home",components:{header:M,default:q,footer:P}},{path:"/contact-us",name:"contact-us",components:{header:M,default:tt,footer:P}},{path:"/products",name:"products",components:{header:M,default:lt,footer:P}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),dt=s("f309");i["a"].use(dt["a"]);var pt=new dt["a"]({theme:{themes:{light:{primary:"#ff3e88",secondary:"#2b215f"}},options:{customProperties:!0}}});i["a"].config.productionTip=!1,new i["a"]({vuetify:pt,router:ct,data:function(){return{btnShow_menu:!0}},render:function(t){return t(b)}}).$mount("#app")},"83cf":function(t,e,s){},"8a23":function(t,e,s){},b903:function(t,e,s){"use strict";var i=s("cdd3"),r=s.n(i);r.a},c653:function(t,e,s){"use strict";var i=s("ffd3"),r=s.n(i);r.a},cccb:function(t,e,s){"use strict";var i=s("4230"),r=s.n(i);r.a},cdd3:function(t,e,s){},e58d:function(t,e,s){"use strict";var i=s("83cf"),r=s.n(i);r.a},ffd3:function(t,e,s){}});
//# sourceMappingURL=app.f5801cde.js.map