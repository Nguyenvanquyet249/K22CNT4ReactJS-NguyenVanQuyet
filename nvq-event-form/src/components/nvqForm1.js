import React, { Component } from 'react'

class nvqForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Nguyen Van Quyet"
    }
  }

  //ham xu ly su kien khi thay doi du lieu tren text
  handleChange = (event) => {
    this.setState({
      studentName: event.target.value,

    })
  }
  //su kien submit form
  handleSubmit = (ev) => {
    console.log(ev);
    ev.preventDefault();
    alert(this.state.studentName)
  }
  render() {
    return (
      <div>
        <h2>Demo ReactJs Form-Text</h2>
        <form>
          <label>Student Name:</label>
          <input value={this.state.studentName}
            onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default nvqForm1;
