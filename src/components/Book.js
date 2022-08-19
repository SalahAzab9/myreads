import Selection from "./Selection";
import PropTypes from "prop-types";

function Book(props) {
        return(
            <li key={props.book.id}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                 width: 128,
                                height: 193,
                                backgroundImage:
                                `url(${props.book.imageLinks?.smallThumbnail})`,
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <Selection statevalue={props.updatebookstate} book={props.book} bookshielf={props.bookshielf}/>
                        </div>
                    </div>
                    <div className="book-title">{props.book.title}</div>
                    <div className="book-authors">{props.book.authors}</div>
                </div>
            </li>
        )
};

Book.propTypes ={
    book: PropTypes.object.isRequired,
    bookshielf: PropTypes.string.isRequired,
};

export default Book;