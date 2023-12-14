import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { setDefaultResultOrder } from 'dns/promises';


const Dictionary = () => {

    const [input, setInput] = useState("")
    const [dict, setDict] = useState("")
    const [result, setResult] = useState("")


    useEffect(() => {

    }, []);



    const handleChange = (e) => {

        setInput(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {

        axios({
            method: "GET",
            url: `http://localhost:8080/dict/${input}`
        })
            .then(res => {
                console.log('res', res)
                // setDict(res.data)
                if (res.data.error) {
                    setResult(res.data.data + " - " + res.data.error)
                    console.log(res.data.error)
                } else {
                    setResult(res.data.data)
                }

            })
            .catch(err => console.log('get error', err))
    }



    return (

        <div id='Dictionary' className="flex">
        <p> Need to know stuff?? try your luck with the input below </p>
            <input
                type="text"
                id="input"
                onChange={(e) => handleChange(e)}
            />
            <br />
            <button type="click" onClick={(e) => handleSubmit(e)}>Submit</button>
            <br />


            <p> {result} </p>

        </div>
    )
};

export default Dictionary
