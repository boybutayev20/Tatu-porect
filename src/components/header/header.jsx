import React from "react";
import "./header.css"
import logo from "./photos/logo.jpeg";




const header = () => {
    return (
        <>
        <header className="header">
            <div className="header-container container">
                <div className="header-logo">
                    <img src="{logo}" alt="" />
                </div>
            </div>
        </header>
        </>
    )
}

module.exports(header)