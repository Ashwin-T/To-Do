import firebase from '../firebase';
import 'firebase/auth';
import logo from '../logo.PNG';


const SignIn = () => {
    const auth = firebase.auth();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <>
          <img className="flex wrap1 logoTodo" src = {logo} alt = 'logo'></img>
          <button className="sub" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
      )
}
 
export default SignIn;