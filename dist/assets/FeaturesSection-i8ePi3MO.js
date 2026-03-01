import{r as l,u as c,j as e}from"./index-DIyJUMld.js";import{m as i}from"./proxy-DhoSrh4O.js";import{M as d}from"./mail-Dh_yiqdi.js";import{c as t}from"./createLucideIcon-BFom5Tvk.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),g=[d,x,p,m,h,y],u="text-primary",v="bg-primary/10",f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},k={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.45}}},b={once:!0,margin:"0px"},j={once:!1,margin:"0px"},w=l.memo(()=>{const{t:a,language:s}=c();return e.jsx("section",{id:"features",className:"py-16 md:py-24 bg-background border-t border-border/30",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx(i.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:j,transition:{duration:.6},className:"text-center mb-16",children:e.jsxs("h2",{className:"font-display text-4xl md:text-5xl font-bold mb-4 text-foreground",children:[a.features.heading," ",e.jsx("span",{className:"text-primary",children:a.features.highlight})]})}),e.jsx(i.div,{variants:f,initial:"hidden",whileInView:"visible",viewport:b,className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12",children:a.features.items.map((r,o)=>{const n=g[o];return e.jsxs(i.div,{variants:k,className:"text-center group",children:[e.jsx("div",{className:`w-20 h-20 md:w-24 md:h-24 rounded-full ${v} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`,children:e.jsx(n,{className:`w-10 h-10 md:w-12 md:h-12 ${u} opacity-60`,strokeWidth:1.5})}),e.jsx("h3",{className:"font-display text-2xl md:text-2xl font-normal mb-3 text-foreground",children:r.title}),e.jsx("p",{className:"text-foreground/70 text-xl md:text-xl leading-relaxed max-w-xs mx-auto",children:r.description})]},`${s}-${o}`)})})]})},s)});w.displayName="FeaturesSection";export{w as default};
