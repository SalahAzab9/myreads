import { Link } from "react-router-dom";
import CurrentlyReadingShielf from "./shelf/CurrentlyReading";
import WantToReadShielf from "./shelf/WantToRead";
import ReadShielf from "./shelf/Read";
import PropTypes from "prop-types";

function ListBooks (props) {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <CurrentlyReadingShielf allbooks={props.allbooks} updatebookstate={props.updatebookstate} />
                    <WantToReadShielf allbooks={props.allbooks} updatebookstate={props.updatebookstate}/>
                    <ReadShielf allbooks={props.allbooks} updatebookstate={props.updatebookstate}/>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
};

ListBooks.propTypes= {
    allbooks : PropTypes.array.isRequired,
    updatebookstate : PropTypes.func.isRequired,
};

export default ListBooks;