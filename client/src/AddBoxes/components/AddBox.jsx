// import React, {useState} from "react"
// import Display from "./Display"



export default function AddBox(){


// const [size, setSize] = useState({})
// const [color, setColor] = useState({})

const [ map, setMap ] = useState([])

const [ color, setColor ] = useState("")

const [ input, setInput ] = useState(0)
//     width: 0,
//     height: 0,
//     color: null
// })

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setMap(prev => ({
        ...prev,
        [{size: parseInt(e.target.value)}]
       
    }))
}

const handleChange = (e) => {
    console.log("change hit")

    setInput(prev => ({
        ...prev,
        [e.target.id]: parseInt(e.target.value)
       
    }))
   
}

let width = input.size


    return (

        
        
        <div>
        {console.log("size", map)}
   
<form  >

<div>
    <label htmlFor="size" ></label>
    {/* <input type="text" id="size" placeholder="size" onChange={(e) => handleChange(e)} /> */}
    <input type="text" id="size" placeholder="size" onChange={(e) => handleChange(e)} />
</div>

<div>
    <label htmlFor="color" ></label>
    <input type="text" placeholder="color" id="color" onChange={(e) => handleChange(e)} />
</div>

<button type="submit" onClick={(e) => handleSubmit(e)}>Add</button>

</form>


   {/* <Display size={input}/> */}



   <div className="border">



{/* <p> test </p> */}
<div className="box" style={{ width: "400px", height: "400px"}}>

<div  style={{ color: {color}, width: {width}, height: {width}}}>

</div>




</div>


        </div>



        </div>




    )
}