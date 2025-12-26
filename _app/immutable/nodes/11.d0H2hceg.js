import{a as N,n as T}from"../chunks/scheduler.DDaOzR71.js";import{S as E,i as F,e as l,s as d,c as s,g as h,a as m,h as _,l as B,j as a,f as i}from"../chunks/index.CXL903QX.js";function U(D){let o,L=`Mezzaluna: The Penultimate
Step`,b,p,I=`So I very quickly fell out of the habit of writing once a week.
Nothing really more to say about that, who’s bad at breaking good habits
anyway. I have gathered you all here today to tell a tale. A journey as
trecherous as any other, riddled with large obstacles and the thickest
of thick fogs. Together with my partner, <a href="https://squi.bid">Squibid</a>, we draw a weapon of
might. Two handles, one blade. But right now, in this very moment, the
blade is dull, having knicks and chips all over. Even so, its potential
shines through and is immediatly recognizable as a noble, tride and
true, mezzaluna. Well gosh, what is a mezzaluna anyhow?`,v,n,H='<img style="width: 30%;" src="/images/mezzaluna.png" alt="An evenly curved blade with wooden handles on both ends"/>',y,w,j=`It’s just a knife, with a curved blade, used to cut herbs,
vegetables, and sometimes pizza. It also seems to be a style of pasta,
simmilar to ravioli (my favorite btw), but that’s unrelated.`,z,r,P="Blogavator Pitch",x,c,q=`But why do <a href="https://squi.bid">Squibid</a> and I have a mezzaluna? Well the more proper way
to put it would be that we have created <a href="https://MezzalunaWM/Mezzaluna">Mezzaluna</a>, a new, <strong>work
in progress</strong>, <a href="https://wayland.freedesktop.org/">Wayland</a> compositor. The focus of the project is to
maintain approachability and customizability as core qualities. This is
accomplished by giving the compositor the best dang gum <a href="https://www.lua.org">Lua</a> API this
world shall ever behold, modeled of the current best Lua API in the
world, <a href="https://neovim.io/">Neovim’s</a>. This in combination with a batteries included, default
configuration allows for a window manager novice to get up and running
fast, given Lua’s incredibly shallow learning curve. In the same way,
the other side of the coin reveals that simply reading a little bit of
the config would allow an intermediate or advanced user to creatively
form the compositor of their dreams, without any of headache that comes
with writing from scratch. Essentially we are giving you a completely
built Lego™️ set to play with, <strong>AND</strong> all the Lego™️’s you
could ever want. Now how about that.`,k,u,A="The Future is Bright",M,f,S=`Development started super strong, with a lot of reasearch, reading
source code, and trying to understand what parts need to go where to
make the thing do the thing. Luckily right now, it kinda does the thing!
As of writing, we have a decent api (though far from complete or final)
allowing the manipulation of window position and size as well as fairly
complex keybinds and some elementary hook based events. The hooks were
actually an idea I thought worked really well in emacs, suggesting its
inclusion as part of the main design philosophy of Mezzaluna. Using this
said API, we have cobbled together a terrible “mimic” of the classic <a href="https://dwm.suckless.org">DWM</a>
workflow, sans the ability to organize windows by tags. I don’t intend
to reveal too much, as that would give me a reason to write more blogs,
but I’m so excited for this project that I could go on and on and
on.`,C,g,W=`If you want to <a href="https://github.com/MezzalunaWM/Mezzaluna">check the project out</a>, you’ll just need <a href="https://gitlab.freedesktop.org/wlroots/wlroots">wlroots-0.19</a>,
<a href="https://www.pixman.org/">pixman</a>, <a href="https://xkbcommon.org/">xkbcommon</a>, and <a href="https://ziglang.org/">Zig 0.15</a>. The default config can be seen within
<code>runtime/share/mezzaluna/init.lua</code>. Feel free to have fun
with it, reach out with questions (hdiambrosio@gmail.com) or just talk about it! And absolutely
check out <a href="https://squi.bid">Squibid’s page</a> for a fine time
reading or exploring C projects you never knew you needed.`;return{c(){o=l("h1"),o.textContent=L,b=d(),p=l("p"),p.innerHTML=I,v=d(),n=l("div"),n.innerHTML=H,y=d(),w=l("p"),w.textContent=j,z=d(),r=l("h2"),r.textContent=P,x=d(),c=l("p"),c.innerHTML=q,k=d(),u=l("h2"),u.textContent=A,M=d(),f=l("p"),f.innerHTML=S,C=d(),g=l("p"),g.innerHTML=W,this.h()},l(e){o=s(e,"H1",{id:!0,"data-svelte-h":!0}),h(o)!=="svelte-93f9jn"&&(o.textContent=L),b=m(e),p=s(e,"P",{"data-svelte-h":!0}),h(p)!=="svelte-1me4v6t"&&(p.innerHTML=I),v=m(e),n=s(e,"DIV",{style:!0,"data-svelte-h":!0}),h(n)!=="svelte-ncebbg"&&(n.innerHTML=H),y=m(e),w=s(e,"P",{"data-svelte-h":!0}),h(w)!=="svelte-afyf9g"&&(w.textContent=j),z=m(e),r=s(e,"H2",{id:!0,"data-svelte-h":!0}),h(r)!=="svelte-g87auz"&&(r.textContent=P),x=m(e),c=s(e,"P",{"data-svelte-h":!0}),h(c)!=="svelte-74wuam"&&(c.innerHTML=q),k=m(e),u=s(e,"H2",{id:!0,"data-svelte-h":!0}),h(u)!=="svelte-eamj6b"&&(u.textContent=A),M=m(e),f=s(e,"P",{"data-svelte-h":!0}),h(f)!=="svelte-16yw2k9"&&(f.innerHTML=S),C=m(e),g=s(e,"P",{"data-svelte-h":!0}),h(g)!=="svelte-14eecs8"&&(g.innerHTML=W),this.h()},h(){_(o,"id","mezzaluna-the-penultimate-step"),B(n,"display","flex"),B(n,"justify-content","center"),_(r,"id","blogavator-pitch"),_(u,"id","the-future-is-bright")},m(e,t){a(e,o,t),a(e,b,t),a(e,p,t),a(e,v,t),a(e,n,t),a(e,y,t),a(e,w,t),a(e,z,t),a(e,r,t),a(e,x,t),a(e,c,t),a(e,k,t),a(e,u,t),a(e,M,t),a(e,f,t),a(e,C,t),a(e,g,t)},p:T,i:T,o:T,d(e){e&&(i(o),i(b),i(p),i(v),i(n),i(y),i(w),i(z),i(r),i(x),i(c),i(k),i(u),i(M),i(f),i(C),i(g))}}}class G extends E{constructor(o){super(),F(this,o,null,U,N,{})}}export{G as component};
