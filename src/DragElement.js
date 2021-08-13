import React,{useEffect,useState} from 'react'
import DeleteIcon from "@material-ui/icons/Delete";

import "./styles/Header.css";
import Note from "../src/Note";
import { makeStyles } from "@material-ui/core";
import CreateNote from "../src/CreateNote";
const useStyles = makeStyles({
  mydiv: {
    width: 530,
    height: 300,
    position: "absolute",
    zIndex: 9,
    backgroundColor: "f1f1f1",
    textAlign: "center",
    border: "1 solid #d3d3d3",
    resize: "both",
    overflow: "hidden",
    border: "1px solid black",
  },
  mydivheader: {
    padding: 0,
    cursor: "move",
    zIndex: 5,
    backgroundColor: "white",
    color: "black",
    overflow: "",
    display: "flex",
    justifyContent: "space-between",
  }})

export default function DragElement() {
  const classes = useStyles();
  const [addItem,setAddItem]=useState([]);

  useEffect(() => {
   //Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  }, [])
  const addNote =(note)=>{
    // alert("i am button")
    setAddItem((previousData)=>{
        return[...previousData,note]
    })
    console.log(`note`)
}
const onDelete=(id)=>{
    setAddItem((previousData)=>
    previousData.filter((cuurrdata,index)=>{
        return index !==id;
    })
    );
};
  return (
    <>
      <div className={classes.mydiv} id="mydiv">
  <div className={classes.mydivheader} id="mydivheader">Click here to move</div>
  {/* <p>Move</p>
  <p>this</p>
  <p>DIV</p> */}
  <CreateNote passNote={addNote}/>
  <div style={{display:"flex",flexDirection:"row"}}>
      {addItem.map((val,index)=>{
          return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
          />
      })}
      {/* <Footer/>      */}
      </div>
</div>
    </>
  )
}
// export default DragElement





