import{_ as x,h as y,i as S,r,A as C,o as u,c as _,a as e,l as V,w as f,v,d as h,n as N,y as B,B as E,b as g,p as I,g as T,D as L}from"./file_index.4d587f99.js";const s=a=>(I("data-v-da775fef"),a=a(),T(),a),M={class:"container is-fluid container-general"},A={class:"container container-login is-max-desktop"},D=s(()=>e("div",{class:"container container-login-dos"},[e("br"),e("p",{class:"title tag is-large is-warning is-flex"},[e("i",{class:"fa-regular fa-hand-spock"}),g("\xA0\xA0Welcome to Taski !")]),e("br")],-1)),R={class:"container is-fluid"},U=["onSubmit"],z={class:"field"},P=s(()=>e("label",{class:"label"},"Email",-1)),W={class:"control"},$={key:0,class:"help is-danger"},j={class:"field"},q=s(()=>e("label",{class:"label"},"Password",-1)),F={class:"control"},G={key:0,class:"help is-danger"},H=s(()=>e("br",null,null,-1)),J={class:"field boton-registro"},K=s(()=>e("div",{class:"control"},[e("input",{class:"button is-responsive is-rounded is-focus is-dark",type:"submit",value:"Take me inside!"})],-1)),O={class:"texto-grupo"},Q=s(()=>e("p",{class:"texto-registro"},"\xBFNot registered yet?",-1)),X={__name:"Login",setup(a){const p=y(),m=S(),l=r(""),i=r(!1),n=r(""),o=r(!1),w=async()=>{if(b()===!0?i.value=!1:i.value=!0,n.value.length<6?o.value=!0:o.value=!1,console.log("funciona"),i.value===!1&&o.value===!1){console.log("funciona");let t=await L(l.value,n.value);t===!1?console.log("error"):(console.log("error"),p.login(t),console.log(p.id),m.push({name:"home"}))}},b=()=>{const t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return!!l.value.match(t)};return(t,c)=>{const k=C("router-link");return u(),_("div",M,[e("div",A,[D,e("div",R,[e("form",{class:"",onSubmit:V(w,["prevent"])},[e("div",z,[P,e("div",W,[f(e("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>l.value=d),class:"input is-success is-focused",type:"email",placeholder:"email"},null,512),[[v,l.value]])]),i.value?(u(),_("p",$," Check the email ")):h("",!0)]),e("div",j,[q,e("div",F,[f(e("input",{"onUpdate:modelValue":c[1]||(c[1]=d=>n.value=d),class:N(["is-success is-focused",{input:!0,"is-danger":o.value}]),type:"password",placeholder:"password"},null,2),[[v,n.value]]),o.value?(u(),_("p",G," Check the password ")):h("",!0)])]),H,e("div",J,[K,e("div",O,[Q,B(k,{class:"tag is-success is-light has-text-weight-bold",to:{name:"register"}},{default:E(()=>[g("Create an account")]),_:1})])])],40,U)])])])}}},Z=x(X,[["__scopeId","data-v-da775fef"]]);export{Z as default};
