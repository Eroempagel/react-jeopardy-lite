function JeopardyDisplay(props) {
  return (
    <div>
      <h4>Question: {props.question}</h4>
      <h4>Category: {props.categoryTitle}</h4>
      <h4>Point Value: {props.value}</h4>
      <h4>User Score: {props.score}</h4>
      <form onSubmit={props.updateScore}>
        <label>Enter Answer</label>
        <input
          type="text"
          name=""
          value={props.answer}
          onChange={props.handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default JeopardyDisplay;
