!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,s=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===n(s)?s:String(s)),a)}var s}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}e.d(t,{default:function(){return u}});var i=function(){function e(t,n,a){r(this,e),this.set(t,n,a)}return s(e,[{key:"toString",value:function(){return"rgb(".concat(Math.round(this.r),", ").concat(Math.round(this.g),", ").concat(Math.round(this.b),")")}},{key:"set",value:function(e,t,n){this.r=this.clamp(e),this.g=this.clamp(t),this.b=this.clamp(n)}},{key:"hueRotate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e=e/180*Math.PI;var t=Math.sin(e),n=Math.cos(e);this.multiply([.213+.787*n-.213*t,.715-.715*n-.715*t,.072-.072*n+.928*t,.213-.213*n+.143*t,.715+.285*n+.14*t,.072-.072*n-.283*t,.213-.213*n-.787*t,.715-.715*n+.715*t,.072+.928*n+.072*t])}},{key:"grayscale",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e)])}},{key:"sepia",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.393+.607*(1-e),.769-.769*(1-e),.189-.189*(1-e),.349-.349*(1-e),.686+.314*(1-e),.168-.168*(1-e),.272-.272*(1-e),.534-.534*(1-e),.131+.869*(1-e)])}},{key:"saturate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.213+.787*e,.715-.715*e,.072-.072*e,.213-.213*e,.715+.285*e,.072-.072*e,.213-.213*e,.715-.715*e,.072+.928*e])}},{key:"multiply",value:function(e){var t=this.clamp(this.r*e[0]+this.g*e[1]+this.b*e[2]),n=this.clamp(this.r*e[3]+this.g*e[4]+this.b*e[5]),r=this.clamp(this.r*e[6]+this.g*e[7]+this.b*e[8]);this.r=t,this.g=n,this.b=r}},{key:"brightness",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(e)}},{key:"contrast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(e,-.5*e+.5)}},{key:"linear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.r=this.clamp(this.r*e+255*t),this.g=this.clamp(this.g*e+255*t),this.b=this.clamp(this.b*e+255*t)}},{key:"invert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.r=this.clamp(255*(e+this.r/255*(1-2*e))),this.g=this.clamp(255*(e+this.g/255*(1-2*e))),this.b=this.clamp(255*(e+this.b/255*(1-2*e)))}},{key:"hsl",value:function(){var e,t,n=this.r/255,r=this.g/255,a=this.b/255,s=Math.max(n,r,a),i=Math.min(n,r,a),l=(s+i)/2;if(s===i)e=t=0;else{var o=s-i;switch(t=l>.5?o/(2-s-i):o/(s+i),s){case n:e=(r-a)/o+(r<a?6:0);break;case r:e=(a-n)/o+2;break;case a:e=(n-r)/o+4}e/=6}return{h:100*e,s:100*t,l:100*l}}},{key:"clamp",value:function(e){return e>255?e=255:e<0&&(e=0),e}}],[{key:"hexToRgb",value:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}}]),e}(),l=function(){function e(t){r(this,e),this.target=t,this.targetHSL=t.hsl(),this.reusedColor=new i(0,0,0)}return s(e,[{key:"solve",value:function(){var e=this.solveNarrow(this.solveWide());return{values:e.values,loss:e.loss,filter:this.css(e.values)}}},{key:"solveWide",value:function(){for(var e=[60,180,18e3,600,1.2,1.2],t={loss:1/0},n=0;t.loss>25&&n<3;n++){var r=this.spsa(5,e,15,[50,20,3750,50,100,100],1e3);r.loss<t.loss&&(t=r)}return t}},{key:"solveNarrow",value:function(e){var t=e.loss,n=t+1,r=[.25*n,.25*n,n,.25*n,.2*n,.2*n];return this.spsa(t,r,2,e.values,500)}},{key:"spsa",value:function(e,t,n,r,a){for(var s=null,i=1/0,l=new Array(6),o=new Array(6),c=new Array(6),u=0;u<a;u++){for(var d=n/Math.pow(u+1,.16666666666666666),m=0;m<6;m++)l[m]=Math.random()>.5?1:-1,o[m]=r[m]+d*l[m],c[m]=r[m]-d*l[m];for(var h=this.loss(o)-this.loss(c),y=0;y<6;y++){var g=h/(2*d)*l[y],v=t[y]/Math.pow(e+u+1,1);r[y]=(b=r[y]-v*g,_=void 0,_=100,2===(p=y)?_=7500:4!==p&&5!==p||(_=200),3===p?b>_?b%=_:b<0&&(b=_+b%_):b<0?b=0:b>_&&(b=_),b)}var f=this.loss(r);f<i&&(s=r.slice(0),i=f)}var b,p,_;return{values:s,loss:i}}},{key:"loss",value:function(e){var t=this.reusedColor;t.set(0,0,0),t.invert(e[0]/100),t.sepia(e[1]/100),t.saturate(e[2]/100),t.hueRotate(3.6*e[3]),t.brightness(e[4]/100),t.contrast(e[5]/100);var n=t.hsl();return Math.abs(t.r-this.target.r)+Math.abs(t.g-this.target.g)+Math.abs(t.b-this.target.b)+Math.abs(n.h-this.targetHSL.h)+Math.abs(n.s-this.targetHSL.s)+Math.abs(n.l-this.targetHSL.l)}},{key:"css",value:function(e){function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(e[t]*n)}return"invert(".concat(t(0),"%) sepia(").concat(t(1),"%) saturate(").concat(t(2),"%) hue-rotate(").concat(t(3,3.6),"deg) brightness(").concat(t(4),"%) contrast(").concat(t(5),"%)")}}]),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(a)?a:String(a)),r)}var a}var u=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._lang=localStorage.getItem("website-lang"),null===this._lang&&(this._lang=-1!==["fr","es","de","en"].indexOf(navigator.language.substring(0,2))?navigator.language.substring(0,2):"en",localStorage.setItem("website-lang",this._lang)),this._nls=null,this._band=null,this._mainScroll=null,this._version="1.1.0",this._initLang().then(this._fetchBandInfo.bind(this)).then(this._init.bind(this)).then(this._buildPage.bind(this)).then(this._events.bind(this)).catch((function(e){console.error("BandWebsite v".concat(t._version," : Fatal error during initialization, please contact support :\n"),e)})).finally((function(){}))}var t,n;return t=e,(n=[{key:"_initLang",value:function(){var e=this;return new Promise((function(t,n){fetch("assets/json/".concat(e._lang,".json")).then((function(r){r.json().then((function(n){e._nls=n;for(var r=document.getElementById("lang-select"),a=0;a<r.children.length;++a)r.children[a].innerHTML=e._nls.lang[r.children[a].value],r.children[a].value===e._lang&&r.children[a].setAttribute("selected",!0);r.addEventListener("change",(function(e){localStorage.setItem("website-lang",e.target.value),window.location.reload()})),t()})).catch((function(e){n(e)}))})).catch((function(e){n(e)}))}))}},{key:"_fetchBandInfo",value:function(){var e=this;return new Promise((function(t,n){fetch("assets/json/band.json").then((function(r){r.json().then((function(n){e._band=n,t()})).catch((function(e){n(e)}))})).catch((function(e){n(e)}))}))}},{key:"_init",value:function(){var e=this;return new Promise((function(t,n){if(e._band.styles){document.documentElement.style.setProperty("--mainColor",e._band.styles.mainColor),document.documentElement.style.setProperty("--gradientStart",e._band.styles.gradientStart),document.documentElement.style.setProperty("--gradientEnd",e._band.styles.gradientEnd);var r=i.hexToRgb(e._band.styles.mainColor),a=new i(r[0],r[1],r[2]),s=new l(a).solve();document.documentElement.style.setProperty("--imageFilter",s.filter),t()}else n(new Error("Not styles found in JSON file"))}))}},{key:"_buildPage",value:function(){var e=this;return new Promise((function(t,n){"index"===document.body.dataset.type?e._buildIndexPage():"listen"===document.body.dataset.type?e._buildListenPage():"tree"===document.body.dataset.type?e._buildTreePage():n(new Error("Invalid <body> type. Should be either index, listen or tree")),t()}))}},{key:"_buildIndexPage",value:function(){var e=this;document.querySelector("#band-name").innerHTML=this._nls.band.name,document.querySelector("#band-picture").src="./assets/img/artists/".concat(this._band.bandPicture),document.querySelector("#band-desc").innerHTML=this._nls.band.desc,document.querySelector("#listen-link").innerHTML='<img src="./assets/img/controls/disc.svg" alt="listen">'.concat(this._nls.listenLink),document.querySelector("#tree-link").innerHTML='<img src="./assets/img/controls/find.svg" alt="listen">'.concat(this._nls.treeLink),document.querySelector("#musicians-section").innerHTML=this._nls.musicians,document.querySelector("#works-section").innerHTML=this._nls.works,document.querySelector("#videos-section").innerHTML=this._nls.videos;for(var t=0;t<this._band.members.length;++t){var n=document.createElement("DIV");n.dataset.artist=this._band.members[t].fullName;var r=document.createElement("IMG");r.src="./assets/img/artists/".concat(this._band.members[t].picture);var a=document.createElement("P");a.innerHTML="\n        ".concat(this._band.members[t].fullName,"<br>\n        <span>© ").concat(this._band.members[t].pictureCredit,'</span><br>\n        <span class="learn-more">').concat(this._nls.learnMore,"</span>\n      "),n.addEventListener("click",this._artistModal.bind(this,this._band.members[t])),n.appendChild(r),n.appendChild(a),document.getElementById("artists").appendChild(n)}if(this._band.pastMembers.length>0){var s=document.createElement("DIV");s.classList.add("past-members");var i=document.createElement("P");i.innerHTML="\n        ".concat(this._nls.pastMembers,'<br>\n        <span id="learn-more" class="learn-more">').concat(this._nls.learnMore,"</span>\n      "),s.addEventListener("click",this._pastMembersModal.bind(this,this._band.pastMembers)),s.appendChild(i),document.getElementById("artists").appendChild(s)}for(var l=0;l<this._band.releases.length;++l)if(!0===this._band.releases[l].showOnMainPage){var o=document.createElement("DIV");o.dataset.url=this._getReleaseLink(this._band.releases[l].links);var c=document.createElement("IMG");c.src="./assets/img/releases/".concat(this._band.releases[l].cover);var u=document.createElement("P");u.innerHTML="\n          ".concat(this._band.releases[l].title,"<br>\n          <span>").concat(this._band.releases[l].artist,"</span><br>\n          <span>").concat(this._buildReleaseDate(this._band.releases[l].date),"</span>\n        "),o.addEventListener("click",this._openReleaseVideo.bind(this,o.dataset.url)),o.appendChild(c),o.appendChild(u),document.getElementById("releases").appendChild(o)}setTimeout((function(){e._mainScroll=new window.ScrollBar({target:document.body,style:{color:e._band.styles.mainColor}}),requestAnimationFrame((function(){e._mainScroll.updateScrollbar()}))}),100)}},{key:"_buildListenPage",value:function(){var e=this;document.querySelector("#release-from").innerHTML=this._nls.from,document.querySelector("#listen-online").innerHTML=this._nls.listenOnline,document.querySelector("#see-more-links").innerHTML=this._nls.seeMore,document.querySelector("#published-on").innerHTML=this._nls.publishedOn;var t=document.getElementById("current-progress"),n=document.getElementById("modal-overlay"),r=new Audio,a=0,s=function(){r.pause(),r.currentTime=0,t.style.width="0";var n=e._band.releases[a];document.getElementById("release-background").style.backgroundImage="url('assets/img/releases/".concat(n.cover,"')"),document.getElementById("release-background-bottom").style.backgroundImage="url('assets/img/releases/".concat(n.cover,"')"),document.getElementById("release-cover").src="assets/img/releases/".concat(n.cover),document.getElementById("release-duration").innerHTML=n.duration,document.getElementById("release-title").innerHTML=n.title,document.getElementById("release-artist").innerHTML=n.artist,document.getElementById("release-date").innerHTML=e._buildReleaseDate(n.date),document.getElementById("label-link").innerHTML=n.label,document.getElementById("label-link").href=n.labelLink;for(var s=0;s<n.links.length;++s)""===n.links[s].url?document.getElementById(n.links[s].type).classList.add("disabled"):(document.getElementById(n.links[s].type).classList.remove("disabled"),document.getElementById(n.links[s].type).href=n.links[s].url);document.getElementById("release-tracklist").innerHTML=e._buildTrackCredits(n.tracks),document.getElementById("release-tracklist").scrollHeight>document.getElementById("release-tracklist").clientHeight&&(document.getElementById("release-tracklist").style.display="inherit",setTimeout((function(){var t=new window.ScrollBar({target:document.getElementById("release-tracklist"),style:{color:e._band.styles.mainColor}});requestAnimationFrame((function(){t.updateScrollbar()}))}),100)),r=new Audio("assets/audio/".concat(n.audio)),i(r),e._band.releases.length<35&&document.getElementById("release-pager").children[a].classList.add("selected")},i=function(){var e=document.getElementById("play-pause");e.src="assets/img/controls/play.svg";var t=document.getElementById("progress-bar"),n=document.getElementById("current-progress"),a=!1;e.addEventListener("click",(function(){!0===a?(a=!1,e.src="assets/img/controls/play.svg",r.pause()):(a=!0,e.src="assets/img/controls/pause.svg",r.play())})),r.addEventListener("timeupdate",(function(){n.style.width="".concat(r.currentTime/r.duration*100,"%")})),r.addEventListener("ended",(function(){r.currentTime=0,n.style.width="0",e.src="assets/img/controls/play.svg",a=!1})),t.addEventListener("click",(function(e){if(!0===a){var s=t.getBoundingClientRect();r.currentTime=(e.clientX-s.left)/s.width*r.duration,n.style.width="".concat(r.currentTime/r.duration*100,"%")}}))};if(1===this._band.releases.length)document.getElementById("release-previous").style.display="none",document.getElementById("release-next").style.display="none";else if(document.getElementById("release-previous").addEventListener("click",(function(t){t.target.blur(),e._band.releases.length<35&&document.getElementById("release-pager").children[a].classList.remove("selected"),a=(e._band.releases.length+a-1)%e._band.releases.length,s()})),document.getElementById("release-next").addEventListener("click",(function(t){t.target.blur(),e._band.releases.length<35&&document.getElementById("release-pager").children[a].classList.remove("selected"),a=(a+1)%e._band.releases.length,s()})),this._band.releases.length&&this._band.releases.length<35){for(var l=0;l<this._band.releases.length;++l){var o=document.createElement("A");o.innerHTML="●",o.addEventListener("click",(function(e){document.getElementById("release-pager").children[a].classList.remove("selected");var t=e.target.parentNode;a=Array.prototype.indexOf.call(t.children,e.target),s()})),o.style.margin="0 ".concat(3.5/this._band.releases.length,"rem"),document.getElementById("release-pager").appendChild(o)}document.getElementById("release-pager").style.fontSize="".concat(20/this._band.releases.length%5.5,"rem")}document.getElementById("see-more-links").addEventListener("click",(function(){fetch("assets/html/seemoremodal.html").then((function(t){n.style.display="flex",t.text().then((function(t){n.appendChild(document.createRange().createContextualFragment(t));for(var r=e._band.releases[a],s=0;s<r.moreLinks.length;++s)""===r.moreLinks[s].url?document.getElementById(r.moreLinks[s].type).classList.add("disabled"):(document.getElementById(r.moreLinks[s].type).classList.remove("disabled"),document.getElementById(r.moreLinks[s].type).href=r.moreLinks[s].url);n.querySelector("#close-modal-button").innerHTML=e._nls.close,requestAnimationFrame((function(){return n.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))})),s()}},{key:"_buildTreePage",value:function(){for(var e=this,t=0;t<this._band.links.length;++t)document.querySelector("#link-wrapper").innerHTML+='\n      <a href="'.concat(this._band.links[t].url,'" class="link" target="_blank" rel="noopener noreferrer">\n        <img src="assets/img/logo/').concat(this._band.links[t].type,'.svg" width="25px">\n        <p>').concat(this._band.links[t].name,"</p>\n      </a>\n      ");setTimeout((function(){e._mainScroll=new window.ScrollBar({target:document.getElementById("link-wrapper"),style:{color:e._band.styles.mainColor}}),requestAnimationFrame((function(){e._mainScroll.updateScrollbar()}))}),100)}},{key:"_events",value:function(){document.getElementById("modal-overlay").addEventListener("click",this._closeModal.bind(this))}},{key:"_artistModal",value:function(e){var t=this,n=document.getElementById("modal-overlay");fetch("assets/html/biomodal.html").then((function(r){n.style.display="flex",r.text().then((function(r){var a=document.createRange().createContextualFragment(r);a.querySelector("#artist-name").innerHTML=e.fullName,a.querySelector("#artist-picture").src="./assets/img/artists/".concat(e.picture);for(var s=0;s<e.roles.length;++s)a.querySelector("#artist-roles").innerHTML+=t._nls.roles[e.roles[s]],s+1<e.roles.length&&(a.querySelector("#artist-roles").innerHTML+=", ");a.querySelector("#artist-roles").innerHTML+=" ".concat(t._nls.since," ").concat(e.range.split("-")[0]),a.querySelector("#artist-bio").innerHTML=e.bio[t._lang],a.querySelector("#close-modal-button").innerHTML=t._nls.close,n.appendChild(a),requestAnimationFrame((function(){return n.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))}},{key:"_pastMembersModal",value:function(e){var t=this,n=document.getElementById("modal-overlay");fetch("assets/html/pastmembersmodal.html").then((function(r){n.style.display="flex",r.text().then((function(r){var a=document.createRange().createContextualFragment(r);a.querySelector("#modal-title").innerHTML=t._nls.pastMembers;for(var s=a.querySelector("#past-members-container"),i=0;i<e.length;++i){var l=document.createElement("DIV");l.classList.add("past-member");for(var o="",c=0;c<e[i].roles.length;++c)o+=t._nls.roles[e[i].roles[c]],c+1<e[i].roles.length&&(o+=", ");o+=" ".concat(t._nls.from," ").concat(e[i].range.split("-")[0]," ").concat(t._nls.to," ").concat(e[i].range.split("-")[1]),l.innerHTML='\n          <div><img src="./assets/img/artists/'.concat(e[i].picture,'"><i>© ').concat(e[i].pictureCredit,'</i></div>\n          <div class="past-member-infos">\n            <span><h3>').concat(e[i].fullName,"</h3> – <i>").concat(o,"</i></span>\n            <p>").concat(e[i].bio[t._lang],"</p>\n          </div>\n          "),s.appendChild(l)}a.querySelector("#close-modal-button").innerHTML=t._nls.close,n.appendChild(a),setTimeout((function(){var e=new window.ScrollBar({target:n.querySelector("#past-members-container"),style:{color:t._band.styles.mainColor}});requestAnimationFrame((function(){e.updateScrollbar()}))}),100),requestAnimationFrame((function(){return n.style.opacity=1}))}))})).catch((function(e){return console.error(e)}))}},{key:"_closeModal",value:function(e){if("modal-overlay"===e.originalTarget.id||"close-modal"===e.originalTarget.className){var t=document.getElementById("modal-overlay");"flex"===t.style.display&&(t.style.opacity=0,setTimeout((function(){t.innerHTML="",t.style=""}),400))}}},{key:"_getReleaseLink",value:function(e){for(var t="",n=0;n<e.length;++n)if(""!==e[n].url&&(t=e[n].url,"youtube"===e[n].type))return e[n].url;return t}},{key:"_openReleaseVideo",value:function(e){window.open(e,"_blank").focus()}},{key:"_buildReleaseDate",value:function(e){var t=e.split("-");return"en"===this._lang?"".concat(this._nls.months[t[1]-1]," ").concat(t[0].replace(/^0+/,""),", ").concat(t[2]):"".concat(t[0].replace(/^0+/,"")," ").concat(this._nls.months[t[1]-1]," ").concat(t[2])}},{key:"_buildTrackCredits",value:function(e){for(var t="",n=0;n<e.length;++n)t+="<h3>".concat(n+1,". ").concat(e[n].title," – ").concat(e[n].duration,"</h3><p>"),""!==e[n].composer&&(t+="<i>".concat(this._nls.composer,"</i> : ").concat(e[n].composer,"<br>")),""!==e[n].author&&(t+="<i>".concat(this._nls.author,"</i> : ").concat(e[n].author)),t+="</p>";return t}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.BW=t.default}();