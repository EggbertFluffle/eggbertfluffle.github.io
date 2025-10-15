import{a as Dp,n as Ci}from"../chunks/scheduler.DDaOzR71.js";import{S as Gp,i as Op,e as a,s as P,t as l,c as n,g as s,a as A,b as v,d as i,f as r,h as e,j as u,k as t}from"../chunks/index.CXL903QX.js";function Wp(qp){let q,mi="Minecraft Clone",pn,X,gi=`Honestly I’m surprise I haven’t created something of a Minecraft
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
later if I felt I needed to.`,cn,Z,wi=`At this point, the people of reddit praised <a href="https://learnopengl.com/">learnopengl.org</a> so I followed it’s
tutorials, and would recommend it, or it’s physical bool version, to
anyone interested in dipping their toes. Either way, I got through the
basics of rendering and started to figure out how I would put together a
little Minecraft simulation, which I ended up deciding to call <a href="https://github.com/EggbertFluffle/Mingleburb">Mingleburb</a> for
no reason other than I thought it was funny.`,dn,tt,yi="First, what do I want to happen with this little experiment:",hn,G,_i=`<li>I want to be able to render blocks of different textures with culled
faces (more on that later)</li> <li>Those blocks should be generated using Perlin Noise and held in
chunks</li> <li>There should be free cam controls using the wasd and arrow key/mouse
controls</li> <li>Blocks should be removable and placable by the player relative to
where they look</li> <li>The entire project should be organized, from the make files, to the
encapsulation of classes</li>`,un,O,ki="World Data (pt.1)",fn,et,Pi=`The first and easiest bit to tackle was the creation of rendered
blocks, and to do this I started by just creating a simple block struct
that held some data. In my thinking, I wanted to hold the least amount
of data possible for each block, and tried to make it’s footprint as
small as possible. I’ll talk about the faces member variable later, but
the others are pretty self explanatory, though they were modified later
to be more efficient (as of now I’m being punished for fixing something
that already worked as the entire simulation is bugged because of my
memory greed T-T).`,vn,W,Ya,w,at,Ai='<a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="co">//  Block.hpp</span>',En,nt,Si='<a href="#cb1-2" aria-hidden="true" tabindex="-1"></a>',jn,D,st,lt,Ti="struct",Bn,Qa,Ni="{",qn,Dn,it,Mi='<a href="#cb1-4" aria-hidden="true" tabindex="-1"></a>    <span class="bu">std::</span>stirng texture<span class="op">;</span> <span class="co">// Texture name for block</span>',Gn,ot,Li='<a href="#cb1-5" aria-hidden="true" tabindex="-1"></a>    <span class="dt">unsigned</span> <span class="dt">char</span> faces<span class="op">;</span> <span class="co">// Which faces of the block are visible</span>',On,rt,Hi='<a href="#cb1-6" aria-hidden="true" tabindex="-1"></a>    <span class="dt">bool</span> air<span class="op">;</span> <span class="co">// Is this an air block</span>',Wn,pt,Ii='<a href="#cb1-7" aria-hidden="true" tabindex="-1"></a>',Fn,I,ct,Rn,dt,zi="()",Vn,ht,Ei=":",Jn,ut,ji="(",ft,Bi="true",vt,qi=")",$n,xt,Di="{",Un,Kn,Yn,m,bt,Qn,Ct,Gi="(",mt,Oi="const",Xn,gt,Wi="char",wt,Fi="*",Zn,yt,Ri=")",ts,_t,Vi=":",es,kt,Ji="(",as,Pt,$i="),",ns,At,Ui="(",St,Ki="false",Tt,Yi=")",ss,Nt,Qi="{",ls,is,os,Mt,Xi='<a href="#cb1-10" aria-hidden="true" tabindex="-1"></a><span class="op">};</span>',xn,F,rs,Lt,ps,Zi="{",cs,ds,hs,bn,R,to="Player Controls",Cn,Ht,eo=`This proved to have two main challenges. First, I was completely
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
translation.`,mn,V,ao="Face Culling",gn,It,no=`Next up was face culling, which tells the renderer to only draw faces
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
the rendering process) Now the actually face culling:`,wn,J,Xa,d,y,zt,Et,so="void",us,jt,lo="::",fs,Bt,io="(",qt,oo="int",vs,Dt,ro=",",xs,Gt,po="int",bs,Ot,co=",",Cs,Wt,ho="int",ms,Ft,uo=")",gs,Za,fo="{",ws,ys,Rt,vo='<a href="#cb2-2" aria-hidden="true" tabindex="-1"></a>        Block<span class="op">*</span> block <span class="op">=</span> getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z<span class="op">);</span>',_s,Vt,xo='<a href="#cb2-3" aria-hidden="true" tabindex="-1"></a>        <span class="dt">unsigned</span> <span class="dt">char</span> faces <span class="op">=</span> <span class="dv">0</span><span class="op">;</span>',ks,Jt,bo='<a href="#cb2-4" aria-hidden="true" tabindex="-1"></a>        <span class="cf">if</span><span class="op">(</span>block <span class="op">==</span> <span class="kw">nullptr</span> <span class="op">||</span> block<span class="op">-&gt;</span>id <span class="op">==</span> <span class="dv">0</span><span class="op">)</span> <span class="cf">return</span><span class="op">;</span>',Ps,z,$t,As,Ut,Co="*",Ss,Kt,mo="[",Yt,go="6",Qt,wo="]",Ts,Xt,yo="=",Ns,tn,_o="{",Ms,Ls,Zt,ko='<a href="#cb2-6" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x <span class="op">+</span> <span class="dv">1</span><span class="op">,</span> y<span class="op">,</span> z<span class="op">),</span>',Hs,te,Po='<a href="#cb2-7" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x <span class="op">-</span> <span class="dv">1</span><span class="op">,</span> y<span class="op">,</span> z<span class="op">),</span>',Is,ee,Ao='<a href="#cb2-8" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x<span class="op">,</span> y <span class="op">+</span> <span class="dv">1</span><span class="op">,</span> z<span class="op">),</span>',zs,ae,So='<a href="#cb2-9" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x<span class="op">,</span> y <span class="op">-</span> <span class="dv">1</span><span class="op">,</span> z<span class="op">),</span>',Es,ne,To='<a href="#cb2-10" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z <span class="op">+</span> <span class="dv">1</span><span class="op">),</span>',js,se,No='<a href="#cb2-11" aria-hidden="true" tabindex="-1"></a>                getBlock<span class="op">(</span>x<span class="op">,</span> y<span class="op">,</span> z <span class="op">-</span> <span class="dv">1</span><span class="op">),</span>',Bs,le,Mo='<a href="#cb2-12" aria-hidden="true" tabindex="-1"></a>        <span class="op">};</span>',qs,ie,Lo='<a href="#cb2-13" aria-hidden="true" tabindex="-1"></a>',Ds,_,oe,Gs,re,Ho="for",pe,Io="(",ce,zo="int",Os,de,Eo="=",Ws,he,jo="0",ue,Bo=";",Fs,fe,qo="<",Rs,ve,Do="6",xe,Go=";",Vs,be,Oo="++)",Js,en,Wo="{",$s,Us,Ce,Fo='<a href="#cb2-15" aria-hidden="true" tabindex="-1"></a>                <span class="dt">unsigned</span> <span class="dt">char</span> f <span class="op">=</span> <span class="bn">0b10000000</span> <span class="op">&gt;&gt;</span> <span class="op">(</span>i<span class="op">);</span>',Ks,me,Ro='<a href="#cb2-16" aria-hidden="true" tabindex="-1"></a>                Block<span class="op">*</span> b <span class="op">=</span> dirs<span class="op">[</span>i<span class="op">];</span>',Ys,x,ge,Qs,we,Vo="if",Xs,ye,Jo="(",Zs,_e,$o="==",tl,ke,Uo="nullptr",el,Pe,Ko="||",al,Ae,Yo="(",nl,Se,Qo="!=",sl,Te,Xo="nullptr",ll,Ne,Zo="&&",il,Me,tr="->",ol,Le,er="!=",rl,He,ar="0",Ie,nr="))",pl,an,sr="{",cl,dl,ze,lr='<a href="#cb2-18" aria-hidden="true" tabindex="-1"></a>                        faces <span class="op">=</span> faces <span class="op">|</span> f<span class="op">;</span>',hl,Ee,ir='<a href="#cb2-19" aria-hidden="true" tabindex="-1"></a>                <span class="op">}</span>',ul,je,or='<a href="#cb2-20" aria-hidden="true" tabindex="-1"></a>        <span class="op">}</span>',fl,Be,rr='<a href="#cb2-21" aria-hidden="true" tabindex="-1"></a>        faces <span class="op">=</span> <span class="op">~</span>faces<span class="op">;</span>',vl,qe,pr='<a href="#cb2-22" aria-hidden="true" tabindex="-1"></a>',xl,De,cr='<a href="#cb2-23" aria-hidden="true" tabindex="-1"></a>        block<span class="op">-&gt;</span>faces <span class="op">=</span> faces<span class="op">;</span>',bl,Ge,dr='<a href="#cb2-24" aria-hidden="true" tabindex="-1"></a><span class="op">}</span>',yn,$,hr="Block Highlighting",_n,Oe,ur=`The <code>id</code> that I mentioned also keeps track of the texture
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
about why this is a naive approach in my opinion.`,kn,U,nn,p,H,We,Fe,fr="void",Cl,Re,vr="::",ml,Ve,xr="(",gl,Je,br="*",wl,$e,Cr=")",yl,sn,mr="{",_l,kl,Ue,gr='<a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>        Block<span class="op">*</span> block<span class="op">;</span>',Pl,Ke,wr='<a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>        <span class="co">// a is the interpolation values</span>',Al,Ye,yr='<a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>        <span class="co">// 100 equally spaced vectors to test between the player and its max reach</span>',Sl,b,Qe,Tl,Xe,_r="for",Ze,kr="(",ta,Pr="float",Nl,ea,Ar="=",Ml,aa,Sr="0",na,Tr=";",Ll,sa,Nr="<",Hl,la,Mr="1.0",ia,Lr="f",oa,Hr=";",Il,ra,Ir="+=",zl,pa,zr="0.01",ca,Er="f",da,jr=")",El,ln,Br="{",jl,Bl,ha,qr='<a href="#cb3-6" aria-hidden="true" tabindex="-1"></a>                <span class="co">// the actual lerping</span>',ql,ua,Dr='<a href="#cb3-7" aria-hidden="true" tabindex="-1"></a>                glm<span class="op">::</span>vec3 reach<span class="op">(</span>',Dl,fa,Gr='<a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>                        position<span class="op">.</span>x <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>x <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a<span class="op">,</span>',Gl,va,Or='<a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>                        position<span class="op">.</span>y <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>y <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a<span class="op">,</span>',Ol,xa,Wr='<a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>                        position<span class="op">.</span>z <span class="op">+</span> <span class="op">(</span>lookDir<span class="op">.</span>z <span class="op">*</span> viewDistance<span class="op">)</span> <span class="op">*</span> a',Wl,ba,Fr='<a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>                <span class="op">);</span>',Fl,Ca,Rr='<a href="#cb3-12" aria-hidden="true" tabindex="-1"></a>                <span class="co">// round and test for a block</span>',Rl,ma,Vr='<a href="#cb3-13" aria-hidden="true" tabindex="-1"></a>                block <span class="op">=</span> gameManager<span class="op">-&gt;</span>getBlock<span class="op">(</span>',Vl,ga,Jr='<a href="#cb3-14" aria-hidden="true" tabindex="-1"></a>                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>x <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',Jl,wa,$r='<a href="#cb3-15" aria-hidden="true" tabindex="-1"></a>                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>y <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',$l,ya,Ur='<a href="#cb3-16" aria-hidden="true" tabindex="-1"></a>                        <span class="dt">int</span><span class="op">(</span>reach<span class="op">.</span>z <span class="op">+</span> <span class="fl">0.5</span><span class="op">)</span>',Ul,_a,Kr='<a href="#cb3-17" aria-hidden="true" tabindex="-1"></a>                <span class="op">);</span>',Kl,k,ka,Yl,Pa,Yr="if",Aa,Qr="(",Ql,Sa,Xr="!=",Xl,Ta,Zr="nullptr",Zl,Na,tp="&&",ti,Ma,ep="->",ei,La,ap="!=",ai,Ha,np="0",Ia,sp=")",ni,on,lp="{",si,li,za,ip='<a href="#cb3-19" aria-hidden="true" tabindex="-1"></a>                        selectedBlock <span class="op">=</span> block<span class="op">;</span> ',ii,Ea,op='<a href="#cb3-20" aria-hidden="true" tabindex="-1"></a>                        selectedBlockCoords <span class="op">=</span> glm<span class="op">::</span>vec3<span class="op">(</span>',oi,ja,rp='<a href="#cb3-21" aria-hidden="true" tabindex="-1"></a>                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>x <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',ri,Ba,pp='<a href="#cb3-22" aria-hidden="true" tabindex="-1"></a>                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>y <span class="op">+</span> <span class="fl">0.5</span><span class="op">),</span>',pi,qa,cp='<a href="#cb3-23" aria-hidden="true" tabindex="-1"></a>                                <span class="bu">std::</span>floor<span class="op">(</span>reach<span class="op">.</span>z <span class="op">+</span> <span class="fl">0.5</span><span class="op">)</span>',ci,Da,dp='<a href="#cb3-24" aria-hidden="true" tabindex="-1"></a>                        <span class="op">);</span>',di,Ga,hp='<a href="#cb3-25" aria-hidden="true" tabindex="-1"></a>                        <span class="cf">return</span><span class="op">;</span>',hi,Oa,up='<a href="#cb3-26" aria-hidden="true" tabindex="-1"></a>                <span class="op">}</span>',ui,Wa,fp='<a href="#cb3-27" aria-hidden="true" tabindex="-1"></a>        <span class="op">}</span>',fi,Fa,vp='<a href="#cb3-28" aria-hidden="true" tabindex="-1"></a>        selectedBlock <span class="op">=</span> <span class="kw">nullptr</span><span class="op">;</span>',vi,Ra,xp='<a href="#cb3-29" aria-hidden="true" tabindex="-1"></a><span class="op">}</span>',Pn,Va,bp=`One limitation I’ve found with this method is that it can be
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
me at hdiambrosio@gmail.com.`,An,K,Cp="Project Organization",Sn,Ja,mp=`Coming into this the most “project organization” I did was throwing
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
of make, I found this:`,Tn,Y,gp=`<code>./obj/%.o: %.cpp
    $(CPPC) $(CPPGLAGS) $(WARNINGS) -c -o $@ $^</code>`,Nn,$a,wp=`There was some more moving parts to the real makefile, but this is
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
sooner if I hadn’t taken the time to at least learn the basics.`,Mn,Ua,yp=`The other lifesaver for this project was gdb or the GNU Project
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
code.`,Ln,Q,_p="Gallery",Hn,Ka,kp=`Some simple terrain generation using basic perlin noise. <img src="/images/minecraft_clone_basic_terrain.png"/> Differnt textured
blocks can be rendered with each other. A sea of pink wool with some
islands made of wood. <img src="/images/minecraft_clone_mixed_pink_sea.png"/> Blocks are culled
everywhere a player shouldn’t be able to see, in between two blocks,
from the void of the world. <img src="/images/minecraft_clone_proof_of_culling.png"/>`;return{c(){q=a("h1"),q.textContent=mi,pn=P(),X=a("p"),X.innerHTML=gi,cn=P(),Z=a("p"),Z.innerHTML=wi,dn=P(),tt=a("p"),tt.textContent=yi,hn=P(),G=a("ol"),G.innerHTML=_i,un=P(),O=a("h2"),O.textContent=ki,fn=P(),et=a("p"),et.textContent=Pi,vn=P(),W=a("div"),Ya=a("pre"),w=a("code"),at=a("span"),at.innerHTML=Ai,En=l(`
`),nt=a("span"),nt.innerHTML=Si,jn=l(`
`),D=a("span"),st=a("a"),lt=a("span"),lt.textContent=Ti,Bn=l(" Block "),Qa=a("span"),qn=l(Ni),Dn=l(`
`),it=a("span"),it.innerHTML=Mi,Gn=l(`
`),ot=a("span"),ot.innerHTML=Li,On=l(`
`),rt=a("span"),rt.innerHTML=Hi,Wn=l(`
`),pt=a("span"),pt.innerHTML=Ii,Fn=l(`
`),I=a("span"),ct=a("a"),Rn=l("    Block"),dt=a("span"),dt.textContent=zi,Vn=l(" "),ht=a("span"),ht.textContent=Ei,Jn=l(" air"),ut=a("span"),ut.textContent=ji,ft=a("span"),ft.textContent=Bi,vt=a("span"),vt.textContent=qi,$n=l(" "),xt=a("span"),Un=l(Di),Kn=l("}"),Yn=l(`
`),m=a("span"),bt=a("a"),Qn=l("    Block"),Ct=a("span"),Ct.textContent=Gi,mt=a("span"),mt.textContent=Oi,Xn=l(" "),gt=a("span"),gt.textContent=Wi,wt=a("span"),wt.textContent=Fi,Zn=l(" textureName"),yt=a("span"),yt.textContent=Ri,ts=l(" "),_t=a("span"),_t.textContent=Vi,es=l(" texture"),kt=a("span"),kt.textContent=Ji,as=l("textureName"),Pt=a("span"),Pt.textContent=$i,ns=l(" air"),At=a("span"),At.textContent=Ui,St=a("span"),St.textContent=Ki,Tt=a("span"),Tt.textContent=Yi,ss=l(" "),Nt=a("span"),ls=l(Qi),is=l("}"),os=l(`
`),Mt=a("span"),Mt.innerHTML=Xi,xn=P(),F=a("p"),rs=l(`With that out of the way, these were simple stored in a c-style
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
`),Lt=a("code"),ps=l('window.createEventListener("keydown" (e) => '),cs=l(Zi),ds=l(" handleInput(e) };"),hs=l("."),bn=P(),R=a("h2"),R.textContent=to,Cn=P(),Ht=a("p"),Ht.innerHTML=eo,mn=P(),V=a("h2"),V.textContent=ao,gn=P(),It=a("p"),It.innerHTML=no,wn=P(),J=a("div"),Xa=a("pre"),d=a("code"),y=a("span"),zt=a("a"),Et=a("span"),Et.textContent=so,us=l(" GameManager"),jt=a("span"),jt.textContent=lo,fs=l("cullFaces"),Bt=a("span"),Bt.textContent=io,qt=a("span"),qt.textContent=oo,vs=l(" x"),Dt=a("span"),Dt.textContent=ro,xs=l(" "),Gt=a("span"),Gt.textContent=po,bs=l(" y"),Ot=a("span"),Ot.textContent=co,Cs=l(" "),Wt=a("span"),Wt.textContent=ho,ms=l(" z"),Ft=a("span"),Ft.textContent=uo,gs=l(" "),Za=a("span"),ws=l(fo),ys=l(`
`),Rt=a("span"),Rt.innerHTML=vo,_s=l(`
`),Vt=a("span"),Vt.innerHTML=xo,ks=l(`
`),Jt=a("span"),Jt.innerHTML=bo,Ps=l(`
`),z=a("span"),$t=a("a"),As=l("        Block"),Ut=a("span"),Ut.textContent=Co,Ss=l(" dirs"),Kt=a("span"),Kt.textContent=mo,Yt=a("span"),Yt.textContent=go,Qt=a("span"),Qt.textContent=wo,Ts=l(" "),Xt=a("span"),Xt.textContent=yo,Ns=l(" "),tn=a("span"),Ms=l(_o),Ls=l(`
`),Zt=a("span"),Zt.innerHTML=ko,Hs=l(`
`),te=a("span"),te.innerHTML=Po,Is=l(`
`),ee=a("span"),ee.innerHTML=Ao,zs=l(`
`),ae=a("span"),ae.innerHTML=So,Es=l(`
`),ne=a("span"),ne.innerHTML=To,js=l(`
`),se=a("span"),se.innerHTML=No,Bs=l(`
`),le=a("span"),le.innerHTML=Mo,qs=l(`
`),ie=a("span"),ie.innerHTML=Lo,Ds=l(`
`),_=a("span"),oe=a("a"),Gs=l("        "),re=a("span"),re.textContent=Ho,pe=a("span"),pe.textContent=Io,ce=a("span"),ce.textContent=zo,Os=l(" i "),de=a("span"),de.textContent=Eo,Ws=l(" "),he=a("span"),he.textContent=jo,ue=a("span"),ue.textContent=Bo,Fs=l(" i "),fe=a("span"),fe.textContent=qo,Rs=l(" "),ve=a("span"),ve.textContent=Do,xe=a("span"),xe.textContent=Go,Vs=l(" i"),be=a("span"),be.textContent=Oo,Js=l(" "),en=a("span"),$s=l(Wo),Us=l(`
`),Ce=a("span"),Ce.innerHTML=Fo,Ks=l(`
`),me=a("span"),me.innerHTML=Ro,Ys=l(`
`),x=a("span"),ge=a("a"),Qs=l("                "),we=a("span"),we.textContent=Vo,Xs=l(" "),ye=a("span"),ye.textContent=Jo,Zs=l("b "),_e=a("span"),_e.textContent=$o,tl=l(" "),ke=a("span"),ke.textContent=Uo,el=l(" "),Pe=a("span"),Pe.textContent=Ko,al=l(" "),Ae=a("span"),Ae.textContent=Yo,nl=l("b "),Se=a("span"),Se.textContent=Qo,sl=l(" "),Te=a("span"),Te.textContent=Xo,ll=l(" "),Ne=a("span"),Ne.textContent=Zo,il=l(" b"),Me=a("span"),Me.textContent=tr,ol=l("id "),Le=a("span"),Le.textContent=er,rl=l(" "),He=a("span"),He.textContent=ar,Ie=a("span"),Ie.textContent=nr,pl=l(" "),an=a("span"),cl=l(sr),dl=l(`
`),ze=a("span"),ze.innerHTML=lr,hl=l(`
`),Ee=a("span"),Ee.innerHTML=ir,ul=l(`
`),je=a("span"),je.innerHTML=or,fl=l(`
`),Be=a("span"),Be.innerHTML=rr,vl=l(`
`),qe=a("span"),qe.innerHTML=pr,xl=l(`
`),De=a("span"),De.innerHTML=cr,bl=l(`
`),Ge=a("span"),Ge.innerHTML=dr,yn=P(),$=a("h2"),$.textContent=hr,_n=P(),Oe=a("p"),Oe.innerHTML=ur,kn=P(),U=a("div"),nn=a("pre"),p=a("code"),H=a("span"),We=a("a"),Fe=a("span"),Fe.textContent=fr,Cl=l(" Player"),Re=a("span"),Re.textContent=vr,ml=l("castBlockRay"),Ve=a("span"),Ve.textContent=xr,gl=l("GameManager"),Je=a("span"),Je.textContent=br,wl=l(" gameManager"),$e=a("span"),$e.textContent=Cr,yl=l(" "),sn=a("span"),_l=l(mr),kl=l(`
`),Ue=a("span"),Ue.innerHTML=gr,Pl=l(`
`),Ke=a("span"),Ke.innerHTML=wr,Al=l(`
`),Ye=a("span"),Ye.innerHTML=yr,Sl=l(`
`),b=a("span"),Qe=a("a"),Tl=l("        "),Xe=a("span"),Xe.textContent=_r,Ze=a("span"),Ze.textContent=kr,ta=a("span"),ta.textContent=Pr,Nl=l(" a "),ea=a("span"),ea.textContent=Ar,Ml=l(" "),aa=a("span"),aa.textContent=Sr,na=a("span"),na.textContent=Tr,Ll=l(" a "),sa=a("span"),sa.textContent=Nr,Hl=l(" "),la=a("span"),la.textContent=Mr,ia=a("span"),ia.textContent=Lr,oa=a("span"),oa.textContent=Hr,Il=l(" a "),ra=a("span"),ra.textContent=Ir,zl=l(" "),pa=a("span"),pa.textContent=zr,ca=a("span"),ca.textContent=Er,da=a("span"),da.textContent=jr,El=l(" "),ln=a("span"),jl=l(Br),Bl=l(`
`),ha=a("span"),ha.innerHTML=qr,ql=l(`
`),ua=a("span"),ua.innerHTML=Dr,Dl=l(`
`),fa=a("span"),fa.innerHTML=Gr,Gl=l(`
`),va=a("span"),va.innerHTML=Or,Ol=l(`
`),xa=a("span"),xa.innerHTML=Wr,Wl=l(`
`),ba=a("span"),ba.innerHTML=Fr,Fl=l(`
`),Ca=a("span"),Ca.innerHTML=Rr,Rl=l(`
`),ma=a("span"),ma.innerHTML=Vr,Vl=l(`
`),ga=a("span"),ga.innerHTML=Jr,Jl=l(`
`),wa=a("span"),wa.innerHTML=$r,$l=l(`
`),ya=a("span"),ya.innerHTML=Ur,Ul=l(`
`),_a=a("span"),_a.innerHTML=Kr,Kl=l(`
`),k=a("span"),ka=a("a"),Yl=l("                "),Pa=a("span"),Pa.textContent=Yr,Aa=a("span"),Aa.textContent=Qr,Ql=l("block "),Sa=a("span"),Sa.textContent=Xr,Xl=l(" "),Ta=a("span"),Ta.textContent=Zr,Zl=l(" "),Na=a("span"),Na.textContent=tp,ti=l(" block"),Ma=a("span"),Ma.textContent=ep,ei=l("id "),La=a("span"),La.textContent=ap,ai=l(" "),Ha=a("span"),Ha.textContent=np,Ia=a("span"),Ia.textContent=sp,ni=l(" "),on=a("span"),si=l(lp),li=l(`
`),za=a("span"),za.innerHTML=ip,ii=l(`
`),Ea=a("span"),Ea.innerHTML=op,oi=l(`
`),ja=a("span"),ja.innerHTML=rp,ri=l(`
`),Ba=a("span"),Ba.innerHTML=pp,pi=l(`
`),qa=a("span"),qa.innerHTML=cp,ci=l(`
`),Da=a("span"),Da.innerHTML=dp,di=l(`
`),Ga=a("span"),Ga.innerHTML=hp,hi=l(`
`),Oa=a("span"),Oa.innerHTML=up,ui=l(`
`),Wa=a("span"),Wa.innerHTML=fp,fi=l(`
`),Fa=a("span"),Fa.innerHTML=vp,vi=l(`
`),Ra=a("span"),Ra.innerHTML=xp,Pn=P(),Va=a("p"),Va.innerHTML=bp,An=P(),K=a("h1"),K.textContent=Cp,Sn=P(),Ja=a("p"),Ja.innerHTML=mp,Tn=P(),Y=a("pre"),Y.innerHTML=gp,Nn=P(),$a=a("p"),$a.innerHTML=wp,Mn=P(),Ua=a("p"),Ua.innerHTML=yp,Ln=P(),Q=a("h2"),Q.textContent=_p,Hn=P(),Ka=a("p"),Ka.innerHTML=kp,this.h()},l(o){q=n(o,"H1",{id:!0,"data-svelte-h":!0}),s(q)!=="svelte-3yv86n"&&(q.textContent=mi),pn=A(o),X=n(o,"P",{"data-svelte-h":!0}),s(X)!=="svelte-imas7k"&&(X.innerHTML=gi),cn=A(o),Z=n(o,"P",{"data-svelte-h":!0}),s(Z)!=="svelte-1h2gm36"&&(Z.innerHTML=wi),dn=A(o),tt=n(o,"P",{"data-svelte-h":!0}),s(tt)!=="svelte-9rqcdu"&&(tt.textContent=yi),hn=A(o),G=n(o,"OL",{type:!0,"data-svelte-h":!0}),s(G)!=="svelte-9tl6ra"&&(G.innerHTML=_i),un=A(o),O=n(o,"H2",{id:!0,"data-svelte-h":!0}),s(O)!=="svelte-2w6znv"&&(O.textContent=ki),fn=A(o),et=n(o,"P",{"data-svelte-h":!0}),s(et)!=="svelte-1rb4voq"&&(et.textContent=Pi),vn=A(o),W=n(o,"DIV",{class:!0,id:!0});var h=v(W);Ya=n(h,"PRE",{class:!0});var Pp=v(Ya);w=n(Pp,"CODE",{class:!0});var T=v(w);at=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(at)!=="svelte-128x7nm"&&(at.innerHTML=Ai),En=i(T,`
`),nt=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(nt)!=="svelte-xoa5wn"&&(nt.innerHTML=Si),jn=i(T,`
`),D=n(T,"SPAN",{id:!0});var rn=v(D);st=n(rn,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(st).forEach(r),lt=n(rn,"SPAN",{class:!0,"data-svelte-h":!0}),s(lt)!=="svelte-aph1ik"&&(lt.textContent=Ti),Bn=i(rn," Block "),Qa=n(rn,"SPAN",{class:!0});var Ap=v(Qa);qn=i(Ap,Ni),Ap.forEach(r),rn.forEach(r),Dn=i(T,`
`),it=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(it)!=="svelte-1nea0xb"&&(it.innerHTML=Mi),Gn=i(T,`
`),ot=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(ot)!=="svelte-rctc12"&&(ot.innerHTML=Li),On=i(T,`
`),rt=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(rt)!=="svelte-17uqyi5"&&(rt.innerHTML=Hi),Wn=i(T,`
`),pt=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(pt)!=="svelte-8hgga5"&&(pt.innerHTML=Ii),Fn=i(T,`
`),I=n(T,"SPAN",{id:!0});var j=v(I);ct=n(j,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(ct).forEach(r),Rn=i(j,"    Block"),dt=n(j,"SPAN",{class:!0,"data-svelte-h":!0}),s(dt)!=="svelte-1z0apld"&&(dt.textContent=zi),Vn=i(j," "),ht=n(j,"SPAN",{class:!0,"data-svelte-h":!0}),s(ht)!=="svelte-5w8ub2"&&(ht.textContent=Ei),Jn=i(j," air"),ut=n(j,"SPAN",{class:!0,"data-svelte-h":!0}),s(ut)!=="svelte-om7dis"&&(ut.textContent=ji),ft=n(j,"SPAN",{class:!0,"data-svelte-h":!0}),s(ft)!=="svelte-6jsg9z"&&(ft.textContent=Bi),vt=n(j,"SPAN",{class:!0,"data-svelte-h":!0}),s(vt)!=="svelte-1l0idvn"&&(vt.textContent=qi),$n=i(j," "),xt=n(j,"SPAN",{class:!0});var xi=v(xt);Un=i(xi,Di),Kn=i(xi,"}"),xi.forEach(r),j.forEach(r),Yn=i(T,`
`),m=n(T,"SPAN",{id:!0});var S=v(m);bt=n(S,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(bt).forEach(r),Qn=i(S,"    Block"),Ct=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ct)!=="svelte-om7dis"&&(Ct.textContent=Gi),mt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(mt)!=="svelte-1wl7105"&&(mt.textContent=Oi),Xn=i(S," "),gt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(gt)!=="svelte-1xtjha9"&&(gt.textContent=Wi),wt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(wt)!=="svelte-3ytzzy"&&(wt.textContent=Fi),Zn=i(S," textureName"),yt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(yt)!=="svelte-1l0idvn"&&(yt.textContent=Ri),ts=i(S," "),_t=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(_t)!=="svelte-5w8ub2"&&(_t.textContent=Vi),es=i(S," texture"),kt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(kt)!=="svelte-om7dis"&&(kt.textContent=Ji),as=i(S,"textureName"),Pt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(Pt)!=="svelte-7i9wn3"&&(Pt.textContent=$i),ns=i(S," air"),At=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(At)!=="svelte-om7dis"&&(At.textContent=Ui),St=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(St)!=="svelte-isl5s8"&&(St.textContent=Ki),Tt=n(S,"SPAN",{class:!0,"data-svelte-h":!0}),s(Tt)!=="svelte-1l0idvn"&&(Tt.textContent=Yi),ss=i(S," "),Nt=n(S,"SPAN",{class:!0});var bi=v(Nt);ls=i(bi,Qi),is=i(bi,"}"),bi.forEach(r),S.forEach(r),os=i(T,`
`),Mt=n(T,"SPAN",{id:!0,"data-svelte-h":!0}),s(Mt)!=="svelte-lnwrcu"&&(Mt.innerHTML=Xi),T.forEach(r),Pp.forEach(r),h.forEach(r),xn=A(o),F=n(o,"P",{});var In=v(F);rs=i(In,`With that out of the way, these were simple stored in a c-style
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
`),Lt=n(In,"CODE",{});var zn=v(Lt);ps=i(zn,'window.createEventListener("keydown" (e) => '),cs=i(zn,Zi),ds=i(zn," handleInput(e) };"),zn.forEach(r),hs=i(In,"."),In.forEach(r),bn=A(o),R=n(o,"H2",{id:!0,"data-svelte-h":!0}),s(R)!=="svelte-8rnwnl"&&(R.textContent=to),Cn=A(o),Ht=n(o,"P",{"data-svelte-h":!0}),s(Ht)!=="svelte-t8wbjl"&&(Ht.innerHTML=eo),mn=A(o),V=n(o,"H2",{id:!0,"data-svelte-h":!0}),s(V)!=="svelte-piwtaf"&&(V.textContent=ao),gn=A(o),It=n(o,"P",{"data-svelte-h":!0}),s(It)!=="svelte-chx9yy"&&(It.innerHTML=no),wn=A(o),J=n(o,"DIV",{class:!0,id:!0});var Sp=v(J);Xa=n(Sp,"PRE",{class:!0});var Tp=v(Xa);d=n(Tp,"CODE",{class:!0});var f=v(d);y=n(f,"SPAN",{id:!0});var N=v(y);zt=n(N,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(zt).forEach(r),Et=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Et)!=="svelte-lm5up7"&&(Et.textContent=so),us=i(N," GameManager"),jt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(jt)!=="svelte-rf4hhk"&&(jt.textContent=lo),fs=i(N,"cullFaces"),Bt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Bt)!=="svelte-om7dis"&&(Bt.textContent=io),qt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(qt)!=="svelte-1cu2y6w"&&(qt.textContent=oo),vs=i(N," x"),Dt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Dt)!=="svelte-1nfhsgo"&&(Dt.textContent=ro),xs=i(N," "),Gt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Gt)!=="svelte-1cu2y6w"&&(Gt.textContent=po),bs=i(N," y"),Ot=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ot)!=="svelte-1nfhsgo"&&(Ot.textContent=co),Cs=i(N," "),Wt=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Wt)!=="svelte-1cu2y6w"&&(Wt.textContent=ho),ms=i(N," z"),Ft=n(N,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ft)!=="svelte-1l0idvn"&&(Ft.textContent=uo),gs=i(N," "),Za=n(N,"SPAN",{class:!0});var Np=v(Za);ws=i(Np,fo),Np.forEach(r),N.forEach(r),ys=i(f,`
`),Rt=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Rt)!=="svelte-1scm8zw"&&(Rt.innerHTML=vo),_s=i(f,`
`),Vt=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Vt)!=="svelte-ho6u4s"&&(Vt.innerHTML=xo),ks=i(f,`
`),Jt=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Jt)!=="svelte-1au3by"&&(Jt.innerHTML=bo),Ps=i(f,`
`),z=n(f,"SPAN",{id:!0});var B=v(z);$t=n(B,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v($t).forEach(r),As=i(B,"        Block"),Ut=n(B,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ut)!=="svelte-3ytzzy"&&(Ut.textContent=Co),Ss=i(B," dirs"),Kt=n(B,"SPAN",{class:!0,"data-svelte-h":!0}),s(Kt)!=="svelte-32dkz1"&&(Kt.textContent=mo),Yt=n(B,"SPAN",{class:!0,"data-svelte-h":!0}),s(Yt)!=="svelte-9j4qbh"&&(Yt.textContent=go),Qt=n(B,"SPAN",{class:!0,"data-svelte-h":!0}),s(Qt)!=="svelte-1ifu3ef"&&(Qt.textContent=wo),Ts=i(B," "),Xt=n(B,"SPAN",{class:!0,"data-svelte-h":!0}),s(Xt)!=="svelte-b4xhlj"&&(Xt.textContent=yo),Ns=i(B," "),tn=n(B,"SPAN",{class:!0});var Mp=v(tn);Ms=i(Mp,_o),Mp.forEach(r),B.forEach(r),Ls=i(f,`
`),Zt=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Zt)!=="svelte-9tv7iz"&&(Zt.innerHTML=ko),Hs=i(f,`
`),te=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(te)!=="svelte-1cn9znz"&&(te.innerHTML=Po),Is=i(f,`
`),ee=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(ee)!=="svelte-u2vla1"&&(ee.innerHTML=Ao),zs=i(f,`
`),ae=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(ae)!=="svelte-sly5rl"&&(ae.innerHTML=So),Es=i(f,`
`),ne=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(ne)!=="svelte-3lj5kv"&&(ne.innerHTML=To),js=i(f,`
`),se=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(se)!=="svelte-287ew1"&&(se.innerHTML=No),Bs=i(f,`
`),le=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(le)!=="svelte-1jymh5u"&&(le.innerHTML=Mo),qs=i(f,`
`),ie=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(ie)!=="svelte-b84x95"&&(ie.innerHTML=Lo),Ds=i(f,`
`),_=n(f,"SPAN",{id:!0});var M=v(_);oe=n(M,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(oe).forEach(r),Gs=i(M,"        "),re=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(re)!=="svelte-2rmwfp"&&(re.textContent=Ho),pe=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(pe)!=="svelte-om7dis"&&(pe.textContent=Io),ce=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(ce)!=="svelte-1cu2y6w"&&(ce.textContent=zo),Os=i(M," i "),de=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(de)!=="svelte-b4xhlj"&&(de.textContent=Eo),Ws=i(M," "),he=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(he)!=="svelte-1a7kqzb"&&(he.textContent=jo),ue=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(ue)!=="svelte-12pzswd"&&(ue.textContent=Bo),Fs=i(M," i "),fe=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(fe)!=="svelte-1b3orjh"&&(fe.textContent=qo),Rs=i(M," "),ve=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(ve)!=="svelte-9j4qbh"&&(ve.textContent=Do),xe=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(xe)!=="svelte-12pzswd"&&(xe.textContent=Go),Vs=i(M," i"),be=n(M,"SPAN",{class:!0,"data-svelte-h":!0}),s(be)!=="svelte-1f5yuw9"&&(be.textContent=Oo),Js=i(M," "),en=n(M,"SPAN",{class:!0});var Lp=v(en);$s=i(Lp,Wo),Lp.forEach(r),M.forEach(r),Us=i(f,`
`),Ce=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ce)!=="svelte-1r9g8nh"&&(Ce.innerHTML=Fo),Ks=i(f,`
`),me=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(me)!=="svelte-1vpioef"&&(me.innerHTML=Ro),Ys=i(f,`
`),x=n(f,"SPAN",{id:!0});var C=v(x);ge=n(C,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(ge).forEach(r),Qs=i(C,"                "),we=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(we)!=="svelte-2vq077"&&(we.textContent=Vo),Xs=i(C," "),ye=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(ye)!=="svelte-om7dis"&&(ye.textContent=Jo),Zs=i(C,"b "),_e=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(_e)!=="svelte-220jgy"&&(_e.textContent=$o),tl=i(C," "),ke=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(ke)!=="svelte-1wg3kla"&&(ke.textContent=Uo),el=i(C," "),Pe=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Pe)!=="svelte-k86rsc"&&(Pe.textContent=Ko),al=i(C," "),Ae=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ae)!=="svelte-om7dis"&&(Ae.textContent=Yo),nl=i(C,"b "),Se=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Se)!=="svelte-prowt2"&&(Se.textContent=Qo),sl=i(C," "),Te=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Te)!=="svelte-1wg3kla"&&(Te.textContent=Xo),ll=i(C," "),Ne=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ne)!=="svelte-eaypmu"&&(Ne.textContent=Zo),il=i(C," b"),Me=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Me)!=="svelte-i8fftl"&&(Me.textContent=tr),ol=i(C,"id "),Le=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Le)!=="svelte-prowt2"&&(Le.textContent=er),rl=i(C," "),He=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(He)!=="svelte-1a7kqzb"&&(He.textContent=ar),Ie=n(C,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ie)!=="svelte-cdch02"&&(Ie.textContent=nr),pl=i(C," "),an=n(C,"SPAN",{class:!0});var Hp=v(an);cl=i(Hp,sr),Hp.forEach(r),C.forEach(r),dl=i(f,`
`),ze=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(ze)!=="svelte-lrphfk"&&(ze.innerHTML=lr),hl=i(f,`
`),Ee=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ee)!=="svelte-13mk0bp"&&(Ee.innerHTML=ir),ul=i(f,`
`),je=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(je)!=="svelte-lttw49"&&(je.innerHTML=or),fl=i(f,`
`),Be=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Be)!=="svelte-1uy5gq4"&&(Be.innerHTML=rr),vl=i(f,`
`),qe=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(qe)!=="svelte-fowxp5"&&(qe.innerHTML=pr),xl=i(f,`
`),De=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(De)!=="svelte-1cv7bgw"&&(De.innerHTML=cr),bl=i(f,`
`),Ge=n(f,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ge)!=="svelte-189mupt"&&(Ge.innerHTML=dr),f.forEach(r),Tp.forEach(r),Sp.forEach(r),yn=A(o),$=n(o,"H2",{id:!0,"data-svelte-h":!0}),s($)!=="svelte-1jiaz59"&&($.textContent=hr),_n=A(o),Oe=n(o,"P",{"data-svelte-h":!0}),s(Oe)!=="svelte-2b9by8"&&(Oe.innerHTML=ur),kn=A(o),U=n(o,"DIV",{class:!0,id:!0});var Ip=v(U);nn=n(Ip,"PRE",{class:!0});var zp=v(nn);p=n(zp,"CODE",{class:!0});var c=v(p);H=n(c,"SPAN",{id:!0});var E=v(H);We=n(E,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(We).forEach(r),Fe=n(E,"SPAN",{class:!0,"data-svelte-h":!0}),s(Fe)!=="svelte-lm5up7"&&(Fe.textContent=fr),Cl=i(E," Player"),Re=n(E,"SPAN",{class:!0,"data-svelte-h":!0}),s(Re)!=="svelte-rf4hhk"&&(Re.textContent=vr),ml=i(E,"castBlockRay"),Ve=n(E,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ve)!=="svelte-om7dis"&&(Ve.textContent=xr),gl=i(E,"GameManager"),Je=n(E,"SPAN",{class:!0,"data-svelte-h":!0}),s(Je)!=="svelte-3ytzzy"&&(Je.textContent=br),wl=i(E," gameManager"),$e=n(E,"SPAN",{class:!0,"data-svelte-h":!0}),s($e)!=="svelte-1l0idvn"&&($e.textContent=Cr),yl=i(E," "),sn=n(E,"SPAN",{class:!0});var Ep=v(sn);_l=i(Ep,mr),Ep.forEach(r),E.forEach(r),kl=i(c,`
`),Ue=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ue)!=="svelte-1harm5i"&&(Ue.innerHTML=gr),Pl=i(c,`
`),Ke=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ke)!=="svelte-1lgs3z7"&&(Ke.innerHTML=wr),Al=i(c,`
`),Ye=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ye)!=="svelte-1wx05r6"&&(Ye.innerHTML=yr),Sl=i(c,`
`),b=n(c,"SPAN",{id:!0});var g=v(b);Qe=n(g,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(Qe).forEach(r),Tl=i(g,"        "),Xe=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(Xe)!=="svelte-2rmwfp"&&(Xe.textContent=_r),Ze=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ze)!=="svelte-om7dis"&&(Ze.textContent=kr),ta=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ta)!=="svelte-1neuh2n"&&(ta.textContent=Pr),Nl=i(g," a "),ea=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ea)!=="svelte-b4xhlj"&&(ea.textContent=Ar),Ml=i(g," "),aa=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(aa)!=="svelte-1a7kqzb"&&(aa.textContent=Sr),na=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(na)!=="svelte-12pzswd"&&(na.textContent=Tr),Ll=i(g," a "),sa=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(sa)!=="svelte-1b3orjh"&&(sa.textContent=Nr),Hl=i(g," "),la=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(la)!=="svelte-1p90v5a"&&(la.textContent=Mr),ia=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ia)!=="svelte-1by7kco"&&(ia.textContent=Lr),oa=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(oa)!=="svelte-12pzswd"&&(oa.textContent=Hr),Il=i(g," a "),ra=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ra)!=="svelte-g1ogr8"&&(ra.textContent=Ir),zl=i(g," "),pa=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(pa)!=="svelte-n78flo"&&(pa.textContent=zr),ca=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(ca)!=="svelte-1by7kco"&&(ca.textContent=Er),da=n(g,"SPAN",{class:!0,"data-svelte-h":!0}),s(da)!=="svelte-1l0idvn"&&(da.textContent=jr),El=i(g," "),ln=n(g,"SPAN",{class:!0});var jp=v(ln);jl=i(jp,Br),jp.forEach(r),g.forEach(r),Bl=i(c,`
`),ha=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ha)!=="svelte-x1668d"&&(ha.innerHTML=qr),ql=i(c,`
`),ua=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ua)!=="svelte-mmfrul"&&(ua.innerHTML=Dr),Dl=i(c,`
`),fa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(fa)!=="svelte-mqwxe9"&&(fa.innerHTML=Gr),Gl=i(c,`
`),va=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(va)!=="svelte-1y43jfl"&&(va.innerHTML=Or),Ol=i(c,`
`),xa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(xa)!=="svelte-1ml9xt4"&&(xa.innerHTML=Wr),Wl=i(c,`
`),ba=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ba)!=="svelte-5ch8n6"&&(ba.innerHTML=Fr),Fl=i(c,`
`),Ca=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ca)!=="svelte-a5ddm1"&&(Ca.innerHTML=Rr),Rl=i(c,`
`),ma=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ma)!=="svelte-wtiiet"&&(ma.innerHTML=Vr),Vl=i(c,`
`),ga=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ga)!=="svelte-6ywzf6"&&(ga.innerHTML=Jr),Jl=i(c,`
`),wa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(wa)!=="svelte-4w7zbh"&&(wa.innerHTML=$r),$l=i(c,`
`),ya=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ya)!=="svelte-1istlom"&&(ya.innerHTML=Ur),Ul=i(c,`
`),_a=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(_a)!=="svelte-1mx7hi6"&&(_a.innerHTML=Kr),Kl=i(c,`
`),k=n(c,"SPAN",{id:!0});var L=v(k);ka=n(L,"A",{href:!0,"aria-hidden":!0,tabindex:!0}),v(ka).forEach(r),Yl=i(L,"                "),Pa=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Pa)!=="svelte-2vq077"&&(Pa.textContent=Yr),Aa=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Aa)!=="svelte-om7dis"&&(Aa.textContent=Qr),Ql=i(L,"block "),Sa=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Sa)!=="svelte-prowt2"&&(Sa.textContent=Xr),Xl=i(L," "),Ta=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ta)!=="svelte-1wg3kla"&&(Ta.textContent=Zr),Zl=i(L," "),Na=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Na)!=="svelte-eaypmu"&&(Na.textContent=tp),ti=i(L," block"),Ma=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ma)!=="svelte-i8fftl"&&(Ma.textContent=ep),ei=i(L,"id "),La=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(La)!=="svelte-prowt2"&&(La.textContent=ap),ai=i(L," "),Ha=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ha)!=="svelte-1a7kqzb"&&(Ha.textContent=np),Ia=n(L,"SPAN",{class:!0,"data-svelte-h":!0}),s(Ia)!=="svelte-1l0idvn"&&(Ia.textContent=sp),ni=i(L," "),on=n(L,"SPAN",{class:!0});var Bp=v(on);si=i(Bp,lp),Bp.forEach(r),L.forEach(r),li=i(c,`
`),za=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(za)!=="svelte-1fu10yc"&&(za.innerHTML=ip),ii=i(c,`
`),Ea=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ea)!=="svelte-hebi7u"&&(Ea.innerHTML=op),oi=i(c,`
`),ja=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(ja)!=="svelte-le8fb5"&&(ja.innerHTML=rp),ri=i(c,`
`),Ba=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ba)!=="svelte-1krwegc"&&(Ba.innerHTML=pp),pi=i(c,`
`),qa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(qa)!=="svelte-15eyr8x"&&(qa.innerHTML=cp),ci=i(c,`
`),Da=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Da)!=="svelte-q3wk5e"&&(Da.innerHTML=dp),di=i(c,`
`),Ga=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ga)!=="svelte-s3gzi8"&&(Ga.innerHTML=hp),hi=i(c,`
`),Oa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Oa)!=="svelte-mnqbzd"&&(Oa.innerHTML=up),ui=i(c,`
`),Wa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Wa)!=="svelte-11ew6xx"&&(Wa.innerHTML=fp),fi=i(c,`
`),Fa=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Fa)!=="svelte-1qxapuu"&&(Fa.innerHTML=vp),vi=i(c,`
`),Ra=n(c,"SPAN",{id:!0,"data-svelte-h":!0}),s(Ra)!=="svelte-7nhlt1"&&(Ra.innerHTML=xp),c.forEach(r),zp.forEach(r),Ip.forEach(r),Pn=A(o),Va=n(o,"P",{"data-svelte-h":!0}),s(Va)!=="svelte-ihinn"&&(Va.innerHTML=bp),An=A(o),K=n(o,"H1",{id:!0,"data-svelte-h":!0}),s(K)!=="svelte-5hsefb"&&(K.textContent=Cp),Sn=A(o),Ja=n(o,"P",{"data-svelte-h":!0}),s(Ja)!=="svelte-x2yo6c"&&(Ja.innerHTML=mp),Tn=A(o),Y=n(o,"PRE",{class:!0,"data-svelte-h":!0}),s(Y)!=="svelte-wmq5ko"&&(Y.innerHTML=gp),Nn=A(o),$a=n(o,"P",{"data-svelte-h":!0}),s($a)!=="svelte-89vsuq"&&($a.innerHTML=wp),Mn=A(o),Ua=n(o,"P",{"data-svelte-h":!0}),s(Ua)!=="svelte-qj15zg"&&(Ua.innerHTML=yp),Ln=A(o),Q=n(o,"H2",{id:!0,"data-svelte-h":!0}),s(Q)!=="svelte-1bdomfq"&&(Q.textContent=_p),Hn=A(o),Ka=n(o,"P",{"data-svelte-h":!0}),s(Ka)!=="svelte-3twdgh"&&(Ka.innerHTML=kp),this.h()},h(){e(q,"id","minecraft-clone"),e(G,"type","1"),e(O,"id","world-data-pt.1"),e(at,"id","cb1-1"),e(nt,"id","cb1-2"),e(st,"href","#cb1-3"),e(st,"aria-hidden","true"),e(st,"tabindex","-1"),e(lt,"class","kw"),e(Qa,"class","op"),e(D,"id","cb1-3"),e(it,"id","cb1-4"),e(ot,"id","cb1-5"),e(rt,"id","cb1-6"),e(pt,"id","cb1-7"),e(ct,"href","#cb1-8"),e(ct,"aria-hidden","true"),e(ct,"tabindex","-1"),e(dt,"class","op"),e(ht,"class","op"),e(ut,"class","op"),e(ft,"class","kw"),e(vt,"class","op"),e(xt,"class","op"),e(I,"id","cb1-8"),e(bt,"href","#cb1-9"),e(bt,"aria-hidden","true"),e(bt,"tabindex","-1"),e(Ct,"class","op"),e(mt,"class","at"),e(gt,"class","dt"),e(wt,"class","op"),e(yt,"class","op"),e(_t,"class","op"),e(kt,"class","op"),e(Pt,"class","op"),e(At,"class","op"),e(St,"class","kw"),e(Tt,"class","op"),e(Nt,"class","op"),e(m,"id","cb1-9"),e(Mt,"id","cb1-10"),e(w,"class","sourceCode cpp"),e(Ya,"class","sourceCode cpp"),e(W,"class","sourceCode"),e(W,"id","cb1"),e(R,"id","player-controls"),e(V,"id","face-culling"),e(zt,"href","#cb2-1"),e(zt,"aria-hidden","true"),e(zt,"tabindex","-1"),e(Et,"class","dt"),e(jt,"class","op"),e(Bt,"class","op"),e(qt,"class","dt"),e(Dt,"class","op"),e(Gt,"class","dt"),e(Ot,"class","op"),e(Wt,"class","dt"),e(Ft,"class","op"),e(Za,"class","op"),e(y,"id","cb2-1"),e(Rt,"id","cb2-2"),e(Vt,"id","cb2-3"),e(Jt,"id","cb2-4"),e($t,"href","#cb2-5"),e($t,"aria-hidden","true"),e($t,"tabindex","-1"),e(Ut,"class","op"),e(Kt,"class","op"),e(Yt,"class","dv"),e(Qt,"class","op"),e(Xt,"class","op"),e(tn,"class","op"),e(z,"id","cb2-5"),e(Zt,"id","cb2-6"),e(te,"id","cb2-7"),e(ee,"id","cb2-8"),e(ae,"id","cb2-9"),e(ne,"id","cb2-10"),e(se,"id","cb2-11"),e(le,"id","cb2-12"),e(ie,"id","cb2-13"),e(oe,"href","#cb2-14"),e(oe,"aria-hidden","true"),e(oe,"tabindex","-1"),e(re,"class","cf"),e(pe,"class","op"),e(ce,"class","dt"),e(de,"class","op"),e(he,"class","dv"),e(ue,"class","op"),e(fe,"class","op"),e(ve,"class","dv"),e(xe,"class","op"),e(be,"class","op"),e(en,"class","op"),e(_,"id","cb2-14"),e(Ce,"id","cb2-15"),e(me,"id","cb2-16"),e(ge,"href","#cb2-17"),e(ge,"aria-hidden","true"),e(ge,"tabindex","-1"),e(we,"class","cf"),e(ye,"class","op"),e(_e,"class","op"),e(ke,"class","kw"),e(Pe,"class","op"),e(Ae,"class","op"),e(Se,"class","op"),e(Te,"class","kw"),e(Ne,"class","op"),e(Me,"class","op"),e(Le,"class","op"),e(He,"class","dv"),e(Ie,"class","op"),e(an,"class","op"),e(x,"id","cb2-17"),e(ze,"id","cb2-18"),e(Ee,"id","cb2-19"),e(je,"id","cb2-20"),e(Be,"id","cb2-21"),e(qe,"id","cb2-22"),e(De,"id","cb2-23"),e(Ge,"id","cb2-24"),e(d,"class","sourceCode cpp"),e(Xa,"class","sourceCode cpp"),e(J,"class","sourceCode"),e(J,"id","cb2"),e($,"id","block-highlighting"),e(We,"href","#cb3-1"),e(We,"aria-hidden","true"),e(We,"tabindex","-1"),e(Fe,"class","dt"),e(Re,"class","op"),e(Ve,"class","op"),e(Je,"class","op"),e($e,"class","op"),e(sn,"class","op"),e(H,"id","cb3-1"),e(Ue,"id","cb3-2"),e(Ke,"id","cb3-3"),e(Ye,"id","cb3-4"),e(Qe,"href","#cb3-5"),e(Qe,"aria-hidden","true"),e(Qe,"tabindex","-1"),e(Xe,"class","cf"),e(Ze,"class","op"),e(ta,"class","dt"),e(ea,"class","op"),e(aa,"class","dv"),e(na,"class","op"),e(sa,"class","op"),e(la,"class","fl"),e(ia,"class","bu"),e(oa,"class","op"),e(ra,"class","op"),e(pa,"class","fl"),e(ca,"class","bu"),e(da,"class","op"),e(ln,"class","op"),e(b,"id","cb3-5"),e(ha,"id","cb3-6"),e(ua,"id","cb3-7"),e(fa,"id","cb3-8"),e(va,"id","cb3-9"),e(xa,"id","cb3-10"),e(ba,"id","cb3-11"),e(Ca,"id","cb3-12"),e(ma,"id","cb3-13"),e(ga,"id","cb3-14"),e(wa,"id","cb3-15"),e(ya,"id","cb3-16"),e(_a,"id","cb3-17"),e(ka,"href","#cb3-18"),e(ka,"aria-hidden","true"),e(ka,"tabindex","-1"),e(Pa,"class","cf"),e(Aa,"class","op"),e(Sa,"class","op"),e(Ta,"class","kw"),e(Na,"class","op"),e(Ma,"class","op"),e(La,"class","op"),e(Ha,"class","dv"),e(Ia,"class","op"),e(on,"class","op"),e(k,"id","cb3-18"),e(za,"id","cb3-19"),e(Ea,"id","cb3-20"),e(ja,"id","cb3-21"),e(Ba,"id","cb3-22"),e(qa,"id","cb3-23"),e(Da,"id","cb3-24"),e(Ga,"id","cb3-25"),e(Oa,"id","cb3-26"),e(Wa,"id","cb3-27"),e(Fa,"id","cb3-28"),e(Ra,"id","cb3-29"),e(p,"class","sourceCode cpp"),e(nn,"class","sourceCode cpp"),e(U,"class","sourceCode"),e(U,"id","cb3"),e(K,"id","project-organization"),e(Y,"class","make"),e(Q,"id","gallery")},m(o,h){u(o,q,h),u(o,pn,h),u(o,X,h),u(o,cn,h),u(o,Z,h),u(o,dn,h),u(o,tt,h),u(o,hn,h),u(o,G,h),u(o,un,h),u(o,O,h),u(o,fn,h),u(o,et,h),u(o,vn,h),u(o,W,h),t(W,Ya),t(Ya,w),t(w,at),t(w,En),t(w,nt),t(w,jn),t(w,D),t(D,st),t(D,lt),t(D,Bn),t(D,Qa),t(Qa,qn),t(w,Dn),t(w,it),t(w,Gn),t(w,ot),t(w,On),t(w,rt),t(w,Wn),t(w,pt),t(w,Fn),t(w,I),t(I,ct),t(I,Rn),t(I,dt),t(I,Vn),t(I,ht),t(I,Jn),t(I,ut),t(I,ft),t(I,vt),t(I,$n),t(I,xt),t(xt,Un),t(xt,Kn),t(w,Yn),t(w,m),t(m,bt),t(m,Qn),t(m,Ct),t(m,mt),t(m,Xn),t(m,gt),t(m,wt),t(m,Zn),t(m,yt),t(m,ts),t(m,_t),t(m,es),t(m,kt),t(m,as),t(m,Pt),t(m,ns),t(m,At),t(m,St),t(m,Tt),t(m,ss),t(m,Nt),t(Nt,ls),t(Nt,is),t(w,os),t(w,Mt),u(o,xn,h),u(o,F,h),t(F,rs),t(F,Lt),t(Lt,ps),t(Lt,cs),t(Lt,ds),t(F,hs),u(o,bn,h),u(o,R,h),u(o,Cn,h),u(o,Ht,h),u(o,mn,h),u(o,V,h),u(o,gn,h),u(o,It,h),u(o,wn,h),u(o,J,h),t(J,Xa),t(Xa,d),t(d,y),t(y,zt),t(y,Et),t(y,us),t(y,jt),t(y,fs),t(y,Bt),t(y,qt),t(y,vs),t(y,Dt),t(y,xs),t(y,Gt),t(y,bs),t(y,Ot),t(y,Cs),t(y,Wt),t(y,ms),t(y,Ft),t(y,gs),t(y,Za),t(Za,ws),t(d,ys),t(d,Rt),t(d,_s),t(d,Vt),t(d,ks),t(d,Jt),t(d,Ps),t(d,z),t(z,$t),t(z,As),t(z,Ut),t(z,Ss),t(z,Kt),t(z,Yt),t(z,Qt),t(z,Ts),t(z,Xt),t(z,Ns),t(z,tn),t(tn,Ms),t(d,Ls),t(d,Zt),t(d,Hs),t(d,te),t(d,Is),t(d,ee),t(d,zs),t(d,ae),t(d,Es),t(d,ne),t(d,js),t(d,se),t(d,Bs),t(d,le),t(d,qs),t(d,ie),t(d,Ds),t(d,_),t(_,oe),t(_,Gs),t(_,re),t(_,pe),t(_,ce),t(_,Os),t(_,de),t(_,Ws),t(_,he),t(_,ue),t(_,Fs),t(_,fe),t(_,Rs),t(_,ve),t(_,xe),t(_,Vs),t(_,be),t(_,Js),t(_,en),t(en,$s),t(d,Us),t(d,Ce),t(d,Ks),t(d,me),t(d,Ys),t(d,x),t(x,ge),t(x,Qs),t(x,we),t(x,Xs),t(x,ye),t(x,Zs),t(x,_e),t(x,tl),t(x,ke),t(x,el),t(x,Pe),t(x,al),t(x,Ae),t(x,nl),t(x,Se),t(x,sl),t(x,Te),t(x,ll),t(x,Ne),t(x,il),t(x,Me),t(x,ol),t(x,Le),t(x,rl),t(x,He),t(x,Ie),t(x,pl),t(x,an),t(an,cl),t(d,dl),t(d,ze),t(d,hl),t(d,Ee),t(d,ul),t(d,je),t(d,fl),t(d,Be),t(d,vl),t(d,qe),t(d,xl),t(d,De),t(d,bl),t(d,Ge),u(o,yn,h),u(o,$,h),u(o,_n,h),u(o,Oe,h),u(o,kn,h),u(o,U,h),t(U,nn),t(nn,p),t(p,H),t(H,We),t(H,Fe),t(H,Cl),t(H,Re),t(H,ml),t(H,Ve),t(H,gl),t(H,Je),t(H,wl),t(H,$e),t(H,yl),t(H,sn),t(sn,_l),t(p,kl),t(p,Ue),t(p,Pl),t(p,Ke),t(p,Al),t(p,Ye),t(p,Sl),t(p,b),t(b,Qe),t(b,Tl),t(b,Xe),t(b,Ze),t(b,ta),t(b,Nl),t(b,ea),t(b,Ml),t(b,aa),t(b,na),t(b,Ll),t(b,sa),t(b,Hl),t(b,la),t(b,ia),t(b,oa),t(b,Il),t(b,ra),t(b,zl),t(b,pa),t(b,ca),t(b,da),t(b,El),t(b,ln),t(ln,jl),t(p,Bl),t(p,ha),t(p,ql),t(p,ua),t(p,Dl),t(p,fa),t(p,Gl),t(p,va),t(p,Ol),t(p,xa),t(p,Wl),t(p,ba),t(p,Fl),t(p,Ca),t(p,Rl),t(p,ma),t(p,Vl),t(p,ga),t(p,Jl),t(p,wa),t(p,$l),t(p,ya),t(p,Ul),t(p,_a),t(p,Kl),t(p,k),t(k,ka),t(k,Yl),t(k,Pa),t(k,Aa),t(k,Ql),t(k,Sa),t(k,Xl),t(k,Ta),t(k,Zl),t(k,Na),t(k,ti),t(k,Ma),t(k,ei),t(k,La),t(k,ai),t(k,Ha),t(k,Ia),t(k,ni),t(k,on),t(on,si),t(p,li),t(p,za),t(p,ii),t(p,Ea),t(p,oi),t(p,ja),t(p,ri),t(p,Ba),t(p,pi),t(p,qa),t(p,ci),t(p,Da),t(p,di),t(p,Ga),t(p,hi),t(p,Oa),t(p,ui),t(p,Wa),t(p,fi),t(p,Fa),t(p,vi),t(p,Ra),u(o,Pn,h),u(o,Va,h),u(o,An,h),u(o,K,h),u(o,Sn,h),u(o,Ja,h),u(o,Tn,h),u(o,Y,h),u(o,Nn,h),u(o,$a,h),u(o,Mn,h),u(o,Ua,h),u(o,Ln,h),u(o,Q,h),u(o,Hn,h),u(o,Ka,h)},p:Ci,i:Ci,o:Ci,d(o){o&&(r(q),r(pn),r(X),r(cn),r(Z),r(dn),r(tt),r(hn),r(G),r(un),r(O),r(fn),r(et),r(vn),r(W),r(xn),r(F),r(bn),r(R),r(Cn),r(Ht),r(mn),r(V),r(gn),r(It),r(wn),r(J),r(yn),r($),r(_n),r(Oe),r(kn),r(U),r(Pn),r(Va),r(An),r(K),r(Sn),r(Ja),r(Tn),r(Y),r(Nn),r($a),r(Mn),r(Ua),r(Ln),r(Q),r(Hn),r(Ka))}}}class Vp extends Gp{constructor(q){super(),Op(this,q,null,Wp,Dp,{})}}export{Vp as component};
