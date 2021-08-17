(this["webpackJsonpword-hunt"]=this["webpackJsonpword-hunt"]||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(8),o=t.n(r),i=(t(71),t(41)),s=t.n(i),l=t(53),u=t(30),d=t(4),h=t(137),b=t(134),j=t(37),g=(t(73),t(54)),v=t.n(g),f=t(60),p=t(131),m=t(135),w=t(138),O=(t(92),[{value:"English",label:"en"},{value:"Hindi",label:"hi"},{value:"Spanish",label:"es"},{value:"French",label:"fr"},{value:"Japanese",label:"ja"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Arabic",label:"ar"},{value:"Turkish",label:"tr"}]),x=t(6),k=function(e){var n=e.category,t=e.set_category,a=e.word,c=e.set_word,r=e.light_mode,o=Object(f.a)({palette:{primary:{main:r?"#000":"#fff"},type:r?"light":"dark"}});return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{className:"title",children:a||"Word Head"}),Object(x.jsx)("div",{className:"inputs",children:Object(x.jsxs)(p.a,{theme:o,children:[Object(x.jsx)(m.a,{label:"Search a word",className:"search",value:a,onChange:function(e){return c(e.target.value)}}),Object(x.jsx)(m.a,{className:"select",select:!0,label:"Language",value:n,onChange:function(e){return n=e.target.value,t(n),void c("");var n},helperText:"Please select your currency",children:O.map((function(e){return Object(x.jsx)(w.a,{value:e.label,children:e.value},e.label)}))})]})})]})},y=(t(99),function(e){var n=e.word,t=e.meanings,a=e.category;e.light_mode;return console.log("meanings[0]",t[0]),console.log("word",n),console.log("category",a),Object(x.jsxs)("div",{className:"meaning",children:[t[0]&&n&&"en"===a&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("audio",{src:t[0].phonetics[0]&&t[0].phonetics[0].audio,controls:!0,children:"Your Browser doesn't support audio element."})}),""===n?Object(x.jsx)("span",{className:"sub_title",children:"Start by typing a word in Search."}):t.map((function(e){return e.meanings.map((function(e){return e.definitions.map((function(e){return Object(x.jsxs)("div",{className:"single_mean",children:[Object(x.jsx)("b",{children:e.definition}),Object(x.jsx)("hr",{}),e.example&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Example : "}),e.example]}),e.synonyms&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Synonyms : "}),e.synonyms.map((function(e){return"".concat(e,", ")}))]})]})}))}))}))]})});var S=function(){var e=Object(a.useState)("plane"),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)([]),o=Object(u.a)(r,2),i=o[0],g=o[1],f=Object(a.useState)("en"),p=Object(u.a)(f,2),m=p[0],w=p[1],O=Object(a.useState)(!1),S=Object(u.a)(O,2),N=S[0],_=S[1],W=Object(d.a)({switchBase:{color:j.a[300],"&$checked":{color:j.a[500]},"&$checked + $track":{backgroundColor:j.a[500]}},checked:{},track:{}})(h.a),B=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(m,"/").concat(t));case 3:n=e.sent,g(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return console.log(i),Object(a.useEffect)((function(){B()}),[t,m]),Object(x.jsx)("div",{className:"section ".concat(N?"light_mode":""),children:Object(x.jsxs)(b.a,{maxWidth:"md",className:"container",children:[Object(x.jsxs)("div",{className:"switch_btn",children:[Object(x.jsxs)("span",{children:[N?"Dark":"Light"," Mode"]}),Object(x.jsx)(W,{checked:N,onChange:function(){return _(!N)}})]}),Object(x.jsx)(k,{category:m,set_category:w,word:t,set_word:c,light_mode:N}),i&&Object(x.jsx)(y,{word:t,meanings:i,category:m,light_mode:N})]})})},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");console.log("swUrl",n),N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(n,e)}))}}()},71:function(e,n,t){},73:function(e,n,t){},92:function(e,n,t){},99:function(e,n,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.7ca376c5.chunk.js.map