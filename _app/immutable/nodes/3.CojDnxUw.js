import{s as G,n as S,c as U,o as He}from"../chunks/scheduler.ORCIa6is.js";import{S as J,i as K,e as _,t as D,c as b,a as A,b as N,d as y,g as r,l as v,h as x,j as i,o as Me,s as H,f as M,v as F,w as V,x as W,m as E,B as de,A as ve,n as P,D as ie,y as R,k as q}from"../chunks/index.B12WTwii.js";import{c as Y}from"../chunks/themes.CaVAywru.js";import{T as Ae}from"../chunks/ThemePicker.DwLp4bwj.js";function X(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ie(l){let e,t;return{c(){e=_("p"),t=D(l[0]),this.h()},l(s){e=b(s,"P",{style:!0,class:!0});var a=A(e);t=N(a,l[0]),a.forEach(y),this.h()},h(){r(e,"--x",l[2]+"px"),r(e,"--y",l[3]+"px"),r(e,"--r",l[4]+"deg"),r(e,"--h",l[1]?l[5].red:"inherit"),v(e,"class","svelte-17ku7in")},m(s,a){x(s,e,a),i(e,t)},p(s,[a]){a&1&&Me(t,s[0]),a&4&&r(e,"--x",s[2]+"px"),a&8&&r(e,"--y",s[3]+"px"),a&16&&r(e,"--r",s[4]+"deg"),a&34&&r(e,"--h",s[1]?s[5].red:"inherit")},i:S,o:S,d(s){s&&y(e)}}}function Ee(l,e,t){let s;U(l,Y,g=>t(5,s=g));let{letter:a}=e,{highlighted:u}=e,{settings:m}=e,p,f,w;return He(()=>{t(2,p=Math.floor(Math.random()*m.translationalOffset)-m.translationalOffset/2),t(3,f=Math.floor(Math.random()*m.translationalOffset)-m.translationalOffset/2),t(4,w=Math.floor(Math.random()*m.rotationalOffset)-m.rotationalOffset/2)}),l.$$set=g=>{"letter"in g&&t(0,a=g.letter),"highlighted"in g&&t(1,u=g.highlighted),"settings"in g&&t(6,m=g.settings)},[a,u,p,f,w,s,m]}class Ce extends J{constructor(e){super(),K(this,e,Ee,Ie,G,{letter:0,highlighted:1,settings:6})}}function qe(l){let e,t,s="<",a,u,m,p=">",f,w,g,C="<",T,h,k,c=">",d,n,o,j="<",L,$,B,ue=">",le,ne,z,fe="<",ae,Q,re,ce=">",oe;return{c(){e=_("nav"),t=_("a"),a=D(s),u=_("span"),m=D("WhoAmI"),f=D(p),w=H(),g=_("a"),T=D(C),h=_("span"),k=D("Blog"),d=D(c),n=H(),o=_("a"),L=D(j),$=_("span"),B=D("Community"),le=D(ue),ne=H(),z=_("a"),ae=D(fe),Q=_("span"),re=D("Contact"),oe=D(ce),this.h()},l(O){e=b(O,"NAV",{class:!0});var I=A(e);t=b(I,"A",{href:!0,class:!0});var Z=A(t);a=N(Z,s),u=b(Z,"SPAN",{style:!0});var he=A(u);m=N(he,"WhoAmI"),he.forEach(y),f=N(Z,p),Z.forEach(y),w=M(I),g=b(I,"A",{href:!0,class:!0});var ee=A(g);T=N(ee,C),h=b(ee,"SPAN",{style:!0});var ge=A(h);k=N(ge,"Blog"),ge.forEach(y),d=N(ee,c),ee.forEach(y),n=M(I),o=b(I,"A",{href:!0,class:!0});var te=A(o);L=N(te,j),$=b(te,"SPAN",{style:!0});var pe=A($);B=N(pe,"Community"),pe.forEach(y),le=N(te,ue),te.forEach(y),ne=M(I),z=b(I,"A",{href:!0,class:!0});var se=A(z);ae=N(se,fe),Q=b(se,"SPAN",{style:!0});var me=A(Q);re=N(me,"Contact"),me.forEach(y),oe=N(se,ce),se.forEach(y),I.forEach(y),this.h()},h(){r(u,"color",l[0].green),v(t,"href","#whoAmI"),v(t,"class","svelte-kgfe6f"),r(h,"color",l[0].orange),v(g,"href","#blog"),v(g,"class","svelte-kgfe6f"),r($,"color",l[0].purple),v(o,"href","#community"),v(o,"class","svelte-kgfe6f"),r(Q,"color",l[0].cyan),v(z,"href","#contact"),v(z,"class","svelte-kgfe6f"),v(e,"class","svelte-kgfe6f")},m(O,I){x(O,e,I),i(e,t),i(t,a),i(t,u),i(u,m),i(t,f),i(e,w),i(e,g),i(g,T),i(g,h),i(h,k),i(g,d),i(e,n),i(e,o),i(o,L),i(o,$),i($,B),i(o,le),i(e,ne),i(e,z),i(z,ae),i(z,Q),i(Q,re),i(z,oe)},p(O,[I]){I&1&&r(u,"color",O[0].green),I&1&&r(h,"color",O[0].orange),I&1&&r($,"color",O[0].purple),I&1&&r(Q,"color",O[0].cyan)},i:S,o:S,d(O){O&&y(e)}}}function Se(l,e,t){let s;return U(l,Y,a=>t(0,s=a)),[s]}class De extends J{constructor(e){super(),K(this,e,Se,qe,G,{})}}function _e(l,e,t){const s=l.slice();return s[2]=e[t],s}function be(l,e,t){const s=l.slice();return s[2]=e[t],s}function we(l){let e,t;return e=new Ce({props:{letter:l[2],settings:l[1],highlighted:Le.includes(l[2])}}),{c(){F(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,a){W(e,s,a),t=!0},p:S,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function ke(l){let e,t;return e=new Ce({props:{letter:l[2],settings:l[1],highlighted:Le.includes(l[2])}}),{c(){F(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,a){W(e,s,a),t=!0},p:S,i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){P(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function Ne(l){let e,t,s,a,u,m,p,f,w=X($e),g=[];for(let c=0;c<w.length;c+=1)g[c]=we(be(l,w,c));const C=c=>P(g[c],1,1,()=>{g[c]=null});let T=X(ye),h=[];for(let c=0;c<T.length;c+=1)h[c]=ke(_e(l,T,c));const k=c=>P(h[c],1,1,()=>{h[c]=null});return p=new De({}),{c(){e=_("div"),t=_("h1");for(let c=0;c<g.length;c+=1)g[c].c();s=H(),a=_("br"),u=H();for(let c=0;c<h.length;c+=1)h[c].c();m=H(),F(p.$$.fragment),this.h()},l(c){e=b(c,"DIV",{class:!0});var d=A(e);t=b(d,"H1",{style:!0,class:!0});var n=A(t);for(let o=0;o<g.length;o+=1)g[o].l(n);s=M(n),a=b(n,"BR",{}),u=M(n);for(let o=0;o<h.length;o+=1)h[o].l(n);n.forEach(y),m=M(d),V(p.$$.fragment,d),d.forEach(y),this.h()},h(){r(t,"--foreground",l[0].foreground),v(t,"class","svelte-ez1rf5"),v(e,"class","hero svelte-ez1rf5")},m(c,d){x(c,e,d),i(e,t);for(let n=0;n<g.length;n+=1)g[n]&&g[n].m(t,null);i(t,s),i(t,a),i(t,u);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(t,null);i(e,m),W(p,e,null),f=!0},p(c,[d]){if(d&2){w=X($e);let n;for(n=0;n<w.length;n+=1){const o=be(c,w,n);g[n]?(g[n].p(o,d),E(g[n],1)):(g[n]=we(o),g[n].c(),E(g[n],1),g[n].m(t,s))}for(de(),n=w.length;n<g.length;n+=1)C(n);ve()}if(d&2){T=X(ye);let n;for(n=0;n<T.length;n+=1){const o=_e(c,T,n);h[n]?(h[n].p(o,d),E(h[n],1)):(h[n]=ke(o),h[n].c(),E(h[n],1),h[n].m(t,null))}for(de(),n=T.length;n<h.length;n+=1)k(n);ve()}(!f||d&1)&&r(t,"--foreground",c[0].foreground)},i(c){if(!f){for(let d=0;d<w.length;d+=1)E(g[d]);for(let d=0;d<T.length;d+=1)E(h[d]);E(p.$$.fragment,c),f=!0}},o(c){g=g.filter(Boolean);for(let d=0;d<g.length;d+=1)P(g[d]);h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)P(h[d]);P(p.$$.fragment,c),f=!1},d(c){c&&y(e),ie(g,c),ie(h,c),R(p)}}}let $e="Harrison",ye="DiAmbrosio",Le="aeiouAEIUO";function Pe(l,e,t){let s;return U(l,Y,u=>t(0,s=u)),[s,{translationalOffset:1500,rotationalOffset:720}]}class Be extends J{constructor(e){super(),K(this,e,Pe,Ne,G,{})}}function Oe(l){let e,t,s='&lt;<span class="svelte-19jf4u8">WhoAmI</span>&gt;',a,u,m='I am <em class="svelte-19jf4u8">H<span class="svelte-19jf4u8">a</span>rr<span class="svelte-19jf4u8">i</span>s<span class="svelte-19jf4u8">o</span>n D<span class="svelte-19jf4u8">iA</span>mbr<span class="svelte-19jf4u8">o</span>s<span class="svelte-19jf4u8">io</span></em>, a humble programmer interested in all things related to creative coding, computer graphics, web development, game development, Linux, open source, and much more. I am all self taught, and have found learning about computers to be one of my life&#39;s passions. Familiarizing myself with a few programming languages, I enjoy writing C/C++, TypeScript, and some Java, as well as doing the Advent of Code every year. As of now I am studying Computer Science at Worcester Polytechnic Institute.',p,f,w="Technologies, Dotfiles, and Software I like",g,C,T='<li class="svelte-19jf4u8"><a target="_blank" href="https://github.com/EggbertFluffle/nvim" class="svelte-19jf4u8"><strong class="svelte-19jf4u8">Neovim</strong></a> - Text editor and the only way I can type now. If I need to use another editor vim binds are a requirement, without question. Package management is done with <a href="https://github.com/folke/lazy.nvim" class="svelte-19jf4u8">lazy.nvim</a> which makes the whole configuration process super portable.</li> <li class="svelte-19jf4u8"><a target="_blank" href="https://voidlinux.org/" class="svelte-19jf4u8"><strong class="svelte-19jf4u8">Linux (Void, Debian)</strong></a> - My choice for linux distros. Mostly used out of recommendation (or no other option). As for Void, I do appreciate the minimalism and boot speed. Debian is nice and simple as well, and if not for the outdated repos, it would be my favorite.</li> <li class="svelte-19jf4u8"><a target="_blank" href="https://dwm.suckless.org/" class="svelte-19jf4u8"><strong class="svelte-19jf4u8">dwm</strong></a> - Window manager of choice. Tough, efficient, and I love how the config is written in C. As for complementary programs, the only one that adds any functionality besides comsetics is <a href="https://tools.suckless.org/slstatus/" class="svelte-19jf4u8">slstatus</a>.</li> <li class="svelte-19jf4u8"><a target="_blank" href="https://github.com/saysjonathan/dwm.tmux" class="svelte-19jf4u8"><strong class="svelte-19jf4u8">dwm.tmux</strong></a> - I use tmux for when I&#39;m on my school chromebook or not in a graphical environment with tiling window management. This nice plugin makes it easy to get keybinds similar to dwm and it&#39;s a nice set-and-forget.</li> <li class="svelte-19jf4u8"><a target="_blank" href="https://github.com/tsoding/boomer" class="svelte-19jf4u8"><strong class="svelte-19jf4u8">boomer</strong></a> - A zooming utility for Linux built in Nim. Super satisfying to use and love the easing when zooming. Also, pround to support <a href="https://www.youtube.com/@TsodingDaily" class="svelte-19jf4u8">Tsoding&#39;s videos</a>. Good ol&#39; entertainment.</li>';return{c(){e=_("div"),t=_("h2"),t.innerHTML=s,a=H(),u=_("p"),u.innerHTML=m,p=H(),f=_("h3"),f.textContent=w,g=H(),C=_("ul"),C.innerHTML=T,this.h()},l(h){e=b(h,"DIV",{id:!0,style:!0,class:!0});var k=A(e);t=b(k,"H2",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-71aw4j"&&(t.innerHTML=s),a=M(k),u=b(k,"P",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-1tlwn1u"&&(u.innerHTML=m),p=M(k),f=b(k,"H3",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-1077v72"&&(f.textContent=w),g=M(k),C=b(k,"UL",{class:!0,"data-svelte-h":!0}),q(C)!=="svelte-8upx9d"&&(C.innerHTML=T),k.forEach(y),this.h()},h(){v(t,"class","svelte-19jf4u8"),v(u,"class","svelte-19jf4u8"),v(f,"class","svelte-19jf4u8"),v(C,"class","svelte-19jf4u8"),v(e,"id","whoAmI"),r(e,"--foreground",l[0].foreground),r(e,"--red",l[0].red),r(e,"--green",l[0].green),r(e,"--background2",l[0].background2),r(e,"--yellow",l[0].yellow),r(e,"--orange",l[0].orange),v(e,"class","svelte-19jf4u8")},m(h,k){x(h,e,k),i(e,t),i(e,a),i(e,u),i(e,p),i(e,f),i(e,g),i(e,C)},p(h,[k]){k&1&&r(e,"--foreground",h[0].foreground),k&1&&r(e,"--red",h[0].red),k&1&&r(e,"--green",h[0].green),k&1&&r(e,"--background2",h[0].background2),k&1&&r(e,"--yellow",h[0].yellow),k&1&&r(e,"--orange",h[0].orange)},i:S,o:S,d(h){h&&y(e)}}}function xe(l,e,t){let s;return U(l,Y,a=>t(0,s=a)),[s]}class ze extends J{constructor(e){super(),K(this,e,xe,Oe,G,{})}}function Fe(l){let e,t,s='&lt;<span class="svelte-1wcqpkk">Blog</span>&gt;',a,u,m='<li class="svelte-1wcqpkk">09/08/2024: <a href="/blogs/linux_on_a_laptop_pt2" class="svelte-1wcqpkk">Linux on a Laptop: My Experience (pt.2)</a></li> <li class="svelte-1wcqpkk">06/02/2024: <a href="/blogs/linux_on_a_laptop_pt1" class="svelte-1wcqpkk">Linux on a Laptop: My Experience (pt.1)</a></li> <li class="svelte-1wcqpkk">05/09/2024: <a href="/blogs/minecraft_clone" class="svelte-1wcqpkk">Minecraft Clone (maybe pt.1)</a></li> <li class="svelte-1wcqpkk">03/22/2024: <a href="/blogs/neocities" class="svelte-1wcqpkk">Neocities</a></li> <li class="svelte-1wcqpkk">TT/BB/DDDD: <a href="/blogs/wolfenstein_terminal_raycaster" class="svelte-1wcqpkk">Wolfenstein-style Terminal Raycast Renderer</a></li> <li class="svelte-1wcqpkk">01/14/2024: <a href="/blogs/introduction" class="svelte-1wcqpkk">Introduction</a></li> <li class="svelte-1wcqpkk">10/14/2023: <a href="/blogs/terminal_based_3d_graphics" class="svelte-1wcqpkk">Terminal Based 3D Graphics</a></li>';return{c(){e=_("div"),t=_("h2"),t.innerHTML=s,a=H(),u=_("ul"),u.innerHTML=m,this.h()},l(p){e=b(p,"DIV",{id:!0,style:!0,class:!0});var f=A(e);t=b(f,"H2",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-11pldbm"&&(t.innerHTML=s),a=M(f),u=b(f,"UL",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-133o7xl"&&(u.innerHTML=m),f.forEach(y),this.h()},h(){v(t,"class","svelte-1wcqpkk"),v(u,"class","svelte-1wcqpkk"),v(e,"id","blog"),r(e,"--foreground",l[0].foreground),r(e,"--orange",l[0].orange),r(e,"--background2",l[0].background2),r(e,"--yellow",l[0].yellow),v(e,"class","svelte-1wcqpkk")},m(p,f){x(p,e,f),i(e,t),i(e,a),i(e,u)},p(p,[f]){f&1&&r(e,"--foreground",p[0].foreground),f&1&&r(e,"--orange",p[0].orange),f&1&&r(e,"--background2",p[0].background2),f&1&&r(e,"--yellow",p[0].yellow)},i:S,o:S,d(p){p&&y(e)}}}function Ve(l,e,t){let s;return U(l,Y,a=>t(0,s=a)),[s]}class We extends J{constructor(e){super(),K(this,e,Ve,Fe,G,{})}}function Re(l){let e,t,s='&lt;<span class="svelte-pfrjp5">Contact</span>&gt;',a,u,m='<li class="svelte-pfrjp5">Github: <a href="https://github.com/EggbertFluffle/" class="svelte-pfrjp5">EggbertFluffle</a></li> <li class="svelte-pfrjp5">E-Mail (personal): hdiambrosio@gmail.com</li> <li class="svelte-pfrjp5">E-Mail (school): hadiambrosio@wpi.edu</li> <li class="svelte-pfrjp5">LinkedIn: <a href="https://www.linkedin.com/in/harrison-diambrosio-505443229/" class="svelte-pfrjp5">Harrison DiAmbrosio</a></li>';return{c(){e=_("div"),t=_("h2"),t.innerHTML=s,a=H(),u=_("ul"),u.innerHTML=m,this.h()},l(p){e=b(p,"DIV",{id:!0,style:!0,class:!0});var f=A(e);t=b(f,"H2",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-15ugsvk"&&(t.innerHTML=s),a=M(f),u=b(f,"UL",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-xkdt04"&&(u.innerHTML=m),f.forEach(y),this.h()},h(){v(t,"class","svelte-pfrjp5"),v(u,"class","svelte-pfrjp5"),v(e,"id","contact"),r(e,"--foreground",l[0].foreground),r(e,"--orange",l[0].orange),r(e,"--background2",l[0].background2),r(e,"--yellow",l[0].yellow),r(e,"--cyan",l[0].cyan),v(e,"class","svelte-pfrjp5")},m(p,f){x(p,e,f),i(e,t),i(e,a),i(e,u)},p(p,[f]){f&1&&r(e,"--foreground",p[0].foreground),f&1&&r(e,"--orange",p[0].orange),f&1&&r(e,"--background2",p[0].background2),f&1&&r(e,"--yellow",p[0].yellow),f&1&&r(e,"--cyan",p[0].cyan)},i:S,o:S,d(p){p&&y(e)}}}function Ge(l,e,t){let s;return U(l,Y,a=>t(0,s=a)),[s]}class Ue extends J{constructor(e){super(),K(this,e,Ge,Re,G,{})}}function Te(l,e,t){const s=l.slice();return s[2]=e[t],s}function je(l){let e,t=l[2]+"",s,a,u="-";return{c(){e=_("a"),s=D(t),a=_("span"),a.textContent=u,this.h()},l(m){e=b(m,"A",{href:!0,class:!0});var p=A(e);s=N(p,t),p.forEach(y),a=b(m,"SPAN",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-1mhqhzx"&&(a.textContent=u),this.h()},h(){v(e,"href","https://www.youtube.com/@"+l[2]),v(e,"class","svelte-ee3psd"),v(a,"class","favorites-delimiter svelte-ee3psd")},m(m,p){x(m,e,p),i(e,s),x(m,a,p)},p:S,d(m){m&&(y(e),y(a))}}}function Je(l){let e,t,s='&lt;<span class="svelte-ee3psd">Community</span>&gt;',a,u,m="Media",p,f,w,g='<a href="https://lukesmith.xyz/" class="svelte-ee3psd">LukeSmith</a>',C,T,h="Favorites",k,c,d='<li class="svelte-ee3psd"><a href="https://lunarflamestudios.com/" class="svelte-ee3psd">LunarFlame Studios</a> - Independant game dev team responsible for  the endlessly entertaining <a href="https://lunarflamestudios.com/pages/project-leo.php" class="svelte-ee3psd">Project Leo</a>. A fantastic game and team.</li> <li class="svelte-ee3psd"><a href="https://squi.bid" class="svelte-ee3psd">Squibid</a> - Personal projects, blogs from the one, the only, Squibid.</li>',n=X(l[1]),o=[];for(let j=0;j<n.length;j+=1)o[j]=je(Te(l,n,j));return{c(){e=_("div"),t=_("h2"),t.innerHTML=s,a=H(),u=_("h3"),u.textContent=m,p=H(),f=_("p");for(let j=0;j<o.length;j+=1)o[j].c();w=_("span"),w.innerHTML=g,C=H(),T=_("h3"),T.textContent=h,k=H(),c=_("ul"),c.innerHTML=d,this.h()},l(j){e=b(j,"DIV",{id:!0,style:!0,class:!0});var L=A(e);t=b(L,"H2",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-10vm07f"&&(t.innerHTML=s),a=M(L),u=b(L,"H3",{style:!0,class:!0,"data-svelte-h":!0}),q(u)!=="svelte-ij1crh"&&(u.textContent=m),p=M(L),f=b(L,"P",{class:!0});var $=A(f);for(let B=0;B<o.length;B+=1)o[B].l($);w=b($,"SPAN",{class:!0,"data-svelte-h":!0}),q(w)!=="svelte-1v9y2mu"&&(w.innerHTML=g),$.forEach(y),C=M(L),T=b(L,"H3",{class:!0,"data-svelte-h":!0}),q(T)!=="svelte-1jbdk4p"&&(T.textContent=h),k=M(L),c=b(L,"UL",{class:!0,"data-svelte-h":!0}),q(c)!=="svelte-1ckh7i0"&&(c.innerHTML=d),L.forEach(y),this.h()},h(){v(t,"class","svelte-ee3psd"),r(u,"margin-top","0px"),v(u,"class","svelte-ee3psd"),v(w,"class","svelte-ee3psd"),v(f,"class","svelte-ee3psd"),v(T,"class","svelte-ee3psd"),v(c,"class","svelte-ee3psd"),v(e,"id","community"),r(e,"--foreground",l[0].foreground),r(e,"--orange",l[0].orange),r(e,"--background2",l[0].background2),r(e,"--yellow",l[0].yellow),r(e,"--purple",l[0].purple),v(e,"class","svelte-ee3psd")},m(j,L){x(j,e,L),i(e,t),i(e,a),i(e,u),i(e,p),i(e,f);for(let $=0;$<o.length;$+=1)o[$]&&o[$].m(f,null);i(f,w),i(e,C),i(e,T),i(e,k),i(e,c)},p(j,[L]){if(L&2){n=X(j[1]);let $;for($=0;$<n.length;$+=1){const B=Te(j,n,$);o[$]?o[$].p(B,L):(o[$]=je(B),o[$].c(),o[$].m(f,w))}for(;$<o.length;$+=1)o[$].d(1);o.length=n.length}L&1&&r(e,"--foreground",j[0].foreground),L&1&&r(e,"--orange",j[0].orange),L&1&&r(e,"--background2",j[0].background2),L&1&&r(e,"--yellow",j[0].yellow),L&1&&r(e,"--purple",j[0].purple)},i:S,o:S,d(j){j&&y(e),ie(o,j)}}}function Ke(l,e,t){let s;return U(l,Y,u=>t(0,s=u)),[s,["theprimeagen","ThePrimeTimeagen","TsodingDaily","lowlevellearning","DistroTube","Fireship","SebastianLague","Kofybrek","jdh","TheCodingTrain","ItzBirb2"]]}class Ye extends J{constructor(e){super(),K(this,e,Ke,Je,G,{})}}function Qe(l){let e,t,s,a,u,m,p="<h1>PASSWORD</h1>",f,w,g,C,T,h,k,c,d;return t=new Ae({}),a=new Be({}),w=new ze({}),C=new We({}),h=new Ye({}),c=new Ue({}),{c(){e=_("main"),F(t.$$.fragment),s=H(),F(a.$$.fragment),u=H(),m=_("a"),m.innerHTML=p,f=H(),F(w.$$.fragment),g=H(),F(C.$$.fragment),T=H(),F(h.$$.fragment),k=H(),F(c.$$.fragment),this.h()},l(n){e=b(n,"MAIN",{style:!0,class:!0});var o=A(e);V(t.$$.fragment,o),s=M(o),V(a.$$.fragment,o),u=M(o),m=b(o,"A",{href:!0,style:!0,"data-svelte-h":!0}),q(m)!=="svelte-1gn6rcf"&&(m.innerHTML=p),f=M(o),V(w.$$.fragment,o),g=M(o),V(C.$$.fragment,o),T=M(o),V(h.$$.fragment,o),k=M(o),V(c.$$.fragment,o),o.forEach(y),this.h()},h(){v(m,"href","/FIRST_EVER_HIGH_OCTANTE_TECHNICAL_PROFICIENCY_CHALLENGE"),r(m,"font-size","10em"),r(m,"color","white"),r(m,"text-align","center"),r(e,"--background1",l[0].background1),v(e,"class","svelte-1vhtni8")},m(n,o){x(n,e,o),W(t,e,null),i(e,s),W(a,e,null),i(e,u),i(e,m),i(e,f),W(w,e,null),i(e,g),W(C,e,null),i(e,T),W(h,e,null),i(e,k),W(c,e,null),d=!0},p(n,[o]){(!d||o&1)&&r(e,"--background1",n[0].background1)},i(n){d||(E(t.$$.fragment,n),E(a.$$.fragment,n),E(w.$$.fragment,n),E(C.$$.fragment,n),E(h.$$.fragment,n),E(c.$$.fragment,n),d=!0)},o(n){P(t.$$.fragment,n),P(a.$$.fragment,n),P(w.$$.fragment,n),P(C.$$.fragment,n),P(h.$$.fragment,n),P(c.$$.fragment,n),d=!1},d(n){n&&y(e),R(t),R(a),R(w),R(C),R(h),R(c)}}}function Xe(l,e,t){let s;return U(l,Y,a=>t(0,s=a)),[s]}class lt extends J{constructor(e){super(),K(this,e,Xe,Qe,G,{})}}export{lt as component};