 
const Form = ({ handleChange, validCvc, validExp, validName, validNumber, handleData, data }) => {


    
    // const errorStyle = {
    //     border: "solid red 1px"

    // }


    return (
        <div id='Form'>

            <div className="form flex-col">

                <form>
                    <div>
                        <div style={{ paddingTop: "20px" }}>

                            <p>CARDHOLDER NAME</p>
                        </div>



                        <input 
                        // onKeyDown={(e) => validName(data.name) ? (null) : (style={{border: "solid red 10x"}})}

                        // onFocus={(e) => validName(data.name) ? style={{border: "solid red 1px"}} : null}

                        style={{ width: '200px' , border:  validName(data.name) || data.name === "" ? null : "red solid 1px"}}
                            required
                            value={data.name}
                            name="name"
                            placeholder="Full Name"
                            onChange={(e) => handleChange(e)}
                        >
                        </input>

                        <div className="credit-error">

                            {validName(data.name) || data.name === "" ? null : <p className="red">Please enter a proper name</p>}
                        </div>

                    </div>

                    <p>CARD NUMBER</p>
                    <input
                        style={{ width: '200px' , border:  validNumber(data.credit) || data.credit === "" ? null : "red solid 1px" }}
                        required
                        value={data.credit}
                        placeholder="Card Number"
                        name="credit"
                        onChange={(e) => handleChange(e)}
                    >
                    </input>
                    <div className="credit-error">
                        {validNumber(data.credit) || data.credit === "" ? null : <p className="red">Please enter a proper card</p>}

                    </div>

                    <div>

                        <p>EXP. DATE (MM/YY)</p>

                        <input style={{ width: '50px', marginRight: "8px" , border:  validExp(data.expMonth) || data.expMonth === "" ? null : "red solid 1px"}}
                            required
                            value={data.expMonth}
                            placeholder="MM"
                            name="expMonth"
                            onChange={(e) => handleChange(e)}
                        >
                        </input>

                        <input style={{ width: '50px', marginRight: "14px" , border:  validExp(data.expYear) || data.expYear === "" ? null : "red solid 1px" }}
                            required
                            value={data.expYear}
                            placeholder="YY"
                            name="expYear"
                            onChange={(e) => handleChange(e)}
                        >
                        </input>



                        <input style={{ width: '80px' , border:  validExp(data.cvc) || data.cvc === "" ? null : "red solid 1px" }}
                            required
                            value={data.cvc}
                            placeholder="e.g.123"
                            name="cvc"
                            onChange={(e) => handleChange(e)}
                        >
                        </input>



                        <div className="credit-error flex-row">

                            {validExp(data.expMonth, data.expYear) || data.expMonth === "" && data.expYear === "" ? null : <p className="red">Invalid date</p>}

                            <div
                                style={{ marginLeft: "50px" }}
                            >

                                {validCvc(data.cvc) || data.cvc === "" ? null : <p className="red">bad cVc</p>}
                            </div>

                        </div>
                    </div>

                    <br />

                    <button

                        className="card-submit"
                        disabled={!validName(data.name) || !validNumber(data.credit) || !validExp(data.expMonth, data.expYear) || !validCvc(data.cvc) ? true : false}
                        onClick={(e) => handleData(e)}
                        style={{ width: "200px" }}
                        type="submit" >

                        Confirm</button>

                </form>

            </div>

        </div>
    )
};

export default Form
