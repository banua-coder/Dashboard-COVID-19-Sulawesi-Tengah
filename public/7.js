(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(t,a,i){"use strict";i.r(a);var s={name:"DataRDT",components:{},props:{propsDataRekapitulasiSulteng:{type:Object,default:function(){return{rdt:{jumlah_sampling:0,positif:0,negatif:0,invalid:0,tanggal:""}}}}},data:function(){return{data:{rdt:{jumlah_sampling:0,positif:0,negatif:0,invalid:0,tanggal:""},rdt_persentase_by_jumlah_sampling:{positif:0,negatif:0,invalid:0}}}},watch:{propsDataRekapitulasiSulteng:function(){this.data.rdt=this.propsDataRekapitulasiSulteng.rdt,this.countPersentage()}},methods:{countPersentage:function(){this.data.rdt_persentase_by_jumlah_sampling.positif=this.data.rdt.positif/this.data.rdt.jumlah_sampling*100,this.data.rdt_persentase_by_jumlah_sampling.negatif=this.data.rdt.negatif/this.data.rdt.jumlah_sampling*100,this.data.rdt_persentase_by_jumlah_sampling.invalid=this.data.rdt.invalid/this.data.rdt.jumlah_sampling*100}}},n=(i(72),i(0)),e=Object(n.a)(s,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"p-5 overflow-hidden text-white rounded-lg shadow-lg rdt-main"},[i("b",{staticClass:"text-lg"},[t._v("RDT (Rapid Diagnostic Test)")]),t._v(" "),i("div",{staticClass:"flex flex-col mt-2 mb-2 md:flex-row"},[i("div",{staticClass:"w-full h-auto mt-2 mr-10 text-sm md:w-3/6 lg:w-3/6"},[t._v("\n      Rapid Diagnostic Test (RDT) atau test diagnostik cepat merupakan test yang digunakan sebagai skrining medis awal untuk mendeteksi COVID-19. Pada hasil RDT yang Reaktif akan dilakukan pemeriksaan konfirmasi lebih lanjut dengan metode SWAB/Polymerase Chain Reaction (PCR).\n      "),t._m(0),t._v(" "),i("span",[i("b",[t._v("\n          Pembaruan Terakhir :\n          "),i("br"),t._v(" "),i("p",{staticClass:"px-1 py-0 text-sm align-middle"},[t._v(t._s(new Date(t.data.rdt.tanggal).toLocaleString("id-ID",{timeZone:"Asia/Makassar"})))]),t._v(" "),i("br"),i("br")])])]),t._v(" "),i("div",{staticClass:"w-full h-auto mr-10 text-sm md:w-3/6 lg:w-3/6 row"},[i("div",{staticClass:"flex flex-col h-auto text-left md:flex-row"},[i("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/3 lg:w-1/3"},[i("div",{staticClass:"text-4xl font-bold"},[t._v("\n            "+t._s(Number(t.data.rdt.jumlah_sampling).toLocaleString("id-ID"))+"\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),i("div",{staticClass:"flex flex-col h-auto text-left md:flex-row"},[i("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/3 lg:w-1/3"},[i("div",{staticClass:"h-20 pt-3"},[i("div",{staticClass:"mb-1"},[i("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.rdt.positif).toLocaleString("id-ID")))]),t._v(" "),i("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.rdt_persentase_by_jumlah_sampling.positif.toFixed(2)).toLocaleString("id-ID"))+")%")])]),t._v(" "),i("div",{staticClass:"text-sm"},[t._v("\n              Reaktif\n            ")])])]),t._v(" "),i("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/3 lg:w-1/3"},[i("div",{staticClass:"h-20 pt-3"},[i("div",{staticClass:"mb-1"},[i("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.rdt.negatif).toLocaleString("id-ID")))]),t._v(" "),i("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.rdt_persentase_by_jumlah_sampling.negatif.toFixed(2)).toLocaleString("id-ID"))+")%")])]),t._v(" "),i("div",{staticClass:"text-sm"},[t._v("\n              Non Reaktif\n            ")])])]),t._v(" "),i("div",{staticClass:"w-full h-auto pl-2 text-left md:w-1/3 lg:w-1/3"},[i("div",{staticClass:"h-20 pt-3"},[i("div",{staticClass:"mb-1"},[i("span",{staticClass:"text-2xl font-bold"},[t._v(t._s(Number(t.data.rdt.invalid).toLocaleString("id-ID")))]),t._v(" "),i("span",{staticClass:"text-sm"},[t._v("("+t._s(Number(t.data.rdt_persentase_by_jumlah_sampling.invalid.toFixed(2)).toLocaleString("id-ID"))+")%")])]),t._v(" "),i("div",{staticClass:"text-sm"},[t._v("\n              Invalid\n            ")])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("br"),a("br")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-sm"},[this._v("\n            Jumlah RDT\n            "),a("div",{staticClass:"pl-1 tooltip"},[this._v("\n              ⓘ\n              "),a("span",{staticClass:"text-xs tooltiptext"},[this._v("Jumlah Rapid Diagnostic Test (RDT) yang telah dilakukan")])])])}],!1,null,"7601d5dc",null);a.default=e.exports},20:function(t,a,i){var s=i(73);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(17)(s,n);s.locals&&(t.exports=s.locals)},72:function(t,a,i){"use strict";var s=i(20);i.n(s).a},73:function(t,a,i){(t.exports=i(16)(!1)).push([t.i,'.rdt-main[data-v-7601d5dc] {\n  background-color: rgb(179, 196, 33);\n}\n\n/* Tooltip container */\n.tooltip[data-v-7601d5dc] {\n  position: absolute;\n  display: inline-block;\n}\n\n/* Tooltip text */\n.tooltip .tooltiptext[data-v-7601d5dc] {\n  visibility: hidden;\n  width: 120px;\n  background-color: white;\n  color:#000;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n  width: 120px;\n  top: 100%;\n  left: 50%;\n  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14)\n}\n.tooltip .tooltiptext[data-v-7601d5dc]::after {\n  content: " ";\n  position: absolute;\n  bottom: 100%;  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent white transparent;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext[data-v-7601d5dc] {\n  visibility: visible;\n}\n',""])}}]);