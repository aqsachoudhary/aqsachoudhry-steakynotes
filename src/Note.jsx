import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Draggable from "react-draggable"
import ClearIcon from '@material-ui/icons/Clear';
const Note = (props) => {
    const [cross,setCross]= useState(false);
  const deleteNote = () => { 

    props.deleteItem(props.id);
  };
  const crossIcon=()=>{
    setCross(true)
  }
  return (
    <>
    <Draggable>
      <div className="notess" >
          <div className="cross"><ClearIcon onClick={()=>{
              crossIcon()

          }}/></div>
          
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button
          onClick={() => {
            deleteNote();
          }}
        >
          <DeleteIcon className="deleteicons" />
        </button>
      </div>
    </Draggable>
    </>
  );
};
export default Note;
