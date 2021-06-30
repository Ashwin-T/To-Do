import ShowToDo from './ShowTodos';
import AddTodos from './AddTodos';
const TodoList = () => {
    return ( 
        <div className = 'todoList'>
            <div className="todoLabel">To Do List</div>
            <ShowToDo/> 
            <AddTodos/>
        </div>
    );
        
}
 
export default TodoList;