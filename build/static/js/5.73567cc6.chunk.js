(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{44:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3dTSP"}},45:function(e,t,c){e.exports={item:"QuoteItem_item__1z3Yc"}},46:function(e,t,c){e.exports={list:"QuoteList_list__20kuC",sorting:"QuoteList_sorting__1uqru"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(44),r=c.n(o),u=c(1),d=function(){return Object(u.jsxs)("div",{className:r.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(i.b,{className:"btn",to:"new-quote",children:"Add a Quote"})]})},a=c(45),j=c.n(a),l=function(e){return Object(u.jsxs)("li",{className:j.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:"".concat(e.text.slice(0,30),"...")})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(i.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=c(46),h=c.n(b),x=function(e){var t,c,i=Object(n.g)(),o=Object(n.h)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:h.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){i.push("/quotes?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:h.a.list,children:d.map((function(e){return Object(u.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},O=c(14),f=c(35),m=c(36);t.default=Object(n.k)((function(){var e=Object(f.a)(m.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[]),"pending"==c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(O.a,{})}):c==i?Object(u.jsx)("div",{className:"centered focused",children:i}):"completed"!=c||n&&0!=n.length?Object(u.jsx)("div",{children:Object(u.jsx)(x,{quotes:n})}):Object(u.jsx)("div",{children:Object(u.jsx)(d,{})})}))}}]);
//# sourceMappingURL=5.73567cc6.chunk.js.map