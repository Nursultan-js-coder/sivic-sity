import Header from "../Navbar/Header";
import Footer from "../Navbar/Footer";
import React, {useEffect} from "react";
import HomeLandingPage from "../../pages/HomeLandingPage"

function Layout({children}){
    useEffect(()=>{
        console.log(children);
    })
    return(
        <div className="App">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default  Layout;