import { useState } from "react";
import firebase from "../firebase";
import 'firebase/auth';

// const auth = firebase.auth()
// let user = auth.currentUser;

const getUserId = () =>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return(user.displayName);
    } else {
      // User is signed out
      // ...
    }
  });//need help
}
const idz = getUserId();


const db = firebase.firestore();


const AddTodos = () => {

    const collection = db.collection(`${idz}'s Todo`);
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (input !== "") {
            collection
            .add({
              message: input,
            })
            .then(() => {
              setInput("");
            });
        }
      };
    
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" className= 'textBox' value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button className="sub" value="Submit">
            Add
          </button>
        </form>
    );
}
 
export default AddTodos;