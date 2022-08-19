import Book from "../Book";

function currentlyReading (props) {
    return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {props.allbooks.filter(book => book.shelf ==="read").map(book =>  
                            <Book key={book.id} 
                            book={book} 
                            updatebookstate={props.updatebookstate} 
                            bookshielf="read"
                            />)}
                    </ol>
                </div>
            </div>
    )

};

export default currentlyReading;