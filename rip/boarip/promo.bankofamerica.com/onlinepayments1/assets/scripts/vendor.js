/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/*! Video.js v4.4.3 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function() {
    var b = void 0,
        f = !0,
        h = null,
        l = !1;

    function m() {
        return function() {}
    }

    function p(a) {
        return function() {
            return this[a]
        }
    }

    function r(a) {
        return function() {
            return a
        }
    }
    var t;
    document.createElement("video");
    document.createElement("audio");
    document.createElement("track");

    function u(a, c, d) {
        if ("string" === typeof a) {
            0 === a.indexOf("#") && (a = a.slice(1));
            if (u.va[a]) return u.va[a];
            a = u.u(a)
        }
        if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return a.player || new u.Player(a, c, d)
    }
    var videojs = u;
    window.Wd = window.Xd = u;
    u.Rb = "4.4";
    u.Ec = "https:" == document.location.protocol ? "https://" : "http://";
    u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
    };
    "GENERATED_CDN_VSN" !== u.Rb && (videojs.options.flash.swf = u.Ec + "vjs.zencdn.net/" + u.Rb + "/video-js.swf");
    u.va = {};
    "function" === typeof define && define.amd ? define([], function() {
        return videojs
    }) : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
    u.ka = u.CoreObject = m();
    u.ka.extend = function(a) {
        var c, d;
        a = a || {};
        c = a.init || a.h || this.prototype.init || this.prototype.h || m();
        d = function() {
            c.apply(this, arguments)
        };
        d.prototype = u.k.create(this.prototype);
        d.prototype.constructor = d;
        d.extend = u.ka.extend;
        d.create = u.ka.create;
        for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
        return d
    };
    u.ka.create = function() {
        var a = u.k.create(this.prototype);
        this.apply(a, arguments);
        return a
    };
    u.d = function(a, c, d) {
        var e = u.getData(a);
        e.z || (e.z = {});
        e.z[c] || (e.z[c] = []);
        d.s || (d.s = u.s++);
        e.z[c].push(d);
        e.U || (e.disabled = l, e.U = function(c) {
            if (!e.disabled) {
                c = u.ic(c);
                var d = e.z[c.type];
                if (d)
                    for (var d = d.slice(0), k = 0, q = d.length; k < q && !c.pc(); k++) d[k].call(a, c)
            }
        });
        1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.U, l) : document.attachEvent && a.attachEvent("on" + c, e.U))
    };
    u.o = function(a, c, d) {
        if (u.mc(a)) {
            var e = u.getData(a);
            if (e.z)
                if (c) {
                    var g = e.z[c];
                    if (g) {
                        if (d) {
                            if (d.s)
                                for (e = 0; e < g.length; e++) g[e].s === d.s && g.splice(e--, 1)
                        } else e.z[c] = [];
                        u.ec(a, c)
                    }
                } else
                    for (g in e.z) c = g, e.z[c] = [], u.ec(a, c)
        }
    };
    u.ec = function(a, c) {
        var d = u.getData(a);
        0 === d.z[c].length && (delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.U, l) : document.detachEvent && a.detachEvent("on" + c, d.U));
        u.Ab(d.z) && (delete d.z, delete d.U, delete d.disabled);
        u.Ab(d) && u.tc(a)
    };
    u.ic = function(a) {
        function c() {
            return f
        }

        function d() {
            return l
        }
        if (!a || !a.Bb) {
            var e = a || window.event;
            a = {};
            for (var g in e) "layerX" !== g && ("layerY" !== g && "keyboardEvent.keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]));
            a.target || (a.target = a.srcElement || document);
            a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            a.preventDefault = function() {
                e.preventDefault && e.preventDefault();
                a.returnValue = l;
                a.zb = c
            };
            a.zb = d;
            a.stopPropagation = function() {
                e.stopPropagation && e.stopPropagation();
                a.cancelBubble = f;
                a.Bb = c
            };
            a.Bb = d;
            a.stopImmediatePropagation = function() {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                a.pc = c;
                a.stopPropagation()
            };
            a.pc = d;
            if (a.clientX != h) {
                g = document.documentElement;
                var j = document.body;
                a.pageX = a.clientX + (g && g.scrollLeft || j && j.scrollLeft || 0) - (g && g.clientLeft || j && j.clientLeft || 0);
                a.pageY = a.clientY + (g && g.scrollTop || j && j.scrollTop || 0) - (g && g.clientTop || j && j.clientTop || 0)
            }
            a.which = a.charCode || a.keyCode;
            a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 :
                0)
        }
        return a
    };
    u.j = function(a, c) {
        var d = u.mc(a) ? u.getData(a) : {},
            e = a.parentNode || a.ownerDocument;
        "string" === typeof c && (c = {
            type: c,
            target: a
        });
        c = u.ic(c);
        d.U && d.U.call(a, c);
        if (e && !c.Bb() && c.bubbles !== l) u.j(e, c);
        else if (!e && !c.zb() && (d = u.getData(c.target), c.target[c.type])) {
            d.disabled = f;
            if ("function" === typeof c.target[c.type]) c.target[c.type]();
            d.disabled = l
        }
        return !c.zb()
    };
    u.T = function(a, c, d) {
        function e() {
            u.o(a, c, e);
            d.apply(this, arguments)
        }
        e.s = d.s = d.s || u.s++;
        u.d(a, c, e)
    };
    var v = Object.prototype.hasOwnProperty;
    u.e = function(a, c) {
        var d, e;
        d = document.createElement(a || "div");
        for (e in c) v.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : d[e] = c[e]);
        return d
    };
    u.Z = function(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    };
    u.k = {};
    u.k.create = Object.create || function(a) {
        function c() {}
        c.prototype = a;
        return new c
    };
    u.k.ra = function(a, c, d) {
        for (var e in a) v.call(a, e) && c.call(d || this, e, a[e])
    };
    u.k.B = function(a, c) {
        if (!c) return a;
        for (var d in c) v.call(c, d) && (a[d] = c[d]);
        return a
    };
    u.k.Wc = function(a, c) {
        var d, e, g;
        a = u.k.copy(a);
        for (d in c) v.call(c, d) && (e = a[d], g = c[d], a[d] = u.k.Ma(e) && u.k.Ma(g) ? u.k.Wc(e, g) : c[d]);
        return a
    };
    u.k.copy = function(a) {
        return u.k.B({}, a)
    };
    u.k.Ma = function(a) {
        return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
    };
    u.bind = function(a, c, d) {
        function e() {
            return c.apply(a, arguments)
        }
        c.s || (c.s = u.s++);
        e.s = d ? d + "_" + c.s : c.s;
        return e
    };
    u.pa = {};
    u.s = 1;
    u.expando = "vdata" + (new Date).getTime();
    u.getData = function(a) {
        var c = a[u.expando];
        c || (c = a[u.expando] = u.s++, u.pa[c] = {});
        return u.pa[c]
    };
    u.mc = function(a) {
        a = a[u.expando];
        return !(!a || u.Ab(u.pa[a]))
    };
    u.tc = function(a) {
        var c = a[u.expando];
        if (c) {
            delete u.pa[c];
            try {
                delete a[u.expando]
            } catch (d) {
                a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
            }
        }
    };
    u.Ab = function(a) {
        for (var c in a)
            if (a[c] !== h) return l;
        return f
    };
    u.n = function(a, c) {
        -1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c)
    };
    u.t = function(a, c) {
        var d, e;
        if (-1 != a.className.indexOf(c)) {
            d = a.className.split(" ");
            for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
            a.className = d.join(" ")
        }
    };
    u.W = u.e("video");
    u.I = navigator.userAgent;
    u.Kc = /iPhone/i.test(u.I);
    u.Jc = /iPad/i.test(u.I);
    u.Lc = /iPod/i.test(u.I);
    u.Ic = u.Kc || u.Jc || u.Lc;
    var aa = u,
        w;
    var x = u.I.match(/OS (\d+)_/i);
    w = x && x[1] ? x[1] : b;
    aa.Id = w;
    u.Hc = /Android/i.test(u.I);
    var ba = u,
        y;
    var z = u.I.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
        A, B;
    z ? (A = z[1] && parseFloat(z[1]), B = z[2] && parseFloat(z[2]), y = A && B ? parseFloat(z[1] + "." + z[2]) : A ? A : h) : y = h;
    ba.Fc = y;
    u.Mc = u.Hc && /webkit/i.test(u.I) && 2.3 > u.Fc;
    u.Ub = /Firefox/i.test(u.I);
    u.Jd = /Chrome/i.test(u.I);
    u.$b = !!("ontouchstart" in window || window.Gc && document instanceof window.Gc);
    u.wb = function(a) {
        var c, d, e, g;
        c = {};
        if (a && a.attributes && 0 < a.attributes.length) {
            d = a.attributes;
            for (var j = d.length - 1; 0 <= j; j--) {
                e = d[j].name;
                g = d[j].value;
                if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== h ? f : l;
                c[e] = g
            }
        }
        return c
    };
    u.Nd = function(a, c) {
        var d = "";
        document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
        return d
    };
    u.yb = function(a, c) {
        c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
    };
    u.Ob = {};
    u.u = function(a) {
        0 === a.indexOf("#") && (a = a.slice(1));
        return document.getElementById(a)
    };
    u.ta = function(a, c) {
        c = c || a;
        var d = Math.floor(a % 60),
            e = Math.floor(a / 60 % 60),
            g = Math.floor(a / 3600),
            j = Math.floor(c / 60 % 60),
            k = Math.floor(c / 3600);
        if (isNaN(a) || Infinity === a) g = e = d = "-";
        g = 0 < g || 0 < k ? g + ":" : "";
        return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
    };
    u.Sc = function() {
        document.body.focus();
        document.onselectstart = r(l)
    };
    u.Dd = function() {
        document.onselectstart = r(f)
    };
    u.trim = function(a) {
        return (a + "").replace(/^\s+|\s+$/g, "")
    };
    u.round = function(a, c) {
        c || (c = 0);
        return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
    };
    u.sb = function(a, c) {
        return {
            length: 1,
            start: function() {
                return a
            },
            end: function() {
                return c
            }
        }
    };
    u.get = function(a, c, d) {
        var e, g;
        "undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {}
            throw Error("This browser does not support XMLHttpRequest.");
        });
        g = new XMLHttpRequest;
        try {
            g.open("GET", a)
        } catch (j) {
            d(j)
        }
        e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
        g.onreadystatechange = function() {
            4 === g.readyState && (200 === g.status || e && 0 === g.status ? c(g.responseText) : d && d())
        };
        try {
            g.send()
        } catch (k) {
            d && d(k)
        }
    };
    u.vd = function(a) {
        try {
            var c = window.localStorage || l;
            c && (c.volume = a)
        } catch (d) {
            22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d)
        }
    };
    u.kc = function(a) {
        a.match(/^https?:\/\//) || (a = u.e("div", {
            innerHTML: '<a href="' + a + '">x</a>'
        }).firstChild.href);
        return a
    };
    u.log = function() {
        u.log.history = u.log.history || [];
        u.log.history.push(arguments);
        window.console && window.console.log(Array.prototype.slice.call(arguments))
    };
    u.cd = function(a) {
        var c, d;
        a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
        if (!c) return {
            left: 0,
            top: 0
        };
        a = document.documentElement;
        d = document.body;
        return {
            left: c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0),
            top: c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0)
        }
    };
    u.ja = {};
    u.ja.Fb = function(a, c) {
        var d, e, g;
        a = u.k.copy(a);
        for (d in c) c.hasOwnProperty(d) && (e = a[d], g = c[d], a[d] = u.k.Ma(e) && u.k.Ma(g) ? u.ja.Fb(e, g) : c[d]);
        return a
    };
    u.b = u.ka.extend({
        h: function(a, c, d) {
            this.c = a;
            this.g = u.k.copy(this.g);
            c = this.options(c);
            this.Q = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.s++);
            this.kd = c.name || h;
            this.a = c.el || this.e();
            this.J = [];
            this.Ia = {};
            this.Ja = {};
            this.nc();
            this.H(d);
            if (c.uc !== l) {
                var e, g;
                e = u.bind(this.C(), this.C().reportUserActivity);
                this.d("touchstart", function() {
                    e();
                    clearInterval(g);
                    g = setInterval(e, 250)
                });
                a = function() {
                    e();
                    clearInterval(g)
                };
                this.d("touchmove", e);
                this.d("touchend", a);
                this.d("touchcancel", a)
            }
        }
    });
    t = u.b.prototype;
    t.dispose = function() {
        this.j({
            type: "dispose",
            bubbles: l
        });
        if (this.J)
            for (var a = this.J.length - 1; 0 <= a; a--) this.J[a].dispose && this.J[a].dispose();
        this.Ja = this.Ia = this.J = h;
        this.o();
        this.a.parentNode && this.a.parentNode.removeChild(this.a);
        u.tc(this.a);
        this.a = h
    };
    t.c = f;
    t.C = p("c");
    t.options = function(a) {
        return a === b ? this.g : this.g = u.ja.Fb(this.g, a)
    };
    t.e = function(a, c) {
        return u.e(a, c)
    };
    t.u = p("a");
    t.Ka = function() {
        return this.F || this.a
    };
    t.id = p("Q");
    t.name = p("kd");
    t.children = p("J");
    t.ed = function(a) {
        return this.Ia[a]
    };
    t.fa = function(a) {
        return this.Ja[a]
    };
    t.Y = function(a, c) {
        var d, e;
        "string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || u.Z(e), c.name = e, d = new window.videojs[d](this.c || this, c)) : d = a;
        this.J.push(d);
        "function" === typeof d.id && (this.Ia[d.id()] = d);
        (e = e || d.name && d.name()) && (this.Ja[e] = d);
        "function" === typeof d.el && d.el() && this.Ka().appendChild(d.el());
        return d
    };
    t.removeChild = function(a) {
        "string" === typeof a && (a = this.fa(a));
        if (a && this.J) {
            for (var c = l, d = this.J.length - 1; 0 <= d; d--)
                if (this.J[d] === a) {
                    c = f;
                    this.J.splice(d, 1);
                    break
                }
            c && (this.Ia[a.id] = h, this.Ja[a.name] = h, (c = a.u()) && c.parentNode === this.Ka() && this.Ka().removeChild(a.u()))
        }
    };
    t.nc = function() {
        var a = this.g;
        if (a && a.children) {
            var c = this;
            u.k.ra(a.children, function(a, e) {
                e !== l && !e.loadEvent && (c[a] = c.Y(a, e))
            })
        }
    };
    t.P = r("");
    t.d = function(a, c) {
        u.d(this.a, a, u.bind(this, c));
        return this
    };
    t.o = function(a, c) {
        u.o(this.a, a, c);
        return this
    };
    t.T = function(a, c) {
        u.T(this.a, a, u.bind(this, c));
        return this
    };
    t.j = function(a, c) {
        u.j(this.a, a, c);
        return this
    };
    t.H = function(a) {
        a && (this.aa ? a.call(this) : (this.Ta === b && (this.Ta = []), this.Ta.push(a)));
        return this
    };
    t.Wa = function() {
        this.aa = f;
        var a = this.Ta;
        if (a && 0 < a.length) {
            for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
            this.Ta = [];
            this.j("ready")
        }
    };
    t.n = function(a) {
        u.n(this.a, a);
        return this
    };
    t.t = function(a) {
        u.t(this.a, a);
        return this
    };
    t.show = function() {
        this.a.style.display = "block";
        return this
    };
    t.D = function() {
        this.a.style.display = "none";
        return this
    };

    function D(a) {
        a.t("vjs-lock-showing")
    }
    t.disable = function() {
        this.D();
        this.show = m()
    };
    t.width = function(a, c) {
        return E(this, "width", a, c)
    };
    t.height = function(a, c) {
        return E(this, "height", a, c)
    };
    t.Yc = function(a, c) {
        return this.width(a, f).height(c)
    };

    function E(a, c, d, e) {
        if (d !== b) return a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.j("resize"), a;
        if (!a.a) return 0;
        d = a.a.style[c];
        e = d.indexOf("px");
        return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.Z(c)], 10)
    }
    u.q = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            var d = l;
            this.d("touchstart", function(a) {
                a.preventDefault();
                d = f
            });
            this.d("touchmove", function() {
                d = l
            });
            var e = this;
            this.d("touchend", function(a) {
                d && e.p(a);
                a.preventDefault()
            });
            this.d("click", this.p);
            this.d("focus", this.Pa);
            this.d("blur", this.Oa)
        }
    });
    t = u.q.prototype;
    t.e = function(a, c) {
        c = u.k.B({
            className: this.P(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "</span></div>",
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, c);
        return u.b.prototype.e.call(this, a, c)
    };
    t.P = function() {
        return "vjs-control " + u.b.prototype.P.call(this)
    };
    t.p = m();
    t.Pa = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    };
    t.ba = function(a) {
        if (32 == a.which || 13 == a.which) a.preventDefault(), this.p()
    };
    t.Oa = function() {
        u.o(document, "keyup", u.bind(this, this.ba))
    };
    u.N = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            this.Rc = this.fa(this.g.barName);
            this.handle = this.fa(this.g.handleName);
            a.d(this.rc, u.bind(this, this.update));
            this.d("mousedown", this.Qa);
            this.d("touchstart", this.Qa);
            this.d("focus", this.Pa);
            this.d("blur", this.Oa);
            this.d("click", this.p);
            this.c.d("controlsvisible", u.bind(this, this.update));
            a.H(u.bind(this, this.update));
            this.O = {}
        }
    });
    t = u.N.prototype;
    t.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider";
        c = u.k.B({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, c);
        return u.b.prototype.e.call(this, a, c)
    };
    t.Qa = function(a) {
        a.preventDefault();
        u.Sc();
        this.O.move = u.bind(this, this.Hb);
        this.O.end = u.bind(this, this.Ib);
        u.d(document, "mousemove", this.O.move);
        u.d(document, "mouseup", this.O.end);
        u.d(document, "touchmove", this.O.move);
        u.d(document, "touchend", this.O.end);
        this.Hb(a)
    };
    t.Ib = function() {
        u.Dd();
        u.o(document, "mousemove", this.O.move, l);
        u.o(document, "mouseup", this.O.end, l);
        u.o(document, "touchmove", this.O.move, l);
        u.o(document, "touchend", this.O.end, l);
        this.update()
    };
    t.update = function() {
        if (this.a) {
            var a, c = this.xb(),
                d = this.handle,
                e = this.Rc;
            isNaN(c) && (c = 0);
            a = c;
            if (d) {
                a = this.a.offsetWidth;
                var g = d.u().offsetWidth;
                a = g ? g / a : 0;
                c *= 1 - a;
                a = c + a / 2;
                d.u().style.left = u.round(100 * c, 2) + "%"
            }
            e.u().style.width = u.round(100 * a, 2) + "%"
        }
    };

    function F(a, c) {
        var d, e, g, j;
        d = a.a;
        e = u.cd(d);
        j = g = d.offsetWidth;
        d = a.handle;
        if (a.g.Ed) return j = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.u().offsetHeight, j += d / 2, g -= d), Math.max(0, Math.min(1, (j - e + g) / g));
        g = e.left;
        e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
        d && (d = d.u().offsetWidth, g += d / 2, j -= d);
        return Math.max(0, Math.min(1, (e - g) / j))
    }
    t.Pa = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    };
    t.ba = function(a) {
        37 == a.which ? (a.preventDefault(), this.xc()) : 39 == a.which && (a.preventDefault(), this.yc())
    };
    t.Oa = function() {
        u.o(document, "keyup", u.bind(this, this.ba))
    };
    t.p = function(a) {
        a.stopImmediatePropagation();
        a.preventDefault()
    };
    u.V = u.b.extend();
    u.V.prototype.defaultValue = 0;
    u.V.prototype.e = function(a, c) {
        c = c || {};
        c.className += " vjs-slider-handle";
        c = u.k.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, c);
        return u.b.prototype.e.call(this, "div", c)
    };
    u.la = u.b.extend();

    function ca(a, c) {
        a.Y(c);
        c.d("click", u.bind(a, function() {
            D(this)
        }))
    }
    u.la.prototype.e = function() {
        var a = this.options().Uc || "ul";
        this.F = u.e(a, {
            className: "vjs-menu-content"
        });
        a = u.b.prototype.e.call(this, "div", {
            append: this.F,
            className: "vjs-menu"
        });
        a.appendChild(this.F);
        u.d(a, "click", function(a) {
            a.preventDefault();
            a.stopImmediatePropagation()
        });
        return a
    };
    u.M = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c);
            this.selected(c.selected)
        }
    });
    u.M.prototype.e = function(a, c) {
        return u.q.prototype.e.call(this, "li", u.k.B({
            className: "vjs-menu-item",
            innerHTML: this.g.label
        }, c))
    };
    u.M.prototype.p = function() {
        this.selected(f)
    };
    u.M.prototype.selected = function(a) {
        a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
    };
    u.R = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c);
            this.ua = this.La();
            this.Y(this.ua);
            this.K && 0 === this.K.length && this.D();
            this.d("keyup", this.ba);
            this.a.setAttribute("aria-haspopup", f);
            this.a.setAttribute("role", "button")
        }
    });
    t = u.R.prototype;
    t.na = l;
    t.La = function() {
        var a = new u.la(this.c);
        this.options().title && a.u().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            Bd: -1
        }));
        if (this.K = this.createItems())
            for (var c = 0; c < this.K.length; c++) ca(a, this.K[c]);
        return a
    };
    t.qa = m();
    t.P = function() {
        return this.className + " vjs-menu-button " + u.q.prototype.P.call(this)
    };
    t.Pa = m();
    t.Oa = m();
    t.p = function() {
        this.T("mouseout", u.bind(this, function() {
            D(this.ua);
            this.a.blur()
        }));
        this.na ? G(this) : H(this)
    };
    t.ba = function(a) {
        a.preventDefault();
        32 == a.which || 13 == a.which ? this.na ? G(this) : H(this) : 27 == a.which && this.na && G(this)
    };

    function H(a) {
        a.na = f;
        a.ua.n("vjs-lock-showing");
        a.a.setAttribute("aria-pressed", f);
        a.K && 0 < a.K.length && a.K[0].u().focus()
    }

    function G(a) {
        a.na = l;
        D(a.ua);
        a.a.setAttribute("aria-pressed", l)
    }
    u.Player = u.b.extend({
        h: function(a, c, d) {
            this.L = a;
            a.id = a.id || "vjs_video_" + u.s++;
            c = u.k.B(da(a), c);
            this.v = {};
            this.sc = c.poster;
            this.rb = c.controls;
            a.controls = l;
            c.uc = l;
            u.b.call(this, this, c, d);
            this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
            this.T("play", function(a) {
                u.j(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
            });
            this.d("ended", this.ld);
            this.d("play", this.Kb);
            this.d("firstplay", this.md);
            this.d("pause", this.Jb);
            this.d("progress", this.od);
            this.d("durationchange", this.qc);
            this.d("error", this.Gb);
            this.d("fullscreenchange", this.nd);
            u.va[this.Q] = this;
            c.plugins && u.k.ra(c.plugins, function(a, c) {
                this[a](c)
            }, this);
            var e, g, j, k;
            e = u.bind(this, this.reportUserActivity);
            this.d("mousedown", function() {
                e();
                clearInterval(g);
                g = setInterval(e, 250)
            });
            this.d("mousemove", e);
            this.d("mouseup", function() {
                e();
                clearInterval(g)
            });
            this.d("keydown", e);
            this.d("keyup", e);
            j = setInterval(u.bind(this, function() {
                this.ia && (this.ia = l, this.userActive(f),
                    clearTimeout(k), k = setTimeout(u.bind(this, function() {
                        this.ia || this.userActive(l)
                    }), 2E3))
            }), 250);
            this.d("dispose", function() {
                clearInterval(j);
                clearTimeout(k)
            })
        }
    });
    t = u.Player.prototype;
    t.g = u.options;
    t.dispose = function() {
        this.j("dispose");
        this.o("dispose");
        u.va[this.Q] = h;
        this.L && this.L.player && (this.L.player = h);
        this.a && this.a.player && (this.a.player = h);
        clearInterval(this.Sa);
        this.wa();
        this.i && this.i.dispose();
        u.b.prototype.dispose.call(this)
    };

    function da(a) {
        var c = {
            sources: [],
            tracks: []
        };
        u.k.B(c, u.wb(a));
        if (a.hasChildNodes()) {
            var d, e, g, j;
            a = a.childNodes;
            g = 0;
            for (j = a.length; g < j; g++) d = a[g], e = d.nodeName.toLowerCase(), "source" === e ? c.sources.push(u.wb(d)) : "track" === e && c.tracks.push(u.wb(d))
        }
        return c
    }
    t.e = function() {
        var a = this.a = u.b.prototype.e.call(this, "div"),
            c = this.L;
        c.removeAttribute("width");
        c.removeAttribute("height");
        if (c.hasChildNodes()) {
            var d, e, g, j, k;
            d = c.childNodes;
            e = d.length;
            for (k = []; e--;) g = d[e], j = g.nodeName.toLowerCase(), "track" === j && k.push(g);
            for (d = 0; d < k.length; d++) c.removeChild(k[d])
        }
        a.id = c.id;
        a.className = c.className;
        c.id += "_html5_api";
        c.className = "vjs-tech";
        c.player = a.player = this;
        this.n("vjs-paused");
        this.width(this.g.width, f);
        this.height(this.g.height, f);
        c.parentNode && c.parentNode.insertBefore(a,
            c);
        u.yb(c, a);
        return a
    };

    function I(a, c, d) {
        a.i && (a.aa = l, a.i.dispose(), a.Db && (a.Db = l, clearInterval(a.Sa)), a.Eb && J(a), a.i = l);
        "Html5" !== c && a.L && (u.l.gc(a.L), a.L = h);
        a.xa = c;
        a.aa = l;
        var e = u.k.B({
            source: d,
            parentEl: a.a
        }, a.g[c.toLowerCase()]);
        d && (d.src == a.v.src && 0 < a.v.currentTime && (e.startTime = a.v.currentTime), a.v.src = d.src);
        a.i = new window.videojs[c](a, e);
        a.i.H(function() {
            this.c.Wa();
            if (!this.m.progressEvents) {
                var a = this.c;
                a.Db = f;
                a.Sa = setInterval(u.bind(a, function() {
                    this.v.mb < this.buffered().end(0) ? this.j("progress") : 1 == this.bufferedPercent() &&
                        (clearInterval(this.Sa), this.j("progress"))
                }), 500);
                a.i.T("progress", function() {
                    this.m.progressEvents = f;
                    var a = this.c;
                    a.Db = l;
                    clearInterval(a.Sa)
                })
            }
            this.m.timeupdateEvents || (a = this.c, a.Eb = f, a.d("play", a.Bc), a.d("pause", a.wa), a.i.T("timeupdate", function() {
                this.m.timeupdateEvents = f;
                J(this.c)
            }))
        })
    }

    function J(a) {
        a.Eb = l;
        a.wa();
        a.o("play", a.Bc);
        a.o("pause", a.wa)
    }
    t.Bc = function() {
        this.fc && this.wa();
        this.fc = setInterval(u.bind(this, function() {
            this.j("timeupdate")
        }), 250)
    };
    t.wa = function() {
        clearInterval(this.fc)
    };
    t.Kb = function() {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing")
    };
    t.md = function() {
        this.g.starttime && this.currentTime(this.g.starttime);
        this.n("vjs-has-started")
    };
    t.Jb = function() {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused")
    };
    t.od = function() {
        1 == this.bufferedPercent() && this.j("loadedalldata")
    };
    t.ld = function() {
        this.g.loop && (this.currentTime(0), this.play())
    };
    t.qc = function() {
        var a = K(this, "duration");
        a && this.duration(a)
    };
    t.nd = function() {
        this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
    };
    t.Gb = function(a) {
        u.log("Video Error", a)
    };

    function L(a, c, d) {
        if (a.i && !a.i.aa) a.i.H(function() {
            this[c](d)
        });
        else try {
            a.i[c](d)
        } catch (e) {
            throw u.log(e), e;
        }
    }

    function K(a, c) {
        if (a.i && a.i.aa) try {
            return a.i[c]()
        } catch (d) {
            throw a.i[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.xa + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.xa + " playback technology element.", d), a.i.aa = l) : u.log(d), d;
        }
    }
    t.play = function() {
        L(this, "play");
        return this
    };
    t.pause = function() {
        L(this, "pause");
        return this
    };
    t.paused = function() {
        return K(this, "paused") === l ? l : f
    };
    t.currentTime = function(a) {
        return a !== b ? (L(this, "setCurrentTime", a), this.Eb && this.j("timeupdate"), this) : this.v.currentTime = K(this, "currentTime") || 0
    };
    t.duration = function(a) {
        if (a !== b) return this.v.duration = parseFloat(a), this;
        this.v.duration === b && this.qc();
        return this.v.duration || 0
    };
    t.buffered = function() {
        var a = K(this, "buffered"),
            c = a.length - 1,
            d = this.v.mb = this.v.mb || 0;
        a && (0 <= c && a.end(c) !== d) && (d = a.end(c), this.v.mb = d);
        return u.sb(0, d)
    };
    t.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    };
    t.volume = function(a) {
        if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))), this.v.volume = a, L(this, "setVolume", a), u.vd(a), this;
        a = parseFloat(K(this, "volume"));
        return isNaN(a) ? 1 : a
    };
    t.muted = function(a) {
        return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l
    };
    t.Va = function() {
        return K(this, "supportsFullScreen") || l
    };
    t.oc = l;
    t.isFullScreen = function(a) {
        return a !== b ? (this.oc = a, this) : this.oc
    };
    t.requestFullScreen = function() {
        var a = u.Ob.requestFullScreen;
        this.isFullScreen(f);
        a ? (u.d(document, a.ub, u.bind(this, function(c) {
            this.isFullScreen(document[a.isFullScreen]);
            this.isFullScreen() === l && u.o(document, a.ub, arguments.callee);
            this.j("fullscreenchange")
        })), this.a[a.vc]()) : this.i.Va() ? L(this, "enterFullScreen") : (this.fd = f, this.Zc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.jc)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"),
            this.j("enterFullWindow"), this.j("fullscreenchange"));
        return this
    };
    t.cancelFullScreen = function() {
        var a = u.Ob.requestFullScreen;
        this.isFullScreen(l);
        if (a) document[a.ob]();
        else this.i.Va() ? L(this, "exitFullScreen") : (M(this), this.j("fullscreenchange"));
        return this
    };
    t.jc = function(a) {
        27 === a.keyCode && (this.isFullScreen() === f ? this.cancelFullScreen() : M(this))
    };

    function M(a) {
        a.fd = l;
        u.o(document, "keydown", a.jc);
        document.documentElement.style.overflow = a.Zc;
        u.t(document.body, "vjs-full-window");
        a.j("exitFullWindow")
    }
    t.src = function(a) {
        if (a instanceof Array) {
            var c;
            a: {
                c = a;
                for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
                    var g = u.Z(e[d]),
                        j = window.videojs[g];
                    if (j.isSupported())
                        for (var k = 0, q = c; k < q.length; k++) {
                            var n = q[k];
                            if (j.canPlaySource(n)) {
                                c = {
                                    source: n,
                                    i: g
                                };
                                break a
                            }
                        }
                }
                c = l
            }
            c ? (a = c.source, c = c.i, c == this.xa ? this.src(a) : I(this, c, a)) : this.a.appendChild(u.e("p", {
                innerHTML: this.options().notSupportedMessage
            }))
        } else a instanceof Object ? window.videojs[this.xa].canPlaySource(a) ? this.src(a.src) : this.src([a]) : (this.v.src = a, this.aa ?
            (L(this, "src", a), "auto" == this.g.preload && this.load(), this.g.autoplay && this.play()) : this.H(function() {
                this.src(a)
            }));
        return this
    };
    t.load = function() {
        L(this, "load");
        return this
    };
    t.currentSrc = function() {
        return K(this, "currentSrc") || this.v.src || ""
    };
    t.Ra = function(a) {
        return a !== b ? (L(this, "setPreload", a), this.g.preload = a, this) : K(this, "preload")
    };
    t.autoplay = function(a) {
        return a !== b ? (L(this, "setAutoplay", a), this.g.autoplay = a, this) : K(this, "autoplay")
    };
    t.loop = function(a) {
        return a !== b ? (L(this, "setLoop", a), this.g.loop = a, this) : K(this, "loop")
    };
    t.poster = function(a) {
        if (a === b) return this.sc;
        this.sc = a;
        L(this, "setPoster", a);
        this.j("posterchange")
    };
    t.controls = function(a) {
        return a !== b ? (a = !!a, this.rb !== a && ((this.rb = a) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.j("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.j("controlsdisabled"))), this) : this.rb
    };
    u.Player.prototype.Qb;
    t = u.Player.prototype;
    t.usingNativeControls = function(a) {
        return a !== b ? (a = !!a, this.Qb !== a && ((this.Qb = a) ? (this.n("vjs-using-native-controls"), this.j("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.j("usingcustomcontrols"))), this) : this.Qb
    };
    t.error = function() {
        return K(this, "error")
    };
    t.ended = function() {
        return K(this, "ended")
    };
    t.seeking = function() {
        return K(this, "seeking")
    };
    t.ia = f;
    t.reportUserActivity = function() {
        this.ia = f
    };
    t.Pb = f;
    t.userActive = function(a) {
        return a !== b ? (a = !!a, a !== this.Pb && ((this.Pb = a) ? (this.ia = f, this.t("vjs-user-inactive"), this.n("vjs-user-active"), this.j("useractive")) : (this.ia = l, this.i.T("mousemove", function(a) {
            a.stopPropagation();
            a.preventDefault()
        }), this.t("vjs-user-active"), this.n("vjs-user-inactive"), this.j("userinactive"))), this) : this.Pb
    };
    var N, O, P;
    P = document.createElement("div");
    O = {};
    P.Kd !== b ? (O.vc = "requestFullscreen", O.ob = "exitFullscreen", O.ub = "fullscreenchange", O.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (N = "moz", O.isFullScreen = N + "FullScreen") : (N = "webkit", O.isFullScreen = N + "IsFullScreen"), P[N + "RequestFullScreen"] && (O.vc = N + "RequestFullScreen", O.ob = N + "CancelFullScreen"), O.ub = N + "fullscreenchange");
    document[O.ob] && (u.Ob.requestFullScreen = O);
    u.Ca = u.b.extend();
    u.Ca.prototype.g = {
        Pd: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    };
    u.Ca.prototype.e = function() {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    };
    u.Xb = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c);
            a.d("play", u.bind(this, this.Kb));
            a.d("pause", u.bind(this, this.Jb))
        }
    });
    t = u.Xb.prototype;
    t.oa = "Play";
    t.P = function() {
        return "vjs-play-control " + u.q.prototype.P.call(this)
    };
    t.p = function() {
        this.c.paused() ? this.c.play() : this.c.pause()
    };
    t.Kb = function() {
        u.t(this.a, "vjs-paused");
        u.n(this.a, "vjs-playing");
        this.a.children[0].children[0].innerHTML = "Pause"
    };
    t.Jb = function() {
        u.t(this.a, "vjs-playing");
        u.n(this.a, "vjs-paused");
        this.a.children[0].children[0].innerHTML = "Play"
    };
    u.$a = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.da))
        }
    });
    u.$a.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        this.F = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(this.F);
        return a
    };
    u.$a.prototype.da = function() {
        var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.F.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.ta(a, this.c.duration())
    };
    u.ab = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.da))
        }
    });
    u.ab.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        this.F = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(this.F);
        return a
    };
    u.ab.prototype.da = function() {
        var a = this.c.duration();
        a && (this.F.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.ta(a))
    };
    u.bc = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.bc.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    };
    u.gb = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.da))
        }
    });
    u.gb.prototype.e = function() {
        var a = u.b.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        this.F = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        });
        a.appendChild(this.F);
        return a
    };
    u.gb.prototype.da = function() {
        this.c.duration() && (this.F.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.ta(this.c.duration() - this.c.currentTime()))
    };
    u.Da = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c)
        }
    });
    u.Da.prototype.oa = "Fullscreen";
    u.Da.prototype.P = function() {
        return "vjs-fullscreen-control " + u.q.prototype.P.call(this)
    };
    u.Da.prototype.p = function() {
        this.c.isFullScreen() ? (this.c.cancelFullScreen(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.c.requestFullScreen(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    };
    u.fb = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.fb.prototype.g = {
        children: {
            seekBar: {}
        }
    };
    u.fb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    };
    u.Yb = u.N.extend({
        h: function(a, c) {
            u.N.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.za));
            a.H(u.bind(this, this.za))
        }
    });
    t = u.Yb.prototype;
    t.g = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    };
    t.rc = "timeupdate";
    t.e = function() {
        return u.N.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    };
    t.za = function() {
        var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2));
        this.a.setAttribute("aria-valuetext", u.ta(a, this.c.duration()))
    };
    t.xb = function() {
        return this.c.currentTime() / this.c.duration()
    };
    t.Qa = function(a) {
        u.N.prototype.Qa.call(this, a);
        this.c.Ua = f;
        this.Fd = !this.c.paused();
        this.c.pause()
    };
    t.Hb = function(a) {
        a = F(this, a) * this.c.duration();
        a == this.c.duration() && (a -= 0.1);
        this.c.currentTime(a)
    };
    t.Ib = function(a) {
        u.N.prototype.Ib.call(this, a);
        this.c.Ua = l;
        this.Fd && this.c.play()
    };
    t.yc = function() {
        this.c.currentTime(this.c.currentTime() + 5)
    };
    t.xc = function() {
        this.c.currentTime(this.c.currentTime() - 5)
    };
    u.cb = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.d("progress", u.bind(this, this.update))
        }
    });
    u.cb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    };
    u.cb.prototype.update = function() {
        this.a.style && (this.a.style.width = u.round(100 * this.c.bufferedPercent(), 2) + "%")
    };
    u.Wb = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.Wb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    };
    u.Fa = u.V.extend({
        h: function(a, c) {
            u.V.call(this, a, c);
            a.d("timeupdate", u.bind(this, this.da))
        }
    });
    u.Fa.prototype.defaultValue = "00:00";
    u.Fa.prototype.e = function() {
        return u.V.prototype.e.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    };
    u.Fa.prototype.da = function() {
        var a = this.c.Ua ? this.c.v.currentTime : this.c.currentTime();
        this.a.innerHTML = '<span class="vjs-control-text">' + u.ta(a, this.c.duration()) + "</span>"
    };
    u.ib = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.i && (a.i.m && a.i.m.volumeControl === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    });
    u.ib.prototype.g = {
        children: {
            volumeBar: {}
        }
    };
    u.ib.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    };
    u.hb = u.N.extend({
        h: function(a, c) {
            u.N.call(this, a, c);
            a.d("volumechange", u.bind(this, this.za));
            a.H(u.bind(this, this.za));
            setTimeout(u.bind(this, this.update), 0)
        }
    });
    t = u.hb.prototype;
    t.za = function() {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.c.volume(), 2));
        this.a.setAttribute("aria-valuetext", u.round(100 * this.c.volume(), 2) + "%")
    };
    t.g = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    };
    t.rc = "volumechange";
    t.e = function() {
        return u.N.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    };
    t.Hb = function(a) {
        this.c.muted() && this.c.muted(l);
        this.c.volume(F(this, a))
    };
    t.xb = function() {
        return this.c.muted() ? 0 : this.c.volume()
    };
    t.yc = function() {
        this.c.volume(this.c.volume() + 0.1)
    };
    t.xc = function() {
        this.c.volume(this.c.volume() - 0.1)
    };
    u.cc = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c)
        }
    });
    u.cc.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    };
    u.jb = u.V.extend();
    u.jb.prototype.defaultValue = "00:00";
    u.jb.prototype.e = function() {
        return u.V.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    };
    u.ea = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c);
            a.d("volumechange", u.bind(this, this.update));
            a.i && (a.i.m && a.i.m.volumeControl === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    });
    u.ea.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    };
    u.ea.prototype.p = function() {
        this.c.muted(this.c.muted() ? l : f)
    };
    u.ea.prototype.update = function() {
        var a = this.c.volume(),
            c = 3;
        0 === a || this.c.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && (c = 2);
        this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
        for (a = 0; 4 > a; a++) u.t(this.a, "vjs-vol-" + a);
        u.n(this.a, "vjs-vol-" + c)
    };
    u.ma = u.R.extend({
        h: function(a, c) {
            u.R.call(this, a, c);
            a.d("volumechange", u.bind(this, this.update));
            a.i && (a.i.m && a.i.m.Cc === l) && this.n("vjs-hidden");
            a.d("loadstart", u.bind(this, function() {
                a.i.m && a.i.m.Cc === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }));
            this.n("vjs-menu-button")
        }
    });
    u.ma.prototype.La = function() {
        var a = new u.la(this.c, {
                Uc: "div"
            }),
            c = new u.hb(this.c, u.k.B({
                Ed: f
            }, this.g.Yd));
        a.Y(c);
        return a
    };
    u.ma.prototype.p = function() {
        u.ea.prototype.p.call(this);
        u.R.prototype.p.call(this)
    };
    u.ma.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    };
    u.ma.prototype.update = u.ea.prototype.update;
    u.Ea = u.q.extend({
        h: function(a, c) {
            u.q.call(this, a, c);
            a.poster() && this.src(a.poster());
            (!a.poster() || !a.controls()) && this.D();
            a.d("posterchange", u.bind(this, function() {
                this.src(a.poster())
            }));
            a.d("play", u.bind(this, this.D))
        }
    });
    var Q = "backgroundSize" in u.W.style;
    u.Ea.prototype.e = function() {
        var a = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        Q || a.appendChild(u.e("img"));
        return a
    };
    u.Ea.prototype.src = function(a) {
        var c = this.u();
        a !== b && (Q ? c.style.backgroundImage = 'url("' + a + '")' : c.firstChild.src = a)
    };
    u.Ea.prototype.p = function() {
        this.C().controls() && this.c.play()
    };
    u.Vb = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            a.d("canplay", u.bind(this, this.D));
            a.d("canplaythrough", u.bind(this, this.D));
            a.d("playing", u.bind(this, this.D));
            a.d("seeked", u.bind(this, this.D));
            a.d("seeking", u.bind(this, this.show));
            a.d("seeked", u.bind(this, this.D));
            a.d("error", u.bind(this, this.show));
            a.d("waiting", u.bind(this, this.show))
        }
    });
    u.Vb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    };
    u.Ya = u.q.extend();
    u.Ya.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    };
    u.Ya.prototype.p = function() {
        this.c.play()
    };
    u.r = u.b.extend({
        h: function(a, c, d) {
            c = c || {};
            c.uc = l;
            u.b.call(this, a, c, d);
            var e, g;
            g = this;
            e = this.C();
            a = function() {
                if (e.controls() && !e.usingNativeControls()) {
                    var a;
                    g.d("mousedown", g.p);
                    g.d("touchstart", function(c) {
                        c.preventDefault();
                        a = this.c.userActive()
                    });
                    g.d("touchmove", function() {
                        a && this.C().reportUserActivity()
                    });
                    var c, d, n, s;
                    c = 0;
                    g.d("touchstart", function() {
                        c = (new Date).getTime();
                        n = f
                    });
                    s = function() {
                        n = l
                    };
                    g.d("touchmove", s);
                    g.d("touchleave", s);
                    g.d("touchcancel", s);
                    g.d("touchend", function() {
                        n === f && (d = (new Date).getTime() -
                            c, 250 > d && this.j("tap"))
                    });
                    g.d("tap", g.pd)
                }
            };
            c = u.bind(g, g.sd);
            this.H(a);
            e.d("controlsenabled", a);
            e.d("controlsdisabled", c)
        }
    });
    t = u.r.prototype;
    t.sd = function() {
        this.o("tap");
        this.o("touchstart");
        this.o("touchmove");
        this.o("touchleave");
        this.o("touchcancel");
        this.o("touchend");
        this.o("click");
        this.o("mousedown")
    };
    t.p = function(a) {
        0 === a.button && this.C().controls() && (this.C().paused() ? this.C().play() : this.C().pause())
    };
    t.pd = function() {
        this.C().userActive(!this.C().userActive())
    };
    t.Mb = m();
    t.m = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
    };
    u.media = {};
    u.media.Xa = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

    function ea() {
        var a = u.media.Xa[i];
        return function() {
            throw Error('The "' + a + "\" method is not available on the playback technology's API");
        }
    }
    for (var i = u.media.Xa.length - 1; 0 <= i; i--) u.r.prototype[u.media.Xa[i]] = ea();
    u.l = u.r.extend({
        h: function(a, c, d) {
            this.m.volumeControl = u.l.Tc();
            this.m.movingMediaElementInDOM = !u.Ic;
            this.m.fullscreenResize = f;
            u.r.call(this, a, c, d);
            for (d = u.l.bb.length - 1; 0 <= d; d--) u.d(this.a, u.l.bb[d], u.bind(this.c, this.ad));
            (c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.j("loadstart") : c && (this.a.src = c.src);
            if (u.$b && a.options().nativeControlsForTouch !== l) {
                var e, g, j, k;
                e = this;
                g = this.C();
                c = g.controls();
                e.a.controls = !!c;
                j = function() {
                    e.a.controls = f
                };
                k = function() {
                    e.a.controls = l
                };
                g.d("controlsenabled",
                    j);
                g.d("controlsdisabled", k);
                c = function() {
                    g.o("controlsenabled", j);
                    g.o("controlsdisabled", k)
                };
                e.d("dispose", c);
                g.d("usingcustomcontrols", c);
                g.usingNativeControls(f)
            }
            a.H(function() {
                this.L && (this.g.autoplay && this.paused()) && (delete this.L.poster, this.play())
            });
            this.Wa()
        }
    });
    t = u.l.prototype;
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    };
    t.e = function() {
        var a = this.c,
            c = a.L,
            d;
        if (!c || this.m.movingMediaElementInDOM === l) c ? (d = c.cloneNode(l), u.l.gc(c), c = d, a.L = h) : c = u.e("video", {
            id: a.id() + "_html5_api",
            className: "vjs-tech"
        }), c.player = a, u.yb(c, a.u());
        d = ["autoplay", "preload", "loop", "muted"];
        for (var e = d.length - 1; 0 <= e; e--) {
            var g = d[e];
            a.g[g] !== h && (c[g] = a.g[g])
        }
        return c
    };
    t.ad = function(a) {
        this.j(a);
        a.stopPropagation()
    };
    t.play = function() {
        this.a.play()
    };
    t.pause = function() {
        this.a.pause()
    };
    t.paused = function() {
        return this.a.paused
    };
    t.currentTime = function() {
        return this.a.currentTime
    };
    t.ud = function(a) {
        try {
            this.a.currentTime = a
        } catch (c) {
            u.log(c, "Video is not ready. (Video.js)")
        }
    };
    t.duration = function() {
        return this.a.duration || 0
    };
    t.buffered = function() {
        return this.a.buffered
    };
    t.volume = function() {
        return this.a.volume
    };
    t.zd = function(a) {
        this.a.volume = a
    };
    t.muted = function() {
        return this.a.muted
    };
    t.xd = function(a) {
        this.a.muted = a
    };
    t.width = function() {
        return this.a.offsetWidth
    };
    t.height = function() {
        return this.a.offsetHeight
    };
    t.Va = function() {
        return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.I) || !/Chrome|Mac OS X 10.5/.test(u.I)) ? f : l
    };
    t.hc = function() {
        var a = this.a;
        a.paused && a.networkState <= a.Hd ? (this.a.play(), setTimeout(function() {
            a.pause();
            a.webkitEnterFullScreen()
        }, 0)) : a.webkitEnterFullScreen()
    };
    t.bd = function() {
        this.a.webkitExitFullScreen()
    };
    t.src = function(a) {
        this.a.src = a
    };
    t.load = function() {
        this.a.load()
    };
    t.currentSrc = function() {
        return this.a.currentSrc
    };
    t.poster = function() {
        return this.a.poster
    };
    t.Mb = function(a) {
        this.a.poster = a
    };
    t.Ra = function() {
        return this.a.Ra
    };
    t.yd = function(a) {
        this.a.Ra = a
    };
    t.autoplay = function() {
        return this.a.autoplay
    };
    t.td = function(a) {
        this.a.autoplay = a
    };
    t.controls = function() {
        return this.a.controls
    };
    t.loop = function() {
        return this.a.loop
    };
    t.wd = function(a) {
        this.a.loop = a
    };
    t.error = function() {
        return this.a.error
    };
    t.seeking = function() {
        return this.a.seeking
    };
    t.ended = function() {
        return this.a.ended
    };
    u.l.isSupported = function() {
        try {
            u.W.volume = 0.5
        } catch (a) {
            return l
        }
        return !!u.W.canPlayType
    };
    u.l.nb = function(a) {
        try {
            return !!u.W.canPlayType(a.type)
        } catch (c) {
            return ""
        }
    };
    u.l.Tc = function() {
        var a = u.W.volume;
        u.W.volume = a / 2 + 0.1;
        return a !== u.W.volume
    };
    u.l.bb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
    u.l.gc = function(a) {
        if (a) {
            a.player = h;
            for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
            a.removeAttribute("src");
            if ("function" === typeof a.load) try {
                a.load()
            } catch (c) {}
        }
    };
    u.Mc && (document.createElement("video").constructor.prototype.canPlayType = function(a) {
        return a && -1 != a.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
    });
    u.f = u.r.extend({
        h: function(a, c, d) {
            u.r.call(this, a, c, d);
            var e = c.source;
            d = c.parentEl;
            var g = this.a = u.e("div", {
                    id: a.id() + "_temp_flash"
                }),
                j = a.id() + "_flash_api";
            a = a.g;
            var k = u.k.B({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: a.autoplay,
                    preload: a.Ra,
                    loop: a.loop,
                    muted: a.muted
                }, c.flashVars),
                q = u.k.B({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, c.params),
                n = u.k.B({
                    id: j,
                    name: j,
                    "class": "vjs-tech"
                }, c.attributes),
                s;
            e && (e.type && u.f.hd(e.type) ?
                (a = u.f.zc(e.src), k.rtmpConnection = encodeURIComponent(a.qb), k.rtmpStream = encodeURIComponent(a.Nb)) : k.src = encodeURIComponent(u.kc(e.src)));
            this.setCurrentTime = function(a) {
                s = a;
                this.a.vjs_setProperty("currentTime", a)
            };
            this.currentTime = function() {
                return this.seeking() ? s : this.a.vjs_getProperty("currentTime")
            };
            u.yb(g, d);
            c.startTime && this.H(function() {
                this.load();
                this.play();
                this.currentTime(c.startTime)
            });
            u.Ub && this.H(function() {
                u.d(this.u(), "mousemove", u.bind(this, function() {
                    this.C().j({
                        type: "mousemove",
                        bubbles: l
                    })
                }))
            });
            if (c.iFrameMode === f && !u.Ub) {
                var C = u.e("iframe", {
                    id: j + "_iframe",
                    name: j + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                k.readyFunction = "ready";
                k.eventProxyFunction = "events";
                k.errorEventProxyFunction = "errors";
                u.d(C, "load", u.bind(this, function() {
                    var a, d = C.contentWindow;
                    a = C.contentDocument ? C.contentDocument : C.contentWindow.document;
                    a.write(u.f.lc(c.swf, k, q, n));
                    d.player = this.c;
                    d.ready = u.bind(this.c, function(c) {
                        var d = this.i;
                        d.a = a.getElementById(c);
                        u.f.pb(d)
                    });
                    d.events = u.bind(this.c, function(a, c) {
                        this && "flash" === this.xa && this.j(c)
                    });
                    d.errors = u.bind(this.c, function(a, c) {
                        u.log("Flash Error", c)
                    })
                }));
                g.parentNode.replaceChild(C, g)
            } else u.f.$c(c.swf, g, k, q, n)
        }
    });
    t = u.f.prototype;
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    };
    t.play = function() {
        this.a.vjs_play()
    };
    t.pause = function() {
        this.a.vjs_pause()
    };
    t.src = function(a) {
        u.f.gd(a) ? (a = u.f.zc(a), this.Td(a.qb), this.Ud(a.Nb)) : (a = u.kc(a), this.a.vjs_src(a));
        if (this.c.autoplay()) {
            var c = this;
            setTimeout(function() {
                c.play()
            }, 0)
        }
    };
    t.currentSrc = function() {
        var a = this.a.vjs_getProperty("currentSrc");
        if (a == h) {
            var c = this.Rd(),
                d = this.Sd();
            c && d && (a = u.f.Ad(c, d))
        }
        return a
    };
    t.load = function() {
        this.a.vjs_load()
    };
    t.poster = function() {
        this.a.vjs_getProperty("poster")
    };
    t.Mb = m();
    t.buffered = function() {
        return u.sb(0, this.a.vjs_getProperty("buffered"))
    };
    t.Va = r(l);
    t.hc = r(l);
    var R = u.f.prototype,
        S = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
        T = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");

    function fa() {
        var a = S[U],
            c = a.charAt(0).toUpperCase() + a.slice(1);
        R["set" + c] = function(c) {
            return this.a.vjs_setProperty(a, c)
        }
    }

    function V(a) {
        R[a] = function() {
            return this.a.vjs_getProperty(a)
        }
    }
    var U;
    for (U = 0; U < S.length; U++) V(S[U]), fa();
    for (U = 0; U < T.length; U++) V(T[U]);
    u.f.isSupported = function() {
        return 10 <= u.f.version()[0]
    };
    u.f.nb = function(a) {
        if (!a.type) return "";
        a = a.type.replace(/;.*/, "").toLowerCase();
        if (a in u.f.dd || a in u.f.Ac) return "maybe"
    };
    u.f.dd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    };
    u.f.Ac = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    };
    u.f.onReady = function(a) {
        a = u.u(a);
        var c = a.player || a.parentNode.player,
            d = c.i;
        a.player = c;
        d.a = a;
        u.f.pb(d)
    };
    u.f.pb = function(a) {
        a.u().vjs_getProperty ? a.Wa() : setTimeout(function() {
            u.f.pb(a)
        }, 50)
    };
    u.f.onEvent = function(a, c) {
        u.u(a).player.j(c)
    };
    u.f.onError = function(a, c) {
        u.u(a).player.j("error");
        u.log("Flash Error", c, a)
    };
    u.f.version = function() {
        var a = "0,0,0";
        try {
            a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (c) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (d) {}
        }
        return a.split(",")
    };
    u.f.$c = function(a, c, d, e, g) {
        a = u.f.lc(a, d, e, g);
        a = u.e("div", {
            innerHTML: a
        }).childNodes[0];
        d = c.parentNode;
        c.parentNode.replaceChild(a, c);
        var j = d.childNodes[0];
        setTimeout(function() {
            j.style.display = "block"
        }, 1E3)
    };
    u.f.lc = function(a, c, d, e) {
        var g = "",
            j = "",
            k = "";
        c && u.k.ra(c, function(a, c) {
            g += a + "=" + c + "&amp;"
        });
        d = u.k.B({
            movie: a,
            flashvars: g,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, d);
        u.k.ra(d, function(a, c) {
            j += '<param name="' + a + '" value="' + c + '" />'
        });
        e = u.k.B({
            data: a,
            width: "100%",
            height: "100%"
        }, e);
        u.k.ra(e, function(a, c) {
            k += a + '="' + c + '" '
        });
        return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>"
    };
    u.f.Ad = function(a, c) {
        return a + "&" + c
    };
    u.f.zc = function(a) {
        var c = {
            qb: "",
            Nb: ""
        };
        if (!a) return c;
        var d = a.indexOf("&"),
            e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
        c.qb = a.substring(0, d);
        c.Nb = a.substring(e, a.length);
        return c
    };
    u.f.hd = function(a) {
        return a in u.f.Ac
    };
    u.f.Oc = /^rtmp[set]?:\/\//i;
    u.f.gd = function(a) {
        return u.f.Oc.test(a)
    };
    u.Nc = u.b.extend({
        h: function(a, c, d) {
            u.b.call(this, a, c, d);
            if (!a.g.sources || 0 === a.g.sources.length) {
                c = 0;
                for (d = a.g.techOrder; c < d.length; c++) {
                    var e = u.Z(d[c]),
                        g = window.videojs[e];
                    if (g && g.isSupported()) {
                        I(a, e);
                        break
                    }
                }
            } else a.src(a.g.sources)
        }
    });
    u.Player.prototype.textTracks = function() {
        return this.ya = this.ya || []
    };

    function W(a, c, d) {
        for (var e = a.ya, g = 0, j = e.length, k, q; g < j; g++) k = e[g], k.id() === c ? (k.show(), q = k) : d && (k.G() == d && 0 < k.mode()) && k.disable();
        (c = q ? q.G() : d ? d : l) && a.j(c + "trackchange")
    }
    u.w = u.b.extend({
        h: function(a, c) {
            u.b.call(this, a, c);
            this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.s++;
            this.wc = c.src;
            this.Xc = c["default"] || c.dflt;
            this.Cd = c.title;
            this.Od = c.srclang;
            this.jd = c.label;
            this.$ = [];
            this.kb = [];
            this.ga = this.ha = 0;
            this.c.d("fullscreenchange", u.bind(this, this.Qc))
        }
    });
    t = u.w.prototype;
    t.G = p("A");
    t.src = p("wc");
    t.tb = p("Xc");
    t.title = p("Cd");
    t.label = p("jd");
    t.Vc = p("$");
    t.Pc = p("kb");
    t.readyState = p("ha");
    t.mode = p("ga");
    t.Qc = function() {
        this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%" : ""
    };
    t.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    };
    t.show = function() {
        X(this);
        this.ga = 2;
        u.b.prototype.show.call(this)
    };
    t.D = function() {
        X(this);
        this.ga = 1;
        u.b.prototype.D.call(this)
    };
    t.disable = function() {
        2 == this.ga && this.D();
        this.c.o("timeupdate", u.bind(this, this.update, this.Q));
        this.c.o("ended", u.bind(this, this.reset, this.Q));
        this.reset();
        this.c.fa("textTrackDisplay").removeChild(this);
        this.ga = 0
    };

    function X(a) {
        0 === a.ha && a.load();
        0 === a.ga && (a.c.d("timeupdate", u.bind(a, a.update, a.Q)), a.c.d("ended", u.bind(a, a.reset, a.Q)), ("captions" === a.A || "subtitles" === a.A) && a.c.fa("textTrackDisplay").Y(a))
    }
    t.load = function() {
        0 === this.ha && (this.ha = 1, u.get(this.wc, u.bind(this, this.qd), u.bind(this, this.Gb)))
    };
    t.Gb = function(a) {
        this.error = a;
        this.ha = 3;
        this.j("error")
    };
    t.qd = function(a) {
        var c, d;
        a = a.split("\n");
        for (var e = "", g = 1, j = a.length; g < j; g++)
            if (e = u.trim(a[g])) {
                -1 == e.indexOf("--\x3e") ? (c = e, e = u.trim(a[++g])) : c = this.$.length;
                c = {
                    id: c,
                    index: this.$.length
                };
                d = e.split(" --\x3e ");
                c.startTime = Y(d[0]);
                c.sa = Y(d[1]);
                for (d = []; a[++g] && (e = u.trim(a[g]));) d.push(e);
                c.text = d.join("<br/>");
                this.$.push(c)
            }
        this.ha = 2;
        this.j("loaded")
    };

    function Y(a) {
        var c = a.split(":");
        a = 0;
        var d, e, g;
        3 == c.length ? (d = c[0], e = c[1], c = c[2]) : (d = 0, e = c[0], c = c[1]);
        c = c.split(/\s+/);
        c = c.splice(0, 1)[0];
        c = c.split(/\.|,/);
        g = parseFloat(c[1]);
        c = c[0];
        a += 3600 * parseFloat(d);
        a += 60 * parseFloat(e);
        a += parseFloat(c);
        g && (a += g / 1E3);
        return a
    }
    t.update = function() {
        if (0 < this.$.length) {
            var a = this.c.currentTime();
            if (this.Lb === b || a < this.Lb || this.Na <= a) {
                var c = this.$,
                    d = this.c.duration(),
                    e = 0,
                    g = l,
                    j = [],
                    k, q, n, s;
                a >= this.Na || this.Na === b ? s = this.vb !== b ? this.vb : 0 : (g = f, s = this.Cb !== b ? this.Cb : c.length - 1);
                for (;;) {
                    n = c[s];
                    if (n.sa <= a) e = Math.max(e, n.sa), n.Ha && (n.Ha = l);
                    else if (a < n.startTime) {
                        if (d = Math.min(d, n.startTime), n.Ha && (n.Ha = l), !g) break
                    } else g ? (j.splice(0, 0, n), q === b && (q = s), k = s) : (j.push(n), k === b && (k = s), q = s), d = Math.min(d, n.sa), e = Math.max(e, n.startTime), n.Ha =
                        f; if (g)
                        if (0 === s) break;
                        else s--;
                    else if (s === c.length - 1) break;
                    else s++
                }
                this.kb = j;
                this.Na = d;
                this.Lb = e;
                this.vb = k;
                this.Cb = q;
                a = this.kb;
                c = "";
                d = 0;
                for (e = a.length; d < e; d++) c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
                this.a.innerHTML = c;
                this.j("cuechange")
            }
        }
    };
    t.reset = function() {
        this.Na = 0;
        this.Lb = this.c.duration();
        this.Cb = this.vb = 0
    };
    u.Sb = u.w.extend();
    u.Sb.prototype.A = "captions";
    u.Zb = u.w.extend();
    u.Zb.prototype.A = "subtitles";
    u.Tb = u.w.extend();
    u.Tb.prototype.A = "chapters";
    u.ac = u.b.extend({
        h: function(a, c, d) {
            u.b.call(this, a, c, d);
            if (a.g.tracks && 0 < a.g.tracks.length) {
                c = this.c;
                a = a.g.tracks;
                var e;
                for (d = 0; d < a.length; d++) {
                    e = a[d];
                    var g = c,
                        j = e.kind,
                        k = e.label,
                        q = e.language,
                        n = e;
                    e = g.ya = g.ya || [];
                    n = n || {};
                    n.kind = j;
                    n.label = k;
                    n.language = q;
                    j = u.Z(j || "subtitles");
                    g = new window.videojs[j + "Track"](g, n);
                    e.push(g)
                }
            }
        }
    });
    u.ac.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    };
    u.X = u.M.extend({
        h: function(a, c) {
            var d = this.ca = c.track;
            c.label = d.label();
            c.selected = d.tb();
            u.M.call(this, a, c);
            this.c.d(d.G() + "trackchange", u.bind(this, this.update))
        }
    });
    u.X.prototype.p = function() {
        u.M.prototype.p.call(this);
        W(this.c, this.ca.Q, this.ca.G())
    };
    u.X.prototype.update = function() {
        this.selected(2 == this.ca.mode())
    };
    u.eb = u.X.extend({
        h: function(a, c) {
            c.track = {
                G: function() {
                    return c.kind
                },
                C: a,
                label: function() {
                    return c.kind + " off"
                },
                tb: r(l),
                mode: r(l)
            };
            u.X.call(this, a, c);
            this.selected(f)
        }
    });
    u.eb.prototype.p = function() {
        u.X.prototype.p.call(this);
        W(this.c, this.ca.Q, this.ca.G())
    };
    u.eb.prototype.update = function() {
        for (var a = this.c.textTracks(), c = 0, d = a.length, e, g = f; c < d; c++) e = a[c], e.G() == this.ca.G() && 2 == e.mode() && (g = l);
        this.selected(g)
    };
    u.S = u.R.extend({
        h: function(a, c) {
            u.R.call(this, a, c);
            1 >= this.K.length && this.D()
        }
    });
    u.S.prototype.qa = function() {
        var a = [],
            c;
        a.push(new u.eb(this.c, {
            kind: this.A
        }));
        for (var d = 0; d < this.c.textTracks().length; d++) c = this.c.textTracks()[d], c.G() === this.A && a.push(new u.X(this.c, {
            track: c
        }));
        return a
    };
    u.Aa = u.S.extend({
        h: function(a, c, d) {
            u.S.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Captions")
        }
    });
    u.Aa.prototype.A = "captions";
    u.Aa.prototype.oa = "Captions";
    u.Aa.prototype.className = "vjs-captions-button";
    u.Ga = u.S.extend({
        h: function(a, c, d) {
            u.S.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    });
    u.Ga.prototype.A = "subtitles";
    u.Ga.prototype.oa = "Subtitles";
    u.Ga.prototype.className = "vjs-subtitles-button";
    u.Ba = u.S.extend({
        h: function(a, c, d) {
            u.S.call(this, a, c, d);
            this.a.setAttribute("aria-label", "Chapters Menu")
        }
    });
    t = u.Ba.prototype;
    t.A = "chapters";
    t.oa = "Chapters";
    t.className = "vjs-chapters-button";
    t.qa = function() {
        for (var a = [], c, d = 0; d < this.c.textTracks().length; d++) c = this.c.textTracks()[d], c.G() === this.A && a.push(new u.X(this.c, {
            track: c
        }));
        return a
    };
    t.La = function() {
        for (var a = this.c.textTracks(), c = 0, d = a.length, e, g, j = this.K = []; c < d; c++)
            if (e = a[c], e.G() == this.A && e.tb()) {
                if (2 > e.readyState()) {
                    this.Ld = e;
                    e.d("loaded", u.bind(this, this.La));
                    return
                }
                g = e;
                break
            }
        a = this.ua = new u.la(this.c);
        a.a.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            Bd: -1
        }));
        if (g) {
            e = g.$;
            for (var k, c = 0, d = e.length; c < d; c++) k = e[c], k = new u.Za(this.c, {
                track: g,
                cue: k
            }), j.push(k), a.Y(k)
        }
        0 < this.K.length && this.show();
        return a
    };
    u.Za = u.M.extend({
        h: function(a, c) {
            var d = this.ca = c.track,
                e = this.cue = c.cue,
                g = a.currentTime();
            c.label = e.text;
            c.selected = e.startTime <= g && g < e.sa;
            u.M.call(this, a, c);
            d.d("cuechange", u.bind(this, this.update))
        }
    });
    u.Za.prototype.p = function() {
        u.M.prototype.p.call(this);
        this.c.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
    };
    u.Za.prototype.update = function() {
        var a = this.cue,
            c = this.c.currentTime();
        this.selected(a.startTime <= c && c < a.sa)
    };
    u.k.B(u.Ca.prototype.g.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    });
    if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function(a, c) {
            function d(a, e) {
                var k, q, n = a[e];
                if (n && "object" === typeof n)
                    for (k in n) Object.prototype.hasOwnProperty.call(n, k) && (q = d(n, k), q !== b ? n[k] = q : delete n[k]);
                return c.call(a, e, n)
            }
            var e;
            a = String(a);
            Z.lastIndex = 0;
            Z.test(a) && (a = a.replace(Z, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
                "": e
            }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
        }
    }
    u.dc = function() {
        var a, c, d = document.getElementsByTagName("video");
        if (d && 0 < d.length)
            for (var e = 0, g = d.length; e < g; e++)
                if ((c = d[e]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== h && (a = u.JSON.parse(a || "{}"), videojs(c, a)));
                else {
                    u.lb();
                    break
                } else u.Dc || u.lb()
    };
    u.lb = function() {
        setTimeout(u.dc, 1)
    };
    "complete" === document.readyState ? u.Dc = f : u.T(window, "load", function() {
        u.Dc = f
    });
    u.lb();
    u.rd = function(a, c) {
        u.Player.prototype[a] = c
    };
    var ga = this;
    ga.Gd = f;

    function $(a, c) {
        var d = a.split("."),
            e = ga;
        !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
        for (var g; d.length && (g = d.shift());)!d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
    };
    $("videojs", u);
    $("_V_", u);
    $("videojs.options", u.options);
    $("videojs.players", u.va);
    $("videojs.TOUCH_ENABLED", u.$b);
    $("videojs.cache", u.pa);
    $("videojs.Component", u.b);
    u.b.prototype.player = u.b.prototype.C;
    u.b.prototype.options = u.b.prototype.options;
    u.b.prototype.init = u.b.prototype.h;
    u.b.prototype.dispose = u.b.prototype.dispose;
    u.b.prototype.createEl = u.b.prototype.e;
    u.b.prototype.contentEl = u.b.prototype.Ka;
    u.b.prototype.el = u.b.prototype.u;
    u.b.prototype.addChild = u.b.prototype.Y;
    u.b.prototype.getChild = u.b.prototype.fa;
    u.b.prototype.getChildById = u.b.prototype.ed;
    u.b.prototype.children = u.b.prototype.children;
    u.b.prototype.initChildren = u.b.prototype.nc;
    u.b.prototype.removeChild = u.b.prototype.removeChild;
    u.b.prototype.on = u.b.prototype.d;
    u.b.prototype.off = u.b.prototype.o;
    u.b.prototype.one = u.b.prototype.T;
    u.b.prototype.trigger = u.b.prototype.j;
    u.b.prototype.triggerReady = u.b.prototype.Wa;
    u.b.prototype.show = u.b.prototype.show;
    u.b.prototype.hide = u.b.prototype.D;
    u.b.prototype.width = u.b.prototype.width;
    u.b.prototype.height = u.b.prototype.height;
    u.b.prototype.dimensions = u.b.prototype.Yc;
    u.b.prototype.ready = u.b.prototype.H;
    u.b.prototype.addClass = u.b.prototype.n;
    u.b.prototype.removeClass = u.b.prototype.t;
    u.b.prototype.buildCSSClass = u.b.prototype.P;
    u.Player.prototype.ended = u.Player.prototype.ended;
    $("videojs.MediaLoader", u.Nc);
    $("videojs.TextTrackDisplay", u.ac);
    $("videojs.ControlBar", u.Ca);
    $("videojs.Button", u.q);
    $("videojs.PlayToggle", u.Xb);
    $("videojs.FullscreenToggle", u.Da);
    $("videojs.BigPlayButton", u.Ya);
    $("videojs.LoadingSpinner", u.Vb);
    $("videojs.CurrentTimeDisplay", u.$a);
    $("videojs.DurationDisplay", u.ab);
    $("videojs.TimeDivider", u.bc);
    $("videojs.RemainingTimeDisplay", u.gb);
    $("videojs.Slider", u.N);
    $("videojs.ProgressControl", u.fb);
    $("videojs.SeekBar", u.Yb);
    $("videojs.LoadProgressBar", u.cb);
    $("videojs.PlayProgressBar", u.Wb);
    $("videojs.SeekHandle", u.Fa);
    $("videojs.VolumeControl", u.ib);
    $("videojs.VolumeBar", u.hb);
    $("videojs.VolumeLevel", u.cc);
    $("videojs.VolumeMenuButton", u.ma);
    $("videojs.VolumeHandle", u.jb);
    $("videojs.MuteToggle", u.ea);
    $("videojs.PosterImage", u.Ea);
    $("videojs.Menu", u.la);
    $("videojs.MenuItem", u.M);
    $("videojs.MenuButton", u.R);
    u.R.prototype.createItems = u.R.prototype.qa;
    u.S.prototype.createItems = u.S.prototype.qa;
    u.Ba.prototype.createItems = u.Ba.prototype.qa;
    $("videojs.SubtitlesButton", u.Ga);
    $("videojs.CaptionsButton", u.Aa);
    $("videojs.ChaptersButton", u.Ba);
    $("videojs.MediaTechController", u.r);
    u.r.prototype.features = u.r.prototype.m;
    u.r.prototype.m.volumeControl = u.r.prototype.m.Cc;
    u.r.prototype.m.fullscreenResize = u.r.prototype.m.Md;
    u.r.prototype.m.progressEvents = u.r.prototype.m.Qd;
    u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Vd;
    u.r.prototype.setPoster = u.r.prototype.Mb;
    $("videojs.Html5", u.l);
    u.l.Events = u.l.bb;
    u.l.isSupported = u.l.isSupported;
    u.l.canPlaySource = u.l.nb;
    u.l.prototype.setCurrentTime = u.l.prototype.ud;
    u.l.prototype.setVolume = u.l.prototype.zd;
    u.l.prototype.setMuted = u.l.prototype.xd;
    u.l.prototype.setPreload = u.l.prototype.yd;
    u.l.prototype.setAutoplay = u.l.prototype.td;
    u.l.prototype.setLoop = u.l.prototype.wd;
    u.l.prototype.enterFullScreen = u.l.prototype.hc;
    u.l.prototype.exitFullScreen = u.l.prototype.bd;
    $("videojs.Flash", u.f);
    u.f.isSupported = u.f.isSupported;
    u.f.canPlaySource = u.f.nb;
    u.f.onReady = u.f.onReady;
    $("videojs.TextTrack", u.w);
    u.w.prototype.label = u.w.prototype.label;
    u.w.prototype.kind = u.w.prototype.G;
    u.w.prototype.mode = u.w.prototype.mode;
    u.w.prototype.cues = u.w.prototype.Vc;
    u.w.prototype.activeCues = u.w.prototype.Pc;
    $("videojs.CaptionsTrack", u.Sb);
    $("videojs.SubtitlesTrack", u.Zb);
    $("videojs.ChaptersTrack", u.Tb);
    $("videojs.autoSetup", u.dc);
    $("videojs.plugin", u.rd);
    $("videojs.createTimeRange", u.sb);
    $("videojs.util", u.ja);
    u.ja.mergeOptions = u.ja.Fb;
})();
/*
DigitasLBI Video Platform (DVP)
Author : John McLaughlin / Kyle Bradshaw / Adam Hilliker | D I G I T A S
Version : 1.1
Date: 7 28 2014
Note: As part of the starter kit, this file just pass jshint
*/

