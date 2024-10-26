"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[83054],{618702:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"BoardCard_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"blockedByMe",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVerifiedMerchant",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,concreteType:"VerifiedIdentity",kind:"LinkedField",name:"verifiedIdentity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};a.hash="0628142b7a59444fec6969159289921a";let r=a},903225:(e,i,t)=>{var a;t.r(i),t.d(i,{default:()=>n});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetCoverPhoto_board",selections:[{alias:"coverImageSpec_222x",args:[{kind:"Literal",name:"spec",value:"222x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:a=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'coverImages(spec:"222x")'},{alias:"coverImageSpec_400x300",args:[{kind:"Literal",name:"spec",value:"400x300"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:a,storageKey:'coverImages(spec:"400x300")'},{alias:"coverImageSpec_216x146",args:[{kind:"Literal",name:"spec",value:"216x146"}],concreteType:"ImageDetails",kind:"LinkedField",name:"coverImages",plural:!1,selections:a,storageKey:'coverImages(spec:"216x146")'},{alias:null,args:null,concreteType:"CoverPin",kind:"LinkedField",name:"coverPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverHdUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageCoverUrl",storageKey:null},{alias:"image_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!0,selections:a,storageKey:'images(spec:"170x")'}],type:"Board",abstractKey:null};r.hash="25fa66fe4860f02b2ce5d43d2db22ddd";let n=r},297134:(e,i,t)=>{t.d(i,{Z:()=>n});var a=t(883119),r=t(785893);let n=({text:e})=>(0,r.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},"data-test-id":"line-clamp-wrapper",fit:!0,overflow:"hidden",children:e})},316667:(e,i,t)=>{t.d(i,{U:()=>n,Z:()=>l});var a=t(883119),r=t(785893);let n=", ";function l(){return(0,r.jsx)(a.xu,{display:"visuallyHidden",children:n})}},274262:(e,i,t)=>{t.d(i,{Z:()=>n});var a=t(883119),r=t(785893);function n({ariaHidden:e=!1,color:i="darkGray",size:t}){return(0,r.jsx)("span",{"aria-hidden":e,style:{padding:"0 4px"},children:(0,r.jsx)(a.xv,{color:i,inline:!0,size:t??"200",children:"·"})})}},939809:(e,i,t)=>{t.d(i,{Cy:()=>d,HE:()=>c,Mv:()=>n,PR:()=>x,Y4:()=>u,dL:()=>r,fS:()=>g,fv:()=>s,lu:()=>h,qS:()=>o,uc:()=>l});var a=t(666472);let r=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,duploShouldTrackPinEvents:e.duploShouldTrackPinEvents,loggingId:e.loggingId,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Pin",isPaused:e.isPaused,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},n=e=>{let i=(0,a.Z)({impressionAuxFields:{newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},contextLogData:e.auxData||{},impressionType:"Notification",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:i})},l=e=>{let i=(0,a.Z)({impressionAuxFields:{newsType:e.newsType},contextLogData:e.auxData||{},impressionType:"NotificationFeed",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:i})},s=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},contextLogData:e.auxData||{},componentType:e.component,isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,impressionType:"Article"});return e.children({impressionTrackerRef:i})},o=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Story",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},d=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"User",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},c=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Interest",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},u=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"TodayArticle",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})},g=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"Board",loggingId:e.loggingId,viewType:e.viewType||1,viewParameter:e.viewParameter,viewData:e.viewData});return e.children({impressionTrackerRef:i})},h=e=>{let i=(0,a.Z)({carouselData:e.carouselData,impressionType:"Pin",loggingId:e.loggingId,slotIndex:e.slotIndex??0,trackCarousel:!0,viewParameter:e.viewParameter||72,viewType:e.viewType||1,isPaused:e.isPaused,contextLogData:e.contextLogData,componentType:e.component,impressionAuxFields:e.impressionAuxFields});return e.children({impressionTrackerRef:i})},x=e=>{let i=(0,a.Z)({impressionAuxFields:{...e.impressionData||{}},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex,contextLogData:e.auxData||{},componentType:e.component,impressionType:"CuratedBoard",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:i})}},761203:(e,i,t)=>{t.d(i,{bn:()=>s,fJ:()=>d,gC:()=>o});var a=t(545007),r=t(342513),n=t(785893);let{Provider:l,useHook:s}=(0,r.Z)("Boards");function o(){let e=s();return i=>e[i]}function d({children:e}){let i=(0,a.v9)(({boards:e})=>e,a.wU);return(0,n.jsx)(l,{value:i,children:e})}},583130:(e,i,t)=>{t.d(i,{Z:()=>C});var a,r=t(667294);t(167912);var n=t(616550),l=t(883119),s=t(587703),o=t(205841),d=t(986631),c=t(757017),u=t(140017),g=t(72461),h=t(339001),x=t(340523),m=t(5859),p=t(217058),_=t(316667),v=t(274262),y=t(554786),f=t(149722),b=t(464593),w=t(724009),j=t(168477),P=t(304431),I=t(572345),z=t(213503),S=t(939809),k=t(785893);let T=void 0!==a?a:a=t(618702),A=({children:e,isBoardsActualizationRepsExp:i})=>(0,y.HG)()?(0,k.jsx)(l.X6,{accessibilityLevel:2,lineClamp:i?2:1,size:i?"300":"400",children:e}):(0,k.jsx)(l.xv,{lineClamp:i?2:1,size:i?"200":void 0,weight:"bold",children:e});function C({archivedDate:e,boardId:i,boardUrl:t,canEdit:a,numberOfCollaborators:C,containerBackgroundColor:D,coverPhoto:F,display:Z,followedByMe:B,fullSizeDrawer:L,sensitivityScreen:E,handleInviteResponse:U,hideMeta:H,hideSecretBoardIcon:K=!1,id:M,invite:G,imagesLego:N=[],isBoardInviteAccepted:R,isBoardsActualizationReps:W=!1,isActive:O,isAttributionHeightUnfixed:V,isAuthenticated:q,isCollaborative:X,isCollaborator:$,isCollaboratorsAttributionVisible:Y=!1,isNoBoardTitleStyle:J=!1,isOwner:Q,isProtected:ee,isSecret:ei,isTemporarilyDisabled:et,lastModifiedDate:ea,layout:er,locale:en,metaMarginTop:el=0,metaPaddingY:es=2,name:eo,numCols:ed,onEditClick:ec,onFollow:eu,onUnfollow:eg,pinCount:eh=0,sectionCount:ex,showFollowButton:em,showBoardCollaborators:ep=!0,userKey:e_,viewParameter:ev,viewType:ey,slotIndex:ef}){let eb=(0,u.ZP)(),ew=(0,c.Z)(),ej=(0,g.Z)(),eP=(0,s.Z)(),eI=(0,y.HG)(),{isRTL:ez}=(0,m.B)(),{username:eS}=(0,f.Z)(),{checkExperiment:ek}=(0,x.F)(),{username:eT}=(0,n.UO)(),eA=(0,d.Z)(T,e_),eC=eI&&q,eD="square"===er?j.M0:j.z9,eF="responsive"!==Z&&eC?eD:"100%",eZ=eS&&eS===eT,eB=!W&&q&&!eZ&&(eI?ek("dweb_presence_boards_reps_actualization").anyEnabled:ek("mweb_presence_boards_reps_actualization").anyEnabled),eL=!W&&!q&&(eI?ek("dweb_presence_boards_reps_actualization_unauth").anyEnabled:ek("mweb_presence_boards_reps_actualization_unauth").anyEnabled),eE=W||eB||eL,eU=eT&&j.sN.includes(eT.toLowerCase()),eH=e=>{q||(0,p.NC)("press_follow_board"),eu&&eu(e)},eK=e=>{q||(0,p.NC)("press_unfollow_board"),eg&&eg(e)},eM=N.map(e=>({url:e.url,name:eo})),eG=!!eA&&!a&&em,eN=eA?.isVerifiedMerchant,eR=eA?.verifiedIdentity?.verified,eW=eN||eR,eO=eE?eT&&!eU&&X:X,eV=!eE||ep,eq=!Q&&!$&&!!E?.show_warning,eX={board_id:M,reason:E?.reason},e$=eE&&(!eT||Y||eU),eY=eC?void 0:j.s0;return eE&&(eY=eI?void 0:e$?j.AC:j.Y_),(0,r.useEffect)(()=>{eq&&eP({event_type:13,component:13861,view_type:215,aux_data:eX})},[]),(0,k.jsx)(S.fS,{auxData:{board_id:M,board_pin_count:eh??0,board_section_count:ex??0},impressionData:{imageURL:F?.url},loggingId:M,slotIndex:ef||0,viewParameter:ev,viewType:ey,children:({impressionTrackerRef:n})=>(0,k.jsxs)(l.xu,{ref:n,"data-test-id":`boardCard-${eo}`,height:eG?`max(calc(25vh + 10px), calc(210px + ${eE?5:0}vh))`:"100%",position:"relative",width:eC?eF:"100%",children:[(0,k.jsx)(P.Z,{canEdit:a,containerBackgroundColor:D,coverPhoto:F,fullSize:L,hideSecretBoardIcon:K,images:eM,isActive:O,isProtected:ee,isSecret:ei,isTemporarilyDisabled:et,layout:er,onEditClick:ec,renderAsImage:!0,showSensitivityScreen:eq}),!H&&(0,k.jsx)(r.Fragment,{children:G&&!et?(0,k.jsxs)(r.Fragment,{children:[(0,k.jsxs)(l.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,k.jsxs)(l.xu,{width:"100%",children:[(0,k.jsx)(l.rU,{href:t??"",children:(0,k.jsx)(l.xu,{marginBottom:1,marginTop:0,children:(0,k.jsx)(A,{isBoardsActualizationRepsExp:eE,children:eo})})}),R?(0,k.jsx)(l.xv,{lineClamp:1,size:"200",children:eb._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,k.jsx)(l.xv,{size:"200",children:function(e,i){let{full_name:t,username:a}=e,r=(0,k.jsx)(l.rU,{display:"inlineBlock",href:`/${a}`,underline:"hover",children:t},"linkToUser");return(0,h.nk)(i._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:r})}(G.invited_by_user,eb)})]}),eV&&(0,k.jsx)(w.Z,{boardId:i})]}),R?(0,k.jsx)(l.xu,{direction:"row",display:"flex",paddingX:2,children:(0,k.jsx)(l.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,k.jsx)(l.ZP,{fullWidth:!0,href:t??"",size:"lg",text:eb._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,k.jsxs)(l.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,k.jsx)(l.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,k.jsx)(l.zx,{fullWidth:!0,onClick:()=>{U?.(!1)},size:"lg",text:eb._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,k.jsx)(l.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,k.jsx)(l.zx,{color:"red",fullWidth:!0,onClick:()=>{U?.(!0)},size:"lg",text:eb._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,k.jsxs)(l.xu,{height:V?void 0:eY,marginTop:eC?el:1,paddingX:2,paddingY:eC?es:0,children:[J&&(0,k.jsxs)(l.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginEnd:2,paddingY:1,children:[(0,k.jsx)(l.xu,{marginEnd:2,marginStart:1,children:(0,k.jsx)(o.qE,{accessibilityLabel:eb._('Avatar', 'User`s Avatar', 'User`s Avatar'),name:eA?.fullName??"",size:"xs",src:eA?.imageMediumUrl??""})}),(0,k.jsxs)(l.kC,{direction:"column",children:[(0,k.jsxs)(l.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",children:[(0,k.jsxs)(l.xv,{inline:!0,lineClamp:1,size:"100",children:[(0,k.jsx)(l.xv,{inline:!0,size:"100",children:eb._('By', 'boardRep.boardCard.userAttribution', 'User attribution for a board rep')})," ",(0,k.jsx)(l.xv,{inline:!0,size:"100",weight:"bold",children:eA?.fullName})]}),eW&&(0,k.jsx)(l.xu,{marginStart:1,children:(0,k.jsx)(I.Z,{isVerifiedIdentity:!!eR,isVerifiedMerchant:!!eN,size:"xs"})})]}),(0,k.jsxs)(l.xu,{alignItems:eI?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,k.jsxs)(l.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,k.jsx)(_.Z,{}),(0,h.nk)(eb.ngettext('{{ count }} Pin', '{{ count }} Pins', eh, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:ej(en,eh,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),(0,k.jsx)(l.xv,{color:"subtle",size:"100",children:(0,k.jsx)(v.Z,{ariaHidden:!0,size:"100"})}),!e&&(0,k.jsx)(l.xu,{display:"inlineBlock",marginEnd:ez?2:0,children:(0,k.jsxs)(l.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,k.jsx)(_.Z,{}),ew(ea,!0)]})})]})]})]}),!J&&(0,k.jsxs)(r.Fragment,{children:[(0,k.jsxs)(l.xu,{alignItems:eE?"start":"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,k.jsx)(A,{isBoardsActualizationRepsExp:eE,children:eo}),eO&&!et&&eV&&(0,k.jsx)(w.Z,{boardId:i})]}),e$&&(0,k.jsx)(l.xu,{marginTop:1,children:(0,k.jsx)(b.Z,{numberOfCollaborators:C,ownerFullName:eA?.fullName??"",ownerIsVerifiedIdentity:!!eR,ownerIsVerifiedMerchant:!!eN,showBoardCollaborators:eV})}),(0,k.jsxs)(l.xu,{alignItems:eI?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,k.jsxs)(l.xv,{color:eE?"subtle":void 0,lineClamp:1,size:"100",children:[(0,k.jsx)(_.Z,{}),(0,h.nk)(eb.ngettext('{{ count }} Pin', '{{ count }} Pins', eh, 'profile.ProfilePage.board.BoardCard.pinsCount', 'Show how many Pins there are in the board card. count:number of Pins'),{count:ej(en,eh,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),!!ex&&(0,k.jsxs)(l.xv,{color:eE?"subtle":void 0,lineClamp:1,size:"100",children:[(0,k.jsx)(v.Z,{ariaHidden:!0,size:"100"}),(0,k.jsx)(_.Z,{}),(0,h.nk)(eb.ngettext('{{ count }} section', '{{ count }} sections', ex, 'profile.ProfilePage.board.BoardCard.sectionsCount', 'Show how many sections there are in the board card. count:number of sections'),{count:ex})]}),eE&&(0,k.jsx)(l.xv,{color:"subtle",size:"100",children:(0,k.jsx)(v.Z,{ariaHidden:!0,size:"100"})}),(0,k.jsx)(l.xu,{display:eC?"flex":"inlineBlock",marginEnd:ez?2:0,marginStart:eE?void 0:2,children:(0,k.jsxs)(l.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,k.jsx)(_.Z,{}),ew(ea,!0)]})})]}),e&&!eI&&(0,k.jsxs)(l.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,k.jsx)(_.Z,{}),eb._('Archived', 'profile.ProfilePage.BoardCard.ArchivedText', 'label for archived boards')]}),eG&&(0,k.jsx)(l.xu,{column:2===ed?12:void 0,flex:"none",marginTop:2===ed?3:void 0,children:(0,k.jsx)(z.Z,{disabled:!!eA?.blockedByMe,followEventType:26,id:M,isFollowed:B,onFollow:eH,onUnfollow:eK,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:ev,viewType:ey})})]})]})})]})})}},464593:(e,i,t)=>{t.d(i,{Z:()=>c});var a=t(883119),r=t(297134),n=t(140017),l=t(72461),s=t(5859),o=t(785893);let d={xs:{icon:12,text:"100",height:15},sm:{icon:16,text:"200",height:17},md:{icon:20,text:"300",height:18},lg:{icon:24,text:"400",height:23}};function c({ownerFullName:e,ownerIsVerifiedMerchant:i,ownerIsVerifiedIdentity:t,numberOfCollaborators:c,size:u="xs",showBoardCollaborators:g=!0}){let h=(0,n.ZP)(),{locale:x}=(0,s.B)(),m=(0,l.Z)();return(0,o.jsxs)(a.kC,{alignItems:"center",justifyContent:"start",maxHeight:d[u].height,children:[(0,o.jsx)(a.xv,{lineClamp:1,size:d[u].text,children:(0,o.jsx)(r.Z,{text:e})}),(i||t)&&(0,o.jsx)(a.xu,{flex:"none",marginStart:1,children:i?(0,o.jsx)(a.JO,{accessibilityLabel:h._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant is verified'),color:"shopping",icon:"workflow-status-ok",size:d[u].icon}):(0,o.jsx)(a.JO,{accessibilityLabel:h._('Identity verification badge icon', 'identityVerification.badge.icon', 'Badge indicating that user is verified'),color:"error",icon:"check-circle",size:d[u].icon})}),g&&c>0&&(0,o.jsx)(a.xu,{flex:"none",marginStart:1,children:(0,o.jsx)(a.xv,{size:d[u].text,children:"+ "+m(x,c,{shortform:!0,shortform_maximum_fraction_digits:0})})})]})}},724009:(e,i,t)=>{t.d(i,{Z:()=>u});var a=t(883119),r=t(140017),n=t(316667),l=t(554786),s=t(667294),o=t(149722),d=t(761203),c=t(785893);function u({boardId:e}){let i=(0,r.ZP)(),t=(0,o.Z)(),u=(0,l.HG)(),g=(0,d.gC)()(e),h=function(e){let i=(0,o.Z)(),t=(0,l.HG)()&&i&&i.isAuth,a=(0,d.gC)()(e);return(0,s.useMemo)(()=>{if(!a)return[];let{owner:e,collaborating_users:r}=a,[n,l,s]=[new Set,new Set,new Set];for(let t of[...e?[e]:[],...r||[]])t.id===e?.id?n.add(t):t.id===i.id?l.add(t):s.add(t);return[...n,...l,...s].map(e=>({name:(t?e.full_name:e.username)??"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":e.image_medium_url??""}))},[t,a,i])}(e);if(!g)return null;let{collaborator_count:x=0}=g,m=u&&t&&t.isAuth?23:16,p=m/3*((h.length>2?3:h.length)*2+1),_=x>=h.length?x-h.length:0,v=[...h,...Array(_=_>99?100:_).fill({name:"",src:""})];return(0,c.jsx)(a.xu,{height:m,marginStart:2,minWidth:p,width:p,children:(0,c.jsx)(a.HE,{accessibilityLabel:n.U+(i._('Board has collaborators', 'boardCard.avatarGroup.collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:v})})}},668649:(e,i,t)=>{t.d(i,{Z:()=>c});var a=t(667294),r=t(883119),n=t(785893);function l(e){return`${Math.min(100*e,100)}%`}function s({customCover:e,imgPos:i,imgUrl:t}){let[r,n]=(0,a.useState)({height:0,width:0});if((0,a.useEffect)(()=>{let e=new Image;e.onload=()=>n({height:e.naturalHeight,width:e.naturalWidth}),e.src=t},[t]),!e||!i||!r.height||!r.width)return"center center";let s=r.width-i.width,o=r.height-i.height,d=s?l(i.x/s):"center",c=o?l(i.y/o):"center";return`${d} ${c}`}function o(e){let i=s(e),{imgUrl:t}=e,a={backgroundImage:`url(${t})`,backgroundPosition:i,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,n.jsx)(r.xu,{"data-test-id":"cover-image-box",height:"100%",width:"100%",children:(0,n.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:a},"data-test-id":"cover-image",children:(0,n.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}function d(e){let i=s(e),{alt:t,color:a,imgUrl:l}=e;return(0,n.jsx)(r.zd,{height:"100%",width:"100%",children:(0,n.jsx)("img",{alt:t||"",src:l,style:{backgroundColor:a||"#EFEFEF",fetchPriority:"cover",height:"100%",loading:"auto",objectFit:"cover",objectPosition:i,width:"100%"}})})}function c(e){let{renderAsImage:i}=e;return i?(0,n.jsx)(d,{...e}):(0,n.jsx)(o,{...e})}},304431:(e,i,t)=>{t.d(i,{Z:()=>h});var a=t(667294),r=t(883119),n=t(140017),l=t(5859),s=t(554786),o=t(168477),d=t(668649),c=t(910777),u=t(785893);let g="100%";function h(e){let i=(0,n.ZP)(),{canEdit:t,containerBackgroundColor:h="white",coverPhoto:x,fullSize:m,hideSecretBoardIcon:p,images:_,isActive:v,isProtected:y,isSecret:f,isTemporarilyDisabled:b,layout:w,onEditClick:j,renderAsImage:P,showSensitivityScreen:I}=e,z=(0,s.HG)(),{isRTL:S,isAuthenticated:k}=(0,l.B)(),T=(0,a.useRef)(null),A=_[0],C=!x&&_[0]?.name||i._('Cover image', 'DrawerImageGroup', 'Alt text for the main image of a board'),D=[,,].fill(),F=new r.Ry(1),Z="square"===w?o.M0:o.z9,B="square"===w?o.FP:o.FC,L=A?.url?(0,u.jsx)(r.Ee,{alt:C,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:A.url}):(0,u.jsx)(r.xu,{color:"secondary",height:"100%",width:"100%"}),E=b||I?{filter:"blur(20px)"}:{};return(0,u.jsx)(r.zd,{height:m?"100%":void 0,rounding:4,wash:v,width:"100%",children:(0,u.jsxs)(r.kC,{alignItems:"stretch",direction:"row",height:"100%",justifyContent:"start",children:[(0,u.jsx)(r.sg,{span:8,children:(0,u.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:E},height:m?"100%":void 0,position:"relative",children:(0,u.jsx)(r.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:g}},overflow:"hidden",width:"100%",children:(0,u.jsxs)(r.xu,{ref:T,bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(y||f)&&!p&&(0,u.jsx)(r.xu,{left:!S,margin:2,position:"absolute",right:S,top:!0,zIndex:F,children:(0,u.jsx)(c.Z,{backgroundColor:"default",iconColor:"default",privacy:f?"secret":"protected",size:z&&k?32:24})}),x?.url?(0,u.jsx)(d.Z,{customCover:x.isCustom,height:B,imgPos:x.position||{width:0,height:0,x:0,y:0},imgUrl:x.url??"",renderAsImage:P,width:Math.floor(Z/3*2)}):L]})})})}),(0,u.jsx)(r.sg,{span:4,children:(0,u.jsxs)(r.xu,{dangerouslySetInlineStyle:{__style:E},height:"100%",children:[t&&v&&(0,u.jsx)(r.xu,{bottom:!0,left:S,margin:2,position:"absolute",right:!S,zIndex:F,children:(0,u.jsx)(r.hU,{accessibilityLabel:i._('Edit', 'DrawerImageGroup.edit', 'Icon indicating that a board is editable'),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>j?.(e),size:"sm"})}),D.map((e,i)=>{let t=x?_[i]:_[i+1];return(0,u.jsx)(r.xu,{height:m?"50%":void 0,position:"relative",children:(0,u.jsx)(r.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:g}},overflow:"hidden",width:"100%",children:(0,u.jsx)(r.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:0===i?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:t?.url?(0,u.jsx)(r.Ee,{alt:"",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:t.url}):(0,u.jsx)(r.xu,{color:"secondary",height:"100%",width:"100%"})})})},i)})]})}),(b||I)&&(0,u.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:b?(0,u.jsx)(r.xu,{maxWidth:188,children:(0,u.jsx)(r.xv,{align:"center",color:"light",size:"200",weight:"bold",children:i._('This board is currently unavailable', 'drawerImageGroup.unavailableBoard.heading', 'Warning text for a board that is unavailable')})}):(0,u.jsx)(r.X6,{align:"center",color:"light",size:"400",children:i._('This board may contain sensitive content', 'drawerImageGroup.sensitivityScreen.heading', 'Warning text for a board that may have sensitive content')})})]})})}},168477:(e,i,t)=>{t.d(i,{AC:()=>n,FC:()=>d,FP:()=>s,M0:()=>l,Xq:()=>c,Y_:()=>r,s0:()=>a,sN:()=>u,z9:()=>o});let a=44,r=32,n=52,l=236,s=157,o=320,d=213,c=7,u=["pinterest","pinterest_canada","pinterestuk","pinterestfr","pinterestde","pinterestit","pinterestespana","pinterestaustralia","pinterestindia","pinterestindonesia","pinterestjp","pinterestbr","pinterestmx","pinterestar","beauty","fashion","homedecor","food","inspiration","inspiringideas","aesthetics","shop","art","travel","trends","collages","pinterestpredicts"]},910777:(e,i,t)=>{t.d(i,{Z:()=>l});var a=t(883119),r=t(140017),n=t(785893);function l({backgroundColor:e="darkGray",iconColor:i="inverse",iconSize:t,privacy:l,size:s=20}){let o=(0,r.ZP)();return(0,n.jsx)(a.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:s,justifyContent:"center",rounding:"circle",width:s,children:(0,n.jsx)(a.JO,{accessibilityLabel:o._('Secret board icon', 'Icon indicating that a board is secret', 'Icon indicating that a board is secret'),color:i,icon:"secret"===l?"lock":"security",size:t??s/2})})}},680902:(e,i,t)=>{t.d(i,{Z:()=>o}),t(167912);var a,r=t(986631),n=t(554786),l=t(149722);let s=void 0!==a?a:a=t(903225),o=e=>{let i=(0,n.HG)(),t=(0,l.Z)(),a=t?.isAuth??!1,o=(0,r.Z)(s,e);return e=>{if(i&&a)return o?.coverPin?.imageUrl??o?.coverImageSpec_222x?.url??(o?.image_170x||[])[0]?.url??"";let t=o?.imageCoverHdUrl||o?.imageCoverUrl;if(t)return t;let r=o?.coverImageSpec_400x300?.url??o?.coverImageSpec_222x?.url??o?.coverImageSpec_216x146?.url??"";return e&&e>2&&r?r:o?.imageCoverUrl||""}}},265326:(e,i,t)=>{t.d(i,{Bw:()=>s,Jx:()=>l,po:()=>a});let a=(e="")=>(e??"").substring((e??"").lastIndexOf("/")+1),r=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),n=e=>{if(!e)return()=>!0;let i=a(e);return e=>"string"==typeof e?a(e)!==i:a(e.url??"")!==i},l=(e,i,t)=>e?e.filter(n(t)):i?i.filter(n(t)).map(r):[],s=e=>(e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})??{x:0,y:0,width:0,height:0}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/83054-c57b6abdbc5eba3e.mjs.map