import{a as bn,n as La}from"../chunks/scheduler.DDaOzR71.js";import{S as wn,i as gn,e as t,s as v,t as r,c as a,g as l,a as x,b as g,f as p,d as c,h as s,j as h,k as e}from"../chunks/index.CXL903QX.js";function _n(yn){let T,ka=`Wolfenstein Terminal
Raycaster`,dt,k,za=`So after watching a video by the youtube <a href="https://www.youtube.com/watch?v=fSjc8vLMg8c">jdh</a> I was
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
actual code present to a minimum.`,ht,z,Ia="<em>Also I like lists to its gonna be a list &lt;3</em>",ut,A,Wa="Introduction",ft,I,Da=`Wolfenstein 3D was a revolutionary game that was one of the first
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
actually the first step, 3D came <em>much</em> later.`,vt,W,Ea=`Put simply, 2D raycasting follows these simple steps: 1. Cast a ray
out from the player for each column of pixels on the screen 2. Follow
each ray until it collides with a wall or reaches some max distance 3.
Use the distance each ray traveled to create vertical lines on the
screen 4. Further ray distance = smaller screen line, shorter ray
distance = longer screen line`,xt,D,ja=`<em>Thats it.</em> This was oversimplified to not include some
equasions and probably the hardest part, how to calculate distances for
each ray but hopefully it demystifies(CHECK THAT SPELLING) how a 2D
raycaster like Wolfenstein 3D works.`,mt,S,Oa="First Steps",Ct,E,Fa=`Again, no platform spesifics, just the math, but first I initialize
ncurses and some other important setting inside of ncurses for control
handling. At the moment, w, a, s, and d are for strafing, t changes the
texturing method which I will touch more on later, m toggles mouse
support for the camera and j and k swivel the camera. Finnaly because 2D
raycasters are actually 2D, pressing p switches between the
perspectives: the top down map, and the actualy 3D projected view.
Although the top down is very useful for debugging, the 3D perspective
is the real prize.`,yt,j,qa=`Here is the map I will be working with. Anything that is not a zero
is a wall, the number of each wall comes in later for texturing.`,bt,H,it,C,w,O,F,Ra="std::",zt,q,Ua="<",R,Va="int",U,Ba=">",It,V,Ga="=",Wt,ot,Ja="{",Dt,Et,B,Ka='<a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>    <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',jt,G,Qa='<a href="#cb1-3" aria-hidden="true" tabindex="-1"></a>    <span class="dv">2</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span>',Ot,J,Xa='<a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>    <span class="dv">1</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">3</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',Ft,K,Ya='<a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="dv">2</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span>',qt,Q,Za='<a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>    <span class="dv">1</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">0</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span>',Rt,X,$a='<a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>    <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span><span class="op">,</span> <span class="dv">2</span><span class="op">,</span> <span class="dv">1</span>',Ut,Y,es='<a href="#cb1-8" aria-hidden="true" tabindex="-1"></a><span class="op">};</span>',wt,Z,ts=`First comes the intial calls to cast rays and as well as collect
their distances and a few other bits of data.`,gt,P,as=`<pre class="sourceCode cpp"><code class="sourceCode cpp"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="co">// width is the screen width</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="dt">int</span> lines <span class="op">=</span> width<span class="op">;</span></span>
<span id="cb2-3"><a href="#cb2-3" aria-hidden="true" tabindex="-1"></a><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">float</span><span class="op">&gt;</span> distances<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-4"><a href="#cb2-4" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-5"><a href="#cb2-5" aria-hidden="true" tabindex="-1"></a><span class="co">// The number assigned to the wall each ray collides with</span></span>
<span id="cb2-6"><a href="#cb2-6" aria-hidden="true" tabindex="-1"></a><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">int</span><span class="op">&gt;</span> hits<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-7"><a href="#cb2-7" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-8"><a href="#cb2-8" aria-hidden="true" tabindex="-1"></a><span class="co">// Important for texturing later</span></span>
<span id="cb2-9"><a href="#cb2-9" aria-hidden="true" tabindex="-1"></a><span class="bu">std::</span>vector<span class="op">&lt;</span><span class="dt">float</span><span class="op">&gt;</span> uTexCoords<span class="op">(</span>lines<span class="op">);</span></span>
<span id="cb2-10"><a href="#cb2-10" aria-hidden="true" tabindex="-1"></a></span>
<span id="cb2-11"><a href="#cb2-11" aria-hidden="true" tabindex="-1"></a><span class="co">// Cast rays and populate those lists with data</span></span>
<span id="cb2-12"><a href="#cb2-12" aria-hidden="true" tabindex="-1"></a>player<span class="op">.</span>TakePerspective<span class="op">(&amp;</span>distances<span class="op">,</span> <span class="op">&amp;</span>hits<span class="op">,</span> <span class="op">&amp;</span>uTexCoords<span class="op">,</span> <span class="op">&amp;</span>map<span class="op">,</span> <span class="op">&amp;</span>scl<span class="op">,</span> <span class="op">&amp;</span>mapWidth<span class="op">,</span> <span class="op">&amp;</span>mapHeight<span class="op">);</span></span></code></pre>`,_t,$,ss=`And <code>player::TakePerspectives</code> simply casts a ray for each
pixel in the width of the screen and linearly interpolates (lerps)
through the players field of view (FOV) to create evently spaced angled
for each ray to travel at. This creates a fan of rays centered around
the player’s angle, or heading. There is also a lot of important map
data we pass to almost all of the functions called, those being
<code>scl</code>, the size of each cell in the map grid, and
<code>map</code>, <code>mapWidth</code>, and <code>mapHeight</code>.`,Tt,N,pt,f,i,ee,te,ns="void",Vt,ae,ls="::",Bt,se,is="(",ne,os="std::",Gt,le,ps="<",ie,rs="float",oe,cs=">*",Jt,pe,ds=",",Kt,re,hs="std::",Qt,ce,us="<",de,fs="int",he,vs=">*",Xt,ue,xs=",",Yt,fe,ms="std::",Zt,ve,Cs="<",xe,ys="float",me,bs=">*",$t,Ce,ws=",",ea,ye,gs="std::",ta,be,_s="<",we,Ts="int",ge,Ps=">*",aa,_e,As=",",sa,Te,Ss="const",na,Pe,Hs="float",Ae,Ns="*",la,Se,Ms=",",ia,He,Ls="const",oa,Ne,ks="int",Me,zs="*",pa,Le,Is=",",ra,ke,Ws="const",ca,ze,Ds="int",Ie,Es="*",da,We,js=")",ha,rt,Os="{",ua,fa,u,De,va,Ee,Fs="for",je,qs="(",Oe,Rs="int",xa,Fe,Us="=",ma,qe,Vs="0",Re,Bs=";",Ca,Ue,Gs="<",ya,Ve,Js="->",ba,Be,Ks="();",wa,Ge,Qs="++)",ga,ct,Xs="{",_a,Ta,Je,Ys='<a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>        distances<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">)</span> <span class="op">=</span> RayCast<span class="op">(</span>',Pa,Ke,Zs='<a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>            hits<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">),</span> uTexCoords<span class="op">-&gt;</span>at<span class="op">(</span>i<span class="op">),</span>',Aa,Qe,$s='<a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>            map<span class="op">,</span> scl<span class="op">,</span> mapWidth<span class="op">,</span> mapHeight<span class="op">,</span>',Sa,Xe,en='<a href="#cb3-6" aria-hidden="true" tabindex="-1"></a>            <span class="co">// Angle each ray will travel at relative to the player&#39;s angle</span>',Ha,Ye,tn='<a href="#cb3-7" aria-hidden="true" tabindex="-1"></a>            lerp<span class="op">(</span>PI <span class="op">*</span> <span class="fl">0.25</span><span class="op">,</span> PI <span class="op">*</span> <span class="op">-</span><span class="fl">0.25</span><span class="op">,</span> <span class="op">(</span><span class="dt">float</span><span class="op">)</span> i <span class="op">/</span> <span class="op">(</span><span class="dt">float</span><span class="op">)</span> distances<span class="op">-&gt;</span>size<span class="op">()));</span>',Na,Ze,an='<a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>    <span class="op">}</span>',Ma,$e,sn='<a href="#cb3-9" aria-hidden="true" tabindex="-1"></a><span class="op">}</span>',Pt,M,nn="About Raycasting",At,et,ln=`The actual raycasting is the true meat of this program. There were
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
to the more complex algorithm which I used in the C++ version.`,St,tt,on=`The method I used is performant because of its lack of taxing
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
between their map space and world space counterparts.`,Ht,at,pn=`Because player position is held in world space we need a way to get
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
get it’s slope with <code>float m = -std::tan(rayAngle)</code>.`,Nt,st,rn=`Now the actual raycasting happens in two parts, and this is because
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
the ray we will return to be our overall collided ray.`,Mt,nt,cn=`In addition to the distance the ray has traveled, we also want to
know what exactly it collided with, if anything, and where it collided
with that wall, for texturing purposes I will not get into here. What we
collided with can be used for simple texturing, for example, colliding
with a 2 in the <code>map</code> could indicate to the renderer to draw
different characters to the screen then if the ray were to collide with
a 1 or 3 in the <code>map</code>. These values of what is hit and the
texture coordinates are stored in the vectors <code>hits</code> and
<code>uTexCoords</code>. These are auxilliary features and the core of
the renderer lies in using the distance traveled for each ray
<em>only</em>.`,Lt,L,dn="The Rendering",kt,lt,hn=`From here the process is pretty straight forward. We now have a list
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
Happy coding!`;return{c(){T=t("h1"),T.textContent=ka,dt=v(),k=t("p"),k.innerHTML=za,ht=v(),z=t("p"),z.innerHTML=Ia,ut=v(),A=t("h2"),A.textContent=Wa,ft=v(),I=t("p"),I.innerHTML=Da,vt=v(),W=t("p"),W.textContent=Ea,xt=v(),D=t("p"),D.innerHTML=ja,mt=v(),S=t("h2"),S.textContent=Oa,Ct=v(),E=t("p"),E.textContent=Fa,yt=v(),j=t("p"),j.textContent=qa,bt=v(),H=t("div"),it=t("pre"),C=t("code"),w=t("span"),O=t("a"),F=t("span"),F.textContent=Ra,zt=r("vector"),q=t("span"),q.textContent=Ua,R=t("span"),R.textContent=Va,U=t("span"),U.textContent=Ba,It=r(" map "),V=t("span"),V.textContent=Ga,Wt=r(" "),ot=t("span"),Dt=r(Ja),Et=r(`
`),B=t("span"),B.innerHTML=Ka,jt=r(`
`),G=t("span"),G.innerHTML=Qa,Ot=r(`
`),J=t("span"),J.innerHTML=Xa,Ft=r(`
`),K=t("span"),K.innerHTML=Ya,qt=r(`
`),Q=t("span"),Q.innerHTML=Za,Rt=r(`
`),X=t("span"),X.innerHTML=$a,Ut=r(`
`),Y=t("span"),Y.innerHTML=es,wt=v(),Z=t("p"),Z.textContent=ts,gt=v(),P=t("div"),P.innerHTML=as,_t=v(),$=t("p"),$.innerHTML=ss,Tt=v(),N=t("div"),pt=t("pre"),f=t("code"),i=t("span"),ee=t("a"),te=t("span"),te.textContent=ns,Vt=r(" Player"),ae=t("span"),ae.textContent=ls,Bt=r("TakePerspective"),se=t("span"),se.textContent=is,ne=t("span"),ne.textContent=os,Gt=r("vector"),le=t("span"),le.textContent=ps,ie=t("span"),ie.textContent=rs,oe=t("span"),oe.textContent=cs,Jt=r(" distances"),pe=t("span"),pe.textContent=ds,Kt=r(" "),re=t("span"),re.textContent=hs,Qt=r("vector"),ce=t("span"),ce.textContent=us,de=t("span"),de.textContent=fs,he=t("span"),he.textContent=vs,Xt=r(" hits"),ue=t("span"),ue.textContent=xs,Yt=r(" "),fe=t("span"),fe.textContent=ms,Zt=r("vector"),ve=t("span"),ve.textContent=Cs,xe=t("span"),xe.textContent=ys,me=t("span"),me.textContent=bs,$t=r(" uTexCoords"),Ce=t("span"),Ce.textContent=ws,ea=r(" "),ye=t("span"),ye.textContent=gs,ta=r("vector"),be=t("span"),be.textContent=_s,we=t("span"),we.textContent=Ts,ge=t("span"),ge.textContent=Ps,aa=r(" map"),_e=t("span"),_e.textContent=As,sa=r(" "),Te=t("span"),Te.textContent=Ss,na=r(" "),Pe=t("span"),Pe.textContent=Hs,Ae=t("span"),Ae.textContent=Ns,la=r(" scl"),Se=t("span"),Se.textContent=Ms,ia=r(" "),He=t("span"),He.textContent=Ls,oa=r(" "),Ne=t("span"),Ne.textContent=ks,Me=t("span"),Me.textContent=zs,pa=r(" mapWidth"),Le=t("span"),Le.textContent=Is,ra=r(" "),ke=t("span"),ke.textContent=Ws,ca=r(" "),ze=t("span"),ze.textContent=Ds,Ie=t("span"),Ie.textContent=Es,da=r(" mapHeight"),We=t("span"),We.textContent=js,ha=r(" "),rt=t("span"),ua=r(Os),fa=r(`
`),u=t("span"),De=t("a"),va=r("    "),Ee=t("span"),Ee.textContent=Fs,je=t("span"),je.textContent=qs,Oe=t("span"),Oe.textContent=Rs,xa=r(" i "),Fe=t("span"),Fe.textContent=Us,ma=r(" "),qe=t("span"),qe.textContent=Vs,Re=t("span"),Re.textContent=Bs,Ca=r(" i "),Ue=t("span"),Ue.textContent=Gs,ya=r(" distances"),Ve=t("span"),Ve.textContent=Js,ba=r("size"),Be=t("span"),Be.textContent=Ks,wa=r(" i"),Ge=t("span"),Ge.textContent=Qs,ga=r(" "),ct=t("span"),_a=r(Xs),Ta=r(`
`),Je=t("span"),Je.innerHTML=Ys,Pa=r(`
`),Ke=t("span"),Ke.innerHTML=Zs,Aa=r(`
`),Qe=t("span"),Qe.innerHTML=$s,Sa=r(`
`),Xe=t("span"),Xe.innerHTML=en,Ha=r(`
`),Ye=t("span"),Ye.innerHTML=tn,Na=r(`
`),Ze=t("span"),Ze.innerHTML=an,Ma=r(`
`),$e=t("span"),$e.innerHTML=sn,Pt=v(),M=t("h2"),M.textContent=nn,At=v(),et=t("p"),et.innerHTML=ln,St=v(),tt=t("p"),tt.innerHTML=on,Ht=v(),at=t("p"),at.innerHTML=pn,Nt=v(),st=t("p"),st.innerHTML=rn,Mt=v(),nt=t("p"),nt.innerHTML=cn,Lt=v(),L=t("h2"),L.textContent=dn,kt=v(),lt=t("p"),lt.innerHTML=hn,this.h()},l(n){T=a(n,"H1",{id:!0,"data-svelte-h":!0}),l(T)!=="svelte-1vewfjg"&&(T.textContent=ka),dt=x(n),k=a(n,"P",{"data-svelte-h":!0}),l(k)!=="svelte-1f0hi3y"&&(k.innerHTML=za),ht=x(n),z=a(n,"P",{"data-svelte-h":!0}),l(z)!=="svelte-19nrsil"&&(z.innerHTML=Ia),ut=x(n),A=a(n,"H2",{id:!0,"data-svelte-h":!0}),l(A)!=="svelte-p88ani"&&(A.textContent=Wa),ft=x(n),I=a(n,"P",{"data-svelte-h":!0}),l(I)!=="svelte-6obkkx"&&(I.innerHTML=Da),vt=x(n),W=a(n,"P",{"data-svelte-h":!0}),l(W)!=="svelte-mr3d1z"&&(W.textContent=Ea),xt=x(n),D=a(n,"P",{"data-svelte-h":!0}),l(D)!=="svelte-1824dk2"&&(D.innerHTML=ja),mt=x(n),S=a(n,"H2",{id:!0,"data-svelte-h":!0}),l(S)!=="svelte-3j3dc3"&&(S.textContent=Oa),Ct=x(n),E=a(n,"P",{"data-svelte-h":!0}),l(E)!=="svelte-1cxnweb"&&(E.textContent=Fa),yt=x(n),j=a(n,"P",{"data-svelte-h":!0}),l(j)!=="svelte-vb94hd"&&(j.textContent=qa),bt=x(n),H=a(n,"DIV",{class:!0,id:!0});var d=g(H);it=a(d,"PRE",{class:!0});var un=g(it);C=a(un,"CODE",{class:!0});var b=g(C);w=a(b,"SPAN",{id:!0});var _=g(w);O=a(_,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),g(O).forEach(p),F=a(_,"SPAN",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-f2t3gz"&&(F.textContent=Ra),zt=c(_,"vector"),q=a(_,"SPAN",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1b3orjh"&&(q.textContent=Ua),R=a(_,"SPAN",{class:!0,"data-svelte-h":!0}),l(R)!=="svelte-1cu2y6w"&&(R.textContent=Va),U=a(_,"SPAN",{class:!0,"data-svelte-h":!0}),l(U)!=="svelte-1ncbpgq"&&(U.textContent=Ba),It=c(_," map "),V=a(_,"SPAN",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-b4xhlj"&&(V.textContent=Ga),Wt=c(_," "),ot=a(_,"SPAN",{class:!0});var fn=g(ot);Dt=c(fn,Ja),fn.forEach(p),_.forEach(p),Et=c(b,`
`),B=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(B)!=="svelte-rjek0m"&&(B.innerHTML=Ka),jt=c(b,`
`),G=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(G)!=="svelte-op40yq"&&(G.innerHTML=Qa),Ot=c(b,`
`),J=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(J)!=="svelte-18ghob5"&&(J.innerHTML=Xa),Ft=c(b,`
`),K=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(K)!=="svelte-u4xxzm"&&(K.innerHTML=Ya),qt=c(b,`
`),Q=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(Q)!=="svelte-2sl2uy"&&(Q.innerHTML=Za),Rt=c(b,`
`),X=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(X)!=="svelte-jq5bzn"&&(X.innerHTML=$a),Ut=c(b,`
`),Y=a(b,"SPAN",{id:!0,"data-svelte-h":!0}),l(Y)!=="svelte-1rztev0"&&(Y.innerHTML=es),b.forEach(p),un.forEach(p),d.forEach(p),wt=x(n),Z=a(n,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-1avrtef"&&(Z.textContent=ts),gt=x(n),P=a(n,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),l(P)!=="svelte-18ge38o"&&(P.innerHTML=as),_t=x(n),$=a(n,"P",{"data-svelte-h":!0}),l($)!=="svelte-slrewh"&&($.innerHTML=ss),Tt=x(n),N=a(n,"DIV",{class:!0,id:!0});var vn=g(N);pt=a(vn,"PRE",{class:!0});var xn=g(pt);f=a(xn,"CODE",{class:!0});var y=g(f);i=a(y,"SPAN",{id:!0});var o=g(i);ee=a(o,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),g(ee).forEach(p),te=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(te)!=="svelte-lm5up7"&&(te.textContent=ns),Vt=c(o," Player"),ae=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ae)!=="svelte-rf4hhk"&&(ae.textContent=ls),Bt=c(o,"TakePerspective"),se=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(se)!=="svelte-om7dis"&&(se.textContent=is),ne=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ne)!=="svelte-f2t3gz"&&(ne.textContent=os),Gt=c(o,"vector"),le=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(le)!=="svelte-1b3orjh"&&(le.textContent=ps),ie=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ie)!=="svelte-1neuh2n"&&(ie.textContent=rs),oe=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(oe)!=="svelte-xigdkg"&&(oe.textContent=cs),Jt=c(o," distances"),pe=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(pe)!=="svelte-1nfhsgo"&&(pe.textContent=ds),Kt=c(o," "),re=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(re)!=="svelte-f2t3gz"&&(re.textContent=hs),Qt=c(o,"vector"),ce=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ce)!=="svelte-1b3orjh"&&(ce.textContent=us),de=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(de)!=="svelte-1cu2y6w"&&(de.textContent=fs),he=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(he)!=="svelte-xigdkg"&&(he.textContent=vs),Xt=c(o," hits"),ue=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ue)!=="svelte-1nfhsgo"&&(ue.textContent=xs),Yt=c(o," "),fe=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(fe)!=="svelte-f2t3gz"&&(fe.textContent=ms),Zt=c(o,"vector"),ve=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ve)!=="svelte-1b3orjh"&&(ve.textContent=Cs),xe=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(xe)!=="svelte-1neuh2n"&&(xe.textContent=ys),me=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(me)!=="svelte-xigdkg"&&(me.textContent=bs),$t=c(o," uTexCoords"),Ce=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ce)!=="svelte-1nfhsgo"&&(Ce.textContent=ws),ea=c(o," "),ye=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ye)!=="svelte-f2t3gz"&&(ye.textContent=gs),ta=c(o,"vector"),be=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(be)!=="svelte-1b3orjh"&&(be.textContent=_s),we=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(we)!=="svelte-1cu2y6w"&&(we.textContent=Ts),ge=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ge)!=="svelte-xigdkg"&&(ge.textContent=Ps),aa=c(o," map"),_e=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(_e)!=="svelte-1nfhsgo"&&(_e.textContent=As),sa=c(o," "),Te=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Te)!=="svelte-1wl7105"&&(Te.textContent=Ss),na=c(o," "),Pe=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Pe)!=="svelte-1neuh2n"&&(Pe.textContent=Hs),Ae=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ae)!=="svelte-3ytzzy"&&(Ae.textContent=Ns),la=c(o," scl"),Se=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Se)!=="svelte-1nfhsgo"&&(Se.textContent=Ms),ia=c(o," "),He=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(He)!=="svelte-1wl7105"&&(He.textContent=Ls),oa=c(o," "),Ne=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ne)!=="svelte-1cu2y6w"&&(Ne.textContent=ks),Me=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Me)!=="svelte-3ytzzy"&&(Me.textContent=zs),pa=c(o," mapWidth"),Le=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Le)!=="svelte-1nfhsgo"&&(Le.textContent=Is),ra=c(o," "),ke=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ke)!=="svelte-1wl7105"&&(ke.textContent=Ws),ca=c(o," "),ze=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(ze)!=="svelte-1cu2y6w"&&(ze.textContent=Ds),Ie=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ie)!=="svelte-3ytzzy"&&(Ie.textContent=Es),da=c(o," mapHeight"),We=a(o,"SPAN",{class:!0,"data-svelte-h":!0}),l(We)!=="svelte-1l0idvn"&&(We.textContent=js),ha=c(o," "),rt=a(o,"SPAN",{class:!0});var mn=g(rt);ua=c(mn,Os),mn.forEach(p),o.forEach(p),fa=c(y,`
`),u=a(y,"SPAN",{id:!0});var m=g(u);De=a(m,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),g(De).forEach(p),va=c(m,"    "),Ee=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ee)!=="svelte-2rmwfp"&&(Ee.textContent=Fs),je=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(je)!=="svelte-om7dis"&&(je.textContent=qs),Oe=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Oe)!=="svelte-1cu2y6w"&&(Oe.textContent=Rs),xa=c(m," i "),Fe=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Fe)!=="svelte-b4xhlj"&&(Fe.textContent=Us),ma=c(m," "),qe=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(qe)!=="svelte-1a7kqzb"&&(qe.textContent=Vs),Re=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Re)!=="svelte-12pzswd"&&(Re.textContent=Bs),Ca=c(m," i "),Ue=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ue)!=="svelte-1b3orjh"&&(Ue.textContent=Gs),ya=c(m," distances"),Ve=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ve)!=="svelte-i8fftl"&&(Ve.textContent=Js),ba=c(m,"size"),Be=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Be)!=="svelte-1iz5fw0"&&(Be.textContent=Ks),wa=c(m," i"),Ge=a(m,"SPAN",{class:!0,"data-svelte-h":!0}),l(Ge)!=="svelte-1f5yuw9"&&(Ge.textContent=Qs),ga=c(m," "),ct=a(m,"SPAN",{class:!0});var Cn=g(ct);_a=c(Cn,Xs),Cn.forEach(p),m.forEach(p),Ta=c(y,`
`),Je=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Je)!=="svelte-fw4tuo"&&(Je.innerHTML=Ys),Pa=c(y,`
`),Ke=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Ke)!=="svelte-kml5kn"&&(Ke.innerHTML=Zs),Aa=c(y,`
`),Qe=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Qe)!=="svelte-1dchuii"&&(Qe.innerHTML=$s),Sa=c(y,`
`),Xe=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Xe)!=="svelte-18ham3f"&&(Xe.innerHTML=en),Ha=c(y,`
`),Ye=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Ye)!=="svelte-17hopig"&&(Ye.innerHTML=tn),Na=c(y,`
`),Ze=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l(Ze)!=="svelte-oo1kcb"&&(Ze.innerHTML=an),Ma=c(y,`
`),$e=a(y,"SPAN",{id:!0,"data-svelte-h":!0}),l($e)!=="svelte-cit0wp"&&($e.innerHTML=sn),y.forEach(p),xn.forEach(p),vn.forEach(p),Pt=x(n),M=a(n,"H2",{id:!0,"data-svelte-h":!0}),l(M)!=="svelte-1gx88a1"&&(M.textContent=nn),At=x(n),et=a(n,"P",{"data-svelte-h":!0}),l(et)!=="svelte-10frgpi"&&(et.innerHTML=ln),St=x(n),tt=a(n,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-1ap0i1o"&&(tt.innerHTML=on),Ht=x(n),at=a(n,"P",{"data-svelte-h":!0}),l(at)!=="svelte-1euwh40"&&(at.innerHTML=pn),Nt=x(n),st=a(n,"P",{"data-svelte-h":!0}),l(st)!=="svelte-ekensd"&&(st.innerHTML=rn),Mt=x(n),nt=a(n,"P",{"data-svelte-h":!0}),l(nt)!=="svelte-1w45ih4"&&(nt.innerHTML=cn),Lt=x(n),L=a(n,"H2",{id:!0,"data-svelte-h":!0}),l(L)!=="svelte-he77yr"&&(L.textContent=dn),kt=x(n),lt=a(n,"P",{"data-svelte-h":!0}),l(lt)!=="svelte-ztgubg"&&(lt.innerHTML=hn),this.h()},h(){s(T,"id","wolfenstein-terminal-raycaster"),s(A,"id","introduction"),s(S,"id","first-steps"),s(O,"href","#cb1-1"),s(O,"aria-hidden","true"),s(O,"tabindex","-1"),s(F,"class","bu"),s(q,"class","op"),s(R,"class","dt"),s(U,"class","op"),s(V,"class","op"),s(ot,"class","op"),s(w,"id","cb1-1"),s(B,"id","cb1-2"),s(G,"id","cb1-3"),s(J,"id","cb1-4"),s(K,"id","cb1-5"),s(Q,"id","cb1-6"),s(X,"id","cb1-7"),s(Y,"id","cb1-8"),s(C,"class","sourceCode cpp"),s(it,"class","sourceCode cpp"),s(H,"class","sourceCode"),s(H,"id","cb1"),s(P,"class","sourceCode"),s(P,"id","cb2"),s(ee,"href","#cb3-1"),s(ee,"aria-hidden","true"),s(ee,"tabindex","-1"),s(te,"class","dt"),s(ae,"class","op"),s(se,"class","op"),s(ne,"class","bu"),s(le,"class","op"),s(ie,"class","dt"),s(oe,"class","op"),s(pe,"class","op"),s(re,"class","bu"),s(ce,"class","op"),s(de,"class","dt"),s(he,"class","op"),s(ue,"class","op"),s(fe,"class","bu"),s(ve,"class","op"),s(xe,"class","dt"),s(me,"class","op"),s(Ce,"class","op"),s(ye,"class","bu"),s(be,"class","op"),s(we,"class","dt"),s(ge,"class","op"),s(_e,"class","op"),s(Te,"class","at"),s(Pe,"class","dt"),s(Ae,"class","op"),s(Se,"class","op"),s(He,"class","at"),s(Ne,"class","dt"),s(Me,"class","op"),s(Le,"class","op"),s(ke,"class","at"),s(ze,"class","dt"),s(Ie,"class","op"),s(We,"class","op"),s(rt,"class","op"),s(i,"id","cb3-1"),s(De,"href","#cb3-2"),s(De,"aria-hidden","true"),s(De,"tabindex","-1"),s(Ee,"class","cf"),s(je,"class","op"),s(Oe,"class","dt"),s(Fe,"class","op"),s(qe,"class","dv"),s(Re,"class","op"),s(Ue,"class","op"),s(Ve,"class","op"),s(Be,"class","op"),s(Ge,"class","op"),s(ct,"class","op"),s(u,"id","cb3-2"),s(Je,"id","cb3-3"),s(Ke,"id","cb3-4"),s(Qe,"id","cb3-5"),s(Xe,"id","cb3-6"),s(Ye,"id","cb3-7"),s(Ze,"id","cb3-8"),s($e,"id","cb3-9"),s(f,"class","sourceCode cpp"),s(pt,"class","sourceCode cpp"),s(N,"class","sourceCode"),s(N,"id","cb3"),s(M,"id","about-raycasting"),s(L,"id","the-rendering")},m(n,d){h(n,T,d),h(n,dt,d),h(n,k,d),h(n,ht,d),h(n,z,d),h(n,ut,d),h(n,A,d),h(n,ft,d),h(n,I,d),h(n,vt,d),h(n,W,d),h(n,xt,d),h(n,D,d),h(n,mt,d),h(n,S,d),h(n,Ct,d),h(n,E,d),h(n,yt,d),h(n,j,d),h(n,bt,d),h(n,H,d),e(H,it),e(it,C),e(C,w),e(w,O),e(w,F),e(w,zt),e(w,q),e(w,R),e(w,U),e(w,It),e(w,V),e(w,Wt),e(w,ot),e(ot,Dt),e(C,Et),e(C,B),e(C,jt),e(C,G),e(C,Ot),e(C,J),e(C,Ft),e(C,K),e(C,qt),e(C,Q),e(C,Rt),e(C,X),e(C,Ut),e(C,Y),h(n,wt,d),h(n,Z,d),h(n,gt,d),h(n,P,d),h(n,_t,d),h(n,$,d),h(n,Tt,d),h(n,N,d),e(N,pt),e(pt,f),e(f,i),e(i,ee),e(i,te),e(i,Vt),e(i,ae),e(i,Bt),e(i,se),e(i,ne),e(i,Gt),e(i,le),e(i,ie),e(i,oe),e(i,Jt),e(i,pe),e(i,Kt),e(i,re),e(i,Qt),e(i,ce),e(i,de),e(i,he),e(i,Xt),e(i,ue),e(i,Yt),e(i,fe),e(i,Zt),e(i,ve),e(i,xe),e(i,me),e(i,$t),e(i,Ce),e(i,ea),e(i,ye),e(i,ta),e(i,be),e(i,we),e(i,ge),e(i,aa),e(i,_e),e(i,sa),e(i,Te),e(i,na),e(i,Pe),e(i,Ae),e(i,la),e(i,Se),e(i,ia),e(i,He),e(i,oa),e(i,Ne),e(i,Me),e(i,pa),e(i,Le),e(i,ra),e(i,ke),e(i,ca),e(i,ze),e(i,Ie),e(i,da),e(i,We),e(i,ha),e(i,rt),e(rt,ua),e(f,fa),e(f,u),e(u,De),e(u,va),e(u,Ee),e(u,je),e(u,Oe),e(u,xa),e(u,Fe),e(u,ma),e(u,qe),e(u,Re),e(u,Ca),e(u,Ue),e(u,ya),e(u,Ve),e(u,ba),e(u,Be),e(u,wa),e(u,Ge),e(u,ga),e(u,ct),e(ct,_a),e(f,Ta),e(f,Je),e(f,Pa),e(f,Ke),e(f,Aa),e(f,Qe),e(f,Sa),e(f,Xe),e(f,Ha),e(f,Ye),e(f,Na),e(f,Ze),e(f,Ma),e(f,$e),h(n,Pt,d),h(n,M,d),h(n,At,d),h(n,et,d),h(n,St,d),h(n,tt,d),h(n,Ht,d),h(n,at,d),h(n,Nt,d),h(n,st,d),h(n,Mt,d),h(n,nt,d),h(n,Lt,d),h(n,L,d),h(n,kt,d),h(n,lt,d)},p:La,i:La,o:La,d(n){n&&(p(T),p(dt),p(k),p(ht),p(z),p(ut),p(A),p(ft),p(I),p(vt),p(W),p(xt),p(D),p(mt),p(S),p(Ct),p(E),p(yt),p(j),p(bt),p(H),p(wt),p(Z),p(gt),p(P),p(_t),p($),p(Tt),p(N),p(Pt),p(M),p(At),p(et),p(St),p(tt),p(Ht),p(at),p(Nt),p(st),p(Mt),p(nt),p(Lt),p(L),p(kt),p(lt))}}}class An extends wn{constructor(T){super(),gn(this,T,null,_n,bn,{})}}export{An as component};
