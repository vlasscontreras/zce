function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Xoj1:function(e,t,n){"use strict";n.r(t),n.d(t,"ExamModule",(function(){return X}));var i,a=n("ofXK"),o=n("tyNb"),r=n("ey9i"),s=n("2Vo4"),c=n("quSY"),u=n("IzEk"),l=n("wd/R"),d=n("AytR"),m=n("0IaG"),x=n("fXoL"),f=n("bTqV"),h=((i=function(){function e(t,n){_classCallCheck(this,e),this.data=t,this.dialogRef=n,this.message="Are you sure?",this.confirmButtonText="Yes",this.cancelButtonText="Cancel",t&&(this.message=t.message||this.message,t.buttonText&&(this.confirmButtonText=t.buttonText.ok||this.confirmButtonText,this.cancelButtonText=t.buttonText.cancel||this.cancelButtonText))}return _createClass(e,[{key:"onConfirmClick",value:function(){this.dialogRef.close(!0)}}]),e}()).\u0275fac=function(e){return new(e||i)(x["\u0275\u0275directiveInject"](m.a),x["\u0275\u0275directiveInject"](m.g))},i.\u0275cmp=x["\u0275\u0275defineComponent"]({type:i,selectors:[["app-confirm"]],decls:8,vars:3,consts:[["align","center"],["mat-raised-button","","color","primary","tabindex","1",3,"click"],["mat-raised-button","","mat-dialog-close","","tabindex","-1"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"mat-dialog-content"),x["\u0275\u0275elementStart"](1,"p"),x["\u0275\u0275text"](2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](3,"mat-dialog-actions",0),x["\u0275\u0275elementStart"](4,"button",1),x["\u0275\u0275listener"]("click",(function(){return t.onConfirmClick()})),x["\u0275\u0275text"](5),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"button",2),x["\u0275\u0275text"](7),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e&&(x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate"](t.message),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate"](t.confirmButtonText),x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate"](t.cancelButtonText))},directives:[m.e,m.c,f.b,m.d],encapsulation:2,changeDetection:0}),i),p=n("dJ3e"),v=n("oUed"),g=n("dNgK"),b=n("gren"),y=n("wZkO"),k=n("jaxi"),w=n("TigC"),C=n("5N9J"),S=n("W0Cy"),E=n("Wp6s"),I=n("XiUz"),T=n("NFeN"),q=n("znSr");function F(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"mat-button-toggle",5),x["\u0275\u0275listener"]("change",(function(e){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](3).clickMark(e)})),x["\u0275\u0275text"](1),x["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;x["\u0275\u0275propertyInterpolate"]("aria-label",i+1),x["\u0275\u0275property"]("value",i),x["\u0275\u0275advance"](1),x["\u0275\u0275textInterpolate1"]("",i+1," ")}}function B(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"mat-button-toggle-group"),x["\u0275\u0275elementStart"](1,"mat-button-toggle",3),x["\u0275\u0275text"](2," Marked for review: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](3,F,2,3,"mat-button-toggle",4),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"](2);x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngForOf",n.exam.markForReviewArray)}}function V(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div"),x["\u0275\u0275element"](1,"app-question-checkbox",8),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"](4);x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("wasValidated$",n.wasValidated$)("question",n.exam.questions[n.exam.index].question)}}function P(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div"),x["\u0275\u0275element"](1,"app-question-radio",8),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"](4);x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("wasValidated$",n.wasValidated$)("question",n.exam.questions[n.exam.index].question)}}function j(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div"),x["\u0275\u0275element"](1,"app-question-display",7),x["\u0275\u0275template"](2,V,2,2,"div",0),x["\u0275\u0275template"](3,P,2,2,"div",0),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"](3);x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("question",n.exam.questions[n.exam.index].question),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.exam.questions[n.exam.index].question.type===n.PhpQuestionType.CHECKBOX),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.exam.questions[n.exam.index].question.type===n.PhpQuestionType.RADIO)}}function Q(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"mat-tab",6),x["\u0275\u0275element"](1,"br"),x["\u0275\u0275template"](2,j,4,3,"div",0),x["\u0275\u0275elementEnd"]()),2&e){var n=t.index,i=x["\u0275\u0275nextContext"](2);x["\u0275\u0275property"]("label",n+1),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngIf",void 0!==i.exam.questions[i.exam.index])}}function R(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"span"),x["\u0275\u0275text"](1,"Mark for review"),x["\u0275\u0275elementEnd"]())}function L(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"span"),x["\u0275\u0275text"](1,"Unmark for review"),x["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"mat-card"),x["\u0275\u0275elementStart"](1,"mat-card-content",9),x["\u0275\u0275elementStart"](2,"button",10),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).getPrevQuestion()})),x["\u0275\u0275elementStart"](3,"mat-icon",11),x["\u0275\u0275text"](4,"navigate_before"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275text"](5," PREVIEW "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"button",12),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).markForReview()})),x["\u0275\u0275template"](7,R,2,0,"span",13),x["\u0275\u0275template"](8,L,2,0,"ng-template",null,14,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](10,"button",10),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"](2).getNextQuestion()})),x["\u0275\u0275text"](11," NEXT "),x["\u0275\u0275elementStart"](12,"mat-icon",11),x["\u0275\u0275text"](13,"navigate_next"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&e){var i=x["\u0275\u0275reference"](9),a=x["\u0275\u0275nextContext"](2);x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("disabled",a.isDisabledPrevBtn),x["\u0275\u0275advance"](4),x["\u0275\u0275property"]("disabled",a.isDisabledMarkForReviewBtn),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",-1===a.exam.markForReviewArray.indexOf(a.currentIndex))("ngIfElse",i),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("disabled",a.isDisabledNextBtn)}}function O(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"div"),x["\u0275\u0275template"](1,B,4,1,"mat-button-toggle-group",0),x["\u0275\u0275elementStart"](2,"mat-tab-group",1),x["\u0275\u0275listener"]("selectedTabChange",(function(e){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().tabClick(e)})),x["\u0275\u0275template"](3,Q,3,2,"mat-tab",2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](4,N,14,5,"mat-card",0),x["\u0275\u0275elementEnd"]()}if(2&e){var i=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",i.hasMarkForReview),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("selectedIndex",i.currentIndex),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngForOf",i.exam.questionsArray),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",void 0!==i.exam.questions[i.exam.index])}}function A(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"mat-card"),x["\u0275\u0275elementStart"](1,"mat-card-content",15),x["\u0275\u0275elementStart"](2,"button",16),x["\u0275\u0275listener"]("click",(function(){return x["\u0275\u0275restoreView"](n),x["\u0275\u0275nextContext"]().goToHome()})),x["\u0275\u0275elementStart"](3,"span"),x["\u0275\u0275text"](4,"Finish Exam"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}}var M,_,D,H=new p.c("ExamComponent"),U=[{path:"",component:(M=function(){function e(t,n,i,a,o,r,c,u,l,d){_classCallCheck(this,e),this.location=t,this.router=n,this.dialog=i,this.snackBar=a,this.questionService=o,this.countdownService=r,this.syncCountdownTimeService=c,this.prismService=u,this.ngxUiLoaderService=l,this.cdr=d,this.isPageHighlighted=!1,this.PhpQuestionType=v.c,this.wasValidated$=new s.a(!1),this.wasValidated$.next(!1)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exam=new r.a;var t=l(this.exam.startAt),n=l(t).add(d.a.configPHP.examTime,"seconds");this.countdownSubscription=this.countdownService.countdown().subscribe((function(t){3600===t&&e.openSnackBar("You have another hour to finish the exam","info-snackbar"),1800===t&&e.openSnackBar("You have another 30 minutes to finish the exam","info-snackbar"),600===t&&e.openSnackBar("You have another 10 minutes to finish the exam","info-snackbar"),300===t&&e.openSnackBar("You have less than 5 minutes to finish the exam","info-snackbar");var i=e.syncCountdownTimeService.getValue();i.time=e.getTimeString(n),e.syncCountdownTimeService.setValue(i)}),(function(e){return H.error(e)}),(function(){return e.finishExam()})),this.countdownService.start(d.a.configPHP.examTime),this.openSnackBar("You have 90 minutes to finish your exam. Good luck!","info-snackbar"),this.getQuestion(0),this.wasValidated$.subscribe((function(t){t&&e.cdr.detectChanges()}))}},{key:"ngAfterViewChecked",value:function(){var e=this;this.exam.isCurrentQuestionLoaded&&!this.isPageHighlighted&&(setTimeout((function(){return e.prismService.highlightAll()}),10),this.isPageHighlighted=!0),this.cdr.detectChanges()}},{key:"ngOnDestroy",value:function(){this.countdownSubscriptionUnsubscribe()}},{key:"canExit",value:function(){var e=this;if(this.exam.isFinished)return!0;this.dialog.open(h,{data:{message:"Do you wish to finish the current exam?",buttonText:{ok:"YES",cancel:"NO"}}}).afterClosed().subscribe((function(t){return!!t&&(e.finishExam(),!0)}))}},{key:"clickMark",value:function(e){this.getQuestion(e.value)}},{key:"tabClick",value:function(e){this.getQuestion(e.index)}},{key:"getPrevQuestion",value:function(){--this.exam.index}},{key:"getNextQuestion",value:function(){++this.exam.index}},{key:"markForReview",value:function(){this.exam.markForReview()}},{key:"goToHome",value:function(){var e=this.location.prepareExternalUrl(this.location.path());-1!==["/exam"].indexOf(e)&&this.router.navigate(["/home"]).then()}},{key:"finishExam",value:function(){this.countdownSubscriptionUnsubscribe(),this.exam.finish(),this.router.navigate(["/home"],{state:{score:this.exam.score}}).then()}},{key:"getQuestion",value:function(e){var t=this;this.ngxUiLoaderService.start(),this.exam.validateCurrentExamQuestion(),this.exam.isCurrentQuestionLoaded=!1,this.isPageHighlighted=!1,this.exam.index=e;var n=this.exam.questionsArray[e];void 0===this.exam.questions[e]?this.questionService.getOneQuestionById(n).pipe(Object(u.a)(1)).subscribe((function(i){t.exam.setQuestion(e,{id:n,question:i,isQuestionAnswerCorrect:!1}),t.stopLoaded()}),(function(e){return H.error(e)})):this.stopLoaded()}},{key:"getTimeString",value:function(e){var t=l(),n=l.duration(e.diff(t));return n.hours().toString().padStart(2,"0")+":"+n.minutes().toString().padStart(2,"0")+":"+n.seconds().toString().padStart(2,"0")}},{key:"stopLoaded",value:function(){var e=this;this.exam.isCurrentQuestionLoaded=!0,setTimeout((function(){e.ngxUiLoaderService.stopAll()}),350)}},{key:"countdownSubscriptionUnsubscribe",value:function(){this.syncCountdownTimeService.clear(),this.countdownSubscription instanceof c.a&&this.countdownSubscription.unsubscribe()}},{key:"openSnackBar",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"close";this.snackBar.open(e,n,{duration:5e3,panelClass:[t]})}},{key:"currentIndex",get:function(){return this.exam.index}},{key:"isDisabledPrevBtn",get:function(){return void 0===this.exam.index||this.exam.index<=0}},{key:"isDisabledNextBtn",get:function(){return void 0===this.exam.index||this.exam.index>=d.a.configPHP.examSize-1}},{key:"isDisabledMarkForReviewBtn",get:function(){return void 0===this.exam.index}},{key:"hasMarkForReview",get:function(){return this.exam.markForReviewArray.length>0}}]),e}(),M.\u0275fac=function(e){return new(e||M)(x["\u0275\u0275directiveInject"](a.Location),x["\u0275\u0275directiveInject"](o.f),x["\u0275\u0275directiveInject"](m.b),x["\u0275\u0275directiveInject"](g.a),x["\u0275\u0275directiveInject"](p.e),x["\u0275\u0275directiveInject"](p.a),x["\u0275\u0275directiveInject"](p.g),x["\u0275\u0275directiveInject"](p.d),x["\u0275\u0275directiveInject"](b.b),x["\u0275\u0275directiveInject"](x.ChangeDetectorRef))},M.\u0275cmp=x["\u0275\u0275defineComponent"]({type:M,selectors:[["app-exam"]],decls:3,vars:2,consts:[[4,"ngIf"],["color","accent","backgroundColor","accent",3,"selectedIndex","selectedTabChange"],[3,"label",4,"ngFor","ngForOf"],["disabled","","aria-label","Mark for review"],[3,"value","aria-label","change",4,"ngFor","ngForOf"],[3,"value","aria-label","change"],[3,"label"],[3,"question"],[3,"wasValidated$","question"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","space-between stretch","fxLayoutGap","5px"],["mat-flat-button","","color","primary","type","button","fxFlex","32","fxFlex.xs","100",3,"disabled","click"],["fxHide.xs","true"],["mat-flat-button","","color","accent","type","button","fxFlex","32","fxFlex.xs","100",3,"disabled","click"],[4,"ngIf","ngIfElse"],["elseBlock",""],["fxLayout","column"],["mat-flat-button","","color","warn","type","button","fxFlex","100",3,"click"]],template:function(e,t){1&e&&(x["\u0275\u0275template"](0,O,5,4,"div",0),x["\u0275\u0275template"](1,A,5,0,"mat-card",0),x["\u0275\u0275element"](2,"ngx-ui-loader")),2&e&&(x["\u0275\u0275property"]("ngIf",!t.exam.isFinished),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!t.exam.isFinished))},directives:[a.NgIf,b.c,y.b,a.NgForOf,k.b,k.a,y.a,w.a,C.a,S.a,E.a,E.b,I.e,I.d,I.f,f.b,I.b,T.a,q.b],encapsulation:2}),M),canDeactivate:[r.b],data:{title:"ZCE - Exam"}},{path:"**",redirectTo:"/home",data:{title:"ZCE"}}],$=((_=function e(){_classCallCheck(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[o.j.forChild(U)],o.j]}),_),Y=n("PCNd"),X=((D=function e(){_classCallCheck(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[a.CommonModule,Y.a,$]]}),D)}}]);