import{a as Pr,n as po}from"../chunks/scheduler.DDaOzR71.js";import{S as Sr,i as Ar,e,s as y,t as l,c as s,g as a,a as _,b as v,d as o,f as p,h as n,j as u,k as t}from"../chunks/index.CXL903QX.js";function Nr(kr){let q,ro="Minecraft Clone",Qs,X,co=`Honestly I’m surprise I haven’t created something of a Minecraft
clone already. I originally just wanted to play around with more in
depth graphics programming (in 3D specifically) and prior to this I had
only ever used <a href="https://processing.org/">Processing</a> and <a href="https://p5js.org/">p5.js</a>’s 3D rendering capabilities, as well
as <a href="https://threejs.org/">Three.js</a> for a cool basic online
multiplayer game. Obviously these come with the benefits of JavaScript,
but sadly,they also come with the drawbacks of JavaScript (or Java in
the case of Processing). Because of this and a desire to improve my
handle on the C++ standard lib, STL and language in general, I decided
between OpenGL or Vulkan, which led me to pick OpenGL almost
arbitrarily. I’ve heard a lot about the two previously, and from my
limited research I found that Vulkan was more “low-level” than OpenGL
and therefore could get more performance squeezed out of it, but still
it was harder and this was my first time being in the weeds of graphics
programming, so I thought I’d make things easy for myself and switch
later if I felt I needed to.`,Xs,Z,ho=`At this point, the people of reddit praised <a href="https://learnopengl.com/">learnopengl.org</a> so I followed it’s
tutorials, and would recommend it, or it’s physical bool version, to
anyone interested in dipping their toes. Either way, I got through the
basics of rendering and started to figure out how I would put together a
little Minecraft simulation, which I ended up deciding to call <a href="https://github.com/EggbertFluffle/Mingleburb">Mingleburb</a> for
no reason other than I thought it was funny.`,Zs,tt,uo="First, what do I want to happen with this little experiment:",tn,D,fo=`<li>I want to be able to render blocks of different textures with culled
faces (more on that later)</li> <li>Those blocks should be generated using Perlin Noise and held in
chunks</li> <li>There should be free cam controls using the wasd and arrow key/mouse
controls</li> <li>Blocks should be removable and placable by the player relative to
where they look</li> <li>The entire project should be organized, from the make files, to the
encapsulation of classes</li>`,en,G,vo="World Data (pt.1)",sn,et,xo=`The first and easiest bit to tackle was the creation of rendered
blocks, and to do this I started by just creating a simple block struct
that held some data. In my thinking, I wanted to hold the least amount
of data possible for each block, and tried to make it’s footprint as
small as possible. I’ll talk about the faces member variable later, but
the others are pretty self explanatory, though they were modified later
to be more efficient (as of now I’m being punished for fixing something
that already worked as the entire simulation is bugged because of my
memory greed T-T).`,nn,O,Es,g,st,Co='<span class="co">//  Block.hpp</span>',Pn,$s,Sn,W,nt,mo="struct",An,Bs,bo="{",Nn,Tn,at,go='    <span class="bu">std::</span>stirng texture<span class="op">;</span> <span class="co">// Texture name for block</span>',Mn,lt,wo='    <span class="dt">unsigned</span> <span class="dt">char</span> faces<span class="op">;</span> <span class="co">// Which faces of the block are visible</span>',Ln,ot,yo='    <span class="dt">bool</span> air<span class="op">;</span> <span class="co">// Is this an air block</span>',Hn,Us,In,I,zn,it,_o="()",jn,pt,ko=":",En,rt,Po="(",ct,So="true",dt,Ao=")",Bn,ht,No="{",qn,Dn,Gn,b,On,ut,To="(",ft,Mo="const",Wn,vt,Lo="char",xt,Ho="*",Fn,Ct,Io=")",Rn,mt,zo=":",Vn,bt,jo="(",Jn,gt,Eo="),",$n,wt,Bo="(",yt,qo="false",_t,Do=")",Un,kt,Go="{",Kn,Yn,Qn,Pt,Oo='<span class="op">};</span>',an,F,Xn,St,Zn,Wo="{",ta,ea,sa,ln,R,Fo="Player Controls",on,At,Ro=`This proved to have two main challenges. First, I was completely
ignorant to callbacks in C and C++, and for some reason didn’t just
Google it like any normal person, instead just messing around with
global variables and gross c-style type casts until something worked.
After that was more or less solved, I was onto camera movement. There
are 3 directions I needed to concern myself with. And the way camera
rotation functions in OpenGL is you give the camera a position for
itself, and a position to look at. To combat this I just kept track of
the pitch and yaw with variables in the Player class, and added a unit
vector to the camera position according to those angles to give the
camera the correct position. After some struggling this turned out as so
<code>lookDir = glm::normalize(glm::vec3(std::cos(yaw), std::tan(pitch), std::sin(yaw)));</code>
(glm being a math library for constructs such as vectors, quaternions
and matrices commonly used to interface with OpenGL and GLSL shaders).
With that done, I just attached these rotations to change when the arrow
keys are pressed via the Player’s InputManager class and would also
attach these variables to the change in mouse position to give mouse
controls which are toggle-able via the Globals.hpp file. As far as
camera translation goes, it really is just some similar trigonometry. We
need to translate <em>local</em> movement to <em>global</em> movement.
This means if I press w I want the player, from it’s perspective to move
forward, or increase it’s z position. But because the player can
manipulate its pitch rotation, meaning that increasing the player’s
local z almost never translates directly to changing its global z.
Therefore we increase the players global z by the
<code>std::cos(yaw) * z + std::cos(yaw + PI / 2) * x</code> in the world
x direction, where the x and y in that equation represent the player’s
local translation. This extends to
<code>std::sin(yaw) * z + std::sin(yaw + PI / 2) * x</code> in the world
z direction, and y is just directly mapped from local to world
translation.`,pn,V,Vo="Face Culling",rn,Nt,Jo=`Next up was face culling, which tells the renderer to only draw faces
that the player is <em>able</em> to see to the screen. This effectively
means if a block is next to another block, don’t draw either of the
faves that touch, that also means that we only really render the
surfaces that touch air blocks on the surface (the surface being at y =
5 on a 10 x 10 x 10 “chunk”). This came with A LOT of segmentation
faults that I had not the foggiest idea on how to debug. I eventually
found the program GDB which is used to help debug c and c++ programs (I
think) and was able to at least get the callstack before the segfault
occurred. Still these remained insanely difficult to debug and iron out
and a lot of considerations had to come into play. First I had to deduce
how to tell OpenGL to render a block with missing faces, which was
actually the majority of the blocks in the world. I came up with using
an <code>unsigned char</code> to store each face. One pattern I decided
on early is that if I had to refer to each axis in the 3D world or the
faces of a cube, it would always follow the order of
<code>+x, -x, +y, -y, +z, -z</code> to keep consistency. This turned
into flipping 6 of the 8 bits in an <code>unsigned char</code> according
to which faces of that Block should be rendered. I really liked my
solution to this and in the following code snippet, in the
<code>char</code>, any of the first 6 bits containing a 1 indicate that
its corresponding face <em>should not</em> be rendered. We set those
bigs with the bitwise or operator (‘|’), and choose which bit to assign
by bitshifting the the binary 0x10000000 to the right corresponding to
the face index. One thing to note, getBlock will return ‘nullptr’ if the
requested block is out of bounds, and a <code>Block*</code> with an
<code>id</code> of 0 if the block represents air (also air is skipped in
the rendering process) Now the actually face culling:`,cn,J,qs,d,k,Tt,$o="void",na,Mt,Uo="::",aa,Lt,Ko="(",Ht,Yo="int",la,It,Qo=",",oa,zt,Xo="int",ia,jt,Zo=",",pa,Et,ti="int",ra,Bt,ei=")",ca,Ds,si="{",da,ha,qt,ni='        Block<span class="op">*</span> block <span class="op">=</span> getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z<span class="op">);</span>',ua,Dt,ai='        <span class="dt">unsigned</span> <span class="dt">char</span> faces <span class="op">=</span> <span class="dv">0</span><span class="op">;</span>',fa,Gt,li='        <span class="cf">if</span><span class="op">(</span>block <span class="op">==</span> <span class="kw">nullptr</span> <span class="op">||</span> block<span class="op">-&gt;</span>id <span class="op">==</span> <span class="dv">0</span><span class="op">)</span> <span class="cf">return</span><span class="op">;</span>',va,z,xa,Ot,oi="*",Ca,Wt,ii="[",Ft,pi="6",Rt,ri="]",ma,Vt,ci="=",ba,Gs,di="{",ga,wa,Jt,hi='                getBlock<span class="op">(</span>x <span class="op">+</span> <span class="dv">1</span><span class="op">,</span> y<span class="op">,</span> z<span class="op">),</span>',ya,$t,ui='                getBlock<span class="op">(</span>x <span class="op">-</span> <span class="dv">1</span><span class="op">,</span> y<span class="op">,</span> z<span class="op">),</span>',_a,Ut,fi='                getBlock<span class="op">(</span>x<span class="op">,</span> y <span class="op">+</span> <span class="dv">1</span><span class="op">,</span> z<span class="op">),</span>',ka,Kt,vi='                getBlock<span class="op">(</span>x<span class="op">,</span> y <span class="op">-</span> <span class="dv">1</span><span class="op">,</span> z<span class="op">),</span>',Pa,Yt,xi='                getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z <span class="op">+</span> <span class="dv">1</span><span class="op">),</span>',Sa,Qt,Ci='                getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z <span class="op">-</span> <span class="dv">1</span><span class="op">),</span>',Aa,Xt,mi='        <span class="op">};</span>',Na,Ks,Ta,P,Ma,Zt,bi="for",te,gi="(",ee,wi="int",La,se,yi="=",Ha,ne,_i="0",ae,ki=";",Ia,le,Pi="<",za,oe,Si="6",ie,Ai=";",ja,pe,Ni="++)",Ea,Os,Ti="{",Ba,qa,re,Mi='                <span class="dt">unsigned</span> <span class="dt">char</span> f <span class="op">=</span> <span class="bn">0b10000000</span> <span class="op">&gt;&gt;</span> <span class="op">(</span>i<span class="op">);</span>',Da,ce,Li='                Block<span class="op">*</span> b <span class="op">=</span> dirs<span class="op">[</span>i<span class="op">];</span>',Ga,x,Oa,de,Hi="if",Wa,he,Ii="(",Fa,ue,zi="==",Ra,fe,ji="nullptr",Va,ve,Ei="||",Ja,xe,Bi="(",$a,Ce,qi="!=",Ua,me,Di="nullptr",Ka,be,Gi="&&",Ya,ge,Oi="->",Qa,we,Wi="!=",Xa,ye,Fi="0",_e,Ri="))",Za,Ws,Vi="{",tl,el,ke,Ji='                        faces <span class="op">=</span> faces <span class="op">|</span> f<span class="op">;</span>',sl,Pe,$i='                <span class="op">}</span>',nl,Se,Ui='        <span class="op">}</span>',al,Ae,Ki='        faces <span class="op">=</span> <span class="op">~</span>faces<span class="op">;</span>',ll,Ys,ol,Ne,Yi='        block<span class="op">-&gt;</span>faces <span class="op">=</span> faces<span class="op">;</span>',il,Te,Qi='<span class="op">}</span>',dn,$,Xi="Block Highlighting",hn,Me,Zi=`The <code>id</code> that I mentioned also keeps track of the texture
to be applied to each block, which are loaded using
(stb_image)[https://nothings.org/stb], and textured onto each face of
the block. Additionally there’s functionality for highlighting the block
that the player is looking at. Currently I have a “naive” approach,
depending on how you look at it, of creating a vector that essentially
points what direction the player is looking, and is scaled up depending
on the players viewDistance. Once this <code>reach</code> vector is
created, we lerp across the the reach vector, adding the players
position. For each stage of the lerp, we round the currently checked
point to the nearest integer and attempt to get a block at that point.
If the result is not nullptr or an air block, that is the selected
block, the lerp stops, and we tell the block to highlight itself in the
next render. This code comes out to look like this, and I will talk
about why this is a naive approach in my opinion.`,un,U,Fs,r,H,Le,tp="void",pl,He,ep="::",rl,Ie,sp="(",cl,ze,np="*",dl,je,ap=")",hl,Rs,lp="{",ul,fl,Ee,op='        Block<span class="op">*</span> block<span class="op">;</span>',vl,Be,ip='        <span class="co">// a is the interpolation values</span>',xl,qe,pp='        <span class="co">// 100 equally spaced vectors to test between the player and its max reach</span>',Cl,C,ml,De,rp="for",Ge,cp="(",Oe,dp="float",bl,We,hp="=",gl,Fe,up="0",Re,fp=";",wl,Ve,vp="<",yl,Je,xp="1.0",$e,Cp="f",Ue,mp=";",_l,Ke,bp="+=",kl,Ye,gp="0.01",Qe,wp="f",Xe,yp=")",Pl,Vs,_p="{",Sl,Al,Ze,kp='                <span class="co">// the actual lerping</span>',Nl,ts,Pp='                glm<span class="op">::</span>vec3 reach<span class="op">(</span>',Tl,es,Sp='                        position<span class="op">.</span>x <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>x <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a<span class="op">,</span>',Ml,ss,Ap='                        position<span class="op">.</span>y <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>y <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a<span class="op">,</span>',Ll,ns,Np='                        position<span class="op">.</span>z <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>z <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a',Hl,as,Tp='                <span class="op">);</span>',Il,ls,Mp='                <span class="co">// round and test for a block</span>',zl,os,Lp='                block <span class="op">=</span> gameManager<span class="op">-&gt;</span>getBlock<span class="op">(</span>',jl,is,Hp='                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>x <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',El,ps,Ip='                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>y <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',Bl,rs,zp='                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>z <span class="op">+</span> <span class="fl">0.5</span><span class="op">)</span>',ql,cs,jp='                <span class="op">);</span>',Dl,S,Gl,ds,Ep="if",hs,Bp="(",Ol,us,qp="!=",Wl,fs,Dp="nullptr",Fl,vs,Gp="&&",Rl,xs,Op="->",Vl,Cs,Wp="!=",Jl,ms,Fp="0",bs,Rp=")",$l,Js,Vp="{",Ul,Kl,gs,Jp='                        selectedBlock <span class="op">=</span> block<span class="op">;</span> ',Yl,ws,$p='                        selectedBlockCoords <span class="op">=</span> glm<span class="op">::</span>vec3<span class="op">(</span>',Ql,ys,Up='                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>x <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',Xl,_s,Kp='                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>y <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',Zl,ks,Yp='                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>z <span class="op">+</span> <span class="fl">0.5</span><span class="op">)</span>',to,Ps,Qp='                        <span class="op">);</span>',eo,Ss,Xp='                        <span class="cf">return</span><span class="op">;</span>',so,As,Zp='                <span class="op">}</span>',no,Ns,tr='        <span class="op">}</span>',ao,Ts,er='        selectedBlock <span class="op">=</span> <span class="kw">nullptr</span><span class="op">;</span>',lo,Ms,sr='<span class="op">}</span>',fn,Ls,nr=`One limitation I’ve found with this method is that it can be
inaccurate and miss blocks. Say the player is looking at the corner of a
block and the ray from the players view begins to march forward to its
max reach. If the lerped vector increases by too big a step at the
corner, or edge, of the block it may skip past and the effect would be
as if the player is highlighting a block that is behind the actual block
they are looking at. Although this can be solved easily by simply
testing more vectors between the player’s position and the max reach, it
still leaves one issue unresolved. With this method we cannot deduce
what side of the block the player is looking at (reliably). One method
could be that we record the distance that the ray is able to travel
before it reaches a block, then afterwards cast another ray with a
slight rotational offset so it lands a bit to the right of the first.
With this we might be able to find the angle which the two collision
points lie on and possible deduce what face the player is looking at but
this comes with a lot of edge cases and inefficiencies. The other option
is a method that is almost identical to the method I used in my <a href="https://eggbert.neocities.org/blogs/wolfenstein_terminal_raycaster">Wolfenstien
style Terminal renderer</a>, where rays are cast and step across each
axis by integer values and testing which of the 2 axis rays travel the
least, and which blocks they collide with. In short, this will be able
to give a concrete distance for how far the player’s view ray is able to
travel, and which side of the block that ray collides with, based on
which axis ray it finds the closest. Though like many things I get the
feeling there are far easier to implement and just as effective methods
that I haven’t thought of. One idea I got from <a href="https://www.cs.columbia.edu/~jrk/">Dr. John R. Kender</a> was to
keep my eyes on the actually painting step of the graphics pipeline.
What he suggested was to find which face quads are drawn in the center
of the screen and, using the depth buffer, which face is the closest. I
think this is a fantastic idea, but as it stands I’m unsure how to get
information from the GPU’s GLSL shader code back to the CPU’s c++ side
of things. So for now I’m going to leave this issue unresolved and
perhaps return at a later date. If you have any ideas on how to
implement this, I would love to hear them, so please feel free to e-mail
me at hdiambrosio@gmail.com.`,vn,K,ar="Project Organization",xn,Hs,lr=`Coming into this the most “project organization” I did was throwing
everything in a src folder and calling it good. But I took a different
approach for this little experiment and really wanted to get to know the
common tools of c++ better: those being <a href="https://www.gnu.org/software/make/manual/make.html">make</a> and
<a href="https://www.sourceware.org/gdb/">gdb</a>. I knew what make did
and the basics of getting a project compiled but several things were
missing that I needed. First, as this project grew bigger, and
especially when I started to add more 3rd party libraries, having to
compile those every single time I made even the smallest of changed grew
annoyingly slow, <em>ESPECIALLY</em> on my school’s Chromebook where I
programmed most of this. That being said I knew it was possible to only
compile files that had changed, and after a quick video about the basics
of make, I found this:`,Cn,Y,or=`<code>./obj/%.o: %.cpp
    $(CPPC) $(CPPGLAGS) $(WARNINGS) -c -o $@ $^</code>`,mn,Is,ir=`There was some more moving parts to the real makefile, but this is
main attraction, where I essentially tell make that if it needs any sort
of object file that isn’t already compiled into an object file, go
compile just that file and continue. What this also allows is the
skipping of compiling files that have not changed since the last run of
make. Finally, a friend of mine <a href="https://squi.bid">squibid</a>
suggested I use the shell command
<code>pkg-config --libs --cflags glfw3</code> so that I could get the
proper names of the library files I had to link to. This removed the
need for me to change the makefile weather I was programming on my
desktop running Void Linux, or my Chromebook running Debian, which both
have different names for the glfw library files. This improved the
workflow tremendously and I would have burn out of this project far
sooner if I hadn’t taken the time to at least learn the basics.`,bn,zs,pr=`The other lifesaver for this project was gdb or the GNU Project
Debugger. This tool allows me to add a <code>-g</code> flag to my
<code>g++</code> call and add debug information to the executable. Then
running gdb on the file allows me to run the file until I reach a
segmentation fault. The magic happens when I run <code>backtrace</code>
which then gives me the call stack before my code went wrong. THIS!!!
THIS GODSEND GIFT SAVED ME HOURS!!! Before gdb, I used to just comment
out code until I didn’t get segfaults, then try to puzzle out the issue,
only to get a completely unrelated segfault right afterwards. I still
get them quite often and were huge demotivators in the development of
Mingleburb but you live and you learn. Either way I want to become more
familiar with gdb in the future as it seems to have a lot of really
useful features like being able to see the values of local variables,
step through instructions, view Assembly outputs and use breakpoints in
code.`,gn,Q,rr="Gallery",wn,js,cr=`Some simple terrain generation using basic perlin noise. <img src="/images/minecraft_clone_basic_terrain.png"/> Differnt textured
blocks can be rendered with each other. A sea of pink wool with some
islands made of wood. <img src="/images/minecraft_clone_mixed_pink_sea.png"/> Blocks are culled
everywhere a player shouldn’t be able to see, in between two blocks,
from the void of the world. <img src="/images/minecraft_clone_proof_of_culling.png"/>`;return{c(){q=e("h1"),q.textContent=ro,Qs=y(),X=e("p"),X.innerHTML=co,Xs=y(),Z=e("p"),Z.innerHTML=ho,Zs=y(),tt=e("p"),tt.textContent=uo,tn=y(),D=e("ol"),D.innerHTML=fo,en=y(),G=e("h2"),G.textContent=vo,sn=y(),et=e("p"),et.textContent=xo,nn=y(),O=e("div"),Es=e("pre"),g=e("code"),st=e("span"),st.innerHTML=Co,Pn=l(`
`),$s=e("span"),Sn=l(`
`),W=e("span"),nt=e("span"),nt.textContent=mo,An=l(" Block "),Bs=e("span"),Nn=l(bo),Tn=l(`
`),at=e("span"),at.innerHTML=go,Mn=l(`
`),lt=e("span"),lt.innerHTML=wo,Ln=l(`
`),ot=e("span"),ot.innerHTML=yo,Hn=l(`
`),Us=e("span"),In=l(`
`),I=e("span"),zn=l("    Block"),it=e("span"),it.textContent=_o,jn=l(" "),pt=e("span"),pt.textContent=ko,En=l(" air"),rt=e("span"),rt.textContent=Po,ct=e("span"),ct.textContent=So,dt=e("span"),dt.textContent=Ao,Bn=l(" "),ht=e("span"),qn=l(No),Dn=l("}"),Gn=l(`
`),b=e("span"),On=l("    Block"),ut=e("span"),ut.textContent=To,ft=e("span"),ft.textContent=Mo,Wn=l(" "),vt=e("span"),vt.textContent=Lo,xt=e("span"),xt.textContent=Ho,Fn=l(" textureName"),Ct=e("span"),Ct.textContent=Io,Rn=l(" "),mt=e("span"),mt.textContent=zo,Vn=l(" texture"),bt=e("span"),bt.textContent=jo,Jn=l("textureName"),gt=e("span"),gt.textContent=Eo,$n=l(" air"),wt=e("span"),wt.textContent=Bo,yt=e("span"),yt.textContent=qo,_t=e("span"),_t.textContent=Do,Un=l(" "),kt=e("span"),Kn=l(Go),Yn=l("}"),Qn=l(`
`),Pt=e("span"),Pt.innerHTML=Oo,an=y(),F=e("p"),Xn=l(`With that out of the way, these were simple stored in a c-style
3-dimensional array. Also at this point in the program, the entirely of
the code base was 1 main.cpp file, and so I create a much nicer
structure consisting of an App class that holds the Player, GameManager,
and GraphicsManager with some like player having their own smaller
classes like the Player’s InputManager. This made everything a lot more
organized, but this also began to become a little annoying. In C++, they
way I learned to develop object oriented programs was to write a .h or
.hpp file to hold all the declarations of a class, then implement that
classes functions/constructors/whatever else in a separate .c or .cpp
file. This is fine, but I wish it was easier to make edits in a .cpp or
.hpp file and not have to make essentially the same changes in another
files just so they agree with each other. I understand the appeal of
header files but I just find this specific aspect annoying. Besides the
point, with a structured code base the first major task I wanted to
tackle was player input. This became pretty easy as I was using GLFW for
my window creation and writing an InputManager based on callbacks and
events was something I’ve done countless times in JavaScript DOM with
functions like
`),St=e("code"),Zn=l('window.createEventListener("keydown" (e) => '),ta=l(Wo),ea=l(" handleInput(e) };"),sa=l("."),ln=y(),R=e("h2"),R.textContent=Fo,on=y(),At=e("p"),At.innerHTML=Ro,pn=y(),V=e("h2"),V.textContent=Vo,rn=y(),Nt=e("p"),Nt.innerHTML=Jo,cn=y(),J=e("div"),qs=e("pre"),d=e("code"),k=e("span"),Tt=e("span"),Tt.textContent=$o,na=l(" GameManager"),Mt=e("span"),Mt.textContent=Uo,aa=l("cullFaces"),Lt=e("span"),Lt.textContent=Ko,Ht=e("span"),Ht.textContent=Yo,la=l(" x"),It=e("span"),It.textContent=Qo,oa=l(" "),zt=e("span"),zt.textContent=Xo,ia=l(" y"),jt=e("span"),jt.textContent=Zo,pa=l(" "),Et=e("span"),Et.textContent=ti,ra=l(" z"),Bt=e("span"),Bt.textContent=ei,ca=l(" "),Ds=e("span"),da=l(si),ha=l(`
`),qt=e("span"),qt.innerHTML=ni,ua=l(`
`),Dt=e("span"),Dt.innerHTML=ai,fa=l(`
`),Gt=e("span"),Gt.innerHTML=li,va=l(`
`),z=e("span"),xa=l("        Block"),Ot=e("span"),Ot.textContent=oi,Ca=l(" dirs"),Wt=e("span"),Wt.textContent=ii,Ft=e("span"),Ft.textContent=pi,Rt=e("span"),Rt.textContent=ri,ma=l(" "),Vt=e("span"),Vt.textContent=ci,ba=l(" "),Gs=e("span"),ga=l(di),wa=l(`
`),Jt=e("span"),Jt.innerHTML=hi,ya=l(`
`),$t=e("span"),$t.innerHTML=ui,_a=l(`
`),Ut=e("span"),Ut.innerHTML=fi,ka=l(`
`),Kt=e("span"),Kt.innerHTML=vi,Pa=l(`
`),Yt=e("span"),Yt.innerHTML=xi,Sa=l(`
`),Qt=e("span"),Qt.innerHTML=Ci,Aa=l(`
`),Xt=e("span"),Xt.innerHTML=mi,Na=l(`
`),Ks=e("span"),Ta=l(`
`),P=e("span"),Ma=l("        "),Zt=e("span"),Zt.textContent=bi,te=e("span"),te.textContent=gi,ee=e("span"),ee.textContent=wi,La=l(" i "),se=e("span"),se.textContent=yi,Ha=l(" "),ne=e("span"),ne.textContent=_i,ae=e("span"),ae.textContent=ki,Ia=l(" i "),le=e("span"),le.textContent=Pi,za=l(" "),oe=e("span"),oe.textContent=Si,ie=e("span"),ie.textContent=Ai,ja=l(" i"),pe=e("span"),pe.textContent=Ni,Ea=l(" "),Os=e("span"),Ba=l(Ti),qa=l(`
`),re=e("span"),re.innerHTML=Mi,Da=l(`
`),ce=e("span"),ce.innerHTML=Li,Ga=l(`
`),x=e("span"),Oa=l("                "),de=e("span"),de.textContent=Hi,Wa=l(" "),he=e("span"),he.textContent=Ii,Fa=l("b "),ue=e("span"),ue.textContent=zi,Ra=l(" "),fe=e("span"),fe.textContent=ji,Va=l(" "),ve=e("span"),ve.textContent=Ei,Ja=l(" "),xe=e("span"),xe.textContent=Bi,$a=l("b "),Ce=e("span"),Ce.textContent=qi,Ua=l(" "),me=e("span"),me.textContent=Di,Ka=l(" "),be=e("span"),be.textContent=Gi,Ya=l(" b"),ge=e("span"),ge.textContent=Oi,Qa=l("id "),we=e("span"),we.textContent=Wi,Xa=l(" "),ye=e("span"),ye.textContent=Fi,_e=e("span"),_e.textContent=Ri,Za=l(" "),Ws=e("span"),tl=l(Vi),el=l(`
`),ke=e("span"),ke.innerHTML=Ji,sl=l(`
`),Pe=e("span"),Pe.innerHTML=$i,nl=l(`
`),Se=e("span"),Se.innerHTML=Ui,al=l(`
`),Ae=e("span"),Ae.innerHTML=Ki,ll=l(`
`),Ys=e("span"),ol=l(`
`),Ne=e("span"),Ne.innerHTML=Yi,il=l(`
`),Te=e("span"),Te.innerHTML=Qi,dn=y(),$=e("h2"),$.textContent=Xi,hn=y(),Me=e("p"),Me.innerHTML=Zi,un=y(),U=e("div"),Fs=e("pre"),r=e("code"),H=e("span"),Le=e("span"),Le.textContent=tp,pl=l(" Player"),He=e("span"),He.textContent=ep,rl=l("castBlockRay"),Ie=e("span"),Ie.textContent=sp,cl=l("GameManager"),ze=e("span"),ze.textContent=np,dl=l(" gameManager"),je=e("span"),je.textContent=ap,hl=l(" "),Rs=e("span"),ul=l(lp),fl=l(`
`),Ee=e("span"),Ee.innerHTML=op,vl=l(`
`),Be=e("span"),Be.innerHTML=ip,xl=l(`
`),qe=e("span"),qe.innerHTML=pp,Cl=l(`
`),C=e("span"),ml=l("        "),De=e("span"),De.textContent=rp,Ge=e("span"),Ge.textContent=cp,Oe=e("span"),Oe.textContent=dp,bl=l(" a "),We=e("span"),We.textContent=hp,gl=l(" "),Fe=e("span"),Fe.textContent=up,Re=e("span"),Re.textContent=fp,wl=l(" a "),Ve=e("span"),Ve.textContent=vp,yl=l(" "),Je=e("span"),Je.textContent=xp,$e=e("span"),$e.textContent=Cp,Ue=e("span"),Ue.textContent=mp,_l=l(" a "),Ke=e("span"),Ke.textContent=bp,kl=l(" "),Ye=e("span"),Ye.textContent=gp,Qe=e("span"),Qe.textContent=wp,Xe=e("span"),Xe.textContent=yp,Pl=l(" "),Vs=e("span"),Sl=l(_p),Al=l(`
`),Ze=e("span"),Ze.innerHTML=kp,Nl=l(`
`),ts=e("span"),ts.innerHTML=Pp,Tl=l(`
`),es=e("span"),es.innerHTML=Sp,Ml=l(`
`),ss=e("span"),ss.innerHTML=Ap,Ll=l(`
`),ns=e("span"),ns.innerHTML=Np,Hl=l(`
`),as=e("span"),as.innerHTML=Tp,Il=l(`
`),ls=e("span"),ls.innerHTML=Mp,zl=l(`
`),os=e("span"),os.innerHTML=Lp,jl=l(`
`),is=e("span"),is.innerHTML=Hp,El=l(`
`),ps=e("span"),ps.innerHTML=Ip,Bl=l(`
`),rs=e("span"),rs.innerHTML=zp,ql=l(`
`),cs=e("span"),cs.innerHTML=jp,Dl=l(`
`),S=e("span"),Gl=l("                "),ds=e("span"),ds.textContent=Ep,hs=e("span"),hs.textContent=Bp,Ol=l("block "),us=e("span"),us.textContent=qp,Wl=l(" "),fs=e("span"),fs.textContent=Dp,Fl=l(" "),vs=e("span"),vs.textContent=Gp,Rl=l(" block"),xs=e("span"),xs.textContent=Op,Vl=l("id "),Cs=e("span"),Cs.textContent=Wp,Jl=l(" "),ms=e("span"),ms.textContent=Fp,bs=e("span"),bs.textContent=Rp,$l=l(" "),Js=e("span"),Ul=l(Vp),Kl=l(`
`),gs=e("span"),gs.innerHTML=Jp,Yl=l(`
`),ws=e("span"),ws.innerHTML=$p,Ql=l(`
`),ys=e("span"),ys.innerHTML=Up,Xl=l(`
`),_s=e("span"),_s.innerHTML=Kp,Zl=l(`
`),ks=e("span"),ks.innerHTML=Yp,to=l(`
`),Ps=e("span"),Ps.innerHTML=Qp,eo=l(`
`),Ss=e("span"),Ss.innerHTML=Xp,so=l(`
`),As=e("span"),As.innerHTML=Zp,no=l(`
`),Ns=e("span"),Ns.innerHTML=tr,ao=l(`
`),Ts=e("span"),Ts.innerHTML=er,lo=l(`
`),Ms=e("span"),Ms.innerHTML=sr,fn=y(),Ls=e("p"),Ls.innerHTML=nr,vn=y(),K=e("h1"),K.textContent=ar,xn=y(),Hs=e("p"),Hs.innerHTML=lr,Cn=y(),Y=e("pre"),Y.innerHTML=or,mn=y(),Is=e("p"),Is.innerHTML=ir,bn=y(),zs=e("p"),zs.innerHTML=pr,gn=y(),Q=e("h2"),Q.textContent=rr,wn=y(),js=e("p"),js.innerHTML=cr,this.h()},l(i){q=s(i,"H1",{id:!0,"data-svelte-h":!0}),a(q)!=="svelte-3yv86n"&&(q.textContent=ro),Qs=_(i),X=s(i,"P",{"data-svelte-h":!0}),a(X)!=="svelte-imas7k"&&(X.innerHTML=co),Xs=_(i),Z=s(i,"P",{"data-svelte-h":!0}),a(Z)!=="svelte-1h2gm36"&&(Z.innerHTML=ho),Zs=_(i),tt=s(i,"P",{"data-svelte-h":!0}),a(tt)!=="svelte-9rqcdu"&&(tt.textContent=uo),tn=_(i),D=s(i,"OL",{type:!0,"data-svelte-h":!0}),a(D)!=="svelte-9tl6ra"&&(D.innerHTML=fo),en=_(i),G=s(i,"H2",{id:!0,"data-svelte-h":!0}),a(G)!=="svelte-2w6znv"&&(G.textContent=vo),sn=_(i),et=s(i,"P",{"data-svelte-h":!0}),a(et)!=="svelte-1rb4voq"&&(et.textContent=xo),nn=_(i),O=s(i,"DIV",{class:!0,id:!0});var h=v(O);Es=s(h,"PRE",{class:!0});var dr=v(Es);g=s(dr,"CODE",{class:!0});var N=v(g);st=s(N,"SPAN",{id:!0,"data-svelte-h":!0}),a(st)!=="svelte-1u4itcf"&&(st.innerHTML=Co),Pn=o(N,`
`),$s=s(N,"SPAN",{id:!0}),v($s).forEach(p),Sn=o(N,`
`),W=s(N,"SPAN",{id:!0});var yn=v(W);nt=s(yn,"SPAN",{class:!0,"data-svelte-h":!0}),a(nt)!=="svelte-aph1ik"&&(nt.textContent=mo),An=o(yn," Block "),Bs=s(yn,"SPAN",{class:!0});var hr=v(Bs);Nn=o(hr,bo),hr.forEach(p),yn.forEach(p),Tn=o(N,`
`),at=s(N,"SPAN",{id:!0,"data-svelte-h":!0}),a(at)!=="svelte-50z0x1"&&(at.innerHTML=go),Mn=o(N,`
`),lt=s(N,"SPAN",{id:!0,"data-svelte-h":!0}),a(lt)!=="svelte-1c2u58v"&&(lt.innerHTML=wo),Ln=o(N,`
`),ot=s(N,"SPAN",{id:!0,"data-svelte-h":!0}),a(ot)!=="svelte-a237pt"&&(ot.innerHTML=yo),Hn=o(N,`
`),Us=s(N,"SPAN",{id:!0}),v(Us).forEach(p),In=o(N,`
`),I=s(N,"SPAN",{id:!0});var E=v(I);zn=o(E,"    Block"),it=s(E,"SPAN",{class:!0,"data-svelte-h":!0}),a(it)!=="svelte-1z0apld"&&(it.textContent=_o),jn=o(E," "),pt=s(E,"SPAN",{class:!0,"data-svelte-h":!0}),a(pt)!=="svelte-5w8ub2"&&(pt.textContent=ko),En=o(E," air"),rt=s(E,"SPAN",{class:!0,"data-svelte-h":!0}),a(rt)!=="svelte-om7dis"&&(rt.textContent=Po),ct=s(E,"SPAN",{class:!0,"data-svelte-h":!0}),a(ct)!=="svelte-6jsg9z"&&(ct.textContent=So),dt=s(E,"SPAN",{class:!0,"data-svelte-h":!0}),a(dt)!=="svelte-1l0idvn"&&(dt.textContent=Ao),Bn=o(E," "),ht=s(E,"SPAN",{class:!0});var oo=v(ht);qn=o(oo,No),Dn=o(oo,"}"),oo.forEach(p),E.forEach(p),Gn=o(N,`
`),b=s(N,"SPAN",{id:!0});var A=v(b);On=o(A,"    Block"),ut=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(ut)!=="svelte-om7dis"&&(ut.textContent=To),ft=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(ft)!=="svelte-1wl7105"&&(ft.textContent=Mo),Wn=o(A," "),vt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(vt)!=="svelte-1xtjha9"&&(vt.textContent=Lo),xt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(xt)!=="svelte-3ytzzy"&&(xt.textContent=Ho),Fn=o(A," textureName"),Ct=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ct)!=="svelte-1l0idvn"&&(Ct.textContent=Io),Rn=o(A," "),mt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(mt)!=="svelte-5w8ub2"&&(mt.textContent=zo),Vn=o(A," texture"),bt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(bt)!=="svelte-om7dis"&&(bt.textContent=jo),Jn=o(A,"textureName"),gt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(gt)!=="svelte-7i9wn3"&&(gt.textContent=Eo),$n=o(A," air"),wt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(wt)!=="svelte-om7dis"&&(wt.textContent=Bo),yt=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(yt)!=="svelte-isl5s8"&&(yt.textContent=qo),_t=s(A,"SPAN",{class:!0,"data-svelte-h":!0}),a(_t)!=="svelte-1l0idvn"&&(_t.textContent=Do),Un=o(A," "),kt=s(A,"SPAN",{class:!0});var io=v(kt);Kn=o(io,Go),Yn=o(io,"}"),io.forEach(p),A.forEach(p),Qn=o(N,`
`),Pt=s(N,"SPAN",{id:!0,"data-svelte-h":!0}),a(Pt)!=="svelte-1c8cxgd"&&(Pt.innerHTML=Oo),N.forEach(p),dr.forEach(p),h.forEach(p),an=_(i),F=s(i,"P",{});var _n=v(F);Xn=o(_n,`With that out of the way, these were simple stored in a c-style
3-dimensional array. Also at this point in the program, the entirely of
the code base was 1 main.cpp file, and so I create a much nicer
structure consisting of an App class that holds the Player, GameManager,
and GraphicsManager with some like player having their own smaller
classes like the Player’s InputManager. This made everything a lot more
organized, but this also began to become a little annoying. In C++, they
way I learned to develop object oriented programs was to write a .h or
.hpp file to hold all the declarations of a class, then implement that
classes functions/constructors/whatever else in a separate .c or .cpp
file. This is fine, but I wish it was easier to make edits in a .cpp or
.hpp file and not have to make essentially the same changes in another
files just so they agree with each other. I understand the appeal of
header files but I just find this specific aspect annoying. Besides the
point, with a structured code base the first major task I wanted to
tackle was player input. This became pretty easy as I was using GLFW for
my window creation and writing an InputManager based on callbacks and
events was something I’ve done countless times in JavaScript DOM with
functions like
`),St=s(_n,"CODE",{});var kn=v(St);Zn=o(kn,'window.createEventListener("keydown" (e) => '),ta=o(kn,Wo),ea=o(kn," handleInput(e) };"),kn.forEach(p),sa=o(_n,"."),_n.forEach(p),ln=_(i),R=s(i,"H2",{id:!0,"data-svelte-h":!0}),a(R)!=="svelte-8rnwnl"&&(R.textContent=Fo),on=_(i),At=s(i,"P",{"data-svelte-h":!0}),a(At)!=="svelte-t8wbjl"&&(At.innerHTML=Ro),pn=_(i),V=s(i,"H2",{id:!0,"data-svelte-h":!0}),a(V)!=="svelte-piwtaf"&&(V.textContent=Vo),rn=_(i),Nt=s(i,"P",{"data-svelte-h":!0}),a(Nt)!=="svelte-chx9yy"&&(Nt.innerHTML=Jo),cn=_(i),J=s(i,"DIV",{class:!0,id:!0});var ur=v(J);qs=s(ur,"PRE",{class:!0});var fr=v(qs);d=s(fr,"CODE",{class:!0});var f=v(d);k=s(f,"SPAN",{id:!0});var T=v(k);Tt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Tt)!=="svelte-lm5up7"&&(Tt.textContent=$o),na=o(T," GameManager"),Mt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Mt)!=="svelte-rf4hhk"&&(Mt.textContent=Uo),aa=o(T,"cullFaces"),Lt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Lt)!=="svelte-om7dis"&&(Lt.textContent=Ko),Ht=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ht)!=="svelte-1cu2y6w"&&(Ht.textContent=Yo),la=o(T," x"),It=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(It)!=="svelte-1nfhsgo"&&(It.textContent=Qo),oa=o(T," "),zt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(zt)!=="svelte-1cu2y6w"&&(zt.textContent=Xo),ia=o(T," y"),jt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(jt)!=="svelte-1nfhsgo"&&(jt.textContent=Zo),pa=o(T," "),Et=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Et)!=="svelte-1cu2y6w"&&(Et.textContent=ti),ra=o(T," z"),Bt=s(T,"SPAN",{class:!0,"data-svelte-h":!0}),a(Bt)!=="svelte-1l0idvn"&&(Bt.textContent=ei),ca=o(T," "),Ds=s(T,"SPAN",{class:!0});var vr=v(Ds);da=o(vr,si),vr.forEach(p),T.forEach(p),ha=o(f,`
`),qt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(qt)!=="svelte-tt6ys5"&&(qt.innerHTML=ni),ua=o(f,`
`),Dt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Dt)!=="svelte-1kf7gg6"&&(Dt.innerHTML=ai),fa=o(f,`
`),Gt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Gt)!=="svelte-t36nzd"&&(Gt.innerHTML=li),va=o(f,`
`),z=s(f,"SPAN",{id:!0});var B=v(z);xa=o(B,"        Block"),Ot=s(B,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ot)!=="svelte-3ytzzy"&&(Ot.textContent=oi),Ca=o(B," dirs"),Wt=s(B,"SPAN",{class:!0,"data-svelte-h":!0}),a(Wt)!=="svelte-32dkz1"&&(Wt.textContent=ii),Ft=s(B,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ft)!=="svelte-9j4qbh"&&(Ft.textContent=pi),Rt=s(B,"SPAN",{class:!0,"data-svelte-h":!0}),a(Rt)!=="svelte-1ifu3ef"&&(Rt.textContent=ri),ma=o(B," "),Vt=s(B,"SPAN",{class:!0,"data-svelte-h":!0}),a(Vt)!=="svelte-b4xhlj"&&(Vt.textContent=ci),ba=o(B," "),Gs=s(B,"SPAN",{class:!0});var xr=v(Gs);ga=o(xr,di),xr.forEach(p),B.forEach(p),wa=o(f,`
`),Jt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Jt)!=="svelte-1lqjrre"&&(Jt.innerHTML=hi),ya=o(f,`
`),$t=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a($t)!=="svelte-uxits5"&&($t.innerHTML=ui),_a=o(f,`
`),Ut=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ut)!=="svelte-1hiyg22"&&(Ut.innerHTML=fi),ka=o(f,`
`),Kt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Kt)!=="svelte-a43p4x"&&(Kt.innerHTML=vi),Pa=o(f,`
`),Yt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Yt)!=="svelte-dwqycx"&&(Yt.innerHTML=xi),Sa=o(f,`
`),Qt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Qt)!=="svelte-yd445o"&&(Qt.innerHTML=Ci),Aa=o(f,`
`),Xt=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Xt)!=="svelte-1v3tnt8"&&(Xt.innerHTML=mi),Na=o(f,`
`),Ks=s(f,"SPAN",{id:!0}),v(Ks).forEach(p),Ta=o(f,`
`),P=s(f,"SPAN",{id:!0});var M=v(P);Ma=o(M,"        "),Zt=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(Zt)!=="svelte-2rmwfp"&&(Zt.textContent=bi),te=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(te)!=="svelte-om7dis"&&(te.textContent=gi),ee=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(ee)!=="svelte-1cu2y6w"&&(ee.textContent=wi),La=o(M," i "),se=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(se)!=="svelte-b4xhlj"&&(se.textContent=yi),Ha=o(M," "),ne=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(ne)!=="svelte-1a7kqzb"&&(ne.textContent=_i),ae=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(ae)!=="svelte-12pzswd"&&(ae.textContent=ki),Ia=o(M," i "),le=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(le)!=="svelte-1b3orjh"&&(le.textContent=Pi),za=o(M," "),oe=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(oe)!=="svelte-9j4qbh"&&(oe.textContent=Si),ie=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(ie)!=="svelte-12pzswd"&&(ie.textContent=Ai),ja=o(M," i"),pe=s(M,"SPAN",{class:!0,"data-svelte-h":!0}),a(pe)!=="svelte-1f5yuw9"&&(pe.textContent=Ni),Ea=o(M," "),Os=s(M,"SPAN",{class:!0});var Cr=v(Os);Ba=o(Cr,Ti),Cr.forEach(p),M.forEach(p),qa=o(f,`
`),re=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(re)!=="svelte-9ei950"&&(re.innerHTML=Mi),Da=o(f,`
`),ce=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(ce)!=="svelte-10zxm53"&&(ce.innerHTML=Li),Ga=o(f,`
`),x=s(f,"SPAN",{id:!0});var m=v(x);Oa=o(m,"                "),de=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(de)!=="svelte-2vq077"&&(de.textContent=Hi),Wa=o(m," "),he=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(he)!=="svelte-om7dis"&&(he.textContent=Ii),Fa=o(m,"b "),ue=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(ue)!=="svelte-220jgy"&&(ue.textContent=zi),Ra=o(m," "),fe=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(fe)!=="svelte-1wg3kla"&&(fe.textContent=ji),Va=o(m," "),ve=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(ve)!=="svelte-k86rsc"&&(ve.textContent=Ei),Ja=o(m," "),xe=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(xe)!=="svelte-om7dis"&&(xe.textContent=Bi),$a=o(m,"b "),Ce=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ce)!=="svelte-prowt2"&&(Ce.textContent=qi),Ua=o(m," "),me=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(me)!=="svelte-1wg3kla"&&(me.textContent=Di),Ka=o(m," "),be=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(be)!=="svelte-eaypmu"&&(be.textContent=Gi),Ya=o(m," b"),ge=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(ge)!=="svelte-i8fftl"&&(ge.textContent=Oi),Qa=o(m,"id "),we=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(we)!=="svelte-prowt2"&&(we.textContent=Wi),Xa=o(m," "),ye=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(ye)!=="svelte-1a7kqzb"&&(ye.textContent=Fi),_e=s(m,"SPAN",{class:!0,"data-svelte-h":!0}),a(_e)!=="svelte-cdch02"&&(_e.textContent=Ri),Za=o(m," "),Ws=s(m,"SPAN",{class:!0});var mr=v(Ws);tl=o(mr,Vi),mr.forEach(p),m.forEach(p),el=o(f,`
`),ke=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(ke)!=="svelte-p1vyos"&&(ke.innerHTML=Ji),sl=o(f,`
`),Pe=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Pe)!=="svelte-181n5sw"&&(Pe.innerHTML=$i),nl=o(f,`
`),Se=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Se)!=="svelte-11uae9w"&&(Se.innerHTML=Ui),al=o(f,`
`),Ae=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ae)!=="svelte-7sgkeo"&&(Ae.innerHTML=Ki),ll=o(f,`
`),Ys=s(f,"SPAN",{id:!0}),v(Ys).forEach(p),ol=o(f,`
`),Ne=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ne)!=="svelte-100anfu"&&(Ne.innerHTML=Yi),il=o(f,`
`),Te=s(f,"SPAN",{id:!0,"data-svelte-h":!0}),a(Te)!=="svelte-1xvtqvc"&&(Te.innerHTML=Qi),f.forEach(p),fr.forEach(p),ur.forEach(p),dn=_(i),$=s(i,"H2",{id:!0,"data-svelte-h":!0}),a($)!=="svelte-1jiaz59"&&($.textContent=Xi),hn=_(i),Me=s(i,"P",{"data-svelte-h":!0}),a(Me)!=="svelte-2b9by8"&&(Me.innerHTML=Zi),un=_(i),U=s(i,"DIV",{class:!0,id:!0});var br=v(U);Fs=s(br,"PRE",{class:!0});var gr=v(Fs);r=s(gr,"CODE",{class:!0});var c=v(r);H=s(c,"SPAN",{id:!0});var j=v(H);Le=s(j,"SPAN",{class:!0,"data-svelte-h":!0}),a(Le)!=="svelte-lm5up7"&&(Le.textContent=tp),pl=o(j," Player"),He=s(j,"SPAN",{class:!0,"data-svelte-h":!0}),a(He)!=="svelte-rf4hhk"&&(He.textContent=ep),rl=o(j,"castBlockRay"),Ie=s(j,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ie)!=="svelte-om7dis"&&(Ie.textContent=sp),cl=o(j,"GameManager"),ze=s(j,"SPAN",{class:!0,"data-svelte-h":!0}),a(ze)!=="svelte-3ytzzy"&&(ze.textContent=np),dl=o(j," gameManager"),je=s(j,"SPAN",{class:!0,"data-svelte-h":!0}),a(je)!=="svelte-1l0idvn"&&(je.textContent=ap),hl=o(j," "),Rs=s(j,"SPAN",{class:!0});var wr=v(Rs);ul=o(wr,lp),wr.forEach(p),j.forEach(p),fl=o(c,`
`),Ee=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ee)!=="svelte-1xtn4e0"&&(Ee.innerHTML=op),vl=o(c,`
`),Be=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Be)!=="svelte-18wy02"&&(Be.innerHTML=ip),xl=o(c,`
`),qe=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(qe)!=="svelte-1o7nlp6"&&(qe.innerHTML=pp),Cl=o(c,`
`),C=s(c,"SPAN",{id:!0});var w=v(C);ml=o(w,"        "),De=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(De)!=="svelte-2rmwfp"&&(De.textContent=rp),Ge=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ge)!=="svelte-om7dis"&&(Ge.textContent=cp),Oe=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Oe)!=="svelte-1neuh2n"&&(Oe.textContent=dp),bl=o(w," a "),We=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(We)!=="svelte-b4xhlj"&&(We.textContent=hp),gl=o(w," "),Fe=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Fe)!=="svelte-1a7kqzb"&&(Fe.textContent=up),Re=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Re)!=="svelte-12pzswd"&&(Re.textContent=fp),wl=o(w," a "),Ve=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ve)!=="svelte-1b3orjh"&&(Ve.textContent=vp),yl=o(w," "),Je=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Je)!=="svelte-1p90v5a"&&(Je.textContent=xp),$e=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a($e)!=="svelte-1by7kco"&&($e.textContent=Cp),Ue=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ue)!=="svelte-12pzswd"&&(Ue.textContent=mp),_l=o(w," a "),Ke=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ke)!=="svelte-g1ogr8"&&(Ke.textContent=bp),kl=o(w," "),Ye=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Ye)!=="svelte-n78flo"&&(Ye.textContent=gp),Qe=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Qe)!=="svelte-1by7kco"&&(Qe.textContent=wp),Xe=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),a(Xe)!=="svelte-1l0idvn"&&(Xe.textContent=yp),Pl=o(w," "),Vs=s(w,"SPAN",{class:!0});var yr=v(Vs);Sl=o(yr,_p),yr.forEach(p),w.forEach(p),Al=o(c,`
`),Ze=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ze)!=="svelte-1tfldvf"&&(Ze.innerHTML=kp),Nl=o(c,`
`),ts=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ts)!=="svelte-1e91qt0"&&(ts.innerHTML=Pp),Tl=o(c,`
`),es=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(es)!=="svelte-194wyhh"&&(es.innerHTML=Sp),Ml=o(c,`
`),ss=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ss)!=="svelte-mew6k6"&&(ss.innerHTML=Ap),Ll=o(c,`
`),ns=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ns)!=="svelte-109sr5t"&&(ns.innerHTML=Np),Hl=o(c,`
`),as=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(as)!=="svelte-19hy5d0"&&(as.innerHTML=Tp),Il=o(c,`
`),ls=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ls)!=="svelte-188z9vg"&&(ls.innerHTML=Mp),zl=o(c,`
`),os=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(os)!=="svelte-1ovfih7"&&(os.innerHTML=Lp),jl=o(c,`
`),is=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(is)!=="svelte-1gz3jez"&&(is.innerHTML=Hp),El=o(c,`
`),ps=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ps)!=="svelte-1um4925"&&(ps.innerHTML=Ip),Bl=o(c,`
`),rs=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(rs)!=="svelte-zgetxh"&&(rs.innerHTML=zp),ql=o(c,`
`),cs=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(cs)!=="svelte-1qk88wy"&&(cs.innerHTML=jp),Dl=o(c,`
`),S=s(c,"SPAN",{id:!0});var L=v(S);Gl=o(L,"                "),ds=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(ds)!=="svelte-2vq077"&&(ds.textContent=Ep),hs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(hs)!=="svelte-om7dis"&&(hs.textContent=Bp),Ol=o(L,"block "),us=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(us)!=="svelte-prowt2"&&(us.textContent=qp),Wl=o(L," "),fs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(fs)!=="svelte-1wg3kla"&&(fs.textContent=Dp),Fl=o(L," "),vs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(vs)!=="svelte-eaypmu"&&(vs.textContent=Gp),Rl=o(L," block"),xs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(xs)!=="svelte-i8fftl"&&(xs.textContent=Op),Vl=o(L,"id "),Cs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(Cs)!=="svelte-prowt2"&&(Cs.textContent=Wp),Jl=o(L," "),ms=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(ms)!=="svelte-1a7kqzb"&&(ms.textContent=Fp),bs=s(L,"SPAN",{class:!0,"data-svelte-h":!0}),a(bs)!=="svelte-1l0idvn"&&(bs.textContent=Rp),$l=o(L," "),Js=s(L,"SPAN",{class:!0});var _r=v(Js);Ul=o(_r,Vp),_r.forEach(p),L.forEach(p),Kl=o(c,`
`),gs=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(gs)!=="svelte-6wctk2"&&(gs.innerHTML=Jp),Yl=o(c,`
`),ws=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ws)!=="svelte-d6zzek"&&(ws.innerHTML=$p),Ql=o(c,`
`),ys=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ys)!=="svelte-1w34ola"&&(ys.innerHTML=Up),Xl=o(c,`
`),_s=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(_s)!=="svelte-1y34l60"&&(_s.innerHTML=Kp),Zl=o(c,`
`),ks=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(ks)!=="svelte-1d10640"&&(ks.innerHTML=Yp),to=o(c,`
`),Ps=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ps)!=="svelte-2164co"&&(Ps.innerHTML=Qp),eo=o(c,`
`),Ss=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ss)!=="svelte-v7w7h5"&&(Ss.innerHTML=Xp),so=o(c,`
`),As=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(As)!=="svelte-1cu6t5b"&&(As.innerHTML=Zp),no=o(c,`
`),Ns=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ns)!=="svelte-11wi3o0"&&(Ns.innerHTML=tr),ao=o(c,`
`),Ts=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ts)!=="svelte-10ugluw"&&(Ts.innerHTML=er),lo=o(c,`
`),Ms=s(c,"SPAN",{id:!0,"data-svelte-h":!0}),a(Ms)!=="svelte-1l5fuea"&&(Ms.innerHTML=sr),c.forEach(p),gr.forEach(p),br.forEach(p),fn=_(i),Ls=s(i,"P",{"data-svelte-h":!0}),a(Ls)!=="svelte-ihinn"&&(Ls.innerHTML=nr),vn=_(i),K=s(i,"H1",{id:!0,"data-svelte-h":!0}),a(K)!=="svelte-5hsefb"&&(K.textContent=ar),xn=_(i),Hs=s(i,"P",{"data-svelte-h":!0}),a(Hs)!=="svelte-x2yo6c"&&(Hs.innerHTML=lr),Cn=_(i),Y=s(i,"PRE",{class:!0,"data-svelte-h":!0}),a(Y)!=="svelte-wmq5ko"&&(Y.innerHTML=or),mn=_(i),Is=s(i,"P",{"data-svelte-h":!0}),a(Is)!=="svelte-89vsuq"&&(Is.innerHTML=ir),bn=_(i),zs=s(i,"P",{"data-svelte-h":!0}),a(zs)!=="svelte-qj15zg"&&(zs.innerHTML=pr),gn=_(i),Q=s(i,"H2",{id:!0,"data-svelte-h":!0}),a(Q)!=="svelte-1bdomfq"&&(Q.textContent=rr),wn=_(i),js=s(i,"P",{"data-svelte-h":!0}),a(js)!=="svelte-3twdgh"&&(js.innerHTML=cr),this.h()},h(){n(q,"id","minecraft-clone"),n(D,"type","1"),n(G,"id","world-data-pt.1"),n(st,"id","cb1-1"),n($s,"id","cb1-2"),n(nt,"class","kw"),n(Bs,"class","op"),n(W,"id","cb1-3"),n(at,"id","cb1-4"),n(lt,"id","cb1-5"),n(ot,"id","cb1-6"),n(Us,"id","cb1-7"),n(it,"class","op"),n(pt,"class","op"),n(rt,"class","op"),n(ct,"class","kw"),n(dt,"class","op"),n(ht,"class","op"),n(I,"id","cb1-8"),n(ut,"class","op"),n(ft,"class","at"),n(vt,"class","dt"),n(xt,"class","op"),n(Ct,"class","op"),n(mt,"class","op"),n(bt,"class","op"),n(gt,"class","op"),n(wt,"class","op"),n(yt,"class","kw"),n(_t,"class","op"),n(kt,"class","op"),n(b,"id","cb1-9"),n(Pt,"id","cb1-10"),n(g,"class","sourceCode cpp"),n(Es,"class","sourceCode cpp"),n(O,"class","sourceCode"),n(O,"id","cb1"),n(R,"id","player-controls"),n(V,"id","face-culling"),n(Tt,"class","dt"),n(Mt,"class","op"),n(Lt,"class","op"),n(Ht,"class","dt"),n(It,"class","op"),n(zt,"class","dt"),n(jt,"class","op"),n(Et,"class","dt"),n(Bt,"class","op"),n(Ds,"class","op"),n(k,"id","cb2-1"),n(qt,"id","cb2-2"),n(Dt,"id","cb2-3"),n(Gt,"id","cb2-4"),n(Ot,"class","op"),n(Wt,"class","op"),n(Ft,"class","dv"),n(Rt,"class","op"),n(Vt,"class","op"),n(Gs,"class","op"),n(z,"id","cb2-5"),n(Jt,"id","cb2-6"),n($t,"id","cb2-7"),n(Ut,"id","cb2-8"),n(Kt,"id","cb2-9"),n(Yt,"id","cb2-10"),n(Qt,"id","cb2-11"),n(Xt,"id","cb2-12"),n(Ks,"id","cb2-13"),n(Zt,"class","cf"),n(te,"class","op"),n(ee,"class","dt"),n(se,"class","op"),n(ne,"class","dv"),n(ae,"class","op"),n(le,"class","op"),n(oe,"class","dv"),n(ie,"class","op"),n(pe,"class","op"),n(Os,"class","op"),n(P,"id","cb2-14"),n(re,"id","cb2-15"),n(ce,"id","cb2-16"),n(de,"class","cf"),n(he,"class","op"),n(ue,"class","op"),n(fe,"class","kw"),n(ve,"class","op"),n(xe,"class","op"),n(Ce,"class","op"),n(me,"class","kw"),n(be,"class","op"),n(ge,"class","op"),n(we,"class","op"),n(ye,"class","dv"),n(_e,"class","op"),n(Ws,"class","op"),n(x,"id","cb2-17"),n(ke,"id","cb2-18"),n(Pe,"id","cb2-19"),n(Se,"id","cb2-20"),n(Ae,"id","cb2-21"),n(Ys,"id","cb2-22"),n(Ne,"id","cb2-23"),n(Te,"id","cb2-24"),n(d,"class","sourceCode cpp"),n(qs,"class","sourceCode cpp"),n(J,"class","sourceCode"),n(J,"id","cb2"),n($,"id","block-highlighting"),n(Le,"class","dt"),n(He,"class","op"),n(Ie,"class","op"),n(ze,"class","op"),n(je,"class","op"),n(Rs,"class","op"),n(H,"id","cb3-1"),n(Ee,"id","cb3-2"),n(Be,"id","cb3-3"),n(qe,"id","cb3-4"),n(De,"class","cf"),n(Ge,"class","op"),n(Oe,"class","dt"),n(We,"class","op"),n(Fe,"class","dv"),n(Re,"class","op"),n(Ve,"class","op"),n(Je,"class","fl"),n($e,"class","bu"),n(Ue,"class","op"),n(Ke,"class","op"),n(Ye,"class","fl"),n(Qe,"class","bu"),n(Xe,"class","op"),n(Vs,"class","op"),n(C,"id","cb3-5"),n(Ze,"id","cb3-6"),n(ts,"id","cb3-7"),n(es,"id","cb3-8"),n(ss,"id","cb3-9"),n(ns,"id","cb3-10"),n(as,"id","cb3-11"),n(ls,"id","cb3-12"),n(os,"id","cb3-13"),n(is,"id","cb3-14"),n(ps,"id","cb3-15"),n(rs,"id","cb3-16"),n(cs,"id","cb3-17"),n(ds,"class","cf"),n(hs,"class","op"),n(us,"class","op"),n(fs,"class","kw"),n(vs,"class","op"),n(xs,"class","op"),n(Cs,"class","op"),n(ms,"class","dv"),n(bs,"class","op"),n(Js,"class","op"),n(S,"id","cb3-18"),n(gs,"id","cb3-19"),n(ws,"id","cb3-20"),n(ys,"id","cb3-21"),n(_s,"id","cb3-22"),n(ks,"id","cb3-23"),n(Ps,"id","cb3-24"),n(Ss,"id","cb3-25"),n(As,"id","cb3-26"),n(Ns,"id","cb3-27"),n(Ts,"id","cb3-28"),n(Ms,"id","cb3-29"),n(r,"class","sourceCode cpp"),n(Fs,"class","sourceCode cpp"),n(U,"class","sourceCode"),n(U,"id","cb3"),n(K,"id","project-organization"),n(Y,"class","make"),n(Q,"id","gallery")},m(i,h){u(i,q,h),u(i,Qs,h),u(i,X,h),u(i,Xs,h),u(i,Z,h),u(i,Zs,h),u(i,tt,h),u(i,tn,h),u(i,D,h),u(i,en,h),u(i,G,h),u(i,sn,h),u(i,et,h),u(i,nn,h),u(i,O,h),t(O,Es),t(Es,g),t(g,st),t(g,Pn),t(g,$s),t(g,Sn),t(g,W),t(W,nt),t(W,An),t(W,Bs),t(Bs,Nn),t(g,Tn),t(g,at),t(g,Mn),t(g,lt),t(g,Ln),t(g,ot),t(g,Hn),t(g,Us),t(g,In),t(g,I),t(I,zn),t(I,it),t(I,jn),t(I,pt),t(I,En),t(I,rt),t(I,ct),t(I,dt),t(I,Bn),t(I,ht),t(ht,qn),t(ht,Dn),t(g,Gn),t(g,b),t(b,On),t(b,ut),t(b,ft),t(b,Wn),t(b,vt),t(b,xt),t(b,Fn),t(b,Ct),t(b,Rn),t(b,mt),t(b,Vn),t(b,bt),t(b,Jn),t(b,gt),t(b,$n),t(b,wt),t(b,yt),t(b,_t),t(b,Un),t(b,kt),t(kt,Kn),t(kt,Yn),t(g,Qn),t(g,Pt),u(i,an,h),u(i,F,h),t(F,Xn),t(F,St),t(St,Zn),t(St,ta),t(St,ea),t(F,sa),u(i,ln,h),u(i,R,h),u(i,on,h),u(i,At,h),u(i,pn,h),u(i,V,h),u(i,rn,h),u(i,Nt,h),u(i,cn,h),u(i,J,h),t(J,qs),t(qs,d),t(d,k),t(k,Tt),t(k,na),t(k,Mt),t(k,aa),t(k,Lt),t(k,Ht),t(k,la),t(k,It),t(k,oa),t(k,zt),t(k,ia),t(k,jt),t(k,pa),t(k,Et),t(k,ra),t(k,Bt),t(k,ca),t(k,Ds),t(Ds,da),t(d,ha),t(d,qt),t(d,ua),t(d,Dt),t(d,fa),t(d,Gt),t(d,va),t(d,z),t(z,xa),t(z,Ot),t(z,Ca),t(z,Wt),t(z,Ft),t(z,Rt),t(z,ma),t(z,Vt),t(z,ba),t(z,Gs),t(Gs,ga),t(d,wa),t(d,Jt),t(d,ya),t(d,$t),t(d,_a),t(d,Ut),t(d,ka),t(d,Kt),t(d,Pa),t(d,Yt),t(d,Sa),t(d,Qt),t(d,Aa),t(d,Xt),t(d,Na),t(d,Ks),t(d,Ta),t(d,P),t(P,Ma),t(P,Zt),t(P,te),t(P,ee),t(P,La),t(P,se),t(P,Ha),t(P,ne),t(P,ae),t(P,Ia),t(P,le),t(P,za),t(P,oe),t(P,ie),t(P,ja),t(P,pe),t(P,Ea),t(P,Os),t(Os,Ba),t(d,qa),t(d,re),t(d,Da),t(d,ce),t(d,Ga),t(d,x),t(x,Oa),t(x,de),t(x,Wa),t(x,he),t(x,Fa),t(x,ue),t(x,Ra),t(x,fe),t(x,Va),t(x,ve),t(x,Ja),t(x,xe),t(x,$a),t(x,Ce),t(x,Ua),t(x,me),t(x,Ka),t(x,be),t(x,Ya),t(x,ge),t(x,Qa),t(x,we),t(x,Xa),t(x,ye),t(x,_e),t(x,Za),t(x,Ws),t(Ws,tl),t(d,el),t(d,ke),t(d,sl),t(d,Pe),t(d,nl),t(d,Se),t(d,al),t(d,Ae),t(d,ll),t(d,Ys),t(d,ol),t(d,Ne),t(d,il),t(d,Te),u(i,dn,h),u(i,$,h),u(i,hn,h),u(i,Me,h),u(i,un,h),u(i,U,h),t(U,Fs),t(Fs,r),t(r,H),t(H,Le),t(H,pl),t(H,He),t(H,rl),t(H,Ie),t(H,cl),t(H,ze),t(H,dl),t(H,je),t(H,hl),t(H,Rs),t(Rs,ul),t(r,fl),t(r,Ee),t(r,vl),t(r,Be),t(r,xl),t(r,qe),t(r,Cl),t(r,C),t(C,ml),t(C,De),t(C,Ge),t(C,Oe),t(C,bl),t(C,We),t(C,gl),t(C,Fe),t(C,Re),t(C,wl),t(C,Ve),t(C,yl),t(C,Je),t(C,$e),t(C,Ue),t(C,_l),t(C,Ke),t(C,kl),t(C,Ye),t(C,Qe),t(C,Xe),t(C,Pl),t(C,Vs),t(Vs,Sl),t(r,Al),t(r,Ze),t(r,Nl),t(r,ts),t(r,Tl),t(r,es),t(r,Ml),t(r,ss),t(r,Ll),t(r,ns),t(r,Hl),t(r,as),t(r,Il),t(r,ls),t(r,zl),t(r,os),t(r,jl),t(r,is),t(r,El),t(r,ps),t(r,Bl),t(r,rs),t(r,ql),t(r,cs),t(r,Dl),t(r,S),t(S,Gl),t(S,ds),t(S,hs),t(S,Ol),t(S,us),t(S,Wl),t(S,fs),t(S,Fl),t(S,vs),t(S,Rl),t(S,xs),t(S,Vl),t(S,Cs),t(S,Jl),t(S,ms),t(S,bs),t(S,$l),t(S,Js),t(Js,Ul),t(r,Kl),t(r,gs),t(r,Yl),t(r,ws),t(r,Ql),t(r,ys),t(r,Xl),t(r,_s),t(r,Zl),t(r,ks),t(r,to),t(r,Ps),t(r,eo),t(r,Ss),t(r,so),t(r,As),t(r,no),t(r,Ns),t(r,ao),t(r,Ts),t(r,lo),t(r,Ms),u(i,fn,h),u(i,Ls,h),u(i,vn,h),u(i,K,h),u(i,xn,h),u(i,Hs,h),u(i,Cn,h),u(i,Y,h),u(i,mn,h),u(i,Is,h),u(i,bn,h),u(i,zs,h),u(i,gn,h),u(i,Q,h),u(i,wn,h),u(i,js,h)},p:po,i:po,o:po,d(i){i&&(p(q),p(Qs),p(X),p(Xs),p(Z),p(Zs),p(tt),p(tn),p(D),p(en),p(G),p(sn),p(et),p(nn),p(O),p(an),p(F),p(ln),p(R),p(on),p(At),p(pn),p(V),p(rn),p(Nt),p(cn),p(J),p(dn),p($),p(hn),p(Me),p(un),p(U),p(fn),p(Ls),p(vn),p(K),p(xn),p(Hs),p(Cn),p(Y),p(mn),p(Is),p(bn),p(zs),p(gn),p(Q),p(wn),p(js))}}}class Lr extends Sr{constructor(q){super(),Ar(this,q,null,Nr,Pr,{})}}export{Lr as component};