'use strict';

var APP = window.APP = window.APP || {};
var videoRatio = 0.5652; //16:9
var myPlayer = [];
// methods
var createDVPlayer, resolveRenditionSize, progressTracker, videoEventHandler, createBrightcovePlayer; // MEH

window.videojs.options.flash.swf = "scripts/videoplayer/video-js.swf";
// window.videojs.options.flash.swf = "video-js.swf";

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
}

var bcen = getURLParameter('bcen');

setTimeout(function() {
    if (bcen === '8a6b') {
        console.log('bcen cookie set');
        $.cookie('bcenCookie', 'true', {
            expires: 1
        });
    }
}, 100);

var createPlayer = function(apiToken, playerKey, videoPlaceholderId,videojsPlugins) {
    var bcVideoID = $('#' + videoPlaceholderId).attr('data-bc-id');
    var ccUrl = $('#' + videoPlaceholderId).data('cc');
    //  ccUrl = $('#' + videoPlaceholderId).attr('data-cc');
    var tagName = $('#' + videoPlaceholderId).attr('data-tag-name');
    var dart = $('#' + videoPlaceholderId).attr('data-dart');
    var autoPlayNow = $('#' + videoPlaceholderId).attr('data-autoPlay');


    autoPlayNow = (autoPlayNow === 'true') ? true : false;

    if (Modernizr.video) {
        //HTML5 support
        createDVPlayer(apiToken, bcVideoID, ccUrl, videoPlaceholderId, autoPlayNow, tagName,dart,videojsPlugins);
        } else {
          // no native video support available :(
          createBrightcovePlayer(playerKey, bcVideoID, videoPlaceholderId);
    }
};

