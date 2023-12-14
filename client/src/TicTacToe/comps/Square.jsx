import { useState} from  "react"

export default function Square( {value, onSquareClick }) {


    // const [ value, setValue ] = useState(null)


// function handleClick() {
//     console.log("clicked")
//     setValue("X")

// }



    return (
<div>
        {/* <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button> */}

     <div className="square"
        onClick={onSquareClick}
        >
       {value}
     </div>

</div>

    )
}