(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dataproject"],{d869:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticStyle:{"margin-bottom":"1em"}},[o("h1",[t._v(t._s(t.post.title))]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xs-0 col-sm-0 col-md-0 col-lg-2"}),o("div",{staticClass:"col col-xs-12 col-sm-12 col-md col-lg-8"},[o("h5",[t._v(t._s(t.post.short_description))]),t.post.date?o("p",[t._v("Date: "+t._s(t.post.date))]):t._e(),o("p",{domProps:{innerHTML:t._s(t.post.body)}}),o("br"),t.post.external_link?o("p",[o("a",{attrs:{href:t.post.external_link,target:"_blank"}},[t._v("Visit External Link")])]):t._e()]),o("div",{staticClass:"col-xs-0 col-sm-0 col-md-0 col-lg-2"})]),o("router-link",{attrs:{to:"/data"}},[o("h2",[t._v("<-- Back to Data Projects")])])],1)},a=[],n=o("eb56"),i=o.n(n),r={data:function(){return{}},computed:{post:function(){for(var t=this.project,s=0;s<i.a.posts.length;s++){var o=i.a.posts[s].id.toLowerCase();if(t===o)return i.a.posts[s]}return"OOPS"}},props:{project:String}},l=r,c=o("2877"),p=Object(c["a"])(l,e,a,!1,null,null,null);s["default"]=p.exports},eb56:function(t,s){t.exports={posts:[{title:"TEMPLATE",id:"TEMPLATE",date:null,short_description:"3-10 word blurb",body:"The post body can go here.\nMultiple lines is also fine!\n",external_link:null},{title:"fa-stats",id:"fa-stats",date:null,short_description:"FurAffinity Traffic Volume Analysis",body:'I wanted to know what the best time for an artist to post on FurAffinity was. \nPeriodically a measurement is taken to get the current visitor count from the FA site. \nThis is then graphed by time. \n<img src="https://raw.githubusercontent.com/XENPHIRA/fa-stats/master/graph.png" width="100%"/>\n',external_link:"https://github.com/XENPHIRA/fa-stats/blob/master/graph.png"}]}}}]);
//# sourceMappingURL=dataproject.604de705.js.map