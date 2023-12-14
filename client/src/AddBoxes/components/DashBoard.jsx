import React, { useState } from 'react'
import Display from './Display'
import style from "./style/Dashboard.css"


export default function DashBoard() {


    const [data, setData] = useState({
        color: "",
        height: 0,
        width: 0,
        squares: []
    })


    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,

        }))

    }


    const handleSubmit = (e) => {
        setData(prev => ({
            ...prev, squares: [...prev.squares, data],
                // color: data.color,
                // height: data.height,
                // width: data.width
           
            color: "",
            width: "",
            height: ""

        }))

    }


    return (


        <div>
            {/* {console.log("data", data)} */}
        

                <p className="center" > Dynamically renders boxes based on color and W / H  inputs</p>
            <div id="inputs" >



                <input type="text" name="color" placeholder="color" onChange={(e) => handleChange(e)} />
                <input type="text" name="width" placeholder="height" onChange={(e) => handleChange(e)} />
                <input type="text" name="height" placeholder="width" onChange={(e) => handleChange(e)} />


                <button type="submit" onClick={(e) => handleSubmit(e)}>Add</button>
            </div>

            <div id="render">




                <Display data={data.squares} />

{/* 
{data.squares.map((item, i) => <div style={{ 
    color: {color}, 
width: {width},
 height: {height}
}
}
 )

// </div>

} */}

</div>

        </div>
    )
}