"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1236:function(n,e,t){t.d(e,{BG:function(){return o},Bt:function(){return s},Pv:function(){return c},wr:function(){return i},y:function(){return u}});var r=t(1243),a="48978cb53ccabb273ee7577d68beda02";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("/trending/all/day?api_key=".concat(a))},c=function(n){return r.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},o=function(n){return r.Z.get("/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))},u=function(n){return r.Z.get("/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"))},s=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))}},4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i,c,o=t(9439),u=t(2791),s=t(7689),l=t(7596),f=t(1236),g=t(168),p=t(6444),d=p.ZP.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n"]))),h=p.ZP.li(a||(a=(0,g.Z)(["\n  margin-bottom: 20px;\n  padding: 20px 30px;\n  box-shadow: rgba(26, 7, 22, 0.267) 0px 2px 10px 0px;\n  border-radius: 5px;\n  text-align: justify;\n  line-height: 1.5;\n  font-size: 16px;\n"]))),x=p.ZP.h4(i||(i=(0,g.Z)(["\n  text-align: right;\n  margin-right: 100px;\n"]))),m=p.ZP.p(c||(c=(0,g.Z)(["\n  font-size: 24px;\n  color: #2a2a2a;\n"]))),v=t(184);function Z(){var n=(0,s.UO)().movieId,e=(0,u.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,u.useEffect)((function(){f.Bt(n).then((function(n){var e=n.data;a(e.results)})).catch((function(n){l.Am.error(n.message)}))}),[n]),(0,v.jsx)(v.Fragment,{children:0!==r.length?(0,v.jsx)(d,{children:r.map((function(n){return(0,v.jsxs)(h,{children:[(0,v.jsx)("p",{children:n.content}),(0,v.jsx)(x,{children:n.author})]},n.id)}))}):(0,v.jsx)(m,{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=387.0c0abef5.chunk.js.map