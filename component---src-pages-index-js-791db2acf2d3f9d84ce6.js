(self.webpackChunkunilaw=self.webpackChunkunilaw||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8997:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Se}});var r=n(7294),o=n(396),i=n(8821),a=n(9677),c=n(3908),u=n(5855),s=n(5324),l=n(7738);var f,p,d,b,h=n(5697),y=n.n(h),m=n(4839),g=n.n(m),v=n(2993),T=n.n(v),w=n(6494),E=n.n(w),O="bodyAttributes",A="htmlAttributes",C="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(S).map((function(e){return S[e]})),"charset"),j="cssText",x="href",P="http-equiv",L="innerHTML",N="itemprop",I="name",M="property",R="rel",z="src",_="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H="defaultTitle",q="defer",B="encodeSpecialCharacters",F="onChangeClientState",Y="titleTemplate",U=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),K=[S.NOSCRIPT,S.SCRIPT,S.STYLE],V="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=ie(e,S.TITLE),n=ie(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ie(e,H);return t||r||void 0},te=function(e){return ie(e,F)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return $({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},oe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===R&&"canonical"===e[n].toLowerCase()||u===R&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==L&&c!==j&&c!==N||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=E()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(f=Date.now(),function(e){var t=Date.now();t-f>16?(f=t,e(t)):setTimeout((function(){ae(e)}),0)}),ce=function(e){return clearTimeout(e)},ue="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},fe=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;he(S.BODY,r),he(S.HTML,o),be(f,p);var d={baseTag:ye(S.BASE,n),linkTags:ye(S.LINK,i),metaTags:ye(S.META,a),noscriptTags:ye(S.NOSCRIPT,c),scriptTags:ye(S.SCRIPT,s),styleTags:ye(S.STYLE,l)},b={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,b,h)},de=function(e){return Array.isArray(e)?e.join(""):e},be=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),he(S.TITLE,t)},he=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(V):n.getAttribute(V)!==a.join(",")&&n.setAttribute(V,a.join(","))}},ye=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[V]=!0,i=ge(n,o),[r.createElement(S.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=me(n),i=de(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case A:return{toComponent:function(){return ge(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[V]=!0,o);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===L||n===j){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===L||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ve(S.BASE,t,r),bodyAttributes:ve(O,n,r),htmlAttributes:ve(A,o,r),link:ve(S.LINK,i,r),meta:ve(S.META,a,r),noscript:ve(S.NOSCRIPT,c,r),script:ve(S.SCRIPT,u,r),style:ve(S.STYLE,s,r),title:ve(S.TITLE,{title:f,titleAttributes:p},r)}},we=g()((function(e){return{baseTag:re([x,_],e),bodyAttributes:ne(O,e),defer:ie(e,q),encode:ie(e,B),htmlAttributes:ne(A,e),linkTags:oe(S.LINK,[R,x],e),metaTags:oe(S.META,[I,k,P,M,N],e),noscriptTags:oe(S.NOSCRIPT,[L],e),onChangeClientState:te(e),scriptTags:oe(S.SCRIPT,[z,L],e),styleTags:oe(S.STYLE,[j],e),title:ee(e),titleAttributes:ne(C,e)}}),(function(e){fe&&se(fe),e.defer?fe=ue((function(){pe(e,(function(){fe=null}))})):(pe(e),fe=null)}),Te)((function(){return null})),Ee=(p=we,b=d=function(e){function t(){return Z(this,t),Q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return $({},r,((t={})[n.type]=[].concat(r[n.type]||[],[$({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return $({},o,((t={})[r.type]=a,t.titleAttributes=$({},i),t));case S.BODY:return $({},o,{bodyAttributes:$({},i)});case S.HTML:return $({},o,{htmlAttributes:$({},i)})}return $({},o,((n={})[r.type]=$({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=$({},t);return Object.keys(e).forEach((function(t){var r;n=$({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(G(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),o=$({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(p,o)},J(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(r.Component),d.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);Ee.renderStatic=Ee.rewind;var Oe=["children"],Ae=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Oe);return r.createElement(Ee,Object.assign({title:"Unilaw - Znamy odpowiedzi na Twoje pytania"},n),t)},Ce=function(){var e=(0,r.useRef)(),t=(0,i.dz)().width,f=(0,i.RO)(e);return r.createElement(r.Fragment,null,r.createElement(Ae,null),r.createElement(u.Z,{isHeaderVisible:f}),r.createElement("div",{className:"container"},r.createElement("div",{className:"navigation--block"},r.createElement("div",{className:"navigation-header--wrapper",ref:e},t>1190?r.createElement(o.S,{className:"navigation-header-image",src:"../../../assets/raster/landing-background.png",__imageData:n(8771)}):null),r.createElement("div",{className:"navigation-invite"},r.createElement(a.Nh,null)),r.createElement("div",{className:"navigation-specialist"},r.createElement(a.g2,null))),r.createElement("div",{className:"how-it-work--block"},r.createElement(s.gw,{progress:["Opisz krótko swój problem","Wybierz specjalistę z listy","Rozwiąż problem!"],text:"Jak to działa? To bardzo proste:"})),r.createElement("div",{className:"why-we--block"},r.createElement(s.qp,null)),r.createElement("div",{className:"opinion--block"},r.createElement(s._f,null))),r.createElement(c.Z,{text:"Dołącz do naszego newslettera!",label:"Twój email",placeholder:"Email",buttonText:"Dołącz"}),r.createElement(l.Z,null))},Se=function(){return r.createElement(Ce,null)}},8771:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182848","images":{"fallback":{"src":"/static/77b3e023e9d1389891ad2821bf079423/3753e/landing-background.png","srcSet":"/static/77b3e023e9d1389891ad2821bf079423/6124e/landing-background.png 960w,\\n/static/77b3e023e9d1389891ad2821bf079423/b25bc/landing-background.png 1920w,\\n/static/77b3e023e9d1389891ad2821bf079423/3753e/landing-background.png 3840w","sizes":"(min-width: 3840px) 3840px, 100vw"},"sources":[{"srcSet":"/static/77b3e023e9d1389891ad2821bf079423/781ec/landing-background.webp 960w,\\n/static/77b3e023e9d1389891ad2821bf079423/87d59/landing-background.webp 1920w,\\n/static/77b3e023e9d1389891ad2821bf079423/ccdfb/landing-background.webp 3840w","type":"image/webp","sizes":"(min-width: 3840px) 3840px, 100vw"}]},"width":3840,"height":2062}')}}]);
//# sourceMappingURL=component---src-pages-index-js-791db2acf2d3f9d84ce6.js.map