var DVPlayer = function(DVPSetup) {
    // Default setup values, you can override these by passing DVPSetup object above
    var playerSetupValues = {
        videoWidth: 720,
        videoHeight: 405,
        shouldShowControls: true,
        autoPlay: true,
        videoPaths: ['../video/testVideoHD.mp4'],
        divToContainPlayer: 'videoPlayerDiv', // id only
        videoPosterframe: '../video/testThumbHD.png',
        currentCaptionSet: [{
            label: 'English',
            SRTpath: '../captions/test-file.en.srt'
        }, {
            label: 'Spanish',
            SRTpath: '../captions/test-file.es.srt'
        }, {
            label: 'Korean',
            SRTpath: '../captions/test-file.ko.srt'
        }, {
            label: 'Chinese',
            SRTpath: '../captions/test-file.zh.srt'
        }]
    };

    // internal variables
    var videoWidth;
    var videoHeight;
    var videoPosterframe;
    var videoPlayerPath;
    var currentCaptionSet;
    var shouldShowControls;
    var myPlayer;
    var videoPlayerDiv;
    var shouldFireProgressEvent;
    var loadAlreadyComplete;
    var playbackReported;


    // called when file loads
    var onFrameworkLoaded = function() {
        // define setup values
        if (DVPSetup) {
            playerSetupValues = DVPSetup;
        }

        // store values for build
        videoWidth = playerSetupValues.videoWidth;
        videoHeight = playerSetupValues.videoHeight;
        currentCaptionSet = playerSetupValues.currentCaptionSet !== undefined ? playerSetupValues.currentCaptionSet : [];
        videoPosterframe = playerSetupValues.videoPosterframe;
        videoPlayerDiv = playerSetupValues.divToContainPlayer;
        shouldShowControls = playerSetupValues.shouldShowControls;

        // build markup
        buildMarkup();

        // once markup is built, set up videoJS player
        onFrameworkReady();

    };

    var buildMarkup = function() {
        // start embed tag
        var controlsString = shouldShowControls === true ? 'controls ' : ' ';
        var posterFrameString = videoPosterframe !== undefined ? ' poster="' + videoPosterframe + '"' : '';
        var a = $('video').length;
        var videoEmbedString = '<video tabindex="' + a + '" id="dvp_' + videoPlayerDiv + '" class="video-js vjs-default-skin vjs-dvp_skin"' + controlsString + 'preload="auto" width="' + videoWidth + '" height="' + videoHeight + '"' + posterFrameString + '>';

        // add track tags for transcripts
        if (currentCaptionSet) {
            for (var i = 0; i < currentCaptionSet.length; i++) {
                var currTrackSource = currentCaptionSet[i].SRTpath;
                var currTrackLabel = currentCaptionSet[i].label;
                var currTrackMarkup = '<track kind="captions" src="' + currTrackSource + '" srclang="en" label="' + currTrackLabel + '"></track>';
                videoEmbedString += currTrackMarkup;
            }
        }

        // add chapters
        if (1 === 0) {
            videoEmbedString += '<track kind="chapters" src="../chapters/testChapters.vtt" srclang="en" default="default">';
        }

        // close tag and apply markup
        videoEmbedString += '</video>';

        $('#' + videoPlayerDiv).html(videoEmbedString);

    };

    // called after file has loaded and markup has been built
    var onFrameworkReady = function() {
        // reset playback var
        playbackReported = false;

        // set player reference
        myPlayer = window._V_('dvp_' + videoPlayerDiv, null, null);

        // set initial video values
        setVideoSource(playerSetupValues.videoPaths);

        // play if autoplay is enabled
        if (playerSetupValues.autoPlay) {
            // delaying to ensure proper order of operations
            window.setTimeout(doAutoplay, 1500);
        }
    };

    var doAutoplay = function() {
        // wrapping in a function to solve scope issues with setTimeout
        myPlayer.play();
    };

    var setVideoSource = function(pInitVideoPaths) {
        // this accepts an array of video paths,
        // and sets the source objects for the videojs 'src()' call dynamically
        var videoObjects = [];
        for (var i = 0; i < pInitVideoPaths.length; i++) {
            var currPath = pInitVideoPaths[i];
            var currExtension = currPath.split('.').pop();
            var currObject = {
                type: 'video/' + currExtension,
                src: currPath
            };
            videoObjects.push(currObject);
        }

        myPlayer.src(videoObjects);
    };

    var playNewVideo = function(pVideoPaths, pVideoPosterframe, pCaptionPaths) {
        // store new values
        currentCaptionSet = pCaptionPaths ? pCaptionPaths : [];
        videoPosterframe = pVideoPosterframe;
        playerSetupValues.videoPaths = pVideoPaths;

        // kill old player
        $('#' + videoPlayerDiv + ' #dvp_' + videoPlayerDiv).remove();
        window._V_.players = {};

        // rebuild markup with new caption paths
        buildMarkup();

        // reset player when it's ready
        myPlayer.ready(function() {
            onFrameworkReady();
        });
    };

    // call onLoaded
    onFrameworkLoaded();

    //return object with public methods
    return {

    };

};

