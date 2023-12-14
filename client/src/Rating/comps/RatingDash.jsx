

import React, { useState } from 'react'
import style from "./style/rating.css"

import star from "../assets/icon-star.svg"
import Thankyou from "./Thankyou"

export default function RatingDash() {

    const [rating, setRating] = useState("")



    const [active, setActive] = useState(false)


    //   /* Create an active/current "tab button" class */
    //   .tab button.active {
    //     background-color: #ccc;
    //   }

    const handleClick = (e) => {
        console.log("handleClick", e.target.value)
        setRating(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log("handlesubmit", e.target.value)
        setActive(true)
    }




    return (
        <>
            {console.log(rating)}
            {console.log("active", active)}


{!active ? (




    <div id="rating-body" className="style.flex">
    <div className="style.flex"
    >

        <div className="star">
            <img src={star} />
        </div>

        <div style={{ color: "white" }}>

            <p style={{ fontSize: "24px" }}>How did  we do</p>

        </div>

        <div style={{ color: "#868d97" }}>

            <p>Please let us know how we did with your support
            <br />request. All feedback is appreciated to help us
            <br />improve out offering!</p>

        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>



            <button
                style={{ backgroundColor: rating === "1" ? "#fc7613" : null ,
                color:rating === "1" ? "white" : null 
            }}
                // style={{ color: rating === "1" ? "#fc7613" : null }}
                className="rating-btn"
                onClick={(e) => handleClick(e)}
                value="1">

                1</button>

            <button
                style={{ backgroundColor: rating === "2" ? "#fc7613" : null   ,  color:rating === "2" ? "white" : null 
            }}
                className="rating-btn"
                onClick={(e) => handleClick(e)}
                value="2">
                2</button>

            <button
                style={{ backgroundColor: rating === "3" ? "#fc7613" : null ,  color:rating === "3" ? "white" : null 
            }}
                className="rating-btn"
                onClick={(e) => handleClick(e)}
                value="3">
                3</button>

            <button
                style={{ backgroundColor: rating === "4" ? "#fc7613" : null,  color:rating === "4" ? "white" : null 
            }}
                className="rating-btn"
                onClick={(e) => handleClick(e)}
                value="4">
                4</button>

            <button
                style={{ backgroundColor: rating === "5" ? "#fc7613" : null
                ,  color:rating === "5" ? "white" : null 
            }}
                className="rating-btn"
                onClick={(e) => handleClick(e)}
                value="5">
                5</button>





        </div>

        <div className="flex">

            <button className="flex submit" onClick={(e)=> handleSubmit(e)}

            >Submit</button>
        </div>


    </div>
</div>
) : 

(
    <Thankyou rating={rating} />



)}


        </>
    )


}