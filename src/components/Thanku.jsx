import React from "react";

function addClass() {
  document.getElementById("card").classList.add("hide");
  window.location.reload();
}


function ThankYou(props) {
  return (
    <div className="card hide" id="card">
      <span onClick={addClass}>{props.cancel}</span>
      <img src={props.img} alt="customer" className="full-width" />
      <h4 className="rater">{props.rating}</h4>
      <h2 className="center">{props.head}</h2>
      <p className="center">{props.message}</p>
    </div>
  );
}

export default ThankYou;
