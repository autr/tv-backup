import{S as t,i as e,s as a,e as i,a as s,c as l,b as r,g as n,f as o,h as c,j as d,k as u,n as h,R as p,J as f,K as m,p as $,T as g,t as v,d as y,l as x,o as w,q as b,r as Y,w as I,x as D,y as M}from"./vendor-decb6ca3.js";function k(t){let e,a,s,n,u=!0;return{c(){e=i("video"),this.h()},l(t){e=l(t,"VIDEO",{width:!0,height:!0,src:!0,muted:!0,autoplay:!0,loop:!0,preload:!0,controls:!0,poster:!0,class:!0,title:!0,alt:!0}),r(e).forEach(o),this.h()},h(){c(e,"width",t[9]),c(e,"height",t[10]),e.src!==(a=t[6])&&c(e,"src",a),e.muted=t[2],e.autoplay=t[1],e.loop=t[3],c(e,"preload","auto"),e.controls=!1,c(e,"poster",t[7]),c(e,"class","fill"),c(e,"title",t[11]),c(e,"alt",t[12]),p(e,"hidden",t[8])},m(a,i){d(a,e,i),s||(n=[f(e,"play",t[18]),f(e,"pause",t[18]),f(e,"error",j),f(e,"load",S)],s=!0)},p(t,i){512&i&&c(e,"width",t[9]),1024&i&&c(e,"height",t[10]),64&i&&e.src!==(a=t[6])&&c(e,"src",a),4&i&&(e.muted=t[2]),2&i&&(e.autoplay=t[1]),8&i&&(e.loop=t[3]),128&i&&c(e,"poster",t[7]),2048&i&&c(e,"title",t[11]),4096&i&&c(e,"alt",t[12]),1&i&&u!==(u=t[0])&&e[u?"pause":"play"](),256&i&&p(e,"hidden",t[8])},d(t){t&&o(e),s=!1,m(n)}}}function E(t){let e,a,s,r;return{c(){e=i("img"),this.h()},l(t){e=l(t,"IMG",{width:!0,height:!0,src:!0,class:!0,title:!0,alt:!0}),this.h()},h(){c(e,"width",t[9]),c(e,"height",t[10]),e.src!==(a=t[6])&&c(e,"src",a),c(e,"class","fill"),c(e,"title",t[11]),c(e,"alt",t[12]),p(e,"hidden",t[8])},m(t,a){d(t,e,a),s||(r=[f(e,"error",j),f(e,"load",S)],s=!0)},p(t,i){512&i&&c(e,"width",t[9]),1024&i&&c(e,"height",t[10]),64&i&&e.src!==(a=t[6])&&c(e,"src",a),2048&i&&c(e,"title",t[11]),4096&i&&c(e,"alt",t[12]),256&i&&p(e,"hidden",t[8])},d(t){t&&o(e),s=!1,m(r)}}}function O(t){let e,a,p,f,m,$;let g=(v=t)[14]("image")?E:v[14]("video")?k:void 0;var v;let y=g&&g(t);return{c(){e=i("span"),y&&y.c(),a=s(),p=i("img"),this.h()},l(t){e=l(t,"SPAN",{class:!0,style:!0});var i=r(e);y&&y.l(i),a=n(i),p=l(i,"IMG",{class:!0,width:!0,height:!0,src:!0}),i.forEach(o),this.h()},h(){var a;c(p,"class","hidden w100pc h-auto"),c(p,"width",t[9]),c(p,"height",t[10]),p.src!==(f=t[6])&&c(p,"src",f),c(e,"class",m="block rel w100pc "+t[4]),c(e,"style",$=`\n\t\t${t[5]};\n\t\tline-height: 0px;\n\t\tbackground-color:${(null==(a=t[13])?void 0:a.vibrant)||"#111"};\n\t\t\n\t`)},m(t,i){d(t,e,i),y&&y.m(e,null),u(e,a),u(e,p)},p(t,[a]){var i;y&&y.p(t,a),512&a&&c(p,"width",t[9]),1024&a&&c(p,"height",t[10]),64&a&&p.src!==(f=t[6])&&c(p,"src",f),16&a&&m!==(m="block rel w100pc "+t[4])&&c(e,"class",m),8224&a&&$!==($=`\n\t\t${t[5]};\n\t\tline-height: 0px;\n\t\tbackground-color:${(null==(i=t[13])?void 0:i.vibrant)||"#111"};\n\t\t\n\t`)&&c(e,"style",$)},i:h,o:h,d(t){t&&o(e),y&&y.d()}}}function j(t){}function S(t){}function A(t,e,a){let i,s,l,r,n,o,c,d,{file:u}=e,{format:h}=e,{active:p=!1}=e,{paused:f=!0}=e,{autoplay:m=!1}=e,{muted:$=!0}=e,{loop:g=!0}=e,{class:v=""}=e,{style:y=""}=e,x=!1;function w(t){try{if(b("image")){const t=u.exif[0].ImageSize.split("x");a(9,o=parseInt(t[0])),a(10,c=parseInt(t[1]))}b("video")&&u.ffprobe.streams.forEach((t=>{null!=(null==t?void 0:t.width)&&a(9,o=t.width),null!=(null==t?void 0:t.height)&&a(10,c=t.height)})),d=c/o*100}catch(e){console.error(e)}}const b=t=>-1!=u.mime.indexOf(t);return t.$$set=t=>{"file"in t&&a(16,u=t.file),"format"in t&&a(15,h=t.format),"active"in t&&a(17,p=t.active),"paused"in t&&a(0,f=t.paused),"autoplay"in t&&a(1,m=t.autoplay),"muted"in t&&a(2,$=t.muted),"loop"in t&&a(3,g=t.loop),"class"in t&&a(4,v=t.class),"style"in t&&a(5,y=t.style)},t.$$.update=()=>{65536&t.$$.dirty&&async function(t){if(u){w(),h||a(15,h=`${o}x${c}x95`);const t=u.basename;u.location.name;const e=t.lastIndexOf("."),i=t.slice(0,e),s=t.slice(e),l=u.location.destination,d=l.lastIndexOf("/"),p=l.substring(d+1);a(7,n="/"+p+"/"+i+"."+h+".jpg"),a(6,r="/"+p+"/"+i+s)}}(),65536&t.$$.dirty&&a(11,i=u.title),65536&t.$$.dirty&&a(12,s=u.title),65536&t.$$.dirty&&w(),65536&t.$$.dirty&&a(13,l=function(t){if(!(null==u?void 0:u.vibrant))return{};let e={};for(const[a,i]of Object.entries(u.vibrant))e[a.toLowerCase()]=`rgb(${i.rgb.join(",")})`;return e}())},[f,m,$,g,v,y,r,n,x,o,c,i,s,l,b,h,u,p,function(){f=this.paused,a(0,f)}]}class G extends t{constructor(t){super(),e(this,t,A,O,a,{file:16,format:15,active:17,paused:0,autoplay:1,muted:2,loop:3,class:4,style:5})}}const H=t=>new Date(1e3*t).getFullYear();var N={year:H,posts:(t,e)=>{"all"==e&&(e=null);let a=[];const i=t.filter((t=>{const i=H(t.created);return-1==a.indexOf(i)&&i&&a.push(i),!e||i==parseInt(e)}));return i.sort(((t,e)=>e.created-t.created)),a.sort(((t,e)=>t-e)),a.push("all"),a.reverse(),{years:a,data:i}}};function P(t){let e,a=g(1e3*t[1]).format("YYYY-MM-DD")+"";return{c(){e=v(a)},l(t){e=y(t,a)},m(t,a){d(t,e,a)},p(t,i){2&i&&a!==(a=g(1e3*t[1]).format("YYYY-MM-DD")+"")&&x(e,a)},d(t){t&&o(e)}}}function V(t){return{c:h,l:h,m:h,p:h,d:h}}function q(t){let e;function a(t,e){return t[0]?V:P}let i=a(t),s=i(t);return{c(){s.c(),e=$()},l(t){s.l(t),e=$()},m(t,a){s.m(t,a),d(t,e,a)},p(t,[l]){i===(i=a(t))&&s?s.p(t,l):(s.d(1),s=i(t),s&&(s.c(),s.m(e.parentNode,e)))},i:h,o:h,d(t){s.d(t),t&&o(e)}}}function z(t,e,a){let{relative:i=!1}=e,{format:s="DD-MM-YYYY-HH:mm"}=e,{date:l}=e;return t.$$set=t=>{"relative"in t&&a(0,i=t.relative),"format"in t&&a(2,s=t.format),"date"in t&&a(1,l=t.date)},[i,l,s]}class C extends t{constructor(t){super(),e(this,t,z,q,a,{relative:0,format:2,date:1})}}function F(t){let e,a,h,p,f,m,$,g,k,E;return h=new C({props:{date:t[2]}}),{c(){e=i("div"),a=i("a"),w(h.$$.fragment),p=s(),f=v(t[0]),m=s(),$=v(t[1]),g=s(),k=v(t[3]),this.h()},l(i){e=l(i,"DIV",{class:!0});var s=r(e);a=l(s,"A",{class:!0,href:!0});var c=r(a);b(h.$$.fragment,c),c.forEach(o),p=n(s),f=y(s,t[0]),m=n(s),$=y(s,t[1]),g=n(s),k=y(s,t[3]),s.forEach(o),this.h()},h(){c(a,"class","unclickable"),c(a,"href",t[4]),c(e,"class","p1 flex column")},m(t,i){d(t,e,i),u(e,a),Y(h,a,null),u(e,p),u(e,f),u(e,m),u(e,$),u(e,g),u(e,k),E=!0},p(t,[e]){const i={};4&e&&(i.date=t[2]),h.$set(i),(!E||16&e)&&c(a,"href",t[4]),(!E||1&e)&&x(f,t[0]),(!E||2&e)&&x($,t[1]),(!E||8&e)&&x(k,t[3])},i(t){E||(I(h.$$.fragment,t),E=!0)},o(t){D(h.$$.fragment,t),E=!1},d(t){t&&o(e),M(h)}}}function J(t,e,a){let i,{id:s}=e,{title:l}=e,{text:r}=e,{files:n}=e,{created:o}=e,{updated:c}=e,{original:d=""}=e,{index:u}=e;return t.$$set=t=>{"id"in t&&a(5,s=t.id),"title"in t&&a(0,l=t.title),"text"in t&&a(1,r=t.text),"files"in t&&a(6,n=t.files),"created"in t&&a(2,o=t.created),"updated"in t&&a(7,c=t.updated),"original"in t&&a(3,d=t.original),"index"in t&&a(8,u=t.index)},t.$$.update=()=>{36&t.$$.dirty&&a(4,i=`/feed/${N.year(o)}/${s}`)},[l,r,o,d,i,s,n,c,u]}class K extends t{constructor(t){super(),e(this,t,J,F,a,{id:5,title:0,text:1,files:6,created:2,updated:7,original:3,index:8})}}export{G as M,K as P,N as u};
