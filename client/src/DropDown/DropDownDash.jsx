import React, { useState } from 'react'
import data from "./data/states.json"
import States from "./States"

const DropDownDash = () => {

    const [color, setColor] = useState(data)
    const [selected, setSelected] = useState([])
    const [render, setRender] = useState("")
    const [display, setDisplay] = useState("")

    const handleRender = (e) => {
        if (render) {
            setRender("")
        } else {
            setRender("states")
        }
    }

    const handleClick = (e, id) => {

        console.log("handleCllick", id)

        if (!selected.includes(e.target.name)) {

            setSelected(prev => ([
                ...prev.concat([e.target.name])
            ]))

        } else {

            setSelected(selected.filter(item => item !== e.target.name))
        }
    }

    return (

        <div id='DropDownDash' >

            {console.log("selected", selected.length, selected)}

            <div className="drop-flex">
                <p
                    onClick={handleRender}
                >
                    You have {selected.length} selected
                </p>

            </div>
            <br />

            <div className="drop-grid">

                {render && <States
                    display={display}
                    selected={selected}
                    data={data} handleClick={handleClick} />}

            </div>

        </div>
    )
};

export default DropDownDash

