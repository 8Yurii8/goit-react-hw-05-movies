"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{722:function(n,t,c){c.d(t,{DJ:function(){return i},Yx:function(){return u},_6:function(){return a}});var e=c(243),r="https://api.themoviedb.org/3/",o="&api_key=a12547abec0d5f114d2002493fcf19d3",a=function(n,t){return e.Z.get("".concat(r).concat("search/movie?query=").concat(n).concat(t,"&").concat(o))},u=function(n){return e.Z.get("".concat(r).concat(n,"&").concat(o))},i=function(n){return e.Z.get("".concat(r).concat(n,"&").concat(o))}},681:function(n,t,c){c.r(t);var e=c(439),r=c(791),o=c(722),a=c(689),u=c(184);t.default=function(){var n=(0,a.UO)(),t=(0,r.useState)([]),c=(0,e.Z)(t,2),i=c[0],f=c[1];return(0,r.useEffect)((function(){!function(){var t="movie/".concat(n.movieId,"/reviews?language=en-US");(0,o.DJ)(t).then((function(n){var t=n.data;f(t.results)})).catch((function(n){console.error(n),f([])}))}()}),[n.movieId]),(0,u.jsx)("ul",{children:i.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:n.author_details.username}),(0,u.jsx)("p",{children:n.content})]})},n.id)}))})}}}]);
//# sourceMappingURL=681.9e0b5629.chunk.js.map