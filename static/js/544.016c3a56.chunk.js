"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1236:function(n,t,e){e.d(t,{BG:function(){return c},Bt:function(){return s},Pv:function(){return o},wr:function(){return i},y:function(){return u}});var r=e(1243),a="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("/trending/all/day?api_key=".concat(a))},o=function(n){return r.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},c=function(n){return r.Z.get("/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))},u=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))}},4672:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,i,o,c,u=e(7689),s=e(168),p=e(6444),l=e(1087),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),d=p.ZP.li(a||(a=(0,s.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n  }\n"]))),g=p.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),x=p.ZP.p(o||(o=(0,s.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),h=(0,p.ZP)(l.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n"]))),m=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,m.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_name,i=n.poster_path;return(0,m.jsx)(d,{children:(0,m.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(g,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU",alt:a}),(0,m.jsx)(x,{children:null!==r&&void 0!==r?r:a})]})},t)}))})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(9439),a=e(1236),i=e(2791),o=e(4672),c=e(4585),u=e(7398),s=e(184);function p(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],l=(0,i.useState)(null),f=(0,r.Z)(l,2),d=f[0],g=f[1];return(0,i.useEffect)((function(){g(!0),a.wr().then((function(n){var t=n.data;p(t.results),g(!1)})).catch((function(n){console.log(n)}))}),[]),(0,s.jsxs)(u.o,{children:[(0,s.jsx)(u.D,{children:"Trending Movies Today"}),d&&(0,s.jsx)(c.a,{}),(0,s.jsx)(o.O,{movies:e})]})}},7398:function(n,t,e){e.d(t,{D:function(){return u},o:function(){return c}});var r,a,i=e(168),o=e(6444),c=o.ZP.div(r||(r=(0,i.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.h2(a||(a=(0,i.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))}}]);
//# sourceMappingURL=544.016c3a56.chunk.js.map