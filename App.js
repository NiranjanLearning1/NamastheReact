import React, { Fragment } from "react";
import ReactDOM  from "react-dom/client";



const Title = ()=>(
<h1 className="h1">Namaste React</h1>
);

const HeaderComponent = ()=> (<div>
    <Title/>
    <h1>Namste React Header Component</h1>
    <h2>Namste React Header 2 Component</h2>
</div>);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
