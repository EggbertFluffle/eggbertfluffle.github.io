import{a as Da,n as sn}from"../chunks/scheduler.DDaOzR71.js";import{S as Xa,i as Ya,e,s as w,t as o,c as s,g as a,a as _,b as y,d as i,f as r,h as n,j as u,k as t}from"../chunks/index.CXL903QX.js";function Fa(Ra){let A,nn="Advent of Code: How its Going",Ce,N,an="First things first",me,j,ln=`As of writing this, day 19 is unlocking sortly (as in 1 minute) BUT,
I’m not going to do it. You might be wondering, “All I hear this kid
blad about is Advent of Code.”, “Why isn’t he doing it all of the
sudden?”. In short, I’m washed. The long answer is that day 16 was no
clicking for me, and still doesn’t really, so it’s making doing the
other days more difficult. I also want to enjoy my winter vacationa and
see friends while I still can. One thing That I would like to mention is
that I;m not using zig.`,be,I,on="Still washed",ge,q,rn=`I was able to do part 1 and 2 for day 1 in zig, but then day 2 gave
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
help).`,ye,T,pn="The C++ Language",we,O,dn=`Beyond those things about myself there is also A lot about the C++
programming language that I’m learning too. Just listed as some
unorganized tips:`,_e,k,un=`Swapping
two variables integer values without a temporary:`,Ae,R,cn=`If you want to swap two integer values without a temporary variable,
you can actually make use of bitwise XOR. Say I have two variables
<code>int a = 3;</code> and <code>int b = 6;</code>. In order to swap I
first get the XOR of b and a and store into a like so:
<code>a = a ^ b;</code>. Then, XOR a and b into b, this should give the
previous value of a into b. Finally, XOR the two values again but store
into a. This should look something like this.`,Pe,H,se,p,D,hn='<span class="pp">#include </span><span class="im">&lt;stdio.h&gt;</span>',Ee,re,ze,P,X,vn="int",je,Y,fn="()",qe,ne,xn="{",Oe,Re,F,Cn="    ",De,G,mn='    <span class="dt">int</span> a <span class="op">=</span> <span class="dv">3</span><span class="op">;</span>',Xe,U,bn='    <span class="dt">int</span> b <span class="op">=</span> <span class="dv">6</span><span class="op">;</span>',Ye,pe,Fe,B,gn='    printf<span class="op">(</span><span class="st">&quot;a: </span><span class="sc">%d</span><span class="st">, b: </span><span class="sc">%d\\n</span><span class="st">&quot;</span><span class="op">,</span> a<span class="op">,</span> b<span class="op">);</span> <span class="co">// a: 3, b: 6</span>',Ge,de,Ue,V,yn='    a <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',Be,W,wn='    b <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',Ve,J,_n='    a <span class="op">=</span> a <span class="op">^</span> b<span class="op">;</span>',We,ue,Je,K,An='    printf<span class="op">(</span><span class="st">&quot;a: </span><span class="sc">%d</span><span class="st">, b: </span><span class="sc">%d\\n</span><span class="st">&quot;</span><span class="op">,</span> a<span class="op">,</span> b<span class="op">);</span> <span class="co">// a: 6, b: 3</span>',Ke,ce,Ze,Z,Pn='    <span class="cf">return</span> <span class="dv">0</span><span class="op">;</span>',Qe,Q,Sn='<span class="op">}</span>',Se,L,Nn=`Asserts (wow how did
i not use these sooner)`,Ne,$,In=`An assert is <em>EXTREMELY</em> simple to understand. It is a macro
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
asserts are for now.`,Ie,M,Tn="Templates are Magic",Te,tt,kn=`I still have <em>a lot</em> to learn about C++ templating. There
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
end. For example:`,ke,E,ae,v,et,Hn='<span class="pp">#include </span><span class="im">&lt;algorithm&gt;</span>',$e,st,Ln='<span class="pp">#include </span><span class="im">&lt;iostream&gt;</span>',ts,nt,Mn='<span class="pp">#include </span><span class="im">&lt;array&gt;</span>',es,he,ss,S,at,En="int",ns,lt,zn="()",as,le,jn="{",ls,os,f,is,ot,qn="std::",rs,it,On="<",rt,Rn="int",pt,Dn=",",ps,dt,Xn="5",ut,Yn=">",ds,ct,us,Fn="{",cs,ht,Gn="1",vt,Un=",",hs,ft,Bn="2",xt,Vn=",",vs,Ct,Wn="3",mt,Jn=",",fs,bt,Kn="4",gt,Zn=",",xs,yt,Qn="5",wt,$n="});",Cs,ve,ms,h,bs,_t,ta="std::",gs,At,ea="(",ys,Pt,sa=".",ws,St,na="(),",_s,Nt,aa=".",As,It,la="(),",Ps,Tt,oa="[](",kt,ia="int",Ss,Ht,Ns,ra="{",Is,Ts,Lt,pa="std::",ks,Mt,da="<<",Hs,Et,ua="<<",Ls,zt,ca='", "',jt,ha=";",Ms,qt,va="});",Es,fe,zs,Ot,fa='    <span class="co">// Should perform the same functionality as...</span>',js,x,qs,Rt,xa="std::",Os,Dt,Ca="(",Rs,Xt,ma=".",Ds,Yt,ba="(),",Xs,Ft,ga="[](",Gt,ya="int",Ys,Ut,Fs,wa="{",Gs,Us,Bt,_a="std::",Bs,Vt,Aa="<<",Vs,Wt,Pa="<<",Ws,Jt,Sa='", "',Kt,Na=";",Js,Zt,Ia="});",Ks,xe,Zs,Qt,Ta='    <span class="cf">return</span> <span class="dv">0</span><span class="op">;</span>',Qs,$t,ka='<span class="op">}</span>',He,te,Ha=`Regardless, templates start to become a little confusing (admittedly
it could be a skill issue) when concerning functional types like
lambdas. I still have a lot to learn regarding tempalte and compile-time
programming.`,Le,z,La="The rest of Advent of Code",Me,ee,Ma=`For the rest of Advent of Code, I still wish to try it, but my
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
:)`;return{c(){A=e("h1"),A.textContent=nn,Ce=w(),N=e("h2"),N.textContent=an,me=w(),j=e("p"),j.textContent=ln,be=w(),I=e("h3"),I.textContent=on,ge=w(),q=e("p"),q.innerHTML=rn,ye=w(),T=e("h2"),T.textContent=pn,we=w(),O=e("p"),O.textContent=dn,_e=w(),k=e("h3"),k.textContent=un,Ae=w(),R=e("p"),R.innerHTML=cn,Pe=w(),H=e("div"),se=e("pre"),p=e("code"),D=e("span"),D.innerHTML=hn,Ee=o(`
`),re=e("span"),ze=o(`
`),P=e("span"),X=e("span"),X.textContent=vn,je=o(" main"),Y=e("span"),Y.textContent=fn,qe=o(" "),ne=e("span"),Oe=o(xn),Re=o(`
`),F=e("span"),F.textContent=Cn,De=o(`
`),G=e("span"),G.innerHTML=mn,Xe=o(`
`),U=e("span"),U.innerHTML=bn,Ye=o(`
`),pe=e("span"),Fe=o(`
`),B=e("span"),B.innerHTML=gn,Ge=o(`
`),de=e("span"),Ue=o(`
`),V=e("span"),V.innerHTML=yn,Be=o(`
`),W=e("span"),W.innerHTML=wn,Ve=o(`
`),J=e("span"),J.innerHTML=_n,We=o(`
`),ue=e("span"),Je=o(`
`),K=e("span"),K.innerHTML=An,Ke=o(`
`),ce=e("span"),Ze=o(`
`),Z=e("span"),Z.innerHTML=Pn,Qe=o(`
`),Q=e("span"),Q.innerHTML=Sn,Se=w(),L=e("h3"),L.textContent=Nn,Ne=w(),$=e("p"),$.innerHTML=In,Ie=w(),M=e("h3"),M.textContent=Tn,Te=w(),tt=e("p"),tt.innerHTML=kn,ke=w(),E=e("div"),ae=e("pre"),v=e("code"),et=e("span"),et.innerHTML=Hn,$e=o(`
`),st=e("span"),st.innerHTML=Ln,ts=o(`
`),nt=e("span"),nt.innerHTML=Mn,es=o(`
`),he=e("span"),ss=o(`
`),S=e("span"),at=e("span"),at.textContent=En,ns=o(" main"),lt=e("span"),lt.textContent=zn,as=o(" "),le=e("span"),ls=o(jn),os=o(`
`),f=e("span"),is=o("    "),ot=e("span"),ot.textContent=qn,rs=o("array"),it=e("span"),it.textContent=On,rt=e("span"),rt.textContent=Rn,pt=e("span"),pt.textContent=Dn,ps=o(" "),dt=e("span"),dt.textContent=Xn,ut=e("span"),ut.textContent=Yn,ds=o(" arr"),ct=e("span"),us=o("("),cs=o(Fn),ht=e("span"),ht.textContent=Gn,vt=e("span"),vt.textContent=Un,hs=o(" "),ft=e("span"),ft.textContent=Bn,xt=e("span"),xt.textContent=Vn,vs=o(" "),Ct=e("span"),Ct.textContent=Wn,mt=e("span"),mt.textContent=Jn,fs=o(" "),bt=e("span"),bt.textContent=Kn,gt=e("span"),gt.textContent=Zn,xs=o(" "),yt=e("span"),yt.textContent=Qn,wt=e("span"),wt.textContent=$n,Cs=o(`
`),ve=e("span"),ms=o(`
`),h=e("span"),bs=o("    "),_t=e("span"),_t.textContent=ta,gs=o("for_each"),At=e("span"),At.textContent=ea,ys=o("arr"),Pt=e("span"),Pt.textContent=sa,ws=o("begin"),St=e("span"),St.textContent=na,_s=o(" arr"),Nt=e("span"),Nt.textContent=aa,As=o("end"),It=e("span"),It.textContent=la,Ps=o(" "),Tt=e("span"),Tt.textContent=oa,kt=e("span"),kt.textContent=ia,Ss=o(" i"),Ht=e("span"),Ns=o(")"),Is=o(ra),Ts=o(" "),Lt=e("span"),Lt.textContent=pa,ks=o("cout "),Mt=e("span"),Mt.textContent=da,Hs=o(" i "),Et=e("span"),Et.textContent=ua,Ls=o(" "),zt=e("span"),zt.textContent=ca,jt=e("span"),jt.textContent=ha,Ms=o(" "),qt=e("span"),qt.textContent=va,Es=o(`
`),fe=e("span"),zs=o(`
`),Ot=e("span"),Ot.innerHTML=fa,js=o(`
`),x=e("span"),qs=o("    "),Rt=e("span"),Rt.textContent=xa,Os=o("for_each"),Dt=e("span"),Dt.textContent=Ca,Rs=o("arr"),Xt=e("span"),Xt.textContent=ma,Ds=o("begin"),Yt=e("span"),Yt.textContent=ba,Xs=o(" "),Ft=e("span"),Ft.textContent=ga,Gt=e("span"),Gt.textContent=ya,Ys=o(" i"),Ut=e("span"),Fs=o(")"),Gs=o(wa),Us=o(" "),Bt=e("span"),Bt.textContent=_a,Bs=o("cout "),Vt=e("span"),Vt.textContent=Aa,Vs=o(" i "),Wt=e("span"),Wt.textContent=Pa,Ws=o(" "),Jt=e("span"),Jt.textContent=Sa,Kt=e("span"),Kt.textContent=Na,Js=o(" "),Zt=e("span"),Zt.textContent=Ia,Ks=o(`
`),xe=e("span"),Zs=o(`
`),Qt=e("span"),Qt.innerHTML=Ta,Qs=o(`
`),$t=e("span"),$t.innerHTML=ka,He=w(),te=e("p"),te.textContent=Ha,Le=w(),z=e("h2"),z.textContent=La,Me=w(),ee=e("p"),ee.innerHTML=Ma,this.h()},l(l){A=s(l,"H1",{id:!0,"data-svelte-h":!0}),a(A)!=="svelte-1jmde6z"&&(A.textContent=nn),Ce=_(l),N=s(l,"H2",{id:!0,"data-svelte-h":!0}),a(N)!=="svelte-1bxw25w"&&(N.textContent=an),me=_(l),j=s(l,"P",{"data-svelte-h":!0}),a(j)!=="svelte-10mks7i"&&(j.textContent=ln),be=_(l),I=s(l,"H3",{id:!0,"data-svelte-h":!0}),a(I)!=="svelte-z9b5tf"&&(I.textContent=on),ge=_(l),q=s(l,"P",{"data-svelte-h":!0}),a(q)!=="svelte-p38a5o"&&(q.innerHTML=rn),ye=_(l),T=s(l,"H2",{id:!0,"data-svelte-h":!0}),a(T)!=="svelte-p0y0zw"&&(T.textContent=pn),we=_(l),O=s(l,"P",{"data-svelte-h":!0}),a(O)!=="svelte-1iox7pu"&&(O.textContent=dn),_e=_(l),k=s(l,"H3",{id:!0,"data-svelte-h":!0}),a(k)!=="svelte-xfydpb"&&(k.textContent=un),Ae=_(l),R=s(l,"P",{"data-svelte-h":!0}),a(R)!=="svelte-1xpj5nc"&&(R.innerHTML=cn),Pe=_(l),H=s(l,"DIV",{class:!0,id:!0});var d=y(H);se=s(d,"PRE",{class:!0});var Ea=y(se);p=s(Ea,"CODE",{class:!0});var c=y(p);D=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(D)!=="svelte-4jr0yp"&&(D.innerHTML=hn),Ee=i(c,`
`),re=s(c,"SPAN",{id:!0}),y(re).forEach(r),ze=i(c,`
`),P=s(c,"SPAN",{id:!0});var oe=y(P);X=s(oe,"SPAN",{class:!0,"data-svelte-h":!0}),a(X)!=="svelte-1cu2y6w"&&(X.textContent=vn),je=i(oe," main"),Y=s(oe,"SPAN",{class:!0,"data-svelte-h":!0}),a(Y)!=="svelte-1z0apld"&&(Y.textContent=fn),qe=i(oe," "),ne=s(oe,"SPAN",{class:!0});var za=y(ne);Oe=i(za,xn),za.forEach(r),oe.forEach(r),Re=i(c,`
`),F=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(F)!=="svelte-1w0g25"&&(F.textContent=Cn),De=i(c,`
`),G=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(G)!=="svelte-jju3zn"&&(G.innerHTML=mn),Xe=i(c,`
`),U=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(U)!=="svelte-155do54"&&(U.innerHTML=bn),Ye=i(c,`
`),pe=s(c,"SPAN",{id:!0}),y(pe).forEach(r),Fe=i(c,`
`),B=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(B)!=="svelte-9fgp5x"&&(B.innerHTML=gn),Ge=i(c,`
`),de=s(c,"SPAN",{id:!0}),y(de).forEach(r),Ue=i(c,`
`),V=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(V)!=="svelte-12hens9"&&(V.innerHTML=yn),Be=i(c,`
`),W=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(W)!=="svelte-1svsyxh"&&(W.innerHTML=wn),Ve=i(c,`
`),J=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(J)!=="svelte-rc2c2v"&&(J.innerHTML=_n),We=i(c,`
`),ue=s(c,"SPAN",{id:!0}),y(ue).forEach(r),Je=i(c,`
`),K=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(K)!=="svelte-athyjw"&&(K.innerHTML=An),Ke=i(c,`
`),ce=s(c,"SPAN",{id:!0}),y(ce).forEach(r),Ze=i(c,`
`),Z=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Z)!=="svelte-1akbmwt"&&(Z.innerHTML=Pn),Qe=i(c,`
`),Q=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Q)!=="svelte-1ukpblp"&&(Q.innerHTML=Sn),c.forEach(r),Ea.forEach(r),d.forEach(r),Se=_(l),L=s(l,"H3",{id:!0,"data-svelte-h":!0}),a(L)!=="svelte-6on2np"&&(L.textContent=Nn),Ne=_(l),$=s(l,"P",{"data-svelte-h":!0}),a($)!=="svelte-1eguli8"&&($.innerHTML=In),Ie=_(l),M=s(l,"H3",{id:!0,"data-svelte-h":!0}),a(M)!=="svelte-2buq0c"&&(M.textContent=Tn),Te=_(l),tt=s(l,"P",{"data-svelte-h":!0}),a(tt)!=="svelte-118tg73"&&(tt.innerHTML=kn),ke=_(l),E=s(l,"DIV",{class:!0,id:!0});var ja=y(E);ae=s(ja,"PRE",{class:!0});var qa=y(ae);v=s(qa,"CODE",{class:!0});var m=y(v);et=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a(et)!=="svelte-io8j8w"&&(et.innerHTML=Hn),$e=i(m,`
`),st=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a(st)!=="svelte-pifiuo"&&(st.innerHTML=Ln),ts=i(m,`
`),nt=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a(nt)!=="svelte-1mg17iq"&&(nt.innerHTML=Mn),es=i(m,`
`),he=s(m,"SPAN",{id:!0}),y(he).forEach(r),ss=i(m,`
`),S=s(m,"SPAN",{id:!0});var ie=y(S);at=s(ie,"SPAN",{class:!0,"data-svelte-h":!0}),a(at)!=="svelte-1cu2y6w"&&(at.textContent=En),ns=i(ie," main"),lt=s(ie,"SPAN",{class:!0,"data-svelte-h":!0}),a(lt)!=="svelte-1z0apld"&&(lt.textContent=zn),as=i(ie," "),le=s(ie,"SPAN",{class:!0});var Oa=y(le);ls=i(Oa,jn),Oa.forEach(r),ie.forEach(r),os=i(m,`
`),f=s(m,"SPAN",{id:!0});var b=y(f);is=i(b,"    "),ot=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(ot)!=="svelte-f2t3gz"&&(ot.textContent=qn),rs=i(b,"array"),it=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(it)!=="svelte-1b3orjh"&&(it.textContent=On),rt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(rt)!=="svelte-1cu2y6w"&&(rt.textContent=Rn),pt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(pt)!=="svelte-1nfhsgo"&&(pt.textContent=Dn),ps=i(b," "),dt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(dt)!=="svelte-1szwcbk"&&(dt.textContent=Xn),ut=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(ut)!=="svelte-1ncbpgq"&&(ut.textContent=Yn),ds=i(b," arr"),ct=s(b,"SPAN",{class:!0});var $s=y(ct);us=i($s,"("),cs=i($s,Fn),$s.forEach(r),ht=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(ht)!=="svelte-18zggkk"&&(ht.textContent=Gn),vt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(vt)!=="svelte-1nfhsgo"&&(vt.textContent=Un),hs=i(b," "),ft=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(ft)!=="svelte-qv1q5t"&&(ft.textContent=Bn),xt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(xt)!=="svelte-1nfhsgo"&&(xt.textContent=Vn),vs=i(b," "),Ct=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ct)!=="svelte-oxr3xq"&&(Ct.textContent=Wn),mt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(mt)!=="svelte-1nfhsgo"&&(mt.textContent=Jn),fs=i(b," "),bt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(bt)!=="svelte-nx36gj"&&(bt.textContent=Kn),gt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(gt)!=="svelte-1nfhsgo"&&(gt.textContent=Zn),xs=i(b," "),yt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(yt)!=="svelte-1szwcbk"&&(yt.textContent=Qn),wt=s(b,"SPAN",{class:!0,"data-svelte-h":!0}),a(wt)!=="svelte-xamsbv"&&(wt.textContent=$n),b.forEach(r),Cs=i(m,`
`),ve=s(m,"SPAN",{id:!0}),y(ve).forEach(r),ms=i(m,`
`),h=s(m,"SPAN",{id:!0});var C=y(h);bs=i(C,"    "),_t=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(_t)!=="svelte-f2t3gz"&&(_t.textContent=ta),gs=i(C,"for_each"),At=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(At)!=="svelte-om7dis"&&(At.textContent=ea),ys=i(C,"arr"),Pt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Pt)!=="svelte-a1oepu"&&(Pt.textContent=sa),ws=i(C,"begin"),St=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(St)!=="svelte-vpv0zp"&&(St.textContent=na),_s=i(C," arr"),Nt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Nt)!=="svelte-a1oepu"&&(Nt.textContent=aa),As=i(C,"end"),It=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(It)!=="svelte-vpv0zp"&&(It.textContent=la),Ps=i(C," "),Tt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Tt)!=="svelte-1fhxbo4"&&(Tt.textContent=oa),kt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(kt)!=="svelte-1cu2y6w"&&(kt.textContent=ia),Ss=i(C," i"),Ht=s(C,"SPAN",{class:!0});var tn=y(Ht);Ns=i(tn,")"),Is=i(tn,ra),tn.forEach(r),Ts=i(C," "),Lt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Lt)!=="svelte-f2t3gz"&&(Lt.textContent=pa),ks=i(C,"cout "),Mt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Mt)!=="svelte-r8xmw"&&(Mt.textContent=da),Hs=i(C," i "),Et=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(Et)!=="svelte-r8xmw"&&(Et.textContent=ua),Ls=i(C," "),zt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(zt)!=="svelte-130e1bk"&&(zt.textContent=ca),jt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(jt)!=="svelte-12pzswd"&&(jt.textContent=ha),Ms=i(C," "),qt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),a(qt)!=="svelte-xamsbv"&&(qt.textContent=va),C.forEach(r),Es=i(m,`
`),fe=s(m,"SPAN",{id:!0}),y(fe).forEach(r),zs=i(m,`
`),Ot=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ot)!=="svelte-qjvb3j"&&(Ot.innerHTML=fa),js=i(m,`
`),x=s(m,"SPAN",{id:!0});var g=y(x);qs=i(g,"    "),Rt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Rt)!=="svelte-f2t3gz"&&(Rt.textContent=xa),Os=i(g,"for_each"),Dt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Dt)!=="svelte-om7dis"&&(Dt.textContent=Ca),Rs=i(g,"arr"),Xt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Xt)!=="svelte-a1oepu"&&(Xt.textContent=ma),Ds=i(g,"begin"),Yt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Yt)!=="svelte-vpv0zp"&&(Yt.textContent=ba),Xs=i(g," "),Ft=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ft)!=="svelte-1fhxbo4"&&(Ft.textContent=ga),Gt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Gt)!=="svelte-1cu2y6w"&&(Gt.textContent=ya),Ys=i(g," i"),Ut=s(g,"SPAN",{class:!0});var en=y(Ut);Fs=i(en,")"),Gs=i(en,wa),en.forEach(r),Us=i(g," "),Bt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Bt)!=="svelte-f2t3gz"&&(Bt.textContent=_a),Bs=i(g,"cout "),Vt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Vt)!=="svelte-r8xmw"&&(Vt.textContent=Aa),Vs=i(g," i "),Wt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Wt)!=="svelte-r8xmw"&&(Wt.textContent=Pa),Ws=i(g," "),Jt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Jt)!=="svelte-130e1bk"&&(Jt.textContent=Sa),Kt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Kt)!=="svelte-12pzswd"&&(Kt.textContent=Na),Js=i(g," "),Zt=s(g,"SPAN",{class:!0,"data-svelte-h":!0}),a(Zt)!=="svelte-xamsbv"&&(Zt.textContent=Ia),g.forEach(r),Ks=i(m,`
`),xe=s(m,"SPAN",{id:!0}),y(xe).forEach(r),Zs=i(m,`
`),Qt=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a(Qt)!=="svelte-p1pkp5"&&(Qt.innerHTML=Ta),Qs=i(m,`
`),$t=s(m,"SPAN",{id:!0,"data-svelte-h":!0}),a($t)!=="svelte-fj20sn"&&($t.innerHTML=ka),m.forEach(r),qa.forEach(r),ja.forEach(r),He=_(l),te=s(l,"P",{"data-svelte-h":!0}),a(te)!=="svelte-1o70y5"&&(te.textContent=Ha),Le=_(l),z=s(l,"H2",{id:!0,"data-svelte-h":!0}),a(z)!=="svelte-588zzl"&&(z.textContent=La),Me=_(l),ee=s(l,"P",{"data-svelte-h":!0}),a(ee)!=="svelte-w2ijfp"&&(ee.innerHTML=Ma),this.h()},h(){n(A,"id","advent-of-code-how-its-going"),n(N,"id","first-things-first"),n(I,"id","still-washed"),n(T,"id","the-c-language"),n(k,"id","swapping-two-variables-integer-values-without-a-temporary"),n(D,"id","cb1-1"),n(re,"id","cb1-2"),n(X,"class","dt"),n(Y,"class","op"),n(ne,"class","op"),n(P,"id","cb1-3"),n(F,"id","cb1-4"),n(G,"id","cb1-5"),n(U,"id","cb1-6"),n(pe,"id","cb1-7"),n(B,"id","cb1-8"),n(de,"id","cb1-9"),n(V,"id","cb1-10"),n(W,"id","cb1-11"),n(J,"id","cb1-12"),n(ue,"id","cb1-13"),n(K,"id","cb1-14"),n(ce,"id","cb1-15"),n(Z,"id","cb1-16"),n(Q,"id","cb1-17"),n(p,"class","sourceCode c"),n(se,"class","sourceCode c"),n(H,"class","sourceCode"),n(H,"id","cb1"),n(L,"id","asserts-wow-how-did-i-not-use-these-sooner"),n(M,"id","templates-are-magic"),n(et,"id","cb2-1"),n(st,"id","cb2-2"),n(nt,"id","cb2-3"),n(he,"id","cb2-4"),n(at,"class","dt"),n(lt,"class","op"),n(le,"class","op"),n(S,"id","cb2-5"),n(ot,"class","bu"),n(it,"class","op"),n(rt,"class","dt"),n(pt,"class","op"),n(dt,"class","dv"),n(ut,"class","op"),n(ct,"class","op"),n(ht,"class","dv"),n(vt,"class","op"),n(ft,"class","dv"),n(xt,"class","op"),n(Ct,"class","dv"),n(mt,"class","op"),n(bt,"class","dv"),n(gt,"class","op"),n(yt,"class","dv"),n(wt,"class","op"),n(f,"id","cb2-6"),n(ve,"id","cb2-7"),n(_t,"class","bu"),n(At,"class","op"),n(Pt,"class","op"),n(St,"class","op"),n(Nt,"class","op"),n(It,"class","op"),n(Tt,"class","op"),n(kt,"class","dt"),n(Ht,"class","op"),n(Lt,"class","bu"),n(Mt,"class","op"),n(Et,"class","op"),n(zt,"class","st"),n(jt,"class","op"),n(qt,"class","op"),n(h,"id","cb2-8"),n(fe,"id","cb2-9"),n(Ot,"id","cb2-10"),n(Rt,"class","bu"),n(Dt,"class","op"),n(Xt,"class","op"),n(Yt,"class","op"),n(Ft,"class","op"),n(Gt,"class","dt"),n(Ut,"class","op"),n(Bt,"class","bu"),n(Vt,"class","op"),n(Wt,"class","op"),n(Jt,"class","st"),n(Kt,"class","op"),n(Zt,"class","op"),n(x,"id","cb2-11"),n(xe,"id","cb2-12"),n(Qt,"id","cb2-13"),n($t,"id","cb2-14"),n(v,"class","sourceCode cpp"),n(ae,"class","sourceCode cpp"),n(E,"class","sourceCode"),n(E,"id","cb2"),n(z,"id","the-rest-of-advent-of-code")},m(l,d){u(l,A,d),u(l,Ce,d),u(l,N,d),u(l,me,d),u(l,j,d),u(l,be,d),u(l,I,d),u(l,ge,d),u(l,q,d),u(l,ye,d),u(l,T,d),u(l,we,d),u(l,O,d),u(l,_e,d),u(l,k,d),u(l,Ae,d),u(l,R,d),u(l,Pe,d),u(l,H,d),t(H,se),t(se,p),t(p,D),t(p,Ee),t(p,re),t(p,ze),t(p,P),t(P,X),t(P,je),t(P,Y),t(P,qe),t(P,ne),t(ne,Oe),t(p,Re),t(p,F),t(p,De),t(p,G),t(p,Xe),t(p,U),t(p,Ye),t(p,pe),t(p,Fe),t(p,B),t(p,Ge),t(p,de),t(p,Ue),t(p,V),t(p,Be),t(p,W),t(p,Ve),t(p,J),t(p,We),t(p,ue),t(p,Je),t(p,K),t(p,Ke),t(p,ce),t(p,Ze),t(p,Z),t(p,Qe),t(p,Q),u(l,Se,d),u(l,L,d),u(l,Ne,d),u(l,$,d),u(l,Ie,d),u(l,M,d),u(l,Te,d),u(l,tt,d),u(l,ke,d),u(l,E,d),t(E,ae),t(ae,v),t(v,et),t(v,$e),t(v,st),t(v,ts),t(v,nt),t(v,es),t(v,he),t(v,ss),t(v,S),t(S,at),t(S,ns),t(S,lt),t(S,as),t(S,le),t(le,ls),t(v,os),t(v,f),t(f,is),t(f,ot),t(f,rs),t(f,it),t(f,rt),t(f,pt),t(f,ps),t(f,dt),t(f,ut),t(f,ds),t(f,ct),t(ct,us),t(ct,cs),t(f,ht),t(f,vt),t(f,hs),t(f,ft),t(f,xt),t(f,vs),t(f,Ct),t(f,mt),t(f,fs),t(f,bt),t(f,gt),t(f,xs),t(f,yt),t(f,wt),t(v,Cs),t(v,ve),t(v,ms),t(v,h),t(h,bs),t(h,_t),t(h,gs),t(h,At),t(h,ys),t(h,Pt),t(h,ws),t(h,St),t(h,_s),t(h,Nt),t(h,As),t(h,It),t(h,Ps),t(h,Tt),t(h,kt),t(h,Ss),t(h,Ht),t(Ht,Ns),t(Ht,Is),t(h,Ts),t(h,Lt),t(h,ks),t(h,Mt),t(h,Hs),t(h,Et),t(h,Ls),t(h,zt),t(h,jt),t(h,Ms),t(h,qt),t(v,Es),t(v,fe),t(v,zs),t(v,Ot),t(v,js),t(v,x),t(x,qs),t(x,Rt),t(x,Os),t(x,Dt),t(x,Rs),t(x,Xt),t(x,Ds),t(x,Yt),t(x,Xs),t(x,Ft),t(x,Gt),t(x,Ys),t(x,Ut),t(Ut,Fs),t(Ut,Gs),t(x,Us),t(x,Bt),t(x,Bs),t(x,Vt),t(x,Vs),t(x,Wt),t(x,Ws),t(x,Jt),t(x,Kt),t(x,Js),t(x,Zt),t(v,Ks),t(v,xe),t(v,Zs),t(v,Qt),t(v,Qs),t(v,$t),u(l,He,d),u(l,te,d),u(l,Le,d),u(l,z,d),u(l,Me,d),u(l,ee,d)},p:sn,i:sn,o:sn,d(l){l&&(r(A),r(Ce),r(N),r(me),r(j),r(be),r(I),r(ge),r(q),r(ye),r(T),r(we),r(O),r(_e),r(k),r(Ae),r(R),r(Pe),r(H),r(Se),r(L),r(Ne),r($),r(Ie),r(M),r(Te),r(tt),r(ke),r(E),r(He),r(te),r(Le),r(z),r(Me),r(ee))}}}class Ba extends Xa{constructor(A){super(),Ya(this,A,null,Fa,Da,{})}}export{Ba as component};
