import React from 'react'

function Button(props) {
    console.log(props)
  return <button className="items">{props.id}</button>
}

export default Button