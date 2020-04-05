import React from "react";
import Axios from "axios";
import BookInfo from "./BookInfo";
const Saved = (props) =>{
    const [booksList, setBooksList] = React.useState([]);

    const getSaved = () => {
        Axios.get("/api/books")
        .then(
            (res) => {
                //console.log(res);
                const items = res.data.items.map((item)=>{return {
                    "id": item._id,
                    "title": item.title,
                    "author": item.authors,
                    "description": item.description,
                    "image": item.image,
                    "link": item.link
                }});
                console.log(items);
                setBooksList(items); 
            }   
        )};  

        const deleteBook = (id) => {
            Axios.delete("/api/books/" + id)
            .then(
                (res) => {
                    console.log(res);
                    getSaved();
                }
            );
        };

    return (
        <div>
        {booksList.map((item)=>
            <BookInfo 
                infoType="saved"
                onClickDelete={deleteBook}
                id={item.id}
                title={item.title} 
                image={item.image} 
                author={item.author} 
                description={item.description} 
                link={item.link}/>
            //bookinfo에서 props.뒤에오는 이름 괄호 안에 들어가는 이름은 위의 res안에 const에서 받는 데이터 이름
            )}
        </div>
    )
} 

export default Saved;