import React from "react"



export default function Display( {data} ) {


    return (

        <div className="border">

{/* // {console.log("p", data)} */}

{data.map((item, i) => ({...item, 
    height: item.height + "px",
     width: item.width + "px", 
     color: item.color})).map((obj, i) => {


return ( 

<div key={i} style={{ backgroundColor: obj.color, width: obj.width, height: obj.height}}> 

</div>

    )    
})}

        </div>



    )
}

