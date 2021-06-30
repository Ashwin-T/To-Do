import { useEffect, useState } from "react";
import firebase from "../firebase";
import 'firebase/auth';

const auth = firebase.auth()
const user = auth.currentUser;


const db = firebase.firestore();

const ShowToDo = (props) => {
  
    const idz = props.id;
    
    const [item, setItem] = useState([]);

    const handleDelete = (id) =>{
      db.collection(`${idz}'s Todo`).doc(`${id}`).delete();
    } 

    useEffect(() => {

    db.collection(`${idz}'s Todo`)
      .onSnapshot((querySnapshot) => {
        setItem(querySnapshot.docs);
      });
  }, []);


  return (
    <div>
      <ul>
        {item.map((ques) => (
          <li key = {ques.id} className = 'todoText'>
              {ques.data().message}
              <button className = 'cancel' onClick={() => handleDelete(ques.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowToDo;
