"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[18977],{17314:(e,t,o)=>{o.d(t,{Z:()=>s});var r,a,l=o(813653),i=o(861470),n=0,d=0;let s=function(e,t,o){var s=t&&o||0,c=t||Array(16),u=(e=e||{}).node||r,_=void 0!==e.clockseq?e.clockseq:a;if(null==u||null==_){var m=e.random||(e.rng||l.Z)();null==u&&(u=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==_&&(_=a=(m[6]<<8|m[7])&16383)}var g=void 0!==e.msecs?e.msecs:Date.now(),E=void 0!==e.nsecs?e.nsecs:d+1,p=g-n+(E-d)/1e4;if(p<0&&void 0===e.clockseq&&(_=_+1&16383),(p<0||g>n)&&void 0===e.nsecs&&(E=0),E>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");n=g,d=E,a=_;var f=((268435455&(g+=122192928e5))*1e4+E)%4294967296;c[s++]=f>>>24&255,c[s++]=f>>>16&255,c[s++]=f>>>8&255,c[s++]=255&f;var T=g/4294967296*1e4&268435455;c[s++]=T>>>8&255,c[s++]=255&T,c[s++]=T>>>24&15|16,c[s++]=T>>>16&255,c[s++]=_>>>8|128,c[s++]=255&_;for(var y=0;y<6;++y)c[s+y]=u[y];return t||(0,i.Z)(c)}},901855:(e,t,o)=>{o.d(t,{Hv:()=>d,aX:()=>u,nK:()=>_});var r=o(667294),a=o(616550),l=o(342513),i=o(785893);let{Provider:n,useHook:d}=(0,l.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),s=e=>e&&e.pathname?e.pathname+(e.search||""):"";function c(e,t){let o={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&s(e.forward[0].location)===s(o.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:o,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:o};default:return e}}function u(){let{current:e,previous:t}=d();return(0,r.useMemo)(()=>e?t.concat(e):t,[e,t])}function _({children:e}){let t=(0,a.k6)(),o=(0,a.TH)(),l=(0,a.$B)(),d={forward:[],current:{action:t.action,location:o,match:l},previous:[]},[s,u]=(0,r.useReducer)(c,d);return(0,r.useEffect)(()=>{let{action:e}=t;u({type:e,location:o,match:l})},[o]),(0,i.jsx)(n,{value:s,children:e})}},847160:(e,t,o)=>{o.d(t,{Bx:()=>a,N4:()=>i,is:()=>n,lt:()=>r,oM:()=>l});let r=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),a=e=>e._('Log in to save this Pin', 'limitedLogin.modalHeader.repin', 'Title on mobile web limited login modal to prompt users to login after they clicked save button.'),l=e=>e._('Log in to edit this Pin', 'limitedLogin.modalHeader.editPin', 'Title on mobile web limited login modal to prompt users to login after they clicked edit button.'),i=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.'),n=e=>e._('Log in to create a Pin or board', 'limitedLogin.modalHeader.create', 'Title on mobile web limited login modal to prompt users to login to create a Pin or board.')},877457:(e,t,o)=>{o.d(t,{g:()=>i,t:()=>l});var r=o(667294);let a=(0,r.createContext)(null),l=a.Provider,i=()=>(0,r.useContext)(a)},515278:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(847160),a=o(140017),l=o(166770);let i=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:o}=(0,l.H)(),i=(0,a.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),o?.setText(t?.loginModalHeader||r.lt(i))}}},241552:(e,t,o)=>{o.d(t,{l:()=>l,r:()=>i});var r=o(667294);let a=(0,r.createContext)(null),l=()=>(0,r.useContext)(a),i=a.Provider},503325:(e,t,o)=>{o.d(t,{Z:()=>n,h:()=>i});var r=o(172045),a=o(17314);function l(e,t,o){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}let i="undefined"!=typeof window&&window.performance&&window.performance.now?()=>Math.floor(1e6*window.performance.now()):()=>1e6*Date.now(),n=class{constructor(e){l(this,"start",()=>(this.startTime=i(),this.startTime)),l(this,"end",()=>(this.endTime=i(),this.duration=this.startTime?this.endTime-this.startTime:null,this.duration));try{this.uuid=(0,r.Z)()}catch(e){this.uuid=(0,a.Z)()}e&&Object.assign(this,e)}}},28449:(e,t,o)=>{o.d(t,{$:()=>r,Z:()=>l});let{Provider:r,useMaybeHook:a}=(0,o(342513).Z)("TimeSpentManagerContext"),l=a},623409:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(667294),a=o(616550),l=o(741983),i=o(389638),n=o(217058);let d=e=>(0,l.L6)(e)?"pin":(0,l.am)(e)?"board":(0,l.Xn)(e)?"login":(0,l.C$)(e)?"home":(0,i.Z)(e)?"profile":(0,l.dr)(e)?"ideas":(0,l.gT)(e)?"ideas-root":(0,l.tZ)(e)?"videos":(0,l.Q0)(e)?"videos-category":(0,l.$Y)(e)?"article":(0,l.E0)(e)?"shopping-spotlight":(0,l.Zz)(e)?"today":(0,l.j8)(e)?"unauth-profile":(0,l.f1)(e)?"shopping-root":(0,l.OX)(e)?"shopping-category":"other";function s(){let e=(0,a.TH)();return(0,r.useCallback)(({action:t,item:o,within:r})=>{let a=d(e);(0,n.My)(`logged_out_product.interaction.${a}.${t}`,{item:o||"none",within:r||"none"})},[e])}},415199:(e,t,o)=>{o.d(t,{pb:()=>y,nf:()=>h,lV:()=>A});var r=o(667294),a=o(545007),l=o(441143),i=o.n(l),n=o(216167),d=o(342513),s=o(372085),c=o(638747),u=o(105737),_=o(996523);let m={feature_map:Object.freeze({})},g=(e,t)=>{let o={...(0,_.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,u.ZP)(e,o)?e:o},E=(e=m,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:o}}=t,{data:r}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===o||"AggregatedCommentReplyFeedResource"===o||"DidItCommentsResource"===o){let t=(r||[]).reduce((t,o)=>(t[o.id]=g(e[o.id],o),t),{});return{...e,...t}}if("UnifiedCommentsResource"===o&&r&&r.length>0){let t=r.filter(e=>"aggregatedcomment"===e.type).reduce((t,o)=>(t[o.id]=g(e[o.id],o),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===o&&r&&r.length>0){let t=r[0].aggregated_comment,o=t?{[t.id]:g(e[t.id],t)}:{},a=r[0].creator_reply,l=a?{[a.id]:g(e[a.id],a)}:{};return{...e,...o,...l}}if("AggregatedCommentFeaturesResource"===o&&r&&Object.keys(r).length>0)return{...e,feature_map:r}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:o}}=t;return o.id?{...e,[o.id]:o}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:o}}=t,r={...e};return delete r[o],r}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:o}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==o))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:o}}=t;return{...e,[o.id]:g(e[o.id],o)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:o}}=t,r=e[o.id],a=r.reaction_counts[1]||0,l={1:o.reaction_by_me?a+1:a-1},i={...r,reaction_by_me:o.reaction_by_me,reaction_counts:l};return{...e,[o.id]:i}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:o}}=t,r=e[o.id],a=r.helpful_count||0,l=o.marked_helpful_by_me?a+1:a-1,i={...r,marked_helpful_by_me:o.marked_helpful_by_me,helpful_count:l};return{...e,[o.id]:i}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:o}}=t,r={...e[o.aggregated_comment_id],highlighted_by_pin_owner:o.is_highlighted};return{...e,[o.aggregated_comment_id]:r}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:o}}}=t;return{...e,feature_map:{...e.feature_map,...o}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:o,id:r}}=t,a=e[r];if(!a)return e;let l={...a,comment_count:a.comment_count+o};return{...e,[r]:l}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:o,tagged_users:r}}=t,a={...e[o],tagged_users:r};return{...e,[o]:a}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:o,translatedText:r}}=t,a={...e[o],translatedText:r};return{...e,[o]:a}}return e};var p=o(785893);let{Provider:f,useHook:T}=(0,d.Z)("AggregatedComments");function y({children:e}){let t=(0,a.v9)(({resources:e})=>e?.UnifiedCommentsResource),o=m;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),r=t?.reduce((e,t)=>(e[t.id]=g(o[t.id],t),e),{});o={...o,...r}});let[l,i]=(0,r.useReducer)(E,o),n=e=>{i({type:"FETCH_COMPLETE",payload:e})};(0,c.Z8)("AggregatedCommentFeaturesResource",n),(0,c.my)("AggregatedCommentFeaturesResource",n),(0,c.Z8)("AggregatedCommentFeedResource",n),(0,c.my)("AggregatedCommentFeedResource",n),(0,c.Z8)("AggregatedCommentReplyFeedResource",n),(0,c.my)("AggregatedCommentReplyFeedResource",n),(0,c.Z8)("DidItCommentsResource",n),(0,c.my)("DidItCommentsResource",n),(0,c.Z8)("UnifiedCommentsPreviewResource",n),(0,c.my)("UnifiedCommentsPreviewResource",n),(0,c.Z8)("UnifiedCommentsResource",n),(0,c.my)("UnifiedCommentsResource",n);let d=(0,r.useMemo)(()=>({aggregatedComments:l,dispatch:i}),[l,i]);return(0,p.jsx)(f,{value:d,children:e})}function h(){let{dispatch:e}=T();return(0,r.useMemo)(()=>({aggregatedCommentCreated(t,o){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:o}})},aggregatedCommentDeleted:(t,o)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:o}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({commentId:e,reason:t,detailedReasons:o})=>(0,s.Z)({url:`/v3/aggregated_comments/${e}/flag/`,method:"PUT",data:{commentId:e,reason:t,detailedReasons:o}}),deleteCommentMention:async t=>{let{resource_response:o}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),r=o.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:r.id,tagged_users:r.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:o}=await (0,s.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),r=o.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:r}})}catch(o){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:o,orbacSubjectId:r})=>{(0,s.Z)({url:`/v3/helpful/1/${t}/`,method:o?"DELETE":"POST",data:r?{orbac_subject_id:r}:{}}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!o}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:o,isHighlighted:r})=>{i()(t,"Could not find comment"),i()(o,"Could not find Pin"),await (0,s.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:o,highlight:!r}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:o,is_highlighted:!r}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:o,orbacSubjectId:r})=>{(0,s.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:o?"DELETE":"POST",data:{reaction_type:1,...r?{orbac_subject_id:r}:{}}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:o?0:1}}})},updateAggregatedComment:async({commentId:t,force:o,orbacSubjectId:r,tags:a,text:l})=>{let{resource_response:i}=await n.Z.create("AggregatedCommentResource",{commentId:t,force:o,tags:a,text:l,...r?{orbacSubjectId:r}:{}}).callUpdate({showError:!1}),{tagged_users:d}=i.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:d.map(e=>({...e})),tags:JSON.parse(a),text:l}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:o,passcode:r,userConfirmPasscode:a})=>{let l={userId:t,featureMap:o,passcode:r,user_confirm_skip_passcode:a};void 0===a&&(l.user_confirm_skip_passcode=!1);let{resource_response:i}=await n.Z.create("AggregatedCommentFeaturesResource",l).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:i.data??Object.freeze({})}}})},updateCommentCount:(t,o)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:o,id:t}})}}),[e])}function A(){let{aggregatedComments:e}=T();return e}},189:(e,t,o)=>{o.d(t,{G:()=>_,Kl:()=>m,vo:()=>u});var r=o(667294),a=o(342513),l=o(638747),i=o(587070),n=o(785893);let d=()=>o.e(70809).then(o.bind(o,570809)),{Provider:s,useHook:c}=(0,a.Z)("NativeEngagements");function u({children:e}){let[t,o]=(0,i.Z)(d,[]);(0,l.Z8)("NativeInteractionsResource",e=>{o({type:"FETCH_COMPLETE",payload:e})}),(0,l.my)("NativeInteractionsResource",e=>{o({type:"FETCH_MORE_COMPLETE",payload:e})});let a=(0,r.useMemo)(()=>({dispatch:o,nativeEngagements:t}),[o,t]);return(0,n.jsx)(s,{value:a,children:e})}function _(){let{dispatch:e}=c();return(0,r.useMemo)(()=>({nativeEngagementsHiddenForUser:t=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:t}})}}),[e])}function m(){let{nativeEngagements:e}=c();return e}},155117:(e,t,o)=>{o.d(t,{f:()=>n,w:()=>d});var r=o(667294),a=o(342513),l=o(785893);let{Provider:i,useHook:n}=(0,a.Z)("Session");function d({children:e}){let[t,o]=(0,r.useState)(void 0),a=(0,r.useCallback)(()=>o(void 0),[]),n=(0,r.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:o,removeUnauthFollowUserId:a}),[t,a]);return(0,l.jsx)(i,{value:n,children:e})}},166770:(e,t,o)=>{o.d(t,{H:()=>a,o:()=>r});let{Provider:r,useHook:a}=(0,o(342513).Z)("LimitedLogin")},735728:(e,t,o)=>{o.d(t,{N4:()=>l,Wh:()=>r,hr:()=>a});let r=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),a=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),l=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/18977-bbb6732c127b1171.mjs.map