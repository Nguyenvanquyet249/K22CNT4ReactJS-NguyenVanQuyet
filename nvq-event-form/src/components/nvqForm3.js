import React, { Component } from 'react'

export default class nvqForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "Nguyen Van Quyet",
            age: "20",
            course: "HTML5",
            gender: true
        }
    }
    nvqhandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    nvqhandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student Name:</label>
                        <input name='studentName'

                            value={this.state.studentName}
                            onChange={''} />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input name='age'
                            value={this.state.age}
                            onChange={this.nvqhandleChange} />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <div onChange={this.tvcHandleChange}>
                            <label>Gender:</label>
                            <input type='radio' id='rdNam' name='gender' value={true}
                                defaultChecked={this.state.gender === true} />
                            <label htmlFor='rdNam'>Nam</label>
                            <input type='radio' id='rdNu' name='gender' value={false}
                                defaultChecked={this.state.gender === false} />
                            <label htmlFor='rdNu'>Nữ</label>
                        </div>
                    </div>
                    <div>
                        <label>Course:</label>
                        <select name='course'
                            value={this.state.course}
                            onChange={this.nvqhandleChange}>
                            <option value={"NVQ-HTML5"}>NVQ-HTML5</option>
                            <option value={"NVQ-CSS#"}>NVQ-CSS3</option>
                            <option value={"NVQ-JS"}>NVQ-JS</option>
                            <option value={"NVQ-RJ"}>NVQ-RJ</option>
                        </select>
                    </div>
                    <button onClick={this.nvqhandleSubmit}>Submit</button>
                </form>

            </div>
        )
    }
}
