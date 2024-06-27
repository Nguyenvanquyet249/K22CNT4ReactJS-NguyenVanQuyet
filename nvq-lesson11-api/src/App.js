
import './App.css';
import nvqListUser from './components/nvqListUser';
import axios from './api/nvqApi'
import { useEffect, useState } from 'react';

function App() {
  const [nvqListUser,setnvqListUser] = useState([]);

  const nvqGetAllUser = async () => {
    const nvqResponse = await axios.get("nvqUsers");
    console.log("Api Data:",nvqResponse.data);
    setnvqListUser(nvqResponse.data)
  } 

  useEffect(()=>{
    nvqGetAllUser();
    console.log("State Data:",nvqListUser);
  })
  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApis</h1>
      <hr/>
      <nvqListUser rendernvqListUser = {nvqListUser} />
    </div>
  );
}

export default App;

