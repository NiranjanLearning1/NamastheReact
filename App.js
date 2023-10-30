import React, { Fragment } from "react";
import ReactDOM  from "react-dom/client";



const Title = ()=>(
<h1 id="title" key="h1" className="h1">Food Villa</h1>
);

const HeaderComponent = ()=> (
<div className="header">
    <Title/>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Contact us </li>
            <li>Cart </li>
        </ul>
    </div>
</div>
);

const Body=()=>{
    return (
    <h4>Body</h4>
    );
}

const Footer=()=>{
    return (
    <h4>Footer</h4>
    );
}

const AppLayout=()=>{
    return(
        <Fragment>
            <HeaderComponent/>
            <Body/>
            <Footer/>
        </Fragment>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
