import{_ as h,m as _,r as d,o as g,c as f,a as l,b as s,w as c,v as u,d as b}from"./index-pTRDF-nc.js";import{u as v}from"./toastMessage-8hjhJlEV.js";import{T as w}from"./ToastMessages-XjK7S0ei.js";const x={components:{ToastMessages:w},data(){return{isLoading:!1,user:{}}},methods:{..._(v,["pushMessage"]),signIn(){const n="https://vue3-course-api.hexschool.io/v2//admin/signin";this.isLoading=!0,this.$http.post(n,this.user).then(e=>{const{token:a,expired:i}=e.data;document.cookie=`hexToken=${a};expires=${new Date(i)};`,this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"登入失敗",content:e.response.data.message})})}}},y={class:"container mt-5"},L={class:"col-md-6"},M=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),T={class:"mb-2"},k=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),V={class:"mb-2"},E=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),P=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function B(n,e,a,i,o,r){const p=d("VueLoading"),m=d("ToastMessages");return g(),f("div",y,[l(p,{active:o.isLoading,"z-index":1060},null,8,["active"]),l(m),s("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=b((...t)=>r.signIn&&r.signIn(...t),["prevent"]))},[s("div",L,[M,s("div",T,[k,c(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),required:"",autofocus:""},null,512),[[u,o.user.username]])]),s("div",V,[E,c(s("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),placeholder:"Password",required:""},null,512),[[u,o.user.password]])]),P])],32)])}const D=h(x,[["render",B]]);export{D as default};
