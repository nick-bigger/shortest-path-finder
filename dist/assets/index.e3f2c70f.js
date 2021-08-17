var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=Math.pow,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,l)=>{for(var o in l||(l={}))n.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))r.call(l,o)&&a(e,o,l[o]);return e},c=(e,t,n)=>new Promise(((r,l)=>{var a=e=>{try{c(n.next(e))}catch(t){l(t)}},o=e=>{try{c(n.throw(e))}catch(t){l(t)}},c=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);c((n=n.apply(e,t)).next())}));import{M as i,n as s,R as u,I as d,a as m,b as p,C as x,B as y,G as f,F as E,c as h,u as g,r as w,t as v,d as b,D as C,A as k,e as S,S as T,H as M,f as j,T as O,g as A,h as F}from"./vendor.ee29cd77.js";i.setAppElement("#root");const I=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  row-gap: 20px;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`;function P({isOpen:e,setIsOpen:t}){return u.createElement(i,{isOpen:e,contentLabel:"Example Modal"},u.createElement(I,null,u.createElement("div",null,u.createElement(d,null),u.createElement("span",null," Entry")),u.createElement("div",null,u.createElement(m,null),u.createElement("span",null,"Exit")),u.createElement("div",null,u.createElement(p,null),u.createElement("span",null,"Wall")),u.createElement("div",null,u.createElement(x,null),u.createElement("span",null,"Clear")),u.createElement("div",null,u.createElement(y,null),u.createElement("span",null,"Search")),u.createElement("div",null,u.createElement(f,null),u.createElement("span",null,"Reset")),u.createElement("div",null,u.createElement(E,null),u.createElement("span",null,"Randomize")),u.createElement(h,{onClick:t,color:"primary",idleText:"Close"})))}const R=new Map([[0,"white"],[1,"red"],[2,"blue"],[3,"green"],[4,"lightgrey"],[5,"yellow"],[6,"grey"]]),N=Array.from(new Array(26),((e,t)=>String(t+5))),G=Array.from(new Array(21),((e,t)=>String(t+5))),$=s.div`
  width: 90%;
  margin: auto;
