(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports=t(22)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),i=t(3),c=t.n(i),l=t(1),s=t(2),d=function(e){var n=e.goToNext;return r.createElement(r.Fragment,null,r.createElement("div",{className:"page-header"},"Welcome"),r.createElement("div",{className:"page-content"},r.createElement("div",{className:"button",onClick:function(){return n&&n()}},"Order Salad")))},u=(t(17),o.a.createContext({})),m=function(e){var n=e.ingredient,t=e.isReadOnly,a=n.name,o=n.price,i=Object(r.useContext)(u).state.ingredientsOrder.get(a);return r.createElement("div",{className:"ingredients-picker"},r.createElement("div",{className:"info"},r.createElement("span",{className:"name-label"},a),r.createElement("span",{className:"price-label"},"$".concat(o))),r.createElement("input",{className:"amount-picker",type:"number",min:0,step:1,onChange:function(n){return e.onChange&&e.onChange(n.target.value)},disabled:t,defaultValue:i&&i.toString()}))};!function(e){e[e.SetIngredients=0]="SetIngredients",e[e.AddIngrediantToOrder=1]="AddIngrediantToOrder",e[e.SetOrderInfo=2]="SetOrderInfo"}(a||(a={}));var f,g="https://dudiharush.github.io/salad-shop-web",p=function(e){var n=Object(r.useContext)(u),t=n.dispatch,o=n.state,i=Array.from(o.ingredients.values());Object(r.useEffect)(function(){0===o.ingredients.size&&fetch("".concat(g,"/salad.json")).then(function(e){return e.json()}).then(function(e){return e.items}).then(function(e){t(function(e){var n=new Map;return e.forEach(function(e){return n.set(e.name,e)}),{type:a.SetIngredients,payload:{ingredients:n}}}(e))})},[o.ingredients,t]);var c=function(e){return function(n){return t(function(e,n){return{type:a.AddIngrediantToOrder,payload:{itemName:e,amount:n}}}(e,+n))}};return 0===o.ingredients.size?r.createElement("span",null,"Loading..."):r.createElement(r.Fragment,null,r.createElement("div",{className:"page-header"},"Select Ingredients"),r.createElement("div",{className:"page-content"},i&&i.map(function(e){return r.createElement(m,{key:e.name,ingredient:e,onChange:c(e.name)})}),r.createElement("div",{className:"button",onClick:function(){return e.goToNext&&e.goToNext()}},"Proceed To Checkout")))},h=(t(18),function(e){var n=e.fieldName,t=e.onChange;e.isValid;return r.createElement("div",{className:"order-details-field"},r.createElement("span",null,"".concat(n,":")),r.createElement("input",{type:"text",onChange:function(e){return t&&t(e.target.value)}}))}),v=function(e,n){return Array.from(n).reduce(function(n,t){var a=Object(l.a)(t,2),r=a[0],o=a[1];return n+=e.get(r).price*o},0)},E=function(e){var n=Object(r.useContext)(u),t=n.dispatch,o=n.state,i=v(o.ingredients,o.ingredientsOrder);Object(r.useEffect)(function(){return function(){return e.setShowModal(!1)}},[e]);return r.createElement(r.Fragment,null,r.createElement("div",{className:"page-header"},"Your Salad:"),r.createElement("div",{className:"checkout-wrapper"},r.createElement("div",null,Array.from(o.ingredientsOrder.keys()).map(function(e){return r.createElement(m,{key:e,ingredient:o.ingredients.get(e),isReadOnly:!0})}),r.createElement("div",{className:"total-price"},"Total Price is: $".concat(i))),r.createElement("div",{className:"order-details-wrapper"},r.createElement(h,{fieldName:"Name",onChange:function(e){return t(function(e){return{type:a.SetOrderInfo,payload:{name:e}}}(e))}}),r.createElement(h,{fieldName:"Email",onChange:function(e){return t(function(e){return{type:a.SetOrderInfo,payload:{email:e}}}(e))}}),r.createElement(h,{fieldName:"Additional Notes",onChange:function(e){return t(function(e){return{type:a.SetOrderInfo,payload:{notes:e}}}(e))}}),r.createElement("div",{className:"buttons-wrapper"},r.createElement("span",{className:"button",onClick:function(){return e.goToPrev&&e.goToPrev()}},"Go Back"),r.createElement("span",{className:"button",onClick:function(){return e.setShowModal(!0)}},"Order")))))},N=t(6),O=t(7),b=t(9),w=t(8),y=t(10),C=(t(19),function(e){function n(){var e,t;Object(N.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(b.a)(this,(e=Object(w.a)(n)).call.apply(e,[this].concat(r)))).handleClose=function(){t.props.handleClose&&t.props.handleClose()},t}return Object(y.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){return this.props.show?c.a.createPortal(r.createElement("div",{className:"modal display-block"},r.createElement("div",{className:"modal-main"},this.props.children,r.createElement("div",{className:"close-button",onClick:this.handleClose},"Close"))),document.body):null}}]),n}(r.Component)),k=function(e){var n=e.fieldName,t=e.data;return r.createElement("div",{className:"order-details-field"},r.createElement("span",null,"".concat(n,":")),r.createElement("span",null,"".concat(t)))},j=function(){var e=Object(r.useContext)(u).state;return r.createElement("div",null,"Thank You Very Much For Ordering From Salad Shop. Food Is On its Way...",r.createElement(k,{fieldName:"Total Price",data:v(e.ingredients,e.ingredientsOrder).toString()}),r.createElement(k,{fieldName:"Name",data:e.name}),r.createElement(k,{fieldName:"Email",data:e.email}),r.createElement(k,{fieldName:"Additional Notes",data:e.notes}))};!function(e){e[e.Landing=0]="Landing",e[e.Ingrediants=1]="Ingrediants",e[e.Checkout=2]="Checkout"}(f||(f={}));var S=function(){var e,n=Object(r.useState)(f.Landing),t=Object(l.a)(n,2),a=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(l.a)(i,2),u=c[0],m=c[1],g=(e={},Object(s.a)(e,f.Landing,function(){return r.createElement(d,{goToNext:function(){return o(f.Ingrediants)}})}),Object(s.a)(e,f.Ingrediants,function(){return r.createElement(p,{goToPrev:function(){return o(f.Landing)},goToNext:function(){return o(f.Checkout)}})}),Object(s.a)(e,f.Checkout,function(){return r.createElement(E,{goToPrev:function(){return o(f.Ingrediants)},setShowModal:m})}),e);return r.createElement("div",null,u&&r.createElement(C,{show:!0,handleClose:function(){return o(f.Landing)}},r.createElement(j,null)),g[a]())},I=(t(20),t(4));function T(e,n){switch(n.type){case a.SetIngredients:return Object(I.a)({},e,{ingredients:n.payload.ingredients});case a.AddIngrediantToOrder:var t=n.payload,r=t.itemName,o=t.amount;return Object(I.a)({},e,{ingredientsOrder:new Map(e.ingredientsOrder.set(r,o))});case a.SetOrderInfo:return Object(I.a)({},e,n.payload);default:throw new Error}}var x={email:"",name:"",notes:"",ingredientsOrder:new Map,ingredients:new Map},A=function(){var e=Object(r.useReducer)(T,x),n=Object(l.a)(e,2),t=n[0],a=n[1];return r.createElement("div",{className:"App"},r.createElement("div",{className:"store-header"},r.createElement("img",{src:"".concat(g,"/salad-icon.png"),className:"logo",alt:"sald-icon"}),r.createElement("span",null,"Salad Shop")),r.createElement(u.Provider,{value:{state:t,dispatch:a}},r.createElement(S,null)))},L=(t(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.render(r.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/salad-shop-web",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/salad-shop-web","/service-worker.js");L?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):P(e)})}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.4ca9416a.chunk.js.map