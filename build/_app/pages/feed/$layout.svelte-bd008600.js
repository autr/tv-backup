import{O as e,S as t,i as n,s,e as a,o as l,c as i,b as r,q as o,f as c,j as d,r as f,u,v as h,C as p,x as g,y as $,D as m,w as x,L as y,B as w,P as b,m as v,M as k,Q as E,G as D,p as I,a as H,g as V,h as j,k as B,H as P,F as _,R as A,t as C,d as M,l as T}from"../../chunks/vendor-decb6ca3.js";import{c as N,s as O,a as R}from"../../chunks/store-abbd76d1.js";import{P as S,u as q,M as F}from"../../chunks/PostText-c3740c1e.js";const G={subscribe:t=>(()=>{const t=e("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}})().page.subscribe(t)};function L(e){let t,n,s;const y=[{index:e[1]},{hidden:e[4]},{focus:e[5]},e[6](e[2])];var w=e[0];function b(e){let t={};for(let n=0;n<y.length;n+=1)t=v(t,y[n]);return{props:t}}return w&&(n=new w(b())),{c(){t=a("section"),n&&l(n.$$.fragment)},l(e){t=i(e,"SECTION",{});var s=r(t);n&&o(n.$$.fragment,s),s.forEach(c)},m(a,l){d(a,t,l),n&&f(n,t,null),e[9](t),s=!0},p(e,[s]){const a=118&s?u(y,[2&s&&{index:e[1]},16&s&&{hidden:e[4]},32&s&&{focus:e[5]},68&s&&h(e[6](e[2]))]):{};if(w!==(w=e[0])){if(n){p();const e=n;g(e.$$.fragment,1,0,(()=>{$(e,1)})),m()}w?(n=new w(b()),l(n.$$.fragment),x(n.$$.fragment,1),f(n,t,null)):n=null}else w&&n.$set(a)},i(e){s||(n&&x(n.$$.fragment,e),s=!0)},o(e){n&&g(n.$$.fragment,e),s=!1},d(s){s&&c(t),n&&$(n),e[9](null)}}}function Q(e,t,n){let s,a;y(e,N,(e=>n(8,a=e))),y(e,O,(e=>n(12,e)));let l,i,r,{component:o}=t,{index:c}=t,{data:d}=t,{keys:f}=t;function u(e){if(!c)return;const t=(null==l?void 0:l.getBoundingClientRect())||{};{null==r&&(r=0),n(4,h=-1*t.y>t.height-r||t.y>window.innerHeight-r);const e=a.center||999999999,s=a.index,l=Math.abs(t.y+t.height/2-window.innerHeight/2);c==s&&l!=e&&k(N,a={center:l,index:c},a),l<e&&s!=c&&(console.log("[PostItem] ✨☯️✨  switching to new centroid:",c),k(N,a={center:l,index:c},a))}}w((async e=>{i=O.subscribe(u),u()})),b((async e=>{i&&await i()}));let h=!0;return e.$$set=e=>{"component"in e&&n(0,o=e.component),"index"in e&&n(1,c=e.index),"data"in e&&n(2,d=e.data),"keys"in e&&n(7,f=e.keys)},e.$$.update=()=>{258&e.$$.dirty&&n(5,s=(null==a?void 0:a.index)==c&&null!=c)},[o,c,d,l,h,s,function(e){let t={};return f.forEach((n=>t[n]=e[n])),t},f,a,function(e){E[e?"unshift":"push"]((()=>{l=e,n(3,l)}))}]}class z extends t{constructor(e){super(),n(this,e,Q,L,s,{component:0,index:1,data:2,keys:7})}}function J(e,t,n){const s=e.slice();return s[15]=t[n],s[17]=n,s}function K(e){let t,n,s=!e[6]&&function(e){let t,n;return t=new z({props:{index:e[17],component:e[0],keys:e[1],data:e[15]}}),{c(){l(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,s){f(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.component=e[0]),2&n&&(s.keys=e[1]),36&n&&(s.data=e[15]),t.$set(s)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}(e);return{c(){s&&s.c(),t=I()},l(e){s&&s.l(e),t=I()},m(e,a){s&&s.m(e,a),d(e,t,a),n=!0},p(e,t){e[6]||s.p(e,t)},i(e){n||(x(s),n=!0)},o(e){g(s),n=!1},d(e){s&&s.d(e),e&&c(t)}}}function U(e){let t,n,s,l;const o=e[9].default,f=D(o,e,e[8],null);let u=e[2].slice(0,e[5]),h=[];for(let a=0;a<u.length;a+=1)h[a]=K(J(e,u,a));const $=e=>g(h[e],1,1,(()=>{h[e]=null}));return{c(){t=a("div"),f&&f.c(),n=H();for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var s=r(t);f&&f.l(s),n=V(s);for(let t=0;t<h.length;t+=1)h[t].l(s);s.forEach(c),this.h()},h(){j(t,"class",s="flex column grow "+e[3]),j(t,"style",e[4])},m(e,s){d(e,t,s),f&&f.m(t,null),B(t,n);for(let n=0;n<h.length;n+=1)h[n].m(t,null);l=!0},p(e,[n]){if(f&&f.p&&256&n&&P(f,o,e,e[8],n,null,null),103&n){let s;for(u=e[2].slice(0,e[5]),s=0;s<u.length;s+=1){const a=J(e,u,s);h[s]?(h[s].p(a,n),x(h[s],1)):(h[s]=K(a),h[s].c(),x(h[s],1),h[s].m(t,null))}for(p(),s=u.length;s<h.length;s+=1)$(s);m()}(!l||8&n&&s!==(s="flex column grow "+e[3]))&&j(t,"class",s),(!l||16&n)&&j(t,"style",e[4])},i(e){if(!l){x(f,e);for(let e=0;e<u.length;e+=1)x(h[e]);l=!0}},o(e){g(f,e),h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)g(h[t]);l=!1},d(e){e&&c(t),f&&f.d(e),_(h,e)}}}function W(e,t,n){let s;y(e,O,(e=>n(12,s=e)));let a,{$$slots:l={},$$scope:i}=t,{component:r}=t,{keys:o}=t,{data:c}=t,{max:d=10}=t,{class:f=""}=t,{style:u=""}=t,h=new Date;function p(e){if(e.rightTop>e.rightHeight-1.5*window.innerHeight){const e=new Date;e-h>500&&(n(5,g+=d),h=e)}}w((async e=>{p(s),a=O.subscribe(p)})),b((async e=>a));let g=d;return e.$$set=e=>{"component"in e&&n(0,r=e.component),"keys"in e&&n(1,o=e.keys),"data"in e&&n(2,c=e.data),"max"in e&&n(7,d=e.max),"class"in e&&n(3,f=e.class),"style"in e&&n(4,u=e.style),"$$scope"in e&&n(8,i=e.$$scope)},e.$$.update=()=>{e.$$.dirty},[r,o,c,f,u,g,undefined,d,i,l]}class X extends t{constructor(e){super(),n(this,e,W,U,s,{component:0,keys:1,data:2,max:7,class:3,style:4})}}function Y(e,t,n){const s=e.slice();return s[13]=t[n],s[15]=n,s}function Z(e){let t,n,s,u,h;return s=new F({props:{file:e[13],paused:!e[9],active:!e[8]}}),{c(){t=a("div"),n=a("a"),l(s.$$.fragment),this.h()},l(e){t=i(e,"DIV",{class:!0});var a=r(t);n=i(a,"A",{class:!0,href:!0,id:!0});var l=r(n);o(s.$$.fragment,l),l.forEach(c),a.forEach(c),this.h()},h(){j(n,"class","b1-solid flex grow w100pc"),j(n,"href",e[10]),j(n,"id",u=e[0]+"-media"),j(t,"class","flex grow"),A(t,"maxw70pc",e[3].length<=2),A(t,"maxw50pc",e[3].length>2)},m(e,a){d(e,t,a),B(t,n),f(s,n,null),h=!0},p(e,a){const l={};8&a&&(l.file=e[13]),512&a&&(l.paused=!e[9]),256&a&&(l.active=!e[8]),s.$set(l),(!h||1024&a)&&j(n,"href",e[10]),(!h||1&a&&u!==(u=e[0]+"-media"))&&j(n,"id",u),8&a&&A(t,"maxw70pc",e[3].length<=2),8&a&&A(t,"maxw50pc",e[3].length>2)},i(e){h||(x(s.$$.fragment,e),h=!0)},o(e){g(s.$$.fragment,e),h=!1},d(e){e&&c(t),$(s)}}}function ee(e){let t,n,s,u,h,y=e[3],w=[];for(let a=0;a<y.length;a+=1)w[a]=Z(Y(e,y,a));const b=e=>g(w[e],1,1,(()=>{w[e]=null}));return u=new S({props:{id:e[0],title:e[1],text:e[2],created:e[4],updated:e[5],original:e[6],index:e[7]}}),{c(){t=a("div");for(let e=0;e<w.length;e+=1)w[e].c();n=H(),s=a("div"),l(u.$$.fragment),this.h()},l(e){t=i(e,"DIV",{id:!0,title:!0,class:!0});var a=r(t);for(let t=0;t<w.length;t+=1)w[t].l(a);n=V(a),s=i(a,"DIV",{class:!0});var l=r(s);o(u.$$.fragment,l),l.forEach(c),a.forEach(c),this.h()},h(){j(s,"class","flex w30pc column b1-solid"),j(t,"id",e[0]),j(t,"title",e[1]),j(t,"class","flex grow wrap mb10"),A(t,"row",!e[11]),A(t,"row-reverse",e[11])},m(e,a){d(e,t,a);for(let n=0;n<w.length;n+=1)w[n].m(t,null);B(t,n),B(t,s),f(u,s,null),h=!0},p(e,[s]){if(1801&s){let a;for(y=e[3],a=0;a<y.length;a+=1){const l=Y(e,y,a);w[a]?(w[a].p(l,s),x(w[a],1)):(w[a]=Z(l),w[a].c(),x(w[a],1),w[a].m(t,n))}for(p(),a=y.length;a<w.length;a+=1)b(a);m()}const a={};1&s&&(a.id=e[0]),2&s&&(a.title=e[1]),4&s&&(a.text=e[2]),16&s&&(a.created=e[4]),32&s&&(a.updated=e[5]),64&s&&(a.original=e[6]),128&s&&(a.index=e[7]),u.$set(a),(!h||1&s)&&j(t,"id",e[0]),(!h||2&s)&&j(t,"title",e[1]),2048&s&&A(t,"row",!e[11]),2048&s&&A(t,"row-reverse",e[11])},i(e){if(!h){for(let e=0;e<y.length;e+=1)x(w[e]);x(u.$$.fragment,e),h=!0}},o(e){w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)g(w[t]);g(u.$$.fragment,e),h=!1},d(e){e&&c(t),_(w,e),$(u)}}}function te(e,t,n){let s,a,{id:l}=t,{title:i}=t,{text:r}=t,{files:o}=t,{created:c}=t,{updated:d}=t,{original:f=""}=t,{index:u}=t,{hidden:h}=t,{focus:p}=t;return e.$$set=e=>{"id"in e&&n(0,l=e.id),"title"in e&&n(1,i=e.title),"text"in e&&n(2,r=e.text),"files"in e&&n(3,o=e.files),"created"in e&&n(4,c=e.created),"updated"in e&&n(5,d=e.updated),"original"in e&&n(6,f=e.original),"index"in e&&n(7,u=e.index),"hidden"in e&&n(8,h=e.hidden),"focus"in e&&n(9,p=e.focus)},e.$$.update=()=>{17&e.$$.dirty&&n(10,s=`/feed/${q.year(c)}/${l}`),128&e.$$.dirty&&n(11,a=u%2==0),8&e.$$.dirty&&o.length},[l,i,r,o,c,d,f,u,h,p,s,a]}class ne extends t{constructor(e){super(),n(this,e,te,ee,s,{id:0,title:1,text:2,files:3,created:4,updated:5,original:6,index:7,hidden:8,focus:9})}}function se(e,t,n){const s=e.slice();return s[10]=t[n],s}function ae(e){let t,n,s,l,o=e[10]+"";return{c(){t=a("a"),n=C(o),s=H(),this.h()},l(e){t=i(e,"A",{class:!0,"svelte:prefetch":!0,href:!0});var a=r(t);n=M(a,o),s=V(a),a.forEach(c),this.h()},h(){j(t,"class","p0-6 plr1 unclickable"),j(t,"svelte:prefetch",""),j(t,"href",l=e[3](e[10])),A(t,"filled",e[1].path==e[3](e[10])||e[1].path+"/all"==e[3](e[10]))},m(e,a){d(e,t,a),B(t,n),B(t,s)},p(e,s){3&s&&o!==(o=e[10]+"")&&T(n,o),3&s&&l!==(l=e[3](e[10]))&&j(t,"href",l),11&s&&A(t,"filled",e[1].path==e[3](e[10])||e[1].path+"/all"==e[3](e[10]))},d(e){e&&c(t)}}}function le(e){let t,n,s,u,h,p=q.posts(e[0],e[1].params.year).years,m=[];for(let a=0;a<p.length;a+=1)m[a]=ae(se(e,p,a));const y=e[5].default,w=D(y,e,e[4],null);return u=new X({props:{data:q.posts(e[0],e[1].params.year).data,keys:e[2],component:ne}}),{c(){t=a("nav");for(let e=0;e<m.length;e+=1)m[e].c();n=H(),w&&w.c(),s=H(),l(u.$$.fragment),this.h()},l(e){t=i(e,"NAV",{class:!0});var a=r(t);for(let t=0;t<m.length;t+=1)m[t].l(a);a.forEach(c),n=V(e),w&&w.l(e),s=V(e),o(u.$$.fragment,e),this.h()},h(){j(t,"class","cmr1 pb2")},m(e,a){d(e,t,a);for(let n=0;n<m.length;n+=1)m[n].m(t,null);d(e,n,a),w&&w.m(e,a),d(e,s,a),f(u,e,a),h=!0},p(e,[n]){if(11&n){let s;for(p=q.posts(e[0],e[1].params.year).years,s=0;s<p.length;s+=1){const a=se(e,p,s);m[s]?m[s].p(a,n):(m[s]=ae(a),m[s].c(),m[s].m(t,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=p.length}w&&w.p&&16&n&&P(w,y,e,e[4],n,null,null);const s={};3&n&&(s.data=q.posts(e[0],e[1].params.year).data),u.$set(s)},i(e){h||(x(w,e),x(u.$$.fragment,e),h=!0)},o(e){g(w,e),g(u.$$.fragment,e),h=!1},d(e){e&&c(t),_(m,e),e&&c(n),w&&w.d(e),e&&c(s),$(u,e)}}}const ie=R.get((e=>"http://localhost:3000/api/autr/items/posts?depth=2"));function re(e,t,n){let s;y(e,G,(e=>n(1,s=e)));let{$$slots:a={},$$scope:l}=t,{data:i}=t;let r=G.subscribe((function(e){e.params.year,e.params.id,e.params.year}));w((async e=>{})),b((async e=>{r&&r()}));return e.$$set=e=>{"data"in e&&n(0,i=e.data),"$$scope"in e&&n(4,l=e.$$scope)},[i,s,["id","created","updated","files","text","title","original"],e=>`/feed/${e}`,l,a]}export default class extends t{constructor(e){super(),n(this,e,re,le,s,{data:0})}}export{ie as load};