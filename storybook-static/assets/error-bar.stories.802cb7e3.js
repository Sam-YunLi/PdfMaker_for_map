var t=Object.defineProperty;var o=(r,s)=>t(r,"name",{value:s,configurable:!0});import{a,j as i}from"./jsx-runtime.c8babd87.js";import{E as n,a as l}from"./error-bar.a80e5657.js";/* empty css              */import"./iframe.c92dec21.js";const u={parameters:{storySource:{source:`import React from "react";
import ErrorBar from "./error-bar";
import { EditorProvider } from "../provider";
import '../index.css'

export default {
  title: "pdmake/ErrorBar",
  component: ErrorBar,
};

const Template = (args) => {
  return (
    <EditorProvider {...args}>
      <ErrorBar />;
    </EditorProvider>
  )
}

export const ErrDisplay = Template.bind({});

ErrDisplay.args = {
  source: "Error message",
};

export const ErrDisplayNone = Template.bind({});

ErrDisplayNone.args = {
  source: "",
};
`,locationsMap:{"err-display":{startLoc:{col:17,line:11},endLoc:{col:1,line:17},startBody:{col:17,line:11},endBody:{col:1,line:17}},"err-display-none":{startLoc:{col:17,line:11},endLoc:{col:1,line:17},startBody:{col:17,line:11},endBody:{col:1,line:17}}}}},title:"pdmake/ErrorBar",component:n},e=o(r=>a(l,{...r,children:[i(n,{}),";"]}),"Template"),p=e.bind({});p.args={source:"Error message"};const c=e.bind({});c.args={source:""};const g=["ErrDisplay","ErrDisplayNone"];export{p as ErrDisplay,c as ErrDisplayNone,g as __namedExportsOrder,u as default};
//# sourceMappingURL=error-bar.stories.802cb7e3.js.map
