import check from "./design/images/icon-complete.svg"


const ThankYou = () => {


    return (
        <div id='ThankYou' className="flex-col flex-center">




            <img src={check} />
            <h2> ThankYou </h2>
            <p>We've added your card details</p>
            <button
            style={{width: "100px"}}
            className="card-submit">Continue</button>
        </div>
    )
};

export default ThankYou
