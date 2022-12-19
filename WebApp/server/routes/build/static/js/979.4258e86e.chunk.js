"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[979],{5922:function(e,s,n){n.r(s),n.d(s,{default:function(){return ee}});var i=n(885),t=n(2791),c=n(8687),r=n(4569),l=n.n(r),a=n(4828),o=n(9126),d=n(7692),u=n.p+"static/media/profil-image.5faf09a7795d28bf5a2b.png",h=n(184);var x=function(){var e=(0,t.useState)([]),s=(0,i.Z)(e,2),n=s[0],c=s[1],r=(0,t.useState)([]),o=(0,i.Z)(r,2),x=o[0],j=o[1];return(0,t.useEffect)((function(){l().get(a.J+"/user/4").then((function(e){j(e.data[0][0])})).catch((function(e){c(e)}))}),[]),(0,h.jsx)("section",{className:"profil-container",children:0===n.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"profil-image",children:(0,h.jsx)("img",{src:u,alt:"Logo",width:"150",height:"150"})}),(0,h.jsx)("div",{className:"change-image-div",children:(0,h.jsx)("p",{children:"Change Photo ?"})}),(0,h.jsx)("div",{className:"profil-name",children:(0,h.jsx)("p",{children:x.pseudo})})]}):(0,h.jsxs)("div",{className:"profil-error-message",children:[(0,h.jsx)("p",{children:"An error just occured..."}),(0,h.jsx)("span",{children:(0,h.jsx)(d.I2T,{size:18,className:"error-icon"})})]})})},j=n(4164);function m(e){var s=(0,t.useState)(""),n=(0,i.Z)(s,2),c=n[0],r=n[1],l=(0,t.useRef)(null),a=(0,t.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{onClick:function(){return e.setChangePswd(!1)},children:"New password"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{type:"password",placeholder:"Enter your new password",ref:l,required:!0,minLength:5,maxLength:20}),(0,h.jsx)("input",{type:"password",placeholder:"Confirm your password",ref:a,required:!0,minLength:5,maxLength:20})]}),(0,h.jsx)("p",{id:"modification-error-message",children:c}),(0,h.jsx)("button",{id:"confirm-pswd",onClick:function(){return function(){var e=l.current.value,s=a.current.value;e!==s&&r("please, select the same password in the 2 fields")}()},children:"Confirm"})]})}function f(e){var s=(0,t.useState)(""),n=(0,i.Z)(s,2),c=n[0],r=n[1],l=(0,t.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{onClick:function(){return e.setChangePseudo(!1)},children:"New pseudo"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{type:"text",placeholder:"Enter your new pseudo",ref:l,required:!0,minLength:5,maxLength:20}),(0,h.jsx)("button",{id:"confirm-pseudo",onClick:function(){l.current.value===e.pseudo&&r("please, select a different pseudo")},children:"Confirm"})]}),(0,h.jsx)("p",{id:"modification-error-message",children:c})]})}var p=function(e){var s=e.setModal,n=(0,t.useContext)(c.N).theme,r=(0,t.useState)([]),u=(0,i.Z)(r,2),x=u[0],p=u[1],v=(0,t.useState)([]),g=(0,i.Z)(v,2),N=g[0],y=g[1],b=(0,t.useState)(!1),C=(0,i.Z)(b,2),k=C[0],w=C[1],S=(0,t.useState)(!1),z=(0,i.Z)(S,2),I=z[0],Z=z[1];return(0,t.useEffect)((function(){l().get(a.J+"/user/2").then((function(e){y(e.data[0][0])})).catch((function(e){p(e)}))}),[]),(0,j.createPortal)((0,h.jsx)("section",{className:"user-settings-section",children:0===x.length?(0,h.jsxs)("div",{className:"user-settings-body",children:[(0,h.jsxs)("div",{className:n?"settings-header-dark":"settings-header-light",children:[(0,h.jsx)("h1",{children:"My account"}),(0,h.jsx)("button",{onClick:function(){return s(!1)},children:(0,h.jsx)(d.qXE,{size:30})})]}),(0,h.jsxs)("div",{className:"settings-items",children:[(0,h.jsxs)("div",{className:"settings-user-pseudo",children:[(0,h.jsx)("h1",{onClick:function(){return console.log(N.pseudo)},children:"Hello"}),(0,h.jsx)("h1",{children:N.pseudo}),(0,h.jsx)("span",{id:"hello-span",children:"\ud83d\udc4b\ud83c\udffb"})]}),(0,h.jsx)("div",{className:"settings-user-infos",children:(0,h.jsxs)("div",{className:"settings-user-infos-items",children:[(0,h.jsx)("div",{className:"change-informations",children:I?(0,h.jsx)(f,{setChangePseudo:Z,pseudo:N.pseudo}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Your pseudo"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:N.pseudo}),(0,h.jsx)("button",{onClick:function(){return Z(!0)},children:(0,h.jsx)(o.CSz,{size:15,id:"settings-pen"})})]})]})}),(0,h.jsx)("div",{className:"change-informations",children:k?(0,h.jsx)(m,{setChangePswd:w}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Your password"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"*************"}),(0,h.jsx)("button",{onClick:function(){return w(!0)},children:(0,h.jsx)(o.CSz,{size:15,id:"settings-pen"})})]})]})})]})})]})]}):(0,h.jsxs)("div",{className:"user-settings-body",children:[(0,h.jsxs)("div",{className:n?"settings-header-dark":"settings-header-light",children:[(0,h.jsx)("h1",{children:"My account"}),(0,h.jsx)("button",{onClick:function(){return s(!1)},children:(0,h.jsx)(d.qXE,{size:30})})]}),(0,h.jsxs)("div",{className:"settings-items",children:[(0,h.jsx)("div",{className:"settings-user-pseudo",children:(0,h.jsx)("h1",{})}),(0,h.jsx)("div",{className:"settings-user-infos",children:(0,h.jsx)("div",{children:(0,h.jsx)("p",{id:"modal-error-text",children:"An error just occured..."})})})]})]})}),document.body)},v=n(8617),g=n(6856);var N=function(e){var s=e.setDropdown,n=(0,t.useState)(!1),c=(0,i.Z)(n,2),r=c[0],l=c[1];return(0,h.jsx)("section",{className:"drop-settings-container",children:r?(0,h.jsx)(p,{setModal:l}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"drop-settings-items",onClick:function(){return s(!0)},children:[(0,h.jsx)("div",{children:(0,h.jsx)(v.jTe,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"Go Back"})]}),(0,h.jsxs)("div",{className:"drop-settings-items",onClick:function(){return l(!0)},children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.cHS,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"Profile settings"})]}),(0,h.jsxs)("div",{className:"drop-settings-items",children:[(0,h.jsx)("div",{children:(0,h.jsx)(g.$lZ,{size:22,className:"settings-icons"})}),(0,h.jsxs)("select",{name:"cars",id:"cars",children:[(0,h.jsx)("option",{value:"saab",children:"English"}),(0,h.jsx)("option",{value:"saab",children:"French"})]})]})]})})},y=n(6355);function b(){var e=(0,t.useContext)(c.N),s=e.theme,n=e.toggleTheme;return(0,h.jsx)("div",{children:s?(0,h.jsxs)("div",{className:"settings-items",onClick:n,children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.UD2,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"LIGHT THEME"})]}):(0,h.jsxs)("div",{className:"settings-items",onClick:n,children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.mox,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"DARK THEME"})]})})}var C=function(){var e=(0,t.useState)(!0),s=(0,i.Z)(e,2),n=s[0],c=s[1];return(0,h.jsx)("section",{className:"settings-container",children:n?(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"settings-items",onClick:function(){return c(!1)},children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.b4S,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"Settings"})]}),(0,h.jsx)(b,{}),(0,h.jsxs)("div",{className:"settings-items",children:[(0,h.jsx)("div",{children:(0,h.jsx)(y.LL$,{size:22,className:"settings-icons"})}),(0,h.jsx)("button",{children:"Informations"})]})]}):(0,h.jsx)(N,{setDropdown:c})})},k={display:0};function w(e,s){switch(s.type){case"settings":return 1===e.display?{display:0}:{display:1};case"profile":return 2===e.display?{display:0}:{display:2};default:return{display:0}}}var S=function(e){var s=e.setContentDisplay,n=(0,t.useReducer)(w,k),r=(0,i.Z)(n,2),u=r[0],j=r[1],m=(0,t.useContext)(c.N).theme;return(0,h.jsxs)("div",{className:m?"navbar-section-dark":"navbar-section-light",children:[(0,h.jsx)("div",{className:"navbar-section-items",children:(0,h.jsx)("button",{onClick:function(){return s(0)},children:(0,h.jsx)("h1",{children:"ShuffleTunes"})})}),(0,h.jsxs)("div",{className:"navbar-section-icons",children:[(0,h.jsxs)("div",{className:"navbar-section-icons-childs",children:[(0,h.jsx)("button",{onClick:function(){return j({type:"profile"})},children:(0,h.jsx)(o.cHS,{size:20,id:"navbar-icon"})}),2===u.display?(0,h.jsx)(x,{}):(0,h.jsx)("div",{})]}),(0,h.jsxs)("div",{className:"navbar-section-icons-childs",children:[(0,h.jsx)("button",{onClick:function(){return j({type:"settings"})},children:(0,h.jsx)(o.FBj,{size:20,id:"navbar-icon"})}),1===u.display?(0,h.jsx)(C,{}):(0,h.jsx)("div",{})]}),(0,h.jsx)("div",{className:"navbar-section-icons-childs",children:(0,h.jsx)("button",{onClick:function(){l().post("".concat(a.J,"/logout"),null,{withCredentials:!0}).then((function(){window.location="/"}))},children:(0,h.jsx)(d.XqV,{size:20,id:"navbar-icon"})})})]})]})},z=n(8820);var I=function(e){var s=e.setContentDisplay,n=(0,t.useContext)(c.N).theme;return(0,h.jsxs)("div",{className:n?"sidebar-dark":"sidebar-light",children:[(0,h.jsxs)("div",{className:"sidebar-item1",children:[(0,h.jsx)("span",{children:(0,h.jsx)(o.G3K,{size:25,id:"sidebar-icon"})}),(0,h.jsx)("button",{onClick:function(){return s(1)},children:(0,h.jsx)("p",{children:"Your Files"})})]}),(0,h.jsxs)("div",{className:"sidebar-item1",children:[(0,h.jsx)("span",{children:(0,h.jsx)(o.pfx,{size:25,id:"sidebar-icon"})}),(0,h.jsx)("button",{onClick:function(){return s(3)},children:(0,h.jsx)("p",{children:"Upload new files"})})]}),(0,h.jsxs)("div",{className:"sidebar-item1",children:[(0,h.jsx)("span",{children:(0,h.jsx)(g.LkC,{size:25,id:"sidebar-icon"})}),(0,h.jsx)("button",{onClick:function(){return s(4)},children:(0,h.jsx)("p",{children:"Your PlayLists"})})]}),(0,h.jsxs)("div",{className:"sidebar-item1",children:[(0,h.jsx)("span",{children:(0,h.jsx)(z.lo,{size:25,id:"sidebar-icon"})}),(0,h.jsx)("button",{onClick:function(){return s(2)},children:(0,h.jsx)("p",{children:"Favorites Songs"})})]})]})},Z=n(9434),F=n(5893),L=n(3361),Y=n(9512);var E=function(e){var s=e.item,n=e.itemId,c=(0,t.useState)([]),r=(0,i.Z)(c,2),u=r[0],x=r[1],j=(0,t.useState)([]),m=(0,i.Z)(j,2),f=m[0],p=m[1],v=(0,Z.I0)(),g=(0,Z.v9)((function(e){return e.playlistReducer.listDisplay})),N=(0,Z.v9)((function(e){return e.addSongReducer.display})),y=(0,Z.v9)((function(e){return e.addSongReducer.playlistId})),b=function(){v(g===s?(0,L.Gg)(""):(0,L.Gg)(s))};return(0,h.jsxs)("div",{className:"file-list-child","data-testid":"fileListItems-test",children:[(0,h.jsxs)("div",{className:"file-list-songs",children:[(0,h.jsx)("button",{onClick:function(){v((0,F.pk)("open")),v((0,F.st)(s)),function(e){l().post(a.J+"/pd",{song:e},{withCredentials:!0}).then((function(){console.log("ok!")})).catch((function(e){console.log(e)}))}(s)},children:s}),g===s?(0,h.jsx)("button",{onClick:function(){v((0,L.Gg)(s)),b(),v((0,Y.nI)(!1))},children:(0,h.jsx)(o.UE1,{size:28,className:"file-list-child-icon"})}):(0,h.jsx)("button",{onClick:function(){v((0,L.Gg)(s)),b(),function(){try{l().get(a.J+"/playlists",{withCredentials:!0}).then((function(e){x(e.data[0][0])})).catch((function(e){p(e)}))}catch(f){p(f)}}(),v((0,Y.nI)(!1))},children:(0,h.jsx)(d.ffM,{size:23,className:"file-list-child-icon"})})]}),(0,h.jsx)("div",{className:"file-list-dropmenu",children:g===s?(0,h.jsx)("div",{className:"dropmenu-box",children:N?(0,h.jsxs)("div",{className:"add-song-container",children:[(0,h.jsx)("p",{children:"Add this song to this playlist ?"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{onClick:function(){return v((0,Y.nI)(!1))},children:"Cancel"}),(0,h.jsx)("button",{onClick:function(){return function(){try{l().post(a.J+"/newsong",{musicId:n,playlistId:y}).then((function(){v((0,Y.nI)(!1))})).catch((function(e){p(e)}))}catch(f){p(f)}}()},children:"Yes"})]})]}):(0,h.jsx)(h.Fragment,{children:0===f.length?u.map((function(e){return(0,h.jsx)("button",{id:e.playlistId,className:"playlist-items",onClick:function(){v((0,Y.nI)(!0)),v((0,Y.G4)(e.playlistId))},children:e.playlistName},e.playlistId)})):(0,h.jsx)("p",{children:"An error just occured..."})})}):(0,h.jsx)("p",{})})]})},T=a.J+"/songs";function q(e){return(0,h.jsx)(h.Fragment,{children:"no-file"===e.error?(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Your File List"}),(0,h.jsx)("p",{id:"no-file-list",children:"Your music list is empty..."})]}):(0,h.jsxs)("div",{id:"error-file-list",children:[(0,h.jsx)("h1",{children:"Your File List"}),(0,h.jsx)("p",{children:"An error just occured..."})]})})}function D(){var e=(0,t.useState)([]),s=(0,i.Z)(e,2),n=s[0],c=s[1],r=(0,Z.I0)(),a=(0,t.useState)([]),o=(0,i.Z)(a,2),d=o[0],u=o[1];return(0,t.useEffect)((function(){r((0,L.Gg)(0));try{l().get(T,{withCredentials:!0}).then((function(e){c(e.data[0][0])})).catch((function(e){u(e),console.clear()}))}catch(d){u(d),console.clear()}}),[r]),(0,h.jsx)("div",{"data-testid":"file-list-test",children:0===d.length?(0,h.jsx)("div",{className:"filelist-section",children:0===n.length?(0,h.jsx)(q,{error:"no-file"}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Your File List"}),(0,h.jsx)("div",{className:"music-list-items",children:n.map((function(e){return(0,h.jsx)(E,{item:e.musicTitle,itemId:e.musicId},e.musicId)}))})]})}):(0,h.jsx)(q,{error:""})})}var J=(0,t.memo)(D);var P=function(){return(0,h.jsxs)("div",{className:"favorite-section",children:[(0,h.jsx)("h1",{children:"Your Favorite Songs List"}),(0,h.jsx)("div",{className:"fav-songs-list"})]})};var R=function(){var e=(0,Z.I0)(),s=(0,Z.v9)((function(e){return e.musicReducer.song}));return(0,h.jsxs)("div",{className:"sound-player","data-testid":"soundplayer-test",children:[(0,h.jsx)("div",{children:""===s?(0,h.jsx)("button",{className:"button-play",children:(0,h.jsx)(o.mz0,{size:45,id:"play-icon"})}):(0,h.jsx)("button",{onClick:function(){e((0,F.sE)()),l().post(a.J+"/stopsong").then((function(){console.log("ok!")})).catch((function(e){console.log(e)}))},className:"button-play",children:(0,h.jsx)(o.WeV,{size:45,id:"play-icon"})})}),(0,h.jsx)("div",{className:"messagedefilant",children:(0,h.jsx)("div",{children:(0,h.jsx)("marquee",{children:s})})})]})},A=n(7425),G=n(6036);function M(e){return(0,h.jsx)(h.Fragment,{children:"no-songs"===e.error?(0,h.jsx)("p",{children:"You don't have any songs in this playlist..."}):(0,h.jsx)("p",{children:"An error just occured..."})})}function H(e){var s=(0,t.useState)(!0),n=(0,i.Z)(s,2),c=n[0],r=n[1];return(0,h.jsxs)("div",{className:c?"songs-items":"none",children:[(0,h.jsx)("button",{onClick:function(){var s;s=e.id,l().delete(a.J+"/deletesongplaylist/"+s).then((function(){})).catch((function(){})),r(!1)},children:(0,h.jsx)(G.bqj,{size:24,className:"songs-items-icons"})}),(0,h.jsx)("p",{children:e.title})]},e.id)}var O=function(e){var s=e.id,n=e.title,c=(0,t.useState)([]),r=(0,i.Z)(c,2),d=r[0],u=r[1],x=(0,t.useState)([]),j=(0,i.Z)(x,2),m=j[0],f=j[1],p=(0,t.useState)(!0),v=(0,i.Z)(p,2),N=v[0],y=v[1],b=(0,Z.v9)((function(e){return e.playlistReducer.display})),C=(0,Z.I0)(),k=function(){C(s===b?(0,L.iO)(0):(0,L.iO)(s))};return(0,h.jsxs)("div",{className:N?"dropdown":"none","data-testid":"dropdown-component",children:[(0,h.jsxs)("div",{className:"dropdown-menu",onClick:function(){C((0,L.iO)(s)),k(),l().get(a.J+"/playlistsongs/"+s).then((function(e){u(e.data[0][0])})).catch((function(e){f(e),console.clear()}))},children:[(0,h.jsx)("p",{className:"playlist-name",children:n}),(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{className:"gear-button",onClick:function(){!function(e){l().delete(a.J+"/playlist/"+e).then((function(){})).catch((function(){}))}(s),y(!1)},children:(0,h.jsx)(o.yvY,{className:"playlist-gear-icon",size:20})}),(0,h.jsx)("button",{className:"dropdown-button",onClick:function(){C((0,L.iO)(s)),k()},children:(0,h.jsx)(g.gwH,{className:"dropdown-menu-icon",size:28})})]})]}),(0,h.jsx)("div",{className:"dropdown-content",children:0===m.length?(0,h.jsx)(h.Fragment,{children:b===s?(0,h.jsx)("div",{className:"dropdown-songs",children:0===d.length?(0,h.jsx)("p",{children:"Aucune musique dans cette playlist..."}):(0,h.jsx)("div",{children:d.map((function(e){return(0,h.jsx)(H,{id:e.musicId,title:e.musicTitle},e.musicId)}))})}):(0,h.jsx)("div",{})}):(0,h.jsx)(M,{error:""})})]})};function U(e){return(0,h.jsx)(h.Fragment,{children:"no-files"===e.error?(0,h.jsx)("p",{className:"playlist-message",children:"You don't have any playlists for the moment..."}):(0,h.jsx)("p",{className:"playlist-message",children:"An error just occured..."})})}function W(){var e=(0,t.useState)([]),s=(0,i.Z)(e,2),n=s[0],c=s[1],r=(0,t.useState)(!1),o=(0,i.Z)(r,2),d=o[0],u=o[1],x=(0,t.useState)([]),j=(0,i.Z)(x,2),m=j[0],f=j[1],p=(0,Z.I0)(),v=(0,t.useRef)(null),g=function(){u(!d)};(0,t.useEffect)((function(){p((0,L.iO)(0));try{l().get(a.J+"/playlists",{withCredentials:!0}).then((function(e){c(e.data[0][0])})).catch((function(e){f(e)}))}catch(m){f(m),console.clear()}}),[p]);return(0,h.jsxs)("div",{className:"playlists-container","data-testid":"playlist-component",children:[(0,h.jsxs)("div",{className:"playlist-container-menu",children:[(0,h.jsx)("h1",{children:"Your PlayLists"}),d?(0,h.jsx)("button",{onClick:function(){return g()},children:(0,h.jsx)(A.tgW,{size:30,className:"playlist-container-menu-icon"})}):(0,h.jsx)("button",{onClick:function(){return g()},children:(0,h.jsx)(A.uGf,{size:30,className:"playlist-container-menu-icon"})})]}),(0,h.jsx)("div",{children:d?(0,h.jsxs)("form",{className:"add-playlist",onSubmit:function(){l().post(a.J+"/createplaylist",{playlistName:v.current.value},{withCredentials:!0}).then((function(){})).catch((function(){console.clear()}))},children:[(0,h.jsx)("input",{type:"text",placeholder:"Create a new playlist",ref:v}),(0,h.jsx)("button",{type:"submit",children:"Add Playlist"})]}):(0,h.jsx)("div",{})}),(0,h.jsx)("div",{children:0===m.length?(0,h.jsx)(h.Fragment,{children:0===n.length?(0,h.jsx)(U,{error:"no-files"}):(0,h.jsx)("div",{className:"playlist-dropdowns",children:n.map((function(e){return(0,h.jsx)(O,{id:e.playlistId,title:e.playlistName},e.playlistId)}))})}):(0,h.jsx)(U,{error:""})})]})}var X=(0,t.memo)(W),B=n(7762),K=n(2982),V=n(4221),$=n(828);function Q(){var e=(0,t.useState)([]),s=(0,i.Z)(e,2),n=s[0],c=s[1],r=(0,t.useRef)([]);function o(e){e.preventDefault();var s=e.currentTarget.value;return c((function(e){return e.filter((function(e){return e!==s}))})),r.current.filter((function(e){return e.name!==s})),V.fn.info("The music ".concat(s," has been deleted from the queue"),"Successfull delete",5e3)}return(0,h.jsxs)("div",{"data-testid":"uploadMusic-component",children:[(0,h.jsx)(V.mh,{}),(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),r.current.length){var s,n=new FormData,i=(0,B.Z)(r.current);try{for(i.s();!(s=i.n()).done;){var t=s.value;n.append("musicFile",t)}}catch(c){i.e(c)}finally{i.f()}V.fn.info("Please wait","You've send the music",5e3),l().post("".concat(a.J,"/uploadMusic"),n,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then((function(){V.fn.success("You are now free to use what you've uploaded","Upload succes",5e3)})).catch((function(){V.fn.error("Please retry later","Something went wrong",5e3)}))}},children:[(0,h.jsx)("input",{type:"file",multiple:!0,accept:".mp3, .wav",id:"musicFileInput",className:"music-file-input",onChange:function(e){Object.entries(e.target.files).map((function(e){return e[1]})).forEach((function(e){if(-1===n.findIndex((function(s){return s===e.name}))){if(n.length>=20)return V.fn.info("You can't have more than ".concat(20," into the queue"),"Too much songs",5e3);c((function(s){return[].concat((0,K.Z)(s),[e.name])})),r.current.push(e)}}))},"data-testid":"form-input"}),(0,h.jsx)("label",{htmlFor:"musicFileInput",children:(0,h.jsx)("div",{className:"music-file-input-content",children:0===n.length?(0,h.jsx)("p",{children:" Click here to load your musics "}):n.map((function(e){return(0,h.jsxs)("div",{children:["\ud83d\udcc1 ",e,(0,h.jsx)("button",{type:"button",className:"delete-music-from-queue",value:e,onClick:o,children:(0,h.jsx)($.sQZ,{className:"delete-music-from-queue"})})]},e)}))})}),(0,h.jsxs)("div",{className:"form-control-button",children:[(0,h.jsx)("button",{type:"button",onClick:function(){if(n.length)return c([]),r.current=[],V.fn.info("The queue has been cleared","Successfull clear",5e3)},children:" Cancel "}),(0,h.jsx)("button",{type:"submit",children:" Submit "})]})]})]})}var _=(0,t.memo)(Q);var ee=function(){var e=(0,t.useContext)(c.N).theme,s=(0,t.useState)(0),n=(0,i.Z)(s,2),r=n[0],l=n[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)(S,{contentDisplay:r,setContentDisplay:l}),(0,h.jsxs)("div",{className:e?"dashboard-section-dark":"dashboard-section-light",children:[(0,h.jsx)(I,{contentDisplay:r,setContentDisplay:l}),(0,h.jsxs)("div",{className:"components-container",children:[(0,h.jsx)("div",{className:"main-content",children:function(){switch(r){case 0:return(0,h.jsxs)("div",{className:"dashboard-main-component",children:[(0,h.jsx)("h1",{children:"Welcome to ShuffleTunes !"}),(0,h.jsx)("p",{children:"Use our different options to optimize your experience on our App"}),(0,h.jsx)("button",{onClick:function(){return l(3)},children:"Try it now"})]});case 1:return(0,h.jsx)(J,{});case 2:return(0,h.jsx)(P,{});case 3:return(0,h.jsx)(_,{});case 4:return(0,h.jsx)(X,{});default:return(0,h.jsx)("div",{})}}()}),(0,h.jsx)("div",{children:(0,h.jsx)(R,{})})]})]})]})}}}]);
//# sourceMappingURL=979.4258e86e.chunk.js.map