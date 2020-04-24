import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [text, setText] = React.useState("");
    const handleOnClick = (e) => {
        e.preventDefault();
        console.log("text val " + text);
        props.handleSearch(text);
    }
    return (
            <form onSubmit={handleOnClick} >
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button>Search</button>
            </form>
    )
}

export default SearchBar;