(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(380)},380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(59),s=a.n(l),o=a(29),c=a(30),i=a(32),u=a(31),m=a(33),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.a.Component),h=a(150),p=a.n(h),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={place:"\u6771\u4eac\u30bf\u30ef\u30fc"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handlePlaceChange",value:function(e){this.setState({place:e})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.place)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"text",value:this.state.place,onChange:function(t){return e.handlePlaceChange(t.target.value)}}),r.a.createElement("input",{type:"submit",value:"\u691c\u7d22"}))}}]),t}(n.Component),E=function(e){var t=e.address,a=e.lat,n=e.lng;return r.a.createElement("ul",{className:"geocode-result"},r.a.createElement("li",null,"\u4f4f\u6240\uff1a",t),r.a.createElement("li",null,"\u7def\u5ea6\uff1a",a),r.a.createElement("li",null,"\u7d4c\u5ea6\uff1a",n))};E.defaultProps={address:"",lat:0,lng:0};var v=E,f=a(155),b=a(60);a(149).config();var k=Object(b.withGoogleMap)(function(e){return r.a.createElement(b.GoogleMap,{defaultZoom:12,defaultCenter:e.position,center:e.position},r.a.createElement(b.Marker,e.marker))}),j=function(e){var t={lat:e.lat,lng:e.lng};return r.a.createElement(f.a,{params:{key:"AIzaSyDa1WqUW_b2muL31FtrjmDlR4JeuEMvm-s",libraries:"places,geometry"},render:function(e,a){return e?r.a.createElement("div",null,r.a.createElement(k,{containerElement:r.a.createElement("div",null),mapElement:r.a.createElement("div",{className:"map"}),position:t,marker:{position:t}}),a||"Google Maps is loaded !"):r.a.createElement("div",null,"Network Error"===a?r.a.createElement("p",null,a):r.a.createElement("p",null,"isLoading..."))}})};j.defaultProps={lat:35.6585805,lng:139.7454329};var y=j;a(149).config();var O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setErrorMessage",value:function(e){this.setState({address:e,lat:0,lng:0})}},{key:"handlePlaceSubmit",value:function(e){var t=this;p.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{key:"AIzaSyDa1WqUW_b2muL31FtrjmDlR4JeuEMvm-s",address:e}}).then(function(e){console.log(e);var a=e.data,n=e.data.results[0];switch(a.status){case"OK":var r=n.geometry.location;t.setState({address:n.formatted_address,lat:r.lat,lng:r.lng});break;case"ZERO_RESULTS":t.setErrorMessage("\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f");break;default:t.setErrorMessage("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f")}}).catch(function(e){t.setErrorMessage("\u901a\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"\u7def\u5ea6\u7d4c\u5ea6\u691c\u7d22"),r.a.createElement(g,{onSubmit:function(t){return e.handlePlaceSubmit(t)}}),r.a.createElement(v,{address:this.state.address,lat:this.state.lat,lng:this.state.lng}),r.a.createElement(d,null,r.a.createElement(y,{lat:this.state.lat,lng:this.state.lng})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,2,1]]]);
//# sourceMappingURL=main.2ac30bc7.chunk.js.map