var adaJazz = function(videoPlaceholderId, tagName) {
    var $t;
    if (videoPlaceholderId === 'videoplaceholder') {
        $t = $('#dvp_videoplaceholder');
    } else {
        $t = $('#' + videoPlaceholderId);
    }
    var $videoJS = $t.find('.video-js');
    var $videoControlBar = $t.find('.vjs-control-bar');
    $videoControlBar.find('.vjs-control-text').each(function() {
        var $t = $(this);
        var text = $t.text();
        var newText = $t.html(tagName + ' ' + text + ': after open, press shift+enter to activate');
    });
    var instructiveText = ' after open, press shift+enter to activate';
    var bigPlayText = $('#' + videoPlaceholderId + ' .vjs-big-play-button').attr('aria-label', tagName + ' play:' + instructiveText).append('<span class="accessibility">' + tagName + ' play:' + instructiveText + '</span>');
};

var createDVPlayer = function(apiToken, bcVideoID, ccUrl, videoPlaceholderId, autoPlayNow, tagName, dart,videojsPlugins) {

    //videoEventHandler.call(this, videoPlaceholderId, tagName);
    var apiParams = 'name,id,linkURL,videoStillURL,thumbnailURL,FLVURL,HLSURL,renditions,iOSRenditions,FLVFullLength,videoFullLength';
    var serviceCall = 'http://api.brightcove.com/services/library?command=find_video_by_id&video_id=' + bcVideoID + '&video_fields=' + apiParams + '&media_delivery=http&token=' + apiToken + '&callback=?';
    $.getJSON(serviceCall, function(data) {
        if (data !== null) {

            $('[data-thumbnail=\"'+ videoPlaceholderId +'\"]').attr('src', data.thumbnailURL);

            var videoWidth = videoPlaceholderId ? $('#' + videoPlaceholderId).width() : 628;
            var videoHeight = videoWidth * videoRatio;
            var videoRenditionURL = resolveRenditionSize(videoWidth, data.renditions).url;
            var videoStillURL = data.videoStillURL;

            var videoConfig = {
//                videoWidth: videoWidth,
//                videoHeight: videoHeight,
                shouldShowControls: true,
                autoPlay: autoPlayNow,
                videoPaths: [videoRenditionURL],
                divToContainPlayer: videoPlaceholderId, // id only
                videoPosterframe: videoStillURL,
                currentCaptionSet: ccUrl
            };

            // console.log(videoConfig.currentCaptionSet);

            var DVPlayer = window.DVPlayer;
            var player = new DVPlayer(videoConfig);

            setTimeout(function() {

                adaJazz(videoPlaceholderId, tagName);

                $('.fancybox-close').click(function() {
                    var ptId = 'dvp_videoplaceholder_html5_api';
                    var ptIdFlash = 'dvp_videoplaceholder_flash_api';
                    clearInterval(progressTracker[ptId]);
                    window.clearInterval(progressTracker[ptIdFlash]);
                    window._V_(videoId).dispose();

                });

                var videoId;
                if ($('#' + videoPlaceholderId + ' video').length === 0) {
                    videoId = $('#' + videoPlaceholderId + ' object').attr('id');
                } else {
                    videoId = $('#' + videoPlaceholderId + ' video').attr('id');
                }

                var tempVideoId = $('#' + videoPlaceholderId + ' div').attr('id');
                var tempVideoHeight = $('#' + videoPlaceholderId + ' div').height();
                var a = $('video').length;

                myPlayer[a] = window.videojs(videoId);

                // initiate plugins
                if(videojsPlugins.length){
                    for(var i = 0; i < videojsPlugins.length; i++){
                        myPlayer[a][videojsPlugins[i].name](videojsPlugins[i].options);
                    }
                }

                myPlayer[a].on('play', videoEventHandler);
                myPlayer[a].on('pause', videoEventHandler);
                myPlayer[a].on('ended', videoEventHandler);
                myPlayer[a].on('fullscreenchange', function() {

                    if (myPlayer[a].isFullScreen()) {
                        $('.fancybox-close:visible').hide(); //hackery due to fancybox not dealing well w/ fullscreen
                    } else {
                        $('.fancybox-close:hidden').show(); //hackery due to fancybox not dealing well w/ fullscreen
                        $('#' + tempVideoId).height(tempVideoHeight);
                    }
                });

                $('.video-js').each(function(videoIndex) {
                    videoId = $(this).attr('id');
                    window._V_(videoId).ready(function() {
                        this.on('play', function(e) {
                            //pause other video
                            $('.video-js').each(function(index) {
                                if (videoIndex !== index) {
                                    this.player.pause();
                                }
                            });
                        });
                    });
                });

                return myPlayer[a];

            }, 1000);


        } else {
            console.log('VIDEO NOT FOUND');
            // add local video fallback
        }

    });
};

