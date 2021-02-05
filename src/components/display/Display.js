import { Component } from "react";
import JeopardyService from "../../jeopardyService";

class Display extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);

    this.client = new JeopardyService();
    this.state = {
      data: [],
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data,
      });
    });
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    let display = <div>No data found</div>;

    if (this.state.data) {
      display = this.state.data.map((value) => {
        return <li key={value.id}>{value.question}</li>;
      });
    }
    return <div>{display}</div>;
  }
}

export default Display;
