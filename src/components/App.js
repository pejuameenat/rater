import React from "react";
import ThankYou from "./Thanku";
import star from "../assets/starfish.png";
import customer from "../assets/customer-review.png";

function removeClass() {
  document.getElementById("card").classList.remove("hide");
  document.getElementById("rate-card").classList.add("hide");
}

function yourRating() {
  const buttons = document.querySelectorAll(".items");
  const raterText = document.querySelector(".rater");
  buttons.forEach(function (button, index) {
    button.addEventListener("click", function(e) {
      e.target.classList.toggle("active");
      console.log(e);
    });
    if (button.classList.contains("active")) {
      raterText.textContent = `You selected ${(index += 1)} out of 5`;
    }
  });
}

function App() {
  return (
    <div className="container">
      <div className="card" id="rate-card">
        <img src={star} alt="starfish" className="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
        </p>
        <div className="buttons">
          <button className="items" onClick={yourRating}>
            1
          </button>
          <button className="items" onClick={yourRating}>
            2
          </button>
          <button className="items" onClick={yourRating}>
            3
          </button>
          <button className="items" onClick={yourRating}>
            4
          </button>
          <button className="items" onClick={yourRating}>
            5
          </button>
        </div>
        <button id="submit" onClick={removeClass}>
          Submit
        </button>
      </div>
      <ThankYou
        cancel="&times;"
        img={customer}
        // rating={yourRating}
        head="Thank you!"
        message="We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch! "
      />
    </div>
  );
}

export default App;
