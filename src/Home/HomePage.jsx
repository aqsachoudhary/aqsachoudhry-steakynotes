import React,{useState} from 'react'

import Header from "../Header";
import Footer from "../Footer";
import CreateNote from '../CreateNote';
import Note from "../Note";
import DragElement from '../DragElement';

const HomePage=()=>{
    const [addItem,setAddItem]=useState([]);
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
        <div className="homepage">
      {/* <Header/>  */}
      <CreateNote passNote={addNote}/>
      {/* <DragElement/> */}
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
      
      </div>
      {/* <Footer/>      */}
      </div>
        </>
       
    )
}
export default HomePage;

