(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],f=0,p=[];f<o.length;f++)u=o[f],a[u]&&p.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0596":function(e,t,n){},"17f2":function(e,t,n){"use strict";var r=n("18d3"),a=n.n(r);a.a},"18d3":function(e,t,n){},5452:function(e,t,n){"use strict";var r=n("0596"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},c=[],u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],i={name:"Header"},s=i,l=(n("5452"),n("2877")),f=Object(l["a"])(s,u,o,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main"},[e._l(e.displayedArt,function(e){return n("Thumbnail",{key:e.id,attrs:{art:e}})}),n("ButtonContainer",{attrs:{currentPage:e.currentPage,fetchNextPage:e.fetchNextPage}})],2)},h=[],b=n("75fc"),m=(n("96cf"),n("3b8d")),g=function(e){return e.map(function(e){return{id:e.id,imageurl:e.baseimageurl}})},v=function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="b1e4fe60-b2da-11e9-b220-f1e4c3bbf900",r="https://api.harvardartmuseums.org/image?size=12&page=".concat(t,"&apikey=").concat(n),e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,u=g(c.records),e.abrupt("return",u);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=v,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"thumbnail"},[n("img",{attrs:{src:e.art.imageurl}})])},O=[],_={name:"Thumbnail",props:{art:Object}},P=_,j=(n("f2bb"),Object(l["a"])(P,y,O,!1,null,null,null)),w=j.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"button-container"},[n("button",{on:{click:e.loadMore}},[e._v("LOAD MORE")]),n("button",{on:{click:e.goToTop}},[e._v("BACK TO TOP")])])},M=[],k=(n("c5f6"),{name:"ButtonContainer",props:{currentPage:Number,fetchNextPage:Function},methods:{loadMore:function(){var e=this.currentPage+1;this.fetchNextPage(e)},goToTop:function(){window.scrollTo(0,0)}}}),C=k,E=(n("ee3e"),Object(l["a"])(C,T,M,!1,null,null,null)),N=E.exports,$={name:"Main",created:function(){this.fetchNextPage(1)},data:function(){return{displayedArt:[],currentPage:0}},methods:{fetchNextPage:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,this.displayedArt=[].concat(Object(b["a"])(this.displayedArt),Object(b["a"])(n)),this.currentPage=this.currentPage+1;case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},components:{Thumbnail:w,ButtonContainer:N}},A=$,R=(n("17f2"),Object(l["a"])(A,d,h,!1,null,null,null)),S=R.exports,B={name:"app",components:{Header:p,Main:S}},H=B,J=(n("5c0b"),Object(l["a"])(H,a,c,!1,null,null,null)),z=J.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(z)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"9f1c":function(e,t,n){},c6fe:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.93f7a0ef.png"},ee3e:function(e,t,n){"use strict";var r=n("c6fe"),a=n.n(r);a.a},f2bb:function(e,t,n){"use strict";var r=n("9f1c"),a=n.n(r);a.a}});
//# sourceMappingURL=app.31a4f281.js.map