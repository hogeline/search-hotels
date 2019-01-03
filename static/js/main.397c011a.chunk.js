(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){"use strict";(function(e){var n=a(27),r=a(203),l=a.n(r);t.a=Object(n.combineReducers)({place:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var t=l.a.parse(e.location.search).place;return t&&t.length>0?t:null}()||"\u6771\u4eac\u30bf\u30ef\u30fc",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_PLACE":return a.place;default:return t}},geocodeResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{address:"",location:{lat:35.6585805,lng:139.7454329}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GEOCODE_FETCHED":return{address:t.address,location:t.location};case"CHANGE_ERROR_MESSAGE":return{address:t.message,location:{lat:0,lng:0}};default:return e}},hotels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HOTELS":return t.hotels;default:return e}},loadHotels:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_HOTELS":return t.isLoading;default:return e}},sortKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"price",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SORT_KEY":return t.sortKey;default:return e}}})}).call(this,a(28))},205:function(e,t,a){e.exports=a(528)},528:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(23),s=a(27),i=a(191),u=a(192),m=a(530),d=a(532),h=a(531),E=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo"},r.a.createElement("a",{href:"/search-hotels"},"\u5b66\u4f1a\u5468\u8fba\u30db\u30c6\u30eb\u8abf\u3079")),r.a.createElement("div",{className:"header-menu"},r.a.createElement("nav",{className:"header-menu-navi"},r.a.createElement("a",{href:"/search-hotels"},"\u30db\u30c6\u30eb\u691c\u7d22"),r.a.createElement("a",{href:"/search-hotels/about"},"About"))))},p=a(78),v=a(79),f=a(83),g=a(80),b=a(84),y=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.a.Component),N=a(81),O=a.n(N);a(89).config();var S=a(193),w=a.n(S),C="".concat("https://app.rakuten.co.jp/services/api/Travel/","SimpleHotelSearch/20170426"),j={simpleHotelSearch:function(e){return O.a.get(C,{params:e})}};a(89).config();var A=function(e){return function(t){return t({type:"CHANGE_ERROR_MESSAGE",message:e})}},L=function(e){return function(t){return t({type:"LOADING_HOTELS",isLoading:e})}},_=function(){return function(e,t){var a;e(L(!0)),(a=t().place,O.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{key:"AIzaSyDa1WqUW_b2muL31FtrjmDlR4JeuEMvm-s",address:a}}).then(function(e){var t=e.data,a=t.status,n=t.results[0];return"undefined"===typeof n?{status:a}:{status:a,address:n.formatted_address,location:n.geometry.location}})).then(function(t){var a=t.status,n=t.address,r=t.location;switch(a){case"OK":return e({type:"GEOCODE_FETCHED",address:n,location:r}),function(e){var t={format:"json",applicationId:"1011284255554010410",datumType:1,latitude:e.lat,longitude:e.lng};return j.simpleHotelSearch(t).then(function(t){return t.data.hotels.map(function(t){var a=t.hotel[0].hotelBasicInfo,n=w.a.getDistance({latitude:e.lat,longitude:e.lng},{latitude:a.latitude,longitude:a.longitude});return{id:a.hotelNo,name:a.hotelName,url:a.hotelInformationUrl,thumbUrl:a.hotelThumbnailUrl,price:a.hotelMinCharge,reviewAverage:a.reviewAverage,reviewCount:a.reviewCount,distance:n}})})}(r);case"ZERO_RESULTS":e(A("\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"));break;default:e(A("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"))}return[]}).then(function(t){e(L(!1)),e(function(e){return function(t){return t({type:"CHANGE_HOTELS",hotels:e})}}(t))}).catch(function(){e(A("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"))})}},k=a(194),H=a.n(k),R=a(195),D=a.n(R),G=Object(o.b)(function(e){return{place:e.place}},{setPlace:function(e){return function(t){return t({type:"CHANGE_PLACE",place:e})}},startSearch:_})(function(e){return r.a.createElement("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),e.history.push("?place=".concat(e.place)),e.startSearch(e.place)}},r.a.createElement(H.a,null,"\u5bbf\u6cca\u65e5\uff1a",r.a.createElement("i",{class:"fa fa-calendar-alt"}),r.a.createElement(D.a,{hintText:"Landscape Dialog",mode:"landscape",className:"calender"})),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"SearchForm-input",type:"text",size:"30",value:e.place,onChange:function(t){t.preventDefault(),e.setPlace(t.target.value)}}),r.a.createElement("input",{className:"SearchForm-submit",type:"submit",value:"\u691c\u7d22"})))}),K=function(e){var t=e.address,a=e.location;return r.a.createElement("ul",{className:"geocode-result"},r.a.createElement("li",null,"\u4f4f\u6240\uff1a",t),r.a.createElement("li",null,"\u7def\u5ea6\uff1a",a.lat),r.a.createElement("li",null,"\u7d4c\u5ea6\uff1a",a.lng))};K.defaultProps={address:""};var T=K,M=a(204),P=a(85);a(89).config();var I=Object(P.withGoogleMap)(function(e){var t=e.location,a=e.marker;return r.a.createElement(P.GoogleMap,{defaultZoom:12,defaultCenter:t,center:t},r.a.createElement(P.Marker,a))}),F=function(e){var t=e.location;return r.a.createElement(M.a,{params:{key:"AIzaSyDa1WqUW_b2muL31FtrjmDlR4JeuEMvm-s",libraries:"places,geometry"},render:function(e,a){return e?r.a.createElement("div",null,r.a.createElement(I,{containerElement:r.a.createElement("div",null),mapElement:r.a.createElement("div",{className:"map"}),location:t,marker:{position:t}}),a?console.log(a):""):r.a.createElement("div",null,"Network Error"===a?r.a.createElement("p",null,a):r.a.createElement("p",null,"isLoading..."))}})},U=a(198),W=a.n(U),x=function(e){var t=e.hotel;return r.a.createElement("div",{className:"hotel card"},r.a.createElement("div",{className:"hotel-icon"},r.a.createElement("div",{className:"image-bg"},r.a.createElement("img",{src:t.thumbUrl,alt:t.name}))),r.a.createElement("div",{className:"hotel-info"},r.a.createElement("div",{className:"hotel-name"},r.a.createElement("a",{href:t.url},t.name)),r.a.createElement("div",{className:"hotel-price"},t.price?"".concat(t.price,"\u5186"):"\u7a7a\u5ba4\u306a\u3057"),r.a.createElement("div",{className:"hotel-info-detail"},r.a.createElement("div",{className:"detail hotel-star"},r.a.createElement("i",{className:"far fa-star"}),t.reviewAverage?t.reviewAverage:"\u306a\u3057"),r.a.createElement("div",{className:"detail hotel-review"},r.a.createElement("i",{className:"far fa-comment"}),t.reviewCount?"".concat(t.reviewCount,"\u4ef6"):"0\u4ef6"),r.a.createElement("div",{className:"detail hotel-distance"},r.a.createElement("i",{className:"fa fa-road"}),"".concat(t.distance,"m")))))},B=Object(o.b)(function(e,t){return{isSelected:t.sortKey===e.sortKey}},{setSortKey:function(e){return function(t){return t({type:"CHANGE_SORT_KEY",sortKey:e})}}})(function(e){return r.a.createElement("div",{className:e.isSelected?"sort-btn blue":"sort-btn",onClick:function(){return e.setSortKey(e.sortKey)}},e.label)}),J=a(199),z=a.n(J),q=function(e){return e.isLoading?r.a.createElement(z.a,{type:"spokes",color:"#0000ff"}):null},Y=function(e){var t=e.hotels,a=e.isLoading;return r.a.createElement("div",{className:"hotels-table"},r.a.createElement("div",{className:"hotels-table-navi"},r.a.createElement(B,{label:"\u5024\u6bb5",sortKey:"price"}),r.a.createElement(B,{label:"\u30ec\u30d3\u30e5\u30fc",sortKey:"reviewAverage"}),r.a.createElement(B,{label:"\u30ec\u30d3\u30e5\u30fc\u4ef6\u6570",sortKey:"reviewCount"}),r.a.createElement(B,{label:"\u8ddd\u96e2",sortKey:"distance"})),a?r.a.createElement("div",{className:"Loading"},r.a.createElement(q,{isLoading:a})):t.map(function(e){return r.a.createElement(x,{key:e.id,hotel:e})}))};Y.defaultProps={hotels:[]};var Z=Object(o.b)(function(e){return{hotels:(t=e.hotels,a=e.sortKey,W.a.sortBy(t,function(e){return e[a]})),isLoading:e.loadHotels};var t,a})(Y),$=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(_())}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchPage"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"SearchPage-title"},"\u30db\u30c6\u30eb\u691c\u7d22"),r.a.createElement(G,{history:this.props.history}),r.a.createElement("div",{className:"SearchPage-geocode"},r.a.createElement(T,{address:this.props.geocodeResult.address,location:this.props.geocodeResult.location})),r.a.createElement("div",{className:"SearchPage-map"},r.a.createElement(y,null,r.a.createElement(F,{location:this.props.geocodeResult.location}))),r.a.createElement("h2",null,"\u30db\u30c6\u30eb\u691c\u7d22\u7d50\u679c"),r.a.createElement(Z,null)))}}]),t}(n.Component),Q=Object(o.b)(function(e){return{geocodeResult:e.geocodeResult}})($),V=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",{className:"App-title"},"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"))},X=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/search-hotels",component:Q}),r.a.createElement(h.a,{exact:!0,path:"/search-hotels/about",component:V}))))},ee=a(202);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=Object(s.createStore)(ee.a,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(i.a)));c.a.render(r.a.createElement(o.a,{store:te},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[205,2,1]]]);
//# sourceMappingURL=main.397c011a.chunk.js.map