var resolveRenditionSize = function(width, arrRenditions) {
    var arrSizeDiff = [],
        targetSize = width,
        tempRenditionSize = '',
        smallestRenditionSize = '',
        selectedRendition = '';

    if (arrRenditions) {
        smallestRenditionSize = arrRenditions[0].frameWidth;
        selectedRendition = arrRenditions[0];

        for (var i = 0, l = arrRenditions.length; i < l; i++) {
            tempRenditionSize = arrRenditions[i].frameWidth;
            // var sizeDiff = parseInt( targetSize ) - parseInt( tempRenditionSize );
            var sizeDiff = +(targetSize) - +(tempRenditionSize);
            var obj = {
                rendition: arrRenditions[i],
                sizeDiff: Math.abs(sizeDiff)
            };
            arrSizeDiff.push(obj);
            if (tempRenditionSize >= smallestRenditionSize) {
                selectedRendition = arrRenditions[i];
            }
        }
    }

    var temp = 0;
    if (arrSizeDiff.length > 0) {
        for (var j = 0, g = arrSizeDiff.length; j < g; j++) {
            if (arrSizeDiff[j].sizeDiff < arrSizeDiff[temp].sizeDiff) {
                selectedRendition = arrSizeDiff[j].rendition;
                temp = j;
            }
        }
    }
    return selectedRendition;
};

