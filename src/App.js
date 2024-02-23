import React, { useState } from 'react'
import star from '../src/assets/starfish.png'
import customer from '../src/assets/customer-review.png'
import ThankYou from './components/Thanku'
import myData from './data'
import Button from './components/Button'

function App() {
  const [data, setData] = useState(myData)
  const [rate, setRate] = useState(false)
  // const [count, setCount] = useState(0)

  function toggle(id) {
    //chaging the arr in state
    setData((prevData) => {
      //loop through the array and check if the item's id matches the id passed into the function
      return prevData.map((item) => {
        // if they match return new object with the on property flipped if not just return the object itself
        return item.id === id ? { ...item, on: !item.on } : item
      })
    })
  }
   
  return (
    <div className="container">
      <div className={rate?"card hide":"card"} id="rate-card">
        <img src={star} alt="starfish" className="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
        </p>
        <div className="buttons">
          {data.map((data) => (
            <Button
              key={data.id}
              id={data.id}
              on={data.on}
              handleClick={toggle}
            />
          ))}
        </div>
        <button id="submit" onClick={()=> setRate(true)}>
          Submit
        </button>
      </div>
      <ThankYou
        cancel="&times;"
        img={customer}
        rate={rate}
        rateCount={''}
        head="Thank you!"
        message="We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch! "
        setRate={setRate}
      />
    </div>
  )
}

export default App
