(window.webpackJsonpblackjack=window.webpackJsonpblackjack||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),o=(a(20),a(3)),u=a(4),i=a(12),s=function e(t,a,n){Object(u.a)(this,e),this.faceValue=t,this.color=a,this.suit=n},d=["heart","diamond"],f=["spade","club"],b=function(){function e(){Object(u.a)(this,e),this.deck=[];var t=!0,a=!1,n=void 0;try{for(var r,l=d[Symbol.iterator]();!(t=(r=l.next()).done);t=!0)for(var c=r.value,o=1;o<=13;o++)this.deck.push(new s(o,"red",c))}catch(k){a=!0,n=k}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}var i=!0,b=!1,h=void 0;try{for(var m,p=f[Symbol.iterator]();!(i=(m=p.next()).done);i=!0)for(var v=m.value,j=1;j<=13;j++)this.deck.push(new s(j,"black",v))}catch(k){b=!0,h=k}finally{try{i||null==p.return||p.return()}finally{if(b)throw h}}this.deck=this.shuffle(this.deck)}return Object(i.a)(e,[{key:"getTopCard",value:function(){return this.deck.pop()}},{key:"shuffle",value:function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}}]),e}(),h=a(0),m=(a(21),{display:"flex"}),p={border:"2px solid black",width:"100%"};var v=function(){var e=Object(n.useState)(new b),t=Object(o.a)(e,2),a=t[0],l=(t[1],Object(n.useState)(new s(0,"red","owow"))),c=Object(o.a)(l,2),u=c[0],i=c[1],d=Object(n.useState)(0),f=Object(o.a)(d,2),h=f[0],v=f[1],j=Object(n.useState)([{displayName:"testname"}]),k=Object(o.a)(j,2),y=k[0],O=(k[1],Object(n.useState)(y[0])),E=Object(o.a)(O,2),g=E[0],w=E[1],S=Object(n.useState)(!1),V=Object(o.a)(S,2),N=V[0],I=V[1],U=Object(n.useState)({displayName:"none",email:"none"}),C=Object(o.a)(U,2),x=(C[0],C[1],Object(n.useState)(null)),A=Object(o.a)(x,2);function D(e){e.preventDefault(),I(!1),y.unshift(y.pop()),w(y[0]),i(new s(0,"oi","ok"))}return A[0],A[1],Object(n.useEffect)((function(){v((function(e){return e+u.faceValue}))}),[u]),Object(n.useEffect)((function(){g.handValue=h,h>21&&(g.handValue=0,g.bankrupt=!0,I(!0))}),[h]),Object(n.useEffect)((function(){v(g.handValue),(0!=g.handValue||g.bankrupt)&&function(){var e=y[0];y.map((function(t){t.handValue>e.handValue&&(e=t),t.handValue=0})),e.score++,v(0),i(new s(0,"oi","ok"))}()}),[g]),r.a.createElement("div",{className:"App"},r.a.createElement("form",null,r.a.createElement("div",{style:m},y.map((function(e){return r.a.createElement("div",{style:p},"Player: ",e.name," ",r.a.createElement("br",null),"Score: ",e.score," ",r.a.createElement("br",null),"Hand value: ",e.handValue)}))),r.a.createElement("div",{id:"currentCard"},0!==u.faceValue?u.color+" "+u.faceValue+" of "+u.suit:null),r.a.createElement("div",{id:"handValue"},"Hand value: "+h),g.displayName+"'s turn!",N?r.a.createElement("button",{onClick:function(e){return D(e)}},"Next Player"):r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return function(e,t){e.preventDefault(),t?i(a.getTopCard()):D()}(e,!0)}},"Hit"),r.a.createElement("button",{onClick:function(e){return D(e)}},"Pass"))))};function j(){return r.a.createElement("div",null,r.a.createElement("h1",null,"awaiting opponents"))}a(24),a(10);var k=a(13);h.initializeApp({apiKey:"AIzaSyB_tSulELHqtuDTiSLN6O5ytJkFwEEJ_wk",authDomain:"bruno-blackjack.firebaseapp.com",databaseURL:"https://bruno-blackjack.firebaseio.com",projectId:"bruno-blackjack",storageBucket:"bruno-blackjack.appspot.com",messagingSenderId:"956053403189",appId:"1:956053403189:web:52524a0813b4f16914a37c"});var y=new k.a.AuthUI(h.auth()),O=h.auth();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e=Object(n.useState)({displayName:"none",email:"none"}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),u=Object(o.a)(c,2),i=u[0],s=u[1];return y.start("#firebaseui-auth-container",{signInOptions:[h.auth.GoogleAuthProvider.PROVIDER_ID]}),Object(n.useEffect)((function(){a.displayName}),[a]),Object(n.useEffect)((function(){console.log(Object.keys(i).length)}),[i]),Object(n.useEffect)((function(){h.database().ref("users/").on("value",(function(e){null!=e.val()&&s(e.val())})),console.log("online uzerz"),console.log(i),console.log("users length"),console.log(Object.keys(i).length),O.onAuthStateChanged((function(e){if(console.log(e),e){var t=!1;for(var a in console.log("user uid"),console.log(e.uid),i)e.uid==a.uid&&(t=!0);t||(l({displayName:O.currentUser.displayName,email:O.currentUser.email,uid:O.currentUser.uid}),h.database().ref("users/"+O.currentUser.uid).set({displayName:O.currentUser.displayName,email:O.currentUser.email,uid:O.currentUser.uid}))}}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{id:"firebaseui-auth-container"}),"none"!=a.displayName?r.a.createElement("h1",null,"Logged in as: ",a.email):null,Object.keys(i).length>1?r.a.createElement(v,null):r.a.createElement(j,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.45633c61.chunk.js.map