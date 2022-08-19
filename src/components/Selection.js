function Selection(props) {
    
    const statevalue = (event)=>{
        props.statevalue(props.book, event.target.value);
    };
    
    return(
        <select value={props.bookshielf} onChange={statevalue}>
            <option disabled>
            Move to...
            </option>
            <option value="currentlyReading">
            Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
};

export default Selection;