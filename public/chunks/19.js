(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"I2+u":function(t,a,s){"use strict";var i=s("riU3");s.n(i).a},U3lU:function(t,a,s){"use strict";s.r(a);var i={name:"DataPCR",components:{},props:{propsDataRekapitulasiSulteng:{type:Object,default:function(){return{pcr:{positif:0,negatif:0,invalid:0,jumlah_sampling:0,tanggal:0}}}}},data:function(){return{data:{pcr:{total:0,positif:0,negatif:0,invalid:0,jumlah_sampling:0,proses:0,tanggal:0},pcr_persentase_by_total:{positif:0,negatif:0,invalid:0,proses:0}},showMore:!0}},watch:{propsDataRekapitulasiSulteng:function(){this.data.pcr=this.propsDataRekapitulasiSulteng.pcr,this.countPercentage()}},methods:{countPercentage:function(){this.data.pcr.total=this.data.pcr.jumlah_sampling,this.data.pcr_persentase_by_total.positif=this.data.pcr.positif/this.data.pcr.total*100,this.data.pcr_persentase_by_total.negatif=this.data.pcr.negatif/this.data.pcr.total*100,this.data.pcr_persentase_by_total.invalid=this.data.pcr.invalid/this.data.pcr.total*100,this.data.pcr_persentase_by_total.proses=this.data.pcr.proses/this.data.pcr.total*100},clickShowMore:function(){this.showMore=!this.showMore}}},e=(s("I2+u"),s("KHd+")),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"p-5 overflow-hidden text-white rounded-lg shadow-lg pcr-main"},[s("b",{staticClass:"text-lg"},[t._v("PCR (Polymerase Chain Reaction)")]),t._v(" "),s("div",{staticClass:"flex flex-col mt-2 mb-2 md:flex-row"},[s("div",{staticClass:"w-full h-auto mt-2 mr-10 text-sm md:w-3/6 lg:w-3/6"},[t._v("\n      Polymerase Chain Reaction atau PCR merupakan pemeriksaan diagnostik yang dianggap paling akurat untuk memastikan apakah seseorang menderita COVID-19 atau tidak."),s("br"),t._v(" "),s("br"),s("b",{staticStyle:{"font-size":"larger"}},[t._v("Keterangan :")]),s("br"),t._v(" "),s("span",{staticStyle:{opacity:"0.6"}},[t._v("Jumlah tes PCR yang ditampilkan diambil dari Dinas Kesehatan Sulawesi Tengah.")]),t._v(" "),t.showMore?s("span",{staticStyle:{opacity:"0.6"}},[t._v("Angka Positif hasil tes PCR tidak merepresentasikan seluruh kasus terkonfirmasi dan jumlah pengujian massal di Sulawesi Tengah, tim PICO SulTeng sedang dalam proses pengumpulan dan integrasi data.  ")]):t._e(),t._v(" "),s("br")]),t._v(" "),s("div",{staticClass:"w-full h-auto mr-10 text-sm md:w-3/6 lg:w-3/6 row"},[s("div",{staticClass:"flex flex-col h-auto text-left md:flex-row"},[s("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/3 lg:w-1/3"},[s("div",{staticClass:"text-4xl font-bold"},[t._v("\n            "+t._s(Number(t.data.pcr.total).toLocaleString("id-ID"))+"\n          ")]),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"flex flex-col h-auto text-left md:flex-row"},[s("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/4 lg:w-1/4"},[s("div",{staticClass:"h-20 pt-3"},[s("div",{staticClass:"mb-1"},[s("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.pcr.positif).toLocaleString("id-ID")))]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.pcr_persentase_by_total.positif.toFixed(2)).toLocaleString("id-ID"))+"%)")])]),t._v(" "),s("div",{staticClass:"text-sm"},[t._v("\n              Positif\n            ")])])]),t._v(" "),s("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/4 lg:w-1/4"},[s("div",{staticClass:"h-20 pt-3"},[s("div",{staticClass:"mb-1"},[s("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.pcr.negatif).toLocaleString("id-ID")))]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.pcr_persentase_by_total.negatif.toFixed(2)).toLocaleString("id-ID"))+"%)")])]),t._v(" "),s("div",{staticClass:"text-sm"},[t._v("\n              Negatif\n            ")])])]),t._v(" "),s("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/4 lg:w-1/4"},[s("div",{staticClass:"h-20 pt-3"},[s("div",{staticClass:"mb-1"},[s("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.pcr.invalid).toLocaleString("id-ID")))]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.pcr_persentase_by_total.invalid.toFixed(2)).toLocaleString("id-ID"))+"%)")])]),t._v(" "),s("div",{staticClass:"text-sm"},[t._v("\n              Invalid\n            ")])])]),t._v(" "),s("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/4 lg:w-1/4"},[s("div",{staticClass:"h-20 pt-3"},[s("div",{staticClass:"mb-1"},[s("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.pcr.proses).toLocaleString("id-ID")))]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.pcr_persentase_by_total.proses.toFixed(2)).toLocaleString("id-ID"))+"%)")])]),t._v(" "),s("div",{staticClass:"text-sm"},[t._v("\n              Proses Lab\n            ")])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-sm"},[this._v("\n            Jumlah PCR\n            "),a("div",{staticClass:"pl-1 tooltip"},[this._v("\n              ⓘ\n              "),a("span",{staticClass:"text-xs tooltiptext"},[this._v("Jumlah Polymerase Chain Reaction (PCR) yang telah dilakukan")])])])}],!1,null,"79314d4c",null);a.default=n.exports},Wd3F:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,'.pcr-main[data-v-79314d4c] {\n  background-color: #41A5DE;\n}\n\n/* Tooltip container */\n.tooltip[data-v-79314d4c] {\n  position: absolute;\n  display: inline-block;\n}\n\n/* Tooltip text */\n.tooltip .tooltiptext[data-v-79314d4c] {\n  visibility: hidden;\n  width: 120px;\n  background-color: white;\n  color:#000;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n  width: 120px;\n  top: 100%;\n  left: 50%;\n  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14)\n}\n.tooltip .tooltiptext[data-v-79314d4c]::after {\n  content: " ";\n  position: absolute;\n  bottom: 100%;  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent white transparent;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext[data-v-79314d4c] {\n  visibility: visible;\n}\n',""])},riU3:function(t,a,s){var i=s("Wd3F");"string"==typeof i&&(i=[[t.i,i,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,e);i.locals&&(t.exports=i.locals)}}]);