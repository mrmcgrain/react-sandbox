import React, { useState } from 'react'
import "./style/credit.css"
import ThankYou from './ThankYou'
import frontCard from "./design/images/bg-card-front.png"
import backCard from "./design/images/bg-card-back.png"
import Form from "./Form"

const Credit = () => {

    const [data, setData] = useState({
        name: "",
        credit: "",
        expMonth: "",
        expYear: "",
        cvc: "",
        approved: false,
    })

    const handleData = (e) => {
        setData(prev => ({ ...prev, approved: true }))
        setData(prev => ({
            ...prev,
            cardNumber: data.credit.slice(0, 4) + " " + data.credit.slice(4, 8) + " " + data.credit.slice(8, 12) + " " + data.credit.slice(12, 16)
        }))
    }

    const handleChange = (e) => {

        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        

   

    }

    const validName = (input) => {
        if (input.length > 2 && input.length < 20) {
            return true
        } else {
            return false
        }
    }

    const validNumber = (input) => {
        let reg = /^\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/
        return reg.test(input)
    }

    const validExp = (month, year) => {
        if (month > 0 && month < 13 && year >= 23 && year < 50) {
            return true
        } else {
            return false
        }
    }

    const validCvc = (input) => {
        let reg = /^\d{3}$/
        return reg.test(input)
    }

    return (

        <div id='Credit'>
            <div className="flex-row">

                <div className="left ">

                    <div className="credit-frontCard">

                        <div className="credit-text">
                            <div>

                                {data.approved ? <p className="credit-number-txt">
                                    {data.cardNumber} </p> :

                                    <p className="credit-number-txt">
                                        9591 6489 6389 1001
                                    </p>
                                }
                            </div>

                            <div className="flex-row">

                                <div style={{ width: "160px" }}>


                                    {data.approved ? <p className="credit-name">
                                        <small>{data.name} </small></p> :

                                        <p className="credit-name">
                                            McGrain </p>
                                    }
                                </div>

                                <div style={{ justifySelf: "flex-end" }}>

                                    {data.approved ? <p className="credit-name"> {data.expMonth}/{data.expYear}</p> :

                                        <p>12/23</p>
                                    }
                                </div>
                            </div>
                        </div>

                        <img
                            style={{ width: "250px" }}
                            src={frontCard} />
                    </div>

                    <div className="credit-backCard">

                        <img
                            style={{ width: "250px" }}
                            src={backCard} />

                        <div>

                            {data.approved ? <p className="credit-name lower-card"><small>{data.cvc}</small></p>
                                :
                                <p className="credit-name lower-card">
                                    <small>420</small>
                                </p>
                            }

                        </div>
                    </div>
                </div>


                <div className="right">

                    {data.approved ? <ThankYou /> :
                     
                     <Form data={data}
                            handleChange={handleChange}
                            validCvc={validCvc}
                            validExp={validExp}
                            validName={validName}
                            validNumber={validNumber}
                            handleData={handleData}

                        />
                    }


                </div>

            </div>


        </div>
    )
};

export default Credit
