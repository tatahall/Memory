(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),r=n.n(i),u=n(4),s=n(1);n(10);function o(e){var t=e.handleClick,n=e.id,c=e.type,i=e.flipped,r=e.solved,u=e.height,s=e.width,o=e.disabled;return a.a.createElement("div",{className:"flip-container ".concat(i?"flipped":""),style:{width:s,height:u},onClick:function(){return o?null:t(n)}},a.a.createElement("div",{className:"flipper"},a.a.createElement("img",{style:{height:u,width:s},className:i?"front":"back",src:i||r?"/img/".concat(c,".png"):"/img/back.png",alt:c})))}n(11);function l(e){var t=e.disabled,n=e.dimension,c=e.cards,i=e.flipped,r=e.solved,u=e.handleClick;return a.a.createElement("div",{className:"board"},c.map((function(e){return a.a.createElement(o,{key:e.id,id:e.id,type:e.type,width:n/3.75,height:n/3.75,flipped:i.includes(e.id),solved:r.includes(e.id),handleClick:u,disabled:t||r.includes(e.includes)})})))}function d(){var e=0;return function(e){for(var t=e.slice(0),n=0;n<t.length-1;n++){var c=Math.floor(Math.random()*(n+1)),a=t[n];t[n]=t[c],t[c]=a}return t}(["yarn 500","yarn acronym","yarn doit","yarn fun","yarn iwillcroch","yarn knotty","yarn magic","yarn mug","yarn nowork","yarn punch"].reduce((function(t,n){return t.push({id:e++,type:n}),t.push({id:e++,type:n}),t}),[]))}n(12);r.a.render(a.a.createElement((function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),f=o[0],m=o[1],p=Object(c.useState)(400),h=Object(s.a)(p,2),b=h[0],y=h[1],v=Object(c.useState)([]),j=Object(s.a)(v,2),O=j[0],E=j[1],g=Object(c.useState)(!1),k=Object(s.a)(g,2),w=k[0],S=k[1],N=Object(c.useState)(0),C=Object(s.a)(N,2),M=C[0],T=C[1],z=Object(c.useState)(0),I=Object(s.a)(z,2),J=I[0],L=I[1],q=Object(c.useState)(0),x=Object(s.a)(q,2),B=x[0],H=x[1],W=Object(c.useState)(0),Y=Object(s.a)(W,2),A=Y[0],D=Y[1];Object(c.useEffect)((function(){X(),i(d())}),[]),Object(c.useEffect)((function(){Q()}),n),Object(c.useEffect)((function(){var e=window.addEventListener("resize",X);return function(){return window.removeEventListener("resize",e)}})),Object(c.useEffect)((function(){G()}),[M]);var F=function(){!function(e,t){var n=e+1;D(e+1),t(n)}(A,K),setTimeout(R,2e3)},G=function(e){e>5&&(L(J+1),setTimeout(P,2e3))},K=function(e){e>7&&(H(B+1),setTimeout(P,2e3))},P=function(){E([]),i(d()),D(0),T(0)},Q=function(){return n.map((function(e){var t="/img/".concat(e.type,".png");(new Image).src=t}))},R=function(){m([]),S(!1)},U=function(e){return f.includes(e)},V=function(e){var t=n.find((function(t){return t.id===e}));return n.find((function(e){return f[0]===e.id})).type===t.type},X=function(){y(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight))};return a.a.createElement("div",null,a.a.createElement("h1",{className:"title"},"Yarn Clicky"),a.a.createElement("hr",null),a.a.createElement("h3",{className:"question"},"Can you make the yarn sayings match?"),a.a.createElement("p",{className:"score"},"guesses = ",A,"  wins = ",J,"  losses = ",B),a.a.createElement("p",{className:"score"},"score = ",M),a.a.createElement(l,{dimension:b,cards:n,flipped:f,handleClick:function(e){if(S(!0),0===f.length)m([e]),S(!1);else{if(U(e))return;m([f[0],e]),V(e)?(E([].concat(Object(u.a)(O),[f[0],e])),R(),function(e,t){var n=e+1;T(e+1),t(n)}(M,G)):F()}},disabled:w,solved:O}))}),null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.3f2c29e5.chunk.js.map