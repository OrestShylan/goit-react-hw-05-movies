"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{1236:function(n,t,e){e.d(t,{BG:function(){return o},Bt:function(){return s},Pv:function(){return i},wr:function(){return c},y:function(){return u}});var a=e(1243),r="48978cb53ccabb273ee7577d68beda02";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){return a.Z.get("/trending/all/day?api_key=".concat(r))},i=function(n){return a.Z.get("/search/movie?api_key=".concat(r,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},o=function(n){return a.Z.get("/movie/".concat(n,"?api_key=").concat(r,"&language=en-US"))},u=function(n){return a.Z.get("/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US"))},s=function(n){return a.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US"))}},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var a,r,c,i,o,u=e(9439),s=e(2791),p=e(7689),g=e(7596),l=e(1236),f=e(168),m=e(6444),d=m.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),h=m.ZP.li(r||(r=(0,f.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 72px;\n  margin-right: 16px;\n  max-width: 200px;\n  max-height: 200px;\n"]))),x=m.ZP.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),Z=m.ZP.h4(i||(i=(0,f.Z)(["\n  margin: 0;\n"]))),b=m.ZP.p(o||(o=(0,f.Z)(["\n  margin: 2px 0;\n"]))),v=e(184);function w(){var n=(0,p.UO)().movieId,t=(0,s.useState)([]),e=(0,u.Z)(t,2),a=e[0],r=e[1];return(0,s.useEffect)((function(){l.y(n).then((function(n){var t=n.data;r(t.cast)})).catch((function(n){g.Am.error(n.message)}))}),[n]),(0,v.jsx)(d,{children:a.map((function(n){var t=n.profile_path,e=n.id,a=n.name,r=n.character;return(0,v.jsxs)(h,{children:[(0,v.jsx)(x,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU",alt:a}),(0,v.jsx)(Z,{children:a}),(0,v.jsxs)(b,{children:["Character: ",r]})]},e)}))})}}}]);
//# sourceMappingURL=736.c14b7a54.chunk.js.map