(function(t){function e(e){for(var n,c,i=e[0],s=e[1],l=e[2],d=0,v=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&v.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/covid-19/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:t.accentColor,dark:"",fixed:"",elevateOnScroll:!1,flat:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.openDrawer=!t.openDrawer}}}),a("v-toolbar-title",[t._v("COVID - 19")]),a("v-spacer")],1),a("v-content",[a("v-navigation-drawer",{staticClass:"navigation-drawer",attrs:{color:t.accentColor,absolute:"",temporary:""},model:{value:t.openDrawer,callback:function(e){t.openDrawer=e},expression:"openDrawer"}},[a("v-list",[a("v-list-item-group",{attrs:{color:"#dae1e7"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),0===t.activeBtn?a("home"):t._e(),1===t.activeBtn?a("search-tab"):t._e(),2===t.activeBtn?a("preventions"):t._e(),a("v-bottom-navigation",{attrs:{value:t.activeBtn,color:"#f9f9f9","background-color":t.accentColor,horizontal:"",fixed:"",light:""},on:{change:t.currentTab}},t._l(t.tabs,(function(e,n){return a("v-btn",{key:n},[a("span",[t._v(t._s(e.text))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)],1)},o=[],c="#113a5d",i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("total-cases",{attrs:{data:t.totalData}}),a("v-divider",{staticClass:"mt-4 mb-4"}),a("current-country")],1)},s=[],l=(a("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto total-case-card",attrs:{tile:"",flat:""}},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"d-flex justify-space-around"},[n("v-card-title",[n("h4",[t._v("Total: "+t._s(t.numberWithCommas(t.data.cases)))])]),n("v-card-title",[n("h4",[t._v("Deaths: "+t._s(t.numberWithCommas(t.data.deaths)))])])],1),n("div",[n("v-card-title",{staticClass:"justify-center"},[n("h4",[t._v("Recovered: "+t._s(t.numberWithCommas(t.data.recovered)))])])],1)]),n("div",{staticClass:"container"},[n("div",[n("v-card-text",[t._v("Today's Cases: "+t._s(t.numberWithCommas(t.data.todayCases)))]),n("v-card-text",[t._v("Today's Deaths: "+t._s(t.numberWithCommas(t.data.todayDeaths)))]),n("v-card-text",[t._v("Affected Countries: "+t._s(t.numberWithCommas(t.data.affectedCountries)))])],1),n("div",[n("v-img",{staticClass:"globe-img",attrs:{src:a("7be2")}})],1)]),n("div",{staticClass:"d-flex justify-end"},[n("div",{staticClass:"date"},[t._v("Updated at: "+t._s(t.formatDate(new Date(t.data.updated))))])])])}),u=[],d=(a("99af"),a("ac1f"),a("25f0"),a("5319"),{name:"TotalCases",props:{data:Object},methods:{formatDate:function(t){var e="".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());return e},numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}),v=d,f=(a("a7aa"),a("2877")),m=a("6544"),p=a.n(m),h=a("b0af"),b=a("99d9"),C=a("adda"),g=Object(f["a"])(v,l,u,!1,null,"15a4518e",null),_=g.exports;p()(g,{VCard:h["a"],VCardText:b["a"],VCardTitle:b["b"],VImg:C["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto total-case-card",attrs:{tile:"",flat:""}},[a("div",{staticClass:"mb-4"},[a("v-card-title",[t._v(" Country: "),a("span",{staticClass:"ml-2 country-name"},[t._v(t._s(t.country.toUpperCase()))])])],1),a("div",{staticClass:"title-container"},[a("div",{staticClass:"d-flex justify-space-around"},[a("v-card-title",[a("h4",[t._v("Total: "+t._s(t.numberWithCommas(t.data.cases)))])]),a("v-card-title",[a("h4",[t._v("Deaths: "+t._s(t.numberWithCommas(t.data.deaths)))])])],1),a("div",[a("v-card-title",{staticClass:"justify-center"},[a("h4",[t._v("Recovered: "+t._s(t.numberWithCommas(t.data.recovered)))])])],1)]),a("div",{staticClass:"container"},[a("div",[a("v-card-text",[t._v("Today's Cases: "+t._s(t.numberWithCommas(t.data.todayCases)))]),a("v-card-text",[t._v("Today's Deaths: "+t._s(t.data.todayDeaths?t.numberWithCommas(t.data.todayDeaths):t.data.todayDeaths))]),a("v-card-text",[t._v("Tests: "+t._s(t.numberWithCommas(t.data.tests)))])],1),a("div",[a("v-img",{staticClass:"globe-img",attrs:{src:t.data.countryInfo&&t.data.countryInfo.flag}})],1)])])},x=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},j=[],D=(a("96cf"),a("1da1")),V={name:"CommonMixin",methods:{getCurrentName:function(){return Object(D["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cors-anywhere.herokuapp.com/http://ip-api.com/json");case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",a.country);case 7:case"end":return t.stop()}}),t)})))()}}},O=V,T=Object(f["a"])(O,w,j,!1,null,null,null),k=T.exports,S={name:"CurrentCountry",data:function(){return{country:"India",data:{}}},mixins:[k],created:function(){this.getCountryData()},methods:{numberWithCommas:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getCountryData:function(){var t=this;fetch("https://corona.lmao.ninja/v2/countries/".concat(this.country)).then((function(t){return t.json()})).then((function(e){t.data=e}))}}},I=S,W=(a("9e0c"),Object(f["a"])(I,y,x,!1,null,"236858a6",null)),B=W.exports;p()(W,{VCard:h["a"],VCardText:b["a"],VCardTitle:b["b"],VImg:C["a"]});var P={name:"Home",components:{TotalCases:_,CurrentCountry:B},data:function(){return{totalData:{}}},created:function(){this.getAllCases()},methods:{getAllCases:function(){var t=this;fetch("https://corona.lmao.ninja/all").then((function(t){return t.json()})).then((function(e){t.totalData=e}))}}},A=P,E=a("ce7e"),$=Object(f["a"])(A,i,s,!1,null,null,null),M=$.exports;p()($,{VDivider:E["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},L=[],H={name:"SearchTab"},R=H,F=Object(f["a"])(R,N,L,!1,null,null,null),U=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},q=[],z={name:"Preventions"},G=z,Y=Object(f["a"])(G,J,q,!1,null,null,null),K=Y.exports,Q={name:"App",components:{Home:M,SearchTab:U,Preventions:K},data:function(){return{openDrawer:!1,item:0,activeBtn:0,items:[{text:"Home",icon:"mdi-home"},{text:"Contact US",icon:"mdi-account-box"}],tabs:[{text:"Home",icon:"mdi-home"},{text:"Search",icon:"mdi-magnify"},{text:"Preventions",icon:"mdi-hospital-box"}]}},computed:{accentColor:function(){return c}},methods:{currentTab:function(t){this.activeBtn=t}}},X=Q,Z=(a("5d82"),a("7496")),tt=a("40dc"),et=a("5bc1"),at=a("b81c"),nt=a("8336"),rt=a("a75b"),ot=a("132d"),ct=a("8860"),it=a("da13"),st=a("5d23"),lt=a("1baa"),ut=a("34c3"),dt=a("f774"),vt=a("2fa4"),ft=a("2a7f"),mt=Object(f["a"])(X,r,o,!1,null,"7a07c289",null),pt=mt.exports;p()(mt,{VApp:Z["a"],VAppBar:tt["a"],VAppBarNavIcon:et["a"],VBottomNavigation:at["a"],VBtn:nt["a"],VContent:rt["a"],VIcon:ot["a"],VList:ct["a"],VListItem:it["a"],VListItemContent:st["a"],VListItemGroup:lt["a"],VListItemIcon:ut["a"],VListItemTitle:st["b"],VNavigationDrawer:dt["a"],VSpacer:vt["a"],VToolbarTitle:ft["a"]});var ht=a("f309");n["a"].use(ht["a"]);var bt=new ht["a"]({}),Ct=a("9483");Object(Ct["a"])("".concat("/covid-19/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({vuetify:bt,render:function(t){return t(pt)}}).$mount("#app")},"5d82":function(t,e,a){"use strict";var n=a("e026"),r=a.n(n);r.a},"6f65":function(t,e,a){},"7be2":function(t,e,a){t.exports=a.p+"img/globe.1b5de2e9.png"},"9e0c":function(t,e,a){"use strict";var n=a("b08c"),r=a.n(n);r.a},a7aa:function(t,e,a){"use strict";var n=a("6f65"),r=a.n(n);r.a},b08c:function(t,e,a){},e026:function(t,e,a){}});
//# sourceMappingURL=app.10a20ea3.js.map