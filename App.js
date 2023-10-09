import React from "react";
import{ ReactDOM}  from "react-dom/client";

/*
***************************************Parcel features*************************************************
*
*HMR - Hot Module Replacement
*File Watchers - written in c++
*Bundling
*Minifying 
*Cleaning our code
*Dev and Production build
*Super fast build algorithm
*Image Optimization
*Caching While Development
*Compression
*Compatible with older versions of browsers
*Https on Dev
*Port number
*Consistent Hashing Algorithm
*Zero Config Bundler
*Transitive Dependencies
*
*
*/ 


const heading = React.createElement("h1",{id:"heading", class:"h1"}, "Namste EveryOne");


const root= ReactDom.createRoot(document.getElementById("root"));
root.render(heading);
