import{g as s,s as r,h}from"./index-UqVmnRqZ.js";class g{postLogin(a){s.post("https://rovle.eslamghazy.net/api/v1/auth/login",a).then(t=>{var e,o;return r("token",(e=t.data)==null?void 0:e.token,1),localStorage.setItem("user",JSON.stringify(t.data.user)),h.success(null,(o=t==null?void 0:t.data)==null?void 0:o.message).then(n=>window.location.href="/products/list"),t.data})}forgetPassword(a){return s.post("https://rovle.eslamghazy.net/api/v1/auth/forgot-password",a).then(t=>t.data)}verifyOtp(a){return s.post("https://rovle.eslamghazy.net/api/v1/auth/verify-otp",a).then(t=>t.data)}resetPassword(a){return s.post("https://rovle.eslamghazy.net/api/v1/auth/reset-password",a).then(t=>t.data)}}const p="/assets/login-vector-Sw_A8J7g.png";export{g as A,p as v};
