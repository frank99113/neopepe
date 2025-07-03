"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{745:(t,e,i)=>{i.d(e,{MZ:()=>n.M,wk:()=>a.w});var n=i(48630),a=i(14816)},7630:(t,e,i)=>{i.d(e,{Rt:()=>r,sO:()=>a});let{I:n}=i(77508).ge,a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},11886:(t,e,i)=>{i.d(e,{OA:()=>n,WL:()=>r,u$:()=>a});let n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},14816:(t,e,i)=>{i.d(e,{w:()=>a});var n=i(48630);function a(t){return(0,n.M)({...t,state:!0,attribute:!1})}},22724:(t,e,i)=>{i(98750)},23499:(t,e,i)=>{var n=i(28312),a=i(745),r=i(77508),o=i(7630),s=i(27543);class l{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class c{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var h=i(11886);let d=t=>!(0,o.sO)(t)&&"function"==typeof t.then;class w extends s.Kq{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new l(this),this._$CX=new c}render(...t){return t.find(t=>!d(t))??r.c0}update(t,e){let i=this._$Cbt,n=i.length;this._$Cbt=e;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let r=e[t];if(!d(r))return this._$Cwt=t,r;t<n&&r===i[t]||(this._$Cwt=0x3fffffff,n=0,Promise.resolve(r).then(async t=>{for(;o.get();)await o.get();let e=a.deref();if(void 0!==e){let i=e._$Cbt.indexOf(r);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return r.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}let g=(0,h.u$)(w);class p{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}let f=new p;var u=i(97265),v=i(54166);let y=(0,n.AH)`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var b=function(t,e,i,n){var a,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let m={add:async()=>(await i.e(1322).then(i.bind(i,21322))).addSvg,allWallets:async()=>(await i.e(3109).then(i.bind(i,93109))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5855).then(i.bind(i,95855))).arrowBottomCircleSvg,appStore:async()=>(await i.e(7666).then(i.bind(i,77666))).appStoreSvg,apple:async()=>(await i.e(6589).then(i.bind(i,6589))).appleSvg,arrowBottom:async()=>(await i.e(3768).then(i.bind(i,13768))).arrowBottomSvg,arrowLeft:async()=>(await i.e(610).then(i.bind(i,30610))).arrowLeftSvg,arrowRight:async()=>(await i.e(8755).then(i.bind(i,58755))).arrowRightSvg,arrowTop:async()=>(await i.e(6174).then(i.bind(i,96174))).arrowTopSvg,bank:async()=>(await i.e(7205).then(i.bind(i,97205))).bankSvg,browser:async()=>(await i.e(7149).then(i.bind(i,47149))).browserSvg,bin:async()=>(await i.e(1144).then(i.bind(i,51144))).binSvg,bitcoin:async()=>(await i.e(223).then(i.bind(i,20223))).bitcoinSvg,card:async()=>(await i.e(4189).then(i.bind(i,64189))).cardSvg,checkmark:async()=>(await i.e(9316).then(i.bind(i,99316))).checkmarkSvg,checkmarkBold:async()=>(await i.e(6520).then(i.bind(i,36520))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(3494).then(i.bind(i,93494))).chevronBottomSvg,chevronLeft:async()=>(await i.e(8360).then(i.bind(i,88360))).chevronLeftSvg,chevronRight:async()=>(await i.e(3241).then(i.bind(i,83241))).chevronRightSvg,chevronTop:async()=>(await i.e(9680).then(i.bind(i,19680))).chevronTopSvg,chromeStore:async()=>(await i.e(305).then(i.bind(i,40305))).chromeStoreSvg,clock:async()=>(await i.e(3039).then(i.bind(i,3039))).clockSvg,close:async()=>(await i.e(4825).then(i.bind(i,4825))).closeSvg,compass:async()=>(await i.e(4285).then(i.bind(i,94285))).compassSvg,coinPlaceholder:async()=>(await i.e(6051).then(i.bind(i,6051))).coinPlaceholderSvg,copy:async()=>(await i.e(5722).then(i.bind(i,45722))).copySvg,cursor:async()=>(await i.e(9949).then(i.bind(i,39949))).cursorSvg,cursorTransparent:async()=>(await i.e(2550).then(i.bind(i,62550))).cursorTransparentSvg,circle:async()=>(await i.e(7427).then(i.bind(i,67427))).circleSvg,desktop:async()=>(await i.e(5049).then(i.bind(i,75049))).desktopSvg,disconnect:async()=>(await i.e(8561).then(i.bind(i,78561))).disconnectSvg,discord:async()=>(await i.e(2317).then(i.bind(i,22317))).discordSvg,ethereum:async()=>(await i.e(1134).then(i.bind(i,1134))).ethereumSvg,etherscan:async()=>(await i.e(7388).then(i.bind(i,27388))).etherscanSvg,extension:async()=>(await i.e(1420).then(i.bind(i,11420))).extensionSvg,externalLink:async()=>(await i.e(9667).then(i.bind(i,69667))).externalLinkSvg,facebook:async()=>(await i.e(7867).then(i.bind(i,57867))).facebookSvg,farcaster:async()=>(await i.e(1712).then(i.bind(i,1712))).farcasterSvg,filters:async()=>(await i.e(4210).then(i.bind(i,74210))).filtersSvg,github:async()=>(await i.e(2228).then(i.bind(i,82228))).githubSvg,google:async()=>(await i.e(1696).then(i.bind(i,51696))).googleSvg,helpCircle:async()=>(await i.e(1795).then(i.bind(i,91795))).helpCircleSvg,image:async()=>(await i.e(6476).then(i.bind(i,56476))).imageSvg,id:async()=>(await i.e(5278).then(i.bind(i,35278))).idSvg,infoCircle:async()=>(await i.e(9346).then(i.bind(i,99346))).infoCircleSvg,lightbulb:async()=>(await i.e(4810).then(i.bind(i,84810))).lightbulbSvg,mail:async()=>(await i.e(7672).then(i.bind(i,47672))).mailSvg,mobile:async()=>(await i.e(8373).then(i.bind(i,48373))).mobileSvg,more:async()=>(await i.e(2145).then(i.bind(i,24526))).moreSvg,networkPlaceholder:async()=>(await i.e(9903).then(i.bind(i,39903))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(4766).then(i.bind(i,44766))).nftPlaceholderSvg,off:async()=>(await i.e(2476).then(i.bind(i,22476))).offSvg,playStore:async()=>(await i.e(6049).then(i.bind(i,66049))).playStoreSvg,plus:async()=>(await i.e(9671).then(i.bind(i,22052))).plusSvg,qrCode:async()=>(await i.e(9450).then(i.bind(i,9450))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(2647).then(i.bind(i,22647))).recycleHorizontalSvg,refresh:async()=>(await i.e(4138).then(i.bind(i,84138))).refreshSvg,search:async()=>(await i.e(1139).then(i.bind(i,31139))).searchSvg,send:async()=>(await i.e(3053).then(i.bind(i,83053))).sendSvg,swapHorizontal:async()=>(await i.e(8820).then(i.bind(i,28820))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(4427).then(i.bind(i,14427))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(5719).then(i.bind(i,5719))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(7466).then(i.bind(i,17466))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(9210).then(i.bind(i,99210))).swapVerticalSvg,solana:async()=>(await i.e(8971).then(i.bind(i,8971))).solanaSvg,telegram:async()=>(await i.e(7328).then(i.bind(i,27328))).telegramSvg,threeDots:async()=>(await i.e(8480).then(i.bind(i,38480))).threeDotsSvg,twitch:async()=>(await i.e(2828).then(i.bind(i,42828))).twitchSvg,twitter:async()=>(await i.e(1717).then(i.bind(i,11717))).xSvg,twitterIcon:async()=>(await i.e(9079).then(i.bind(i,59079))).twitterIconSvg,verify:async()=>(await i.e(5002).then(i.bind(i,15002))).verifySvg,verifyFilled:async()=>(await i.e(4161).then(i.bind(i,74161))).verifyFilledSvg,wallet:async()=>(await i.e(7250).then(i.bind(i,77250))).walletSvg,walletConnect:async()=>(await i.e(4420).then(i.bind(i,84420))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(4420).then(i.bind(i,84420))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(4420).then(i.bind(i,84420))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(1118).then(i.bind(i,1118))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7144).then(i.bind(i,97144))).warningCircleSvg,x:async()=>(await i.e(1717).then(i.bind(i,11717))).xSvg,info:async()=>(await i.e(551).then(i.bind(i,20551))).infoSvg,exclamationTriangle:async()=>(await i.e(4979).then(i.bind(i,74979))).exclamationTriangleSvg,reown:async()=>(await i.e(3126).then(i.bind(i,3126))).reownSvg,"x-mark":async()=>(await i.e(8973).then(i.bind(i,68973))).xMarkSvg};async function S(t){if(f.has(t))return f.get(t);let e=(m[t]??m.copy)();return f.set(t,e),e}let $=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
      --local-aspect-ratio: ${this.aspectRatio}
    `,(0,n.qy)`${g(S(this.name),(0,n.qy)`<div class="fallback"></div>`)}`}};$.styles=[u.W5,u.ck,y],b([(0,a.MZ)()],$.prototype,"size",void 0),b([(0,a.MZ)()],$.prototype,"name",void 0),b([(0,a.MZ)()],$.prototype,"color",void 0),b([(0,a.MZ)()],$.prototype,"aspectRatio",void 0),$=b([(0,v.E)("wui-icon")],$)},27543:(t,e,i)=>{i.d(e,{Kq:()=>d});var n=i(7630),a=i(11886);let r=(t,e)=>{let i=t._$AN;if(void 0===i)return!1;for(let t of i)t._$AO?.(e,!1),r(t,e);return!0},o=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(e)}};function l(t){void 0!==this._$AN?(o(this),this._$AM=t,s(this)):this._$AM=t}function c(t,e=!1,i=0){let n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)r(n[t],!1),o(n[t]);else null!=n&&(r(n,!1),o(n));else r(this,t)}let h=t=>{t.type==a.OA.CHILD&&(t._$AP??=c,t._$AQ??=l)};class d extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(r(this,t),o(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},43804:(t,e,i)=>{var n=i(28312),a=i(745),r=i(97265),o=i(59970),s=i(54166);let l=(0,n.AH)`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,n){var a,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let h=class extends n.WF{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&o.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&o.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&o.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&o.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&o.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&o.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&o.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&o.Z.getSpacingStyles(this.margin,3)};
    `,(0,n.qy)`<slot></slot>`}};h.styles=[r.W5,l],c([(0,a.MZ)()],h.prototype,"flexDirection",void 0),c([(0,a.MZ)()],h.prototype,"flexWrap",void 0),c([(0,a.MZ)()],h.prototype,"flexBasis",void 0),c([(0,a.MZ)()],h.prototype,"flexGrow",void 0),c([(0,a.MZ)()],h.prototype,"flexShrink",void 0),c([(0,a.MZ)()],h.prototype,"alignItems",void 0),c([(0,a.MZ)()],h.prototype,"justifyContent",void 0),c([(0,a.MZ)()],h.prototype,"columnGap",void 0),c([(0,a.MZ)()],h.prototype,"rowGap",void 0),c([(0,a.MZ)()],h.prototype,"gap",void 0),c([(0,a.MZ)()],h.prototype,"padding",void 0),c([(0,a.MZ)()],h.prototype,"margin",void 0),h=c([(0,s.E)("wui-flex")],h)},48630:(t,e,i)=>{i.d(e,{M:()=>o});var n=i(30572);let a={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},r=(t=a,e,i)=>{let{kind:n,metadata:r}=i,o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){let{name:n}=i;return{set(i){let a=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,a,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){let{name:n}=i;return function(i){let a=this[n];e.call(this,i),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+n)};function o(t){return(e,i)=>"object"==typeof i?r(t,e,i):((t,e,i)=>{let n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},51882:(t,e,i)=>{i.d(e,{J:()=>a});var n=i(77508);let a=t=>t??n.s6},58698:(t,e,i)=>{i.d(e,{H:()=>r});var n=i(77508),a=i(11886);let r=(0,a.u$)(class extends a.WL{constructor(t){if(super(t),t.type!==a.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.c0}})},98160:(t,e,i)=>{i(43804)},98750:(t,e,i)=>{var n=i(28312),a=i(745),r=i(58698),o=i(97265),s=i(54166);let l=(0,n.AH)`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var c=function(t,e,i,n){var a,r=arguments.length,o=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let h=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,(0,n.qy)`<slot class=${(0,r.H)(t)}></slot>`}};h.styles=[o.W5,l],c([(0,a.MZ)()],h.prototype,"variant",void 0),c([(0,a.MZ)()],h.prototype,"color",void 0),c([(0,a.MZ)()],h.prototype,"align",void 0),c([(0,a.MZ)()],h.prototype,"lineClamp",void 0),h=c([(0,s.E)("wui-text")],h)}}]);