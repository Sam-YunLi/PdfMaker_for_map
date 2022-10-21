var g=Object.defineProperty;var r=(o,l)=>g(o,"name",{value:l,configurable:!0});import{j as a}from"./jsx-runtime.468c6e75.js";import{p as n}from"./index.bd9168c1.js";/* empty css              */import"./iframe.e60616c0.js";const t=r(({text:o,bgColor:l,fColor:c,alignment:s,fSize:d,...h})=>a("div",{className:["footer",`footer-${s}`,`footer-${d}`].join(" "),style:{backgroundColor:`${l}`,color:`${c}`},children:o}),"Footer");t.propTypes={text:n.exports.string.isRequired,bgColor:n.exports.string,fColor:n.exports.string,alignment:n.exports.oneOf(["left","right","center"]),fSize:n.exports.oneOf(["small","medium","large"])};t.defaultProps={bgColor:"#1c76d2",fColor:"white",alignment:"center",fSize:"medium",text:"Copyright \xA9 : Back2dev "};const i=t;t.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{bgColor:{defaultValue:{value:'"#1c76d2"',computed:!1},type:{name:"string"},required:!1,description:""},fColor:{defaultValue:{value:'"white"',computed:!1},type:{name:"string"},required:!1,description:""},alignment:{defaultValue:{value:'"center"',computed:!1},type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1},{value:'"center"',computed:!1}]},required:!1,description:""},fSize:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""},text:{defaultValue:{value:'"Copyright \xA9 : Back2dev "',computed:!1},type:{name:"string"},required:!1,description:""}}};const F={parameters:{storySource:{source:`import React from "react";
import Footer from "./footer";
import '../components/code-editor/index.css';

export default {
  title: "pdmake/Footer",
  component: Footer,
  argTypes: {
    bgColor: { control: "color" },
    fColor: { control: "color" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Right = Template.bind({});

Right.args = {
  alignment: "right",
};
export const Left = Template.bind({});

Left.args = {
  alignment: "left",
};

export const Center = Template.bind({});

Center.args = {
  alignment: "center",
};

export const Small = Template.bind({});

Small.args = {
  fSize: "small",
};

export const Medium = Template.bind({});

Medium.args = {
  fSize: "medium",
};

export const Large = Template.bind({});

Large.args = {
  fSize: "large",
};

export const BgGrey = Template.bind({});

BgGrey.args = {
  bgColor: "grey",
};

export const BgBlue = Template.bind({});

BgBlue.args = {
  bgColor: "#1c76d2",
};

export const BgWhite = Template.bind({});

BgWhite.args = {
  fColor: "black",
  bgColor: "white",
};

export const BgBlack = Template.bind({});

BgBlack.args = {
  bgColor: "black",
};
`,locationsMap:{right:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},left:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},center:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},small:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},medium:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},large:{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"bg-grey":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"bg-blue":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"bg-white":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"bg-black":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}}},title:"pdmake/Footer",component:i,argTypes:{bgColor:{control:"color"},fColor:{control:"color"}}},e=r(o=>a(i,{...o}),"Template"),m=e.bind({});m.args={alignment:"right"};const p=e.bind({});p.args={alignment:"left"};const u=e.bind({});u.args={alignment:"center"};const f=e.bind({});f.args={fSize:"small"};const B=e.bind({});B.args={fSize:"medium"};const b=e.bind({});b.args={fSize:"large"};const y=e.bind({});y.args={bgColor:"grey"};const L=e.bind({});L.args={bgColor:"#1c76d2"};const C=e.bind({});C.args={fColor:"black",bgColor:"white"};const x=e.bind({});x.args={bgColor:"black"};const q=["Right","Left","Center","Small","Medium","Large","BgGrey","BgBlue","BgWhite","BgBlack"];export{x as BgBlack,L as BgBlue,y as BgGrey,C as BgWhite,u as Center,b as Large,p as Left,B as Medium,m as Right,f as Small,q as __namedExportsOrder,F as default};
//# sourceMappingURL=footer.stories.6a4a5d32.js.map
