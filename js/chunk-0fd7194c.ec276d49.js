(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd7194c"],{"23a0":function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_nav",(function(){return A})),t.d(n,"amplify_sign_out",(function(){return L}));var r=t("b70c"),a=t("2482"),o=t("7a37"),i=t("d632"),E=t("4725"),u=t("bf82"),c=t("4021"),_=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{u(r.next(e))}catch(n){o(n)}}function E(e){try{u(r["throw"](e))}catch(n){o(n)}}function u(e){e.done?t(e.value):a(e.value).then(i,E)}u((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function E(e){return function(n){return u([e,n])}}function u(o){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(E){o=[6,E],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},l=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}",A=function(){function e(e){Object(r["k"])(this,e)}return e.prototype.render=function(){return Object(r["i"])("nav",{class:"nav"},Object(r["i"])("slot",null))},e}();A.style=l;var L=function(){function e(e){Object(r["k"])(this,e),this.handleAuthStateChange=c["d"],this.buttonText=a["a"].get(i["a"].SIGN_OUT)}return e.prototype.signOut=function(e){return _(this,void 0,void 0,(function(){var n;return s(this,(function(t){switch(t.label){case 0:if(e&&e.preventDefault(),!u["a"]||"function"!==typeof u["a"].signOut)throw new Error(E["d"]);t.label=1;case 1:return t.trys.push([1,3,,4]),[4,u["a"].signOut()];case 2:return t.sent(),this.handleAuthStateChange(o["a"].SignedOut),[3,4];case 3:return n=t.sent(),Object(c["a"])(n),[3,4];case 4:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r["i"])("amplify-button",{slot:"sign-out",onClick:function(n){return e.signOut(n)},"data-test":"sign-out-button"},this.buttonText)},e}()},4021:function(e,n,t){"use strict";t.d(n,"a",(function(){return L})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return S})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return O})),t.d(n,"g",(function(){return T})),t.d(n,"h",(function(){return C}));var r=t("36de"),a=t("4327"),o=t("2482"),i=t("7a37"),E=t("d632"),u=t("4725"),c=t("00ef"),_=function(e,n,t,r){function a(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function i(e){try{u(r.next(e))}catch(n){o(n)}}function E(e){try{u(r["throw"](e))}catch(n){o(n)}}function u(e){e.done?t(e.value):a(e.value).then(i,E)}u((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function E(e){return function(n){return u([e,n])}}function u(o){if(t)throw new TypeError("Generator is already executing.");while(i)try{if(t=1,r&&(a=2&o[0]?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(a=i.trys,!(a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(E){o=[6,E],r=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},l=new r["a"]("helpers"),A=function(e){return!!e.shadowRoot&&!!e.attachShadow},L=function(e){a["a"].dispatch(u["i"],{event:u["h"],message:e.message})},f=function(e,n){a["a"].dispatch(u["i"],{event:u["j"],message:e,data:n})},d=function(e){if(!e.phoneNumberValue)throw new Error(u["e"]);var n=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+n},S=function(e){if(!(e in i["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(i["d"]))},T=function(e){var n=function(n){return _(void 0,void 0,void 0,(function(){var t,r,a;return s(this,(function(o){switch(o.label){case 0:switch(t=n.payload,r=t.event,r){case u["j"]:return[3,1]}return[3,8];case 1:if(!t.message)return[3,7];if(t.message!==i["a"].SignedIn)return[3,6];o.label=2;case 2:return o.trys.push([2,4,,5]),[4,c["a"].currentAuthenticatedUser()];case 3:return a=o.sent(),e(t.message,a),[3,5];case 4:return o.sent(),l.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(t.message,t.data),o.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return a["a"].listen(u["i"],n),function(){return a["a"].remove(u["i"],n)}},O=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},C={address:{label:o["a"].get(E["a"].ADDRESS_LABEL),placeholder:o["a"].get(E["a"].ADDRESS_PLACEHOLDER)},nickname:{label:o["a"].get(E["a"].NICKNAME_LABEL),placeholder:o["a"].get(E["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:o["a"].get(E["a"].BIRTHDATE_LABEL),placeholder:o["a"].get(E["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:o["a"].get(E["a"].PHONE_LABEL),placeholder:o["a"].get(E["a"].PHONE_PLACEHOLDER)},email:{lable:o["a"].get(E["a"].EMAIL_LABEL),placeholder:o["a"].get(E["a"].EMAIL_PLACEHOLDER)},picture:{label:o["a"].get(E["a"].PICTURE_LABEL),placeholder:o["a"].get(E["a"].PICTURE_PLACEHOLDER)},family_name:{label:o["a"].get(E["a"].FAMILY_NAME_LABEL),placeholder:o["a"].get(E["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:o["a"].get(E["a"].PREFERRED_USERNAME_LABEL),placeholder:o["a"].get(E["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:o["a"].get(E["a"].GENDER_LABEL),placeholder:o["a"].get(E["a"].GENDER_PLACEHOLDER)},profile:{label:o["a"].get(E["a"].PROFILE_LABEL),placeholder:o["a"].get(E["a"].PROFILE_PLACEHOLDER)},given_name:{label:o["a"].get(E["a"].GIVEN_NAME_LABEL),placeholder:o["a"].get(E["a"].GIVEN_NAME_LABEL)},zoneinfo:{label:o["a"].get(E["a"].ZONEINFO_LABEL),placeholder:o["a"].get(E["a"].ZONEINFO_PLACEHOLDER)},locale:{label:o["a"].get(E["a"].LOCALE_LABEL),placeholder:o["a"].get(E["a"].LOCALE_PLACEHOLDER)},updated_at:{label:o["a"].get(E["a"].UPDATED_AT_LABEL),placeholder:o["a"].get(E["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:o["a"].get(E["a"].MIDDLE_NAME_LABEL),placeholder:o["a"].get(E["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:o["a"].get(E["a"].WEBSITE_LABEL),placeholder:o["a"].get(E["a"].WEBSITE_PLACEHOLDER)},name:{label:o["a"].get(E["a"].NAME_LABEL),placeholder:o["a"].get(E["a"].NAME_PLACEHOLDER)}}},4725:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return L})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return s})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return N})),t.d(n,"i",(function(){return C})),t.d(n,"j",(function(){return R})),t.d(n,"k",(function(){return l})),t.d(n,"l",(function(){return d})),t.d(n,"m",(function(){return S})),t.d(n,"n",(function(){return u})),t.d(n,"o",(function(){return i})),t.d(n,"p",(function(){return T})),t.d(n,"q",(function(){return _})),t.d(n,"r",(function(){return o})),t.d(n,"s",(function(){return E})),t.d(n,"t",(function(){return r}));var r="username",a="email",o="code",i="phone",E="password",u="country-dial-code-select",c="+1",_="amplify-auth-source",s="amplify-redirected-from-hosted-ui",l="amplify-authenticator-authState",A="Phone number can not be empty",L="No Auth module found, please ensure @aws-amplify/auth is imported",f="SETUP_TOTP",d="User has not set up software token mfa",S="User has not verified software token mfa",T="SUCCESS",O="auth",C="UI Auth",N="ToastAuthError",R="AuthStateChange"},"7a37":function(e,n,t){"use strict";var r,a,o,i,E;t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return E})),t.d(n,"e",(function(){return i})),function(e){e["SignUp"]="signup",e["SignOut"]="signout",e["SignIn"]="signin",e["Loading"]="loading",e["SignedOut"]="signedout",e["SignedIn"]="signedin",e["SigningUp"]="signingup",e["ConfirmSignUp"]="confirmSignUp",e["confirmingSignUpCustomFlow"]="confirmsignupcustomflow",e["ConfirmSignIn"]="confirmSignIn",e["confirmingSignInCustomFlow"]="confirmingsignincustomflow",e["VerifyingAttributes"]="verifyingattributes",e["ForgotPassword"]="forgotpassword",e["ResetPassword"]="resettingpassword",e["SettingMFA"]="settingMFA",e["TOTPSetup"]="TOTPSetup",e["CustomConfirmSignIn"]="customConfirmSignIn",e["VerifyContact"]="verifyContact"}(r||(r={})),function(e){e["TOTP"]="TOTP",e["SMS"]="SMS",e["NOMFA"]="NOMFA"}(a||(a={})),function(e){e["SoftwareTokenMFA"]="SOFTWARE_TOKEN_MFA",e["SMSMFA"]="SMS_MFA",e["NewPasswordRequired"]="NEW_PASSWORD_REQUIRED",e["MFASetup"]="MFA_SETUP",e["CustomChallenge"]="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e["Password"]="password"}(i||(i={})),function(e){e["username"]="username",e["email"]="email",e["phone_number"]="phone_number"}(E||(E={}))},d632:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two mfa types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name"}(r||(r={}))}}]);
//# sourceMappingURL=chunk-0fd7194c.ec276d49.js.map