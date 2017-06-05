!function(){"use strict";function e(){for(var e=document.getElementsByClassName("copyable-code"),t=function(){var e=a[n],t=e.getElementsByClassName("highlight")[0];if(!t)return{};var r=t.innerText.trim(),o=document.createElement("div"),i=document.createElement("button"),s=document.createElement("span");o.className="copy-button-container",s.className="fa fa-clipboard",i.className="copy-button",i.appendChild(s),i.appendChild(document.createTextNode("Copy")),o.appendChild(i),t.insertBefore(o,t.children[0]),i.addEventListener("click",function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=r,e.select();try{var t=document.execCommand("copy");if(!t)throw new Error("Failed to copy")}catch(e){console.error("Failed to copy"),console.error(e)}document.body.removeChild(e)})},n=0,a=e;n<a.length;n+=1){var r=t();if(r)return r.v}}function t(e){return!e.siblings("ul:not(.simple)").length}function n(e){var t=window.docsExcludedNav;if(!t||!t.length)return!1;for(var n=0;n<t.length;n+=1)if(e[0].href.indexOf(t[n])!==-1)return!0;return!1}function a(e,t){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(t.success(n.responseText,n.responseURL),t.complete()):(t.error(),t.complete())},n.onerror=function(){t.error(),t.complete()},n.open("GET",e,!0);try{n.send()}catch(e){t.error(),t.complete()}}function r(e){function r(){void 0!==l.timeoutID&&window.clearTimeout(l.timeoutID),void 0!==l.xhr&&l.xhr.abort(),l={}}function o(t,n){void 0===t&&console.error("Going to undefined path"),r(),c.classList.add("loading"),l.timeoutID=window.setTimeout(function(){c.classList.remove("loading"),l.timeoutID=-1},1e4);var o=new Date;l.xhr=a(t,{complete:function(){r()},error:function(e){console.error("Failed to load "+t),window.location=t},success:function(t,a){var r=new Date-o;c.classList.remove("loading"),n&&window.history.pushState({href:a},"",a);var i=document.createElement("html");i.innerHTML=t;var l=i.querySelector("title").textContent,u=i.querySelector(".body"),d=i.querySelector(".sphinxsidebarwrapper");r>62.5&&u.classList.add("loading"),c.parentElement.replaceChild(u,c),c=u,s.parentElement.replaceChild(d,s),s=d,document.title=l,e.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){c.classList.remove("loading"),n&&window.scroll(0,0)},1)}})}function i(e){0!==e.button||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),o(e.currentTarget.href,!0))}if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var s=document.querySelector(".sphinxsidebarwrapper"),c=document.querySelector(".body"),l={};window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);for(var u=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal"),d=0;d<u.length;d+=1){var p=u[d];(t($(p))||n($(p)))&&p.addEventListener("click",i)}return window.onpopstate=function(e){null!==e.state&&o(e.state.href,!1)},!0}function o(e,t){var n=[];return t.forEach(function(e,t){n.push(encodeURIComponent(t)+"="+encodeURIComponent(JSON.stringify(e)))}),e+"?"+n.join("&")}function i(){if(L)return L(),!1}function s(e,t){var n=encodeURIComponent(t);e.onclick=i,e.target="_blank",e.title="Report a problem with "+t+".txt on Jira",e.href="https://jira.mongodb.org/secure/CreateIssueDetails!init.jspa?pid=10380&issuetype=4&priority=4&summary=Comment+on%3a+%22"+n+"%2Etxt%22"}function c(e){window.ATL_JQ_PAGE_PROPS.fieldValues={summary:'Comment on: "'+T+"/"+e+'.txt"'},jQuery.ajax({cache:!0,dataType:"script",type:"get",url:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7"});for(var t=document.querySelectorAll(".jirafeedback"),n=0;n<t.length;n+=1)s(t[n],e)}function l(){var e=document.querySelector(".body").getAttribute("data-pagename");if(c(e),!Object.prototype.hasOwnProperty.call(q,e)){var t=document.getElementById("rating-panel");t&&new N(T,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?").draw(t)}}function u(){T=document.body.getAttribute("data-project")}function d(){void 0!==window.localStorage&&l()}function p(e){return e.hasClass("current")}function f(){var e=$(".sidebar a.current");(t(e)||n(e)||p(e))&&e.parent("li").addClass("selected-item"),e.parents("ul").each(function(e,t){$(t).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(a){var r=$(a.currentTarget);t(r)||!r.parent().hasClass("selected-item")&&n(r)||(a.preventDefault(),r.parent().hasClass("current")?(r.parent().removeClass("current selected-item"),r.siblings("ul").slideUp()):(e.parent().removeClass("selected-item"),e.parents().add(e.siblings("ul")).each(function(e,t){var n=$(t);n.has(a.currentTarget).length||(n.is("ul")?n.removeClass("current").slideUp():n.removeClass("current"))}),r.parent().addClass("current"),r.siblings("ul").slideDown(function(){(t(r)||n(r)||p(e))&&r.parent("li").addClass("selected-item")}),e=r))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(e){var n=$('<span class="expand-icon"></span>'),a=$(this);return t(a)||n.addClass("docs-expand-arrow"),n})}function h(e){"#"===e.charAt(0)&&(e=e.substring(1)),$(".tabs ."+e).show().siblings().hide()}function m(e){var t=$("a[href="+e+"]"),n=t.parent("li"),a=n.parent("ul"),r=$(".nav.nav-tabs.nav-justified .dropdown-toggle"),o=$(".nav.nav-tabs.nav-justified .dropdown");a.hasClass("dropdown-menu")?(r.text(""+t.first().text()).append('<span class="caret"></span>'),o.addClass("active").siblings().removeClass("active")):(n.addClass("active").siblings().removeClass("active"),r.text("Other ").append('<span class="caret"></span>'))}function v(){var e=$(".nav.nav-tabs.nav-justified"),t=e.first();e.slice(1).detach(),t.detach().insertAfter("h1").first()}function w(){var e=null;if(localStorage.getItem("languagePref"))e=localStorage.getItem("languagePref");else{var t=document.querySelector(".nav-tabs > .active > [href]");if(!t)return;e=t.getAttribute("href")}h(e),m(e),v(),document.querySelectorAll(".nav.nav-tabs.nav-justified a").forEach(function(e){e.onclick=function(t){var n=e.getAttribute("href");n&&(localStorage.setItem("languagePref",n),h(n),m(n),v(),t.preventDefault())}})}function g(e){var t=document.getElementsByClassName("body")[0],n=t.getAttribute("data-pagename");return"index"===n?n="":n&&(n+="/"),"/"+e+"/"+n}function b(){$(".version-selector").on("click",function(e){e.preventDefault();var t=$(e.currentTarget).data("path");window.location.href=g(t)})}var y=Object.freeze({setup:e}),C=Object.freeze({setup:r}),E="http://deluge.us-east-1.elasticbeanstalk.com/",x=function(e){this.vote=e},k=function(e,t){this.name=e,this.caption=t,this.answer=null};k.prototype.clear=function(){this.answer=null},k.prototype.draw=function(){var e=this,t=document.createElement("div"),n=document.createElement("textarea");return n.placeholder=this.caption,t.appendChild(n),t.oninput=function(){e.answer=n.value},t};var S=function(e,t){this.name=e,this.promptHtml=t,this.answer=null};S.prototype.clear=function(){this.answer=null},S.prototype.draw=function(){var e=this,t=document.createElement("div");t.innerHTML=this.promptHtml;var n=document.createElement("div"),a=document.createElement("span"),r=document.createElement("span");return a.className="switch fa fa-thumbs-up good",a.onclick=function(){e.answer=!0,a.className="switch fa fa-thumbs-up good selected",r.className="switch fa fa-thumbs-down bad"},r.className="switch fa fa-thumbs-down bad",r.onclick=function(){e.answer=!1,a.className="switch fa fa-thumbs-up good",r.className="switch fa fa-thumbs-down bad selected"},n.appendChild(a),n.appendChild(r),t.appendChild(n),t};var j=function(e,t){this.name=e,this.promptHtml=t,this.answer=null};j.prototype.clear=function(){this.answer=null},j.prototype.draw=function(){var e=this,t=document.createElement("div"),n=document.createElement("div");t.appendChild(n),n.innerHTML=this.promptHtml;for(var a=[],r=function(n){var r=document.createElement("span");r.onclick=function(){e.answer=n+1,e.updateView(a)},t.appendChild(r),a.push(r)},o=0;o<j.numberOfOptions();o+=1)r(o);return this.updateView(a),t},j.prototype.updateView=function(e){for(var t=this,n=0;n<e.length;n+=1){var a=e[n];a.className="rangestar fa",null==t.answer||n>=t.answer?a.className+=" fa-star-o":a.className+=" fa-star selected"}},j.numberOfOptions=function(){return 5};var N=function(e,t){this.project=e,this.path=t,this.questions=[],this.state="NotVoted",this.storageKey="feedback-"+e+"/"+t;var n=localStorage[this.storageKey],a=n?Date.parse(n).valueOf():-(1/0);(new Date).valueOf()<a+2592e6&&(this.state="Voted")};N.prototype.draw=function(e){var t=this;if("NotVoted"===this.state){e.className="",e.innerHTML='<p>Was this page helpful?</p><a class="button" id="rate-up">Yes</a><a class="button" id="rate-down">No</a>';var n=e.querySelector("#rate-up"),a=e.querySelector("#rate-down");if(!n||!a)throw new Error("Assertion failed: couldn't find buttons");return n.onclick=function(){t.state=new x(!0),t.draw(e)},void(a.onclick=function(){t.state=new x(!1),t.draw(e)})}if("Voted"===this.state)return e.className="",void(e.innerHTML="<p>Thank you for your feedback!</p>");e.className="expanded";var r=this.state;e.innerText="";var o=document.createElement("ul");if(r.vote===!1){var i=document.createElement("li");i.innerText="We're sorry! Please help us improve this page.",o.appendChild(i)}this.questions.forEach(function(e){e.clear();var t=document.createElement("li");t.appendChild(e.draw()),o.appendChild(t)});var s=document.createElement("div");s.className="button-group",o.appendChild(s);var c=document.createElement("button");c.innerText="Cancel",s.appendChild(c),c.onclick=function(){t.state="NotVoted",t.draw(e)};var l=document.createElement("button");l.innerText="Submit",l.className="primary",s.appendChild(l),l.onclick=function(){var n=new Map;t.questions.forEach(function(e){null!=e.answer&&n.set(e.name,e.answer)}),t.sendRating(r.vote,n).then(function(){var n=(new Date).toISOString();localStorage.setItem(t.storageKey,n),t.state="Voted",t.draw(e)}).catch(function(){console.error("Failed to send feedback"),t.state="NotVoted",t.draw(e)})},e.appendChild(o)},N.prototype.askQuestion=function(e,t){var n=new S(e,t);return this.questions.push(n),this},N.prototype.askRangeQuestion=function(e,t){var n=new j(e,t);return this.questions.push(n),this},N.prototype.askFreeformQuestion=function(e,t){var n=new k(e,t);return this.questions.push(n),this},N.prototype.sendRating=function(e,t){var n=this;return new Promise(function(a,r){t.set("v",e),t.set("p",n.project+"/"+n.path);var i=o(E,t),s=new Image;s.onload=function(){return a()},s.onerror=function(){return r()},s.src=i})};var T=null,q={"meta/404":!0,search:!0},L=null;window.ATL_JQ_PAGE_PROPS={triggerFunction:function(e){L=e}};var O=Object.freeze({init:u,setup:d}),D=Object.freeze({setup:f}),I=Object.freeze({setup:w}),A=Object.freeze({setup:b}),P=function(){this.components=[]};P.prototype.register=function(e){this.components.push(e),e.init&&e.init()},P.prototype.update=function(){for(var e=this,t=0,n=e.components;t<n.length;t+=1){var a=n[t];a.setup(e)}};var R=new P;$(function(){function e(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}R.register(y),R.register(C),R.register(O),R.register(D),R.register(I),R.register(A),$("body").on("click","#header-db, .sidebar, .content",function(e){$(".option-popup").addClass("closed").find(".fa-angle-down, .fa-angle-up").removeClass("fa-angle-down").addClass("fa-angle-up")}),$(".sphinxsidebarwrapper h3 a.version").on("click",function(e){e.preventDefault(),e.stopPropagation(),$(".option-popup").removeClass("closed")}),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(e){e.preventDefault(),$(".sidebar").toggleClass("reveal")});var t=$(window),n=$(".sidebar"),a=t.width()<=1093;if(t.resize(function(e){a&&t.width()>1093?(a=!1,n.removeClass("reveal")):!a&&t.width()<=1093&&(a=!0)}),window.addEventListener("hashchange",e),location.hash&&window.setTimeout(e,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(e,10)}),R.update(),document.querySelector){var r=document.querySelector("a.current");r&&r.scrollIntoView(!1)}})}();
//# sourceMappingURL=navbar.js.map
