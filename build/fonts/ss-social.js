/*
* Symbolset
* www.symbolset.com
* Copyright © 2012 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/
if(/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent)&&!/(IEMobile)/.test(navigator.userAgent)){var ss_set={"stack overflow":"","github octocat":"",githuboctocat:"",stackoverflow:"","google plus":"",kickstarter:"",foursquare:"",googleplus:"",instagram:"",pinterest:"",posterous:"",wordpress:"","thumbs up":"������",dribbble:"",facebook:"",linkedin:"",thumbsup:"������","google +":"",readmill:"",envelope:"✉",twitter:"",behance:"",dropbox:"",youtube:"",octocat:"","google+":"",approve:"������",spotify:"","last fm":"",blogger:"",flickr:"",tumblr:"",paypal:"",lastfm:"",github:"",svpply:"",email:"✉",skype:"",vimeo:"",mail:"✉",rdio:"",like:"������",rss:""};if(typeof ss_icons!="object"||typeof ss_icons!="object"){var ss_icons=ss_set,ss_keywords=[];for(var i in ss_set)ss_keywords.push(i)}else for(var i in ss_set)ss_icons[i]=ss_set[i],ss_keywords.push(i);if(typeof ss_legacy!="function"){!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("ss_ready",function(e){function t(e){h=1;while(e=n.shift())e()}var n=[],r,i=!1,s=document,o=s.documentElement,u=o.doScroll,a="DOMContentLoaded",f="addEventListener",l="onreadystatechange",c="readyState",h=/^loade|c/.test(s[c]);return s[f]&&s[f](a,r=function(){s.removeEventListener(a,r,i),t()},i),u&&s.attachEvent(l,r=function(){/^c/.test(s[c])&&(s.detachEvent(l,r),t())}),e=u?function(t){self!=top?h?t():n.push(t):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){e(t)},50)}t()}()}:function(e){h?e():n.push(e)}});var ss_legacy=function(e){if(!e instanceof Object)return!1;if(e.length){for(var t=0;t<e.length;t++)ss_legacy(e[t]);return}e.value?e.value=ss_liga(e.value):e.nodeValue?e.nodeValue=ss_liga(e.nodeValue):e.innerHTML&&(e.innerHTML=ss_liga(e.innerHTML))},ss_getElementsByClassName=function(e,t){if(document.querySelectorAll)return document.querySelectorAll("."+t);var n=[],r=new RegExp("(^| )"+t+"( |$)"),i=e.getElementsByTagName("*");for(var s=0,o=i.length;s<o;s++)r.test(i[s].className)&&n.push(i[s]);return n},ss_liga=function(e){var t=new RegExp(ss_keywords.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g,"\\$&"),"gi");return e.replace(t,function(e){return ss_icons[e.toLowerCase()]})};ss_ready(function(){document.getElementsByClassName?ss_legacy(document.getElementsByClassName("ss-icon")):ss_legacy(ss_getElementsByClassName(document.body,"ss-icon"))})}};