import Header from './Header'
import Footer from './Footer'
import Body from "./Body"
import { Outlet, useOutlet } from 'react-router';
import React, {useState} from 'react'

// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'


const DashBoard = () => {
    let out = useOutlet()

const [data, setData] = useState({

username: "bob",
pass: "0"



})


const handleState =() => {
    setData(prev => ({
        ...prev,
        username: "dick"
    }))
}
 
  return (
    <div id='DashBoard' style={{border: "solid black 2px"}}> 

    {console.log("data", data, " data.username-", data.username)}
         <p> DashBoard  Parent of Header, Body, Footer, whom all render within him</p> 

         <Header />
         
         { out ? <Outlet /> : <Body />}
         
         <Footer />

      
    </div>
  )
};

export default DashBoard
