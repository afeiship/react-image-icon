var e=Object.defineProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,n,t)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;import{P as r,n as o,r as c,R as s,c as i,q as p,a as m}from"./vendor.96aca376.js";const u="react-image-icon";class d extends c.exports.Component{constructor(){super(...arguments),this.handleClick=()=>{console.log("click me!")}}render(){const e=this.props,{className:r,value:o,onChange:c}=e,p=((e,l)=>{var r={};for(var o in e)n.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))l.indexOf(o)<0&&t.call(e,o)&&(r[o]=e[o]);return r})(e,["className","value","onChange"]);return s.createElement("div",((e,r)=>{for(var o in r||(r={}))n.call(r,o)&&l(e,o,r[o]);if(a)for(var o of a(r))t.call(r,o)&&l(e,o,r[o]);return e})({"data-component":u,className:i(u,r)},p),s.createElement("p",null,s.createElement("button",{style:{padding:20,width:"100%"},onClick:this.handleClick,className:"icon-play"},"Enjoy coding.")))}}d.displayName=u,d.version="__VERSION__",d.propTypes={className:r.string,value:r.object,onChange:r.func},d.defaultProps={value:null,onChange:o};const v=p.div`
  width: 80%;
  margin: 30px auto 0;
`;var f=e=>s.createElement(v,null,s.createElement(d,null));m.render(s.createElement(s.StrictMode,null,s.createElement(f,null)),document.getElementById("root"));
