import React, { Component } from 'react'
import nvqForm1 from './components/nvqForm1';
import nvqForm2 from './components/nvqForm2';
import nvqForm3 from './components/nvqForm3';
 class App extends Component {
  nvqSumit=(param)=>{
    console.log("App:",param);
  }
  render() {
    return (
      <div>
          <h1>Controlled Component ReactJs Form</h1>
          <nvqForm1/>
          <nvqForm2/>
          <nvqForm3 onSubmit= {this.nvqSumit}/>


      </div>
    )
  }
}
export default App;