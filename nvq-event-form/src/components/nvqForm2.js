import React, { Component } from 'react'

export default class nvqForm2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            course:"NVQ-HTML5"
        }
    }
    nvqhandleChange=(event)=>{
        this.setState({
            course:event.target.value
        })
    }
    nvqhandleSubmit=(event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.nvqhandleSubmit}>
            <label>Course</label>
            <select value={this.state.course}
                    onChange={this.nvqhandleChange}>
                <option value={"NVQ-HTML5"}>NVQ-HTML5</option>
                <option value={"NVQ-CSS#"}>NVQ-CSS3</option>
                <option value={"NVQ-JS"}>NVQ-JS</option>
                <option value={"NVQ-RJ"}>NVQ-RJ</option>
            </select>
            <input type='submit' value={Submit}/>
        </form>
      </div>
    )
  }
}
