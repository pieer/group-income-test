(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b55e09d8","chunk-022cde58"],{"0cbf":function(t,e,a){"use strict";var n=a("ebfc"),i=a.n(n);i.a},"18e2":function(t,e,a){},"1d1c":function(t,e,a){"use strict";var n=a("18e2"),i=a.n(n);i.a},"1f85":function(t,e,a){},"26a1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings-container"},[a("TabWrapper",{attrs:{tabNav:t.settings},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("TabItem",[a("TabPlaceholder",{attrs:{name:"My account"}})],1),a("TabItem",[a("TabPlaceholder",{attrs:{name:"Privacy & Safety"}})],1),a("TabItem",[a("TabPlaceholder",{attrs:{name:"Notifications"}})],1),a("TabItem",[a("SettingsAppearence")],1),a("TabItem",[a("TabPlaceholder",{attrs:{name:"Changelog"}})],1),a("TabItem",[a("TabPlaceholder",{attrs:{name:"Log Out"}})],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab-item"},[t._t("default")],2)])},c=[],l={name:"TabItem",data:function(){return{isActive:!1,transitionName:null}},methods:{activate:function(t,e){this.transitionName=e<t?"slide-next":"slide-prev",this.isActive=!0},deactivate:function(t,e){this.transitionName=e<t?"slide-next":"slide-prev",this.isActive=!1}},created:function(){this.$parent.tabItems.push(this)},beforeDestroy:function(){var t=this.$parent.tabItems.indexOf(this);t>=0&&this.$parent.tabItems.splice(t,1)}},r=l,o=(a("0cbf"),a("2877")),u=Object(o["a"])(r,s,c,!1,null,"54c136d2",null);u.options.__file="item.vue";var b=u.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-wrapper"},[a("div",{staticClass:"tab-nav-toggle",class:{open:t.open},on:{click:function(e){t.open=!t.open}}}),a("nav",{staticClass:"tab-nav",class:{open:t.open},on:{click:function(e){t.open=!1}}},t._l(t.tabNav,function(e,n){return a("div",{key:n,staticClass:"tab-nav-list"},[e.legend?a("legend",{staticClass:"tab-legend"},[t._v(t._s(e.legend))]):a("hr",{staticClass:"tab-nav-separator"}),t._l(e.links,function(e){return a("a",{key:e.index,staticClass:"tab-link",class:{"tab-active":t.activeTab===e.index},on:{click:function(a){t.tabClick(e.index)}}},[t._v(t._s(e.title))])})],2)}),0),a("section",{staticClass:"tab-section"},[t._t("default")],2)])},p=[],f=(a("c5f6"),{name:"TabWrapper",props:{value:Number,tabNav:Array},data:function(){return{activeTab:this.value||0,tabItems:[],open:!1}},watch:{value:function(t){this.changeTab(t)},tabItems:function(){this.tabItems.length&&(this.tabItems[this.activeTab].isActive=!0)}},methods:{changeTab:function(t){this.activeTab!==t&&(this.tabItems[this.activeTab].deactivate(this.activeTab,t),this.tabItems[t].activate(this.activeTab,t),this.activeTab=t,this.$emit("change",t))},tabClick:function(t){this.$emit("input",t),this.changeTab(t)}},mounted:function(){this.tabItems.length&&(this.tabItems[this.activeTab].isActive=!0)}}),d=f,h=(a("aa62"),Object(o["a"])(d,v,p,!1,null,"009bb34a",null));h.options.__file="wrapper.vue";var m=h.exports,T=a("6820"),g=a("620e"),_=a("e911"),I={name:"SettingsWrapper",components:{TabWrapper:m,TabItem:b,SettingsAppearence:g["default"],TabPlaceholder:T["default"]},data:function(){return _}},x=I,k=(a("386e"),Object(o["a"])(x,n,i,!1,null,"74f9afa2",null));k.options.__file="wrapper.vue";e["default"]=k.exports},"386e":function(t,e,a){"use strict";var n=a("1f85"),i=a.n(n);i.a},4307:function(t,e,a){},6820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("TODO:")]),a("p",[t._v(" Implement "),a("strong",[t._v('"'+t._s(t.name)+'"')]),t._v(" settings page")])])},i=[],s=(a("cadf"),a("551c"),a("097d"),{name:"PlaceHolder",props:{name:String}}),c=s,l=(a("1d1c"),a("2877")),r=Object(l["a"])(c,n,i,!1,null,"e63d957a",null);r.options.__file="placeholder.vue";e["default"]=r.exports},aa62:function(t,e,a){"use strict";var n=a("4307"),i=a.n(n);i.a},e911:function(t){t.exports={activeTab:3,settings:[{legend:"User settings",links:[{title:"My account",index:0},{title:"Privacy & Safety",index:1}]},{legend:"App settings",links:[{title:"Notifications",index:2},{title:"Appearance",index:3}]},{links:[{title:"Changelog",index:4},{title:"Log Out",index:5}]}]}},ebfc:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b55e09d8.f555a3a4.js.map