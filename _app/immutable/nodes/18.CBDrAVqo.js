import{a as xn,n as Hs}from"../chunks/scheduler.DDaOzR71.js";import{S as Cn,i as yn,e,s as f,t as r,c as s,g as n,a as m,b,d as c,f as p,h as l,j as h,k as t}from"../chunks/index.CXL903QX.js";function wn(mn){let _,Ns=`Wolfenstein Terminal
Raycaster`,pe,k,Ms=`So after watching a video by the youtube <a href="https://www.youtube.com/watch?v=fSjc8vLMg8c">jdh</a> I was
<em>heavily</em> inspired to make a Wolfenstein 3D style renderer
myself. But after my previous project beign working on the Tui 3D
Renderer, I wanted of course to stay int he TUI style. TUI stands for
<strong>T</strong>ext <strong>U</strong>ser <strong>I</strong>nterface
and most commonly any program with a UI in the terminal will be
considered a TUI application. They will almost most commonly be using
curses, or in my case <a href="https://tldp.org/HOWTO/NCURSES-Programming-HOWTO/">ncurses</a>, to
handle the complex terminal escape codes and portability to other
operating systems. I intend to make this an understading of the
<em>math</em> that goes behind this truely 2d raycast renderer, without
delving so much into application. The same principles can be applied in
almost any language or graphics medium so I emplore you to come up with
a really creative method, shoot me an e-mail if u do! Finnaly, my
program in writtenin C++ and is a mess so thats why I’m keeping the
actual code present to a minimum.`,re,I,Ls="<em>Also I like lists to its gonna be a list &lt;3</em>",ce,A,ks="Introduction",de,z,Is=`Wolfenstein 3D was a revolutionary game that was one of the first
“3D” gaming experiences. Thing is, it wasnt actually 3D and the entirety
of the game was really happening in 2D. What the player saw was an
illusion, the 2D space was “projected” using 2D raycasting. Raycasting
in general is a method of graphics where a ray is cast out of every
single pixel on the screen to calculate what it collides with and how
far it will travel until it collides with something. As you can imagine,
thats a lot of math for each pixel, which puts 3 dimensional raycasting
way out of the time’s computing power. What the authors of Wolfenstein
did was extrapolate extra information from ray that were cast only for
each x pixel. Additionally, Wolfenstein used a grid to represent it’s
map, meaning each cell of map was either a wall or empty space and each
ray would have to traverse this map grid. Of course raycasting as we
know it today hadn’t even existed and raycasting in 2 dimensions was
actually the first step, 3D came <em>much</em> later.`,he,W,zs=`Put simply, 2D raycasting follows these simple steps: 1. Cast a ray
out from the player for each column of pixels on the screen 2. Follow
each ray until it collides with a wall or reaches some max distance 3.
Use the distance each ray traveled to create vertical lines on the
screen 4. Further ray distance = smaller screen line, shorter ray
distance = longer screen line`,ue,D,Ws=`<em>Thats it.</em> This was oversimplified to not include some
equasions and probably the hardest part, how to calculate distances for
each ray but hopefully it demystifies(CHECK THAT SPELLING) how a 2D
raycaster like Wolfenstein 3D works.`,ve,S,Ds="First Steps",fe,E,Es=`Again, no platform spesifics, just the math, but first I initialize
ncurses and some other important setting inside of ncurses for control
handling. At the moment, w, a, s, and d are for strafing, t changes the
texturing method which I will touch more on later, m toggles mouse
support for the camera and j and k swivel the camera. Finnaly because 2D
raycasters are actually 2D, pressing p switches between the
perspectives: the top down map, and the actualy 3D projected view.
Although the top down is very useful for debugging, the 3D perspective
is the real prize.`,me,j,js=`Here is the map I will be working with. Anything that is not a zero
is a wall, the number of each wall comes in later for texturing.`,xe,H,ae,x,g,O,Os="std::",Me,F,Fs="<",q,qs="int",R,Rs=">",Le,U,Us="=",ke,ne,Vs="{",Ie,ze,V,Bs='    <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',We,B,Gs='    <span class="dv">2</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span>',De,G,Js='    <span class="dv">1</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">3</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',Ee,J,Ks='    <span class="dv">2</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span>',je,K,Qs='    <span class="dv">1</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',Oe,Q,Xs='    <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span>',Fe,X,Ys='<span class="op">};</span>',Ce,Y,Zs=`First comes the intial calls to cast rays and as well as collect
their distances and a few other bits of data.`,ye,P,$s=`<pre class="sourceCode cpp"><code class="sourceCode cpp"><span id="cb2-1"><span class="co">// width is the screen width</span></span>
<span id="cb2-2"><span class="dt">int</span> lines <span class="op">=</span> width<span class="op">;</span></span>
<span id="cb2-3"><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">float</span><span class="op">&gt;</span> distances<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-4"></span>
<span id="cb2-5"><span class="co">// The number assigned to the wall each ray collides with</span></span>
<span id="cb2-6"><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">int</span><span class="op">&gt;</span> hits<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-7"></span>
<span id="cb2-8"><span class="co">// Important for texturing later</span></span>
<span id="cb2-9"><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">float</span><span class="op">&gt;</span> uTexCoords<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-10"></span>
<span id="cb2-11"><span class="co">// Cast rays and populate those lists with data</span></span>
<span id="cb2-12">player<span class="op">.</span>TakePerspective<span class="op">(&amp;</span>distances<span class="op">,</span> <span class="op">&amp;</span>hits<span class="op">,</span> <span class="op">&amp;</span>uTexCoords<span class="op">,</span> <span class="op">&amp;</span>map<span class="op">,</span> <span class="op">&amp;</span>scl<span class="op">,</span> <span class="op">&amp;</span>mapWidth<span class="op">,</span> <span class="op">&amp;</span>mapHeight<span class="op">);</span></span></code></pre>`,we,Z,ta=`And <code>player::TakePerspectives</code> simply casts a ray for each
pixel in the width of the screen and linearly interpolates (lerps)
through the players field of view (FOV) to create evently spaced angled
for each ray to travel at. This creates a fan of rays centered around
the player’s angle, or heading. There is also a lot of important map
data we pass to almost all of the functions called, those being
<code>scl</code>, the size of each cell in the map grid, and
<code>map</code>, <code>mapWidth</code>, and <code>mapHeight</code>.`,ge,N,le,v,o,$,ea="void",qe,tt,sa="::",Re,et,aa="(",st,na="std::",Ue,at,la="<",nt,oa="float",lt,ia=">*",Ve,ot,pa=",",Be,it,ra="std::",Ge,pt,ca="<",rt,da="int",ct,ha=">*",Je,dt,ua=",",Ke,ht,va="std::",Qe,ut,fa="<",vt,ma="float",ft,xa=">*",Xe,mt,Ca=",",Ye,xt,ya="std::",Ze,Ct,wa="<",yt,ga="int",wt,ba=">*",$e,gt,_a=",",ts,bt,Ta="const",es,_t,Pa="float",Tt,Aa="*",ss,Pt,Sa=",",as,At,Ha="const",ns,St,Na="int",Ht,Ma="*",ls,Nt,La=",",os,Mt,ka="const",is,Lt,Ia="int",kt,za="*",ps,It,Wa=")",rs,oe,Da="{",cs,ds,u,hs,zt,Ea="for",Wt,ja="(",Dt,Oa="int",us,Et,Fa="=",vs,jt,qa="0",Ot,Ra=";",fs,Ft,Ua="<",ms,qt,Va="->",xs,Rt,Ba="();",Cs,Ut,Ga="++)",ys,ie,Ja="{",ws,gs,Vt,Ka='        distances<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">)</span> <span class="op">=</span> RayCast<span class="op">(</span>',bs,Bt,Qa='            hits<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">),</span> uTexCoords<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">),</span>',_s,Gt,Xa='            map<span class="op">,</span> scl<span class="op">,</span> mapWidth<span class="op">,</span> mapHeight<span class="op">,</span>',Ts,Jt,Ya='            <span class="co">// Angle each ray will travel at relative to the player&#39;s angle</span>',Ps,Kt,Za='            lerp<span class="op">(</span>PI <span class="op">*</span> <span class="fl">0.25</span><span class="op">,</span> PI <span class="op">*</span> <span class="op">-</span><span class="fl">0.25</span><span class="op">,</span> <span class="op">(</span><span class="dt">float</span><span class="op">)</span> i <span class="op">/</span> <span class="op">(</span><span class="dt">float</span><span class="op">)</span> distances<span class="op">-&gt;</span>size<span class="op">()));</span>',As,Qt,$a='    <span class="op">}</span>',Ss,Xt,tn='<span class="op">}</span>',be,M,en="About Raycasting",_e,Yt,sn=`The actual raycasting is the true meat of this program. There were
many edge cases, errors, and <strong>math things</strong> that I had to
wrap my head around, but I <em>think</em> I got most of them! I will try
to put together some good diagrams of the geometry/trig involved, but
first things first, what is the most efficient way of doing this
raycast? A while ago I had already built a 2D ray caster in JavaScript
and an HTML canvas element. Up until this point in code the steps were
exactly the same but when it came to actually casting the rays I took a
completly different simple, yet far less performant approach. For each
ray, a loop will step the ray forward little by little checking after
each step until a collision is detected. This isn’t great for many
reasons, the most glaring being the amount of checks that need to happen
for each screen render. 100+ rays are cast and each ray can take
anywhere from 25 to 250 checks. Obviously it was a lot easier than the
official Wolfenstein implementation and was still a good stepping stoen
to the more complex algorithm which I used in the C++ version.`,Te,Zt,an=`The method I used is performant because of its lack of taxing
operations, and being optimized for a grid which is the biggest
difference between a Wolfenstein and a DOOM renderer. Wolfenstein took
advatage of their map being entirely made out of equally sized squares,
while DOOM is a little more complex (or less depending on how
comfaterble you are with math). DOOM isn’t on a grid meaning it can
support different floor/ceiling heights and walls on angles using a
system of sectors and portals, while still remaining
<em>computationally</em> in 2D. Back to Wolfenstein’s approach, there
are two coodinate systems to keep track of, the map coordinates and the
world coordinates. The map coordinates only take into account the map
grid. Map space is bound by the <code>mapWidth</code> and
<code>mapHeight</code> variables mentioned before, 8x8 in my case, and
is where the coodinates of walls are considered. World coordinates hold
the player position and the positions of ray collisions. The main
difference is the scale between the two, as I mentioned
<code>mapWidth</code> and <code>mapHeight</code> govern map space, but
world space is as wide as the <code>mapWidth * scl</code> and as tall as
<code>mapHeight * scl</code>. World space is entirely the same as the
map space, but scalled up by <code>scl</code>, in this case 8. With this
in mind the <code>scl</code> variable is used frequently to flip values
between their map space and world space counterparts.`,Pe,$t,nn=`Because player position is held in world space we need a way to get
closer to the map space since the walls are held in map space. The first
step is to get the slope of our ray from the player angle plus its
offset calculated by the <code>lerp</code> in the
<code>TakePerspectives</code> function. From there we find the ray’s x
and y distance from the wall it is facing. This is done with some modulo
(<code>%</code>) math but essentiallywe take the players position and
find the remainder when divided byt he scale. THis gives us the distance
in world space from the right border of the cell the player is currently
in, and do the same for player’s y position, giving the distance from
the bottom of the cell the player is in. That being said the ray may not
be pointing down or the right and in that case, we need the same
distances but to the left and top of the cell. These are just found by
subtracting the values we already calculated from 8. Depending on the
direction we will use differnt values to begin finding the ray’s
distance. We treat the ray as a line in <code>y = mx + b</code> form and
get it’s slope with <code>float m = -std::tan(rayAngle)</code>.`,Ae,te,ln=`Now the actual raycasting happens in two parts, and this is because
of the two directions we can step the ray in, the vertical and
horizontal directions. First we step the ray forward by 1 map space in
the horizontal direciton and some corresponding vertical step based on
the slope. We step this ray until we find it has collided with a wall on
according to the map vector, the problem being if we only check for
collisions after horizontal steps of 1, we could miss a vertical wall
since they are being ingnored. For this reason we repeat the proces but
instead we step vertically by 1 and use the slope to calculate the
corresponding horizontal step. Simmilarly, we continue this until we
collide and we collect both collision points. At this point we have two
points on the same ray, one colliding with a horizontal wall, and one
with a vertical wall. I didn’t mention this before, but in case barriers
don’t exist or the rays stepping either horizontally or vertically never
collide with a horizontal or vertical wall respectively, there is a
<code>renderDistance</code> variable to limit the amount of steps a ray
can take. Now the horizontal and vertical ray’s have collision points
and we can find their distance from the player. The smaller distance is
the ray we will return to be our overall collided ray.`,Se,ee,on=`In addition to the distance the ray has traveled, we also want to
know what exactly it collided with, if anything, and where it collided
with that wall, for texturing purposes I will not get into here. What we
collided with can be used for simple texturing, for example, colliding
with a 2 in the <code>map</code> could indicate to the renderer to draw
different characters to the screen then if the ray were to collide with
a 1 or 3 in the <code>map</code>. These values of what is hit and the
texture coordinates are stored in the vectors <code>hits</code> and
<code>uTexCoords</code>. These are auxilliary features and the core of
the renderer lies in using the distance traveled for each ray
<em>only</em>.`,He,L,pn="The Rendering",Ne,se,rn=`From here the process is pretty straight forward. We now have a list
of values representing the distance each ray was able to travel before
colliding with a wall in a list <code>distances</code>. The length of
this list is equal to the width of the screen that ncurses provides.
This means we will map the length of each ray to the height of a
vertical line which are drawn across to populate the screen. Each one is
centered vertically and has a value called <code>fc</code> or from
center. This is the distance from either end of the line, to the
vertical center of the window. <code>fc</code> is calculated by dividing
the height of the screen in pixels, or characters in my case, by the
distance of the ray. This gives the effect of having a line almost as
high as the window when dividing by a small close ray, which would give
the illusion of that rays collision being close. Simmilarly a ray that
travels far will divide height by a larger number and produce a shorter
line. There is one more thing to mention regarding the raycast itself
though. With the algorithm as we have it now, a fisheye effect is
created because rays near the end of the player’s feild of vision have
to travel farther than a ray that is closer because of their off angle.
Some slightly more complex trig can be used to rectify this and get the
fixed distace for each ray, but I would encourage you to do your own
problem solving and research to try to remove this quirk. I hope this
helped, if you have any questions feel free to contact me via e-mail or
other services. The GitHub repo can be found <a href="https://github.com/EggbertFluffle/RaycastRenderer.git">here</a>.
Happy coding!`;return{c(){_=e("h1"),_.textContent=Ns,pe=f(),k=e("p"),k.innerHTML=Ms,re=f(),I=e("p"),I.innerHTML=Ls,ce=f(),A=e("h2"),A.textContent=ks,de=f(),z=e("p"),z.innerHTML=Is,he=f(),W=e("p"),W.textContent=zs,ue=f(),D=e("p"),D.innerHTML=Ws,ve=f(),S=e("h2"),S.textContent=Ds,fe=f(),E=e("p"),E.textContent=Es,me=f(),j=e("p"),j.textContent=js,xe=f(),H=e("div"),ae=e("pre"),x=e("code"),g=e("span"),O=e("span"),O.textContent=Os,Me=r("vector"),F=e("span"),F.textContent=Fs,q=e("span"),q.textContent=qs,R=e("span"),R.textContent=Rs,Le=r(" map "),U=e("span"),U.textContent=Us,ke=r(" "),ne=e("span"),Ie=r(Vs),ze=r(`
`),V=e("span"),V.innerHTML=Bs,We=r(`
`),B=e("span"),B.innerHTML=Gs,De=r(`
`),G=e("span"),G.innerHTML=Js,Ee=r(`
`),J=e("span"),J.innerHTML=Ks,je=r(`
`),K=e("span"),K.innerHTML=Qs,Oe=r(`
`),Q=e("span"),Q.innerHTML=Xs,Fe=r(`
`),X=e("span"),X.innerHTML=Ys,Ce=f(),Y=e("p"),Y.textContent=Zs,ye=f(),P=e("div"),P.innerHTML=$s,we=f(),Z=e("p"),Z.innerHTML=ta,ge=f(),N=e("div"),le=e("pre"),v=e("code"),o=e("span"),$=e("span"),$.textContent=ea,qe=r(" Player"),tt=e("span"),tt.textContent=sa,Re=r("TakePerspective"),et=e("span"),et.textContent=aa,st=e("span"),st.textContent=na,Ue=r("vector"),at=e("span"),at.textContent=la,nt=e("span"),nt.textContent=oa,lt=e("span"),lt.textContent=ia,Ve=r(" distances"),ot=e("span"),ot.textContent=pa,Be=r(" "),it=e("span"),it.textContent=ra,Ge=r("vector"),pt=e("span"),pt.textContent=ca,rt=e("span"),rt.textContent=da,ct=e("span"),ct.textContent=ha,Je=r(" hits"),dt=e("span"),dt.textContent=ua,Ke=r(" "),ht=e("span"),ht.textContent=va,Qe=r("vector"),ut=e("span"),ut.textContent=fa,vt=e("span"),vt.textContent=ma,ft=e("span"),ft.textContent=xa,Xe=r(" uTexCoords"),mt=e("span"),mt.textContent=Ca,Ye=r(" "),xt=e("span"),xt.textContent=ya,Ze=r("vector"),Ct=e("span"),Ct.textContent=wa,yt=e("span"),yt.textContent=ga,wt=e("span"),wt.textContent=ba,$e=r(" map"),gt=e("span"),gt.textContent=_a,ts=r(" "),bt=e("span"),bt.textContent=Ta,es=r(" "),_t=e("span"),_t.textContent=Pa,Tt=e("span"),Tt.textContent=Aa,ss=r(" scl"),Pt=e("span"),Pt.textContent=Sa,as=r(" "),At=e("span"),At.textContent=Ha,ns=r(" "),St=e("span"),St.textContent=Na,Ht=e("span"),Ht.textContent=Ma,ls=r(" mapWidth"),Nt=e("span"),Nt.textContent=La,os=r(" "),Mt=e("span"),Mt.textContent=ka,is=r(" "),Lt=e("span"),Lt.textContent=Ia,kt=e("span"),kt.textContent=za,ps=r(" mapHeight"),It=e("span"),It.textContent=Wa,rs=r(" "),oe=e("span"),cs=r(Da),ds=r(`
`),u=e("span"),hs=r("    "),zt=e("span"),zt.textContent=Ea,Wt=e("span"),Wt.textContent=ja,Dt=e("span"),Dt.textContent=Oa,us=r(" i "),Et=e("span"),Et.textContent=Fa,vs=r(" "),jt=e("span"),jt.textContent=qa,Ot=e("span"),Ot.textContent=Ra,fs=r(" i "),Ft=e("span"),Ft.textContent=Ua,ms=r(" distances"),qt=e("span"),qt.textContent=Va,xs=r("size"),Rt=e("span"),Rt.textContent=Ba,Cs=r(" i"),Ut=e("span"),Ut.textContent=Ga,ys=r(" "),ie=e("span"),ws=r(Ja),gs=r(`
`),Vt=e("span"),Vt.innerHTML=Ka,bs=r(`
`),Bt=e("span"),Bt.innerHTML=Qa,_s=r(`
`),Gt=e("span"),Gt.innerHTML=Xa,Ts=r(`
`),Jt=e("span"),Jt.innerHTML=Ya,Ps=r(`
`),Kt=e("span"),Kt.innerHTML=Za,As=r(`
`),Qt=e("span"),Qt.innerHTML=$a,Ss=r(`
`),Xt=e("span"),Xt.innerHTML=tn,be=f(),M=e("h2"),M.textContent=en,_e=f(),Yt=e("p"),Yt.innerHTML=sn,Te=f(),Zt=e("p"),Zt.innerHTML=an,Pe=f(),$t=e("p"),$t.innerHTML=nn,Ae=f(),te=e("p"),te.innerHTML=ln,Se=f(),ee=e("p"),ee.innerHTML=on,He=f(),L=e("h2"),L.textContent=pn,Ne=f(),se=e("p"),se.innerHTML=rn,this.h()},l(a){_=s(a,"H1",{id:!0,"data-svelte-h":!0}),n(_)!=="svelte-1vewfjg"&&(_.textContent=Ns),pe=m(a),k=s(a,"P",{"data-svelte-h":!0}),n(k)!=="svelte-1f0hi3y"&&(k.innerHTML=Ms),re=m(a),I=s(a,"P",{"data-svelte-h":!0}),n(I)!=="svelte-19nrsil"&&(I.innerHTML=Ls),ce=m(a),A=s(a,"H2",{id:!0,"data-svelte-h":!0}),n(A)!=="svelte-p88ani"&&(A.textContent=ks),de=m(a),z=s(a,"P",{"data-svelte-h":!0}),n(z)!=="svelte-6obkkx"&&(z.innerHTML=Is),he=m(a),W=s(a,"P",{"data-svelte-h":!0}),n(W)!=="svelte-mr3d1z"&&(W.textContent=zs),ue=m(a),D=s(a,"P",{"data-svelte-h":!0}),n(D)!=="svelte-1824dk2"&&(D.innerHTML=Ws),ve=m(a),S=s(a,"H2",{id:!0,"data-svelte-h":!0}),n(S)!=="svelte-3j3dc3"&&(S.textContent=Ds),fe=m(a),E=s(a,"P",{"data-svelte-h":!0}),n(E)!=="svelte-1cxnweb"&&(E.textContent=Es),me=m(a),j=s(a,"P",{"data-svelte-h":!0}),n(j)!=="svelte-vb94hd"&&(j.textContent=js),xe=m(a),H=s(a,"DIV",{class:!0,id:!0});var d=b(H);ae=s(d,"PRE",{class:!0});var cn=b(ae);x=s(cn,"CODE",{class:!0});var w=b(x);g=s(w,"SPAN",{id:!0});var T=b(g);O=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),n(O)!=="svelte-f2t3gz"&&(O.textContent=Os),Me=c(T,"vector"),F=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),n(F)!=="svelte-1b3orjh"&&(F.textContent=Fs),q=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),n(q)!=="svelte-1cu2y6w"&&(q.textContent=qs),R=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),n(R)!=="svelte-1ncbpgq"&&(R.textContent=Rs),Le=c(T," map "),U=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),n(U)!=="svelte-b4xhlj"&&(U.textContent=Us),ke=c(T," "),ne=s(T,"SPAN",{class:!0});var dn=b(ne);Ie=c(dn,Vs),dn.forEach(p),T.forEach(p),ze=c(w,`
`),V=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(V)!=="svelte-5zddpq"&&(V.innerHTML=Bs),We=c(w,`
`),B=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(B)!=="svelte-1adena9"&&(B.innerHTML=Gs),De=c(w,`
`),G=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(G)!=="svelte-g2w0y3"&&(G.innerHTML=Js),Ee=c(w,`
`),J=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(J)!=="svelte-opa0oz"&&(J.innerHTML=Ks),je=c(w,`
`),K=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(K)!=="svelte-1nkl4ry"&&(K.innerHTML=Qs),Oe=c(w,`
`),Q=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(Q)!=="svelte-9tp654"&&(Q.innerHTML=Xs),Fe=c(w,`
`),X=s(w,"SPAN",{id:!0,"data-svelte-h":!0}),n(X)!=="svelte-xmckry"&&(X.innerHTML=Ys),w.forEach(p),cn.forEach(p),d.forEach(p),Ce=m(a),Y=s(a,"P",{"data-svelte-h":!0}),n(Y)!=="svelte-1avrtef"&&(Y.textContent=Zs),ye=m(a),P=s(a,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),n(P)!=="svelte-1pm4d0n"&&(P.innerHTML=$s),we=m(a),Z=s(a,"P",{"data-svelte-h":!0}),n(Z)!=="svelte-slrewh"&&(Z.innerHTML=ta),ge=m(a),N=s(a,"DIV",{class:!0,id:!0});var hn=b(N);le=s(hn,"PRE",{class:!0});var un=b(le);v=s(un,"CODE",{class:!0});var y=b(v);o=s(y,"SPAN",{id:!0});var i=b(o);$=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n($)!=="svelte-lm5up7"&&($.textContent=ea),qe=c(i," Player"),tt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(tt)!=="svelte-rf4hhk"&&(tt.textContent=sa),Re=c(i,"TakePerspective"),et=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(et)!=="svelte-om7dis"&&(et.textContent=aa),st=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(st)!=="svelte-f2t3gz"&&(st.textContent=na),Ue=c(i,"vector"),at=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(at)!=="svelte-1b3orjh"&&(at.textContent=la),nt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(nt)!=="svelte-1neuh2n"&&(nt.textContent=oa),lt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(lt)!=="svelte-xigdkg"&&(lt.textContent=ia),Ve=c(i," distances"),ot=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(ot)!=="svelte-1nfhsgo"&&(ot.textContent=pa),Be=c(i," "),it=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(it)!=="svelte-f2t3gz"&&(it.textContent=ra),Ge=c(i,"vector"),pt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(pt)!=="svelte-1b3orjh"&&(pt.textContent=ca),rt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(rt)!=="svelte-1cu2y6w"&&(rt.textContent=da),ct=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(ct)!=="svelte-xigdkg"&&(ct.textContent=ha),Je=c(i," hits"),dt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(dt)!=="svelte-1nfhsgo"&&(dt.textContent=ua),Ke=c(i," "),ht=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(ht)!=="svelte-f2t3gz"&&(ht.textContent=va),Qe=c(i,"vector"),ut=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(ut)!=="svelte-1b3orjh"&&(ut.textContent=fa),vt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(vt)!=="svelte-1neuh2n"&&(vt.textContent=ma),ft=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(ft)!=="svelte-xigdkg"&&(ft.textContent=xa),Xe=c(i," uTexCoords"),mt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(mt)!=="svelte-1nfhsgo"&&(mt.textContent=Ca),Ye=c(i," "),xt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(xt)!=="svelte-f2t3gz"&&(xt.textContent=ya),Ze=c(i,"vector"),Ct=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Ct)!=="svelte-1b3orjh"&&(Ct.textContent=wa),yt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(yt)!=="svelte-1cu2y6w"&&(yt.textContent=ga),wt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(wt)!=="svelte-xigdkg"&&(wt.textContent=ba),$e=c(i," map"),gt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(gt)!=="svelte-1nfhsgo"&&(gt.textContent=_a),ts=c(i," "),bt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(bt)!=="svelte-1wl7105"&&(bt.textContent=Ta),es=c(i," "),_t=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(_t)!=="svelte-1neuh2n"&&(_t.textContent=Pa),Tt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Tt)!=="svelte-3ytzzy"&&(Tt.textContent=Aa),ss=c(i," scl"),Pt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Pt)!=="svelte-1nfhsgo"&&(Pt.textContent=Sa),as=c(i," "),At=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(At)!=="svelte-1wl7105"&&(At.textContent=Ha),ns=c(i," "),St=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(St)!=="svelte-1cu2y6w"&&(St.textContent=Na),Ht=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Ht)!=="svelte-3ytzzy"&&(Ht.textContent=Ma),ls=c(i," mapWidth"),Nt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Nt)!=="svelte-1nfhsgo"&&(Nt.textContent=La),os=c(i," "),Mt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Mt)!=="svelte-1wl7105"&&(Mt.textContent=ka),is=c(i," "),Lt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(Lt)!=="svelte-1cu2y6w"&&(Lt.textContent=Ia),kt=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(kt)!=="svelte-3ytzzy"&&(kt.textContent=za),ps=c(i," mapHeight"),It=s(i,"SPAN",{class:!0,"data-svelte-h":!0}),n(It)!=="svelte-1l0idvn"&&(It.textContent=Wa),rs=c(i," "),oe=s(i,"SPAN",{class:!0});var vn=b(oe);cs=c(vn,Da),vn.forEach(p),i.forEach(p),ds=c(y,`
`),u=s(y,"SPAN",{id:!0});var C=b(u);hs=c(C,"    "),zt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(zt)!=="svelte-2rmwfp"&&(zt.textContent=Ea),Wt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Wt)!=="svelte-om7dis"&&(Wt.textContent=ja),Dt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Dt)!=="svelte-1cu2y6w"&&(Dt.textContent=Oa),us=c(C," i "),Et=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Et)!=="svelte-b4xhlj"&&(Et.textContent=Fa),vs=c(C," "),jt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(jt)!=="svelte-1a7kqzb"&&(jt.textContent=qa),Ot=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Ot)!=="svelte-12pzswd"&&(Ot.textContent=Ra),fs=c(C," i "),Ft=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Ft)!=="svelte-1b3orjh"&&(Ft.textContent=Ua),ms=c(C," distances"),qt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(qt)!=="svelte-i8fftl"&&(qt.textContent=Va),xs=c(C,"size"),Rt=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Rt)!=="svelte-1iz5fw0"&&(Rt.textContent=Ba),Cs=c(C," i"),Ut=s(C,"SPAN",{class:!0,"data-svelte-h":!0}),n(Ut)!=="svelte-1f5yuw9"&&(Ut.textContent=Ga),ys=c(C," "),ie=s(C,"SPAN",{class:!0});var fn=b(ie);ws=c(fn,Ja),fn.forEach(p),C.forEach(p),gs=c(y,`
`),Vt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Vt)!=="svelte-10nr3bx"&&(Vt.innerHTML=Ka),bs=c(y,`
`),Bt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Bt)!=="svelte-1tf7ppr"&&(Bt.innerHTML=Qa),_s=c(y,`
`),Gt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Gt)!=="svelte-1cwi9y9"&&(Gt.innerHTML=Xa),Ts=c(y,`
`),Jt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Jt)!=="svelte-mvfi2l"&&(Jt.innerHTML=Ya),Ps=c(y,`
`),Kt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Kt)!=="svelte-1imc969"&&(Kt.innerHTML=Za),As=c(y,`
`),Qt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Qt)!=="svelte-10pha1b"&&(Qt.innerHTML=$a),Ss=c(y,`
`),Xt=s(y,"SPAN",{id:!0,"data-svelte-h":!0}),n(Xt)!=="svelte-1109efi"&&(Xt.innerHTML=tn),y.forEach(p),un.forEach(p),hn.forEach(p),be=m(a),M=s(a,"H2",{id:!0,"data-svelte-h":!0}),n(M)!=="svelte-1gx88a1"&&(M.textContent=en),_e=m(a),Yt=s(a,"P",{"data-svelte-h":!0}),n(Yt)!=="svelte-10frgpi"&&(Yt.innerHTML=sn),Te=m(a),Zt=s(a,"P",{"data-svelte-h":!0}),n(Zt)!=="svelte-1ap0i1o"&&(Zt.innerHTML=an),Pe=m(a),$t=s(a,"P",{"data-svelte-h":!0}),n($t)!=="svelte-1euwh40"&&($t.innerHTML=nn),Ae=m(a),te=s(a,"P",{"data-svelte-h":!0}),n(te)!=="svelte-ekensd"&&(te.innerHTML=ln),Se=m(a),ee=s(a,"P",{"data-svelte-h":!0}),n(ee)!=="svelte-1w45ih4"&&(ee.innerHTML=on),He=m(a),L=s(a,"H2",{id:!0,"data-svelte-h":!0}),n(L)!=="svelte-he77yr"&&(L.textContent=pn),Ne=m(a),se=s(a,"P",{"data-svelte-h":!0}),n(se)!=="svelte-ztgubg"&&(se.innerHTML=rn),this.h()},h(){l(_,"id","wolfenstein-terminal-raycaster"),l(A,"id","introduction"),l(S,"id","first-steps"),l(O,"class","bu"),l(F,"class","op"),l(q,"class","dt"),l(R,"class","op"),l(U,"class","op"),l(ne,"class","op"),l(g,"id","cb1-1"),l(V,"id","cb1-2"),l(B,"id","cb1-3"),l(G,"id","cb1-4"),l(J,"id","cb1-5"),l(K,"id","cb1-6"),l(Q,"id","cb1-7"),l(X,"id","cb1-8"),l(x,"class","sourceCode cpp"),l(ae,"class","sourceCode cpp"),l(H,"class","sourceCode"),l(H,"id","cb1"),l(P,"class","sourceCode"),l(P,"id","cb2"),l($,"class","dt"),l(tt,"class","op"),l(et,"class","op"),l(st,"class","bu"),l(at,"class","op"),l(nt,"class","dt"),l(lt,"class","op"),l(ot,"class","op"),l(it,"class","bu"),l(pt,"class","op"),l(rt,"class","dt"),l(ct,"class","op"),l(dt,"class","op"),l(ht,"class","bu"),l(ut,"class","op"),l(vt,"class","dt"),l(ft,"class","op"),l(mt,"class","op"),l(xt,"class","bu"),l(Ct,"class","op"),l(yt,"class","dt"),l(wt,"class","op"),l(gt,"class","op"),l(bt,"class","at"),l(_t,"class","dt"),l(Tt,"class","op"),l(Pt,"class","op"),l(At,"class","at"),l(St,"class","dt"),l(Ht,"class","op"),l(Nt,"class","op"),l(Mt,"class","at"),l(Lt,"class","dt"),l(kt,"class","op"),l(It,"class","op"),l(oe,"class","op"),l(o,"id","cb3-1"),l(zt,"class","cf"),l(Wt,"class","op"),l(Dt,"class","dt"),l(Et,"class","op"),l(jt,"class","dv"),l(Ot,"class","op"),l(Ft,"class","op"),l(qt,"class","op"),l(Rt,"class","op"),l(Ut,"class","op"),l(ie,"class","op"),l(u,"id","cb3-2"),l(Vt,"id","cb3-3"),l(Bt,"id","cb3-4"),l(Gt,"id","cb3-5"),l(Jt,"id","cb3-6"),l(Kt,"id","cb3-7"),l(Qt,"id","cb3-8"),l(Xt,"id","cb3-9"),l(v,"class","sourceCode cpp"),l(le,"class","sourceCode cpp"),l(N,"class","sourceCode"),l(N,"id","cb3"),l(M,"id","about-raycasting"),l(L,"id","the-rendering")},m(a,d){h(a,_,d),h(a,pe,d),h(a,k,d),h(a,re,d),h(a,I,d),h(a,ce,d),h(a,A,d),h(a,de,d),h(a,z,d),h(a,he,d),h(a,W,d),h(a,ue,d),h(a,D,d),h(a,ve,d),h(a,S,d),h(a,fe,d),h(a,E,d),h(a,me,d),h(a,j,d),h(a,xe,d),h(a,H,d),t(H,ae),t(ae,x),t(x,g),t(g,O),t(g,Me),t(g,F),t(g,q),t(g,R),t(g,Le),t(g,U),t(g,ke),t(g,ne),t(ne,Ie),t(x,ze),t(x,V),t(x,We),t(x,B),t(x,De),t(x,G),t(x,Ee),t(x,J),t(x,je),t(x,K),t(x,Oe),t(x,Q),t(x,Fe),t(x,X),h(a,Ce,d),h(a,Y,d),h(a,ye,d),h(a,P,d),h(a,we,d),h(a,Z,d),h(a,ge,d),h(a,N,d),t(N,le),t(le,v),t(v,o),t(o,$),t(o,qe),t(o,tt),t(o,Re),t(o,et),t(o,st),t(o,Ue),t(o,at),t(o,nt),t(o,lt),t(o,Ve),t(o,ot),t(o,Be),t(o,it),t(o,Ge),t(o,pt),t(o,rt),t(o,ct),t(o,Je),t(o,dt),t(o,Ke),t(o,ht),t(o,Qe),t(o,ut),t(o,vt),t(o,ft),t(o,Xe),t(o,mt),t(o,Ye),t(o,xt),t(o,Ze),t(o,Ct),t(o,yt),t(o,wt),t(o,$e),t(o,gt),t(o,ts),t(o,bt),t(o,es),t(o,_t),t(o,Tt),t(o,ss),t(o,Pt),t(o,as),t(o,At),t(o,ns),t(o,St),t(o,Ht),t(o,ls),t(o,Nt),t(o,os),t(o,Mt),t(o,is),t(o,Lt),t(o,kt),t(o,ps),t(o,It),t(o,rs),t(o,oe),t(oe,cs),t(v,ds),t(v,u),t(u,hs),t(u,zt),t(u,Wt),t(u,Dt),t(u,us),t(u,Et),t(u,vs),t(u,jt),t(u,Ot),t(u,fs),t(u,Ft),t(u,ms),t(u,qt),t(u,xs),t(u,Rt),t(u,Cs),t(u,Ut),t(u,ys),t(u,ie),t(ie,ws),t(v,gs),t(v,Vt),t(v,bs),t(v,Bt),t(v,_s),t(v,Gt),t(v,Ts),t(v,Jt),t(v,Ps),t(v,Kt),t(v,As),t(v,Qt),t(v,Ss),t(v,Xt),h(a,be,d),h(a,M,d),h(a,_e,d),h(a,Yt,d),h(a,Te,d),h(a,Zt,d),h(a,Pe,d),h(a,$t,d),h(a,Ae,d),h(a,te,d),h(a,Se,d),h(a,ee,d),h(a,He,d),h(a,L,d),h(a,Ne,d),h(a,se,d)},p:Hs,i:Hs,o:Hs,d(a){a&&(p(_),p(pe),p(k),p(re),p(I),p(ce),p(A),p(de),p(z),p(he),p(W),p(ue),p(D),p(ve),p(S),p(fe),p(E),p(me),p(j),p(xe),p(H),p(Ce),p(Y),p(ye),p(P),p(we),p(Z),p(ge),p(N),p(be),p(M),p(_e),p(Yt),p(Te),p(Zt),p(Pe),p($t),p(Ae),p(te),p(Se),p(ee),p(He),p(L),p(Ne),p(se))}}}class _n extends Cn{constructor(_){super(),yn(this,_,null,wn,xn,{})}}export{_n as component};
