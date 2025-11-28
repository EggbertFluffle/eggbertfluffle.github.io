import{a as He,n as ne}from"../chunks/scheduler.DDaOzR71.js";import{S as Se,i as Pe,e as o,s as l,c as a,g as s,a as r,h as ie,j as i,f as n}from"../chunks/index.CXL903QX.js";function je(_e){let d,oe=`Linux on a Laptop: My
Experience (pt. 2)`,z,p,ae=`Hello again! If you’re here from Part 1, great! I’m glad you’re
interested in this nonsense. If not, I would encourage you to read up
the post before this as it has a lot of base-level information for my
laptop Linux installation and my reasons for choosing Linux
specifically, as well as choice of distro and the like. Anyways, this is
part 2, where I intend to cover some of the more practical positions and
laptop-specifics. For example, I want to talk about <a href="https://suckless.org/dwm">dwm</a>, my window manager of choice,
and all the tools that I integrate into my workflow. Then I’ll just talk
a bit about why I love key-binds and key-chords and some laptop-specific
obstacles I came across while putting together my system.`,q,f,se=`One program that I should mention before everything else is
fuzzy-pkg. A no-frills, fuzzy-finding, tui frontend for xbps. But when I
tell you installing packages has never been easier, I mean it.
Everything is a simple search away, and sometimes I don’t even consult
the internet if I need a specific program. I can fuzzy find a general
description like “CAD” or “Minecraft,” and I’ll get a bunch of results
related to CAD software or Minecraft launchers. I say this first because
it opens the door to making system configuration so fast and simple.`,A,h,le="DWM and Company",F,c,re=`<a href="https://suckless.org/dwm">dwm</a> is a dynamic tiling window
manager that runs off the X.org window server. It embodies many Suckless
ideals, as it’s one of the team’s most popular pieces of software. I
won’t get into their philosophy here, but I would point you to a small
article made by none other than <a href="https://squi.bid">squibid</a>
about [why suckless software is important][the link and shit]. At its
core, dwm is very simple and just provides key-binds to open a terminal,
switch tags, and launch dmenu, if installed. <a href="https://suckless.org/dmenu">dmenu</a> is an <em>essential</em>,
but honestly, seldom used tool. From what I know, it can do a lot more
than just launch programs, but by default in dwm, pressing ‘mod-p’ opens
up dmenu in order to launch an application the user has installed. It
provides search functionality, although not fuzzy, to easily find the
application you need. Now some people may be turned off by the lack of
fuzzy search, but this is where all Suckless software shines, in my
opinion, patches.`,E,y,de=`Patches are just file diffs provided by the Suckless team and
community in order to add functionality to the base of most Suckless
software. This is the main reason why Suckles software comes so “bare
bones” out of the box, because the software is a starting point for any
users to build their own tool however they like it with patches. I quite
like this approach to software. Patches can become unwieldy if many are
applied, but if you know your way around a diff and keep a git repo of
your changes, it’s pretty easy to keep your configs safe.`,N,g,he=`As for specifics on other programs, I mentioned slstatus which is a
status bar (helper) for dwm. Every module is just a simple c program
that pulls the data from some external file or script and feeds it into
the status bar, specified by the config file. I also took the liberty of
applying the Minecraft game font as my dwm bar font, which is always a
good conversation starter.`,D,w,ue=`<img src="/images/dwm_status_bar.png" alt="dwm status bar with Minecraft font"/> <figcaption aria-hidden="true">dwm status bar with Minecraft
font</figcaption>`,W,v,me=`In my bar, I was also able to design a module that will tell me if I
have Bluetooth enabled or disabled by using another module as a simple
template. I don’t actually use this anymore, but I liked the little task
anyway. Additionally, the provided volume display didn’t work out of the
box, but I was easily able to redesign it to work well with my audio
setup (I think they have a patch for ALSA). Audio isn’t easy on Linux,
and to be honest, I ended up installing drivers for anything I saw
online until it worked. Finally, I found it easy to change the provided
battery module to also indicate charging status. So now, before my
battery percentage, the module also indicates if I’m charging with a
<code>+</code>, full battery <code>o</code>, or diminishing power
<code>-</code>. Finally, getting colors was as simple as setting some
hex values in the config and downloading a quick patch.`,B,u,pe="God’s Grace, Vim (Neovim)",G,b,fe=`I would be amiss to not mention the tools I use, especially <a href="https://neovim.io/">Neovim</a>. Now I want to try as hard as
possible not to be an elitist of <em>anything</em> I decide to use.
Meaning analyzing the pros and cons of everything and taking other
positions into account. Now that being said, Neovim was a large part of
the reason why I got into Linux and went head first into using it on my
laptop. I knew that the command prompt was an important part of any
developer workflow and figured that if I used a terminal text editor, I
would naturally be introduced to that style of work, and I was
right.`,V,x,ce=`But what I also didn’t realize is just the sheer power behind Vim
binds. Even if I use another editor (VS Code, DrRacket, Zed), I need to
install a vim binds extension, because after getting used to h, j, k,
and l, I never want to go back to those stinky arrow keys or reaching
for my mouse again. Especially since I don’t adore the trackpad on this
ThinkPad T16. I can understand if someone doesn’t want to use Vim or
Neovim as text editors, but I would also encourage anyone to at least
try to use Vim binds for about a week and to give themselves the chance
to fall in love with what I find and art form.`,O,k,ye=`In any case, Neovim is a big part of the build and had to be
mentioned. I followed the <a href="https://www.youtube.com/c/theprimeagen">Primeagens</a> build of
Neovim using packer as my package manager for plugins before migrating
my config to be built on Folke’s <a href="https://github.com/folke/lazy.nvim">lazy.nvim</a>. Another program
I find myself using a lot in Ranger is a terminal-based file manager and
browser. It’s pretty simple, and I mostly use it for image previews and
moving multiple files at once that I don’t want to do with some long
<code>mv</code> command. For anyone interested in the plugins I actually
use, here is a little preview and a link to my config on GitHub <a href="https://github.com/EggbertFluffle/nvim">here</a>:`,R,I,ge=`<li><a href="https://github.com/ellisonleao/gruvbox.nvim">gruvbox.nvim</a> - I
need to say no more.</li> <li><a href="https://github.com/nvim-telescope/telescope.nvim">telescope.nvim</a>
- Essential for navigating projects. Allows for fuzzy finding files
names and their contents.</li> <li><a href="https://github.com/nvim-treesitter/nvim-treesitter">nvim-treesitter</a>
- Syntax highlighting made easy</li> <li><a href="https://github.com/altermo/ultimate-autopair.nvim">ultimate-autopair.nvim</a>
- Closes parenthesis, brackets, curly brackets, quotes and it’s
derivatives.</li> <li><a href="https://github.com/numToStr/Comment.nvim">Comment.nvim</a>
- Comment lines or blocks of code regardless of language.</li> <li><a href="https://github.com/lsp-zero.nvim">lsp-zero.nvim</a> - How
does anyone program without LSP and completions?</li> <li><a href="https://github.com/stevearc/oil.nvim">oil.nvim</a> - File
tree/navigator (NETRW is good too, imo)</li>`,U,C,we=`Obviously, on top of this, there are some small quality of life
plugins and a bunch of keybinds, keychords, and options to make my
neovim config my own, but I still hold strong that the binds are the
most important part.`,Y,m,ve=`Linux Tools & System
Configuration`,Z,M,be=`I intended to daily drive Void Linux on my new ThinkPad T16 as I
started classes at college, which means things had to work. I couldn’t
be dropping my battery like a good habit. I especially couldn’t be
having unstable internet connections while I needed to get work done
(<strong><em>FORESHADOWING</em></strong>). This is one of the major
drawbacks to what I am doing and an extremely fair argument against
Linux or Linux ricing in general. When you buy a Windows laptop or a
MacBook, it just works. The default settings are tolerable, the internet
connectivity takes minimal fiddling, and connecting to external displays
is only hard if you don’t get the HDMI right side up on the first try.
That being said, doing anything one might consider trivial on other
operating systems is usually a learning curve on the custom Linux rice,
especially if you’re new (I am new). So as you could imagine, using IWD
as my network manager didn’t play nice with WPA-Enterprise and the
custom script my school needs students to run to get their certificates
installed.`,X,L,xe=`I spent litteral days trying to fix this issue by editing Python
scripts, weird shell scripts, downloading and manually installing
certificates, hailing IT with questions, and fumbling with Ethernet
wires from the campus shop, all with too little knowledge of wireless
certificates and local networking. I tried to ditch IWD and use
NetworkManager with wpa-supplicant, and that didn’t work either (I think
it was just too hard to migrate). This was extremely scary but also fun,
and that’s where I think the line should be drawn. I <em>AM NOT</em>
trying to be an elitist, and I would never recommend a custom Linux rice
to someone with the intent to get real work done. There are too many
interruptions from working order like audio, video, printing,
networking, and software, while all of these and more just work out of
the box on every other operating system. But what I will say is if you
want to learn about Linux, programming, servers, operating systems,
etc., using a custom Linux server is a really good way to do it. I love
tinkering with my computer, and unless you do too, a custom Linux driver
is a terrible option as an operating system daily driver.`,J,T,ke=`I don’t have enough experience with the average Linux desktop
environment as a daily driver, but I imagine that a lot of those give
you necessities like networking, display management, audio controls,
video drivers, and more. I would like to try a DE one day, but I will
stick with Void and DWM for now.`,K,_,Ie=`I just wanna yap about my rice a little more, and I’ll leave some
pictures below. First, my key-binds are immaculate, and I feel like a
computer wizard for everything I do, which is a great ego boost. I use
left alt as my mod key. Here are the binds:`,Q,H,Ce=`<li>Mod+Enter -&gt; opens Alacritty</li> <li>Mod+P -&gt; open dmenu for launching apps</li> <li>Mod+Shift+C -&gt; close focused window</li> <li>Mod+Shift+I -&gt; open my internet browser (Firefox)</li> <li>Mod+Shift+Y -&gt; open YouTube (in Firefox)</li> <li>Mod+Shift+D -&gt; open discord (in Firefox)</li> <li>Mod+Shift+M -&gt; open my school email (in Firefox)</li> <li>Mod+Shift+T -&gt; open Spotify (in Firefox)</li> <li>Mod+Shift+G -&gt; open my GitHub profile (in Firefox)</li> <li>Mod+Shift+W -&gt; open an iwgtk, a frontend for iwd (network
controls).</li> <li>Mod+Shift+S -&gt; Take a screenshot with scrot</li> <li>Mod+Shift+Z -&gt; Launch <a href="https://github.com/tsoding/boomer">boomer</a>, very cool app for
zooming</li> <li>Mod+Shift+B -&gt; opens Bluetooth in Alacrity, a Bluetooth
connection manager.</li> <li>Mod+Shift+P -&gt; opens btop in Alacritty, a process viewer</li>`,$,S,Me=`This isn’t all the key-binds. For example, I had to bind my volume
controls to Mod+Shift plus left square bracket and right square bracket
with a backslash as mute. Then to change the brightness of the
backlight, I use just Mod and the same controls. These are the types of
compromises using a custom Linux rice requires, but luckily, they don’t
get in my way much, if at all.`,ee,P,Le=`But with this territory comes the slight annoyance of not being able
to just give someone else your laptop, and they’re familiar with what
they’re looking at. Using a web browser is about as compliant as it gets
to operating another computer. I don’t have to give my laptop to others
often though, or maybe I haven’t been at school long enough to need
to.`,te,j,Te='<img src="/images/general_void_dwm_desktop.png"/> <img src="/images/coding_pokemon_void_desktop.png"/>';return{c(){d=o("h1"),d.textContent=oe,z=l(),p=o("p"),p.innerHTML=ae,q=l(),f=o("p"),f.textContent=se,A=l(),h=o("h2"),h.textContent=le,F=l(),c=o("p"),c.innerHTML=re,E=l(),y=o("p"),y.textContent=de,N=l(),g=o("p"),g.textContent=he,D=l(),w=o("figure"),w.innerHTML=ue,W=l(),v=o("p"),v.innerHTML=me,B=l(),u=o("h2"),u.textContent=pe,G=l(),b=o("p"),b.innerHTML=fe,V=l(),x=o("p"),x.textContent=ce,O=l(),k=o("p"),k.innerHTML=ye,R=l(),I=o("ul"),I.innerHTML=ge,U=l(),C=o("p"),C.textContent=we,Y=l(),m=o("h2"),m.textContent=ve,Z=l(),M=o("p"),M.innerHTML=be,X=l(),L=o("p"),L.innerHTML=xe,J=l(),T=o("p"),T.textContent=ke,K=l(),_=o("p"),_.textContent=Ie,Q=l(),H=o("ul"),H.innerHTML=Ce,$=l(),S=o("p"),S.textContent=Me,ee=l(),P=o("p"),P.textContent=Le,te=l(),j=o("p"),j.innerHTML=Te,this.h()},l(e){d=a(e,"H1",{id:!0,"data-svelte-h":!0}),s(d)!=="svelte-1dpuam"&&(d.textContent=oe),z=r(e),p=a(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-1es3ynl"&&(p.innerHTML=ae),q=r(e),f=a(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-1gb0807"&&(f.textContent=se),A=r(e),h=a(e,"H2",{id:!0,"data-svelte-h":!0}),s(h)!=="svelte-1hq0wja"&&(h.textContent=le),F=r(e),c=a(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-1gqclfc"&&(c.innerHTML=re),E=r(e),y=a(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-wnjo4i"&&(y.textContent=de),N=r(e),g=a(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-1tlmaxc"&&(g.textContent=he),D=r(e),w=a(e,"FIGURE",{"data-svelte-h":!0}),s(w)!=="svelte-xqhvff"&&(w.innerHTML=ue),W=r(e),v=a(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-b4qm0o"&&(v.innerHTML=me),B=r(e),u=a(e,"H2",{id:!0,"data-svelte-h":!0}),s(u)!=="svelte-1vxdqxp"&&(u.textContent=pe),G=r(e),b=a(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-xvnvoo"&&(b.innerHTML=fe),V=r(e),x=a(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-qz20j4"&&(x.textContent=ce),O=r(e),k=a(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1ricl69"&&(k.innerHTML=ye),R=r(e),I=a(e,"UL",{"data-svelte-h":!0}),s(I)!=="svelte-11j2rax"&&(I.innerHTML=ge),U=r(e),C=a(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-1wijajn"&&(C.textContent=we),Y=r(e),m=a(e,"H2",{id:!0,"data-svelte-h":!0}),s(m)!=="svelte-19np2ba"&&(m.textContent=ve),Z=r(e),M=a(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1h4m5e0"&&(M.innerHTML=be),X=r(e),L=a(e,"P",{"data-svelte-h":!0}),s(L)!=="svelte-1rzcq9i"&&(L.innerHTML=xe),J=r(e),T=a(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-50wrk3"&&(T.textContent=ke),K=r(e),_=a(e,"P",{"data-svelte-h":!0}),s(_)!=="svelte-kqjsx5"&&(_.textContent=Ie),Q=r(e),H=a(e,"UL",{"data-svelte-h":!0}),s(H)!=="svelte-ocjvt"&&(H.innerHTML=Ce),$=r(e),S=a(e,"P",{"data-svelte-h":!0}),s(S)!=="svelte-129xa3v"&&(S.textContent=Me),ee=r(e),P=a(e,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1psdjr6"&&(P.textContent=Le),te=r(e),j=a(e,"P",{"data-svelte-h":!0}),s(j)!=="svelte-15yzl27"&&(j.innerHTML=Te),this.h()},h(){ie(d,"id","linux-on-a-laptop-my-experience-pt.-2"),ie(h,"id","dwm-and-company"),ie(u,"id","gods-grace-vim-neovim"),ie(m,"id","linux-tools-system-configuration")},m(e,t){i(e,d,t),i(e,z,t),i(e,p,t),i(e,q,t),i(e,f,t),i(e,A,t),i(e,h,t),i(e,F,t),i(e,c,t),i(e,E,t),i(e,y,t),i(e,N,t),i(e,g,t),i(e,D,t),i(e,w,t),i(e,W,t),i(e,v,t),i(e,B,t),i(e,u,t),i(e,G,t),i(e,b,t),i(e,V,t),i(e,x,t),i(e,O,t),i(e,k,t),i(e,R,t),i(e,I,t),i(e,U,t),i(e,C,t),i(e,Y,t),i(e,m,t),i(e,Z,t),i(e,M,t),i(e,X,t),i(e,L,t),i(e,J,t),i(e,T,t),i(e,K,t),i(e,_,t),i(e,Q,t),i(e,H,t),i(e,$,t),i(e,S,t),i(e,ee,t),i(e,P,t),i(e,te,t),i(e,j,t)},p:ne,i:ne,o:ne,d(e){e&&(n(d),n(z),n(p),n(q),n(f),n(A),n(h),n(F),n(c),n(E),n(y),n(N),n(g),n(D),n(w),n(W),n(v),n(B),n(u),n(G),n(b),n(V),n(x),n(O),n(k),n(R),n(I),n(U),n(C),n(Y),n(m),n(Z),n(M),n(X),n(L),n(J),n(T),n(K),n(_),n(Q),n(H),n($),n(S),n(ee),n(P),n(te),n(j))}}}class Ae extends Se{constructor(d){super(),Pe(this,d,null,je,He,{})}}export{Ae as component};
