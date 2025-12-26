import{a as F,n as j}from"../chunks/scheduler.DDaOzR71.js";import{S as Y,i as J,e as s,s as r,c as o,g as l,a as c,h as E,j as n,f as a}from"../chunks/index.CXL903QX.js";function U(N){let i,H=`In Praise of the
Client Server Architecture`,v,u,L=`I have recently been thinking about the server/client architecture in
regards to designing software. This came about when I was talking to a
friend about how eveytime I hear about multiplayer game development, its
almost unanimous that its a good idea to build with multiplayer in mind
from the start. Adding multiplayer to games later into development is
said to be hard. This lead me to think about games where the multiplayer
is well done, vs games where the multiplayer experience is often really
poor. Then this lead me to realize I use this style software everywhere
from text editors, games and even audio backends. Its far more prevelant
than I first assumed, but why? First I want to look at what makes a good
multiplayer experience because I think its just the most obvious first
step when talking about server/client architecture in software.`,b,h,P="Multiplayer games",x,m,S=`So I have claimed that Minecraft has well done multiplayer, but why?
Just to avoid confusion, I am only talking about the Java Edition of the
game, since I don’t want to think about Microsoft magic in this context
to make things more confusing. Minecraft has two parts, no matter what,
the server and the client. These two always exist. When starting a
standard server, one person must download the server files for the game,
run the <code>server.jar</code> using <code>java</code> and bam, you’re
server is up. Then everyone else will use a Minecraft client, what we
typically call the “game”, and connect to it using a local, public or
even loopback ip address. But what is this loopback address. Without
going into the weeds, <code>localhost</code> and <code>127.0.0.1</code>
both point <strong>your computer</strong> to <strong>your
computer</strong>. But why is this important? We’ll it turns out,
because Minecraft is designed with the server/client architecture, the
same steps for connecting to a server also happen when playing
singleplayer.`,k,p,z=`When someone pressed play on their world. The Minecraft Client
actually starts a seperate process to be the Minecraft server for the
client to connect to. Using the computer’s loopback address to find the
newly created server. Now you might think “gee wiz, this seems like a
lot of work just to play a singleplayer game”. I would like to offer
this as a rebuttal. If you have ever hosted a world via LAN, you know
how easy it is. Open a signgleplayer world, then pause the game, and
select <code>Open to LAN</code>. You don’t have to stop the game, you
don’t need to fiddle with menus, and it’s most importantly fast. That’s
because the game was designed with multilayer in mind, and since playing
in singleplayer already starts a local server, all the game needs to do
is allow local ip addresses to connect, not just loopback addresses. You
can take this a step further with mods like <a href="https://e4mc.link/">e4mc</a> or <a href="https://essential.gg/en">essentials</a> that tunnel your local ip
through a public server allowing you to make you’re world publically
joinable via a special link without needing a domain name or to
configure port forwarding. This is amazing because all of these
operations, and the increasing levels of publicity are very quick tasks
since they are simple modifications on the games already existing
behaviour.`,T,g,A=`On top of this, the general minecraft multiplayer experience is nice
considering lag and poor performance is always the fault of the server,
and never the fault of clients. The Binding of Isaac very recently added
an online multiplayer mode, very very late into development at this
point. The problem being, though I don’t know the spesifics, the game
was not designed with multiplayer since the start, and as a result, the
experience is very poor. Online games are not bottlenecked by the
serverbut instead bottlenecked by the worst connection of the all of the
clients connected to the server. This makes no sense at all, leaving
players with good connection having the quality of gameplay that only
the player with the worst connection. The entire game becomes jittery
and unplayably slow, often taking ages to finish. Although I don’t know
the spesifics of Super Smash Brothers Ultimate’s multiplayer, they
certainly suffer the same effects, where performace tanks for both
clients if one has poor connectivity.`,C,d,O="More Important Software",I,f,W=`Now moving onto other types of software and why the server client
architecture is so powerful. Let’s take a theoretical, highly
customizable text editor / IDE, which we will call “Tegg” (Text + Egg).
This editor has a lot of configuration with extensions, complex config
files, and several processes it needs to start. Let’s say for example
that we start to see a significant decline in the startup time of Tegg,
because of the intensive init routine. One great way to solve this is
lazy load features, leaving parts of the previously described init
process for until needed, instead of all at once in the beggining.
That’s a great solution, but let’s also imagine that this doesn’t
entirely solve the issue, since there are too many tasks that cannot be
lazily executed. Everytime we open the editor to do something, it takes
time, or if we want two instances of the editor, we need to expend
double the resources. This can be solved with the server/client
architecture, while making the software more flexible and
lightweight.`,_,w,q=`For this, I will use Emacs as an example, since in describing “Tegg”,
I was secretly describing Emacs all along. When installing Emacs two
binaries become available to the user: <code>emacs</code> and
<code>emacsclient</code>. Huh, that’s strange. Surely the existance of
an <code>emacsclient</code> implies there exists an
<code>emacsserver</code>, no? Yes, it does! Emacs cleverly tucks the
emacs server into a flag of the <code>emacs</code> binary, which can be
started using <code>emacs --bg-daemon</code>. This allows for the more
normal way of starting the program as just <code>emacs</code>, which I’m
assuming starts a local emacs server anyways. In doing so, Emacs will
launch itself as a background daemon acting as a server, doing all the
initial loading of plugins, starting processes and executing the user’s
config, until finally waiting for an <code>emacsclient</code> to connect
to it. The <code>emacsclient</code> is indistinguashable from the
standard binary itself, sans the incredibly swift startuptime. This also
opens the door to multiple clients being open at once with nearly no
performance cost, clients maintaining state between opening and closing
application windows, and far more freedom for use of emacs when, for
example, connecting to a running Emacs server remotely. This starting of
the Emacs server can be tucked nicely with other necessary system
startup like window managers, audio backends and system critical
background processes.`,M,y,B=`This was just a simple look at the client/server architecture model,
which I have really come to appreciate recently. There are for more
interesting applications that I haven’t mentioned, such as headless
instances of popular programs like Firefox and MPV, or language server
protocols and debug adapters in the text editing space.`;return{c(){i=s("h1"),i.textContent=H,v=r(),u=s("p"),u.textContent=L,b=r(),h=s("h2"),h.textContent=P,x=r(),m=s("p"),m.innerHTML=S,k=r(),p=s("p"),p.innerHTML=z,T=r(),g=s("p"),g.textContent=A,C=r(),d=s("h2"),d.textContent=O,I=r(),f=s("p"),f.textContent=W,_=r(),w=s("p"),w.innerHTML=q,M=r(),y=s("p"),y.textContent=B,this.h()},l(e){i=o(e,"H1",{id:!0,"data-svelte-h":!0}),l(i)!=="svelte-125wy9u"&&(i.textContent=H),v=c(e),u=o(e,"P",{"data-svelte-h":!0}),l(u)!=="svelte-1csi2x4"&&(u.textContent=L),b=c(e),h=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(h)!=="svelte-g6xo3j"&&(h.textContent=P),x=c(e),m=o(e,"P",{"data-svelte-h":!0}),l(m)!=="svelte-18v643r"&&(m.innerHTML=S),k=c(e),p=o(e,"P",{"data-svelte-h":!0}),l(p)!=="svelte-f2brg3"&&(p.innerHTML=z),T=c(e),g=o(e,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1joe548"&&(g.textContent=A),C=c(e),d=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(d)!=="svelte-ifov1u"&&(d.textContent=O),I=c(e),f=o(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-g0zcgk"&&(f.textContent=W),_=c(e),w=o(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-ndfwiq"&&(w.innerHTML=q),M=c(e),y=o(e,"P",{"data-svelte-h":!0}),l(y)!=="svelte-1xh5bbm"&&(y.textContent=B),this.h()},h(){E(i,"id","in-praise-of-the-client-server-architecture"),E(h,"id","multiplayer-games"),E(d,"id","more-important-software")},m(e,t){n(e,i,t),n(e,v,t),n(e,u,t),n(e,b,t),n(e,h,t),n(e,x,t),n(e,m,t),n(e,k,t),n(e,p,t),n(e,T,t),n(e,g,t),n(e,C,t),n(e,d,t),n(e,I,t),n(e,f,t),n(e,_,t),n(e,w,t),n(e,M,t),n(e,y,t)},p:j,i:j,o:j,d(e){e&&(a(i),a(v),a(u),a(b),a(h),a(x),a(m),a(k),a(p),a(T),a(g),a(C),a(d),a(I),a(f),a(_),a(w),a(M),a(y))}}}class G extends Y{constructor(i){super(),J(this,i,null,U,F,{})}}export{G as component};
