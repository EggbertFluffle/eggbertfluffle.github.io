import{a as Ye,n as be}from"../chunks/scheduler.D4tQEfxT.js";import{S as Ge,i as Je,e as o,s as r,c as n,g as l,a as s,b as h,d as a,f as i}from"../chunks/index.CjaTeyWn.js";function Ze(Oe){let c,ve="Wolfenstein Terminal Raycaster",N,q,W,S,X,z,O,R,Y,B,G,U,J,F,Z,p,we="TUI 3D Graphics",K,m,Te="Three-dimensional graphics are the best thing since 2D graphics, but also many times harder. I've wanted to break into 3D graphics for a while now, namely because of its connection to first-person games like Minecraft or the Call of Duty franchise. But after some surface-level digging, I've found there is a lot more to the third dimension than I first thought.",Q,d,Me="Put simply, in 2D graphics, there are pixels in a grid, and that's it. From there, all you need to do is manipulate those very pixels to look like whatever your heart desires. And at its core, 3D graphics is no different than 2D graphics. It's still a 2D grid of pixels that you manipulate to look a certain way. The tricky part is that you need to give the illusion of a 3D space with only 2D tools.",V,u,Ie='I finally decided to tackle a 3D &quot;engine&quot; of my own as a way to become more familiar with Typescript (more on that later) and to also learn a bit more about the Bun all-in-one silver hammer of JavaScript development that has recently come out. I chose Typescript because I&#39;m already familiar with JavaScript and wanted to learn more about the unfamiliar type of safety it offers, but more importantly, I wanted to learn about 3D graphics, not an entirely new language. I knew far ahead of time that what I would be building was going to end up being very simple. With all that out of the way, I present to you, the name, <a href="https://github.com/EggbertFluffle/TUI-3D-Renderer">EggTUI-3D-Renderer</a> (EggTUI for short). Not my best naming work.',$,f,ke='At its core, EggTUI is just an extremely bare-bones terminal-based 2D graphics "framework". That said it also can (drum roll) display the first 2 platonic solids... spinning! This came later after I realized that with a terrible line drawing algorithm, I could draw some terrible 3D shapes. So what exactly can EggTUI do? It can display lines, triangles, quads, tetrahedrons, cubes, rectangular prisms, and octahedrons, all with some scaling functionality. It does this with a simple pixel buffer, update loop, a some matrix math, provided very kindly by Math.js. Here is where I want to document the progression of EggTUI and its "features".',ee,g,Ce="First up is the pixel buffer, which holds all the 2D pixel-coordinated data. The actual buffer is a 2-dimensional array of strings, meaning that it accesses the pixels in the buffer row-wise, and then column-wise, so ordered pairs are (y, x). This is easily fixed by only allowing the pixel buffer class to interact with the buffer itself, which reverses the x and y for all other classes in the program. Additionally, the pixel buffer class can ensure there are no out-of-bounds exceptions, uses <code>process.stdout.rows</code> and <code>process.stdout.columns</code> to get the native dimensions of the terminal, and translates pixel coordinates to make the center of the screen the origin on all axes. Other than that, it can clear the buffer and convert it into a one-dimensional array of strings that represent each row for easier printing.",te,x,De="Next, the graphics manager is the heart of the system and acts as the arbiter between the draw loop and the pixel buffer, making a lot of necessary shortcuts and optimizations along the way. It lets the user set the fill and stroke &quot;colors&quot; as well as draw lines. Drawing lines, and doing it well, is the first major hurdle I and many other people have to tackle. It takes an understanding of math and what makes programs performant, to write a good line algorithm. I wrestled with Bresenham&#39;s line-drawing algorithm for a while, but couldn&#39;t understand it no matter how hard I tried, so I resorted to writing my own. Bresenham&#39;s is so fast and the industry standard because It relies heavily on addition and subtraction, with less multiplication or division, which are both more costly functions. Despite that, I used what I knew of good ol&#39; <code>y = mx + b</code> to write what&#39;s below.",ae,y,Pe=`<code class="language-typescript">line(p1: math.Matrix, p2: math.Matrix): void {
    let deltaY: number = p2.get([1]) - p1.get([1]); // y2 - y1
    let deltaX: number = p2.get([0]) - p1.get([0]); // x2 - x1
    let m: number = dy / dx;
    let b = -m * p1.get([0]) + p1.get([1]); // Solve for slope intercept

    for(let x = Math.min(p1.get([0]), p2.get([0])); x &lt; Math.max(p1.get([0]), p2.get([0])); x += 1) {
        let coords = matrix([x, m * x + b]); // Solve for y based on the given x
        coords = coords.map(Math.round); // Floor to get valid indicies
        this.pixelBuffer.set(p, this.stroke); // Set the coordinates pixel
    }
}
</code>`,ie,b,He="This worked for most lines, but as soon as the line's slope got greater than 1, issues arose. The loop finds the y values for a line based on every x value, but x only increases by 1. This can leave large gaps in the line's visual representation. For example, if a line has the solutions (0, 0) and (1, 5), there will be a large gap in the line between y = 1 and y = 4, and this would continue, leaving a large dotted streak.",oe,v,Le=`<code class="language-typescript">Current System       New System 
    ....#..           7....#..
    .......           6...#...
    ...#...           5...#...
    .......           4..#....
    ..#....           3..#....
    .......           2.#.....
    .#.....           1.#.....
   X1234567
</code>`,ne,w,je="By rearranging <code>y = mx + b</code> to be <code>x = (y - b) / m</code> it&#39;s possible to get the x value for a line by inputting the y value. So by using this, and handling an exception for vertical lines with a slope of <code>undefined</code>,  the line drawing algorithm is done and looks like this.",re,T,_e=`<code class="language-typescript">line(p1: math.Matrix, p2: math.Matrix): void }
    let deltaY: number = p2.get([1]) - p1.get([1]); // y2 - y1
    let deltaX: number = p2.get([0]) - p1.get([0]); // x2 - x1
    let m: number = dy / dx;
    let b = -m * p1.get([0]) + p1.get([1]); // Solve for slope intercept
    let coords: math. Matrix;
    
    if(dx = 0) }
        for(let y = Math.min(p1.get([1]), p2.get([1])); y &lt; Math.max(p1.get([1]), p2.get([1])); y+= 1) }
            coords = matrix([p1.get[0]), y]);
            coords = coords.map(Math.round);
            this.pixelBuffer.set(coords, this.stroke);
        }
    } else if(m &lt;= 1 &amp;&amp; m &gt;= -1) }
        for(let x = Math.min(p1.get([0]), p2.get([0])); x &lt; Math.max(p1.get([0]), p2.get([0])); x += 1) }
            coords = matrix([x, m * x + b]);
            coords = coords.map(Math.round);
            this.pixelBuffer.set(coords, this.stroke);
        }
    } else }
        for(let y = Math.min(p1.get([1]), p2.get([1])); y &lt; Math.max(p1.get([1]), p2.get([1])); y += 1) }
            coords = matrix([(y - b) / m, y]);
            coords = coords.map(Math.round);
            this.pixelBuffer.set(coords, this.stroke);
        }
    }
}
</code>`,se,M,Ee="It&#39;s not the prettiest, and I still want to get around to understanding Bresenham&#39;s, but it&#39;s a start and fine for a very rudimentary project like this. Other than this the graphics manager is now only responsible for connecting the vertices of shapes like the platonic solids and triangles. To explain the 3D capabilities, I&#39;m just going to use the cube code, but the same process applies to the tetrahedron and the octahedron. All of the 3D points, or vectors, are stored as matrices with 3 rows and 1 column. meaning to get the x of some point <code>a</code>, the getter looks like this: <code>a.get([0])</code>.  The reason I store the 3D points as matrices is because of the math capabilities built into Math.js, so for simpler points, and especially ones that don&#39;t need any matrix math, I use a simple array with 3 elements. so x would be <code>a[0]</code>. With that in mind, a new class, the shape factory, is responsible for defining the vertices of the cube based on some scaling parameters and a coordinate for its center. It returns an array of matrices representing the normal vertices of the cube relative to the center. Here is what the shape factory rectPrism (or cube) function looks like in the code.",le,I,Ae=`<code class="language-typescript">rectPrism(org: Array&lt;number&gt;, scl: Array&lt;number&gt;): Array&lt;math.Matrix&gt; }
        size = size.map(s =&gt; s / 2);
        return [
             matrix([org[0] - scl[0], org[1] - scl[1], org[2] + scl[2]]),
            matrix([org[0] + scl[0], org[1] - scl[1], org[2] + scl[2]]),
            matrix([org[0] + scl[0], org[1] + scl[1], org[2] + scl[2]]),
            matrix([org[0] - scl[0], org[1] + scl[1], org[2] + scl[2]]),
            matrix([org[0] - scl[0], org[1] - scl[1], org[2] - scl[2]]),
            matrix([org[0] + scl[0], org[1] - scl[1], org[2] - scl[2]]),
            matrix([org[0] + scl[0], org[1] + scl[1], org[2] - scl[2]]),
            matrix([org[0] - scl[0], org[1] + scl[1], org[2] - scl[2]])
        ];
    }
</code>`,he,k,Se="The user defines the center of the cube in space with the array org, for origin. Then the next array is the scale of each axis, x, y, and z. The user enters the scale as the width of the entire cube on that axis but the program divides these values by two because it creates all of the vertices relative to the origin. It's hard to visualize, but a cube has 8 vertices, and they are all found by subtracting or adding from the center, but the order needs to be correct. The order starts with the back face on the top left vertex and wraps around the back face clockwise, before starting back at the front face and also wrapping around clockwise. This can also be seen in the code with the first point in the list being the origin - scale on the x, putting it left, the origin + the scale for y, putting it on top, and the origin plus the scale for z, putting it on the back so in total, back top left. This continues for all the other vertices and is returned. The list of vertices is stored in a variable called box in the main, but now comes the most complex part, rotation matrices, and projection matrices. Here is the code in main.ts, it's kind of a lot, but I encourage you to just take it piece by piece and read the comments.",ce,C,ze=`<code class="language-typescript">// Create the program graphics manager and shape factory
const graphicsManager: GraphicsManager = new GraphicsManager();
const shapeFactory: ShapeFactory = new ShapeFactory();

// Use the shape factory to get a cube at (0, 0, 0) with a height width, and depth of 20 units.
let box: Array&lt;math.Matrix&gt; = shapeFactory.rectPrism([0, 0, 0], [20, 20, 20]);

// The orthographic projection matrix and a fix for the stretched resolution.
const orthoProjection: math.Matrix = matrix([
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);

const frameRate: number = 8;

const init = () =&gt; }
    loop();
}

const loop = () =&gt; }
    // clears the previously drawn code.
    console.clear();
    graphicsManager.background();

    // Applying the projection into a new, properly projected list of points.
    let projectedPoints: Array&lt;math.Matrix&gt; = box.map(p =&gt; }
        p = multiply(orthoProjection, p);
        return p;
    });

    // Connect all of the vertices with lines
    graphicsManager.rectPrism(projectedPoints);

    // Print the buffer results to the terminal
    graphicsManager.render();
    // Loop the function based on the framerate in frames / second
    setTimeout(loop, 1000 / frameRate);
}

// Start the loop
init();
</code>`,pe,D,Re='Although the comments are pretty self-explanatory, some parts still may not make sense, namely the matrix multiplication. If you don&#39;t understand the way matrix multiplication works, I think it is better to see a visual representation of it. First, to understand a matrix, it is simply a 2D array of numbers. The reason I don&#39;t just use two-dimensional arrays native to JavaScript is that matrices also come with some unique properties and operations. All of the 3D points in the code need to interact with some sort of matrix, and therefore the points themselves need to be matrices. Finally, any matrix that interacts with our points, such as the orthographic projection matrix and rotation matrices, must have 3 columns. This is due to a constraint of matrix multiplication: for A * B,  the columns of A must match the rows of B. Now I&#39;ll direct you to a good <a href="http://matrixmultiplication.xyz/">visualizer for matrix multiplication</a>, just to see what is happening under the hood. now consider this scenario.',me,P,Be=`<code class="language-typescript">Ortho Matrix 2x3   3D Point 3x1        2D Point 2x1
 | 1 , 0 , 0 |            | 4 |           | 4 |
 | 0 , 1 , 0 |      x     | 6 |     =     | 6 |
                          | 2 |           
</code>`,de,H,Ue="The orthographic projection matrix is what is responsible for converting a 3D point into a 2D. It does this by only taking the x and y values of the 3x1 matrix it is multiplied by, zeroing out the z. This 2D point is then sent to the graphics manager to have lines connected to it and BOOM, 3D graphics! But at this point it doesn&#39;t look very 3D, it is very very 2D. There are two ways to solve this: adding rotations and using a perspective projection matrix. Since I added a draw loop I opted for rotations, which are also calculated with matrix math. Each axis has its rotation matrix but unlike the orthographic projection matrix, rotation matrices depend on a variable, the angle of rotation in radians <code>a</code>. This means I&#39;m able to change the angle, get a new rotation matrix, and rotate the cube in an animation over the draw loop. Here are the rotation matrices for each axis.",ue,L,Fe=`<code class="language-typescript">      Rotation X                  Rotation Y                  Rotation Z
| 1, 0,    , 0       |      | cos(a),  0, sin(a) |      | cos(a), -sin(a), 0 |
| 0, cos(a), -sin(a) |      | 0,       1, 0      |      | sin(a), cos(a),  0 |
| 0, sin(a), cos(a)  |      | -sin(a), 0, cos(a) |      | 0,      0,       1 |
</code>`,fe,j,qe="We just have to define these in code and increment the angle by a small amount before calculating the matrices. Finally to use the rotation matrices we just have to rotate the 3D points before they are projected orthographically and we have a SPINNING CUBE.",ge,_,Ne=`<code class="language-typescript">angle += 0.05;

let rotationX = matrix([
	[1, 0,               0               ],
	[0, Math.cos(angle), -Math.sin(angle)],
	[0, Math.sin(angle), Math.cos(angle) ]
]);

let rotationY = matrix([
	[ Math.cos(angle), 0, Math.sin(angle)],
	[ 0,               1, 0              ],
	[-Math.sin(angle), 0, Math.cos(angle)]
]);

let rotationZ = matrix([
	[Math.cos(angle), -Math.sin(angle), 0],
	[Math.sin(angle),  Math.cos(angle), 0],
	[0,                0,               1]
]);

let projectedPoints: Array&lt;math.Matrix&gt; = box.map(p =&gt; }
	p = multiply(rotationY, p);
	p = multiply(rotationX, p);
	p = multiply(rotationZ, p);
	p = multiply(orthoProjection, p);
	return p;
});
</code>`,xe,E,We="In this example, I apply all the rotations at the same time, but it's perfectly possible to assign different angles to different axes and not apply some rotations at all. This is fine for my purposes and the process is identical for tetrahedrons and octahedrons.",ye,A,Xe='This entire mini-project was just a way to dip my toes into 3D rendering and get a feel for it. I don&#39;t know if it&#39;s a problem with JavaScript, Bun, or the Chromebook I&#39;m doing this on, but there&#39;s some annoying flickering going on and assume one of those is the problem. It could also just be my approach but I&#39;m lazy. Anyway, that&#39;s all for EggTUI and its limited 3D features. If you have any questions about the code, feel free to e-mail me at <a href="mailto:hdiambrosio@gmail.com">hdiambrosio@gmail.com</a> but you&#39;re probably better off googling it.';return{c(){c=o("title"),c.textContent=ve,N=r(),q=o("meta"),W=r(),S=o("meta"),X=r(),z=o("meta"),O=r(),R=o("meta"),Y=r(),B=o("meta"),G=r(),U=o("meta"),J=r(),F=o("meta"),Z=r(),p=o("h1"),p.textContent=we,K=r(),m=o("p"),m.textContent=Te,Q=r(),d=o("p"),d.textContent=Me,V=r(),u=o("p"),u.innerHTML=Ie,$=r(),f=o("p"),f.textContent=ke,ee=r(),g=o("p"),g.innerHTML=Ce,te=r(),x=o("p"),x.innerHTML=De,ae=r(),y=o("pre"),y.innerHTML=Pe,ie=r(),b=o("p"),b.textContent=He,oe=r(),v=o("pre"),v.innerHTML=Le,ne=r(),w=o("p"),w.innerHTML=je,re=r(),T=o("pre"),T.innerHTML=_e,se=r(),M=o("p"),M.innerHTML=Ee,le=r(),I=o("pre"),I.innerHTML=Ae,he=r(),k=o("p"),k.textContent=Se,ce=r(),C=o("pre"),C.innerHTML=ze,pe=r(),D=o("p"),D.innerHTML=Re,me=r(),P=o("pre"),P.innerHTML=Be,de=r(),H=o("p"),H.innerHTML=Ue,ue=r(),L=o("pre"),L.innerHTML=Fe,fe=r(),j=o("p"),j.textContent=qe,ge=r(),_=o("pre"),_.innerHTML=Ne,xe=r(),E=o("p"),E.textContent=We,ye=r(),A=o("p"),A.innerHTML=Xe,this.h()},l(e){c=n(e,"TITLE",{"data-svelte-h":!0}),l(c)!=="svelte-zl7r3g"&&(c.textContent=ve),N=s(e),q=n(e,"META",{charset:!0}),W=s(e),S=n(e,"META",{name:!0,content:!0}),X=s(e),z=n(e,"META",{name:!0,content:!0}),O=s(e),R=n(e,"META",{name:!0,content:!0}),Y=s(e),B=n(e,"META",{name:!0,content:!0}),G=s(e),U=n(e,"META",{name:!0,content:!0}),J=s(e),F=n(e,"META",{name:!0,content:!0}),Z=s(e),p=n(e,"H1",{id:!0,"data-svelte-h":!0}),l(p)!=="svelte-bzt92e"&&(p.textContent=we),K=s(e),m=n(e,"P",{"data-svelte-h":!0}),l(m)!=="svelte-vkl1a4"&&(m.textContent=Te),Q=s(e),d=n(e,"P",{"data-svelte-h":!0}),l(d)!=="svelte-1ifpgbh"&&(d.textContent=Me),V=s(e),u=n(e,"P",{"data-svelte-h":!0}),l(u)!=="svelte-1r8lg9z"&&(u.innerHTML=Ie),$=s(e),f=n(e,"P",{"data-svelte-h":!0}),l(f)!=="svelte-3598v8"&&(f.textContent=ke),ee=s(e),g=n(e,"P",{"data-svelte-h":!0}),l(g)!=="svelte-1o87gc0"&&(g.innerHTML=Ce),te=s(e),x=n(e,"P",{"data-svelte-h":!0}),l(x)!=="svelte-1q46ii3"&&(x.innerHTML=De),ae=s(e),y=n(e,"PRE",{"data-svelte-h":!0}),l(y)!=="svelte-1fsj0qe"&&(y.innerHTML=Pe),ie=s(e),b=n(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1s4la3p"&&(b.textContent=He),oe=s(e),v=n(e,"PRE",{"data-svelte-h":!0}),l(v)!=="svelte-1ec5fxq"&&(v.innerHTML=Le),ne=s(e),w=n(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-145hn24"&&(w.innerHTML=je),re=s(e),T=n(e,"PRE",{"data-svelte-h":!0}),l(T)!=="svelte-rod8y6"&&(T.innerHTML=_e),se=s(e),M=n(e,"P",{"data-svelte-h":!0}),l(M)!=="svelte-a4d4jp"&&(M.innerHTML=Ee),le=s(e),I=n(e,"PRE",{"data-svelte-h":!0}),l(I)!=="svelte-wuesop"&&(I.innerHTML=Ae),he=s(e),k=n(e,"P",{"data-svelte-h":!0}),l(k)!=="svelte-779x4"&&(k.textContent=Se),ce=s(e),C=n(e,"PRE",{"data-svelte-h":!0}),l(C)!=="svelte-iu9w4c"&&(C.innerHTML=ze),pe=s(e),D=n(e,"P",{"data-svelte-h":!0}),l(D)!=="svelte-aikwlt"&&(D.innerHTML=Re),me=s(e),P=n(e,"PRE",{"data-svelte-h":!0}),l(P)!=="svelte-1tgx1d5"&&(P.innerHTML=Be),de=s(e),H=n(e,"P",{"data-svelte-h":!0}),l(H)!=="svelte-1cc1ji8"&&(H.innerHTML=Ue),ue=s(e),L=n(e,"PRE",{"data-svelte-h":!0}),l(L)!=="svelte-1hojshf"&&(L.innerHTML=Fe),fe=s(e),j=n(e,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1am68z0"&&(j.textContent=qe),ge=s(e),_=n(e,"PRE",{"data-svelte-h":!0}),l(_)!=="svelte-1m82906"&&(_.innerHTML=Ne),xe=s(e),E=n(e,"P",{"data-svelte-h":!0}),l(E)!=="svelte-80mvrk"&&(E.textContent=We),ye=s(e),A=n(e,"P",{"data-svelte-h":!0}),l(A)!=="svelte-d1ipz"&&(A.innerHTML=Xe),this.h()},h(){h(q,"charset","UTF-8"),h(S,"name","viewport"),h(S,"content","width=device-width, initial-scale=1.0"),h(z,"name","title"),h(z,"content","Wolfenstein Terminal Raycaster"),h(R,"name","description"),h(R,"content","Explore the creation of a Wolfenstein 3D-style renderer in a terminal-based Text User Interface (TUI) using ncurses and C++. Learn about 2D raycasting math, performance techniques, and rendering principles."),h(B,"name","keywords"),h(B,"content","Wolfenstein 3D, terminal raycaster, 2D raycasting, ncurses, TUI rendering, C++ graphics, game development, raycasting algorithm, retro games, terminal-based applications"),h(U,"name","author"),h(U,"content","Harrison DiAmbrosio"),h(F,"name","robots"),h(F,"content","index, follow"),h(p,"id","tui-3d-graphics")},m(e,t){a(e,c,t),a(e,N,t),a(e,q,t),a(e,W,t),a(e,S,t),a(e,X,t),a(e,z,t),a(e,O,t),a(e,R,t),a(e,Y,t),a(e,B,t),a(e,G,t),a(e,U,t),a(e,J,t),a(e,F,t),a(e,Z,t),a(e,p,t),a(e,K,t),a(e,m,t),a(e,Q,t),a(e,d,t),a(e,V,t),a(e,u,t),a(e,$,t),a(e,f,t),a(e,ee,t),a(e,g,t),a(e,te,t),a(e,x,t),a(e,ae,t),a(e,y,t),a(e,ie,t),a(e,b,t),a(e,oe,t),a(e,v,t),a(e,ne,t),a(e,w,t),a(e,re,t),a(e,T,t),a(e,se,t),a(e,M,t),a(e,le,t),a(e,I,t),a(e,he,t),a(e,k,t),a(e,ce,t),a(e,C,t),a(e,pe,t),a(e,D,t),a(e,me,t),a(e,P,t),a(e,de,t),a(e,H,t),a(e,ue,t),a(e,L,t),a(e,fe,t),a(e,j,t),a(e,ge,t),a(e,_,t),a(e,xe,t),a(e,E,t),a(e,ye,t),a(e,A,t)},p:be,i:be,o:be,d(e){e&&(i(c),i(N),i(q),i(W),i(S),i(X),i(z),i(O),i(R),i(Y),i(B),i(G),i(U),i(J),i(F),i(Z),i(p),i(K),i(m),i(Q),i(d),i(V),i(u),i($),i(f),i(ee),i(g),i(te),i(x),i(ae),i(y),i(ie),i(b),i(oe),i(v),i(ne),i(w),i(re),i(T),i(se),i(M),i(le),i(I),i(he),i(k),i(ce),i(C),i(pe),i(D),i(me),i(P),i(de),i(H),i(ue),i(L),i(fe),i(j),i(ge),i(_),i(xe),i(E),i(ye),i(A))}}}class Ve extends Ge{constructor(c){super(),Je(this,c,null,Ze,Ye,{})}}export{Ve as component};
