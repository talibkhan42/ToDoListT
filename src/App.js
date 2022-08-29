import React, { useState } from "react";
import "./App.css"
export default function App() {
  const [Input, setInput] = useState("");
  const [Item, setItem] = useState([]);
  const [buttonText, setButtonText] = useState("Add");
  const [updateItemId, setupdateItemId] = useState(-1);

  const HandlerChangeInput = (e) => {
    setInput(e.target.value);
  };
  const HandlerAddItem = () => {
    if(updateItemId>=0){
        const data=[Item];
        data[0][updateItemId]=Input;
        setItem(data[0])
        setupdateItemId(-1);
        setButtonText("Add");
        setInput("");
    }else
    {
        if(!Input){
            alert(" oops please enter item")
          }else{
            setItem([...Item, Input]);
            setInput('')
          }
    }
  };

  const HandlerDeleteItem=(id)=>{
    console.log("delete")

  const UpdatedItem=Item.filter((ele,ind)=>{
    return ind !== id
  })
  setItem(UpdatedItem);

  }
  const HandlerEditItem=(id)=>{
    setButtonText("update");
    setupdateItemId(id);
    setInput(Item[id]);
    console.log(id);

  }

  const HandlerRemoveAllItem=()=>{
    setItem([]);
  }


  return (
    <>
    <div className="App-header">

      <div >
      <h1>To <span className="span"> Do </span>List</h1>
      <div >

        <input className="input"
          type="text"
          placeholder="enter any item"
          onChange={HandlerChangeInput}
          value={Input}
        ></input>
        <button className="add" onClick={HandlerAddItem}>{buttonText}</button>
      </div>
        
      </div>
      <ol>
        {Item.map((Element, index) => {
          return (
            <div key={index} >
            <div className="list">
              <li>{Element} <button className="delete" onClick={()=>{HandlerDeleteItem(index)}}>❎</button>
               <button className="edit" onClick={()=>{HandlerEditItem(index)}} >Edit</button></li>
              
            </div>
            <br></br>
            </div>
          );
        })}
        
      </ol>
      <button onClick={HandlerRemoveAllItem}>Remove All Items</button>
    </div>

    </>
  );
}