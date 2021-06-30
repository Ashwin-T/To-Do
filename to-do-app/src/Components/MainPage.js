import Todo from './Todo/Todo.js';
import SignIn from './Login/SignIn.js';
import firebase from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const MainPage = () => {

    const auth = firebase.auth();  
    const [user] = useAuthState(auth);
    

    return ( 
        <div>
            {user ? <><Todo /></> : <><SignIn /></>}
        </div>
     )
}
 
export default MainPage;