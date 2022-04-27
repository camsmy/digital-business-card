import React from "react"
import About from "./components/About"
import SocMed from "./components/SocMed"
import Info from "./components/Info"
import Interest from "./components/Interest"
export default function App(){
    return(
        <>
        <div className="container">
            <div className="MainContent">
                <Info/>
                <About/>
                <Interest/>
                <SocMed/>
            </div>
        </div>
        </>
    )
}
