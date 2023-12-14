import React, { useState } from "react"

export default function Subscribe({ main = "Subscribe ", button = "Subscribe", content = "Sign up today!!" }) {


    const [data, setData] = useState({
        first: "",
        last: "",
        email: ""
    })


    const handleChange = (e) => {
        console.log("handlechange", data)
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,

        }))
    }


    return (

        <div style={{ backgroundColor: "aqua" }}>
            <div >

                <div>
                    {/* make updatable via props for fully reusable comp */}
                    <h1 style={{ textAlign: "center" }}>{main}</h1>
                </div>

                <form>
                    <div>
                        {/* make updatable via props for fully reusable comp    */}
                        <p style={{ textAlign: "center" }}>{content}</p>
                    </div>

                    <div style={{ margin: "20px" }}>


                        <input 
                        style={{ margin: "5px" }} 
                        type="text" 
                        placeholder="First Name" 
                        onChange={(e) => handleChange(e)} 
                        name="first" 
                        value={data.first}
                        ></input>

                        <input style={{ margin: "5px" }}  type="text" placeholder="Last Name" 
                        onChange={(e) => handleChange(e)} name="last" value={data.last}></input>

                        <input type="email" placeholder="Email" 
                        onChange={(e) => handleChange(e)} name="email" value={data.email}></input>

                    </div>

                    <div style={{ textAlign: "center" }}>

                        <button style={{ color: "white", backgroundColor: "maroon", border: "none", borderRadius: "30%", width: "30%" }}>{button}
                        </button>

                    </div>

                </form>


            </div>
        </div>



    )
}