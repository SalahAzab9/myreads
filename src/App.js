import "./App.css";
import { useState, useEffect } from "react";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import * as BooksApi from "./BooksAPI";
import { Route , Routes } from "react-router-dom";

function App() {

  const [allbooks, setallbooks] = useState([]);

  const updatebookstate = (book, shielf) => {
     BooksApi.update(book, shielf);
     const allbooks2 = async () =>{
       const res = await BooksApi.getAll();
       setallbooks(res);
     }
     allbooks2();
  };


  useEffect(() =>{
    const getallbooks = async () =>{
      const res2 = await BooksApi.getAll();
      setallbooks(res2);
    };
    getallbooks();
    },[]);


    return (
      <Routes> 
        <Route exact path="/" element={<ListBooks  updatebookstate={updatebookstate} allbooks={allbooks}/>}/>
        <Route path="/search" element={<SearchBooks updatebookstate={updatebookstate} allbooks={allbooks}/>}/> 
      </Routes>
    
  );
};

export default App;
