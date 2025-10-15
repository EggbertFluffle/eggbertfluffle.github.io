import{a as W,n as P}from"../chunks/scheduler.DDaOzR71.js";import{S as G,i as K,e as s,s as l,c as i,g as o,a as r,h as x,l as J,j as a,f as n}from"../chunks/index.CXL903QX.js";function X(Q){let p,q="Oh Zig my Beloved",C,f,A=`For a while now, I have been learning the deep intricacies of C++.
The more I learn about the language, the faster I see that I will never
know anywhere close to all of it until I embody the life of <a href="https://www.youtube.com/channel/UCxHAlbZQNFU2LgEtiqd2Maw">Jason
Turner</a>. I don’t expect to know <strong>all</strong> of any language
really, but in my struggle with C++ (<em>which I still hold very near
and dear to my heart</em>), there was one thing that I just could not
tolerate: the tooling. The lack of official tooling makes the language
harder to use since building a C++ project is only simple if you just
press play in VS Code.`,I,m,F=`Without hand holding, you need to figure out how you’re going to
include libraries, pick a compiler to use, think about a build system,
worry about cross compilation etc. For <a href="https://github.com/EggbertFluffle/beepboop.nvim">BeepBoop.nvim</a>
this wasn’t something I wanted to tackle so I needed a solution to a
couple of problems. I need a cross compilable library that would allow
me to write cross compilable C++ with it.`,T,g,U=`Now I will admit, that at this point I wasn’t the most comfortable
with C++ and its convoluted ecosystem, but in my defense, I wanted to
build a companion binary to beepboop.nvim, not wrangle with C++
annoyances. This is when the idea of approaching with other languages
came to mind, and there were two options that made sense to me: Rust and
Zig.`,_,c,B="The Start of an Era",k,h,S='<img style="width: 15%" src="/images/zig_logo.png" alt="Zig logo"/>',L,b,E=`The choice boiled down to, Zig has a cooler logo, and the drama
around Rust is annoying, so I chose Zig, and what a good decision that
turned out to be. I had heard of the language as a recommendation from a
friend at first, but the buzz kept buzzing in my feed so I caved and
started the tutorial hell, which didn’t last long. This is because
knowing systems languages already makes Zig just seem like convenience
over magic, which I prefer. The main attractions for me at the time was
really straightforward cross compilation. Unfortunately, it wasn’t all
on easy street, the native zig package manager is very heavily in
development right now, and prompted me to look for other options, which
led me to land on a quite magic discovery, their “translate c”
feature.`,j,y,V=`I figured there would be far more C libraries for cross platform
audio playing than native Zig ones, so I found a quite popular option,
miniaudio.h, and simply translated it into Zig for me to use to my
heart’s content. This was nearly painless (I understand now that it is
possible to not even translate the C myself, and include the translation
in the build file). From here the rest of the application was a simple
model of the logic I had in the C++ version, but with a lot more error
checking courtesy of Zig.`,H,u,D="The Ugly",Z,v,N=`Zig is really exciting, and I find learning about their design
decisions to be a lot of fun. For example, one of Zig’s defining
qualities is the explicit use of allocators throughout the code, instead
of just calling any old allocator from the system. This was already
true, but recently, Zig has been trying to steer away from what they
called “managed” allocation, over to “unmanaged” allocation. The
difference lies in when the allocator is given to the data structure,
either at initialization of the structure of for each allocation made by
it.`,M,d,O=`<pre class="sourceCode zig"><code class="sourceCode zig"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co">// Managed ArrayList</span></span>
<span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabindex="-1"></a><span class="at">const</span> arr <span class="op">=</span> std<span class="op">.</span>ArrayList(<span class="dt">i32</span>)<span class="op">.</span>init(std<span class="op">.</span>heap<span class="op">.</span>page_allocator);</span>
<span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabindex="-1"></a><span class="cf">try</span> arr<span class="op">.</span>append(<span class="dv">32</span>);</span>
<span id="cb1-4"><a href="#cb1-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb1-5"><a href="#cb1-5" aria-hidden="true" tabindex="-1"></a><span class="co">// Unamanaged ArrayList</span></span>
<span id="cb1-6"><a href="#cb1-6" aria-hidden="true" tabindex="-1"></a><span class="at">const</span> arr <span class="op">=</span> std<span class="op">.</span>ArrayList(<span class="dt">i32</span>)<span class="op">.</span>init();</span>
<span id="cb1-7"><a href="#cb1-7" aria-hidden="true" tabindex="-1"></a><span class="cf">try</span> arr<span class="op">.</span>append(<span class="dv">32</span><span class="op">,</span> std<span class="op">.</span>heap<span class="op">.</span>page_allocator);</span></code></pre>`,z,w,R=`The unmanaged approach is something I’m not used to, but willing to
try out. But as the header suggests, this is about the ugly. Although
the error handling is comprehensive, I find when I just want to crank
out some code to solve a problem, or for <a href="https://adventofcode.com">Advent of Code</a>, it just gets in the
way. In the end this is a design decision so that Zig can be as error
prone as possible, among a plethora of other measures, just me being
picking. Ok enough waffling.`;return{c(){p=s("h1"),p.textContent=q,C=l(),f=s("p"),f.innerHTML=A,I=l(),m=s("p"),m.innerHTML=F,T=l(),g=s("p"),g.textContent=U,_=l(),c=s("h2"),c.textContent=B,k=l(),h=s("div"),h.innerHTML=S,L=l(),b=s("p"),b.textContent=E,j=l(),y=s("p"),y.textContent=V,H=l(),u=s("h2"),u.textContent=D,Z=l(),v=s("p"),v.textContent=N,M=l(),d=s("div"),d.innerHTML=O,z=l(),w=s("p"),w.innerHTML=R,this.h()},l(e){p=i(e,"H1",{id:!0,"data-svelte-h":!0}),o(p)!=="svelte-uanao7"&&(p.textContent=q),C=r(e),f=i(e,"P",{"data-svelte-h":!0}),o(f)!=="svelte-u1yxis"&&(f.innerHTML=A),I=r(e),m=i(e,"P",{"data-svelte-h":!0}),o(m)!=="svelte-1dfxt5b"&&(m.innerHTML=F),T=r(e),g=i(e,"P",{"data-svelte-h":!0}),o(g)!=="svelte-1f1jt1c"&&(g.textContent=U),_=r(e),c=i(e,"H2",{id:!0,"data-svelte-h":!0}),o(c)!=="svelte-amu39q"&&(c.textContent=B),k=r(e),h=i(e,"DIV",{style:!0,"data-svelte-h":!0}),o(h)!=="svelte-1ju9k6w"&&(h.innerHTML=S),L=r(e),b=i(e,"P",{"data-svelte-h":!0}),o(b)!=="svelte-h0z1jp"&&(b.textContent=E),j=r(e),y=i(e,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1b1orgh"&&(y.textContent=V),H=r(e),u=i(e,"H2",{id:!0,"data-svelte-h":!0}),o(u)!=="svelte-15pd8h"&&(u.textContent=D),Z=r(e),v=i(e,"P",{"data-svelte-h":!0}),o(v)!=="svelte-1jyi08i"&&(v.textContent=N),M=r(e),d=i(e,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),o(d)!=="svelte-qshdh6"&&(d.innerHTML=O),z=r(e),w=i(e,"P",{"data-svelte-h":!0}),o(w)!=="svelte-1m9r6n0"&&(w.innerHTML=R),this.h()},h(){x(p,"id","oh-zig-my-beloved"),x(c,"id","the-start-of-an-era"),J(h,"display","flex"),J(h,"justify-content","center"),x(u,"id","the-ugly"),x(d,"class","sourceCode"),x(d,"id","cb1")},m(e,t){a(e,p,t),a(e,C,t),a(e,f,t),a(e,I,t),a(e,m,t),a(e,T,t),a(e,g,t),a(e,_,t),a(e,c,t),a(e,k,t),a(e,h,t),a(e,L,t),a(e,b,t),a(e,j,t),a(e,y,t),a(e,H,t),a(e,u,t),a(e,Z,t),a(e,v,t),a(e,M,t),a(e,d,t),a(e,z,t),a(e,w,t)},p:P,i:P,o:P,d(e){e&&(n(p),n(C),n(f),n(I),n(m),n(T),n(g),n(_),n(c),n(k),n(h),n(L),n(b),n(j),n(y),n(H),n(u),n(Z),n(v),n(M),n(d),n(z),n(w))}}}class ee extends G{constructor(p){super(),K(this,p,null,X,W,{})}}export{ee as component};
