import React from "react";
import{ ReactDOM}  from "react-dom/client";



const heading = React.createElement("h1",{id:"heading", class:"h1"}, "Namste EveryOne");


const root= ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
