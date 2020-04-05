import React from 'react';
import axios from 'axios';
const BookInfo = (props) => {

    const [saved, setSaved] = React.useState(false);

    const saveBook = () => {
        const data = {
            _id: props.id, 
            title: props.title, 
            authors: props.author, 
            description: props.description, 
            image: props.image, 
            link: props.link
        };
        console.log(data);
        axios.post("api/books", data).then((res)=>{
            console.log('res' + res);
            setSaved(true);
        }); 
    }     

    return (
        <div>
           <p>{props.title}</p>
           <p>{props.author}</p>
           <p>{props.description}</p>
           <img src={props.image}/>
           <button id="viewBtn" onClick={props.onClickView}>View</button>
           {props.infoType === "search" ? 
                <button id="saveBtn" disabled={saved} onClick={()=>saveBook()}>Save</button> : 
                    <button id="deleteBtn" onClick={()=>props.onClickDelete(props.id)}>Delete</button>
                }
        </div>
    )
}


export default BookInfo;
