import Header from "../Navbar/Header";
import Footer from "../Navbar/Footer";
import React, {useEffect} from "react";

function Layout({children}){

    return(
        <div className="App">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default  Layout;