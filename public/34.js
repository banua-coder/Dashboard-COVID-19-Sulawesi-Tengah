(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{150:function(a,t,s){"use strict";s.r(t);var e=s(5),o=s.n(e),r=s(8),i=s.n(r),d=(s(17),s(13).format,{type:"bar",data:{labels:[],datasets:[{data:[],label:"Positif",borderColor:"rgba(246, 71, 71, 0.8)",backgroundColor:"rgba(246, 71, 71, 1)"},{data:[],label:"Sembuh",borderColor:"rgba(42, 187, 155, 0.8)",backgroundColor:"rgba(42, 187, 155, 1)"},{data:[],label:"Meninggal",borderColor:"rgba(245, 171, 53, 0.8)",backgroundColor:"rgba(245, 171, 53, 1)"},{data:[],label:"Negatif",borderColor:"rgba(118, 93, 105, 0.8)",backgroundColor:"rgba(118, 93, 105, 1)"},{data:[],label:"ODP Baru",borderColor:"rgba(65, 131, 215, 0.8)",backgroundColor:"rgba(65, 131, 215, 1)"},{data:[],label:"ODP Selesai",borderColor:"rgba(58, 83, 155, 0.8)",backgroundColor:"rgba(58, 83, 155, 1)"},{data:[],label:"PDP Baru",borderColor:"rgba(83, 51, 237, 0.8)",backgroundColor:"rgba(83, 51, 237, 1)"},{data:[],label:"PDP Selesai",borderColor:"rgba(102, 51, 153, 0.8)",backgroundColor:"rgba(102, 51, 153, 1)"}]},options:{title:{display:!0,fontSize:16,text:"Perubahan Data di Kabupaten/Kota"},plugins:{datalabels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#fff",zeroLineColor:"#fff",zeroLineWidth:0}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0},scaleLabel:{display:!1},gridLines:{}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom",usePointStyle:!1,display:!0}}}),l={components:{Loading:o.a},props:{propsDataProvinsi:{type:Object,default:function(){}}},data:function(){return{isLoading:!0,chart:null,jsonDataProvinsi:{}}},methods:{createChart:function(a,t){var s=document.getElementById(a);null!=this.chart&&this.chart.destroy(),this.chart=new i.a(s,{type:t.type,data:t.data,options:t.options})},getStatistic:function(){for(var a=this.jsonDataProvinsi.daftar_kabupaten,t=[],s=[],e=[],o=[],r=[],i=[],l=[],n=[],b=[],u=0;u<a.length;u++)t.push(a[u].nama),s.push(a[u].kasus_baru.positif),e.push(a[u].kasus_baru.sembuh),o.push(a[u].kasus_baru.meninggal),r.push(a[u].kasus_baru.negatif),i.push(a[u].kasus_baru.ODP),l.push(a[u].selesai.ODP),n.push(a[u].kasus_baru.PDP),b.push(a[u].selesai.PDP);d.data.labels=t,d.data.datasets[0].data=s,d.data.datasets[1].data=e,d.data.datasets[2].data=o,d.data.datasets[3].data=r,d.data.datasets[4].data=i,d.data.datasets[5].data=l,d.data.datasets[6].data=n,d.data.datasets[7].data=b,this.chart.update(),this.isLoading=!1}},watch:{propsDataProvinsi:function(){this.jsonDataProvinsi=this.propsDataProvinsi,this.getStatistic()}},mounted:function(){this.createChart("chart-bar",d)}},n=s(0),b=Object(n.a)(l,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"w-full p-3"},[s("div",{staticClass:"bg-white rounded-lg shadow-lg vld-parent"},[s("div",{staticClass:"flex justify-center w-full"},[s("loading",{attrs:{active:a.isLoading,"is-full-page":!1,opacity:.8,width:120,height:"400px",loader:"bars",color:"#59F"},on:{"update:active":function(t){a.isLoading=t}}})],1),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"!isLoading"}],staticClass:"p-5",staticStyle:{height:"400px"}},[s("keep-alive",[s("canvas",{attrs:{id:"chart-bar","aria-label":"Chart Kasus Baru",role:"img"}})])],1)])])}),[],!1,null,null,null);t.default=b.exports}}]);