var progressTracker = [];
var videoEventHandler = function(obj) {

    var videoId = obj.currentTarget.id;
    var tagName = $('#' + videoId).parent().parent().attr('data-tag-name');
    var dart = $('#' + videoId).parent().parent().attr('data-dart');

    // ADA LABELING FOR PLAY/PAUSE

    // PLAY/PAUSE
    var p = $('#' + videoId).parent().attr('id');
    var $t = $('#' + p + ' .vjs-play-control .vjs-control-text');
    var text = $('#' + p + ' .vjs-play-control .vjs-control-text').text();
    var newText = $t.html(tagName + ' ' + text);

    // PROGRESS BAR - NEED TO FIX
    var $t2 = $('#' + p + ' .vjs-progress-control div:eq(0)');
    var text2 = $t2.attr('aria-label');
    if (text2.length < 19) {
        var newText2 = $t2.attr('aria-label', tagName + ' ' + text2);
    }

    // VOLUME LEVEL
    var $t3 = $('#' + p + ' .vjs-volume-control div:eq(0)');
    var text3 = $t3.attr('aria-label');
    if (text3.length < 13) {
        var newText3 = $t3.attr('aria-label', 'To increase volume, press right key. To decrease volume, press the left key.');
    }

    // CAPTIONS BUTTON
    var $t4 = $('#' + p + ' .vjs-captions-button');
    var text4 = $t4.attr('aria-label');
    if (text4.length < 9) {
        var newText4 = $t4.attr('aria-label', tagName + ' ' + text4);
    }

    //var screenSizeTag = '_' + APP.cmNames.screenSizeTags[APP.context.screenSizeType()];
    var screenSizeTag = '_XXX';
    if (obj.type === 'play') {

        myPlayer = window.videojs(videoId);

        var i = 0;

        window.cmCreateManualLinkClickTag('#', tagName + '_Play_' + APP.responsiveTags.options.current,'Ent:Mkt:FWB;EMT');
        //APP.tagging.triggerDartEvent(dart);

        /*progressTracker[videoId] = setInterval(function() {
            if (myPlayer === null) {
                return;
            }
            var duration = myPlayer.duration();
            var currentTime = myPlayer.currentTime();
            var progress = (currentTime / duration).toFixed(2);

            if (progress > 0.24 && progress < 0.50 && i < 1) {
                console.log(videoId + ' 25% mark i: ' + i);
                window.cmCreateManualLinkClickTag('#', tagName + '_25%');
                i = 1;
            }
            if (progress > 0.49 && progress < 0.75 && i < 2) {
                console.log(videoId + ' 50% mark i: ' + i);
                window.cmCreateManualLinkClickTag('#', tagName + '_50%');
                i = 2;
            }
            if (progress > 0.74 && progress < 0.99 && i < 3) {
                console.log(videoId + ' 75% mark i: ' + i);
                window.cmCreateManualLinkClickTag('#', tagName + '_75%');
                i = 3;
            }
        }, 500);*/

    } /*else if (obj.type === 'pause') {

        setTimeout(function() {
            var $t = $('#' + videoId + ' .vjs-play-control .vjs-control-text');
            var text = $t.text();
            var newText = $t.html(tagName + ' ' + text);
        }, 500);

        console.log(videoId + ' video paused');
        window.cmCreateManualLinkClickTag('#', tagName + '_Pause');
        clearInterval(progressTracker[videoId]);
    } else if (obj.type === 'ended') {
        console.log(videoId + ' video ended');
        window.cmCreateManualLinkClickTag('#', tagName + '_100%');
        clearInterval(progressTracker[videoId]);
    }*/
};

