var E=Object.defineProperty;var o=(e,d)=>E(e,"name",{value:d,configurable:!0});import{R as s,j as n}from"./jsx-runtime.c8babd87.js";const i=s.createContext("editor");function f(e,d){const{type:a,payload:r}=d;switch(a){case"setCode":return{...e,code:r,dirty:!0};case"setFilename":return{...e,filename:r};case"setDarkTheme":return{...e,darktheme:r};case"setEditor":return{...e,editor:r};case"setDirty":return{...e,dirty:r};case"setErr":return{...e,err:r};default:return e}}o(f,"editorReducer");const C=o(({children:e,source:d})=>{const[a,r]=s.useReducer(f,{code:d||'dd = {content: "Hello "}',filename:"New File",darktheme:!0,editor:!0,dirty:!1,err:d||""}),l=o(t=>{r({type:"setCode",payload:t})},"setCode"),y=o(t=>{r({type:"setFilename",payload:t})},"setFilename"),p=o(t=>{r({type:"setDarkTheme",payload:t})},"setDarkTheme"),u=o(t=>{r({type:"setEditor",payload:t})},"setEditor"),m=o(t=>{r({type:"setDirty",payload:t})},"setDirty"),h=o(t=>{r({type:"setErr",payload:t})},"setErr");return n(i.Provider,{value:{...a,setCode:l,setFilename:y,setEditor:u,setDarkTheme:p,setDirty:m,setErr:h},children:e})},"EditorProvider");C.__docgenInfo={description:"",methods:[],displayName:"EditorProvider"};const k={color:"red",backgroundColor:"blanchedalmond",paddingLeft:"2vw",height:"fit-content"},c=o(()=>{const{err:e}=s.useContext(i);return n("div",{"data-cy":"error-bar",style:e?k:{display:"none"},children:e})},"ErrorBar"),_=c;c.__docgenInfo={description:"",methods:[],displayName:"ErrorBar"};export{_ as E,C as a,i as b};
//# sourceMappingURL=error-bar.a80e5657.js.map
