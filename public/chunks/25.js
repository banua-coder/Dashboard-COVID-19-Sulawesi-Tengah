(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{ILw6:function(t,e,a){"use strict";a.r(e);var i=a("kGIl"),r=a.n(i),n=a("MO+k"),o=a.n(n),s=(a("JVhT"),a("b/SL").format,{type:"bar",data:{labels:[],datasets:[{data:[],label:"Positif",borderColor:"rgba(246, 71, 71, 0.8)",backgroundColor:"rgba(246, 71, 71, 1)"},{data:[],label:"Sembuh",borderColor:"rgba(42, 187, 155, 0.8)",backgroundColor:"rgba(42, 187, 155, 1)"},{data:[],label:"Meninggal",borderColor:"rgba(245, 171, 53, 0.8)",backgroundColor:"rgba(245, 171, 53, 1)"},{data:[],label:"Negatif",borderColor:"rgba(118, 93, 105, 0.8)",backgroundColor:"rgba(118, 93, 105, 1)"},{data:[],label:"ODP Baru",borderColor:"rgba(65, 131, 215, 0.8)",backgroundColor:"rgba(65, 131, 215, 1)"},{data:[],label:"ODP Selesai",borderColor:"rgba(58, 83, 155, 0.8)",backgroundColor:"rgba(58, 83, 155, 1)"},{data:[],label:"PDP Baru",borderColor:"rgba(83, 51, 237, 0.8)",backgroundColor:"rgba(83, 51, 237, 1)"},{data:[],label:"PDP Selesai",borderColor:"rgba(102, 51, 153, 0.8)",backgroundColor:"rgba(102, 51, 153, 1)"}]},options:{title:{display:!0,fontSize:16,text:"Perubahan Data di Kabupaten/Kota"},plugins:{datalabels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#fff",zeroLineColor:"#fff",zeroLineWidth:0}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0},scaleLabel:{display:!1},gridLines:{}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom",usePointStyle:!1,display:!0}}}),l={components:{Loading:r.a},props:{propsDataProvinsi:{type:Object,default:function(){}}},data:function(){return{isLoading:!0,chart:null,jsonDataProvinsi:{}}},methods:{createChart:function(t,e){var a=document.getElementById(t);null!=this.chart&&this.chart.destroy(),this.chart=new o.a(a,{type:e.type,data:e.data,options:e.options})},getStatistic:function(){for(var t=this.jsonDataProvinsi.daftar_kabupaten,e=[],a=[],i=[],r=[],n=[],o=[],l=[],u=[],d=[],c=0;c<t.length;c++)e.push(t[c].nama),a.push(t[c].kasus_baru.positif),i.push(t[c].kasus_baru.sembuh),r.push(t[c].kasus_baru.meninggal),n.push(t[c].kasus_baru.negatif),o.push(t[c].kasus_baru.ODP),l.push(t[c].selesai.ODP),u.push(t[c].kasus_baru.PDP),d.push(t[c].selesai.PDP);s.data.labels=e,s.data.datasets[0].data=a,s.data.datasets[1].data=i,s.data.datasets[2].data=r,s.data.datasets[3].data=n,s.data.datasets[4].data=o,s.data.datasets[5].data=l,s.data.datasets[6].data=u,s.data.datasets[7].data=d,this.chart.update(),this.chart.render(),this.isLoading=!1}},watch:{propsDataProvinsi:function(){this.jsonDataProvinsi=this.propsDataProvinsi,this.getStatistic()}},mounted:function(){this.createChart("chart-bar",s)}},u=a("KHd+"),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full p-3"},[a("div",{staticClass:"bg-white rounded-lg shadow-lg vld-parent"},[a("div",{staticClass:"flex justify-center w-full"},[a("loading",{attrs:{active:t.isLoading,"is-full-page":!1,opacity:.8,width:120,height:"400px",loader:"bars",color:"#59F"},on:{"update:active":function(e){t.isLoading=e}}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"p-5",staticStyle:{height:"400px"}},[a("keep-alive",[a("canvas",{attrs:{id:"chart-bar","aria-label":"Chart Kasus Baru",role:"img"}})])],1)])])}),[],!1,null,null,null);e.default=d.exports},kGIl:function(t,e,a){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(t,e,a,i,r,n,o,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),i&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(t,e){return l.call(e),d(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:u}}var o=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=n({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),a("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[a(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={programmatic:!0},o=Object.assign({},e,i,n),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),l=Object.assign({},a,r);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};a(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=d(t,e,a);t.$loading=i,t.prototype.$loading=i},e.default=u}]).default}}]);