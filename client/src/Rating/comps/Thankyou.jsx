
import React, { useState } from 'react'
import style from "./style/rating.css"
import logo from "../assets/logo.svg"

export default function Thankyou({ rating }) {

    return (
        <>
            {console.log("props-ratiung", rating)}


            <div id="rating-body" className="style.flex">
                <div className="style.flex"
                >

                    <div className="rating-flex rating-center">
                        <img src={logo} />
                        <br />
                    </div>

                    <div
                        className="flex rating-center rating-selected"

                        style={{ color: "#fb7713" }}>
                        <p><strong>
                           
                           You Seleced {rating} out of 5 stars 
                           </strong>  </p>
                    </div>

                    <div
                        className="rating-center"
                        style={{ color: "white" }}>
                        <h1>
                            Thank You!
        </h1>

                    </div>

                    <div
                        className="rating-center"

                        style={{ color: "#868d97" }}>

                        <p>We appreciate you taking the time to give a
            <br />rating. If you ever need more support, don't
            <br />hesitate to get in touch!</p>

                    </div>

                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>






                    </div>




                </div>
            </div>





        </>
    )


}