(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"S4W+":function(t,a,i){"use strict";i.r(a);var s=i("kGIl"),e=i.n(s),n=i("MO+k"),o=i.n(n),r=(i("qb46"),i("JVhT"),i("b/SL").format,{type:"pie",data:{labels:["Positif - Dirawat","Positif - Meninggal","Positif - Sembuh"],datasets:[{data:[],backgroundColor:["rgb(54, 162, 235)","rgb(255, 159, 64)","rgb(75, 192, 192)"]}]},options:{title:{display:!0,fontSize:16,text:"Persentase Kasus Positif COVID-19 di Sulawesi Tengah"},tooltips:{enabled:!0},plugins:{datalabels:{formatter:function(t,a){var i=0;return a.chart.data.datasets[0].data.map((function(t){i+=t})),(100*t/i).toFixed(2)+"%"},color:"#fff"}},maintainAspectRatio:!1,responsive:!0,legend:{position:"bottom",usePointStyle:!1,display:!0}}}),l={components:{Loading:e.a},props:{propsDataProvinsi:{type:Object,default:function(){}}},data:function(){return{isLoading:!0,chart:null,jsonDataProvinsi:{}}},methods:{createChart:function(t,a){var i=document.getElementById(t);null!=this.chart&&this.chart.destroy(),this.chart=new o.a(i,{type:a.type,data:a.data,options:a.options})},getStatistic:function(){var t=this.jsonDataProvinsi,a=t.kumulatif.positif,i=t.kumulatif.sembuh,s=t.kumulatif.meninggal,e=a-(i+s);r.data.datasets[0].data=[e,s,i],this.chart.update(),this.chart.render(),this.isLoading=!1}},watch:{propsDataProvinsi:function(){this.jsonDataProvinsi=this.propsDataProvinsi,this.getStatistic()}},mounted:function(){this.createChart("pie-chart",r)}},d=i("KHd+"),c=Object(d.a)(l,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"w-full p-3"},[i("div",{staticClass:"bg-white rounded-lg shadow-lg vld-parent"},[i("div",{staticClass:"flex justify-center w-full"},[i("loading",{attrs:{active:t.isLoading,"is-full-page":!1,opacity:.8,width:120,height:"400px",loader:"bars",color:"#59F"},on:{"update:active":function(a){t.isLoading=a}}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"p-5",staticStyle:{height:"400px"}},[i("keep-alive",[i("canvas",{attrs:{id:"pie-chart","aria-label":"Pie Chart Konfirmasi COVID-19",role:"img"}})])],1)])])}),[],!1,null,null,null);a.default=c.exports}}]);