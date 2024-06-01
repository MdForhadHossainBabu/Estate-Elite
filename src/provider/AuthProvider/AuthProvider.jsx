import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import auth from './../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
 
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true)

 // social provider 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

 // create user 
 const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
 }
 const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
 }


 // login with google 
 const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
}

 // login with git hub 
 const githubLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, githubProvider)
 }

 // logout 
 const logOut = () => {
  setLoading(true);
  return signOut(auth)
 }

 // observer
 useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, currentUser => {
   setUser(currentUser);
   console.log('current user ==>>', currentUser);
   setLoading(false)
  })
  return () => unSubscribe()
 },[])


 // auth value 
 const authInfo = {
   user,
   loading,
   createUser,
   signIn,
   googleLogin,
   githubLogin,
   logOut,
 };
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;