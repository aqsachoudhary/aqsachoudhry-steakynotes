import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';

import "../src/styles/Header.css";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((previousData) => {
      return {
        ...previousData,
        [name]: value,
        // [content]:value,
      };
    });
    console.log(`note`);
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const backtonormal = () => {
    setExpand(false);
  };
  return (
    <div>
      <div className="main_note" onDoubleClick={backtonormal}>
        <form>
          <div className="typecontainer">
            {expand ? (
              <input
                className="inputtilte"
                type="text"
                value={note.title}
                onChange={InputEvent}
                name="title"
                placeholder="title"
                autoComplete="off"
              />
            ) : null}
            <input
              className="inputfields"
              rows=""
              column=""
              value={note.content}
              onChange={InputEvent}
              name="content"
              placeholder="write your notes hear"
              onClick={expandIt}
            ></input>
            {expand ? (
              <Button
                style={{
                  display: "flex",
                  flexDirection: "colum",
                  width: "25.4%",
                  height: "20%",
                  backgroundColor: "white",
                }}
                onClick={() => {
                  addEvent();
                }}
              >
                <AddIcon className="icons" />
              </Button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateNote;
