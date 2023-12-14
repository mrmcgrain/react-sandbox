import React, { useState } from 'react'

const PassCode = () => {

    let code = "1234"

    const [data, setData] = useState({

        passcode: "",
        input: "",
        output: "",
        color: "white   "

    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (data.input === code) {
            console.log("YES")
            setData(prev => ({
                ...prev,
                color: "green"
            }))

        } else {
            console.log("No")
            setData(prev => ({
                ...prev,
                color: "red"
            }))
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log("clicked", e.target.value, e.target.name)
        setData(prev => ({
            ...prev,
            output: prev.output + e.target.name,
            input: prev.input + e.target.value
        }))
    }

    return (
        <>
            <div className="passcode-flex">
                <div id='PassCode' style={{ backgroundColor: "black" }} className="passcode-grid">
                    {console.log("data", data)}
                    {/* <p> </p> */}

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, [], 0, []].map((item, i) =>
                        <button
                            className="passcode-btn"
                            value={item}
                            onClick={(e) => handleClick(e)}
                            name="*"

                        >{item}
                        </button>)}

                    <br />

                    <button
                        value="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
        </button>

                    <div></div>
                    <div></div>

                    <p style={{ color: data.color, textAlign: "center", fontSize: "24px" }}>{data.output} </p>

                </div>

            </div>
        </>
    )
};


export default PassCode
