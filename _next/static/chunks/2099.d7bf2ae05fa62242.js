"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2099],{14098:(e,t,r)=>{r.d(t,{o:()=>n});var o=r(43217),i=r(70799);let a=(0,o.BX)({isLegalCheckboxChecked:!1}),n={state:a,subscribe:e=>(0,o.B1)(a,()=>e(a)),subscribeKey:(e,t)=>(0,i.u$)(a,e,t),setIsLegalCheckboxChecked(e){a.isLegalCheckboxChecked=e}}},19284:(e,t,r)=>{var o=r(28312),i=r(745),a=r(97265),n=r(54166);let s=(0,o.AH)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,o.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};l.styles=[a.W5,s],c([(0,i.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,n.E)("wui-loading-thumbnail")],l)},21330:(e,t,r)=>{r(23499)},36698:(e,t,r)=>{r(89556)},48252:(e,t,r)=>{var o=r(28312),i=r(745),a=r(54166);let n=(0,o.AH)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var s=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,o.qy)`<slot></slot>`}};c.styles=[n],s([(0,i.MZ)()],c.prototype,"width",void 0),s([(0,i.MZ)()],c.prototype,"height",void 0),s([(0,i.MZ)()],c.prototype,"borderRadius",void 0),s([(0,i.MZ)()],c.prototype,"variant",void 0),c=s([(0,a.E)("wui-shimmer")],c)},58729:(e,t,r)=>{r.d(t,{C5:()=>a,Ky:()=>i,PG:()=>o});let o=/[.*+?^${}()|[\]\\]/gu,i=/[0-9,.]/u,a="https://reown.com"},75293:(e,t,r)=>{var o=r(28312),i=r(745),a=r(96641),n=r(52515);r(98160),r(22724),r(80674);let s=(0,o.AH)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var c=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let l=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,r=a.H.state.features?.legalCheckbox;return(e||t)&&!r?(0,o.qy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:(0,o.qy)`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=a.H.state;return e?(0,o.qy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=a.H.state;return e?(0,o.qy)`<a href=${e}>Privacy Policy</a>`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?(0,o.qy)`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:(0,o.qy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}};l.styles=[s],c([(0,i.wk)()],l.prototype,"remoteFeatures",void 0),l=c([(0,n.EM)("w3m-legal-footer")],l)},80674:(e,t,r)=>{var o=r(28312);r(23499),r(98750),r(43804);var i=r(58729),a=r(97265),n=r(54166);let s=(0,o.AH)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`,c=class extends o.WF{render(){return(0,o.qy)`
      <a
        data-testid="ux-branding-reown"
        href=${i.C5}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};c.styles=[a.W5,a.fD,s],c=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n}([(0,n.E)("wui-ux-by-reown")],c)},82786:(e,t,r)=>{var o=r(28312),i=r(745),a=r(51882);r(98750);var n=r(97265),s=r(54166);let c=(0,o.AH)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return(0,o.qy)`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[n.W5,n.fD,c],l([(0,i.MZ)()],u.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.MZ)()],u.prototype,"color",void 0),u=l([(0,s.E)("wui-link")],u)},97102:(e,t,r)=>{var o=r(28312),i=r(745),a=r(14098),n=r(96641),s=r(52515),c=r(51882),l=r(74236);r(23499);var u=r(97265),d=r(54166);let h=(0,o.AH)`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var p=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let b=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0}render(){return(0,o.qy)`
      <label>
        <input
          ${(0,l.K)(this.inputElementRef)}
          ?checked=${(0,c.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};b.styles=[u.W5,h],p([(0,i.MZ)({type:Boolean})],b.prototype,"checked",void 0),b=p([(0,d.E)("wui-checkbox")],b),r(22724);let g=(0,o.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var w=function(e,t,r,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(a<3?i(n):a>3?i(t,r,n):i(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};let f=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,r=n.H.state.features?.legalCheckbox;return(e||t)&&r?(0,o.qy)`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=n.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=n.H.state;return e?(0,o.qy)`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){a.o.setIsLegalCheckboxChecked(!this.checked)}};f.styles=[g],w([(0,i.wk)()],f.prototype,"checked",void 0),f=w([(0,s.EM)("w3m-legal-checkbox")],f)}}]);