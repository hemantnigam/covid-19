(function(t){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(h.length)h.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},s=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/covid-19/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2180:function(t,a,e){},"4aab":function(t,a,e){},5235:function(t,a,e){"use strict";var n=e("4aab"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("div",[e("v-app-bar",{attrs:{app:"",color:t.accentColor,dark:"",fixed:"",elevateOnScroll:!1,flat:""}},[e("v-toolbar-title",{staticClass:"ml-2"},[t._v("COVID - 19")]),e("v-spacer"),1===t.activeBtn?e("v-text-field",{staticClass:"search-field",attrs:{clearable:"",placeholder:"Search","hide-details":"",height:"35",filled:"",rounded:"",dense:""},model:{value:t.searchText,callback:function(a){t.searchText=a},expression:"searchText"}}):t._e(),e("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-icon",t._g({staticClass:"ml-4",on:{click:function(a){t.dialog=!0}}},n),[t._v("mdi-message-alert")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("Contact us")]),e("div",{staticClass:"contact-details"},[e("ol",[e("li",[t._v("Developer: Hemant Nigam")]),e("li",[t._v("Email: "),e("a",{attrs:{href:"mailto:h.nigam654@gmail.com"}},[t._v("h.nigam654@gmail.com")])]),e("li",[t._v("Github: "),e("a",{attrs:{href:"https://github.com/hemantnigam"}},[t._v("https://github.com/hemantnigam")])])])]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"#113a5d",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1),e("div",{staticStyle:{"margin-bottom":"56px",height:"100%"}},[e("v-content",{staticStyle:{height:"100%"}},[0===t.activeBtn?e("home"):t._e(),1===t.activeBtn?e("search-tab",{ref:"searchTab",on:{allData:t.allData}}):t._e(),2===t.activeBtn?e("preventions"):t._e()],1)],1),e("v-bottom-navigation",{staticClass:"justify-space-around",attrs:{value:t.activeBtn,color:"#f9f9f9","background-color":t.accentColor,horizontal:"",fixed:"",light:""},on:{change:t.currentTab}},t._l(t.tabs,(function(a,n){return e("v-btn",{key:n},[e("v-icon",[t._v(t._s(a.icon))])],1)})),1)],1)},s=[],o=(e("4de4"),e("caad"),e("2532"),"#113a5d"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("total-cases",{attrs:{data:t.totalData}}),e("v-divider",{staticClass:"mt-4 mb-4"}),e("current-country")],1)},c=[],l=(e("d3b7"),function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",{staticClass:"mx-auto total-case-card",attrs:{tile:"",flat:""}},[n("v-card-title",[n("h3",[t._v("Total: "+t._s(t.numberWithCommas(t.data.cases)))])]),n("div",{staticClass:"container ml-4"},[n("div",[n("v-card-text",[t._v("Deaths: "+t._s(t.numberWithCommas(t.data.deaths)))]),n("v-card-text",[t._v("Recovered: "+t._s(t.numberWithCommas(t.data.recovered)))]),n("v-card-text",[t._v("Today's Cases: "+t._s(t.numberWithCommas(t.data.todayCases)))]),n("v-card-text",[t._v("Today's Deaths: "+t._s(t.numberWithCommas(t.data.todayDeaths)))]),n("v-card-text",[t._v("Affected Countries: "+t._s(t.numberWithCommas(t.data.affectedCountries)))])],1),n("div",[n("v-img",{staticClass:"globe-img",attrs:{src:e("7be2")}})],1)]),n("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[n("v-btn",t._g({staticClass:"ml-4",staticStyle:{color:"white"},attrs:{depressed:"",tile:"",small:"",color:"#113a5d"},on:{click:function(a){t.dialog=!0}}},e),[t._v("Stats")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[n("chart-card",{attrs:{casesData:t.casesData,deathsData:t.deathsData,recoveredData:t.recoveredData},on:{close:function(a){t.dialog=!1}}})],1),n("div",{staticClass:"d-flex justify-end"},[n("div",{staticClass:"date"},[t._v("Updated at: "+t._s(t.formatDate(new Date(t.data.updated))))])])],1)}),d=[],u=(e("99af"),e("4fad"),e("ac1f"),e("25f0"),e("5319"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("Coronavirus Stats")]),e("div",{staticClass:"chart"},[e("Chart",{attrs:{casesData:t.casesData,deathsData:t.deathsData,recoveredData:t.recoveredData}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"#113a5d",text:""},on:{click:function(a){return t.$emit("close")}}},[t._v("Close")])],1)],1)}),h=[],v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ECharts",{ref:"chart",attrs:{options:t.options,autoresize:!0}})},f=[],m=e("9ca8"),p=(e("ef97"),e("007d"),e("d28f"),{name:"Chart",components:{ECharts:m["a"]},props:{casesData:Array,deathsData:Array,recoveredData:Array},data:function(){var t=this;return{options:{legend:{show:!0,bottom:"bottom",icon:"ret"},tooltip:{show:!0,backgroundColor:"#000000",extraCssText:"border-radius:0px;",formatter:function(a){var e="<div><div>Date: ".concat(a.data[0],"</div><div>Count: ").concat(t.numberWithCommas(a.data[1]),"</div></div>");return e}},xAxis:{type:"category",axisLine:{lineStyle:{color:"#3e4a61"}},axisLabel:{color:"#3e4a61"}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#3e4a61"}},axisLabel:{color:"#3e4a61"}},grid:{left:"20%"},series:[{name:"Cases",data:this.casesData,type:"line"},{name:"Deaths",data:this.deathsData,type:"line"},{name:"Recovered",data:this.recoveredData,type:"line"}]}}},methods:{numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},destroyed:function(){this.$refs&&this.$refs.chart&&this.$refs.chart.destroy()}}),g=p,b=(e("6a95"),e("2877")),C=Object(b["a"])(g,v,f,!1,null,"5257430d",null),D=C.exports,y={name:"ChartCard",components:{Chart:D},props:{casesData:Array,deathsData:Array,recoveredData:Array}},_=y,x=(e("d7f1"),e("6544")),j=e.n(x),w=e("8336"),V=e("b0af"),T=e("99d9"),S=e("ce7e"),k=e("2fa4"),O=Object(b["a"])(_,u,h,!1,null,"a9b21f20",null),A=O.exports;j()(O,{VBtn:w["a"],VCard:V["a"],VCardActions:T["a"],VCardTitle:T["c"],VDivider:S["a"],VSpacer:k["a"]});var W={name:"TotalCases",components:{ChartCard:A},props:{data:Object},data:function(){return{dialog:!1,casesData:[],deathsData:[],recoveredData:[]}},mounted:function(){this.getChart()},methods:{formatDate:function(t){var a="".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());return a},numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getChart:function(){var t=this;fetch("https://corona.lmao.ninja/v2/historical/all").then((function(t){return t.json()})).then((function(a){t.casesData=Object.entries(a.cases),t.deathsData=Object.entries(a.deaths),t.recoveredData=Object.entries(a.recovered)}))}}},B=W,$=(e("a172"),e("169a")),E=e("adda"),P=Object(b["a"])(B,l,d,!1,null,"7c9eac13",null),M=P.exports;j()(P,{VBtn:w["a"],VCard:V["a"],VCardText:T["b"],VCardTitle:T["c"],VDialog:$["a"],VImg:E["a"]});var I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto total-case-card",attrs:{tile:"",flat:""}},[e("div",{staticClass:"mb-4"},[e("v-card-title",[t._v(" Country: "),e("span",{staticClass:"ml-2 country-name"},[t._v(t._s(t.country.toUpperCase()))])])],1),e("v-card-title",[e("h3",[t._v("Total: "+t._s(t.numberWithCommas(t.data.cases)))])]),e("div",{staticClass:"container ml-4"},[e("div",[e("v-card-text",[t._v("Deaths: "+t._s(t.data.deaths?t.numberWithCommas(t.data.deaths):t.data.deaths))]),e("v-card-text",[t._v("Recovered: "+t._s(t.data.recovered?t.numberWithCommas(t.data.recovered):t.data.recovered))]),e("v-card-text",[t._v("Today's Cases: "+t._s(t.data.todayCases?t.numberWithCommas(t.data.todayCases):t.data.todayCases))]),e("v-card-text",[t._v("Today's Deaths: "+t._s(t.data.todayDeaths?t.numberWithCommas(t.data.todayDeaths):t.data.todayDeaths))]),e("v-card-text",[t._v("Tests: "+t._s(t.data.tests?t.numberWithCommas(t.data.tests):t.data.tests))])],1),e("div",[e("v-img",{staticClass:"globe-img",attrs:{src:t.data.countryInfo&&t.data.countryInfo.flag}})],1)]),e("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({staticClass:"ml-4",staticStyle:{color:"white"},attrs:{depressed:"",tile:"",small:"",color:"#113a5d"},on:{click:function(a){t.dialog=!0}}},n),[t._v("Stats")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("chart-card",{attrs:{casesData:t.casesData,deathsData:t.deathsData,recoveredData:t.recoveredData},on:{close:function(a){t.dialog=!1}}})],1)],1)},R=[],z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div")},H=[],L=(e("96cf"),e("1da1")),N={name:"CommonMixin",methods:{getCurrentName:function(){return Object(L["a"])(regeneratorRuntime.mark((function t(){var a,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://ip-api.com/json");case 2:return a=t.sent,t.next=5,a.json();case 5:return e=t.sent,t.abrupt("return",e.country);case 7:case"end":return t.stop()}}),t)})))()}}},F=N,U=Object(b["a"])(F,z,H,!1,null,null,null),q=U.exports,J={name:"CurrentCountry",components:{ChartCard:A},data:function(){return{country:"India",data:{},dialog:!1,casesData:[],deathsData:[],recoveredData:[]}},mixins:[q],created:function(){this.getCountryData(),this.getChart()},methods:{numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getCountryData:function(){var t=this;fetch("https://corona.lmao.ninja/v2/countries/".concat(this.country)).then((function(t){return t.json()})).then((function(a){t.data=a}))},getChart:function(){var t=this;fetch("https://corona.lmao.ninja/v2/historical/".concat(this.country,"?lastdays=").concat(this.getDays())).then((function(t){return t.json()})).then((function(a){t.casesData=Object.entries(a.timeline.cases),t.deathsData=Object.entries(a.timeline.deaths),t.recoveredData=Object.entries(a.timeline.recovered)}))},getDays:function(){var t=864e5,a=Math.round(Math.abs(new Date(2020,1,1)-new Date)/t);return a}}},G=J,Y=(e("fcec"),Object(b["a"])(G,I,R,!1,null,"46975019",null)),K=Y.exports;j()(Y,{VBtn:w["a"],VCard:V["a"],VCardText:T["b"],VCardTitle:T["c"],VDialog:$["a"],VImg:E["a"]});var Q={name:"Home",components:{TotalCases:M,CurrentCountry:K},data:function(){return{totalData:{}}},created:function(){this.getAllCases()},methods:{getAllCases:function(){var t=this;fetch("https://corona.lmao.ninja/all").then((function(t){return t.json()})).then((function(a){t.totalData=a}))}}},X=Q,Z=(e("fa53"),Object(b["a"])(X,i,c,!1,null,"62a52322",null)),tt=Z.exports;j()(Z,{VDivider:S["a"]});var at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"height100",attrs:{id:"lateral"}},[t.isDataAvailable?e("div",[e("v-expansion-panels",{attrs:{accordion:"",tile:""}},[e("virtual-list",{staticClass:"virtual-list",attrs:{size:20,remain:50}},t._l(t.allCountriesData,(function(a,n){return e("v-expansion-panel",{key:n,attrs:{id:n}},[e("v-expansion-panel-header",[e("div",[t._v(t._s(a.country))]),e("img",{staticClass:"image ml-2",attrs:{src:a.countryInfo.flag}}),e("div",{staticClass:"ml-6"},[t._v(t._s(t.numberWithCommas(a.cases)))])]),e("v-expansion-panel-content",[e("div",{staticClass:"mt-4 mb-4"},[e("div",{staticClass:"d-flex justify-space-around"},[e("div",[t._v("Confirmed: "+t._s(t.numberWithCommas(a.cases)))]),e("div",[t._v("Deaths: "+t._s(t.numberWithCommas(a.deaths)))])]),e("div",{staticClass:"d-flex justify-center mt-2"},[e("div",[t._v("Recovered: "+t._s(t.numberWithCommas(a.recovered)))])]),e("div",{staticClass:"d-flex justify-start mt-2"},[e("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[e("v-btn",t._g({staticClass:"ml-3",staticStyle:{color:"white"},attrs:{depressed:"",tile:"",small:"",color:"#113a5d"},on:{click:function(e){return t.getChart(a.country)}}},r),[t._v("Stats")])]}}],null,!0),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[t.casesData.length>0&&t.deathsData.length>0&&t.recoveredData.length>0?e("chart-card",{attrs:{casesData:t.casesData,deathsData:t.deathsData,recoveredData:t.recoveredData},on:{close:function(a){t.dialog=!1}}}):t._e()],1)],1)])])],1)})),1)],1)],1):t._e(),t.isDataAvailable?t._e():e("div",{staticClass:"loader"},[e("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)])},et=[],nt=e("89c1"),rt=e.n(nt),st={name:"SearchTab",components:{VirtualList:rt.a,ChartCard:A},data:function(){return{allCountriesData:[],isDataAvailable:!1,icon:"fas fa-lock",dialog:!1,casesData:[],deathsData:[],country:"",recoveredData:[]}},created:function(){this.getAllCountriesData()},methods:{getAllCountriesData:function(){var t=this;this.isDataAvailable=!1,fetch("https://corona.lmao.ninja/v2/countries").then((function(t){return t.json()})).then((function(a){t.allCountriesData=a,t.isDataAvailable=!0,t.allCountriesData.sort((function(t,a){return t.cases>a.cases?-1:1})),t.$emit("allData",t.allCountriesData)}))},numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getChart:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(a){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.dialog=!0,this.casesData=[],this.deathsData=[],this.recoveredData=[],this.country=a,t.next=7,fetch("https://corona.lmao.ninja/v2/historical/".concat(this.country,"?lastdays=").concat(this.getDays()));case 7:return e=t.sent,t.next=10,e.json();case 10:n=t.sent,this.casesData=Object.entries(n.timeline.cases),this.deathsData=Object.entries(n.timeline.deaths),this.recoveredData=Object.entries(n.timeline.recovered);case 14:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}(),getDays:function(){var t=864e5,a=Math.round(Math.abs(new Date(2020,1,1)-new Date)/t);return a}}},ot=st,it=(e("5235"),e("cd55")),ct=e("49e2"),lt=e("c865"),dt=e("0393"),ut=e("490a"),ht=Object(b["a"])(ot,at,et,!1,null,"286773d3",null),vt=ht.exports;j()(ht,{VBtn:w["a"],VDialog:$["a"],VExpansionPanel:it["a"],VExpansionPanelContent:ct["a"],VExpansionPanelHeader:lt["a"],VExpansionPanels:dt["a"],VProgressCircular:ut["a"]});var ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ml-4 mt-4 mr-4 mb-4"},[e("h2",[t._v("Coronavirus Precautions")]),e("ul",t._l(t.preventions,(function(a,n){return e("li",{key:n},[t._v(" "+t._s(a)+" ")])})),0)])},mt=[],pt={name:"Preventions",data:function(){return{preventions:["Regular hand washing","Covering mouth and nose when coughing and sneezing","If you are taking care of someone who is sick, try to stay 6 feet away – this is the distance virus – containing droplets can travel through a sneeze or cough","Avoid close contact with anyone showing symptoms of respiratory illness as coughing and sneezing","Avoid touching your eyes, nose, and mouth","Stay home when you are sick","Clean and disinfect frequently touched objects and surfaces using a regular objects and surfaces using a regular household cleaning spray or wipe."]}}},gt=pt,bt=Object(b["a"])(gt,ft,mt,!1,null,null,null),Ct=bt.exports,Dt={name:"App",components:{Home:tt,SearchTab:vt,Preventions:Ct},data:function(){return{openDrawer:!1,item:0,searchText:"",dialog:!1,activeBtn:0,items:[{text:"Home",icon:"mdi-home"},{text:"Contact US",icon:"mdi-account-box"}],tabs:[{text:"Home",icon:"mdi-home"},{text:"Search",icon:"mdi-magnify"},{text:"Preventions",icon:"mdi-hospital-box"}],allCountriesData:[]}},watch:{searchText:function(t){this.$refs.searchTab.allCountriesData=t?this.allCountriesData.filter((function(a){return a.country.toLowerCase().includes(t.toLowerCase())})):this.allCountriesData}},computed:{accentColor:function(){return o}},methods:{allData:function(t){this.allCountriesData=t},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},currentTab:function(t){this.activeBtn=t},startSearch:function(){""===this.searchText?this.$refs.searchTab.allCountriesData=this.allCountriesData:this.$refs.searchTab.allCountriesData=[]}}},yt=Dt,_t=(e("8261"),e("7496")),xt=e("40dc"),jt=e("b81c"),wt=e("a75b"),Vt=e("132d"),Tt=e("8654"),St=e("2a7f"),kt=Object(b["a"])(yt,r,s,!1,null,"d519a802",null),Ot=kt.exports;j()(kt,{VApp:_t["a"],VAppBar:xt["a"],VBottomNavigation:jt["a"],VBtn:w["a"],VCard:V["a"],VCardActions:T["a"],VCardTitle:T["c"],VContent:wt["a"],VDialog:$["a"],VDivider:S["a"],VIcon:Vt["a"],VSpacer:k["a"],VTextField:Tt["a"],VToolbarTitle:St["a"]});var At=e("f309");n["default"].use(At["a"]);var Wt=new At["a"]({}),Bt=e("9483");Object(Bt["a"])("".concat("/covid-19/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["default"].config.productionTip=!1,new n["default"]({vuetify:Wt,render:function(t){return t(Ot)}}).$mount("#app")},"6a95":function(t,a,e){"use strict";var n=e("2180"),r=e.n(n);r.a},7049:function(t,a,e){},"7be2":function(t,a,e){t.exports=e.p+"img/globe.1b5de2e9.png"},8261:function(t,a,e){"use strict";var n=e("a41c"),r=e.n(n);r.a},a172:function(t,a,e){"use strict";var n=e("7049"),r=e.n(n);r.a},a41c:function(t,a,e){},ab0c:function(t,a,e){},bcbb:function(t,a,e){},cb7c:function(t,a,e){},d7f1:function(t,a,e){"use strict";var n=e("cb7c"),r=e.n(n);r.a},fa53:function(t,a,e){"use strict";var n=e("ab0c"),r=e.n(n);r.a},fcec:function(t,a,e){"use strict";var n=e("bcbb"),r=e.n(n);r.a}});
//# sourceMappingURL=app.c5cbddf0.js.map