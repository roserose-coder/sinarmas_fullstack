import "./styles.css";
import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", kebalikan: "", range: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // var abcd = "abcdefghijklmnopqrstuvwxyz";
    // var ABCD = abcd.toUpperCase();
    var text = event.target.value;
    // if (text.includes(abcd)) {
    //   text = text.replace(text, "");
    // }
    // if (text.includes(ABCD)) {
    //   text = text.replace(text, "");
    // }
    text = text.replace(",", "");
    text = text.replace(".", "");
    this.setState({ value: text });
  }

  handleSubmit(event) {
    var numbers_string = this.state.value.split("");

    let first_numbers = numbers_string[0];
    let second_numbers = numbers_string[1];

    if (second_numbers == "0") {
      second_numbers = "";
    }
    let reversee = second_numbers.concat(first_numbers);
    this.setState({ kebalikan: reversee });

    let reversee_int = parseInt(reversee);
    let rangee = Math.abs(parseInt(this.state.value) - reversee_int);
    this.setState({ range: rangee });
    // var first_numbers = parseInt(numbers_string[0]);
    // var second_numbers = parseInt(numbers_string[1]);
    // this.setState({ range: Math.abs(second_numbers - first_numbers) });

    //ralert("A name was submitted: " + this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <div>Result :</div>
        If the number is {this.state.value} then the reverse is
        {this.state.kebalikan} and the difference is {this.state.range}
      </form>
    );
  }
}
export default NameForm;
// export default function App() {
//   function handleInput() {
//     //please put your logic here
//   }

//   return (
//     <div className="App">
//       <div>
//         Number: <input />
//         <button>Submit</button>
//       </div>
//       <div>Result: 0</div>
//     </div>
//   );
// }
