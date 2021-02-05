import { Component } from "react";
import JeopardyService from "../../jeopardyService";

class MyJeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);

    this.client = new JeopardyService();
    this.state = {
      data: [],
      score: 0,
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data,
        //data: result.data[0],
      });
    });
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    let jeopardy = <div>No data found</div>;

    if (this.state.data) {
      jeopardy = this.state.data.map((value) => {
        const capitalizeFirstLetter = (
          [first, ...rest],
          locale = navigator.language
        ) => first.toLocaleUpperCase(locale) + rest.join("");
        let category = value.category.title;
        let dispCategory = capitalizeFirstLetter(category);
        return (
          <div key={value.id}>
            <div>Category = {dispCategory}</div>
            <div>Question = {value.question}.</div>
            <div>Point Value = {value.value}.</div>
            <div>Answer = What is {value.answer}?</div>
          </div>
        );
      });
    }

    // let category = this.state.data.category && this.state.data.category.title;

    // if (this.state.data) {
    //   category = this.state.data.map(() => []);
    // }
    return <div>{jeopardy}</div>;
    //return <div>{JSON.stringify(this.state.data)}</div>;
  }
}

export default MyJeopardy;
