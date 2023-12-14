import React, { useState, useEffect } from "react"
import style from "../style/style.css"
import Home from "./Home"
import Feed from "./Feed"
import Profile from "./Profile"
import axios from 'axios'
// import Subscribe from "./Subscribe"

export default function TabDash() {


    const [view, setView] = useState("")
    const [active, setActive] = useState("Home")

    const [post, setPost] = useState(null)



    useEffect(() => {

        axios({
            method: "GET",
            url: 'http://localhost:8080/posts'
        })
            .then(res => {
                console.log('res', res)
                setPost(res.data)

            })
            .catch(err => console.log('get error', err))
    }, []);



    const handleClick = (e) => {
        e.preventDefault()
        console.log("Clicked", e.target.value)
        setView(e.target.value)
        setActive(e.target.value)
        // style={{color: "red"}/}
    }
    // let display = <`${view}` />

    let btn = {
        color: "red"
    }

    let homeV
    let profileV
    let feedV

    if (view === "Home") {
        homeV = btn
    }
    if (view === "Profile") {
        profileV = btn
    }

    if (view === "Feed") {
        feedV = btn
    }



    return (

        <div>
            {/* <p>tabdash</p> */}
            {console.log("view", active)}
            {console.log("posts", post)}

            <div id="header" className="tab-flex">

                <button value="Home" style={homeV} className="tab-btn" onClick={(e) => handleClick(e)}>Home</button>

                <button value="Feed" style={feedV} className="tab-btn" onClick={(e) => handleClick(e)}>Feed</button>

                <button value="Profile" style={profileV} className="tab-btn" onClick={(e) => handleClick(e)}>Profile</button>

            </div>

            <div id="view" className="tab-content tab-flex">


                {
                    view === "Feed" ? (<Feed post={post}/>) : view === 'Profile' ? (<Profile />) : <Home />
                }

                {/* {view === "Feed" && <Feed />}
                {view === "Profile" && <Profile />}
                {view === "Home" && <Home />} */}

            </div>






        </div>


    )

}