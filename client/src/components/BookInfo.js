import React from 'react';
import axios from 'axios';
import './BookInfo.css';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

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
        <div class="card mb-3" id="card" style={{"maxWidth" : "540px;" }}>
            <div class="row no-gutters">
                <div class="col-md-4">
                <img id="img" src={props.image} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text"><small class="text-muted">{props.author}</small></p>
                    <button id="viewBtn" variant="link" onClick={props.onClickView}>View</button>
                    {props.infoType === "search" ? 
                    <button id="saveBtn" variant="link" disabled={saved} onClick={()=>saveBook()}>Save</button> : 
                    <button id="deleteBtn" variant="link" onClick={()=>props.onClickDelete(props.id)}>Delete</button>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}


export default BookInfo;
