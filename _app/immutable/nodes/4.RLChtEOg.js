import{a as tl,n as rn}from"../chunks/scheduler.DDaOzR71.js";import{S as el,i as al,e as a,s as y,t as i,c as n,g as s,a as w,b as _,d as o,f as r,h as e,j as u,k as t}from"../chunks/index.CXL903QX.js";function nl($s){let S,dn="Advent of Code: How its Going",ye,N,pn="First things first",we,q,un=`As of writing this, day 19 is unlocking sortly (as in 1 minute) BUT,
I’m not going to do it. You might be wondering, “All I hear this kid
blad about is Advent of Code.”, “Why isn’t he doing it all of the
sudden?”. In short, I’m washed. The long answer is that day 16 was no
clicking for me, and still doesn’t really, so it’s making doing the
other days more difficult. I also want to enjoy my winter vacationa and
see friends while I still can. One thing That I would like to mention is
that I;m not using zig.`,Ae,T,hn="Still washed",Pe,j,cn=`I was able to do part 1 and 2 for day 1 in zig, but then day 2 gave
me some challenges, and with everything else going on at school, I
didn’t really have the time to justify doing Advent of Code twice a day.
I still think Zig will be worth learning some day, but I also want to
become even more familliar with C++ and I’ve been in the “really learn
the tools” mood, so I’ve been browsing cppman and watching C+ YouTubers
a lot. As of now, I have 2 stars on every day up until day 16 where I
have 1 start for day 16 and 17. These days both seem pretty tough, I
don’t even know how to approach part 2 of day 16 and part 2 day 17 seems
a little more doable but I really just don’t have the motivation without
having day 16 complete. Nonetheless, I still want to keep working
towards getting those stars, and learning about C++ and good programming
habits on the way. Two things I found out about myself is that I
<em>DON’T</em> work well at night, at all. I found myself frequently
staying up for the Advent of Code drop, only to get stuck on part 2, go
to bed dissappointed and then solve it in as little as 30 minutes when I
woke up the next day. I am not a night person and I destroyed my sleep
schedule which I previously took a great amount of pride in. Second,
talking to myself out loud makes it way easier to program efficiently.
It may just be my innner wannabe YouTuber, but exsplaining things out
loud to myself as I solve the problem makes it easier to stay focused
and to make sense of a the problem (also whiteboarding is a huge
help).`,Se,H,fn="The C++ Language",Ne,O,vn=`Beyond those things about myself there is also A lot about the C++
programming language that I’m learning too. Just listed as some
unorganized tips:`,Te,I,xn=`Swapping
two variables integer values without a temporary:`,He,R,Cn=`If you want to swap two integer values without a temporary variable,
you can actually make use of bitwise XOR. Say I have two variables
<code>int a = 3;</code> and <code>int b = 6;</code>. In order to swap I
first get the XOR of b and a and store into a like so:
<code>a = a ^ b;</code>. Then, XOR a and b into b, this should give the
previous value of a into b. Finally, XOR the two values again but store
into a. This should look something like this.`,Ie,L,be,d,D,bn='<a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="pp">#include </span><span class="im">&lt;stdio.h&gt;</span>',Re,X,mn='<a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>',De,A,Y,F,gn="int",Xe,G,_n="()",Ye,me,yn="{",Fe,Ge,U,wn='<a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>    ',Ue,B,An='<a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="dt">int</span> a <span class="op">=</span> <span class="dv">3</span><span class="op">;</span>',Be,V,Pn='<a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>    <span class="dt">int</span> b <span class="op">=</span> <span class="dv">6</span><span class="op">;</span>',Ve,W,Sn='<a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>',We,J,Nn='<a href="#cb1-8" aria-hidden="true" tabindex="-1"></a>    printf<span class="op">(</span><span class="st">&quot;a: </span><span class="sc">%d</span><span class="st">, b: </span><span class="sc">%d\\n</span><span class="st">&quot;</span><span class="op">,</span> a<span class="op">,</span> b<span class="op">);</span> <span class="co">// a: 3, b: 6</span>',Je,K,Tn='<a href="#cb1-9" aria-hidden="true" tabindex="-1"></a>',Ke,Z,Hn='<a href="#cb1-10" aria-hidden="true" tabindex="-1"></a>    a <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',Ze,Q,In='<a href="#cb1-11" aria-hidden="true" tabindex="-1"></a>    b <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',Qe,$,Ln='<a href="#cb1-12" aria-hidden="true" tabindex="-1"></a>    a <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',$e,tt,Mn='<a href="#cb1-13" aria-hidden="true" tabindex="-1"></a>',ta,et,kn='<a href="#cb1-14" aria-hidden="true" tabindex="-1"></a>    printf<span class="op">(</span><span class="st">&quot;a: </span><span class="sc">%d</span><span class="st">, b: </span><span class="sc">%d\\n</span><span class="st">&quot;</span><span class="op">,</span> a<span class="op">,</span> b<span class="op">);</span> <span class="co">// a: 6, b: 3</span>',ea,at,zn='<a href="#cb1-15" aria-hidden="true" tabindex="-1"></a>',aa,nt,En='<a href="#cb1-16" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> <span class="dv">0</span><span class="op">;</span>',na,st,qn='<a href="#cb1-17" aria-hidden="true" tabindex="-1"></a><span class="op">}</span>',Le,M,jn=`Asserts (wow how did
i not use these sooner)`,Me,lt,On=`An assert is <em>EXTREMELY</em> simple to understand. It is a macro
from c and there are two types, static_asserts and good ol’ regular,
run-of-the-mill, ordinary, plain, reliable, asserts.
<code>assert()</code> is for ensuring the properties of values during
runtime, and <code>static_assert()</code> is for checking the properties
of values and types and stuff during compile-time (unfortunately, i have
not delved too deep into compile-time stuff so i can’t speak well to
static assert). What makes assert useful is that, instead of printing
values to the console and trying to piece together what is wrong with
the values in the program, <code>assert()</code> will halt the entire
program if the boolean expression passed returns false. What makes this
even more <em>extra special</em> is that it GIVE YOU A LINE NUMBER! Gone
are the days of being sad when gdb decides to play hard to get with it’s
line numbers for segfaults. Not only can assert garountee some state of
your program, but it’s also far easier to track down the illegal state
if it arises! I certainly see myself taking a closer look at
<code>static_assert()</code> when I find the need to and throwing
<code>assert()</code> calls all over my future code. This also seems to
be a common thing in many languages so I’m happy I understand what
asserts are for now.`,ke,k,Rn="Templates are Magic",ze,it,Dn=`I still have <em>a lot</em> to learn about C++ templating. There
seems to be a lot more to it that I dont currently understand. I only
just learned that <code>template &lt;typename T&gt;</code> and
<code>template &lt;class T&gt;</code> are subtly different and that you
can extract a lot more from datatypes than I previously relaized. Also
it’s so strange that the code regarding templates looks almost like
standard C++, but it all happens at compile time! The reason I had to
dig so far into templates is because as I was Advent of Code, I was
putting together a useful utilities header file that proved extremely
useful for patters in parsing inputs that happened often, or making a
function that printed all the values in a vector, instead of me having
to spend time typing a for loop with all the necessary line breaks and
commas or however I wanted to format the output. I also wanted some
funcitons like the higer-order array fucntions in JavaScript (map,
for_each, every, some, filter and reduce). Some are present in the C++
algorithm header but I don’t really care for the always defining the
start and end of an interator syntax that C++ uses. I sort of wish that
most of these functions were overloaded to just take a container that
has an iterator, and just run the spesified method on the start to the
end. For example:`,Ee,z,ge,f,ot,Xn='<a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="pp">#include </span><span class="im">&lt;algorithm&gt;</span>',sa,rt,Yn='<a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="pp">#include </span><span class="im">&lt;iostream&gt;</span>',la,dt,Fn='<a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="pp">#include </span><span class="im">&lt;array&gt;</span>',ia,pt,Gn='<a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>',oa,P,ut,ht,Un="int",ra,ct,Bn="()",da,_e,Vn="{",pa,ua,v,ft,ha,vt,Wn="std::",ca,xt,Jn="<",Ct,Kn="int",bt,Zn=",",fa,mt,Qn="5",gt,$n=">",va,_t,xa,ts="{",Ca,yt,es="1",wt,as=",",ba,At,ns="2",Pt,ss=",",ma,St,ls="3",Nt,is=",",ga,Tt,os="4",Ht,rs=",",_a,It,ds="5",Lt,ps="});",ya,Mt,us='<a href="#cb2-7" aria-hidden="true" tabindex="-1"></a>',wa,h,kt,Aa,zt,hs="std::",Pa,Et,cs="(",Sa,qt,fs=".",Na,jt,vs="(),",Ta,Ot,xs=".",Ha,Rt,Cs="(),",Ia,Dt,bs="[](",Xt,ms="int",La,Yt,Ma,gs="{",ka,za,Ft,_s="std::",Ea,Gt,ys="<<",qa,Ut,ws="<<",ja,Bt,As='", "',Vt,Ps=";",Oa,Wt,Ss="});",Ra,Jt,Ns='<a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>',Da,Kt,Ts='<a href="#cb2-10" aria-hidden="true" tabindex="-1"></a>    <span class="co">// Should perform the same functionality as...</span>',Xa,x,Zt,Ya,Qt,Hs="std::",Fa,$t,Is="(",Ga,te,Ls=".",Ua,ee,Ms="(),",Ba,ae,ks="[](",ne,zs="int",Va,se,Wa,Es="{",Ja,Ka,le,qs="std::",Za,ie,js="<<",Qa,oe,Os="<<",$a,re,Rs='", "',de,Ds=";",tn,pe,Xs="});",en,ue,Ys='<a href="#cb2-12" aria-hidden="true" tabindex="-1"></a>',an,he,Fs='<a href="#cb2-13" aria-hidden="true" tabindex="-1"></a>    <span class="cf">return</span> <span class="dv">0</span><span class="op">;</span>',nn,ce,Gs='<a href="#cb2-14" aria-hidden="true" tabindex="-1"></a><span class="op">}</span>',qe,fe,Us=`Regardless, templates start to become a little confusing (admittedly
it could be a skill issue) when concerning functional types like
lambdas. I still have a lot to learn regarding tempalte and compile-time
programming.`,je,E,Bs="The rest of Advent of Code",Oe,ve,Vs=`For the rest of Advent of Code, I still wish to try it, but my
attempts will be at a much more leaisurely pace. Not that the puzzles
are getting really tough, I need to think about them thouroughly, and
can’t just dive in and try to start programming some garbage solutions
in order to finish the puzzle before no one. I do have a leaderboard,
and it’s <em>HUGE</em> this year which I am super psyched about, but I
think I mightve scared some of the participants off by doing so many
puzzles so quick. It’s not even as if they were that hard, just that it
was finals week and I don’t have my priorities straight. Either way I
really hope that this is the year I can finnally complete and Advent of
Code calendar in it’s fullest. Part of me wishes I was still at prep and
I could bring my qualms to Dr. Kender and he would save the day with his
infinite wisdom. That’s about it regarding advent of code. If anyone
wants to join my leaderboard, the code is <code>2111709-786ea57b</code>.
Hope everyone that is doing Advent of Code is enjoying it, and if anyone
has questions about the puzzles or just wants to talk about them, feel
free to e-mail me at <code>hdiambrosio@gmail.com</code>. Ok, bye bye!
:)`;return{c(){S=a("h1"),S.textContent=dn,ye=y(),N=a("h2"),N.textContent=pn,we=y(),q=a("p"),q.textContent=un,Ae=y(),T=a("h3"),T.textContent=hn,Pe=y(),j=a("p"),j.innerHTML=cn,Se=y(),H=a("h2"),H.textContent=fn,Ne=y(),O=a("p"),O.textContent=vn,Te=y(),I=a("h3"),I.textContent=xn,He=y(),R=a("p"),R.innerHTML=Cn,Ie=y(),L=a("div"),be=a("pre"),d=a("code"),D=a("span"),D.innerHTML=bn,Re=i(`
`),X=a("span"),X.innerHTML=mn,De=i(`
`),A=a("span"),Y=a("a"),F=a("span"),F.textContent=gn,Xe=i(" main"),G=a("span"),G.textContent=_n,Ye=i(" "),me=a("span"),Fe=i(yn),Ge=i(`
`),U=a("span"),U.innerHTML=wn,Ue=i(`
`),B=a("span"),B.innerHTML=An,Be=i(`
`),V=a("span"),V.innerHTML=Pn,Ve=i(`
`),W=a("span"),W.innerHTML=Sn,We=i(`
`),J=a("span"),J.innerHTML=Nn,Je=i(`
`),K=a("span"),K.innerHTML=Tn,Ke=i(`
`),Z=a("span"),Z.innerHTML=Hn,Ze=i(`
`),Q=a("span"),Q.innerHTML=In,Qe=i(`
`),$=a("span"),$.innerHTML=Ln,$e=i(`
`),tt=a("span"),tt.innerHTML=Mn,ta=i(`
`),et=a("span"),et.innerHTML=kn,ea=i(`
`),at=a("span"),at.innerHTML=zn,aa=i(`
`),nt=a("span"),nt.innerHTML=En,na=i(`
`),st=a("span"),st.innerHTML=qn,Le=y(),M=a("h3"),M.textContent=jn,Me=y(),lt=a("p"),lt.innerHTML=On,ke=y(),k=a("h3"),k.textContent=Rn,ze=y(),it=a("p"),it.innerHTML=Dn,Ee=y(),z=a("div"),ge=a("pre"),f=a("code"),ot=a("span"),ot.innerHTML=Xn,sa=i(`
`),rt=a("span"),rt.innerHTML=Yn,la=i(`
`),dt=a("span"),dt.innerHTML=Fn,ia=i(`
`),pt=a("span"),pt.innerHTML=Gn,oa=i(`
`),P=a("span"),ut=a("a"),ht=a("span"),ht.textContent=Un,ra=i(" main"),ct=a("span"),ct.textContent=Bn,da=i(" "),_e=a("span"),pa=i(Vn),ua=i(`
`),v=a("span"),ft=a("a"),ha=i("    "),vt=a("span"),vt.textContent=Wn,ca=i("array"),xt=a("span"),xt.textContent=Jn,Ct=a("span"),Ct.textContent=Kn,bt=a("span"),bt.textContent=Zn,fa=i(" "),mt=a("span"),mt.textContent=Qn,gt=a("span"),gt.textContent=$n,va=i(" arr"),_t=a("span"),xa=i("("),Ca=i(ts),yt=a("span"),yt.textContent=es,wt=a("span"),wt.textContent=as,ba=i(" "),At=a("span"),At.textContent=ns,Pt=a("span"),Pt.textContent=ss,ma=i(" "),St=a("span"),St.textContent=ls,Nt=a("span"),Nt.textContent=is,ga=i(" "),Tt=a("span"),Tt.textContent=os,Ht=a("span"),Ht.textContent=rs,_a=i(" "),It=a("span"),It.textContent=ds,Lt=a("span"),Lt.textContent=ps,ya=i(`
`),Mt=a("span"),Mt.innerHTML=us,wa=i(`
`),h=a("span"),kt=a("a"),Aa=i("    "),zt=a("span"),zt.textContent=hs,Pa=i("for_each"),Et=a("span"),Et.textContent=cs,Sa=i("arr"),qt=a("span"),qt.textContent=fs,Na=i("begin"),jt=a("span"),jt.textContent=vs,Ta=i(" arr"),Ot=a("span"),Ot.textContent=xs,Ha=i("end"),Rt=a("span"),Rt.textContent=Cs,Ia=i(" "),Dt=a("span"),Dt.textContent=bs,Xt=a("span"),Xt.textContent=ms,La=i(" i"),Yt=a("span"),Ma=i(")"),ka=i(gs),za=i(" "),Ft=a("span"),Ft.textContent=_s,Ea=i("cout "),Gt=a("span"),Gt.textContent=ys,qa=i(" i "),Ut=a("span"),Ut.textContent=ws,ja=i(" "),Bt=a("span"),Bt.textContent=As,Vt=a("span"),Vt.textContent=Ps,Oa=i(" "),Wt=a("span"),Wt.textContent=Ss,Ra=i(`
`),Jt=a("span"),Jt.innerHTML=Ns,Da=i(`
`),Kt=a("span"),Kt.innerHTML=Ts,Xa=i(`
`),x=a("span"),Zt=a("a"),Ya=i("    "),Qt=a("span"),Qt.textContent=Hs,Fa=i("for_each"),$t=a("span"),$t.textContent=Is,Ga=i("arr"),te=a("span"),te.textContent=Ls,Ua=i("begin"),ee=a("span"),ee.textContent=Ms,Ba=i(" "),ae=a("span"),ae.textContent=ks,ne=a("span"),ne.textContent=zs,Va=i(" i"),se=a("span"),Wa=i(")"),Ja=i(Es),Ka=i(" "),le=a("span"),le.textContent=qs,Za=i("cout "),ie=a("span"),ie.textContent=js,Qa=i(" i "),oe=a("span"),oe.textContent=Os,$a=i(" "),re=a("span"),re.textContent=Rs,de=a("span"),de.textContent=Ds,tn=i(" "),pe=a("span"),pe.textContent=Xs,en=i(`
`),ue=a("span"),ue.innerHTML=Ys,an=i(`
`),he=a("span"),he.innerHTML=Fs,nn=i(`
`),ce=a("span"),ce.innerHTML=Gs,qe=y(),fe=a("p"),fe.textContent=Us,je=y(),E=a("h2"),E.textContent=Bs,Oe=y(),ve=a("p"),ve.innerHTML=Vs,this.h()},l(l){S=n(l,"H1",{id:!0,"data-svelte-h":!0}),s(S)!=="svelte-1jmde6z"&&(S.textContent=dn),ye=w(l),N=n(l,"H2",{id:!0,"data-svelte-h":!0}),s(N)!=="svelte-1bxw25w"&&(N.textContent=pn),we=w(l),q=n(l,"P",{"data-svelte-h":!0}),s(q)!=="svelte-10mks7i"&&(q.textContent=un),Ae=w(l),T=n(l,"H3",{id:!0,"data-svelte-h":!0}),s(T)!=="svelte-z9b5tf"&&(T.textContent=hn),Pe=w(l),j=n(l,"P",{"data-svelte-h":!0}),s(j)!=="svelte-p38a5o"&&(j.innerHTML=cn),Se=w(l),H=n(l,"H2",{id:!0,"data-svelte-h":!0}),s(H)!=="svelte-p0y0zw"&&(H.textContent=fn),Ne=w(l),O=n(l,"P",{"data-svelte-h":!0}),s(O)!=="svelte-1iox7pu"&&(O.textContent=vn),Te=w(l),I=n(l,"H3",{id:!0,"data-svelte-h":!0}),s(I)!=="svelte-xfydpb"&&(I.textContent=xn),He=w(l),R=n(l,"P",{"data-svelte-h":!0}),s(R)!=="svelte-1xpj5nc"&&(R.innerHTML=Cn),Ie=w(l),L=n(l,"DIV",{class:!0,id:!0});var p=_(L);be=n(p,"PRE",{class:!0});var Ws=_(be);d=n(Ws,"CODE",{class:!0});var c=_(d);D=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(D)!=="svelte-u18ku0"&&(D.innerHTML=bn),Re=o(c,`
`),X=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(X)!=="svelte-xoa5wn"&&(X.innerHTML=mn),De=o(c,`
`),A=n(c,"SPAN",{id:!0});var xe=_(A);Y=n(xe,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),_(Y).forEach(r),F=n(xe,"SPAN",{class:!0,"data-svelte-h":!0}),s(F)!=="svelte-1cu2y6w"&&(F.textContent=gn),Xe=o(xe," main"),G=n(xe,"SPAN",{class:!0,"data-svelte-h":!0}),s(G)!=="svelte-1z0apld"&&(G.textContent=_n),Ye=o(xe," "),me=n(xe,"SPAN",{class:!0});var Js=_(me);Fe=o(Js,yn),Js.forEach(r),xe.forEach(r),Ge=o(c,`
`),U=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(U)!=="svelte-1qemdrb"&&(U.innerHTML=wn),Ue=o(c,`
`),B=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(B)!=="svelte-1cp2giq"&&(B.innerHTML=An),Be=o(c,`
`),V=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(V)!=="svelte-z7gf1o"&&(V.innerHTML=Pn),Ve=o(c,`
`),W=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(W)!=="svelte-8hgga5"&&(W.innerHTML=Sn),We=o(c,`
`),J=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(J)!=="svelte-9o2mwr"&&(J.innerHTML=Nn),Je=o(c,`
`),K=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(K)!=="svelte-185pt6h"&&(K.innerHTML=Tn),Ke=o(c,`
`),Z=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Z)!=="svelte-18qdgeq"&&(Z.innerHTML=Hn),Ze=o(c,`
`),Q=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Q)!=="svelte-ofdt8f"&&(Q.innerHTML=In),Qe=o(c,`
`),$=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s($)!=="svelte-qq5yja"&&($.innerHTML=Ln),$e=o(c,`
`),tt=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(tt)!=="svelte-10p5q6h"&&(tt.innerHTML=Mn),ta=o(c,`
`),et=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(et)!=="svelte-buod9x"&&(et.innerHTML=kn),ea=o(c,`
`),at=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(at)!=="svelte-1b51kel"&&(at.innerHTML=zn),aa=o(c,`
`),nt=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(nt)!=="svelte-nj4xho"&&(nt.innerHTML=En),na=o(c,`
`),st=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(st)!=="svelte-4ef3hx"&&(st.innerHTML=qn),c.forEach(r),Ws.forEach(r),p.forEach(r),Le=w(l),M=n(l,"H3",{id:!0,"data-svelte-h":!0}),s(M)!=="svelte-6on2np"&&(M.textContent=jn),Me=w(l),lt=n(l,"P",{"data-svelte-h":!0}),s(lt)!=="svelte-1eguli8"&&(lt.innerHTML=On),ke=w(l),k=n(l,"H3",{id:!0,"data-svelte-h":!0}),s(k)!=="svelte-2buq0c"&&(k.textContent=Rn),ze=w(l),it=n(l,"P",{"data-svelte-h":!0}),s(it)!=="svelte-118tg73"&&(it.innerHTML=Dn),Ee=w(l),z=n(l,"DIV",{class:!0,id:!0});var Ks=_(z);ge=n(Ks,"PRE",{class:!0});var Zs=_(ge);f=n(Zs,"CODE",{class:!0});var b=_(f);ot=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(ot)!=="svelte-1uaou20"&&(ot.innerHTML=Xn),sa=o(b,`
`),rt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(rt)!=="svelte-23dcz5"&&(rt.innerHTML=Yn),la=o(b,`
`),dt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(dt)!=="svelte-uoku6g"&&(dt.innerHTML=Fn),ia=o(b,`
`),pt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(pt)!=="svelte-iysh3h"&&(pt.innerHTML=Gn),oa=o(b,`
`),P=n(b,"SPAN",{id:!0});var Ce=_(P);ut=n(Ce,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),_(ut).forEach(r),ht=n(Ce,"SPAN",{class:!0,"data-svelte-h":!0}),s(ht)!=="svelte-1cu2y6w"&&(ht.textContent=Un),ra=o(Ce," main"),ct=n(Ce,"SPAN",{class:!0,"data-svelte-h":!0}),s(ct)!=="svelte-1z0apld"&&(ct.textContent=Bn),da=o(Ce," "),_e=n(Ce,"SPAN",{class:!0});var Qs=_(_e);pa=o(Qs,Vn),Qs.forEach(r),Ce.forEach(r),ua=o(b,`
`),v=n(b,"SPAN",{id:!0});var m=_(v);ft=n(m,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),_(ft).forEach(r),ha=o(m,"    "),vt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(vt)!=="svelte-f2t3gz"&&(vt.textContent=Wn),ca=o(m,"array"),xt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(xt)!=="svelte-1b3orjh"&&(xt.textContent=Jn),Ct=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ct)!=="svelte-1cu2y6w"&&(Ct.textContent=Kn),bt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(bt)!=="svelte-1nfhsgo"&&(bt.textContent=Zn),fa=o(m," "),mt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(mt)!=="svelte-1szwcbk"&&(mt.textContent=Qn),gt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(gt)!=="svelte-1ncbpgq"&&(gt.textContent=$n),va=o(m," arr"),_t=n(m,"SPAN",{class:!0});var sn=_(_t);xa=o(sn,"("),Ca=o(sn,ts),sn.forEach(r),yt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(yt)!=="svelte-18zggkk"&&(yt.textContent=es),wt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(wt)!=="svelte-1nfhsgo"&&(wt.textContent=as),ba=o(m," "),At=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(At)!=="svelte-qv1q5t"&&(At.textContent=ns),Pt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Pt)!=="svelte-1nfhsgo"&&(Pt.textContent=ss),ma=o(m," "),St=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(St)!=="svelte-oxr3xq"&&(St.textContent=ls),Nt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Nt)!=="svelte-1nfhsgo"&&(Nt.textContent=is),ga=o(m," "),Tt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Tt)!=="svelte-nx36gj"&&(Tt.textContent=os),Ht=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ht)!=="svelte-1nfhsgo"&&(Ht.textContent=rs),_a=o(m," "),It=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(It)!=="svelte-1szwcbk"&&(It.textContent=ds),Lt=n(m,"SPAN",{class:!0,"data-svelte-h":!0}),s(Lt)!=="svelte-xamsbv"&&(Lt.textContent=ps),m.forEach(r),ya=o(b,`
`),Mt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(Mt)!=="svelte-16ke36v"&&(Mt.innerHTML=us),wa=o(b,`
`),h=n(b,"SPAN",{id:!0});var C=_(h);kt=n(C,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),_(kt).forEach(r),Aa=o(C,"    "),zt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(zt)!=="svelte-f2t3gz"&&(zt.textContent=hs),Pa=o(C,"for_each"),Et=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Et)!=="svelte-om7dis"&&(Et.textContent=cs),Sa=o(C,"arr"),qt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(qt)!=="svelte-a1oepu"&&(qt.textContent=fs),Na=o(C,"begin"),jt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(jt)!=="svelte-vpv0zp"&&(jt.textContent=vs),Ta=o(C," arr"),Ot=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ot)!=="svelte-a1oepu"&&(Ot.textContent=xs),Ha=o(C,"end"),Rt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Rt)!=="svelte-vpv0zp"&&(Rt.textContent=Cs),Ia=o(C," "),Dt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Dt)!=="svelte-1fhxbo4"&&(Dt.textContent=bs),Xt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Xt)!=="svelte-1cu2y6w"&&(Xt.textContent=ms),La=o(C," i"),Yt=n(C,"SPAN",{class:!0});var ln=_(Yt);Ma=o(ln,")"),ka=o(ln,gs),ln.forEach(r),za=o(C," "),Ft=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ft)!=="svelte-f2t3gz"&&(Ft.textContent=_s),Ea=o(C,"cout "),Gt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Gt)!=="svelte-r8xmw"&&(Gt.textContent=ys),qa=o(C," i "),Ut=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ut)!=="svelte-r8xmw"&&(Ut.textContent=ws),ja=o(C," "),Bt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Bt)!=="svelte-130e1bk"&&(Bt.textContent=As),Vt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Vt)!=="svelte-12pzswd"&&(Vt.textContent=Ps),Oa=o(C," "),Wt=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Wt)!=="svelte-xamsbv"&&(Wt.textContent=Ss),C.forEach(r),Ra=o(b,`
`),Jt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(Jt)!=="svelte-1qk3fo7"&&(Jt.innerHTML=Ns),Da=o(b,`
`),Kt=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(Kt)!=="svelte-1sg9ou1"&&(Kt.innerHTML=Ts),Xa=o(b,`
`),x=n(b,"SPAN",{id:!0});var g=_(x);Zt=n(g,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),_(Zt).forEach(r),Ya=o(g,"    "),Qt=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(Qt)!=="svelte-f2t3gz"&&(Qt.textContent=Hs),Fa=o(g,"for_each"),$t=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s($t)!=="svelte-om7dis"&&($t.textContent=Is),Ga=o(g,"arr"),te=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(te)!=="svelte-a1oepu"&&(te.textContent=Ls),Ua=o(g,"begin"),ee=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ee)!=="svelte-vpv0zp"&&(ee.textContent=Ms),Ba=o(g," "),ae=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ae)!=="svelte-1fhxbo4"&&(ae.textContent=ks),ne=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ne)!=="svelte-1cu2y6w"&&(ne.textContent=zs),Va=o(g," i"),se=n(g,"SPAN",{class:!0});var on=_(se);Wa=o(on,")"),Ja=o(on,Es),on.forEach(r),Ka=o(g," "),le=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(le)!=="svelte-f2t3gz"&&(le.textContent=qs),Za=o(g,"cout "),ie=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ie)!=="svelte-r8xmw"&&(ie.textContent=js),Qa=o(g," i "),oe=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(oe)!=="svelte-r8xmw"&&(oe.textContent=Os),$a=o(g," "),re=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(re)!=="svelte-130e1bk"&&(re.textContent=Rs),de=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(de)!=="svelte-12pzswd"&&(de.textContent=Ds),tn=o(g," "),pe=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(pe)!=="svelte-xamsbv"&&(pe.textContent=Xs),g.forEach(r),en=o(b,`
`),ue=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(ue)!=="svelte-1le4pmx"&&(ue.innerHTML=Ys),an=o(b,`
`),he=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(he)!=="svelte-1a6qxgs"&&(he.innerHTML=Fs),nn=o(b,`
`),ce=n(b,"SPAN",{id:!0,"data-svelte-h":!0}),s(ce)!=="svelte-xc8ecl"&&(ce.innerHTML=Gs),b.forEach(r),Zs.forEach(r),Ks.forEach(r),qe=w(l),fe=n(l,"P",{"data-svelte-h":!0}),s(fe)!=="svelte-1o70y5"&&(fe.textContent=Us),je=w(l),E=n(l,"H2",{id:!0,"data-svelte-h":!0}),s(E)!=="svelte-588zzl"&&(E.textContent=Bs),Oe=w(l),ve=n(l,"P",{"data-svelte-h":!0}),s(ve)!=="svelte-w2ijfp"&&(ve.innerHTML=Vs),this.h()},h(){e(S,"id","advent-of-code-how-its-going"),e(N,"id","first-things-first"),e(T,"id","still-washed"),e(H,"id","the-c-language"),e(I,"id","swapping-two-variables-integer-values-without-a-temporary"),e(D,"id","cb1-1"),e(X,"id","cb1-2"),e(Y,"href","#cb1-3"),e(Y,"aria-hidden","true"),e(Y,"tabindex","-1"),e(F,"class","dt"),e(G,"class","op"),e(me,"class","op"),e(A,"id","cb1-3"),e(U,"id","cb1-4"),e(B,"id","cb1-5"),e(V,"id","cb1-6"),e(W,"id","cb1-7"),e(J,"id","cb1-8"),e(K,"id","cb1-9"),e(Z,"id","cb1-10"),e(Q,"id","cb1-11"),e($,"id","cb1-12"),e(tt,"id","cb1-13"),e(et,"id","cb1-14"),e(at,"id","cb1-15"),e(nt,"id","cb1-16"),e(st,"id","cb1-17"),e(d,"class","sourceCode c"),e(be,"class","sourceCode c"),e(L,"class","sourceCode"),e(L,"id","cb1"),e(M,"id","asserts-wow-how-did-i-not-use-these-sooner"),e(k,"id","templates-are-magic"),e(ot,"id","cb2-1"),e(rt,"id","cb2-2"),e(dt,"id","cb2-3"),e(pt,"id","cb2-4"),e(ut,"href","#cb2-5"),e(ut,"aria-hidden","true"),e(ut,"tabindex","-1"),e(ht,"class","dt"),e(ct,"class","op"),e(_e,"class","op"),e(P,"id","cb2-5"),e(ft,"href","#cb2-6"),e(ft,"aria-hidden","true"),e(ft,"tabindex","-1"),e(vt,"class","bu"),e(xt,"class","op"),e(Ct,"class","dt"),e(bt,"class","op"),e(mt,"class","dv"),e(gt,"class","op"),e(_t,"class","op"),e(yt,"class","dv"),e(wt,"class","op"),e(At,"class","dv"),e(Pt,"class","op"),e(St,"class","dv"),e(Nt,"class","op"),e(Tt,"class","dv"),e(Ht,"class","op"),e(It,"class","dv"),e(Lt,"class","op"),e(v,"id","cb2-6"),e(Mt,"id","cb2-7"),e(kt,"href","#cb2-8"),e(kt,"aria-hidden","true"),e(kt,"tabindex","-1"),e(zt,"class","bu"),e(Et,"class","op"),e(qt,"class","op"),e(jt,"class","op"),e(Ot,"class","op"),e(Rt,"class","op"),e(Dt,"class","op"),e(Xt,"class","dt"),e(Yt,"class","op"),e(Ft,"class","bu"),e(Gt,"class","op"),e(Ut,"class","op"),e(Bt,"class","st"),e(Vt,"class","op"),e(Wt,"class","op"),e(h,"id","cb2-8"),e(Jt,"id","cb2-9"),e(Kt,"id","cb2-10"),e(Zt,"href","#cb2-11"),e(Zt,"aria-hidden","true"),e(Zt,"tabindex","-1"),e(Qt,"class","bu"),e($t,"class","op"),e(te,"class","op"),e(ee,"class","op"),e(ae,"class","op"),e(ne,"class","dt"),e(se,"class","op"),e(le,"class","bu"),e(ie,"class","op"),e(oe,"class","op"),e(re,"class","st"),e(de,"class","op"),e(pe,"class","op"),e(x,"id","cb2-11"),e(ue,"id","cb2-12"),e(he,"id","cb2-13"),e(ce,"id","cb2-14"),e(f,"class","sourceCode cpp"),e(ge,"class","sourceCode cpp"),e(z,"class","sourceCode"),e(z,"id","cb2"),e(E,"id","the-rest-of-advent-of-code")},m(l,p){u(l,S,p),u(l,ye,p),u(l,N,p),u(l,we,p),u(l,q,p),u(l,Ae,p),u(l,T,p),u(l,Pe,p),u(l,j,p),u(l,Se,p),u(l,H,p),u(l,Ne,p),u(l,O,p),u(l,Te,p),u(l,I,p),u(l,He,p),u(l,R,p),u(l,Ie,p),u(l,L,p),t(L,be),t(be,d),t(d,D),t(d,Re),t(d,X),t(d,De),t(d,A),t(A,Y),t(A,F),t(A,Xe),t(A,G),t(A,Ye),t(A,me),t(me,Fe),t(d,Ge),t(d,U),t(d,Ue),t(d,B),t(d,Be),t(d,V),t(d,Ve),t(d,W),t(d,We),t(d,J),t(d,Je),t(d,K),t(d,Ke),t(d,Z),t(d,Ze),t(d,Q),t(d,Qe),t(d,$),t(d,$e),t(d,tt),t(d,ta),t(d,et),t(d,ea),t(d,at),t(d,aa),t(d,nt),t(d,na),t(d,st),u(l,Le,p),u(l,M,p),u(l,Me,p),u(l,lt,p),u(l,ke,p),u(l,k,p),u(l,ze,p),u(l,it,p),u(l,Ee,p),u(l,z,p),t(z,ge),t(ge,f),t(f,ot),t(f,sa),t(f,rt),t(f,la),t(f,dt),t(f,ia),t(f,pt),t(f,oa),t(f,P),t(P,ut),t(P,ht),t(P,ra),t(P,ct),t(P,da),t(P,_e),t(_e,pa),t(f,ua),t(f,v),t(v,ft),t(v,ha),t(v,vt),t(v,ca),t(v,xt),t(v,Ct),t(v,bt),t(v,fa),t(v,mt),t(v,gt),t(v,va),t(v,_t),t(_t,xa),t(_t,Ca),t(v,yt),t(v,wt),t(v,ba),t(v,At),t(v,Pt),t(v,ma),t(v,St),t(v,Nt),t(v,ga),t(v,Tt),t(v,Ht),t(v,_a),t(v,It),t(v,Lt),t(f,ya),t(f,Mt),t(f,wa),t(f,h),t(h,kt),t(h,Aa),t(h,zt),t(h,Pa),t(h,Et),t(h,Sa),t(h,qt),t(h,Na),t(h,jt),t(h,Ta),t(h,Ot),t(h,Ha),t(h,Rt),t(h,Ia),t(h,Dt),t(h,Xt),t(h,La),t(h,Yt),t(Yt,Ma),t(Yt,ka),t(h,za),t(h,Ft),t(h,Ea),t(h,Gt),t(h,qa),t(h,Ut),t(h,ja),t(h,Bt),t(h,Vt),t(h,Oa),t(h,Wt),t(f,Ra),t(f,Jt),t(f,Da),t(f,Kt),t(f,Xa),t(f,x),t(x,Zt),t(x,Ya),t(x,Qt),t(x,Fa),t(x,$t),t(x,Ga),t(x,te),t(x,Ua),t(x,ee),t(x,Ba),t(x,ae),t(x,ne),t(x,Va),t(x,se),t(se,Wa),t(se,Ja),t(x,Ka),t(x,le),t(x,Za),t(x,ie),t(x,Qa),t(x,oe),t(x,$a),t(x,re),t(x,de),t(x,tn),t(x,pe),t(f,en),t(f,ue),t(f,an),t(f,he),t(f,nn),t(f,ce),u(l,qe,p),u(l,fe,p),u(l,je,p),u(l,E,p),u(l,Oe,p),u(l,ve,p)},p:rn,i:rn,o:rn,d(l){l&&(r(S),r(ye),r(N),r(we),r(q),r(Ae),r(T),r(Pe),r(j),r(Se),r(H),r(Ne),r(O),r(Te),r(I),r(He),r(R),r(Ie),r(L),r(Le),r(M),r(Me),r(lt),r(ke),r(k),r(ze),r(it),r(Ee),r(z),r(qe),r(fe),r(je),r(E),r(Oe),r(ve))}}}class il extends el{constructor(S){super(),al(this,S,null,nl,tl,{})}}export{il as component};
