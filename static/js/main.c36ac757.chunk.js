(this["webpackJsonptreebank-template"]=this["webpackJsonptreebank-template"]||[]).push([[0],{147:function(e,t,a){},16:function(e,t,a){e.exports={dropdownButton:"ControlPanel_dropdownButton__1o6TV",dropdownScroll:"ControlPanel_dropdownScroll__17rgQ",dummyIcon:"ControlPanel_dummyIcon__3Nk3N",link:"ControlPanel_link__OEqVs"}},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(53),c=a.n(o),i=(a(62),a(63),a(64),a(13)),s=a(2),l=a(34),u=a(20),m=a(1),d=Object(m.shape)({start:m.number,end:m.number,numbers:Object(m.arrayOf)(Object(m.oneOfType)([m.string]))}),p=Object(m.shape)({locus:m.string.isRequired,path:m.string.isRequired,xml:m.string.isRequired,link:m.string,notes:m.string,chunks:d.isRequired}),h=Object(m.shape)({path:m.string.isRequired,author:m.string.isRequired,work:m.string.isRequired,editors:Object(m.oneOfType)([m.string,Object(m.arrayOf)(m.string)]).isRequired,sections:Object(m.arrayOf)(p).isRequired}),b=Object(m.shape)({title:Object(m.oneOfType)([m.string,m.element]).isRequired,publications:Object(m.arrayOf)(h),text:m.string}),g=(Object(m.shape)({logo:m.string,link:m.string,title:Object(m.oneOfType)([m.string,m.element]).isRequired,subtitle:m.string.isRequired,copyright:m.string,doi:m.string,report:m.string,github:m.string,twitter:m.string,collections:Object(m.arrayOf)(b).isRequired}),Object(m.shape)({search:m.string.isRequired}),Object(m.shape)({params:Object(m.shape)({chunk:m.string.isRequired}).isRequired}),Object(m.shape)({params:Object(m.shape)({publication:m.string.isRequired}).isRequired}),Object(m.shape)({w:Object(m.arrayOf)(m.string),config:m.string}),function(e){var t=e.logo,a=e.link,n=e.children;return void 0!==a?r.a.createElement(u.PerseidsHeader,{logo:t,props:{href:a}},n):r.a.createElement(u.PerseidsHeader,{logo:t},n)});g.defaultProps={logo:void 0,link:void 0};var f=g,k=a(54),v=a.n(k),E=a(35),y=a.n(E),O=function(e){return Object(E.uriTransformer)("/"===e[0]?"".concat("/treebank-template").concat(e):e)},w=function(e){return r.a.createElement(y.a,Object.assign({},e,{transformLinkUri:O}))},j=function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark ".concat(v.a.jumbotronSmall)},r.a.createElement("div",{className:"container text-light"},r.a.createElement("h1",{className:"display-4"},t),a&&function(e){return r.a.createElement(w,{source:e})}(a)))},x=function(e){var t=e.path,a=e.author,o=e.work,c=e.editors,i=e.sections;return r.a.createElement("tr",{className:"d-flex",key:t},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"row"},a),r.a.createElement("td",{className:"col-md-4 d-none d-md-block"},o),r.a.createElement("td",{className:"col-8 col-sm-7 d-block d-md-none"},r.a.createElement("strong",null,a),","," ",r.a.createElement("em",null,o)),r.a.createElement("td",{className:"col-md-3 col-lg-3 d-none d-md-block"},function(e){return Array.isArray(e)?r.a.createElement("ul",{className:"pl-1"},e.map((function(e){return r.a.createElement("li",{key:e},e)}))):e}(c)),r.a.createElement("td",{className:"col-4 col-sm-5 col-md-2 col-lg-2 text-right"},i.map((function(e){return function(e){var t=e.locus,a=e.path,o=function(e){var t=e.start,a=e.numbers;return t||a[0]}(e.chunks);return r.a.createElement(n.Fragment,{key:a},r.a.createElement("a",{href:"".concat(a,"/").concat(o)},t),r.a.createElement("br",null))}(e)}))))},N=function(e){var t=e.title,a=e.publications,n=e.text;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3"},r.a.createElement("div",{className:"col-12"},t&&r.a.createElement("h2",null,t),n&&r.a.createElement(w,{source:n}),r.a.createElement("table",{className:"table"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-md-3 d-none d-md-block",scope:"col"},"Author"),r.a.createElement("th",{className:"col-8 col-sm-7 col-md-4",scope:"col"},"Work"),r.a.createElement("th",{className:"col-md-3 col-lg-3 d-none d-md-block",scope:"col"},"Editors"),r.a.createElement("th",{className:"col-4 col-sm-5 col-md-2 col-lg-2",scope:"col"},"Locus"))),r.a.createElement("tbody",null,a.map((function(e){return x(e)}))))))))};N.defaultProps={publications:void 0,text:void 0};var L=N,S=function(e){var t=e.config,a=t.logo,n=t.link,o=t.title,c=t.subtitle,i=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:a,link:n},o),r.a.createElement(j,{title:o,subtitle:c}),i.map((function(e){return function(e){var t=e.title,a=e.text,n=e.publications;return r.a.createElement(L,{key:t,title:t,text:a,publications:n})}(e)})))},_=a(3),R=a(4),I=a(7),A=a(6),C=a(8),M=a(21),P=a.n(M),T={main:{debug:!1,showKeys:!1,chunkParam:"chunk",auxConfPath:"".concat("/treebank-template","/arethusa/configs"),retrievers:{TreebankRetriever:{resource:"Gardener",docIdentifier:"treebank",preselector:"w"}},plugins:["text","morph","relation","depTree","search"],layouts:[{name:"widget",template:"js/templates/widget.html"}]},notifier:{disable:!0},navigator:{chunkSize:1},navbar:!1,resources:{Gardener:{route:"".concat("/treebank-template","/xml/:doc"),params:["doc"]},lexInvFusekiEndpoint:{route:"https://fuseki.perseids.org/fuseki/ds/query?format=json"},morphologyServiceLat:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=lat&engine=morpheuslat"},newMorphologyServiceLat:{route:"https://morph.perseids.org/analysis/word?lang=lat&engine=morpheuslat"},morphologyServiceGrc:{route:"https://services.perseids.org/bsp/morphologyservice/analysis/word?lang=grc&engine=morpheusgrc"},newMorphologyServiceGrc:{route:"https://morph.perseids.org/analysis/word?lang=grc&engine=morpheusgrc"},morphologyServicePer:{route:"https://localhost/extapi/morphologyservice/analysis/word?lang=per&engine=hazm"},citeMapper:{route:"https://services.perseids.org/cite_mapper/find_cite"},sgGrammar:{route:"https://services.perseids.org/sg/:doc.html"}},plugins:{text:{main:!0,template:"js/templates/text_with_context.html"},depTree:{main:!0,contextMenu:!1,contextMenuTemplate:"js/arethusa.dep_tree/templates/context_menu.html",template:"js/templates/dep_tree.html"},morph:{retrievers:{BspMorphRetriever:{resource:"morphologyServiceLat"}},template:"js/templates/morph3.html",contextMenu:!0,contextMenuTemplate:"js/arethusa.morph/templates/context_menu.html",lexicalInventory:{retriever:{LexicalInventoryRetriever:{resource:"lexInvFusekiEndpoint"}}},matchAll:!0,"@include":"js/arethusa.morph/configs/morph/lat_attributes.json",noRetrieval:"online"},search:{template:"js/templates/search.html",regex:!0},relation:{advancedMode:!0,relations:{}}},keyCapture:{regex:{greek:{\u03b1:"[\u03b1\u1f01\u1f05\u1f03\u1f07\u1f00\u1f04\u1f02\u1f06\u03ac\u1f70\u1fb6\u1f81\u1f85\u1f83\u1f87\u1f80\u1f84\u1f82\u1f86\u1fb4\u1fb2\u1fb7\u1fb3]",\u03b5:"[\u03b5\u03ad\u1f72\u1f10\u1f11\u1f14\u1f12\u1f15\u1f13]",\u03b7:"[\u03b7\u1f21\u1f25\u1f23\u1f27\u1f20\u1f24\u1f22\u1f26\u03ae\u1f74\u1fc6\u1f91\u1f95\u1f93\u1f97\u1f90\u1f94\u1f92\u1f96\u1fc4\u1fc2\u1fc7\u1fc3]",\u03b9:"[\u03b9\u1f31\u1f35\u1f33\u1f37\u1f30\u1f34\u1f32\u1f36\u03af\u1f76\u1fd6]",\u03bf:"[\u03bf\u03cc\u1f78\u1f40\u1f41\u1f44\u1f42\u1f45\u1f43]",\u03c5:"[\u03c5\u1f51\u1f55\u1f53\u1f57\u1f50\u1f54\u1f52\u1f56\u03cd\u1f7a\u1fe6]",\u03c9:"[\u03c9\u1f61\u1f65\u1f63\u1f67\u1f60\u1f64\u1f62\u1f66\u03ce\u1f7c\u1ff6\u1fa1\u1fa5\u1fa3\u1fa7\u1fa0\u1fa4\u1fa2\u1fa6\u1ff4\u1ff2\u1ff7\u1ff3]"}},keys:{}}},q=JSON.parse(JSON.stringify(T));q.main.layouts=[{name:"main_with_sidepanel",template:"js/templates/main_with_sidepanel.html"}];a(147);var F="".concat("/treebank-template","/arethusa"),W=function(){function e(){Object(_.a)(this,e),this.render=this.render.bind(this)}return Object(R.a)(e,[{key:"render",value:function(e,t,a){var n,r,o=a.config,c=a.w,i=window,s=i.Arethusa,l=i.$;this.widget?this.doc!==e||this.chunk===t&&(n=this.w,r=c,(n||[]).sort().join(",")===(r||[]).sort().join(","))||(this.gotoSentence(t,c),function(e){e("#toast-container").remove()}(l)):(this.widget=new s,this.widget.on("treebank_container").from(F).with(function(e){return"sidepanel"===e?q:T}(o)).start({doc:e,chunk:t,w:c}),this.api=this.widget.api()),this.doc=e,this.chunk=t,this.w=c}},{key:"gotoSentence",value:function(e,t){return this.api.gotoSentence(e,t)}},{key:"getSubdoc",value:function(){return this.api.getSubdoc()}},{key:"getMorph",value:function(e,t){return this.api.getMorph(e,t)}},{key:"refreshView",value:function(){return this.api.refreshView()}},{key:"findWord",value:function(e,t,a,n){return this.api.findWord(e,t,a,n)}}]),e}(),D=a(55),V=a.n(D),H=a(24),Q=a(25),U=a(36),G=a(19),B=a.n(G),J=a(16),K=a.n(J),X=function(e,t){return e<t?e:t},z=function(e,t){return e>t?e:t},Y=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={refIsOpen:!1,settingsIsOpen:!1},n.getLines=n.getLines.bind(Object(C.a)(n)),n.getFbcnl=n.getFbcnl.bind(Object(C.a)(n)),n.createLink=n.createLink.bind(Object(C.a)(n)),n.toggleRefOpen=n.toggleRefOpen.bind(Object(C.a)(n)),n.toggleSettingsOpen=n.toggleSettingsOpen.bind(Object(C.a)(n)),n.renderSettingsLinks=n.renderSettingsLinks.bind(Object(C.a)(n)),n}return Object(R.a)(a,[{key:"getLines",value:function(){var e=this.props.chunks,t=e.start,a=e.end,n=e.numbers;if(n)return n;for(var r=[],o=t;o<=a;o+=1)r.push(o);return r}},{key:"getFbcnl",value:function(){var e=this.props,t=e.chunks,a=t.start,n=t.end,r=t.numbers,o=e.match.params.chunk,c=Number(o);return r?function(e,t){var a=t.indexOf(e);return[t[0],t[z(0,a-1)],e,t[X(t.length-1,a+1)],t[t.length-1]]}(o,r):[a,z(a,c-1),o,X(n,c+1),n]}},{key:"createLink",value:function(e){var t=this.props.linkQuery,a="./".concat(e);if(Object.entries(t).length>0){var n=B.a.stringify(t);return"".concat(a,"?").concat(n)}return a}},{key:"toggleRefOpen",value:function(){this.setState((function(e){return{refIsOpen:!e.refIsOpen}}))}},{key:"toggleSettingsOpen",value:function(){this.setState((function(e){return{settingsIsOpen:!e.settingsIsOpen}}))}},{key:"renderSettingsLinks",value:function(){var e=this.props.fullQuery,t=e.config,a="sidepanel"===t?"default":"sidepanel",n="sidepanel"===t?"Hide morphology":"Show morphology";return r.a.createElement("a",{href:"?".concat(B.a.stringify(Object(Q.a)({},e,{config:a}))),className:"dropdown-item"},n)}},{key:"render",value:function(){var e=this,t=this.state,a=t.refIsOpen,n=t.settingsIsOpen,o=this.getFbcnl(),c=Object(H.a)(o,5),s=c[0],l=c[1],u=c[2],m=c[3],d=c[4],p=this.getLines();return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"controlPanel"},r.a.createElement("ul",{className:"navbar-nav mr-auto ".concat(K.a.dummyIcon)}),r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(s)},"\xab First")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(l)},"\u2039 Back")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"btn btn-link nav-link text-light dropdown-toggle ".concat(K.a.dropdownButton),type:"button","aria-haspopup":"true","aria-expanded":a,onClick:this.toggleRefOpen},u),r.a.createElement("div",{className:"dropdown-menu ".concat(K.a.dropdownScroll," ").concat(a?"show":"")},p.map((function(t){return r.a.createElement(i.b,{className:"dropdown-item",key:t,to:e.createLink(t),onClick:e.toggleRefOpen},t)})))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(m)},"Next \u203a")),r.a.createElement("li",null,r.a.createElement(i.b,{className:"nav-link text-light ".concat(K.a.link),to:this.createLink(d)},"Last \xbb"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown dropleft"},r.a.createElement("button",{className:"btn btn-link nav-link text-light",type:"button","aria-haspopup":"true","aria-expanded":n,onClick:this.toggleSettingsOpen},r.a.createElement(U.b,{icon:U.a})),r.a.createElement("div",{className:"dropdown-menu ".concat(K.a.dropdownScroll," ").concat(n?"show":"")},this.renderSettingsLinks())))))}}]),a}(n.Component),Z=[{name:"w",type:"array"},{name:"config",type:"string",link:!0}],$=function(e,t){return"array"!==t||Array.isArray(e)?e:[e]},ee=function(e){var t=B.a.parse(e,{arrayFormat:"comma"}),a={};return Z.forEach((function(e){var n=e.name,r=e.type;Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=$(t[n],r))})),a},te=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).additionalArgs=n.additionalArgs.bind(Object(C.a)(n)),n.linkQuery=n.linkQuery.bind(Object(C.a)(n)),n.renderArethusa=n.renderArethusa.bind(Object(C.a)(n)),n}return Object(R.a)(a,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"additionalArgs",value:function(){var e=this.props.location.search;return ee(e)}},{key:"linkQuery",value:function(){return function(e){var t=ee(e),a={};return Z.forEach((function(e){var n=e.name,r=e.type;e.link&&Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=$(t[n],r))})),a}(this.props.location.search)}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk;(0,e.arethusa.render)(t,a,this.additionalArgs())}},{key:"render",value:function(){var e=this.props,t=e.chunks,a=e.match,n=this.linkQuery(),o=this.additionalArgs();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{match:a,chunks:t,fullQuery:o,linkQuery:n}),r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:V.a.treebankContainer})))}}]),a}(n.Component),ae=function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},function(e){return Array.isArray(e)?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("span",{key:e},e,r.a.createElement("br",null))}))):e}(t)))},ne=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={arethusaLoaded:!1,subDoc:""},n.setSubdoc=n.setSubdoc.bind(Object(C.a)(n)),n.arethusa=new W,n}return Object(R.a)(a,[{key:"componentDidMount",value:function(){window.document.body.addEventListener("ArethusaLoaded",this.setSubdoc)}},{key:"componentDidUpdate",value:function(e){var t=this.state.arethusaLoaded,a=this.props.location,n=e.location;t&&a!==n&&this.setSubdoc()}},{key:"componentWillUnmount",value:function(){window.document.body.removeEventListener("ArethusaLoaded",this.setSubdoc)}},{key:"setSubdoc",value:function(){var e=this.arethusa.getSubdoc();this.setState({subDoc:e,arethusaLoaded:!0})}},{key:"render",value:function(){var e,t,a=this.props,n=a.logo,o=a.link,c=a.publicationPath,i=a.author,s=a.work,l=a.editors,u=a.locus,m=a.publicationLink,d=a.notes,p=a.xml,h=a.chunks,b=a.match,g=a.location,k=this.state.subDoc;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:n,link:o},r.a.createElement("span",null,r.a.createElement("i",null,s)),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-3"},r.a.createElement("h2",null,r.a.createElement("span",null,i,",",r.a.createElement("i",null," ",s," "),u)),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,!!i&&ae("Author",i),!!s&&ae("Work",s),!!u&&function(e,t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},t," ",r.a.createElement("a",{href:"../".concat(a)},"(See all)")))}("Locus",u,c),!!k&&ae("Reference",k),!!l&&ae("Editors",l),!!m&&function(e,t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",null,r.a.createElement("a",{href:t},t)))}("Link",m),!!d&&(e="Notes",t=d,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e),r.a.createElement("td",{className:P.a.publicationRow},r.a.createElement(w,{source:t})))))),r.a.createElement("div",{className:P.a.treebankWrapper},r.a.createElement(te,{xml:p,chunks:h,location:g,match:b,arethusa:this.arethusa})),r.a.createElement("div",{className:"pt-1 pb-4 text-right"},r.a.createElement("a",{href:"".concat("/treebank-template","/xml/").concat(p),target:"_blank",rel:"noopener noreferrer"},"View XML"))))}}]),a}(n.Component);ne.defaultProps={logo:void 0,link:void 0,publicationLink:void 0,notes:void 0};var re=ne,oe=function(e){var t=e.config,a=t.logo,n=t.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:a,link:n},r.a.createElement("span",null,"Not Found"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,r.a.createElement("a",{href:"".concat("/treebank-template","/")},"Return to homepage"))))))},ce=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;Object(_.a)(this,a),n=t.call(this,e);var r=e.config,o={},c=r.logo,i=r.link;return r.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.author,a=e.work,n=e.editors,r=e.path;e.sections.forEach((function(e){var s=e.path,l=e.locus,u=e.link,m=e.notes,d=e.xml,p=e.chunks;o[s]={logo:c,link:i,publicationPath:r,author:t,work:a,editors:n,locus:l,publicationLink:u,notes:m,xml:d,chunks:p}}))}))})),n.argsLookup=o,n}return Object(R.a)(a,[{key:"render",value:function(){var e=this.props,t=e.config,a=e.match,n=e.location,o=a.params.publication,c=this.argsLookup[o];return void 0===c?r.a.createElement(oe,{config:t}):r.a.createElement(re,Object.assign({},c,{match:a,location:n}))}}]),a}(n.Component),ie=function(e){var t=e.config,a=t.logo,n=t.link,o=t.title,c=t.subtitle,i=t.collections;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{logo:a,link:n},o,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"".concat("/treebank-template","/")},"Home")))),r.a.createElement(j,{title:o,subtitle:c}),i.map((function(e){return function(e){var t=e.title,a=e.publications;return r.a.createElement(L,{key:t,title:t,publications:a})}(e)})))},se=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;Object(_.a)(this,a),n=t.call(this,e);var o=e.config,c={},i=o.logo,s=o.link,l=o.title,u=o.subtitle;return o.collections.forEach((function(e){(e.publications||[]).forEach((function(e){var t=e.path,a=e.author,n=e.work;c[t]={logo:i,link:s,title:l,subtitle:u,collections:[{title:r.a.createElement(r.a.Fragment,null,a,","," ",r.a.createElement("i",null,n)),publications:[e]}]}}))})),n.argsLookup=c,n}return Object(R.a)(a,[{key:"render",value:function(){var e=this.props,t=e.config,a=e.match.params.publication,n=this.argsLookup[a];return void 0===n?r.a.createElement(oe,{config:t}):r.a.createElement(ie,{config:n})}}]),a}(n.Component),le=function(e){var t=e.config,a=e.config,n=a.copyright,o=a.doi,c=a.report,i=a.github,l=a.twitter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:function(){return r.a.createElement(S,{config:t})}}),r.a.createElement(s.b,{exact:!0,path:"/:publication/",render:function(e){return r.a.createElement(se,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{exact:!0,path:"/:publication/:chunk",render:function(e){return r.a.createElement(ce,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(oe,{config:t})}})),r.a.createElement(u.PerseidsFooter,{copyright:n,doi:o,report:c,github:i,twitter:l}))},ue=a(40),me=a.n(ue),de=a(10),pe={name:"treebank",targetIframeID:"string-not-used",targetURL:"string-not-used",commModes:[de.WindowIframeDestination.commModes.RECEIVE]},he=function(e,t,a){return de.ResponseMessage.Error(e,new Error(t),a)},be=function(e){var t,a=e.wordIds,n=e.config,r=e.sentenceId,o=(t={w:a,config:n},B.a.stringify(t,{arrayFormat:"comma"}));return""===o?r:"".concat(r,"?").concat(o)},ge=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={arethusaLoaded:!1,redirectTo:null},n.messageHandler=n.messageHandler.bind(Object(C.a)(n)),n.setArethusaLoaded=n.setArethusaLoaded.bind(Object(C.a)(n)),n}return Object(R.a)(a,[{key:"componentDidMount",value:function(){this.destination=new de.WindowIframeDestination(Object(Q.a)({},pe,{receiverCB:this.messageHandler})),this.service=new de.MessagingService("treebank-service",this.destination),window.document.body.addEventListener("ArethusaLoaded",this.setArethusaLoaded)}},{key:"componentWillUnmount",value:function(){this.destination.deregister(),window.document.body.removeEventListener("ArethusaLoaded",this.setArethusaLoaded)}},{key:"setArethusaLoaded",value:function(){this.setState({arethusaLoaded:!0})}},{key:"messageHandler",value:function(e,t){var a=this.props.arethusa,n=this.state.arethusaLoaded,r=e.body,o=Object.keys(r),c=Object(H.a)(o,1)[0];if(n)try{switch(c){case"gotoSentence":this.setState({redirectTo:be(r.gotoSentence)}),t(de.ResponseMessage.Success(e,{status:"success"}));break;case"getMorph":t(de.ResponseMessage.Success(e,a.getMorph(r.getMorph.sentenceId,r.getMorph.wordId)));break;case"refreshView":t(de.ResponseMessage.Success(e,a.refreshView()));break;case"findWord":t(de.ResponseMessage.Success(e,a.findWord(r.findWord.sentenceId,r.findWord.word,r.findWord.prefix,r.findWord.suffix)));break;default:t(he(e,"Unsupported request: ".concat(c),de.ResponseMessage.errorCodes.UNKNOWN_REQUEST))}}catch(i){t(de.ResponseMessage.Error(e,i,de.ResponseMessage.errorCodes.INTERNAL_ERROR))}else t(he(e,"Arethusa is Not Loaded",de.ResponseMessage.errorCodes.SERVICE_UNINITIALIZED))}},{key:"render",value:function(){var e=this.state.redirectTo;return e&&r.a.createElement(s.a,{to:e})}}]),a}(n.Component),fe=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(R.a)(a,[{key:"componentDidMount",value:function(){this.renderArethusa()}},{key:"componentDidUpdate",value:function(){this.renderArethusa()}},{key:"renderArethusa",value:function(){var e=this.props,t=e.xml,a=e.match.params.chunk,n=e.arethusa.render,r=e.location.search;n(t,a,ee(r))}},{key:"render",value:function(){var e=this.props,t=e.match,a=e.arethusa,n=t.params,o=n.publication,c=n.chunk;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__artsa"},r.a.createElement("div",{id:"treebank_container",className:me.a.treebankContainer})),r.a.createElement("div",{className:me.a.links},r.a.createElement("a",{href:"".concat("/treebank-template","/").concat(o,"/").concat(c),target:"_blank",rel:"noopener noreferrer"},"Credits and more information")),r.a.createElement(ge,{arethusa:a}))}}]),a}(n.Component),ke=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).arethusa=new W,n}return Object(R.a)(a,[{key:"render",value:function(){var e=this.props,t=e.xml,a=e.match,n=e.location;return r.a.createElement("div",null,r.a.createElement(fe,{xml:t,location:n,match:a,arethusa:this.arethusa}))}}]),a}(n.Component),ve=function(){return r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row col-12 pt-5 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h1",null,"Error 404"))),r.a.createElement("div",{className:"row col-12 pb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("h2",null,"Publication not found"))))},Ee=function(e){Object(I.a)(a,e);var t=Object(A.a)(a);function a(e){var n;Object(_.a)(this,a),n=t.call(this,e);var r=e.config,o={};return r.collections.forEach((function(e){(e.publications||[]).forEach((function(e){e.sections.forEach((function(e){var t=e.path,a=e.xml;o[t]={xml:a}}))}))})),n.argsLookup=o,n}return Object(R.a)(a,[{key:"render",value:function(){var e=this.props,t=e.config,a=e.match,n=e.location,o=a.params.publication,c=this.argsLookup[o];if(void 0===c)return r.a.createElement(ve,{config:t});var i=c.xml;return r.a.createElement(ke,{xml:i,match:a,location:n})}}]),a}(n.Component),ye=function(e){var t=e.config;return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/embed/:publication/:chunk",render:function(e){return r.a.createElement(Ee,Object.assign({},e,{config:t}))}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(ve,{config:t})}}))},Oe=function(){return r.a.createElement(i.a,{basename:"/treebank-template"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/embed/",component:function(){return r.a.createElement(ye,{config:l})}}),r.a.createElement(s.b,{path:"/",component:function(){return r.a.createElement(le,{config:l})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,a){e.exports={publicationRow:"Publication_publicationRow__3taiJ",treebankWrapper:"Publication_treebankWrapper__2KYz-"}},34:function(e){e.exports=JSON.parse('{"title":"Treebank Publication Template","subtitle":"Template for publishing collections of treebanks. See the [repository](https://github.com/perseids-publications/treebank-template/) for more information and documentation. If you would like to create a template with your own treebanks, send us a [message](https://docs.google.com/forms/d/e/1FAIpQLSf8yf6B3xlV31x0JKquRuIdXd6LVuX0V7I7id7ZLXbMwDo-UA/viewform).","doi":"https://dx.doi.org/10.5281/zenodo.3898734","copyright":"The Perseids Project","report":"https://github.com/perseids-publications/treebank-template/issues","github":"https://github.com/perseids-publications/treebank-template/","twitter":"https://twitter.com/PerseidsProject","collections":[{"title":"Information","text":"The Treebank Template is maintained by the Perseids Project. See the [getting started instructions](/getting-started/). Or visit [our homepage](https://www.perseids.org) to learn more."},{"title":"Collection 1","publications":[{"path":"on-the-murder-of-eratosthenes","author":"Lysias","work":"On the Murder of Eratosthenes","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-murder-of-eratosthenes-1-50","xml":"lysias-1-1-50.xml","link":"https://www.example.com","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":134}}]},{"path":"on-the-crown","author":"Demosthenes","work":"On the Crown","editors":"Vanessa Gorman","sections":[{"locus":"1-50","path":"on-the-crown-1-50","xml":"demosthenes-18-1-50.xml","notes":"Lorem ipsum dolor sit amet, *consectetur* adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":160}},{"locus":"51-100","path":"on-the-crown-51-100","xml":"demosthenes-18-51-100.xml","chunks":{"start":1,"end":149}}]}]},{"title":"Collection 2","publications":[{"path":"histories","author":"Herodotus","work":"The Histories","editors":"Vanessa Gorman","sections":[{"locus":"40-59","path":"histories-40-59","xml":"herodotus-1-40-59.xml","chunks":{"start":1,"end":100}},{"locus":"60-79","path":"histories-60-79","xml":"herodotus-1-60-79.xml","chunks":{"start":1,"end":166}},{"locus":"80-99","path":"histories-80-99","xml":"herodotus-1-80-99.xml","notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","chunks":{"start":1,"end":185}}]},{"path":"philippic","author":"Demosthenes","work":"Philippic 1","editors":["Robert Gorman","Vanessa Gorman"],"sections":[{"locus":"1-51","path":"philippic-1-51","xml":"demosthenes-4-phil1-bu1.xml","chunks":{"numbers":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159"]}}]}]}]}')},40:function(e,t,a){e.exports={treebankContainer:"EmbeddedTreebank_treebankContainer__2X6pS",links:"EmbeddedTreebank_links__1ndYN"}},54:function(e,t,a){e.exports={jumbotronSmall:"Hero_jumbotronSmall__IN8kP"}},55:function(e,t,a){e.exports={treebankContainer:"Treebank_treebankContainer__sQn_K"}},57:function(e,t,a){e.exports=a(170)},64:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.c36ac757.chunk.js.map