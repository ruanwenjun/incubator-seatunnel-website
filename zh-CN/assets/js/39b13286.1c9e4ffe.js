"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7079],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,s=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(s,p(p({ref:t},c),{},{components:n})):a.createElement(s,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7730:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),p=["components"],i={},o="Guardian",u={unversionedId:"internal/monitoring",id:"internal/monitoring",title:"Guardian",description:"Guardian\u662fseatunnel\u7684\u5b50\u9879\u76ee\uff0c\u662f\u4e00\u4e2a\u76d1\u63a7\u548c\u62a5\u8b66\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9bseatunnel\u7684\u5b58\u6d3b\u60c5\u51b5\u76d1\u63a7\u4ee5\u53ca\u8c03\u5ea6\u5ef6\u8fdf\u60c5\u51b5\u76d1\u63a7\u3002Guardian\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9bHTTP API\u652f\u6301\u914d\u7f6e\u7684\u5b9e\u65f6\u4fee\u6539\u3002\u76ee\u524d\u4ec5\u652f\u6301seatunnel on Yarn.",source:"@site/docs/internal/monitoring.md",sourceDirName:"internal",slug:"/internal/monitoring",permalink:"/zh-CN/docs/internal/monitoring",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/internal/monitoring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6df1\u5165 seatunnel",permalink:"/zh-CN/docs/internal/"},next:{title:"README",permalink:"/zh-CN/docs/usecase/"}},c=[{value:"\u8fd0\u884cGuardian",id:"\u8fd0\u884cguardian",children:[],level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[{value:"yarn",id:"yarn",children:[],level:3},{value:"apps",id:"apps",children:[],level:3},{value:"alert_manager",id:"alert_manager",children:[{value:"routes",id:"routes",children:[],level:4},{value:"<strong>emails</strong>",id:"emails",children:[],level:4},{value:"<strong>webhook</strong>",id:"webhook",children:[],level:4}],level:3}],level:2},{value:"Guardian\u63a5\u53e3\u4f7f\u7528\u6307\u5357",id:"guardian\u63a5\u53e3\u4f7f\u7528\u6307\u5357",children:[{value:"GET",id:"get",children:[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:4},{value:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49",id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49",children:[],level:4},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[],level:4}],level:3},{value:"POST",id:"post",children:[{value:"\u6982\u8ff0",id:"\u6982\u8ff0-1",children:[],level:4},{value:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49",id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49-1",children:[],level:4},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",children:[],level:4}],level:3},{value:"DELETE",id:"delete",children:[{value:"\u6982\u8ff0",id:"\u6982\u8ff0-2",children:[],level:4},{value:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49",id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49-2",children:[],level:4},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",children:[],level:4}],level:3},{value:"\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",id:"\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"guardian"},"Guardian"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/guardian"},"Guardian"),"\u662fseatunnel\u7684\u5b50\u9879\u76ee\uff0c\u662f\u4e00\u4e2a\u76d1\u63a7\u548c\u62a5\u8b66\u5de5\u5177\uff0c\u53ef\u4ee5\u63d0\u4f9bseatunnel\u7684\u5b58\u6d3b\u60c5\u51b5\u76d1\u63a7\u4ee5\u53ca\u8c03\u5ea6\u5ef6\u8fdf\u60c5\u51b5\u76d1\u63a7\u3002Guardian\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9bHTTP API\u652f\u6301\u914d\u7f6e\u7684\u5b9e\u65f6\u4fee\u6539\u3002\u76ee\u524d\u4ec5\u652f\u6301seatunnel on Yarn."),(0,l.kt)("h2",{id:"\u8fd0\u884cguardian"},"\u8fd0\u884cGuardian"),(0,l.kt)("p",null,"\u4e0b\u8f7dGuardian\uff0c\u8fd9\u91cc\u4ee5guardian_1.0.0\u4e3a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://github.com/InterestingLab/guardian/releases/download/v1.0.0/guardian_1.0.0.tar.gz\ntar -xvf guardian_1.0.0\ncd guardian_1.0.0\n./bin/guardian check config.json\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"Guardian\u914d\u7f6e\u6587\u4ef6\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),"\u683c\u5f0f\u7f16\u5199\uff0c\u4e00\u4e2a\u6709\u6548\u7684\u5b9e\u4f8b\uff0c\u70b9\u51fb",(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/guardian/blob/master/config.json.template"},"\u8fd9\u91cc")),(0,l.kt)("p",null,"\u6574\u4e2a\u914d\u7f6e\u6587\u4ef6\u7531\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"port: \u63a5\u53e3API\u7ed1\u5b9a\u7684\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"node_name: \u8282\u70b9\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"check_interval: \u68c0\u6d4b\u5e94\u7528\u7684\u65f6\u95f4\u95f4\u9694"),(0,l.kt)("li",{parentName:"ul"},"yarn: \u88ab\u68c0\u6d4b\u7684YARN\u96c6\u7fa4\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"apps: \u9700\u8981\u88ab\u68c0\u6d4b\u7684\u5177\u4f53\u5e94\u7528"),(0,l.kt)("li",{parentName:"ul"},"alert_manager: \u62a5\u8b66\u7ba1\u7406")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u90e8\u5206\u8be6\u7ec6\u4ecb\u7ecd\uff1a"),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Yarn resourcemanager\napi_hosts: <list>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"yarn": {\n    "api_hosts": [\n        "10.11.10.21:8088",\n        "10.11.10.22:8088"\n    ]\n}\n')),(0,l.kt)("h3",{id:"apps"},"apps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[{\n    # Spark application name\n    "app_name": <string>,\n    # \u5f53\u5e94\u7528\u5931\u8d25\u65f6\u7684\u91cd\u542f\u547d\u4ee4\n    "start_cmd": <string>,\n    # \u540c\u4e00\u4e2aapp_name\u4e0b\u7684\u5e94\u7528\u8fd0\u884c\u4e2a\u6570\n    "app_num": <number>,\n    # Application type, default \'spark\'\n    "check_type": <string>,\n    # \u6807\u5fd7\u8fd9\u4e2a\u5e94\u7528\u662f\u5426\u6709\u6548\n    "active": <boolean>\n    "check_options": {\n        # \u62a5\u8b66\u7ea7\u522b\uff0c\u652f\u6301WARNNING\u3001ERROR\u7b49\n        "alert_level": <string>,\n        "max_delayed_batch_num": <number>,\n        "max_delayed_time": <number>\n    }\n}]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"apps": [\n    {\n        "app_name": "seatunnel-app",\n        "start_cmd": "test_cmd",\n        "app_num": 1,\n        "check_type": "spark",\n        "check_options": {\n            "alert_level": "WARNING",\n            "max_delayed_batch_num": 10,\n            "max_delayed_time": 600\n        }\n    }\n]\n')),(0,l.kt)("h3",{id:"alert_manager"},"alert_manager"),(0,l.kt)("h4",{id:"routes"},"routes"),(0,l.kt)("p",null,"\u62a5\u8b66\u8def\u7531\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u62a5\u8b66\u7ea7\u522b"),(0,l.kt)("p",null,"\u5f53\u62a5\u8b66\u7ea7\u522b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"WARNNING"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"ERROR"),"\u89e6\u53d1\u62a5\u8b66"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"routes": {\n    "match": {\n        "level": ["WARNING", "ERROR"]\n    }\n}\n')),(0,l.kt)("h4",{id:"emails"},(0,l.kt)("strong",{parentName:"h4"},"emails")),(0,l.kt)("p",null,"\u901a\u8fc7\u90ae\u4ef6\u53d1\u9001\u62a5\u8b66\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# \u90ae\u7bb1\u9a8c\u8bc1\u7528\u6237\u540d\n"auth_username": <string>,\n# \u90ae\u7bb1\u9a8c\u8bc1\u5bc6\u7801\n"auth_password": <string>,\n# \u90ae\u7bb1stmp\u670d\u52a1\u5668\n"smtp_server": <string>,\n# \u53d1\u4ef6\u4eba\n"sender": <string>,\n# \u6536\u4ef6\u4eba\u5217\u8868\n"receivers": <list>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"emails": {\n    "auth_username": "username",\n    "auth_password": "password",\n    "smtp_server": "smtp.163.com",\n    "sender": "huochen1994@163.com",\n    "receivers": ["garygaowork@gmail.com"],\n    "routes": {\n        "match": {\n            "level": ["WARNING", "ERROR"]\n        }\n    }\n}\n')),(0,l.kt)("h4",{id:"webhook"},(0,l.kt)("strong",{parentName:"h4"},"webhook")),(0,l.kt)("p",null,"\u901a\u8fc7\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u62a5\u8b66\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# webhook\u63a5\u53e3\u5730\u5740\n"url": <string>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"webhook": {\n    "url": "http://api.webhook.interestinglab.org/alert",\n    "routes": {\n        "match": {\n            "level": ["ERROR"]\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Gaurdian\u8c03\u7528\u63a5\u53e3\u7684\u65f6\u5019\u4f1a\u4ee5\u4e0b\u9762JSON\u683c\u5f0f\u53d1\u9001HTTP POST\u8bf7\u6c42\u5230\u914d\u7f6e\u7684\u63a5\u53e3\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "subject": "Guardian",\n    "objects": "seatunnel_app",\n    "content": "App is not running or less than expected number of running instance, will restart"\n}\n')),(0,l.kt)("h2",{id:"guardian\u63a5\u53e3\u4f7f\u7528\u6307\u5357"},"Guardian\u63a5\u53e3\u4f7f\u7528\u6307\u5357"),(0,l.kt)("h3",{id:"get"},"GET"),(0,l.kt)("h4",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u529f\u80fd\u63cf\u8ff0"),(0,l.kt)("p",{parentName:"li"},"  \u83b7\u53d6Guardian\u5bf9\u5e94app_name\u7684\u914d\u7f6e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u7840\u63a5\u53e3"),(0,l.kt)("p",{parentName:"li"},"  http://localhost:5000/config/","[app_name]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",{parentName:"li"},"  get"))),(0,l.kt)("h4",{id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49"},"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl \'http://localhost:5000/config/seatunnel-app2\'\n\n{\n  "content": {\n    "app_name": "seatunnel-app2",\n    "app_num": 1,\n    "check_options": {},\n    "check_type": "spark",\n    "start_cmd": "test_cmd_not_exist"\n  },\n  "status": 0\n}\n')),(0,l.kt)("h3",{id:"post"},"POST"),(0,l.kt)("h4",{id:"\u6982\u8ff0-1"},"\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u529f\u80fd\u63cf\u8ff0"),(0,l.kt)("p",{parentName:"li"},"  \u66f4\u65b0\u6216\u65b0\u589eGuardian\u4e2d\u5e94\u7528\u914d\u7f6e\u4fe1\u606f\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"app_name"),"\u5b58\u5728\uff0c\u66f4\u65b0\u5bf9\u5e94\u914d\u7f6e\u4fe1\u606f\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"app_name"),"\u4e0d\u5b58\u5728\uff0c\u65b0\u589e\u4e00\u4e2a\u5e94\u7528\u76d1\u63a7\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u7840\u63a5\u53e3"),(0,l.kt)("p",{parentName:"li"},"  http://localhost:5000/config/","[app_name]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",{parentName:"li"},"  post"))),(0,l.kt)("h4",{id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49-1"},"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6ce8\u91ca"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b9e\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"start_cmd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u542f\u547d\u4ee4"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"app_num"),(0,l.kt)("td",{parentName:"tr",align:"center"},"num"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5b58\u5728\u4e2a\u6570"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"check_type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5e94\u7528\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"center"},"spark")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"check_options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"dict"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"active"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u6709\u6548"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl 'http://localhost:5000/config/seatunnel-app2' -d '\n{\n    'active': false\n}'\n\n{\n  \"status\": 0\n}\n")),(0,l.kt)("h3",{id:"delete"},"DELETE"),(0,l.kt)("h4",{id:"\u6982\u8ff0-2"},"\u6982\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u529f\u80fd\u63cf\u8ff0"),(0,l.kt)("p",{parentName:"li"},"  \u5220\u9664Guardian\u5bf9\u5e94app_name\u7684\u914d\u7f6e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u7840\u63a5\u53e3"),(0,l.kt)("p",{parentName:"li"},"  http://localhost:5000/config/","[app_name]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u5f0f"),(0,l.kt)("p",{parentName:"li"},"  delete"))),(0,l.kt)("h4",{id:"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49-2"},"\u63a5\u53e3\u53c2\u6570\u5b9a\u4e49"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -XDELETE 10.212.81.56:5000/config/seatunnel-app2\n\n{\n  "status": 0\n}\n')),(0,l.kt)("h3",{id:"\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"},"\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"status"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53c2\u6570\u9519\u8bef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5185\u90e8\u9519\u8bef")))))}m.isMDXComponent=!0}}]);