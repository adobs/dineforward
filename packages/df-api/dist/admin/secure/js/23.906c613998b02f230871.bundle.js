(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{607:function(t,e,n){"use strict";n.r(e);var a=n(6),c=(n(23),n(222),n(221));function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}class r extends c.a{constructor(t,...e){super(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{defaultValue:"defaultValue"in t?t.defaultValue:t.many?[]:null}),...e),Object(a.a)(this,"getQueryFragment",(t=this.path)=>"\n      ".concat(t," {\n        id\n        _label_\n      }\n    ")),Object(a.a)(this,"getFilterGraphQL",({type:t,value:e})=>"contains"===t?"".concat(this.path,'_some: {id: "').concat(e,'"}'):"is"===t?"".concat(this.path,': {id: "').concat(e,'"}'):void 0),Object(a.a)(this,"getFilterLabel",({label:t})=>"".concat(this.label," ").concat(t.toLowerCase())),Object(a.a)(this,"formatFilter",({label:t,value:e})=>"".concat(this.getFilterLabel({label:t}),': "').concat(e,'"')),Object(a.a)(this,"serialize",t=>{const{path:e}=this,{many:n}=this.config;let a=t[e];if(n){let t=[];return Array.isArray(a)&&(t=a.map(t=>t.id)),{disconnectAll:!0,connect:t.map(t=>({id:t}))}}return a?{connect:{id:a.id}}:{disconnectAll:!0}}),Object(a.a)(this,"getFilterTypes",()=>{const{many:t}=this.config;return t?[{type:"contains",label:"Contains",getInitialValue:()=>null}]:[{type:"is",label:"Is",getInitialValue:()=>null}]})}getRefList(){const{getListByKey:t}=this.adminMeta,{ref:e}=this.config;return t(e)}}e.default=r}}]);