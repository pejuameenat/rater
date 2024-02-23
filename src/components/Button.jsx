
function Button(props) {
  console.log(props)
  const styles = {
    backgroundColor: props.on? '#fb7413' : '',
  }
  return (
    <button
      className="item"
      style={styles}
      aria-label={props.on ? 'unmark as rated' : 'mark rated'}
      aria-pressed={props.on}
      onClick={()=>props.handleClick(props.id)}
    >
      {props.id}
    </button>
  )
}

export default Button
