import{_ as k,h as x,i as y,r,A as S,o as u,c as _,a as e,m as C,w as h,v,d as f,n as V,l as N,B,b as E,p as I,g as T,D as A}from"./file_index.5758dd0d.js";const s=a=>(I("data-v-1fe25bab"),a=a(),T(),a),L={class:"container is-fluid container-general"},M={class:"container container-login is-max-desktop"},D=s(()=>e("div",{class:"container container-login-dos is-fluid"},[e("br"),e("h1",{class:"title"},"Taski"),e("h2",{class:"subtitle"},"A new order for your life!"),e("br")],-1)),R={class:"container is-fluid"},U=["onSubmit"],z={class:"field"},P=s(()=>e("label",{class:"label"},"Email",-1)),$={class:"control"},j={key:0,class:"help is-danger"},q={class:"field"},F=s(()=>e("label",{class:"label"},"Password",-1)),G={class:"control"},H={key:0,class:"help is-danger"},J=s(()=>e("br",null,null,-1)),K={class:"field boton-registro"},O=s(()=>e("div",{class:"control"},[e("input",{class:"button is-responsive is-rounded is-focus is-dark",type:"submit",value:"Take me inside!"})],-1)),Q={class:"texto-grupo"},W=s(()=>e("p",{class:"texto-registro"},"\xBFNot registered yet?",-1)),X={__name:"Login",setup(a){const p=x(),m=y(),l=r(""),i=r(!1),n=r(""),o=r(!1),g=async()=>{if(b()===!0?i.value=!1:i.value=!0,n.value.length<6?o.value=!0:o.value=!1,console.log("funciona"),i.value===!1&&o.value===!1){console.log("funciona");let t=await A(l.value,n.value);t===!1?console.log("error"):(console.log("error"),p.login(t),console.log(p.id),m.push({name:"home"}))}},b=()=>{const t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return!!l.value.match(t)};return(t,c)=>{const w=S("router-link");return u(),_("div",L,[e("div",M,[D,e("div",R,[e("form",{class:"",onSubmit:C(g,["prevent"])},[e("div",z,[P,e("div",$,[h(e("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>l.value=d),class:"input is-success is-focused",type:"email",placeholder:"email"},null,512),[[v,l.value]])]),i.value?(u(),_("p",j," Check the email ")):f("",!0)]),e("div",q,[F,e("div",G,[h(e("input",{"onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),class:V(["is-success is-focused",{input:!0,"is-danger":o.value}]),type:"password",placeholder:"password"},null,2),[[v,n.value]]),o.value?(u(),_("p",H," Check the password ")):f("",!0)])]),J,e("div",K,[O,e("div",Q,[W,N(w,{class:"tag is-success is-light has-text-weight-bold",to:{name:"register"}},{default:B(()=>[E("Create an account")]),_:1})])])],40,U)])])])}}},Z=k(X,[["__scopeId","data-v-1fe25bab"]]);export{Z as default};
