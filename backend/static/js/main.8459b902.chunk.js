(this["webpackJsonptezos-flame-defi"]=this["webpackJsonptezos-flame-defi"]||[]).push([[0],{142:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},231:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(44),s=a.n(i),r=a(18),l=a(25),o=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("div",{className:"header__logo"})})},u=(a(142),function(){return Object(l.jsxs)("div",{className:"base-layout",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"base-layout__main",children:Object(l.jsx)(r.a,{})})]})}),b=a(2),d=a(4),j=a(129),h=a.n(j).a.create({baseURL:"http://93.157.254.203:7778/api",timeout:6e5});var O={get:h.get,delete:h.delete,post:h.post,put:h.put,patch:h.patch,request:h.request};function f(){return O.get("/items")}function p(e){var t=e.search;return O.post("/items",{search:t})}function m(e){var t=e.id;return O.get("/suppliers",{params:{item:t}})}var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(c.useState)(t),i=Object(d.a)(n,2),s=i[0],r=i[1],l=Object(c.useState)(!1),o=Object(d.a)(l,2),u=o[0],j=o[1],h=Object(c.useState)(),O=Object(d.a)(h,2),f=O[0],p=O[1],m=Object(c.useState)(!1),g=Object(d.a)(m,2),v=g[0],x=g[1],S=Object(c.useState)(!1),y=Object(d.a)(S,2),_=y[0],k=y[1],N=Object(c.useState)(""),C=Object(d.a)(N,2),w=C[0],I=C[1],z=Object(c.useState)(0),E=Object(d.a)(z,2),L=E[0],J=E[1],q=function(){return J((function(e){return e+1}))},M=Object(c.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return j(!0),e(Object(b.a)(Object(b.a)({},s),t)).then((function(e){return 200===e.status?p(e.data):(x(!0),I(e.data)),e.data})).catch((function(e){x(!0),I(null===e||void 0===e?void 0:e.message)})).finally((function(){j(!1),k(!0)}))}),[j,e,s,p,x,I]);return Object(c.useEffect)((function(){a&&M()}),[M,a,L]),{fetch:M,data:f,isLoading:u,isDone:_,hasError:v,errorMessage:w,updateParams:r,refetch:q}},v=a(241),x=(a(160),a(242)),S=a(133),y=a(53),_=a(70),k=(a(161),function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(d.a)(a,2),i=n[0],s=n[1],r=Object(c.useCallback)((function(e){s(e.target.value)}),[s]),o=Object(c.useCallback)((function(){t(i)}),[t,i]);return Object(l.jsxs)(x.a,{dir:"horizontal",className:"add-item-form",onFinish:o,children:[Object(l.jsx)(S.a,{value:i,onChange:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u043d\u043a\u043b\u0430\u0442\u0443\u0440\u044b"}),Object(l.jsx)(y.a,{type:"primary",icon:Object(l.jsx)(_.a,{}),htmlType:"submit",className:"add-item-form__button",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})}),N=a(243),C=(a(231),Object(c.memo)((function(e){var t=e.onClose,a=e.visible,c=e.suppliers;return Object(l.jsx)(N.a,{title:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438",placement:"right",onClose:t,visible:a,children:Object(l.jsx)("p",{children:JSON.stringify(c)})})}))),w=function(){var e=g(f),t=g(p),a=g(m),n=Object(c.useState)([]),i=Object(d.a)(n,2),s=i[0],r=i[1],o=Object(c.useState)([]),u=Object(d.a)(o,2),j=u[0],h=u[1],O=Object(c.useState)(!1),x=Object(d.a)(O,2),S=x[0],y=x[1];Object(c.useEffect)((function(){e.fetch().then((function(e){var t=e.categories;t||r([]);var a=t.reduce((function(e,t){var a=t.items.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{key:e.id,category:t.title})})),c={key:"".concat(t.id,"-category"),label:"",category:t.title,children:a};return e.push(c),e}),[]);r(a)}))}),[]);var _=Object(c.useCallback)((function(e){y(!0),a.fetch({id:e}).then((function(e){h(e)}))}),[h,a]),N=Object(c.useCallback)((function(){y(!1)}),[y]),w=Object(c.useCallback)((function(e){t.fetch({search:e}).then((function(e){}))}),[t]);return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsx)("div",{className:"dashboard__form-wrapper",children:Object(l.jsx)(k,{onSubmit:w})}),Object(l.jsx)(v.a,{columns:[{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",dataIndex:"category",key:"category",width:"15%",className:"dashboard__column--bold"},{title:"\u041d\u043e\u043c\u0435\u043d\u043a\u043b\u0430\u0442\u0443\u0440\u0430",dataIndex:"label",key:"label",className:"dashboard__column--bold"},{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432",dataIndex:"activeSuppliers",key:"activeSuppliers",width:"10%",align:"right",className:"dashboard__column--bold"},{title:"\u041d\u0430\u0434\u0435\u0436\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432",dataIndex:"reliableSuppliers",key:"reliableSuppliers",width:"10%",align:"right",className:"dashboard__column--bold"},{title:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432 \u0431\u0435\u0437 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",dataIndex:"unverifiedSuppliers",key:"unverifiedSuppliers",width:"12%",align:"right"},{title:"\u041d\u0435\u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432",dataIndex:"unreliableSupplier",key:"unreliableSupplier",width:"10%",align:"right"}],dataSource:s,pagination:{position:[]},bordered:!0,size:"small",loading:e.isLoading||t.isLoading,rowClassName:function(e){return e.label?"":"dashboard__row--category"},onRow:function(e,t){return{onClick:function(){e.label&&_(e.id)}}},className:"dashboard__table"}),Object(l.jsx)(C,{visible:S,onClose:N,suppliers:j})]})},I=function(){return Object(l.jsx)(r.d,{children:Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(u,{}),children:Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(w,{})})})})},z=a(83);a(237);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(z.a,{children:Object(l.jsx)(I,{})})}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.8459b902.chunk.js.map