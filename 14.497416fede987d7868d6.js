(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{IpaV:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),i=t("gIcY"),r=(t("dJ3e"),t("tpT/")),a=function(){function n(n){this.apiService=n}return n.prototype.verifyOtpApi=function(n){return this.apiService.post("/api/rest/authentication/signup/verify",n)},n.prototype.resendOtpApi=function(n){return this.apiService.post("/api/rest/authentication/signup/resend",n)},n.ngInjectableDef=u.S({factory:function(){return new n(u.W(r.a))},token:n,providedIn:"root"}),n}(),p=t("xMyE"),c=t("2WpN"),s=t("9Z1F"),g=t("F/XL"),d=function(){function n(n,l,t,u){var e=this;this.router=n,this.activatedRoute=l,this.otpService=t,this.formBuilder=u,this.submitted=!1,this.data={},this.activatedRoute.params.subscribe(function(n){n&&(e.data.register_exp=n.registerExp,e.data.temp_user_id=n.tempUserId,e.data.name=n.name,console.log(e.data))}),this.otpForm=this.formBuilder.group({oneInputOtp:[null,[i.p.required,i.p.min(0),i.p.max(9),i.p.minLength(1),i.p.maxLength(1),i.p.pattern(/^[0-9]+$/)]],twoInputOtp:[null,[i.p.required,i.p.min(0),i.p.max(9),i.p.minLength(1),i.p.maxLength(1),i.p.pattern(/^[0-9]+$/)]],threeInputOtp:[null,[i.p.required,i.p.min(0),i.p.max(9),i.p.minLength(1),i.p.maxLength(1),i.p.pattern(/^[0-9]+$/)]],fourInputOtp:[null,[i.p.required,i.p.min(0),i.p.max(9),i.p.minLength(1),i.p.maxLength(1),i.p.pattern(/^[0-9]+$/)]]})}return Object.defineProperty(n.prototype,"f",{get:function(){return this.otpForm.controls},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){},n.prototype.verifyOtp=function(){var n=this;this.submitted=!0,this.otpForm.invalid||(console.log(this.data),this.otpService.verifyOtpApi(this.data).pipe(Object(p.a)(function(l){console.log(l),"success"==l.status&&n.router.navigate(["login"])}),Object(c.a)(function(){return n.isLoading=!1}),Object(s.a)(function(l){return Object(g.a)(n.error=l)})).subscribe())},n.prototype.resendOtpApi=function(){var n=this;delete this.data.register_exp,this.otpService.resendOtpApi(this.data).pipe(Object(p.a)(function(n){console.log(n)}),Object(c.a)(function(){return n.isLoading=!1}),Object(s.a)(function(l){return Object(g.a)(n.error=l)})).subscribe()},n.prototype.ngAfterViewInit=function(){$(function(){var n=$("body");n.on("keyup","input",function(l){var t=l.which,u=$(l.target).next("input");return 9!=t&&(t<48||t>57)?(l.preventDefault(),!1):9===t||(u&&u.length||(u=n.find("input").eq(0)),void u.select().focus())}),n.on("keydown","input",function(n){var l=n.which;return 9===l||l>=48&&l<=57||(n.preventDefault(),!1)}),n.on("click","input",function(n){$(n.target).select()})})},n}(),b=t("ZYCi"),m=u.nb({encapsulation:0,styles:[[".otp-bg[_ngcontent-%COMP%]{background:url(/assets/Images/Login/BG3.png) right top no-repeat}.l-img-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.container[_ngcontent-%COMP%]{margin:0 auto;max-width:1200px}#wrapper[_ngcontent-%COMP%]{font-size:1.5rem;text-align:center;box-sizing:border-box;color:#333}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]{margin:10px auto;padding:20px 30px;display:inline-block;overflow:hidden;position:relative}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 10px;padding:0;line-height:1.25;font-size:24px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:90%}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]{max-width:240px;margin:25px auto 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 5px;text-align:center;line-height:51px;font-size:50px;border:1px solid #ccc;box-shadow:0 0 5px #ccc inset;outline:0;width:20%;transition:all .2s ease-in-out;border-radius:3px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:0 0 5px #28a745 inset}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::selection{background:0 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:30px 0 50px;width:100%;padding:6px;background-color:#268b45;border:none;text-transform:uppercase}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   #form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{box-shadow:none}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:16px}@media only screen and (max-width:480px){#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]{padding:20px 0}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px}#wrapper[_ngcontent-%COMP%]   #dialog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px}}"]],data:{}});function x(n){return u.Cb(0,[(n()(),u.pb(0,0,null,null,50,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,49,"div",[["class","row otp-bg"]],null,null,null,null,null)),(n()(),u.pb(2,0,null,null,2,"div",[["class","col-xl-4"]],null,null,null,null,null)),(n()(),u.pb(3,0,null,null,1,"div",[["class","l-img-center"]],null,null,null,null,null)),(n()(),u.pb(4,0,null,null,0,"img",[["alt","Padholeekho Login"],["class","img-fluid"],["src","assets/Images/Login/Login.png"]],null,null,null,null,null)),(n()(),u.pb(5,0,null,null,44,"div",[["class","col-xl-6"]],null,null,null,null,null)),(n()(),u.pb(6,0,null,null,43,"div",[["id","wrapper"]],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,42,"div",[["id","dialog"]],null,null,null,null,null)),(n()(),u.pb(8,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),u.Bb(-1,null,["Please enter the 4-digit verification code we sent via SMS:"])),(n()(),u.pb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Bb(-1,null,["(we want to make sure it's you before we proceed)"])),(n()(),u.pb(12,0,null,null,31,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,o=n.component;return"submit"===l&&(e=!1!==u.xb(n,14).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.xb(n,14).onReset()&&e),"keyup.enter"===l&&(e=!1!==o.verifyOtp()&&e),e},null,null)),u.ob(13,16384,null,0,i.s,[],null,null),u.ob(14,540672,null,0,i.f,[[8,null],[8,null]],{form:[0,"form"]},null),u.zb(2048,null,i.b,null,[i.f]),u.ob(16,16384,null,0,i.k,[[4,i.b]],null,null),(n()(),u.pb(17,0,null,null,26,"div",[["id","form"]],null,null,null,null,null)),(n()(),u.pb(18,0,null,null,5,"input",[["formControlName","oneInputOtp"],["max","9"],["maxLength","1"],["min","0"],["size","1"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.xb(n,19)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.xb(n,19).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.xb(n,19)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.xb(n,19)._compositionEnd(t.target.value)&&e),e},null,null)),u.ob(19,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.zb(1024,null,i.h,function(n){return[n]},[i.c]),u.ob(21,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.h],[2,i.u]],{name:[0,"name"]},null),u.zb(2048,null,i.i,null,[i.e]),u.ob(23,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),u.pb(24,0,null,null,5,"input",[["formControlName","twoInputOtp"],["max","9"],["maxLength","1"],["min","0"],["size","1"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.xb(n,25)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.xb(n,25).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.xb(n,25)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.xb(n,25)._compositionEnd(t.target.value)&&e),e},null,null)),u.ob(25,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.zb(1024,null,i.h,function(n){return[n]},[i.c]),u.ob(27,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.h],[2,i.u]],{name:[0,"name"]},null),u.zb(2048,null,i.i,null,[i.e]),u.ob(29,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),u.pb(30,0,null,null,5,"input",[["formControlName","threeInputOtp"],["max","9"],["maxLength","1"],["min","0"],["size","1"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.xb(n,31)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.xb(n,31).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.xb(n,31)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.xb(n,31)._compositionEnd(t.target.value)&&e),e},null,null)),u.ob(31,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.zb(1024,null,i.h,function(n){return[n]},[i.c]),u.ob(33,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.h],[2,i.u]],{name:[0,"name"]},null),u.zb(2048,null,i.i,null,[i.e]),u.ob(35,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),u.pb(36,0,null,null,5,"input",[["formControlName","fourInputOtp"],["max","9"],["maxLength","1"],["min","0"],["size","1"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.xb(n,37)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.xb(n,37).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.xb(n,37)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.xb(n,37)._compositionEnd(t.target.value)&&e),e},null,null)),u.ob(37,16384,null,0,i.c,[u.D,u.k,[2,i.a]],null,null),u.zb(1024,null,i.h,function(n){return[n]},[i.c]),u.ob(39,671744,null,0,i.e,[[3,i.b],[8,null],[8,null],[6,i.h],[2,i.u]],{name:[0,"name"]},null),u.zb(2048,null,i.i,null,[i.e]),u.ob(41,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),u.pb(42,0,null,null,1,"button",[["class","btn btn-primary btn-embossed ripple"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.verifyOtp()&&u),u},null,null)),(n()(),u.Bb(-1,null,["Verify"])),(n()(),u.pb(44,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),u.Bb(-1,null,[" Didn't receive the code?"])),(n()(),u.pb(46,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(47,0,null,null,1,"a",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.resendOtpApi()&&u),u},null,null)),(n()(),u.Bb(-1,null,["Send code again"])),(n()(),u.pb(49,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.pb(50,0,null,null,0,"div",[["class","col-xl-2"]],null,null,null,null,null))],function(n,l){n(l,14,0,l.component.otpForm),n(l,21,0,"oneInputOtp"),n(l,27,0,"twoInputOtp"),n(l,33,0,"threeInputOtp"),n(l,39,0,"fourInputOtp")},function(n,l){n(l,12,0,u.xb(l,16).ngClassUntouched,u.xb(l,16).ngClassTouched,u.xb(l,16).ngClassPristine,u.xb(l,16).ngClassDirty,u.xb(l,16).ngClassValid,u.xb(l,16).ngClassInvalid,u.xb(l,16).ngClassPending),n(l,18,0,u.xb(l,23).ngClassUntouched,u.xb(l,23).ngClassTouched,u.xb(l,23).ngClassPristine,u.xb(l,23).ngClassDirty,u.xb(l,23).ngClassValid,u.xb(l,23).ngClassInvalid,u.xb(l,23).ngClassPending),n(l,24,0,u.xb(l,29).ngClassUntouched,u.xb(l,29).ngClassTouched,u.xb(l,29).ngClassPristine,u.xb(l,29).ngClassDirty,u.xb(l,29).ngClassValid,u.xb(l,29).ngClassInvalid,u.xb(l,29).ngClassPending),n(l,30,0,u.xb(l,35).ngClassUntouched,u.xb(l,35).ngClassTouched,u.xb(l,35).ngClassPristine,u.xb(l,35).ngClassDirty,u.xb(l,35).ngClassValid,u.xb(l,35).ngClassInvalid,u.xb(l,35).ngClassPending),n(l,36,0,u.xb(l,41).ngClassUntouched,u.xb(l,41).ngClassTouched,u.xb(l,41).ngClassPristine,u.xb(l,41).ngClassDirty,u.xb(l,41).ngClassValid,u.xb(l,41).ngClassInvalid,u.xb(l,41).ngClassPending)})}function h(n){return u.Cb(0,[(n()(),u.pb(0,0,null,null,1,"app-otp",[],null,null,null,x,m)),u.ob(1,4308992,null,0,d,[b.k,b.a,a,i.d],null,null)],function(n,l){n(l,1,0)},null)}var f=u.lb("app-otp",d,h,{},{},[]),C=t("Ip0R"),O=function(){return function(){}}();t.d(l,"OtpModuleNgFactory",function(){return v});var v=u.mb(e,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[o.a,f]],[3,u.j],u.x]),u.wb(4608,C.k,C.j,[u.u,[2,C.r]]),u.wb(4608,i.t,i.t,[]),u.wb(4608,i.d,i.d,[]),u.wb(1073742336,C.b,C.b,[]),u.wb(1073742336,b.n,b.n,[[2,b.t],[2,b.k]]),u.wb(1073742336,O,O,[]),u.wb(1073742336,i.q,i.q,[]),u.wb(1073742336,i.g,i.g,[]),u.wb(1073742336,i.n,i.n,[]),u.wb(1073742336,e,e,[]),u.wb(1024,b.i,function(){return[[{path:"",component:d},{path:"",redirectTo:"",pathMatch:"full"}]]},[])])})}}]);