function createBrightcovePlayer(playerKey, bcVideoID, videoPlaceholderId) {
    var videoWidth = videoPlaceholderId ? $('#' + videoPlaceholderId).width() : 628;
    var videoHeight = videoWidth * videoRatio;
    var BCL = {};
    // data for our player -- note that it must have ActionScript/JavaScript APIs enabled!!
    BCL.playerData = {
        'playerID': '1625028054001',
        'playerKey': playerKey,
        'width': videoWidth,
        'height': videoHeight,
        'videoID': bcVideoID
    };
    // flag to keep track of whether there is a player
    BCL.isPlayerAdded = false;
    // template for the player object - will populate it with data using markup()
    BCL.playerTemplate = '<div style=\"display:none\"></div><object id=\"myExperience{{videoID}}\" class=\"BrightcoveExperience\"><param name=\"bgcolor\" value=\"#64AAB2\" /><param name=\"width\" value=\"{{width}}\" /><param name=\"height\" value=\"{{height}}\" /><param name=\"playerID\" value=\"{{playerID}}\" /><param name=\"playerKey\" value=\"{{playerKey}}\" /><param name=\"isVid\" value=\"true\" /><param name=\"isUI\" value=\"true\" /><param name=\"dynamicStreaming\" value=\"true\" /><param name=\"includeAPI\" value=\"true\" /><param name=\"@videoPlayer\" value=\"{{videoID}}\"; /><param name=\"templateLoadHandler\" value=\"BCL.onTemplateLoaded\"></object>';
    BCL.addPlayer = function() {
        // if we don't already have a player
        if (BCL.isPlayerAdded === false) {
            BCL.isPlayerAdded = true;
            var playerHTML = '';
            // set the videoID to the selected video
            //BCL.playerData.videoID = BCL.videoData[BCL.videoSelect.selectedIndex].videoID;
            // populate the player object template
            playerHTML = BCL.markup(BCL.playerTemplate, BCL.playerData);
            // inject the player code into the DOM
            document.getElementById(videoPlaceholderId).innerHTML = playerHTML;
            // instantiate the player
            window.brightcove.createExperiences();

            setTimeout(function() {
                BCL.onTemplateLoaded('myExperience' + BCL.playerData.videoID);
            }, 2000);

        }
        // user must have requested a different video for player already loaded
        else {
            console.log(BCL.playerData.videoID);
            console.log(BCL.videoPlayer);
            console.log(BCL.player);
            BCL.videoPlayer.loadVideo(BCL.playerData.videoID);
        }
    };

    // player template loaded handler
    BCL.onTemplateLoaded = function(id) {
        console.log('onTemplateLoaded');
        // get a reference to the player
        BCL.player = window.brightcove.getExperience(id);
        // get references to the experience and video player modules
        BCL.experienceModule = BCL.player.getModule(window.APIModules.EXPERIENCE);
        BCL.videoPlayer = BCL.player.getModule(window.APIModules.VIDEO_PLAYER);
        BCL.contentModule = BCL.player.getModule(window.APIModules.CONTENT);
        if (BCL.videoPlayer) {
            // set callback function for rendition selection
            BCL.videoPlayer.setRenditionSelectionCallback(BCL.selectRendition);
            console.log('BCL.videoPlayer loaded');
            setTimeout(function() {
                BCL.currentVideo = BCL.videoPlayer.getCurrentVideo();
                console.log(BCL.currentVideo);
                BCL.currentVideo.displayName = '';
                BCL.currentVideo.displayName = '';
                BCL.contentModule.updateMedia(BCL.currentVideo);
            }, 2000);
        }
    };

    BCL.selectRendition = function(context) {
        var renditions = context.renditions;
        var renditionIndex = -1;
        var rate = 500000; // encoding rate cap
        var last = 0;
        for (var i = 0; i < renditions.length; i++) {
            // set the rendition index for the rendition with the highest encoding rate below the cap
            if ((renditions[i].encodingRate < rate) && (renditions[i].encodingRate > last)) {
                last = renditions[i].encodingRate;
                renditionIndex = i;
            }
        }
        return renditionIndex;
    };

    /**
     * Traces out the values of rendition for testing.
     *
     * @param  rendition  The rendition to traces values for.
     * @param  index  The index in the renditions array where this rendition is found.
     */
    BCL.describeRendition = function(rendition) {
        var message = ('size: ' + rendition.size);
        message += ('\nframeWidth: ' + rendition.frameWidth);
        message += ('\nframeHeight: ' + rendition.frameHeight);
        message += ('\nencodingRate: ' + rendition.encodingRate);
        console.log(message);
    };

    // function to remove the player
    BCL.removePlayer = function() {
        // do this only if we have a player
        if (BCL.isPlayerAdded === true) {
            BCL.isPlayerAdded = false;
            // unload the player
            console.log(BCL);
            BCL.experienceModule.unload();
            // remove the player code
            document.getElementById(videoPlaceholderId).innerHTML = '';
        }
    };

    BCL.markup = function(html, data) {
        var m;
        var i = 0;
        var match = html.match(data instanceof Array ? /{{\d+}}/g : /{{\w+}}/g) || [];

        while (m = match[i++]) { // jshint ignore:line
            html = html.replace(m, data[m.substr(2, m.length - 4)]);
        }
        return html;
    };

    BCL.addPlayer();

}

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
        } catch (e) {
            return;
        }

        try {
            // If we can't parse the cookie, ignore it, it's unusable.
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function(key, value, options) {

        // Write
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function(key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, {
                expires: -1
            }));
            return true;
        }
        return false;
    };

    console.log('jquery.cookie.js loaded');

}));
var MobileAppUnit = {

    phoneNames: {
        'PHI100720H': 'iPhone',
        'PHI100720I': 'Android',
        'WIN10TEDC': 'Windows 10'
    },
    prodLink: 'promo.bankofamerica.com',
    cmCategory: 'OSP:Mkt-M:BillPay;AB_OnlinePaymentsMobile',
    dartTagSrc: '1359940',
    dartTagType: 'integ683',
    dartTagCat: '2014_00j',
    iphoneName: 'Bank_of_America_Mobile_Banking_App_iPhone',
    androidName: 'Bank_of_America_Mobile_Banking_App_Android',
    iPadName: 'Bank_of_America_Mobile_Banking_App_iPad',
    windows10Name: 'Bank_of_America_Mobile_Banking_App_Windows10',

    serviceUriApp: '/utils/api/qwasi/mobileSMSRelay.php',

    init: function () {

        $('[id^="mobileAppForm"]').each(function (idx, elm) {
            var $form = $(elm);
            var $device = $form.find('[name="getMobileApp_phoneType"]');
            var $phoneInputs = $form.find('.mobileAppPhone');
            var $deviceError = $form.find('.getMobileDevice_error');
            var $phoneError = $form.find('.getMobileApp_phoneError');
            var $getAppButton = $form.find('a.getAppButton')[0];
            var $getAppButtonName = $($getAppButton).attr('id');
            var $getAppButtonDevice = $($getAppButton).attr('id');

            $getAppButtonDevice = $getAppButtonName.substring($getAppButtonName.lastIndexOf('_'), $getAppButtonName.length);
            $getAppButtonName = $getAppButtonName.substring(0, $getAppButtonName.lastIndexOf('_'));

            $device.prop('disabled', false).empty();
            $phoneInputs.prop('disabled', true);

            //set event handlers
            $form.find('.evt_mau_keyinput').keyup(function () {
                MobileAppUnit.handleInputKeyUp(this);
            });

            $form.submit(function (e) {
                e.preventDefault();
                //                $('.hide').removeAttr('href');
                // MobileAppUnit.handleFormSubmit(this);
            });

            $deviceError.on('click', function (e) {
                e.preventDefault();
                $device.focus();
            });

            $phoneError.on('click', function (e) {
                e.preventDefault();
                $phoneInputs.first().focus();
            });

            $($getAppButton).on('click', function (e) {
                var $form = $(this).closest('form');

                MobileAppUnit.handleFormSubmit($form[0]);
            });

            //showing only the second select
            $device
                .empty()
                .append("<option value=\"default2\" name=\"\">Select your device</option>")
                .append("<option value=\"PHI100720H\" title=\"iPhone\" name=\"_iphone\">iPhone</option>")
                .append("<option value=\"iPad\" title=\"iPad\" name=\"_ipad\">iPad</option>")
                .append("<option value=\"PHI100720I\" title=\"Android\" name=\"_android\">Android</option>")
                .append("<option value=\"WIN10TEDC\" title=\"Windows 10\" name=\"_windows10\">Windows 10</option>")
                .change(function () {
                    var dValue = this.value;
                    var dName = $(this).find('option:selected').attr('name');

                    $($getAppButton).attr('id', $getAppButtonName + dName + $getAppButtonDevice);

                    $deviceError.removeClass("error");

                    if (dValue == 'iPad') {
                        $form.find(".terms_details").hide();
                        $form.find(".getAppButton").css({
                            "margin-left": "138px"
                        });
                        $form.find(".phoneDetails label").addClass("hide");
                        $form.find(".phoneDetails span").addClass("hide");
                        $form.find(".phoneDetails .mobileAppPhone").addClass("hide");
                        $phoneError.removeClass("error");
                        $phoneInputs.prop('disabled', true);
                    } else {
                        $form.find(".terms_details").show();
                        $form.find(".getAppButton").css({
                            "margin-left": "5px"
                        });
                        $form.find(".phoneDetails label").removeClass("hide");
                        $form.find(".phoneDetails span").removeClass("hide");
                        $form.find(".phoneDetails .mobileAppPhone").removeClass("hide");
                        $phoneInputs.prop('disabled', false);
                    }

                    if (dValue == 'default2') {
                        $phoneInputs.prop('disabled', true);
                        $phoneError.removeClass("error");
                    }
                });
        });

        //        var app = jQuery('#MobileApp'),
        //        app.find('option[value="app1"]').prop('selected', true);
    },


    handleInputKeyUp: function (inputElement) {
        if ($(inputElement).val().length == $(inputElement).attr('maxlength')) {
            $(inputElement).nextAll('input.mobileAppPhone').first().focus();
        }
    },

    handleFormSubmit: function (form) {
        var $form = $(form);
        var formName = $form.data('name');

        if ($form.find("option:selected").val() == 'iPad') {
            /* App1 for Ipad */
            //cmCreateManualLinkClickTag(MobileAppUnit.prodLink,MobileAppUnit.iPadName,MobileAppUnit.cmCategory);
            window.open('http://www.bankofamerica.com/weblinking/?referredby=1HiPad');
            MobileAppUnit.gotoPane('mobileAppipad_end' + formName);
        } else if (MobileAppUnit.validateMobileAppForm(form)) {
            //cmCreateManualLinkClickTag(MobileAppUnit.prodLink,MobileAppUnit.getEventId($("#mobileDevice option:selected").val()),MobileAppUnit.cmCategory);

            //callFloodlight('1359940', 'enter782', '903019');

            //                $('input.mobileAppPhone').removeClass('error');
            //                $('#input.getMobileDevice_error').removeClass('error');

            var oType = $form.find('[name="getMobileApp_phoneType"]').val();
            var oNumber = $form.find('.mobileAppPhone')[0].value + '-' + $form.find('.mobileAppPhone')[1].value + '-' + $form.find('.mobileAppPhone')[2].value;

            $('#mobileAppOutput_type' + formName).html(MobileAppUnit.phoneNames[oType]);
            $('#mobileAppOutput_number' + formName).html(oNumber);

            //notice that the Qwasi api is in promo server, so this fix is only for promotions sites:
            var url = document.location.origin.replace('promotions', 'promo') +  MobileAppUnit.serviceUriApp;

            url = url + "?msisdn=" + oNumber.replace(/-/g, "") + "&message=" + oType + "&type=getWidgetApp";

            $("body").append("<div id='pvImg'></div>")
            $("#pvImg").html("<img src='" + url + "'>");

            MobileAppUnit.gotoPane('mobileApp_end' + formName);
        }
        //Core.print_iframe(MobileAppUnit.dartTagSrc, MobileAppUnit.dartTagType, MobileAppUnit.dartTagCat, false);
    },

    getEventId: function (device) {
        switch (device) {
            case 'PHI100720H':
                {
                    return MobileAppUnit.iphoneName;
                    break;
                }
            case 'PHI100720I':
                {
                    return MobileAppUnit.iphoneName;
                    break;
                }
        }
    },

    gotoPane: function (paneId) {
        var $el = $('#' + paneId);
        var $parent = $el.closest('#widget').first();

        $parent.find('div.pane.active').fadeOut(function () {
            var newPane = $el;
            newPane.fadeIn().addClass('active');
            $('#heading').html("");
            $('#subheading').html("");
        }).removeClass('active');

    },

    validateMobileAppForm: function (form) {
        var $form = $(form);

        var rules = [
            new ValidatorRule($form.find("option:selected").text(), $form.find(".getMobileDevice_error"), Validator.phoneSelection, true),
            new ValidatorRule($form.find('input.mobileAppPhone'), $form.find(".getMobileApp_phoneError"), Validator.digitLength, false)
        ];

        return Validator.checkRules(rules);
    }


};

var userAgent = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	iPhone: function() {
		return navigator.userAgent.match(/iPhone/);
	},
	iPad: function() {
		return navigator.userAgent.match(/iPad/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Mozilla: function() {
		return navigator.userAgent.match(/Mozilla/i);
	},
	Handset: function(){
		return userAgent.Android  | userAgent.iPhone;
	},
	Tablet: function(){
		return (userAgent.iPad() || (userAgent.Android() && window.innerWidth >= 600));
	},
	any: function(){
		return userAgent.Android | userAgent.iPhone | userAgent.iPad | userAgent.Opera;
	}
};

var Validator = {
    checkRules: function (rules) {
        var rulesPassed = true;
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            var rulePassed = rule.passed();
            var errEl = rule.getErrEl();
            //            $('#' + rule.errorId).toggleClass('error', !rulePassed);
            errEl.toggleClass('error', !rulePassed);
            if (!rulePassed) {
                rulesPassed = false;
                if (rule.breakOnFail) {
                    for (var j = i + 1; j < rules.length; j++) {
                        rules[j].getErrEl().removeClass('error');
                        //                        $('#' + rules[j].errorId).removeClass('error');
                    }
                    errEl.attr('href', '#').focus();
                    //                    $('#' + rule.errorId).attr('href','#').focus();
                    break;
                } else {
                    errEl.attr('href', '#').focus();
                    //                    $('#' + rule.errorId).attr('href','#').focus();
                }
            }
        }
        return rulesPassed;
    },

    phoneSelection: function (selection) {
        var rulePassed = true;
        if (selection == 'Select your device') {
            rulePassed = false;

        }
        return rulePassed;
    },

    appSelection: function (selection) {
        var rulePassed = true;
        if (selection == 'Select Your App') {
            rulePassed = false;

        }
        return rulePassed;
    },
    digitLength: function (selection) {
        var rulePassed = true;

        selection.each(function () {
            var digitTest = new RegExp('^\\d{' + $(this).attr('maxlength') + '}$');
            if (!digitTest.test($(this).val())) {
                rulePassed = false;
            }
        });

        return rulePassed;
    },

    toggleErrorLabel: function (id, passed) {
        $('label[for="' + id + '"]').toggleClass('error', !passed);
    }
};

function ValidatorRule(selection, /*errorId*/ errorEl, method, breakOnFail) {
    this.selection = selection;
    this.selector = selection.selector;
    //    this.errorId = errorId;
    this.getErrEl = function () {
        return errorEl;
    };
    this.breakOnFail = breakOnFail;

    this.passed = pubPassed;

    function pubPassed() {
        return method(selection);
    }
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fun /*, thisp*/ ) {
        var len = this.length >>> 0;
        if (typeof fun != "function")
            throw new TypeError();

        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this) {
                fun.call(thisp, this[i], i, this);
            }
        }
    };
}

/*
 *  Project: Accordion to tabs
 *  Description: Presente content sections like accordion on smaller devices and like tabs on larger devices
 *  Author: laurentperroteau.com
 *  License: MIT
 */

;
(function($, window, document, undefined) {

    // Create the defaults once
    var pluginName = 'accordionToTabs',
        defaults = {
            classMenuSmaller: '.tab-menu-mobile',
            classMenuHigher: '.tab-menu',
            classMenuHigherTrigger: '.tab-menu--trigger',
            classTabsSection: '.tab-container--section',
            breakpoint: '960px' // can be px, ems, rems
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            this.activeTab();
        },

        cache: {
            flagTabOpen: false
        },

        activeTab: function(idTabToActivate) {

            var $container = $(this.element);

            // Si une ID est passé, on active la tab correspondante
            if (idTabToActivate !== undefined) {
                if (matchMedia('only screen and (max-width: ' + this.options.breakpoint + ')').matches) {
                    this._actionOnClickSmaller(idTabToActivate, $container);
                } else {
                    this._actionOnClickHigher(idTabToActivate, $container);
                }
            } else {

                // Activer la première tab si pas mobile
                if (matchMedia('only screen and (min-width: ' + this.options.breakpoint + ')').matches) {
                    var $parentMenu = $(this.options.classMenuHigher);

                    // Sur le menu
                    for (var i = 0; i < $parentMenu.length; i++) {
                        $parentMenu.eq(i).find(this.options.classMenuHigherTrigger).first().addClass('is-active');
                    };
                    // Et sur la tab
                    $container.find(this.options.classTabsSection).first().addClass('is-visible');

                }

                var self = this;

                // Action en mobile
                $container.find(this.options.classMenuSmaller).on('click', function(e) {
                    e.preventDefault();

                    self._actionOnClickSmaller($(this), $container);
                });

                // Action en tablet/desktop
                var firstIdTab = $container.find(this.options.classTabsSection).first().attr('id');

                // A partir de la ID de la première tab, 
                //     on retrouve sont trigger, 
                //     on remonte à son parent
                //     et on ajouter l'event sur tous les liens
                $('a[href="#' + firstIdTab + '"]' + this.options.classMenuHigherTrigger)
                    .closest(this.options.classMenuHigher)
                    .find(this.options.classMenuHigherTrigger)
                    .on('click', function(e) {
                        e.preventDefault();

                        self._actionOnClickHigher($(this), $container);
                    });
            }
        },


        /**
         * Action sur les petits devices
         * ==============================
         * @param  {object/string} $trigger => si utilisation de la méthode activeTab() en déhors du plugin, $trigger est la ID de la tab à ouvrir      
         * @param  {object} $container => les conteneurs des tabs
         */
        _actionOnClickSmaller: function($trigger, $container) {

            var tabId;

            if (typeof $trigger === 'string') {
                tabId = '#' + $trigger;
                $trigger = $(this.options.classMenuSmaller + '[href=' + tabId + ']');
            } else {
                tabId = $trigger.attr('href');
            }

            var $tabToShow = $(tabId);

            if ($tabToShow.length > 1)
                console.error('Une id est dupliqué');

            // Désactiver tous les menus
            $container.find(this.options.classMenuSmaller).removeClass('is-active');

            // Si courant ouvert, on ferme tout : sinon on ouvre le courant
            if ($tabToShow.hasClass('is-visible')) {
                this._closeAllTabs($tabToShow, $container);
            } else {
                $trigger.addClass('is-active');
                // Activer aussi le lien pour higher
                $('a[href="' + tabId + '"]' + this.options.classMenuHigherTrigger).addClass('is-active');
                this._switchTabs($tabToShow, $container);
            }
        },

        /**
         * Action sur les grands devices
         * ==============================
         * @param  {object/string} $trigger => si utilisation de la méthode activeTab() en déhors du plugin, $trigger est la ID de la tab à ouvrir      
         * @param  {object} $container => les conteneurs des tabs
         */
        _actionOnClickHigher: function($trigger, $container) {

            var tabId;

            if (typeof $trigger === 'string') {
                tabId = '#' + $trigger;
                $trigger = $(this.options.classMenuHigherTrigger + '[href=' + tabId + ']');
            } else {
                tabId = $trigger.attr('href');
            }

            var $tabToShow = $(tabId);

            if ($tabToShow.length > 1)
                console.error('Une id est dupliqué');

            // Activer la tab du menu
            $trigger.closest(this.options.classMenuHigher).find(this.options.classMenuHigherTrigger).removeClass('is-active');

            $trigger.addClass('is-active');

            this._switchTabs($tabToShow, $container);
        },

        _closeAllTabs: function($currentTab, $container) {

            if ($container.length)
                $container.find(this.options.classTabsSection).removeClass('is-visible');
        },

        _switchTabs: function($tab, $container) {

            this._closeAllTabs($tab, $container);

            $tab.addClass('is-visible');

            // Si petit device on scroll jusqu'à l'élément et ce n'est pas la première action
            if (matchMedia('only screen and (max-width: ' + this.options.breakpoint + ')').matches && this.cache.flagTabOpen != false) {
                // Si la tab active était avant, on scroll
                if (this.cache.flagTabOpen.index() > $tab.index()) {
                    $.scrollTo('#' + $tab.attr('id'), 500);
                } else {
                    // Si la tab active était après, on scroll à celle-ci 
                    //     et le temps qu'elle se ferme et on scroll
                    // $.scrollTo( '#'+ this.cache.flagTabOpen.attr('id'), 500 );
                    setTimeout(function() {
                        $.scrollTo('#' + $tab.attr('id'), 500);
                    }, 500);
                }
            }

            // Garde en mémoire la tab ouverte
            this.cache.flagTabOpen = $tab;
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations and allowing any
    // public function (ie. a function whose name doesn't start
    // with an underscore) to be called via the jQuery plugin,
    // e.g. $(element).defaultPluginName('functionName', arg1, arg2)
    $.fn[pluginName] = function(options) {
        var args = arguments;

        if (options === undefined || typeof options === 'object') {
            return this.each(function() {

                if (!$.data(this, 'plugin_' + pluginName))
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            });

        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;

            this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);

                if (instance instanceof Plugin && typeof instance[options] === 'function')
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });

            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, window, document));

