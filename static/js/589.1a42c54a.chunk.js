"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[589],{21408:function(n,e,t){t.d(e,{r:function(){return s}});var r,i=t(72791),a=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function c(n,e){var t=n.title,c=n.titleId,s=d(n,a);return i.createElement("svg",o({width:18,height:18,viewBox:"0 0 18 18",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},s),t?i.createElement("title",{id:c},t):null,r||(r=i.createElement("path",{d:"M11.25 13.5L6.75 9L11.25 4.5",stroke:"current",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=i.forwardRef(c);t.p},72053:function(n,e,t){t.d(e,{r:function(){return s}});var r,i=t(72791),a=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function d(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function c(n,e){var t=n.title,c=n.titleId,s=d(n,a);return i.createElement("svg",o({width:18,height:18,viewBox:"0 0 18 18",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},s),t?i.createElement("title",{id:c},t):null,r||(r=i.createElement("path",{d:"M6.75 13.5L11.25 9L6.75 4.5",stroke:"current",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=i.forwardRef(c);t.p},78589:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r,i,a,o,d,c,s,l,p,f,x,h,u,g,m,y=t(29439),b=t(72791),w=t(59434),k=t(3216),_=t(58427),j=t(21048),v=t(24805),F=t(92553),Z=t(20601),M=t(21347),z=t(82839),O=t(90466),D=t(12891),P=t(17684),C=t(74400),I=t(80184),S=function(n){var e=n.normalizedDate,t="dark"===(0,w.v9)(j.P),r=(0,v.useMediaQuery)({query:"(max-width: 767px)"}),i=(0,k.default)(e,"yyyy-MM-dd",Date.now()),a=i.getUTCFullYear(),o=i.getUTCMonth()+1,d=(0,w.I0)();(0,b.useEffect)((function(){d((0,_.Ak)({month:o,year:a}))}),[d,o,a]);var c=(0,w.v9)(F.U),s=c.tasks.filter((function(n){return n.date===e})),l=c.tasks,p=s.filter((function(n){return"to-do"===n.category})).length,f=s.filter((function(n){return"in-progress"===n.category})).length,x=s.filter((function(n){return"done"===n.category})).length,h=l.filter((function(n){return"to-do"===n.category})).length,u=l.filter((function(n){return"in-progress"===n.category})).length,g=l.filter((function(n){return"done"===n.category})).length,m=p+f+x,y=h+u+g,S=[{name:"To Do",byDay:"".concat(Math.round(p/m*100)||0),byMonth:"".concat(Math.round(h/y*100)||0)},{name:"In Progress",byDay:"".concat(Math.round(f/m*100)||0),byMonth:"".concat(Math.round(u/y*100)||0)},{name:"Done",byDay:"".concat(Math.round(x/m*100)||0),byMonth:"".concat(Math.round(g/y*100)||0)}],B=function(n){var e=n.x,i=n.y,a=n.width,o=n.value;return(0,I.jsx)("text",{x:e+a/2,y:i,position:"top",fontFamily:"InterNormal, sans-serif",fontSize:r?"12":"14",fill:t?"#fff":"#343434",textAnchor:"middle",dy:-6,children:"".concat(o,"%")})};return(0,I.jsx)(Z.h,{children:(0,I.jsxs)(M.v,{data:S,margin:{top:45,right:10,left:10,bottom:10},barCategoryGap:75,barGap:10,barSize:27,children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("linearGradient",{id:"colorP",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0%",stopColor:"rgb(255, 210, 221)",stopOpacity:0}),(0,I.jsx)("stop",{offset:"100%",stopColor:"rgb(255, 210, 221)",stopOpacity:1})]})}),(0,I.jsx)("defs",{children:(0,I.jsxs)("linearGradient",{id:"colorB",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0%",stopColor:"rgb(62, 133, 243)",stopOpacity:0}),(0,I.jsx)("stop",{offset:"100%",stopColor:"rgb(62, 133, 243)",stopOpacity:1})]})}),(0,I.jsx)(z.q,{x:100,stroke:t?"#E3F3FF26":"#E3F3FF",vertical:!1}),(0,I.jsx)(O.K,{dataKey:"name",tickSize:0,tickMargin:16,axisLine:!1,fontFamily:"InterNormal, sans-serif",fontSize:r?"12":"14",stroke:t?"#fff":"#343434"}),(0,I.jsx)(D.B,{ticks:[0,20,40,60,80,100],position:"left",axisLine:!1,tickLine:!1,tickCount:6,tickMargin:20,fontFamily:"InterNormal, sans-serif",fontSize:"14",stroke:t?"#fff":"#343434",children:(0,I.jsx)(P._,{position:"top",dy:-28,fontFamily:"InterNormal, sans-serif",fontSize:"14",fill:t?"#fff":"#343434",children:"Tasks"})}),(0,I.jsx)(C.$,{name:"By Day",dataKey:"byDay",fill:"url(#colorP)",barSize:27,radius:10,minPointSize:10,label:B}),(0,I.jsx)(C.$,{name:"By Month",dataKey:"byMonth",fill:"url(#colorB)",barSize:27,radius:10,minPointSize:10,label:B})]})})},B=t(18185),E=t(30168),L=t(17691),N=L.ZP.section(r||(r=(0,E.Z)(["\n  width: 100%;\n\n  @media screen and (min-width: 375px) and (max-width: 768px) {\n    max-width: 335px;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    max-width: 704px;\n  }\n"]))),T=L.ZP.div(i||(i=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  column-gap: 40px;\n  width: 100%;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: 48px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),G=L.ZP.div(a||(a=(0,E.Z)(["\n  position: relative;\n\n  @media screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]))),K=L.ZP.div(o||(o=(0,E.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),U=L.ZP.span(d||(d=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: 'InterRegular', sans-serif;\n  font-size: 14px;\n  color: ",";\n  line-height: 1.3;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"])),(function(n){return n.theme.periodColor})),H=L.ZP.div(c||(c=(0,E.Z)(["\n  position: relative;\n  margin-top: auto;\n  width: 100%;\n  border-radius: 20px;\n  border: ",";\n  padding: 40px 14px;\n  height: 413px;\n\n  @media screen and (min-width: 768px) {\n    height: 424px;\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 440px;\n    padding: 40px;\n  }\n"])),(function(n){return n.theme.statisticsBorder})),R=t(91951),W=(t(68639),t(59513)),q=t.n(W),A=L.ZP.button(s||(s=(0,E.Z)(["\n  position: absolute;\n  cursor: pointer;\n  width: 150px;\n  height: 35px;\n  top: -50px;\n  border: none;\n  background-color: transparent;\n"]))),J=(0,L.ZP)(q())(l||(l=(0,E.Z)(["\n  margin-top: 8px;\n   height: 30px;\n  margin-bottom: 18px;\n  padding: 14px 18px;\n    border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n  outline: none;\n  }\n\n  @media screen and (min-width: 375px) {\n    width: 138px;\n\n  }\n  @media screen and (min-width: 768px) {\n    width: 150px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 24px;\n    width: 150px;\n    \n  }\n  "]))),$=L.ZP.div(p||(p=(0,E.Z)(["\n  .react-datepicker {\n    * {\n      margin: 0;\n      padding: 0;\n    }\n\n        background-color: inherit;\n    font-family: 'Inter', sans-serif;\n    font-size: 18px;\n    line-height: 24px;\n    border: none;\n    text-align: center;\n\n    &__year-dropdown {\n      background-color: #ffffff;\n    }\n\n    &__year-option--selected_year {\n      color: #3e85f3;\n    }\n\n    &__year-read-view--selected-year {\n      color: #fff;\n    }\n\n    &-wrapper:hover & {\n      background-color: #ffffff;\n      border-radius: 50%;\n    }\n    &_year-read-view--selected-year {\n      color: #ffff;\n    }\n    &-popper {\n      transform: translate(881.05px, 950.217px);\n      inset: 0px auto auto 50px;\n\n      .react-datepicker__triangle::before, .react-datepicker__triangle::after{\n        display: none\n      }\n\n    }\n\n    &__navigation-icon{\ntop: 9px;\n}\n\n  &__month-container {\n    padding: 15px 18px;\n    background-color: #3e85f3;\n    border-radius: 16px;\n    position: absolut;\n      width: 300px; \n\n   & .react-datepicker__header  {\n   background-color: #3e85f3;\n   color: #FFFFFF\n    width: 300px;\n        }\n        \n\n       & .react-datepicker__day-name,\n    & .react-datepicker__day {\n      width: 38px;\n      height: 38px;\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: 400;\n      font-size: 18px;\n      line-height: 1;\n      color: #ffffff;\n      border-radius: 50%;\n      \n      &--keyboard-selected {\n        border-radius: 50%;\n      }\n\n    &__navigation {\n      width: 18px;\n      height: 18px;\n      top: 24px;\n      \n\n      &--previous {\n        left: 18px;\n      }\n\n      &--next {\n        right: 18px;\n      }\n    }\n\n    &__header {\n       background-color: #3e85f3;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n      padding: 0;\n\n    }\n\n    &.__month-container {\n      padding: 15px 18px;\n      background-color: #3e85f3;\n      border-radius: 16px;\n\n      & .react-datepicker__day-name,\n      & .react-datepicker__day {\n        width: 48px;\n        height: 48px;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        font-weight: 400;\n        font-size: 18px;\n        line-height: 1;\n        color: #ffffff;\n\n        &--keyboard-selected,\n        &--selected {\n          background-color: #ffffff;\n          border-radius: 50%;\n          color: #3e85f3;\n        }\n      }\n\n      & .react-datepicker__day {\n        &.outside-month {\n          visibility: hidden;\n          pointer-events: none;\n        }\n        &.highlighted-weekend {\n          opacity: 0.35;\n        }\n\n        &:hover,\n        &:focus {\n          color: #3e85f3;\n          border-radius: 50%;\n                  }\n      }\n\n      &.react-datepicker__current-month {\n        font-weight: 600;\n        font-size: 24px;\n        line-height: 28px;\n       color: #FFFFFF\n            }\n    }\n\n    @media screen and (min-width: 768px) {\n      \n    }\n\n  }\n\n  @media screen and (min-width: 768px) {\n    .react-datepicker {\n      line-height: 1;\n\n      \n      &__month-container {\n        padding: 15px 18px;\n         \n\n        & .react-datepicker__day {\n          font-size: 18px;\n        }\n        & .react-datepicker__day-names {\n          margin: 0px;\n        }\n        & .react-datepicker__day-name {\n          width: 48px;\n          height: 48px;\n          margin: 0;\n        }\n\n        & .react-datepicker__day {\n          &.outside-month {\n            visibility: hidden;\n            pointer-events: none;\n          }\n          &.highlighted-weekend {\n            opacity: 0.35;\n          }\n          &:hover,\n          &:focus {\n            color: #3e85f3;\n            border-radius: 50%;\n          }\n        }\n\n        & .react-datepicker__current-month {\n          font-size: 20px;\n          color: #FFFFFF;\n                 }\n      }\n    }\n  }\n\n  @media screen and (max-width: 375px) {\n    .react-datepicker {\n      font-size: 14px;\n      line-height: 1;\n      \n\n      &__month-container {\n        padding: 0 0 20px 0;\n\n        .react-datepicker__week:not(:last-child) {\n          margin-bottom: 3px;\n        }\n\n        & .react-datepicker__day {\n          width: 32px;\n          height: 32px;\n          margin: 8px 6px;\n          font-size: 14px;\n\n          &--keyboard-selected,\n          &--selected {\n            background-color: #ffffff;\n            border-radius: 50%;\n            color: #3e85f3;\n          }\n          &__header {\n            height: 100px;\n            // background-color: #3e85f3;\n            border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n            padding: 0;\n            color: #FFFFFF\n          }\n        }\n        & .react-datepicker__day-names {\n          margin: 0px;\n                  }\n        & .react-datepicker__day-name {\n          width: 48px;\n          height: 42px;\n          margin: 0 -2px;\n          padding: 15px 19px;\n          color: #ffffff;\n          &::first-of-type {\n            margin-left: 3px;\n          }\n          &:last-child {\n            margin-right: 3px;\n          }\n        }\n\n        & .react-datepicker__day {\n          &.outside-month {\n            visibility: hidden;\n            pointer-events: none;\n          }\n          &.highlighted-weekend {\n            opacity: 0.35;\n          }\n          &:hover,\n          &:focus {\n            color: #3e85f3;\n            border-radius: 50%;\n          }\n        }\n\n        & .react-datepicker__current-month {\n          margin-top: 9px;\n          padding: 2px 0;\n          font-size: 20px;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n\n  .react-datepicker__current-month{\n    color: #ffffff;\n    text-align: center;\n    \n      }\n           }"]))),Q=function(n){var e=n.selectedDate,t=n.setDate;return(0,I.jsx)($,{children:(0,I.jsx)(J,{selected:new Date(e),onChange:function(n){var e=(0,R.default)(n,"yyyy-MM-dd");t(e)},customInput:(0,I.jsx)(A,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:function(n){return n.substr(0,1)},fixedHeight:!0})})},Y=t(4942),V=t(57689),X=t(60958),nn=t(98592),en=t(21408),tn=t(72053),rn=L.ZP.div(f||(f=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (min-width: 768px) {\n    justify-content: flex-start;\n    gap: 8px;\n  }\n"]))),an=L.ZP.ul(x||(x=(0,E.Z)(["\n  display: flex;\n"]))),on=L.ZP.li(h||(h=(0,E.Z)(["\n  display: flex;\n  height: 30px;\n  @media (min-width: 768px) {\n    height: 36px;\n  }\n"]))),dn=L.ZP.button(u||(u=(0,E.Z)(["\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  background-color: ",";\n  &:disabled {\n    background-color: ",";\n\n    & svg {\n      stroke: #dce3e5;\n    }\n  }\n\n  &.subtraction {\n    border-radius: 8px 0 0 8px;\n  }\n\n  &.addition {\n    border-radius: 0 8px 8px 0;\n  }\n\n  & svg {\n    fill: transparent;\n    stroke: ",";\n  }\n  @media (min-width: 768px) {\n    width: 38px;\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.CalendarHead})),cn=L.ZP.p(g||(g=(0,E.Z)(["\n  display: inline-block;\n  font-family: Inter, sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n\n  padding: 6px 12px;\n  border-radius: 8px;\n\n  background-color: ",";\n  color: ",";\n\n  text-transform: uppercase;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 16px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.buttontextColor})),sn=function(n){var e=n.type,t=n.normalizedDate,r=n.setDate,i=(0,V.s0)(),a=(0,V.TH)().pathname,o=(0,k.default)(t,"yyyy-MM-dd",Date.now()),d=function(n){var t="".concat(e,"s"),d="addition"===n.currentTarget.name?(0,X.Z)(o,(0,Y.Z)({},t,1)):(0,nn.Z)(o,(0,Y.Z)({},t,1)),c=(0,R.default)(d,"yyyy-MM-dd");r(c),a.includes("/calendar/")&&i("".concat(e,"/").concat(c))},c=(0,R.default)(o,"dd MMMM yyyy");return(0,I.jsxs)(rn,{children:[(0,I.jsx)(cn,{children:"month"===e?c.slice(3):c}),(0,I.jsxs)(an,{children:[(0,I.jsx)(on,{children:(0,I.jsx)(dn,{type:"button",name:"subtraction",className:"subtraction",onClick:d,children:(0,I.jsx)(en.r,{})})}),(0,I.jsx)(on,{children:(0,I.jsx)(dn,{type:"button",name:"addition",className:"addition",onClick:d,children:(0,I.jsx)(tn.r,{})})})]})]})},ln=function(){var n=(0,b.useState)((function(){return(0,R.default)(new Date,"yyyy-MM-dd")})),e=(0,y.Z)(n,2),t=e[0],r=e[1];return(0,I.jsxs)(N,{children:[(0,I.jsxs)(T,{children:[(0,I.jsxs)(G,{children:[(0,I.jsx)(sn,{type:"day",normalizedDate:t,setDate:r}),(0,I.jsx)(Q,{selectedDate:t,setDate:r})]}),(0,I.jsxs)(K,{children:[(0,I.jsxs)(U,{children:[(0,I.jsx)(B.rJz,{fill:"#FFD2DD",size:8})," By Day"]}),(0,I.jsxs)(U,{children:[(0,I.jsx)(B.rJz,{fill:"#3E85F3",size:8})," By Month"]})]})]}),(0,I.jsx)(H,{children:(0,I.jsx)(S,{normalizedDate:t})})]})},pn=L.ZP.div(m||(m=(0,E.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 16px;\n  background-color: ",";\n  width: 100%;\n  padding: 34px 14px 135px 14px;\n\n  @media screen and (min-width: 768px) {\n    padding: 132px 32px 224px 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: 134px 114px 104px 114px;\n  }\n"])),(function(n){return n.theme.mainBackgroundColor})),fn=function(){return(0,I.jsx)(pn,{children:(0,I.jsx)(ln,{})})}},92553:function(n,e,t){t.d(e,{U:function(){return r}});var r=function(n){return n.tasks}}}]);
//# sourceMappingURL=589.1a42c54a.chunk.js.map