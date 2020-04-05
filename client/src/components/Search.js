import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import BookInfo from './BookInfo';

const Search = (props) => {
    const [booksList, setBooksList] = React.useState([]);

    const getBooks = (searchTerm) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchTerm)
            .then(
                (res) => {
                    //console.log(res);
                    const items = res.data.items.map((item)=>{return {
                        "id": item.id,
                        "title": item.volumeInfo.title,
                        "author": item.volumeInfo.author,
                        "description": item.volumeInfo.description,
                        "image": item.volumeInfo.imageLinks.thumbnail,
                        "link": item.volumeInfo.previewLink
                    }});
                    console.log(items);
                    setBooksList(items);
                }
            );
    };
    
    return (
        <>
        <div>
           Book Search 
           <SearchBar handleSearch={getBooks}/>
        </div>
        <div>
            {booksList.map((item)=>
                <BookInfo 
                    infoType="search"
                    id={item.id}
                    title={item.title} 
                    image={item.image} 
                    author={item.author} 
                    description={item.description} 
                    link={item.link}/>
                //bookinfo에서 props.뒤에오는 이름 괄호 안에 들어가는 이름은 위의 res안에 const에서 받는 데이터 이름
            )}
        </div>
        </>
    )
}

export default Search;