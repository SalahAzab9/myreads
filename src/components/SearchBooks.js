import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksApi from "../BooksAPI";
import { useState } from "react";
import PropTypes from "prop-types";

function SearchBooks(props){

    const [books, setbooks] = useState([]);
    const [inputvalue, setinputvalue] = useState("");
    

    const searchbooks = (event) =>{
        setinputvalue(event.target.value);
        const search = async () =>{
          try{
            if(event.target.value.trim() !== ""){
            const res = await BooksApi.search(event.target.value.trim());
              if(res.error){
                setbooks([]);
              }else{
                setbooks(res);
              }
            }else{
              setbooks([]);
            }
          }
          catch(e){
            console.log("error");
          }
        }
        search();
      };


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                    to="/"
                    className="close-search"
                    >
                    Close
                    </Link>
                    <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={inputvalue}
                        placeholder="Search by title, author, or ISBN"
                        onChange={searchbooks}
                    />
                    </div>
                </div>    
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.filter(book => book.imageLinks?.smallThumbnail).map(book => {
                          let bookshielf = "none";
                          for(let i = 0 ; i < props.allbooks.length ; i++){
                            if(book.id === props.allbooks[i].id){
                              bookshielf = props.allbooks[i].shelf;
                            }
                          }
                            return(
                                <Book key={book.id} book={book} updatebookstate={props.updatebookstate} bookshielf={bookshielf}/>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
};

SearchBooks.propTypes= {
  allbooks : PropTypes.array.isRequired,
  updatebookstate : PropTypes.func.isRequired,
};

export default SearchBooks;