import React from "react";

function ThankYou(props) {
  return (
    <div className={props.rate? "card":"card hide"} id="card">
      <button type="button" aria-label="close" onClick={()=>props.setRate(false)}>{props.cancel}</button>
      <img src={props.img} alt="customer" className="full-width" />
      <h4 className="rater">{props.rateCount}/5</h4>
      <h2 className="center">{props.head}</h2>
      <p className="center">{props.message}</p>
    </div>
  )
}

export default ThankYou;
