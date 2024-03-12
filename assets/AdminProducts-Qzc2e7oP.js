import{m as P,_ as v,o as d,c as a,b as t,w as c,v as p,f as k,h as b,F as y,j as M,k as C,r as _,a as g,t as f}from"./index-pTRDF-nc.js";import{u as U}from"./toastMessage-8hjhJlEV.js";import{m as V,D as L}from"./DelModal-zFdIaFPU.js";import{P as N}from"./PaginationComponent-_tfANqCF.js";const D={props:{product:Object,isNew:Boolean},data(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[V],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{...P(U,["pushMessage"]),uploadFile(){const l=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",l);const i="https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/upload";this.status.fileUploading=!0,this.$http.post(i,e,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{this.status.fileUploading=!1,this.tempProduct.imageUrl=r.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳結果",content:r.data.message})}).catch(r=>{this.status.fileUploading=!1,this.pushMessage({style:"danger",title:"圖片上傳結果",content:r.response.data.message})})}}},F={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},$={class:"modal-dialog modal-xl",role:"document"},I={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},T={class:"modal-title",id:"exampleModalLabel"},E={key:0},j={key:1},A=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},z={class:"row"},O={class:"col-sm-4"},q={class:"mb-3"},G=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),H={class:"mb-3"},J={for:"customFile",class:"form-label"},K={key:0,class:"fas fa-spinner fa-spin"},Q=["src"],R={key:0,class:"mt-5"},W=["onUpdate:modelValue"],X=["src"],Y=["onClick"],Z={key:0},tt={class:"col-sm-8"},et={class:"mb-3"},st=t("label",{for:"title",class:"form-label"},"標題",-1),ot={class:"row gx-2"},lt={class:"mb-3 col-md-6"},it=t("label",{for:"category",class:"form-label"},"分類",-1),nt={class:"mb-3 col-md-6"},dt=t("label",{for:"price",class:"form-label"},"單位",-1),at={class:"row gx-2"},rt={class:"mb-3 col-md-6"},ct=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ut={class:"mb-3 col-md-6"},pt=t("label",{for:"price",class:"form-label"},"售價",-1),mt=t("hr",null,null,-1),ht={class:"mb-3"},_t=t("label",{for:"description",class:"form-label"},"產品描述",-1),gt={class:"mb-3"},ft=t("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"mb-3"},Pt={class:"form-check"},vt=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),yt={class:"modal-footer"},Mt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ut(l,e,i,r,s,n){return d(),a("div",F,[t("div",$,[t("div",I,[t("div",B,[t("h5",T,[i.isNew?(d(),a("span",E,"新增產品")):(d(),a("span",j,"編輯產品"))]),A]),t("div",S,[t("div",z,[t("div",O,[t("div",q,[G,c(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=o=>s.tempProduct.imageUrl=o),placeholder:"請輸入圖片連結"},null,512),[[p,s.tempProduct.imageUrl]])]),t("div",H,[t("label",J,[k("或 上傳圖片 "),s.status.fileUploading?(d(),a("i",K)):b("",!0)]),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>n.uploadFile&&n.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl},null,8,Q),s.tempProduct.imagesUrl?(d(),a("div",R,[(d(!0),a(y,null,M(s.tempProduct.imagesUrl,(o,m)=>(d(),a("div",{class:"mb-3",key:m},[c(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":h=>s.tempProduct.imagesUrl[m]=h,placeholder:"請輸入連結"},null,8,W),[[p,s.tempProduct.imagesUrl[m]]]),t("div",null,[t("img",{class:"img-fluid",src:o},null,8,X)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:h=>s.tempProduct.imagesUrl.splice(m,1)}," 移除 ",8,Y)]))),128)),s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]||!s.tempProduct.imagesUrl.length?(d(),a("div",Z,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):b("",!0)])):b("",!0)]),t("div",tt,[t("div",et,[st,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=o=>s.tempProduct.title=o),placeholder:"請輸入標題"},null,512),[[p,s.tempProduct.title]])]),t("div",ot,[t("div",lt,[it,c(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=o=>s.tempProduct.category=o),placeholder:"請輸入分類"},null,512),[[p,s.tempProduct.category]])]),t("div",nt,[dt,c(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=o=>s.tempProduct.unit=o),placeholder:"請輸入單位"},null,512),[[p,s.tempProduct.unit]])])]),t("div",at,[t("div",rt,[ct,c(t("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.origin_price=o),placeholder:"請輸入原價"},null,512),[[p,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ut,[pt,c(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.price=o),min:"0",placeholder:"請輸入售價"},null,512),[[p,s.tempProduct.price,void 0,{number:!0}]])])]),mt,t("div",ht,[_t,c(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.description=o),placeholder:"請輸入產品描述"},null,512),[[p,s.tempProduct.description]])]),t("div",gt,[ft,c(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.content=o),placeholder:"請輸入產品說明內容"},null,512),[[p,s.tempProduct.content]])]),t("div",bt,[t("div",Pt,[c(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.is_enabled=o),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[C,s.tempProduct.is_enabled]]),vt])])])])]),t("div",yt,[Mt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=o=>l.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}const xt=v(D,[["render",Ut]]),wt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{ProductModal:xt,DelModal:L,Pagination:N},methods:{...P(U,["pushMessage"]),getProducts(l=1){this.currentPage=l;const e=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/products?page=${l}`;this.isLoading=!0,this.$http.get(e).then(i=>{this.products=i.data.products,this.pagination=i.data.pagination,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:i.data.message})}).catch(i=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:i.response.data.message})})},openModal(l,e){l?(this.tempProduct={},this.isNew=!0):(this.tempProduct={...e},this.isNew=!1),this.$refs.productModal.openModal()},updateProduct(l){this.tempProduct=l;let e="https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/product";this.isLoading=!0;let i="post",r="新增產品";this.isNew||(e=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/product/${this.tempProduct.id}`,i="put",r="更新產品");const s=this.$refs.productModal;this.$http[i](e,{data:this.tempProduct}).then(n=>{this.isLoading=!1,this.pushMessage({style:"success",title:r,content:n.data.message}),s.hideModal(),this.getProducts(this.currentPage)}).catch(n=>{this.isLoading=!1,this.pushMessage({style:"danger",title:r,content:n.response.data.message})})},openDelProductModal(l){this.tempProduct={...l},this.$refs.delModal.openModal()},delProduct(){const l=`https://vue3-course-api.hexschool.io/v2//api/winnie05/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(l).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除產品",content:e.data.message}),this.$refs.delModal.hideModal(),this.getProducts(this.currentPage)}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除產品",content:e.response.data.message})})}},created(){this.getProducts()}},kt={class:"text-end mt-4"},Ct={class:"table mt-4"},Vt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"200"},"編輯")])],-1),Lt={class:"text-right"},Nt={class:"text-right"},Dt={key:0,class:"text-success"},Ft={key:1},$t={class:"btn-group"},It=["onClick"],Bt=["onClick"];function Tt(l,e,i,r,s,n){const o=_("VueLoading"),m=_("Pagination"),h=_("ProductModal"),x=_("DelModal");return d(),a("div",null,[g(o,{active:s.isLoading,"z-index":1060},null,8,["active"]),t("div",kt,[t("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=u=>n.openModal(!0))}," 建立新的產品 ")]),t("table",Ct,[Vt,t("tbody",null,[(d(!0),a(y,null,M(s.products,u=>(d(),a("tr",{key:u.id},[t("td",null,f(u.category),1),t("td",null,f(u.title),1),t("td",Lt,f(l.$filters.currency(u.origin_price)),1),t("td",Nt,f(l.$filters.currency(u.price)),1),t("td",null,[u.is_enabled?(d(),a("span",Dt,"啟用")):(d(),a("span",Ft,"未啟用"))]),t("td",null,[t("div",$t,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:w=>n.openModal(!1,u)}," 編輯 ",8,It),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:w=>n.openDelProductModal(u)}," 刪除 ",8,Bt)])])]))),128))])]),g(m,{pages:s.pagination,onEmitPages:n.getProducts},null,8,["pages","onEmitPages"]),g(h,{onUpdateProduct:n.updateProduct,product:s.tempProduct,isNew:s.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),g(x,{item:s.tempProduct,ref:"delModal",onDelItem:n.delProduct},null,8,["item","onDelItem"])])}const zt=v(wt,[["render",Tt]]);export{zt as default};
