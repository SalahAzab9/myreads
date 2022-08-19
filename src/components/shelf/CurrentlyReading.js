import Book from "../Book";

function currentlyReading (props) {
    return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.allbooks.filter(book => book.shelf ==="currentlyReading").map(book =>  
                            <Book key={book.id} 
                            book={book} 
                            updatebookstate={props.updatebookstate} 
                            bookshielf="currentlyReading"
                            />)}
                    </ol>
                </div>
            </div>
    )

};

export default currentlyReading;