(function(e){function t(t){for(var n,i,s=t[0],c=t[1],f=t[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,f||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("p",{staticClass:"bold title"},[e._v("vue-freezeframe")]),r("div",{staticClass:"section"},[e._m(0),r("freezeframe",{attrs:{src:"http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/56141631e4b0095d43132f02/5614164be4b018c0454fd619/1444744841735/pool980.gif"}})],1),r("div",{staticClass:"section"},[r("p",[e._v("start/stop manually")]),r("button",{on:{click:e.start}},[e._v("Start")]),r("button",{on:{click:e.stop}},[e._v("Stop")]),r("button",{on:{click:e.toggle}},[e._v("Toggle")]),r("freezeframe",{ref:"freeze",attrs:{src:"http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif"}})],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("natural width,"),r("br"),e._v("animate on hover.")])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-freezeframe"},[r("img",{ref:"img",attrs:{src:e.src}})])},s=[],c=r("5233"),f=r.n(c),u={name:"freezeframe",props:{src:{type:String,default:null}},mounted:function(){this.$freezeframe=new f.a(this.$refs.img)},methods:{start:function(){this.$freezeframe.start()},stop:function(){this.$freezeframe.stop()}}},l=u,p=r("2877"),d=Object(p["a"])(l,i,s,!1,null,null,null),b=d.exports,h={name:"app",data:function(){return{isPlaying:!1}},components:{Freezeframe:b},methods:{toggle:function(){this.isPlaying?this.stop():this.start(),this.isPlaying=!this.isPlaying},start:function(){this.$refs.freeze.start()},stop:function(){this.$refs.freeze.stop()}}},v=h,m=(r("5c0b"),Object(p["a"])(v,a,o,!1,null,null,null)),g=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){}});
//# sourceMappingURL=app.a168ae05.js.map