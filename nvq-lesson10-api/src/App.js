
import { useEffect, useState } from 'react';
import './App.css';
import nvqCategorylist from './components/nvqCategorylist';
import axios from './api/nvqApi';
import nvqCategoryform from './components/nvqCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [nvqCategories,setnvqCategories] = useState([]);

  const getCategories = async () => {
   try {
    const nvqCateRespose = await axios.get("nvqCategory");
    setnvqCategories(nvqCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("nvqCategories: ", nvqCategories);
  }, [])
  //Trạng thái form
  const [nvqCategoryIsForm, setnvqCategoryIsFrom] = useState(false);

  const nvqHandleAddNew = (param) =>{
    setnvqCategoryIsFrom(param);
  }

  const nvqHandleCategoryCloseForm = (param) => {
    setnvqCategoryIsFrom(param);
  }

  return (
    <div className="container border my-3">
      <h1>Nguyễn Văn Quyết - Call API</h1>

      <nvqCategorylist  rendernvqCategories = {nvqCategories}
                onAddNew={nvqHandleAddNew} />
      <hr/>
      {
        nvqCategoryIsForm ===true?<nvqCategoryform onCloseForm={nvqHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
