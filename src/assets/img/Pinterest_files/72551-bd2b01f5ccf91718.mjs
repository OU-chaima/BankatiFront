"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[72551],{924081:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(667294),n=i(883119),a=i(930837),o=i(140017),s=i(339001),l=i(785893);let c=({cancelBlockCallback:e,onBlock:t,onBlockCallback:i,openModalCallback:c,size:d,user:_})=>{let u=(0,o.ZP)(),[p,E]=(0,r.useState)(!1),h=()=>{E(!1)},{username:m,full_name:P,blocked_by_me:f}=_??{};return(0,l.jsx)(n.kC,{alignItems:"stretch",justifyContent:"start",children:!f&&(0,l.jsxs)(n.xu,{"data-test-id":"block-button-container",children:[(0,l.jsx)(n.iP,{onTap:()=>{E(!0),c?.()},children:(0,l.jsx)(n.X6,{size:d||"400",children:u._('Block', 'BlockButton.Heading.Block', 'Blocking an user means you won\'t be able to follow each other or interact with each other\'s Pins')})}),(0,l.jsxs)(a.ZP,{accessibilityModalLabel:"",isOpen:p,mobileHideCloseIcon:!0,onDismiss:h,type:"block_button",children:[(0,l.jsx)(n.xu,{paddingX:3,paddingY:5,children:(0,l.jsx)(n.X6,{accessibilityLevel:1,size:"500",children:(0,s.nk)(u._('Block {{ full_name }}?', 'BlockButton.FullName.Block', 'full_name: user full name to block'),{full_name:P})})}),(0,l.jsx)(n.xu,{marginBottom:3,marginEnd:2,marginStart:2,children:(0,l.jsx)(n.xv,{children:(0,s.nk)(u._(`If you block {{full_name}} ({{username}}),
                          you won’t be able to follow each other
                          or interact with each other’s Pins.`, 'BlockButton.Description.Block', 'full_name:user full name to block, username: username to block, Warning about blocking a user'),{full_name:P,username:m})})}),(0,l.jsx)(n.xu,{marginBottom:2,marginEnd:2,marginStart:2,children:(0,l.jsx)(n.zx,{color:"red",fullWidth:!0,onClick:()=>{if(_){let{id:e,first_name:i=""}=_;t?.(e,i,u)}h(),i?.()},text:u._('Block', 'BlockButton.Action.Block', 'Action to block user')})}),(0,l.jsx)(n.xu,{marginEnd:2,marginStart:2,children:(0,l.jsx)(n.zx,{color:"gray",fullWidth:!0,onClick:()=>{h(),e?.()},text:u._('Cancel', 'BlockButton.Action.Cancel', 'Action to cancel blocking a user')})})]})]})})}},109615:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(667294),n=i(883119),a=i(587703),o=i(140017),s=i(673020),l=i(785893);let c={sm:12,md:16,lg:20,xl:24};function d({isVerifiedMerchant:e,size:t,showText:i,showVerifiedIdentity:d,inspirationalBadges:_,inspirationalBadgesColor:u}){let p=(0,o.ZP)(),[E,h]=(0,r.useState)(!1),{dangerousInlineStyle:m,iconColor:P}=(0,s.W)(!!e),f=(0,a.Z)();return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(n.iP,{onTap:()=>{f({component:13534,element:11717,event_type:102}),h(!0)},rounding:"circle",children:(0,l.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:m,"data-test-id":"verified-badge-icon",display:"flex",children:[(0,l.jsx)(n.JO,{accessibilityLabel:e?p._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant or user is verified'):p._('Badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant or user is verified'),color:P,icon:"workflow-status-ok",inline:!0,size:c[t]}),i&&!d&&(0,l.jsx)(n.xu,{marginStart:2,children:(0,l.jsx)(n.xv,{color:"shopping",inline:!0,weight:"bold",children:(0,l.jsx)(n.xu,{dangerouslySetInlineStyle:m,children:p._('Verified merchant', 'creator.header.verifiedMerchant', 'this merchant is a verified merchant')})})})]})}),(e||i&&!d)&&(0,l.jsx)(s.Z,{inspirationalBadges:_,inspirationalBadgesColor:u,setShowModal:h,showModal:E})]})}},673020:(e,t,i)=>{i.d(t,{W:()=>_,Z:()=>u});var r=i(667294),n=i(883119),a=i(557226),o=i(587703),s=i(930837),l=i(140017),c=i(702497),d=i(785893);let _=e=>{let t=e?"shopping":"error";return{iconColor:t,dangerousInlineStyle:{__style:{color:t}}}};function u({inspirationalBadges:e=[],inspirationalBadgesColor:t,showModal:i,setShowModal:u}){let p=(0,l.ZP)(),[E,h]=(0,r.useState)(!0),{dangerousInlineStyle:m,iconColor:P}=_(!0),f=(0,o.Z)();return(0,r.useEffect)(()=>{i&&E&&(h(!1),f({event_type:13,component:13534}))},[i]),(0,d.jsx)(s.ZP,{accessibilityModalLabel:p._('Verified merchant information', 'creator.verifiedMerchant.accessibilityModalLabel', 'Accessibility label for modal informing about a verified merchant'),isOpen:i,mobileAccessibilityCloseIconLabel:p._('Close', 'Close modal window', 'Close modal'),onDismiss:()=>{f({component:13534,element:11716,event_type:102}),u(!1)},type:"verified_merchant_modal",children:(0,d.jsx)(n.xu,{padding:3,children:(0,d.jsxs)(n.xu,{"data-test-id":"verified-badge-modal",direction:"column",display:"flex",padding:2,children:[(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:m,display:"flex",justifyContent:"center",children:(0,d.jsx)(n.JO,{accessibilityLabel:p._('Merchant verification badge icon', 'creator.verifiedMerchant.modalIcon', 'Badge indicating that a merchant or user is verified'),color:P,icon:"workflow-status-ok",size:24})}),(0,d.jsx)(n.xu,{marginTop:4,children:(0,d.jsx)(n.xv,{align:"center",color:"shopping",weight:"bold",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:m,children:p._('Verified merchant', 'creator.verifiedMerchant.modalHeader', 'this merchant is a verified merchant')})})}),(0,d.jsx)(n.xu,{marginBottom:4,marginTop:4,children:(0,d.jsx)(n.xv,{align:"center",overflow:"normal",children:p._('This retailer meets Pinterest\'s Merchant Guidelines', 'creator.verifiedMerchant.modalText.', 'this merchant is a verified merchant')})}),e.map(e=>(0,d.jsxs)(n.xu,{direction:"column",display:"flex",marginTop:4,children:[(0,d.jsx)(n.kC,{alignItems:"stretch",justifyContent:"center",children:(0,d.jsx)(n.xv,{overflow:"noWrap",size:"100",weight:"bold",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:(0,a.ym)(t)},"data-test-id":"verified-badge-modal-inspirational-badge",display:"inlineBlock",paddingX:2,paddingY:2,rounding:1,children:e.label})})}),(0,d.jsx)(n.xu,{marginTop:2,children:(0,d.jsx)(n.xv,{align:"center",overflow:"normal",children:e.description})})]},e.id)),(0,d.jsx)(n.xu,{"data-test-id":"verified-badge-modal-learn-more",display:"flex",justifyContent:"center",marginTop:8,width:"100%",children:(0,d.jsx)(n.ZP,{accessibilityLabel:p._('Learn more', 'creator.verifiedMerchant.buttonText', 'learn more about the verified merchant program by visiting help.pinterest.com'),href:c.vBy,size:"lg",target:"blank",text:p._('Learn more', 'creator.verifiedMerchant.buttonText', 'learn more about the verified merchant program by visiting help.pinterest.com')})})]})})})}},934378:(e,t,i)=>{i.d(t,{$N:()=>E,Cu:()=>m,GY:()=>c,MZ:()=>o,NR:()=>_,Vn:()=>d,bC:()=>h,fm:()=>r,kM:()=>a,q6:()=>n,qp:()=>l,uV:()=>u,ug:()=>p,xL:()=>s});let r={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},n={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},a={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},o={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud"},s={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},l={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",PINTEREST_EVENT_HISTORY:"PINTEREST_EVENT_HISTORY",CONVERSIONS:"CONVERSIONS",PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:"PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP",PINTEREST_SETUP_API:"PINTEREST_SETUP_API",NOCODE_CONVERSIONS_API_SETUP_FLOW:"NOCODE_CONVERSIONS_API_SETUP_FLOW"},c={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},d={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},_={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},u="604800",p="86400",E={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},h="click",m="view"},32346:(e,t,i)=>{i.d(t,{Z:()=>r});function r(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},557226:(e,t,i)=>{i.d(t,{Bu:()=>E,Dm:()=>s,I:()=>P,NG:()=>u,QP:()=>d,S4:()=>c,Xe:()=>_,_f:()=>p,eT:()=>h,hm:()=>m,yQ:()=>l,ym:()=>f});var r=i(743079);let n=Object.freeze({AFRICAN_AMERICAN_OR_BLACK:"african_american_or_black",BLACK_AFRICAN_DIASPORA:"black_african_diaspora",HISPANIC_OR_LATINX:"hispanic_or_latinx",NATIVE_OR_INDIGENOUS:"native_or_indigenous",ABORIGINAL_OR_INDIGENOUS:"aboriginal_or_indigenous",NATIVE_AMERICAN_OR_ALASKA_NATIVE_OR_INDIGENOUS_PEOPLES:"native_american_or_alaska_native_or_indigenous_peoples",ASIAN_OR_PACIFIC_ISLANDERS:"asian_or_pacific_islanders",ASIAN:"asian",LGBTQ:"lgbtq",MIDDLE_EASTERN:"middle_eastern",TURKISH:"turkish",ROMA:"roma",MIDDLE_EASTERN_TURKISH_ROMA:"middle_eastern_turkish_roma",NORTH_AFRICAN:"north_african",MIDDLE_EASTERN_OR_NORTH_AFRICAN:"middle_eastern_or_north_african",NONE:"none"}),a=Object.freeze({PERSON_OF_COLOR:"person_of_color",LGBTQ:"lgbtq",DISABILITY:"disability",WOMAN:"woman",NONE:"none"}),o=Object.freeze({INVESTED_IN_GOOD:"invested_in_good",ECO_FRIENDLY:"eco_friendly",RESPONSIBLY_SOURCED:"responsibly_sourced",INCLUSIVE:"inclusive",PERSONAL_TOUCH:"personal_touch"}),s=[...Object.keys(n).map(e=>n[e]),...Object.keys(a).map(e=>a[e])],l=[...Object.keys(o).map(e=>o[e])],c=3,d=["#EFEFEF","#F8E3D1","#F6F1C1","#DDEEAF","#C9F2EE","#DBD5F4","#EFBCEE"],_={business_diversity_labels:[],created_at:"",disapproval_reasons:[],is_inspirational:!1,review_criteria:[],review_labels:[],updated_at:"",inspirational_badge_selection:{badgeColor:d[0],badgeOptOut:[]},is_eligible_for_storefront_badges:!1,badge_details:[],profile_badges:[]},u="https://help.pinterest.com/article/merchant-details",p="https://help.pinterest.com/business/article/add-merchant-details-to-your-profile";function E({verifiedMerchant:e}){let t=e?.isVerifiedMerchant,i=e?.inspirational_signal?.is_inspirational,r=e?.inspirational_signal?.is_eligible_for_storefront_badges;return!!(t&&i&&r)}function h(e){return e.badge_details?e.badge_details.map(e=>e.id):[]}function m(e){return e?.profile_badges||[]}function P(e,t,i){return t&&i?t.map(e=>i.find(t=>t.id===e.trim())).filter(Boolean):[]}function f(e){let t=e||d[0];return{backgroundColor:t,color:function(e){let t=(0,r.oo)(e);if(!t)return"white";let[i,n,a]=t,o=(0,r.DW)(i,n,a);return o<=r.I?"white":"black"}(t)}}},743079:(e,t,i)=>{i.d(t,{DW:()=>a,I:()=>n,oo:()=>r,zI:()=>o});let r=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},n=.18,a=(e,t,i)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(i/255)**2.2,o=e=>{let t=e.replace("#",""),i=parseInt(t.substr(0,2),16),r=parseInt(t.substr(2,2),16),n=parseInt(t.substr(4,2),16);return(299*i+587*r+114*n)/1e3<155}},287434:(e,t,i)=>{i.d(t,{Z:()=>r});let r=()=>1e6*Date.now()},105737:(e,t,i)=>{function r(e,t,i){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(!a(e[r],t[r],i+1))return!1;return!0}function n(e,t,i){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e)if(!(r in t)||!a(e[r],t[r],i+1))return!1;return!0}function a(e,t,i){if(i>=1e3)return!1;if(e===t)return!0;if(null==e||null==t||"object"!=typeof e&&"object"!=typeof t)return e!=e&&t!=t;let a=Object.prototype.toString.call(e),o=Object.prototype.toString.call(t);if(a!==o)return!1;switch(a){case"[object Array]":return r(e,t,i);case"[object Set]":return r(Array.from(e).sort(),Array.from(t).sort(),i);case"[object Object]":case"[object Arguments]":return n(e,t,i);case"[object Map]":return n(Object.fromEntries(e),Object.fromEntries(t),i);case"[object RegExp]":return e+""==t+"";case"[object Error]":return e.name===t.name&&e.message===t.message;default:return!1}}function o(e,t){return a(e,t,0)}i.d(t,{ZP:()=>o,qP:()=>r})},25919:(e,t,i)=>{let r;i.d(t,{Am:()=>P,Ig:()=>h,N:()=>T,Sd:()=>f,YX:()=>O,be:()=>m,fO:()=>u,kd:()=>A,pz:()=>p});var n=i(667294),a=i(216167),o=i(587703),s=i(703404),l=i(957753),c=i(107366),d=i(953565);let _=(e,t,i={})=>(0,d.nP)(`${e}.${t}`,{sampleRate:1,tags:i}),u=(e,t)=>i=>{let r=t?{extra_context:e,targeting:t}:{extra_context:e};return a.Z.create("UserExperiencePlatformResource",r).callGet().then(e=>e.resource_response?i((0,l.OD)(e.resource_response.data)):void 0)},p=(e,t,i,n)=>(o,c)=>{if(t)return Promise.resolve();if(n&&(r=n),1===e.length){let t=e[0],r=c().experiences,n=r[t],a=n?.extraContext||null;if(JSON.stringify(a)===JSON.stringify(i)||(0,s.E3)(n)&&!(i&&Object.keys(i).length>0))return Promise.resolve()}return a.Z.create("UserExperienceResource",{placement_ids:e,extra_context:i||null,targeting:n}).callGet().then(e=>e.resource_response?o((0,l.cL)(e.resource_response.data)):void 0)},E=(e,t,i,n)=>(o,s,c,d=!1,_,p)=>(E,h)=>{let{experiences:m,experiencesMulti:P}=h(),f=null,A=!0;if(d||(f=(A=m[o]&&m[o].experience_id===s)?m[o]:Array.isArray(P[o])&&P[o]?.find(e=>e.experience_id===s)),f&&f.experience_id===s||d&&o&&s){let d=a.Z.create(e,{placed_experience_id:`${o}%3A${s}`,extra_context:_??{},targeting:p}),h=A?l.Yb:l.xW;switch(t){case"dismissed":return d.callDelete().then(()=>{E(h(o,s,t)),E(u(void 0,r)),i&&n&&i({event_type:n,object_id_str:s.toString()})});case"completed":return d.callUpdate().then(()=>{!c&&(E(h(o,s,t)),E(u(void 0,r)),i&&n&&i({event_type:n,object_id_str:s.toString()}))});case"viewed":return E(h(o,s,t)),d.callUpdate().then(()=>{1000162===o&&E(u()),i&&n&&i({event_type:n,object_id_str:s.toString()})});case"completedWithoutHomefeed":return d.callUpdate().then(()=>{c||E(h(o,s,t)),i&&n&&i({event_type:n,object_id_str:s.toString()})})}}return Promise.resolve()},h=()=>{let e=(0,o.Z)(),t=(0,n.useCallback)(E("UserExperienceViewedResource","viewed",e,4503),[e]);return t},m=()=>{let e=(0,o.Z)(),t=(0,n.useCallback)(E("UserExperienceCompletedResource","completed",e,6567),[e]);return t},P=()=>{let e=(0,o.Z)(),t=(0,n.useCallback)(E("UserExperienceResource","dismissed",e,6568),[e]);return t},f=()=>{let e=(0,o.Z)(),t=(0,n.useCallback)(E("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e]);return t},A=(e,t)=>(i,r)=>{let{experiences:n}=r(),a=n[e];a&&a.triggerable_placed_exps&&a.triggerable_placed_exps.length&&a.triggerable_placed_exps.forEach(i=>{let[,r]=i.split(":"),n=t;a.metadata&&a.metadata[r]&&(n={...t,...a.metadata[r]}),(0,c.Z)({url:`/v3/experiences/${i.replace(":","%3A")}/trigger/`,method:"PUT",data:n?{extra_context:JSON.stringify(n,null,1)}:{}}).then(()=>{_("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:r})})})},O=e=>(t,i)=>{t(A(e));let{experiences:r}=i();return r[e]},T=(e,t,i)=>n=>{i&&(r=i),n(A(e,t)),t&&Object.keys(t).length>0&&n(p([e],!1,t,i))}},703404:(e,t,i)=>{i.d(t,{A0:()=>l,E3:()=>o,MQ:()=>s,fL:()=>c});var r=i(883119),n=i(862249),a=i(785893);function o(e){return!!e&&0!==e.type}let s=(e,t,i)=>{let r=e[i];return t[i]&&o(r)?r:null};function l(e){return e.display_data?.anchor}let c=e=>{let t=new DOMParser,i=t.parseFromString(e,"text/html"),o=[...i.body?.childNodes||[]].map(e=>{if("A"!==e.nodeName)return(0,a.jsx)(r.xv,{inline:!0,children:e.textContent});{let t=e.href||"",i=(0,n.Z)({url:t});return(0,a.jsx)(r.rU,{display:"inline",externalLinkIcon:i?"default":"none",href:t,rel:i?"nofollow":"none",target:"blank",children:e.textContent})}});return(0,a.jsx)(r.xv,{inline:!0,children:o})}},26616:(e,t,i)=>{i.d(t,{$S:()=>r,V$:()=>n,_4:()=>o,iY:()=>s,mR:()=>a});let r="REFRESH_ALL_EXPERIENCES_MULTI",n="UPDATE_EXPERIENCE_MULTI",a="FETCH_EXPERIENCES",o="REFRESH_ALL_EXPERIENCES",s="UPDATE_EXPERIENCE"},957753:(e,t,i)=>{i.d(t,{NW:()=>s,OD:()=>c,Yb:()=>l,cL:()=>d,xW:()=>o});var r=i(216167),n=i(26616);let a=e=>({type:n.$S,payload:{experiencesMulti:e}}),o=(e,t,i)=>({type:n.V$,payload:{placementId:e,experienceId:t,status:i}}),s=e=>t=>r.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(a(e.resource_response.data)):void 0),l=(e,t,i)=>({type:n.iY,payload:{placementId:e,experienceId:t,status:i}}),c=e=>({type:n._4,payload:{experiences:e}}),d=e=>({type:n.mR,payload:{experiences:e}})},205841:(e,t,i)=>{i.d(t,{qE:()=>s,u_:()=>l.ZP});var r=i(883119),n=i(785893);let a=(e,t)=>{let i=e?.includes("images/user/default");return!!(i&&t)};function o({accessibilityLabel:e,name:t,outline:i,size:o,src:s,verified:l}){return(0,n.jsx)(r.qE,{accessibilityLabel:e,name:t,outline:i,size:o,src:a(s,t)?void 0:s,verified:l})}o.displayName="Avatar";let s=o;var l=i(930837);i(454514)},140017:(e,t,i)=>{i.d(t,{ZP:()=>s,oz:()=>a,q6:()=>n});var r=i(342513);let{Provider:n,Consumer:a,useHook:o}=(0,r.Z)("i18n"),s=o},996523:(e,t,i)=>{i.d(t,{Z:()=>function e(t,i,r=()=>void 0){let n=r(t,i);return void 0!==n?n:void 0===i?t:Array.isArray(t)&&Array.isArray(i)?i.reduce((t,n,a)=>(t[a]=e(t[a],i[a],r),t),[...t]):t&&"object"==typeof t&&i&&"object"==typeof i?Object.keys(i).reduce((t,n)=>(t[n]=e(t[n],i[n],r),t),{...t}):i}})},564855:(e,t,i)=>{i.d(t,{ZP:()=>n,mP:()=>r});let r="…";function n(e,t=80,i=r,n=!1){let a;if(!e)return"";if(e.length<=t)return e;if(" "!==e[t-1]&&" "===e[t]||n)a=e.substring(0,t);else{let i=e.lastIndexOf(" ",t);a=e.substring(0,i)}return(a=a.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+i}},325362:(e,t,i)=>{i.d(t,{Z:()=>r});function r(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}},839372:(e,t,i)=>{i.d(t,{w:()=>E});var r=i(798580),n=i(287434),a=i(503325),o=i(623891),s=i(953565);function l(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let c=null,d={ACTIVE:"ACTIVE",PAUSED:"PAUSED"},_=()=>window&&window.performance&&window.performance.now?`(Time: ${(window.performance.now()/1e3).toFixed(3)}s)`:"",u=e=>{let t=!1;return(...i)=>{t||(t=!0,e(...i))}},p={};function E({contextLogger:e,shouldExtractTrackingParams:t}){if(c)return c;let i=(i,n,a)=>{if(t&&a&&i){let e;let{pair_id:t,event_type:o}=i;if(4703===o&&t&&p[t])i.clientTrackingParams=p[t];else{let s=i.object_id_str,l=s?a[s]:null,c=n?.current?.location,d=n?.previous;l&&c&&(e=(0,r.Z)({boardUrl:l.board?.url,location:c,pinId:l.id,pinnerUserName:l.pinner?.username,previousHistory:d,storyPinDataId:l.story_pin_data_id,trackingParams:l.tracking_params,trackingParamsMap:l.tracking_params_map})||`${l.tracking_params||""}~0`,i.clientTrackingParams=e,4702===o&&t&&(p[t]=e))}}e.logContextEvent(i)},E=new Map,h=(0,o.Z)()&&(0,o.Z)().debug_timespent,m=[],P=h?console:{error:(...e)=>{},log:(...e)=>{},group:(...e)=>{},groupEnd:(...e)=>{}};return console.group||(P.group=(...e)=>console.log(...e),P.groupEnd=(...e)=>{}),c=new class{constructor(){l(this,"appTimedPair",null),l(this,"clickthroughProperties",null),l(this,"historyStackContext",null),l(this,"offsiteTimedPair",null),l(this,"offsiteTimedPairForegroundId",null),l(this,"pins",Object.freeze({})),l(this,"addEventListeners",()=>{let e,t;"undefined"!==document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),t&&document.addEventListener(t,t=>{document[e]?this.unregisterApp(!1,void 0,t):document.hasFocus()&&this.registerApp()},!1),window.addEventListener("focus",this.registerApp),window.addEventListener("blur",e=>this.unregisterApp(!1,void 0,e));let i=u(e=>this.unregisterApp(!0,void 0,e));window.addEventListener("beforeunload",i),window.addEventListener("pagehide",i);let r=navigator&&navigator.userAgent.toLowerCase();r&&r.includes("macintosh")&&r.includes("chrome")&&window.addEventListener("popstate",()=>{document.hasFocus()||document[e]||(0,s.nP)("chrome_mac_back_forward_button",{sampleRate:1})})}),l(this,"storeClickthroughProperties",e=>{this.clickthroughProperties&&(0,s.nP)("webapp.metrics.clickthroughs.overwritten",{sampleRate:1,tags:{previousView:this.clickthroughProperties.view_type,previousViewParameter:this.clickthroughProperties.view_parameter,nextView:e.view_type,nextViewParameter:e.view_parameter}}),this.clickthroughProperties={time:(0,n.Z)(),...e}}),l(this,"clearClickthroughProperties",()=>{this.clickthroughProperties=null,this.offsiteTimedPair=null,this.offsiteTimedPairForegroundId=null}),l(this,"registerApp",()=>{P.group("App Foreground",_()),null==this.appTimedPair?(this.appTimedPair=new a.Z,this.appTimedPair.start(),this._unpauseAllComponents(),this._endOffsiteTimedPair(),null!==this.appTimedPair&&void 0!==this.appTimedPair&&i({event_type:4700,pair_id:this.appTimedPair.uuid},this.historyStackContext,this.pins)):P.error("TimedPair already exists for app."),P.groupEnd()}),l(this,"unregisterApp",(t=!1,r=!1,n)=>{P.group("App Background",_());let{appTimedPair:a}=this;if(null!=a){this._pauseAllComponents();let e=a.end();this._startOffsiteTimedPair(),i({event_type:4701,duration_ns:e,pair_id:a.uuid},this.historyStackContext,this.pins),this.appTimedPair=null}else P.error("No TimedPair found for app.");let o=["beforeunload","pagehide"],s=o.includes(n?.type),l=o.includes(n?.pauseReason);(s||l)&&this._endOffsiteTimedPair(),r||e.flushContextEvents(t??!1),P.groupEnd()}),l(this,"_activateComponent",e=>{P.group("Activating component",_()),h&&P.log(e.getContext());let t=e.getTimedPair();if(t){t.start();let{view:r,viewParameter:n,component:a,element:o,objectId:s,clientTrackingParams:l}=e.getLoggerContext();i({event_type:4702,view_type:r,view_parameter:n,component:a,element:o,object_id_str:s,view_data:e.props.viewData,pair_id:t.uuid,clientTrackingParams:l,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}P.groupEnd()}),l(this,"_deactivateComponent",e=>{P.group("Deactivating component",_()),h&&P.log(e.getContext());let t=e.getTimedPair();if(t){let{view:r,viewParameter:n,component:a,element:o,objectId:s,clientTrackingParams:l}=t,c=t.end();i({event_type:4703,view_type:r,view_parameter:n,component:a,element:o,object_id_str:s,view_data:e.props.viewData,duration_ns:c,pair_id:t.uuid,clientTrackingParams:l,aux_data:{time_spent_foreground_pairid:this.appTimedPair&&this.appTimedPair.uuid,time_spent_parent_pairid:e.getParentId(),...e.props.auxData}},this.historyStackContext,this.pins)}P.groupEnd()}),l(this,"_startOffsiteTimedPair",()=>{let{clickthroughProperties:e}=this;e&&(this.offsiteTimedPair=new a.Z({...e,view:186,viewParameter:e.view_parameter,objectId:e.object_id_str}),this.offsiteTimedPair.start(),this.offsiteTimedPairForegroundId=this.appTimedPair?this.appTimedPair.uuid:null,e.aux_data={...e.aux_data,time_to_offsite:void 0!==e.time&&null!==e.time&&"number"==typeof e.time?(0,n.Z)()-e.time:void 0},i({...e,event_type:4702,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...e.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId}},this.historyStackContext,this.pins))}),l(this,"_endOffsiteTimedPair",()=>{let{offsiteTimedPair:e,clickthroughProperties:t}=this;if(e&&t){let r=e.end();i({...t,event_type:4703,view_type:186,pair_id:this.offsiteTimedPair?this.offsiteTimedPair.uuid:null,aux_data:{...t.aux_data,time_spent_foreground_pairid:this.offsiteTimedPairForegroundId},duration_ns:r},this.historyStackContext,this.pins),this._onOffsiteEnd(),this.clearClickthroughProperties()}}),l(this,"_onOffsiteEnd",()=>{P.group("Trigger onOffsiteEndCallbacks"),m.forEach(e=>e({appTimedPair:this.appTimedPair,clickthroughProperties:this.clickthroughProperties,offsiteTimedPair:this.offsiteTimedPair,offsiteTimedPairForegroundId:this.offsiteTimedPairForegroundId})),P.groupEnd()}),l(this,"_pauseAllComponents",()=>{P.group("Pause all components"),E.forEach((e,t,i)=>{e===d.ACTIVE&&this._deactivateComponent(t),i.set(t,d.PAUSED)}),P.groupEnd()}),l(this,"_unpauseAllComponents",()=>{P.group("Unpause all components"),E.forEach((e,t)=>{let i=new a.Z(t.getLoggerContext());t.setTimedPair(i,()=>{E.set(t,d.ACTIVE),this._activateComponent(t)})}),P.groupEnd()})}setHistoryStackContext(e){this.historyStackContext=e}setPins(e){this.pins=e}registerComponent(e){null===this.appTimedPair?E.set(e,d.PAUSED):(E.set(e,d.ACTIVE),this._activateComponent(e))}unregisterComponent(e){let t=E.get(e);t===d.ACTIVE&&(this._deactivateComponent(e),e.setTimedPair(new a.Z(e.getLoggerContext()))),E.delete(e)}size(){return E.size}onOffsiteEnd(e){m.push(e)}removeOnOffsiteEnd(e){let t=m.indexOf(e);t>-1&&m.splice(t,1)}}}},822987:(e,t,i)=>{i.d(t,{j:()=>u,w:()=>_});var r=i(214877),n=i(342513),a=i(5859),o=i(839372),s=i(554786),l=i(494125),c=i(785893);let{Provider:d,useMaybeHook:_}=(0,n.Z)("TimeSpentManagerContext");function u({children:e}){let t=(0,r.v)(),i=(0,s.HG)(),{isAuthenticated:n}=(0,a.B)(),_=(0,o.w)({contextLogger:t,shouldExtractTrackingParams:i&&n});return(0,l.Z)(()=>{document.hasFocus()&&_.registerApp(),_.addEventListeners()}),(0,c.jsx)(d,{value:_,children:e})}},503325:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(172045),n=i(17314);function a(e,t,i){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let o="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),s=class{constructor(e){a(this,"start",()=>(this.startTime=o(),this.startTime)),a(this,"end",()=>(this.endTime=o(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,n.Z)()}e&&Object.assign(this,e)}}},629650:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(667294),n=i(883119),a=i(274262),o=i(785893);function s(e){return null!=e}function l({additionalPadding:e,color:t="darkGray",inline:i,items:l}){let c=e?(0,o.jsx)("span",{style:{padding:`0 ${4*e}px`},children:(0,o.jsx)(a.Z,{color:t})}):(0,o.jsx)(a.Z,{color:t}),d=l.filter(s).reduce((e,t,i)=>[...e,0!==i?c:null,t],[]).filter(s).map((e,t)=>(0,o.jsx)(r.Fragment,{children:e},t));return 0===d.length?null:i?(0,o.jsx)(n.xu,{children:d}):(0,o.jsx)(n.kC,{alignItems:"center",justifyContent:"start",children:d})}},862249:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(968946);let n=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,r.Z)(e))},494125:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(667294);let n=e=>{(0,r.useEffect)(e,[])}},983983:(e,t,i)=>{i.d(t,{L1:()=>a,Rz:()=>l,WZ:()=>o,cI:()=>n,fe:()=>s,hu:()=>r});let r=64,n=80,a=22,o="HeaderContent",s=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},19447:(e,t,i)=>{i.d(t,{AF:()=>s,H0:()=>l,S6:()=>c,_S:()=>d});var r=i(702664),n=i(342513),a=i(785893);let{Provider:o,useHook:s,useMaybeHook:l}=(0,n.Z)("Pins");function c(){let e=s();return t=>e[t]}function d({children:e}){let t=(0,r.useSelector)(({pins:e})=>e,r.shallowEqual);return(0,a.jsx)(o,{value:t,children:e})}},70982:(e,t,i)=>{i.d(t,{KF:()=>d,ZN:()=>s,fv:()=>c,kE:()=>u,yA:()=>l});var r=i(216167),n=i(107366),a=i(386129);function o(e,t,i,n){return r.Z.create("UserFollowResource",{user_id:e,invite_code:n||void 0,aux_data:t?{pin_id:t}:void 0,client_tracking_params:i})}function s(e,t=null,i,r){return n=>{o(e,t,i,r).callCreate().catch(()=>n((0,a.P_)(e,!1))),n((0,a.P_)(e,!0))}}function l(e,t=null,i,r){return async n=>{n((0,a.P_)(e,!0)),await o(e,t,i,r).callCreate().catch(t=>{throw n((0,a.P_)(e,!1)),t})}}function c(e,t=null,i){return r=>{o(e,t,i).callDelete().catch(()=>r((0,a.P_)(e,!0))),r((0,a.P_)(e,!1))}}function d(e,t=null,i){return async r=>{r((0,a.P_)(e,!1)),await o(e,t,i).callDelete().catch(t=>{throw r((0,a.P_)(e,!0)),t})}}let _=(e,t)=>({type:"USER_BULK_FOLLOW",payload:{ids:e,value:t}}),u=e=>t=>{e.length>0&&((0,n.Z)({url:"/v3/users/follow/",method:"PUT",data:{followee_ids:e.join(",")}}).catch(()=>t(_(e,!1))),t(_(e,!0)))}},386129:(e,t,i)=>{i.d(t,{Ge:()=>c,JS:()=>o,OF:()=>O,P_:()=>s,Q_:()=>u,b8:()=>p,eR:()=>A,h2:()=>d,h6:()=>_});var r=i(216167),n=i(107366),a=i(666698);function o(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let s=(e,t)=>({type:"USER_FOLLOW",payload:{id:e,value:t}}),l=(e,t)=>({type:"USER_BLOCK",payload:{id:e,value:t}}),c=({id:e,orbacSubjectId:t,blockSource:i,blockContext:n,logContextEvent:a})=>async o=>{o(l(e,!0));let s=await r.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:t,block_source:i,block_context:n}).callCreate().catch(()=>o(l(e,!1)));return a({event_type:54,object_id_str:e}),s},d=(e,t)=>async i=>{i(l(e,!1));let n=await r.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>i(l(e,!0)));return t({event_type:55,object_id_str:e}),n};function _(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let u=(e,t)=>()=>{let i=r.Z.create("UserStateResource",{state:e,value:t});return i.callCreate()},p=(e,t,i)=>(r,o)=>{(0,n.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{i({event_type:48,object_id_str:o().session.userId}),e(),(0,a.Dm)()},t)},E=e=>e>=200&&e<400,h=(e,t="150x150")=>e&&`https://i.pinimg.com/${t}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",m=async(e,t,i)=>{let n=await r.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(n.resource_response.data[e]){let r=n.resource_response.data[e],{status:a,signature:o}=r;if("processing"===a||"registered"===a)setTimeout(async()=>{m(e,t,i)},5e3);else if("succeeded"===a){let e=h(o);t(e)}else i()}else i()},P=(e,t,i,n,a)=>{let o=new FormData;return o.append("img",e),r.Z.create("VIPResource",{type:t}).callCreate().then(t=>{if(t.resource_response.data){let{upload_id:r,upload_url:o,upload_parameters:s}=t.resource_response.data,l=new XMLHttpRequest;l.open("POST",o,!0),l.onload=()=>{E(l.status)?(i(100),m(r,n,a)):a()},l.upload.onprogress=e=>{let t=Math.round(100*e.loaded/e.total);i(t)};let c=new FormData;for(let e in s)c.append(e,s[e]);c.append("file",e),l.send(c)}},()=>{a()})},f=e=>new Promise((t,i)=>{P(e,"pinimage",()=>{},e=>{t(e)},e=>{i(e)})}),A=e=>new Promise((t,i)=>{"string"==typeof e?e.startsWith("data")&&f(function(e,t=512){let i=e.split(";"),r=i[0].split(":")[1],n=i[1].split(",")[1],a=atob(n),o=[];for(let e=0;e<a.length;e+=t){let i=a.slice(e,e+t),r=Array(i.length);for(let e=0;e<i.length;e+=1)r[e]=i.charCodeAt(e);let n=new Uint8Array(r);o.push(n)}let s=new Blob(o,{type:r});return s}(e)).then(e=>t(e)):i("Invalid Image")}),O=e=>()=>(0,n.Z)({url:"/v3/register/exists/",data:{email:e}})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/72551-bd2b01f5ccf91718.mjs.map