/*!
Copyright (c) 2011, 2012 Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input
License is there: https://github.com/julienw/jquery-trap-input/blob/master/LICENSE
This is version 1.2.0.
*/(function(a,b){function d(a){if(a.keyCode===9){var b=!!a.shiftKey;e(this,a.target,b)&&(a.preventDefault(),a.stopPropagation())}}function e(a,b,c){var d=i(a),e=b,f,g,h,j;do{f=d.index(e),g=f+1,h=f-1,j=d.length-1;switch(f){case-1:return!1;case 0:h=j;break;case j:g=0}c&&(g=h),e=d.get(g);try{e.focus()}catch(k){}}while(b===b.ownerDocument.activeElement);return!0}function f(){return this.tabIndex>0}function g(){return!this.tabIndex}function h(a,b){return a.t-b.t||a.i-b.i}function i(b){var c=a(b),d=[],e=0;return m.enable&&m.enable(),c.find("a[href], link[href], [draggable=true], [contenteditable=true], :input:enabled, [tabindex=0]").filter(":visible").filter(g).each(function(a,b){d.push({v:b,t:0,i:e++})}),c.find("[tabindex]").filter(":visible").filter(f).each(function(a,b){d.push({v:b,t:b.tabIndex,i:e++})}),m.disable&&m.disable(),d=a.map(d.sort(h),function(a){return a.v}),a(d)}function j(){return this.keydown(d),this.data(c,!0),this}function k(){return this.unbind("keydown",d),this.removeData(c),this}function l(){return!!this.data(c)}var c="trap.isTrapping";a.fn.extend({trap:j,untrap:k,isTrapping:l});var m={};a.find.find&&a.find.attr!==a.attr&&function(){function e(a){var d=a.getAttributeNode(c);return d&&d.specified?parseInt(d.value,10):b}function f(){d[c]=d.tabIndex=e}function g(){delete d[c],delete d.tabIndex}var c="tabindex",d=a.expr.attrHandle;m={enable:f,disable:g}}()})(jQuery);
var stateOstate;
var video;

function getStateCookie() {
    return jimAuld.utils.cookies.get("state");
}

function locationOriginFix() {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
}

// var apiToken = 'Na1KF7o-N8nzzlY-SLbEmakg8GcWC_VenKy29J_UzDF8yWedxzzWlw..';
var apiToken = 'smCTG58lMN9ceFspReO9KGuKen7vDGD-BYXuVgh9-kBFIx1cnUObng..';
var playerKey = 'AQ~,AAAAAGp_KJU,ro5jtaeQ_NNov9E80GUQKcb5G6lVJY9D';
var videoPlaceholderId = ['videoPlaceholderBill', 'videoPlaceholderTransfers'];

/*
Plugin support for videojs
Include the plugin name and options in the videojsPlugins array below
*/

var videojsPlugins = [
    // {
    //   name: 'dotSubTrack',
    //   options: {
    //     dotSubUsername : 'bofa'
    //   }
    // },
    // {
    //   name: 'anotherPlugin',
    //   options: {
    //     wrapper : true
    //   }
    // }
];

var player;
var modVP;
var modExp;
var modCon;

function myTemplateLoaded(experienceID) {
    player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    modCon = player.getModule(brightcove.api.modules.APIModules.CONTENT);
    modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, onTemplateReady);
}

function onTemplateReady(evt) {
    modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaEventFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.CHANGE, onMediaEventFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaEventFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.ERROR, onMediaEventFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, onMediaEventFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onMediaProgressFired);
    modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaEventFired);
}


function onMediaEventFired(evt) {
    if (evt.type === brightcove.api.events.MediaEvent.BEGIN) {

    }
}

$(document).ready(function () {

    var LASTCLICKED;

    var $videoPlaceholders = $('[id^="videoPlaceholder"]');

    if (!!$videoPlaceholders.length) {
        for (var i = 0, l = $videoPlaceholders.length; i < l; i++) {
            window.createPlayer(apiToken, playerKey, videoPlaceholderId[i], videojsPlugins);
        }
    }

    video = $("#flashSlash").html();
    $(".popup").click(function (evt) {
        LASTCLICKED = this;

        $("#video").show().addClass("active");
        if ($("#flashSlash").html() == "") {
            $("#flashSlash").html(video);
            $("#close").click(function () {
                //cmCreateManualLinkClickTag("http://promo.bankofamerica.com", "Video_Close", "OSP:Mkt-M:BillPay;AB_OnlinePaymentsMobile");
                $("#video").removeClass("active");
                hideVideo();
                $(LASTCLICKED).focus();
            });
        }
        setTimeout(function () {
            $(".vjs-play-control").focus();
            $('.vjs-fullscreen-control').attr('tabindex', 0);
        }, 500);

    });

    //delay to prevent DartTag abort
    $('.tab-two').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            window.location.href = 'transfers.html';
        }, 200);
    });

    $("#close").click(function () {
        hideVideo();
        $(".popup").focus();
    });

    setUpCTAButtons();
    //lWArgs();
    setUpTabIndex();
    setUpAllLinks();
    //startVid();
    $(".popUpRates").click(function () {
        stateScreen();
        foil = false;
    });
    $("#stateSelectButton").click(function () {
        setState();
    });
});

jQuery.fn.outerHTML = function () {
    return $('<div></div>').append(this.clone()).html();
}

function setUpAllLinks() {
    // set up for key navigation
    $('a').each(function () {
        $(this).hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        });
        $(this).focus(function () {
            $(this).addClass('active');
        });
        $(this).blur(function () {
            $(this).removeClass('active');
        });
    });
}

function setUpCTAButtons() {
    $('.ctaButton > a').each(function () {
        $(this).focus(function () {
            $(this).parent().addClass('ctaMouseOver');
        }).blur(function () {
            $(this).parent().removeClass('ctaMouseOver');
        }).mouseover(function () {
            $(this).parent().addClass('ctaMouseOver');
        }).mouseout(function () {
            $(this).parent().removeClass('ctaMouseOver');
        }).mousedown(function () {
            $(this).parent().addClass('ctaMouseDown');
        }).mouseup(function () {
            $(this).parent().removeClass('ctaMouseDown');
        });
    })
}

function setUpTabIndex() {
    var tabindex = 1;
    $('a select input').each(function () {
        $(this).attr('tabindex', tabindex);
        tabindex++;
    });
}

function page_init(bDisabled) {
    if (bDisabled) {
        //alert('disabled');
        $('.backgroundImageLink a').each(function () {
            $(this).css('text-indent', '0px');
        })
        $('.backgroundImageText').each(function () {
            $(this).css('text-indent', '0px');
            $(this).css('height', 'auto');
        })
        $('.noImageVersion').each(function () {
            $(this).addClass('backgroundImagesOff');
        })
    } else {
        return;
    }
}

function startVid(id) {
    $("#video").css('visibility', 'visible');
    $(".vjs-control-bar").css('visibility', 'visible');
    $('body').addClass('on-video');
    $("[data-bc-id=\""+ id +"\"]").show().find(".vjs-big-play-button").trigger("click");
    //	$("#videoBackground").css('visibility','vissible');
    $("#FlashEndFrameSection").css('visibility', 'hidden');
    //$("#video").css("visibility","visible");
    $("#videoBackground").css('visibility', 'visible');
    $("#videoBackground").fadeTo(10, 0.5);
    if ($.flash != undefined) {
        if ($.flash.available != undefined) {
            if ($.flash.available && $.flash.hasVersion(9.0)) {
                // has flash (show flash div)
                $('#FlashWrapper').css('visibility', 'visible');
                loadFlash();
                //setUpTabIndex();
            } else {
                // no flash (hide flash div)
                $('#FlashWrapper').css('visibility', 'hidden');
                $('#FlashEndFrameSection').css('visibility', 'visible');
                $('#PlayVideoButton').css('visibility', 'hidden');
                setUpTabIndex();
            }
        } else {
            // no flash (hide flash div)
            $('#FlashWrapper').css('visibility', 'hidden');
            $('#FlashEndFrameSection').css('visibility', 'visible');
            $('#PlayVideoButton').css('visibility', 'hidden');
            setUpTabIndex();
        }
    }

}
// hide flash content
//Not using function below for this video version 03/2011
function finishVid() {
    $('#FlashWrapper').css('visibility', 'hidden');
    $('#FlashEndFrameSection').css('visibility', 'visible');
    $('#FlashSection').html('');
    setUpTabIndex();
    $(".vjs-playing").trigger("click");
}
// reload
function restartVid() {
    $('#FlashWrapper').css('visibility', 'visible');
    $('#FlashEndFrameSection').css('visibility', 'hidden');
    loadFlash();
}

function loadFlash() {
    $('#FlashSection').flash({
        //id: 'bac_paynow_video',
        //swf: 'swf/bac_paynow_video.swf',
        //width: 668,
        //height: 376,
        //hasVersion: 9,
        //expressInstaller: 'swf/expressInstall.swf',
        //params: { quality: 'high', wmode: 'window', allowScriptAccess: 'always' , wmode: 'transparent'},
        //attributes: { id: 'bac_paynow_video', name: 'bac_paynow_video', type: 'application/x-shockwave-flash' },
        //flashvars: { }
    });
}

//called by jquery listener .popUpRates, checks if  cookie set, if so selects redirect link, if not reveals st selector.
function stateScreen() { // alert("stateScreen");
    stateOstate = getStateCookie()
        //finishVid();
    if (null != stateOstate) { //
        //alert("state = "+stateOstate);
        switch (stateOstate) {
            case "WA":
            case "ID": // alert("WA or ID");
                window.open("https://www1.bankofamerica.com/deposits/odao/viewapp/view_rates.cfm?prod_cd=CHFG", "ratesWindow",
                    "status = 0, height = 345, width = 490, resizable = 0");
                break;
            case "CA": //alert("CA");
                window.open("https://www1.bankofamerica.com/deposits/odao/viewapp/view_rates.cfm?prod_cd=CHPR", "ratesWindow",
                    "status = 0, height = 345, width = 490, resizable = 0");
                break;
            default: // alert("default");
                window.open("https://www1.bankofamerica.com/deposits/odao/viewapp/view_rates.cfm?prod_cd=CHTI", "ratesWindow",
                    "status = 0, height = 345, width = 490, resizable = 0");
                break;
        }
    } else { // alert("no st");
        //$('#stateSelectorBackground').css('visibility','visible');
        $('#stateSelectorBackground').css('opacity', 0.4);
        $("#stateSelectorBackground").css('filter', 'alpha(opacity=40)');
        $('#stateSelectorBackground').css('visibility', 'visible');
        //$("#stateSelectorBackground").animate({ opacity: 0.4, filter: 'alpha(opacity=40)'}, 200 );
        $("#stateSelector").fadeIn(200);

    };
};

// invoked by listener on submit, invokes setCookieWithState to set cookie, and invokes stateScreen to selects redirect link
function setState() {
    formSub = $("#stateSelector :selected").val();
    //alert("frmSub:"+formSub);
    if (formSub == "none") {
        alert("Please Select a state.");
    } else {
        setCookieWithState(formSub);
        stateScreen();
        $("#stateSelector").fadeOut(500);
        $('#stateSelectorBackground').fadeOut(600);
    }
};

//set state value of cookie via js/cookie_utils.js
function setCookieWithState(state) { // alert("setCookieWithState("+state+")");
    jimAuld.utils.cookies.set("state", state, 24, "", ".bankofamerica.com");
}

function hideVideo(evt) {
    $("#videoBackground").css('visibility', 'hidden');
    $("#video").css('visibility', 'hidden').removeClass("active");
    $('body').removeClass('on-video');
    $(".vjs-control-bar").css('visibility', 'hidden');
    $('[id^="videoPlaceholder"]').hide();

    if (window.myPlayer) {
        $(".vjs-playing").trigger("click");
    } else {
        var BCplayer = brightcove.api.getExperience('myExperience2099729982001'),
            APIModules = brightcove.api.modules.APIModules,
            videoPlayer = BCplayer.getModule(APIModules.VIDEO_PLAYER);
        $(".vjs-playing").trigger("click");
    }
}

function setDownloadLink() {

    var APPURL = '#';

    if (userAgent.Android()) {
        if (window.innerWidth >= 600) {
            APPURL = 'https://play.google.com/store/apps/details?id=com.tablet.bofa';
        } else {
            APPURL = 'https://play.google.com/store/apps/details?id=com.infonow.bofa';
        }
    } else if (userAgent.iPad()) {
        APPURL = 'https://itunes.apple.com/us/app/bank-america-mobile-banking/id284847138?mt=8&ign-mpt=uo%3D4';
    } else if (userAgent.iPhone()) {
        APPURL = 'https://itunes.apple.com/us/app/bank-america-mobile-banking/id284847138?mt=8&ign-mpt=uo%3D4';
    }

    $('.js_url_app').attr('href', APPURL);
};

jQuery(document).ready(function () {
    MobileAppUnit.init();
    setDownloadLink();
    locationOriginFix();
});