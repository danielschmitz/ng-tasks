import{a as x}from"./chunk-ZKCXJFPY.js";import{a as dt,b as pt,c as ht,d as gt,e as ft}from"./chunk-WF2BA3OG.js";import{b as At,c as Dt,d as Et,e as Ft,f as Nt,g as Lt,h as Bt,i as Ht,j as Vt,k as Ut,v as Xt}from"./chunk-VYZYZZJW.js";import{m as Kt,n as $t}from"./chunk-WWOF3X5T.js";import"./chunk-7NHJSWUD.js";import{B as zt,E as me,F as Yt,s as Ot}from"./chunk-45AOXZM7.js";import{b as mt,c as lt,d as ct,e as ut,g as D,h as ae}from"./chunk-EZTHPUAS.js";import"./chunk-MW6LRQ77.js";import{b as jt}from"./chunk-63ELC5ES.js";import{A as Ct,E as It,F as kt,G as xt,H as ke,J as Tt,K as wt,O as xe,R as St,U as Pt,V as Rt,c as _t,da as A,ea as oe,j as bt,k as vt,u as yt,v as Mt}from"./chunk-3RQUDV4Z.js";import{c as Te,d as re,f as E,g as we,h as se}from"./chunk-HU7WFQWJ.js";import{$ as S,A as $,Ab as B,B as Oe,Bb as Ze,Ca as W,D as Fe,Da as Ye,Db as R,Fb as Je,Ga as Ue,Gb as et,Gc as st,Hb as tt,I as Ne,Ib as m,Jb as l,Kb as b,La as Z,Ob as C,Pa as Ke,Rb as h,S as Le,Tb as d,U as X,Ub as Ie,V as Me,Vb as J,W as Be,Xb as ee,Yb as nt,Z as He,Zb as H,_b as V,a as ve,aa as Ve,ab as c,b as De,bb as L,bc as te,ca as M,cb as $e,cc as u,dc as it,e as w,eb as Xe,ec as ot,fa as s,fb as Qe,gc as at,hb as Ge,ia as je,ic as I,j as U,jc as k,mb as _,mc as rt,na as g,nb as qe,nc as ne,o as ye,oa as f,ob as We,p as Ee,pa as Q,qc as j,rb as Ce,sb as v,t as K,ta as G,wa as ze,xb as p,ya as P,yb as y,za as q,zc as ie}from"./chunk-T4MBMAI6.js";var Qt=[{path:"",loadComponent:()=>import("./chunk-36F5JHAX.js").then(i=>i.HomeComponent)},{path:"login",loadComponent:()=>import("./chunk-SODUNOFO.js").then(i=>i.LoginComponent)},{path:"categories",loadComponent:()=>import("./chunk-EEKNQTO2.js").then(i=>i.CategoriesComponent)},{path:"categories/new",loadComponent:()=>import("./chunk-4TJQ4H7H.js").then(i=>i.NewCategoryComponent)},{path:"categories/edit/:id",loadComponent:()=>import("./chunk-EJEAY4S3.js").then(i=>i.EditCategoryComponent)},{path:"address-form",loadComponent:()=>import("./chunk-IM6X6KXW.js").then(i=>i.AdressFormComponent)},{path:"system-variables",loadComponent:()=>import("./chunk-FHY3H7C4.js").then(i=>i.SystemVariables)},{path:"table",loadComponent:()=>import("./chunk-3RN22MBC.js").then(i=>i.TableComponent)},{path:"tree",loadComponent:()=>import("./chunk-HOAGAYSM.js").then(i=>i.TreeComponent)}];var dn="@",pn=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(G);loadingSchedulerFn=s(hn,{optional:!0});_engine;constructor(e,t,n,a,r){this.doc=e,this.delegate=t,this.zone=n,this.animationType=a,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-SXOLTIUZ.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new He(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let r=new a(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new Se(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let T=r.createRenderer(e,t);a.use(T),this.scheduler??=this.injector.get(ze,null,{optional:!0}),this.scheduler?.notify(11)}).catch(r=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){$e()};static \u0275prov=S({token:i,factory:i.\u0275fac})}return i})(),Se=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t){this.delegate.removeChild(o,e,t)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,n){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(o,e,t,n)),this.delegate.listen(o,e,t,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(dn)}},hn=new M("");function Gt(i="animations"){return Ye("NgAsyncAnimations"),je([{provide:Qe,useFactory:(o,e,t)=>new pn(o,e,t,i),deps:[ie,ct,q]},{provide:Z,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var qt=(i,o)=>{let t=s(x).getToken();if(t){let n=i.clone({setHeaders:{Authorization:t.token}});return o(n)}return o(i)},Wt=(i,o)=>{let e=s(ht),t=s(x);return o(i).pipe(Fe(n=>(n.status===401&&(t.logout(),e.navigate(["/login"])),Ee(()=>n))))};var Zt={providers:[rt({eventCoalescing:!0}),ft(Qt),Gt(),mt(lt([qt,Wt])),{provide:Ut,useValue:{duration:2500}}]};var yn=["mat-menu-item",""],Mn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Cn=["mat-icon, [matMenuItemIcon]","*"];function In(i,o){i&1&&(Q(),m(0,"svg",2),b(1,"polygon",3),l())}var kn=["*"];function xn(i,o){if(i&1){let e=C();m(0,"div",0),h("click",function(){g(e);let n=d();return f(n.closed.emit("click"))})("animationstart",function(n){g(e);let a=d();return f(a._onAnimationStart(n.animationName))})("animationend",function(n){g(e);let a=d();return f(a._onAnimationDone(n.animationName))})("animationcancel",function(n){g(e);let a=d();return f(a._onAnimationDone(n.animationName))}),m(1,"div",1),J(2),l()()}if(i&2){let e=d();Ze(e._classList),B("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating),y("id",e.panelId),p("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Re=new M("MAT_MENU_PANEL"),Y=(()=>{class i{_elementRef=s(W);_document=s(ie);_focusMonitor=s(ke);_parentMenu=s(Re,{optional:!0});_changeDetectorRef=s(ne);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new U;_focused=new U;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(bt).load(St),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&h("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(p("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),B("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j]},exportAs:["matMenuItem"],features:[Ce],attrs:yn,ngContentSelectors:Cn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Ie(Mn),J(0),m(1,"span",0),J(2,1),l(),b(3,"div",1),v(4,In,2,0,":svg:svg",2)),t&2&&(c(3),y("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),c(),R(n._triggersSubmenu?4:-1))},dependencies:[Pt],encapsulation:2,changeDetection:0})}return i})();var Tn=new M("MatMenuContent");var wn=new M("mat-menu-default-options",{providedIn:"root",factory:Sn});function Sn(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var Pe="_mat-menu-enter",le="_mat-menu-exit",F=(()=>{class i{_elementRef=s(W);_changeDetectorRef=s(ne);_injector=s(G);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled;_allItems;_directDescendantItems=new Ue;_classList={};_panelAnimationState="void";_animationDone=new U;_isAnimating=!1;parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=ve({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new P;close=this.closed;panelId=s(Tt).getId("mat-menu-panel-");constructor(){let e=s(wn);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop,this._animationsDisabled=s(Z,{optional:!0})==="NoopAnimations"}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(X(this._directDescendantItems),Me(e=>$(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(X(this._directDescendantItems),Me(t=>$(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:vt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ke(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=De(ve({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===le;(t||e===Pe)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating=!1)}_onAnimationStart(e){(e===Pe||e===le)&&(this._isAnimating=!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(le),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Pe:le)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(X(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,a){if(t&1&&(ee(a,Tn,5),ee(a,Y,5),ee(a,Y,4)),t&2){let r;H(r=V())&&(n.lazyContent=r.first),H(r=V())&&(n._allItems=r),H(r=V())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&nt(Xe,5),t&2){let a;H(a=V())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&p("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",j],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:j(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[at([{provide:Re,useExisting:i}]),Ce],ngContentSelectors:kn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Ie(),v(0,xn,3,12,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight))}@keyframes _mat-menu-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-menu-exit{from{opacity:1}to{opacity:0}}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;box-sizing:border-box;outline:0;animation:_mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);border-radius:var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-sys-surface-container));box-shadow:var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));will-change:transform,opacity}.mat-mdc-menu-panel.mat-menu-panel-exit-animation{animation:_mat-menu-exit 100ms 25ms linear forwards}.mat-mdc-menu-panel.mat-menu-panel-animations-disabled{animation:none}.mat-mdc-menu-panel.mat-menu-panel-animating{pointer-events:none}.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty){display:none}@media(forced-colors: active){.mat-mdc-menu-panel{outline:solid 1px}}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-sys-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing, 8px);margin-top:var(--mat-menu-divider-top-spacing, 8px)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px;padding-left:var(--mat-menu-item-leading-spacing, 12px);padding-right:var(--mat-menu-item-trailing-spacing, 12px);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-menu-item::-moz-focus-inner{border:0}[dir=rtl] .mat-mdc-menu-item{padding-left:var(--mat-menu-item-trailing-spacing, 12px);padding-right:var(--mat-menu-item-leading-spacing, 12px)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-trailing-spacing, 12px)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-trailing-spacing, 12px);padding-right:var(--mat-menu-item-with-icon-leading-spacing, 12px)}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing, 12px);height:var(--mat-menu-item-icon-size, 24px);width:var(--mat-menu-item-icon-size, 24px)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing, 12px)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(forced-colors: active){.mat-mdc-menu-item{margin-top:1px}}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size, 24px);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing, 12px)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing, 12px);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}@media(forced-colors: active){.mat-mdc-menu-submenu-icon{fill:CanvasText}}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,changeDetection:0})}return i})(),nn=new M("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(me);return()=>i.scrollStrategies.reposition()}});function Pn(i){return()=>i.scrollStrategies.reposition()}var Rn={provide:nn,deps:[me],useFactory:Pn},Jt=_t({passive:!0});var z=new WeakMap,on=(()=>{class i{_overlay=s(me);_element=s(W);_viewContainerRef=s(Ge);_menuItemInstance=s(Y,{optional:!0,self:!0});_dir=s(wt,{optional:!0});_focusMonitor=s(ke);_ngZone=s(q);_scrollStrategy=s(nn);_changeDetectorRef=s(ne);_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=w.EMPTY;_hoverSubscription=w.EMPTY;_menuCloseSubscription=w.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_handleTouchStart=e=>{kt(e)||(this._openedBy="touch")};_openedBy=void 0;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}_menu;menuData;restoreFocus=!0;menuOpened=new P;onMenuOpen=this.menuOpened;menuClosed=new P;onMenuClose=this.menuClosed;constructor(){let e=s(Re,{optional:!0});this._parentMaterialMenu=e instanceof F?e:void 0,this._element.nativeElement.addEventListener("touchstart",this._handleTouchStart,Jt)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this.menu&&this._ownsMenu(this.menu)&&z.delete(this.menu),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Jt),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let t=z.get(e);z.set(e,this),t&&t!==this&&t.closeMenu();let n=this._createOverlay(e),a=n.getConfig(),r=a.positionStrategy;this._setPosition(e,r),a.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,n.hasAttached()||(n.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof F&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Be(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof F&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ne(1)).subscribe(()=>{t.detach(),n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&z.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe(n=>{this.menu instanceof F&&this.menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new zt({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr"})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,r)})})}_setPosition(e,t){let[n,a]=e.xPosition==="before"?["end","start"]:["start","end"],[r,T]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[ge,fe]=[r,T],[_e,be]=[n,a],N=0;if(this.triggersSubmenu()){if(be=n=e.xPosition==="before"?"start":"end",a=_e=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ae=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ae?Ae._getHostElement().offsetTop:0}N=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(ge=r==="top"?"bottom":"top",fe=T==="top"?"bottom":"top");t.withPositions([{originX:n,originY:ge,overlayX:_e,overlayY:r,offsetY:N},{originX:a,originY:ge,overlayX:be,overlayY:r,offsetY:N},{originX:n,originY:fe,overlayX:_e,overlayY:T,offsetY:-N},{originX:a,originY:fe,overlayX:be,overlayY:T,offsetY:-N}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:ye(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Oe(r=>this._menuOpen&&r!==this._menuItemInstance)):ye();return $(e,n,a,t)}_handleMousedown(e){It(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&(this._openedBy="mouse",this.openMenu())}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new jt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return z.get(e)===this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=We({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&h("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&p("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]})}return i})(),an=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=qe({type:i});static \u0275inj=Ve({providers:[Rn],imports:[Rt,xe,Yt,Ot,xe]})}return i})(),rn={transformMenu:Te("transformMenu",[we("void",E({opacity:0,transform:"scale(0.8)"})),se("void => enter",re("120ms cubic-bezier(0, 0, 0.2, 1)",E({opacity:1,transform:"scale(1)"}))),se("* => void",re("100ms 25ms linear",E({opacity:0})))]),fadeInItems:Te("fadeInItems",[we("showing",E({opacity:1})),se("void => *",[E({opacity:0}),re("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},Ei=rn.fadeInItems,Oi=rn.transformMenu;var ce=class i{setStyle(o,e){Dn(o).setAttribute("href",e)}removeStyle(o){let e=sn(o);e&&document.head.removeChild(e)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};function Dn(i){return sn(i)||En(i)}function sn(i){return document.head.querySelector(`link[rel="stylesheet"].${mn(i)}`)}function En(i){let o=document.createElement("link");return o.setAttribute("rel","stylesheet"),o.classList.add(mn(i)),document.head.appendChild(o),o}function mn(i){return`style-manager-${i}`}var ue=class i{static storageKey="docs-theme-storage-current-name";onThemeUpdate=new P;storeTheme(o){try{window.localStorage[i.storageKey]=o.name}catch{}this.onThemeUpdate.emit(o)}getStoredThemeName(){try{return window.localStorage[i.storageKey]||null}catch{return null}}clearStorage(){try{window.localStorage.removeItem(i.storageKey)}catch{}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};function Nn(i,o){if(i&1){let e=C();m(0,"button",4),h("click",function(){let n=g(e).$implicit,a=d();return f(a.selectTheme(n.name))}),m(1,"mat-icon",5),u(2),l(),m(3,"span"),u(4),l(),Q(),m(5,"svg",6),b(6,"path",7)(7,"path",8)(8,"path",9),l()()}if(i&2){let e=o.$implicit,t=d();c(),B("docs-theme-selected-icon",t.currentTheme===e),y("color",t.currentTheme===e?"accent":void 0),c(),ot(" ",t.currentTheme===e?"radio_button_checked":"radio_button_unchecked"," "),c(2),it(e.displayName),c(2),p("fill",e.background),c(),p("fill",e.color),c(),p("fill",e.color)}}var de=class i{constructor(o,e,t,n){this.styleManager=o;this._themeStorage=e;this._activatedRoute=t;this.liveAnnouncer=n;let a=this._themeStorage.getStoredThemeName();a?this.selectTheme(a):this.themes.find(r=>{r.isDefault===!0&&this.selectTheme(r.name)})}_queryParamSubscription=w.EMPTY;currentTheme;themes=[{color:"#ffd9e1",displayName:"Rose & Red",name:"rose-red",background:"#fffbff"},{color:"#d7e3ff",displayName:"Azure & Blue",name:"azure-blue",background:"#fdfbff",isDefault:!0},{color:"#810081",displayName:"Magenta & Violet",name:"magenta-violet",background:"#1e1a1d"},{color:"#004f4f",displayName:"Cyan & Orange",name:"cyan-orange",background:"#191c1c"}];ngOnInit(){this._queryParamSubscription=this._activatedRoute.queryParamMap.pipe(K(o=>o.get("theme"))).subscribe(o=>{o&&this.selectTheme(o)})}ngOnDestroy(){this._queryParamSubscription.unsubscribe()}selectTheme(o){let e=this.themes.find(t=>t.name===o)||this.themes.find(t=>t.isDefault);this.currentTheme=e,this.styleManager.setStyle("theme",`${e.name}.css`),this.currentTheme&&(this.liveAnnouncer.announce(`${e.displayName} theme selected.`,"polite",3e3),this._themeStorage.storeTheme(this.currentTheme))}static \u0275fac=function(e){return new(e||i)(L(ce),L(ue),L(dt),L(xt))};static \u0275cmp=_({type:i,selectors:[["theme-picker"]],decls:7,vars:1,consts:[["themeMenu","matMenu"],["mat-icon-button","","aria-label","Select a theme","matTooltip","Select a theme for the documentation",1,"docs-theme-picker-trigger",3,"mat-menu-trigger-for"],["xPosition","before",1,"docs-theme-picker-menu"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[3,"color"],["matMenuItemIcon","","width","80","height","80","viewBox","0 0 80 80",1,"theme-example-icon"],["d","M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z"],["d","M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z"],["d","M0 0h80v17.24H0V0z"]],template:function(e,t){if(e&1&&(m(0,"button",1)(1,"mat-icon"),u(2,"format_color_fill"),l()(),m(3,"mat-menu",2,0),et(5,Nn,9,8,"button",3,Je),l()),e&2){let n=te(4);y("mat-menu-trigger-for",n),c(5),tt(t.themes)}},dependencies:[oe,A,$t,Kt,an,F,Y,on,ae,D],styles:[`button.docs-theme-picker-trigger{color:inherit}.docs-theme-picker-menu .mat-mdc-menu-item .theme-example-icon{margin-right:0;margin-left:24px;order:1;width:24px;height:24px;border-radius:4px;border:solid 1px color-mix(in srgb,var(--mat-sys-outline-variant) 50%,transparent)}.docs-theme-picker-menu .mat-mdc-menu-item .theme-example-icon svg{vertical-align:middle}
`],encapsulation:2,changeDetection:0})};var pe=class i{authService=s(x);logout(){this.authService.logout()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-logout-button"]],decls:3,vars:0,consts:[["mat-icon-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(m(0,"button",0),h("click",function(){return t.logout()}),m(1,"mat-icon"),u(2,"logout"),l()())},dependencies:[Xt,A,D],encapsulation:2})};function Ln(i,o){if(i&1){let e=C();m(0,"a",9),u(1,"Categories"),l(),m(2,"a",3),u(3,"Tasks"),l(),m(4,"a",10),h("click",function(){g(e);let n=d();return f(n.logout())}),u(5,"Logout"),l()}}function Bn(i,o){i&1&&(m(0,"a",4),u(1,"Login"),l())}function Hn(i,o){if(i&1){let e=C();m(0,"button",11),h("click",function(){g(e),d();let n=te(2);return f(n.toggle())}),m(1,"mat-icon",12),u(2,"menu"),l()()}}function Vn(i,o){i&1&&b(0,"app-logout-button")}var he=class i{authService=s(x);breakpointObserver=s(yt);loggedIn$=this.authService.loginState$;isHandset$=this.breakpointObserver.observe(Mt.Handset).pipe(K(o=>o.matches),Le());logout(){this.authService.logout()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-root"]],decls:26,vars:18,consts:[["drawer",""],[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["mat-list-item","","routerLink","/"],["mat-list-item","","routerLink","/login"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button",""],[1,"spacer"],[1,"router-outlet"],["mat-list-item","","routerLink","/categories"],["mat-list-item","",3,"click"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(e,t){e&1&&(m(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0),I(3,"async"),I(4,"async"),I(5,"async"),m(6,"mat-toolbar"),u(7,"Menu"),l(),m(8,"mat-nav-list")(9,"a",3),u(10,"Home"),l(),v(11,Ln,6,0),I(12,"async"),v(13,Bn,2,0,"a",4),l()(),m(14,"mat-sidenav-content")(15,"mat-toolbar",5),v(16,Hn,3,0,"button",6),I(17,"async"),m(18,"span"),u(19," Ng Tasks "),l(),b(20,"div",7)(21,"theme-picker"),v(22,Vn,1,0,"app-logout-button"),I(23,"async"),l(),m(24,"div",8),b(25,"router-outlet"),l()()()),e&2&&(c(),y("mode",k(3,6,t.isHandset$)?"over":"side")("opened",k(4,8,t.isHandset$)===!1),p("role",k(5,10,t.isHandset$)?"dialog":"navigation"),c(10),R(k(12,12,t.loggedIn$)?11:13),c(5),R(k(17,14,t.isHandset$)?16:-1),c(6),R(k(23,16,t.loggedIn$)?22:-1))},dependencies:[Vt,Ht,oe,A,Bt,Nt,Lt,Ft,Et,Dt,At,ae,D,st,pt,de,gt,pe],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px;border-right:1px solid var(--mat-sys-outline-variant);border-radius:0}.sidenav[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px;display:flex;flex-direction:column;gap:5px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--mat-sys-primary-container);border-bottom:1px solid var(--mat-sys-outline-variant);position:sticky;top:0;z-index:1}.router-outlet[_ngcontent-%COMP%]{margin:10px}"]})};ut(he,Zt).catch(i=>console.error(i));