`,q=s.div`
  column-gap: 5%;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`,D=s.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`,L=s.label`
  display: flex;
  align-items: center;
  flex-grow: 1;
  column-gap: 10px;
  margin-bottom: 10px;

  & > div {
    flex: 1;
  }
`,z=e=>{const l=e,{value:a,dragging:c,index:i}=l,s=((e,l)=>{var a={};for(var o in e)n.call(e,o)&&l.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&t)for(var o of t(e))l.indexOf(o)<0&&r.call(e,o)&&(a[o]=e[o]);return a})(l,["value","dragging","index"]);return u.createElement(T,{prefixCls:"rc-slider-tooltip",overlay:a,visible:c,placement:"top",key:i},u.createElement(M,o({value:a},s)))};function B({rows:e,cols:t,resetGrid:n,setRows:r,setCols:l}){const[a,o]=u.useState(!1),[c,i]=g();return w.exports.useEffect((()=>{27*t>c-25&&(l(Math.floor((c-25)/27)),v.warning("Max screen dimension set",{toastId:1})),27*e>i-145&&(r(Math.floor((i-145)/27)),v.warning("Max screen dimension set",{toastId:1})),n()}),[e,t,c,i]),u.createElement($,null,u.createElement(q,null,u.createElement(L,null,"Rows",u.createElement(b,{min:5,max:35,value:e,onChange:r,handle:z})),u.createElement(L,null,"Columns",u.createElement(b,{min:5,max:70,value:t,onChange:l,handle:z}))),u.createElement(D,null,u.createElement(L,null,"Rows",u.createElement(C,{options:N,value:String(e),onChange:e=>r(+e.value),name:"rows"})),u.createElement(L,null,"Columns",u.createElement(C,{options:G,value:String(t),onChange:e=>l(+e.value)})),u.createElement(k,{onClick:()=>o(!0),className:S`
            color: blue;
            min-width: 1em;
          `}),u.createElement(P,{isOpen:a,setIsOpen:o})))}const _=s.div`
  border: 0.5px solid black;
  background-color: ${e=>R.get(e.clickType)};
  transition: background-color 0.5s;

  &:hover{
    box-shadow: 0 1px 10px 0 rgba(0,0,0,0.25);
  }
`;function U({i:e,j:t,clickType:n}){return u.createElement(_,{className:"box","data-i":e,"data-j":t,clickType:n})}const W=s.div`
  margin: auto;
  display: inline-grid;
  grid-template-rows: repeat(${e=>e.rows}, ${25}px);
  grid-template-columns: repeat(${e=>e.cols}, ${25}px);
  grid-column-gap: ${2}px;
  grid-row-gap: ${2}px;
`;function H({grid:e,setGridCell:t,clickType:n,isInProgress:r}){const l=w.exports.useRef(!1);function a(e){l.current&&e.target.classList.contains("box")&&t(+e.target.dataset.i,+e.target.dataset.j)}return u.createElement(W,{onMouseDown:function(e){r.current||(0!==n&&1!==n||(l.current=!0,a(e)),t(+e.target.dataset.i,+e.target.dataset.j))},onMouseUp:function(){l.current=!1},onMouseOver:a,onMouseLeave:function(){l.current=!1},rows:e.length,cols:e[0].length},e.map(((e,t)=>e.map(((e,n)=>u.createElement(U,{key:t+":"+n,i:t,j:n,clickType:e}))))))}function J(e){return Math.floor(Math.random()*e)}function K(e){return new Promise((t=>setTimeout(t,e)))}function Q(e,t,n,r,l,a){const o=[...e];n===a.x&&r===a.y||(o[n][r]=l),t(o)}function V(e,t,n,r,l){const a=[...e];n.forEach((e=>{e.x===l.x&&e.y===l.y||(a[e.x][e.y]=r)})),t(a)}function X(e,t,n){return Array.from(new Array(e),(()=>new Array(t).fill(n)))}function Y({text:e,type:t,handleClick:n,buttonsColorMap:r,isInProgress:l,selectedType:a}){return u.createElement(h,{onClick:()=>n(t),color:r.get(t),disabled:l.current,idleText:e,outline:a!==t})}const Z=new Map([[1,"red"],[2,"blue"],[3,"green"]]),ee=s.div`
  margin: 10px 0;
`,te=s.div`
  width: 90%;
  margin: auto;
  display: none;

  .web-icons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      padding: 6px 12px;
    }
  }
`,ne=s.div`
  display: flex;
  justify-content: center;

  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,re=s.div`
  margin-bottom: 10px;
  & > span {
    min-width: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1 1 0px;
  }
`;function le({rows:e,cols:t,entry:n,exit:r,setGrid:l,startSearch:a,clickType:c,setClickType:i,selectedAlgorithm:s,setAlgorithm:g,isInProgress:w,resetGrid:v}){function b(){w.current=!1;const[a,o,c]=function(e,t){const n=X(e,t,0);n.forEach((e=>{e.forEach(((t,n)=>{Math.random()<.25&&(e[n]=1)}))}));const r={x:J(e),y:J(t)},l={x:-1,y:-1};do{l.x=J(e),l.y=J(t)}while(l.x===r.x&&l.y===r.y);return n[r.x][r.y]=2,n[l.x][l.y]=3,[n,r,l]}(e,t);n.current=o,r.current=c,l(a)}const C=w.current,k={handleClick:i,buttonsColorMap:Z,isInProgress:w,selectedType:c},S={handleClick:g,buttonsColorMap:Z,isInProgress:w,selectedType:s};return u.createElement(ee,null,u.createElement(te,null,u.createElement(re,null,u.createElement(Y,o({text:"Entry",type:2},k)),u.createElement(Y,o({text:"Exit",type:3},k)),u.createElement(Y,o({text:"Wall",type:1},k)),u.createElement(Y,o({text:"Clear",type:0},k))),u.createElement(re,null,u.createElement(Y,o({text:"BFS",type:"bfs"},S)),u.createElement(Y,o({text:"A*",type:"a_star"},S))),u.createElement(re,null,u.createElement(h,{onClick:v,idleText:"Reset",outline:!0}),u.createElement(h,{onClick:b,idleText:"Random Maze",outline:!0}))),u.createElement(ee,null,u.createElement(te,null,u.createElement(re,{style:{justifyContent:"center"}},u.createElement(h,{onClick:a,disabled:C,idleText:"Search Path"})))),u.createElement(ee,null,u.createElement(ne,null,u.createElement(re,null,u.createElement(Y,o({text:u.createElement(d,null),type:2},k)),u.createElement(Y,o({text:u.createElement(m,null),type:3},k)),u.createElement(Y,o({text:u.createElement(p,null),type:1},k)),u.createElement(Y,o({text:u.createElement(x,null),type:0},k))),u.createElement(re,null,u.createElement(h,{onClick:v,idleText:u.createElement(f,null),outline:!0}),u.createElement(h,{onClick:b,idleText:u.createElement(E,null),outline:!0})))),u.createElement(ee,null,u.createElement(ne,null,u.createElement(re,{style:{paddingRight:"20px"}},u.createElement(Y,o({text:"BFS",type:"bfs"},S)),u.createElement(Y,o({text:"A*",type:"a_star"},S))),u.createElement(re,null,u.createElement(h,{onClick:a,disabled:C,idleText:u.createElement(y,null)})))))}const ae=s.div`
  margin: 10px 10px 30px 10px;
  border: 1px solid #ddd;
  padding: 20px;
  flex-grow: 1;
  width: 90%;

  @media (min-width: 1200px) {
    width: 60%;
  }
