webpackJsonp([1],{"6XcM":function(t,e){},"991W":function(t,e){},BBSX:function(t,e){},C65T:function(t,e){},EDgR:function(t,e){!function(t){var e,s=t.document.documentElement;function n(){var t=s.getBoundingClientRect().width/6.4;s.style.fontSize=t+"px"}t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(n,10)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(e),e=setTimeout(n,10))},!1),n()}(window)},M93x:function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("6XcM")},null,null);e.a=i.exports},MnJF:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=s("7+uW"),n=s("M93x"),i=s("YaEn"),a=s("YtJ0"),o=s("991W"),r=(s.n(o),s("EDgR")),c=(s.n(r),s("zL8q")),l=s.n(c),u=s("tvR6"),v=(s.n(u),s("I0MY")),_=s.n(v);e.default.use(_.a,{name:"v-touch"}),e.default.use(l.a),e.default.config.productionTip=!1,t.API_PROXY="https://bird.ioliu.cn/v1/?url=",new e.default({el:"#app",router:i.a,store:a.a,components:{App:n.a},template:"<App/>"})}.call(e,s("DuR2"))},O18p:function(t,e){},OqtL:function(t,e){},QbI3:function(t,e){},"Wm/d":function(t,e){},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),i=s("/ocq"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var o=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(t){s("Wm/d")},"data-v-f176ce32",null).exports,r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"title"},[this._v("俏蛮腰")])])}]};var c=s("VU/8")({methods:{goHome:function(){this.$router.push("/")}}},r,!1,function(t){s("O18p")},"data-v-c28c2b00",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"footer"},[e("li",[e("router-link",{attrs:{to:"/home/HomeList"}},[this._v("\n           首页\n           ")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/cart"}},[this._v("推荐")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/my"}},[this._v("我的")])],1)])])},staticRenderFns:[]};var u=s("VU/8")({},l,!1,function(t){s("QbI3")},"data-v-260ecc1c",null).exports,v={components:{CommonHeader:c,CommonFooter:u}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("common-header"),this._v(" "),e("router-view"),this._v(" "),e("common-footer")],1)},staticRenderFns:[]};var h=s("VU/8")(v,_,!1,function(t){s("pWga")},"data-v-094d09fc",null).exports,d=s("mtWM"),m=s.n(d),p={data:function(){return{homeList:[]}},methods:{loadData:function(){var t=this;m.a.get("./static/data/goods.json").then(function(e){t.homeList=e.data.data.homes}).catch(function(){alert("数据接收失败!")})},goDetail:function(t){this.$router.push("/home/homeDetail/"+t)}},mounted:function(){this.loadData()}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"city"},[s("router-link",{attrs:{to:"/city"}},[s("div",{staticClass:"triangle_border_down"},[s("span")])])],1),t._v(" "),s("ul",{staticClass:"home-list"},t._l(t.homeList,function(e){return s("li",{key:e.id,staticClass:"home",on:{click:function(s){t.goDetail(e.id)}}},[s("div",{staticClass:"home-img"},[s("img",{attrs:{src:e.img}})]),t._v(" "),s("div",{staticClass:"home-info"},[s("p",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.content))]),t._v(" "),s("span",{staticClass:"sale"},[t._v(t._s(e.sale))]),t._v(" "),s("p",[t._v("￥:"),s("span",{staticClass:"price"},[t._v(t._s(e.price)+" ")])])])])}))])},staticRenderFns:[]};var g=s("VU/8")(p,f,!1,function(t){s("qpaJ")},"data-v-486a148b",null).exports,C={data:function(){return{homeDetail:[],result:0,homes:[]}},methods:{goHome:function(){this.$router.push("/")},minus:function(){this.result--,this.result<=0?this.result=0:this.$emit("input",{res:this.result,other:"--"})},plus:function(){this.result++,this.$emit("input",{res:this.result,other:"++"})}},mounted:function(){var t=this,e="./static/data/good"+this.$route.params.homeId+".json";m.a.get(e).then(function(e){console.log(e),t.homeDetail=e.data.data.homes,console.log(t.homeDetail)}).catch(function(){alert("数据接收失败!")})}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("div",{staticClass:"detail-content"},[n("div",{staticClass:"detail-img"},[n("img",{attrs:{src:t.homeDetail[0].img}})]),t._v(" "),n("div",{staticClass:"detail-info"},[n("span",{staticClass:"label"},[t._v(t._s(t.homeDetail[0].xindong))]),t._v(" "),n("h2",{domProps:{textContent:t._s(t.homeDetail[0].price)}}),t._v(" "),n("button",{attrs:{type:"button",id:"b"},on:{click:function(e){t.minus()}}},[t._v("-")]),t._v(" "),n("button",{attrs:{type:"button",id:"b"}},[t._v(t._s(t.result))]),t._v(" "),n("button",{attrs:{type:"button",id:"b"},on:{click:function(e){t.plus()}}},[t._v("+")])]),t._v(" "),n("h4",[t._v(t._s(t.homeDetail[0].need))]),t._v(" "),n("h5",[t._v(t._s(t.homeDetail[0].day))]),t._v(" "),n("p",[t._v(t._s(t.homeDetail[0].xiang))]),t._v(" "),n("h5",[t._v(t._s(t.homeDetail[0].time))]),t._v(" "),n("p",[t._v(t._s(t.homeDetail[0].jian))]),t._v(" "),n("h5",[t._v(t._s(t.homeDetail[0].regular))]),t._v(" "),n("p",[t._v(t._s(t.homeDetail[0].end))])]),t._v(" "),n("div",{staticClass:"back"},[n("span",{staticClass:"back",on:{click:t.goHome}},[n("img",{attrs:{src:s("kVFv")}})])])])},staticRenderFns:[]};var y=s("VU/8")(C,w,!1,function(t){s("BBSX")},"data-v-5b2b2797",null).exports,b=(s("bfxE"),s("GKTo")),L={components:{CommonHeader:c,CommonFooter:u,swipe:b.Swipe,"swipe-item":b.SwipeItem},data:function(){return{photoList:[]}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart"},[e("common-header"),this._v(" "),e("router-view"),this._v(" "),e("common-footer")],1)},staticRenderFns:[]};var x=s("VU/8")(L,k,!1,function(t){s("OqtL")},"data-v-641ca375",null).exports,$={components:{CommonHeader:c,CommonFooter:u,swipe:b.Swipe,"swipe-item":b.SwipeItem},data:function(){return{photoList:[]}},mounted:function(){var t=this;m.a.get("./static/data/photodata.json").then(function(e){t.photoList=e.data.photoData,t.$store.dispatch("actionPhotoList",t.photoList),console.log(t.photoList)}).catch()}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart"},[s("common-header"),t._v(" "),s("swipe",{staticClass:"my-swipe"},[s("swipe-item",{staticClass:"slide1"}),t._v(" "),s("swipe-item",{staticClass:"slide2"}),t._v(" "),s("swipe-item",{staticClass:"slide3"}),t._v(" "),s("swipe-item",{staticClass:"slide4"}),t._v(" "),s("swipe-item",{staticClass:"slide5"})],1),t._v(" "),s("div",{staticClass:"list clearfix"},[s("ul",t._l(t.photoList,function(t,e){return s("li",{key:e},[s("router-link",{attrs:{to:"/cart/cartDetail/"+e}},[s("img",{attrs:{src:t.src}})])],1)}))]),t._v(" "),s("router-view"),t._v(" "),s("common-footer")],1)},staticRenderFns:[]};var E=s("VU/8")($,D,!1,function(t){s("C65T")},"data-v-e0c9c6f4",null).exports,F={data:function(){return{nowIndex:0}},mounted:function(){this.nowIndex=this.$route.params.index,console.log("接收的参数ID= "+this.nowIndex)},computed:{styleObj:function(){return{background:"#fff url("+this.$store.state.photoList[this.nowIndex].src+") no-repeat center / contain"}}},methods:{swipeLeft:function(){this.nowIndex++,this.nowIndex==this.$store.state.photoList.length&&(this.nowIndex=0)},swipeRight:function(){this.nowIndex--,this.nowIndex<0&&(this.nowIndex=this.$store.state.photoList.length-1),console.log("right!!!")},swipeDown:function(){console.log("Down!!!")},tap:function(){this.$router.go(-1)}}},R={render:function(){var t=this.$createElement;return(this._self._c||t)("v-touch",{staticClass:"detail",style:this.styleObj,on:{swipeleft:this.swipeLeft,swiperight:this.swipeRight,swipedown:this.swipeDown,tap:this.tap}})},staticRenderFns:[]};var I=s("VU/8")(F,R,!1,function(t){s("MnJF")},"data-v-56aa4876",null).exports,j={components:{CommonHeader:c,CommonFooter:u}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("common-header"),this._v(" "),e("router-view"),this._v(" "),e("common-footer")],1)},staticRenderFns:[]};var H=s("VU/8")(j,V,!1,function(t){s("euGf")},"data-v-296406e2",null).exports,A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("div",{staticClass:"login"},[s("el-form",[s("el-form-item",[s("el-input",{attrs:{placeholder:"请输入帐号"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("el-form-item",[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"success"},on:{click:t.login}},[t._v("登录")]),t._v(" "),s("el-button",[t._v("注册")])],1)],1)],1)])},staticRenderFns:[]};var M=s("VU/8")({name:"login",data:function(){return{username:"例如:翠花儿",password:"123456"}},methods:{login:function(){this.$store.commit("login",this.username),this.$router.push("/my/mydetail")}}},A,!1,function(t){s("uOJm")},"data-v-0a60a9c2",null).exports,U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"back"},[n("span",{staticClass:"back",on:{click:t.goHome}},[n("img",{attrs:{src:s("kVFv")}})])]),t._v(" "),n("div",{staticClass:"profile"},[n("div",{staticClass:"user"},[n("header",{staticClass:"profile-header"},[n("h3",[t._v("当前用户："+t._s(t.username))])]),t._v(" "),n("main",{staticClass:"profile-body"},[n("div",{staticClass:"address"},[n("el-button",{on:{click:function(e){return e.stopPropagation(),t.toMyAddressPage(e)}}},[t._v("我的地址"),n("i",{staticClass:"el-icon-arrow-right"})])],1)]),t._v(" "),n("footer",{staticClass:"profile-footer"},[n("div",[n("el-button",{attrs:{type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1)])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"slideInRight"}},[n("router-view")],1)],1)])},staticRenderFns:[]};var W=s("VU/8")({name:"profile",data:function(){return{}},computed:{username:function(){return this.$store.state.username},isLogin:function(){return this.$store.state.isLogin}},methods:{goHome:function(){this.$router.push("/my/mylist")},toLogin:function(){this.$router.push({path:"/my/mylist"})},toMyAddressPage:function(){this.$router.push({path:"/my/myAddress"})},logout:function(){this.$store.commit("logout"),this.$router.push({path:"/my/mylist"})}}},U,!1,function(t){s("jI2C")},"data-v-bd34c7c4",null).exports,O={data:function(){return{allAddress:[]}},methods:{loadData:function(){var t=this;m.a.get("./static/data/allAddress.json").then(function(e){console.log(e),t.allAddress=e.data.data.address,console.log(t.allAddress)}).catch(function(){alert("数据接收失败!")})},toMyAddress:function(){this.$router.push("/my/myDetail")}},mounted:function(){this.loadData()}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit"},[t._m(0),t._v(" "),s("main",[s("ul",{staticClass:"all-address"},t._l(t.allAddress,function(e){return s("li",{key:e.id,staticClass:"address"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.phone))]),t._v(" "),s("p",[t._v(t._s(e.city+e.detailAdd))]),t._v(" "),s("el-button",{attrs:{type:"text"},on:{click:t.toMyAddress}},[t._v("确定")])],1)}))]),t._v(" "),s("footer")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h3",[this._v("我的收货地址")])])}]};var T=s("VU/8")(O,P,!1,function(t){s("fg0I")},"data-v-2969529a",null).exports,J={data:function(){return{cityList:[],shiList:[]}},methods:{loadData:function(){var t=this;m.a.get("./static/data/city.json").then(function(e){t.cityList=e.data.city}).catch(function(){alert("数据接收失败!")})},back:function(){this.$router.push("/")}},mounted:function(){this.loadData()}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("h5",{staticClass:"ding"},[t._v("定位城市")]),t._v(" "),s("div",{staticClass:"city-ding"}),t._v(" "),s("h5",{staticClass:"hot"},[t._v("热门城市")]),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"city",on:{click:t.back}},t._l(t.cityList,function(e){return s("li",{key:e},[s("p",{attrs:{id:"bian"}},[t._v(t._s(e.n))]),t._v(" "),s("ul",{staticClass:"shi"},[s("li",[s("p",[t._v(t._s(e.c[0]))]),t._v(" "),s("p",[t._v(t._s(e.c[1]))]),t._v(" "),s("p",[t._v(t._s(e.c[2]))]),t._v(" "),s("p",[t._v(t._s(e.c[3]))]),t._v(" "),s("p",[t._v(t._s(e.c[4]))]),t._v(" "),s("p",[t._v(t._s(e.c[5]))]),t._v(" "),s("p",[t._v(t._s(e.c[6]))]),t._v(" "),s("p",[t._v(t._s(e.c[7]))]),t._v(" "),s("p",[t._v(t._s(e.c[8]))]),t._v(" "),s("p",[t._v(t._s(e.c[9]))]),t._v(" "),s("p",[t._v(t._s(e.c[10]))]),t._v(" "),s("p",[t._v(t._s(e.c[11]))]),t._v(" "),s("p",[t._v(t._s(e.c[12]))]),t._v(" "),s("p",[t._v(t._s(e.c[13]))]),t._v(" "),s("p",[t._v(t._s(e.c[14]))]),t._v(" "),s("p",[t._v(t._s(e.c[15]))]),t._v(" "),s("p",[t._v(t._s(e.c[16]))]),t._v(" "),s("p",[t._v(t._s(e.c[17]))]),t._v(" "),s("p",[t._v(t._s(e.c[18]))]),t._v(" "),s("p",[t._v(t._s(e.c[19]))]),t._v(" "),s("p",[t._v(t._s(e.c[20]))]),t._v(" "),s("p",[t._v(t._s(e.c[21]))]),t._v(" "),s("p",[t._v(t._s(e.c[22]))]),t._v(" "),s("p",[t._v(t._s(e.c[23]))]),t._v(" "),s("p",[t._v(t._s(e.c[24]))]),t._v(" "),s("p",[t._v(t._s(e.c[25]))]),t._v(" "),s("p",[t._v(t._s(e.c[26]))]),t._v(" "),s("p",[t._v(t._s(e.c[27]))]),t._v(" "),s("p",[t._v(t._s(e.c[28]))]),t._v(" "),s("p",[t._v(t._s(e.c[29]))]),t._v(" "),s("p",[t._v(t._s(e.c[30]))]),t._v(" "),s("p",[t._v(t._s(e.c[31]))]),t._v(" "),s("p",[t._v(t._s(e.c[32]))]),t._v(" "),s("p",[t._v(t._s(e.c[33]))]),t._v(" "),s("p",[t._v(t._s(e.c[34]))]),t._v(" "),s("p",[t._v(t._s(e.c[35]))]),t._v(" "),s("p",[t._v(t._s(e.c[36]))]),t._v(" "),s("p",[t._v(t._s(e.c[37]))]),t._v(" "),s("p",[t._v(t._s(e.c[39]))]),t._v(" "),s("p",[t._v(t._s(e.c[40]))]),t._v(" "),s("p",[t._v(t._s(e.c[41]))])])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"hot-city"},[s("li",[s("a",[t._v("上海")]),t._v(" "),s("a",[t._v("北京")]),t._v(" "),s("a",[t._v("广州")])]),t._v(" "),s("li",[s("a",[t._v("深圳")]),t._v(" "),s("a",[t._v("武汉")]),t._v(" "),s("a",[t._v("天津")])]),t._v(" "),s("li",[s("a",[t._v("西安")]),t._v(" "),s("a",[t._v("重庆")]),t._v(" "),s("a",[t._v("杭州")])])])}]};var Y=s("VU/8")(J,S,!1,function(t){s("uDHV")},"data-v-30d245ef",null).exports;n.default.use(i.a);e.a=new i.a({routes:[{path:"/",name:"HelloWorld",component:o,redirect:"/home/homelist"},{path:"/home",name:"Home",component:h,children:[{path:"HomeList",name:"HomeList",component:g},{path:"homeDetail/:homeId",name:"HomeDetail",component:y}]},{path:"/cart",name:"Cart",component:x,redirect:"/cart/cartList",children:[{path:"cartList",name:"CartList",component:E},{path:"cartDetail/:index",name:"CartDetail",component:I}]},{path:"/my",name:"My",component:H,redirect:"/my/myList",children:[{path:"myList",name:"MyList",component:M},{path:"myDetail",name:"MyDetail",component:W},{path:"myAddress",name:"MyAddress",component:T}]},{path:"/city",name:"City",component:Y}]})},YtJ0:function(t,e,s){"use strict";var n=s("7+uW"),i=s("NYxO");n.default.use(i.a);e.a=new i.a.Store({state:{username:"",isLogin:!1,photoList:[]},mutations:{setPhotoList:function(t,e){t.photoList=e},login:function(t,e){t.username=e,t.isLogin=!0},logout:function(t){t.isLogin=!1}},getters:{},actions:{actionPhotoList:function(t,e){(0,t.commit)("setPhotoList",e)}}})},bfxE:function(t,e){},euGf:function(t,e){},fg0I:function(t,e){},jI2C:function(t,e){},kVFv:function(t,e,s){t.exports=s.p+"static/img/arrow.1279d9e.png"},pWga:function(t,e){},qpaJ:function(t,e){},tvR6:function(t,e){},uDHV:function(t,e){},uOJm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bdb63f19871cc5fecd16.js.map