import{a as x,f as w,n as m,r as O,e as N}from"./scheduler.D4tQEfxT.js";import{S as j,i as P,e as f,c as g,k as E,g as _,f as y,b as l,v as h,q as u,d as I,m as p,w as k,x as C,y as S}from"./index.NO1YNLBk.js";import{d as q,w as D}from"./index.DdhwXfQk.js";const G={gruvbox:{background1:"#3c3836",background2:"#282828",foreground:"#ebdbb2",red:"#fb4934",green:"#b8bb26",yellow:"#fabd2f",blue:"#83a598",purple:"#d3869b",cyan:"#8ec07c",orange:"#fe8019",grey:"#928374"},dracula:{background1:"#44475a",background2:"#282a36",foreground:"#f8f8f2",red:"#ff5555",green:"#50fa7b",yellow:"#f1fa8c",blue:"#6272a4",purple:"#ffb86c",cyan:"#8be9fd",orange:"#ffb86c",grey:"#6272a4"},tokyo_night:{background1:"#1a1b26",background2:"#1f2335",foreground:"#a9b1d6",red:"#f7768e",green:"#9ece6a",yellow:"#e0af68",blue:"#7aa2f7",purple:"#bb9af7",cyan:"#73daca",orange:"#ff9e64",grey:"#a9b1d6"}},T=D("gruvbox"),L=q(T,r=>G[r]);function $(r){let e,a,d="Gruvbox",t,c="Dracula",n,i="Tokyo-Night",b,v;return{c(){e=f("select"),a=f("option"),a.textContent=d,t=f("option"),t.textContent=c,n=f("option"),n.textContent=i,this.h()},l(s){e=g(s,"SELECT",{style:!0,class:!0});var o=E(e);a=g(o,"OPTION",{id:!0,class:!0,"data-svelte-h":!0}),_(a)!=="svelte-rv1l6r"&&(a.textContent=d),t=g(o,"OPTION",{id:!0,class:!0,"data-svelte-h":!0}),_(t)!=="svelte-tafl5e"&&(t.textContent=c),n=g(o,"OPTION",{id:!0,class:!0,"data-svelte-h":!0}),_(n)!=="svelte-eggm1l"&&(n.textContent=i),o.forEach(y),this.h()},h(){l(a,"id","gruvbox"),a.__value="gruvbox",h(a,a.__value),l(a,"class","svelte-jiyd0g"),l(t,"id","dracula"),t.__value="dracula",h(t,t.__value),l(t,"class","svelte-jiyd0g"),l(n,"id","tokyo_night"),n.__value="tokyo_night",h(n,n.__value),l(n,"class","svelte-jiyd0g"),u(e,"--background1",r[1].background1),u(e,"--foreground",r[1].foreground),u(e,"--red",r[1].red),l(e,"class","svelte-jiyd0g"),r[0]===void 0&&w(()=>r[2].call(e))},m(s,o){I(s,e,o),p(e,a),p(e,t),p(e,n),k(e,r[0],!0),b||(v=[C(e,"change",r[2]),C(e,"change",r[3])],b=!0)},p(s,[o]){o&2&&u(e,"--background1",s[1].background1),o&2&&u(e,"--foreground",s[1].foreground),o&2&&u(e,"--red",s[1].red),o&1&&k(e,s[0])},i:m,o:m,d(s){s&&y(e),b=!1,O(v)}}}function z(r,e,a){let d;N(r,L,i=>a(1,d=i));let t="gruvbox";function c(){t=S(this),a(0,t)}return[t,d,c,()=>T.update(()=>t)]}class H extends j{constructor(e){super(),P(this,e,z,$,x,{})}}export{H as T,L as c};