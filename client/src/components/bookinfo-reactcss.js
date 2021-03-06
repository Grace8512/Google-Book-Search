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
        </div>