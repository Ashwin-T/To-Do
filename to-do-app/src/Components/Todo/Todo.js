import ShowToDo from './ShowTodos';
import AddTodos from './AddTodos';
import firebase from '../firebase';
import 'firebase/auth';
// import logo from '../logo.PNG';

const TodoList = () => {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const Name = user.displayName.split(' ')[0];

    return ( 
        <>
            {/* <img className="flex wrap1 logoTodo" src = {logo} alt = 'logo'></img> */}
            <div className = 'todoList'>
                <div className="todoLabel">{Name}'s To Do List</div>
                <ShowToDo/> 
                <AddTodos/>
                <button className = 'sub red' onClick={() => auth.signOut()}>SignOut</button>
            </div>
        </>
    );
        
}
 
export default TodoList;