`;function oe({children:e}){return u.createElement(ae,null,e)}function ce(e,t){var n=[];for(let l of[{x:0,y:1},{x:-1,y:0},{x:1,y:0},{x:0,y:-1}]){var r={x:t.coords.x+l.x,y:t.coords.y+l.y};r.x>e.length-1||r.x<0||r.y>e.length[0]-1||r.y<0||1!=e[r.x][r.y]&&n.push(new ie(t,r))}return n}class ie{constructor(e,t){this.parent=e,this.coords=t,this.distanceFromEntryNode=0,this.estimatedDistanceFromExitNode=0,this.totalCost=0}isEqual(e){return this.coords.x==e.coords.x&&this.coords.y==e.coords.y}valueOf(){return this.totalCost}}class se{constructor(){this.hashSet={}}add(e){return!this.contains(e)&&(this.hashSet[e.coords.x+","+e.coords.y]=!0,!0)}contains(e){return!0===this.hashSet[e.coords.x+","+e.coords.y]}}function ue(e,t,n,r,a){return c(this,null,(function*(){const o=new ie(null,n),i=new ie(null,r);var s=[];j.heapify(s);var u=new se;j.heappush(s,o);let d=!1;e:for(;s.length>0;){var m=j.heappop(s);if(u.add(m),Q(e,t,m.coords.x,m.coords.y,6,n),!a.current)break e;t:for(let r of ce(e,m))if(!u.contains(r)){if(r.isEqual(i)){d=!0;break e}r.distanceFromEntryNode=m.distanceFromEntryNode+1,r.estimatedDistanceFromExitNode=l(r.coords.x-i.coords.x,2)+l(r.coords.y-i.coords.y,2),r.totalCost=r.distanceFromEntryNode+r.estimatedDistanceFromExitNode;for(let e=0;e<s.length;e++)if(r.isEqual(s[e])){if(r.distanceFromEntryNode>=s[e].distanceFromEntryNode)continue t;s.splice(e,1,r),j.heapify(s)}j.heappush(s,r),Q(e,t,r.coords.x,r.coords.y,4,n)}yield K(100)}if(d&&a.current){v.success("Path found!!! 😃");const n=yield function(e,t,n,r,l){return c(this,null,(function*(){let a=0;if(e.isEqual(t))return a;for(;l.current&&!t.isEqual(e);)Q(n,r,t.coords.x,t.coords.y,5,e),yield K(100),t=t.parent,a+=1;return a}))}(o,m,e,t,a);a.current&&v("Shortest path length is "+(n+1))}else a.current&&v.warning("No path found!!! 😟")}))}function de(e,t,n,r,l){return c(this,null,(function*(){const a=e.length,o=e[0].length,i=X(a,o,!1),s=X(a,o,-1),u=[n];i[n.x][n.y]=!0;const d=function(e,t,n,r){const l=e.length,a=e[0].length;return function(o,c,i,s){i>=0&&s>=0&&i<l&&s<a&&(n[i][s]||1===e[i][s]||(r.push({x:i,y:s}),t[i][s]={x:o,y:c},n[i][s]=!0))}}(e,s,i,u);let m=!1;e:for(;u.length;){const a=u.length,o=[];for(let e=0;e<a;e++){const e=u.shift();if(e.x===r.x&&e.y===r.y){m=!0;break e}if(!l.current)break e;d(e.x,e.y,e.x+1,e.y),d(e.x,e.y,e.x-1,e.y),d(e.x,e.y,e.x,e.y+1),d(e.x,e.y,e.x,e.y-1),o.push({x:e.x,y:e.y})}V(e,t,o,4,n),yield K(200)}if(m&&l.current){v.success("Path found!!! 😃");const a=yield function(e,t,n,r,l,a){return c(this,null,(function*(){let o=t.x,c=t.y;[o,c]=[n[o][c].x,n[o][c].y];let i=0;if(e.x===o&&e.y===c)return i;do{Q(r,l,o,c,5,e),yield K(100),[o,c]=[n[o][c].x,n[o][c].y],i+=1}while(a.current&&(e.x!==o||e.y!==c));return i}))}(n,r,s,e,t,l);l.current&&v("Shortest path length is "+(a+1))}else l.current&&v.warning("No path found!!! 😟")}))}const me=s.h2`
  margin-top: 5px;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`,pe=s.main`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,xe=s(O)`
  opacity: 0;
  @media (min-width: 768px) {
    opacity: 1;
  }
`,ye=s(O)`
  opacity: 1;
  @media (min-width: 768px) {
    opacity: 0;
  }
`,fe=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;function Ee(e,t=-1,n=-1){e.current.x=t,e.current.y=n}function he(e,t,n){return e.current.x===t&&e.current.y===n}function ge(){const[e,t]=w.exports.useState(20),[n,r]=w.exports.useState(55),[l,a]=w.exports.useState(X(e,n)),[i,s]=w.exports.useState(1),[d,m]=w.exports.useState("bfs"),p=w.exports.useRef(!1),x=w.exports.useRef({x:-1,y:-1}),y=w.exports.useRef({x:-1,y:-1}),f={rows:e,cols:n,grid:l,clickType:i,selectedAlgorithm:d,setRows:t,setCols:r,setGrid:a,setClickType:s,setAlgorithm:m,isInProgress:p,entry:x,exit:y,resetGrid:function(){a(X(e,n)),Ee(x),Ee(y),p.current=!1},startSearch:function(){return c(this,null,(function*(){if(x.current.x<0||y.current.x<0)return v.error("Entry & Exit are mandatory",{toastId:0}),!1;switch(p.current=!0,d){case"bfs":yield de(l,a,x.current,y.current,p);break;case"a_star":yield ue(l,a,x.current,y.current,p);break;default:return v.error("Unrecognized Algorithm selected",{toastId:0}),!1}}))},setGridCell:function(e,t,n=i){const r=[...l];r[e][t]=n,(0===n||1===n)&&(he(x,e,t)?Ee(x):he(y,e,t)&&Ee(y));2===n&&(-1!==x.current.x&&(r[x.current.x][x.current.y]=0),Ee(x,e,t));3===n&&(-1!==y.current.x&&(r[y.current.x][y.current.y]=0),Ee(y,e,t));a(r)}};return u.createElement(u.Fragment,null,u.createElement(me,null,"Shortest Path Finder",u.createElement("a",{href:"https://github.com/sadanandpai/shortest-path-finder"},u.createElement(A,null))),u.createElement(pe,null,u.createElement(fe,null,u.createElement(oe,null,u.createElement(B,o({},f)),u.createElement(le,o({},f))),u.createElement(H,o({},f))),u.createElement(xe,{autoClose:3e3,pauseOnFocusLoss:!1,toastId:3}),u.createElement(ye,{position:"bottom-center",pauseOnFocusLoss:!1,autoClose:3e3,newestOnTop:!0})))}F.render(u.createElement(u.StrictMode,null,u.createElement(ge,null)),document.getElementById("root"));
