(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Xoj1:function(e,t,n){"use strict";n.r(t),n.d(t,"ExamModule",(function(){return q}));var i=n("ofXK"),a=n("tyNb"),r=n("ey9i"),o=n("2Vo4"),s=n("IzEk"),c=n("wd/R"),l=n("AytR"),d=n("0IaG"),m=n("fXoL"),u=n("bTqV");let x=(()=>{class e{constructor(e,t){this.data=e,this.dialogRef=t,this.message="Are you sure?",this.confirmButtonText="Yes",this.cancelButtonText="Cancel",e&&(this.message=e.message||this.message,e.buttonText&&(this.confirmButtonText=e.buttonText.ok||this.confirmButtonText,this.cancelButtonText=e.buttonText.cancel||this.cancelButtonText))}onConfirmClick(){this.dialogRef.close(!0)}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](d.g))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-confirm"]],decls:8,vars:3,consts:[["align","center"],["mat-raised-button","","color","primary","tabindex","1",3,"click"],["mat-raised-button","","mat-dialog-close","","tabindex","-1"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"mat-dialog-content"),m["\u0275\u0275elementStart"](1,"p"),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"mat-dialog-actions",0),m["\u0275\u0275elementStart"](4,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.onConfirmClick()})),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",2),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.message),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](t.confirmButtonText),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.cancelButtonText))},directives:[d.e,d.c,u.b,d.d],encapsulation:2,changeDetection:0}),e})();var h=n("dJ3e"),f=n("dNgK"),p=n("gren"),g=n("wZkO"),b=n("jaxi"),v=n("TigC"),w=n("Wp6s"),S=n("XiUz"),y=n("NFeN"),k=n("znSr");function E(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"mat-button-toggle",5),m["\u0275\u0275listener"]("change",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](3).clickMark(t)})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=m["\u0275\u0275nextContext"](3);m["\u0275\u0275propertyInterpolate"]("aria-label",e+1),m["\u0275\u0275property"]("value",e)("disabled",e===n.currentIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("",e+1," ")}}function C(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"mat-button-toggle-group"),m["\u0275\u0275elementStart"](1,"mat-button-toggle",3),m["\u0275\u0275text"](2," Marked for review: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](3,E,2,4,"mat-button-toggle",4),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngForOf",e.exam.markForReviewArray)}}function I(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275element"](1,"app-question-display",7),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("question",e.exam.questions[e.exam.index])("wasValidated$",e.wasValidated$)}}function F(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"mat-tab",6),m["\u0275\u0275element"](1,"br"),m["\u0275\u0275template"](2,I,2,2,"div",0),m["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("label",e+1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",null!==n.exam.questions[n.exam.index])}}function T(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1,"Mark for review"),m["\u0275\u0275elementEnd"]())}function V(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1,"Unmark for review"),m["\u0275\u0275elementEnd"]())}function B(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"mat-card"),m["\u0275\u0275elementStart"](1,"mat-card-content",8),m["\u0275\u0275elementStart"](2,"button",9),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).getPrevQuestion()})),m["\u0275\u0275elementStart"](3,"mat-icon"),m["\u0275\u0275text"](4,"navigate_before"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," PREV "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",10),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).markForReview()})),m["\u0275\u0275template"](7,T,2,0,"span",11),m["\u0275\u0275template"](8,V,2,0,"ng-template",null,12,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"button",9),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](2).getNextQuestion()})),m["\u0275\u0275text"](11," NEXT "),m["\u0275\u0275elementStart"](12,"mat-icon"),m["\u0275\u0275text"](13,"navigate_next"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275reference"](9),t=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("disabled",t.isDisabledPrevBtn),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("disabled",t.isDisabledMarkForReviewBtn),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",-1===t.exam.markForReviewArray.indexOf(t.currentIndex))("ngIfElse",e),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("disabled",t.isDisabledNextBtn)}}function R(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275template"](1,C,4,1,"mat-button-toggle-group",0),m["\u0275\u0275elementStart"](2,"mat-tab-group",1),m["\u0275\u0275listener"]("selectedTabChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().tabClick(t)})),m["\u0275\u0275template"](3,F,3,2,"mat-tab",2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,B,14,5,"mat-card",0),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",e.hasMarkForReview),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("selectedIndex",e.currentIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.exam.questionsArray),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",null!==e.exam.questions[e.exam.index])}}function j(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1,"Mark for review"),m["\u0275\u0275elementEnd"]())}function L(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1,"Unmark for review"),m["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"mat-card"),m["\u0275\u0275elementStart"](1,"mat-card-content",13),m["\u0275\u0275elementStart"](2,"button",14),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().goToHome()})),m["\u0275\u0275elementStart"](3,"span"),m["\u0275\u0275text"](4,"Finish Exam"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",15),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().markForReview()})),m["\u0275\u0275template"](6,j,2,0,"span",11),m["\u0275\u0275template"](7,L,2,0,"ng-template",null,12,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275reference"](8),t=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("disabled",t.isDisabledMarkForReviewBtn),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",-1===t.exam.markForReviewArray.indexOf(t.currentIndex))("ngIfElse",e)}}const A=new h.c("ExamComponent"),M=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,r,s,c,l){this.router=e,this.dialog=t,this.snackBar=n,this.prismService=i,this.questionService=a,this.countdownService=r,this.ngxUiLoaderService=s,this.syncLocationService=c,this.syncCountdownTimeService=l,this.isPageHighlighted=!1,this.wasValidated$=new o.a(!1),this.wasValidated$.next(!1)}ngOnInit(){this.exam=new r.a;const e=c(this.exam.startAt),t=c(e).add(l.a.configPHP.examTime,"seconds");this.countdownSubscription=this.countdownService.countdown().subscribe(e=>{let n="";switch(e){case 3600:n="You have 1 hour to finish the exam";break;case 1800:n="You have another 30 minutes to finish the exam";break;case 600:n="You have another 10 minutes to finish the exam";break;case 300:n="You have less than 5 minutes to finish the exam";break;default:n=""}""!==n&&this.openSnackBar(n,"info-snackbar");const i=this.syncCountdownTimeService.getValue();i.time=this.getTimeString(t),this.syncCountdownTimeService.setValue(i)},e=>A.error(e),()=>this.finishExam()),this.countdownService.start(l.a.configPHP.examTime),this.syncLocationSubscription=this.syncLocationService.currentValue.subscribe(e=>{this.currentRoute=e}),this.openSnackBar("You have 90 minutes to finish your exam. Good luck!","info-snackbar"),this.getQuestion(0)}ngAfterViewChecked(){null===this.exam.questions[this.exam.index]||this.isPageHighlighted||this.prismService.highlightAll().finally(()=>this.isPageHighlighted=!0)}ngOnDestroy(){A.info("ngOnDestroy"),this.syncCountdownTimeService.clear(),this.countdownSubscription.unsubscribe(),this.syncLocationSubscription.unsubscribe()}canExit(){if(this.exam.isFinished)return!0;this.dialog.open(x,{data:{message:"Do you wish to finish the current exam?",buttonText:{ok:"YES",cancel:"NO"}}}).afterClosed().subscribe(e=>!!e&&(this.finishExam(),!0))}get currentIndex(){return this.exam.index}get isDisabledPrevBtn(){return void 0===this.exam.index||this.exam.index<=0}get isDisabledNextBtn(){return void 0===this.exam.index||this.exam.index>=l.a.configPHP.examSize-1}get isDisabledMarkForReviewBtn(){return void 0===this.exam.index}get hasMarkForReview(){return this.exam.markForReviewArray.length>0}clickMark(e){this.getQuestion(e.value)}tabClick(e){this.getQuestion(e.index)}getPrevQuestion(){--this.exam.index}getNextQuestion(){++this.exam.index}markForReview(){this.exam.markForReview()}goToHome(){-1!==["/exam"].indexOf(this.currentRoute)&&this.router.navigate(["/home"]).then(e=>{e&&A.info("Go to home page")})}finishExam(){this.exam.finish(),this.router.navigate(["/home"],{state:{score:this.exam.score}}).then(e=>{e&&A.info("Go to home page")})}getQuestion(e){window.scrollTo(0,0),this.ngxUiLoaderService.start(),this.isPageHighlighted=!1,this.exam.index=e,null===this.exam.questions[e]?this.questionService.getOneQuestionById(this.exam.questionsArray[e]).pipe(Object(s.a)(1)).subscribe(t=>this.exam.setQuestion(e,t),e=>A.error(e),()=>setTimeout(()=>this.ngxUiLoaderService.stopAll(),350)):setTimeout(()=>this.ngxUiLoaderService.stopAll(),350)}getTimeString(e){const t=c(),n=c.duration(e.diff(t));return n.hours().toString().padStart(2,"0")+":"+n.minutes().toString().padStart(2,"0")+":"+n.seconds().toString().padStart(2,"0")}openSnackBar(e,t,n="close"){this.snackBar.open(e,n,{duration:5e3,panelClass:[t]})}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](a.f),m["\u0275\u0275directiveInject"](d.b),m["\u0275\u0275directiveInject"](f.a),m["\u0275\u0275directiveInject"](h.d),m["\u0275\u0275directiveInject"](h.e),m["\u0275\u0275directiveInject"](h.a),m["\u0275\u0275directiveInject"](p.b),m["\u0275\u0275directiveInject"](h.h),m["\u0275\u0275directiveInject"](h.g))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-exam"]],decls:3,vars:2,consts:[[4,"ngIf"],["color","accent","backgroundColor","accent",3,"selectedIndex","selectedTabChange"],[3,"label",4,"ngFor","ngForOf"],["disabled","","aria-label","Mark for review"],[3,"value","aria-label","disabled","change",4,"ngFor","ngForOf"],[3,"value","aria-label","disabled","change"],[3,"label"],[3,"question","wasValidated$"],["fxLayout","row","fxLayoutAlign","space-between stretch","fxLayoutGap","5px"],["mat-flat-button","","color","primary","type","button","fxFlex","32","fxFlex.xs","48",3,"disabled","click"],["mat-flat-button","","color","accent","type","button","fxFlex","32","fxHide.xs","true",3,"disabled","click"],[4,"ngIf","ngIfElse"],["elseBlock",""],["fxLayout","column","fxLayout.xs","row","fxLayoutAlign","space-between stretch","fxLayoutGap","5px"],["mat-flat-button","","color","warn","type","button","fxFlex","100","fxFlex.xs","48",3,"click"],["mat-flat-button","","color","accent","type","button","fxFlex","48","fxHide.gt-xs","true",3,"disabled","click"]],template:function(e,t){1&e&&(m["\u0275\u0275template"](0,R,5,4,"div",0),m["\u0275\u0275template"](1,P,9,3,"mat-card",0),m["\u0275\u0275element"](2,"ngx-ui-loader")),2&e&&(m["\u0275\u0275property"]("ngIf",!t.exam.isFinished),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",!t.exam.isFinished))},directives:[i.NgIf,p.c,g.b,i.NgForOf,b.b,b.a,g.a,v.a,w.a,w.b,S.e,S.d,S.f,u.b,S.b,y.a,k.b],encapsulation:2}),e})(),canDeactivate:[r.b],data:{title:"ZCE - Exam"}},{path:"**",redirectTo:"/home",data:{title:"ZCE"}}];let N=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.j.forChild(M)],a.j]}),e})();var O=n("PCNd");let q=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,O.a,N]]}),e})()}}]);