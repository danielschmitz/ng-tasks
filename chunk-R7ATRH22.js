import{a as _}from"./chunk-ACY5AAXP.js";import{a as v}from"./chunk-AMGKBR67.js";import"./chunk-VCR3DY3D.js";import{a as y,c as f}from"./chunk-WF2BA3OG.js";import{l as u,n as C,w as h}from"./chunk-FAZAPXBE.js";import"./chunk-7NHJSWUD.js";import"./chunk-MW6LRQ77.js";import"./chunk-WWOF3X5T.js";import"./chunk-45AOXZM7.js";import"./chunk-63ELC5ES.js";import"./chunk-EZTHPUAS.js";import"./chunk-3RQUDV4Z.js";import"./chunk-HU7WFQWJ.js";import{Ib as p,Jb as c,Rb as g,ab as n,cc as d,d as i,fa as o,mb as l,s as a,yb as s}from"./chunk-T4MBMAI6.js";var k=class m{route=o(y);router=o(f);service=o(v);id;category={name:""};loading=!1;snak=o(u);constructor(){this.id=this.route.snapshot.paramMap.get("id"),this.fetchCategory()}fetchCategory(){return i(this,null,function*(){if(this.loading=!0,this.id===null)throw new Error("No id provided");try{this.category=yield a(this.service.getById(this.id))}catch(t){this.snak.open(t.error.message)}finally{this.loading=!1}})}onBackClick(){this.router.navigate(["/categories"])}onSubmitClick(t){return i(this,null,function*(){this.loading=!0;try{yield a(this.service.update(this.id,t)),this.router.navigate(["/categories"])}catch(e){this.snak.open(e.error.message)}finally{this.loading=!1}})}static \u0275fac=function(e){return new(e||m)};static \u0275cmp=l({type:m,selectors:[["app-edit-category"]],decls:4,vars:2,consts:[[3,"loading"],[3,"onSubmit","onBack","category"]],template:function(e,r){e&1&&(p(0,"h2"),d(1,"Edit Category"),c(),p(2,"app-loading",0)(3,"app-form-category",1),g("onSubmit",function(b){return r.onSubmitClick(b)})("onBack",function(){return r.onBackClick()}),c()()),e&2&&(n(2),s("loading",r.loading),n(),s("category",r.category))},dependencies:[h,C,_],encapsulation:2})};export{k as EditCategoryComponent};
