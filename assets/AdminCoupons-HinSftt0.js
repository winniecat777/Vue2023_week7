import{_ as g,o as l,c as a,b as e,w as u,v as r,k as w,t as _,m as x,r as h,a as m,F as b,j as k}from"./index-vWNHF2ZC.js";import{u as $}from"./toastMessage-EB0FMTIy.js";import{m as L,D,P as N}from"./PaginationComponent-gFoKjsB0.js";const V={props:{coupon:Object,isNew:Boolean},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[L]},P={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog",role:"document"},T={class:"modal-content"},B={class:"modal-header"},O={class:"modal-title",id:"exampleModalLabel"},S={key:0},j={key:1},A=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),E={class:"modal-body"},I={class:"mb-3"},F=e("label",{for:"title"},"標題",-1),z={class:"mb-3"},q=e("label",{for:"coupon_code"},"優惠碼",-1),G={class:"mb-3"},H=e("label",{for:"due_date"},"到期日",-1),J={class:"mb-3"},K=e("label",{for:"price"},"折扣百分比",-1),Q={class:"mb-3"},R={class:"form-check"},W=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),X={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Z(s,o,n,c,t,p){return l(),a("div",P,[e("div",U,[e("div",T,[e("div",B,[e("h5",O,[n.isNew?(l(),a("span",S,"新增優惠卷")):(l(),a("span",j,"編輯優惠卷"))]),A]),e("div",E,[e("div",I,[F,u(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=i=>t.tempCoupon.title=i),placeholder:"請輸入標題"},null,512),[[r,t.tempCoupon.title]])]),e("div",z,[q,u(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=i=>t.tempCoupon.code=i),placeholder:"請輸入優惠碼"},null,512),[[r,t.tempCoupon.code]])]),e("div",G,[H,u(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=i=>t.due_date=i)},null,512),[[r,t.due_date]])]),e("div",J,[K,u(e("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":o[3]||(o[3]=i=>t.tempCoupon.percent=i),placeholder:"請輸入折扣百分比"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",Q,[e("div",R,[u(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=i=>t.tempCoupon.is_enabled=i),id:"is_enabled"},null,512),[[w,t.tempCoupon.is_enabled]]),W])])]),e("div",X,[Y,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=i=>s.$emit("update-coupon",t.tempCoupon))},_(n.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const ee=g(V,[["render",Z]]),oe={components:{CouponModal:ee,DelModal:D,Pagination:N},props:{config:Object},data(){return{coupons:{},pagination:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1,currentPage:1}},methods:{...x($,["pushMessage"]),openCouponModal(s,o){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...o},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.openModal()},getCoupons(s=1){this.currentPage=s,this.isLoading=!0;const o=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/coupons?page=${s}`;this.$http.get(o,this.tempProduct).then(n=>{this.coupons=n.data.coupons,this.pagination=n.data.pagination,this.isLoading=!1}).catch(n=>{this.isLoading=!1,this.pushMessage({style:"success",title:"取得優惠券",content:n.response.data.message})})},updateCoupon(s){this.isLoading=!0;let o="https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/coupon",n="post",c=s;this.isNew||(o=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/coupon/${this.tempCoupon.id}`,n="put",c=this.tempCoupon),this.$http[n](o,{data:c}).then(t=>{this.isLoading=!1,this.pushMessage({style:"success",title:"新增優惠券",content:t.data.message}),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"新增優惠券",content:t.response.data.message})})},delCoupon(){const s=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除優惠券",content:o.data.message}),this.$refs.delModal.hideModal(),this.getCoupons()}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除優惠券",content:o.response.data.message})})}},created(){this.getCoupons()}},te={class:"text-end mt-4"},se={class:"table mt-4"},ne=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),ie={key:0,class:"text-success"},le={key:1,class:"text-muted"},ae={class:"btn-group"},de=["onClick"],pe=["onClick"];function ue(s,o,n,c,t,p){const i=h("VueLoading"),C=h("CouponModal"),f=h("DelModal"),v=h("Pagination");return l(),a(b,null,[e("div",null,[m(i,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",te,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=d=>p.openCouponModal(!0))}," 新增優惠券 ")]),e("table",se,[ne,e("tbody",null,[(l(!0),a(b,null,k(t.coupons,(d,M)=>(l(),a("tr",{key:M},[e("td",null,_(d.title),1),e("td",null,_(d.percent)+"%",1),e("td",null,_(s.$filters.date(d.due_date)),1),e("td",null,[d.is_enabled===1?(l(),a("span",ie,"啟用")):(l(),a("span",le,"未啟用"))]),e("td",null,[e("div",ae,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:y=>p.openCouponModal(!1,d)},"編輯",8,de),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:y=>p.openDelCouponModal(d)},"刪除",8,pe)])])]))),128))])]),m(C,{coupon:t.tempCoupon,"is-new":t.isNew,ref:"couponModal",onUpdateCoupon:p.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),m(f,{item:t.tempCoupon,ref:"delModal",onDelItem:p.delCoupon},null,8,["item","onDelItem"])]),m(v,{pages:t.pagination,onEmitPages:s.getOrders},null,8,["pages","onEmitPages"])],64)}const me=g(oe,[["render",ue]]);export{me as default};
