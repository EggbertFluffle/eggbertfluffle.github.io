import{a as re,c as oe,u as ce,g as ie,d as le,e as ue,o as ge}from"../chunks/scheduler.D4tQEfxT.js";import{S as de,i as be,o as Ee,s as $,e as B,p as me,a as D,c as U,k as _e,g as fe,f as v,b as P,q as o,r as pe,d as F,m as Z,t as x,h as z,u as Ae}from"../chunks/index.NO1YNLBk.js";import{T as Se,c as Ne}from"../chunks/ThemePicker.Dhg5r6KO.js";import{H as y,c as Te}from"../chunks/cpp.ailBGQc5.js";const R="[A-Za-z$_][0-9A-Za-z$_]*",G=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],K=["true","false","null","undefined","NaN","Infinity"],H=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],q=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Y=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],W=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],J=[].concat(Y,H,q);function ye(n){const t=n.regex,g=(b,{after:m})=>{const p="</"+b[0].slice(1);return b.input.indexOf(p,m)!==-1},e=R,l={begin:"<>",end:"</>"},E=/<[A-Za-z0-9\\._:-]+\s*\/>/,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(b,m)=>{const p=b[0].length+b.index,T=b.input[p];if(T==="<"||T===","){m.ignoreMatch();return}T===">"&&(g(b,{after:p})||m.ignoreMatch());let I;const L=b.input.substring(p);if(I=L.match(/^\s*=/)){m.ignoreMatch();return}if((I=L.match(/^\s+extends\s+/))&&I.index===0){m.ignoreMatch();return}}},s={$pattern:R,keyword:G,literal:K,built_in:J,"variable.language":W},u="[0-9](_?[0-9])*",i=`\\.(${u})`,a="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",r={className:"number",variants:[{begin:`(\\b(${a})((${i})|\\.)?|(${i}))[eE][+-]?(${u})\\b`},{begin:`\\b(${a})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},A={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},S={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"css"}},_={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,d],subLanguage:"graphql"}},N={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,d]},h={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:e+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},O=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,A,S,_,N,{match:/\$\d+/},r];d.contains=O.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(O)});const w=[].concat(h,d.contains),C=w.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(w)}]),f={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:C},X={variants:[{match:[/class/,/\s+/,e,/\s+/,/extends/,/\s+/,t.concat(e,"(",t.concat(/\./,e),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,e],scope:{1:"keyword",3:"title.class"}}]},M={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...H,...q]}},Q={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,e,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[f],illegal:/%/},j={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ee(b){return t.concat("(?!",b.join("|"),")")}const ne={match:t.concat(/\b/,ee([...Y,"super","import"]),e,t.lookahead(/\(/)),className:"title.function",relevance:0},ae={begin:t.concat(/\./,t.lookahead(t.concat(e,/(?![0-9A-Za-z$_(])/))),end:e,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},te={match:[/get|set/,/\s+/,e,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},f]},k="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",se={match:[/const|var|let/,/\s+/,e,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(k)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[f]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:M},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),Q,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,A,S,_,N,h,{match:/\$\d+/},r,M,{className:"attr",begin:e+t.lookahead(":"),relevance:0},se,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[h,n.REGEXP_MODE,{className:"function",begin:k,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:l.begin,end:l.end},{match:E},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[f,n.inherit(n.TITLE_MODE,{begin:e,className:"title.function"})]},{match:/\.\.\./,relevance:0},ae,{match:"\\$"+e,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[f]},ne,j,X,te,{match:/\$[(.]/}]}}function Re(n){const t=ye(n),g=R,e=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],l={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[t.exports.CLASS_REFERENCE]},E={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:e},contains:[t.exports.CLASS_REFERENCE]},c={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},s=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],u={$pattern:R,keyword:G.concat(s),literal:K,built_in:J.concat(e),"variable.language":W},i={className:"meta",begin:"@"+g},a=(d,A,S)=>{const _=d.contains.findIndex(N=>N.label===A);if(_===-1)throw new Error("can not find mode to replace");d.contains.splice(_,1,S)};Object.assign(t.keywords,u),t.exports.PARAMS_CONTAINS.push(i),t.contains=t.contains.concat([i,l,E]),a(t,"shebang",n.SHEBANG()),a(t,"use_strict",c);const r=t.contains.find(d=>d.label==="func.def");return r.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function he(n){let t,g,e,l,E="< Back",c,s;t=new Se({});const u=n[2].default,i=oe(u,n,n[1],null);return{c(){Ee(t.$$.fragment),g=$(),e=B("main"),l=B("a"),l.textContent=E,c=$(),i&&i.c(),this.h()},l(a){me(t.$$.fragment,a),g=D(a),e=U(a,"MAIN",{style:!0,class:!0});var r=_e(e);l=U(r,"A",{href:!0,style:!0,"data-svelte-h":!0}),fe(l)!=="svelte-1bmlwdn"&&(l.textContent=E),c=D(r),i&&i.l(r),r.forEach(v),this.h()},h(){P(l,"href","/#blog"),o(l,"font-family","monospace"),o(l,"color","var(--foreground)"),o(l,"font-weight","bold"),o(e,"--background1",n[0].background1),o(e,"--background2",n[0].background2),o(e,"--foreground",n[0].foreground),o(e,"--red",n[0].red),o(e,"--blue",n[0].blue),o(e,"--yellow",n[0].yellow),o(e,"--purple",n[0].purple),o(e,"--orange",n[0].orange),o(e,"--green",n[0].green),o(e,"--aqua",n[0].aqua),o(e,"--grey",n[0].grey),P(e,"class","svelte-z4w09v")},m(a,r){pe(t,a,r),F(a,g,r),F(a,e,r),Z(e,l),Z(e,c),i&&i.m(e,null),s=!0},p(a,[r]){i&&i.p&&(!s||r&2)&&ce(i,u,a,a[1],s?le(u,a[1],r,null):ie(a[1]),null),(!s||r&1)&&o(e,"--background1",a[0].background1),(!s||r&1)&&o(e,"--background2",a[0].background2),(!s||r&1)&&o(e,"--foreground",a[0].foreground),(!s||r&1)&&o(e,"--red",a[0].red),(!s||r&1)&&o(e,"--blue",a[0].blue),(!s||r&1)&&o(e,"--yellow",a[0].yellow),(!s||r&1)&&o(e,"--purple",a[0].purple),(!s||r&1)&&o(e,"--orange",a[0].orange),(!s||r&1)&&o(e,"--green",a[0].green),(!s||r&1)&&o(e,"--aqua",a[0].aqua),(!s||r&1)&&o(e,"--grey",a[0].grey)},i(a){s||(x(t.$$.fragment,a),x(i,a),s=!0)},o(a){z(t.$$.fragment,a),z(i,a),s=!1},d(a){a&&(v(g),v(e)),Ae(t,a),i&&i.d(a)}}}function Ce(n,t,g){let e;ue(n,Ne,c=>g(0,e=c));let{$$slots:l={},$$scope:E}=t;return y.registerLanguage("typescript",Re),y.registerLanguage("c++",Te),ge(()=>{const c=document.getElementsByTagName("code");for(let s=0;s<c.length;s++){let u;switch(console.log(c[s].classList.values().toArray()),c[s].classList.values().toArray()[0]){case"lang-c++":u=y.highlight(c[s].innerText,{language:"cpp"}).value;break;case"language-typescript":u=y.highlight(c[s].innerText,{language:"typescript"}).value;break;default:u=c[s].innerText;break}c[s].innerHTML=u}}),n.$$set=c=>{"$$scope"in c&&g(1,E=c.$$scope)},[e,E,l]}class ke extends de{constructor(t){super(),be(this,t,Ce,he,re,{})}}export{ke as component};