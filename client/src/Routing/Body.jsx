import InsideBody from "./InsideBody"
import Nested from "./Nested"


import { Outlet, useOutlet } from "react-router-dom"



const Body = () => {
let out = useOutlet()


    return (
    <div id='Body' style={{border: "solid red 2px"}}> 
         <p> Body comp </p> 


         { out ? <Outlet /> : <InsideBody />}

         
      
    </div>
  )
};

export default Body
