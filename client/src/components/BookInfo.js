import React from 'react';
import axios from 'axios';
import './BookInfo.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

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
        <div id="cardId" style={{display:"flex", flexDirection: "row"}}>
        <Card style={{width:"23vw", height:"30rem",margin:"10px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <Card.Img variant="top" src={props.image} style={{paddingTop:"1rem",width: '8rem' }} />
            <Card.Body style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                <Card.Title>{"Title" + props.title}</Card.Title>
                <Card.Text style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
                    {props.description}
                    <ListGroupItem>{"Author: " + props.author}</ListGroupItem>
                </Card.Text> 
            <Button id="viewBtn" variant="link" onClick={props.onClickView}>View</Button>
                {props.infoType === "search" ? 
                <Button id="saveBtn" variant="link" disabled={saved} onClick={()=>saveBook()}>Save</Button> : 
                <Button id="deleteBtn" variant="link" onClick={()=>props.onClickDelete(props.id)}>Delete</Button>
                }
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>
        {/* <div class="bookInfo">
            <h5>Result</h5>
           <p id="title"><b>Title: </b>{props.title}</p>
           <p id="author"><b>Author: </b>{props.author}</p>
           <p id="desc">
               <b>Description: </b><br/>
                {props.description}
            </p>
            <b>Book Image: </b><br/>
            <img id="img" src={props.image}/><br/>
           <button id="viewBtn" onClick={props.onClickView}>View</button>
           {props.infoType === "search" ? 
                <button id="saveBtn" disabled={saved} onClick={()=>saveBook()}>Save</button> : 
                <button id="deleteBtn" onClick={()=>props.onClickDelete(props.id)}>Delete</button>
                }
            
        </div> */}
        </div>
    )
}


export default BookInfo;
