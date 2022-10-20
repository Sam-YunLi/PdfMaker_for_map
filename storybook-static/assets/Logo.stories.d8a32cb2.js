var a=Object.defineProperty;var r=(o,e)=>a(o,"name",{value:e,configurable:!0});import{j as n}from"./jsx-runtime.c8babd87.js";import"./iframe.c92dec21.js";const l=r(({color:o,backgroundColor:e,fontSize:t,text:s,...d})=>n("div",{className:"logo",style:e&&{backgroundColor:e},children:n("a",{href:"/",style:o&&{color:o},children:n("span",{style:t&&{fontSize:t},children:s})})}),"Logo"),c=l;l.__docgenInfo={description:"",methods:[],displayName:"Logo"};const y={parameters:{storySource:{source:`import React from "react";
import Logo from "./logo";
import "./logo.css";

export default {
  title: "pdmake/Logo",
  component: Logo,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    fontSize: {
      control: "select",
      options: ["1rem", "1.5rem", "2rem", "2.5rem", "3rem", "3.5rem"],
    },
  },
};

const Template = (args) => <Logo {...args} />;

export const LogoSizeAndColor = Template.bind({});
LogoSizeAndColor.args = {
  text: "Back2dev",
};
`,locationsMap:{"logo-size-and-color":{startLoc:{col:17,line:18},endLoc:{col:45,line:18},startBody:{col:17,line:18},endBody:{col:45,line:18}}}}},title:"pdmake/Logo",component:c,argTypes:{color:{control:"color"},backgroundColor:{control:"color"},fontSize:{control:"select",options:["1rem","1.5rem","2rem","2.5rem","3rem","3.5rem"]}}},m=r(o=>n(c,{...o}),"Template"),i=m.bind({});i.args={text:"Back2dev"};const f=["LogoSizeAndColor"];export{i as LogoSizeAndColor,f as __namedExportsOrder,y as default};
//# sourceMappingURL=Logo.stories.d8a32cb2.js.map
