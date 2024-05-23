import{_ as ue}from"./preload-helper.BQ24v_F8.js";import{y as Z,z as fe}from"./2.59j6zePk.js";var z={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const q=e=>typeof e=="object"&&e!==null,A=new WeakMap,x=new WeakSet,pe=(e=Object.is,t=(n,g)=>new Proxy(n,g),s=n=>q(n)&&!x.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),r=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},l=new WeakMap,c=(n,g,I=r)=>{const y=l.get(n);if((y==null?void 0:y[0])===g)return y[1];const v=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return Z(v,!0),l.set(n,[g,v]),Reflect.ownKeys(n).forEach(S=>{if(Object.getOwnPropertyDescriptor(v,S))return;const W=Reflect.get(n,S),M={value:W,enumerable:!0,configurable:!0};if(x.has(W))Z(W,!1);else if(W instanceof Promise)delete M.value,M.get=()=>I(W);else if(A.has(W)){const[b,H]=A.get(W);M.value=c(b,H(),I)}Object.defineProperty(v,S,M)}),Object.preventExtensions(v)},m=new WeakMap,p=[1,1],O=n=>{if(!q(n))throw new Error("object required");const g=m.get(n);if(g)return g;let I=p[0];const y=new Set,v=(a,i=++p[0])=>{I!==i&&(I=i,y.forEach(o=>o(a,i)))};let S=p[1];const W=(a=++p[1])=>(S!==a&&!y.size&&(S=a,b.forEach(([i])=>{const o=i[1](a);o>I&&(I=o)})),I),M=a=>(i,o)=>{const h=[...i];h[1]=[a,...h[1]],v(h,o)},b=new Map,H=(a,i)=>{if((z?"production":void 0)!=="production"&&b.has(a))throw new Error("prop listener already exists");if(y.size){const o=i[3](M(a));b.set(a,[i,o])}else b.set(a,[i])},Y=a=>{var i;const o=b.get(a);o&&(b.delete(a),(i=o[1])==null||i.call(o))},ce=a=>(y.add(a),y.size===1&&b.forEach(([o,h],_)=>{if((z?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const R=o[3](M(_));b.set(_,[o,R])}),()=>{y.delete(a),y.size===0&&b.forEach(([o,h],_)=>{h&&(h(),b.set(_,[o]))})}),J=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),$=t(J,{deleteProperty(a,i){const o=Reflect.get(a,i);Y(i);const h=Reflect.deleteProperty(a,i);return h&&v(["delete",[i],o]),h},set(a,i,o,h){const _=Reflect.has(a,i),R=Reflect.get(a,i,h);if(_&&(e(R,o)||m.has(o)&&e(R,m.get(o))))return!0;Y(i),q(o)&&(o=fe(o)||o);let V=o;if(o instanceof Promise)o.then(C=>{o.status="fulfilled",o.value=C,v(["resolve",[i],C])}).catch(C=>{o.status="rejected",o.reason=C,v(["reject",[i],C])});else{!A.has(o)&&s(o)&&(V=O(o));const C=!x.has(V)&&A.get(V);C&&H(i,C)}return Reflect.set(a,i,V,h),v(["set",[i],o,R]),!0}});m.set(n,$);const de=[J,W,c,ce];return A.set($,de),Reflect.ownKeys(n).forEach(a=>{const i=Object.getOwnPropertyDescriptor(n,a);"value"in i&&($[a]=n[a],delete i.value,delete i.writable),Object.defineProperty(J,a,i)}),$})=>[O,A,x,e,t,s,r,l,c,m,p],[me]=pe();function j(e={}){return me(e)}function P(e,t,s){const r=A.get(e);(z?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let l;const c=[],m=r[3];let p=!1;const n=m(g=>{if(c.push(g),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,n()}}function he(e,t){const s=A.get(e);(z?"production":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[r,l,c]=s;return c(r,l(),t)}const d=j({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),le={state:d,subscribe(e){return P(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=le.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ge=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=j({enabled:ge,userSessionId:"",events:[],connectedWalletId:void 0}),be={state:u,subscribe(e){return P(u.events,()=>e(he(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},L=j({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:L,subscribe(e){return P(L,()=>e(L))},setChains(e){L.chains=e},setWalletConnectUri(e){L.walletConnectUri=e},setIsCustomDesktop(e){L.isCustomDesktop=e},setIsCustomMobile(e){L.isCustomMobile=e},setIsDataLoaded(e){L.isDataLoaded=e},setIsUiLoaded(e){L.isUiLoaded=e},setIsAuth(e){L.isAuth=e}},B=j({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:B,subscribe(e){return P(B,()=>e(B))},setConfig(e){var t,s;be.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),f.setModalVersionInStorage(),Object.assign(B,e)}};var ye=Object.defineProperty,ee=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,te=(e,t,s)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ie=(e,t)=>{for(var s in t||(t={}))ve.call(t,s)&&te(e,s,t[s]);if(ee)for(var s of ee(t))we.call(t,s)&&te(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.6.2";async function K(e,t){const s=Ie({sdkType:Q,sdkVersion:X},t),r=new URL(e,G);return r.searchParams.append("projectId",N.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const U={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var Le=Object.defineProperty,se=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Oe=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))We.call(t,s)&&ne(e,s,t[s]);return e};const oe=f.isMobile(),E=j({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:E,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return E.recomendedWallets;if(f.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await U.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const p=e.indexOf(c.id),O=e.indexOf(m.id);return p-O}),E.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=f.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=oe?await U.getMobileListings(m):await U.getDesktopListings(m);E.recomendedWallets=Object.values(p)}return E.recomendedWallets},async getWallets(e){const t=Oe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=E;if(r==="ALL")return E.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:O}=oe?await U.getMobileListings(t):await U.getDesktopListings(t),n=Object.values(p),g=m?"search":"wallets";return E[g]={listings:[...E[g].listings,...n],total:O,page:c??1},{listings:n,total:O}},getWalletImageUrl(e){return U.getWalletImageUrl(e)},getAssetImageUrl(e){return U.getAssetImageUrl(e)},resetSearch(){E.search={listings:[],total:0,page:1}}},k=j({open:!1}),F={state:k,subscribe(e){return P(k,()=>e(k))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(f.removeWalletConnectDeepLink(),w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),le.reset("ConnectWallet"),s&&r)k.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),k.open=!0,t())},200)}})},close(){k.open=!1}};var Ce=Object.defineProperty,re=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ie=(e,t,s)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Me=(e,t)=>{for(var s in t||(t={}))Ae.call(t,s)&&ie(e,s,t[s]);if(re)for(var s of re(t))je.call(t,s)&&ie(e,s,t[s]);return e};function Ue(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=j({themeMode:Ue()?"dark":"light"}),ae={state:T,subscribe(e){return P(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=Me({},s))}},D=j({open:!1,message:"",variant:"success"}),Ne={state:D,subscribe(e){return P(D,()=>e(D))},openToast(e,t){D.open=!0,D.message=e,D.variant=t},closeToast(){D.open=!1}};class De{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ae.setThemeConfig,ae.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ue(()=>import("./index.CTDSHWX1.js"),__vite__mapDeps([0,1]),import.meta.url);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const Re=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:De},Symbol.toStringTag,{value:"Module"}));export{be as R,le as T,f as a,Re as i,ae as n,Ne as o,w as p,F as s,ke as t,N as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.CTDSHWX1.js","./if-defined.7dNzjgJW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
