import Book from "../Book";

function currentlyReading (props) {
    return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {props.allbooks.filter(book => book.shelf ==="wantToRead").map(book =>  
                            <Book key={book.id} 
                            book={book} 
                            updatebookstate={props.updatebookstate} 
                            bookshielf="wantToRead"
                            />)}
                    </ol>
                </div>
             </div>
    )

};

export default currentlyReading;